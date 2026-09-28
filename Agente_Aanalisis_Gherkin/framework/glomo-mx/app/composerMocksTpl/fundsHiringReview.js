'use strict';
const moment = require('moment');

module.exports = CONFIG => {
  const PRODUCT = 'fundsHiringReview';
  const pages = require('./common/_pages')(CONFIG)(PRODUCT);
  const IS_NATIVE_IOS  = CONFIG.nativeIos || false;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PRODUCT);

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
          FUNDS_HIRING_SET_HEADER_COLOR_IOS: {
            bind: 'setProperties'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        remove: {
          in: [
            'FUNDS_HIRING_SET_HEADER_COLOR_IOS'
          ]
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
      id: 'funds-hiring-header-receipt',
      rightIcon: 'coronita:close',
      titleName: 'funds-hiring-flow-title',
      cellsConnections: {
        in: {
          FUNDS_HIRING_SET_HEADER_COLOR: {
            bind: 'setProperties'
          }
        },
        out: {
          dashboard_refresh_financial_overview: {
            bind: 'click-right-button'
          },
          [PRODUCT + '_BACKSTEP']: {
            bind: 'click-right-button',
            backStep: true
          },
          [PRODUCT + '_RESET_PAGE']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'header',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };

  const receipt = {
    zone: 'app__main',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    type: 'UI',
    properties: {
      id: 'step-funds-hiring-receipt',
      localCurrency: CONFIG.localCurrency,
      language: CONFIG.lang,
      page: PRODUCT,
      operationsListLayout: 'grid',
      screenShotEnabled: !!CONFIG.nativeShell,
      formatDate: 'D MMMM YYYY, HH:mm:ss [h]',
      animateFromTo: true,
      cellsConnections: {
        in: {
          NAVIGATE_TO_REVIEW_FUNDS_HIRING_RESULT: {
            bind: 'setProperties'
          }
        },
        out: {
          funds_hiring_share_receipt: {
            bind: 'share-receipt-capture'
          },
          funds_hiring_exit_receipt: {
            bind: 'cells-successful-response-click-primary',
            link: {
              page: 'dashboard'
            }
          },
          global_refresh_dashboard_generic: {
            bind: 'cells-successful-response-click-primary'
          },
          dashboard_accounts_refresh: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-padding-top--0',
      disableButtons: true,
      operationListClass: 'centered-items',
      operationsListLayout: 'review',
      messageContainerClass: ''
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
          funds_hiring_share_receipt: {
            bind: 'captureReceipt'
          },
          NAVIGATE_TO_REVIEW_FUNDS_HIRING_RESULT: {
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

  const base = {
    hash: 'mx-funds-hiring-review',
    currentPage: {
      url: '/funds-hiring-review',
      params: []
    },
    pages,
    template,
    components: [
      navigationHandler,
      lifeCycle,
      header,
      receipt,
      shareDm
    ]
  };

  return sphericaPageUtils.spherize(base);
};
