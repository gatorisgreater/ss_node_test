const express = require('express');
const mongoose = require('mongoose');
const {Client} = require('./models');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const app = express();

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

router.get('/', (req, res) => {
	Client
	.find()
	.exec()
	.then(clients => {
		console.log(clients);
		// let clientRender = {};
		// let clientSideFields = ['name', 'address', 'personal'];
		// clientSideFields.forEach(field => {
		// 	if (field in clients) {
		// 		clientRender[field] = clients[field];
		// 	}
		// });
		// console.log(clientRender);

		res.status(200).json({Client: clients.map(client => client.apiGetRepr())});
	})
	.catch(err => {
		console.error(err);
		res.status(500).json({error: 'There is a problem with yor request'})
	});	
});

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


//POST endpoint used to populate DB with data
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
