(function () {

    'use strict';
    angular.module('pogoApp').factory('userDataService', ['$http', UserDataService]);

    function UserDataService($http) {
        return {
            authenticateUser: function (loginVM) {
                return $http.get('http:/pogochat/authenticate', loginVM)
                    .then(successcallback, errorcallback);
            },
            registerUser: function (registerVM) {
                return $http.post('post url', registerVM)
                    .then(successcallback, errorcallback);
            },
            updateUser: function (userdataVM) {
                return $http.post('', userdataVM)
                    .then(successcallback, errorcallback);
            }
        }
    }
})();
