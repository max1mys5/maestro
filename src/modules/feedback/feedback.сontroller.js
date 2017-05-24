'use strict';
/* Controllers */

angular.module('feedbackModule')
    .controller('feedbackController',  ['$scope', 'mlabServise', function($scope, mlabServise) {
            $scope.formInfo = {
                name: '',
                email: '',
                number: '',
                message: ''
            };
        $scope.saveData = function() {

            console.log($scope.formInfo);
            mlabServise.createPost($scope.formInfo);
        };

    }]);
