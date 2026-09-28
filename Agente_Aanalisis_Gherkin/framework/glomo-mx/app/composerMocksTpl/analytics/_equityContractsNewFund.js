const constants = require('./common/_constants');
const literals = require('./common/_literals');
const featureFlagFunnel = {
  key: 'glomo.analytics.ocFundsEquityContract',
  defaultValue: true
};
const featureFlagError = {
  key: 'glomo.analytics.ocFundsEquityContract.error',
  defaultValue: true
};
const {
  getAdvancedFootprintWithLevel3,
  getAdvancedFootprintWithLevel4,
  getAppCompleted,
  getAppStepWithLevel3,
  addFeatureFlag,
  getPageVisitWithLevel3,
  getOnClickStart,
  getStaticAppStarted
} = require('./common/_utils');

module.exports = () => {
  const commonPage = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.funds,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const commonPageIntent = {
    [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.commons.investmentFunds,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.investments,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'fund contracting',
    [constants.APPLICATION_FULLFILMENT]: literals.actions.online,
    [constants.APPLICATION_APPLICATION_NAME]: 'nuevo fondo en contrato existente',
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring
  };
  const commonStep = { ...commonPageIntent, ...commonPage };
  const commonClickStart = {
    [constants.APPLICATION_STEP]: 'click en nuevo fondo',
    [constants.PAGE_PAGEINFO_LEVEL2]: 'detalle de producto',
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    ...commonStep
  };
  const commonFootprint = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'nuevo fondo',
    ...commonPage
  };
  const commonNoClickStart = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'nuevo fondo',
    ...commonStep
  };
  const appPageVisitVariables = {
    [constants.APPLICATION_STATE]: 'inicio',
    [constants.QUALIFIED_VISITS]: 'true',
    ...commonNoClickStart
  };
  const commonStepWithProductName = {
    ...commonNoClickStart,
    [constants.PRODUCT_PRODUCT_NAME]: { bind: 'productFundName' }
  };
  const commonStepAfterSimulation = {
    ...commonStepWithProductName,
    [constants.APPLICATION_AMOUNT]: { bind: 'investAmount' },
    [constants.APPLICATION_CURRENCY]: literals.currencies.MXN
  };
  const commonOtp = {
    ...commonStepAfterSimulation,
    [constants.APPLICATION_CUSTOM_FIELDS]: 'firma:token'
  };
  const appComplete = {
    ...commonOtp,
    [constants.PRODUCT_STATE]: { bind: 'applicationState' },
    [constants.APPLICATION_STATE]: { bind: 'applicationState' },
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' }
  };
  const commonFootprintNoFunds = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL2]: 'nuevo fondo',
    ...commonPage
  };
  const footingFundNotAvailable = {
    [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error fondo no disponible',
    ...commonFootprint
  };
  const footingServiceNotAvailable = {
    [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error servicio no disponible',
    ...commonFootprint
  };
  const footprintFundKeyModal = {
    [constants.PAGE_PAGEINFO_LEVEL5]: 'ayuda clave',
    ...commonFootprint
  };
  const footprintFundDetail = {
    [constants.PAGE_PAGEINFO_LEVEL5]: { bind: 'pageVisitLevel5' },
    ...commonFootprint
  };
  const _analyticsData = {
    commonFootprint,
    commonFootprintNoFunds,
    commonOtp,
    commonStepWithProductName,
    commonStepAfterSimulation,
    footingFundNotAvailable,
    footingServiceNotAvailable,
    footprintFundDetail,
    footprintFundKeyModal
  };

  const _setFeatureFlag = (obj, featureFlag) => {
    addFeatureFlag(obj, featureFlag);
    return obj;
  };

  const _getOnClickStart = (step) => {
    return _setFeatureFlag(getOnClickStart(step, literals.commons.information, commonClickStart), featureFlagFunnel);
  };
  const _getPageVisitWithLevel3 = () => {
    return _setFeatureFlag(getPageVisitWithLevel3({ bind: 'pageVisitLevel3' }, appPageVisitVariables), featureFlagFunnel);
  };
  const _getStaticAppStarted = () => {
    return _setFeatureFlag(getStaticAppStarted({ bind: 'appStartedStep' }, { bind: 'pageVisitLevel3' }, commonNoClickStart), featureFlagFunnel);
  };
  const _getAppStepWithLevel3 = (numberStep, step, data) => {
    return _setFeatureFlag(getAppStepWithLevel3(numberStep, step, data), featureFlagFunnel);
  };
  const _getAppCompleted = () => {
    return _setFeatureFlag(getAppCompleted(literals.commons.successfulPage, 'contratado', appComplete), featureFlagFunnel);
  };
  const _getFootprintWithLevel3 = (step, data, flagType) => {
    const flag = flagType === 'error' ? featureFlagError : featureFlagFunnel;
    return _setFeatureFlag(getAdvancedFootprintWithLevel3(step, data), flag);
  };
  const _getFootprintWithLevel4 = (level3, level4, data) => {
    return _setFeatureFlag(getAdvancedFootprintWithLevel4(level3, level4, data), featureFlagFunnel);
  };

  return {
    _analyticsData,
    _getOnClickStart,
    _getPageVisitWithLevel3,
    _getStaticAppStarted,
    _getAppStepWithLevel3,
    _getAppCompleted,
    _getFootprintWithLevel3,
    _getFootprintWithLevel4
  };
};
