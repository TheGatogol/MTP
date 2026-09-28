/* eslint-disable camelcase */
module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const BASE = {
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.operative.transferInternational
  };

  const COMMON_INTERNAL_LINK = {
    ...BASE,
    [CONSTANTS.USER_STATE]: 'mexico dc'
  };

  const getCustomAnalyticFeatureFlag = analytic => UTILS.getAnalyticFeatureFlag(LITERALS.featureFlag.internationalTransfersHistorical, analytic);
  const getCustomInternalLinkAnalyticFeatureFlag = analytic => UTILS.getAnalyticFeatureFlag(LITERALS.featureFlag.internationalTransfersHistoricalInternalLinkSelectAccount, analytic);
  const get_custom_page_view_with_feature_flag = level3 => getCustomAnalyticFeatureFlag(UTILS.getAdvancedFootprintWithLevel3(level3, {...BASE, [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.sections.historical}));
  const INTERNAL_LINK = getCustomInternalLinkAnalyticFeatureFlag(UTILS.getInternalLinkWithLevel2(LITERALS.commons.accountSelection, LITERALS.commons.account, COMMON_INTERNAL_LINK));

  return {
    get_custom_page_view_with_feature_flag,
    INTERNAL_LINK
  };
};