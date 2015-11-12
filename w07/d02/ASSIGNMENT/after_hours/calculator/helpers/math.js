module.exports= {
  add: function(a,b){
    return parseInt(a)+ parseInt(b)
  },
  subtract: function(a,b){
    return parseInt(a)- parseInt(b)
  },
  multiply: function(a,b){
    return parseInt(a)* parseInt(b)
  },
  divide: function (a,b) {
    if(b==0){
      return "can not divide by 0"
    }
    return parseInt(a)/ parseInt(b)
  }
}
