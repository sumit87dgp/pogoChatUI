(function () {

    'use strict';

    angular.module('pogoApp').controller('loginController', ['userDataService', LoginController]);

    function LoginController(userDataService) {
        var vm = this;
        vm.user = {
            emailId: '',
            passWord: ''
        };


        vm.login = function () {

            // To Do
            // Call login User to Authenticate User login
            console.log('user',vm.user);
            userDataService.authenticateUser();

        };

    }
})();
