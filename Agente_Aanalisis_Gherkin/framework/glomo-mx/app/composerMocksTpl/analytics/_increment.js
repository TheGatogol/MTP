const CONSTANTS = require('./common/_constants');
const UTILS = require('./common/_utils');
const LITERALS = require('./common/_literals');

module.exports = () => {
  const getAnalyticsFeatureFlag = {
    key: 'glomo.analytics.instantCash',
    defaultValue: true
  };

  const bindedLiterals = {
    INTERNAL_CAMPAIGN_LOCATION_CENTER: LITERALS.commons.intCmpLocation,
    INTERNAL_CAMPAIGN_FORMAT_ONE_CLICK_ZONE: LITERALS.commons.intCmpCampaignFormat,
    TYPOLOGY_FLEXIBLE_LINE: LITERALS.commons.flexibleLine,
    TYPOLOGY_NORMAL_FLOW: LITERALS.commons.normalFlow
  };

  const common = {
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: LITERALS.commons.language,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.limitIncrease,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.increaseCreditLineOneClick,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: LITERALS.commons.creditCards
  };

  const pageCommon = {
    ...common,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.increaseCreditLineOneClick,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: '1 ' + LITERALS.commons.oneIncrease,
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: LITERALS.commons.lineIncrease,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'applicationTypology'
    }
  };

  const internalCampaign = {
    [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: LITERALS.commons.intCmpLocation,
    [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: { bind: 'campaignFormat' },
    [CONSTANTS.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
    [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: LITERALS.applicationName.loans,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  };

  const APP_ON_CLICK_START = UTILS.getOnClickStart(
    LITERALS.commons.opportunities,
    LITERALS.commons.information,
    {
      ...common,
      ...internalCampaign
    }
  );

  const appPageVisit = UTILS.getPageVisitRaw({
    ...pageCommon,
    [CONSTANTS.APPLICATION_STEP]: '1 ' + LITERALS.commons.oneIncrease,
    [CONSTANTS.QUALIFIED_VISITS]: 'true'
  });

  const appStarted = UTILS.getAppStartedWithLevel2('1 ' + LITERALS.commons.oneIncrease, {
    ...pageCommon,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.apply
  });

  const appCompleted = UTILS.getAppCompletedRaw({
    ...pageCommon,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.approved,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    },
    [CONSTANTS.APPLICATION_CURRENCY]: {
      bind: 'productCurrency'
    },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'productAmount'
    },
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.approved
  });

  [
    bindedLiterals,
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appCompleted
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, getAnalyticsFeatureFlag));

  return {
    bindedLiterals,
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appCompleted
  };

};
