(function(angular) {
    'use strict';

    angular
        .module('app.members', [
            
        ])
        .config(config);
    
    config.$inject = ['$stateProvider'];
    
    function config($stateProvider) {
        $stateProvider
            .state('app.members', {
               abstract: true, 
                url: '/members',
                template: '<div ui-view></div>'
            })
            .state('app.members.main', {
                 url: '',
                 template: '<members></members>'
                
             });
          
    }
})(angular);