(function() {
    function RoomCtrl(Room) {
        this.title = "Here's RoomCtrl!";
        
        // something magical goes here
        this.rooms = Room;
        
    }
    
    angular 
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();