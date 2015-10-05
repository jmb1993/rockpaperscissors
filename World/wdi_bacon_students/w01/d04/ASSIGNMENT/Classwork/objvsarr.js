// 2 data storage systems
// arrays = lists
var myArray = [ 1,2,3,4,5,6]

//objects


var myObject = {
  key: "my key"
  objKey {
    nestedKey: "kewl"
  },
  arrayKey: [1,2,3,4,5, {arrayNestedKey: "super kewl"}],
  numKey: 2,
  funcKey: function(arg) {
    this.key
    return "Im a function";
  }
  addKey: function (arg) {
    this.WDI = arg;
  }
};
myObject.arrayKey[5].arrayNestedKey



// factories && oop
// naming convention = Capital letter first word


var Car = function(make, model, hp) {
return
 {
   make: make,
   model: model,
   hp: hp,
   drive: function () {
     return "vroom";
   }
   tuneUp: function() {
      return this.hp += 10;
   }
   addOwner: function(name, age) {
     this.owner = Person(name,age);
   }
 }
var mustang = Car(ford, model, hp)

var Person = function(name, age) {
  return {
  name: name,
  age: age
};
};
