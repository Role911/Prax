(function(){
    'use strict'
    angular
    .module('app.page-text',[

    ])
    .config(config);

    config.$inject=['$stateProvider'];

    function config($stateProvider){
        $stateProvider
            .state('app.page-text',{
                abstract: true,
                url: '/page-text',
                template: '<div ui-view></div>'
            })
            .state('app.page-text.main',{
                url: '',
                template: '<page-text></page-text>'
            })
    };  

})(angular);