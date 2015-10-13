$(function() {
  console.log("Loaded, bro.");
  game.start();

  $('.cell').on('click', function() {
    var cellNum = parseInt($(this).attr('id'));
    game.play(cellNum);
    game.render();
    game.checkWin();
  });
});
