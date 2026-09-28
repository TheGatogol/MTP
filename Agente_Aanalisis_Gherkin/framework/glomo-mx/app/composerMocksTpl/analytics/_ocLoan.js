module.exports = (CONFIG) => {
  const constants = require('./common/_constants.js');
  const literals = require('./common/_literals.js');
  const { getAppStep,
    getAdvancedFootprint,
    getAppCompletedLevel2,
    addFeatureFlag
  } = require('./common/_utils.js');

  const featureFlagOcLoan = {
    'key': 'glomo.analytics.ocLoanWebGlomo',
    'defaultValue': true
  };

  const featureFlagOcLoanErrors = {
    'key': 'glomo.analytics.ocLoanWebGlomo.errors',
    'defaultValue': true
  };

  const commonPageInfo = {
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.diy,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.ocLoanPrivate,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons
  };

  const common = {
    [constants.APPLICATION_TYPOLOGY]: literals.preApprovedLoan.preApproved,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.ocLoanPrivate,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.engagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.ocLoans
  };

  const commonProducts = {
    [constants.PRODUCT_PRODUCT_SUBTYPE]: literals.commons.personalLoan,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.loans
  };

  const commonDynamicProducts = {
    [constants.APPLICATION_TERM]: { bind: 'term' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: { bind: 'paymentType' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.PRODUCT_ATTRIBUTES_INTEREST_RATE]: { bind: 'interestRate' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [constants.APPLICATION_SERVICE_CHARGE]: { bind: 'serviceCharge' }
  };

  const dynamicStep = {
    ...common,
    ...commonPageInfo,
    ...commonProducts,
    ...commonDynamicProducts,
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'step' },
    [constants.APPLICATION_STEP]: { bind: 'step' }
  };

  const getCustomAppStep = (step) => {
    const fifthStep = 5;
    const commonDatalayer = {
      ...dynamicStep
    };
    if (step === fifthStep) {
      Object.assign(commonDatalayer, {
        [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
      });
    }
    const analytic = getAppStep(step, commonDatalayer);
    addFeatureFlag(analytic, featureFlagOcLoan);
    return analytic;
  };

  const appCompleted = getAppCompletedLevel2(
    literals.commons.successfulPage,
    literals.state.contracted,
    dynamicStep,
    { [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' } }
  );

  const getCustomAdnvancedFootprintError = (errorPage) => {
    const advanceFootPrint = getAdvancedFootprint({
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.ocLoanPrivate,
      [constants.PAGE_PAGEINFO_LEVEL2]: errorPage,
      [constants.PAGE_PAGEINFO_ERRORPAGE]: errorPage
    }, commonPageInfo);

    addFeatureFlag(advanceFootPrint, featureFlagOcLoanErrors);
    return advanceFootPrint;
  };

  [
    appCompleted
  ].forEach(analytic => addFeatureFlag(analytic, featureFlagOcLoan));

  return {
    appCompleted,
    getCustomAppStep,
    getCustomAdnvancedFootprintError
  };
};
