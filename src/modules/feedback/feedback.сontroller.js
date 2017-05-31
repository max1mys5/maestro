/* Controllers */

angular.module('feedbackModule')
    .controller('feedbackController', ['$scope', 'mlabServise', 'close', function($scope, mlabServise, close) {
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
            mlabServise.createPost($scope.formInfo);
            close();
        };
    }]);
