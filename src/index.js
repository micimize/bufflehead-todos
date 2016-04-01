import 'babel-polyfill'
const bufflehead = (
    $ES.CONTEXT == 'NODE' ?
        require('bufflehead/dist/for/node') :
        require('bufflehead/dist/for/browser')
)


if ($ES.CONTEXT == 'BROWSER')
    require('todomvc-app-css/index.css');

import todos from './todos'

const settings = bufflehead.settings({
    "db": {
        "name": "todos",
        "uri": "http://127.0.0.1:5984",
        "credentials": {
            "admin":{
                "name": "server",
                "password": "server"
            }/*,
            "users": [{
                "name": "client",
                "password": "client"
            }]*/
        }
    }
})

const app = new bufflehead.default({
    title: 'Domain Driven Bufflehead Todos',
    domains: { todos, settings }
})

app.main()
