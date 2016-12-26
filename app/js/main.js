
function _navigateTo(page) {
    if (!page) { return; }
    $('.js-tab-content').html(page);
    // retrieve backend data for each of the tabs
    // utilize node.js
}

// hacked routers
function _initNavigationHandlers() {
    var self = this;
    $('.js-about').on('click', function() {
        self._navigateTo.apply(self, ['about'])
    });    
    $('.js-community').on('click', function() {
        self._navigateTo.apply(self, ['community'])
    });    
    $('.js-contact').on('click', function() {
        self._navigateTo.apply(self, ['contact'])
    });    
}

(function main() {
    $(document).ready(this._initNavigationHandlers.bind(this));
})();
