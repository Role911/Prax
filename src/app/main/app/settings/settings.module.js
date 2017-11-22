(function () {
    'use strict'
    angular
    .module('app.settings', [

    ])
    .config(config);


    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
        .state('app.settings', {
            abstract: true,
            url: '/settings',
            template: '<div ui-view></div>'
        })
        .state('app.settings.main', {
            url:'',
            template: '<settings></settings>'
        });

    }

})(angular);