(function(angular) {
    'use strict';

    angular
        .module('services')
        .factory('ApiService', ApiService)
        .config(config);
    
    ApiService.$inject = ['Restangular'];

    function ApiService(Restangular) {
        function ApiService(resource, relations) {
            this.resource = resource;
            if (relations && relations.length > 0) {
                createRelationships.call(this, relations);
            }
        }

        ApiService.prototype.all = function(params, headers) {
            return Restangular.all(this.resource).doGET('', params, headers);
        }

        ApiService.prototype.one = function(id, params, headers) {
            return Restangular.one(this.resource, id).doGET('', params, headers);
        }

        ApiService.prototype.post = function(data) {
            return Restangular.all(this.resource).post(data);
        }

        ApiService.prototype.remove = function(id) {
            return Restangular.one(this.resource, id).doDELETE();
        }

        ApiService.prototype.put = function(id, elem, path, params, headers) {
            return Restangular.one(this.resource, id).doPUT(elem, path, params, headers);
        }

        ApiService.prototype.customMethod = function(httpVerb, customMethodName, params, headers, elem) {
            return Restangular.all(this.resource).customOperation(httpVerb, customMethodName, params, headers, elem);
        }

        function createRelationships(relations) {
            relations.forEach(function(relation) {
                this[relation] = function(options) {
                    var method = options.method;
                    var resourceId = options.resourceId;

                    if (!options) {
                        error("Missing options param.");
                    }

                    if (['post', 'get', 'delete', 'put'].indexOf(method) == -1) {
                        error("Method not allowed.");
                    }

                    if (!resourceId || !method) {
                        error("Missing resourceId or method name.");
                    }

                    var methods = {
                        '_get': function() {
                            if (!options.relationId) {
                                return Restangular.one(this.resource, resourceId).doGET(relation, options.params, options.headers);
                            } else {
                                return Restangular.one(this.resource, resourceId).one(relation, options.relationId).doGET('', options.params, options.headers);
                            }
                        },
                        '_post': function() {
                            if (options.relationId) {
                                error("Do not use relationId param with POST method.");
                            }
                            return Restangular.one(this.resource, resourceId).all(relation).post(options.data);
                        },
                        '_put': function() {
                            if (!options.relationId) {
                                error("Missing relationId.");
                            } else {
                                return Restangular.one(this.resource, resourceId).one(relation, options.relationId).doPUT(options.data, '', options.params, options.headers);
                            }
                        },
                        '_delete': function() {
                            if (!options.relationId) {
                                error("Missing relationId.");
                            }
                            return Restangular.one(this.resource, resourceId).one(relation, options.relationId).doDELETE();
                        }
                    }

                    function error(msg) {
                        throw new Error(msg);
                    }

                    return methods['_' + method.toLowerCase()].call(this);

                }
            }.bind(this));
        }

        return ApiService;
    }

    config.$inject = ['RestangularProvider', 'env'];
    
    function config(RestangularProvider, env) {
        RestangularProvider
            .setDefaultHeaders({})
            .setBaseUrl(env.API_URL)
            .setErrorInterceptor(function (response) {
                console.error('XHR error: ' + response.config.method + ' ' + response.config.url + '\n' +
                    response.status + ' ' + response.statusText);
            });
    }
})(angular);