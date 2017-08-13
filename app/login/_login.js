(function () {

    'use strict';

    angular.module('pogoApp').controller('loginController', ['appDataServices', LoginController]);

    function LoginController(appDataServices) {
        var vm = this;
        vm.user = {
            emailId: '',
            passWord: ''
        };


        vm.login = function (logincredential) {

            // To Do
            // Call login User to Authenticate User login

        };

    }
})();
