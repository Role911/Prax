(function () {
    angular
        .module('app.announcements')
        .component('announcements', {
            templateUrl: './announcements.component.html',
            controller: 'AnnouncementsController'
        });

})(angular);