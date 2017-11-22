(function(angular) {
    'use strict';

    angular
        .module('components')
        .controller('FooterController', FooterController);

        FooterController.$inject = ['$rootScope', '$state'];
    
    function FooterController($rootScope, $state) {
        this.$onInit = onInit;

        function onInit() {
         
            }
        

    }
})(angular);