/**
 * @overview adds a tag @step to any object
 * @module plugins/stepAliases
 * @author carwin young
 */
'use strict';

exports.name = "stepalias";
exports.options = {
  mustHaveValue: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: function(doclet, tag) {
    console.log('ALIAS TAG', tag);
    if (!doclet.stepAliases) {
      doclet.stepAliases = [];
    }
    doclet.stepAliases.push(tag.value);
  }
}
