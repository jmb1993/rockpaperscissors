$(function() {
	weatherTemplate = Handlebars.compile( $('#weather-template').html() );

	$('#search-box').on('click', '#submit', getWeather);

});

var weatherTemplate;
var getWeather = function() {
	var location = encodeURI( $('[name="search"]').val() );

	var selectedTemp = $('#temp-scale').val();

	var tempScale = {
		metric: '&units=metric',
		imperial: '&units=imperial',
		internal: ''
	}[selectedTemp];

	var apiRoot = 'http://api.openweathermap.org/data/2.5/weather?q=';
	// compile the URL query and do the ajax thingy 

};