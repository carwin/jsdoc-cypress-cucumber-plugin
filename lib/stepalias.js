/**
 * @overview adds a tag @step to any object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = "stepalias";
exports.options = {
  mustHaveValue: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: (doclet, tag) => {
    if (!doclet.stepAliases) {
      doclet.stepAliases = [];
    }
    doclet.stepAliases.push(tag.value);
  }
}
