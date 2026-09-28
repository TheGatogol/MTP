module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAppOnClickStartLevel2AppType,
    getAppPageVisitLevel2,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedRaw,
    getAdvancedFootprint
  } = require('./common/_utils');
  const featureOcPayments = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
  const ordinaryFlags = {
    supportFixedPayments: 'ocCardPaymentsPlan.supportFixedPayments',
    fixedPaymentPlan: 'ocCardPaymentsPlan.fixedPaymentPlan',
    fixedPaymentPlanForRestructuring: 'ocCardPaymentsPlan.fixedPaymentPlanForRestructuring',
    fixedPaymentPlanForCustomerLoan: 'ocLoanPaymentsPlan.fixedPaymentPlanForCustomerLoan',
    fixedPaymentPlanForCarLoan: 'ocLoanPaymentsPlan.fixedPaymentPlanForCarLoan',
    fixedPaymentPlanForRestructuringLoan: 'ocLoanPaymentsPlan.fixedPaymentPlanForRestructuringLoan'
  };
  const pageCommon = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.restructuringPlan,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const pageCommonFunnel = {
    ...pageCommon,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.restructuringPlan,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.restructuringPlan
  };
  const dynamicCommonData = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    },
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: {
      bind: 'primaryCategory'
    },
    [constants.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };
  const pageCommonFunnelAndDynamicData = {
    ...pageCommonFunnel,
    ...dynamicCommonData
  };
  const dynamicCommonDataSteps = {
    [constants.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [constants.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    },
    [constants.APPLICATION_INTEREST_RATE]: {
      bind: 'rate'
    },
    [constants.APPLICATION_CURRENCY]: {
      bind: 'currency'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: {
      bind: 'paymentType'
    }
  };
  const DYNAMIC_APPLICATION_STEP = {
    [constants.APPLICATION_STEP]: {
      bind: 'step'
    }
  };
  const footPrintMap = {
    errorOnService: {
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.serviceError,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.commons.serviceError
    },
    offerNotAvailable: {
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.offerNotAvailable
    },
    offerOutSchedule: {
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.outOfSchedule
    }
  };
  const _getAppOnClickStart = (feature) => {
    return featureOcPayments(ordinaryFlags[feature], getAppOnClickStartLevel2AppType(literals.commons.operative, {
      ...pageCommonFunnel,
      ...DYNAMIC_APPLICATION_STEP,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities
    }));
  };
  const _getAppPageVisit = (feature) => {
    return featureOcPayments(ordinaryFlags[feature], getAppPageVisitLevel2(literals.commons.first_detail, {
      ...pageCommonFunnelAndDynamicData,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.first_detail
    }));
  };
  const _getAppStarted = (feature) => {
    return featureOcPayments(ordinaryFlags[feature], getAppStartedWithLevel2(literals.commons.first_detail, {
      ...pageCommonFunnelAndDynamicData,
      [constants.APPLICATION_STEP]: literals.commons.interested
    }));
  };
  const _appStep = (stepNumber, feature, text) => {
    return featureOcPayments(ordinaryFlags[feature], getAppStep(stepNumber, {
      ...pageCommonFunnelAndDynamicData,
      ...dynamicCommonDataSteps,
      [constants.APPLICATION_STEP]: text,
      [constants.PAGE_PAGEINFO_LEVEL2]: text
    }));
  };
  const _getAppCompleted = (feature) => {
    return featureOcPayments(ordinaryFlags[feature], getAppCompletedRaw({
      ...pageCommonFunnelAndDynamicData,
      ...dynamicCommonDataSteps,
      [constants.APPLICATION_STATE]: literals.commons.finalized,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
      [constants.PRODUCT_STATE]: literals.commons.finalized
    }));
  };
  const _offerErrorsAdvancedFootPrint = (feature, footPrint) => {
    let footPrintValues = footPrintMap[footPrint];
    footPrintValues = {
      ...footPrintValues,
      ...pageCommon
    };
    return featureOcPayments(`${ordinaryFlags[feature]}.${footPrint}`, getAdvancedFootprint(footPrintValues));
  };
  return {
    _getAppOnClickStart,
    _getAppPageVisit,
    _getAppStarted,
    _appStep,
    _getAppCompleted,
    _offerErrorsAdvancedFootPrint
  };
};
