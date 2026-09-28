const CONSTANTS = require('./common/_constants');
const utils = require('./common/_utils');
const LITERALS = require('./common/_literals');

const PRODUCT_CONFIG = utils.getProduct('tarjetas', 'tarjetas credito');

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diyPayments
};

const EMPTY_APPLICATION = {
  [CONSTANTS.APPLICATION_FULLFILMENT]: '',
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: '',
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: '',
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: ''
};

const COMMON_PAGES = {
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'transaccion',
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'credit card payments',
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'pagar tarjeta',
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa',
  [CONSTANTS.APPLICATION_FULLFILMENT]: 'online'
};

const DYNAMIC_DATA = {
  [CONSTANTS.APPLICATION_CURRENCY]: {
    bind: 'currency'
  },
  [CONSTANTS.APPLICATION_AMOUNT]: {
    bind: 'amount'
  },
  [CONSTANTS.PRODUCT_PRODUCT_NAME]: {
    bind: 'productName'
  },
  [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {
    bind: 'operationNumber'
  }
};

const APPLICATION_TYPOLOGY = {
  [CONSTANTS.APPLICATION_TYPOLOGY]: 'tarjetas propias'
};

const DYNAMIC_STEP_DATA = {
  [CONSTANTS.APPLICATION_STEP]: {
    bind: 'step'
  }
};

const LEVELS = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'pagar tarjeta'
};

const FULL_DATA = { ...COMMON, ...COMMON_PAGES };

module.exports = () => {

  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...DYNAMIC_DATA,
      ...LEVELS,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
      [CONSTANTS.APPLICATION_STEP]: 'detalle de tarjeta',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle'
    }
  };

  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...DYNAMIC_DATA,
      ...LEVELS,
      ...APPLICATION_TYPOLOGY,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 monto',
      [CONSTANTS.APPLICATION_STEP]: '1 monto'
    }
  };

  const APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...DYNAMIC_DATA,
      ...LEVELS,
      ...DYNAMIC_STEP_DATA,
      ...APPLICATION_TYPOLOGY,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 monto'
    }
  };

  const ACCOUNT_SELECTION = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...DYNAMIC_DATA,
      ...LEVELS,
      ...EMPTY_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'seleccion cuenta',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };

  const EDIT_ACCOUNT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...DYNAMIC_DATA,
      ...LEVELS,
      ...EMPTY_APPLICATION,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'cuenta deuda pesos',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };

  const APP_STEP_2_CONFIRM = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appStep2,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...DYNAMIC_DATA,
      ...LEVELS,
      ...APPLICATION_TYPOLOGY,
      [CONSTANTS.APPLICATION_STEP]: '2 confirmacion',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '2 confirmacion'
    }
  };


  const APP_COMPLETED = utils.getAppCompleted(
    'pagina exitosa',
    'finalizado',
    PRODUCT_CONFIG,
    FULL_DATA,
    LEVELS,
    DYNAMIC_DATA,
    APPLICATION_TYPOLOGY
  );


  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    ACCOUNT_SELECTION,
    EDIT_ACCOUNT,
    APP_STEP_2_CONFIRM,
    APP_COMPLETED
  };
};