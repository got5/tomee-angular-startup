
app.controller('BlogCtrl', function ($scope,$filter, Restangular) {
    var postR = Restangular.all('post');
    var userR = Restangular.all('user');
    var commentR = Restangular.all('comment');

    $scope.editMode=false;
    $scope.newPost = {};

    var posts = $scope.posts = [];
    var users = $scope.users = [];
    var connectedUser;





    postR.getList().then(function(fPosts){
        posts = $scope.posts  = fPosts[0];

    });

    userR.getList().then(function(fUsers){
        users = $scope.users = fUsers[0];
        connectedUser = users[0];
    });

    $scope.isOwner = function(post){
        return post.user.id === connectedUser.id;
    };

    $scope.delete = function(post){
        if($scope.isOwner(post)){
            var pR = _.find(posts,function(p){
                return p.id === post.id
            });
            console.log(pR);
            post.remove().then(function(){
                var index = posts.indexOf(post);
                if (index > -1) {
                    $scope.splice(index, 1);
                }
            });
        }
    }

    $scope.save = function () {
        var post = $scope.newPost;
        post.userId = parseInt(connectedUser.id);

        postR.post(post,post,"").then(function(fPost){
            posts.push(fPost.p);
            console.log(fPost);
           // $scope.posts = posts;
        });



        $scope.newPost.title = "";
        $scope.newPost.content = "";

    };

    $scope.sendComment = function(comment,idPost){
        comment.postId = idPost;
        Restangular.all('comment').post(comment,comment,"").then(function(fComment){
           //need to add the new comment to the right post
            posts = $scope.posts =  _.map(posts,function(post){
                if(post.id==idPost){
                    /*The back send me back an object with the comment inside him -- wierd...*/
                   post.comments = $filter('array')(post.comments);
                   post.comments.push(fComment.comment);
                   return post;
                }else{
                    return post;
                }
            })
        })
        //reset form
        comment.author="";
        comment.content="";
    }

});