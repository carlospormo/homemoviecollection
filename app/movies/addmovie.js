'use strict';

angular.module('moviesApp.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'movies/addmovie.html',
    controller: 'AddCtrl'
  });
}])

.controller('AddCtrl', ['movieService', '$location', function (movieService, $location) {
    var self = this;
    self.movie = {};
    self.add = function () {
        movieService.post(self.movie);
        self.movie = {};
        $location.path('/movies');
    };
}]);