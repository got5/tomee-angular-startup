'use strict';

angular.module('blogApp')
  .filter('array', function () {
    return function (input) {
      if(_.isArray(input)){
          return input;
      }else{
         var array = [];
         array.push(input);
         return  array
      }
    };
  });
