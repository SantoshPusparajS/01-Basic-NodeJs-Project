<!-- Contact Manager App -->

# Dependencies to Install as part of project

npm init : used to initialise the package.json
npm install : to install node_modules
npm i express : Install the express
npm i -D nodemon : Install nodemon as dev dependency
npm i dotenv : used to provide the value for env files

# Change the scripts in the package.json to use nodemon and server.js

Learn the difference between stateful and stateless APIs

JSON.stringify() : used to convert JS objects to JSON strings
JSON.parse() : used to convert JSON strings to JS objects

What is middleware ? and its uses ?

req.params : used to get the value of parameters defined in the request parameter
/api/v1/tours/:id/:x/:y? --> y is optional parameter and it will be undefined if not declared

difference between put and patch method

Middleware: Order is important in middleware and next() is used to move to next middleware
app.use()

morgan : third party middleware

param middleware

app.use(express.static()) : used to serve static files. Provide the image folder as args.
