const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {Client} = require('./models');
const app = express();
const ClientRouter = require('./router');

const db = require('./config/db');
const port = 8080;

app.use(bodyParser.json());

app.use('/client', ClientRouter);

let server;
// this function connects to the database, then starts the server
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(db.url, err => {
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
