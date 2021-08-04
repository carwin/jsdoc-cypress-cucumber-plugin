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
  onTagged: function(doclet, tag) {
      const name = tag.value.replace(' ', '');
      doclet.name = name;
      doclet.stepKey = '<span style="color: blue;">Given</span>';
      doclet.expression = tag.value;
  }
}
