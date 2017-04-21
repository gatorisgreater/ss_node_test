const express = require('express');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

const port = 8080;

require('./routes')(app, {});



app.listen(port, () => {
	console.log('Your app is listening on port ' + port);
});