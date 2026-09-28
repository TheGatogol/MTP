const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');

const ANALYTICS_FEATURE_FLAG = {
  key: 'glomo.analytics.billPayments',
  defaultValue: true
};

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'bill payments',
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.payService,
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.operative,
  [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online
};

const _DYNAMIC_COMMON = {
  [CONSTANTS.APPLICATION_TYPOLOGY]: {
    bind: 'typology'
  },
  [CONSTANTS.APPLICATION_PROCESS]: {
    bind: 'process'
  }
};

const APP_PAGE_VISIT = {
  type: LITERALS.types.view,
  action: LITERALS.actions.appPageVisit,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 servicio',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_STEP]: '1 servicio',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_STARTED = {
  type: LITERALS.types.link,
  action: LITERALS.actions.appStarted,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'step'
    },
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 servicio',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_STEP_2 = {
  type: LITERALS.types.view,
  action: LITERALS.actions.appStep2,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    ..._DYNAMIC_COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '2 importe',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_STEP]: '2 importe',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_STEP_3 = {
  type: LITERALS.types.view,
  action: LITERALS.actions.appStep3,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    ..._DYNAMIC_COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '3 concepto',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_STEP]: '3 concepto',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_STEP_4 = {
  type: LITERALS.types.view,
  action: LITERALS.actions.appStep4,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    ..._DYNAMIC_COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '4 confirmacion',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_STEP]: '4 confirmacion',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_STEP_5 = {
  type: LITERALS.types.view,
  action: LITERALS.actions.appStep5,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    ..._DYNAMIC_COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '5 otp',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_STEP]: '5 otp',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_COMPLETED = {
  type: LITERALS.types.view,
  action: LITERALS.actions.appCompleted,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    ..._DYNAMIC_COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.account,
    [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.ended,
    [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.ended,
    [CONSTANTS.APPLICATION_CURRENCY]: LITERALS.currencies.MXN,
    [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {bind: 'operationNumber'},
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    }
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};


const APP_SEARCH_WITHOUT_RESULTS = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'buscador sin resultados',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_EDIT_SERVICE = {
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '4 confirmacion',
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'editar servicio',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_DELETE_SERVICE = {
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 servicio',
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'eliminar servicio',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_SELECTION_ACCOUNT = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.accountSelection,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_PAYMENT_REFERENCE_CAMERA = {
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 servicio',
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'referencia de camara'
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_PAYMENT_REFERENCE_HELP = {
  type: LITERALS.types.link,
  action: LITERALS.actions.internalLink,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 servicio',
    [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'referencia de pago'
  },
  featureFlag: ANALYTICS_FEATURE_FLAG
};

const APP_PAYMENT_ERROR = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error pago no realizado',
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error pago no realizado'
  },
  featureFlag: {
    key: 'glomo.analytics.billPayments.errors',
    defaultValue: true
  }
};

const APP_SEARCH_ERROR = {
  type: LITERALS.types.view,
  action: LITERALS.actions.mark,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.payService,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'error en busqueda',
    [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error en busqueda'
  },
  featureFlag: {
    key: 'glomo.analytics.billPaymentsSearch.errors',
    defaultValue: true
  }
};

const APP_COMMON_ERROR = {
  type: LITERALS.types.link,
  action: LITERALS.actions.siteError,
  [CONSTANTS.DATALAYER_NAME]: {
    ...COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.APPLICATION_ERROR_TYPE]: {
      bind: 'errorType'
    }
  },
  featureFlag: {
    key: 'glomo.analytics.billPaymentsCommon.errors',
    defaultValue: true
  }
};
module.exports = () => ({
  APP_PAGE_VISIT,
  APP_STARTED,
  APP_STEP_2,
  APP_STEP_3,
  APP_STEP_4,
  APP_STEP_5,
  APP_COMPLETED,
  APP_SEARCH_WITHOUT_RESULTS,
  APP_EDIT_SERVICE,
  APP_DELETE_SERVICE,
  APP_SELECTION_ACCOUNT,
  APP_PAYMENT_REFERENCE_CAMERA,
  APP_PAYMENT_REFERENCE_HELP,
  APP_PAYMENT_ERROR,
  APP_SEARCH_ERROR,
  APP_COMMON_ERROR
});