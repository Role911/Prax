(function() {
    'use strict';

    var byndSpinner = {
        templateUrl: './bynd-spinner.component.html',
        bindings: {
            templateUrl: '@',
            imageSrc: '@',
            backgroundStyle: '<',
            customWatch: '&'
        },
        controller: ByndSpinnerController,
        controllerAs: 'byndSpinner'
    };

    angular
        .module('bynd.spinner', [])
        .component('byndSpinner', byndSpinner);

    ByndSpinnerController.$inject = ['$scope', '$http']
    function ByndSpinnerController($scope, $http) {
        var $ctrl = this;

        $ctrl.$onInit = onInit;

        function onInit() {
            var isLoading = getIsLoading();

            $ctrl.defaultTemplate = './bynd-spinner.default.html';

            $scope.$watch(isLoading, toggleSpinner);

            function getIsLoading() {
                if ($ctrl.customWatch() === undefined) {
                    return isLoadingDefault;
                } else {
                    return $ctrl.customWatch;
                }
            }

            function isLoadingDefault() {
                return $http.pendingRequests.length > 0;
            }

            function toggleSpinner(newIsLoading) {
                $ctrl.isLoading = newIsLoading;
            }
        }
    }
})();