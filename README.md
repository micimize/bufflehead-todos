# bufflehead-todos
example bufflehead app

To run locally:  
    \* [install couchdb](https://wiki.apache.org/couchdb/Installation) (`brew install couchdb` if you have [homebrew](http://brew.sh/))  
    \* run `couchdb` in a terminal pane   
    \* `npm install -g add-cors-to-couchdb; add-cors-to-couchdb`
    \* `npm install; npm run start`  
    \* go to `localhost:3000`  

To run with docker (I recommend [dinghy](https://github.com/codekitchen/dinghy) on OSX):
    * change `src/index.js#settings.db.uri` to your docker host ip
    * `docker compose up`
    * go to `$docker-host-ip:3000`

