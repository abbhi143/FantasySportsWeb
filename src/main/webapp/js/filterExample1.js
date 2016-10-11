var myApp=angular.module("myModule",[]).controller("myController",function($scope)
		{
	var students = [{ name: 'BEN', dob: new Date("10/11/2000"), gender: "Male",salary:"55000.77"},
	                { name: 'TES', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"45000.78"},
	                { name: 'BCFG', dob:  new Date("10/12/1999"), gender: "Male",salary:"55000.7787"},
	                { name: 'RTGH', dob:  new Date("10/11/1900"), gender: "FeMale",salary:"40000.8966"},
	                { name: 'WERF', dob:  new Date("10/11/2012"), gender: "Male",salary:"75000.6575"},
	                { name: 'JUT', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"65000"},
	                { name: 'RTF', dob:  new Date("10/11/2000"), gender: "FeMale",salary:"55000"},
	                ];
	$scope.students=students;
	$scope.rows = 3;
	$scope.search=function(item)
	{
		if($scope.filterTable==undefined)
		{
			return true;
		}
		else
		{
			if(item.name.toLowerCase().indexOf($scope.filterTable.toLowerCase()) != -1 || 
					item.salary.toLowerCase().indexOf($scope.filterTable.toLowerCase()) != -1)
			{
				return true;
			}
		}
		return false;
	};
		});