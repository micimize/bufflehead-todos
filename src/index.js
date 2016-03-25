const DomainDrivenFullStackApplication = (
    $ES.CONTEXT == 'NODE' ?
        require('bufflehead/node') :
        require('bufflehead/browser')
).default

if ($ES.CONTEXT == 'BROWSER')
    require('todomvc-app-css/index.css');

import todos from './todos'


const app = new DomainDrivenFullStackApplication({
    title: 'Domain Driven Bufflehead Todos',
    domains: {todos}
})

app.main()
