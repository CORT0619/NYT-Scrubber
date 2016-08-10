var React = require('react');

var Search = require('./search.js');
var Saved = require('./saved.js');

var Main = React.createClass({

	render: function(){

		return (
			<div className="container">
				<Search />
				<Saved />
			</div>
		)
	}

});

module.exports = Main;