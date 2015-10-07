/*
  AUTHOR Jason Seminara
  DATE 2015-10-07
  DESCRIPTION Million Trees App. Simulates creating trees  
*/

// Constructor
var Tree = function(height,color,type){
  this.max_height = height;
  this.color = color;
  this.type = type;
  this.datePlanted = new Date();
}



// This is the container for the trees (it's a private array)
var trees = (function(treeArray){
  // private member is the argument (in a closure) 
  return {
    //public mutators
    showTrees:function(){
      console.log(treeArray)
      return this
    },
    add:function(tree){
      treeArray.push(tree)
      return this
    },
    remove:function(position){
      treeArray.slice(position,1)
      return this
    }
  }  
})([]); 


var oak = new Tree(1000,'blue','oak');
//var gingko = new Tree()


// Prototype chain
Tree.prototype.getHeight = function(){
  return (new Date() - this.datePlanted) / 100000; 
};

Tree.prototype.growth_direction = 'up';


console.log(oak)



// Things that happen after the DOM loads
window.onload = function() {


};