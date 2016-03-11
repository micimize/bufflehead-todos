import React from 'react'
import Category from './Category.jsx'
import Import from './Import.jsx'
import { Category as Cat } from '../shared'
import './categories.scss'

export default class Categories extends React.Component {
    render(){
        let {actions: {insert, remove, update}, categories} = this.props
        return (
            <div className="categories">
                <div className="col-xs-12">
                    <h1  className="col-xs-6">Categories</h1>
                    <Import insert={insert}/>
                </div>
                <ul>
                    {categories.map(c => (<Category key={c._id} {...c}/>))}
                </ul>
            </div>
        )
    }
}
