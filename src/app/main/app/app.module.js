(function(angular) {
    'use strict';

    angular
        .module('app', [
            'app.announcements',
            'app.members',
            'app.education',
            'app.events',
            'app.metrics-reports',
            'app.settings',
            'app.flagged-media',
            'app.page-text'
        ])
        .config(config);
    
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
        $stateProvider
            .state('app', {
                /* abstract: true, */
                url: '/app',
                template: '<bg-app></bg-app>'
            });
    }
})(angular);