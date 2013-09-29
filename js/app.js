'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'partials/main.html', controller: 'MainCtrl', reloadOnSearch: false });
    $routeProvider.when('/:word', { redirectTo: function($routeParams, path, search) {
      return '/?word=' + $routeParams.word;
    }});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
