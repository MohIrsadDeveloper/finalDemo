mainApp.controller("registerController", function ($scope, $http, $location) {
    $scope.message = "Welcome to register"
    $scope.user = {
        username : "abdul",
        email: "abdul2@gmail.com",
        password: "abdul",
        confirmPassword : "abdul"
    }
    $scope.register = function () {
        console.log("Register Angular Api");
        var url = 'http://localhost:4000/api/admin/register'
        var userData = this.user;
        console.log(userData);
        var config = {
            "Content-Type": "application/json"
        };
        console.log(userData);
        $http.post(url, userData, config).success(function (response) {
            console.log(response);
            if (!response.data) {
                console.log(response)
                $scope.failed = response.msg
            } else {
                $location.path("/login");
            }

        })
    }
})