module.exports = CONFIG => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.credit,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward
  };

  const TRANSACTIONS_REDEEM_PAGE_VIEW = UTILS.getAdvancedFootprintWithLevel3(
    LITERALS.commons.payWithPoints,
    COMMON
  );

  const ANALYTICS_FEATURE_FLAG_TRANSACTIONS_REDEEM = {
    'key': 'glomo.analytics.transactionsRedeem',
    'defaultValue': true
  };
  [
    TRANSACTIONS_REDEEM_PAGE_VIEW
  ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_TRANSACTIONS_REDEEM));

  return {
    TRANSACTIONS_REDEEM_PAGE_VIEW
  };
};