'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PRODUCT = 'internationalTransfersSuccess';
  const pages = require('./common/_pages')(CONFIG)(PRODUCT);
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage(CONFIG);
  const OPERATIVE_PREFIX = PRODUCT.toUpperCase();
  const [ getChannelName ] = utils.useNames(OPERATIVE_PREFIX);
  const isNativeIos = CONFIG.nativeIos;

  const template = {
    tag: 'glomo-opx-template',
    properties: {
      delayScrollTop: 300,
      topOnConfirm: true,
      summaryPositionUnset: true,
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'bbva-core-blue',
      cellsConnections: {
        in: {
          [PRODUCT + '_INIT_PAGE']: {
            bind: '_resetLayerScroll'
          },
          [PRODUCT + '_review_init_page']: {
            bind: 'recalculateHeader'
          }
        },
        out: {
          [PRODUCT + 'content-scroll']: {
            bind: 'opx-template-content-scroll'
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
        },
        out: {
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PRODUCT,
      cache: [ '' ],
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PRODUCT]: {
            bind: 'init'
          }
        },
        out: {
          [PRODUCT + '_review_init_page']: {
            bind: 'init-page'
          },
          [PRODUCT + '_RESET_PAGE']: {
            bind: 'reset'
          },
          [PRODUCT + '_INIT_PAGE']: {
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
      id: 'funds-hiring-header-receipt',
      className: IS_NATIVE_IOS ? 'safe-card-header header--evening' : 'header--evening',
      rightIcon: 'coronita:close',
      titleName: 'glomo-international-transfers-foreign-currency-header-title',
      cellsConnections: {
        in: {
          TRANSFER_SET_HEADER_COLOR: {
            bind: 'setProperties'
          }
        },
        out: {
          [PRODUCT + '_back_page_button']: {
            bind: 'click-right-button',
            link: {
              page: 'dashboard'
            }
          },
          dashboard_refresh_financial_overview: {
            bind: 'click-right-button'
          },
          dashboard_pull_to_refresh_start: {
            bind: 'click-right-button'
          },
          global_product_transfer_success: {
            bind: 'click-right-button',
            'forward-to-native': true
          },
          [PRODUCT + '_RESET_PAGE']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const successfulResponse = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    type: 'UI',
    properties: {
      additionalActionEvents: {
        viewStatus: 'view-status'
      },
      className: 'common-transfer-data no-background-avatar not-scroll-sticky',
      formatDate: 'DD MMMM YYYY HH:mm',
      isStickyButton: true,
      language: 'es-MX',
      localCurrency: 'MXN',
      noBold: true,
      noItalic: true,
      visibleChars: 4,
      cellsConnections: {
        in: {
          NAVIGATE_TO_REVIEW_TRANSFER: {
            bind: 'result'
          }
        },
        out: {
          global_product_transfer_success: {
            bind: 'navigate-to-dashboard',
            'forward-to-native': true
          },
          dashboard_pull_to_refresh_start: {
            bind: 'navigate-to-dashboard',
            'forward-to-native': true
          },
          [PRODUCT + '_back_page_button']: {
            bind: 'navigate-to-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          [PRODUCT + '_screen_page']: {
            bind: 'share-receipt-capture'
          },
          [getChannelName('navigation_to_international_transfers_panel')]: {
            bind: 'view-status',
            link: {
              page: 'internationalTransfersPanel',
              cleanUntil: 'internationalTransfersPanel'
            }
          }
        }
      }
    }
  };

  const transfersManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-international-transfers-dm',
    properties: {
      enablePrepareFeedback: true,
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'globalCacheStorage'
          },
          [PRODUCT + '_INIT_PAGE']: {
            bind: 'getCustomerId'
          },
          [PRODUCT + 'content-scroll']: {
            bind: 'scrollCompleteSuccess'
          },
          global_product_transfer_success: {
            bind: 'exitSuccess'
          }
        },
        out: {
          global_download_channel: {
            bind: 'operation-clicked-share',
            'forward-to-native': true
          },
          global_prepare_feedback: {
            bind: 'prepare-feedback-event'
          }
        }
      }
    }
  };

  const screenPage = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      language: LANGUAGE,
      lengthPan: 5,
      headerReceipt: true,
      cellsConnections: {
        in: {
          [PRODUCT + '_screen_page']: {
            bind: 'captureReceipt'
          },
          [PRODUCT + '_review_init_page']: {
            bind: 'reset'
          },
          NAVIGATE_TO_REVIEW_TRANSFER: {
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

  const base = {
    hash: 'mxinternationalTransfers',
    currentPage: {
      url: '/international-transfers-success',
      params: []
    },
    pages,
    template,
    components: [
      navigationHandler,
      lifeCycle,
      header,
      successfulResponse,
      screenPage,
      transfersManager
    ]
  };

  return base;
};
