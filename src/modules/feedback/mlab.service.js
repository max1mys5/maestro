angular.module("feedbackModule")
    .factory('mlabServise', ['$http', function($http) {

        return {
            createPost: function(object) {
                return $http.post('https://api.mlab.com/api/1/databases/formbase/collections/users?apiKey=UxV5LUb3l_zCdxoBJTRaXXo1qWEDKRbK', object)
            }
        }

    }])
