var app = angular.module("app", ["ngRoute"]);

app.controller("controller", function($scope, $location) {
    $scope.login = function() {
        $location.path("/home");
    };
});

app.config(function ($routeProvider) {
    $routeProvider
    .when("/notas-frequencias", {
        templateUrl: "views/notas-frequencias.html",
        controller: "controller"
    })
    .when("/login", {
        templateUrl: "views/login.html",
        controller: "controller"
    })
    .when("/home", {
        templateUrl: "views/home.html",
        controller: "controller"
    })
    .when("/nota-disciplina", {
        templateUrl: "views/nota-disciplina.html",
        controller: "controller"
    })
    .otherwise ({
        templateUrl: "views/login.html",
        controller: "controller"
     });
});