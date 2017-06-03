angular.module('app')
    .controller('mainController', ['$scope', 'ModalService', '$state', function($scope, ModalService, $state) {
        $scope.showModal = function() {
            ModalService.showModal({
                templateUrl: "/modules/feedback/feedback.html",
                controller: "feedbackController"
            }).then(function(modal) {
                modal.close.then(function(result) {
                    $scope.message = "Close";
                });
            });

        }

        window.addEventListener("keypress", function showAdmin(event) {
            if (event.charCode == 96) {
                $state.go("admin");
            }
        });

    }]);
