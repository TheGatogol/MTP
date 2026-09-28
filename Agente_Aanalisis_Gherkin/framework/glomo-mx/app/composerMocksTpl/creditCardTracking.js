'use strict';
module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'creditCardTracking';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_creditCardTracking.js');
  const COUNTRY = utils.getCountry();
  const prefixPage = utils.createPrefixFromPageName(
    PAGE_NAME
  );
  const [ getChannelName ] = utils.useNames(prefixPage);
  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/credit-card-tracking'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        headerHeight: 0,
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        headerFixed: true,
        disableEdgeSwipe: true,
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: []
  };
  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME + '_init_page']: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const bbvaCreditCardTracking = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-feature-card-tracking-mx',
    familyPath: '@glomo-web-components/bbva-feature-card-tracking-mx',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      versionCards: CONFIG.globalServices.versions.cardsV1,
      versionCustomersAddresses: CONFIG.globalServices.versions.customersAddresses,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      phoneNumberBbvaLine: CONFIG.phoneNumberBbvaLine,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'reset'
          },
          global_card_detail_data_success_channel: {
            bind: 'setDataPrefix'
          },
          sign_modal_cancelled: {
            bind: 'closeModalOTP'
          },
          global_sign_token_standby_timer_succes: {
            bind: 'closeModalTimerSuccess'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          }
        },
        out: {
          [getChannelName('return_card_detail')]: {
            bind: 'go-back-credit-card',
            backStep: true
          },
          [getChannelName('analytics_initial_event')]: {
            bind: 'analytics-fire-fingerprint-tracking-tdc'
          },
          [getChannelName('action_launcher_dialer')]: {
            bind: 'call-bbva-line'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };
  const managerAnalytics = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-technical-core',
    familyPath: '@glomo-web-components/bbva-analyticmanager-technical-core',
    render: 'litElement',
    type: 'DM',
    properties: {
      pageName: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('analytics_initial_event')]: {
            bind: 'firePageView'
          }
        },
        out: {
          [getChannelName('tracking_completed')]: {
            bind: 'analytics-page-view-card-tracking-completed',
            analytics: ANALYTICS.TRACKING_CREDIT_CARD
          },
          [getChannelName('tracking_error')]: {
            bind: 'analytics-page-view-card-tracking-error',
            analytics: ANALYTICS.TRACKING_CREDIT_CARD_ERROR
          }
        }
      }
    }
  };
  const mobileActionLauncher = {
    zone: 'app__main',
    tag: 'cells-mobile-action-launcher',
    type: 'CC',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('action_launcher_dialer')]: {
            bind: 'openDialer'
          }
        }
      }
    }
  };
  base.components.push(
    cellsHandleLifeCycle,
    bbvaCreditCardTracking,
    managerAnalytics,
    mobileActionLauncher
  );
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-card-tracking-mx');
  return base;
};
