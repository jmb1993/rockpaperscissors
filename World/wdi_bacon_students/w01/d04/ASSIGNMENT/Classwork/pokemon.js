var charmander = {
number: 6,
name: "charizard",
type: "Flame",
moves: ["Fireblast", "Wing Attack ", "Roar ", "Fly",]
hp: 545,
takedamage = function(amount) {
   this.hp -= amount;
   if (this.hp < 0) {
     this.hp = 0;
   }
visitPokeCenter: function {
    this.hp === 100;
 },

  isFainted = function() {
    retun (this.hp <= 0);
  }

}
