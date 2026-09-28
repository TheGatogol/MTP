module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const { getOnClickStart, getPageVisit, getAppStartedWithLevel2, getAppStep, getAppCompletedRaw,
    getAdvancedFootprintWithLevel2, getAdvancedFootprintError, getAnalyticFeatureFlag, getAnalyticFeatureFlagError } = require('./common/_utils');
  const analyticsFeatureFlagPayrollAddressUpdate = 'postalAddressNominees';
  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.actions.manageAddress,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };
  const applicationUser = {
    ...common,
    [constants.APPLICATION_APPLICATION_NAME]: literals.actions.manageAddress,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_CUSTOM_FIELDS]: literals.commons.addAddress,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.sections.managePostalAddress,
    [constants.USER_SEGMENT_PROFILE]: literals.commons.massiveNominatedUser
  };
  const appOnClickStart = getOnClickStart(
    literals.commons.previousInformation, '', {
      ...applicationUser,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.previousInformation,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );
  const appPageVisit = getPageVisit(
    '1 ' + literals.commons.address, applicationUser
  );
  const _getAppStarted = (step = '') => {
    const obj = {
      ...applicationUser,
      [constants.APPLICATION_STEP]: step
    };
    return getAppStartedWithLevel2('1 ' + literals.commons.address, obj);
  };
  const appStep4 = getAppStep(
    '4', {
      ...applicationUser,
      [constants.APPLICATION_STEP]: literals.tag.fourthOtp,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.tag.fourthOtp
    }
  );
  const appCompleted = getAppCompletedRaw(
    {
      ...applicationUser,
      [constants.APPLICATION_OPERATION_NUMBER]: { bind: 'operationNumber' },
      [constants.APPLICATION_STATE]: literals.commons.ended,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage
    }
  );
  const footprintPreviousInformation = getAdvancedFootprintWithLevel2(
    literals.commons.previousInformation, {
      ...common,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );
  const footprintPrivacyNotice = getAdvancedFootprintWithLevel2(
    literals.commons.privacyAdvice, common
  );
  const footprintErrorService = getAdvancedFootprintError(
    literals.commons.serviceError, {
      ...common,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.serviceError
    }
  );
  [
    appOnClickStart,
    appPageVisit,
    _getAppStarted,
    appStep4,
    appCompleted,
    footprintPreviousInformation,
    footprintPrivacyNotice
  ].forEach(analytic => getAnalyticFeatureFlag(analyticsFeatureFlagPayrollAddressUpdate, analytic));
  getAnalyticFeatureFlagError(analyticsFeatureFlagPayrollAddressUpdate, footprintErrorService);
  return {
    appOnClickStart,
    appPageVisit,
    _getAppStarted,
    appStep4,
    appCompleted,
    footprintPreviousInformation,
    footprintPrivacyNotice,
    footprintErrorService
  };
};