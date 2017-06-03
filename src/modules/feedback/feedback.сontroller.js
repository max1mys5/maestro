/* Controllers */

angular.module('feedbackModule')
    .controller('feedbackController', ['$scope', 'mlabServise', 'close', 'toastr', function($scope, mlabServise, close, toastr) {
        $scope.formInfo = {
            name: '',
            email: '',
            number: '',
            message: ''
        };
        $scope.close = function(result) {
            close(result, 300); // close, but give 500ms for bootstrap to animate
            // console.log('Close');
        };
        $scope.saveData = function() {

            // console.log($scope.formInfo);
            mlabServise.createPost($scope.formInfo).then(function(response) {
                // console.log(response);
                toastr.success('Наш менеджер обязательно сважится с Вами в ближайшее время, по указаному телефону. Хорошего дня!)','Благодарим Вас за заказ!');
                close();
            });
        };
    }]);
