import React from 'react'
import { Concept } from '../../analysis'
import Form from './Form.jsx'

export default class Profile extends React.Component {
    state = { editing: false }
    editFormWrapper = jsx => {
        let {actions: {update, remove}, ...profile} = this.props
        return this.state.editing ?
            <div className="col-xs-12 profile">
                <Form commit={update} remove={remove} hide={_=>this.setState({editing: false})} value={profile} />
            </div> : jsx
    }
    render = _ => {
        let {fullName, title, summary, summary_concepts=[]} = this.props
        return this.editFormWrapper(
            <div className="profile">
                <a className="add-btn" onClick={_ => this.setState({editing: true})}>edit</a>
                <h4>{fullName} <small> {title} </small> </h4>
                <div className="summary">
                    <p>{summary}</p>
                    <div>
                        { summary_concepts && Object.values(
                                summary_concepts.reduce((obj, c) => {
                                    obj[c.label] = c;
                                    return obj
                                }, {})
                            ).map(c => (<Concept className="tag" key={c.label} {...c}/>)) }
                    </div>
                </div>
            </div>
        )
    }
}

