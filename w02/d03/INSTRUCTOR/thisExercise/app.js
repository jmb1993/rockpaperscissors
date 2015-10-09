console.log("load me brah");


// Person Object with a setter (mutator)
var person = {
  id: 12345,
  fullname : undefined,
  setName: function( fname, lname ) {
    this.fullname = fname + ' ' + lname;
  }
};

// this is 
var getUserInput = function (x, y, fn, thisObj)  {

  //fn(x, y);
  fn.apply(thisObj, [x, y]);

}



getUserInput( 'Mary', 'Davis' , person.setName, person);

console.log(person)
document.body.querySelector('p');
addEventListener('click',function(e){
  console.log(this);
})