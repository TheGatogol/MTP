module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const literals = require('./common/_literals');
  const utils = require('./common/_utils');

  const FEATURE_FLAG = {
    key: 'glomo.analytics.fundsAddNewContract',
    defaultValue: true
  };
  const COMMON_PAGE = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: literals.commons.funds,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'fondos subsecuentes',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const COMMON = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'subsecuent purchase',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'fondos subsecuentes',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: literals.commons.online,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: literals.commons.investments,
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: 'fondos inversion'
  };
  const DYNAMIC_PRODUCT = {
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: { bind: 'productProductName' }
  };
  const DYNAMIC_AMMOUNT = {
    [CONSTANTS.APPLICATION_CURRENCY]: { bind: 'productProductCurrency' },
    [CONSTANTS.APPLICATION_AMOUNT]: { bind: 'productProductAmount' }
  };
  const COMMON_STEP = { ...COMMON, ...COMMON_PAGE };
  const COMMON_STEP_DYNAMIC = { ...COMMON_STEP, ...DYNAMIC_PRODUCT, ...DYNAMIC_AMMOUNT };
  const COMMON_COMPLETED = {
    ...COMMON_STEP_DYNAMIC,
    [CONSTANTS.PRODUCT_STATE]: 'contratado',
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'applicationOperationNumber' }
  };
  const COMMON_CLICK_START = {
    ...COMMON_STEP,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };

  const ANALYTICS = {
    APP_ONCLICK_START: utils.getOnClickStart('detalle de fondo', literals.commons.information, COMMON_CLICK_START),
    APP_PAGE_VISIT: utils.getPageVisitWithLevel3('1 detalle', COMMON_STEP),
    APP_STARTED: utils.getStaticAppStarted('continuar', '1 detalle', COMMON_STEP),

    // Steps
    APP_STEP2: utils.getAppStepWithLevel3(2, '2 cuenta asociada', COMMON_STEP),
    APP_STEP3: utils.getAppStepWithLevel3(3, '3 seleccion fondo', COMMON_STEP),
    APP_STEP4: utils.getAppStepWithLevel3(4, '4 importe', {...COMMON_STEP, ...DYNAMIC_PRODUCT}),
    APP_STEP5: utils.getAppStepWithLevel3(5, '5 terminos y condiciones', COMMON_STEP_DYNAMIC),
    APP_STEP6: utils.getAppStepWithLevel3(6, '6 confirmacion', COMMON_STEP_DYNAMIC),
    APP_STEP7: utils.getAppStepWithLevel3(7, '7 otp', COMMON_STEP_DYNAMIC),
    APP_COMPLETED: utils.getAppCompleted(literals.commons.successfulPage, 'contratado', COMMON_COMPLETED),

    // Footprints
    HUELLA_STEP5: utils.getAdvancedFootprintWithLevel3('5 calculo de titulos', COMMON_PAGE),
    HUELLA_STEP_ALL_FUNDS_CONTRACTED: utils.getAdvancedFootprintWithLevel3('contrato con todos los fondos activos', COMMON_PAGE),
    HUELLA_STEP_MIN_AMOUNT: utils.getError('saldo insuficiente', COMMON_PAGE)
  };

  Object.keys(ANALYTICS).forEach(analytic => utils.addFeatureFlag(ANALYTICS[analytic], FEATURE_FLAG));

  return ANALYTICS;
};
