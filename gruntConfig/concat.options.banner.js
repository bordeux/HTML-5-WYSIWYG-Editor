/**
* @package <%= pkg.name %>
* @version <%= pkg.version %>
* @date <%= grunt.template.today("yyyy-mm-dd") %>
*/
var h5wClass = {};
(function(app, $){
    "use strict";
app.namespace = function (namespace) {
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


app.extend = function(_constructor, _class){
    if(typeof _class === "undefined"){
        return _constructor;
    }
    var _result  = _constructor;
    
    for(var i in _class.prototype){
        _result.prototype[i] = _class.prototype[i];
    };
    
    return _result;
};

/**
 * do not end this file! loo for footer.js
 */

