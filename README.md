# bufflehead-todos
example bufflehead app

To run locally:
    * install and run couchdb with cors enabled
    * `npm run start`
    * go to `localhost:3000`

To run with docker:
    * change `src/index.js#settings.db.uri` to your docker host ip
    * `docker compose up`
    * go to `$docker-host-ip:3000`

