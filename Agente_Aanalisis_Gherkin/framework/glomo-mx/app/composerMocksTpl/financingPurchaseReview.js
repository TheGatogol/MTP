'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');

  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const isNativeIos = CONFIG.nativeIos || false;
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('card');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const UNMASKED = false;
  const pages = require('./common/_pages')(CONFIG)('_financingPurchaseReview');// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-confirm-buttons-next',
        action: 'exit'
      }
    }
  };
  const base = {
    hash: 'financing-purchase-review',
    currentPage: {
      url: '/financing-purchase/review',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        className: `financingPurchaseReview bg-darker-green ${isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey'}`,
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        disableEdgeSwipe: true,
        extraHeaderClass: 'light-green-bg',
        iOSFixedHeader: true,
        cellsConnections: {
          in: {
            financing_review_init_page: {
              bind: 'recalculateHeader'
            },
            financing_review_reset_scroll: {
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
          pageName: 'financingPurchaseReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_financingPurchaseReview: {
                bind: 'init'
              }
            },
            out: {
              financing_review_init_page: {
                bind: 'init-page'
              },
              global_get_offer_banner: {
                bind: 'init-page'
              },
              financing_review_reset_page: {
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
          secondaryClass: 'header--core',
          rightIcon: 'coronita:close',
          titleName: '',
          cellsConnections: {
            in: {
              financing_purchase_header_title_name: {
                bind: 'titleName'
              },
              financing_review_add_header_config: {
                bind: 'setSecondaryClass'
              },
              financing_review_remove_header_config: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              navigation_financing_review_to_continue: {
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
          headerTitle: 'glomo-transfer-header-title',
          localCurrency: LOCAL_CURRENCY,
          className: 'financing-review super-index-currency body-section-padding-top black-message-link',
          unmasked: UNMASKED,
          hideExchangeRateValueBaseCurrency: true,
          language: LANGUAGE,
          vsibleChars: VISIBLE_CHARS,
          page: 'FinancingPurchase',
          canceledSrcImg: '/images/general_error.svg',
          disableButtons: true,
          animateFromTo: true,
          formatDate: 'DD MMMM YYYY HH:mm',
          screenShotEnabled: !!CONFIG.nativeShell || !!CONFIG.cordova,
          operationsListLayout: 'review',
          errorOriginAvatarSrc: './images/icon_card.svg',
          cellsConnections: {
            in: {
              financing_review_set_receipt_screenshot_response: {
                bind: 'screenShotResultResponse'
              },
              financing_review_set_receipt_screenshot_error: {
                bind: 'screenShotResultError'
              }
            },
            out: {
              financing_review_reset_scroll: {
                bind: 'reset-layer-scroll'
              },
              financing_review_confirm_buttons_config: {
                bind: 'set-confirm-buttons-config'
              },
              financing_review_share_receipt: {
                bind: 'share-receipt-capture'
              },
              financing_review_add_header_config: {
                bind: 'data-status-success'
              },
              financing_review_remove_header_config: {
                bind: 'data-status-pending'
              },
              financing_review_download_receipt: {
                bind: 'operation-click'
              },
              financing_review_click_message_secondary: {
                bind: 'on-click-message-secondary'
              }
            },
            params: {
              result: 'financingResult',
              productId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        type: 'UI',
        properties: {
          config: configButtons,
          cellsConnections: {
            in: {
              financing_review_confirm_buttons_config: {
                bind: 'config'
              }
            },
            out: {
              financing_review_to_continue: {
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
