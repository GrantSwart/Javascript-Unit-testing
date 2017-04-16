// Uncomment if using Node
// var chai = require('chai');
// Important to define assert
var assert = chai.assert;
//var expect = require('chai').expect;
var expect = chai.expect;

//20% TAX Test
describe('calculateTaxAt20', function(){
it('Calculate tax at 20%', function() {

//Test less than 10600
var gs = 10600;
result = calculateTaxAt20(gs);
assert.equal(0, result);

// Test between 10600 and 21000
var gs = 20000;
result = calculateTaxAt20(gs);
assert.equal(1880, result);

//Test greater than 31000
var gs = 33000;
result = calculateTaxAt20(gs);
assert.equal(4200, result);

});
});


//40% TAX Test
describe('calculateTaxAt40', function(){
it('Calculate tax at 40%', function() {

//Test less than 10600
var gs = 10600;
result = calculateTaxAt40(gs);
assert.equal(0, result);

// Test between 10600 and 21000
var gs = 20000;
result = calculateTaxAt40(gs);
assert.equal(0, result);

//Test greater than 31000
var gs = 33000;
result = calculateTaxAt40(gs);
assert.equal(800, result);

//Test greater than 31000
var gs = 50000;
result = calculateTaxAt40(gs);
assert.equal(7600, result);
	
});
});