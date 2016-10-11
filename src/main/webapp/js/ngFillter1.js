var myApp=angular.module("myModule",[]).controller("myController",function($scope)
		{
	var students = [{ name: 'BEN', dob: new Date("10/11/2000"), gender: "Male",salary:"55000.77",city:"hyderabad"},
	                { name: 'TES', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"45000.78",city:"vizag"},
	                { name: 'BCFG', dob:  new Date("10/12/1999"), gender: "Male",salary:"55000.7787",city:"london"},
	                { name: 'RTGH', dob:  new Date("10/11/1900"), gender: "FeMale",salary:"40000.8966",city:"mumbai"},
	                { name: 'WERF', dob:  new Date("10/11/2012"), gender: "Male",salary:"75000.6575",city:"pune"},
	                { name: 'JUT', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"65000",city:"kolkata"},
	                { name: 'RTF', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"55000",city:"chennai"},
	                ];
	$scope.students=students;
	$scope.rows = 3;
	
	$scope.search=function(item)
	{
		if($scope.filterData===undefined)
		{
			return true;
		}
		else if(item.name.toLowerCase()==$scope.filterData.toLowerCase() || item.city.toLowerCase()==$scope.filterData.toLowerCase())
		{
			return true;
		}
		return false;
	}
		});