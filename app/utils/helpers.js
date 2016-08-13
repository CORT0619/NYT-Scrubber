var axios = require('axios');

var helpers = {

	searchArticles: function(topic, sYear, eYear){

		var res = [];
		var numOfArticles = 5;
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
				console.log("here2");
				console.log('results are ', results);

				for(var i=0; i < numOfArticles; i++){
					res.push({"title": results.data.response.docs[i].headline.main,
							  "date": results.data.response.docs[i].pub_date, 
							  "url": results.data.response.docs[i].web_url});
				}

				return res;
			});

	},

	saveArticle: function(){

		return axios.post('/api/saved')

	}

	/*retrieveSavedArticles: function(){

	}*/
}

module.exports = helpers;