var app = angular.module('juke', ['ui.router']);


app.config(function($stateProvider) {
	$stateProvider.state('albumList', {
		url:'/albums',
		templateUrl: '/albumstemplate.html',
		controller: 'AlbumsCtrl'
	})
})
app.config(function($stateProvider) {
	$stateProvider.state('artistList', {
		url:'/artists',
		templateUrl: '/artiststemplate.html',
		controller: 'ArtistsCtrl'
	})
})

app.config(function($stateProvider) {
	$stateProvider.state('album', {
		url:'/album/:_id',
		templateUrl: '/albumtemplate.html',
		controller: 'AlbumCtrl'
	})
})