var scotchApp = angular.module("mainApp", ['ngRoute']);

scotchApp.config(function($routeProvider) {
    $routeProvider.when('/home', {
            templateUrl : 'TestHome.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'ngRouteAbout.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'ngRouteContact.html',
            controller  : 'contactController'
        });
    
    
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'This is the Home page';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'This is the About page';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'This is the contact page.';
});