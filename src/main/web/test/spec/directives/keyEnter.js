'use strict';

describe('Directive: keyEnter', function () {

  // load the directive's module
  beforeEach(module('blogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<key-enter></key-enter>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the keyEnter directive');
  }));
});