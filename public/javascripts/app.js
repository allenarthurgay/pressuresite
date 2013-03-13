'use strict';

define(['angular'], function(angular){
    var module = angular.module('pressuresite', []);

    module.directive('contactForm', ['contactService', function (contactService) {
        return {
            restrict: 'E',
            templateUrl: require.toUrl('./contactForm.html'),
            scope: {}
        };
    }]);

    module.factory('contactService', function ($http) {
        function contact() {

            return true;
            /*
             $http.get('/login')
             .success(function (data, status, header, config) {

             })
             .error(function (data, status, headers, config) {

             }); */
        }

        return {
            contact: contact
        };
    });

    module.directive('appointmentForm', ['appointmentService', function (contactService) {
        return {
            restrict: 'E',
            templateUrl: require.toUrl('./appointmentForm.html'),
            scope: {}
        };
    }]);

    module.factory('appointmentService', function ($http) {
        function contact() {

            return true;
            /*
             $http.get('/login')
             .success(function (data, status, header, config) {

             })
             .error(function (data, status, headers, config) {

             }); */
        }

        return {
            contact: contact
        };
    });
});
