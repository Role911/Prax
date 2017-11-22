(function(angular) {
    'use strict';

    angular
        .module('services')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['UsersService', '$localStorage', '$q', 'messages', '$state'];

    function AuthService(UsersService, $localStorage, $q, messages, $state) {
        var service = {
            user: null,
            login: login,
            logout: logout,
            getUser: getUser,
            getUserId: getUserId,
            getUserRoles: getUserRoles
        }

        return service;

        function login(credentials) {
            return UsersService
                .customMethod('post', 'createToken', null, null, credentials)
                .then(successCallback, errorCallback);
            
            function successCallback(response) {
                $localStorage.token = response.token;
                $state.go('app.dashboard.main');
            }

            function errorCallback(response) {
                var text, title;

                if (response.status === 401) {
                    text = response.data.error.message;
                    title = response.statusText;
                }

                messages.error(text, title);
            }
        }

        function logout() {
            $localStorage.$reset();
            service.user = null;
            $state.go('login');
        }

        function getUser() {
            if (service.user == null) {
                return UsersService.one(
                    service.getUserId(),
                    {
                        zoom: 'details'
                    }
                ).then(function(response) {
                    service.user = response;
                    return service.user;
                });
            }

            return service.user;
        }

        function getUserId() {
            var token = $localStorage.token;
            
            if (token) {
                return encodeToken(token).sub;
            } else {
                throw new Error("Auth JWT not found!");
            }
        }

        function getUserRoles() {
            var token = $localStorage.token;

            if (token) {
                return encodeToken(token).rls;
            } else {
                throw new Error("Auth JWT not found!");
            }
        }

        function encodeToken(token) {
            return JSON.parse(base64urlDecode(token.split('.')[1]))

            function base64urlDecode(str) {
                var output = str.replace('-', '+').replace('_', '/');

                switch (output.length % 4) {
                    case 0:
                        break;
                    case 2:
                        output += '==';
                        break;
                    case 3:
                        output += '=';
                        break;
                    default:
                        throw 'Illegal base64url string!';
                }

                return window.atob(output);
            }
        }
    }
})(angular);