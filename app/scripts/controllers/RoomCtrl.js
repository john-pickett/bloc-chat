(function() {
    function RoomCtrl(Room, Message) {
        this.title = "Chat Rooms";
        this.allRooms = Room.all;
        
        this.allMessages = Message.all;
    }
    
    angular 
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', RoomCtrl]);
})();