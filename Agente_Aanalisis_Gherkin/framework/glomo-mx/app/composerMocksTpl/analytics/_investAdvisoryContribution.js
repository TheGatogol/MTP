module.exports = () => {
  const constants = require('./common/_constants');
  const {
    getAppOnClickStartLevel2,
    getAppPageVisitLevel2,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedRaw,
    getAdvancedFootprintErrorLevel2,
    getAdvancedFootprintWithLevel2,
    getAnalyticFeatureFlag,
    getExternalLinkWithLink
  } = require('./common/_utils');
  const featureFlag = 'invest';
  const featureFlagError = 'investError';
  const { commons: { private: nonPublic, information, persons, contract, detail, investments, investmentFunds, engagement, online, amount, confirmation, otp, signToken, successfulPage, approved },
    sections: { bbvaInvest, glomo }, tag: { amount: tagAmount }, checkUp: { errorInformationNotAvailable }
  } = require('./common/_literals');
  const dynamicData = {
    [constants.APPLICATION_TYPOLOGY]: { bind: 'investProfile' }
  };
  const commonData = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: information,
    [constants.PAGE_PAGEINFO_AREA]: nonPublic,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo
  };
  const commonApplication = {
    ...commonData,
    [constants.APPLICATION_APPLICATION_NAME]: `${bbvaInvest} compra`,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'purchase investment service',
    [constants.APPLICATION_APPLICATION_TYPE]: engagement,
    [constants.APPLICATION_FULLFILMENT]: online
  };
  const commonError = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: information,
    [constants.PAGE_PAGEINFO_AREA]: nonPublic,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo
  };
  const products = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: investments,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: investmentFunds
  };
  const investCommonData = {
    ...commonApplication,
    ...products,
    ...dynamicData
  };
  const dynamicDataProducts = {
    ...investCommonData,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
  };
  const operationState = {
    [constants.APPLICATION_STATE]: { bind: 'applicationState' },
    [constants.PRODUCT_STATE]: { bind: 'productState' }
  };
  const appOnclickStart = getAnalyticFeatureFlag(featureFlag, getAppOnClickStartLevel2(
    `${bbvaInvest} ${contract}`,
    detail,
    {
      [constants.APPLICATION_STEP]: 'comprar',
      ...commonApplication,
      ...products
    }));
  const appPageVisit = getAnalyticFeatureFlag(featureFlag, getAppPageVisitLevel2(`1 introducir ${tagAmount}`,
    { [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} compra` },
    {...investCommonData}
  ));
  const appStarted = getAnalyticFeatureFlag(featureFlag, getAppStartedWithLevel2(
    `1 introducir ${tagAmount}`,
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} compra`,
      [constants.APPLICATION_STEP]: 'importe',
      ...investCommonData,
      [constants.APPLICATION_STEP]: amount
    }));
  const appStepInput = getAnalyticFeatureFlag(featureFlag, getAppStep('2', {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} compra`,
    [constants.PAGE_PAGEINFO_LEVEL2]: '2 distribucion',
    [constants.APPLICATION_STEP]: '2 distribucion',
    ...dynamicDataProducts
  }));
  const appStepDistribution = getAnalyticFeatureFlag(featureFlag, getAppStep('3', {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} compra`,
    [constants.PAGE_PAGEINFO_LEVEL2]: `3 ${confirmation}`,
    [constants.APPLICATION_STEP]: `3 ${confirmation}`,
    ...dynamicDataProducts
  }));
  const otpFootprint = getAnalyticFeatureFlag(featureFlag, getAdvancedFootprintWithLevel2(otp, {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} compra`,
    [constants.APPLICATION_CUSTOM_FIELDS]: signToken,
    ...commonData
  }));
  const appCompleted = getAnalyticFeatureFlag(featureFlag, getAppCompletedRaw(
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} compra`,
      [constants.PAGE_PAGEINFO_LEVEL2]: successfulPage,
      [constants.APPLICATION_STEP]: successfulPage,
      [constants.APPLICATION_CUSTOM_FIELDS]: signToken,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
      ...dynamicDataProducts,
      ...operationState
    }));
  const errorInfoNotAvailable = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintErrorLevel2(
    `${bbvaInvest} compra`,
    errorInformationNotAvailable,
    { ...commonError }));
  const errorConnectionNotAvailable = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintErrorLevel2(
    `${bbvaInvest} compra`,
    'error sin conexion a red',
    { ...commonApplication }));
  const errorInsufficientAmount = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintErrorLevel2(
    `${bbvaInvest} compra`,
    'error monto insufuciente',
    { ...commonError }));
  const externalLinkReceipt = getAnalyticFeatureFlag(featureFlag, getExternalLinkWithLink({ bind: 'linkUrl' },
    { ...commonData,
      [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} compra`,
      [constants.PAGE_PAGEINFO_LEVEL2]: successfulPage
    }
  ));
  return {
    appOnclickStart,
    appPageVisit,
    appStarted,
    appStepInput,
    appStepDistribution,
    otpFootprint,
    appCompleted,
    errorInfoNotAvailable,
    errorConnectionNotAvailable,
    errorInsufficientAmount,
    externalLinkReceipt
  };
};
