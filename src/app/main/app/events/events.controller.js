(function () {
    'use strict'

    angular
        .module('app.events')
        .controller('EventsController', EventsController);

    EventsController.$inject = [];

    function EventsController() {
        this.$onInit = onInit;

        function onInit() {
            //
        };
    };

})(angular);