/* eslint-disable no-shadow */
module.exports = (CONFIG) => {
  const { useNames, createPrefixFromPageName, SPINNER: spinner, getCountry, getLanguage, getMediumFormatDate } = require('./common/helpers/_utils');
  const pageName = 'cardlessWithdrawalCommerce';
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = name => `global_${getChannelName(name)}`.toLowerCase();
  const pages = require('./common/_pages')(CONFIG)('cardlessWithdrawalCommerce');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        transferV1,
        storesCommerce
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const analyticsCommerce = require('./analytics/_cardlessWithdrawalCommerce')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerHeight: 0,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_cardlessWithdrawalCommerce: {
            bind: 'init'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
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
      backAction: 'navigation-to-previous-step',
      cellsConnections: {
        in: {
          [getGlobalName('back_step_page')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getGlobalName('navigation_to_previous_step')]: {
            bind: 'navigation-to-previous-step',
            backStep: true
          }
        }
      }
    }
  };
  const bbvaWidgetCommerce = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-cardless-with-drawal-commerce-qr',
    tagSpherica: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica',
    familyPath: '@glomo-web-components/bbva-widget-cardless-with-drawal-commerce-qr',
    familyPathSpherica: '@glomo-web-components/bbva-widget-cardless-with-drawal-commerce-qr-spherica',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      iOSFixedHeader: nativeIos,
      transferVersion: transferV1,
      storesVersion: storesCommerce,
      cellsConnections: {
        in: {
          global_cardless_withdrawal_set_businessCode_data: {
            bind: 'businessCode'
          },
          global_cardless_withdrawal_set_business_code_data_detail: {
            bind: 'businessCode'
          },
          [getGlobalName('create_qr_success')]: {
            bind: 'qrCreateSuccess'
          },
          global_cardless_withdrawal_set_data_to_commerce: {
            bind: 'reviewData'
          },
          global_cardless_withdrawal_set_code_data_detail: {
            bind: 'reviewData'
          },
          [getGlobalName('create_qr_error')]: {
            bind: 'errorRequestPlugin'
          },
          [getGlobalName('init_page')]: {
            bind: 'validateBussinessCode'
          },
          [getGlobalName('receipt_captured')]: {
            bind: 'shareReceipt'
          }
        },
        out: {
          [getGlobalName('back_step_page')]: {
            bind: 'bbva-widget-cardless-with-drawal-commerce-qr-go-back'
          },
          [getGlobalName('request_qr_creator')]: {
            bind: 'qr-data'
          },
          [getGlobalName('operation_click_share')]: {
            bind: 'share-action-response'
          },
          [getGlobalName('set_data_to_share')]: {
            bind: 'set-data-to-share'
          },
          [getGlobalName('generate_qr_error')]: {
            bind: 'error-qr-generate',
            backStep: true
          },
          [getGlobalName('analytics_generate_qr')]: {
            bind: 'logic-generate-data',
            analytics: analyticsCommerce.appPageViewGenerate
          },
          [getGlobalName('analytics_detail_modal_commerce')]: {
            bind: 'logic-option-retire',
            analytics: analyticsCommerce.getAdvancedFootPrintLevel3('comercios')
          },
          [getGlobalName('analytics_detail_error')]: {
            bind: 'logic-error-request',
            analytics: analyticsCommerce.errorPageView('error generacion de qr')
          },
          global_action_launcher_share_image: {
            bind: 'share-receipt-open-launcher'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };
  const qrCreator = {
    zone: 'app__main',
    tag: 'bbva-nativeconnector-bbva-qr-creator',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr-creator',
    render: 'litElement',
    isNativeiOS: nativeIos,
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('request_qr_creator')]: {
            bind: 'generateQr'
          }
        },
        out: {
          [getGlobalName('create_qr_success')]: {
            bind: 'bbva-qr-creator-code-success'
          },
          [getGlobalName('create_qr_error')]: {
            bind: 'bbva-qr-creator-code-error'
          }
        }
      }
    }
  };
  const shareReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    tagSpherica: 'cells-share-generic-receipt-spherica',
    familyPathSpherica: 'cells-share-operative-receipt-spherica',
    properties: {
      country: getCountry(),
      language: getLanguage(),
      formatDate: getMediumFormatDate(),
      cellsConnections: {
        in: {
          [getGlobalName('operation_click_share')]: {
            bind: 'captureReceipt'
          },
          [getGlobalName('set_data_to_share')]: {
            bind: 'result'
          },
          [getGlobalName('init_page')]: {
            bind: 'reset'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getGlobalName('receipt_captured')]: {
            bind: 'receipt-captured'
          }
        }
      }
    },
    propertiesSpherica: {
      country: 'mxGlobal'
    }
  };
  const base = {
    hash: 'cardless-withdrawal-commerce',
    currentPage: {
      url: '/cardless-withdrawal-commerce'
    },
    pages,
    template,
    components: [
      lifeCycle,
      glomoNavigationHandler,
      bbvaWidgetCommerce,
      qrCreator,
      shareReceipt,
      spinner(CONFIG)
    ]
  };
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'cardless-withdrawal-commerce-error-shops',
      acceptRetry: { bind: 'showModalShopsGlobal', component: 'bbva-widget-cardless-with-drawal-commerce-qr' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'cancelRetry', component: 'bbva-widget-cardless-with-drawal-commerce-qr' }
    }
  ]);
  return sphericaPageUtils.spherize(base);
};
