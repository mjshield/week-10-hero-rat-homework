var assert = require("assert");
var Food = require("../food.js");

describe("Food", function() {

  var food1;

  beforeEach( function() {
    food1 = new Food("Turkey", 50);
  })

  it("should have a name", function() {
    assert.strictEqual(food1.name, "Turkey");
  })

  it("should have a replenishment", function() {
    assert.strictEqual(food1.replenishment, 50);
  })

})