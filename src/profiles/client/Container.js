import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Profiles from './Profiles.jsx'
import domain from './domain.js'

export default connect(
    state => ({profiles: state.profiles}),
    dispatch => ({
        actions: bindActionCreators(domain.actions, dispatch)
    })
)(Profiles)

