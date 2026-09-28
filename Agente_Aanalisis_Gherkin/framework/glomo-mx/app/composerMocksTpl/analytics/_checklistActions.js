const constants = require('./common/_constants');
const literals = require('./common/_literals');
const  {
  getAnalyticFeatureFlag,
  getAppOnClickStartLevel2,
  getAdvancedFootprintWithLevel2,
  getAdvancedFootprintErrorLevel2
} = require('./common/_utils');

module.exports = () => {
  const commonArea = {
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.checklistActions.getYourAccountUpAndRunning,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo,
    [constants.USER_DEVICE_ROOT]: literals.commons.noRoot
  };
  const applicationArea = {
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.autogestion,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.checklistActions.accounts,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.fulfillmentOn,
    [constants.APPLICATION_APPLICATION_NAME]: {
      bind: 'applicationName'
    },
    [constants.APPLICATION_STEP]: {
      bind: 'applicationStep'
    }
  };
  const appOnClickStart = () => {
    return getAnalyticFeatureFlag('checklistActions.startChallenges',
      getAppOnClickStartLevel2(
        literals.commons.getYourAccountUpAndRunning,
        literals.sections.dashboard,
        {
          ...commonArea,
          ...applicationArea
        }
      )
    );
  };
  const appPageViewOnboarding = () => {
    return getAnalyticFeatureFlag('checklistActions.footprints',
      getAdvancedFootprintWithLevel2(
        { bind: 'onboardingLevel' },
        { ...commonArea }
      )
    );
  };
  const appPageViewLanding = () => {
    return getAnalyticFeatureFlag('checklistActions.footprints',
      getAdvancedFootprintWithLevel2(
        literals.sections.dashboard,
        { ...commonArea }
      )
    );
  };
  const appBadgeEarnModal = () => {
    return getAnalyticFeatureFlag('checklistActions.footprints',
      getAdvancedFootprintWithLevel2(
        { bind: 'earnBadge' },
        { ...commonArea }
      )
    );
  };
  const appErrorModal = () => {
    return getAnalyticFeatureFlag('checklistActions.errors',
      getAdvancedFootprintErrorLevel2(
        literals.commons.getYourAccountUpAndRunning,
        { bind: 'errorPage' },
        { ...commonArea }
      )
    );
  };

  return {
    appOnClickStart,
    appPageViewOnboarding,
    appPageViewLanding,
    appBadgeEarnModal,
    appErrorModal
  };
};
