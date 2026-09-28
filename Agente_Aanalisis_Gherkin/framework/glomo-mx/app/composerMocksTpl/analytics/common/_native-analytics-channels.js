/* eslint-disable new-cap, no-shadow */
/**
 * Channel declaration for native analytics.
 * @example
 * - Native event: {id: 'welcome_screen'}
 * - Out Event: `${id}-send-analytic`
 * {
 *   global_native_welcome_analytic_page_view: {
 *       bind: 'welcome-screen-send-analytic',
 *       analytics: WELCOME_ANALYTICS.PAGE_VIEW
 *   }
 * }
 */

/**
 * @return Channels for welcome analytics
 */
const WELCOME_CHANNELS = () => {
  const WELCOME_ANALYTICS = require('../_welcome');
  return {
    global_native_welcome_analytic_page_view: {
      bind: 'welcome_screen-send-analytic',
      analytics: WELCOME_ANALYTICS.PAGE_VIEW
    },
    global_native_welcome_analytic_carousel: {
      bind: 'welcome_carousel_screen-send-analytic',
      analytics: WELCOME_ANALYTICS.CAROUSEL
    }
  };
};

const WELCOME_USER_DISTRIBUTION_CHANNELS = () => {
  const WELCOME_USER_DISTRIBUTION_ANALYTICS = require('../_welcomeUserDistribution');
  return {
    global_native_welcome_user_distribution_analytic_page_view_welcome: {
      bind: 'welcome_user_distribution_new-send-analytic',
      analytics: WELCOME_USER_DISTRIBUTION_ANALYTICS.PAGE_VIEW_WELCOME
    },
    global_native_welcome_user_distribution_analytic_internal_link: {
      bind: 'welcome_user_distribution_access-send-analytic',
      analytics: WELCOME_USER_DISTRIBUTION_ANALYTICS.INTERNAL_LINK
    },
    global_native_welcome_user_distribution_analytic_page_view_cached_user: {
      bind: 'welcome_user_distribution_cached-send-analytic',
      analytics: WELCOME_USER_DISTRIBUTION_ANALYTICS.PAGE_VIEW_CACHED_USER
    }
  };
};

const LANDING_CHANNELS = (CONFIG) => {
  const IGLOMO_LANDING_ANALYTICS = require('../_landing')(CONFIG);
  return {
    global_native_landing_screen_analytics: {
      bind: 'landing_screen-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_SCREEN
    },
    global_native_landing_blocked_screen_analytics: {
      bind: 'landing_blocked_screen-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_BLOCKED_SCREEN
    },
    global_native_landing_force_update_screen_analytics: {
      bind: 'landing_force_update_screen-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_FORCE_UPDATE_SCREEN
    },
    global_native_landing_shortcut_link_analytics: {
      bind: 'landing_shortcut_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_SHORTCUT_LINK
    },
    global_native_landing_external_shortcut_link_analytics: {
      bind: 'landing_external_shortcut_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_EXTERNAL_SHORTCUT_LINK
    },
    global_native_landing_link_analytics: {
      bind: 'landing_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_LINK
    },
    global_native_landing_interaction_link_analytics: {
      bind: 'landing_interaction_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_INTERACTION_LINK
    },
    global_native_landing_external_link_analytics: {
      bind: 'landing_external_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_EXTERNAL_LINK
    },
    global_native_landing_ecommerce_link_analytics: {
      bind: 'landing_ecommerce_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_ECOMMERCE_LINK
    },
    global_native_landing_wapp_qr_link_analytics: {
      bind: 'landing_wapp_qr_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_WAPP_QR_LINK
    },
    global_native_landing_customize_card_interaction_link_analytics: {
      bind: 'landing_customize_card_interaction_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_CUSTOMIZE_CARD_INTERACTION_LINK
    },
    global_native_landing_campaign_start_link_analytics: {
      bind: 'landing_campaign_start_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_CAMPAIGN_START_LINK
    },
    global_native_landing_campaign_link_analytics: {
      bind: 'landing_campaign_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_CAMPAIGN_LINK
    },
    global_native_landing_campaign_close_link_analytics: {
      bind: 'landing_campaign_close_link-send-analytic',
      analytics: IGLOMO_LANDING_ANALYTICS.LANDING_CAMPAIGN_CLOSE_LINK
    }
  };
};
const LANDING_PUBLIC_CHANNELS = (CONFIG) => {
  const IGLOMO_LANDING_PUBLIC_ANALYTICS = require('../_landingPublic')(CONFIG);
  return {
    global_native_landing_public_screen_analytics: {
      bind: 'landing_public_screen-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_SCREEN
    },
    global_native_landing_public_blocked_screen_analytics: {
      bind: 'landing_public_blocked_screen-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_BLOCKED_SCREEN
    },
    global_native_landing_public_force_update_screen_analytics: {
      bind: 'landing_public_force_update_screen-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_FORCE_UPDATE_SCREEN
    },
    global_native_landing_public_shortcut_link_analytics: {
      bind: 'landing_public_shortcut_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_SHORTCUT_LINK
    },
    global_native_landing_public_external_shortcut_link_analytics: {
      bind: 'landing_public_external_shortcut_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_EXTERNAL_SHORTCUT_LINK
    },
    global_native_landing_public_link_analytics: {
      bind: 'landing_public_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_LINK
    },
    global_native_landing_public_interaction_link_analytics: {
      bind: 'landing_public_interaction_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_INTERACTION_LINK
    },
    global_native_landing_public_external_link_analytics: {
      bind: 'landing_public_external_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_EXTERNAL_LINK
    },
    global_native_landing_public_campaign_start_link_analytics: {
      bind: 'landing_public_campaign_start_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_CAMPAIGN_START_LINK
    },
    global_native_landing_public_campaign_link_analytics: {
      bind: 'landing_public_campaign_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_CAMPAIGN_LINK
    },
    global_native_landing_public_campaign_close_link_analytics: {
      bind: 'landing_public_campaign_close_link-send-analytic',
      analytics: IGLOMO_LANDING_PUBLIC_ANALYTICS.LANDING_PUBLIC_CAMPAIGN_CLOSE_LINK
    }
  };
};

