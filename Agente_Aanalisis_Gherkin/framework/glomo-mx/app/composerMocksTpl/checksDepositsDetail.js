'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('checksDepositsDetail');
  const isNativeIos = CONFIG.nativeIos || false;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const FORMAT_DATE = utils.getShortFormatDate();
  const FORMAT_HOUR = 'HH:mm [h]';
  const FORMAT_OPERATION_DATE = 'DD MMMM YYYY, HH:mm [h]';

  const base = {
    hash: 'checks-deposits-detail',
    currentPage: {
      url: '/checks-deposits-detail',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        preventScrollWithOverlay: true,
        extraHeaderClass: 'dark-blue-bg',
        className: isNativeIos ? 'ios-top-padding dark-blue-bg' : 'dark-blue-bg',
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            checks_deposits_detail_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          },
          out: {}
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        tag: 'cells-molecule-header',
        type: 'UI',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-check-detail-header-title',
          cellsConnections: {
            in: {},
            out: {
              checks_deposits_detail_to_continue: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksDepositsDetail',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              '__bridge_page_checksDepositsDetail': {
                bind: 'init'
              }
            },
            out: {
              checks_deposits_detail_init_page: {
                bind: 'init-page'
              },
              checks_deposits_detail_reset_page: {
                bind: 'reset'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-transaction-detail',
        properties: {
          localCurrency: utils.getLocalCurrency(CONFIG),
          operationsListLayout: 'review',
          showStatus: true,
          shareTransaction: true,
          customDetail: true,
          cellsConnections: {
            in: {
              check_set_main_detail: {
                bind: 'mainTransaction'
              },
              check_set_detail: {
                bind: 'transaction'
              },
              checks_deposits_detail_init_page: {
                bind: 'reset'
              }
            },
            out: {
              check_detail_create_image_share: {
                bind: 'share-transaction-receipt-capture'
              }
            },
            params: {
              checkId: 'checkId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        type: 'UI',
        properties: {
          language: LANGUAGE,
          localCurrency: LOCAL_CURRENCY,
          maxLineWidth: 45,
          sharedReceiptStyles: {
            section: {
              'margin-bottom': '1rem'
            }
          },
          cellsConnections: {
            in: {
              check_detail_set_result_share: {
                bind: 'result'
              },
              check_detail_create_image_share: {
                bind: 'captureReceipt'
              },
              global_share_receipt_error_accept: {
                bind: 'retryOperation'
              },
              checks_deposits_detail_init_page: {
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
              checks_deposits_detail_captured: {
                bind: 'receipt-captured'
              },
              global_alert_manager_open_with_settings: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-check-detail-dm',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          accountsApiVersion: CONFIG.globalServices.versions.accountsV1,
          language: LANGUAGE,
          locale: utils.getLocalCurrency(CONFIG),
          localCurrency: utils.getLocalCurrency(CONFIG),
          formatDate: FORMAT_DATE,
          formatHour: FORMAT_HOUR,
          formatOperationDate: FORMAT_OPERATION_DATE,
          cellsConnections: {
            in: {
              navigate_to_check_deposits_list: {
                bind: 'account'
              },
              checks_deposits_detail_init_page: {
                bind: 'reset'
              },
              checks_deposits_detail_captured: {
                bind: 'shareDetail'
              },
              checks_deposits_handle_share_detail_error: {
                bind: 'handleShareDetailError'
              }
            },
            out: {
              check_set_detail: {
                bind: 'glomo-check-detail-parsed'
              },
              check_set_main_detail: {
                bind: 'glomo-check-detail-main-parsed'
              },
              check_detail_set_result_share: {
                bind: 'glomo-check-detail-parsed'
              },
              checks_deposits_detail_open_share_image: {
                bind: 'checks-deposits-share-detail'
              },
              global_retry_error: {
                bind: 'glomo-check-detail-get-retry-error'
              },
              global_generic_error: {
                bind: 'checks-deposits-detail-share-error'
              },
              checks_deposits_detail_go_back: {
                bind: 'checks-deposits-detail-go-back',
                backStep: true
              }
            },
            params: {
              checkId: 'checkId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-action-launcher',
        properties: {
          cellsConnections: {
            in: {
              checks_deposits_detail_open_share_image: {
                bind: 'shareImage'
              }
            },
            out: {
              checks_deposits_handle_share_detail_error: {
                bind: 'error-share-image'
              }
            }
          }
        }
      }
    ]
  };

  addRetryErrors(base)([
    {
      id: 'checks-deposits-detail-error',
      acceptRetry: { bind: 'getCheckDetail', component: 'glomo-check-detail-dm' },
      successEvent: { bind: 'glomo-check-detail-parsed', component: 'glomo-check-detail-dm'},
      cancelRetry: { bind: 'goBackToListSearching', component: 'glomo-check-detail-dm' },
      acceptCallForHelp: { bind: 'goBackToListSearching', component: 'glomo-check-detail-dm' }
    }
  ]);

  //Add common errors
  addCommonErrors(base.components)();

  return base;
};
