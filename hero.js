var Hero = function(name, health, favFood, tasks) {
  this.name = name;
  this.health = health;
  this.favFood = favFood; 
}

Hero.prototype = {

  talk: function() {
    return "Hello! My name is " + this.name;
  }

}

module.exports = Hero;