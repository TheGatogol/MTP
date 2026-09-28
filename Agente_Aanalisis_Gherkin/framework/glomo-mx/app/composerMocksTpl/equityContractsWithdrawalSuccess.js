/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers');
  const PAGE_NAME = 'equityContractsWithdrawalSuccess';
  const PAGE_NAME_CHANNEL = 'equity_contracts_withdrawal_success';
  const ANALYTICS_WITHDRAWAL = require('./analytics/_equityContractsWithdrawal')(CONFIG);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const pages = utils.getPages(PAGE_NAME);
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);


  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      delayScrollTop: 500,
      animationType: 'verticalUp',
      headerHeight: utils.headerHeight,
      headerFixed: false,
      className: IS_NATIVE_IOS ? 'ios-top-padding bg-core-blue' : ' bg-core-blue',
      iOSFixedHeader: false,
      extraHeaderClass: 'bbva-core-blue',
      cellsConnections: {}
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      private: true,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_init_page']: {
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: IS_NATIVE_IOS ? 'safe-card-header header--dark-success' : 'header--dark-success',
      secondaryClass: 'header--core',
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          global_set_equity_contracts_operations_title_name: {
            bind: 'titleName'
          },
          [PAGE_NAME_CHANNEL + '_set_secondary_class']: {
            bind: 'setSecondaryClass'
          },
          [PAGE_NAME_CHANNEL + '_remove_secondary_class']: {
            bind: 'removeSecondaryClass'
          },
          [PAGE_NAME_CHANNEL + '_handle_exit_page']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_reset_success']: {
            bind: 'click-right-button'
          },
          [PAGE_NAME_CHANNEL + '_handle_exit_page']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      rightIconText: 'bbva-header-main-close-aria-label',
      className: IS_NATIVE_IOS ? 'ios-top-padding safe-card-header header--white header' : 'header--white header',
      secondaryClass: ''
    }
  };

  const sharedReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: 'es-MX',
      country: 'mx',
      cellsConnections: {
        in: {
          global_go_to_equity_contracts_withdrawal_ticket: {
            bind: 'result'
          },
          [PAGE_NAME_CHANNEL + '_share_receipt']: {
            bind: 'captureReceipt'
          },
          [PAGE_NAME_CHANNEL + '_init_page']: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const successfulResponse = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    type: 'UI',
    properties: {
      localCurrency: 'MXN',
      language: 'es-MX',
      page: PAGE_NAME,
      isStickyButton: '',
      unmasked: true,
      animateFromTo: true,
      className: 'date-font-medium-italic no-background-avatar equity-contracts',
      showCustomBaseCurrencyMsg: true,
      formatDate: 'DD MMMM YYYY, HH:mm [h]',
      cellsConnections: {
        in: {
          global_go_to_equity_contracts_withdrawal_success: {
            bind: 'setProperties'
          },
          [PAGE_NAME_CHANNEL + '_set_receipt_screenshot_response']: {
            bind: 'screenShotResultResponse'
          },
          [PAGE_NAME_CHANNEL + '_set_receipt_screenshot_error']: {
            bind: 'screenShotResultError'
          },
          [PAGE_NAME_CHANNEL + '_reset_success']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_share_receipt']: {
            bind: 'share-receipt-capture'
          },
          [PAGE_NAME_CHANNEL + '_set_secondary_class']: {
            bind: 'data-status-success'
          },
          [PAGE_NAME_CHANNEL + '_remove_secondary_class']: {
            bind: 'data-status-pending'
          },
          [PAGE_NAME_CHANNEL + '_handle_exit_page']: {
            bind: 'go-to-next'
          }
        }
      }
    },
    propertiesSpherica: {
      operationListClass: 'centered-items',
      headerAmountListClass: '',
      disableButtons: true
    }
  };

  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-equity-contracts-operations-manager',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_handle_exit_page']: {
            bind: 'handleExitPage'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleExitPage'
          }
        },
        out: {
          global_refresh_dashboard_generic: {
            bind: 'exit-equity-contracts-operations-page-event',
            'forward-to-native': true
          },
          financial_overview_refresh: {
            bind: 'exit-equity-contracts-operations-page-event'
          },
          global_equity_product_detail_reset_page: {
            bind: 'exit-equity-contracts-operations-page-event'
          },
          exit_page: {
            bind: 'exit-equity-contracts-operations-page-event',
            backStep: true
          }
        }
      }
    }
  };

  const analytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-equity-contracts-operations-analytics-manager',
    familyPath: 'glomo-equity-contracts-operations-manager',
    properties: {
      cellsConnections: {
        in: {
          global_set_app_completed_object: {
            bind: 'appCompleted'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_analytics_app_page_completed_withdrawal']: {
            bind: 'analytics-app-completed-withdrawal-event',
            analytics: ANALYTICS_WITHDRAWAL.APP_COMPLETED
          }
        }
      }
    }
  };

  let base = {
    hash: 'mx-' + 'equity-contracts-withdrawal-success',
    currentPage: {
      url: `/${PAGE_NAME}`,
      params: []
    },
    pages: pages,
    template,
    components: [
      SPINNER,
      lifeCycle,
      header,
      manager,
      analytics,
      sharedReceipt,
      successfulResponse
    ]
  };

  return sphericaPageUtils.spherize(base);
};
