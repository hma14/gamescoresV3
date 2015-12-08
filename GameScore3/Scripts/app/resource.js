'use restrict';

var scoreService = angular.module('score', ['ngResource']);
scoreService.factory('score', ['$resource', '$http',
    function ($resource, $http) {
        //return $resource('http://stindillmrtest.blob.core.windows.net/data/scores.json', {},
        return $resource('/data/scores.json', {},
            {
                query: { method: 'GET', isArray: false }
            });
    }
]);