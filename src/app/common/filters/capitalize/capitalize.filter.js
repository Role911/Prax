(function(angular) {
    'use strict';

    angular
        .module('filters')
        .filter('capitalize', capitalize);
        
    function capitalize() {
        return function(value) {
            if (_.isString(value)) {
                return _.capitalize(value);
            } else {
                return value;
            }
        }
    }
})(angular);