var assert = require('chai').assert;
const primeFactors = require('../src/PrimeFactors');

describe("PrimeFactors", function(){
	it("calculate the prime factor of an integer", function(){

		assert.equal(primeFactors.of(1), [1]);
	});
});
