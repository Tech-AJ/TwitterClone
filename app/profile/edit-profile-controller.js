(function(){
    
     angular.module('TimeWaste')
 .controller('EditProfileController',['Upload','$scope','$state','$http',function(Upload,$scope,$state,$http){
     
      $scope.user = JSON.parse(localStorage['User-data']);
     
                    console.log($scope.user.data._id);
                
                                
                $scope.$watch(function(){
                    return $scope.file
                }, function (){
                   $scope.upload($scope.file); 
                });
     
     
                $scope.upload = function (file) {
                    if (file){
                        Upload.upload({
                            url: 'api/profile/editPhoto',
                            method: 'POST',
                            data: {userId: $scope.user.data._id},
                            file: file
                        }).progress(function(evt){
                            console.log("firing");
                        }).success(function(response){
                            $scope.userImage=(response);
                           
                             var user1 = JSON.parse(localStorage['User-data']);
                            console.log(user1.data);
                             user1.data.image=(response);
                            
                             localStorage.setItem("User-data",JSON.stringify( user1));
                            
                        }).error(function(error){
                            console.log(error);
                        })
                    }
                };
     
                        
                $scope.updateUsername = function () {
                    var request = {
                        userId: $scope.user.data._id,
                        username: $scope.user.username
                    }
                    
                 $http.post('api/profile/updateUsername', request).then(function(){
                    console.log("success");
                 }),function(error){
                    console.log("error");
                 }
                };
                                
                $scope.updateBio = function () {
                    var request = {
                        userId: $scope.user.data._id,
                        bio: $scope.user.bio
                    }
                    
                $http.post('api/profile/updateBio', request).then(function(){
                    console.log("success")
                }),function(error){
                    console.log(error);
                };
                }
      }]);
    
}());