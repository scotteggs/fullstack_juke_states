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
		templateUrl: '/onealbumtemplate.html',
		controller: 'AlbumCtrl'
	})
})

app.config(function($stateProvider) {
	$stateProvider.state('artist', {
		url:'/artist/:_id',
		templateUrl: '/oneartisttemplate.html',
		controller: 'ArtistCtrl'
	})
	.state('artist.albums', {
		url:'/albums',
		templateUrl: 'oneartisttemplate_albums.html'
	})
	.state('artist.songs', {
		url:'/songs',
		templateUrl: 'oneartisttemplate_songs.html'
	})
})