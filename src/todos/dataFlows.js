export const filters = {
    SHOW_ALL: 'show_all',
    SHOW_COMPLETED: 'show_completed',
    SHOW_ACTIVE: 'show_active'
}

export default {
    ADD_TODO(state, payload){
        return [
            {
                _id: (state.reduce((maxId, todo) => Math.max(parseInt(todo._id), maxId), -1) + 1).toString(),
                completed: false,
                ...payload
            }, 
            ...state
        ]
    },
    DELETE_TODO(state, payload){
        return state.filter(todo => todo._id !== payload._id)
    },
    EDIT_TODO(state, payload){
        return state.map(
            todo => todo._id === payload._id ?
                 Object.assign({}, todo, payload) :
                 todo
        )
    },
    COMPLETE_TODO(state, payload){
        return state.map(
            todo => todo._id === payload._id ?
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
