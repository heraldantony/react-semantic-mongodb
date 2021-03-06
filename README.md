# react-semantic-mongodb
A non-trivial app using react, redux, redux-form, redux-saga, semantic ui, node, express, and mongodb, that does CRUD with one-to-one, one-to-many, many-to-many relationships between entities.

## Suicrux
https://github.com/Metnew/suicrux

## Semantic UI
https://github.com/Semantic-Org/Semantic-UI-React

## MongoDB
https://www.mongodb.com/

## Mongoose
https://github.com/Automattic/mongoose/


## Installation
git clone https://github.com/heraldantony/react-semantic-mongodb

cd react-semantic-mongodb

npm install

npm run dev


### Config changes
The following values have to be changed in webpack_config/config.js. You could also pass the DBNAME in package.json as an env variable, so if you don't change anything, it defaults to the value in package.json, which is `empdev`.

 > DBHOST='localhost',
 
 > DBUSER='empuser',
 
 > DBNAME='emp',
 
 > DBPORT=27017
 

## Server-side rendering
> npm run server_build

> npm run start

## Integration/e2e testing with Cypress
Before running the integration tests, the database needs to be populated with test data. The sample data is in the `seeds` folder, and could be imported using one of the two approaches below.
1. If using https://github.com/toymachiner62/node-mongo-seeds, change the DBNAME in seed.js in project root folder, replace "emp" with whatever is your DBNAME. If you don't change anything, `emptest` will be used.
```
module.exports = {
  undefined: "localhost/emptest",
  test: "localhost/emptest",
  dev: "localhost/empdev"
};
```
Then run this command from project root folder
> seed test


2. If not using seed, use mongoimport with "--jsonArray" option (https://docs.mongodb.com/manual/reference/program/mongoimport/), and import all the json files in "seeds" folder

Run the server with test db

> npm run test_server

Start cypress, and run the tests from the dashboard

> npm run cypress:open
