(function(){
    'use strict'
    angular

    .module('app.flagged-media')
    .component('flaggedMedia', {
        templateUrl: './flagged-media.component.html',
        controller: 'FlaggedMediaController'
    });
})(angular);