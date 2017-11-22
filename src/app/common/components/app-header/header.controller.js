(function(angular) {
    'use strict';

    angular
        .module('components')
        .controller('HeaderController', HeaderController);

        HeaderController.$inject = ['$rootScope', '$state'];
    
    function HeaderController($rootScope, $state) {
        this.$onInit = onInit;

        function onInit() {
         
            }
        

    }
})(angular);