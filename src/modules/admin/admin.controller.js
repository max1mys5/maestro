angular.module("adminModule")
    .controller("adminController", ["$scope", "mlabServise","$state", function($scope, mlabServise, $state) {
        $scope.loginData = {
            email: '',
            password: ''
        };

        $scope.login = function() {
            mlabServise.login($scope.loginData).then(function(response) {
                console.log(response.data);
                if (response.data.length>0){
                	$state.go('dashboard')

                }
            })
        }


    }])
