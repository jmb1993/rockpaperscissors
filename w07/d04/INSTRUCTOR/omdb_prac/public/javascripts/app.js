$(function () {
  $("#button").on('click', getMovie);
});

var getMovie = function () {
  var searchTerm = $("#input").val();
  $.get('/movies/' + searchTerm).done(renderMovies);
};


var renderMovies = function (movies) {

  JSON.parse(movies).Search.forEach(function (movie) {
    var movieTitle = movie.Title;
    var pTag = $("<p>");
    pTag.text(movieTitle);
    $("body").append(pTag)
  })
}
