require('babel-polyfill')
import t from 'tcomb'
import { Application } from 'reactuate'

import { routes } from './nav'
import categories from './categories/client'
import profiles from './profiles/client'
import { storeMiddlewareGenerator } from './db'

new Application({
    routes,
    domains: {categories, profiles},
    middlewareGenerators: [storeMiddlewareGenerator]
}).render()

