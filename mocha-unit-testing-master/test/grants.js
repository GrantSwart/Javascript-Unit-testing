describe('Concatenate method test', function(){
it('Two strings should be added together - concatenate function', function() {
var one = "can";
var two = "dy";
result = concatenate(one,two);
assert.equal("candy", result);
});
});