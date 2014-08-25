/**
 * @package HTML5WYSIWYG-Editor
 * @version 0.0.1
 * @date 2014-08-25
 */
var h5wClass = {};
(function(app, $) {
    "use strict";
    app.namespace = function(namespace) {
        var nsparts = namespace.split(".");
        var parent = app;

        // we want to be able to include or exclude the root namespace 
        // So we strip it if it's in the namespace
        if (nsparts[0] === "app") {
            nsparts = nsparts.slice(1);
        }

        // loop through the parts and create 
        // a nested namespace if necessary
        for (var i = 0; i < nsparts.length; i++) {
            var partname = nsparts[i];
            // check if the current parent already has 
            // the namespace declared, if not create it
            if (typeof parent[partname] === "undefined") {
                parent[partname] = {};
            }
            // get a reference to the deepest element 
            // in the hierarchy so far
            parent = parent[partname];
        }
        // the parent is now completely constructed 
        // with empty namespaces and can be used.
        return parent;
    };


    app.extend = function(_constructor, _class) {
        if (typeof _class === "undefined") {
            return _constructor;
        }
        var _result = _constructor;

        for (var i in _class.prototype) {
            _result.prototype[i] = _class.prototype[i];
        };

        return _result;
    };

    /**
     * do not end this file! loo for footer.js
     */

    /**
     * Bootstrap class
     * @param {object} namespace
     * @param {object} app
     * @param {window} globals
     * @returns {object}
     */
    (function(namespace, app, globals) {

        namespace.button = function() {

        };

        /**
         *
         * @param {string} char
         * @returns {_L8.namespace.button.prototype}
         */
        namespace.button.prototype.setIconChar = function(char) {
            this.iconChar = char;
            return this;
        };

        /**
         *
         * @param {string} title
         * @returns {_L8.namespace.button.prototype}
         */
        namespace.button.prototype.setTitle = function(title) {
            this.title = title;
            return this;
        };

        /**
         *
         * @param {string} title
         * @returns {_L8.namespace.button.prototype}
         */
        namespace.button.prototype.onClick = function(callback) {
            this.onClickCallback = callback;
            return this;
        };

        /**
         *
         * @param {string} title
         * @returns {_L8.namespace.button.prototype}
         */
        namespace.button.prototype.get$ = function(callback) {

        };






        return namespace.pluginAbstract;
    })(app, app, window);;
    /**
     * Bootstrap class
     * @param {object} namespace
     * @param {object} app
     * @param {window} globals
     * @returns {object}
     */
    (function(namespace, app, globals) {

        namespace.plugin = function() {

        };


        namespace.pluginAbstract.prototype.getButtons = function() {

            return {};
        };



        return namespace.pluginAbstract;
    })(app, app, window);;
    /**
     * Bootstrap class
     * @param {object} namespace
     * @param {object} app
     * @param {window} globals
     * @returns {object}
     */
    (function(namespace, app, globals) {

        namespace.bootstrap = function($el, config) {
            this.config = config;
        };

        namespace.bootstrap.prototype.config = {};

        namespace.bootstrap.prototype.init = function() {

        };

        return namespace.bootstrap;
    })(app, app, window);;
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
    })(app, app, window);
})(h5wClass, jQuery);
