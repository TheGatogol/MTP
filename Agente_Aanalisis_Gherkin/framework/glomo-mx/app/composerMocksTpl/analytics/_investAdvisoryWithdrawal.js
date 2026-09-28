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
    getExternalLinkWithLink,
    getAnalyticFeatureFlag
  } = require('./common/_utils');
  const featureFlag = 'invest';
  const featureFlagError = 'investError';
  const { commons: { private: nonPublic, information, persons, operative, online, investments, investmentFunds, contract, detail, oneTypeOfSale, otp, signToken, successfulPage, finalized, distribution },
    sections: { bbvaInvest, glomo }, checkUp: { errorInformationNotAvailable }
  } = require('./common/_literals');
  const dynamicData = {
    [constants.APPLICATION_TYPOLOGY]: { bind: 'investProfile' }
  };
  const dynamicDataApplication = {
    [constants.APPLICATION_STEP]: { bind: 'step' }
  };
  const dynamicApplicationType = {
    [constants.APPLICATION_PROCESS]: { bind: 'withdrawlType' }
  };
  const dynamicDataProducts = {
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: { bind: 'currency' }
  };
  const commonData = {
    [constants.PAGE_PAGEINFO_AREA]: nonPublic,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo
  };
  const commonApplication = {
    ...commonData,
    [constants.APPLICATION_GLOBAL_APPLICATION]: 'sell investment service',
    [constants.APPLICATION_APPLICATION_NAME]: `${bbvaInvest} venta`,
    [constants.APPLICATION_APPLICATION_TYPE]: operative,
    [constants.APPLICATION_FULLFILMENT]: online
  };
  const products = {
    [constants.PRODUCT_ATTRIBUTES_PRIMARY_CATEGORY]: investments,
    [constants.PRODUCT_ATTRIBUTES_PRODUCT_SUBTYPE]: investmentFunds
  };
  const investCommonProductsData = {
    ...commonApplication,
    ...products
  };
  const investCommonProductDynamicsData = {
    ...investCommonProductsData,
    ...dynamicData
  };
  const investCommonProductDynamicsApplicationTypeData = {
    ...investCommonProductDynamicsData,
    ...dynamicApplicationType
  };
  const investCommonProductDynamicsApplicationTypeProductsData = {
    ...investCommonProductDynamicsApplicationTypeData,
    ...dynamicDataProducts
  };
  const operationState = {
    [constants.APPLICATION_STATE]: { bind: 'applicationState' },
    [constants.PRODUCT_STATE]: { bind: 'productState' }
  };
  const appOnclickStart = getAnalyticFeatureFlag(featureFlag, getAppOnClickStartLevel2(
    `${bbvaInvest} ${contract}`,
    detail,
    {
      [constants.APPLICATION_STEP]: 'vender',
      ...investCommonProductsData
    }));
  const appPageVisit = getAnalyticFeatureFlag(featureFlag, getAppPageVisitLevel2(`${oneTypeOfSale}`,
    { [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta` },
    { ...investCommonProductDynamicsData }
  ));
  const appStarted = getAnalyticFeatureFlag(featureFlag, getAppStartedWithLevel2(
    `${oneTypeOfSale}`,
    {
      [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta`,
      ...investCommonProductDynamicsData,
      ...dynamicDataApplication
    }));
  const appStepInput = getAnalyticFeatureFlag(featureFlag, getAppStep('2', {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta`,
    [constants.PAGE_PAGEINFO_LEVEL2]: '2 introducir cantidad',
    [constants.APPLICATION_STEP]: '2 introducir cantidad',
    ...investCommonProductDynamicsApplicationTypeData
  }));
  const footprintDistribution = getAnalyticFeatureFlag(featureFlag, getAdvancedFootprintWithLevel2(distribution, {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta`,
    ...commonData
  }));
  const appStepCompleted = getAnalyticFeatureFlag(featureFlag, getAppStep('3', {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta`,
    [constants.PAGE_PAGEINFO_LEVEL2]: '3 confirmacion',
    [constants.APPLICATION_STEP]: '3 confirmacion',
    ...investCommonProductDynamicsApplicationTypeProductsData
  }));
  const otpFootprint = getAnalyticFeatureFlag(featureFlag, getAdvancedFootprintWithLevel2(otp, {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta`,
    [constants.APPLICATION_CUSTOM_FIELDS]: signToken,
    ...commonData
  }));
  const appCompleted = getAnalyticFeatureFlag(featureFlag, getAppCompletedRaw(
    {
      ...investCommonProductDynamicsApplicationTypeProductsData,
      [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta`,
      [constants.PAGE_PAGEINFO_LEVEL2]: successfulPage,
      [constants.APPLICATION_STEP]: successfulPage,
      [constants.APPLICATION_CUSTOM_FIELDS]: signToken,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
      ...operationState
    }));
  const errorInfoNotAvailable = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintErrorLevel2(
    `${bbvaInvest} venta`,
    errorInformationNotAvailable,
    { ...commonApplication }));
  const errorConnectionNotAvailable = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintErrorLevel2(
    `${bbvaInvest} venta`,
    'error sin conexion a red',
    { ...commonApplication }));
  const errorModalWithdrawal = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintErrorLevel2(
    `${bbvaInvest} venta`,
    'error monto a vender',
    { ...commonData }));
  const externalLinkReceipt = getAnalyticFeatureFlag(featureFlag, getExternalLinkWithLink({ bind: 'linkUrl' },
    { ...commonData,
      [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} venta`,
      [constants.PAGE_PAGEINFO_LEVEL2]: successfulPage
    }
  ));
  return {
    appOnclickStart,
    appPageVisit,
    appStarted,
    appStepInput,
    footprintDistribution,
    appStepCompleted,
    otpFootprint,
    appCompleted,
    errorInfoNotAvailable,
    errorConnectionNotAvailable,
    errorModalWithdrawal,
    externalLinkReceipt
  };
};