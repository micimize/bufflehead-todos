import babelPolyfill from "babel-polyfill"
import devApp from 'reactuate/webpack-dev-server';
import DDApplication from 'express-domain-driver';
import categories from './categories/server';
import { initDbUsers } from './db/server'
import { db } from './settings.json'

initDbUsers(db.credentials)

const app = DDApplication({app: devApp, domains: {categories: categories}})

var port = 80
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
