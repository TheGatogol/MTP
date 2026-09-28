/**
 * Imports
 */
const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');


const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'bienvenida',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'seas o no cliente de bbva',
  [CONSTANTS.PAGE_PAGEINFO_AREA]: 'publica',
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
  [CONSTANTS.USER_USERSTATE]: 'no logado',
  [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: 'online',
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'general',
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};

const PAGE_VIEW_WELCOME = UTILS.getAdvancedFootprint({
  ...COMMON
});
const INTERNAL_LINK = UTILS.getInternalLink('acceder', {
  ...COMMON
});

const PAGE_VIEW_CACHED_USER = UTILS.getAdvancedFootprint({
  ...COMMON,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'usuario con cache'
});

module.exports = {
  PAGE_VIEW_WELCOME,
  INTERNAL_LINK,
  PAGE_VIEW_CACHED_USER
};