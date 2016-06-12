/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
var ArticleModel = require("./src/stores/model/Article");
const mongoose = require('mongoose');
var Article = mongoose.model("Article");
const serverConfig = require('./server.config.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();




app.set('port', (process.env.PORT || 8001));

app.use('/', express.static(path.join(__dirname, 'src')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.get("/getTechnologyList", function(req, res) {
	Article.find({'tag' : "technology" }, function(err,obj) { 
		res.send(obj);
	});
});

app.get("/getTechnologyById", function(req, res) {
	var id = req.query.id;
	Article.findOne({'_id' : id }, function(err,obj) { 
		res.send(obj);
	});
});

app.listen(app.get('port'), function () {
 console.log('Server started: http://localhost:' + app.get('port') + '/');
});

// DB Setup for mlab

mongoose.connect(serverConfig.database, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("Connected to the database");
	}
});

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});
