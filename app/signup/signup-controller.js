(function(){
    angular.module('TimeWaste')
 .controller('SignupController',['$scope','$state','$http',function($scope,$state,$http){
     $scope.createUser =function(){
         console.log($scope.newUser);
         
        /*  $http.post('api/user/signup', $scope.newUser).success(function(response){
            console.log('sucess');
            }).error(function(error){
                console.log('error');
                
})*/
     
         $http.post('api/user/signup', $scope.newUser)
         .then(function
              (response){
              console.log('sucess');
         }), 
       function(error){
         // failure callback
             console.log(error);
       }
         
     }
     
 }]);
    }());