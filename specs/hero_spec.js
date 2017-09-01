var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");



describe("Hero", function() {

  var hero1;
  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    food1 = new Food("Turkey", 50);
    food2 = new Food("Burger", 10);
    task1 = new Task("Finish eating pizza", 1, 2, 80);
    task2 = new Task("Defeat Snake and his brother Ladders", 3, 1, 35);
    task3 = new Task("Rescue Keith from the Salmon Gang", 2, 3, 20);
    hero1 = new Hero("Brave Guy", 100, "Turkey", [task1, task2]);
    hero2 = new Hero("Ragefist", 200, "Burger", [task2, task1, task3]);
  }),

  it("has a name", function() {
    assert.strictEqual(hero1.name, "Brave Guy");
  }),

  it("has health", function() {
    assert.strictEqual(hero1.health, 100);
  }),

  it("has a favourite food", function() {
    assert.strictEqual(hero1.favFood, "Turkey");
  }),

  it("can say their name", function() {
    assert.strictEqual(hero1.talk(), "Hello! My name is Brave Guy");
  }),

  it("has a task list", function() {
    assert.deepStrictEqual(hero1.tasks, [task1, task2]);
  }),

  it("can eat food", function() {
    hero1.eat(food2);
    assert.strictEqual(hero1.health, 110);
  }),

  it("can eat favourite food", function() {
    hero1.eat(food1);
    assert.strictEqual(hero1.health, 175);
  }),

  it("can sort tasks by difficulty", function() {
    hero2.sortTasks("difficulty");
    assert.deepStrictEqual(hero2.tasks, [task1, task3, task2])
  }),

  it("can sort tasks by urgency", function() {
    hero2.sortTasks("urgency");
    assert.deepStrictEqual(hero2.tasks, [task2, task1, task3])
  }),

  it("can sort tasks by reward", function() {
    hero2.sortTasks("reward");
    assert.deepStrictEqual(hero2.tasks, [task3, task2, task1])
  }),

  it("can view completed tasks", function() {
    hero1.completeTask(task1);
    assert.deepStrictEqual(hero1.finishedTasks(), [task1]);
  }),

  it("can view incomplete tasks", function() {
    hero1.completeTask(task1);
    assert.deepStrictEqual(hero1.unfinishedTasks(), [task2]);
  })

})