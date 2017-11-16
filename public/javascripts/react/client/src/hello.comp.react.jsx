// React
var React = require('react');
var createReactClass = require('create-react-class');

/*
module.exports = function(){
	//const elm = React.createElement('h1', null, 'Hello World! Its React on Server.');
	const elm = (
					<div id='react-app'>
						<h1>React on Server</h1>
						<p>This is simply brilliant and elegant.</p>
						<button onClick={function(){ alert('ReactOnServer-Click') }}>React-On-This</button>
					</div>
				);
	return elm;
};
*/

//ES5
var Greeting = createReactClass({
	_onBtnClick: function(){
		alert('ReactOnServer-Click');
	},
	render: function() {
		return(
		    <div>
					<h1>React on Server</h1>
					<p>This is simply brilliant and elegant.</p>
					<button onClick={this._onBtnClick}>React-On-This-Button</button>
				</div>
			);
	}
});
//
module.exports = Greeting;