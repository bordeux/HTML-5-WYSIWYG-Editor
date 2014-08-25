/**
 * Bootstrap class
 * @param {object} namespace
 * @param {object} app
 * @param {window} globals
 * @returns {object}
 */
(function(namespace, app, globals) {
    (function($) {
        $.fn.h5w = function(options) {
            this.each(function() {
                new app.bootstrap($(this), options);
            });
            return this;
        };
    }(jQuery));
})(__ARGUMENT_LIST__);