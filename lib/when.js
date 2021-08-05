/**
 * @overview adds a tag @When to a step object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = 'When';
exports.options = {
  mustHaveValue: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: (doclet, tag) => {
    doclet.stepKey = '<span style="color: steelblue;">When</span>';
    doclet.expression = tag.value;
  }
}
