(function() {
    function RoomCtrl(Room, Message, $cookies, $uibModal) {
        var chatapp = this;
        chatapp.title = "Chat Rooms";
        chatapp.allRooms = Room.all;
        chatapp.currentRoom = null;
        chatapp.messages = null;
        chatapp.hello = "Hello";

        chatapp.selectRoom = function(room){
            chatapp.currentRoom = room;
            chatapp.messages = Message.getByRoomId(chatapp.currentRoom.$id);
        };

        chatapp.currentUser = $cookies.get('blocChatCurrentUser');

        chatapp.newUser = function(){
          var modalInstance = $uibModal.open({
              templateUrl: '/templates/user-modal.html',
              controller: function($scope, $uibModalInstance) {
                  $scope.create = function() {
                        // need something else here for real function
                      // modalInstance.close($scope.name);
                      $uibModalInstance.close($scope.newUser);
                  };
              },
              size: 'md',
          });

          modalInstance.result.then(function(data){
            $cookies.put('blocChatCurrentUser', data);
          });
          chatapp.currentUser = $cookies.get('blocChatCurrentUser');
        };


    } // end of RoomCtrl

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$cookies', '$uibModal', RoomCtrl]);
})();
