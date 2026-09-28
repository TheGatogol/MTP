/* eslint-disable camelcase */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const utils = require('./common/_utils');
const _set_feature_flags = (featureFlag, analytic) => (utils.getAnalyticFeatureFlag(featureFlag, analytic));

module.exports = () => {
  const ANALYTICS_FEATURE_FLAG = 'glomo.analytics.financialHealthAdvice';

  const _common = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_SERVER]: 'window.location.hostname',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.notifications,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payrollReceivedPockets
  };

  const HUELLA_APP_PAGE_VISIT = _set_feature_flags(ANALYTICS_FEATURE_FLAG, utils.getAdvancedFootprint({ ..._common }));

  const APP_ON_CLICK_START = _set_feature_flags(ANALYTICS_FEATURE_FLAG, utils.getOnClickStart(
    LITERALS.commons.createPocketPayrroll,
    LITERALS.commons.information, {
      ..._common,
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.pockets,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.createPocket,
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
      [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
      [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account
    }));

  return {
    HUELLA_APP_PAGE_VISIT,
    APP_ON_CLICK_START
  };
};