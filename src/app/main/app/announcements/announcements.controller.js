(function(angular) {
    'use strict';

    angular
        .module('app.announcements')
        .controller('AnnouncementsController', AnnouncementsController);

        AnnouncementsController.$inject = [];
    
    function AnnouncementsController() {
        this.$onInit = onInit;

        function onInit() {
            //
        }
    }
})(angular);