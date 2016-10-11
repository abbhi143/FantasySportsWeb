
var myModule=angular.module("myStudentApp", []);

// create controller. 


var controller=function($scope)
{
//	var country = { name: 'United States of America', capital: "Washington, D.C.", flag: "Images/US_FLAG.png" }; 
//
//	$scope.country = country;
	
	var employees=[{firstName:'Madhu',lastName:'Sagar',gender:'Male',salary:'1010010'},
	               {firstName:'Madhu',lastName:'Sagar',gender:'Male',salary:'1010010'},
	              {firstName:'Madhu',lastName:'Sagar',gender:'Male',salary:'1010010'},
	              {firstName:'Madhu',lastName:'Sagar',gender:'Male',salary:'1010010'},
	               
	            ];
	$scope.employees=employees;
	
	
	var countries=[{name:"U.K",cities:["london","birmingham","steadsf"]},
	               {name:"U.S",cities:["london","birmingham","satestdsf"]},
	               {name:"INDIA",cities:["hyderabad","goa","sadtestsf"]}
	              ];
	
	$scope.countires=countries;
};


// attach controller to module. 

myModule.controller("ngRepeatController", controller);