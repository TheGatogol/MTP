module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const ANALYTICS_FEATURE_FLAG = {
    key: 'glomo.analytics.blackHawkPurchase',
    defaultValue: true
  };
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.giftCards,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const PAGE_VIEW_WELCOME = UTILS.getAdvancedFootprintWithLevel2(
    LITERALS.commons.init,
    COMMON

  );
  const PAGE_VIEW_INFO = UTILS.getAdvancedFootprintWithLevel2(
    LITERALS.commons.information,
    COMMON
  );
  [
    PAGE_VIEW_WELCOME,
    PAGE_VIEW_INFO
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG));
  return {
    PAGE_VIEW_WELCOME,
    PAGE_VIEW_INFO
  };
};