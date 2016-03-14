export const filters = {
    SHOW_ALL: 'show_all',
    SHOW_COMPLETED: 'show_completed',
    SHOW_ACTIVE: 'show_active'
}

export default {
    ADD_TODO(store, payload){
        return [
            {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: action.text
            }, 
            ...state
        ]
    },
    DELETE_TODO(store, payload){
        return state.filter(todo => todo.id !== action.id)
    },
    EDIT_TODO(store, payload){
        return state.map(
            todo => todo.id === action.id ?
                 Object.assign({}, todo, { text: action.text }) :
                 todo
        )
    },
    COMPLETE_TODO(store, payload){
        return state.map(
            todo => todo.id === action.id ?
                Object.assign({}, todo, { completed: !todo.completed }) :
                todo
        )
    },
    COMPLETE_ALL(store, payload){
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => Object.assign({}, todo, {
            completed: !areAllMarked
        }))
    },
    CLEAR_COMPLETED(store, payload){
        return state.filter(todo => todo.completed === false)
    }
}
