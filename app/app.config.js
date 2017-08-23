(function () {
    'use strict';
    angular.module('pogoApp').config(['$routeProvider', '$locationProvider','$mdThemingProvider', Config]);

    function Config($routeProvider, $locationProvider,$mdThemingProvider) {
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
        })

        // $mdThemingProvider.theme('default')
        // .primaryPalette('purple')
        // .accentPalette('green')
        // .warnPalette('red')
        // .backgroundPalette('blue');

        // $mdThemingProvider.disableTheming();


    };
})();
