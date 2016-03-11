import { Category, serialize } from '../shared.js'
import { BuildDomain } from '../../presume.js'
import { utils } from '../../db'

export default BuildDomain({
    name: 'categories',
    dbPrefix: 'category',
    types: {Category},
    initialState: [],
    dataFlows: utils.defaultDataFlows({Type: Category, serialize})
})

