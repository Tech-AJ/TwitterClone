(function(){
    angular.module('TimeWaste')
 .controller('NavigationController',['$scope','$state','$http','$window',function($scope,$state,$http,$window,){
     
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
           
             console.log(localStorage);
             $scope.loggedIn=true;  
             $state.go('main');
         //  window.location.reload();
         }
         ), 
       function(error){
         // failure callback
             console.log("error");
       }
         
     }
     
     
     $scope.logout=function(){
         localStorage.clear();
         console.log("cleared");
         $scope.loggedIn=false;
     }
     
 }]);
    }());