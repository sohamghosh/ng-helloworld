var demoApp = angular.module('demoApp', ['ngRoute'])

    .factory('simpleFactory', function () {
        var factory = {};
        factory.getCustomers = function () {
            return [
                {name: 'Soham', city: 'Bangalore'},
                {name: 'John Doe', city: 'Delhi'},
                {name: 'Jane Doe', city: 'Calcutta'}
            ];
        };
        return factory;
    })

    .controller('SimpleController', function ($scope, simpleFactory) {
        $scope.customers = simpleFactory.getCustomers();

        $scope.addCustomer = function () {
            $scope.customers.push({
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            });
        };
    })

    .config(function ($routeProvider) {
        $routeProvider
            .when('/view1', {
                controller: 'SimpleController',
                templateUrl: 'partials/view1.html'
            })
            .when('/view2', {
                controller: 'SimpleController',
                templateUrl: 'partials/view2.html'
            })
            .otherwise({redirectTo: '/view1'});
    });