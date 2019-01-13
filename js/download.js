(function () {
	var app = angular.module("MyCannabisRx");
	app.controller("Download", ["$scope", "$log", "$window", function ($scope, $log, $window) {
		//		$log.info("We are in Download controller.");
		$window.open('https://testflight.apple.com/join/VMIjdmGz', '_blank');
	}]);
}());
