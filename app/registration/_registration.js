(function () {

    'use strict';

    angular.module('pogoApp').controller('registerController', ['appDataService', RegisterController]);

    function RegisterController(appDataService) {

        var vm = this;

        vm.registerUser = function (userToRegister) {

            // To DO
            // Call register user on app Data Service for User Registration

        }
    }

})();
