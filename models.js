const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
	name: {type: String},
	personal: {favoriteColor: {type: String},
			   luckyNumber: {type: Number}
	},
	address: {home: {type: String},
			  work: {type: String}
	}
});

const Client = mongoose.model('Client', clientSchema);

module.exports = {Client};