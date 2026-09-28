// eslint-disable-next-line no-unused-vars
module.exports = CONFIG => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const UTILS = require('./common/_utils');
  const _getAdvancedFootPrint = (...data) => UTILS.getAdvancedFootprint(...data);
  const _setFeatureFlags = (analytic, featureFlag) => (UTILS.addFeatureFlag(analytic, featureFlag));

  const ANALYTICS_PROACTIVITY_JOURNEY_FEATURE_FLAG = {
    key: 'glomo.analytics.proactivityJourney',
    defaultValue: true
  };

  const ANALYTICS_PFM_WITHOUT_CAMPAIGNS_FEATURE_FLAG = {
    key: 'glomo.analytics.proactivityJourneyOff',
    defaultValue: false
  };

  const ANALYTICS_PROACTIVITY_JOURNEY_FEATURE_FLAG_ACCOUNT_OVERVIEW = {
    key: 'glomo.analytics.account',
    value: true
  };

  const COMMON_DATA = {
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
    [CONSTANTS.PAGE_PAGEINFO_CHANNEL]: LITERALS.commons.online,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.logado
  };

  const COMMON_DATA_MESSAGE_PFM = {
    ...COMMON_DATA,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.pfm,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.pfmDashboard,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.sections.myMoney
  };

  const COMMON_DATA_MESSAGE_ACCOUNT_OVERVIEW = {
    ...COMMON_DATA,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.account,
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'campaigns'
    }
  };

  const CLICKS_LITERALS = {
    'CLOSE': LITERALS.commons.intCmpClose,
    'LINK': LITERALS.commons.intCmpClick
  };

  const _getClick = (clickType) => ({
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'campaigns'
    },
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: CLICKS_LITERALS[clickType],
    [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
      bind: 'siteActionName'
    }
  });

  const MESSAGE_PFM_DASHBOARD_PAGE_VIEW = _getAdvancedFootPrint({
    ...COMMON_DATA_MESSAGE_PFM,
    [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
      bind: 'campaigns'
    }
  });

  _setFeatureFlags(MESSAGE_PFM_DASHBOARD_PAGE_VIEW, ANALYTICS_PROACTIVITY_JOURNEY_FEATURE_FLAG);

  const MESSAGE_PFM_DASHBOARD_PAGE_VIEW_WITHOUT_CAMPAIGNS = _getAdvancedFootPrint({ ...COMMON_DATA_MESSAGE_PFM });

  _setFeatureFlags(MESSAGE_PFM_DASHBOARD_PAGE_VIEW_WITHOUT_CAMPAIGNS, ANALYTICS_PFM_WITHOUT_CAMPAIGNS_FEATURE_FLAG);

  const MESSAGE_PFM_DASHBOARD_CLICK_LINK = UTILS.getClickThrough({
    ...COMMON_DATA_MESSAGE_PFM,
    ..._getClick('LINK')
  });

  _setFeatureFlags(MESSAGE_PFM_DASHBOARD_CLICK_LINK, ANALYTICS_PROACTIVITY_JOURNEY_FEATURE_FLAG);

  const MESSAGE_ACCOUNT_OVERVIEW_CLICK_LINK = UTILS.getClickThrough({
    ...COMMON_DATA_MESSAGE_ACCOUNT_OVERVIEW,
    ..._getClick('LINK')
  });

  _setFeatureFlags(MESSAGE_ACCOUNT_OVERVIEW_CLICK_LINK, ANALYTICS_PROACTIVITY_JOURNEY_FEATURE_FLAG_ACCOUNT_OVERVIEW);

  const MESSAGE_PFM_DASHBOARD_CLICK_CLOSE = UTILS.getClickClose({
    ...COMMON_DATA_MESSAGE_PFM,
    ..._getClick('CLOSE')
  });

  _setFeatureFlags(MESSAGE_PFM_DASHBOARD_CLICK_CLOSE, ANALYTICS_PROACTIVITY_JOURNEY_FEATURE_FLAG);

  const MESSAGE_ACCOUNT_OVERVIEW_CLICK_CLOSE = UTILS.getClickClose({
    ...COMMON_DATA_MESSAGE_ACCOUNT_OVERVIEW,
    ..._getClick('CLOSE')
  });

  _setFeatureFlags(MESSAGE_ACCOUNT_OVERVIEW_CLICK_CLOSE, ANALYTICS_PROACTIVITY_JOURNEY_FEATURE_FLAG_ACCOUNT_OVERVIEW);

  const RELEVANT_FACT_DETAIL_VIEW = _getAdvancedFootPrint({
    ...COMMON_DATA,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.improveYourFinancialHealth
  });

  const RELEVANT_FACT_DETAIL_CLICK = UTILS.getOCAccess({ bind: 'applicationStep' }, LITERALS.commons.online, {
    ...COMMON_DATA,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.improveYourFinancialHealth,
    [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
      bind: 'globalApplication'
    },
    [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
      bind: 'applicationName'
    },
    [CONSTANTS.APPLICATION_APPLICATION_TYPE]: {
      bind: 'applicationType'
    }
  });

  return {
    MESSAGE_ACCOUNT_OVERVIEW_CLICK_CLOSE,
    MESSAGE_ACCOUNT_OVERVIEW_CLICK_LINK,
    MESSAGE_PFM_DASHBOARD_CLICK_CLOSE,
    MESSAGE_PFM_DASHBOARD_CLICK_LINK,
    MESSAGE_PFM_DASHBOARD_PAGE_VIEW,
    MESSAGE_PFM_DASHBOARD_PAGE_VIEW_WITHOUT_CAMPAIGNS,
    RELEVANT_FACT_DETAIL_CLICK,
    RELEVANT_FACT_DETAIL_VIEW
  };
};
