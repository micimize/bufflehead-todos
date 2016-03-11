import React from 'react'
import t from 'tcomb-form'
import { db        } from '../db'

const User = t.struct({
    name: t.String,
    password: t.String
})

const options = {
    fields: {
        password: {
            type: 'password',
        }
    }
}

export function requireAuth(nextState, replace, callback) {
    let redirect = _ => {
        replace({ nextPathname: nextState.location.pathname }, '/login')
        callback()
    }
    db.getSession( (err, response) => {
        if (err) {
            console.log(err)
            redirect()
        } else if (!response.userCtx.name) {
            redirect()
        } else {
            callback()
        }
    });
}

export default class Login extends React.Component {

    static contextTypes: {
        history: React.PropTypes.object.isRequired
    }

    static defaultProps = {
        auth: db
    }
    onSubmit = event => {
        event.preventDefault()

        const {name, password} = this.refs.form.getValue()

        this.props.auth.login(name, password, (err, response) => {
            if (err){
                if (err.name === 'unauthorized') {
                    console.log('unauthorized')
                } else {
                    console.log('error logging on ', err)
                }
                return;
            }

            let history = this.context.history || this.props.history
            try {
                const nextPathname = this.props.location.state.nextPathname
                history.replace( nextPathname );
            } catch (err){ // no location or something
                history.replace( '/' );
            }
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit} >
                <t.form.Form ref="form" type={User} options={options} />
                <div className="form-group">
                    <div className="btn-group pull-right" >
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        )
    }
}
