(function() {
    function RoomCtrl(Room) {
        this.title = "Chat Rooms";
        this.allRooms = Room.all;

    }
    
    angular 
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();