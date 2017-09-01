var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", function() {

  var hero1;

  beforeEach(function() {
    hero1 = new Hero("Brave Guy", 100, "Turkey", ["task1", "task2"]);
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

  xit("has a task list", function() {
    assert.strictdeepEqual(hero1.taskList, [task1, task2]);
  })





})