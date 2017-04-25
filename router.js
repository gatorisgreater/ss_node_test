const express = require('express');
const mongoose = require('mongoose');
const {Client} = require('./models');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();

app.use(bodyParser.json());

mongoose.Promise = global.Promise;


// GET endpoint to serve MongoDB resources, with abbreviated apiRepr

router.get('/', (req, res) => {
	Client
	.find()
	.exec()
	.then(clients => {
		res.status(200).json({Client: clients.map(client => client.apiGetRepr())});
	})
	.catch(err => {
		console.error(err);
		res.status(500).json({error: 'There is a problem with yor request'})
	});	
});

// GET endpoint to support varilable path routing (not implemented)

router.get('/:id', (req, res) => {
	console.log(req.params.id);
	Client
	.findById(req.params.id)
	.exec()
	.then(client => {
		res.status(200).json(client);
	})
	.catch(err => {
		console.error(err);
		res.status(500).json({error: 'There is a problem with yor request'})
	});	
});


// POST endpoint used to populate DB with data

router.post('/', (req, res) => {
	Client
		.create({
			name: req.body.name,
			personal: req.body.personal,
			address: req.body.address
		})
		.then(client => res.status(201).json(client))
		.catch(err => {
			console.error(err);
			res.status(500).json({error: 'Something is wrong with your request'});
		});
});

module.exports = router;
