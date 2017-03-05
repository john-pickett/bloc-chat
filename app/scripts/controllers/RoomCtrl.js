(function() {
    function RoomCtrl($scope, Room, Message, $cookies, $uibModal) {
        var chatapp = this;
        chatapp.title = "Chat Rooms";
        chatapp.allRooms = Room.all;
        chatapp.currentRoom = {
                                name: "General",
                                $id: "-KeBX4d5mZIcI7w1cF7V"
                              };
        chatapp.messages = Message.getByRoomId("-KeBX4d5mZIcI7w1cF7V");
        chatapp.currentTime = null;

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
          chatapp.currentTime = getTime();
          // (newMessage, roomId, sent, user)
          Message.send($scope.newMessage, chatapp.currentRoom.$id, chatapp.currentTime , chatapp.currentUser );
          $scope.newMessage = null;
        };

        var getTime = function() {
          var today = new Date();
          var date = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
          var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          return time + " " + date;
        };

        chatapp.logger = function(message) {
          console.log(message);
        }

    } // end of RoomCtrl


    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', 'Message', '$cookies', '$uibModal', RoomCtrl]);

})();
