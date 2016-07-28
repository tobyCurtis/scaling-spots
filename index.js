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
            url: 'topspots.json'
        }).then(function(response)
        {

            $scope.list = response.data;

        });



    }

    $scope.addRow = function()
    {


        $scope.list.push(
        {
            'name': $scope.name,
            'description': $scope.description,
            'location[0]': $scope.lat,
            'location[1]': $scope.long

        });

        $scope.name = '';
        $scope.description = '';
        $scope.lat = '';
        $scope.long = '';



    };
}]);
