
$(function(){
  $("#victims").on('click', function(){getVampire()});
  $("#eyes").on('click', function(){getVampireEyes()});
});


var getVampire = function(){
  $.ajax({
    url: "/victims",
    method: "GET"
  }).done(renderVampire)
};


var renderVampire = function(data){
  data.forEach(function (vam){
  $div = $("<div>");
  $div.text("Name: " + vam.name + "...............   Kill Count: " + vam.victims);
  $('body').append($div)
  if (vam.victims > 500){
  $div.css({'color':'red'})
}else if (vam.victims > 150){
  $div.css({'color':'black'})
}else{
  $div.css({'color':'gray'})
}
}
)};

var getVictims = function(){
  $.ajax({
    url: "/victims",
    method: "GET"
  }).done(renderVampireEyes)
};

var renderVampireEyes = function(data){
  data.forEach(function (vam){
  $div = $("<div>");
  $div.text(vam.name + "   Eyes:");
  $('body').append($div)
  if (vam.eye_color == "blue"){
  $div.css({'color': 'blue'})
}else if (vam.eye_color == "green"){
  $div.css({'color':'green'})
}else if (vam.eye_color == "brown"){
  $div.css({'color':'brown'})
}
}
)};
