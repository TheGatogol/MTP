import {BeforeAll} from '@cucumber/cucumber';

import {utils} from '@csqe/radish';

import NAMED_REGEXPS from '../support/named-regexp';

/**
 * Register the named regexes
 */
BeforeAll(async function() {
    utils.namedRegex.registerNamedRegexMultiple(NAMED_REGEXPS);
});
