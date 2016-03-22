export DomainDrivenClient from 'domain-driven-redux-react'
import todos from './todos'

const app = new DomainDrivenClient({
    title: 'Domain Driven Bufflehead Todos',
    domains: {todos}
})

app.provide()
