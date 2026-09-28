/* eslint-disable no-use-before-define */
const CONSTANTS = require('./common/_constants');
const utils = require('./common/_utils');
const LITERALS = require('./common/_literals');
const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};
const DYNAMIC_LEVEL_2 = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {
    bind: 'level2'
  }
};
const DYNAMIC_APPLICATION = {
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
    bind: 'globalApplication'
  },
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
    bind: 'applicationName'
  }
};
const DYNAMIC_TYPOLOGY = {
  [CONSTANTS.APPLICATION_TYPOLOGY]: {
    bind: 'typology'
  }
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
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
  ...DYNAMIC_LEVEL_2
};
const EMPTY_APPLICATION = {
  [CONSTANTS.APPLICATION_FULLFILMENT]: '',
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: '',
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: '',
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: ''
};
const COMMON_PAGES = {
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'operativa',
  [CONSTANTS.APPLICATION_FULLFILMENT]: 'online',
  ...DYNAMIC_APPLICATION
};
const DYNAMIC_STEP_DATA = {
  [CONSTANTS.APPLICATION_STEP]: {
    bind: 'step'
  }
};
const setLevel3Data = (data) => ({
  ...data,
  ...FULL_DATA,
  ...EMPTY_APPLICATION,
  ...LEVELS
});
const FULL_DATA = { ...COMMON, ...COMMON_PAGES };
module.exports = () => {
  const APP_ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...DYNAMIC_STEP_DATA,
      ...DYNAMIC_AMOUNT_DATA,
      ...DYNAMIC_TYPOLOGY,
      ...LEVELS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'control de gastos',
      ...DYNAMIC_APPLICATION
    }
  };
  const APP_PAGE_VISIT = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appPageVisit,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...LEVELS,
      ...DYNAMIC_APPLICATION,
      ...DYNAMIC_AMOUNT_DATA,
      ...DYNAMIC_TYPOLOGY,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'modificar limites tarjeta',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 ingresa nuevo limite',
      [CONSTANTS.APPLICATION_STEP]: '1 ingresa nuevo limite'
    }
  };
  const APP_STARTED = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appStarted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...LEVELS,
      ...DYNAMIC_STEP_DATA,
      ...DYNAMIC_APPLICATION,
      ...DYNAMIC_AMOUNT_DATA,
      ...DYNAMIC_TYPOLOGY,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'modificar limites tarjeta',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: '1 ingresa nuevo limite'
    }
  };
  const PAGE_ERROR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...EMPTY_APPLICATION,
      ...LEVELS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'modificar limites tarjeta',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'error exceso limite',
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: 'error exceso limite',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };
  const LIST_LIMITS_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...EMPTY_APPLICATION,
      ...LEVELS,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'control de gastos',
      [CONSTANTS.PRODUCTS_ATTRIBUTES]: []
    }
  };
  const APP_COMPLETED = {
    type: LITERALS.types.view,
    action: LITERALS.actions.appCompleted,
    [CONSTANTS.DATALAYER_NAME]: {
      ...PRODUCT_CONFIG,
      ...FULL_DATA,
      ...DYNAMIC_AMOUNT_DATA,
      ...LEVELS,
      ...DYNAMIC_APPLICATION,
      ...DYNAMIC_TYPOLOGY,
      [CONSTANTS.APPLICATION_STATE]: 'finalizado',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'modificar limites tarjeta',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'pagina exitosa',
      [CONSTANTS.APPLICATION_STEP]: 'pagina exitosa',
      [CONSTANTS.PRODUCT_STATE]: 'finalizado'
    }
  };
  const _getAdvancedFootprint = text => {
    return utils.getAdvancedFootprintWithLevel3(text, setLevel3Data());
  };
  const ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS = {
    'key': 'glomo.analytics.cardOperationalLimits',
    'defaultValue': true
  };
  const ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS_ERROR = {
    'key': 'glomo.analytics.cardOperationalLimits.errors',
    'defaultValue': true
  };
  [
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    APP_COMPLETED,
    LIST_LIMITS_PAGE_VIEW,
    _getAdvancedFootprint
  ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS));
  [ PAGE_ERROR ].forEach(item => utils.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS_ERROR));
  return {
    APP_ON_CLICK_START,
    APP_PAGE_VISIT,
    APP_STARTED,
    LIST_LIMITS_PAGE_VIEW,
    PAGE_ERROR,
    APP_COMPLETED,
    ANALYTICS_FEATURE_FLAG_CARD_OPERATIONAL_LIMITS,
    _getAdvancedFootprint
  };
};
