const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward
};

const COMMON_PAGES = {
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'traspasar puntos',
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'transfer points',
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa'
};

const COMMON_CARDS_ORIGIN = {
  [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: 'tarjetas',
  [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: 'tarjetas credito'
};

const COMMON_CARDS_DESTINATION = {
  [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY_DESTINATION]: 'tarjetas',
  [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE_DESTINATION]: 'tarjetas credito'
};

const EMPTY_CARDS_DESTINATION = {
  [CONSTANTS.PRODUCT_PRODUCT_1_AMOUNT]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_CURRENCY]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_GROUP]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE]: {
    [CONSTANTS.PRODUCT_PRODUCT_1_RATE_RATE]: '',
    [CONSTANTS.PRODUCT_PRODUCT_1_RATE_TAE]: '',
    [CONSTANTS.PRODUCT_PRODUCT_1_RATE_TIN]: ''
  },
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_HOLDERRS]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_PAYMENTS]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_PAYMENTSAMOUNT]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_PAYMENTSDATE]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_PAYMENTSTYPE]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_PRODUCTCODE]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_QUANTITY]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_SERVICECHARGE]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_STATE]: '',
  [CONSTANTS.PRODUCT_PRODUCT_1_RATE_TERM]: ''
};

const FULL_DATA = { ...COMMONS, ...COMMON_PAGES };

module.exports = () => {

  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.reward.pointsTransfer',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_ERRORS = {
    'key': 'glomo.analytics.reward.pointsTransfer.errors',
    'defaultValue': true
  };

  const DYNAMIC_DATA_ORIGIN = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productNameOrigin'
    }
  };

  const DYNAMIC_DATA_DESTINATION = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME_DESTINATION]: {
      bind: 'productNameDestination'
    }
  };

  const DYNAMIC_DATA_TYPOLOGY = {
    [CONSTANTS.APPLICATION_TYPOLOGY]: {
      bind: 'typology'
    }
  };

  const DYNAMIC_DATA_OPERATION_NUMBER = {
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
      bind: 'operationNumber'
    }
  };

  const DYNAMIC_DATA_AMOUNT = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  };

  // Transferencia de Puntos PAGE VISIT - Paso 1 Destino
  const TRANSFER_POINTS_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARDS_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 destino',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: '1 destino'
    }
  };

  // Transferencia de Puntos APP STARTED - Ver todas
  const TRANSFER_POINTS_APP_STARTED_SEE_ALL = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARDS_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 destino',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: 'ver todas'
    }
  };

  // Transferencia de Puntos APP STARTED - Elegir tarjeta
  const TRANSFER_POINTS_APP_STARTED_CHOOSE_CARD = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARDS_ORIGIN,
      ...DYNAMIC_DATA_ORIGIN,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 destino',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: 'elegir tarjeta'
    }
  };

  // Transferencia de Puntos APP STEP 2
  const TRANSFER_POINTS_APP_STEP_2 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARDS_ORIGIN,
      ...COMMON_CARDS_DESTINATION,
      ...DYNAMIC_DATA_ORIGIN,
      ...DYNAMIC_DATA_DESTINATION,
      ...EMPTY_CARDS_DESTINATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '2 cantidad',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: '2 cantidad'
    }
  };

  // Transferencia de Puntos APP STEP 3
  const TRANSFER_POINTS_APP_STEP_3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep3,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARDS_ORIGIN,
      ...COMMON_CARDS_DESTINATION,
      ...DYNAMIC_DATA_ORIGIN,
      ...DYNAMIC_DATA_DESTINATION,
      ...EMPTY_CARDS_DESTINATION,
      ...DYNAMIC_DATA_TYPOLOGY,
      ...DYNAMIC_DATA_AMOUNT,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '3 confirmacion',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STEP]: '3 confirmacion'
    }
  };

  // Transferencia de Puntos APP COMPLETED
  const TRANSFER_POINTS_APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...COMMON_CARDS_ORIGIN,
      ...COMMON_CARDS_DESTINATION,
      ...DYNAMIC_DATA_ORIGIN,
      ...DYNAMIC_DATA_DESTINATION,
      ...EMPTY_CARDS_DESTINATION,
      ...DYNAMIC_DATA_TYPOLOGY,
      ...DYNAMIC_DATA_AMOUNT,
      ...DYNAMIC_DATA_OPERATION_NUMBER,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
      [CONSTANTS.APPLICATION_STATE]: 'finalizado'
    }
  };

  //Points transfer not active cards
  const TRANSFER_POINTS_NOT_ACTIVE_CARDS = {
    type: LITERALS.types.link,
    action: LITERALS.actions.siteError,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 destino',
      [CONSTANTS.APPLICATION_ERROR_TYPE]: 'una o mas tarjetas no permiten la transferencia de puntos',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: 'Rewards'
    }
  };

  // Transferencia de Puntos Pagina de listado de tarjetas
  const TRANSFER_POINTS_HUELLA_CARD_LIST = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
      [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'listado de tarjetas'
    }
  };

  // Transferencia de Puntos ERROR
  const TRANSFER_POINTS_ERROR_STATE = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
      [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward,
      [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.empty,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'traspasar puntos',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'operacion no realizada',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'operacion no realizada',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
    }
  };

  // Add feature toggle to events
  [
    TRANSFER_POINTS_PAGE_VISIT,
    TRANSFER_POINTS_APP_STARTED_SEE_ALL,
    TRANSFER_POINTS_APP_STARTED_CHOOSE_CARD,
    TRANSFER_POINTS_APP_STEP_2,
    TRANSFER_POINTS_APP_STEP_3,
    TRANSFER_POINTS_APP_COMPLETED,
    TRANSFER_POINTS_HUELLA_CARD_LIST
  ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

  // Add feature toggle to error events
  [TRANSFER_POINTS_ERROR_STATE, TRANSFER_POINTS_NOT_ACTIVE_CARDS].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_ERRORS));

  return {
    TRANSFER_POINTS_PAGE_VISIT,
    TRANSFER_POINTS_APP_STARTED_SEE_ALL,
    TRANSFER_POINTS_APP_STARTED_CHOOSE_CARD,
    TRANSFER_POINTS_APP_STEP_2,
    TRANSFER_POINTS_APP_STEP_3,
    TRANSFER_POINTS_APP_COMPLETED,
    TRANSFER_POINTS_HUELLA_CARD_LIST,
    TRANSFER_POINTS_ERROR_STATE,
    TRANSFER_POINTS_NOT_ACTIVE_CARDS
  };
};