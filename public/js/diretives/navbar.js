angular.module("app").directive("navbar", function() {
  return {
    templateUrl: "views/navbar.html",
    replace: false,
    restrict: "E",
    scope: {
      title: '@'
    }
  }
})