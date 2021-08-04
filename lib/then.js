/**
 * @overview adds a tag @Then to a step object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = 'Then';
exports.options = {
  mustHaveValue: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: function(doclet, tag) {
    doclet.stepKey = '<span style="color: teal;">Then</span>';
    doclet.expression = tag.value;
  }
}
