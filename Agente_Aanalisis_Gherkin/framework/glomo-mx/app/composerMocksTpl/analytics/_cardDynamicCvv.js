const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
// eslint-disable-next-line no-unused-vars
const {
  getAnalyticFeatureFlag,
  getInteractionLink,
  getAnalyticFeatureFlagError,
  getAdvancedFootprintError,
  addFeatureFlag,
  getAdvancedFootprint } = require('./common/_utils');

const setFeatureFlags = (analytic, featureFlag) => (addFeatureFlag(analytic, featureFlag));

const featureFlagDynamicCvv = {
  page_visited: {
    key: 'glomo.analytics.cardDynamicCvv.pageView',
    defaultValue: true
  },
  interaction_link: {
    key: 'glomo.analytics.cardDynamicCvv.interactionLink',
    defaultValue: true
  },
  cardEnterprise: {
    key: 'cardEnterprise'
  }
};

const COMMONS = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons
};

const COMMON_PAGES = {};

const FULL_DATA = { ...COMMONS, ...COMMON_PAGES };

const COMMON_BUSINESS_DEBIT_CARD = {
  ...FULL_DATA,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'debito',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'empresarial',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: 'detalle',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL5]: 'mas informacion'
};

const ACTION_CVV_LINK = {
  SHOW: 'ver cvv dinamico',
  HIDE: 'ocultar cvv dinamico',
  ERROR: 'error carga cvv'
};

const BUSINESS_DEBIT_CARD = {
  ...COMMON_BUSINESS_DEBIT_CARD
};

const BUSINESS_DEBIT_CARD_ERROR = {
  ...COMMON_BUSINESS_DEBIT_CARD,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL6]: 'error carga cvv'
};

const commonsLevels = {
  ...FULL_DATA,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.digitalCard,
  [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: { bind: 'typeCard' },
  [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.detail
};

module.exports = () => {

  const pageVisit = getAdvancedFootprint({...commonsLevels});
  const dynamicCvvLink = getInteractionLink({bind: 'message'}, {...commonsLevels});

  const BUSINESS_DEBIT_CARD_HUELLA_AVANZADA = getAdvancedFootprint(BUSINESS_DEBIT_CARD);
  const BUSINESS_DEBIT_CARD_SHOW_CVV = getInteractionLink(ACTION_CVV_LINK.SHOW, BUSINESS_DEBIT_CARD);
  const BUSINESS_DEBIT_CARD_HIDE_CVV = getInteractionLink(ACTION_CVV_LINK.HIDE, BUSINESS_DEBIT_CARD);
  const BUSINESS_DEBIT_CARD_ERROR_CVV = getAdvancedFootprintError(ACTION_CVV_LINK.ERROR, BUSINESS_DEBIT_CARD_ERROR);
  setFeatureFlags(pageVisit, featureFlagDynamicCvv.page_visited);
  setFeatureFlags(dynamicCvvLink, featureFlagDynamicCvv.interaction_link);


  const COMMON_CVV_ENTERPRISE_CARD = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.enterprise,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: LITERALS.commons.detail,
    ...COMMONS
  };
  const COMMON_CVV_ENTERPRISE_CARD_WITH_MORE_INFO = {
    ...COMMON_CVV_ENTERPRISE_CARD,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL5]: LITERALS.commons.moreInfo
  };

  const getInternalLinkEnterpriseCard = (interactionLevel, level2) => getInteractionLink(
    interactionLevel,
    {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
      ...COMMON_CVV_ENTERPRISE_CARD_WITH_MORE_INFO
    }
  );
  const getInteractionLinkCVV = (actionInternal) => {
    const typeInteractionLink = {
      offEnterpriseCredit: getInternalLinkEnterpriseCard('ocultar cvv dinamico', 'credito'),
      onEnterpriseCredit: getInternalLinkEnterpriseCard('ver cvv dinamico', 'credito'),
      offEnterpriseDebit: getInternalLinkEnterpriseCard('ocultar cvv dinamico', 'debito'),
      onEnterpriseDebit: getInternalLinkEnterpriseCard('ver cvv dinamico', 'debito')
    };
    return getAnalyticFeatureFlag(featureFlagDynamicCvv.cardEnterprise.key, typeInteractionLink[actionInternal]);
  };
  const enterpriseCardErrorCommon = (level2) => ({
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: level2,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL6]: 'error carga cvv',
    ...COMMON_CVV_ENTERPRISE_CARD_WITH_MORE_INFO
  });
  const getErrorCvvType = (typeCard) => getAdvancedFootprintError(
    'error carga cvv',
    enterpriseCardErrorCommon(typeCard)
  );
  const getErrorCvv = (typeCard) => getAnalyticFeatureFlagError(featureFlagDynamicCvv.cardEnterprise.key, getErrorCvvType(typeCard));

  return {
    pageVisit,
    dynamicCvvLink,
    BUSINESS_DEBIT_CARD_HUELLA_AVANZADA,
    BUSINESS_DEBIT_CARD_SHOW_CVV,
    BUSINESS_DEBIT_CARD_HIDE_CVV,
    BUSINESS_DEBIT_CARD_ERROR_CVV,
    getInteractionLinkCVV,
    getErrorCvv
  };
};
