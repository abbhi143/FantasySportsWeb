
var myModule=angular.module("ngSrcModule", []);

// create controller. 


var controller=function($scope,$http,$log)
{
	 $scope.Mahesh = {};
     $scope.Mahesh.name = "Mahesh Parashar";
     $scope.Mahesh.rollno  = 1;

     $scope.Piyush = {};
     $scope.Piyush.name = "Piyush Parashar";
     $scope.Piyush.rollno  = 2;
};



// attach controller to module. 

myModule.controller("ngCustomController", controller);

myModule.directive('madhu', function() {
	   //define the directive object
	   var directive = {};
	   
	   //restrict = E, signifies that directive is Element directive
	   directive.restrict = 'E';
	   
	   //template replaces the complete element with its text. 
	   directive.template = "Student: <b>{{student.name}}</b> , Roll No: <b>{{student.rollno}}</b>";
	   
	   //scope is used to distinguish each student element based on criteria.
	   directive.scope = {
	      madhu : "=name"
	   };
//	   
	   //compile is called during application initialization. AngularJS calls it once when html page is loaded.
		
	   directive.compile = function(element, attributes) {
	      element.css("border", "1px solid #cccccc");
	      
	      //linkFunction is linked with each element with scope to get the element specific data.
	      var linkFunction = function($scope, element, attributes) {
	         element.html("Student: <b>"+$scope.madhu.name +"</b> , Roll No: <b>"+$scope.madhu.rollno+"</b><br/>");
	    	//  element.html("<sagar>Modified content</sagar>");
	    	      element.css("background-color", "#ff00ff");
	      }
	      return linkFunction;
	   }
	   return directive;
	});
