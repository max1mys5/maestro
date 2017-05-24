'use strict';
/* Controllers */

angular.module('feedbackModule')
    .controller('feedbackController', ['$scope', function($scope) {
        $scope.formInfo = {};
        $scope.saveData = function() {

            console.log($scope.formInfo);
        };

    }]);
