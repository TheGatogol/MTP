const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAppStarted,
  getAppStep,
  getAnalyticFeatureFlag,
  getOnClickStart,
  getAppCompleted,
  getInternalLink,
  getExternalLinkWithLink,
  getPageVisitWithLevel3,
  getAdvancedFootprintWithLevel4,
  OC_ACCESS_DASHBOARD_DYNAMIC_DATA
} = require('./common/_utils');

module.exports = () => {

  const bindedLiterals = {
    APPLICATION_STEP_MOUNT: literals.commons.quantityAmount,
    APPLICATION_STEP_COMMISSION: 'info comision apertura',
    APPLICATION_STEP_I_WANT: 'lo quiero',
    APPLICATION_STEP_DETAILS: `1 ${literals.commons.detail}`,
    APPLICATION_STEP_TERMS_AND_CONDITIONS: `2 ${literals.commons.termsAndConditions}`,
    APPLICATION_STEP_CONFIRMATION: `3 ${literals.commons.confirmation}`,
    APPLICATION_STEP_OTP: `4 ${literals.commons.otp}`,
    USER_SEGMENT_PROFILE_MISSING_INFO: literals.commons.incompleteInformation,
    USER_SEGMENT_PROFILE_UNAUTHORIZED_LOAN: 'prestamo no autorizado'
  };

  const featureFlag = literals.featureFlag.ocPayrollAdvance;

  const pageViewCommon = (pageIntent) =>({
    [constants.PAGE_PAGEINFO_LANGUAGE]: literals.commons.language,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy
  });

  const common = {
    ...pageViewCommon(literals.commons.transaction),
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.payrollAdvance,
    [constants.APPLICATION_APPLICATION_NAME]: literals.operative.payrollAdvance,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_PRODUCT_NAME]: literals.operative.payrollAdvance
  };

  const appOnClickDynamicData = {
    ...OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    }
  };

  const commonAppOnClickStart = {
    ...pageViewCommon(literals.commons.information),
    ...appOnClickDynamicData,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication'},
    [constants.APPLICATION_APPLICATION_NAME]: { bind: 'name'},
    [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type'},
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.operative.payrollAdvance,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.onlineOffline
  };

  const pageCommon = (fulfillment = '') => ({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.APPLICATION_FULLFILMENT]: fulfillment
  });

  const dynamicCommon = {
    [constants.APPLICATION_AMOUNT]: {
      bind: 'applicationAmount'
    },
    [constants.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'applicationPaymentAmount'
    },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'paymentDuration'
    },
    [constants.APPLICATION_INTEREST_RATE]: {
      bind: 'productInterestRate'
    },
    [constants.APPLICATION_CURRENCY]: literals.currencies.MXN
  };

  const commonLinks = {
    ...pageViewCommon(literals.commons.transaction),
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.payrollAdvance,
    [constants.PAGE_PAGEINFO_LEVEL3]: bindedLiterals.APPLICATION_STEP_DETAILS
  };

  const commonsApp = {
    ...pageCommon(literals.commons.onlineOffline),
    ...dynamicCommon,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.payrollAdvance
  };

  const commonsMarks = {
    ...pageViewCommon(literals.commons.transaction),
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.payrollAdvance
  };

  const getAppSteps = (param) => {
    const data = {
      ...commonsApp,
      [constants.PAGE_PAGEINFO_LEVEL3]: bindedLiterals[param],
      [constants.APPLICATION_STEP]: bindedLiterals[param]
    };
    const step = {
      APPLICATION_STEP_TERMS_AND_CONDITIONS: getAppStep(2, data),
      APPLICATION_STEP_CONFIRMATION: getAppStep(3, data),
      APPLICATION_STEP_OTP: getAppStep(4, data)
    };
    return getAnalyticFeatureFlag(featureFlag, step[param]);
  };

  const appPageVisit = getPageVisitWithLevel3(bindedLiterals.APPLICATION_STEP_DETAILS, {...pageCommon(literals.commons.onlineOffline), [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.payrollAdvance });


  const appStarted = getAppStarted(bindedLiterals.APPLICATION_STEP_DETAILS, {
    ...pageCommon(literals.commons.onlineOffline),
    ...dynamicCommon,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.operative.payrollAdvance,
    [constants.APPLICATION_STEP]: {
      bind: 'applicationStep'
    }
  });

  const appCompletedCommons = {
    ...commonsApp,
    [constants.PRODUCT_STATE]: literals.commons.hired
  };

  const appCompleted = getAppCompleted(literals.commons.successfulPage, literals.commons.hired, appCompletedCommons);
  const markCommission = getAdvancedFootprintWithLevel4(bindedLiterals.APPLICATION_STEP_DETAILS, literals.commons.openingFee, commonsMarks);
  const markCat = getAdvancedFootprintWithLevel4(bindedLiterals.APPLICATION_STEP_DETAILS, literals.commons.totalAnnualCost, commonsMarks);
  const markBureau = getAdvancedFootprintWithLevel4(bindedLiterals.APPLICATION_STEP_TERMS_AND_CONDITIONS, literals.commons.creditHistory, commonsMarks);
  const markExampleAmortizationTable = getInternalLink(literals.commons.exampleAmortizationTable,  commonLinks);
  const APP_ON_CLICK_START = getOnClickStart(literals.commons.opportunities, literals.commons.information, commonAppOnClickStart);

  [
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appCompleted,
    markCommission,
    markCat,
    markBureau,
    markExampleAmortizationTable
  ].forEach((analytic) => {
    getAnalyticFeatureFlag(featureFlag, analytic);
  });

  return {
    bindedLiterals,
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appCompleted,
    markCommission,
    markCat,
    markBureau,
    markExampleAmortizationTable,
    getAppSteps
  };
};
