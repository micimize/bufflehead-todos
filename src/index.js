import DomainDrivenFullStackApplication from 'bufflehead'
import todos from './todos'

const app = new DomainDrivenFullStackApplication({
    title: 'Domain Driven Bufflehead Todos',
    domains: {todos}
})

app.main()
