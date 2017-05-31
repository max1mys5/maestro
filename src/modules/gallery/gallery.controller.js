angular.module('galleryModule')
.controller('galleryController', ['$scope', function ($scope) {
	$scope.images = [
			{image: 'http://lorempixel.com/950/600/', description: ''},
			{image: 'http://lorempixel.com/950/600/food', description: 'food'},
			{image: 'http://lorempixel.com/950/600/sports', description: 'sports'},
			{image: 'http://lorempixel.com/950/600/people', description: 'people'},
			{image: 'http://lorempixel.com/950/600/technics', description: 'technics'},
			{image: 'http://lorempixel.com/950/600/nature', description: 'nature'},
			{image: 'http://lorempixel.com/950/600/city', description: 'city'}
	];

}]);