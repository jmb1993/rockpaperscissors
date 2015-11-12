$(document).ready(function(){
  $('#new-doughnut').on('submit', sendOurDataViaAjax);
getDoughnuts();
})


function sendOurDataViaAjax(e){
  e.preventDefault();
//use our form data to hit the api with js
var doughnut ={
style:  $("form#new-doughnut select#doughnut-style").val(),
flavor: $("form#new-doughnut input#doughnut-value").val(),
}
}
$.post('https://api.doughnut.ga/doughnuts', doughnut)
function addDoughnut(doughnut) {

$("ul#doughnuts").prepend("<li>" + doughnut.flavor + "-<em>" + doughnut.id + "</em></li>" )
}

function getDoughnuts(){

}
