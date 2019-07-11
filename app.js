var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '')));
app.use(express.static(path.join(__dirname, './static')));


app.use('/*', (req, res) => {
	res.sendFile(express.static(path.join(__dirname, './index.html')));
});

app.listen((process.env.PORT || 1337), () => {
	console.log(`Listening on ${(process.env.PORT || 1337)}`)
});

module.exports = app;
