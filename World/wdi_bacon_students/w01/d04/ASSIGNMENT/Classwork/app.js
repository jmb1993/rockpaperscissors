console.log("app.js is loaded");
// lets make some objects
var ford = {
color: "red",
type: "sedan",
doorCount: 4,
airBags: false,
year: 1975,
accidents: { 1980:1,
  1986: 5,
  1990: 2
  }

};
var mustang = {
  color: "red",
  title: "muscle",
  hp: 435,
  windowStatus: undefined,
  windowUp: function() {
    this.windowStatus = 'up';
  },
  windowDown: function() {
    mustang.windowStatus = 'down';
  },
showWindow: function() {
  return this.windowStatus;
},
drive: function() {
  alert(distance + "mph");
}
};




///Object factory
var myCar = function(color, hp, title) {
return {
  color : color,
  title : title,
  hp : hp
  fuel : 5,
  drive: function() {
    if (this.fuel > 0)
    this.fuel--;
    return "vroom!"
  } else {
    return "out of gas!";
  }
  tuneup: function() {
    return (this.hp+ 10);
  }
}

















///
var tt = {
  color: "silver",
  type: "sport",
  horsepower: 211
};
var gallardo = {
  color: "black",
  type: "exotic",
  horsepower: 543
};

console.log(gallardo.horsepower);
console.log(tt.color);
gallardo.color = "orange"
mustang.horsepower= 500;
tt.type= "dbz";
tt.horsepower= 9001
gallardo.color
mustang.horsepower;
tt.type;
gallardo;
mustang;
tt



var carArray = [ mustang, tt, gallardo];
var bonus = function(arguement) {
  for(var i=0; i<array.length; i++) {
    var eS = array[i].horsePower/100
    var eThing = "";
    for(var j=0; j<eS, j++){
      eThing += "e";
    }
    console.log ("I'm a" + array[i].color " " + array[i].type + " and I go re" + eThing + "ly fast");
  }
}
bonus(carArray)
