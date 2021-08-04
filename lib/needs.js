/**
 * @overview adds a tag @needs to any object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = "needs";
exports.options = {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: false,
    onTagged: function(doclet, tag) {
	if (!doclet.needs) {
	    doclet.needs = [];
	}
	doclet.needs.push(tag.value);
    }
}
