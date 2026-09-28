/* eslint-disable camelcase */
const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils.js');
const _set_feature_flags = (featureFlag, analytic) => (UTILS.getAnalyticFeatureFlag(featureFlag, analytic));
const analyticsFeatureFlag = 'additionalCardMainPage';
const level3 = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 ' + LITERALS.commons.request
};
const analyticsFeatureFlagError = {
  'key': 'glomo.analytics.additionalCardMainPage.errorOTP',
  'defaultValue': true
};
const common = {
  [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
};
const pageVisitQua = {
  [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.trueValue
};
const commonLevels = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.additionalCreditCard,
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.additionalCreditCard,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.commons.additionalCreditCardTranslate
};
const commonHuellas = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.additionalCreditCard,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
};
const commonAndHuellas = {
  ...common,
  ...commonHuellas
};
const withApplicationFullfilmentEmpty = {
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.empty,
  ...commonHuellas
};
module.exports = () => {
  const dynamicData = {
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: {
      bind: 'primaryCategory'
    },
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: {
      bind: 'productSubtype'
    },
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };
  const productAmount = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.PRODUCT_CURRENCY]: {
      bind: 'currency'
    }
  };
  const typology = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };
  const signType = {
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'signType'
    }
  };
  const state = {
    [CONSTANTS.PRODUCT_STATE]: {
      bind: 'state'
    }
  };
  const pageViewBenefits = {
    ...UTILS.getAdvancedFootprintWithLevel3(LITERALS.commons.oneBenefits, withApplicationFullfilmentEmpty), ... {
      fetureFlag: analyticsFeatureFlag
    }
  };
  const pageViewMaps = {
    ...UTILS.getAdvancedFootprintWithLevel3(LITERALS.commons.additionalMap, withApplicationFullfilmentEmpty), ... {
      fetureFlag: analyticsFeatureFlag
    }
  };
  const signatureError = {
    ...UTILS.getError(LITERALS.errors.errorOtp, commonAndHuellas), ... {
    }
  };
  UTILS.addFeatureFlag(signatureError, analyticsFeatureFlagError);
  const getAppStep = (numberStep, appStep) => _set_feature_flags(analyticsFeatureFlag, UTILS.getAppStepWithLevel3(numberStep, appStep, common, commonLevels, dynamicData, productAmount, typology, signType));
  const appPageVisit = UTILS.getPageVisit('1 ' + LITERALS.commons.request, level3, common, pageVisitQua, commonLevels, dynamicData);
  const appStarted = UTILS.getDynamicAppStarted('1 ' + LITERALS.commons.request, '1 ' + LITERALS.commons.request, common, commonLevels, dynamicData);
  const appComplete = UTILS.getAppCompleted(LITERALS.commons.successfulPage, LITERALS.commons.ended, common, commonLevels, dynamicData, productAmount, typology, state, signType);
  [
    appPageVisit,
    appStarted,
    appComplete,
    pageViewMaps,
    pageViewBenefits,
    getAppStep
  ].forEach(item => _set_feature_flags(analyticsFeatureFlag, item));
  return {
    appPageVisit,
    appStarted,
    appComplete,
    pageViewMaps,
    pageViewBenefits,
    signatureError,
    getAppStep
  };
};