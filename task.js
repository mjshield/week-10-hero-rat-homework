var Task = function(goal, difficulty, urgency, reward) {
  this.goal = goal;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;

  this.complete = function() {
    this.completed = true;
  }
}

module.exports = Task;
