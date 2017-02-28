(function (){
    function ModalCtrl($scope, $uibModal) {

        $scope.newChatRoom = function() {
            
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: function($scope, $uibModalInstance) {
                    $scope.cancel = function() {
                        modalInstance.dismiss('Cancel');
                    };
                    
                    $scope.create = function() {
                        modalInstance.close();
                    };
                },
                size: 'sm'
            });
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();


