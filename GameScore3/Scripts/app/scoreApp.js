'use restrict';

var scoreApp = angular.module('scoreApp', ['score']);

scoreApp.controller('scoreController', ['$scope', 'score', '$exceptionHandler', function ($scope, score, $exceptionHandler) {
    $scope.players = [];
    $scope.errors = []

    $scope.init = function () {
        score.query(function (payload) {
            $scope.players = payload.scores;
            angular.forEach($scope.players, function (player) {
                player.last = player.last.toUpperCase();
                if (player.score == null)
                {
                    player.score = -1;
                }
            });
        },
        
        function (error) {
            $exceptionHandler(error);
        });
    };


}]);

scoreApp.factory('$exceptionHandler', function ($injector) {
    return function (exception) {
        var $rootScope = $injector.get('$rootScope');
        $rootScope.errors = $rootScope.errors || [];
        if (exception != null) {
            $rootScope.errors.push(exception.statusText + exception.status);
        }
        console.log($rootScope.errors);
    }
})