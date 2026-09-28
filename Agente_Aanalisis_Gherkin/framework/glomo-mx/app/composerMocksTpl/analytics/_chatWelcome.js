const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

module.exports = () => {
  const PAGE_VIEW = UTILS.getAnalyticFeatureFlag('chat', UTILS.getAdvancedFootprint({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'chat en linea',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'bienvenido',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.public,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.general,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.noLogado
  }));
  return {
    PAGE_VIEW
  };
};