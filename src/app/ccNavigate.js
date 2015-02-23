/**
 * Common navigation directive
 */

var cc = angular.module('codeCamp');

cc.directive('ccNavigate', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'fragments/cc-navigate.html',
		controller: 'NavigateController'
	};
});

cc.controller('NavigateController', ['$scope', '$location',
	function($scope, $location) {

		$scope.home = function() {
			$location.path("");
		};

		$scope.play = function() {
			$location.path("play");
		};
	}
]);