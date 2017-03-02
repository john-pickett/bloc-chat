(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);

        
        var addRoomFunc = function(name) {
            rooms.$add({ name: name }).then(function(ref) {
                var id = ref.key;
                console.log("added record with id " + id);
                rooms.$indexFor(id); // returns location in the array
            });
        };
        
        // return 
         return {
             all: rooms,
             addRoom: addRoomFunc
         };
        
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();