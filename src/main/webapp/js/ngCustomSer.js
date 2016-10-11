
var myModule=angular.module("ngSrcModule", []);

// create controller. 


var controller=function($scope,$http,$log,stringService)
{
	$scope.convert=function(input)
	{
		$scope.output=stringService.processString(input);
	};
};



// attach controller to module. 

myModule.controller("ngCustomSer", controller);

//myModule.factory('stringService', function(){
//    return {
//    	processString: function(input){
//    		var output="";
//    		for(var i=0;i<input.length;i++)
//    		{
//    			if(i>0 && input[i]==input[i].toUpperCase())
//    			{
//    				output=output+" ";
//    			}
//    			output=output+input[i];
//    		}
//    		return output;
//    	}
//    }
//});

//myModule.service('stringService', function(MathService){
//	   this.square = function(a) {
//	      return MathService.multiply(a,a);
//	   }
//	});