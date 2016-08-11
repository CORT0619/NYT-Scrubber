var axios = require('axios');

var helpers = {

	searchArticles: function(topic, sYear, eYear){

		var apiKey = '29b207cdc74842d59ebcf2c28cf0b46d';

		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey +'&q='+ topic 

		if(parseInt(sYear)){

			sYear = sYear + '0101';
			queryURL = queryURL + '&begin_date='+ sYear;
		}

		if(parseInt(eYear)){

			eYear = eYear + '0101';
			queryURL = queryURL + '&end_date='+ eYear;
		}
	

		return axios.get(queryURL)
			.then(function(results){

				console.log('results are ', results);
			});

	},

	/*retrieveSavedArticles: function(){

	}*/
}

module.exports = helpers;