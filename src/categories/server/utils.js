import xlsx from 'xlsx'
import t from 'tcomb'
import { enrichObjWithConcepts } from '../../analysis/watson'
import { Category, serialize } from '../shared'
import { db } from '../../db'

function excelToSheetObj(fileData){
    const workbook = xlsx.read(fileData);
    return workbook.SheetNames.reduce( function(result,name){
        result[name] = xlsx.utils.sheet_to_json(workbook.Sheets[name]);
        return result
    }, {})
}

function translateObjKeys(data, schema){
    return Object.keys(data).reduce(function(res, key){
        if(key !== undefined && schema[key] !== undefined)
            res[schema[key] || key] = data[key];
        return res
    },{})
}


function overwriteDoc(doc){
    let serialized = serialize(doc)
    db.get(serialized._id)
        .then(old => db.put({...serialized, _rev: old._rev}).catch(err => { console.log(err, old._rev) }))
        .catch(err => {
            db.put(serialized)
                .catch(err => { console.log(err.status, `${serialized._id} failed to upsert`) }) })
}

export function importCategoriesFromXls(fileData){
    const sheetNames = {
        'Labor Categories': 'laborCategories',
        'Level Descriptions': 'categoryLevels'
    }
    const fieldNames = {
        'GOVERNMENT LABOR\nCATEGORY': 'title',
        'CONTRACTOR DESCRIPTION': 'description',
        'Levels': 'levels',
        undefined: undefined
    }
    translateObjKeys(
        excelToSheetObj(fileData), sheetNames).laborCategories.map(
        cat => translateObjKeys( cat, fieldNames)
    ).map(
        cat => enrichObjWithConcepts(cat, 'description').then(overwriteDoc)
    )
}
