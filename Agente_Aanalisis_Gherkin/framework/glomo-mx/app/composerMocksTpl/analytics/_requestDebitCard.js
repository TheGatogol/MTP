module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const {getPageVisitWithLevel3, getStaticAppStarted, getAppStepWithLevel3, getAppCompleted, getInternalLinkWithPageActivityLevel3, getAnalyticFeatureFlagError, getAnalyticFeatureFlag, getAdvancedFootprintError, getError} = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const NAMES = {
    APP_PAGE_VISIT: '1 solicitud',
    APP_STARTED: '1 solicitud',
    APP_STEP_2: '2 direccion de entrega',
    APP_STEP_3: '3 confirmacion',
    APP_STEP_4: '4 otp',
    APP_COMPLETED: 'pagina exitosa',
    FOOTPRINT: {
      SHOW_ADDRESS: '2 direccion de entrega',
      FAILED_OPERATION: 'error operacion no realizada'
    }
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.physicalDebitCard,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const COMMON_DATA = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.creditCardHolder,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.physicalDebitCard,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: LITERALS.commons.debitCard,
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: LITERALS.commons.payrollDebitCard
  };

  const getStepAnalitycs = (params) => {
    const typeStep = {
      pageVisit: getPageVisitWithLevel3(NAMES.APP_PAGE_VISIT, {...COMMON, ...COMMON_DATA, [CONSTANTS.QUALIFIED_VISITS]: 'true'}),
      appStep1: getStaticAppStarted('lo quiero', NAMES.APP_STARTED, {...COMMON, ...COMMON_DATA}),
      appStep2: getAppStepWithLevel3('2', NAMES.APP_STEP_2, {...COMMON, ...COMMON_DATA}),
      appStep3: getAppStepWithLevel3('3', NAMES.APP_STEP_3, {...COMMON, ...COMMON_DATA}),
      appStep4: getAppStepWithLevel3('4', NAMES.APP_STEP_4, {...COMMON, ...COMMON_DATA, [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token' }),
      appCompleted: getAppCompleted(NAMES.APP_COMPLETED, 'contratado', {...COMMON, ...COMMON_DATA,
        [CONSTANTS.PRODUCT_STATE]: 'finalizado',
        [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token' }),
      appShowAddressFootPrint: getInternalLinkWithPageActivityLevel3('mostrar datos', NAMES.FOOTPRINT.SHOW_ADDRESS, COMMON)
    };

    return getAnalyticFeatureFlag('debitCardRequest', typeStep[params]);
  };

  const getErrorAnalitycs = (params) => {
    const typeError = {
      dynamicFootPrint: getAnalyticFeatureFlagError('debitCardRequest.serviceError', getAdvancedFootprintError('error otp', {
        [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error otp',
        ...COMMON
      })),
      faildOperationFootprint: getAnalyticFeatureFlagError('debitCardRequest.failedOperation', getError(NAMES.FOOTPRINT.FAILED_OPERATION, COMMON))
    };
    return typeError[params];
  };

  return {
    getStepAnalitycs,
    getErrorAnalitycs
  };

};
