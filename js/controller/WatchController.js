app.controller('WatchController', ['$scope', '$http', '$routeParams', '$sce', function($scope, $http, $routeParams, $sce){
	$http.get(moviesdata)
		.success(function(response){
			$scope.movies = response.movies;
			
			
			$scope.moviesLink = function(id){
				return $sce.trustAsResourceUrl($scope.movies[id].link);
			};
                        
			$scope.moviesPoster = function(id){
				return $sce.trustAsResourceUrl($scope.movies[id].poster);
			};

		
		});
	$http.get(seriesdata)
		.success(function(response){
			$scope.tvseries = response.series;


			$scope.seriesLink = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].link);
			};
                        
                        $scope.seriesPoster = function(id){
				return $sce.trustAsResourceUrl($scope.tvseries[id].poster);
			};
		});

			$scope.getparamTitle = $routeParams.title;
			$scope.getparamId = $routeParams.id;
			$scope.getCategory = $routeParams.category;
	
	

}]);

app.directive('movieplayer', function(){
		
	return {
		restrict: 'A',
		template: "<div>Lester</div>"
	};
});

app.directive('seriesplayer', function(){

	return{
		restrict: 'A',
		template: "<video controls autoplay ><source src='{{seriesLink(getparamId)}}' type='video/mp4'></video>"
	}

});