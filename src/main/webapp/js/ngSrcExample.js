var myApp=angular.module("myModule",[]).controller("myController",function($scope)
		{
			$scope.message1="Added in JS.";
			$scope.message2="NOT DEFAULT";
			$scope.message3="NOT DEFAULT";
			//$scope.message="Madhu";
			$scope.showAlert=function()
			{
				alert("Show alert");
				
			};
			
			var student={ id:"123",name:"madhu", getName: function(){alert(this.name);}};
			$scope.studentDetails=student;
		});