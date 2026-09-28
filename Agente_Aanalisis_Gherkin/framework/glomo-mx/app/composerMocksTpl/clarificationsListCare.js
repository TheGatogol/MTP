'use strict';

const utils = require('./common//helpers/_utils');

const { SPINNERSPHERICA: getSpinner, useNames, toUnderscoreCase } = utils;

const PAGE_NAME = 'clarificationsListCare';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();

module.exports = CONFIG => {

  const ANALYTICSTRACKING = require('./analytics/_clarificationsTrackingCare')(CONFIG);
  const ANALYTICSLIST = require('./analytics/_clariticationsListCare')(CONFIG);
  /* Common */
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const TOKEN = CONFIG.globalServices.requiredToken;
  const isNativeIos = CONFIG.nativeIos || false;
  const spinner = getSpinner(CONFIG);
  spinner.properties = spinner.propertiesSpherica;
  delete spinner.propertiesSpherica;

  /* Spinner */
  spinner.properties.className = 'solid-spinner';
  spinner.properties.open = true;
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    [getChannelName('INIT_PAGE')]: {
      bind: 'hide'
    },
    [getChannelName('CLARIFICATIONS_CASE_SELECTED')]: {
      bind: 'show'
    },
    [getChannelName('CLARIFICATIONS_REQUEST')]: {
      bind: 'show'
    },
    [getChannelName('RETRY_REQUEST_GET')]: {
      bind: 'show'
    },
    [getChannelName('WITHOUT_CONTENT')]: {
      bind: 'hide'
    },
    [getChannelName('CLARIFICATIONS_FINISH')]: {
      bind: 'hide'
    },
    [getChannelName('CLARIFICATIONS_PROCESS')]: {
      bind: 'hide'
    },
    [getChannelName('ERROR_ON_GET')]: {
      bind: 'hide'
    },
    global_alert_manager_open_with_settings: {
      bind: 'hide'
    },
    [getChannelName('WITHOUT_IN_PROCESS_CASE')]: {
      bind: 'hide'
    },
    [getChannelName('WITHOUT_CLOSED_CASE')]: {
      bind: 'hide'
    }
  };

  /* Template */
  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      animationType: 'verticalUp',
      preventScrollWithOverlay: true,
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'
    }
  };

  /* Life Cycle Handler */
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: TOKEN || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('INIT_PAGE')]: {
            bind: 'init-page'
          },
          [getChannelName('RESET_PAGE')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  /* Navigation handler */
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'clarificationsTrackingCare',
      backAction: 'entrypoint',
      cellsConnections: {
        in: {
          [getChannelName('EXIT_ERROR')]: {
            bind: 'goBack'
          },
          [getChannelName('EXIT_FLOW')]: {
            bind: 'goBack'
          },
          [getGlobalName('SEND_FOLIOS')]: {
            bind: 'navigate'
          }
        },
        out: {
          NAVIGATE_TO_CLARIFICATION_TRACKING_CARE: {
            bind: 'navigation-to-clarificationsTrackingCare',
            link: {
              page: 'clarificationsTrackingCare'
            }
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'entrypoint',
            cleanUntil: 'clarificationsListCare',
            backStep: true
          }
        }
      }
    }
  };

  /* Header */
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header-spherica',
    properties: {
      id: 'clarifications-list-care',
      titleName: 'clarifications-tracking-title',
      variant: 'primary-alt',
      className: 'header--grey',
      leftIconText: 'cells-molecule-header-spherica-back',
      leftIcon: 'coronita:back-mini',
      cellsConnections: {
        out: {
          [getChannelName('EXIT_FLOW')]: {
            bind: 'click-left-button'
          }
        }
      }
    }
  };

  const radioTaps = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-radio-tabs-spherica',
    properties: {
      className: 'u-margin--1 u-display--center u-margin-bottom--0',
      options: ['clarifications-tracking-in-proccess', 'clarifications-tracking-closed'],
      cellsConnections: {
        in: {
          [getChannelName('INIT_PAGE')]: {
            bind: 'init'
          },
          [getChannelName('RESET_PAGE')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('RADIO_TAPS_OPTIONS_SELECTED')]: {
            bind: 'selected-tab'
          }
        }
      }
    }
  };

  const clarificationsList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-aggregation-badge-list-spherica',
    properties: {
      variantListsBadge: 'primary',
      fullBackgroundClass: 'fullBackgroundWhite',
      cellsConnections: {
        in: {
          [getChannelName('RESET_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('WITHOUT_CONTENT')]: {
            bind: 'withOutContent'
          },
          [getChannelName('CLARIFICATIONS_FINISH')]: {
            bind: 'listCase'
          },
          [getChannelName('CLARIFICATIONS_PROCESS')]: {
            bind: 'listCase'
          },
          [getChannelName('RADIO_TAPS_OPTIONS_SELECTED')]: {
            bind: 'reset'
          },
          [getChannelName('WITHOUT_IN_PROCESS_CASE')]: {
            bind: 'withOutContent'
          },
          [getChannelName('WITHOUT_CLOSED_CASE')]: {
            bind: 'withOutContent'
          },
          [getChannelName('ERROR_ON_GET')]: {
            bind: 'errorCase'
          }
        },
        out: {
          [getChannelName('CLARIFICATIONS_CASE_SELECTED')]: {
            bind: 'cells-list-badge-send-case',
            analytics: ANALYTICSTRACKING.PAGE_VIEW_CLARIFICATION_DETAIL
          },
          [getChannelName('RETRY_REQUEST_GET')]: {
            bind: 'link-clicked'
          }
        }
      }
    }
  };

  const clarificationsListDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-clarifications-manager',
    properties: {
      isSpherica: true,
      withoutClarifications: {
        src: './images/spherica/empty_state_day.svg',
        contentIconWidth: 240,
        contentIconHeight: 240,
        descriptionClass: 'content-text'
      },
      cellsConnections: {
        in: {
          [getChannelName('INIT_PAGE')]: {
            bind: 'init'
          },
          [getChannelName('RESET_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('RADIO_TAPS_OPTIONS_SELECTED')]: {
            bind: 'validateClarificationsTaps'
          },
          [getChannelName('SUCCESS_RESPONSE_CLARIFICATIONS_REQUEST')]: {
            bind: 'responseClarificationsList'
          },
          [getChannelName('ERROR_RESPONSE_CLARIFICATIONS_REQUEST')]: {
            bind: 'validateErrorResponse'
          },
          [getChannelName('RETRY_REQUEST_GET')]: {
            bind: 'requestClarifications'
          },
          [getChannelName('CLARIFICATIONS_CASE_SELECTED')]: {
            bind: 'getClarificationsTraking'
          },
          [getChannelName('SUCCESS_RESPONSE_OPERATIONS_SUMMARY_REQUEST')]: {
            bind: 'parseResponseClarificationsTracking'
          },
          [getChannelName('ERROR_RESPONSE_OPERATIONS_SUMMARY_REQUEST')]: {
            bind: 'validateClarificationsSummaryError'
          }
        },
        out: {
          [getChannelName('RADIO_TAPS_OPTIONS')]: {
            bind: 'glomo-clarifications-radio-taps-headers'
          },
          [getChannelName('WITHOUT_CONTENT')]: {
            bind: 'glomo-clarifications-without-case'
          },
          [getChannelName('CLARIFICATIONS_FINISH')]: {
            bind: 'glomo-clarifications-finish-cases',
            analytics: ANALYTICSLIST.PAGE_VIEW_FINISHED
          },
          [getChannelName('CLARIFICATIONS_PROCESS')]: {
            bind: 'glomo-clarifications-process-cases',
            analytics: ANALYTICSLIST.PAGE_VIEW_IN_PROCESS
          },
          [getChannelName('CLARIFICATIONS_REQUEST')]: {
            bind: 'glomo-clarifications-send-clarifications-request'
          },
          [getChannelName('WITHOUT_IN_PROCESS_CASE')]: {
            bind: 'glomo-clarifications-without-in-process-case'
          },
          [getChannelName('WITHOUT_CLOSED_CASE')]: {
            bind: 'glomo-clarifications-without-closed-case'
          },
          [getChannelName('ERROR_ON_GET')]: {
            bind: 'glomo-clarifications-send-error-on-get'
          },
          [getGlobalName('SEND_FOLIOS')]: {
            bind: 'glomo-clarifications-send-folios-case'
          },
          [getChannelName('REQUEST_SUMMARY_TRACKING')]: {
            bind: 'glomo-clarifications-request-summary-tracking'
          },
          close_control_veil: {
            bind: 'glomo-clarifications-set-header'
          },
          global_alert_manager_open_with_settings: {
            bind: 'glomo-clarifications-clarifications-summary-error'
          }
        }
      }
    }
  };

  const claimDm = {
    zone: 'app_main',
    type: 'DM',
    tag: 'cells-dm-global-apis-claims-mx',
    familyPath: 'cells-dm-global-apis-claims',
    properties: {
      claimsApiVersion: '0',
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('CLARIFICATIONS_REQUEST')]: {
            bind: 'getRequestClaims'
          },
          [getChannelName('REQUEST_SUMMARY_TRACKING')]: {
            bind: 'getRequestClaimsOperationsStatusSummary'
          }
        },
        out: {
          [getChannelName('SUCCESS_RESPONSE_CLARIFICATIONS_REQUEST')]: {
            bind: 'success-on-get-request-claims'
          },
          [getChannelName('ERROR_RESPONSE_CLARIFICATIONS_REQUEST')]: {
            bind: 'error-on-get-request-claims'
          },
          [getChannelName('SUCCESS_RESPONSE_OPERATIONS_SUMMARY_REQUEST')]: {
            bind: 'success-on-get-operations-status-summary'
          },
          [getChannelName('ERROR_RESPONSE_OPERATIONS_SUMMARY_REQUEST')]: {
            bind: 'error-on-get-operations-status-summary'
          }
        }
      }
    }
  };

  /* base */
  const base = {
    hash: 'clarifications-list-care',
    currentPage: {
      url: '/clarifications-list-care'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      navigationHandler,
      header,
      radioTaps,
      clarificationsList,
      clarificationsListDm,
      claimDm
    ]
  };

  return base;
};
