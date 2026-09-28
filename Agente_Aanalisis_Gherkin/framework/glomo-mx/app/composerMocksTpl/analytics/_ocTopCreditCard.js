const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILANALYTICS = require('./common/_utils');
module.exports = () => {
  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.ocTopCreditCard',
    'defaultValue': true
  };
  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const COMMONS_APPLICATION_PRODUCT = {
    ...COMMONS,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.cardUpgrade,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.cardUpgrade,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.creditCards
  };
  const DYNAMIC_DATA = {
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: { bind: 'productName' },
    [CONSTANTS.PRODUCT_AMOUNT]: { bind: 'productAmount' },
    [CONSTANTS.APPLICATION_INTEREST_RATE]: { bind: 'productInterestRate' }
  };
  const _ON_CLICK_START_DATA = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.opportunities,
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
      bind: 'name'
    },
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: {
      bind: 'type'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick
  };
  const APP_ON_CLICK_START = UTILANALYTICS.getOCAccess(
    LITERALS.commons.interested,
    LITERALS.commons.online,
    _ON_CLICK_START_DATA,
    COMMONS_APPLICATION_PRODUCT
  );
  const APP_PAGE_VISIT = UTILANALYTICS.getPageVisit(
    LITERALS.commons.first_detail,
    COMMONS_APPLICATION_PRODUCT,
    {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cardUpgrade,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.first_detail,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.first_detail
    }
  );
  const APP_STARTED = UTILANALYTICS.getAppStartedWithLevel2(
    LITERALS.commons.first_detail,
    COMMONS_APPLICATION_PRODUCT,
    {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cardUpgrade,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.first_detail,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: { bind: 'applicationStep' }
    }
  );
  const APP_STEP = (numberStep, step) => {
    const obj = {
      ...COMMONS_APPLICATION_PRODUCT,
      ...DYNAMIC_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cardUpgrade,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${numberStep} ${step}`,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: `${numberStep} ${step}`
    };
    const analytics = UTILANALYTICS.getAppStep(numberStep, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };
  const ADVANCED_FOOTPRINT = UTILANALYTICS.getAdvancedFootprintWithLevel1(
    LITERALS.commons.cardUpgrade,
    {
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'level2' }
    },
    COMMONS
  );
  const INTERNAL_LINK = UTILANALYTICS.getInternalLinkWithLevel2(
    { bind: 'linkName' },
    LITERALS.commons.faqs,
    {
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cardUpgrade
    },
    COMMONS
  );
  const APP_COMPLETED = UTILANALYTICS.getAppCompletedRaw(
    COMMONS_APPLICATION_PRODUCT,
    DYNAMIC_DATA,
    {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cardUpgrade,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.successfulPage,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
      [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.contracted,
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
      [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.contracted
    }
  );
  const ADVANCED_FOOTPRINT_ERROR = UTILANALYTICS.getAdvancedFootprint(
    {
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cardUpgrade,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'errorPage' },
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: { bind: 'errorPage' }
    },
    COMMONS
  );
  [
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP,
    ADVANCED_FOOTPRINT,
    INTERNAL_LINK,
    APP_COMPLETED,
    ADVANCED_FOOTPRINT_ERROR
  ].forEach(item => UTILANALYTICS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));
  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP,
    ADVANCED_FOOTPRINT,
    INTERNAL_LINK,
    APP_COMPLETED,
    ADVANCED_FOOTPRINT_ERROR
  };
};