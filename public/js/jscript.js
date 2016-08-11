$(document).ready(function(){

	$('#getArticles').on('click', function(){

		var topic;
		var sYear;
		var eYear;

		$('#topic').val().trim() != "" ? topic = $('#topic').val().trim() : topic = "";
		$('#startYear').val().trim() != "" ? sYear = $('#startYear').val().trim() : sYear = 0;
		$('#endYear').val().trim() != "" ? eYear = $('#endYear').val().trim() : eYear = 0;

		sYear = sYear + '0101';
		eYear = eYear + '0101';

		console.log('startYear ', sYear);
		console.log('endYear ', eYear)

		var apiKey = '';
		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + apiKey +'&q='+ topic + '&begin_date='+ sYear + '&end_date='+ eYear;

		console.log(queryURL);


		getArticles(queryURL);

	});

	function getArticles(url){

		$.ajax({
			url: url,
			method: 'GET'

		}).done(function(data){

			console.log("data is ", data);


		});
	}
});