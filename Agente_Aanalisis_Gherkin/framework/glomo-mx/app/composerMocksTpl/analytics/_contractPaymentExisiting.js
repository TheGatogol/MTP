module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');

  const FEATURE_FLAG = {
    GLOBAL: {
      key: 'glomo.analytics.contractPaymentExisting',
      defaultValue: true
    },
    LINK_NEW_PAYMENT: {
      key: 'glomo.analytics.contractPaymentExisting.newPayment',
      defaultValue: true
    },
    LINK_OPEN_NEW_CONTRACT: {
      key: 'glomo.analytics.contractPaymentExisting.openNewContract',
      defaultValue: true
    }
  };

  const BASE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.diy,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online
  };

  const COMMON = {
    ...BASE_COMMON,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.investments,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: 'inversion a plazos'
  };

  const FINGERPRINT_HAS_CONTRACT = UTILS.getAdvancedFootprintWithLevel3('ya tienes un contrato', {...COMMON, featureFlag: FEATURE_FLAG.GLOBAL});

  const INTERNAL_LINK_NEW_PAYMENT = UTILS.getInternalLinkWithPageActivityLevel3('nuevo pagare', 'ya tienes un contrato', {...COMMON, featureFlag: FEATURE_FLAG.LINK_NEW_PAYMENT});

  const INTERNAL_LINK_OPEN_NEW_CONTRACT = UTILS.getInternalLinkWithPageActivityLevel3('abrir nuevo contrato', 'ya tienes un contrato', {...COMMON, featureFlag: FEATURE_FLAG.LINK_OPEN_NEW_CONTRACT});

  const FINGERPRINT_CONTRACT_LIST = UTILS.getAdvancedFootprintWithLevel3('listado de contratos', {...COMMON, featureFlag: FEATURE_FLAG.GLOBAL});

  const FINGERPRINT_INVALID_CONTRACT = UTILS.getAdvancedFootprintError('contrato no es de pagare', {...COMMON, featureFlag: FEATURE_FLAG.GLOBAL});

  return {
    FINGERPRINT_HAS_CONTRACT,
    INTERNAL_LINK_NEW_PAYMENT,
    INTERNAL_LINK_OPEN_NEW_CONTRACT,
    FINGERPRINT_CONTRACT_LIST,
    FINGERPRINT_INVALID_CONTRACT
  };

};