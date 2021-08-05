/**
 * @overview adds a tag @step to any object
 * @module plugins/step
 * @author Carwin Young
 */
'use strict';

exports.name = "step";
exports.options = {
  mustHaveValue: false,
  canHaveType: false,
  canHaveName: false,
  onTagged: (doclet, tag) => {
    const comment = doclet.comment;
    const name = doclet.comment.match(/[^]\s\*\s@(Given|When|Then)\s(.*)?/)[0]
	  .replace(/<(?!\/?(.)?(>|\s))[^<]+?>/g, "")
	  .replace(/(\n)/, '')
	  .replace(/^\s\*\s\@/, '');
    let camelName = name.match(/\b\w+/g);
    camelName.forEach((e, i) => camelName[i] = i !== 0 ?`${e[0].toUpperCase()}${e.substring(1)}` : e.toLowerCase());
    doclet.kind = 'step';
    doclet.name = `${camelName.join('')}`;
  }
}
