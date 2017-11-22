(function(angular) {
    'use strict';

    angular
        .module('app.announcements', [
            
        ])
        .config(config);
    
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
        $stateProvider
            .state('app.announcements', {
               abstract: true, 
                url: '/announcements',
                template: '<div ui-view></div>'
            })
            .state('app.announcements.main', {
                 url: '',
                 template: '<announcements></announcements>'
                
             });
          
    }
})(angular);