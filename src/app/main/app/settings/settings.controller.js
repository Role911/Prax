(function () {
    'use strict'
    angular

    .module('app.settings')
    .controller('SettingsController', SettingsController);


    SettingsController.$inject = [];
    
    function SettingsController() {
        this.$onInit = onInit;

        function onInit() {
            //
        }
    }
})(angular);
