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

        $scope.pollOptions = [1, 2];

        $scope.addOption = function () {
            $scope.pollOptions.push(new Date());
        };

        $scope.removeOption = function (index) {
            $scope.pollOptions.splice(index, 1);
        };

        $scope.submit = function() {
            console.log("Submitted!");
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
    })

    .directive('newoption', function () {
        var linkFn = function (scope, element, attrs) {
            element.bind("click", function() {
                console.log("..." + angular.element("#newoption-placeholder").addClass("title"));
            });
        }

        return {
            restrict: 'A',
            link: linkFn
        }

        //var validElement = angular.element("<div>{{model.input}}</div>");

//        return {
//            restrict: "A",
//            //templateUrl: "newoption.html",
//            link: function(scope, element) {
//                element.bind("click", function() {
//                    console.log("..." + $("#newoption-placeholder").attr("title"));
//                })
//            }
//        }
    });