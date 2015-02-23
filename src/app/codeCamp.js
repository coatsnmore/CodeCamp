//TODO remove
function canary() {
	return true;
}

var cc = angular.module('codeCamp', ['ngRoute', 'ngResource']);

cc.config(['$routeProvider', function($routeProvider) {

	$routeProvider.when('/play', {
		templateUrl: 'fragments/play.html',
		controller: 'PlayController'
	});

	$routeProvider.otherwise({
		templateUrl: 'fragments/welcome.html'
	});
}]);

