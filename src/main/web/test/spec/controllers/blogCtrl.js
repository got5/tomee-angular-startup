'use strict';

describe('Controller: BlogCtrl', function () {

    // load the controller's module
    beforeEach(module('blogApp'));

    var BlogCtrl,
        scope,
        $httpBackend;

    beforeEach(inject(function ($injector,$controller, $rootScope) {
        scope = $rootScope.$new();
        BlogCtrl = $controller('BlogCtrl', {
            $scope: scope
        });

    }));
    it('should attach list of post to scope', function () {
        //todo make httpbackend work with restangular
        expect(scope.posts.length).toBe(0);

    });
});
