var React = require('react');
var createFragment = require('react-addons-create-fragment');

var Search = React.createClass({

	getInitialState: function(){

		return{topic: "", startYear: "", endYear: "", children: []}
	},

	handleChange: function(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

	handleClick: function(){

		console.log('clicked');
		this.props.setTopic(this.state.topic);
		this.props.setStartYear(this.state.startYear);
		this.props.setEndYear(this.state.endYear);

	},

	render: function(){

		return (

	<div className="main-container">
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">Search</h3>				
			</div>
			<div className="panel-body text-center">
				<p className="inputHeader"><label htmlFor="topic">Topic</label></p>
				<p><input type="text" id="topic" onChange={this.handleChange} name="topic" required /></p>

				<p className="inputHeader"><label htmlFor="startYear">Start Year (ex. 2001)</label></p>
				<p><input type="text" id="startYear" onChange={this.handleChange} name="startYear" /></p>

				<p className="inputHeader"><label htmlFor="endYear">End Year (ex. 2000)</label></p>
				<p><input type="text" id="endYear" onChange={this.handleChange} name="endYear" /></p>

				<p><button onClick={this.handleClick} className="btn btn-default" id="getArticles"><span className="glyphicon glyphicon-search
" aria-hidden="true"></span> Search</button></p>
			</div>
		</div>


		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">Results</h3>
			</div>
			<div className="panel-body">
				{this.props.results.map(function(result){
					return (<div className="well" key={result.id}>
									<h4>{result.title}</h4>
									<a href="/api/saved"><button className="saveButton">Save</button></a>
									<p className="articleContents">Publication Date: {result.date}</p>
									<p className="articleContents"><a href={result.url}>{result.url}</a></p>
							</div>);

				})}
			</div>
		</div>
	</div>

		)

	}

});

module.exports = Search;