'use strict';

angular.module('moviesApp.movies.movie-info', [])
    .directive('movieInfo', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/movie-info.html'
    };
});
