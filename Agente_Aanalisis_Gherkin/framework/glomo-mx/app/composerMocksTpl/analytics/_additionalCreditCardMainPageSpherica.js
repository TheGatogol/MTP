const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAdvancedFootprintWithLevel3,
  getError,
  addFeatureFlag,
  getAppStepWithLevel3,
  getPageVisit,
  getDynamicAppStarted,
  getAppCompleted,
  getAnalyticFeatureFlag
} = require('./common/_utils.js');
const setFeatureFlags = (featureFlag, analytic) => (getAnalyticFeatureFlag(featureFlag, analytic));
const analyticsFeatureFlag = 'additional.creditCardRenapo';
const level3 = {
  [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + literals.commons.request
};
const analyticsFeatureFlagError = {
  'key': 'glomo.analytics.additional.creditCardRenapo.errorOTP',
  'defaultValue': true
};
const errorFlagLoadSection = {
  'key': 'glomo.analytics.additional.creditCardRenapo.serviceUnavailable',
  'defaultValue': true
};
const errorFlagUnable = {
  'key': 'glomo.analytics.additional.creditCardRenapo.errorMiddle',
  'defaultValue': true
};
const common = {
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
};
const pageVisitQua = {
  [constants.QUALIFIED_VISITS]: literals.commons.trueValue
};
const commonLevels = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
  [constants.APPLICATION_APPLICATION_NAME]: literals.commons.additionalCreditCard,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.additionalCreditCard,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.additionalCreditCardTranslate
};
const commonHuellas = {
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.cards,
  [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.additionalCreditCard,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
};
const commonAndHuellas = {
  ...common,
  ...commonHuellas
};
const withApplicationFullfilmentEmpty = {
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.APPLICATION_FULLFILMENT]: literals.empty,
  ...commonHuellas
};
module.exports = () => {
  const dynamicData = {
    [constants.PRODUCT_PRIMARY_CATEGORY]: {
      bind: 'primaryCategory'
    },
    [constants.PRODUCT_PRODUCT_SUBTYPE]: {
      bind: 'productSubtype'
    },
    [constants.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };
  const productAmount = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [constants.PRODUCT_CURRENCY]: {
      bind: 'currency'
    }
  };
  const typology = {
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };
  const signType = {
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'signType'
    }
  };
  const state = {
    [constants.PRODUCT_STATE]: {
      bind: 'state'
    }
  };
  const pageViewBenefits = {
    ...getAdvancedFootprintWithLevel3(literals.commons.oneBenefits, withApplicationFullfilmentEmpty)
  };
  const pageViewMaps = {
    ...getAdvancedFootprintWithLevel3(literals.commons.additionalMap, withApplicationFullfilmentEmpty)
  };
  const signatureError = {
    ...getError(literals.errors.errorOtp, commonAndHuellas)
  };
  const errorPageLoad = {
    ...getError('error problema de servicio', commonAndHuellas)
  };
  const errorServiceUnavailable = {
    ...getError(literals.ocAccount.serviceUnavailable, commonAndHuellas)
  };
  const noticePrivacy = {
    ...getAdvancedFootprintWithLevel3(literals.commons.privacyAdvice, commonAndHuellas)
  };
  const branchLocator = {
    ...getAdvancedFootprintWithLevel3(literals.commons.additionalMap, commonAndHuellas)
  };
  addFeatureFlag(signatureError, analyticsFeatureFlagError);
  addFeatureFlag(errorPageLoad, errorFlagLoadSection);
  addFeatureFlag(errorServiceUnavailable, errorFlagUnable);
  const getAppStep = (numberStep, appStep) => setFeatureFlags(analyticsFeatureFlag, getAppStepWithLevel3(numberStep, appStep, common, commonLevels, dynamicData, productAmount, typology, signType));
  const appPageVisit = getPageVisit('1 ' + literals.commons.request, level3, common, pageVisitQua, commonLevels, dynamicData);
  const appStarted = getDynamicAppStarted('1 ' + literals.commons.request, '1 ' + literals.commons.request, common, commonLevels, dynamicData);
  const appComplete = getAppCompleted(literals.commons.successfulPage, literals.commons.ended, common, commonLevels, dynamicData, productAmount, typology, state, signType);
  [
    appPageVisit,
    appStarted,
    appComplete,
    pageViewMaps,
    pageViewBenefits,
    noticePrivacy,
    branchLocator,
    getAppStep
  ].forEach(item => setFeatureFlags(analyticsFeatureFlag, item));
  return {
    appPageVisit,
    appStarted,
    appComplete,
    pageViewMaps,
    pageViewBenefits,
    noticePrivacy,
    branchLocator,
    signatureError,
    errorPageLoad,
    errorServiceUnavailable,
    getAppStep
  };
};
