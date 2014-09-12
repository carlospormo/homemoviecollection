'use strict';

angular.module('moviesApp', [
  'ngRoute',
  'moviesApp.main-menu',
  'moviesApp.services',
  'moviesApp.movies',
  'moviesApp.add'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/movies'});
}]);
