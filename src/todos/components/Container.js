import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Todos from './Todos'

export default function domainDrivenReduxContainer(domain){
    return connect(
        state => ({todos: state.todos}),
        dispatch => ({
            actions: bindActionCreators(domain.actions, dispatch)
        })
    )(Todos)
}
