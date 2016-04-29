myApp.controller('loginController', ['$rootScope', '$scope', '$location', 'authFactory', 'buttonFactory', function($rootScope, $scope, $location, authFactory, buttonFactory) {
	
	// Login submit button action
	$scope.submit = function() {
		var username = $scope.username;
		var password = $scope.password;

		if (username == 'elab' && password == 'chameleon') {
			authFactory.setAccess(true);
			console.log('Correct input.');

			buttonFactory.setShow(false);

			var newUrl = $rootScope.targetUrl;
			if (newUrl) {
				$location.path(newUrl);
			}
			else $location.path('/');
		}
		else console.log('Wrong input.');
	};
}]);