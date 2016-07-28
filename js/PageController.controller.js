(function() {
    'use strict';

    angular
        .module('topSpots')
        .controller('PageController', PageController);

    PageController.$inject = ['PageFactory'];

    /* @ngInject */
    function PageController(PageFactory) {
        var vm = this;
        vm.title = 'PageController';
        vm.spots = [];


        PageFactory.loadJson().then(function(response){
        	vm.spots = response.data;
        });

    }
})();
