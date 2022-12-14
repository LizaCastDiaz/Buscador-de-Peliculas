# Blockbuster Api

## Movie movie finder
Project carried out for GeeksHubs Academy, in which the API of a video store with home delivery of movies is requested.


## BASIC COMMANDS:

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

## END-POINTS:

#### Login
```
POST - localhost:3000/auth/logIn - { "email": "root@email.com",  "password": "password","RoleIdRole: "Admin" }

```
#### Register
```
POST - localhost:3000/auth/register - { "name", "surname", email": "root@email.com",  "password": "password", "RoleIdRole: ""RoleIdRole: "Admin"}

```

#### Home
```
GET - localhost:3000

```

#### MOVIES
```
GET - localhost:3000/movies/allMovies
GET - localhost:3000/movies/id/:id
GET - localhost:3000/movies/byTitle/:title
GET - localhost:3000/movies/topRated
GET - localhost:3000/movies/genre/:genre
GET - localhost:3000/movies/inTheters

```

#### SERIES
```
GET - localhost:3000/series/allSeries
GET - localhost:3000/series/id/:id
GET - localhost:3000/series/byTitle/:title
GET - localhost:3000/series/rating
GET - localhost:3000/series/byNewEpisode

```

#### USERS
```
GET - localhost:3000/user/allUsers 
GET - localhost:3000/user/userid/:id 
POST - localhost:3000/auth/register
POST - localhost:3000/auth/login
PATCH - localhost:3000/user/updateUser/:email (Admin only)
DELETE - localhost:3000/user/deleteUsers/:email (Admin Only)

```

#### RENTAL
```
GET - localhost:3000//rental/rentals/getAll  (Admin only)
GET - localhost:3000/rental/rentals/:email  (Admin only)

POST - localhost:3000/rentals/newRental  
└───body: {"email", "id_articles", "id_user"}

PUT - localhost:3000/update/:id_order
└───body: {"id_rental", "email", "return_date", "rental_date","id_user", "id_articles" }

```

### Directory & file structures of the proyect:
```
BUSCADOR-DE-PELICULAS
└───config
│   │  auth.js
│   │  config.js
│   │  config.json
│   │  wiston.js
│   │
└───controllers
│   │  AuthControllers.js
│   │  moviesControllers.js
│   │  rentalsControllers.js
│   │  seriesControllers.js
│   │  userControllers.js
└───db
│   │  db.js
└──logs
│   │  log-file.log
│   │
└───middlewares
│   │ middlewaresAuth.js 
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

## Used tecnologies:

```
* JavaScript: (https://developer.mozilla.org/es/docs/Web/JavaScript) 
* Sequelize:(https://sequelize.org/) 
* MySQL: (https://www.mysql.com/) 
* NodeJS: (https://nodejs.org/es/)
* ExpressJS: (https://expressjs.com/)

```

