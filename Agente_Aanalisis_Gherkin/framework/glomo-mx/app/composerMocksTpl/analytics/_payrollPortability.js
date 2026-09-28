module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const ANALYTICS_FEATURE_FLAG_PAYROLL_PORTABILITY = {
    key: 'glomo.analytics.payrollPortability',
    defaultValue: true
  };
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payrollPortability,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const COMMON_APPLICATION = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]:
      LITERALS.globalApplication.payrollPortability,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]:
      LITERALS.commons.payrollPortability,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };
  const COMMON_PRODUCTS = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]:
      LITERALS.commons.payrollAccount
  };
  const APP_ON_CLICK_START = UTILS.getOnClickStart(
    LITERALS.commons.imInterestedAccountDetail,
    LITERALS.commons.information,
    COMMON,
    COMMON_APPLICATION,
    COMMON_PRODUCTS,
    {
      [CONSTANTS.APPLICATION_STEP]: `${LITERALS.commons.changePayroll}`,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${LITERALS.commons.receivePayroll}`,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
    }
  );
  const APP_PAGE_VISIT = UTILS.getPageVisitWithLevel3(
    '1 ' +  LITERALS.commons.oneBenefits,
    COMMON,
    COMMON_APPLICATION,
    COMMON_PRODUCTS,
    {
      [CONSTANTS.QUALIFIED_VISITS]: 'true',
      [CONSTANTS.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${LITERALS.commons.payrollPortability}`
    }
  );
  const APP_STARTED = UTILS.getStaticAppStarted(
    LITERALS.commons.start,
    '1 ' +  LITERALS.commons.oneBenefits,
    COMMON,
    COMMON_APPLICATION,
    COMMON_PRODUCTS,
    {
      [CONSTANTS.APPLICATION_STEP]: `${LITERALS.commons.start}`,
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.payrollPortability,
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.applicationName.ocPayrollPortability,
      [CONSTANTS.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${LITERALS.commons.payrollPortability}`
    }
  );
  const APP_STEP = (numberStep, level3) => {
    let obj = {
      ...COMMON,
      ...COMMON_APPLICATION,
      ...COMMON_PRODUCTS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${LITERALS.commons.payrollPortability}`,
      [CONSTANTS.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      }
    };
    let analytics = UTILS.getAppStepWithLevel3(numberStep, level3, obj);
    UTILS.addFeatureFlag(analytics, ANALYTICS_FEATURE_FLAG_PAYROLL_PORTABILITY);
    return analytics;
  };
  const GET_ADVANCED_FOOTPRINT = (level3) => {
    let analyticsView = UTILS.getAdvancedFootprintWithLevel3(level3, {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${LITERALS.commons.payrollPortability}`
    });
    UTILS.addFeatureFlag(analyticsView, ANALYTICS_FEATURE_FLAG_PAYROLL_PORTABILITY);
    return analyticsView;
  };
  const APP_COMPLETED = UTILS.getAppCompletedRaw(
    COMMON,
    COMMON_APPLICATION,
    COMMON_PRODUCTS,
    {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.successfulPage,
      [CONSTANTS.APPLICATION_STEP]: LITERALS.commons.successfulPage,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: `${LITERALS.commons.payrollPortability}`,
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
        bind: 'applicationOperationNumber'
      },
      [CONSTANTS.APPLICATION_STATE]: {
        bind: 'applicationState'
      },
      [CONSTANTS.APPLICATION_TYPOLOGY]: {
        bind: 'typology'
      },
      [CONSTANTS.PRODUCT_STATE]: {
        bind: 'applicationState'
      },
      [CONSTANTS.USER_SEGMENT_PROFILE]: {
        bind: 'userSegmentProfile'
      }
    }
  );

  [APP_ON_CLICK_START, APP_PAGE_VISIT, APP_STARTED, APP_COMPLETED].forEach((item) =>
    UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_PAYROLL_PORTABILITY)
  );

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP,
    APP_COMPLETED,
    GET_ADVANCED_FOOTPRINT,
    ANALYTICS_FEATURE_FLAG_PAYROLL_PORTABILITY
  };
};
