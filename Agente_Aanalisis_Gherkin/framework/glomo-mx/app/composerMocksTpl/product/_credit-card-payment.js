'use strict';

module.exports = PRODUCT => CONFIG => {
  const utils = require('../common/helpers/_utils');

  const COUNTRY = utils.getCountry();
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const pages = require('../common/_pages')(CONFIG)(PRODUCT + 'CreditCardPayment');
  const LOCAL_CURRENCY = utils.getLocalCurrency();
  const isNativeIos = CONFIG.nativeIos || false;

  const base = {
    hash: PRODUCT + '-credit-card-payment',
    currentPage: {
      url: PRODUCT + '-credit-card-payment',
      params: []
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        animationType: 'verticalUp',
        headerFixed: true,
        className: 'bg-core-blue',
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            [PRODUCT + '_credit_card_payment_summary_open']: {
              bind: 'showConfirm'
            },
            [PRODUCT + '_credit_card_payment_retry_simulation']: {
              bind: 'showConfirm'
            },
            [PRODUCT + '_credit_card_payment_reset_page']: {
              bind: 'close'
            },
            [PRODUCT + '_credit_card_payment_close_summary']: {
              bind: 'close'
            },
            [PRODUCT + '_credit_card_payment_only_summary_closed']: {
              bind: 'close'
            },
            [PRODUCT + '_credit_card_payment_reset_scroll']: {
              bind: 'resetLayerScroll'
            },
            [PRODUCT + '_credit_card_payment_scroll_zone']: {
              bind: 'scrollItemIntoView'
            },
            ['global_' + PRODUCT + '_credit_card_payment_cells_scroll_zone']: {
              bind: 'scrollItemIntoView'
            },
            ['global_' + PRODUCT + '_credit_card_payment_set_reset_scroll']: {
              bind: 'resetLayerScroll'
            },
            [PRODUCT + '_credit_card_payment_init_page']: {
              bind: 'recalculateHeader'
            },
            transfer_complete_simulation: {
              bind: 'resetLayerScroll'
            },
            account_credit_card_payment_can_execute: {
              bind: 'resetLayerScroll'
            },
            ['global_' + PRODUCT + '_credit_card_payment_enable_credit_card_payment']: {
              bind: 'showConfirm'
            },
            ['global_' + PRODUCT + '_credit_card_payment_disable_credit_card_payment']: {
              bind: 'close'
            },
            'card_credit_card_payment_event_focus_out': {
              bind: 'resetStatusBarTop'
            },
            card_credit_card_payment_selected_amount: {
              bind: 'recalculateStatusBarTop'
            },
            card_credit_card_payment_dont_change_amount: {
              bind: 'recalculateHeader'
            },
            card_credit_card_payment_change_account_selected: {
              bind: 'resetLayerScroll'
            }
          },
          out: {
            [PRODUCT + '_credit_card_payment_scroll_complete']: {
              bind: 'cells-scroll-complete'
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
          pageName: PRODUCT + 'CreditCardPayment',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false,
            [PRODUCT + '-visit-payment-page']: true
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT +  'CreditCardPayment']: {
                bind: 'init'
              },
              ['global_' + PRODUCT + '_credit_card_payment_navigate_to_review_page']: {
                bind: 'reset'
              },
              ['global_' + PRODUCT + '_credit_card_payment_navigate_to_review_page_dashboard']: {
                bind: 'reset'
              }
            },
            out: {
              [PRODUCT + '_visit_payment_page']: {
                bind: PRODUCT + '-visit-payment-page'
              },
              [PRODUCT + '_credit_card_payment_reset_page']: {
                bind: 'reset'
              },
              [PRODUCT + '_credit_card_payment_reset_products']: {
                bind: 'reset'
              },
              [PRODUCT + '_credit_card_payment_init_page']: {
                bind: 'init-page'
              },
              ['global_' + PRODUCT + '_credit_card_payment_init_page']: {
                bind: 'init-page'
              },
              ['global_' + PRODUCT + '_credit_card_payment_steps_completed']: {
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
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'cells-' + PRODUCT + '-credit-card-payment-title',
          cellsConnections: {
            in: {},
            out: {
              ['manage_navigation_' + PRODUCT + '_credit_card_payment_to_page']: {
                bind: 'click-right-button'
              },
              ['global_' + PRODUCT + '_credit_card_payment_exit_request']: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'header-left-button',
          continue: PRODUCT,
          cellsConnections: {
            in: {
              ['navigation_' + PRODUCT + '_credit_card_payment_to_page']: {
                bind: 'navigate'
              },
              ['global_' + PRODUCT + '_credit_card_payment_exit']: {
                bind: 'navigate'
              },
              navigation_to_credit_card_payment_result: {
                bind: 'navigateToPage'
              },
              ['global_' + PRODUCT + '_credit_card_payment_exit_operative']: {
                bind: 'goBack'
              },
              ['global_' + PRODUCT + '_credit_card_payment_navigate_to_success_review']: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_card_payment_to_producte_detail: {
                bind: 'navigation-to-' + PRODUCT + '-product-id',
                backStep: true
              },
              navigation_account_payment_to_producte_detail: {
                bind: 'navigation-to-' + PRODUCT + '-product-id',
                backStep: true
              },
              ['global_' + PRODUCT + '_credit_card_payment_good_bye']: {
                bind: 'header-left-button',
                backStep: true
              },
              ['global_' + PRODUCT + '_credit_card_payment_navigate_to_review_page']: {
                bind: 'navigation-to-creditCardPaymentReview-product-id',
                link: {
                  page: 'creditCardPaymentReview'
                }
              },
              ['global_' + PRODUCT + '_credit_card_payment_navigate_to_review_page_dashboard']: {
                bind: 'navigation-to-creditCardPaymentReview',
                link: {
                  page: 'creditCardPaymentReview'
                }
              }
            },
            params: {
              productId: 'productId',
              continue: 'continue'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-products-dm-' + COUNTRY + '-creditcard-payment',
        familyPath: 'glomo-products-dm',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          accountsApiVersion: CONFIG.globalServices.versions.accounts,
          apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregator,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          localCurrency: LOCAL_CURRENCY,
          cellsConnections: {
            in: {
              [PRODUCT + '_credit_card_payment_get_products']: {
                bind: 'getProducts'
              },
              global_account_credit_card_payment_error_products_try_again: {
                bind: 'retryGetProducts'
              }
            },
            out: {
              [PRODUCT + '_credit_card_payment_set_products']: {
                bind: 'set-products-operative'
              },
              [PRODUCT + '_credit_card_payment_error_products']: {
                bind: 'error-on-get-products'
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        type: 'UI',
        tag: 'cells-operation-summary',
        properties: {
          localCurrency: LOCAL_CURRENCY,
          buttonLabel: 'card-credit-card-payment-step-summary-view-continue',
          showLegalTerms: false,
          showAddition: true,
          showLoadingSkeleton: true,
          messageHead: 'cells-icon-message-message-head-unsuccess-operation',
          message: 'cells-icon-message-message-not-load-total-operation',
          messageButtonLabel: 'cells-icon-message-message-button-label-retry',
          summaryViewTitle: 'card-credit-card-payment-step-summary-view-title',
          managmentFeesMessage: 'payment',
          noFeesMessage: 'payment',
          itfIcon: 'coronita:help',
          isNativeIos: isNativeIos,
          hideCustomFeesMessage: false,
          cellsConnections: {
            in: {
              [PRODUCT + '_credit_card_payment_reset_page']: {
                bind: 'reset'
              },
              transfer_source_currency: {
                bind: 'currencyCode'
              },
              [PRODUCT + '_credit_card_payment_set_simulation_result']: {
                bind: 'operation'
              },
              [PRODUCT + '_credit_card_payment_can_execute']: {
                bind: 'canExecute'
              },
              [PRODUCT + '_credit_card_payment_simulation_parsed_error']: {
                bind: 'showCustomError'
              },
              [PRODUCT + '_credit_card_payment_retry_simulation']: {
                bind: 'refreshTransferSimulation'
              },
              [PRODUCT + '_credit_card_payment_summary_view_title']: {
                bind: 'summaryViewTitle'
              },
              [PRODUCT + '_credit_card_payment_summary_button_label']: {
                bind: 'buttonLabel'
              },
              [PRODUCT + '_credit_card_payment_summary_hide_fees_message']: {
                bind: 'hideCustomFeesMessage'
              },
              ['global_' + PRODUCT + '_credit_card_payment_reset']: {
                bind: 'reset'
              },
              ['global_' + PRODUCT + '_credit_card_payment_set_operation_summary']: {
                bind: 'operation'
              },
              ['global_' + PRODUCT + '_credit_card_payment_set_summary_button_label']: {
                bind: 'buttonLabel'
              },
              ['global_' + PRODUCT + '_credit_card_payment_set_summary_hide_fees_message']: {
                bind: 'hideCustomFeesMessage'
              },
              ['global_' + PRODUCT + '_credit_card_payment_set_skeleton']: {
                bind: 'showLoadingSkeleton'
              }
            },
            out: {
              [PRODUCT + '_credit_card_payment_summary_open']: {
                bind: 'summary-open'
              },
              transfer_summary_close: {
                bind: 'summary-close'
              },
              [PRODUCT + '_credit_card_payment_summary_closed']: {
                bind: 'summary-closed'
              },
              global_transfer_summary_open_exchange_rate: {
                bind: 'open-exchange-rate-modal-manager'
              },
              navigation_transfer_to_continue: {
                bind: 'cancel-operation'
              },
              [PRODUCT + '_credit_card_payment_simulation_retry']: {
                bind: 'retry-operation'
              },
              global_transfer_summary_open_taxes_modal: {
                bind: 'open-itf-modal-manager'
              },
              transfer_complete_simulation: {
                bind: 'summary-open'
              },
              ['global_' + PRODUCT + '_credit_card_payment_make_own_transfer']: {
                bind: 'summary-closed'
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
