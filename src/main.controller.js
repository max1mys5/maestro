angular.module('app')
    .controller('mainController', ['$scope','ModalService', function($scope, ModalService) {
        $scope.showModal = function() {
            ModalService.showModal({
                templateUrl: "/modules/feedback/feedback.html",
                controller: "feedbackController"
            })
        }

    }]);
