import React from 'react'
import { BaseProfile, Profile } from '../shared'
import t from 'tcomb-form'
import equal from 'deep-equal'


const options = {
    config: {
        horizontal: {
            md: [2, 10],
            sm: [2, 10]
        },
    },
    fields: {
        id: {
            type: 'hidden',
        },
        fullName: {
            attrs: {
                placeholder: 'Full Name'
            }
        },
        title: {
            attrs: {
                placeholder: 'Job Title'
            },
        },
        summary: { 
            type: 'textarea',
            attrs: {
                placeholder: 'Professional Summary',
            },
        },
        summary_concepts: { 
            factory: t.form.Textbox,
            type: 'hidden',
        }
    }
}

export default class Form extends React.Component {

    state = { value: this.props.value, deleting: false }

    componentWillReceiveProps = ({value}) => {
        if(!equal(value, this.state.value))
            this.setState({value: value});
    }

    onSubmit = event => {
        let {value, hide} = this.props
        event.preventDefault()
        const formValue = this.refs.form.getValue()
        if (formValue) {
            this.props.commit( Profile(Object.assign({}, value, formValue)) )
            hide()
        }
    }

    onChange = value => this.setState({value: value})

    render(){
        let isDeleting = bool => this.setState({deleting: bool})
        let { value, deleting } = this.state
        let { hide, remove } = this.props
        return (
            <form onSubmit={this.onSubmit} className="form-horizontal">
                <t.form.Form ref="form" type={BaseProfile} options={options} value={value}
                    onChange={this.onChange}
                />
                { deleting && remove ? 
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">Are you sure you want to delete this Profile?</div>
                        <div className="btn-group btn-group-justified" >
                            <a onClick={_ => remove(value)} className="btn btn-danger"> Yes, Delete </a>
                            <a onClick={_ => isDeleting(false)} className="btn btn-default"> Cancel </a>
                        </div>
                    </div> :
                    <div className="form-group">
                        <div className="btn-group pull-right" >
                            <button type="submit" className="btn btn-primary">Save</button>
                            <a onClick={hide} className="btn btn-warning">cancel</a>
                            { remove && <a onClick={_ => isDeleting(true)} className="btn btn-danger">delete</a> }
                        </div>
                    </div> }
            </form>
        )
    }
}
