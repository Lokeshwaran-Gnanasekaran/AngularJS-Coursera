(function(){
    'use strict';
    angular.module("FirstAngularApp",[]).controller("FirstController",function($scope){
        $scope.name="Lokesh";
        $scope.say=function(){
            return "Heloo!!";
        }

    });
})();