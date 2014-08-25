/**
 * Bootstrap class
 * @param {object} namespace
 * @param {object} app
 * @param {window} globals
 * @returns {object}
 */
(function(namespace, app, globals){
    
    namespace.button = function(){
        
    };
    
    /**
     * 
     * @param {string} char
     * @returns {_L8.namespace.button.prototype}
     */
    namespace.button.prototype.setIconChar = function(char){
        this.iconChar = char;
        return this;
    };
    
    /**
     * 
     * @param {string} title
     * @returns {_L8.namespace.button.prototype}
     */
    namespace.button.prototype.setTitle = function(title){
        this.title = title;
        return this;
    };
    
    /**
     * 
     * @param {string} title
     * @returns {_L8.namespace.button.prototype}
     */
    namespace.button.prototype.onClick = function(callback){
        this.onClickCallback = callback;
        return this;
    };
    
    /**
     * 
     * @param {string} title
     * @returns {_L8.namespace.button.prototype}
     */
    namespace.button.prototype.get$ = function(callback){
        
    };
    
    
    
    
    
    
    return namespace.pluginAbstract;
})(__ARGUMENT_LIST__);