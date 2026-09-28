const CONSTANTS = require('./common/_constants');
const utils = require('./common/_utils');
const LITERALS = require('./common/_literals');


const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diyPayments,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion'
};

const APPLICATION_CONFIG = {
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'card balance limits update',
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'limite tarjeta adicional',
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa',
  [CONSTANTS.APPLICATION_FULLFILMENT]: 'online'
};

const PRODUCT_CONFIG = {
  [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
  [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: {
    bind: 'productSubtype'
  },
  [CONSTANTS.PRODUCT_PRODUCT_NAME]: {
    bind: 'productName'
  }
};

const DYNAMIC_AMOUNT_DATA = {
  [CONSTANTS.APPLICATION_CURRENCY]: {
    bind: 'currency'
  },
  [CONSTANTS.APPLICATION_AMOUNT]: {
    bind: 'amount'
  }
};

const LEVELS = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas credito',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'tarjeta adicional'
};


const EMPTY_APPLICATION = {
  [CONSTANTS.APPLICATION_FULLFILMENT]: '',
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: '',
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: '',
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: ''
};

const DYNAMIC_STEP_DATA = {
  [CONSTANTS.APPLICATION_STEP]: {
    bind: 'step'
  }
};


module.exports = () => {
  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      ...APPLICATION_CONFIG,
      ...PRODUCT_CONFIG,
      ...LEVELS,
      [CONSTANTS.APPLICATION_STEP]: 'cambiar limite',
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle'
    }
  };

  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      ...APPLICATION_CONFIG,
      ...PRODUCT_CONFIG,
      ...LEVELS,
      [CONSTANTS.APPLICATION_STEP]: '1 modificar limites',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 modificar limites'
    }
  };

  const APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      ...APPLICATION_CONFIG,
      ...PRODUCT_CONFIG,
      ...LEVELS,
      ...DYNAMIC_STEP_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 modificar limites'
    }
  };

  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      ...APPLICATION_CONFIG,
      ...PRODUCT_CONFIG,
      ...LEVELS,
      ...DYNAMIC_STEP_DATA,
      ...DYNAMIC_AMOUNT_DATA,
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa'
    }
  };

  const UNAVAILABLE_ERROR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      ...EMPTY_APPLICATION,
      ...LEVELS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error informacion no disponible',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error informacion no disponible',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };

  const NOT_PERFORMED_ERROR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      ...EMPTY_APPLICATION,
      ...LEVELS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error informacion no disponible',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error informacion no disponible',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };


  const ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE = {
    'key': 'glomo.analytics.additionalCardBalanceLimitsUpdate',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE_UNAVAILABLE_INFO_ERROR = {
    'key': 'glomo.analytics.additionalCardBalanceLimitsUpdate.unavailableInfoError',
    'defaultValue': true
  };

  const ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE_NOT_PERFORMED_OPERATION_ERROR = {
    'key': 'glomo.analytics.additionalCardBalanceLimitsUpdate.notPerformedOperationError',
    'defaultValue': true
  };

  [
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED
  ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE));

  utils.addFeatureFlag(UNAVAILABLE_ERROR, ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE_UNAVAILABLE_INFO_ERROR);
  utils.addFeatureFlag(NOT_PERFORMED_ERROR, ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE_NOT_PERFORMED_OPERATION_ERROR);

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    UNAVAILABLE_ERROR,
    NOT_PERFORMED_ERROR,
    ANALYTICS_FEATURE_FLAG_ADDITIONAL_CARD_BALANCE_LIMITS_UPDATE
  };
};