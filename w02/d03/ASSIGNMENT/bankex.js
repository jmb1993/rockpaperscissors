var bankAccount = {
  balance: 0
deposit: function() {
    var depositAmount = prompt("how much would you like to deposit?");
    return this.balance + depositAmount;
  }
  withdraw: function(){
    var withdrawAmount = prompt("how much would you like to withdraw?")
    if(withdrawAmount < this.balance) {
    return this.balance - withdrawAmount;
 } else return alert("insufficient funds in account")
  }
};
var createABank = function(name, address, accounts) {
  name: name,
  address: address,
  accounts: [checkings, savings]
var information = function(){
  return this.name, this.address;
}\
var makeTransaction = function(transType, accType, amount) {
var transType = prompt("which kind of transaction? (deposit/withdraw)"){
if (transType = "deposit")
return deposit(); {
else if (transType = "withdraw") }
 withdraw()
else alert("invalid choice, pick again!");
}
var render = function() {

}
bankAccount.prototype.acoounts
}
}
