// vendors
var $ = require('jquery');
var NavigationModule = require('./navigation');
// singleton
var navigation;

function _navigateTo(page) {
    // force singleton service
    if(!navigation) {
        navigation = new NavigationModule();
    }
    navigation.goTo(page);
}

// hacked routers
function _initNavigationHandlers() {
    $('.js-about').on('click', function() {
        _navigateTo.apply(self, ['about'])
    });    
    $('.js-community').on('click', function() {
        _navigateTo.apply(self, ['community'])
    });    
    $('.js-contact').on('click', function() {
        _navigateTo.apply(self, ['contact'])
    });    
}

(function main() {
    $(document).ready(_initNavigationHandlers);
})();

