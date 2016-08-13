var React = require('react');

var Search = require('./search.js');
var Saved = require('./saved.js');

var helpers = require('../utils/helpers.js');

var Main = React.createClass({

	getInitialState: function(){
		return {topic: "", startYear: "", endYear: "", results: []}
	},

	setTopic: function(topic){

		this.setState({
			topic: topic
		});

		console.log("topic ", topic);

	},

	setStartYear: function(startYear){

		this.setState({
			startYear: startYear
		});

		console.log("startYear ", startYear);
	},

	setEndYear: function(endYear){

		this.setState({
			endYear: endYear
		})

		console.log("endYear ", endYear);
	},

	componentDidUpdate: function(prevProps, prevState){

		if(prevState.topic != this.state.topic) {
			console.log("executing...");

		//run the query to get the articles
		helpers.searchArticles(this.state.topic, this.state.startYear, this.state.endYear)
			.then(function(results){

				console.log("componentDidUpdate");
				this.setState({
					results: results
				})

				console.log("res is ", this.state.results)
			}.bind(this))
		}	

	},

	render: function(){

		return (
			<div className="container">
				<Search setTopic={this.setTopic} setStartYear={this.setStartYear} setEndYear={this.setEndYear} results={this.state.results} />
				<Saved />
			</div>
		)
	}

});

module.exports = Main;