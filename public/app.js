angular.module('reactAngular', [])
    .controller('mainCtrl', function ($scope) {
        $scope.myModel = {
            message: 'World'
        };
    }).directive('myDirective', function () {
    return {
        restrict: "E",
        //template: '<h1>hello how are you!</h1>',
        link: function (scope, element) {
            scope.$watch('myModel.message', function (newVal, oldVal) {
                ReactDOM.render(
                    React.createElement(window.com.pearson.Hello, {name: scope.myModel.message}),
                    document.getElementById('example')
                );
            });
        }
    }
});