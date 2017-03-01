(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
//        var getByRoomId = function(roomId){ 
//            console.log("Firing");
//            console.log(roomId);
//            ref.orderByChild("roomId").equalTo(roomId).once('value', function(snapshot){
//                console.log(snapshot);
//                // snapshot.val() is null
//                //console.log(snapshot.val());
//                return snapshot;
//                });   
//            };
        
        var getByRoomId = function(roomId){
            var idMessages = ref.orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(idMessages);
        };
       
        return {
            all: messages,
            getByRoomId: getByRoomId
        };
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();