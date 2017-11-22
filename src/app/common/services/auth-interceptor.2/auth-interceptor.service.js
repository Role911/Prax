(function(angular) {
    'use strict';

    angular
        .module('services')
        .factory('AuthInterceptorService', AuthInterceptorService);

    AuthInterceptorService.$inject = ['$localStorage', '$q'];

    function AuthInterceptorService($localStorage, $q) {
        return {
            request: request,
            response: response,
            responseError: responseError
        };

        function request(request) {
            if ($localStorage.token) {
                request.headers.Authorization = 'Bearer ' + $localStorage.token;
            }

            return request;
        }

        function response(response) {
            if (response.status === 401 || response.status === 403) {
                delete $localStorage.token;
                $location.path('/login');
            }

            return $q.when(response);
        }

        function responseError(error) {
            return $q.reject(error);
        }

    }
})(angular);