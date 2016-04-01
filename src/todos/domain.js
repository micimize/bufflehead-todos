import dataFlows from './dataFlows'
import Todos from './components'
const Domain = ($ES.CONTEXT == 'NODE' ? require('bufflehead/dist/for/node') : require('bufflehead/dist/for/browser')).Domain

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
