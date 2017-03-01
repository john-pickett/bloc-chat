(function (){
    function ModalCtrl($scope, $uibModal, Room) {
        
        $scope.newChatRoom = function() {
            
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: function($scope, $uibModalInstance) {
                    $scope.newRoom = {};
                    $scope.cancel = function() {
                        modalInstance.dismiss('Cancel');
                    };
                    
                    $scope.create = function() {
                        Room.addRoom($scope.newRoom.name);
                        
                        //console.log($scope.newRoom.name);
                        modalInstance.close();
                        
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


