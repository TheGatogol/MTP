module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');

  const FEATURE_FLAG = {
    GLOBAL: {
      key: 'glomo.analytics.depositsConfiguration',
      defaultValue: true
    }
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'deposits configuration',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'cambio instruccion plazo',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.investments,
    [CONSTANTS.PRODUCT_PRODUCT_NAME]: LITERALS.commons.terms,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
  };

  const _COMMON_TEXT_LEVEL = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'cambio instruccion plazo'
  };

  const _COMMON_DINAMIC_DATA = {
    [CONSTANTS.APPLICATION_PAYMENT_DATE]: {
      bind: 'paymentDate'
    },
    [CONSTANTS.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.APPLICATION_CURRENCY]: {
      bind: 'currency'
    }
  };

  const _COMMON_DINAMIC_STEP_DATA = {
    ..._COMMON_DINAMIC_DATA,
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const _COMMON_ON_CLICK_START_DATA = {
    ..._COMMON,
    ..._COMMON_DINAMIC_DATA,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.deposits,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'movimientos',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const _commonStep = (STEP_TEXT = '') => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: STEP_TEXT,
    [CONSTANTS.APPLICATION_STEP]: STEP_TEXT
  });

  const APP_ON_CLICK_START_CHANGE_INSTRUCTION = {
    action: LITERALS.actions.appOnClickStart,
    type: LITERALS.types.link,
    digitalData: {
      ..._COMMON_ON_CLICK_START_DATA,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'DIY E2E Sales',
      [CONSTANTS.APPLICATION_STEP]: 'me interesa'
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_PAGE_VISIT = {
    action: LITERALS.actions.appPageVisit,
    type: LITERALS.types.view,
    digitalData: {
      ..._COMMON,
      ..._COMMON_TEXT_LEVEL,
      ..._COMMON_DINAMIC_DATA,
      ..._commonStep('1 nueva instruccion')
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_STARTED = {
    action: LITERALS.actions.appStarted,
    type: LITERALS.types.link,
    digitalData: {
      ..._COMMON,
      ..._COMMON_TEXT_LEVEL,
      ..._COMMON_DINAMIC_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 nueva instruccion',
      'application.step': {bind: 'detail'}
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_STEP_2 = {
    action: LITERALS.actions.appStep2,
    type: LITERALS.types.view,
    digitalData: {
      ..._commonStep('2 confirmacion'),
      ..._COMMON,
      ..._COMMON_TEXT_LEVEL,
      ..._COMMON_DINAMIC_STEP_DATA
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_STEP_3 = {
    action: LITERALS.actions.appStep3,
    type: LITERALS.types.view,
    digitalData: {
      ..._commonStep('3 otp'),
      ..._COMMON,
      ..._COMMON_TEXT_LEVEL,
      ..._COMMON_DINAMIC_STEP_DATA
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_COMPLETED = {
    action: LITERALS.actions.appCompleted,
    type: LITERALS.types.view,
    digitalData: {
      ..._commonStep('pagina exitosa'),
      ..._COMMON,
      ..._COMMON_TEXT_LEVEL,
      ..._COMMON_DINAMIC_STEP_DATA,
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      },
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.PRODUCT_STATE]: 'finalizado'
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_INPROCESS = {
    action: LITERALS.actions.appCompleted,
    type: LITERALS.types.view,
    digitalData: {
      ..._commonStep('pagina exitosa'),
      ..._COMMON,
      ..._COMMON_TEXT_LEVEL,
      ..._COMMON_DINAMIC_STEP_DATA,
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
        bind: 'operationNumber'
      },
      [CONSTANTS.APPLICATION_STATE]: 'en revision',
      [CONSTANTS.PRODUCT_STATE]: 'en revision'
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  return {
    APP_ON_CLICK_START_CHANGE_INSTRUCTION,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3,
    APP_COMPLETED,
    APP_INPROCESS
  };
};