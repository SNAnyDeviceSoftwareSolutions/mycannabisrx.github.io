(function () {
	var app = angular.module("MyCannabisRx", ["ngRoute", "addthis"]);
	app.config(function ($addthisProvider) {
		var cfg = {
			'pubid': 'ra-5c3aee4d5ea20450'
		};
		$addthisProvider.config(cfg);
	});
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
			.when("/Login", {
				templateUrl: "views/login.html",
				controller: "Login"
			})
			.when("/ThankYou", {
				templateUrl: "views/thankyou.html",
				controller: "ThankYou"
			})
			.when("/TNC", {
				templateUrl: "views/tnc.html",
				controller: "TnC"
			})
			.otherwise({
				redirectTo: '/'
			});
	});
}());
