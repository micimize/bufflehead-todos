import React from 'react'
import './nav.scss'
import { db        } from '../db'

let s = {
    nav:  {
        className: "navbar navbar-default"
    },
    profile: {
        className: "nav navbar-nav navbar-right",
        style: {padding: 15}
    },
    logout: {
        className: "btn btn-xs btn-warning"
    } 
}

export default function Nav({fullName}) {
    return (
        <nav {...s.nav}>
            <div className="container">
                <a className="navbar-brand" href="/"> Soil </a>
                <ul className="nav navbar-nav navbar-left">
                    <li><a href="/categories">Categories</a></li>
                    <li><a href="/profiles">Profiles</a></li>
                </ul>
                {/*<ul {...s.profile}>
                    <li>
                        <button {...s.logout} onClick={db.logout}>logout</button>
                    </li>
                </ul>*/}
            </div>
        </nav>
    )
}
