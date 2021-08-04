/**
 * This module defines custom JDOC tags for documenting Cypress/Cucumber.
 * @module jsdoc-cuke-plugin
 */

'use strict';

const stepTag = require('./lib/step');
const stepAliasTag = require('./lib/stepalias');
const whenTag = require('./lib/when');
const givenTag = require('./lib/given');
const thenTag = require('./lib/then');

exports.defineTags = function(dictionary) {
  dictionary.defineTag(stepTag.name, stepTag.options);
  dictionary.defineTag(stepAliasTag.name, stepAliasTag.options);
  dictionary.defineTag(whenTag.name, whenTag.options)
};
