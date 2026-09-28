/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const PAGE_NAME = 'financeTransactionMultipurchaseReview';
  const PREFIX_NAME_CHANNEL = 'finance_transaction_multipurchase_review';
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('card');
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const SPINNER = utils.SPINNERMAIN(CONFIG);
  const COUNTRY = utils.getCountry(CONFIG);

  SPINNER.properties.className = 'solid-spinner';

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-confirm-buttons-next',
        action: 'exit'
      }
    }
  };

  const base = {
    hash: COUNTRY + 'finance-transaction-multipurchase-review',
    currentPage: {
      url: '/card/finance-transaction-multipurchase/review',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'static',
        drawerWidth: '100%',
        className: `${PAGE_NAME} ${isNativeIos ? 'ios-top-padding' : ''}`,
        disableScrollLock: true,
        hasFooter: true,
        headerFixed: true,
        footerHeight: 100,
        disableEdgeSwipe: true,
        extraHeaderClass: 'light-green-bg',
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            [`${PREFIX_NAME_CHANNEL}_init_page`]: {
              bind: 'recalculateHeader'
            },
            [`${PREFIX_NAME_CHANNEL}_confirm_buttons_config`]: {
              bind: 'resetLayerScroll'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
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
              __bridge_page_financeTransactionMultipurchaseReview: {
                bind: 'init'
              }
            },
            out: {
              [`${PREFIX_NAME_CHANNEL}_init_page`]: {
                bind: 'init-page'
              },
              global_get_offer_banner: {
                bind: 'init-page'
              },
              [`${PREFIX_NAME_CHANNEL}_page`]: {
                bind: 'reset'
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
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark-success',
          rightIcon: 'coronita:close',
          titleName: 'finance-transaction-multipurchase-review-header-title',
          cellsConnections: {
            in: {
              [`${PREFIX_NAME_CHANNEL}_add_header_config`]: {
                bind: 'setSecondaryClass'
              },
              [`${PREFIX_NAME_CHANNEL}_remove_header_config`]: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              global_card_detail_card_detail_data_reload: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        type: 'UI',
        properties: {
          className: 'date-font-medium-italic header-additional-values-key',
          headerTitle: 'finance-transaction-multipurchase-review-header-title',
          localCurrency: LOCAL_CURRENCY,
          unmasked: false,
          type: 'info',
          hideExchangeRateValueBaseCurrency: true,
          language: LANGUAGE,
          vsibleChars: VISIBLE_CHARS,
          page: PAGE_NAME,
          canceledSrcImg: '/images/general_error.svg',
          disableButtons: true,
          animateFromTo: true,
          formatDate: 'DD MMMM YYYY HH:mm [h]',
          screenShotEnabled: !!CONFIG.nativeShell || !!CONFIG.cordova,
          errorOriginAvatarSrc: './images/cards/credit_card_dollar.svg',
          cellsConnections: {
            in: {
              finance_transaction_multipurchase_config_review: {
                bind: 'result'
              },
              finance_transaction_multipurchase_config_review_product_id: {
                bind: 'productId'
              }
            },
            out: {
              [`${PREFIX_NAME_CHANNEL}_confirm_buttons_config`]: {
                bind: 'set-confirm-buttons-config'
              },
              [`${PREFIX_NAME_CHANNEL}_share_receipt`]: {
                bind: 'share-receipt-capture'
              },
              [`${PREFIX_NAME_CHANNEL}_add_header_config`]: {
                bind: 'data-status-success'
              },
              [`${PREFIX_NAME_CHANNEL}_remove_header_config`]: {
                bind: 'data-status-pending'
              }
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
          country: 'mx',
          localCurrency: LOCAL_CURRENCY,
          cellsConnections: {
            in: {
              finance_transaction_multipurchase_config_review: {
                bind: 'result'
              },
              [`${PREFIX_NAME_CHANNEL}_share_receipt`]: {
                bind: 'captureReceipt'
              },
              [`${PREFIX_NAME_CHANNEL}_init_page`]: {
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
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          config: configButtons,
          cellsConnections: {
            in: {
              [`${PREFIX_NAME_CHANNEL}_confirm_buttons_config`]: {
                bind: 'config'
              }
            },
            out: {
              global_card_detail_card_detail_data_reload: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };


  addCommonErrors(base.components)();

  return base;
};
