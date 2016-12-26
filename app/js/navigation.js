// vendors
var $ = require('jquery');

/**
 * NavigationModule
 * TODO: separate into separate file
 */ 
var NavigationModule = function() { 
    var page = ''; 
}
NavigationModule.prototype = {
    goTo: function(page) {
        if (!page) { return; }
        $('.js-tab-content').html(page);
    }
}

module.exports = NavigationModule;
