module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.commons.glomo
  };

  const _COMMON_PAGE_LEVEL = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.term
  };

  const APP_HUELLA_DETAIL_DEPOSIT = UTILS.getAdvancedFootprintWithLevel3('detalle', _COMMON, _COMMON_PAGE_LEVEL);

  return {
    APP_HUELLA_DETAIL_DEPOSIT
  };
};
