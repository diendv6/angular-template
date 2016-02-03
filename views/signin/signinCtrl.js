'use strict';
angular.module('hiApp').controller('signinCtrl', ['$http', '$rootScope','$scope', function($http,$rootScope,$scope){
	$rootScope.titlePage = 'Sign In Page';
	$scope.submit = function() {
		console.log('Hello');
	};
	
}]);