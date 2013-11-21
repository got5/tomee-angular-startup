'use strict';


angular.module('blogApp').directive('keyEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                if(event.ctrlKey){
                    return;
                }
                scope.$apply(function(){
                    scope.$eval(attrs.keyEnter);

                });
                event.preventDefault();
            }
        });
    };
});
