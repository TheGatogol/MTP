module.exports = config => {

  const utils = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = utils;
  const PAGE_NAME = 'depositHiringReview';
  const pages = require('./common/_pages')(config)(PAGE_NAME);
  const LOCAL_CURRENCY = utils.getLocalCurrency(config);
  const LANGUAGE = utils.getLanguage(config);
  const FORMAT_DATE = utils.getFormatDate();
  const ANALYTICS = require('./analytics/_depositHiring')(config);
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const isNativeIos = config.nativeIos || false;

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      mode: 'seamed',
      headerFixed: true,
      disableEdgeSwipe: true,
      iOSFixedHeader: isNativeIos,
      topOnConfirm: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      extraHeaderClass: 'darker-green-bg',
      animationType: 'verticalUp'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      cache: [ '' ],
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
          [PAGE_NAME + '_RESET_PAGE']: {
            bind: 'reset'
          },
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
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--dark-success',
      rightIcon: 'coronita:close',
      titleName: 'glomo-deposit-hiring-title',
      headerFixed: true,
      cellsConnections: {
        in: {
          [getChannelName('_BG_HEADER_CLASS')]: {
            bind: 'class'
          }
        },
        out: {
          dashboard_pull_to_refresh_start: {
            bind: 'click-right-button'
          },
          [getChannelName('_RESET_PAGE')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      cellsConnections: {
        in: {
          deposits_hiring_success_create_page: {
            bind: 'navigateToPage'
          },
          [getChannelName('_RESET_PAGE')]: {
            bind: 'goBack'
          }
        },
        out: {
          global_deposit_hiring_success: {
            bind: 'navigation-to-dashboard',
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    }
  };

  const successComponent = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      className: 'deposit-hiring-success deposit-success',
      formatDate: FORMAT_DATE,
      localCurrency: LOCAL_CURRENCY,
      type: 'core',
      cellsConnections: {
        in: {
          [getChannelName('_SET_SUCCESS_DATA')]: {
            bind: 'result'
          },
          [getChannelName('_SET_SUCCESS_TYPE')]: {
            bind: 'type'
          }
        },
        out: {
          global_product_transfer_success: {
            bind: 'cells-successful-response-click-primary',
            'forward-to-native': true
          },
          dashboard_pull_to_refresh_start: {
            bind: 'cells-successful-response-click-primary',
            'forward-to-native': true
          },
          global_deposit_hiring_success_click: {
            bind: 'cells-successful-response-click-primary'
          },
          [getChannelName('_RESET_PAGE')]: {
            bind: 'cells-successful-response-click-primary'
          },
          [getChannelName('_SHARE_IPAB')]: {
            bind: 'download-receipt'
          },
          [getChannelName('_SHARE_RECEIPT')]: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('_modal_taxes_info_gat')]: {
            bind: 'help-icon-tapped'
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      language: config.lang,
      country: 'mx',
      headerReceipt: false,
      cellsConnections: {
        in: {
          [getChannelName('_SHARE_RECEIPT')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('_SET_SUCCESS_DATA')]: {
            bind: 'result'
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

  const dmHiring = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-deposits-dm-mx',
    familyPath: 'glomo-deposits-dm',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      totalHeight: '2200',
      currentLanguage: LANGUAGE,
      helpBtnInfo: true,
      cellsConnections: {
        in: {
          SHOW_DEPOSIT_HIRING_NAVIGATION_TO_SUCCESS: {
            bind: 'initSuccessHiringPage'
          },
          SHOW_DEPOSIT_STORE_FORWARD_NAVIGATION_TO_SUCCESS: {
            bind: 'initSuccessStoreAndForward'
          },
          [getChannelName('_RESET_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('_SHARE_IPAB')]: {
            bind: 'modalIpabInfo'
          },
          global_deposit_hiring_success_click: {
            bind: 'createNameToNavigateToDashboard'
          },
          [getChannelName('_RESET_PAGE')]: {
            bind: 'createNameToNavigateToDashboard'
          },
          [getChannelName('_modal_taxes_info_gat')]: {
            bind: 'modalSimulatorHelpBtnTapped'
          }
        },
        out: {
          deposits_hiring_success_create_page: {
            bind: 'deposit-navigate-to-page-dashboard'
          },
          [getChannelName('_SET_SUCCESS_DATA')]: {
            bind: 'set-success-data'
          },
          [getChannelName('_SET_SUCCESS_TYPE')]: {
            bind: 'set-success-type'
          },
          dashboard_pull_to_refresh_start: {
            bind: 'modalExitConfirmation'
          },
          [getChannelName('_BG_HEADER_CLASS')]: {
            bind: 'header-class-changed'
          },
          global_deposits_purchase_modal_info_ipab: {
            bind: 'modal-info-ipab'
          },
          close_undefined_control_veil: {
            bind: 'close-spinner-veil'
          },
          show_undefined_modal: {
            bind: 'open-undefined-session'
          },
          global_alert_manager_open_with_settings: {
            bind: 'modal-info-simulator'
          }
        }
      }
    }
  };

  const depositsAnalyticsHiring = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-offers-deposit-hiring-manager',
    familyPath: '@glomo-web-components/glomo-analytics-offers-deposit-hiring-manager',
    render: 'litElement',
    properties: {
      modalCodes: {
        'ipab': {pageInfoLevel3: 'ipab', isPageError: false}
      },
      cellsConnections: {
        in: {
          deposit_hiring_to_success: {
            bind: 'analyticsInfo'
          },
          global_send_info_process_promotion: {
            bind: 'proccess'
          },
          [getChannelName('_SET_SUCCESS_DATA')]: {
            bind: 'fireAnalyticsGlobalComplete'
          },
          global_deposits_purchase_modal_info_ipab: {
            bind: 'firePageView'
          }
        },
        out: {
          analytics_complete_success: {
            bind: 'app-completed-analytics',
            analytics: ANALYTICS.appCompletedCustom('pagina exitosa', 'contratado')
          },
          analytics_complete_in_process: {
            bind: 'app-inprocess-analytics',
            analytics: ANALYTICS.appCompletedCustom('pagina exitosa', 'en revision')
          },
          [getChannelName('page_view')]: {
            bind: 'dispatch-dynamic-page-view',
            analytics: ANALYTICS.pageView({pageInfoLevel3: '', isPageError: false})
          }
        }
      }
    }
  };

  const base = {
    hash: +'deposit-hiring-review',
    currentPage: {
      url: '/deposit-hiring-review'
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      header,
      successComponent,
      shareReceipt,
      dmHiring,
      navigationHandler,
      depositsAnalyticsHiring
    ]
  };

  return base;
};
