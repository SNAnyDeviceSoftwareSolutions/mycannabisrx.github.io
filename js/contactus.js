(function () {
	var app = angular.module("MyCannabisRx");
	app.controller("Contact", ["$scope", "$log", function ($scope, $log) {
		//		$log.info("We are in Contact controller.");
		$scope.initMap = function () {
			// The location of warWick
			var warWick = {
				lat: 41.706760,
				lng: -71.523265
			};
			// The map, centered at warWick
			var map = new google.maps.Map(
				document.getElementById('map'), {
					zoom: 4,
					center: warWick
				});
			// The marker, positioned at warWick
			var marker = new google.maps.Marker({
				position: uluru,
				map: map
			});
		};
	}]);

}());
