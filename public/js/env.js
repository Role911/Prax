(function() {
    'use strict';

   angular
        .module('environment', [])
        .constant('env', {
            ENVIRONMENT: 'local',
            API_URL: 'http://blockgrain.api/api/v1'
        });
})();