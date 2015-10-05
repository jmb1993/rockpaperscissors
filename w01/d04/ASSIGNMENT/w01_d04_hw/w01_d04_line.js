var myTrainLine = function(name, stations) {
  return {
    name: name,
    stations: stations,
    showStations: function() {
      console.log(this.stations);
    },
    whereIs: function(stationName) {
      console.log(this.stations.indexOf(stationName));
    },
    calcTrip: function(start, stop) {
      console.log(Math.abs(this.lines[lineName].indexOf(start) - this.lines[lineName].indexOf(stop))-1);
    }
  };
};
/*
var sTrain = myTrainLine("S", ["one","two","three"]);
sTrain.whereIs("two");
*/