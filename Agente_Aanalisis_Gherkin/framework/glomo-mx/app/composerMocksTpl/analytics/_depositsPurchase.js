module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const { getAdvancedFootprintWithLevel3 } = require('./common/_utils');

  const FEATURE_FLAG = {
    GLOBAL: {
      key: 'glomo.analytics.depositsPurchase',
      defaultValue: true
    }
  };

  // CURRENCY: is for Mexico
  const CURRENCY = {
    'products.attributes.0.currency': 'mxn'
  };

  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'compra nuevo plazo',
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.transaction,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'trade deposits',
    [CONSTANTS.QUALIFIED_VISITS]: LITERALS.commons.qualifiedVisitsTrue,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'compra nuevo plazo',
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.investments,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: LITERALS.commons.terms
  };

  const FOOTPRINT_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'compra nuevo plazo',
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy
  };

  const PRODUCT_COMMON = {
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.investments,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: LITERALS.commons.terms
  };

  const DYNAMIC_COMMON = {
    [CONSTANTS.APPLICATION_PAYMENT_DATE]: {
      bind: 'applicationDays'
    },
    [CONSTANTS.APPLICATION_INTEREST_RATE]: {
      bind: 'applicationInterestRate'
    },
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'applicationAmount'
    },
    [CONSTANTS.APPLICATION_PROCESS]: {
      bind: 'applicationProcess'
    }
  };

  const _commonStep = (STEP_TEXT = '') => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: STEP_TEXT,
    [CONSTANTS.APPLICATION_STEP]: STEP_TEXT
  });

  const APP_ON_CLICK_START = {
    action: LITERALS.actions.appOnClickStart,
    type: LITERALS.types.link,
    digitalData: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.term,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail,
      [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
      [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
      [CONSTANTS.APPLICATION_STEP]: 'me interesa',
      ...PRODUCT_COMMON
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_PAGE_VISIT = {
    action: LITERALS.actions.appPageVisit,
    type: LITERALS.types.view,
    digitalData: {
      ...COMMON,
      ..._commonStep('1 simulacion'),
      [CONSTANTS.QUALIFIED_VISITS]: 'true',
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_STARTED = {
    action: LITERALS.actions.appStarted,
    type: LITERALS.types.link,
    digitalData: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 simulacion',
      'application.step': {bind: 'appStep'},
      [CONSTANTS.QUALIFIED_VISITS]: 'false',
      [CONSTANTS.APPLICATION_PROCESS]: {bind: 'applicationProcess'},
      ...PRODUCT_COMMON
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_STEP_2 = {
    action: LITERALS.actions.appStep2,
    type: LITERALS.types.view,
    digitalData: {
      ...COMMON,
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      ...CURRENCY,
      ..._commonStep('2 instruccion al vencimiento'),
      [CONSTANTS.QUALIFIED_VISITS]: 'false',
      [CONSTANTS.APPLICATION_TYPOLOGY]: {bind: 'applicationTypology'}
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_STEP_3 = {
    action: LITERALS.actions.appStep3,
    type: LITERALS.types.view,
    digitalData: {
      ..._commonStep('3 confirmar'),
      ...COMMON,
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      ...CURRENCY,
      [CONSTANTS.APPLICATION_TYPOLOGY]: {bind: 'applicationTypology'},
      [CONSTANTS.QUALIFIED_VISITS]: 'false'
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_COMPLETED = {
    action: LITERALS.actions.appCompleted,
    type: LITERALS.types.view,
    digitalData: {
      ..._commonStep('pagina exitosa'),
      ...COMMON,
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      ...CURRENCY,
      [CONSTANTS.APPLICATION_TYPOLOGY]: {bind: 'applicationTypology'},
      [CONSTANTS.QUALIFIED_VISITS]: 'false',
      [CONSTANTS.APPLICATION_STATE]: LITERALS.commons.contracted,
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {bind: 'applicationOperationNumber'},
      [CONSTANTS.PRODUCT_STATE]: LITERALS.commons.contracted
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const APP_INPROCESS = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    digitalData: {
      ...COMMON,
      ..._commonStep('pagina exitosa'),
      [CONSTANTS.APPLICATION_TYPOLOGY]: {bind: 'applicationTypology'},
      [CONSTANTS.APPLICATION_STATE]: 'en revision',
      [CONSTANTS.APPLICATION_OPERATION_NUMBER]: {bind: 'applicationOperationNumber'},
      [CONSTANTS.PRODUCT_STATE]: 'en revision',
      ...PRODUCT_COMMON,
      ...DYNAMIC_COMMON,
      ...CURRENCY
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const MARK_OUT_OF_TIME = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    digitalData: {
      ...FOOTPRINT_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'fuera de horario'
    },
    featureFlag: FEATURE_FLAG.GLOBAL
  };

  const modalInfoCoupon = getAdvancedFootprintWithLevel3('tienes un beneficio exclusivo', {...FOOTPRINT_COMMON});

  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_STEP_2,
    APP_STEP_3,
    APP_COMPLETED,
    APP_INPROCESS,
    MARK_OUT_OF_TIME,
    modalInfoCoupon
  };

};
