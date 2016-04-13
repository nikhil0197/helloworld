

var myApp=angular.module("myModule",[]).controller("myController",function($scope)
{
	var countries=[
	{
		name:"U.K",
		cities:[
		{name:"london"},
		{name:"manchester"},
		{name:"birmingham"},
		
		]
	},	
	
	{
		name:"U.S",
		cities:[
		{name:"washigaton"},
		{name:"newyork"},
		{name:"chicago"},
		
		]
	},	
	
	{
		name:"INDIA",
		cities:[
		{name:"Delhi"},
		{name:"Mumbai"},
		{name:"chennai"},
		
		]
	}	
	
	];
	$scope.countries=countries;

});