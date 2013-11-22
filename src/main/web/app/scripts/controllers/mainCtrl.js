/**
 * Created by pierremarot on 08/11/2013.
 */

app.controller('MainCtrl', function ($scope) {
    $scope.views = {
        "main":{
            "url":"views/main.html"
        },
        "nav":{
            "url":"views/nav.html"
        },"footer":{
            "url":"views/footer.html"
        }
    };
});