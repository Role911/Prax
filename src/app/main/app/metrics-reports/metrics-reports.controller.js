(function () {
    'use strict'
    angular

    .module('app.metrics-reports')
    .controller('MetricsReportsController', MetricsReportsController);


    MetricsReportsController.$inject = [];
    
    function MetricsReportsController() {
        this.$onInit = onInit;

        function onInit() {
            //
        }
    }
})(angular);