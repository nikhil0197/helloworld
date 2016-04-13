

var myApp=angular.module("myModule",[]).controller("myController",function($scope)
{var employee={
	firstName:"nikhil",
	lastName:"kumar",
	gender:"male"
};
$scope.employee=employee;

});