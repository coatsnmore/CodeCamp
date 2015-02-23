//TODO remove
function canary() {
	return true;
}

var codeCamp = angular.module('codeCamp', ['ngRoute', 'ngResource']);

codeCamp.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/play', {
		templateUrl: 'fragments/play.html',
		controller: 'PlayController'
	});

	$routeProvider.otherwise({
		templateUrl: 'fragments/welcome.html',
		controller: 'WelcomeController'
	});
}]);

codeCamp.controller('WelcomeController', ['$scope', '$location',
	function($scope, $location) {
		//TODO remove if unnecessary
	}
]);

codeCamp.controller('PlayController', ['$scope', '$location',
	function($scope, $location) {

		$scope.instrument = "piano";
		$scope.note = "A";

		$scope.playNote = function (){
			console.log("playing note...");
		};
	}
]);

codeCamp.controller('NavigateController', ['$scope', '$location',
	function($scope, $location) {

		$scope.home = function() {
			$location.path("");
		};

		$scope.play = function() {
			$location.path("play");
		};
	}
]);

codeCamp.directive('ccNavigate', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'fragments/cc-navigate.html',
		controller: 'NavigateController'
	};
});