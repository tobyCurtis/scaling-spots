(function() {
    'use strict';

    angular
        .module('topSpots')
        .factory('PageFactory', PageFactory);

    PageFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function PageFactory($http, $q) {
        var service = {
            loadJson: loadJson
        };
        return service;

        ////////////////

        function loadJson() {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: 'topspots.json'
            }).then(function(response) {
                defer.resolve(response);
            }, function(error) {
                defer.reject(error);
                $log.error(error);
            });

            return defer.promise;
        }
    }
})();