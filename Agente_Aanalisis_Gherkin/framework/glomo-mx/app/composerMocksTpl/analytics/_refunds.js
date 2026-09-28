const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILANALYTICS = require('./common/_utils');

module.exports = () => {

  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.refunds',
    'defaultValue': true
  };

  const COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.refund_money,
    [CONSTANTS.APPLICATION_STEP]: ''

  };

  const ADITIONAL_COMMONS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.refund_money,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'devolver transferencia',
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'refund transfer'
  };

  const DYNAMIC_DATA = {
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: {bind: 'productSubType'},
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {bind: 'account'},
    [CONSTANTS.PRODUCT_CURRENCY]: {bind: 'currency'},
    [CONSTANTS.PRODUCT_AMOUNT]: {bind: 'amount'}
  };

  const APP_ON_CLICK_START = (step, intent) => {
    let obj = {
      ...ADITIONAL_COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail
    };

    let analytics = UTILANALYTICS.getOnClickStart(step, intent, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const APP_PAGE_VISIT = (level3) => {
    let obj = {
      ...ADITIONAL_COMMONS,
      ...DYNAMIC_DATA
    };

    let analytics = UTILANALYTICS.getPageVisitWithLevel3(level3, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const APP_STARTED = (level3) => {
    let obj = {
      ...ADITIONAL_COMMONS,
      ...DYNAMIC_DATA
    };

    let analytics = UTILANALYTICS.getStaticAppStarted(LITERALS.commons.refund_money, level3, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const APP_STEP = (numberStep, step) => {
    let obj = {
      ...ADITIONAL_COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: `${numberStep} ${step}`,
      [CONSTANTS.APPLICATION_STEP]: `${numberStep} ${step}`,
      ...DYNAMIC_DATA
    };

    let analytics = UTILANALYTICS.getAppStep(numberStep, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const  APP_COMPLETED = (level3, state) => {
    let obj = {
      ...ADITIONAL_COMMONS,
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token',
      [CONSTANTS.PRODUCT_STATE]: state,
      ...DYNAMIC_DATA
    };

    let analytics = UTILANALYTICS.getAppCompleted(level3, state, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const  INTERNAL_LINK = (linkName, level3) => {
    let obj = {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3
    };

    let analytics = UTILANALYTICS.getInternalLink(linkName, obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const  PAGE_VIEW_WARNING = (level3) => {
    let obj = {
      ...COMMONS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3
    };

    let analytics = UTILANALYTICS.getAdvancedFootprint(obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  const  PAGE_VIEW_ERROR = (level3) => {
    let obj = {
      ...COMMONS,
      [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: '',
      [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: '',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: level3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level3,
      [CONSTANTS.PRODUCT_PRODUCT_NAME]: ''
    };

    let analytics = UTILANALYTICS.getAdvancedFootprint(obj);
    UTILANALYTICS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG);
    return analytics;
  };

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP,
    APP_COMPLETED,
    INTERNAL_LINK,
    PAGE_VIEW_WARNING,
    PAGE_VIEW_ERROR,
    ANALYTICS_FEATURE_FLAG
  };
};