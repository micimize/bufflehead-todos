import dataFlows from './dataFlows'
import Todos from './components'
import { Domain } from 'polypack!bufflehead'

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
