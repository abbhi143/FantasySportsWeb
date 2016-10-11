
var myModule=angular.module("myModule", []);

// create controller. 


var controller=function($scope)
{
	var country = { name: 'United States of America', capital: "Washington, D.C.", flag: "Images/US_FLAG.png" }; 

	$scope.country = country;
};


// attach controller to module. 

myModule.controller("ngsrcController", controller);