var app = angular.module('mymovieApp', ['ngRoute', 'ngAnimate', 'angularUtils.directives.dirPagination'])

var moviesdata = "http://leansantos-watchlist.github.io/js/data/movies.json"; 
var seriesdata = "http://leansantos-watchlist.github.io/js/data/series.json";

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		})
		.when('/movies', {
			templateUrl: 'partials/movies.html',
			controller: 'MoviesController'
		})
		.when('/movies/:id/watch-:title', {
			templateUrl: 'partials/watch-movie.html',
			controller: 'WatchController'
		})


		.when('/tv-series', {
			templateUrl: 'partials/series.html',
			controller: 'SeriesController'
		})
		.when('/tv-series/:id/watch-:title_S:season-E:episode', {
			templateUrl: 'partials/watch-series.html',
			controller: 'WatchController'
		})
		.when('/anime', {
			templateUrl: 'partials/anime.html'
		})
		

		.when('/getName/:fname', {
			templateUrl: 'partials/anime.html'
		})
		.otherwise({
			template: "<h1>Page not found</h1>"
		})
}]);