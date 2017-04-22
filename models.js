const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
	name: {type: String},
	address: {home: {type: String},
			  work: {type: String}
	}
});

const Client = mongoose.model('Client', clientSchema);

module.exports = {Client};