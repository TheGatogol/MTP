const constants = require('./common/_constants');
const literals = require('./common/_literals');

const {
  getOnClickStart,
  OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
  getPageVisit,
  getAppStartedWithLevel2,
  getAppStep,
  getAppCompletedLevel2,
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintWithLevels2And3,
  getAdvancedFootprintErrorLevel2,
  addFeatureFlag
} = require('./common/_utils');

const analyticsFeatureFlag = {
  analyticsFeatureFlagFunnel: {
    'key': 'glomo.analytics.ocSecureLoan.funnel',
    'defaultValue': true
  },
  analyticsFeatureFlagFootprint: {
    'key': 'glomo.analytics.ocSecureLoan.footprint',
    'defaultValue': true
  },
  analyticsFeatureFlagErrorOperationUnavailable: {
    'key': 'glomo.analytics.ocSecureLoan.error.operationUnavailable',
    'defaultValue': true
  },
  analyticsFeatureFlagOperationFailed: {
    'key': 'glomo.analytics.ocSecureLoan.error.operationFailed',
    'defaultValue': true
  }
};

module.exports = () => {
  const pageInfo = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const application = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.ocSecureLoanLead.loanSecure,
    [constants.APPLICATION_APPLICATION_NAME]: literals.ocSecureLoanLead.personalLoanWithGuarantee,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.simulator,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
  };

  const commonSegmentGlobal = {
    ...pageInfo,
    [constants.USER_SEGMENT_GLOBAL]: literals.commons.patrimonialSegment,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.ocSecureLoanLead.personalLoanWithGuarantee,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.patrimonial
  };

  const commonProductAttributes = {
    ...application,
    ...commonSegmentGlobal,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.personalLoan,
    [constants.CUSTOMER_EXPERIENCE]: {}
  };

  const commonAppStart = {
    ...pageInfo,
    ...application,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.personalLoan
  };

  const setAppStep = (step, level2, data) => getAppStep(step, {
    ...commonProductAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: `${step} ${level2}`,
    [constants.APPLICATION_STEP]: `${step} ${level2}`,
    ...data
  });

  const summary = {
    [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: { bind: 'interestRate' },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'numberOfPayments' },
    [constants.PRODUCT_PRODUCT_RATE_PAYMENTSTYPE]: literals.ocSecureLoanLead.splitPayment
  };

  const internalCampaign = {
    ...OC_ACCESS_DASHBOARD_DYNAMIC_DATA,
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: '-',
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.loans,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: literals.empty,
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: literals.empty,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick
  };

  const APP_ON_CLICK_START = getOnClickStart(literals.commons.opportunities, literals.commons.information, {
    ...commonAppStart,
    ...internalCampaign,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  });

  const appPageVisit = getPageVisit(`1 ${literals.commons.oneBenefits}`, {
    ...commonProductAttributes
  });

  const appStarted = getAppStartedWithLevel2(`1 ${literals.commons.oneBenefits}`, {
    ...commonProductAttributes,
    [constants.APPLICATION_STEP]: literals.commons.continue
  });

  const appStepSimulation = setAppStep('2', literals.commons.simulation);

  const appStepSummary = setAppStep('3', literals.commons.confirmation, {
    ...summary
  });

  const appCompleted = getAppCompletedLevel2(literals.commons.successfulPage, literals.commons.ended, {
    ...commonProductAttributes,
    ...summary
  });

  const editGuarantee = getAdvancedFootprintWithLevel2(
    literals.ocSecureLoanLead.editGuarantee, {
      ...commonSegmentGlobal
    });

  const editPercentage = getAdvancedFootprintWithLevels2And3(
    literals.ocSecureLoanLead.editGuarantee, literals.ocSecureLoanLead.editPercentage, {
      ...commonSegmentGlobal
    });

  const unavailableOperation = getAdvancedFootprintErrorLevel2(
    literals.ocSecureLoanLead.personalLoanWithGuarantee, literals.errors.errorOperationNotAvailable, {
      ...commonSegmentGlobal
    });

  const unfinishedOperation = getAdvancedFootprintErrorLevel2(
    literals.ocSecureLoanLead.personalLoanWithGuarantee, literals.errors.operationError, {
      ...commonSegmentGlobal
    });

  [
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStepSimulation,
    appStepSummary,
    appCompleted
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagFunnel));

  [
    editGuarantee,
    editPercentage
  ].forEach(analytic => addFeatureFlag(analytic, analyticsFeatureFlag.analyticsFeatureFlagFootprint));

  addFeatureFlag(unavailableOperation, analyticsFeatureFlag.analyticsFeatureFlagErrorOperationUnavailable);

  addFeatureFlag(unfinishedOperation, analyticsFeatureFlag.analyticsFeatureFlagOperationFailed);


  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    appStepSimulation,
    appStepSummary,
    appCompleted,
    editGuarantee,
    editPercentage,
    unavailableOperation,
    unfinishedOperation
  };
};
