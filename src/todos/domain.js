import dataFlows from './dataFlows'
import Todos from './components'
const Domain = ($ES.CONTEXT == 'NODE' ? require('bufflehead/node') : require('bufflehead/browser')).Domain

export default new Domain({
    name: 'todos',
    route: {
        path: '/',
        component: Todos
    },
    pouchActionMap: {
        insert: 'addTodo',
        update: 'editTodo',
        remove: 'deleteTodo'
    },
    dataFlows: dataFlows
})
