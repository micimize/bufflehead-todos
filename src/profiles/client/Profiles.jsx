import React from 'react'
import Profile from './Profile.jsx'
import Form from './Form.jsx'
import './profiles.scss'

export default class Profiles extends React.Component {

    state = { adding: false }

    insert = (...args) => {
        this.setState({adding: false});
        return this.props.actions.insert(...args)
    }

    render(){
        let {actions, profiles} = this.props
        return (
            <div className="profiles">
                <div className="col-xs-12">
                    <h1 className="col-xs-6">Profiles</h1>
                    {this.state.adding ?
                        <div className="col-xs-12 profile">
                            <Form commit={this.insert} hide={_=>this.setState({adding: false})}
                                value={{id: profiles.reduce((max,p) => (p.id > max ? p.id : max), 0)+1}} />
                        </div> :
                        <button className="add-btn btn btn-primary" onClick={_ => this.setState({adding: true})}>Add new Profile</button>
                    }
                </div>
                <div className="col-xs-12">
                    {profiles.map(c => (
                        <div key={c._id} className="col-xs-12">
                            <Profile {...c} actions={actions}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
