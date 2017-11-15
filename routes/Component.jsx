// React
var React = require('react');

module.exports = function(){
	const elm = React.createElement('h1', null, 'Hello World! Its React on Server.');
	return elm;
};