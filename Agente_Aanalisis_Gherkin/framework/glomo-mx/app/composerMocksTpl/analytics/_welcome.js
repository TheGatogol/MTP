/**
 * Imports
 */
const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');


const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'bienvenida',
  [CONSTANTS.PAGE_PAGEINFO_AREA]: 'publica',
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
  [CONSTANTS.USER_USERSTATE]: 'no logado',
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'general',
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};

const PAGE_VIEW = UTILS.getAdvancedFootprint(COMMON);
const CAROUSEL = UTILS.getAdvancedFootprint({
  ...COMMON,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'soy cliente'
});


module.exports = {
  CAROUSEL,
  PAGE_VIEW
};