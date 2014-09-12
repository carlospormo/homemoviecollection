'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('movies app', function() {

  browser.get('index.html');

  it('should automatically redirect to /movies when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/movies");
  });


  describe('movie', function() {

    beforeEach(function() {
      browser.get('index.html#/movies');
    });


    it('should render movies when user navigates to /movies', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for movies/);
    });

  });


  describe('add', function() {

    beforeEach(function() {
        browser.get('index.html#/add');
    });


    it('should render add when user navigates to /add', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for add/);
    });

  });
});
