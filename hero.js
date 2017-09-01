var Hero = function(name, health, favFood, tasks) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.tasks = tasks; 
}

Hero.prototype = {

  talk: function() {
    return "Hello! My name is " + this.name;
  },

  eat: function(food) {
    if (food.name === this.favFood){
      totalReplenishment = food.replenishment * 1.5;
      this.health += totalReplenishment;
    }
    else{ this.health += food.replenishment;}
  },

  sortTasks: function(sortValue) {
    switch(sortValue) {
        case "difficulty":
            this.tasks.sort(function(a, b) {
              return a.difficulty - b.difficulty;
            });
            break;
        case "urgency":
            this.tasks.sort(function(a, b) {
              return a.urgency - b.urgency;
            });
            break;
        case "reward":
            this.tasks.sort(function(a, b) {
              return a.reward - b.reward;
            });
            break;
        default:
            break;
    }
  }

}

module.exports = Hero;