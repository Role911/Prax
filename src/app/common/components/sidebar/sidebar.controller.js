(function(angular) {
    'use strict';

    angular
        .module('components')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = [];
    
    function SidebarController() {
        this.$onInit = onInit;

        function onInit() {
            this.tabs = getTabs();

            function getTabs() {
                var keys = [
                    'Announcements',
                    'Members',
                    'Education',
                    'Events',
                    'Settings',
                    'Metrics / Reports',
                    'Flagged Media',
                    'Page Text',
                    'Praxhub Admins'

                ];

                return keys.map(mapKey);

                function mapKey(key) {
                    return {
                        key: key,
                        name: getName(key),
                        icon: getIcon(key),
                        state: getState(key)
                    };

                    function getName(key) {
                        return (key === 'bids_offers' ? 'Bids / Offers' : _.startCase(key));
                    }

                    function getIcon(key) {
                        return 'icon-' + _.kebabCase(key);
                    }

                    function getState(key) {
                        return 'app.' + _.kebabCase(key) + '.main';
                    }
                }
            }
        }
    }
})(angular);