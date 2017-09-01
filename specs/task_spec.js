var assert = require("assert");
var Task = require("../task.js");

describe("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task("Destroy the Pizza Shop", 3, 2, 180);
  })

  it("should have a goal", function() {
    assert.strictEqual(task1.goal, "Destroy the Pizza Shop");
  }),

  it("should have a difficulty level", function() {
    assert.strictEqual(task1.difficulty, 3);
  }),

  it("should have an urgency level", function() {
    assert.strictEqual(task1.urgency, 2);
  }),

  it("should have a reward", function() {
    assert.strictEqual(task1.reward, 180);
  }),

  it("should start as incomplete", function() {
    assert.strictEqual(task1.completed, false);
  }),

  it("should be markable as complete", function() {
    task1.complete();
    assert.strictEqual(task1.completed, true);
  })



})