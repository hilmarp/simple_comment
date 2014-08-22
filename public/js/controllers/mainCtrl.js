angular.module('mainCtrl', [])

	.controller('mainController', function($scope, $http, Comment) {

		// comment form data
		$scope.commentData = {};

		// spinning icon
		$scope.loading = true;

		// Ná í öll comment
		Comment.get()
			.success(function(data) {
				$scope.comments = data;
				$scope.loading = false;
			});

		// save comment
		$scope.submitComment = function() {
			$scope.loading = true;

			Comment.save($scope.commentData)
				.success(function(data) {
					// refresh comment list
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});
				})
				.error(function(data) {
					console.log(data);
				});
		};

		// eyða comment
		$scope.deleteComment = function(id) {

			$scope.loading = true;

			Comment.destroy(id)
				.success(function(data) {
					//refresh
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});
				});
		};
	});