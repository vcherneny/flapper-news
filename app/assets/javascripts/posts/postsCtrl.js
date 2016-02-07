myApp
    .controller('PostsCtrl', [
        '$scope',
        'posts',
        'post',
        function($scope, posts, post){
            $scope.post = post;

            $scope.addComment = function() {
                if($scope.body === '') {return; }

                posts.addComment(post.id, {
                  body: $scope.body,
                  author: 'user'
                }).success(function(comment) {
                  $scope.post.comments.push(comment);
                });

                $scope.body = '';
            };

            $scope.upvoteComment = function(comment) {
              posts.upvoteComment(post, comment);
            };
        }
    ]);
