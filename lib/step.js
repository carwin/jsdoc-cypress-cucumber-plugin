/**
 * @overview adds a tag @step to any object
 * @module plugins/step
 * @author carwin young
 */
'use strict';

exports.name = "step";
exports.options = {
  mustHaveValue: false,
  canHaveType: false,
  canHaveName: false,
  onTagged: function(doclet, tag) {
    doclet.kind = 'step';
    doclet.name = `step ${tag.value}`;
  }
}
