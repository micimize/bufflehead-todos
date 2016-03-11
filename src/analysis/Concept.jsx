import React from 'react'
import './concept.scss'

function percent(v){
    return (v * 100).toFixed(1) + '%'
}

function idToWiki(id){
    return id ? `http://en.wikipedia.org/wiki/${id.split(/\//).pop()}` : '#'
}

export default function Concept({label, score, watsonId, className=''}) {
    return (
        <div className={`concept ${className}`}>
            <a href={ idToWiki(watsonId) } target="_blank" className="btn btn-default">
                { label }
                <span className="score badge right">{ percent(score) }</span>
            </a>
        </div>
    )
}
