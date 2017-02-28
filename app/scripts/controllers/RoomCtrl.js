(function() {
    function RoomCtrl(Room) {
        this.title = "Chat Rooms";
        
        // something magical goes here
        this.allRooms = Room.all;
        
    }
    
    angular 
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();