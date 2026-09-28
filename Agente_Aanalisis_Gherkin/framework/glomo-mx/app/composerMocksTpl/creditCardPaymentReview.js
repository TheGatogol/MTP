'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pageName = 'creditCardPaymentReview';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const { getFormatDateCCPR, SPINNER: getSpinner } = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const COUNTRY = utils.getCountry(CONFIG);
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('card');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const UNMASKED = false;
  const pages = require('./common/_pages')(CONFIG)('_creditCardPayment');
  const COUNTRIES_WITH_PAYED_AMOUNT_AS_MAIN_AMOUNT = [ 'pe' ];// eslint-disable-next-line new-cap
  const spinner = getSpinner(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  spinner.propertiesSpherica = {
    className: 'solid-spinner'
  };

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-confirm-buttons-next',
        action: 'exit'
      }
    }
  };
  const base = {
    hash: COUNTRY + 'credit-card-payment-review',
    currentPage: {
      url: '/credit-card-payment/review',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'static',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding bg-light-grey' : 'bg-light-grey',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        headerFixed: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'light-green-bg',
        cellsConnections: {
          in: {
            credit_card_payment_review_init_page: {
              bind: 'recalculateHeader'
            },
            credit_card_payment_review_reset_scroll: {
              bind: 'resetLayerScroll'
            }
          }
        }
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'cells-template-coronita-spherica',
        type: 'modal'
      })
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'creditCardPaymentReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_creditCardPaymentReview: {
                bind: 'init'
              }
            },
            out: {
              credit_card_payment_review_init_page: {
                bind: 'init-page'
              },
              global_get_offer_banner: {
                bind: 'init-page'
              },
              credit_card_payment_review_reset_page: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--dark-success',
          secondaryClass: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'card-credit-card-payment-review-title',
          cellsConnections: {
            in: {
              credit_card_payment_review_add_header_config: {
                bind: 'setSecondaryClass'
              },
              credit_card_payment_review_remove_header_config: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              navigation_credit_card_payment_review_to_continue: {
                bind: 'click-right-button',
                backStep: true
              },
              dashboard_refresh_financial_overview: {
                bind: 'click-right-button'
              },
              dashboard_pull_to_refresh_start: {
                bind: 'click-right-button'
              },
              global_account_credit_card_payment_update_product: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: sphericaPageUtils.getProperties({
          componentName: 'cells-molecule-header-spherica',
          type: 'modal'
        })
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-credit-card-payment-router',
        properties: {
          cellsConnections: {
            in: {
              credit_card_payment_review_do_another_credit_card_payment: {
                bind: 'doAnotherPayment'
              },
              navigation_credit_card_payment_review_to_continue: {
                bind: 'navigate'
              },
              credit_card_payment_review_to_continue: {
                bind: 'navigate'
              },
              navigation_credit_card_review_to_save_frequent_operation: {
                bind: 'createFrequentOperation'
              }
            },
            out: {

              // From glomo-navigation-handler
              navigation_credit_card_payment_review_to_dashboard: {
                bind: 'navigation-to-dashboard-product-id',
                backStep: true
              },
              navigation_account_credit_card_payment_product_id: {
                bind: 'navigation-to-account-product-id',
                backStep: true
              },
              navigation_card_credit_card_payment_product_id: {
                bind: 'navigation-to-card-product-id',
                backStep: true
              },

              // Navigation back to credit card payment operative with
              // default account id, card id and currency code
              navigation_review_to_credit_card_payment_account_access: {
                bind: 'do-another-credit-card-payment-account-access',
                link: {
                  page: 'accountCreditCardPayment',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  },
                  cleanUntil: 'accountCreditCardPayment'
                }
              },
              navigation_review_to_credit_card_payment_card_access: {
                bind: 'do-another-credit-card-payment-card-access',
                link: {
                  page: 'cardCreditCardPayment',
                  params: {
                    productId: 'productId',
                    continue: 'continue'
                  },
                  cleanUntil: 'cardCreditCardPayment'
                }
              },
              navigation_credit_card_payment_review_to_frequent_operations_creation: {
                bind: 'create-credit-card-payment-frequent-operation',
                link: {
                  page: 'frequentOperationsCreation'
                }
              },
              global_credit_card_payment_create_frequent_operation: {
                bind: 'create-credit-card-payment-frequent-operation'
              }
            },
            params: {

              // For glomo-navigation-handler
              productId: 'productId',
              continue: 'continue',

              // Comes from credit card payment operative. See GLOMOCS6-1952
              accountId: 'nextPaymentAccountId',
              cardId: 'nextPaymentCardId',
              currencyCode: 'nextPaymentCurrencyCode',

              // Goes to credit card payment operative. See GLOMOCS6-1952
              defaultAccountId: 'defaultAccountId',
              defaultCardId: 'defaultCardId',
              defaultCurrencyCode: 'defaultCurrencyCode',

              // This result comes previous page
              creditCardPaymentResult: 'creditCardPaymentResult'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-card-payment-receipt',
        tagSpherica: 'cells-share-card-payment-receipt-spherica',
        familyPath: 'cells-share-operative-receipt',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          language: LANGUAGE,
          country: COUNTRY,
          cellsConnections: {
            in: {
              credit_card_payment_review_share_receipt: {
                bind: 'captureReceipt'
              },
              credit_card_payment_review_init_page: {
                bind: 'reset'
              },
              global_account_credit_card_payment_set_success_result_share_receipt: {
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
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        type: 'UI',
        properties: {
          headerTitle: 'glomo-transfer-header-title',
          localCurrency: LOCAL_CURRENCY,
          unmasked: UNMASKED,
          hideExchangeRateValueBaseCurrency: true,
          language: LANGUAGE,
          vsibleChars: VISIBLE_CHARS,
          page: 'AccountCreditCardPayment',
          canceledSrcImg: '/images/general_error.svg',
          errorOriginAvatarSrc: './images/icon_card.svg',
          disableButtons: true,
          animateFromTo: true,
          className: 'list-card-payment',
          formatDate: getFormatDateCCPR(),
          screenShotEnabled: !!CONFIG.nativeShell || !!CONFIG.cordova,
          operationsListLayout: 'review',
          showPayedAmountAsMainAmount: COUNTRIES_WITH_PAYED_AMOUNT_AS_MAIN_AMOUNT.includes(COUNTRY),
          cellsConnections: {
            in: {
              credit_card_payment_review_first_filtered_offer: {
                bind: 'bannerConfig'
              },
              credit_card_payment_review_set_receipt_screenshot_response: {
                bind: 'screenShotResultResponse'
              },
              credit_card_payment_review_set_receipt_screenshot_error: {
                bind: 'screenShotResultError'
              },
              global_account_credit_card_payment_set_success_result: {
                bind: 'result'
              }
            },
            out: {
              credit_card_payment_review_reset_scroll: {
                bind: 'reset-layer-scroll'
              },
              credit_card_payment_review_confirm_buttons_config: {
                bind: 'set-confirm-buttons-config'
              },
              credit_card_payment_review_share_receipt: {
                bind: 'share-receipt-capture'
              },
              credit_card_payment_review_do_another_credit_card_payment: {
                bind: 'on-click-message'
              },
              credit_card_payment_review_add_header_config: {
                bind: 'data-status-success'
              },
              credit_card_payment_review_remove_header_config: {
                bind: 'data-status-pending'
              },
              navigation_credit_card_review_to_save_frequent_operation: {
                bind: 'save-frequent-operation'
              }
            },
            params: {
              result: 'creditCardPaymentResult',
              productId: 'productId'
            }
          }
        },
        propertiesSpherica: {
          withOutAvatar: true,
          withoutHead: false,
          operationListClass: 'centered-items',
          isSpherica: true
        }
      }
    ]
  };

  if (!isSpherica) {
    base.components.push({
      zone: 'app__footer',
      tag: 'cells-confirm-buttons',
      properties: {
        config: configButtons,
        cellsConnections: {
          in: {
            credit_card_payment_review_confirm_buttons_config: {
              bind: 'config'
            }
          },
          out: {
            credit_card_payment_review_to_continue: {
              bind: 'cells-confirm-buttons-click-primary',
              backStep: true
            },
            dashboard_pull_to_refresh_start: {
              bind: 'cells-confirm-buttons-click-primary'
            },
            global_account_credit_card_payment_update_product: {
              bind: 'cells-confirm-buttons-click-primary'
            }
          }
        }
      }
    });
  }

  if (!!CONFIG.nativeShell || !!CONFIG.cordova) {
    base.components.push({
      zone: 'app__main',
      tag: 'cells-mobile-screenshot',
      type: 'UI',
      properties: {
        cellsConnections: {
          in: {
            credit_card_payment_review_get_receipt_screenshot: {
              bind: 'screenShot'
            }
          },
          out: {
            credit_card_payment_review_set_receipt_screenshot_response: {
              bind: 'receipt-screenshot-response'
            },
            credit_card_payment_review_set_receipt_screenshot_error: {
              bind: 'receipt-screenshot-error'
            }
          }
        }
      }
    });
  }

  addCommonErrors(base.components)();

  utils.addOutStorageChannels(base.components, [ 'closed_offers' ]);

  return sphericaPageUtils.spherize(base);
};
