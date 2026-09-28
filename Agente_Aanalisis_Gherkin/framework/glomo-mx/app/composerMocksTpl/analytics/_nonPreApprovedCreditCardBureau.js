module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const common = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.creditCards
  };

  const commonApplication = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.creditCardHolder,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.oneClickCreditCard,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.actions.online
  };

  const commonStep = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.oneClickCreditCard,
    [CONSTANTS.APPLICATION_PROCESS]: LITERALS.commons.nonPreApprovedProcess,
    ...common,
    ...commonApplication
  };

  const commonFootprint = {
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.nonPreApprovedTdc
  };

  const APP_ON_CLICK_START = UTILS.getOnClickStart(LITERALS.commons.opportunities, LITERALS.commons.information, {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' },
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: { bind: 'name' },
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: { bind: 'type' },
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' },
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    ...common,
    ...commonApplication
  });

  const APP_PAGE_VISIT = UTILS.getPageVisitWithLevel3('1 ' + LITERALS.commons.simulation, {
    [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.qualifiedVisitsTrue,
    ...commonStep
  });

  const APP_STARTED = UTILS.getDynamicAppStarted('1 ' + LITERALS.commons.simulation, {
    ...commonStep
  });

  const APP_COMPLETED = UTILS.getAppCompletedRaw({
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.rejected,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.rejected,
    [CONSTANTS.USER_SEGMENT_PROFILE]: {
      bind: 'segmentProfile'
    },
    ...common,
    ...commonApplication
  });

  const HUELLA_BUREAU = UTILS.getAdvancedFootprint({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.preApprovedLoan.buerauAuthorization,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    ...commonFootprint
  });

  const HUELLA_OTP = UTILS.getAdvancedFootprint({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.otp,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    ...commonFootprint
  });

  const ANALYTICS_FEATURE_FLAG_NPA_CREDIT_CARD = {
    'key': 'glomo.analytics.npacc',
    'defaultValue': true
  };

  [
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    HUELLA_BUREAU,
    HUELLA_OTP
  ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_NPA_CREDIT_CARD));

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    HUELLA_BUREAU,
    HUELLA_OTP
  };

};
