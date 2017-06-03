angular.module("feedbackModule")
    .factory('mlabServise', ['$http', function($http) {

        return {
            createPost: function(object) {
                return $http.post('https://api.mlab.com/api/1/databases/formbase/collections/users?apiKey=UxV5LUb3l_zCdxoBJTRaXXo1qWEDKRbK', object)
            },
            login: function(data) {
                return $http.get('https://api.mlab.com/api/1/databases/formbase/collections/order?apiKey=UxV5LUb3l_zCdxoBJTRaXXo1qWEDKRbK&q={"email": \"' + data.email + '\","password":\"' + data.password + '\"}')
            },
            getOrders: function() {
                return $http.get('https://api.mlab.com/api/1/databases/formbase/collections/users?apiKey=UxV5LUb3l_zCdxoBJTRaXXo1qWEDKRbK')
            }
        }

    }])
