$(function() {
  getAllStories();
  $("body").on('click', '.article', openIframe);
});


var getAllStories = function() {
  $.ajax({
    url: '/topstories',
    method: "GET",
    type: "json"
  }).done(renderAllStories);
};

var getSingleStory = function(id) {
  $.ajax({
    url: '/singleStory/' + id,
    method: "GET",
    type: "json"
  }).done(renderSingleStory);
};

var renderAllStories = function(data) {
  var parsedData = JSON.parse(data);
  for(var i = 0; i < parsedData.length; i++){
    getSingleStory(parsedData[i]);
  }
};

var renderSingleStory = function (data) {
  var parsedData = JSON.parse(data);
  console.log("got to single story")
  var newDiv = $("<div>");
  var pTag = $("<p>");
  pTag.text(parsedData.title);
  newDiv.append(pTag);
  newDiv.attr('data-id', parsedData.url);
  newDiv.addClass('article')
  $("body").append(newDiv);
};

var openIframe = function () {
  console.log("clicked article")
  var article_url = $(this).attr('data-id');
  var iFrame = $("<iframe>");
  iFrame.attr('src', article_url);
  $("body").prepend(iFrame);
}
