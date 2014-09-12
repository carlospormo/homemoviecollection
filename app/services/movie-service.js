'use strict';

angular.module('moviesApp.services', [])

.factory('movieService', function () {

    var STORAGE_ID = 'movies';

    return {
        get: function () {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
        },

        post: function (movie) {
            var movies = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
            movies.push(movie);
            localStorage.setItem(STORAGE_ID, JSON.stringify(movies));
        }
    };
});