const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getOnClickStart,
  getAnalyticFeatureFlag,
  getPageVisit,
  getAppStartedWithLevel2,
  getAppStep,
  getAdvancedFootprintWithLevel2,
  getAppCompletedRaw
} = require('./common/_utils');

module.exports = () => {

  const bindedLiterals = {
    APPLICATION_STEP_AMOUNT_TO_REQUEST: literals.preApprovedLoan.amountRequest,
    APPLICATION_STEP_IM_INTERESTED: literals.commons.interested,
    APPLICATION_STEP_SIMULATION: `1 ${literals.commons.simulation}`,
    APPLICATION_STEP_TERMS_AND_CONDITIONS: `2 ${literals.commons.termsAndConditions}`,
    APPLICATION_STEP_CONFIRMATION: `3 ${literals.commons.confirmation}`,
    APPLICATION_STEP_OTP: `4 ${literals.commons.otp}`,
    APPLICATION_STEP_SUCCESSFUL_PAGE: literals.commons.successfulPage
  };

  const featureFlag = literals.featureFlag.ocLoanRelocation;

  const pageViewCommon = () =>({
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.operative.recolocation.level1,
    [constants.PAGE_PAGEINFO_LANGUAGE]: literals.commons.language,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  });

  const common = {
    ...pageViewCommon(),
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.preApprovedLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.operative.recolocation.level1,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.loans
  };

  const pageCommon = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.operative.recolocation.level1,
    [constants.APPLICATION_CURRENCY]: literals.currencies.MXN
  };

  const commonProducts = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.preApprovedLoan.immediatePersonalLoan
  };

  const commonAppOnClickStart = {
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    [constants.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [constants.APPLICATION_APPLICATION_NAME]: {
      bind: 'name'
    },
    [constants.APPLICATION_APPLICATION_TYPE]: {
      bind: 'type'
    },
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    },
    ...commonProducts,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick
  };

  const dynamicCommon = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    },
    [constants.APPLICATION_PROCESS]: {
      bind: 'process'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    },
    [constants.APPLICATION_AMOUNT]: {
      bind: 'applicationAmount'
    },
    [constants.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'applicationPaymentAmount'
    },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'paymentDuration'
    },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: {
      bind: 'allowedTermsFrecuency'
    },
    [constants.APPLICATION_INTEREST_RATE]: {
      bind: 'productInterestRate'
    },
    [constants.APPLICATION_SERVICE_CHARGE]: {
      bind: 'serviceCharge'
    },
    [constants.APPLICATION_OFFER]: {
      bind: 'offer'
    },
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'userSegmentProfile'
    },
    [constants.USER_SEGMENT_GLOBAL]: {
      bind: 'segmentCode'
    }
  };

  const appCompletedCommons = (state) => ({
    [constants.PAGE_PAGEINFO_LEVEL2]: bindedLiterals.APPLICATION_STEP_SUCCESSFUL_PAGE,
    [constants.APPLICATION_STEP]: bindedLiterals.APPLICATION_STEP_SUCCESSFUL_PAGE,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_STATE]: state,
    [constants.PRODUCT_STATE]: state,
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  });

  const APP_ON_CLICK_START = getOnClickStart(literals.operative.contractProductSection.step, literals.commons.information, commonAppOnClickStart);

  const appPageVisit = getPageVisit(bindedLiterals.APPLICATION_STEP_SIMULATION, {
    ...pageCommon,
    ...dynamicCommon,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.QUALIFIED_VISITS]: 'true'
  });

  const appStarted = getAppStartedWithLevel2(bindedLiterals.APPLICATION_STEP_SIMULATION, {
    ...pageCommon,
    ...dynamicCommon,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_STEP]: {
      bind: 'applicationStep'
    }
  });

  const getAppSteps = (param) => {
    const data = {
      ...pageCommon,
      ...dynamicCommon,
      [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
      [constants.PAGE_PAGEINFO_LEVEL2]: bindedLiterals[param],
      [constants.APPLICATION_STEP]: bindedLiterals[param]
    };
    const step = {
      APPLICATION_STEP_TERMS_AND_CONDITIONS: getAppStep('2', data),
      APPLICATION_STEP_CONFIRMATION: getAppStep('3', data),
      APPLICATION_STEP_OTP: getAppStep('4', data)
    };
    return getAnalyticFeatureFlag(featureFlag, step[param]);
  };

  const appCompleted = getAppCompletedRaw({
    ...pageCommon,
    ...dynamicCommon,
    ...appCompletedCommons(literals.state.contracted)
  });


  const appCompletedRejected = getAppCompletedRaw({
    ...pageCommon,
    ...dynamicCommon,
    ...appCompletedCommons(literals.state.rejected)
  });

  const markInterest = getAdvancedFootprintWithLevel2('tasas de interes', pageViewCommon());
  const markLifeInsurance = getAdvancedFootprintWithLevel2('seguro de vida', pageViewCommon());
  const markCommunicationError = getAdvancedFootprintWithLevel2('error comunicacion', pageViewCommon());

  [
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appCompleted,
    markInterest,
    appCompletedRejected,
    markLifeInsurance,
    markCommunicationError
  ].forEach((analytic) => {
    getAnalyticFeatureFlag(featureFlag, analytic);
  });

  return {
    bindedLiterals,
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appCompleted,
    appCompletedRejected,
    markInterest,
    markLifeInsurance,
    markCommunicationError,
    getAppSteps
  };
};
