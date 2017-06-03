angular.module("adminModule")
.controller('dashboardController', ['$scope', 'mlabServise', function ($scope, mlabServise) {
	$scope.orders = [];
	getOrders();
	function getOrders(){
		mlabServise.getOrders().then(function(response){
			$scope.orders = response.data;
			console.log($scope.orders)
		});
	}
}])