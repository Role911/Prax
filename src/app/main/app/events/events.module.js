(function () {
    'use strict'

    angular
    .module('app.events', [

    ])

    .config(config);

    config.$inject=  ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('app.events', {
                abstract: true,
                url: '/events',
                template: '<div ui-view></div>'
            }).
            state('app.events.main', {
                url:'',
                template: '<events></events>'
            });
    }


})(angular);