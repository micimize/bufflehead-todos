import React from 'react'
import { Route } from 'react-router'
import { Root    } from '../root'
import { Categories   } from '../categories/client'
import { Profiles     } from '../profiles/client'
import Login, { requireAuth } from './Login.jsx'

export default (
    <Route path="/" component={Root}>
        <Route path="categories" component={Categories} onEnter={requireAuth} />
        <Route path="profiles" component={Profiles} onEnter={requireAuth} />
        <Route path="login" component={Login} />
    </Route>
)

