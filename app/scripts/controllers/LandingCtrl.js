(function() {
    function LandingCtrl() {
        this.title = "Here's the landing page title!";
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', LandingCtrl);
})();