var myApp = angular.module('myApp', []);


myApp.controller('DemoController', ['$scope', '$http', function($scope, $http)
{
    activate();

    function activate()
    {
        // Simple GET request example:
        $http(
        {
            method: 'GET',
            url: '/topspots.json'
        }).then(function(response)
        {

            $scope.list = response.data;

        });
    }

}]);
