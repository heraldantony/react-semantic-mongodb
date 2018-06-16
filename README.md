# react-semantic-mongodb
A non-trivial app using react, redux, redux-form, redux-saga, semantic ui, node, express, and mongodb, that does CRUD with one-to-one, one-to-many, many-to-many relationships between entities.

## Suicrux
https://github.com/Metnew/suicrux
This app uses redux-saga instead of "awral".

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
The following values have to be changed in webpack_config/config.js

 DBHOST='localhost',
 
 DBUSER='empuser',
 
 DBNAME='emp',
 
 DBPORT=27017
 

## Server-side rendering
npm run server_build

npm run start

## Integration/e2e testing with Cypress

If using https://github.com/toymachiner62/node-mongo-seeds, change the DBNAME in seed.js in project root folder, replace "emp" with whatever is your DBNAME

module.exports = {
  undefined: "localhost/emptest",
  test: "localhost/emptest",
  dev: "localhost/empdev"
};

Then run this command from project root folder
seed test

If not using seed, use mongoimport with "--jsonArray" option (https://docs.mongodb.com/manual/reference/program/mongoimport/), and import all the json files in "seeds" folder

Run the server with test db
npm run test_server

Start cypress, and run the tests from the dashboard
npm run cypress:open
