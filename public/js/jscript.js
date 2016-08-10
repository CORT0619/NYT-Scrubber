$(document).ready(function(){

	$('#getArticles').on('click', function(){

		var topic;
		var sYear;
		var eYear;

		$('#topic').val().trim() != "" ? topic = $('#topic').val().trim() : topic = "";
		$('#startYear').val().trim() != "" ? sYear = $('#startYear').val().trim() : sYear = 0;
		$('#endYear').val().trim() != "" ? eYear = $('#endYear').val().trim() : eYear = 0;

		var queryURL = '';

		getArticles();

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