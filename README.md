# Blockbuster Api

## Movie movie finder


Project carried out for GeeksHubs Academy, in which the API of a video store with home delivery of movies is requested.


## BASIC COMMANDS

```
npm init
npm install
npm update
npm run dev
npm run start

npm install cors jsonwebtoken bcrypt
sequelize model:generate --name user --attributes name:string, password:string, email:string
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all
```

## END-POINTS

#### Home
GET - localhost:3000

#### MOVIES
GET - localhost:3000/movies/allMovies
GET - localhost:3000/movies/id/:id
GET - localhost:3000/movies/byTitle/:title
GET - localhost:3000/movies/topRated
GET - localhost:3000/movies/genre/:genre
GET - localhost:3000/movies/inTheters

#### SERIES
GET - localhost:3000/series/allSeries
GET - localhost:3000/series/id/:id
GET - localhost:3000/series/byTitle/:title
GET - localhost:3000/series/rating
GET - localhost:3000/series/byNewEpisode


#### USERS
#### Register
POST - localhost:3000/user/signUp - { "name": "root", "email": "root@email.com",  "password": "password" }

#### Login
POST - localhost:3000/user/signIn - { "email": "root@email.com",  "password": "password" }

GET - localhost:3000/user/allUsers
GET - localhost:3000/user/userId/:id
PATCH - localhost:3000/user/updateUser
DELETE - localhost:3000/user/deleteUsers
```


### Directory & file structures of the proyect
```
BUSCADOR-DE-PELICULAS
└───config
│   │  config.json
│   │
└───db
│   │  db.js
│   │
└───migrations
│   │
│   a 20221104092701-create-articles.js
│   b 20221104092813-create-movies.js
│   c 20221104093021-create-series.js
│   d 20221104092404-create-role.js
│   e 20221104092510-create-user.js
│   f 20221104092657-create-rental.js
│   │
└───models
│   │
│   articles.js
│   index.js
│   movies.js
│   rental.js
│   rol.js
│   series.js
│   user.js
│   │
└───node_modules
│   │
└───seeders
│   │
└───views
│   │
└───.env
│   │
└───.gitignore
│   │
└───index.js
│   │
└───package.lock.json
│   │
└───package.json
│   │
└───router.js

```
## Tecnologies

- JavaScript
- Sequelize
- MySQL
- NodeJS
- ExpressJS



