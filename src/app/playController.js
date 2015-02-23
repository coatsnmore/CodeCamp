/**
 * Simple note music player
 */
angular.module('codeCamp').controller('PlayController', ['$scope', '$location',
	function($scope, $location) {

		$scope.instrument = "piano";
		$scope.note = "A";

		$scope.playNote = function() {
			console.log("playing note...");
		};
	}
]);