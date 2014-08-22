angular.module('commentService', [])

	.factory('Comment', function($http) {

		return {
			// ná í öll comment
			get : function() {
				return $http.get('/api/comments');
			},

			// save comment
			save : function(commentData) {
				return $http({
					method: 'POST',
					url: '/api/comments',
					headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
					data: $.param(commentData)
				});
			},

			// eyða comment
			destroy : function(id) {
				return $http.delete('/api/comments/' + id);
			}
		}
	});