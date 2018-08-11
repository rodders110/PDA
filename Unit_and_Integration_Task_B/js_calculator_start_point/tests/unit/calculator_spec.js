var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('can add 1+4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '5');
  });

  it('can subtract 7-4 and get 3' , function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '3');
  });

  it('can divide 21/7 and get 3', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '3');
  });

  it('can multiply 3x5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '15');
  });

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(3);
    calculator.numberClick(1);
    assert.equal(calculator.runningTotal, '531');
  });

  it('can chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '7');
  });

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '2');
  })



});
