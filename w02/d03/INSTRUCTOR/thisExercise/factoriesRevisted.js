// AUTHOR Jason Seminara
// DATE 2015-10-07
// Object Factories Lesson

//Tree.prototype.growthDirection = 'up';

var TreeFactory = function(mh, color){
  return {
    maxHeight: mh,
    color: color,
    getHeight: function(){
      return this.maxHeight;
    }
  };
}
// this is brittle and I have to go back and change the attr of each new object.
var oak = TreeFactory(90,'green');
var spruce = TreeFactory(500,'blue');
var jp =TreeFactory(150,'red');
jp.type = 'maple';
jp.leafSize = 'small';


var Tree = function(mh,color){
  this.maxHeight = mh;
  this.color = color;
}
Tree.prototype.growthDirection = 'up';
var elm = new Tree(100, 'purple');
var oak = new Tree(200,'green')





