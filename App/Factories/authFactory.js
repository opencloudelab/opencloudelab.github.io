myApp.factory('authFactory', ['$cookieStore', function($cookieStore) {
	var authFactory = {};
	// Set access token from login page
	authFactory.setAccess = function(accessToken) {
		// Store token into cookies
		$cookieStore.put('accessToken', accessToken);
		// authFactory.authToken = accessToken;
	};
	// Get current access token
	authFactory.getAccess = function() {
		authFactory.authToken = $cookieStore.get('accessToken');
		return authFactory.authToken;
	};
	// Clear access token
	authFactory.rmAccess = function() {
		$cookieStore.remove('accessToken');
	};

	return authFactory;
}]);