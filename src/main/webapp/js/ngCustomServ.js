
var myModule=angular.module("myStudentApp", []);

// create controller. 


var controller=function($scope,stringService)
{
	$scope.convert=function(input)
	{
		$scope.output=stringService.processString(input);
	};
};


// attach controller to module. 

myModule.controller("ngCustomServiceController", controller);