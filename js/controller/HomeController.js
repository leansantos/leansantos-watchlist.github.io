app.controller('HomeController', ['$scope', '$http', function($scope, $http){
	$http.get(moviesdata)
		.success(function(response){
			$scope.movies = response.movies;
		});

	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;
		})

}])