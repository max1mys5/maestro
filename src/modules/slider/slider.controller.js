// создание модуля, внимание на пустой масив.
angular.module('sliderModule')
.controller('sliderContoller', ['$scope', sliderController]);

function sliderController($scope){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      id:0,
      image: 'http://lorempixel.com/1920/400/'
    },
    {
       id:1,
      image: 'http://lorempixel.com/1920/400/food'
    },
    {
       id:2,
      image: 'http://lorempixel.com/1920/400/sports'
    },
    {
       id:3,
      image: 'http://lorempixel.com/1920/400/people'
    }
  ];
}