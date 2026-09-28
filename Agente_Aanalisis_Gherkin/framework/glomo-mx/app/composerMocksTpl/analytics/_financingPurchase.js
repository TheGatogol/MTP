// eslint-disable-next-line no-unused-vars
module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };

  const _COMMON_FUNNEL = {
    ..._COMMON,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'purchase financing',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'financiamiento de compras',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa',
    [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: 'tarjetas credito'
  };

  const _COMMON_LEVEL = {
    ..._COMMON_FUNNEL,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'financiamiento de compras'
  };

  const EMPTY_APPLICATION = {
    [CONSTANTS.APPLICATION_FULLFILMENT]: '',
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: '',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: '',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: ''
  };

  const _DYNAMIC_DATA = {
    [CONSTANTS.APPLICATION_AMOUNT]: {
      bind: 'amount'
    },
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [CONSTANTS.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    },
    [CONSTANTS.APPLICATION_INTEREST_RATE]: {
      bind: 'interestRate'
    },
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'points'
    }
  };

  const OPERATION_NUMBER = {
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };

  const DYNAMIC_STEP_DATA = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'step'
    }
  };

  const DYNAMIC_LEVEL4 = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: {
      bind: 'level4'
    }
  };

  const DYNAMIC_LEVEL5 = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL5]: {
      bind: 'level5'
    }
  };

  // APP ON CLICK START
  const APP_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'movimientos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'compra',
      [CONSTANTS.APPLICATION_STEP]: 'me interesa',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion'
    }
  };

  // APP PAGE VISIT
  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 detalle',
      [CONSTANTS.APPLICATION_STEP]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // APP PAGE STARTED
  const APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ...DYNAMIC_STEP_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 detalle',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // APP COMPLETED
  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ..._DYNAMIC_DATA,
      ...OPERATION_NUMBER,
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: 'firma:token',
      [CONSTANTS.PRODUCT_STATE]: 'finalizado'
    }
  };

  const PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ...DYNAMIC_LEVEL4,
      ...DYNAMIC_LEVEL5,
      ...EMPTY_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };

  const INSTALLMENT_ERROR_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ...EMPTY_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'sin saldo revolvente',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'sin saldo revolvente',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };

  const OFFER_ERROR_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ..._COMMON_LEVEL,
      ...EMPTY_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'promocion no aplica',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'promocion no aplica',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };

  const ANALYTICS_FEATURE_FLAG_FINANCING_PURCHASE = {
    'key': 'glomo.analytics.financingPurchase',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_FINANCING_PURCHASE_INSTALLMENT_ERROR = {
    'key': 'glomo.analytics.financingPurchase.errors.installmentError',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_FINANCING_PURCHASE_OFFER_ERROR = {
    'key': 'glomo.analytics.financingPurchase.errors.offerError',
    'defaultValue': true
  };

  [
    APP_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    PAGE_VIEW
  ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_FINANCING_PURCHASE));

  utils.addFeatureFlag(INSTALLMENT_ERROR_PAGE_VIEW, ANALYTICS_FEATURE_FLAG_FINANCING_PURCHASE_INSTALLMENT_ERROR);
  utils.addFeatureFlag(OFFER_ERROR_PAGE_VIEW, ANALYTICS_FEATURE_FLAG_FINANCING_PURCHASE_OFFER_ERROR);

  return {
    APP_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    PAGE_VIEW,
    INSTALLMENT_ERROR_PAGE_VIEW,
    OFFER_ERROR_PAGE_VIEW,
    ANALYTICS_FEATURE_FLAG_FINANCING_PURCHASE
  };
};
