var add = require("../add.js");
var mul = require("../multiply.js");
var request = require('superagent');
var fetch = require('node-fetch');
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('test', function(){
	
	it("1 plus 1 should equal 2", function(){
		expect(add(1,1)).to.be.equal(2);
	});

	it("2 * 3 should equal 6",function(){
		expect(mul(2,3)).to.equal(6);
	});

	//asseert
	it('1 plus 1 assert 2',function(){
		assert(add(1,1) === 3, 'error: 1 plus 1 is 2');
	});

	//延时4000 －t
	it("test 4000ms", function(done){
		var x = true;
		var f = function(){
			x = false;
			expect(x).to.not.ok;
			done();
		};
		setTimeout(f,4000);
	});

	//异步 done
	it("async get an object", function(done){
		request
			.get('https://api.github.com')
			.end(function(err,res){
				expect(res).to.be.an('object');
				done();
			});
	});

	//异步promise
	it("async promise get an object", function(){
		return fetch('https://api.github.com')
    		.then(function(res) {
      			return res.json();
    		}).then(function(json) {
      			expect(json).to.be.an('object');
    		});
	});
});


