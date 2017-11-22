(function() {
    'use strict';
    
    _.mixin({
        hasNested: hasNested
    });

    /**
     * Check if an object has a nested property or properties.
     * 
     * @param {object} obj Object to be used to search for a nested property or properties.
     * @param {...string} prop Properties to search for at a given level (depends on argument's position).
     * 
     * @return {boolean} Whether or not the object has a nested property or properties.
     */
    function hasNested(obj) {
        for (var i = 1; i < arguments.length; i++) {
            if (!obj || !obj.hasOwnProperty(arguments[i])) return false;
            obj = obj[arguments[i]];
        }
        return true;
    }
})();