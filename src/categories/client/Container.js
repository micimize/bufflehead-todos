import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Categories from './Categories.jsx'
import domain from './domain.js'

export default connect(
    state => ({categories: state.categories}),
    dispatch => ({
        actions: bindActionCreators(domain.actions, dispatch)
    })
)(Categories)

