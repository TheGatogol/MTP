const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');

module.exports = (CONFIG) => {
  const BINDED_LITERALS = {
    ERROR_TYPE_AMOUNTS: 'error montos',
    ERROR_TYPE_INTEREST: 'error interes',
    ERROR_TYPE_SIMULATOR: 'error simulador',
    MINIMUM_PAYMENT: 'pago minimo',
    AMOUNT_TO_PAY: 'importe a pagar',
    PAYMENT_NOT_TO_GENERATE_INTEREST: 'pago para no generar intereses',
    CURRENT_DEBT: 'deuda actual',
    OTHER_AMOUNT: 'otro importe',
    ONBOARDING_1: 'onboarding 1',
    ONBOARDING_2: 'onboarding 2',
    ONBOARDING_3: 'onboarding 3'
  };

  const PAGE_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.cards,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.interestSimulator,
    [CONSTANTS.PAGE_PAGEINFO_LANGUAGE]: LITERALS.commons.language,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado
  };

  const COMMON = {
    ...PAGE_COMMON
  };

  const PAGE_VIEW_SIMULATOR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON
    }
  };

  const PAGE_VIEW_ONBOARDING = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: { bind: 'level3' }
    }
  };

  const PAGE_VIEW_ERROR = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'errorType'
      },
      [CONSTANTS.PAGE_PAGEINFO_ERRORPAGE]: {
        bind: 'errorType'
      }
    }
  };

  return {
    PAGE_VIEW_SIMULATOR,
    PAGE_VIEW_ONBOARDING,
    PAGE_VIEW_ERROR,
    BINDED_LITERALS
  };
};