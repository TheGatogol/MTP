module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAppStep,
    getAdvancedFootprintErrorLevel2,
    getOnClickStart,
    getPageVisit,
    getAppStartedWithLevel2,
    getAdvancedFootprintWithLevel2,
    getAppCompletedRaw,
    getAnalyticFeatureFlag,
    getAnalyticFeatureFlagError
  } = require('./common/_utils');

  const common = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.public,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.general,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.globalApplication.accessKeyRecovery,
    [constants.APPLICATION_APPLICATION_NAME]: literals.applicationName.forgottenPassword,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.operative,
    [constants.APPLICATION_FULLFILMENT]: [ literals.commons.fulfillmentOn ],
    [constants.USER_USERSTATE]: literals.commons.noLogado
  };

  const commonBindings = {
    [constants.APPLICATION_TYPOLOGY]: { bind: 'typology' },
    [constants.APPLICATION_PROCESS]: { bind: 'process' },
    [constants.USER_SEGMENT_PROFILE]: { bind: 'profile' }
  };

  const appOnClickStart = getOnClickStart(
    literals.commons.login,
    literals.commons.home,
    {
      ...common,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.home,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.login
    }
  );

  const appPageVisit = getPageVisit(
    `1 ${literals.commons.resetYourPassword}`,
    {
      ...common,
      ...commonBindings,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.forgottenPassword,
      [constants.QUALIFIED_VISITS]: false
    }
  );

  const appStarted = getAppStartedWithLevel2(
    `1 ${literals.commons.resetYourPassword}`,
    {
      ...common,
      ...commonBindings,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.forgottenPassword,
      [constants.APPLICATION_STEP]: { bind: 'step' }
    }
  );

  const appCompleted = getAppCompletedRaw(
    {
      ...common,
      ...commonBindings,
      [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.forgottenPassword,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage,
      [constants.APPLICATION_STATE]: literals.commons.finalized,
      [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
    }
  );

  function _getAppStep(step, value) {
    return getAppStep(
      step,
      {
        ...common,
        ...commonBindings,
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.forgottenPassword,
        [constants.PAGE_PAGEINFO_LEVEL2]: `${step} ${value}`,
        [constants.APPLICATION_STEP]: `${step} ${value}`,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information
      }
    );
  }

  function _errorGetAdvancedFootprintErrorLevel2(error) {
    return getAdvancedFootprintErrorLevel2(
      literals.commons.forgottenPassword,
      error,
      {
        ...common,
        ...commonBindings,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction
      }
    );
  }

  function _getPageView(value) {
    return getAdvancedFootprintWithLevel2(
      value,
      {
        ...common,
        ...commonBindings,
        [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.transaction,
        [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.forgottenPassword
      }
    );
  }

  function _errorGetAdvancedFootprintErrorLevel2WithFeatureFlag(flagName, error) {
    return getAnalyticFeatureFlagError(flagName, _errorGetAdvancedFootprintErrorLevel2(error));
  }

  [
    appOnClickStart,
    appPageVisit,
    appStarted,
    appCompleted,
    _getAppStep,
    _getPageView
  ].forEach(analytic => {
    getAnalyticFeatureFlag(literals.featureFlag.accessKeyRecovery, analytic);
  });

  return {
    appOnClickStart,
    appPageVisit,
    appStarted,
    appCompleted,
    _getAppStep,
    _getPageView,
    _errorGetAdvancedFootprintErrorLevel2WithFeatureFlag
  };
};