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
  const PAGE_VIEW = UTILS.getAdvancedFootprintWithLevel2(
    LITERALS.commons.warningExit,
    COMMON
  );
  const EXTERNAL_LINK = UTILS.getExternalLinkWithLink(
    LITERALS.commons.continueClick, {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.warningExit
    }
  );
  [
    PAGE_VIEW,
    EXTERNAL_LINK
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG));
  return {
    PAGE_VIEW,
    EXTERNAL_LINK
  };
};