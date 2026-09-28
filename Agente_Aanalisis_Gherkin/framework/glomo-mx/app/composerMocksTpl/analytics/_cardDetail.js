const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
// eslint-disable-next-line no-unused-vars
const {
  getInternalLink,
  getAnalyticFeatureFlag,
  getAdvancedFootprint
} = require('./common/_utils');

const COMMONS = {
  [CONSTANTS.APPLICATION_FULLFILMENT]: '',
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
  [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas'
};

const PROFILE_ID = {
  [CONSTANTS.USER_PROFILE_ID]: { bind: 'userProfileId' }
};

const COMMONS_TO_POINTS = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.credit,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.reward
};

const COMMON_CVV_ENTERPRISE_CARD_WITH_MORE_INFO = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.enterprise,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.commons.detail,
  ...COMMONS
};

const COMMON_PAGES = {};

const FULL_DATA = { ...COMMONS, ...COMMON_PAGES, ...PROFILE_ID };

const featureFlagCard = {
  funel: {
    'key': 'glomo.analytics.additionalCardMainPage',
    'defaultValue': true
  },
  cardEnterprise: {
    key: 'cardEnterprise'
  }
};

module.exports = () => {

  const CREDIT_CARD_DETAIL_HUELLA_AVANZADA = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle'
    }
  };

  const DEBIT_CARD_DETAIL_HUELLA_AVANZADA = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'debito',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle'
    }
  };

  const CARD_DETAIL_TURN_OFF_CARD = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'apagar tarjeta'
    }
  };

  const CARD_DETAIL_TURN_ON_CARD = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'encender tarjeta'
    }
  };

  const CARD_DETAIL_ON_HELP_MODAL = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'encender tarjeta'
    }
  };

  const CARD_DETAIL_OFF_HELP_MODAL = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'apagar tarjeta'
    }
  };

  const CARD_DETAIL_ON_FROM_MODAL = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'encender tarjeta',
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'encender tarjeta'
    }
  };

  const CARD_DETAIL_OFF_FROM_MODAL = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'apagar tarjeta',
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'apagar tarjeta'
    }
  };

  const CARD_DETAIL_USE_YOURS_POINTS = getInternalLink(
    LITERALS.reward.useYourPoints,
    COMMONS_TO_POINTS
  );

  const CREDIT_CARD_DETAIL_VIEW_MORE_DETAIL = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'mas informacion'
    }
  };

  const DEBIT_CARD_DETAIL_VIEW_MORE_DETAIL = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'debito',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'mas informacion'
    }
  };

  const DYNAMIC_ADDITIONAL_CARD_BUTTON_LABEL = {
    [CONSTANTS.APPLICATION_STEP]: {
      bind: 'buttonLabel'
    },
    [CONSTANTS.USER_COUNTRY]: 'mexico',
    [CONSTANTS.USER_STATE]: 'mexico df'
  };

  const CREDIT_CARD_DETAIL_APPLY_FOR_ADDITIONAL_CARD = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...FULL_DATA,
      ...DYNAMIC_ADDITIONAL_CARD_BUTTON_LABEL,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'credito',
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'detalle',
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: 'additional credit card',
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: 'tarjeta de credito adicional',
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: 'contratacion',
      [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
      [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: 'tarjetas',
      [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: 'tarjetas credito',
      [CONSTANTS.USER_COUNTRY]: LITERALS.empty,
      [CONSTANTS.USER_STATE]: LITERALS.empty
    },
    featureFlag: featureFlagCard.funel
  };

  const enterpriseCardCommonCVV = (level2) => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    ...COMMON_CVV_ENTERPRISE_CARD_WITH_MORE_INFO
  });

  const enterpriseCardPageView = (level2) => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL5]: LITERALS.commons.moreInfo,
    ...COMMON_CVV_ENTERPRISE_CARD_WITH_MORE_INFO
  });

  const pageViewEnterpriseCardCvv = (typeCard) => {
    const typePageView = {
      enterpriseCardCredit: getAdvancedFootprint(enterpriseCardPageView('credito')),
      enterpriseCardDebit: getAdvancedFootprint(enterpriseCardPageView('debito'))
    };
    return getAnalyticFeatureFlag(featureFlagCard.cardEnterprise.key, typePageView[typeCard]);
  };

  const huellaAvanzadaEnterpriseCard = (typeCard) => {
    const typeHuella = {
      enterpriseCardCredit: getAdvancedFootprint(enterpriseCardCommonCVV('credito')),
      enterpriseCardDebit: getAdvancedFootprint(enterpriseCardCommonCVV('debito'))
    };
    return getAnalyticFeatureFlag(featureFlagCard.cardEnterprise.key, typeHuella[typeCard]);
  };

  return {
    CREDIT_CARD_DETAIL_HUELLA_AVANZADA,
    DEBIT_CARD_DETAIL_HUELLA_AVANZADA,
    CARD_DETAIL_TURN_OFF_CARD,
    CARD_DETAIL_TURN_ON_CARD,
    CARD_DETAIL_ON_HELP_MODAL,
    CARD_DETAIL_OFF_HELP_MODAL,
    CARD_DETAIL_ON_FROM_MODAL,
    CARD_DETAIL_OFF_FROM_MODAL,
    CARD_DETAIL_USE_YOURS_POINTS,
    CREDIT_CARD_DETAIL_VIEW_MORE_DETAIL,
    DEBIT_CARD_DETAIL_VIEW_MORE_DETAIL,
    CREDIT_CARD_DETAIL_APPLY_FOR_ADDITIONAL_CARD,
    huellaAvanzadaEnterpriseCard,
    pageViewEnterpriseCardCvv
  };
};
