(function(angular) {
    'use strict';

    angular
        .module('app.members')
        .controller('MembersController', MembersController);

        MembersController.$inject = [];
    
    function MembersController() {
        this.$onInit = onInit;

        function onInit() {
            //
        }
    }
})(angular);