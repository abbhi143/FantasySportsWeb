
var myModule=angular.module("ngSrcModule", []);

// create controller. 


var controller=function($scope,$http,$log,translate)
{
	
	$http({method:"GET",url:"js/json.html"}).then(function(response){
		 $scope.employees=response.data.employees;
		 $log.info(response.data.employees);
		});

};



// attach controller to module. 

myModule.controller("ngCustomController", controller);

//myModule.factory("translate",function(){
//  return {
//  	processString: function(input){
//  		var output="";
//  		for(var i=0;i<input.length;i++)
//  		{
//  			if(i>0 && input[i]==input[i].toUpperCase())
//  			{
//  				output=output+" ";
//  			}
//  			output=output+input[i];
//  		}
//  		return output;
//  	}
//  }


myModule.service("translate",function(){
	this.processString=function(input)
	{
		var output="";
		for(var i=0;i<input.length;i++)
		{
			if(i>0 && input[i]==input[i].toUpperCase())
			{
				output=output+" ";
			}
			output=output+input[i];
		}
		return output;
	};
})
