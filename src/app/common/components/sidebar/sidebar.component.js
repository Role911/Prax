(function(angular) {
    'use strict';

    angular
        .module('components')
        .component('sidebar', {
            templateUrl: './sidebar.component.html',
            controller: 'SidebarController'
        });
})(angular);