module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAppStarted,
    getAppCompleted,
    getAppStepWithLevel3,
    getPageVisitWithLevel3,
    getAnalyticFeatureFlag,
    getAdvancedFootprintWithLevel3
  } = require('./common/_utils');
  const featureFlag = 'cardTransactionServicingScheduledDonations';

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const commonFunnel = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.donationPayment,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.donations,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online
  };

  const commonFunnelLevel = {
    ...common,
    ...commonFunnel,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.donations
  };

  const commonFunnelAttributes = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: literals.currencies.MXN
  };

  const commonWithoutApp = {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.account,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.donations
  };

  const appPageVisit = getPageVisitWithLevel3(
    `1 ${literals.commons.oneBenefits}`,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonFunnelLevel,
      [constants.APPLICATION_STEP]: `1 ${literals.commons.oneBenefits}`
    }
  );

  const editAccountStep = getAdvancedFootprintWithLevel3(
    `${literals.reward.origin}`,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonWithoutApp
    }
  );

  const appStarted = getAppStarted(
    `1 ${literals.commons.oneBenefits}`,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonFunnelLevel,
      [constants.APPLICATION_STEP]: { bind: 'step' }
    }
  );

  const importDonationStep = getAppStepWithLevel3(
    '2',
    literals.commons.twoAmount,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonFunnelLevel
    }
  );

  const confirmDonationStep = getAppStepWithLevel3(
    '3',
    literals.commons.third_confirmaton,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      ...commonFunnelLevel,
      ...commonFunnelAttributes
    }
  );

  const appStepOTP = getAppStepWithLevel3('4', literals.tag.fourthOtp, {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    ...commonFunnelLevel,
    ...commonFunnelAttributes,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
  }
  );

  const appCompleted = getAppCompleted(
    literals.commons.successfulPage,
    literals.commons.finalized,
    {
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
      ...commonFunnelLevel,
      ...commonFunnelAttributes,
      [constants.PRODUCT_STATE]: literals.commons.finalized,
      [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.signToken
    }
  );

  [
    appPageVisit,
    appStarted,
    importDonationStep,
    confirmDonationStep,
    appStepOTP,
    appCompleted,
    editAccountStep
  ].forEach((item) => {
    getAnalyticFeatureFlag(featureFlag, item);
  }
  );
  return {
    appPageVisit,
    appStarted,
    importDonationStep,
    confirmDonationStep,
    appStepOTP,
    appCompleted,
    editAccountStep
  };
};