(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);

        var getByRoomId = function(roomId){
            var idMessages = ref.orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(idMessages);
        };

        var sendMessage = function(newMessage, roomId, sent, user) {
            var newMessageKey = firebase.database().ref().child('messages').push().key;
            var sendRef = firebase.database().ref().child('messages/' + newMessageKey);
            sendRef.update({
              content: newMessage,
              roomId: roomId,
              sent: sent,
              username: user
            });
        }

        return {
            all: messages,
            getByRoomId: getByRoomId,
            send: sendMessage
          };

    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
