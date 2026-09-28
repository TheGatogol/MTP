module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const ANALYTICS_FEATURE_FLAG = {
    key: 'glomo.analytics.blackHawkPurchase',
    defaultValue: true
  };
  const COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.giftCards,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
  };
  const COMMONCLICKSTART = {
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: LITERALS.commons.giftCards,
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: LITERALS.commons.hiring,
    [CONSTANTS.APPLICATION_FULLFILMENT]: LITERALS.commons.online,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: LITERALS.globalApplication.giftCardsPurchase,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.cardsList,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: LITERALS.commons.cards,
    [CONSTANTS.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: LITERALS.commons.giftCard
  };
  const PAGE_VIEW = UTILS.getAdvancedFootprintWithLevel2(
    LITERALS.commons.cardsList, {
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.cardsList,
      ...COMMON
    }
  );
  const PAGE_VIEW_ERROR = UTILS.getAdvancedFootprintError(
    LITERALS.commons.infoNotAvailable, {
      ...COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.commons.infoNotAvailable
    }
  );
  const ON_CLICK_START = UTILS.getOnClickStart(
    LITERALS.commons.interested,
    LITERALS.commons.information, {
      ...COMMON,
      ...COMMONCLICKSTART
    }
  );
  [
    PAGE_VIEW,
    PAGE_VIEW_ERROR,
    ON_CLICK_START
  ].forEach(analytic => UTILS.addFeatureFlag(analytic, ANALYTICS_FEATURE_FLAG));
  return {
    PAGE_VIEW,
    PAGE_VIEW_ERROR,
    ON_CLICK_START
  };
};