const MENU_CHANNELS = {
  global_native_menu_item_clicked_analytics: {
    bind: 'menu_item_clicked-send-analytic'
  }
};

const STAND_IN_ERROR_ACTIVATION = () => {
  const ALWAYS_ON = require('../_standInAlwaysOn')();
  return {
    global_native_stand_in_error_activation: {
      bind: 'stand_in_activation_error-send-analytic',
      analytics: ALWAYS_ON.STAND_IN_ACTIVATION_ERROR
    }
  };
};

const SINGLE_APP_CHANNELS = () => {
  const SINGLE_APP_CHANNELS = require('../_singleApp')();
  return {
    global_native_single_app_analytics: {
      bind: 'web_user_type_option_selected-send-analytic',
      analytics: SINGLE_APP_CHANNELS._getNativeAdvancedFootprint(
        {
          pageSegment: { bind: 'page_segment' },
          interactionLevel: { bind: 'interaction_level' },
          siteAppName: { bind: 'site_app_name'},
          userSegmentGlobal: { bind: 'user_segment_global' }
        }
      )
    }
  };
};

const FORCE_TOUCH_CHANNELS = () => {
  const forceTouchAnalytics = require('../_forceTouch')();
  return {
    global_native_external_shortcut_link_transfer_analytics: {
      bind: 'external_shortcut_link_transfer-send-analytic',
      analytics: forceTouchAnalytics.deeplinkTransfers
    },
    global_native_external_shortcut_link_rejected_card_analytics: {
      bind: 'external_shortcut_link_rejected_card-send-analytic',
      analytics: forceTouchAnalytics.deeplinkRejectCard
    },
    global_native_external_shortcut_link_pay_services_analytics: {
      bind: 'external_shortcut_link_pay_services-send-analytic',
      analytics: forceTouchAnalytics.deeplinkPayServices
    },
    global_native_external_shortcut_link_withdrawal_without_cards_analytics: {
      bind: 'external_shortcut_link_withdrawal_without_cards-send-analytic',
      analytics: forceTouchAnalytics.deeplinkWithdrawalWithoutCards
    },
    global_native_external_shortcut_link_top_up_analytics: {
      bind: 'external_shortcut_link_top_up-send-analytic',
      analytics: forceTouchAnalytics.deeplinkTopUp
    }
  };
};

const codiChannels = () => {
  const codiAnalytics = require('../_codiNative');
  return {
    global_native_codi_request_money_phone_analytic: {
      bind: 'codi_request_money_phone-send-analytic',
      analytics: codiAnalytics._commonLevels('p2pRequestOnClickStart')
    },
    global_native_codi_notification_request_payment_rejected_analytic: {
      bind: 'codi_notification_request_payment_rejected-send-analytic',
      analytics: codiAnalytics.p2pRequestFootprint
    },
    global_native_codi_notification_request_payment_analytic: {
      bind: 'codi_notification_request_payment-send-analytic',
      analytics: codiAnalytics.sendP2pRequestedAppOnClickStart
    },
    global_native_codi_scanner_qr_start_analytic: {
      bind: 'codi_scanner_qr_start-send-analytic',
      analytics: codiAnalytics._commonLevels('p2pQrPaymentsFootprint')
    },
    global_native_codi_request_money_qr_analytic: {
      bind: 'codi_request_money_qr-send-analytic',
      analytics: codiAnalytics._commonLevels('p2pQrRequestAppOnClickStart')
    }
  };
};

module.exports = (CONFIG) => ({
  ...WELCOME_CHANNELS(),
  ...WELCOME_USER_DISTRIBUTION_CHANNELS(),
  ...LANDING_CHANNELS(CONFIG),
  ...LANDING_PUBLIC_CHANNELS(CONFIG),
  ...MENU_CHANNELS,
  ...STAND_IN_ERROR_ACTIVATION(),
  ...SINGLE_APP_CHANNELS(),
  ...FORCE_TOUCH_CHANNELS(),
  ...codiChannels()
});
