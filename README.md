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

MONGODB : embedding and denormalizing RDBMS : normalization (creating a new table and refer it in column)

MONGOOSE is Object Data Modelling library for mongodb and nodejs

Schema >> Model

QueryString : starts with ?

Filtering, Sorting :?sort=-price(sort desc on price), Limiting Fields (use query.select()) and how to exclude (use "-fields") or we can provide select : false in our model.
Pagination : query.skip(2).limit(10) --> show results from 21
countDocuments() : gives the count of documents
Aliasing

Aggregation pipelines : Matching, Unwind, Projection

Virtual Properties: saved to schema but will not be persisted or save in database. Used to do computational parts with documents.

Document Middleware: runs before .save() and .create() --> this refers to the document here

Pre and Post middleware functions.

Query Middleware : runs before or after query executed. this refers to the query here

Pre and post middleware functions

Aggregation Middleware: runs before or after the aggregations

Validators : Built In validator and custom validators
