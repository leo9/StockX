var Common = require('../src/utils/common');

var assert = require('chai').assert;

describe('Unit Test', function() {
	describe('Common Function', function() {
		describe('round2Digit', function(){
			it('should convert 5.7698 to 5.77', function() {
				assert.equal(Common.round2Digit(5.7698), 5.77);
			});
		});
		describe('checkValidSize', function(){
			it('size null should be invalid', function() {
				assert.isNotTrue(Common.checkValidSize(null));
			});
			it('size empty string should be invalid', function() {
				assert.isNotTrue(Common.checkValidSize(""));
			});
			it('size string 1 should be valid', function() {
				assert.isTrue(Common.checkValidSize("1"));
			});
			it('size string abcd should be invalid', function() {
				assert.isNotTrue(Common.checkValidSize("abcd"));
			});
			it('size number 3 should be valid', function() {
				assert.isTrue(Common.checkValidSize(3));
			});
			it('size number 6 should be invalid', function() {
				assert.isNotTrue(Common.checkValidSize(6));
			});
		});
	});
});
