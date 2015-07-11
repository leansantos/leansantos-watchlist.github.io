app.controller('NavigationController',['$scope', '$routeParams', function($scope, $routeParams){
	$scope.name = "Lester Anthony";
	$scope.getName = $routeParams.fname;
	$scope.navigation = 
	{
		// Homepage Navigation -----index.html
		mainNav:[
				{nav: 'MOVIES', link: '#/movies'},
				{nav: 'TV SERIES', link: '#/tv-series'},
				{nav: 'ANIME', link: '#/anime'},
				],
		sideNav:[
				{nav: 'Action', link: '#/action'},
				{nav: 'Drama', link: '#/drama'},
				{nav: 'Comedy', link: '#/getName/'+$scope.name}
				]
	}

}]);