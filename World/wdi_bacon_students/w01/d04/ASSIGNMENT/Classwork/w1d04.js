// PART 1

snakewaterMontana = {
  paleontologist: "Dr. Alan Grant",
  depth: "10 meters",
  specimen: "Velociraptor"
}
var guestOfHonor = snakewaterMontana.paleontologist
var Clever_girl = snakewaterMontana.specimen






//PART 2
nicaragua = {
  depth: "200 meters",
  annual_budget: 1500000,
  specimens: [
    "Tyrannosaurus Rex",
    "Stegosaurous",
    "Triceratops",
    "Velociraptor"
  ]
}
var nicaraguanSpecimens = nicaragua.specimens
var favoriteSpecimens = nicaraguanSpecimens[0]
nicaragua.annual_budget = 4000000

//PART 3

hammondsMines = {
  buenos_aires: {
    depth: "400 meters",
    annual_budget: 1000000,
    specimens: [
      "Dilophosaurus",
      "Brachiosaurus"
    ]
  },
  mexico: {
    depth: "350 meters",
    annual_budget: 900000,
    specimens: [
      "Gallimimus",
      "Parasaurolophus"
    ]
  }
}
var mexicoDepth = hammondsMines.mexico.depth
var buenosBudget = hammondsMines.buenos_aires.annual_budget
console.log(hammondsMines.buenos_aires.specimens)
hammondsMines.add(nicaragua)

var mexicoBudget = hammondsMines.mexico.annual_budget
var nicaraguaBudget = hammondsMines.nicaragua.annual_budget
var totalBudget = (buenosBudget + mexicoBudget + nicaraguaBudget)

//PARTS 4+5

var myTrainLine = {
  name: "J Line"
  stations: [  ]
  addStation(myStations): function() {
    var newStation = prompt("Enter station name");
    return myTrainLine.stations.add(newStation);
  }
  var showStations(): function() {
    return myTrainLine.stations;
  }
var whereIs(stationName): function() {
  var(stationName) = prompt("Enter station name");
  if (stationName) == indexOf(station) {
return myTrainLine.stations.stationName
  }
  else
  return "false"
}
var calcTrip = function(lineName, start, stop) {
  var lineName = prompt("enter line name")
  var x = prompt("enter first stop");
  var y = prompt("enter second stop");
  if (lineName && start && stop == myTrainLine.line.stations.indexOf()

return var distance =
(start.indexOf() - finish.indexOf();
return distance {
if distance < 0; return abs(distance);

}
}
else return "false";



















//PART 5
