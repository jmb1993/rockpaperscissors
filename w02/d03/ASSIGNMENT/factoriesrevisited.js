

var tree = function(mh, color, type) {
  return {
maxHeight: mh,
color: color,
type: type;
this.datePlanted = new Date();
getHeight: function() {
  return this.maxHeight;
}
  };
}

var oak = tree(900, "green");
var spruce = tree(500, "blue");
var maple = tree(150, "silver");
tree.prototype.growthDirection = "up";
tree.prototype.hasRoots = "true"
var birch = new tree( 1000, "white", "birch")
birch.getHeight= function() {
  return (new Date() - this.datePlanted)/50000;
}
