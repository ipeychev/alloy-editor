(function() {
    'use strict';

    /**
     * CKEDITOR.tools class utility which adds additional methods to those of CKEditor.
     *
     * @class CKEDITOR.tools
     */

    /**
     * Returns a new object containing all of the properties of all the supplied
     * objects. The properties from later objects will overwrite those in earlier
     * objects.
     *
     * Passing in a single object will create a shallow copy of it.
     *
     * @method merge
     * @param {Object} objects* One or more objects to merge.
     * @return {Object} A new merged object.
     */
    CKEDITOR.tools.merge = CKEDITOR.tools.merge || function() {
        var i = 0,
            key,
            len = arguments.length,
            obj,
            result = {};

        for (; i < len; ++i) {
            obj = arguments[i];

            for (key in obj) {
                if (hasOwnProperty.call(obj, key)) {
                    result[key] = obj[key];
                }
            }
        }

        return result;
    };

    /**
     * Extends an object with another one. Sets the constructor, prototype and superclass properties
     * to support an inheritance strategy that can chain constructors and methods.
     * Static members will not be inherited.
     * This method should be called "extend", but CKEDITOR.tools already have another function with the
     * same name, which does something completely different.
     *
     * @method inherit
     * @param {Function} child The child object which should extend the parent.
     * @param {Function} parent The parent object from which the child should extend.
     * @param {Object} overrides Object with properties, which should be added to child's prototype.
     * If child's prototype already contains some property, it will be overwritten.
     * @param {Object} staticProperties Object with properties, which will be added as static
     * properties to the child object. If child already contains some of these properties, it will be
     * overwritten.
     * @return {Object} The extended object.
     */
    CKEDITOR.tools.inherit = CKEDITOR.tools.inherit || function() {
        function F() {}

        return function(child, parent, overrides, staticProperties) {
            var hasOwnProperty,
                prop;

            hasOwnProperty = Object.prototype.hasOwnProperty;

            F.prototype = parent.prototype;
            child.prototype = new F();
            child.prototype.constructor = child;
            child.superclass = parent.prototype;

            for (prop in (overrides || {})) {
                if (hasOwnProperty.call(overrides, prop)) {
                    child.prototype[prop] = overrides[prop];
                }
            }

            for (prop in (staticProperties || {})) {
                if (hasOwnProperty.call(staticProperties, prop)) {
                    child[prop] = staticProperties[prop];
                }
            }

            return child;
        };
    }();
}());