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
	getDefaultProps: function() {
    return { version: '0.0.1', clickCounter:0 };
  },
  getInitialState: function() {
    return { sVersion: this.props.version, cCounter:0 };
  },
	_onBtnClick: function(){
		//this.props.clickCounter ++;
		var n = this.state.cCounter;
		var m = n+1;

		this.setState({cCounter:m});
		//alert('ReactOnServer-Click: app-version='+this.props.version);
	},
	render: function() {
		return(
		    <div>
					<h1>React on Server :{this.state.sVersion} </h1>
					<p>This is simply brilliant and elegant.</p>
					<button onClick={this._onBtnClick}>React-On-This-Button</button>
					<h3>Click counter {this.state.cCounter}</h3> 
				</div>
			);
	}
});
//
module.exports = Greeting;