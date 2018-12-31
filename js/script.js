(function () {
	var app = angular.module("MyCannabisRx", ["ngRoute"]);
	app.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "views/home.html",
				controller: "Home"
			})
			.when("/Download", {
				templateUrl: "views/download.html",
				controller: "Download"
			})
			.when("/AboutUs", {
				templateUrl: "views/aboutus.html",
				controller: "About"
			})
			.when("/ContactUs", {
				templateUrl: "views/contactus.html",
				controller: "Contact"
			})
			.when("/FollowUs", {
				templateUrl: "views/followus.html",
				controller: "Follow"
			})
			.when("/Login", {
				templateUrl: "views/login.html",
				controller: "Login"
			})
			.when("/ThankYou", {
				templateUrl: "views/thankyou.html",
				controller: "ThankYou"
			})
			.otherwise({
				redirectTo: '/'
			});
	});
}());
