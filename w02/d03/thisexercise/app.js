console.log( "load me bra");

var person = {
  id: 12345,
  fullname: undefined,
  setName: function(fname, lname) {
    this.fullname = fname + " " + lname;
  }
}
person.setName( "jane", "dough");
console.log(fullname);

//

var getUserInput = function(firstName, lastName, fn) {
  fn.apply(person, [firstName, lastName]);
}
getUserInput("Mary", "Davis", person.setName)


// this is
var getUserInput = function(x, y, fn thisObj) {
  //fn(x,y);
  fn.apply(thisObj, [x,y]);
};
document.querySelector('p').addEventListener('click', function(e){
  console.log(this === e.target)
})
