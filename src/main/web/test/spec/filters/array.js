'use strict';

describe('Filter: array', function () {

  // load the filter's module
  beforeEach(module('blogApp'));

  // initialize a new instance of the filter before each test
  var array;
  beforeEach(inject(function ($filter) {
    array = $filter('array');
  }));

  it('should return the input prefixed with "array filter:"', function () {
    var text = 'angularjs';
    expect(array(text)).toBe('array filter: ' + text);
  });

});
