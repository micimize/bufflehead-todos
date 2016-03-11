import { Profile, serialize } from '../shared.js'
import { BuildDomain } from '../../presume.js'
import { utils } from '../../db'

export default BuildDomain({
    name: 'profiles',
    dbPrefix: 'profile',
    types: { Profile },
    initialState: [],
    dataFlows: utils.defaultDataFlows({Type: Profile, serialize})
})

