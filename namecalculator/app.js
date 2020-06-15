(function(){
    angular.module("NameCalculator",[]).controller("NameController",function($scope){
       $scope.name="";
       $scope.total=0;


       $scope.displayNumeric=function(){
           var t=Calculate($scope.name);
           $scope.total=t;
       };

       function Calculate(string){
           var total=0;
           for(var i=0;i<string.length;i++){
               total+=string.charCodeAt(i);
           }
           return total;
       };
    });
})();