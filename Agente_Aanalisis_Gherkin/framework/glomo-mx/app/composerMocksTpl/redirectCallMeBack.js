module.exports = CONFIG => {
  const { SPINNER: getSpinner, useNames, toUnderscoreCase } = require('./common/helpers/_utils');
  const PAGE_NAME = 'redirectCallMeBack';
  const sphericaPageUtils = require('../composerMocksTpl/common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const getAnalyticChannelName = channel => 'analytic_' + getChannelName(channel);
  const getComponentId = id => id + '-' + PAGE_NAME;
  const PAGES = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const localStorageApp = require('./common/_local-storage');
  const SPINNER = getSpinner(CONFIG);
  const ANALYTICS = require('./analytics/_redirectCallMeBack')();
  const { getPageViewCallMeBack, getPageViewClickToCall } = ANALYTICS;
  const {
    globalServices,
    nativeIos: isNativeIos = false,
    native: isNative = false
  } = CONFIG;
  const { host, requiredToken = 'tsec', versions } = globalServices;
  const {
    customersV1: customersApiVersion,
    notifications: notificationsApiVersion,
    pureCloud: pureCloudApiVersion
  } =  versions;
  const { analyticsCallMeBack } = require('./common/_redirectCallMeBack');
  const analyticsCmb = analyticsCallMeBack();
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      className: 'dark-blue-bg',
      extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [getChannelName('recalculate_header')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [ '__bridge_page_' + PAGE_NAME ]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('recalculate_header')]: {
            bind: 'init-page'
          },
          app_error_access_token: {
            bind: 'access-token-error'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const navigation = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'go-back-entrypoint',
      cellsConnections: {
        in: {
          [getChannelName('prepare_exit_to_operative')]: {
            bind: 'goBack'
          },
          [getChannelName('exit_page')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('exit_operative')]: {
            bind: 'go-back-entrypoint',
            backStep: true
          }
        }
      }
    }
  };
  const widget = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-widget-call-me-back',
    tagSpherica: 'bbva-widget-call-me-back-spherica',
    familyPath: '@glomo-web-components/bbva-widget-call-me-back',
    familyPathSpherica: '@glomo-web-components/bbva-widget-call-me-back-spherica',
    render: 'litElement',
    properties: {
      id: getComponentId('widget'),
      host,
      customersApiVersion,
      pureCloudApiVersion,
      notificationsApiVersion,
      native: isNative,
      requiredToken,
      directory: CONFIG.directory,
      startScheduleTime: CONFIG.startScheduleTime,
      endScheduleTime: CONFIG.endScheduleTime,
      callType: CONFIG.callType,
      genericPhoneNumber: CONFIG.genericPhoneNumber,
      cellsConnections: {
        in: {
          global_storage_get_call_me_back_success: {
            bind: 'dataLocalStorage'
          },
          global_set_app_settings: {
            bind: 'appSettingsParams'
          },
          global_call_me_back_navigation: {
            bind: 'configOperative'
          }
        },
        out: {
          global_set_in_storage: {
            bind: 'set-call-me-back-in-local-storage'
          },
          global_action_launcher_dialer: {
            bind: 'make-call'
          },
          [getChannelName('prepare_exit_to_operative')]: {
            bind: 'close-operative'
          },
          [getChannelName('show_modal')]: {
            bind: 'show-modal'
          },
          [getChannelName('exit_page')]: {
            bind: 'exit-call-me-back-page',
            backStep: true
          },
          [getChannelName('exit_page')]: {
            bind: 'exit-call-me-back-page'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: isNativeIos
    }
  };
  analyticsCmb.properties.cellsConnections.in = {};
  analyticsCmb.properties.cellsConnections.out = {};
  analyticsCmb.properties.cellsConnections.in = {
    [getChannelName('show_modal')]: {
      bind: 'fireModalAnalytic'
    }
  };
  analyticsCmb.properties.cellsConnections.out = {
    [getAnalyticChannelName('cmb_page_view_request_received')]: {
      bind: 'analytic-call-me-back-request-received',
      analytics: getPageViewCallMeBack('REQUEST_RECEIVED')
    },
    [getAnalyticChannelName('cmb_page_view_schedule_call')]: {
      bind: 'analytic-call-me-back-schedule-call',
      analytics: getPageViewCallMeBack('SCHEDULE_CALL')
    },
    [getAnalyticChannelName('cmb_page_view_schedule_call_request_received')]: {
      bind: 'analytic-call-me-back-schedule-call-request-received',
      analytics: getPageViewCallMeBack('SCHEDULE_CALL_REQUEST_RECEIVED')
    },
    [getAnalyticChannelName('cmb_page_view_previous_request_received')]: {
      bind: 'analytic-call-me-back-previous-request-received',
      analytics: getPageViewCallMeBack('PREVIOUS_REQUEST_RECEIVED')
    },
    [getAnalyticChannelName('ctc_page_view_unavailable')]: {
      bind: 'analytic-remote-manager-unavailable',
      analytics: getPageViewClickToCall('UNAVAILABLE')
    },
    [getAnalyticChannelName('ctc_page_view_schedule_call')]: {
      bind: 'analytic-remote-manager-schedule-call',
      analytics: getPageViewClickToCall('SCHEDULE_CALL')
    },
    [getAnalyticChannelName('ctc_page_view_schedule_call_request_received')]: {
      bind: 'analytic-remote-manager-schedule-call-request-received',
      analytics: getPageViewClickToCall('SCHEDULE_CALL_REQUEST_RECEIVED')
    },
    [getAnalyticChannelName('ctc_page_view_previous_request_received')]: {
      bind: 'analytic-remote-manager-previous-request-received',
      analytics: getPageViewClickToCall('PREVIOUS_REQUEST_RECEIVED')
    }
  };
  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/call-me-back'
    },
    pages: PAGES,
    template,
    components: [
      SPINNER,
      lifeCycle,
      navigation,
      widget,
      analyticsCmb
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'call_me_back' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
