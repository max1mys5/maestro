angular.module('app')
    .config(function($stateProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $stateProvider

                .state('gallery', {
                    url: 'gallery',
                    templateUrl: "./modules/gallery/gallery.html",
                    controller: 'galleryController'
                })
});