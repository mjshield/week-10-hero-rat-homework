var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");


describe("Hero", function() {

  var hero1;
  var task1;
  var task2;

  beforeEach(function() {
    task1 = new Task("Finish eating pizza", 1, 3, 5);
    task2 = new Task("Defeat Snake and his brother Ladders", 3, 3, 180);
    hero1 = new Hero("Brave Guy", 100, "Turkey", [task1, task2]);

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
  })





})