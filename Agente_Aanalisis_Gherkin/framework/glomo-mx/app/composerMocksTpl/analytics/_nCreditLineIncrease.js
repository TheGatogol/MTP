const constants = require('./common/_constants');
const {
  getAdvancedFootprintWithLevel2,
  getOnClickStart,
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError,
  getAdvancedFootprintErrorLevel2
} = require('./common/_utils');
const literals = require('./common/_literals');
const featureFlagFootprint = 'nCreditLineIncrease.footprint';
const featureFlag = 'nCreditLineIncrease';

module.exports = () => {
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };

  const commonAppView = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.increaseCreditLineOneClick,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy
  };

  const APP_ON_CLICK_START = getAnalyticFeatureFlag(
    featureFlag,
    getOnClickStart(
      literals.commons.opportunities,
      literals.commons.information,
      {
        ...common,
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
        [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
        [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.limitIncrease,
        [constants.APPLICATION_APPLICATION_NAME]: literals.commons.increaseCreditLineOneClick,
        [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
        [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
        [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.cards,
        [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.creditCards,
        [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: { bind: 'offers'},
        [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
        [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
      }
    )
  );

  const viewPage = getAnalyticFeatureFlag(
    featureFlagFootprint,
    getAdvancedFootprintWithLevel2('actualizacion de cuenta', {...commonAppView})
  );

  const upgradeModal = getAnalyticFeatureFlag(
    featureFlagFootprint,
    getAdvancedFootprintWithLevel2('cuenta actualizada', {...commonAppView})
  );

  const errorModal = getAnalyticFeatureFlagError(
    featureFlag,
    getAdvancedFootprintErrorLevel2(literals.commons.increaseCreditLineOneClick, literals.errors.errorOperationNotAvailable, {...commonAppView})
  );

  return {
    viewPage,
    APP_ON_CLICK_START,
    errorModal,
    upgradeModal
  };
};
