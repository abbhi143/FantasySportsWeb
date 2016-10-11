


var own1 = angular.module("own1",[]);
own1.value("Madhu","Sagar");
own1.controller("MyController1", function($scope,Madhu,$log) {
	this.greet="hello";
	$log.info("dddddddd"+Madhu);
});


var own2 = angular.module("own2",[]);

own2.controller("MyController2", function($scope) {
this.greet="hello1";
});


var myModule=angular.module("myStudentApp", ['own1','own2']);

