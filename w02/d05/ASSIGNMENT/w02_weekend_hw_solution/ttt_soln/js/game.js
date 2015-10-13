var game = {
	board: '',
	makeBoard: function() {
		this.board = new Board();
	},
	start: function() {
		this.makeBoard();
		this.board.startGame();
	},
	play: function(position) {
		this.board.makePlay(position);
	},
	checkWin: function() {
		var playableCells = this.board.cells.map(function(cell) { return cell.playable(); });
		if (this.board.checkWin()) {
			var winner = this.board.winner === 1 ? 'X' : 'O';
			alert('A winner has been crowned! ' + winner + ' wins!');
			this.start();
		} else if (playableCells.indexOf(true) === -1) {
			alert('No winner! Game Over!');
			this.start();
		}
	},
	render: function() {
		this.board.symbols().forEach(function(sym, idx) {
			var div = $('#' + idx);
			div.text(sym);
		});
	}
};
