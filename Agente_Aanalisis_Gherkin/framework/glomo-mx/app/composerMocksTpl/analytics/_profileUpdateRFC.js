module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    addFeatureFlag,
    getOnClickStart,
    getAppOnClickStartLevel2,
    getPageVisitRaw,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedRaw
  } = require('./common/_utils');
  const updateRfcAnalyticFlag = {
    'key': 'glomo.analytics.updateRfc',
    'defaultValue': true
  };

  const updateRfc = {
    confirmAdjustment: '5 confirmar ajuste',
    confirmCfdi: '3 confirmacion cfdi',
    periodSelect: '2 seleccion de periodo',
    productSeleccion: '1 seleccion de producto',
    requestOtherAdjustment: 'solicitar otro ajuste',
    selectAProduct: 'selecciona un producto'
  };

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.digitalTaxReceipt,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.taxDocumentCfdi,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.autogestion,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const appOnClickStartInit = getOnClickStart(literals.commons.requestCfdiAdjustment, '', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.profile
  });

  const appOnClickStartOther = getAppOnClickStartLevel2(literals.commons.requestCfdiAdjustment, literals.commons.successfulPage, {
    ...common,
    [constants.APPLICATION_STEP]: updateRfc.requestOtherAdjustment
  });

  const appPageVisitCyr = getPageVisitRaw({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.requestCfdiAdjustment,
    [constants.PAGE_PAGEINFO_LEVEL2]: updateRfc.productSeleccion,
    [constants.APPLICATION_STEP]: updateRfc.productSeleccion
  });

  const appPageStartedCyr = getAppStartedWithLevel2(updateRfc.productSeleccion, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.requestCfdiAdjustment,
    [constants.APPLICATION_STEP]: updateRfc.selectAProduct
  });

  const appStepSelectPeriodCyr = getAppStep('2', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.requestCfdiAdjustment,
    [constants.PAGE_PAGEINFO_LEVEL2]: updateRfc.periodSelect,
    [constants.APPLICATION_STEP]: updateRfc.periodSelect
  });

  const appStepConfirmCfdiCyr = getAppStep('3', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.requestCfdiAdjustment,
    [constants.PAGE_PAGEINFO_LEVEL2]: updateRfc.confirmCfdi,
    [constants.APPLICATION_STEP]: updateRfc.confirmCfdi
  });

  const appStepTermsAndConditionsCyr = getAppStep('4', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.requestCfdiAdjustment,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.fourthTermsAndConditions,
    [constants.APPLICATION_STEP]: literals.commons.fourthTermsAndConditions
  });

  const appStepConfirmAdjustmentCyr = getAppStep('5', {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.requestCfdiAdjustment,
    [constants.PAGE_PAGEINFO_LEVEL2]: updateRfc.confirmAdjustment,
    [constants.APPLICATION_STEP]: updateRfc.confirmAdjustment
  });

  const appCompletedCyr = getAppCompletedRaw({
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.requestCfdiAdjustment,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.finalized
  });

  [appOnClickStartInit,
    appOnClickStartOther,
    appPageVisitCyr,
    appPageStartedCyr,
    appStepSelectPeriodCyr,
    appStepConfirmCfdiCyr,
    appStepTermsAndConditionsCyr,
    appStepConfirmAdjustmentCyr,
    appCompletedCyr
  ].forEach(item => addFeatureFlag(item, updateRfcAnalyticFlag));

  return {
    appOnClickStartInit,
    appOnClickStartOther,
    appPageVisitCyr,
    appPageStartedCyr,
    appStepSelectPeriodCyr,
    appStepConfirmCfdiCyr,
    appStepTermsAndConditionsCyr,
    appStepConfirmAdjustmentCyr,
    appCompletedCyr
  };
};
