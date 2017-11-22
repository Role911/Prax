(function () {
    'use strict'
    angular
    .module('app.metrics-reports', [

    ])
    .config(config);


    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
        .state('app.metrics-reports', {
            abstract: true,
            url: '/metrics-reports',
            template: '<div ui-view></div>'
        })
        .state('app.metrics-reports.main', {
            url:'',
            template: '<metrics-reports></metrics-reports>'
        });

    }

})(angular);