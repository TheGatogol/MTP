/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'pocketsSuccess';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS_POCKETS = require('./analytics/_pockets')();
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

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
          [PAGE_NAME + '_first_init_page']: {
            bind: 'init-page-first-time'
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
          },
          pockets_navigate_to_origin: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_navigation_pockets_to_previous_page']: {
            bind: 'navigate-to-previous-page',
            backStep: true,
            skipHistory: true
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
      rightIcon: 'coronita:close',
      back: true,
      cellsConnections: {
        in: {
          pockets_set_header_title: {
            bind: 'titleName'
          },
          pockets_set_success_header_color: {
            bind: 'classTimeColor'
          }
        },
        out: {
          pockets_finish_operation: {
            bind: 'click-right-button'
          },
          [PAGE_NAME + '_exit_button']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      rightIconText: 'bbva-header-main-close-aria-label',
      className: ''
    }
  };

  const pocketsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-pockets-dm-mx',
    familyPath: 'glomo-pockets-dm',
    properties: {
      isSpherica,
      host: CONFIG.globalServices.host,
      pocketsApiVersion: CONFIG.globalServices.versions.pockets,
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isFirstTime: true,
      cellsConnections: {
        in: {
          pockets_set_pockets_number: {
            bind: 'numberOfPockets'
          },
          blue_global_navigate_pockets_withdrawal: {
            bind: 'redirectBlue'
          },
          blue_global_navigate_pockets_add_money: {
            bind: 'redirectBlue'
          },
          pockets_finish_operation: {
            bind: 'navigateAfterCreate'
          },
          pockets_navigate_success: {
            bind: 'initSuccess'
          },
          [PAGE_NAME + '_operative_selected']: {
            bind: 'operativeSelected'
          }
        },
        out: {
          dashboard_accounts_refresh: {
            bind: 'financial-overview-refresh'
          },
          dashboard_refresh_financial_overview: {
            bind: 'financial-overview-refresh'
          },
          pockets_set_header_title: {
            bind: 'set-success-header-title'
          },
          pockets_set_success_header_color: {
            bind: isSpherica ? '' : 'set-success-color-header'
          },
          pockets_navigate_to_product_detail: {
            bind: 'navigate-to-product-detail',
            link: {
              page: 'account',
              cleanUntil: 'pocketsList'
            }
          },
          pockets_navigate_to_pockets_list: {
            bind: 'navigate-to-pockets-list',
            skipHistory: true,
            link: {
              page: 'pocketsList'
            }
          },
          pockets_navigate_to_digital_butler: {
            bind: 'navigate-to-digital-butler',
            link: {
              page: 'digitalButler',
              cleanUntil: 'digitalButler'
            }
          },
          pockets_navigate_to_origin: {
            bind: 'navigate-to-origin'
          },
          [PAGE_NAME + '_operative_screenshot']: {
            bind: 'share-data'
          },
          [PAGE_NAME + '_reset_operative_screenshot']: {
            bind: 'reset-share-data'
          },
          pockets_app_completed: {
            bind: 'set-pocket-create-success'
          },
          pockets_app_completed_withdrawal: {
            bind: 'set-pocket-withdrawal-success'
          },
          pockets_app_completed_contribution: {
            bind: 'set-pocket-contribution-success'
          },
          pockets_reset_success: {
            bind: 'set-success'
          }
        }
      }
    }
  };

  const cellsSuccessfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      formatDate: 'DD MMMM YYYY, HH:mm [h]',
      language: 'es-MX',
      localCurrency: 'MXN',
      cellsConnections: {
        in: {
          pockets_reset_success: {
            bind: 'setProperties'
          },
          pocketsCreate_pockets_set_success_properties: {
            bind: 'setProperties'
          },
          pocketsAddMoney_pockets_set_success_properties: {
            bind: 'setProperties'
          },
          pocketsWithdrawal_pockets_set_success_properties: {
            bind: 'setProperties'
          },
          pocketsDetail_pockets_set_success_properties: {
            bind: 'setProperties'
          },
          pocketsEdit_pockets_set_success_properties: {
            bind: 'setProperties'
          },
          pockets_navigate_success: {
            bind: 'result'
          }
        },
        out: {
          pockets_finish_operation: {
            bind: 'cells-successful-response-click-primary'
          },
          [PAGE_NAME + '_operative_selected']: {
            bind: 'operation-click'
          },
          [PAGE_NAME + '_share_receipt_capture']: {
            bind: 'share-receipt-capture'
          },
          [PAGE_NAME + '_exit_button']: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-padding-top--0 title-xxxl',
      operationListClass: 'centered-items',
      disableButtons: true,
      operationsVariant: 'primary-alt'
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: 'es-MX',
      localCurrency: 'MXN',
      dateFormat: 'DD MMMM YYYY',
      sharedReceiptStyles: {
        receiptTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        sectionTitle: {
          'color': 'var(--bbva-core-blue, #004481)'
        },
        info: {
          'padding': '0px',
          'margin-top': '2px',
          'background-color': 'none'
        },
        infoIcon: {
          'display': 'none'
        },
        infoMessage: {
          'font-weight': '100',
          'margin': '0px',
          'font-size': 'var(--cells-text-size-12, 12px)',
          'text-align': 'left',
          'background-color': 'none',
          'color': 'var(--bbva-500, #666666)'
        }
      },
      cellsConnections: {
        in: {
          [PAGE_NAME + '_share_receipt_capture']: {
            bind: 'captureReceipt'
          },
          [PAGE_NAME + '_reset_operative_screenshot']: {
            bind: 'result'
          },
          [PAGE_NAME + '_operative_screenshot']: {
            bind: 'result'
          },
          [PAGE_NAME + '_exit_button']: {
            bind: 'reset'
          }
        },
        out: {
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          }
        }
      }
    },
    propertiesSpherica: {
      sharedReceiptStyles: {},
      headerImage: './images/spherica/bbva_blue.svg'
    }
  };

  const analyticsPockets = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-pockets-manager',
    familyPath: '@glomo-web-components/glomo-analytics-pockets-manager',
    render: 'litElement',
    properties: {
      dynamicMethodsName: ['fireAppCompletedWithdrawal', 'fireAppCompletedContribution'],
      page: PAGE_NAME,
      cellsConnections: {
        in: {
          pockets_navigate_success: {
            bind: 'buildDynamicMethods'
          },
          pocketsWithdrawal_pockets_analytics_operation_number: {
            bind: 'withdrawalOperationNumber'
          },
          pocketsAddMoney_pockets_analytics_operation_number: {
            bind: 'contributionOperationNumber'
          },
          pockets_set_product_info: {
            bind: 'product'
          },
          pockets_set_selected_account_name: {
            bind: 'productName'
          },
          pockets_analytics_info: {
            bind: 'parsePocket'
          },
          pocketsWithdrawal_pockets_analytics_info: {
            bind: 'parsePocket'
          },
          pockets_app_completed: {
            bind: 'fireAppCompleted'
          },
          pockets_app_completed_withdrawal: {
            bind: 'fireAppCompletedWithdrawal'
          },
          pockets_app_completed_contribution: {
            bind: 'fireAppCompletedContribution'
          }
        },
        out: {
          pocketsCreate_analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS_POCKETS.APP_COMPLETED
          },
          pocketsWithdrawal_analytics_app_completed_withdrawal: {
            bind: 'analytics-fire-app-completed-withdrawal',
            analytics: ANALYTICS_POCKETS.APP_COMPLETED_WITHDRAWAL
          },
          pocketsContribution_analytics_app_completed_contribution: {
            bind: 'analytics-fire-app-completed-contribution',
            analytics: ANALYTICS_POCKETS.APP_COMPLETED_CONTRIBUTION
          }
        }
      }
    }
  };


  const base = {
    hash: 'pockets-success',
    currentPage: {
      url: '/pockets-success',
      params: []
    },
    page,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      header,
      pocketsDM,
      cellsSuccessfulResponse,
      shareReceipt,
      analyticsPockets
    ]
  };

  return sphericaPageUtils.spherize(base);
};
