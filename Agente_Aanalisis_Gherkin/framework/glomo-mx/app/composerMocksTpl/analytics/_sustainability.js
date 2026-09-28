module.exports = () => {
  const CONSTANTS = require('./common/_constants');
  const LITERALS = require('./common/_literals');
  const utils = require('./common/_utils');

  const GENERAL_COMMON = {
    [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.sections.sustainability,
    [CONSTANTS.PAGE_PAGEINFO_LEVEL2]: LITERALS.sections.carbonFootprint,
    [CONSTANTS.USER_USERSTATE]: LITERALS.commons.loggedIn,
    [CONSTANTS.PAGE_PAGEINFO_AREA]: LITERALS.commons.private,
    [CONSTANTS.PAGE_PAGEINFO_PAGESEGMENT]: LITERALS.commons.persons,
    [CONSTANTS.PAGE_PAGEINFO_PROJECTNAME]: LITERALS.sections.glomo,
    [CONSTANTS.PAGE_PAGEINFO_PAGEINTENT]: LITERALS.commons.information
  };

  const MENU_CLICK = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL1]: LITERALS.commons.global_position,
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: 'sostenibilidad menu lateral'
    }
  };

  const APP_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON
    }
  };

  const TRACKER_IDEA = {
    type: LITERALS.types.link,
    action: LITERALS.types.link,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      }
    }
  };

  const ALERT_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      }
    }
  };

  const RECOMMENDATION_CLICK = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: {
        bind: 'level4'
      },
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      }
    }
  };

  const IDEA_APP_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: {
        bind: 'level4'
      }
    }
  };

  const TRACKER_ACTION_APP_PAGE_VIEW = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      }
    }
  };

  const MORE_INFO_ITEM_CLICK = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: {
        bind: 'activityLink'
      }
    }
  };

  const RECOMMENDATION_SIMULABLE = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      }
    }
  };

  const ALERT_ACTION_CLICK = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      },
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: {
        bind: 'activityLink'
      }
    }
  };

  const ECODES_VIDEO = {
    type: LITERALS.types.link,
    action: LITERALS.actions.interactionLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: {
        bind: 'interactionLevel'
      }
    }
  };

  const ANALYTICS_LEVEL3 = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      }
    }
  };

  const INTERACTION_LINK = {
    type: LITERALS.types.link,
    action: LITERALS.actions.interactionLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.APPLICATION_INTERACTION_LEVEL]: {
        bind: 'interactionLevel'
      }
    }
  };

  const INTERNAL_LINK = {
    type: LITERALS.types.link,
    action: LITERALS.actions.internalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: {
        bind: 'pageInternalLink'
      }
    }
  };

  const SHARE = {
    type: LITERALS.types.link,
    action: LITERALS.actions.externalLink,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.PAGE_PAGEINFO_LEVEL4]: {
        bind: 'level4'
      },
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_URL]: {
        bind: 'linkUrl'
      },
      [CONSTANTS.PAGE_PAGEACTIVITY_LINK_NAME]: LITERALS.commons.share
    }
  };

  const SUGGESTION_NOTIFICATION_SHOWN = {
    type: LITERALS.types.view,
    action: LITERALS.actions.mark,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: {
        bind: 'internalCampaignLocation'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: {
        bind: 'internalCampaignCampaignFormat'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: {
        bind: 'internalCampaignCollectiveCode'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_NAME]: {
        bind: 'internalCampaignCampaignName'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: {
        bind: 'internalCampaignCampaignProduct'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {
        bind: 'internalCampaignCampaignProductCode'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_QUANTITY]: {
        bind: 'internalCampaignCampaignQuantity'
      }
    }
  };

  const SUGGESTION_NOTIFICATION_CLICK = {
    type: LITERALS.types.link,
    action: LITERALS.actions.clickThrough,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: {
        bind: 'internalCampaignLocation'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: {
        bind: 'internalCampaignCampaignFormat'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: {
        bind: 'internalCampaignCollectiveCode'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_NAME]: {
        bind: 'internalCampaignCampaignName'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: {
        bind: 'internalCampaignCampaignProduct'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {
        bind: 'internalCampaignCampaignProductCode'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_QUANTITY]: {
        bind: 'internalCampaignCampaignQuantity'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_SITE_ACTION_NAME]: {
        bind: 'siteActionName'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: {
        bind: 'eventName'
      }
    }
  };

  const SUGGESTION_NOTIFICATION_CLOSE = {
    type: LITERALS.types.link,
    action: LITERALS.actions.clickClose,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.INTERNAL_CAMPAIGN_LOCATION]: {
        bind: 'internalCampaignLocation'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_FORMAT]: {
        bind: 'internalCampaignCampaignFormat'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_COLLECTIVE_CODE]: {
        bind: 'internalCampaignCollectiveCode'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_NAME]: {
        bind: 'internalCampaignCampaignName'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT]: {
        bind: 'internalCampaignCampaignProduct'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_PRODUCT_CODE]: {
        bind: 'internalCampaignCampaignProductCode'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_QUANTITY]: {
        bind: 'internalCampaignCampaignQuantity'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_EVENT_NAME]: {
        bind: 'eventName'
      },
      [CONSTANTS.INTERNAL_CAMPAIGN_SITE_ACTION_NAME]: {
        bind: 'siteActionName'
      }
    }
  };

  const ON_CLICK_START = {
    type: LITERALS.types.link,
    action: LITERALS.actions.appOnClickStart,
    [CONSTANTS.DATALAYER_NAME]: {
      ...GENERAL_COMMON,
      [CONSTANTS.PAGE_PAGEINFO_LEVEL3]: {
        bind: 'level3'
      },
      [CONSTANTS.APPLICATION_CUSTOM_FIELDS]: {
        bind: 'customFields'
      },
      [CONSTANTS.APPLICATION_GLOBAL_APPLICATION]: {
        bind: 'globalApplication'
      },
      [CONSTANTS.APPLICATION_APPLICATION_NAME]: {
        bind: 'applicationName'
      },
      [CONSTANTS.APPLICATION_APPLICATION_TYPE]: {
        bind: 'applicationType'
      },
      [CONSTANTS.APPLICATION_STEP]: {
        bind: 'step'
      },
      [CONSTANTS.APPLICATION_FULLFILMENT]: {
        bind: 'fulfillmentModel'
      }
    }
  };

  [
    MENU_CLICK,
    APP_PAGE_VIEW,
    INTERACTION_LINK,
    INTERNAL_LINK,
    SUGGESTION_NOTIFICATION_SHOWN,
    SUGGESTION_NOTIFICATION_CLICK,
    SUGGESTION_NOTIFICATION_CLOSE,
    ALERT_PAGE_VIEW,
    IDEA_APP_PAGE_VIEW,
    MORE_INFO_ITEM_CLICK,
    ECODES_VIDEO,
    ALERT_ACTION_CLICK,
    ANALYTICS_LEVEL3,
    TRACKER_IDEA,
    RECOMMENDATION_CLICK,
    TRACKER_ACTION_APP_PAGE_VIEW,
    RECOMMENDATION_SIMULABLE,
    ON_CLICK_START
  ].forEach((analytic) => utils.addFeatureFlag(analytic, {
    'key': 'glomo.analytics.sustainability',
    'defaultValue': true
  }
  ));

  return {
    MENU_CLICK,
    APP_PAGE_VIEW,
    INTERACTION_LINK,
    INTERNAL_LINK,
    SUGGESTION_NOTIFICATION_SHOWN,
    SUGGESTION_NOTIFICATION_CLICK,
    SUGGESTION_NOTIFICATION_CLOSE,
    ALERT_PAGE_VIEW,
    IDEA_APP_PAGE_VIEW,
    MORE_INFO_ITEM_CLICK,
    ECODES_VIDEO,
    ALERT_ACTION_CLICK,
    ANALYTICS_LEVEL3,
    TRACKER_IDEA,
    RECOMMENDATION_CLICK,
    TRACKER_ACTION_APP_PAGE_VIEW,
    RECOMMENDATION_SIMULABLE,
    ON_CLICK_START,
    SHARE
  };
};
