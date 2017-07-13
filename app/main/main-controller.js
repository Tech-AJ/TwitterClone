(function(){
    angular.module('TimeWaste')
    .controller('MainController', ['$scope', '$http', '$interval', 
                        function (  $scope,   $http,   $interval){
    
        if (localStorage['User-data'] !== undefined){
            $scope.user = JSON.parse(localStorage['User-data']);
            console.log($scope.user.data);
        
                $scope.sendTweet = function(event){
                    if (event.which === 13){
               var request = {
                    user: $scope.user.data.username || $scope.user.data.email,
                    userId: $scope.user.data._id,
                    content: $scope.newTweet,
                    userImage: $scope.user.data.image
                   
               }
               
               $http.post('api/tweet/post', request).then(function(response){
                   console.log( response.data);
                   $scope.tweets = response.data;
                    console.log( $scope.tweets);
                    $scope.newTweet=undefined;
                   
               }),function(error){
                    console.error(error);
               }
               
            }
                
                                                 
    }
}
     else{
             console.log('login or signup first');
                           
     }
       var incomingTweets;                 
                            
     function getTweets (initial){  
         
           //  var following = $scope.user.data.following;
                            
            $http.post('api/tweet/get').then(function (response){
                if (initial){
                    $scope.tweets = response.data;
                    console.log(response);
                    console.log(response.data.length);
                } else {
                    if (response.data.length > $scope.tweets.length){

                    $scope.incomingTweets = response.data;
                        console.log( $scope.incomingTweets);
                         console.log( response.data);
                        console.log( response);
                        
                        
                    }
                }
           }),function(error){
                    console.error(error);
               }
         
         
         }
         
         
            
      $interval(function(){
            getTweets(false);
            if ($scope.incomingTweets){
            $scope.difference = $scope.incomingTweets.length - $scope.tweets.length;
                console.log($scope.difference);
                
            }
            console.log("this is working")
        }, 5000);
                            
        $scope.setNewTweets = function () {
            console.log("inside setnew");
            $scope.tweets.data = angular.copy($scope.incomingTweets);
             console.log();
            $scope.incomingTweets = undefined;
             console.log("inside setnew undefined");
        }
                            
       //Init
        getTweets(true);
                            
                            
                            
     
                            
                            
                            
        }]);
}());
                                   