myApp.controller('topicController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.topicMsg = 'This is no.' + $routeParams.topicId + ' topic.';
	$scope.postMsg = 'This is no.' + $routeParams.topicId + ' topic no.' + $routeParams.postId + ' post.'; 
	$scope.topicName = $routeParams.topicId;
	$scope.x = true;
}]);