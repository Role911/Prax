(function(angular) {
    'use strict';

    angular
        .module('praxhub', [
            // Third-party
            'ui.router',
            'angular-loading-bar',
            'ngStorage',
            'ui.bootstrap',
            'toastr',
            'restangular',
            'ngAnimate',
            // Templates
            'templates',
            // Common
            'environment',
            'components',
            'filters',
            'services',
            // Main
          
            'app'
        ])
        .config(config)
        .run(run);
    
    config.$inject = ['$locationProvider', '$httpProvider', '$qProvider'];
    
    function config($locationProvider, $httpProvider, $qProvider) {
        $locationProvider
            .html5Mode(true)
            .hashPrefix('!');
        
        $httpProvider.interceptors.push('AuthInterceptorService');

        $qProvider.errorOnUnhandledRejections(false);
    }

    run.$inject = ['$rootScope'];

    function run($rootScope) {
        $rootScope.$on('$stateChangeStart', onStateChangeStart);
        $rootScope.$on('$stateChangeSuccess', onStateChangeSuccess);

        function onStateChangeStart(event, toState, toParams, fromState, fromParams, options) {
            //
        }

        function onStateChangeSuccess(event, toState, toParams, fromState, fromParams, options) {
            //
        }
    }
})(angular);