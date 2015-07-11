app.controller('MoviesController', ['$scope', '$http', function($scope, $http){
	$http.get(moviesdata)
		.success(function(response){
			$scope.movies = response.movies;
		});
}])