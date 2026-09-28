'use strict';
const { getLocalCurrency, headerHeightMinimum } = require('./common/helpers/_utils');

module.exports = CONFIG => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { standInPendingTransfers }
    },
    native = false,
    nativeIos = false
  } = CONFIG;

  const pageName = 'transfersPendingMovements';
  const pages = require('./common/_pages')(CONFIG)(pageName);

  const base = {
    hash: 'transfers-pending-movements',
    currentPage: {
      url: '/transfers-pending-movements'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        extraHeaderClass: 'dark-blue-bg',
        className: nativeIos ? 'ios-top-padding' : '',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerHeight: headerHeightMinimum
      }
    },
    components: []
  };

  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
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

  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigation-to-back-page',
      cellsConnections: {
        in: {
          feature_alwayson_exit: {
            bind: 'goBack'
          },
          feature_alwayson_send_to_transfers: {
            bind: 'navigateToPage'
          }
        },
        out: {
          navigation_to_back_page: {
            bind: 'navigation-to-back-page',
            backStep: true
          },
          navigation_feature_alwayson_to_transfers: {
            bind: 'navigation-to-transfers',
            link: {
              page: 'transfers',
              params: { continue: 'continue' }
            }
          }
        }
      }
    }
  };

  const featureAlwaysOn = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-alwayson-mx',
    familyPath: '@glomo-web-components/bbva-feature-alwayson-mx',
    render: 'litElement',
    properties: {
      host,
      apiVersion: standInPendingTransfers,
      requiredToken,
      native,
      localCurrency: getLocalCurrency(CONFIG),
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'validateNavigation'
          },
          global_feature_flag_collection_updated: {
            bind: 'setFeatureFlags'
          },
          global_account_navigation_to_pending_movements: {
            bind: 'setAccountNumber'
          },
          [pageName + '_init_page']: {
            bind: 'init'
          },
          EXIT_TRANSFERS_PAGE_ACCEPT: {
            bind: 'enableView'
          },
          global_stand_in_edit_spei_transfers_accept: {
            bind: 'enableView'
          },
          global_stand_in_edit_spei_transfers_cancel: {
            bind: 'enableView'
          }
        },
        out: {
          feature_alwayson_exit: {
            bind: 'alwayson-pending-movements-backstep'
          },
          feature_alwayson_enable_edit_mode: {
            bind: 'always-on-detail-request-edit'
          },
          feature_alwayson_send_to_transfers: {
            bind: 'always-on-detail-navigate-to-transfers'
          }
        }
      }
    }
  };

  base.components.push(
    cellsHandleLifeCycle,
    glomoNavigationHandler,
    featureAlwaysOn
  );

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('bbva-feature-alwayson-mx');

  return base;
};
