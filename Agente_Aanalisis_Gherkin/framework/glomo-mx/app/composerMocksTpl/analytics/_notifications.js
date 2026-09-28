const CONSTANTS = require('./common/_constants');
const LITERALS = require('./common/_literals');
const UTILS = require('./common/_utils');

const COMMON = {
  [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.global_position,
  [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
  [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information,
  [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
  [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo
};

const PAGE_VIEW = {
  ...COMMON,
  [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
    bind: 'internalCampaignAttributes'
  }
};

const CLICK_THROUGH =  {
  ...COMMON,
  [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
    bind: 'internalCampaignAttributes'
  },
  [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClick,
  [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
    bind: 'siteActionName'
  }
};

const CLICK_CLOSE = {
  ...COMMON,
  [CONSTANTS.INTERNAL_CAMPAIGN_ATRIBUTTES]: {
    bind: 'internalCampaignAttributes'
  },
  [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: LITERALS.commons.intCmpClose,
  [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_SITE_ACTION_NAME]: {
    bind: 'siteActionName'
  }
};

const APP_ON_CLICK_START = {
  ...CLICK_THROUGH,
  [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
    bind: 'applicationGlobalApplication'
  },
  [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
    bind: 'applicationApplicationName'
  },
  [CONSTANTS.APPLICATION_APPLICATION_TYPE]: {
    bind: 'applicationApplicationType'
  },
  [CONSTANTS.APPLICATION_TYPOLOGY]: {
    bind: 'applicationTypology'
  },
  [CONSTANTS.APPLICATION_STEP]: {
    bind: 'applicationStep'
  },
  [CONSTANTS.APPLICATION_FULLFILMENT]: {
    bind: 'applicationFulfillmentModel'
  }
};

const pageViewDashboard = (flag) => UTILS.getAnalyticFeatureFlag(flag, UTILS.getAdvancedFootprint(PAGE_VIEW));
const bannerAppOnClickStart = (flag) => UTILS.getAnalyticFeatureFlag(flag, UTILS.getOnClickStart('', '', APP_ON_CLICK_START));
const bannerLinkClick = (flag) => UTILS.getAnalyticFeatureFlag(flag, UTILS.getClickThrough(CLICK_THROUGH));
const bannerCloseClick =  (flag) => UTILS.getAnalyticFeatureFlag(flag, UTILS.getClickClose(CLICK_CLOSE));

module.exports = () => {
  const CREDIT_BUREAU_PAGE_VIEW = pageViewDashboard('notification.creditBureauPageView');
  const CREDIT_BUREAU_APP_ON_CLICK_START = bannerAppOnClickStart('notification.creditBureauClick');
  const CREDIT_BUREAU_CLOSE_CLICK = bannerCloseClick('notification.creditBureauClose');
  const ASSISTANCE_MANAGER_PAGE_VIEW = pageViewDashboard('notification.assistanceManagerPageView');
  const ASSISTANCE_MANAGER_LINK_CLICK = bannerLinkClick('notification.assistanceManagerClick');
  const ASSISTANCE_MANAGER_CLOSE_CLICK = bannerCloseClick('notification.assistanceManagerClose');
  const NOTIFICATIONS_SETTINGS_PAGE_VIEW = pageViewDashboard('notification.notificationsSettingsPageView');
  const NOTIFICATIONS_SETTINGS_LINK_CLICK = bannerLinkClick('notification.notificationsSettingsClick');
  const NOTIFICATIONS_SETTINGS_CLOSE_CLICK = bannerCloseClick('notification.notificationsSettingsClose');
  return {
    CREDIT_BUREAU_PAGE_VIEW,
    CREDIT_BUREAU_APP_ON_CLICK_START,
    CREDIT_BUREAU_CLOSE_CLICK,
    ASSISTANCE_MANAGER_PAGE_VIEW,
    ASSISTANCE_MANAGER_LINK_CLICK,
    ASSISTANCE_MANAGER_CLOSE_CLICK,
    NOTIFICATIONS_SETTINGS_PAGE_VIEW,
    NOTIFICATIONS_SETTINGS_LINK_CLICK,
    NOTIFICATIONS_SETTINGS_CLOSE_CLICK
  };
};