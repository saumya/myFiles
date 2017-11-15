var express = require('express');
var router = express.Router();

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var html = ReactDOMServer.renderToString(
  	React.createElement(Component)
  );
  res.send(html);
});

module.exports = router;
