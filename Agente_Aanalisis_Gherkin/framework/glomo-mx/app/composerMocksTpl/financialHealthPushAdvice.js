/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'financialHealthPushAdvice';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_financialHealthAdvice')(CONFIG);
  const { useNames, createPrefixFromPageName } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const isNativeIos = CONFIG.nativeIos || false;
  const SPINNER = utils.SPINNER(CONFIG);

  const base = {
    hash: 'financial-health-push-advice',
    currentPage: {
      url: '/financial-health-push-advice'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'fade',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 48,
        footerFixed: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        iOSFixedHeader: isNativeIos,
        className: isNativeIos ? 'ios-top-padding' : '',
        rightDrawer: true,
        disableEdgeSwipe: CONFIG.nativeShell || false,
        avoidToggleMenu: CONFIG.nativeShell || false,
        edgeSwipeSensitivity: 50,
        cellsConnections: {
          in: {
            coming_soon_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
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
              __bridge_page_financialHealthPushAdvice: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('reset_page')]: {
                bind: 'reset-page'
              },
              [getChannelName('init_page-first-time')]: {
                bind: 'init-page-first-time'
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
          cellsConnections: {
            in: {
              [getChannelName('back_pressed')]: {
                bind: 'goBack'
              },
              [getChannelName('navigate_to_dashboard')]: {
                bind: 'goBack'
              },
              [getChannelName('navigate_to_pockets')]: {
                bind: 'navigateToPage'
              },
              [getChannelName('navigate_to_feedback')]: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_to_dashboard: {
                bind: 'navigation-to-dashboard',
                link: {
                  skipHistory: true,
                  page: 'dashboard'
                }
              },
              navigation_to_pockets_welcome: {
                bind: 'navigation-to-pockets',
                link: {
                  page: 'pocketsWelcome',
                  skipHistory: true
                },
                analytics: ANALYTICS.APP_ON_CLICK_START
              },
              navigation_to_feedback: {
                bind: 'navigation-to-feedback',
                link: {
                  page: 'financialHealthPushAdviceFeedback'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark',
          rightIcon: 'coronita:close',
          titleName: 'financial-health-push-advice-header',
          cellsConnections: {
            out: {
              [getChannelName('back_pressed')]: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-pockets-opx-manager-mx',
        familyPath: 'cells-pockets-opx-manager',
        properties: {
          cellsConnections: {
            in: {
              global_financial_overview_details: {
                bind: 'financialOverviewResponse'
              },
              [getChannelName('init_page-first-time')]: {
                bind: 'requestTrasactions'
              },
              [getChannelName('prepare_pocket_creation')]: {
                bind: 'navigateToPockets'
              },
              [getChannelName('transactions_reponse')]: {
                bind: 'filterTransaction'
              },
              [getChannelName('voted_thumbs')]: {
                bind: 'goToFeedback'
              },
              show_toast_success_financialHealthPushAdviceFeedback: {
                bind: 'modifySuccessMessage'
              }
            },
            out: {
              [getChannelName('set_account_id')]: {
                bind: 'set-account-id'
              },
              [getChannelName('get_transactions')]: {
                bind: 'get-transactions'
              },
              [getChannelName('set_push_notification_advice')]: {
                bind: 'set-payroll-content-advice',
                analytics: ANALYTICS.HUELLA_APP_PAGE_VISIT
              },
              [getChannelName('set_account')]: {
                bind: 'set-account-contract'
              },
              [getChannelName('navigate_to_dashboard')]: {
                bind: 'navigate-to-dashboard'
              },
              [getChannelName('modify_success_message')]: {
                bind: 'hide-message'
              },
              [getChannelName('navigate_to_pockets')]: {
                bind: 'set-navigation-pockets'
              },
              [getChannelName('navigate_to_feedback')]: {
                bind: 'set-navigation-feedback'
              },
              open_control_veil: {
                bind: 'show-spinner'
              },
              close_control_veil: {
                bind: 'hide-spinner'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-accounts',
        properties: {
          host: CONFIG.globalServices.host,
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          native: CONFIG.native || false,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              [getChannelName('set_account_id')]: {
                bind: 'accountId'
              },
              [getChannelName('get_transactions')]: {
                bind: 'getTransactions'
              }
            },
            out: {
              [getChannelName('transactions_reponse')]: {
                bind: 'set-account-transactions'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-safe-card-offer-page',
        properties: {
          className: 'cells-step-container dark-header-background no-offer-description bold-questionnaire-text',
          disableSticky: true,
          iconSize: 80,
          cellsConnections: {
            in: {
              [getChannelName('init_page')]: {
                bind: 'initialize'
              },
              [getChannelName('set_push_notification_advice')]: {
                bind: 'setProperties'
              }
            },
            out: {
              [getChannelName('prepare_pocket_creation')]: {
                bind: 'open-questionnaire'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-form-rating',
        familyPath: '@bbva-web-components/bbva-form-rating',
        render: 'litElement',
        properties: {
          thumbs: true,
          contentTitle: 'financial-health-push-advice-votes-tile',
          text: 'financial-health-push-advice-vote-success-message',
          hideText: true,
          cellsConnections: {
            in: {
              [getChannelName('modify_success_message')]: {
                bind: 'hideText'
              }
            },
            out: {
              [getChannelName('voted_thumbs')]: {
                bind: 'form-rating-value-change'
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
