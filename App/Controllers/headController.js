myApp.controller('headController', ['$rootScope', '$scope', '$location', '$route', 'authFactory', 'buttonFactory', function($rootScope, $scope, $location, $route, authFactory, buttonFactory) {
	$scope.Login = function() {
		$location.path('/login');
		console.log('Go to login page!');
	};
	$scope.Logout = function() {
		$location.path('/');
		authFactory.setAccess(false);
		authFactory.rmAccess();
		console.log('Logged out!');
		buttonFactory.setShow(true);
		$route.reload();
	};
}]);