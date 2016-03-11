import watson from 'watson-developer-cloud'
import settings from '../settings.json'

const concept_insights = watson.concept_insights({
    username: settings.watson.username,
    password: settings.watson.password,
    version: 'v2'
});

function annotateText({ graph, text }){
    return new Promise((resolve, reject) => {
        concept_insights.graphs.annotateText({ graph, text }, (err, response) =>{
            if(err){
                reject(err)
            } else {
                resolve(response.annotations)
            }
        })
    })
}

async function getWatsonConcepts({ text, graph = '/graphs/wikipedia/en-20120601' }){
    try {
        let response = await annotateText({ graph, text })
        return response.map(c => {
            let {concept: {id, label}, ...rest} = c 
            return { label, watsonId: id, ...rest}
        })
    } catch (err) {
        console.log(err)
        return []
    }
}

export async function enrichObjWithConcepts(obj, key){
    obj[`${key}_concepts`] = await getWatsonConcepts({text: obj[key]})
    return obj
}

export async function enrichObjWithAllConcepts(obj){
    return Object.keys(obj).reduce(
        async (res, key) => (await enrichObjWithConcepts(res, key)),
        obj
    )
}

