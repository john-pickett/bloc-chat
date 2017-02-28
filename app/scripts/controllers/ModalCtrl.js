(function (){
    function ModalCtrl($scope, $uibModal, Room) {

        $scope.newChatRoom = function() {
            
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: function($scope, $uibModalInstance) {
                    $scope.cancel = function() {
                        modalInstance.dismiss('Cancel');
                    };
                    
                    $scope.create = function() {
                        modalInstance.close($scope.roomName);
                    };
                },
                size: 'md',
            });
            
            modalInstance.result.then(function(data) {
                Room.addRoom(data);
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', 'Room', ModalCtrl]);
})();


