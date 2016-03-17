import DomainDrivenFullStackApplication, { Domain } from 'bufflehead'
import todos from './todos'

const app = new DomainDrivenFullStackApplication({
    domains: new Domain({todos})
})

app.main()
