angular.module("myModule",[]).controller("myController",function ($scope)
{
	
	$scope.message1="Message1";
	$scope.message2="Message2";
	$scope.path="Images/US_FLAG.png";
	$scope.name="US";
	$scope.flag="Images/US_FLAG.png";
	$scope.getText= function ()
	{
		alert("get Text has been called.");
		
	};
	
	$scope.students=[{id:1,name:"madhu"},{id:2,name:"sagar"},{id:3,name:"ramya"},{id:4,name:"paranay"}];
});