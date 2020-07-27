
var express = require('express'),
bodyParser = require('body-parser'),
cors = require('cors'),
verifyToken = require('./api/verifyToken'),
app = express(),
port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//app.use(verifyToken);
var routes = require('./api/routes/routes'); //importing route
routes(app);
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
