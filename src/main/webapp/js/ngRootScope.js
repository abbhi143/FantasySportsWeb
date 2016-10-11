
var myModule=angular.module("myStudentApp", []).controller("GreetController",function($scope,$rootScope)
{

	$scope.test1 = 'World';
    $rootScope.department = 'Angular';
});


var listController=function($scope)
{

	  $scope.names = ['Igor', 'Misko', 'Vojta'];
};


// attach controller to module. 

myModule.controller("ListController", listController);