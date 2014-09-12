'use strict';

describe('moviesApp.movies module', function() {

    beforeEach(module('moviesApp.movies'));

    describe('movies controller', function() {

        it('should ....', inject(function($controller) {
            //spec body
            var moviesCtrl = $controller('MoviesCtrl');
            expect(moviesCtrl).toBeDefined();
        }));

    });
});