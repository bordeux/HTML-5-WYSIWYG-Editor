/**
 * Bootstrap class
 * @param {object} namespace
 * @param {object} app
 * @param {window} globals
 * @returns {object}
 */
(function(namespace, app, globals){
    
    namespace.bootstrap = function($el, config){
        this.config = config;
    };
    
    namespace.bootstrap.prototype.config = {};
    
    namespace.bootstrap.prototype.init = function(){

    };
   
    return namespace.bootstrap;
})(__ARGUMENT_LIST__);