angular.module('app')
.config(function($stateProvider, $locationProvider) {
$locationProvider.hashPrefix('');
    $stateProvider
    .state('feedback', {
        url: '/',
        templateUrl: "./modules/feedback/feedback.html",
        controller: 'feedbackController'
    })
})