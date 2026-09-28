const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');

const {
  getAnalyticFeatureFlag,
  getAdvancedFootprintWithLevel4,
  getInternalLinkWithPageActivityLevel3 } = require('./common/_utils');

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diyPayments,
  [CONSTANTS.USER_USERSTATE]: 'logado',
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: 'tarjetas',
  [CONSTANTS.PAGE_PAGEINFO_AREA]: 'privada',
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: 'informacion',
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: 'personas'
};

const ANALYTICS_CARD_GENERATE_FEATURE_FLAG = {
  key: 'glomo.analytics.generateVirtualCard',
  defaultValue: true
};

const ANALYTICS_CARD_GENERATE_SUCCESS_FEATURE_FLAG = {
  key: 'glomo.analytics.generateVirtualCardSuccess',
  defaultValue: true
};

const ANALYTICS_CARD_GENERATE_ERROR_FEATURE_FLAG = {
  key: 'glomo.analytics.generateVirtualCardError',
  defaultValue: true
};

module.exports = () => {

  const cardGenerate = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {
        bind: 'cardTypeLevel'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: '1 inicia y confirma'
    },
    featureFlag: ANALYTICS_CARD_GENERATE_FEATURE_FLAG
  };

  const cardGenerateSuccess = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {
        bind: 'cardTypeLevel'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: 'pagina exitosa'
    },
    featureFlag: ANALYTICS_CARD_GENERATE_SUCCESS_FEATURE_FLAG
  };

  const cardGenerateError = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: {
        bind: 'cardTypeLevel'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'cardTypeErrorLevel'
      },
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: {
        bind: 'cardTypeErrorLevel'
      }
    },
    featureFlag: ANALYTICS_CARD_GENERATE_ERROR_FEATURE_FLAG
  };

  const appInternalLink = () => {
    const analytics = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.debit
    };
    return getAnalyticFeatureFlag('generateVirtualCard', getInternalLinkWithPageActivityLevel3(LITERALS.commons.digitalCardActivation, LITERALS.commons.detail, analytics));
  };

  const appPageView = () => {
    const analytics = {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.debit
    };
    return getAnalyticFeatureFlag('generateVirtualCard', getAdvancedFootprintWithLevel4(LITERALS.commons.digitalCard, {bind: 'walletType'}, analytics));
  };

  return {
    cardGenerate,
    cardGenerateSuccess,
    cardGenerateError,
    appInternalLink,
    appPageView
  };
};
