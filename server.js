const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {Client} = require('./models');
const app = express();
const ClientRouter = require('./router');

require('dotenv').config();
const DB_URL = process.env.DB_URL ||
               global.DB_URL;

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

// CORS 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// serves router file (supports modularization)

app.use('/client', ClientRouter);


let server;
// this function connects to the database, then starts the server
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

// this function closes the server, and returns a promise.
function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};
