window.onload = function(){

  var self = this;
  var pTag = document.getElementById("click-me");
  var span = document.createElement("span");
  span.innerHTML = "Span";
  pTag.appendChild(span);

  span.addEventListener("click", function(){
    debugger;
    console.log("YOU CLICKED ME BRO");
  });

  var alertTag = document.getElementById("send-alert");
  alertTag.addEventListener("click", function () {
    alert("YOU CLICKED ME BRO")
  })
};
