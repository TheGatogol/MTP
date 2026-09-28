'use strict';


module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const PRODUCT = 'upgradeAccountReviewPage';
  const pages = require('./common/_pages')(CONFIG)(PRODUCT);

  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_upgradeAccountCustomer')(CONFIG);

  const base = {
    hash: 'mx' + PRODUCT,
    currentPage: {
      url: '/upgrade-account-success-page',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'bbva-core-blue',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        footerHeight: 112
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PRODUCT,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              ['__bridge_app_' + PRODUCT]: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT]: {
                bind: 'init'
              }
            },
            out: {
              upgrade_account_review_page: {
                bind: 'init-page',
                analytics: ANALYTICS.APP_COMPLETED_UNDER_REVIEW
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-dashboard',
          currentPage: PRODUCT,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              },
              global_opened_modal: {
                bind: 'openedModal'
              },
              upgrade_account_review_modal_opened: {
                bind: 'openedModal'
              },
              [PRODUCT + '_back_header_request_action']: {
                bind: 'goBack'
              },
              [PRODUCT + '_back_request_action']: {
                bind: 'goBack'
              },
              upgrade_account_review_navigation_to_previous_page: {
                bind: 'goBack'
              }
            },
            out: {
              upgrade_account_review_navigation_to_previous_page: {
                bind: 'navigate-to-previous-page'
              },
              upgrade_account_review_navigation_native_back_button: {
                bind: 'navigate-native-back-button'
              },
              global_alert_modal_close: {
                bind: 'navigate-native-back-button'
              },
              upgrade_account_review_navigation_to_dashboard: {
                bind: 'navigation-to-dashboard',
                backStep: true,
                skipHistory: true,
                link: {
                  page: 'dashboard'
                }
              },
              global_upgrade_account_exit: {
                bind: 'navigation-to-dashboard'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-successful-response',
        properties: {
          className: '',
          withoutHead: true,
          hideDivider: true,
          cellsConnections: {
            in: {
              upgrade_account_open_review: {
                bind: 'result'
              }
            },
            out: {
              [PRODUCT + '_back_request_action']: {
                bind: 'go-to-next'
              }
            }
          }
        }
      }
    ]
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'upgrade-account-init-header',
      iconRightPrimary: 'bbva:close',
      continue: 'dashboard',
      cellsConnections: {
        in: {},
        out: {
          [PRODUCT + '_back_header_request_action']: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  base.components.push(header);
  return base;
};
