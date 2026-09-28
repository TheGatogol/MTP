'use strict';
const { useNames, toUnderscoreCase, getFormatDate, getLanguage } = require('./common/helpers/_utils');
const PAGE_NAME = 'payrollPortability';
const OPERATIVE_PREFIX = toUnderscoreCase(PAGE_NAME).toUpperCase();
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const LANGUAGE = getLanguage(CONFIG);
  const formatDate = getFormatDate();
  const isNativeIos = CONFIG.nativeIos || false;
  const template = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'payroll-review-page-init': true,
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_page_payrollPortabilityReview: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init')]: {
            bind: 'payroll-review-page-init'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core' + isNativeIos ? 'ios-top-padding' : '',
      rightIcon: 'coronita:close',
      titleName: 'payroll-portability-change-payroll-title',
      cellsConnections: {
        out: {
          [getChannelName('header_right_icon_tapped')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const successPortability = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      withoutHead: true,
      formatDate: formatDate,
      language: LANGUAGE,
      hideDivider: true,
      cellsConnections: {
        in: {
          [getChannelName('navigate_to_review_page')]: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('close_success_button_tapped')]: {
            bind: 'cells-successful-response-click-primary'
          },
          payroll_portability_successful: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    }
  };
  const portabilityDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-payroll-portability-manager',
    familyPath: 'glomo-payroll-portability-manager',
    properties: {
      cellsConnections: {
        in: {
          payroll_portability_magic_log_on: {
            bind: 'magicLogAccess'
          },
          [getChannelName('header_right_icon_tapped')]: {
            bind: 'navigateButtonHeader'
          },
          [getChannelName('close_success_button_tapped')]: {
            bind: 'navigateSuccessButton'
          }

        },
        out: {
          [getChannelName('navigate-to-account')]: {
            bind: 'navigate-to-account',
            link: {
              page: 'account',
              cleanUntil: 'account',
              skipHistory: true
            }
          },
          [getChannelName('navigate-to-dashboard')]: {
            bind: 'navigate-to-dashboard',
            link: {
              page: 'dashboard',
              cleanUntil: 'payroll',
              skipHistory: true
            }
          },
          global_logout_sesion_expiration: {
            bind: 'logout-payroll-portability'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/payroll-portability-review'
    },
    pages,
    template,
    components: [
      lifeCycle,
      header,
      successPortability,
      portabilityDm
    ]
  };
  return base;
};
