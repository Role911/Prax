(function(angular) {
    'use strict';

    angular
        .module('app.education', [
            
        ])
        .config(config);
    
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
        $stateProvider
            .state('app.education', {
               abstract: true, 
                url: '/education',
                template: '<div ui-view></div>'
            })
            .state('app.education.main', {
                 url: '',
                 template: '<education></education>'
                
             });
          
    }
})(angular);