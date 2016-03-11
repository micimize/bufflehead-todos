import React from 'react'
import { Concept } from '../../analysis'

export default class Category extends React.Component {
    render(){
        let {title, description, description_concepts=[]} = this.props
        return (
            <div className="category">
                <h4>{title}</h4>
                <div className="description">
                    <p>{description}</p>
                    <div>
                        {
                            Object.values(
                                description_concepts.reduce((obj, c) => {
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
