// React
var React = require('react');

module.exports = function(){
	//const elm = React.createElement('h1', null, 'Hello World! Its React on Server.');
	const elm = (
					<div>
						<h1>React on Server</h1>
						<p>This is simply brilliant and elegant.</p>
						<button onClick={function(){ alert('ReactOnServer-Click') }}>React-On-This</button>
					</div>
				);
	return elm;
};