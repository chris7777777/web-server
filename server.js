var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('prive rought hit');
		next();
	},
	logger: function (req, res, next) {
		console.log('request: '+ new Date().toString()+ ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('about pies');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
	console.log('express server started on port' + PORT + '!');
});