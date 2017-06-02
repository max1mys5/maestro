angular.module('galleryModule')
.controller('galleryController', ['$scope', function ($scope) {
	$scope.images = [
			{image: 'http://lorempixel.com/700/400/', description: ''},
			{image: 'http://lorempixel.com/700/400/food', description: 'food'},
			{image: 'http://lorempixel.com/700/400/sports', description: 'sports'},
			{image: 'http://lorempixel.com/700/400/people', description: 'people'},
			{image: 'http://lorempixel.com/700/400/technics', description: 'technics'},
			{image: 'http://lorempixel.com/700/400/nature', description: 'nature'},
			{image: 'http://lorempixel.com/700/400/city', description: 'city'}
	];
$scope.currentImage = $scope.images[0];	

$scope.setCurrentImage = function(image) {
$scope.currentImage = image;
}

}]);