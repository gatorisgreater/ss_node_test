const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
	name: {type: String},
	address: {type: String}
});

const Client = mongoose.model('Client', clientSchema);

module.exports = {Client};