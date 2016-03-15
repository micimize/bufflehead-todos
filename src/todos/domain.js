import dataFlows from './dataFlows'
import Todos from './components'
import { Domain } from 'bufflehead'

export default new Domain({
    name: 'todos',
    container: Todos,
    dataFlows: dataFlows
})
