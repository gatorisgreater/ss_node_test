module.exports = function(app, db) {
	app.get('/client', (req, res) => {
		
		res.send('Hello World');
	});

};