angular.module('codeCamp', ['ngRoute', 'ngResource']).config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/play', {
		templateUrl: 'fragments/play.html',
		controller: 'PlayController'
	});

	$routeProvider.otherwise({
		templateUrl: 'fragments/welcome.html'
	});
}]).controller('NavigateController', ['$scope', '$location',
	function($scope, $location) {

		$scope.home = function() {
			$location.path("");
		};

		$scope.play = function() {
			$location.path("play");
		};
	}
]).directive('ccNavigate', function() {
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'fragments/cc-navigate.html',
		controller: 'NavigateController'
	};
});
