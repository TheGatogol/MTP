/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PRODUCT = 'addFundToContractReview';
  const pages = require('./common/_pages')(CONFIG)(PRODUCT);
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);

  const spinner = utils.SPINNER(CONFIG);
  spinner.properties.className = 'solid-spinner';
  spinner.properties.open = false;
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    [PRODUCT + '_BACKSTEP']: {
      bind: 'hide'
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [PRODUCT + '_INIT_PAGE']: {
            bind: '_resetLayerScroll'
          },
          ADD_FUND_TO_CONTRACT_SET_HEADER_COLOR_IOS: {
            bind: 'setProperties'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: ''
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
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      id: 'add-fund-to-contract-header-receipt',
      rightIcon: 'coronita:close',
      titleName: 'add-fund-to-contract-flow-title',
      cellsConnections: {
        in: {
          ADD_FUND_TO_CONTRACT_SET_HEADER_COLOR: {
            bind: 'setProperties'
          }
        },
        out: {
          global_refresh_dashboard_generic: {
            bind: 'click-right-button',
            'forward-to-native': true
          },
          [PRODUCT + '_BACKSTEP']: {
            bind: 'click-right-button',
            backStep: true,
            'forward-to-native': true
          },
          [PRODUCT + '_RESET_PAGE']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      secondaryClass: '',
      titleName: 'add-fund-to-contract-flow-title-spherica',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };

  const receipt = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    type: 'UI',
    properties: {
      id: 'add-fund-to-contract-receipt',
      localCurrency: CONFIG.localCurrency,
      language: CONFIG.lang,
      page: 'addFundToContractReview',
      operationsListLayout: 'review',
      screenShotEnabled: !!CONFIG.nativeShell,
      formatDate: 'D MMMM YYYY, HH:mm:ss [h]',
      animateFromTo: true,
      cellsConnections: {
        in: {
          NAVIGATE_TO_REVIEW_FUNDS_ADD_NEW_CONTRACT: {
            bind: 'setProperties'
          }
        },
        out: {
          funds_add_new_contract_share_receipt: {
            bind: 'share-receipt-capture'
          },
          funds_add_new_contract_exit_receipt: {
            bind: 'cells-successful-response-click-primary',
            link: {
              page: 'dashboard'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'equity-contracts centered-operation-list',
      operationListClass: 'centered-items',
      disableButtons: true,
      formatDate: 'DD MMM YYYY, HH:mm:ss [h]'
    }
  };

  const shareDm = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: CONFIG.lang,
      country: 'mx',
      cellsConnections: {
        in: {
          funds_add_new_contract_share_receipt: {
            bind: 'captureReceipt'
          },
          NAVIGATE_TO_REVIEW_FUNDS_ADD_NEW_CONTRACT: {
            bind: 'setProperties'
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

  const addFundToContractManager = {
    zone: 'app__main',
    tag: 'glomo-add-fund-to-contract-manager',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [PRODUCT + '_SHARE_RECEIPT']: {
            bind: 'receiptCaptureWithouthead'
          }
        },
        out: {
          global_download_channel: {
            bind: 'share-btn-tapped-withouthead',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const base = {
    hash: 'add-fund-to-contract-review',
    currentPage: {
      url: '/add-fund-to-contract-review',
      params: []
    },
    pages,
    template,
    components: [
      lifeCycle,
      addFundToContractManager,
      header,
      receipt,
      shareDm
    ]
  };

  return sphericaPageUtils.spherize(base);
};
