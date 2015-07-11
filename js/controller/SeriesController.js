app.controller('SeriesController', ['$scope', '$http', function($scope, $http){
	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;
		});
}])