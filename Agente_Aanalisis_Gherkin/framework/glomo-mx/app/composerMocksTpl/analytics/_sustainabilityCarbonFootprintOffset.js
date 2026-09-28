module.exports = () => {
  const literals = require('./common/_literals');
  const constants = require('./common/_constants');
  const {
    getAppOnClickStartLevel2,
    getPageVisitWithLevel3,
    getAppStarted,
    getAppStepWithLevel3,
    getAppCompleted,
    getAdvancedFootprint,
    getError,
    getSiteError,
    getAnalyticFeatureFlag
  } = require('./common/_utils');
  const featureFlagKey = 'sustainabilityCarbonFootprintOffset';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const commonFunnel = {
    ...common,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.atmos.forestryProjectContribution,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_APPLICATION_NAME]: literals.atmos.contributionToForestryProject,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const commonInfoLevel = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability
  };

  const commonFunnelLevel = {
    ...commonFunnel,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.contributionToForestryProject
  };

  const commonFunnelAttributes = {
    ...commonFunnelLevel,
    [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.cards,
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: { bind: 'productSubtype' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_NAME]: { bind: 'productName' },
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_AMOUNT]: { bind: 'paymentAmount' },
    [constants.PRODUCT_CURRENCY]: literals.currencies.MXN,
    [constants.PRODUCT_ATTRIBUTES_PAYMENT_TYPE]: { bind: 'paymentType' },
    [constants.APPLICATION_SERVICE_CHARGE]: { bind: 'serviceCharge' }
  };

  const commonFootprintAttributes = {
    ...common,
    ...commonInfoLevel
  };

  const appOnClickStart = getAppOnClickStartLevel2(
    literals.sections.sustainability,
    literals.atmos.forestryProjects,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      ...commonFunnel,
      [constants.APPLICATION_STEP]:
        literals.atmos.contributionToForestryProjects
    }
  );

  const appPageVisit = getPageVisitWithLevel3(
    `1 ${literals.commons.selectProject}`,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonFunnelLevel
    }
  );

  const appStarted = getAppStarted(`1 ${literals.commons.selectProject}`, {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    ...commonFunnelLevel,
    [constants.APPLICATION_STEP]: { bind: 'step' }
  });

  const appStepAportation = getAppStepWithLevel3('2', `2 ${literals.commons.contribution}`, {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    ...commonFunnelLevel
  });

  const appStepPaymentMethod = getAnalyticFeatureFlag(
    featureFlagKey,
    getAppStepWithLevel3('3', `3 ${literals.commons.paymentOption}`, {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonFunnelLevel,
      [constants.PRODUCT_PRIMARY_CATEGORY]: literals.commons.cards
    })
  );

  const appStepSummary = getAppStepWithLevel3(
    '4',
    literals.commons.fourthConfirmation,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonFunnelAttributes
    }
  );

  const appStepOTP = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.contributionToForestryProject,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.fifthOtp,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  });

  const appCompleted = getAppCompleted(
    literals.commons.successfulPage,
    literals.commons.finalized,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
      ...commonFunnelAttributes,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
    }
  );

  const footprintForestryProjects = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects
  });

  const footprintProjectList = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.projects
  });

  const footprintProjectDetail = getAnalyticFeatureFlag(
    featureFlagKey,
    getAdvancedFootprint({
      ...commonFootprintAttributes,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects,
      [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.projectDetail
    })
  );

  const footprintBBVAPoints = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.contributionToForestryProject,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.commons.bbvaPoints
  });

  const footprintThanksForContribute = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.atmos.thanksForContribute
  });

  const footprintContributionsList = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.atmos.contributionsList
  });

  const footprintContributionDetail = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.atmos.contributionsList,
    [constants.PAGE_PAGEINFO_LEVEL4]: literals.atmos.contributionDetail
  });

  const footprintYourEmissions = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.atmos.yourCo2Emissions
  });
  const footprintSustainabilityDetail = getAdvancedFootprint({
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects,
    [constants.PAGE_PAGEINFO_LEVEL3]: literals.atmos.sustainabilityDetail
  });

  const errorRequiredActiveDigitalCard = getError(
    literals.atmos.activeDigitalCardRequired,
    {
      ...commonFootprintAttributes,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.contributionToForestryProject
    }
  );

  const errorOcurred = getSiteError(literals.errors.hasOcurred, {
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.forestryProjects
  });

  const errorPayment = getError(literals.errors.unableToMakePayment, {
    ...commonFootprintAttributes,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.contributionToForestryProject
  });

  const errorInsufficientBalance = getSiteError(
    literals.errors.insufficientBalanceInAllCards,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.sections.sustainability,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.atmos.contributionToForestryProject,
      [constants.PAGE_PAGEINFO_LEVEL3]: `3 ${literals.commons.paymentOption}`
    }
  );

  [
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepAportation,
    appStepPaymentMethod,
    appStepSummary,
    appStepOTP,
    appCompleted,
    footprintForestryProjects,
    footprintProjectList,
    footprintProjectDetail,
    footprintBBVAPoints,
    footprintThanksForContribute,
    footprintContributionsList,
    footprintContributionDetail,
    footprintYourEmissions,
    footprintSustainabilityDetail,
    errorRequiredActiveDigitalCard,
    errorOcurred,
    errorPayment,
    errorInsufficientBalance
  ].forEach((analytic) => {
    getAnalyticFeatureFlag(featureFlagKey, analytic);
  });

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepAportation,
    appStepPaymentMethod,
    appStepSummary,
    appStepOTP,
    appCompleted,
    footprintForestryProjects,
    footprintProjectList,
    footprintProjectDetail,
    footprintBBVAPoints,
    footprintThanksForContribute,
    footprintContributionsList,
    footprintContributionDetail,
    footprintYourEmissions,
    footprintSustainabilityDetail,
    errorRequiredActiveDigitalCard,
    errorOcurred,
    errorPayment,
    errorInsufficientBalance
  };
};
