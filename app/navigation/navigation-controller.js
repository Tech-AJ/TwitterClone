(function(){
    angular.module('TimeWaste')
 .controller('NavigationController',['$scope','$state','$http',function($scope,$state,$http){
       
     if(localStorage["User-data"]){
           $scope.loggedIn=true;
       }
    else{
        $scope.loggedIn=false;
    }
     
     
     
     $scope.logUserIn=function(){
       
         $http.post('api/user/login', $scope.login)
         .then(function
              (response){
             console.log("response received");
             
             localStorage.setItem("User-data",JSON.stringify(response));
             $scope.loggedIn=true;
         }
         ), 
       function(error){
         // failure callback
             console.log("error");
       }
         
     }
     
 }]);
    }());