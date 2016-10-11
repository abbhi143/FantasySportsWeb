angular.module("myModule",[]).controller("myController",function ($scope)
{
	$scope.courses=[{name:"C#",likes:0,dislikes:0},{name:"Angular",likes:0,dislikes:0},{name:"Java",likes:0,dislikes:0},{name:"Javascript",likes:0,dislikes:0}];
	
	$scope.incrementLike= function(course)
	{
		course.likes++;
	};
	$scope.incrementDisLike= function(course)
	{
		course.dislikes++;
	};
	
	$scope.countires=[{name:"U.K",cities:["london","birmingham","steadsf"]},
	               {name:"U.S",cities:["london","birmingham","satestdsf"]},
	               {name:"INDIA",cities:["hyderabad","goa","sadtestsf"]}
	              ];
	
	
});