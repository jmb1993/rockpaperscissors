var subway = {
	lines: {},
	showLines: function() {
		console.log("These are the lines that are currently running");
		for (var key in this.lines) {
			console.log(key);
		}
	},
	showStations: function(lineName) {
		console.log("There are the stations for the " + lineName + " line");
		console.log(this.lines[lineName]);
	},
	addLine: function(lineName, stations) {
		this.lines[lineName] = stations;
	},
	calcTrip: function(lineName, start, stop) {
		console.log(Math.abs(this.lines[lineName].indexOf(start) - this.lines[lineName].indexOf(stop))-1);
	}
};
/*
subway.addLine("S", ["one","two","three"]);
subway.showStations("S");
subway.calcTrip("S", "one", "three");
*/