/**
 * @overview adds a tag @Given to a step object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = 'Given';
exports.options = {
  mustHaveValue: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: (doclet, tag) => {
    doclet.stepKey = '<span style="color: tomato;">Given</span>';
    doclet.expression = tag.value;
  }
}
