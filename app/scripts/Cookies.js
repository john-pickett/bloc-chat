(function() {
  function BlocChatCookies($cookies, $uibModal){
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (currentUser) {
      console.log(currentUser);
    } else {
      console.log("No user set");
    }
    if (!currentUser || currentUser === "") {
      // toggle modal to set username
      // $scope.newChatRoom = function() {

        var modalInstance = $uibModal.open({
            templateUrl: '/templates/user-modal.html',
            controller: function($scope, $uibModalInstance) {
                $scope.create = function() {
                    if ($scope.newUser !== undefined && $scope.newUser != ""){
                      $uibModalInstance.close($scope.newUser);
                    } else {
                      alert("Error: Please provide a valid username");
                    }
                };
            },
            size: 'md',
        });

        modalInstance.result.then(function(data){
          $cookies.put('blocChatCurrentUser', data);
        });

      } // end of if statement

    }



  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
