'use strict';

let express = require('express');
let app = express();

let Settings = require('./settings');
let settings = new Settings();

let userRoutes = require('./user_routes');
userRoutes(app);

app.get('/ping', function (req, res) {
	res.send('pong');
});

app.listen(settings.serverPort(), function () {
	console.log('Server listening on port ' + settings.serverPort());
});
