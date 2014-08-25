/**
 * Bootstrap class
 * @param {object} namespace
 * @param {object} app
 * @param {window} globals
 * @returns {object}
 */
(function(namespace, app, globals){
    
    namespace.plugin = function(){
        
    };
    
    
    namespace.pluginAbstract.prototype.getButtons = function(){
        
        return {};
    };
    
    
    
    return namespace.pluginAbstract;
})(__ARGUMENT_LIST__);