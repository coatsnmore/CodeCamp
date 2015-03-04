describe('PlayController', function() {
	beforeEach(module('codeCamp'));

	var $controller, $scope, $rootScope;

	beforeEach(inject(function(_$rootScope_, _$controller_) {
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
	}));

	describe('Default Play Controller Scope', function() {
		var controller;

		beforeEach(function() {
			controller = $controller('PlayController', {
				$scope: $scope
			});
		});

		it('defaults the note to A', function() {
			expect($scope.note).toEqual('A');
		});

		it('defaults the instrument to piano', function() {
			expect($scope.instrument).toEqual('piano');
		});

		it('defaults the interval to 3', function() {
			expect($scope.interval).toEqual(3);
		});

		it('defaults the seconds to 1', function() {
			expect($scope.seconds).toEqual(1);
		});
	});


	// $scope.instrument = "piano";
	// $scope.player = Synth.createInstrument($scope.instrument);
	// $scope.note = "A";
	// $scope.interval = 3;
	// $scope.seconds = 1;
});