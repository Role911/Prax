(function(angular) {
    'use strict';

    angular
        .module('app.education')
        .controller('EducationController', EducationController);

        EducationController.$inject = [];
    
    function EducationController() {
        this.$onInit = onInit;

        function onInit() {
            //
        }
    }
})(angular);