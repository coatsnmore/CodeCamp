/**
 * Simple note music player
 */
angular.module('codeCamp').controller('PlayController', ['$scope',
	function($scope) {

		$scope.instrument = "piano";
		$scope.player = Synth.createInstrument($scope.instrument);
		$scope.note = "A";
		$scope.interval = 3;
		$scope.seconds = 1;

		$scope.$watch('instrument', function(newValue, oldValue) {
			$scope.player = Synth.createInstrument(newValue);
		});

		$scope.playNote = function() {
			$scope.player.play($scope.note, $scope.interval, $scope.seconds);
		};
	}
]);

