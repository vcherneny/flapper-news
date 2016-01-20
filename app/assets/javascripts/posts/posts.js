myApp
    .factory('posts', [
        '$http',
        function($http) {
            var o = {
                posts: []
            };
            o.getAll = function() {
                return $http.get('/posts.json', post).success(function(data) {
                    angular.copy(data, o.posts);
                })
            }

            o.create = function() {
                return $http.post('/posts.json', post).success(function(data){
                    o.posts.push(data);
                });
            }
            return o;
        }
    ]);
