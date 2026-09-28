module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAppOnClickStartLevel2,
    getAppPageVisitLevel2,
    getAppStartedWithLevel2,
    getAppStep,
    getAppCompletedRaw,
    getAdvancedFootprintWithLevel2,
    getAnalyticFeatureFlag } = require('./common/_utils');
  const featureFlag = 'deferredSignatureCoowners';
  const analyticsFeatureFlagError = 'deferredSignatureCoowners.error';

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_SEGMENT_GLOBAL]: literals.commons.patrimonialSegment
  };
  const commonAdvanceFootPrint = {
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.selfManagement,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.contractActivation
  };
  const dynamicDataPageName = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.contractActivation,
    [constants.APPLICATION_TYPOLOGY]: literals.commons.holder,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: { bind: 'segmentGlobal' },
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' },
    [constants.APPLICATION_STEP]: { bind: 'step' }
  };
  const dynamicFingerprint = {
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.contractActivation,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: { bind: 'segmentGlobal' },
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' }
  };
  const onClickstar = {
    [constants.APPLICATION_GLOBAL_APPLICATION]: { bind: 'globalApplication' },
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: { bind: 'segmentGlobal' }
  };
  const fullData = {
    ...common,
    ...commonAdvanceFootPrint,
    ...dynamicDataPageName
  };
  const appOnClickStart = getAppOnClickStartLevel2(
    literals.commons.notifications,
    literals.commons.detail,
    {
      [constants.APPLICATION_STEP]: literals.commons.notificationDetail,
      ...common,
      ...commonAdvanceFootPrint,
      ...onClickstar,
      [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.patrimonial,
      [constants.PAGE_PAGEINFO_LEVEL1]: { bind: 'level1' }
    }
  );
  const appPageVisit = getAppPageVisitLevel2(
    `1 ${literals.commons.termsAndConditions}`,
    { ...fullData }
  );
  const appStarted = getAppStartedWithLevel2(
    `1 ${literals.commons.termsAndConditions}`,
    { ...fullData }
  );
  const appStepConfirmation = getAppStep('2', `2 ${literals.commons.confirmation}`, {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL2]: `2 ${literals.commons.confirmation}`,
    [constants.APPLICATION_STEP]: `2 ${literals.commons.confirmation}`
  });
  const appStepOtp = getAppStep('3', {
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL2]: `3 ${literals.commons.otp}`,
    [constants.APPLICATION_STEP]: `3 ${literals.commons.otp}`,
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  });
  const appCompleted = getAppCompletedRaw({
    ...fullData,
    [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
    [constants.APPLICATION_STEP]: literals.commons.successfulPage,
    [constants.APPLICATION_STATE]: literals.commons.finalized,
    [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
    [constants.APPLICATION_CUSTOM_FIELDS]: { bind: 'customFields' }
  });
  const operationError = getAdvancedFootprintWithLevel2(
    literals.errors.operationNotFinalized,
    {
      [constants.PAGE_PAGEINFO_ERRORPAGE]: literals.errors.operationNotFinalized,
      ...common, ...dynamicFingerprint,
      [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.patrimonial
    });
  const pageViewContractNotAvailable = getAdvancedFootprintWithLevel2(
    literals.commons.expiredSignatureProcess,
    {
      [constants.PAGE_PAGEINFO_LEVEL2]:
        literals.commons.expiredSignatureProcess,
      ...common,
      ...dynamicFingerprint
    }
  );

  [
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepConfirmation,
    appStepOtp,
    appCompleted,
    pageViewContractNotAvailable
  ].forEach((analytic) => {
    getAnalyticFeatureFlag(featureFlag, analytic);
  });

  getAnalyticFeatureFlag(analyticsFeatureFlagError, operationError);

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appStepConfirmation,
    appStepOtp,
    operationError,
    appCompleted,
    pageViewContractNotAvailable
  };
};
