angular.module('app').controller('app_detailsviewcool', app_detailsviewcool);
function app_detailsviewcool($scope, app) {
    'use strict';
    app.init($scope);
    $scope.incrementQuant = function () {
        $scope.data.quantity++;
    };
    $scope.decrementQuant = function () {
        if ($scope.data.quantity > 0) {
            $scope.data.quantity--;
        }
    };
}