var React = require('react');

var Search = React.createClass({

	render: function(){

		return (

	<div className="main-container">
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">Search</h3>				
			</div>
			<div className="panel-body text-center">
				<p className="inputHeader"><label htmlFor="topic">Topic</label></p>
				<p><input type="text" id="topic" name="topic" /></p>

				<p className="inputHeader"><label htmlFor="startYear">Start Year</label></p>
				<p><input type="text" id="startYear" name="startYear" /></p>

				<p className="inputHeader"><label htmlFor="endYear">End Year</label></p>
				<p><input type="text" id="endYear" name="endYear" /></p>

				<p><button className="btn btn-default" id="getArticles"><span className="glyphicon glyphicon-search
" aria-hidden="true"></span> Search</button></p>
			</div>
		</div>


		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">Results</h3>
			</div>
			<div className="panel-body">
				Content
			</div>
		</div>
	</div>

		)

	}

});

module.exports = Search;