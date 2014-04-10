﻿
$(function () {

    controller('loginCtrl', ['$scope', '$window', '$http', function ($scope, $window, $http) {

        $scope.username = $window.localStorage.getItem("login_username");
        if (!$scope.username) $scope.username = "";
        $scope.password = "";

        $scope.doregist = function () {
            $window.alert('注册成功！');
        }

        $scope.getpassword = function () {
            $window.alert('确认邮件已经发出，请查收。');
        }

        $scope.dologin = function () {

            $window.location = "admin/index.html";

            //$window.localStorage.setItem("login_username", $scope.username);

            //var url = 'Api/Auth';
            //var data = { Name: $scope.username, Password: $scope.password };

            //$http.post(url, data);//jquery
        }
         

    }]);
});

function controller(ctlName, args) {
    var fun = args[args.length - 1];
    var $scope = {}, $window = window, $http = $;

    fun($scope, $window, $http);

    for (var i in $scope) {
        if ($('#' + i)) {
            if (typeof ($scope[i]) == "function") { 
                $('#' + i).on("click", $scope[i]);
            } else {
                $('#' + i).val($scope[i]);
                $('#' + i).on("change", function () {
                    $scope[this.id] = this.value;
                });
            }
        }
    }
}