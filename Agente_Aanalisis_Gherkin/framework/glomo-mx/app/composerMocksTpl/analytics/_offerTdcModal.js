module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const UTILS = require('./common/_utils');
  const LITERALS = require('./common/_literals');

  const _COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_VERSION]: '1.0',
    [CONSTANTS.PAGE_PAGEINFO_SERVER]: 'window.location.hostname',
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const _LEVELS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.detail,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.transfers,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: `oferta ${LITERALS.commons.cards}`
  };

  const _LEVELS_PLUS = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.notifications,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.advantage_of_the_benefits,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: LITERALS.commons.offer_cards
  };

  const _APPLICATION = {
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.sections.creditCardHolder,
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.oneClickCreditCard,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.engagement,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.fulfillmentOn + '/' + LITERALS.commons.fulfillmentOff
  };

  const _PRODUCTS = {
    [CONSTANTS.PRODUCT_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_PRODUCT_SUBTYPE]: `${LITERALS.commons.cards} credito`
  };

  const HUELLA_TDC = UTILS.getAdvancedFootprint(_LEVELS, _COMMON);
  const APP_ON_CLICK_START_TDC = UTILS.getOnClickStart('modal tdc transferencia interbancaria', LITERALS.commons.information, {
    ..._LEVELS,
    ..._COMMON,
    ..._APPLICATION,
    ..._PRODUCTS
  });

  const HUELLA_TDC_PLUS_TDD = UTILS.getAdvancedFootprint(_LEVELS_PLUS, _COMMON);
  const APP_ON_CLICK_START_TDC_PLUS_TDD = UTILS.getOnClickStart('modal tdc aprovecha los beneficios', LITERALS.commons.information, {
    ..._LEVELS_PLUS,
    ..._COMMON,
    ..._APPLICATION,
    ..._PRODUCTS
  });

  const ANALYTICS_FEATURE_FLAG = {
    'key': 'glomo.analytics.offerTdcModal',
    'defaultValue': true
  };

  [
    HUELLA_TDC,
    APP_ON_CLICK_START_TDC,
    HUELLA_TDC_PLUS_TDD,
    APP_ON_CLICK_START_TDC_PLUS_TDD
  ].forEach(item => UTILS.addFeatureFlag(item, ANALYTICS_FEATURE_FLAG));

  return {
    HUELLA_TDC,
    APP_ON_CLICK_START_TDC,
    HUELLA_TDC_PLUS_TDD,
    APP_ON_CLICK_START_TDC_PLUS_TDD
  };
};