(function () {
	var app = angular.module("MyCannabisRx");
	app.controller("ThankYou", ["$scope", "$log", "$interval", "$location", function ($scope, $log, $interval, $location) {
		$interval(function () {
			$location.path("/");
		}, 3000, 1);
	}]);
}());
