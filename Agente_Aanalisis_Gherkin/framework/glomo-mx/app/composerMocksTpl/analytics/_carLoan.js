/* eslint-disable no-shadow */
const constants = require('./common/_constants');
const literals = require('./common/_literals');
const { getError, getAppStep, getOCAccess, getExternalLink, getAppCompleted,
  getStaticAppStarted, getAnalyticFeatureFlag, getPageVisitWithLevel3,
  getAdvancedFootprintWithLevel3, getAdvancedFootprintWithLevel4, getInternalLinkWithPageActivityLevel3
} = require('./common/_utils');

const featureFlag = 'carLoan';

const commons = {
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.carLoan,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
  [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.carLoan,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
  [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.applicationName.carLoan
};

const appOnClickStartData = {
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.global_position,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan,
  [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.carLoan,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
  [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.applicationName.carLoan,
  [constants.INTERNAL_CAMPAIGN_LOCATION]: literals.commons.intCmpLocation,
  [constants.INTERNAL_CAMPAIGN_FORMAT]: literals.commons.intCmpCampaignFormat,
  [constants.INTERNAL_CAMPAIGN_NAME]: literals.commons.carLoanCampaingName,
  [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.applicationName.carLoan,
  [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
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
  }
};

const appPageVisit = {
  ...commons,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.carLoan,
  [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
};

const productsAttributes = {
  [constants.APPLICATION_TYPOLOGY]: {
    bind: 'typology'
  },
  [constants.PRODUCT_AMOUNT]: {
    bind: 'amount'
  },
  [constants.APPLICATION_PAYMENT_AMOUNT]: {
    bind: 'paymentAmount'
  },
  [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
    bind: 'numberOfPayments'
  },
  [constants.APPLICATION_INTEREST_RATE]: {bind:
    'interestRate'
  },
  [constants.PRODUCT_CURRENCY]: {
    bind: 'currency'
  }
};

const appCompleted = {
  ...commons,
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
  [constants.APPLICATION_STEP]: literals.commons.successfulPage,
  [constants.APPLICATION_OPERATION_NUMBER]: {
    bind: 'operationNumber'
  },
  [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken,
  ...productsAttributes
};

const appCompletedSuccess = {
  ...appCompleted,
  [constants.APPLICATION_STATE]: literals.state.contracted,
  [constants.PRODUCT_STATE]: literals.state.contracted
};

const appCompletedRejected = {
  ...appCompleted,
  [constants.APPLICATION_STATE]: literals.state.rejected,
  [constants.PRODUCT_STATE]: literals.state.rejected,
  [constants.USER_SEGMENT_PROFILE]: literals.commons.userBureau
};

const appCompletedRejectedUnderage = {
  ...appCompleted,
  [constants.APPLICATION_STATE]: literals.state.rejected,
  [constants.PRODUCT_STATE]: literals.state.rejected,
  [constants.USER_SEGMENT_PROFILE]: literals.commons.userUnderage
};

const stepGenerator = (stepName) => ({
  ...commons,
  [constants.PAGE_PAGEINFO_LEVEL3]: stepName,
  [constants.APPLICATION_STEP]: stepName,
  [constants.APPLICATION_CUSTOM_FIELDS]: stepName === '4 otp' ?  literals.commons.signToken : '',
  ...productsAttributes
});

const emptyProduct = {
  [constants.PRODUCTS_ATTRIBUTES]: []
};

const footprint = {
  ...emptyProduct,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.carLoan,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy
};

const shareReceipt = {
  ...emptyProduct,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.loans,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.applicationName.carLoan,
  [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.successfulPage,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
  [constants.PAGE_PAGEACTIVITY_LINK_NAME]: literals.commons.share,
  [constants.PAGE_PAGEACTIVITY_LINK_URL]: {bind: 'linkUrl'}
};

const assignFeatureFlag = (analytic) => getAnalyticFeatureFlag(featureFlag, analytic);

const getAdvancedFootprint = (name) => assignFeatureFlag(
  getAdvancedFootprintWithLevel3(name, footprint)
);

const getOfferStepAnalytic = (step, nameStep) => assignFeatureFlag(
  getAppStep(step, stepGenerator(nameStep))
);

const getErrorFootprint = (name) => assignFeatureFlag(
  getError(name, footprint)
);

const getInternalFootprint = (name, stepSection) => assignFeatureFlag(
  getInternalLinkWithPageActivityLevel3(name, stepSection, footprint)
);

const _getAppCompleted = (type = 'default') => {
  const appCompletedTypes = {
    rejected: appCompletedRejected,
    rejectedUnderRage: appCompletedRejectedUnderage,
    default: appCompletedSuccess
  };
  return getAnalyticFeatureFlag(featureFlag, getAppCompleted(literals.commons.successfulPage, literals.state.contracted, appCompletedTypes[`${type}`]));
};

module.exports = () => {
  const appPageVisitSimulatorStep = getAnalyticFeatureFlag(featureFlag, getPageVisitWithLevel3(`1 ${literals.stepsSection.carLoanData}`, appPageVisit));
  const appStartedSimulatorStep = getAnalyticFeatureFlag(featureFlag, getStaticAppStarted({ bind: 'interaction' }, `1 ${literals.stepsSection.carLoanData}`, commons));
  const footprintTyC = getAnalyticFeatureFlag(featureFlag, getAdvancedFootprintWithLevel4(`2 ${literals.stepsSection.carLoanTyC}`, literals.commons.detail, footprint));
  const footprintShareReceipt = getAnalyticFeatureFlag(featureFlag, getExternalLink(shareReceipt));
  const APP_ON_CLICK_START = getAnalyticFeatureFlag(featureFlag, getOCAccess(literals.commons.interested, literals.commons.online, appOnClickStartData));

  return {
    APP_ON_CLICK_START,
    appPageVisitSimulatorStep,
    appStartedSimulatorStep,
    footprintShareReceipt,
    footprintTyC,
    getOfferStepAnalytic,
    getAdvancedFootprint,
    getErrorFootprint,
    getInternalFootprint,
    _getAppCompleted
  };
};