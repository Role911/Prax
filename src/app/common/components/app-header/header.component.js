(function(angular) {
    'use strict';

    angular
        .module('components')
        .component('header', {
            templateUrl: './header.component.html',
            controller: 'HeaderController'
        });
})(angular);