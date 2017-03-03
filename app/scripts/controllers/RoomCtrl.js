(function() {
    function RoomCtrl($scope, Room, Message, $cookies, $uibModal) {
        var chatapp = this;
        chatapp.title = "Chat Rooms";
        chatapp.allRooms = Room.all;
        chatapp.currentRoom = null;
        chatapp.messages = null;
        chatapp.currentTime = new Date();

        chatapp.selectRoom = function(room){
            chatapp.currentRoom = room;
            chatapp.messages = Message.getByRoomId(chatapp.currentRoom.$id);
        };

        var current = function() {
          return $cookies.get('blocChatCurrentUser');
        };

        chatapp.currentUser = current();

        chatapp.newUser = function(){
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
            chatapp.currentUser = data;
            $cookies.put('blocChatCurrentUser', data);
          });
        };

        // reset the username to ""
        chatapp.resetUser = function(){
          chatapp.currentUser = null;
          $cookies.put('blocChatCurrentUser', "");
        };

        chatapp.sendMessage = function(){
          // (newMessage, roomId, sent, user)
          Message.send($scope.newMessage, chatapp.currentRoom.$id, chatapp.currentTime , chatapp.currentUser );
        };

    } // end of RoomCtrl

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', 'Message', '$cookies', '$uibModal', RoomCtrl]);
})();
