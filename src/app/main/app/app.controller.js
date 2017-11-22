(function(angular) {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = [];
    
    function AppController() {
        this.$onInit = onInit;

        function onInit() {
            //
        }
    }
})(angular);