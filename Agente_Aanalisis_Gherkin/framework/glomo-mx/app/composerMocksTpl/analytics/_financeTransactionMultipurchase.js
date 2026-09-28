// eslint-disable-next-line no-unused-vars
module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const ANALYTICS_FEATURE_FLAG_FINANCE_TRANSACTION_MULTIPURCHASE = {
    'key': 'glomo.analytics.financeTransactionMultipurchase',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_FINANCE_TRANSACTION_MULTIPURCHASE_UNAVAILABLE_INFORMATION = {
    'key': 'glomo.analytics.financeTransactionMultipurchase.unavailableInfoError',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_FINANCE_TRANSACTION_MULTIPURCHASE_NOT_PERFORMED_OPERATION = {
    'key': 'glomo.analytics.financeTransactionMultipurchase.notPerformedOperationError',
    'defaultValue': true
  };

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const _COMMON_FUNNEL = {
    ..._COMMON,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'finance transaction multi purchase',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'diferir compras',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa',
    [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: 'tarjetas credito'
  };

  const _COMMON_LEVEL = {
    ..._COMMON_FUNNEL,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito'
  };

  const _COMMON_LEVEL_3 = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'diferir compras'
  };

  const _COMMON_PAGE_VIEW = {
    ..._COMMON,
    ..._COMMON_LEVEL_3,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
  };

  const _DYNAMIC_PRODUCT_NAME = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };

  const _DYNAMIC_PRODUCT_DATA = {
    ..._DYNAMIC_PRODUCT_NAME,
    [CONSTANTS.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.APPLICATION_CURRENCY]: {
      bind: 'currency'
    },
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [CONSTANTS.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    },
    [CONSTANTS.PRODUCT_PRODUCT_RATE_PAYMENTSTYPE]: {
      bind: 'paymentsType'
    },
    [CONSTANTS.APPLICATION_SERVICE_CHARGE]: {
      bind: 'serviceCharge'
    },
    [CONSTANTS.APPLICATION_INTEREST_RATE]: {
      bind: 'interestRate'
    },
    [CONSTANTS.APPLICATION_PAYMENT_DATE]: {
      bind: 'paymentDate'
    }
  };

  const _DYNAMIC_CUSTOM_FIELDS = {
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    }
  };

  const _DYNAMIC_OPERATION_NUMBER = {
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };

  const _DYNAMIC_PAGE_VIEW_LEVEL4 = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: {
      bind: 'level4'
    }
  };

  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_PRODUCT_NAME,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle',
      [CONSTANTS.APPLICATION_STEP]: 'detalle de tarjeta',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
    }
  };

  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_PRODUCT_NAME,
      ..._COMMON_LEVEL_3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 seleccion de compras',
      [CONSTANTS.APPLICATION_STEP]: '1 seleccion de compras',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  const APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_PRODUCT_NAME,
      ..._COMMON_LEVEL_3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 seleccion de compras',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
      [CONSTANTS.APPLICATION_STEP]: {
        bind: 'appStartedStep'
      }
    }
  };

  const APP_STEP_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_PRODUCT_NAME,
      ..._DYNAMIC_CUSTOM_FIELDS,
      ..._COMMON_LEVEL_3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '2 meses a diferir',
      [CONSTANTS.APPLICATION_STEP]: '2 meses a diferir',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  const APP_STEP_3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep3,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_PRODUCT_DATA,
      ..._DYNAMIC_CUSTOM_FIELDS,
      ..._COMMON_LEVEL_3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '3 terminos y condiciones',
      [CONSTANTS.APPLICATION_STEP]: '3 terminos y condiciones',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  const APP_STEP_4 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep4,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_PRODUCT_DATA,
      ..._DYNAMIC_CUSTOM_FIELDS,
      ..._COMMON_LEVEL_3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '4 confirmacion',
      [CONSTANTS.APPLICATION_STEP]: '4 confirmacion',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  const PAGE_VIEW_OTP = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_PAGE_VIEW,
      ..._DYNAMIC_CUSTOM_FIELDS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'otp',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_PRODUCT_DATA,
      ..._DYNAMIC_CUSTOM_FIELDS,
      ..._DYNAMIC_OPERATION_NUMBER,
      ..._COMMON_LEVEL_3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.PRODUCT_STATE]: 'finalizado'
    }
  };

  const PAGE_VIEW_SLIDER = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_PAGE_VIEW,
      ..._DYNAMIC_PAGE_VIEW_LEVEL4
    }
  };

  const PAGE_VIEW_MODAL = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_PAGE_VIEW,
      ..._DYNAMIC_CUSTOM_FIELDS,
      ..._DYNAMIC_PAGE_VIEW_LEVEL4
    }
  };

  const ERROR_UNAVAILABLE_INFORMATION = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_PAGE_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error de servicio',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error de servicio'
    }
  };
  const ERROR_NOT_PERFORMED_OPERATION = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_PAGE_VIEW,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'operacion no realizada',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'operacion no realizada'
    }
  };

  [
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3,
    APP_STEP_4,
    PAGE_VIEW_OTP,
    APP_COMPLETED,
    PAGE_VIEW_SLIDER,
    PAGE_VIEW_MODAL
  ].forEach(key => utils.addFeatureFlag(key, ANALYTICS_FEATURE_FLAG_FINANCE_TRANSACTION_MULTIPURCHASE));
  utils.addFeatureFlag(ERROR_UNAVAILABLE_INFORMATION, ANALYTICS_FEATURE_FLAG_FINANCE_TRANSACTION_MULTIPURCHASE_UNAVAILABLE_INFORMATION);
  utils.addFeatureFlag(ERROR_NOT_PERFORMED_OPERATION, ANALYTICS_FEATURE_FLAG_FINANCE_TRANSACTION_MULTIPURCHASE_NOT_PERFORMED_OPERATION);

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3,
    APP_STEP_4,
    PAGE_VIEW_OTP,
    APP_COMPLETED,
    PAGE_VIEW_SLIDER,
    PAGE_VIEW_MODAL,
    ERROR_UNAVAILABLE_INFORMATION,
    ERROR_NOT_PERFORMED_OPERATION
  };
};
