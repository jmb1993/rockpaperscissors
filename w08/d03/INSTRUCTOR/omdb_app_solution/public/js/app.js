$(function () {
  var movieContainer = $('#movie-container');
  movieContainer.on('click', '#search', searchMovies);
  movieContainer.on('click', '.movie-title', searchSingleMovie)
  appLaunch();
});

var appLaunch = function () {
  var movieContainer = $('#movie-container')
  var searchTemplate = Handlebars.compile($("#search-template").html());
  movieContainer.prepend(searchTemplate);
};

var searchMovies = function () {
  var searchTerm = $("#search-term").val();
  $("#search-term").val(' ')
  $.ajax({
    url: '/movies/' + searchTerm,
    method: 'GET',
    dataType: 'json'
  }).done(renderMovieList);
};

var renderMovieList = function (movies) {
  $("#movie-container").empty();
  movies.Search.forEach(function (movie) {
    renderSingleListView(movie);
  });
  appLaunch()
};

var renderSingleListView = function (movie) {
  var template = Handlebars.compile($("#movie-list-view").html());
  $("#movie-container").append(template(movie))
};

var searchSingleMovie = function () {
  var searchId = $(this).attr('data-id');
  $.ajax({
    url: '/movieById/' + searchId,
    method: 'GET',
    dataType: 'json'
  }).done(renderSingleMovie);
};

var renderSingleMovie = function (movie) {
  $("#movie-container").empty();
  var template = Handlebars.compile($("#single-movie-view").html());
  $("#movie-container").append(template(movie));
  appLaunch();
}
