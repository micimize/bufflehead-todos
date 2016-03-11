import t from 'tcomb'
import { Domain, createAction, createReducer } from 'reactuate'

function addActionToDomain(domain, { action, reducer }){
    let {type, payload} = action
    let act = createAction(domain, type, payload)
    return [act, reducer]
}

export function BuildDomain({name, initialState=[], dataFlows=[], ...rest}){
    const domain = new Domain(name)
    const reducerCases = dataFlows
        .map( dataFlow => addActionToDomain(domain, dataFlow))
        .reduce( (cases, reducerCase) => [...cases, ...reducerCase] , [])
    createReducer(domain, initialState, ...reducerCases)
    Object.keys(rest).map(k => domain[k] = rest[k])
    return domain
}

