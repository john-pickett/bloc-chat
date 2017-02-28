(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);

        
        Room.addRoom = function(name) {
            console.log(name);
        };
        
        
        // return 
        return {all: rooms};
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();