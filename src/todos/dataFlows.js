export const filters = {
    SHOW_ALL: 'show_all',
    SHOW_COMPLETED: 'show_completed',
    SHOW_ACTIVE: 'show_active'
}

export default {
    ADD_TODO(state, payload){
        return [
            {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: payload.text
            }, 
            ...state
        ]
    },
    DELETE_TODO(state, payload){
        return state.filter(todo => todo.id !== payload.id)
    },
    EDIT_TODO(state, payload){
        return state.map(
            todo => todo.id === payload.id ?
                 Object.assign({}, todo, { text: payload.text }) :
                 todo
        )
    },
    COMPLETE_TODO(state, payload){
        return state.map(
            todo => todo.id === payload.id ?
                Object.assign({}, todo, { completed: !todo.completed }) :
                todo
        )
    },
    COMPLETE_ALL(state, payload){
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => Object.assign({}, todo, {
            completed: !areAllMarked
        }))
    },
    CLEAR_COMPLETED(state, payload){
        return state.filter(todo => todo.completed === false)
    }
}
