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
const needsTag = require('./lib/needs');

exports.defineTags = function(dictionary) {
    dictionary.defineTag(stepTag.name, stepTag.options);
    dictionary.defineTag(stepAliasTag.name, stepAliasTag.options);
    dictionary.defineTag(whenTag.name, whenTag.options);
    dictionary.defineTag(givenTag.name, givenTag.options);
    dictionary.defineTag(thenTag.name, thenTag.options);
    dictionary.defineTag(needsTag.name, needsTag.options);
};
