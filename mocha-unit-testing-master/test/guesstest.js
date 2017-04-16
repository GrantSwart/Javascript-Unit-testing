// Uncomment if using Node
// var chai = require('chai');
// Important to define assert
var assert = chai.assert;
//var expect = require('chai').expect;
var expect = chai.expect;

//First test
describe('Concatenate 2 string variables function', function(){
it('Two string variables should combine together', function() {
var one = "can";
var two = "dy";
result = concatenate(one,two);
assert.equal("candy", result);
});
});


//Random number Test
//Behaviour: The random number is greater than 0 and less than 100
// Expected output: Number 1-99
describe('Random number generated', function(){
it('Number is greater than 0 and less than 100', function() {

result = rand();
//http://chaijs.com	
assert.isAbove(result, 0, 'rn is strictly greater than 0');
assert.isBelow(result, 100, 'rn is strictly below 100');
});
});