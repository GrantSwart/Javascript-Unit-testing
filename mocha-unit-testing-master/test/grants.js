describe('Concatenate 2 string variables function', function(){
it('Two string variables should combine together', function() {
var one = "can";
var two = "dy";
result = concatenate(one,two);
assert.equal("candy", result);
});
});