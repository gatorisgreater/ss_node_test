// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const faker = require('faker');
// const mongoose = require('mongoose');

// const should = chai.should();

// const {app, runServer, closeServer} = require('../server');

// chai.use(chaiHttp);

// const {Client} = require('../models');

// const TEST_DB_URL = process.env.TEST_DB_URL;

// // this function deletes the entire database and
// // will be called in an `afterEach` block below
// // to ensure data from one test does not stick
// // around for next one
// function tearDownDb() {
//   return new Promise((resolve, reject) => {
//     console.warn('Deleting database');
//     mongoose.connection.dropDatabase()
//       .then(result => resolve(result))
//       .catch(err => reject(err))
//   });
// }

// // used to put fake data in db
// // so we have data to assert about.
// function seedClientData() {
//   console.info('seeding client data');
//   const seedData = [];
//   for (let i=1; i<=10; i++) {
//     seedData.push({
//       name: faker.name.firstName(),
//       personal: {
//         favoriteColor: faker.commerce.color(),
//         luckyNumber: faker.random.number()
//       },
//       address: {
//         home: faker.address.streetAddress(),
//         work: faker.address.streetAddress()
//       }          
//     });
//   }
//   // this will return a promise
//   return Client.insertMany(seedData);
// }  

// describe('API resource', function() {

//   before(function() {
//     return runServer(TEST_DB_URL);
//   });

//   beforeEach(function() {
//     return seedClientData();
//   });

//   afterEach(function() {
//     // tear down database so we ensure no state from this test
//     // effects any coming after.
//     return tearDownDb();
//   });

//   after(function() {
//     return closeServer();
//   });

// 	  describe('GET endpoint', function() {

// 	    it('should return all existing clients', function() {
// 	      // strategy:
// 	      //    1. get back all clients returned by by GET request to `/client`
// 	      //    2. prove res has right status, data type
// 	      //    3. prove the number of clients we got back is equal to number
// 	      //       in db.
// 	      let res;
// 	      return chai.request(app)
// 	        .get('/client')
// 	        .then(_res => {
// 	          res = _res;
// 	          res.should.have.status(200);
// 	          console.log(res);
// 	          // otherwise our db seeding didn't work
// 	          res.body.Client.should.have.length.of.at.least(1);

// 	          return Client.count();
// 	        })
// 	        .then(count => {
// 	          // the number of returned clients should be same
// 	          // as number of clients in DB
// 	          res.body.Client.should.have.length.of(count);
// 	        });
// 	    });

// 	    it('should return clients with right fields', function() {
// 	      // Strategy: Get back all clients, and ensure they have expected keys

// 	      let resClient;
// 	      return chai.request(app)
// 	        .get('/client')
// 	        .then(function(res) {

// 	          res.should.have.status(200);
// 	          res.should.be.json;
// 	          res.body.Client.should.be.a('array');
// 	          res.body.Client.should.have.length.of.at.least(1);

// 	          res.body.Client.forEach(function(client) {
// 	            client.should.be.a('object');
// 	            client.should.include.keys('name', 'address', 'personal');
// 	          });
// 	        })
// 	    });
// 	  });
// });