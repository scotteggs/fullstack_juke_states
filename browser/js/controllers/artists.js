app.controller('ArtistsCtrl', function ($scope, $stateParams, ArtistFactory) {
	ArtistFactory.fetchAll()
	.then(function (artists) {
		$scope.artists = artists;
	});
});