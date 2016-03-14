import dataFlows from './dataFlows'
import Todos from './components'

export default new ReduxReactDomain({
    name: 'todos',
    container: Todos,
    dataFlows: dataFlows
})
