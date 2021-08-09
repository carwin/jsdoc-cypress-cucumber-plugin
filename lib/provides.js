/**
 * @overview adds a tag @provides to a step object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = 'provides';
exports.options = {
    mustHaveValue: true,
    canHaveType: false,
    canHaveName: false,
    onTagged: (doclet, tag, other) => {
	console.log('prov doclet', doclet);
	doclet.provides = tag.value;
    }
}
