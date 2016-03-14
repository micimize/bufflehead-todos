import DomainDrivenFullStackApplication from 'bufflehead'
import todos from './todos'

const app = new DomainDrivenFullStackApplication({
    Domains: {todos}
})

app()
