
var myModule=angular.module("myModule", []);

// create controller. 


var controller=function($scope)
{
//	var country = { name: 'United States of America', capital: "Washington, D.C.", flag: "Images/US_FLAG.png" }; 
//
//	$scope.country = country;
	
	var students=[{name:'Madhu',lastName:'Sagar',dob:new Date("12/23/2012"),gender:'1',salary:'1010010'},
	               {name:'Sagar',lastName:'Madhu',dob:new Date("02/23/1990"),gender:'2',salary:'478897.78897'},
	              {name:'Srishthi',lastName:'T',dob:new Date("12/23/1890"),gender:'3',salary:'65657.737'},
	              {name:'Madhu',lastName:'Sagar',dob:new Date("12/23/1987"),gender:'1',salary:'8637.455'},
	               
	            ];
	$scope.students=students;
	$scope.sortColumn="name";
	$scope.reverseSort=false;
	
};
// attach controller to module. 

myModule.controller("myController", controller);

myModule.filter("gender",function()
		{
			return function(gender)
			{
				switch(gender)
				{
					case "1": return "Male";
					case "2": return "FeMale";
					case "3": return "Not Disclosed";
				}
			};
	
		});
		
		
