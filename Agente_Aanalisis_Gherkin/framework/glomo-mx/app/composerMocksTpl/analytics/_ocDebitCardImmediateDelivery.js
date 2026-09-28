const constants = require('./common/_constants');
const literals = require('./common/_literals');

const {
  getAppOnClickStartLevel2,
  getPageVisitWithLevel3,
  getAppStartedWithoutLevel,
  getAppStepWithLevel3,
  getAppCompleted,
  addFeatureFlag,
  getAdvancedFootprint,
  getAdvancedFootprintWithLevel3,
  getAdvancedFootprintError
} = require('./common/_utils');

module.exports = () => {
  const functionalityFlag = {
    'key': 'glomo.analytics.ocDebitCardImmediateDelivery.functionality',
    'defaultValue': true
  };
  const featureFlagFootprints = {
    'key': 'glomo.analytics.ocDebitCardImmediateDelivery.footprint',
    'defaultValue': true
  };
  const errorFlagLoadSection = {
    'key': 'glomo.analytics.ocDebitCardImmediateDelivery.errorLoadSection',
    'defaultValue': true
  };
  const errorFlagLoadToken = {
    'key': 'glomo.analytics.ocDebitCardImmediateDelivery.errorLoadToken',
    'defaultValue': true
  };

  const commonInternalCampaignBindings = {
    [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'location' },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: { bind: 'campaingFormat' },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
    [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName' },
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: { bind: 'productCode' },
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: { bind: 'internalCampaignCampaignQuantity' }
  };

  const commonCommissions = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'commission' },
    [constants.PRODUCT_CURRENCY]: literals.currencies.MXN
  };
  const pageInfo = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const pageLevels = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.requestAPhysicalCardForYoungPeople
  };
  const application = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.accountCardDelivery,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.requestAPhysicalCardForYoungPeople,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn
  };
  const products = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.account,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.linkCardAccount
  };

  const commonsStart = {
    ...pageInfo,
    ...application,
    ...products
  };
  const commonFunnel = {
    ...commonsStart,
    ...pageLevels,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
  };
  const commonFootprint = {
    ...pageInfo,
    ...pageLevels,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };

  const commonFootprintDIY = {
    ...pageLevels,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
  };

  const appOnClickStart = getAppOnClickStartLevel2(literals.commons.account, literals.commons.detail, {
    ...commonsStart,
    ...commonInternalCampaignBindings,
    [constants.APPLICATION_STEP]: literals.commons.interested,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.account,
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: { bind: 'siteActionName' }
  });

  const appPageVisit = getPageVisitWithLevel3('1 ' + literals.commons.oneBenefits, {
    ...commonFunnel
  });

  const appStarted = getAppStartedWithoutLevel({
    ...commonFunnel,
    [constants.PAGE_PAGEINFO_LEVEL3]: '1 ' + literals.commons.oneBenefits,
    [constants.APPLICATION_STEP]: literals.commons.continue
  });

  const appStepSelectAddress = getAppStepWithLevel3(2, '2 ' + literals.commons.shippingAddress, {
    ...commonFunnel
  });

  const appStepCustomizeCard = getAppStepWithLevel3(3, '3 ' + literals.commons.customize, {
    ...commonFunnel,
    ...commonCommissions
  });

  const appStepConfirm = getAppStepWithLevel3(4, '4 ' + literals.commons.confirmation, {
    ...commonFunnel,
    ...commonCommissions
  });

  const appCompleted = getAppCompleted(literals.commons.successfulPage, literals.commons.ended, {
    ...commonFunnel,
    ...commonCommissions,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.PRODUCT_STATE]: literals.commons.ended,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });

  const footprintPageViewOTP = getAdvancedFootprintWithLevel3(literals.commons.otp, {
    ...pageLevels,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });

  const footprintProductDetail = getAdvancedFootprint({
    ...commonInternalCampaignBindings,
    ...commonFootprintDIY,
    [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' },
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.detail,
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.account
  });

  const errorPageLoadSection = getAdvancedFootprintError(literals.errors.sectionLoading, {
    ...commonFootprint,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.sectionLoading
  });

  const errorPageLoadToken = getAdvancedFootprintError(literals.errors.tokenLoading, {
    ...commonFootprint,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.errors.tokenLoading
  });

  [
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepSelectAddress,
    appStepCustomizeCard,
    appStepConfirm,
    appCompleted,
    footprintPageViewOTP
  ].forEach(item => addFeatureFlag(item, functionalityFlag));
  addFeatureFlag(footprintProductDetail, featureFlagFootprints);
  addFeatureFlag(errorPageLoadSection, errorFlagLoadSection);
  addFeatureFlag(errorPageLoadToken, errorFlagLoadToken);

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepSelectAddress,
    appStepCustomizeCard,
    appStepConfirm,
    appCompleted,
    footprintPageViewOTP,
    footprintProductDetail,
    errorPageLoadSection,
    errorPageLoadToken
  };
};
