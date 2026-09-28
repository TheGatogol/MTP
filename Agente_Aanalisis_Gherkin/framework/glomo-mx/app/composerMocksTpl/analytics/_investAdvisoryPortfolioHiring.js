module.exports = () => {
  const {
    getOnClickStart,
    getPageVisit,
    getAppStartedWithoutLevel,
    getAppStep,
    getAppCompletedRaw,
    getAdvancedFootprintError,
    getAnalyticFeatureFlag,
    getInternalLink,
    getExternalLinkWithLink
  } = require('./common/_utils');
  const {
    commons: {
      termsAndConditions,
      engagement,
      investmentService,
      serviceInvestment,
      onlineOffline,
      investments,
      investmentFunds,
      successfulPage,
      private: nonPublic,
      information,
      persons,
      bbvaInvestmentsHiring,
      signToken
    },
    sections: {
      bbvaInvest, invest, glomo
    }, state: { contracted }, featureFlag: { callMeBack }
  } = require('./common/_literals');
  const constants = require('./common/_constants');
  const featureFlag = 'invest';
  const featureFlagError = 'investError';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: nonPublic,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: invest
  };
  const commonApplicationData = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: investmentService,
    [constants.APPLICATION_APPLICATION_NAME]: serviceInvestment,
    [constants.APPLICATION_APPLICATION_TYPE]: engagement,
    [constants.APPLICATION_FULLFILMENT]: onlineOffline,
    [constants.PRODUCT_PRIMARY_CATEGORY]: investments,
    [constants.PRODUCT_PRODUCT_SUBTYPE]: investmentFunds
  };
  const commonDynamicData = {
    [constants.PAGE_PAGEINFO_LEVEL2]: { bind: 'pageName' }
  };
  const pageLevelProfiling = {
    [constants.PAGE_PAGEINFO_LEVEL1]: `${bbvaInvest} perfilamiento`
  };
  const pageLevelHiring = {
    [constants.PAGE_PAGEINFO_LEVEL1]: bbvaInvestmentsHiring
  };
  const applicationStep = {
    [constants.APPLICATION_STEP]: { bind: 'step' }
  };
  const isQualifiedVisits = {
    [constants.QUALIFIED_VISITS]: 'true'
  };
  const attributeProducts = {
    [constants.PRODUCT_AMOUNT]: { bind: 'amount' },
    [constants.PRODUCT_CURRENCY]: 'MXN'
  };
  const otpToken = {
    [constants.APPLICATION_CUSTOM_FIELDS]: signToken
  };
  const hiredTags = {
    [constants.APPLICATION_STATE]: contracted,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.PRODUCT_STATE]: contracted
  };
  const dataLink = {
    ...common,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo,
    ...pageLevelHiring
  };
  const investCommonDynamicData = { ...common, ...commonDynamicData };
  const investCommonDynamicApplicationData = {...investCommonDynamicData, ...commonApplicationData};
  const investCommonDynamicApplicationHiringData = { ...investCommonDynamicApplicationData, ...pageLevelHiring};
  const investCommonDynamicApplicationHiringStepData = { ...investCommonDynamicApplicationHiringData, ...applicationStep};
  const investCommonDynamicApplicationHiringStepAttributeData = { ...investCommonDynamicApplicationHiringStepData, ...attributeProducts};
  const appOnClickStart = getAnalyticFeatureFlag(featureFlag, getOnClickStart('comenzar contratacion', information, {
    ...investCommonDynamicApplicationData,
    ...pageLevelProfiling
  }));
  const appPageVisit = getAnalyticFeatureFlag(featureFlag, getPageVisit('1 cuentas asociadas', {
    ...common,
    ...pageLevelHiring,
    ...commonApplicationData,
    ...isQualifiedVisits
  }));
  const appStarted = getAnalyticFeatureFlag(featureFlag, getAppStartedWithoutLevel({
    ...investCommonDynamicApplicationHiringStepData
  }));
  const appStepTermsAndConditions = getAnalyticFeatureFlag(featureFlag, getAppStep('2', {
    ...investCommonDynamicApplicationHiringStepData
  }));
  const appStepConfirmation = getAnalyticFeatureFlag(featureFlag, getAppStep('3', {
    ...investCommonDynamicApplicationHiringStepAttributeData
  }));
  const appStepOTP = getAnalyticFeatureFlag(featureFlag, getAppStep('4', {
    ...investCommonDynamicApplicationHiringStepAttributeData,
    ...otpToken
  }));
  const appCompleted = getAnalyticFeatureFlag(featureFlag, getAppCompletedRaw({
    ...investCommonDynamicApplicationHiringStepAttributeData,
    ...otpToken,
    ...hiredTags
  }));
  const errorPageView = getAnalyticFeatureFlag(featureFlagError, getAdvancedFootprintError({ bind: 'pageName' }, {
    ...common,
    ...pageLevelHiring,
    ...commonDynamicData
  }));
  const termsAndConditionsExternalLinkClick = getAnalyticFeatureFlag(featureFlag, getExternalLinkWithLink({ bind: 'documentName' },
    {
      ...dataLink,
      [constants.PAGE_PAGEINFO_LEVEL2]: `2 ${termsAndConditions}`
    }));
  const hiredDocumentsExternalLinkClick = getAnalyticFeatureFlag(featureFlag, getExternalLinkWithLink({ bind: 'linkUrl' },
    {
      ...dataLink,
      [constants.PAGE_PAGEINFO_LEVEL2]: successfulPage
    }));
  const sharedHiringExternalLinkClick = getAnalyticFeatureFlag(featureFlag, getExternalLinkWithLink({ bind: 'operationState' },
    {
      ...dataLink,
      [constants.PAGE_PAGEINFO_LEVEL2]: successfulPage
    }));
  const internalLinkStickyCMB = getAnalyticFeatureFlag(callMeBack, getInternalLink('sticky call me back', {
    ...pageLevelProfiling,
    ...investCommonDynamicData,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo
  }));
  const internalLinkBlue = getAnalyticFeatureFlag(callMeBack, getInternalLink('icono hablar con blue', {
    ...pageLevelProfiling,
    ...investCommonDynamicData,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: glomo
  }));
  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepTermsAndConditions,
    appStepConfirmation,
    appStepOTP,
    appCompleted,
    errorPageView,
    internalLinkStickyCMB,
    internalLinkBlue,
    termsAndConditionsExternalLinkClick,
    hiredDocumentsExternalLinkClick,
    sharedHiringExternalLinkClick
  };
};
