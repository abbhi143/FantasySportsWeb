
var myModule=angular.module("myModule", []);

// create controller. 


var controller=function($scope)
{
//	var country = { name: 'United States of America', capital: "Washington, D.C.", flag: "Images/US_FLAG.png" }; 
//
//	$scope.country = country;
	
	var students=[{name:'Madhu',lastName:'Sagar',dob:new Date("12/23/2012"),gender:'Male',salary:'1010010'},
	               {name:'Sagar',lastName:'Madhu',dob:new Date("02/23/1990"),gender:'Male',salary:'478897.78897'},
	              {name:'Srishthi',lastName:'T',dob:new Date("12/23/1890"),gender:'Female',salary:'65657.737'},
	              {name:'Madhu',lastName:'Sagar',dob:new Date("12/23/1987"),gender:'Male',salary:'8637.455'},
	               
	            ];
	$scope.students=students;
	$scope.sortColumn="name";
	$scope.reverseSort=false;
	
	$scope.getSortClass=function(col)
	{
		if($scope.sortColumn==col)
		{
			if($scope.reverseSort==false)
			{
				return 'arrow-down';
			}
			else
			{
				return 'arrow-up';
			}
		}
	};
	
	$scope.sortData=function(col)
	{
		
		if($scope.sortColumn==col)
		{
			if($scope.reverseSort) 
			{
				$scope.reverseSort=false;
				return false;
			}
			else
			{
				$scope.reverseSort=true;
				return true;
			}
		}
		$scope.sortColumn=col;
	};

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