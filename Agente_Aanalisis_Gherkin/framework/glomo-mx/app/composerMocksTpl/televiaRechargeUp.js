'use strict';
module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName, getAlternativeFormatDate, getLocalCurrency, getCountry, glomoOpenDocument } = utils;
  const PAGE_NAME = 'televiaRechargeUp';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const GLOMO_OPEN_DOCUMENT = glomoOpenDocument(CONFIG);
  const DATE_TIME_FORMAT = getAlternativeFormatDate();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: false,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          [getChannelName + '_INIT_CHANNEL']: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      className: `bg-light-grey ${isNativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: 'dark-blue-bg'
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName + '_INIT_CHANNEL']: {
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

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          paseRegisterTag_RESET: {
            bind: 'goBack'
          },
          paseTagCardRechargeReview_REFRESH_LIST: {
            bind: 'goBack'
          }
        },
        out: {
          BACK_STEP: {
            bind: 'header-right-button',
            link: {
              page: 'tagCardList',
              cleanUntil: 'rechargeTag'
            }
          }
        }
      }
    }
  };

  const tagRechargeDm = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-toll-recharge-manager',
    tag: 'glomo-toll-recharge-manager-mx',
    properties: {
      cellsConnections: {
        in: {
          tag_SERVICE_SUCCESS_RESPONSE: {
            bind: 'serviceResponse'
          },
          [getChannelName + '_ACCOUNT_SELECTED']: {
            bind: 'accountSelected'
          },
          TAG_RESPONSE_SUCCESS: {
            bind: 'serviceResponse'
          },
          [getChannelName + '_OPERATION_CLICKED_SHARE']: {
            bind: 'operationClicked'
          },
          televiaRechargeUp_NAVIGATION_TO_RECHARGE_REVIEW: {
            bind: 'shareReceipt'
          }
        },
        out: {
          global_download_channel: {
            bind: 'operation-clicked-share',
            'forward-to-native': true
          },
          [getChannelName('_REFUND_RECEIPT_INFO')]: {
            bind: 'share-refund-receipt'
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
      className: isNativeIos ? 'header--core-ios header--dark-success' : 'header--dark-success',
      rightIcon: 'coronita:close',
      titleName: 'pase-tag-recharge-review-header-title',
      cellsConnections: {
        out: {
          paseRegisterTag_RESET: {
            bind: 'click-right-button'
          },
          paseTagCardRechargeReview_REFRESH_LIST: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'header--white',
      rightIconText: 'bbva-header-main-close-aria-label'
    }
  };

  const successfulResponse = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    tagSpherica: 'cells-successful-response-spherica',
    properties: {
      formatDate: DATE_TIME_FORMAT,
      className: 'loan-payment-success',
      cellsConnections: {
        in: {
          televiaRechargeUp_NAVIGATION_TO_RECHARGE_REVIEW: {
            bind: 'result'
          }
        },
        out: {
          [getChannelName('_SHARE_RECEIPT_CAPTURE')]: {
            bind: 'share-receipt-capture'
          },
          [getChannelName + '_RETURN_PAGE']: {
            bind: 'cells-successful-response-click-primary',
            link: {
              page: 'tagCardList',
              cleanUntil: 'rechargeTag'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'centered-operation-list',
      operationListClass: 'centered-items',
      operationsVariant: 'primary-alt',
      disableButtons: true
    }
  };
  const cellsShareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      language: getLocalCurrency(CONFIG),
      country: getCountry(),
      formatDate: DATE_TIME_FORMAT,
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
          [getChannelName('_SHARE_RECEIPT_CAPTURE')]: {
            bind: 'captureReceipt'
          },
          [getChannelName('_REFUND_RECEIPT_INFO')]: {
            bind: 'result'
          },
          mobile_manage_operation: {
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
          }
        }
      }
    },
    propertiesSpherica: {
      flatSuccessPage: true,
      operationsVariant: 'primary',
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'share-receipt-show-modal-error'
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'televia-recharge-up',
    currentPage: {
      url: '/televia-recharge-up',
      params: []
    },
    pages: pages,
    template,
    components: [
      lifeCycle,
      tagRechargeDm,
      navigationHandler,
      successfulResponse,
      cellsShareReceipt,
      header
    ]
  };
  if (CONFIG.native) {
    base.components.push(GLOMO_OPEN_DOCUMENT);
  }

  return sphericaPageUtils.spherize(base);

};
