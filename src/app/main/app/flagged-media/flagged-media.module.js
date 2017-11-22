(function(){
    'use strict'
    angular
    .module('app.flagged-media',[

    ])
    .config(config);

    config.$inject= ['$stateProvider'];

    function config($stateProvider){
        $stateProvider
            .state('app.flagged-media', {
                abstract: true,
                url: '/flagged-media',
                template: '<div ui-view></div>'
            })
            .state('app.flagged-media.main', {
                url: '',
                template: '<flagged-media></flagged-media>'
            });
    };


})(angular);