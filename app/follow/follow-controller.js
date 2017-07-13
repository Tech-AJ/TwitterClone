(function(){
	angular.module('TimeWaste')
	.controller('FollowController', ['$scope', '$http', function($scope, $http){
		
	 if (localStorage['User-data'] !== undefined){
         $scope.user = JSON.parse(localStorage['User-data']);
		
	    $http.get('api/users/get').then(function(response){
			$scope.users = response.data;
			console.log($scope.users);
		})
        
        	$scope.follow = function(userId, tweeterId) {
			request = { userId: userId,
				     tweeterId: tweeterId};
                console.log(request);
			$http.post('api/users/follow', request).then(function(res){
				 
                $scope.user=res;
                localStorage.setItem("User-data",JSON.stringify( $scope.user ));
                console.log(  $scope.user.data.following);
                 console.log(  $scope.user.data.following.length);
                  console.log(localStorage);
                
			})
		}
            
            	$scope.unfollow = function(userId, tweeterId) {
			request = { userId: userId,
				     tweeterId: tweeterId};
                console.log(request);
			$http.post('api/users/unfollow', request).then(function(res){
				 
                $scope.user=res;
                localStorage.setItem("User-data",JSON.stringify( $scope.user ));
                  
                
			})
		}
            
            
            $scope.checkIsFollowing = function(tweeterId){
			for(var i = 0, len = $scope.user.data.following.length; i < len; i++){
				if ($scope.user.data.following[i].userId === tweeterId){
					return true;
				}
			}
			return false;
		}
     }
    }])
}());