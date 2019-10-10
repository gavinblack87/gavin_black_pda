var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('check add 1 + 4 = 5', function(){
    calculator.previousTotal = 4
    calculator.add(1);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5)
  })

  it('check subtract 7 - 4 = 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('check multiply 3 * 5 = 15', function(){
    calculator.previousTotal = 3
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15)
  })

  it('check divide 21 / 7 = 3', function(){
    calculator.previousTotal = 21
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3)
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.numberClick(8);
    calculator.numberClick(4);
    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal, 842);
  })

  it('should chain multiple operators together', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 5;
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 8);
  })

});
