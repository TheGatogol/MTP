/* eslint-disable new-cap, no-shadow */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'pocketsDetail';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS_POCKETS = require('./analytics/_pockets')();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);

  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const spinnerSpherica = utils.SPINNERSPHERICA(CONFIG);

  spinnerSpherica.properties =
  spinnerSpherica.propertiesSpherica;

  delete spinnerSpherica.propertiesSpherica;

  spinnerSpherica.properties.className = isNativeIos ? 'feedback-ios-top-padding solid-spinner' : 'solid-spinner';
  spinnerSpherica.properties.cellsConnections.in = {
    ...spinnerSpherica.properties.cellsConnections.in,
    pockets_show_spinner: {
      bind: 'show'
    },
    pockets_hide_spinner: {
      bind: 'hide'
    },
    pockets_update_detail: {
      bind: 'openVeil'
    },
    pockets_update_pocket: {
      bind: 'openVeil'
    }
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
      disableEdgeSwipe: true,
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
            bind: 'init-page'
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
    tag: 'cells-molecule-header-spherica',
    properties: {
      titleName: 'pockets-pockets',
      back: true,
      variant: 'primary-alt',
      className: 'header--core-grey',
      leftIcon: 'coronita:back',
      leftIconText: 'cells-molecule-header-spherica-return',
      cellsConnections: {
        out: {
          navigation_about_info_to_page: {
            bind: 'click-left-button',
            backStep: true
          }
        }
      }
    }
  };

  const pocketsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-pockets-dm-mx',
    familyPath: 'glomo-pockets-dm',
    properties: {
      isSpherica: true,
      pageName: PAGE_NAME,
      host: CONFIG.globalServices.host,
      pocketsApiVersion: CONFIG.globalServices.versions.pockets,
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isFirstTime: true,
      cellsConnections: {
        in: {
          pocket_set_heading: {
            bind: 'pocketName'
          },
          global_pocket_id: {
            bind: 'pocketId'
          },
          global_pocket_amount: {
            bind: 'pocketAmount'
          },
          pockets_set_current_account_amount: {
            bind: 'accountAmount'
          },
          global_set_product: {
            bind: 'product'
          },
          pockets_set_pockets_number: {
            bind: 'numberOfPockets'
          },
          global_account_set_account_for_operations: {
            bind: 'selectedAccount'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewResponse'
          },
          navigation_to_delete_saving: {
            bind: 'confirmDeleteGoal'
          },
          pockets_update_detail: {
            bind: 'updatePocket'
          },
          pockets_update_pocket: {
            bind: 'updatePocketDetail'
          },
          pocket_delete: {
            bind: 'setDelete'
          },
          pockets_delete_pocket_accept: {
            bind: 'deletePocket'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          get_pocket_operations: {
            bind: 'getOperations'
          },
          set_pocket_detail_operatives: {
            bind: 'setPocketOperations'
          },
          pockets_init_pocket_detail: {
            bind: 'setPocketDetail'
          }
        },
        out: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'confirm-delete-pocket-modal'
          },
          pockets_set_partial_pockets: {
            bind: 'set-partial-pockets'
          },
          open_control_veil: {
            bind: 'open-spinner'
          },
          close_control_veil: {
            bind: 'close-spinner'
          },
          [PAGE_NAME + '_pockets_set_success_properties']: {
            bind: 'set-success-properties-pocketsDetail'
          },
          pockets_set_pockets_number: {
            bind: 'set-number-of-pockets'
          },
          pockets_navigate_success: {
            bind: 'navigate-to-success',
            link: {
              page: 'pocketsSuccess',
              skipHistory: true
            }
          },
          pocket_set_heading: {
            bind: 'set-pocket-heading'
          },
          pocket_set_main_items: {
            bind: 'set-pocket-main-items'
          },
          pocket_set_pocket_operations: {
            bind: 'set-pocket-operatives'
          },
          pockets_loading_operatives: {
            bind: 'loading-operatives'
          },
          pocket_set_optional_items: {
            bind: 'set-pocket-optional-items'
          },
          pockets_show_spinner: {
            bind: 'show-spinner'
          },
          pockets_hide_spinner: {
            bind: 'hide-spinner'
          },
          global_pocket_id: {
            bind: 'set-pocket-id'
          },
          pocket_set_operations: {
            bind: 'set-pockets-operations'
          },
          global_retry_error: {
            bind: 'send-retry-error'
          },
          pockets_no_operations: {
            bind: 'no-operations'
          },
          pockets_set_pocket_detail: {
            bind: 'set-pocket-detail'
          },
          dashboard_refresh_financial_overview: {
            bind: 'refresh-account'
          }
        }
      }
    }
  };

  const cellsSummary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-product-summary-pocket-spherica',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      hideMoreInfoButton: true,
      cellsConnections: {
        in: {
          pocket_set_heading: {
            bind: 'heading'
          },
          pocket_set_main_items: {
            bind: 'mainItems'
          },
          pocket_set_optional_items: {
            bind: 'optionalItems'
          }
        }
      }
    }
  };

  const cellsListIndicators = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-operations-list-indicators-spherica',
    properties: {
      limit: 4,
      defaultLimit: 4,
      gridColumns: 4,
      viewMore: false,
      alwaysShowViewMore: false,
      cellsConnections: {
        in: {
          pockets_loading_operatives: {
            bind: 'loaded'
          },
          pocket_set_pocket_operations: {
            bind: 'operations'
          }
        },
        out: {
          navigation_to_withdrawal_money: {
            bind: 'click-on-withdrawal-money',
            link: {
              page: 'pocketsWithdrawal'
            }
          },
          navigation_to_add_money: {
            bind: 'click-on-add-money',
            link: {
              page: 'pocketsAddMoney'
            }
          },
          navigation_to_edit_saving: {
            bind: 'click-on-edit-pocket',
            link: {
              page: 'pocketsEdit'
            }
          },
          navigation_to_delete_saving: {
            bind: 'click-on-delete-saving'
          }
        }
      }
    }
  };

  const cellsTransactionsList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-transactions-list-spherica',
    properties: {
      emptyListTitle: 'pockets-movements-spherica',
      title: 'cells-transactions-list-last-transactions-title-spherica',
      className: 'savings-card',
      descriptionMaxLines: 2,
      imageEmptyList: './images/spherica/empty_state_day.svg',
      groupTransactionsClass: 'move-list-wrapper wrapper-list-item',
      hideRetryLoadTransactionsButton: true,
      localCurrency: LOCAL_CURRENCY,
      limit: 5,
      pagination: 5,
      continue: PAGE_NAME,
      showEmptyListTitle: true,
      messageEmptyList: 'pockets-no-movements',
      transactionGroupDateFormat: utils.getShortFormatDate(),
      transactionCurrentYearDateFormat: utils.getShortFormatDate(),
      skeletonItems: 5,
      hidePendings: true,
      cellsConnections: {
        in: {
          pockets_show_transaction_skeleton: {
            bind: 'loaded'
          },
          pockets_no_operations: {
            bind: 'transactions'
          },
          pocket_set_operations: {
            bind: 'transactions'
          }
        },
        out: {
          pockets_navigate_to_view_all_transactions: {
            bind: 'view-all-transactions',
            link: {
              page: 'pocketsMovementsList'
            }
          }
        }
      }
    }
  };

  const analyticsPocketsWithdrawal = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-pockets-manager',
    familyPath: '@glomo-web-components/glomo-analytics-pockets-manager',
    render: 'litElement',
    properties: {
      page: PAGE_NAME,
      cellsConnections: {
        in: {
          global_set_product: {
            bind: 'product'
          },
          navigation_to_withdrawal_money: {
            bind: 'fireAppOnClickStart'
          }
        },
        out: {
          pocketsWithdrawal_analytics_app_started: {
            bind: 'analytics-app-on-click-start',
            analytics: ANALYTICS_POCKETS.APP_ONCLICK_START_POCKET_WITHDRAWAL
          }
        }
      }
    }
  };

  const analyticsPocketsContribution = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-pockets-manager',
    familyPath: '@glomo-web-components/glomo-analytics-pockets-manager',
    render: 'litElement',
    properties: {
      page: PAGE_NAME,
      cellsConnections: {
        in: {
          global_set_product: {
            bind: 'product'
          },
          navigation_to_add_money: {
            bind: 'fireAppOnClickStart'
          }
        },
        out: {
          pocketsContribution_analytics_app_started: {
            bind: 'analytics-app-on-click-start',
            analytics: ANALYTICS_POCKETS.APP_ONCLICK_START_POCKET_CONTRIBUTION
          }
        }
      }
    }
  };

  const base = {
    hash: 'pockets-detail',
    currentPage: {
      url: '/pockets-detail',
      params: []
    },
    page,
    template,
    components: [
      cellsSummary,
      cellsListIndicators,
      cellsTransactionsList,
      lifeCycle,
      navigationHandler,
      header,
      pocketsDM,
      analyticsPocketsWithdrawal,
      analyticsPocketsContribution,
      spinnerSpherica
    ]
  };

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'delete-pocket-error',
      acceptRetry: { bind: 'deletePocket', component: 'glomo-pockets-dm-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);

  return base;
};
