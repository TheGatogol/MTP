/* eslint-disable new-cap, no-shadow */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'pocketsList';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const ANALYTICS_POCKETS = require('./analytics/_pockets')({});
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const isNativeIos = CONFIG.nativeIos || false;

  if (isSpherica) {
    SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  }
  SPINNER.properties.className = isNativeIos ? 'feedback-ios-top-padding solid-spinner' : 'solid-spinner';
  SPINNER.properties.cellsConnections.in = {
    ...SPINNER.properties.cellsConnections.in,
    pockets_show_spinner: {
      bind: 'show'
    },
    pockets_hide_spinner: {
      bind: 'hide'
    },
    ['__bridge_evt_nav-request']: {
      bind: 'openVeil'
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      IOSFixedHeader: true,
      extraHeaderClass: 'bbva-core-blue'
    },
    propertiesSpherica: {
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'spherica-midnight-blue'
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
            bind: 'init-page',
            analytics: ANALYTICS_POCKETS.PAGE_VIEW_POCKETS_LIST
          },
          [PAGE_NAME + '_reset_page']: {
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

  const navigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_navigation_pockets_to_previous_page']: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      titleName: 'pockets-pockets',
      className: 'header--core',
      leftIcon: 'coronita:return-12',
      back: true,
      cellsConnections: {
        out: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'click-left-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      className: 'header--core-grey',
      leftIcon: 'coronita:back',
      leftIconText: 'cells-molecule-header-spherica-return'
    }
  };


  const pocketsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-pockets-dm-mx',
    familyPath: 'glomo-pockets-dm',
    properties: {
      host: CONFIG.globalServices.host,
      pocketsApiVersion: CONFIG.globalServices.versions.pockets,
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isFirstTime: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initListPockets'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_account_set_account_for_operations: {
            bind: 'selectedAccount'
          },
          blue_redirect_data_account_selected: {
            bind: 'selectedAccount'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewResponse'
          },
          pockets_check_max_pockets: {
            bind: 'goCreatePocket'
          },
          navigate_to_pockets_sort: {
            bind: 'goPocketsOrder'
          },
          navigate_to_pockets_detail: {
            bind: 'initPocketDetail'
          }
        },
        out: {
          pockets_is_payroll_account: {
            bind: 'set-is-payroll-account'
          },
          pockets_set_pockets_list: {
            bind: 'set-pockets-list'
          },
          pockets_set_balance: {
            bind: 'set-pockets-total-balance'
          },
          pockets_show_spinner: {
            bind: 'show-spinner'
          },
          pockets_hide_spinner: {
            bind: 'hide-spinner'
          },
          navigate_to_pockets_create: {
            bind: 'navigate-to-create-pocket',
            link: {
              page: 'pocketsCreate'
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-info-modal'
          },
          pockets_set_pockets_number: {
            bind: 'set-number-of-pockets'
          },
          pockets_go_order: {
            bind: 'pocket-order',
            link: {
              page: 'pocketsOrder',
              params: {
                result: 'result'
              }
            }
          },
          pockets_set_partial_pockets: {
            bind: 'set-partial-pockets'
          },
          pockets_show_transaction_skeleton: {
            bind: 'show-transaction-skeleton'
          },
          pocket_set_heading: {
            bind: 'set-pocket-heading'
          },
          pocket_set_pocket_info: {
            bind: 'set-pocket-info'
          },
          pocket_set_main_items: {
            bind: 'set-pocket-main-items'
          },
          pocket_set_optional_items: {
            bind: 'set-pocket-optional-items'
          },
          global_pocket_id: {
            bind: 'set-pocket-id'
          },
          global_pocket_amount: {
            bind: 'set-pocket-amount'
          },
          global_set_product: {
            bind: 'set-product'
          },
          pocket_set_operations: {
            bind: 'set-pockets-operations'
          },
          navigation_to_pocket_detail: {
            bind: 'navigation-to-pocket-detail',
            link: {
              page: 'pocketsDetail'
            }
          },
          get_pocket_operations: {
            bind: 'get-pocket-operations'
          },
          set_pocket_detail_operatives: {
            bind: 'set-pocket-detail-operatives'
          },
          pockets_set_current_account_amount: {
            bind: 'set-account-amount'
          },
          pockets_init_pocket_detail: {
            bind: 'init-pocket-detail'
          },
          global_retry_error: {
            bind: 'send-retry-error'
          },
          pockets_set_list_pocket_operatives: {
            bind: 'set-list-pocket-operatives'
          },
          pockets_loading_operatives: {
            bind: 'loading-operatives'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-info-modal'
            }
          }
        },
        remove: {
          out: [ 'global_alert_manager_open_with_settings' ]
        }
      }
    }
  };

  const operatives = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-operations-list-indicators',
    tagSpherica: 'cells-operations-list-indicators-spherica',
    properties: {
      limit: 2,
      defaultLimit: 2,
      gridColumns: 2,
      viewMore: false,
      alwaysShowViewMore: false,
      cellsConnections: {
        in: {
          pockets_set_list_pocket_operatives: {
            bind: 'operations'
          }
        },
        out: {
          pockets_check_max_pockets: {
            bind: 'click-on-create-pocket-operative',
            analytics: ANALYTICS_POCKETS.APP_ON_CLICK_START_POCKETS_LIST
          },
          navigate_to_pockets_sort: {
            bind: 'click-on-sort-pockets-operative'
          }
        }
      }
    },
    propertiesSpherica: {
      gridColumns: 3
    }
  };

  const listPockets = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-product-item-list-info',
    tagSpherica: 'cells-product-item-list-info-spherica',
    properties: {
      hideMessage: true,
      className: 'small-product wrapper-list-pockets',
      listHeader: 'pockets-total-balance',
      productItemClass: 'additional-secondary-amount',
      emptyListMessage: 'pockets-empty-pockets-list',
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          pockets_set_pockets_list: {
            bind: 'listItems'
          },
          pockets_set_balance: {
            bind: 'listBalance'
          }
        },
        out: {
          navigate_to_pockets_detail: {
            bind: 'cells-product-item-list-info-list-item-tap'
          }
        }
      }
    },
    propertiesSpherica: {
      listHeader: 'pockets-total-balance-spherica',
      productItemClass: 'accessibility-column'
    }
  };

  const base = {
    hash: 'pockets-list',
    currentPage: {
      url: '/pockets-list',
      params: []
    },
    page,
    template,
    components: [
      SPINNER,
      lifeCycle,
      navigationHandler,
      header,
      pocketsDM,
      operatives,
      listPockets
    ]
  };

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'operations-pocket-error',
      acceptRetry: { bind: 'getOperations', component: 'glomo-pockets-dm-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' }
    },
    {
      id: 'get-pockets-error',
      acceptRetry: { bind: 'listPockets', component: 'glomo-pockets-dm-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
