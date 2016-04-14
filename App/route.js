myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/Views/Home/home.html',
			controller: 'homeController'
		})
		.when('/login', {
			templateUrl: '/Views/Home/login.html',
			controller: 'loginController'
		})
		.when('/dashboard', {
			templateUrl: '/Views/Home/dashboard.html',
			controller: 'dashboardController'
		})
		.when('/about', {
			templateUrl: '/Views/Home/about.html',
			controller: 'homeController'
		})
		.when('/topics/:topicId', {
			templateUrl: '/Views/Topics/topic.md',
			controller: 'topicController',
			authenticated: true
		})
		.when('/topics/:topicId/:postId/', {
			templateUrl: '/Views/Posts/post.md',
			controller: 'topicController',
			authenticated: true
		})
		.otherwise('/', {
			templateUrl: '/Views/Home/home.html',
			controller: 'homeController'
		});

}]);

myApp.run(['$rootScope', '$location', 'authFactory', 'buttonFactory', function($rootScope, $location, authFactory, buttonFactory) {
	// Globle button attribute initialize
	if (String(buttonFactory.getShow()) == "undefined") {
		buttonFactory.setShow(true);
	}
	$rootScope.buttonShow = buttonFactory.getShow();
	//buttonFactory.setShow($rootScope.buttonShow);
	console.log('Initial $rootScope.buttonShow = ' + $rootScope.buttonShow);
	//var getShow = buttonFactory.getShow();
	//console.log('buttonFactory.getShow() = ' + getShow);

	// Check auth while app running
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (next.$$route.authenticated) {
			$rootScope.targetUrl = $location.$$path;
			var userAuth = authFactory.getAccess();
			if (!userAuth) {
				$location.path('/login');
			}
		}
		$rootScope.buttonShow = buttonFactory.getShow();
	});
}]);

