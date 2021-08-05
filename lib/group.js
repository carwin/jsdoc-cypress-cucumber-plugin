/**
 * @overview adds a tag @group to a step object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = 'group';
exports.options = {
  mustHaveValue: true,
  canHaveType: false,
  canHaveName: false,
  onTagged: (doclet, tag) => {
    doclet.group = tag.value;
  }
}
