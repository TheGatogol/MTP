module.exports = () => {
  const constants = require('./common/_constants');
  const {
    commons,
    operative,
    sections
  } = require('./common/_literals');
  const {
    getAdvancedFootprintWithLevel3,
    getAnalyticFeatureFlag,
    getAppCompleted,
    getAppCompletedRaw,
    getAppStepWithLevel3,
    getAppStarted,
    getOnClickStart,
    getPageVisitWithLevel3
  } = require('./common/_utils');
  const analyticFeatureFlag = 'depositHiring';
  const analyticFeatureFlagError = 'depositHiringError';
  const basic = {
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.diy
  };
  const base = {
    ...basic,
    [constants.PAGE_PAGEINFO_LEVEL1]: commons.investments,
    [constants.PAGE_PAGEINFO_LEVEL2]: commons.investmentsTerms,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction
  };
  const common = {
    ...base,
    [constants.APPLICATION_GLOBAL_APPLICATION]: operative.deposits,
    [constants.APPLICATION_APPLICATION_NAME]: commons.investmentsTerms,
    [constants.APPLICATION_APPLICATION_TYPE]: commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: commons.online
  };
  const productCommon = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: commons.investments,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: commons.terms
  };
  const dynamicCommon = {
    [constants.APPLICATION_PROCESS]: {
      bind: 'applicationProcess'
    },
    [constants.APPLICATION_STEP]: {
      bind: 'applicationStep'
    },
    [constants.PAGE_PAGEINFO_LEVEL3]: {
      bind: 'pageInfoLevel3'
    },
    [constants.PAGE_PAGEINFO_ERRORPAGE]: {
      bind: 'pageInfoErrorPage'
    }
  };
  const dynamicAmount = {
    ...dynamicCommon,
    [constants.APPLICATION_PAYMENT_DATE]: {
      bind: 'applicationTerm'
    },
    [constants.APPLICATION_INTEREST_RATE]: {
      bind: 'applicationInterestRate'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'applicationAmount'
    },
    [constants.PRODUCT_CURRENCY]: {
      bind: 'applicationCurrency'
    }
  };
  const typology = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'applicationInstruction'
    }
  };
  const customfields = {
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'applicationCustomFields'
    }
  };
  const operationNumber = {
    [constants.APPLICATION_OPERATION_NUMBER]: {
      bind: 'applicationOperationNumber'
    }
  };
  const _getAppStep = (numberStep, appStepText, type = 'default') => {
    const types = {
      default: getAppStepWithLevel3(numberStep, appStepText, {...common, ...productCommon, ...dynamicAmount, ...customfields}),
      withTypology: getAppStepWithLevel3(numberStep, appStepText, {...common, ...productCommon, ...dynamicAmount, ...typology, ...customfields})
    };
    return getAnalyticFeatureFlag(analyticFeatureFlag, types[type]);
  };
  const appCompletedCustom = (textStep, stateText) => {
    const analitycCompletedCustom = getAppCompleted(textStep, stateText, {
      ...common, ...productCommon, ...dynamicAmount, ...typology, ...operationNumber, ...customfields,
      [constants.PAGE_PAGEINFO_LEVEL3]: textStep,
      [constants.APPLICATION_STEP]: commons.successfulPage,
      [constants.PRODUCT_STATE]: stateText
    });
    return getAnalyticFeatureFlag(analyticFeatureFlag, analitycCompletedCustom);
  };
  const modalInfoCoupon = getAnalyticFeatureFlag(analyticFeatureFlag, getAdvancedFootprintWithLevel3('codigo de promocion', {...common}));
  const modalParticipantsCompleted = getAppCompletedRaw({
    ...common, ...productCommon, ...dynamicAmount, ...operationNumber, ...typology,
    [constants.PAGE_PAGEINFO_LEVEL3]: commons.successfulPage,
    [constants.QUALIFIED_VISITS]: commons.falseValue,
    [constants.APPLICATION_STEP]: commons.successfulPage,
    [constants.APPLICATION_STATE]: commons.rejected,
    [constants.USER_SEGMENT_PROFILE]: commons.incompleteInformation,
    [constants.PRODUCT_STATE]: commons.rejected
  });
  const appPageVisit = getAnalyticFeatureFlag(analyticFeatureFlag, getPageVisitWithLevel3('1 simulacion', {
    ...common, ...productCommon, ...dynamicCommon,
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 simulacion',
    [constants.QUALIFIED_VISITS]: { bind: 'isQualifiedVisits' }
  }));
  const appStarted = getAnalyticFeatureFlag(analyticFeatureFlag, getAppStarted('1 simulacion', {
    ...common, ...productCommon, ...dynamicCommon,
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 simulacion'
  }));
  const pageView = ({level3, isPageError} = {}) => {
    const isErrorPageModal = isPageError ?? {bind: 'isPageError'};
    const _level3 = level3 ?? {bind: 'pageInfoLevel3'};
    const data = {
      ...base,
      ...dynamicCommon,
      [constants.PAGE_PAGEINFO_LEVEL3]: _level3
    };
    if (isErrorPageModal) {
      data[constants.PAGE_PAGEINFO_ERRORPAGE] = _level3;
    }
    return getAnalyticFeatureFlag(isErrorPageModal ? analyticFeatureFlagError : analyticFeatureFlag, getAdvancedFootprintWithLevel3(_level3, data));
  };
  const APP_ON_CLICK_START = getAnalyticFeatureFlag(analyticFeatureFlag, getOnClickStart(commons.interested, commons.information,
    {
      ...basic,
      ...productCommon,
      [constants.PAGE_PAGEINFO_LEVEL1]: commons.opportunities,
      [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: commons.intCmpClick,
      [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' },
      [constants.APPLICATION_APPLICATION_NAME]: { bind: 'name' },
      [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type' },
      [constants.APPLICATION_FULLFILMENT]: commons.online,
      [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
      [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
    })
  );
  return {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    modalInfoCoupon,
    modalParticipantsCompleted,
    _getAppStep,
    appCompletedCustom,
    pageView
  };
};
