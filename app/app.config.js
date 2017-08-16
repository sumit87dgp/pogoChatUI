(function () {
    'use strict';
    angular.module('pogoApp').config(['$routeProvider', '$locationProvider', Config]);

    function Config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: '/home/_home.html'
            })
            .otherwise('/')

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: true
        });


    };
})();
