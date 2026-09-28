/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('notificationManager');

  const SPINNER = utils.SPINNER(CONFIG);
  const { PRODUCTS_CONFIG } = require('./common/helpers/_utils');
  const CROSS_COMPONENTS = require('./common/_cross-components');

  const base = {
    hash: 'notificationManager',
    currentPage: {
      url: '/notification-manager',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        footerHeight: 100,
        disableEdgeSwipe: true,
        headerFixed: false,
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          },
          out: {}
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
          pageName: 'notificationManager',
          customInitEvents: {
            'swipe-menu-enabled': false,
            'financial-overview': {
              'contracts.productType': 'ACCOUNTS,CARDS,INSURANCE'
            },
            'financial-overview-prduct-config': PRODUCTS_CONFIG
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_notificationManager: {
                bind: 'init'
              }
            },
            out: {
              notification_manager_reset_page: {
                bind: 'reset'
              },
              open_control_veil: {
                bind: 'init-page'
              },
              close_control_veil: {
                bind: 'reset'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              handle_financial_overview: {
                bind: 'financial-overview'
              },
              send_products_config: {
                bind: 'financial-overview-prduct-config'
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
          backAction: 'header-left-button',
          continue: 'dashboard',
          cellsConnections: {
            in: {
              navigation_notification_manager_to_continue: {
                bind: 'navigate'
              },
              navigation_notification_manager_to_page: {
                bind: 'navigate'
              }
            },
            out: {
              navigation_notification_manager_to_dashboard: {
                bind: 'notification-to-dashboard-logged',
                link: {
                  page: 'dashboard'
                }
              },
              navigation_notification_manager_to_login: {
                bind: 'notification-to-dashboard',
                link: {
                  page: 'login'
                }
              }
            }
          }
        }
      }
    ]
  };

  CROSS_COMPONENTS.common(CONFIG, 'notificationManager').map(component => base.components.push(component));
  utils.addOutStorageChannels(base.components, CONFIG.localStorageKeys);

  return base;
};
