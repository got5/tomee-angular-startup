/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var app = angular.module('blogApp', ['restangular','monospaced.elastic']);

app.config(function(RestangularProvider,$httpProvider){
    // RestangularProvider.setDefaultHeaders({ "Content-Type": "application/json" });
//$httpProvider.defaults.headers.delete = {'Content-Type': 'application/json;charset=utf-8'};

    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRequestInterceptor(function(elem, operation) {
        if (operation === "remove") {
            return undefined;
        }
        return elem;
    })


})


