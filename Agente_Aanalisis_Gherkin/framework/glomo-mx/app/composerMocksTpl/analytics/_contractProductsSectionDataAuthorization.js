module.exports = () => {
  const constants = require('./common/_constants');
  const literals = require('./common/_literals');
  const {
    getAnalyticFeatureFlag,
    getAnalyticFeatureFlagError,
    getAppStartedWithLevel2,
    getOCAccess,
    getAppPageVisitLevel2,
    getAdvancedFootprintWithLevel2,
    getInteractionLink
  } = require('./common/_utils');
  const featureFlagConsulting = 'cardsOnDemand';

  const commonFooTaghter = {
    [constants.VERSION]: '20190718_4.0',
    [constants.PAGE_PAGEINFO_PAGESEGMENT]: literals.commons.persons,
    [constants.PAGE_PAGEINFO_AREA]: literals.commons.private,
    [constants.PAGE_PAGEINFO_SERVER]: 'window.location.hostname',
    [constants.PAGE_PAGEINFO_PROJECTNAME]: literals.sections.glomo
  };

  const common = {
    ...commonFooTaghter,
    [constants.APPLICATION_FULLFILMENT]: literals.commons.online,
    [constants.APPLICATION_APPLICATION_NAME]: literals.commons.dataAuth,
    [constants.APPLICATION_APPLICATION_TYPE]: literals.commons.selfManagement,
    [constants.APPLICATION_GLOBAL_APPLICATION]: literals.commons.cardsOnDemand
  };

  const commonInfoLevel = {
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.information,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.dataAuth
  };

  const commonInfoLevelPage = {
    ...commonInfoLevel,
    [constants.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' }
  };

  const commonStartedInfo = {
    ...common,
    ...commonInfoLevel
  };

  const commonPageVisit = getAppPageVisitLevel2(`1 ${literals.commons.dataQuery}`, {
    ...common,
    ...commonInfoLevelPage,
    [constants.APPLICATION_STATE]: literals.commons.init
  });

  const commonPageViewConditions = getAdvancedFootprintWithLevel2('condiciones', {
    ...commonFooTaghter,
    ...commonInfoLevelPage
  });

  const commonPageViewPrivacy = getAdvancedFootprintWithLevel2(literals.commons.privacyAdvice, {
    ...commonFooTaghter,
    ...commonInfoLevelPage
  });

  const commonInteractionLink = getInteractionLink('autorizo la consulta de mis datos', {
    ...commonFooTaghter,
    ...commonInfoLevelPage,
    [constants.PAGE_PAGEINFO_LEVEL2]: `1 ${literals.commons.dataQuery}`
  });

  const commonStartedConditions = getAppStartedWithLevel2(`1 ${literals.commons.dataQuery}`, {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'revisa las condiciones'
  });

  const commonStartedPrivacy = getAppStartedWithLevel2(`1 ${literals.commons.dataQuery}`, {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'consulta el aviso de privacidad'
  });

  const commonStartedAuthorization = getAppStartedWithLevel2(`1 ${literals.commons.dataQuery}`, {
    ...commonStartedInfo,
    [constants.APPLICATION_STEP]: 'autorizar'
  });

  const commonCompleted = {
    type: literals.types.view,
    action: literals.actions.appCompleted,
    [constants.DATALAYER_NAME]: {
      ...common,
      ...commonInfoLevelPage,
      [constants.PAGE_PAGEINFO_LEVEL2]: literals.commons.successfulPage,
      [constants.APPLICATION_STATE]: literals.commons.ended,
      [constants.APPLICATION_STEP]: literals.commons.successfulPage
    }
  };

  const errorCompleted = getAdvancedFootprintWithLevel2('error operacion no realizada', {
    ...common,
    ...commonInfoLevelPage,
    [constants.PAGE_PAGEINFO_ERRORPAGE]: 'error operacion no realizada'
  });

  const appOnClickStartData = getOCAccess(literals.commons.opportunities, literals.commons.online, {
    ...common,
    [constants.PAGE_PAGEINFO_LEVEL1]: literals.commons.opportunities,
    [constants.PAGE_PAGEINFO_PAGEINTENT]: literals.commons.landingPage,
    [constants.PAGE_PAGEINFO_PAGENAME]: { bind: 'pageName' },
    [constants.APPLICATION_STATE]: literals.commons.init,
    [constants.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    },
    [constants.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [constants.APPLICATION_APPLICATION_NAME]: {
      bind: 'name'
    },
    [constants.APPLICATION_APPLICATION_TYPE]: {
      bind: 'type'
    },
    [constants.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'offers'
    }
  });

  const APP_ON_CLICK_START = getAnalyticFeatureFlag(featureFlagConsulting, appOnClickStartData);
  const pageVisitCommon = getAnalyticFeatureFlag(featureFlagConsulting, commonPageVisit);
  const startedConditions = getAnalyticFeatureFlag(featureFlagConsulting, commonStartedConditions);
  const startedPrivacy = getAnalyticFeatureFlag(featureFlagConsulting, commonStartedPrivacy);
  const startedAutorizar = getAnalyticFeatureFlag(featureFlagConsulting, commonStartedAuthorization);
  const completed = getAnalyticFeatureFlag(featureFlagConsulting, commonCompleted);
  const erroPage = getAnalyticFeatureFlagError(featureFlagConsulting, errorCompleted);
  const pageViewConditions = getAnalyticFeatureFlag(featureFlagConsulting, commonPageViewConditions);
  const pageViewPrivacy = getAnalyticFeatureFlag(featureFlagConsulting, commonPageViewPrivacy);
  const interactionLinkCheck = getAnalyticFeatureFlag(featureFlagConsulting, commonInteractionLink);

  return {
    APP_ON_CLICK_START,
    pageVisitCommon,
    startedConditions,
    startedPrivacy,
    startedAutorizar,
    completed,
    erroPage,
    pageViewConditions,
    pageViewPrivacy,
    interactionLinkCheck
  };
};