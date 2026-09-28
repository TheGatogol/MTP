/* eslint-disable new-cap */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');
const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_BUSINESSUNIT]: LITERALS.commons.bbvaMexico,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.USER_STATE]: LITERALS.commons.logado,
  [CONSTANTS.USER_SEGMENT_GLOBAL]: '003001'
};
const COMMON_FLOW_LEVELS = (levelThree = '') => {
  return {
    ...COMMONS,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'tracking tdc',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: levelThree
  };
};
const TRACKING_CREDIT_CARD = UTILS.getAdvancedFootprint({
  ...COMMON_FLOW_LEVELS()
});
const TRACKING_CREDIT_CARD_ERROR = UTILS.getAdvancedFootprint({
  ...COMMON_FLOW_LEVELS(LITERALS.errors.tracking),
  [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: LITERALS.errors.tracking
});
const ANALYTICS_FEATURE_FLAG = {
  'key': 'glomo.analytics.creditCardTracking',
  'defaultValue': true
};
[
  TRACKING_CREDIT_CARD,
  TRACKING_CREDIT_CARD_ERROR
].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));
module.exports = {
  TRACKING_CREDIT_CARD,
  TRACKING_CREDIT_CARD_ERROR
};