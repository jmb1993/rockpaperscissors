//TWO DATA STORAGE SYSTEMS


//ARRAYS = LISTS

var myArray = [1, 2, 3, 4, 5, 6];


//OBJECTS

var myObject = {
  key: "My Key",
  objKey: {
    nestedKey: "Kewl"
  },
  arrayKey: [1, 2, 3, 4, 5, {arrayNestedKey: "Super Kewl"}],
  numKey: 2,
  funcKey: function (arg) {
    return "Im a function";
  },
  addKey: function (array) {
    array[1]
  }
};

myObject.arrayKey[5].arrayNestedKey


// FACTORIES && OOP



var Person = function(name, age){
  return {
    name: name,
    age: age
  };
};


var Car = function (make, model, hp) {
  return {
    make: make,
    model: model,
    hp: hp,
    drive: function () {
      return "Vroom";
    },
    tuneUp: function () {
      this.hp += 10;
    },
    addOwner: function (person) {
      this.owner = person;
    }
  }
};
