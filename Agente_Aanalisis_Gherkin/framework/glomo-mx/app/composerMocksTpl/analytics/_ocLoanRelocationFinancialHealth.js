const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAnalyticFeatureFlag,
  getAnalyticFeatureFlagError,
  getOnClickStart,
  getAppStep,
  getPageVisit,
  getAppStartedWithLevel2,
  getAppCompletedLevel2,
  getAdvancedFootprintErrorLevel2,
  getAdvancedFootprint,
  getInternalLink
} = require('./common/_utils');

const analyticsBase = 'ocLoanRelocationFinancialHealth';
const featureFlagFootprint = `${analyticsBase}.footprint`;

const commons = {
  [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
  [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
  [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
  [constants.PAGE_PAGEINFO_LEVEL1]: literals.operative.recolocation.level1
};

const commonApplication = {
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.preApprovedLoan,
  [constants.APPLICATION_APPLICATION_NAME]: literals.operative.recolocation.level1,
  [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
  [constants.QUALIFIED_VISITS]: literals.commons.qualifiedVisitsTrue
};

const emptyQuantitativeFields = {
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: literals.commons.empty,
  [constants.PRODUCT_PRODUCT_NUMBER_OF_HOLDERS]: literals.commons.empty,
  [constants.PRODUCT_PRODUCT_0_GROUP]: literals.commons.empty,
  ['products.attributes.0.productCode']: literals.commons.empty,
  [constants.PRODUCT_STATE]: literals.commons.empty,
  [constants.APPLICATION_TERM]: literals.commons.empty,
  [constants.APPLICATION_PAYMENT_DATE]: literals.commons.empty,
  [constants.APPLICATION_SERVICE_CHARGE]: literals.commons.empty,
  [constants.PRODUCT_QUANTITY]: literals.commons.empty,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: literals.commons.empty,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: literals.commons.empty,
  [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: literals.commons.empty,
  [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: literals.commons.empty,
  [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: literals.commons.empty,
  [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: literals.commons.empty
};

const commonsProducts = {
  ...emptyQuantitativeFields,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: 'mxn',
  [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: { bind: 'rate' },
  [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: { bind: 'numberOfPayments' },
  [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
  [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: { bind: 'paymentType' },
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrolLoan,
  [constants.PRODUCT_QUANTITY]: { bind: 'productQuantity' }
};

const baseApplicationPayload = {
  ...commons,
  ...commonApplication,
  ...commonsProducts
};

const onClickStartPayload = {
  ...commons,
  ...emptyQuantitativeFields,
  [constants.INTERNAL_CAMPAIGN_FORMAT]: { bind: 'campaignFormat' },
  [constants.INTERNAL_CAMPAIGN_NAME]: { bind: 'campaignName'},
  [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: { bind: 'collectiveCode' },
  [constants.INTERNAL_CAMPAIGN_LOCATION]: { bind: 'campaignLocation' },
  [constants.INTERNAL_CAMPAIGN_PRODUCT]: literals.commons.loans,
  [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
  [constants.INTERNAL_CAMPAIGN_SITE_ACTION_NAME]: { bind: 'siteActionName' },
  [constants.APPLICATION_APPLICATION_NAME]: literals.operative.recolocation.level1,
  [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
  [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
  [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.preApprovedLoan,
  [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'levelOne'},
  [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'levelTwo'},
  [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
  [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: literals.commons.payrolLoan
};

const basePageIntentPayload = {
  ...commons,
  [constants.PAGE_PAGEINFO_PAGEINTENT]: { bind: 'pageIntent' }
};

const basePageIntentWithLevel2Payload = {
  ...basePageIntentPayload,
  [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'levelText' }
};

module.exports = () => {
  return {
    appOnClickStart: () => getAnalyticFeatureFlag(
      featureFlagFootprint,
      getOnClickStart({ bind: 'applicationStep' }, literals.commons.information, onClickStartPayload)
    ),

    appPageVisit: () => getAnalyticFeatureFlag(
      featureFlagFootprint,
      getPageVisit('1 oferta', baseApplicationPayload)
    ),

    appStarted: () => getAnalyticFeatureFlag(
      featureFlagFootprint,
      getAppStartedWithLevel2('1 oferta', {
        ...baseApplicationPayload,
        [constants.APPLICATION_STEP]: { bind: 'applicationStep' }
      })
    ),

    appPageView: () => getAnalyticFeatureFlag(
      featureFlagFootprint,
      getAdvancedFootprint(basePageIntentWithLevel2Payload)
    ),

    appInternalLink: (analyticFlag) => getAnalyticFeatureFlag(
      `${analyticsBase}.internalLink.${analyticFlag}`,
      getInternalLink({ bind: 'pageLink' }, basePageIntentWithLevel2Payload)
    ),

    appStep: (step) => getAnalyticFeatureFlag(
      featureFlagFootprint,
      getAppStep(`${step}`, {
        ...baseApplicationPayload,
        [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'levelText' },
        [constants.APPLICATION_STEP]: { bind: 'applicationStep' },
        [constants.APPLICATION_STATE]: { bind: 'applicationState' }
      })
    ),

    appCompleted: () => getAnalyticFeatureFlag(
      featureFlagFootprint,
      getAppCompletedLevel2({ bind: 'levelText' }, { bind: 'applicationState' }, baseApplicationPayload)
    ),

    appPageErrorTwoLevels: (analyticFlag) => getAnalyticFeatureFlagError(
      `${analyticsBase}.${analyticFlag}`,
      getAdvancedFootprintErrorLevel2(
        literals.operative.recolocation.level1,
        { bind: 'error' },
        basePageIntentPayload
      )
    )
  };
};