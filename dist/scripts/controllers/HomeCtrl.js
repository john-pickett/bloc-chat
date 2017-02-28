(function() {
    function HomeCtrl() {
        this.content = "Here's some content for the home page!";
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();