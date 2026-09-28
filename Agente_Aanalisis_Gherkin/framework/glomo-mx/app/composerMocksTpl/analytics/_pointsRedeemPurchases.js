module.exports = (CONFIG) => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  // eslint-disable-next-line no-unused-vars
  const getDynamicInfo = (level = '', pageIntent = '', step = '', qualified = 'false', fulfillment = 'online') => {
    return {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: level,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: pageIntent,
      [CONSTANTS.APPLICATION_STEP]: step,
      [CONSTANTS.APPLICATION_FULLFILMENT]: fulfillment
    };
  };
  const LEVEL3 = 'pagar con puntos';
  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: 'ES',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward,
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_INSTANCE_ID]: CONFIG.pageInstanceID
  };

  const APPLICATION_COMMON = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'points redeem',
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LEVEL3,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa'
  };

  const PRODUCT_CONST_COMMON = {
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: 'tarjetas credito'
  };

  const PRODUCT_NAME_DYNAMIC = { [CONSTANTS.PRODUCT_PRODUCT_NAME]: { bind: 'cardName' } };

  const OPERATION_NUMBER_DYNAMIC = { [CONSTANTS.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' } };

  const DYNAMIC_COMMON = {
    ...PRODUCT_NAME_DYNAMIC,
    [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' },
    [CONSTANTS.APPLICATION_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [CONSTANTS.APPLICATION_AMOUNT]: { bind: 'amount' },
    [CONSTANTS.PRODUCT_QUANTITY]: { bind: 'quantity' },
    [CONSTANTS.APPLICATION_CURRENCY]: 'MXN'
  };

  const DYNAMIC_DATA_FAQS_QUESTION = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL5]: {
      bind: 'faqQuestion'
    }
  };

  const COMMON = { ...PAGE_COMMON, ...APPLICATION_COMMON, ...PRODUCT_CONST_COMMON };
  const FIRST_COMMON = { ...COMMON, ...PRODUCT_NAME_DYNAMIC, ...getDynamicInfo('detalle', 'informacion', 'detalle del movimiento') };
  const SECOND_COMMON = { ...COMMON, ...DYNAMIC_COMMON };

  // Used in cardTransactionDetail
  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    digitalData: {
      ...FIRST_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'movimientos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL5]: 'consulta'
    }
  };

  // app_page_visit, app_started, app_step_2 & app_completed were used in pointsRedeemPurchases
  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    digitalData: {
      ...SECOND_COMMON,
      ...getDynamicInfo(LEVEL3, 'transaccion', '1 consideraciones', 'true'),
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 consideraciones'
    }
  };

  const APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    digitalData: {
      ...SECOND_COMMON,
      ...getDynamicInfo(LEVEL3, 'transaccion'),
      [CONSTANTS.APPLICATION_STEP]: { bind: 'appStarted' },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 consideraciones'
    }
  };

  const APP_STEP_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    digitalData: {
      ...SECOND_COMMON,
      ...getDynamicInfo(LEVEL3, 'transaccion', '2 confirmacion'),
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '2 confirmacion'
    }
  };

  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    digitalData: {
      ...SECOND_COMMON,
      ...getDynamicInfo(LEVEL3, 'transaccion', 'pagina exitosa'),
      ...OPERATION_NUMBER_DYNAMIC,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado'
    }
  };

  // Used in faqsPointsRedeemPage
  const FAQ_MARK_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: { ...PAGE_COMMON, ...getDynamicInfo(LEVEL3, 'transaccion', '', 'false', ''), [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'faq' }
  };

  // Used in faqs answer
  const FAQ_ACCESS_ANSWER = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...PAGE_COMMON,
      ...DYNAMIC_DATA_FAQS_QUESTION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LEVEL3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'faq',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // ERROR -  Error de servicio no disponible
  const ERROR_SIMULATE_SERVICE_NOT_AVAILABLE = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LEVEL3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error de servicio no disponible',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error de servicio no disponible',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // ERROR -  Error de backend
  const ERROR_BACKEND = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LEVEL3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error de backend',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error de backend',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // ERROR -  Error de tarjeta inactiva
  const ERROR_INACTIVE_CARD = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LEVEL3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error de tarjeta inactiva',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error de tarjeta inactiva',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // ERROR -   Error de pago minimo no cubierto
  const ERROR_MINIMUN_PAYMENT_NOT_COVERED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LEVEL3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error de pago minimo no cubierto',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error de pago minimo no cubierto',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // ERROR -   Error de no tener puntos suficientes
  const ERROR_NOT_ENOUGH_POINTS = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...PAGE_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LEVEL3,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error de no tener puntos suficientes',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error de no tener puntos suficientes',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_COMPLETED,
    FAQ_MARK_PAGE_VIEW,
    FAQ_ACCESS_ANSWER,
    ERROR_SIMULATE_SERVICE_NOT_AVAILABLE,
    ERROR_BACKEND,
    ERROR_INACTIVE_CARD,
    ERROR_MINIMUN_PAYMENT_NOT_COVERED,
    ERROR_NOT_ENOUGH_POINTS
  };
};