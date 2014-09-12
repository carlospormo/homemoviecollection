angular.module('moviesApp.main-menu',[])
.directive("mainMenu", function () {
    return {
        restrict: "A",
        templateUrl: "directives/main-menu.html",
        controller: function () {
            this.tab = 1;

            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "tab"
    };
});