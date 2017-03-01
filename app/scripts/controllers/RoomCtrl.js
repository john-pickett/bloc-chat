(function() {
    function RoomCtrl($scope, Room, Message) {
        var chatapp = this;
        chatapp.title = "Chat Rooms";
        chatapp.allRooms = Room.all;
//        chatapp.currentRoom = "Hey";
//        chatapp.messages = null;
        
        //this.allMessages = Message.all;
        
        
        $scope.selectRoom = function(room){
            console.log(this);
            chatapp.currentRoom = room;
            console.log(chatapp.currentRoom.name);
            chatapp.messages = Message.getByRoomId(chatapp.currentRoom.$id);
        };
    
    }
    
    angular 
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', 'Message', RoomCtrl]);
})();