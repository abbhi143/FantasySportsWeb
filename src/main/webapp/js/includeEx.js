
var myModule=angular.module("myModule", []);

// create controller. 


var controller=function($scope)
{
//	var country = { name: 'United States of America', capital: "Washington, D.C.", flag: "Images/US_FLAG.png" }; 
//
//	$scope.country = country;
	var students = [{ name: 'BEN', dob: new Date("10/11/2000"), gender: "Male",salary:"55000.77"},
	                { name: 'TES', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"45000.78"},
	                { name: 'BCFG', dob:  new Date("10/12/1999"), gender: "Male",salary:"55000.7787"},
	                { name: 'RTGH', dob:  new Date("10/11/1900"), gender: "FeMale",salary:"40000.8966"},
	                { name: 'WERF', dob:  new Date("10/11/2012"), gender: "Male",salary:"75000.6575"},
	                { name: 'JUT', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"65000"},
	                { name: 'RTF', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"55000"},
	                ];
	$scope.students=students;

};


// attach controller to module. 

myModule.controller("myController", controller);

/*
$scope.sortData=function(columnName)
{
	$scope.reverseSort=($scope.sortColumn==columnName)?!$scope.reverseSort:false;
	$scope.sortColumn=columnName;
};
$scope.getSortClass=function(columnName)
{
	if($scope.sortColumn==columnName)
	{
		return $scope.reverseSort ? 'arrow-down':'arrow-up';
	}
	return '';
};*/