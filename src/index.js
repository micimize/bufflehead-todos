const DomainDrivenFullStackApplication = (
    $ES.CONTEXT == 'NODE' ?
        require('bufflehead/node') :
        require('bufflehead/browser')
).default

import todos from './todos'

const app = new DomainDrivenFullStackApplication({
    title: 'Domain Driven Bufflehead Todos',
    domains: {todos}
})

app.main()
