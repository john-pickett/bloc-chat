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
                        //Room.addRoom($scope.roomName);
                        
                        console.log($scope.roomName);
                        modalInstance.close($scope.roomName);
                        
                    };
                },
                size: 'md',
            });
        
        }
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', 'Room', ModalCtrl]);
})();


