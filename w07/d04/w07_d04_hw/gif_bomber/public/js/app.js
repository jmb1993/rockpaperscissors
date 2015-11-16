$(function() {
	$('#search-box').on('click', '#search', search);
	$('#search-box').on('click', '#random', randomGifSearch);
	$('#search-box').on('click', '#kittens', kittenBomb);
	$('#search-box').on('click', '#id', id);
	//toggle gif links for image src
	$('#gif-container').on('click', 'button', toggleUrl);
});

//setup
var errorMessage = function(error) {
	console.log('There was a problem:', error.statusText);
};
var toggleUrl = function() {
	var button = $(this);
	var url = button.attr('data-value');
	button.siblings('img').attr('src', url);
};

//ajax our server
var	search = function() {
	var searchTerm = $('[name="search"]').val()
	$.ajax({ 
		url: '/search/' + searchTerm, 
		method: 'GET' 
		})
	 .done(render)
	 .fail(errorMessage);
};
var randomGifSearch = function() {
	$.ajax({
		url: '/random',
		method: 'GET'
		})
	 .done(renderRandom)
	 .fail(errorMessage);
};
var kittenBomb = function() {
	$.ajax({
		url: '/kittens', 
		method: 'GET'
		})
	 .done(render)
	 .fail(errorMessage);
};
var	id = function() {
	var id_search = $('[name="search"]').val()
	$.ajax({ 
		url: '/id/' + id_search, 
		method: 'GET' 
		})
	 .done(render)
	 .fail(errorMessage);
};
//render onto page
var renderRandom = function (data) {
	var gif = JSON.parse(data);
	$('#gif-container').empty();
	var gifDiv = $('<div>').addClass("gif")
	var img = $('<img>').attr('src', gif.data.fixed_width_small_still_url);
	var startButton = $('<button>').addClass('start').attr('data-value', gif.data.image_url).text('start')
	var stopButton = $('<button>').addClass('stop').attr('data-value', gif.data.fixed_width_small_still_url).text('stop')
	gifDiv.append(img).append(startButton).append(stopButton);
	$('#gif-container').append(gifDiv)
};
var render = function (data) {
	var response = JSON.parse(data);
	$('#gif-container').empty()
	var results = response.data;
	if (results.length > 1) {	
	 	var renderedResults = results.forEach(function(gif) {
	 		var gifDiv = $('<div>').addClass("gif")
			var img = $('<img>').attr('src', gif.images.fixed_width_still.url);
			var startButton = $('<button>').addClass('start').attr('data-value', gif.images.fixed_width.url).text('start')
			var stopButton = $('<button>').addClass('stop').attr('data-value', gif.images.fixed_width_still.url).text('stop')
			gifDiv.append(img).append(startButton).append(stopButton);
			$('#gif-container').append(gifDiv)
	 	});
	}else{
		var gif = response.data;
		var gifDiv = $('<div>').addClass("gif")
		var img = $('<img>').attr('src', gif.images.fixed_width_still.url);
		var startButton = $('<button>').addClass('start').attr('data-value', gif.images.fixed_width.url).text('start')
		var stopButton = $('<button>').addClass('stop').attr('data-value', gif.images.fixed_width_still.url).text('stop')
		gifDiv.append(img).append(startButton).append(stopButton);
		$('#gif-container').append(gifDiv)
	}
};