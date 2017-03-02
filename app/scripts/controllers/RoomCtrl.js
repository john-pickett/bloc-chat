(function() {
    function RoomCtrl(Room, Message) {
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
    
    }
    
    angular 
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();