myApp.factory('buttonFactory', ['$cookieStore', function($cookieStore) {
	var buttonFactory = {};
	buttonFactory.setShow = function(buttonShow) {
		$cookieStore.put('buttonShow', buttonShow);
	};
	buttonFactory.getShow = function(){
		buttonFactory.buttonShow = $cookieStore.get('buttonShow');
		return buttonFactory.buttonShow;
	};
	return buttonFactory;
}]);