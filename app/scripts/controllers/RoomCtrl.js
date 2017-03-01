(function() {
    function RoomCtrl($scope, Room, Message) {
        this.title = "Chat Rooms";
        this.allRooms = Room.all;
        this.messages = null;
        
        //this.allMessages = Message.all;
        
        this.byRoom = Message.getByRoomId;
        
        $scope.selectRoom = function(room){
            var currentRoom = room;
            console.log(currentRoom.$id);
            //messages = Message.getByRoomId(currentRoom.$id);
            messages = "Hey";
        };
    
    }
    
    angular 
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', 'Message', RoomCtrl]);
})();