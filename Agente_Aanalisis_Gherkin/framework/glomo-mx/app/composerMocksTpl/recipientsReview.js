'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'recipientsSuccessPage';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const ANALYTICS = require('./analytics/_recipients')();
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('recipients-review');

  const base = {
    hash: 'success-page',
    currentPage: {
      url: '/recipients-review'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: isNativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [PAGE_NAME + '_INIT_PAGE']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app_recipientsSuccessPage: {
                bind: 'navigation'
              },
              __bridge_page_recipientsSuccessPage: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME + '_INIT_PAGE']: {
                bind: 'init-page'
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
          backAction: 'profile',
          currentPage: PAGE_NAME,
          continue: 'profile',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_EXIT_TO_PROFILE']: {
                bind: 'navigate'
              }
            },
            out: {
              [PAGE_NAME + '_NAVIGATE_TO_PROFILE_CHANNEL']: {
                bind: 'navigation-to-profile',
                link: {
                  cleanUntil: 'profile',
                  page: 'profile'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-upgrade-beneficiaries',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
        properties: {
          cellsConnections: {
            in: {
              global_navigation_inapp_recipients: {
                bind: 'navigationInApp'
              },
              GET_FROM_UPGRADE_MODULAR: {
                bind: 'fromModularN2N4Flag'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'fromDeepLinkFlag'
              },
              profile_navigate_to_recipient_init_handler: {
                bind: 'fromProfile'
              },
              [PAGE_NAME + '_BACK_TO_PROFILE_CHANNEL']: {
                bind: 'validateExit'
              }
            },
            out: {
              [PAGE_NAME + '_EXIT_TO_PROFILE']: {
                bind: 'redirect-to-profile'
              },
              dashboard_refresh_financial_overview: {
                bind: 'go-dashbord',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              },
              navigation_to_dashboard_from_in_app_crm: {
                bind: 'navigation-dashboard-from-in-app-crm',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'inAppCrmAdvancedPage'
                }
              },
              [PAGE_NAME + '_EXIT_TO_DASHBOARD']: {
                bind: 'redirect-to-dashboard',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-header-main',
        tag: 'bbva-header-main',
        render: 'litElement',
        properties: {
          id: 'headerReview',
          variant: 'modal',
          text: 'profile-recipient-info-title',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            out: {
              [PAGE_NAME + '_BACK_TO_PROFILE_CHANNEL']: {
                bind: 'header-main-icon-right-primary-click',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analytics-manager-profile-recipients',
        familyPath: '@glomo-web-components/bbva-manager-profile-recipients',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              RECIPIENTS_ADDED_SUCCESSFULLY: {
                bind: 'onAppCompleted'
              }
            },
            out: {
              [PAGE_NAME + '_APP_COMPLETED']: {
                bind: 'analytics-app-completed',
                analytics: ANALYTICS.APP_COMPLETED
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
          hideDivider: true,
          withoutHead: true,
          isStickyButton: '',
          formatDate: utils.getAlternativeFormatDate(),
          cellsConnections: {
            in: {
              SEND_DATA_TO_SUCCESS_PAGE: {
                bind: 'result'
              }
            },
            out: {
              [PAGE_NAME + '_BACK_TO_PROFILE_CHANNEL']: {
                bind: 'cells-successful-response-click-primary'
              }
            }
          }
        }
      }
    ]
  };


  addCommonErrors(base.components)();
  return base;
};
