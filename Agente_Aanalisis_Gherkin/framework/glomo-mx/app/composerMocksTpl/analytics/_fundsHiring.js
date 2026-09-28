module.exports = () => {
  const constants = require('./common/_constants');
  const {
    getAdvancedFootprintWithLevels2And3,
    getAdvancedFootprintError,
    getAnalyticFeatureFlag,
    getAppCompletedRaw,
    getAppStartedWithoutLevel,
    getAppStep,
    getPageVisit,
    getOCAccess
  } = require('./common/_utils');
  const {
    commons,
    sections
  } = require('./common/_literals');
  const _getAnalyticFeatureFlag = (analytic, flag = 'common') => {
    const _flags = {
      common: 'fundsHiringContracting',
      errorMinAmount: 'fundsHiringContracting.minAmountError',
      errorComunication: 'fundsHiringContracting.comunicationError'
    };
    return getAnalyticFeatureFlag(_flags[flag], analytic);
  };
  const baseCommon = {
    [constants.PAGE_PAGEINFO_AREA]: commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: sections.diy
  };
  const common = {
    ...baseCommon,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.transaction,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'funds',
    [constants.APPLICATION_APPLICATION_NAME]: 'fondos flujo unificado',
    [constants.APPLICATION_APPLICATION_TYPE]: commons.engagement,
    [constants.PRODUCT_PRIMARY_CATEGORY]: commons.investments,
    [constants.PRODUCT_PRODUCT_SUBTYPE]: commons.investmentFunds,
    [constants.APPLICATION_FULLFILMENT]: commons.fulfillmentOn
  };
  const typology = {
    [constants.APPLICATION_TYPOLOGY]: { bind: 'applicationTypology' },
    [constants.APPLICATION_PROGRAM_TYPE_HIRED]: { bind: 'applicationTypeHired' }
  };
  const dynamicProduct = {
    [constants.APPLICATION_OFFER]: { bind: 'applicationOffer' },
    [constants.PRODUCT_PRODUCT_NAME]: { bind: 'productProductName' }
  };
  const dynamicAmount = {
    [constants.APPLICATION_CURRENCY]: { bind: 'productProductCurrency' },
    [constants.APPLICATION_AMOUNT]: { bind: 'productProductAmount' }
  };
  const applicationProcess = {
    [constants.APPLICATION_PROCESS]: { bind: 'applicationProcess' }
  };
  const _getPageVisit = text => _getAnalyticFeatureFlag(getPageVisit(text, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: 'fondos flujo unificado'
  }));
  const _getAppStarted = text => {
    return _getAnalyticFeatureFlag(getAppStartedWithoutLevel({
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'fondos flujo unificado',
      [constants.PAGE_PAGEINFO_LEVEL2]: `1 ${commons.information}`,
      [constants.APPLICATION_STEP]: text
    }));
  };
  const _getAppStep = (
    numberStep,
    textStep,
    _validations = {}
  ) => {
    const _analytic = {};
    const _additionalData = {
      applicationProcess,
      dynamicAmount,
      dynamicProduct,
      typology
    };
    Object.keys(_validations).forEach(key => {
      if (_validations[key]) {
        Object.assign(_analytic, { ..._additionalData[key] });
      }
    });
    return _getAnalyticFeatureFlag(getAppStep(numberStep, textStep, {
      ..._analytic,
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'fondos flujo unificado',
      [constants.PAGE_PAGEINFO_LEVEL2]: textStep,
      [constants.APPLICATION_STEP]: textStep
    }));
  };
  const _getAppCompleted = (state, text, type = 'success') => {
    const _analyticTypes = {
      success: {
        ...applicationProcess,
        ...common,
        ...dynamicAmount,
        ...dynamicProduct,
        ...typology,
        [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'applicationOperationNumber' }
      },
      rejected: {
        [constants.USER_SEGMENT_PROFILE]: { bind: 'userSegmentProfile' },
        ...common
      }
    };
    return _getAnalyticFeatureFlag(getAppCompletedRaw({
      [constants.PAGE_PAGEINFO_LEVEL1]: 'fondos flujo unificado',
      [constants.PAGE_PAGEINFO_LEVEL2]: text,
      [constants.APPLICATION_STEP]: text,
      [constants.APPLICATION_STATE]: state,
      [constants.PRODUCT_STATE]: state,
      ..._analyticTypes[type]
    }));
  };
  const _getAdvancedFootprint = (level2, level3) => {
    return _getAnalyticFeatureFlag(getAdvancedFootprintWithLevels2And3(level2, level3, {
      ...baseCommon,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'fondos flujo unificado',
      [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information
    }));
  };
  const _getAdvancedFootprintError = (error = 'error saldo insuficiente', featureFlag = 'errorMinAmount') => {
    return _getAnalyticFeatureFlag(getAdvancedFootprintError(error, {
      ...baseCommon,
      [constants.PAGE_PAGEINFO_LEVEL1]: 'fondos flujo unificado',
      [constants.PAGE_PAGEINFO_LEVEL2]: error,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: commons.information
    }), featureFlag);
  };
  const APP_ON_CLICK_START = _getAnalyticFeatureFlag(getOCAccess(commons.interested, commons.information, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: commons.opportunities,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: commons.intCmpClick,
    [constants.APPLICATION_APPLICATION_TYPE]: { bind: 'type' },
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers' },
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  }));
  return {
    APP_ON_CLICK_START,
    getAdvancedFootprint: _getAdvancedFootprint,
    getAdvancedFootprintError: _getAdvancedFootprintError,
    getAppCompleted: _getAppCompleted,
    getAppStarted: _getAppStarted,
    getAppStep: _getAppStep,
    getPageVisit: _getPageVisit
  };
};
