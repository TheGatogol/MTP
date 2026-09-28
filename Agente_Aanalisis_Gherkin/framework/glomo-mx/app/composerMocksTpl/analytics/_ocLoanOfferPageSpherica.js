const constants = require('./common/_constants');
const literals = require('./common/_literals');
const {
  getAdvancedFootprintWithLevels2And3,
  getAdvancedFootprintWithLevel2,
  getAnalyticFeatureFlag,
  getAppOnClickStartLevel,
  getPageVisit,
  getAppCompletedLevel2,
  getAppStepLevel2AppOffer,
  getAppStartedWithLevel2
} = require('./common/_utils');

module.exports = () => {
  const commonsFootprints = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.preApprovedLoan.personalLoanClick,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.USER_SEGMENT_PROFILE]: {
      bind: 'userSegmentProfile'
    }
  };

  const commons = {
    ...commonsFootprints,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.preApprovedLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.preApprovedLoan.personalLoanClick,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.hiring,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.APPLICATION_TYPOLOGY]: {
      bind: 'applicationTypology'
    },
    [constants.APPLICATION_PROCESS]: {
      bind: 'applicationProcess'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    }
  };

  const commonAttributes = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: {
      bind: 'amount'
    },
    [constants.PRODUCT_PRODUCT_NUMBEROFPAYMENTS]: {
      bind: 'numberOfPayments'
    },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: {
      bind: 'paymentAmount'
    },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: {
      bind: 'paymentType'
    },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_CURRENCY]: {
      bind: 'currency'
    },
    [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: {
      bind: 'interestRate'
    },
    [constants.APPLICATION_TERM]: {
      bind: 'term'
    },
    [constants.APPLICATION_CUSTOM_FIELDS]: {
      bind: 'customFields'
    },
    [constants.APPLICATION_OFFER]: {
      bind: 'applicationOffer'
    }
  };

  const commonsFootprintsPageInfo = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
  };

  const commonsDashboard = {
    ...commonsFootprintsPageInfo,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const commonsInternalCampaign = {
    [constants.INTERNAL_CAMPAIGN_PRODUCT]: {
      bind: 'product'
    },
    [constants.INTERNAL_CAMPAIGN_LOCATION]: {
      bind: 'location'
    },
    [constants.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: {
      bind: 'collectiveCode'
    },
    [constants.INTERNAL_CAMPAIGN_NAME]: {
      bind: 'campaignName'
    },
    [constants.INTERNAL_CAMPAIGN_FORMAT]: {
      bind: 'campaignFormat'
    }
  };

  const ocLoanPreApprovesOffer = {
    ...commonsDashboard,
    ...commonsInternalCampaign,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: literals.commons.loans,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.preApprovedLoan,
    [constants.APPLICATION_APPLICATION_NAME]: literals.preApprovedLoan.personalLoanClick,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {
      bind: 'productCode'
    },
    [constants.INTERNAL_CAMPAIGN_QUANTITY]: {
      bind: 'quantity'
    },
    [constants.INTERNAL_CAMPAIGN_EVENT_NAME]: literals.commons.intCmpClick,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: {
      bind: 'productName'
    },
    [constants.APPLICATION_STEP]: {
      bind: 'step'
    },
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    }
  };

  const appOnClickStartContractAnalytic = () => {
    return getAnalyticFeatureFlag('ocloanOfferSpherica',
      getAppOnClickStartLevel(
        {
          ...ocLoanPreApprovesOffer
        }
      )
    );
  };

  const commonsWithAttributes = {
    ...commons,
    ...commonAttributes
  };

  const getStepAnalytic = (step) => {
    const steps = {
      pageVisit: getPageVisit(
        literals.commons.first_detail, {
          ...commons,
          [constants.QUALIFIED_VISITS]: 'true'
        }
      ),
      appStarted: getAppStartedWithLevel2(
        literals.commons.first_detail, {
          ...commons,
          [constants.APPLICATION_STEP]: { bind: 'step' }
        }
      ),
      appStep2TermsAndConditions: getAppStepLevel2AppOffer(
        '2',
        `${'2'} ${literals.commons.termsAndConditions}`,
        literals.preApprovedLoan.improveInterestRate,
        commonsWithAttributes
      ),
      appStep3Confirmation: getAppStepLevel2AppOffer(
        '3',
        literals.commons.third_confirmaton,
        literals.preApprovedLoan.improveInterestRate,
        commonsWithAttributes
      ),
      appStep4Otp: getAppStepLevel2AppOffer(
        '4',
        literals.tag.fourthOtp,
        literals.preApprovedLoan.improveInterestRate,
        commonsWithAttributes
      ),
      appCompletedSucces: getAppCompletedLevel2(
        literals.commons.successfulPage,
        { bind: 'state' },
        commonsWithAttributes
      )
    };

    return getAnalyticFeatureFlag('ocloanOfferSpherica', steps[step]);
  };

  const analyticsConfig = {
    annualRateAnalytic: {
      method: 'getAdvancedFootprintWithLevels2And3',
      args: [literals.commons.first_detail, literals.preApprovedLoan.fixedInterestRate, { ...commonsFootprints }]
    },
    catAnalytic: {
      method: 'getAdvancedFootprintWithLevels2And3',
      args: [literals.commons.first_detail, literals.commons.totalAnnualCost, { ...commonsFootprints }]
    },
    commissionAnalytic: {
      method: 'getAdvancedFootprintWithLevel2',
      args: [literals.preApprovedLoan.openingCommission, { ...commonsFootprints }]
    },
    sustainableLoanCatalog: {
      method: 'getAdvancedFootprintWithLevel2',
      args: [literals.preApprovedLoan.sustainableProductsExplorer, { ...commonsFootprints }]
    },
    sustainableLoanSimulator: {
      method: 'getAdvancedFootprintWithLevel2',
      args: [literals.preApprovedLoan.sustainableRatesSimulator, { ...commonsFootprints }]
    },
    benefitsAnalytic: {
      method: 'getAdvancedFootprintWithLevel2',
      args: [literals.commons.oneBenefits, { ...commonsFootprints }]
    }
  };

  const utilMethods = { getAdvancedFootprintWithLevels2And3, getAdvancedFootprintWithLevel2 };
  const analyticFunctions = {};
  Object.keys(analyticsConfig).forEach(key => {
    const config = analyticsConfig[key];
    analyticFunctions[key] = () => {
      return getAnalyticFeatureFlag(
        'ocloanOfferSpherica',
        utilMethods[config.method](...config.args)
      );
    };
  });

  return {
    getStepAnalytic,
    appOnClickStartContractAnalytic,
    ...analyticFunctions
  };
};
