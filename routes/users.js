//
require('babel-register')({
	presets:['react']
});
//
var express = require('express');
var router = express.Router();
//
var React = require('react');
var ReactDOMServer = require('react-dom/server');
//var Component = require('./Component.jsx');
//var HelloReactJSX = require('../public/javascripts/react/hello.comp.react.jsx');
var HelloReactJSX = require('../public/javascripts/react/client/src/hello.comp.react.jsx');
// ref : https://www.youtube.com/watch?v=k66bOHX8MnY


/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var html = '<div id="react-app">'
  html += ReactDOMServer.renderToString( React.createElement(HelloReactJSX) );
  //html += ReactDOMServer.renderToString( <HelloReactJSX/> );
  html += '</div>';
  html += "<script src='javascripts/react/client/build/bundle.js'></script>"
  //
  res.send(html);
});

module.exports = router;
