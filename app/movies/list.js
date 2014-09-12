'use strict';

angular.module('moviesApp.movies', ['ngRoute', 'moviesApp.movies.movie-info'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movies', {
    templateUrl: 'movies/list.html',
    controller: 'MoviesCtrl'
  });
}])

.controller('MoviesCtrl', ['movieService',function (movieService) {
    var self = this;
    self.movies = movieService.get();
    
}]);