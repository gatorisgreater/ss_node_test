const mongoose = require('mongoose');

// MongoDB schema - Collection: Client; Documents: Clients

const clientSchema = mongoose.Schema({
	name: {type: String},
	personal: {favoriteColor: {type: String},
			   luckyNumber: {type: Number}
	},
	address: {home: {type: String},
			  work: {type: String}
	}
});

// Abbreviated Portion of schema being represented in response object

clientSchema.methods.apiGetRepr = function() {
	return {
		name: this.name,
		personal: this.personal,
		address: this.address
	}
};

const Client = mongoose.model('Client', clientSchema);

module.exports = {Client};