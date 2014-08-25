(function(src, filepath) {
    var className = filepath.substr("public_build/app/".length);
    className = className.substr(0, className.length-3);
    var splited = className.split('/');
    splited.pop();
    className = splited.join('.');
    
    var __ARGUMENT_LIST__ = (className ? "app.namespace('"+className+"')" : "app" )+", app, window";
    
    return src.replace(/__ARGUMENT_LIST__/g, __ARGUMENT_LIST__);
});