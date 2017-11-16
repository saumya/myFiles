// React
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Greetings = require('./hello.comp.react.js');// not .jsx but .js | as its loaded from after the .jsx->.js trasformation

//var rootElement = document.getElementsByTagName('body')[0];
var rootElement = document.getElementById('react-app');
//ReactDOM.render(<Greetings/>,rootElement);
ReactDOM.hydrate(<Greetings/>,rootElement);