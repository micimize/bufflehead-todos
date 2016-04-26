import 'babel-polyfill'
import DomainDrivenFullstackApplication, * as bufflehead from 'polypack!bufflehead'

if ($ES.CONTEXT == 'BROWSER')
    require('todomvc-app-css/index.css');

import todos from './todos'

const settings = bufflehead.settings({
    "db": {
        "name": "todos",
        "uri": "http://127.0.0.1:5984",
        "credentials": {
            "admin": {
                "name": "server",
                "password": "server"
            }
        }
    }
})

const app = new DomainDrivenFullstackApplication({
    title: 'Bufflehead • TodoMVC',
    domains: { todos, settings }
})

app.main()
