/* eslint-disable new-cap, no-shadow */
'use strict';
const moment = require('moment');
module.exports = CONFIG => {
  const PAGE_NAME = 'financeTransactionMultipurchase';
  const PREFIX_NAME_CHANNEL = 'finance_transaction_multipurchase';
  const utils = require('./common/helpers/_utils');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const isNativeIos = !!CONFIG.nativeIos;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const localStorage = require('./common/_local-storage');
  const signConnectorGenerator = require('./common/_sign-connector')(CONFIG);
  const CONSTANTS = require('./analytics/common/_constants');
  const ANALYTICS = require('./analytics/_financeTransactionMultipurchase')(CONFIG);

  const SPINNER = utils.SPINNERMAIN(CONFIG);
  SPINNER.properties.className = 'solid-spinner';
  SPINNER.properties.cellsConnections.in.navigation_finance_transaction_multipurchase = {
    bind: 'openVeil'
  };
  SPINNER.properties.cellsConnections.in[`${PREFIX_NAME_CHANNEL}_set_spinner_messages`] = {
    bind: 'messages'
  };
  const base = {
    hash: 'finance-transaction-multipurchase',
    currentPage: {
      url: '/finance-transaction-multipurchase',
      params: []
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        animationType: 'verticalUp',
        headerFixed: true,
        className: 'bg-core-blue no-vertical-padding scroll-hidden',
        iOSFixedHeader: true,
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_init_page']: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      }
    }
  };

  const commonComponents = [
    SPINNER,
    {
      zone: 'app__main',
      tag: 'cells-handle-life-cycle',
      type: 'UI',
      properties: {
        pageName: PAGE_NAME,
        tokenName: CONFIG.globalServices.requiredToken || 'tsec',
        customInitEvents: {
          'swipe-menu-enabled': false
        },
        cellsConnections: {
          in: {
            __bridge_app: {
              bind: 'navigation'
            },
            __bridge_page_financeTransactionMultipurchase: {
              bind: 'init'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_reset_page']: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_init_page']: {
              bind: 'init-page'
            },
            global_enable_menu_swipe: {
              bind: 'swipe-menu-enabled',
              'forward-to-native': true
            }
          }
        }
      }
    }
  ];

  const modals = [
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'onboarding-full-screen-carousel',
      familyPath: '@bbva-web-components-widgets/onboarding-full-screen-carousel',
      render: 'litElement',
      properties: {
        modalTitle: 'bbva-multistep-finance-transaction-multipurchase-header-text',
        contentFragmentHost: CONFIG.aemHost,
        contentFragmentPath: 'content/caas/mexico/glomo/finance-transaction-multipurchase/onboarding.model.json',
        native: CONFIG.nativeShell,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_set_visible_onboarding']: {
              bind: 'visible'
            },
            [PREFIX_NAME_CHANNEL + '_set_caraousel_items']: {
              bind: 'items'
            },
            [PREFIX_NAME_CHANNEL + '_onboarding_accept_button']: {
              bind: 'close'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_button_click']: {
              bind: 'onboarding-full-screen-carousel-item-select'
            },
            [PREFIX_NAME_CHANNEL + '_generate_carousel_content']: {
              bind: 'aem-content-fragment-dm-fetch'
            },
            [PREFIX_NAME_CHANNEL + '_onboarding_visibility_changed']: {
              bind: 'visible-changed'
            },
            [PREFIX_NAME_CHANNEL + '_onboarding_change_slider']: {
              bind: 'help-onboarding-slide-next'
            },
            [PREFIX_NAME_CHANNEL + '_onboarding_accept_button']: {
              bind: 'finance-multipurchase-onboarding-button-click'
            },
            [PREFIX_NAME_CHANNEL + '_onboarding_close_button']: {
              bind: 'help-modal-header-right-primary-click'
            }
          }
        }
      }
    }
  ];

  const stepComponents = [
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-multistep-finance-transaction-multipurchase',
      familyPath: '@glomo-web-components/bbva-multistep-finance-transaction-multipurchase',
      render: 'litElement',
      properties: {
        localCurrency: LOCAL_CURRENCY,
        currencyCode: LOCAL_CURRENCY,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_set_configuration_step_card']: {
              bind: 'cardData'
            },
            [PREFIX_NAME_CHANNEL + '_reset_page']: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_pagination_changed']: {
              bind: 'managePagination'
            },
            [PREFIX_NAME_CHANNEL + '_get_transactions_success_parsed']: {
              bind: 'addTransactions'
            },
            [PREFIX_NAME_CHANNEL + '_get_transactions_pagination_error']: {
              bind: 'showPaginationError'
            },
            [PREFIX_NAME_CHANNEL + '_set_minium_amount_of_purchases']: {
              bind: 'minimumAmountOfPurchase'
            },
            [PREFIX_NAME_CHANNEL + '_set_defer_movements']: {
              bind: 'deferMovements'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_show_terms_and_conditions_modal']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-show-modal'
            },
            [PREFIX_NAME_CHANNEL + '_select_purchases_help_click']: {
              bind: 'header-category-help-click'
            },
            [PREFIX_NAME_CHANNEL + '_option_input_change']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-selected-purchase'
            },
            [PREFIX_NAME_CHANNEL + '_show_more_transactions']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-show-more-transactions-click'
            },
            [PREFIX_NAME_CHANNEL + '_right_primary_click']: {
              bind: 'header-main-icon-right-primary-click'
            },
            [PREFIX_NAME_CHANNEL + '_invalid_number_purchases']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-purchase-selection-invalid-number-purchases'
            },
            [PREFIX_NAME_CHANNEL + '_invalid_available_amount']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-purchase-selection-invalid-available-amount'
            },
            [PREFIX_NAME_CHANNEL + '_transaction_purchase_selected']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-selected-purchases'
            },
            [PREFIX_NAME_CHANNEL + '_reset_transaction_purchase_selected']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-reset-transaction-purchase-selected'
            },
            [PREFIX_NAME_CHANNEL + '_get_transactions_next_page']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-purchase-load-more-transactions'
            },
            [PREFIX_NAME_CHANNEL + '_get_transactions_pagination_error_click']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-pagination-error-click'
            },
            [PREFIX_NAME_CHANNEL + '_set_defer_payment_months_Help_modal_config']: {
              bind: 'finance-transaction-multipurchase-months-selection-step-help-icon-pressed'
            },
            [PREFIX_NAME_CHANNEL + '_set_defer-month-selected']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-set-defer-months-selected'
            },
            [PREFIX_NAME_CHANNEL + '_request_financing_multipurchase']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-request-financing-multipurchase'
            },
            [PREFIX_NAME_CHANNEL + '_on_continue_months_selection_step']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-continue-months-selected'
            },
            [PREFIX_NAME_CHANNEL + '_on_continue_terms_and_conditions_step']: {
              bind: 'bbva-multistep-finance-transaction-multipurchase-continue-terms-and-conditions'
            }
          }
        }
      }
    }
  ];

  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-finance-transaction-multipurchase',
    familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
    render: 'litElement',
    properties: {
      reviewAvatar: './images/cards/credit_card_dollar.svg',
      localCurrency: LOCAL_CURRENCY,
      currencyCode: LOCAL_CURRENCY,
      language: LANGUAGE,
      phoneNumberBBVALine: CONFIG.phoneNumberContact,
      cellsConnections: {
        in: {
          [PREFIX_NAME_CHANNEL + '_show_terms_and_conditions_modal']: {
            bind: 'showTermsAndConditionsModal'
          },
          [PREFIX_NAME_CHANNEL + '_reset_page']: {
            bind: 'reset'
          },
          global_send_card_detail_data: {
            bind: 'setCard'
          },
          global_get_card_orange_indicators_success: {
            bind: 'setIndicators'
          },
          [PREFIX_NAME_CHANNEL + '_init_page']: {
            bind: 'init'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageNativeBackButton'
          },
          [PREFIX_NAME_CHANNEL + '_right_primary_click']: {
            bind: 'manageBackButton'
          },
          global_opened_modal: {
            bind: 'alertManagerOpened'
          },
          global_storage_get_finance_transaction_visited_success: {
            bind: 'getFromLocalStorageSuccess'
          },
          global_storage_get_finance_transaction_visited_error: {
            bind: 'getFromLocalStorageError'
          },
          [PREFIX_NAME_CHANNEL + '_generate_carousel_content']: {
            bind: 'generateCarouselContent'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions_success']: {
            bind: 'getTransactionsSuccess'
          },
          [PREFIX_NAME_CHANNEL + '_get_card_conditions_success']: {
            bind: 'getConditionsSuccess'
          },
          [PREFIX_NAME_CHANNEL + '_get_card_balances_success']: {
            bind: 'getBalancesSuccess'
          },
          [PREFIX_NAME_CHANNEL + '_select_purchases_help_click']: {
            bind: 'selectPurchasesHelp'
          },
          [PREFIX_NAME_CHANNEL + '_get_card_conditions_error']: {
            bind: 'handleConditionError'
          },
          [PREFIX_NAME_CHANNEL + '_get_card_balances_error']: {
            bind: 'handleCardBalancesError'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions_error']: {
            bind: 'handleTransactionsError'
          },
          [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_simulate_error']: {
            bind: 'handleTransactionsDeferError'
          },
          [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_error']: {
            bind: 'handleTransactionsDeferError'
          },
          [PREFIX_NAME_CHANNEL + '_option_input_change']: {
            bind: 'showExitConfirm'
          },
          [PREFIX_NAME_CHANNEL + '_invalid_number_purchases']: {
            bind: 'showInvalidNumberPurchasesInfo'
          },
          [PREFIX_NAME_CHANNEL + '_invalid_available_amount']: {
            bind: 'showInvalidAvailableAmountInfo'
          },
          [PREFIX_NAME_CHANNEL + '_transaction_purchase_selected']: {
            bind: 'simulateDeferMovements'
          },
          [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_simulate_success']: {
            bind: 'parseSimulateDeferMovements'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions_next_page']: {
            bind: 'getTransactionsNextPage'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions_pagination_error_click']: {
            bind: 'manageTransactionsPaginationError'
          },
          [PREFIX_NAME_CHANNEL + '_set_defer_payment_months_Help_modal_config']: {
            bind: 'openMonthsSelectorHelpInfoModal'
          },
          [PREFIX_NAME_CHANNEL + '_onboarding_visibility_changed']: {
            bind: 'onBoardingVisible'
          },
          [PREFIX_NAME_CHANNEL + '_set_defer-month-selected']: {
            bind: 'setDeferMonthSelectedData'
          },
          [PREFIX_NAME_CHANNEL + '_request_financing_multipurchase']: {
            bind: 'getDeferMovements'
          },
          [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_success']: {
            bind: 'getTransactionDeferMovementsSuccess'
          },
          [PREFIX_NAME_CHANNEL + '_success_customer_detail']: {
            bind: 'customerContactDetailsEmail'
          },
          [PREFIX_NAME_CHANNEL + '_reset_transaction_purchase_selected']: {
            bind: 'financeTransactionSelected'
          }
        },
        out: {
          global_alert_manager_open_with_settings: {
            bind: 'show-modal-with-settings'
          },
          [PREFIX_NAME_CHANNEL + '_set_card_id']: {
            bind: 'set-balances-card-id'
          },
          [PREFIX_NAME_CHANNEL + '_modal_open']: {
            bind: 'show-modal-with-settings'
          },
          global_alert_modal_close: {
            bind: 'close-alert-manager'
          },
          [PREFIX_NAME_CHANNEL + '_exit_operative']: {
            bind: 'exit-operative',
            backStep: true
          },
          [PREFIX_NAME_CHANNEL + '_set_visible_onboarding']: {
            bind: 'set-visible-onboarding'
          },
          [PREFIX_NAME_CHANNEL + '_set_configuration_step_card']: {
            bind: 'set-configuration-step-card'
          },
          [`${PREFIX_NAME_CHANNEL}_set_spinner_messages`]: {
            bind: 'update-spinner-message'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_get_from_storage: {
            bind: 'get-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-from-local-storage'
          },
          global_action_launcher_dialer: {
            bind: 'open-call-action'
          },
          [PREFIX_NAME_CHANNEL + '_set_caraousel_items']: {
            bind: 'set-carousel-items'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions']: {
            bind: 'get-transactions'
          },
          [PREFIX_NAME_CHANNEL + '_get_card_conditions']: {
            bind: 'get-conditions'
          },
          [PREFIX_NAME_CHANNEL + '_get_card_balances']: {
            bind: 'get-balances'
          },
          [PREFIX_NAME_CHANNEL + '_set_minium_amount_of_purchases']: {
            bind: 'set-minimum-amount-of-purchases'
          },
          [PREFIX_NAME_CHANNEL + '_get_defer_movements']: {
            bind: 'get-defer-movements'
          },
          [PREFIX_NAME_CHANNEL + '_get_simulate_defer_movements']: {
            bind: 'get-simulate-defer-movements'
          },
          [PREFIX_NAME_CHANNEL + '_set_defer_movements']: {
            bind: 'set-transactions-defer-movements-data'
          },
          [PREFIX_NAME_CHANNEL + '_set_defer_movements_continue']: {
            bind: 'set-transactions-defer-movements-data'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions_success_parsed']: {
            bind: 'add-transactions'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions_pagination_error']: {
            bind: 'show-pagination-error'
          },
          [PREFIX_NAME_CHANNEL + '_get_next_transactions_page']: {
            bind: 'more-next-page-transactions'
          },
          [PREFIX_NAME_CHANNEL + '_reset_more_transactions_flag']: {
            bind: 'reset-more-transactions'
          },
          [PREFIX_NAME_CHANNEL + '_config_review']: {
            bind: 'finance-transaction-multipurchase-config-review'
          },
          [PREFIX_NAME_CHANNEL + '_config_review_product_id']: {
            bind: 'finance-transaction-multipurchase-config-review-product-id'
          },
          global_card_detail_data_refresh: {
            bind: 'navigate-to-finance-transaction-multipurchase-review',
            link: {
              page: 'financeTransactionMultipurchaseReview',
              cleanUntil: 'financeTransactionMultipurchase'
            }
          },
          [PREFIX_NAME_CHANNEL + '_finance_transaction_multipurchase_error']: {
            bind: 'finance-transaction-multipurchase-error'
          }
        }
      }
    }
  };
  const globalApis = [
    {
      zone: 'app__transactional',
      type: 'DM',
      tag: 'cells-dm-global-apis-cards-bgadpmock',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        cardsApiVersion: '1',
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_set_card_id']: {
              bind: 'cardId'
            },
            [PREFIX_NAME_CHANNEL + '_get_transactions']: {
              bind: 'getTransactions'
            },
            [PREFIX_NAME_CHANNEL + '_get_card_conditions']: {
              bind: 'getCardConditions'
            },
            [PREFIX_NAME_CHANNEL + '_get_card_balances']: {
              bind: 'getCardsCardsBalances'
            },
            [PREFIX_NAME_CHANNEL + '_get_simulate_defer_movements']: {
              bind: 'getTransactionDeferMovementsSimulate'
            },
            [PREFIX_NAME_CHANNEL + '_get_next_transactions_page']: {
              bind: 'getMoreTransactions'
            },
            [PREFIX_NAME_CHANNEL + '_reset_more_transactions_flag']: {
              bind: 'moreTransactions'
            },
            [PREFIX_NAME_CHANNEL + '_get_defer_movements']: {
              bind: 'getTransactionDeferMovements'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_get_transactions_success']: {
              bind: 'set-card-transactions'
            },
            [PREFIX_NAME_CHANNEL + '_get_transactions_error']: {
              bind: 'error-on-get-card-transactions'
            },
            [PREFIX_NAME_CHANNEL + '_get_card_conditions_success']: {
              bind: 'set-card-conditions'
            },
            [PREFIX_NAME_CHANNEL + '_get_card_conditions_error']: {
              bind: 'error-on-get-card-conditions'
            },
            [PREFIX_NAME_CHANNEL + '_get_card_balances_success']: {
              bind: 'set-cards-cards-balances'
            },
            [PREFIX_NAME_CHANNEL + '_get_card_balances_error']: {
              bind: 'error-on-get-cards-cards-balances'
            },
            [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_simulate_success']: {
              bind: 'get-card-transaction-defer-movements-simulate-succes'
            },
            [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_simulate_error']: {
              bind: 'get-card-transaction-defer-movements-simulate-error'
            },
            [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_success']: {
              bind: 'get-card-transaction-defer-movements-succes'
            },
            [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_error']: {
              bind: 'get-card-transaction-defer-movements-error'
            },
            [PREFIX_NAME_CHANNEL + '_pagination_changed']: {
              bind: 'pagination-changed'
            }
          },
          params: {
            cardId: 'productId'
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-customers-bgadpmock',
      properties: {
        host: CONFIG.globalServices.host,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        native: !!CONFIG.native,
        version: '1',
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_init_page']: {
              bind: 'getCustomerDetail'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_success_customer_detail']: {
              bind: 'set-customer-detail'
            },
            [PREFIX_NAME_CHANNEL + '_error_customer_detail']: {
              bind: 'error-on-get-customer-detail'
            }
          },
          params: {
            customerId: 'global_user_id'
          }
        }
      }
    }
  ];

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-finance-transaction-multipurchase-analytics',
    familyPath: '@glomo-web-components/bbva-manager-finance-transaction-multipurchase',
    render: 'litElement',
    properties: {
      signatureTypes: CONSTANTS.SIGNATURE_TYPES,
      cellsConnections: {
        in: {
          [PREFIX_NAME_CHANNEL + '_show_terms_and_conditions_modal']: {
            bind: 'showTermsAndConditionsModal'
          },
          global_send_card_detail_data: {
            bind: 'setProductName'
          },
          global_storage_get_finance_transaction_visited_success: {
            bind: 'managePageVisit'
          },
          [PREFIX_NAME_CHANNEL + '_onboarding_accept_button']: {
            bind: 'firePageVisitFromOnboarding'
          },
          [PREFIX_NAME_CHANNEL + '_onboarding_close_button']: {
            bind: 'firePageVisitFromOnboarding'
          },
          [PREFIX_NAME_CHANNEL + '_get_transactions_success_parsed']: {
            bind: 'firePageVisit'
          },
          [PREFIX_NAME_CHANNEL + '_option_input_change']: {
            bind: 'manageAppStartedId'
          },
          [PREFIX_NAME_CHANNEL + '_select_purchases_help_click']: {
            bind: 'manageAppStartedId'
          },
          [PREFIX_NAME_CHANNEL + '_show_more_transactions']: {
            bind: 'manageAppStartedId'
          },
          [PREFIX_NAME_CHANNEL + '_transaction_purchase_selected']: {
            bind: 'manageDataForAppStep2'
          },
          [PREFIX_NAME_CHANNEL + '_set_defer_movements_continue']: {
            bind: 'fireAppStep2'
          },
          [PREFIX_NAME_CHANNEL + '_set_defer_movements']: {
            bind: 'installmentsList'
          },
          [PREFIX_NAME_CHANNEL + '_on_continue_months_selection_step']: {
            bind: 'fireAppStep3'
          },
          [PREFIX_NAME_CHANNEL + '_on_continue_terms_and_conditions_step']: {
            bind: 'fireAppStep4'
          },
          open_sign_modal_financeTransactionMultipurchase: {
            bind: 'firePageViewOtp'
          },
          [PREFIX_NAME_CHANNEL + '_get_transaction_defer_movements_success']: {
            bind: 'fireAppCompleted'
          },
          [PREFIX_NAME_CHANNEL + '_set_visible_onboarding']: {
            bind: 'openOnboardingCarousel'
          },
          [PREFIX_NAME_CHANNEL + '_onboarding_change_slider']: {
            bind: 'onSliderChange'
          },
          [PREFIX_NAME_CHANNEL + '_modal_open']: {
            bind: 'firePageViewModal'
          },
          [PREFIX_NAME_CHANNEL + '_finance_transaction_multipurchase_error']: {
            bind: 'manageError'
          },
          [PREFIX_NAME_CHANNEL + '_reset_page']: {
            bind: 'resetData'
          }
        },
        out: {
          [PREFIX_NAME_CHANNEL + '_analytics_app_on_click_start']: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [PREFIX_NAME_CHANNEL + '_analytics_app_started']: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [PREFIX_NAME_CHANNEL + '_analytics_app_step_2']: {
            bind: 'analytics-step-2',
            analytics: ANALYTICS.APP_STEP_2
          },
          [PREFIX_NAME_CHANNEL + '_analytics_app_step_3']: {
            bind: 'analytics-step-3',
            analytics: ANALYTICS.APP_STEP_3
          },
          [PREFIX_NAME_CHANNEL + '_analytics_app_step_4']: {
            bind: 'analytics-step-4',
            analytics: ANALYTICS.APP_STEP_4
          },
          [PREFIX_NAME_CHANNEL + '_analytics_page_view_otp']: {
            bind: 'analytics-page-view-otp',
            analytics: ANALYTICS.PAGE_VIEW_OTP
          },
          [PREFIX_NAME_CHANNEL + '_analytics_app_completed']: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          },
          [PREFIX_NAME_CHANNEL + '_analytics_page_view_slider']: {
            bind: 'analytics-page-view-slider',
            analytics: ANALYTICS.PAGE_VIEW_SLIDER
          },
          [PREFIX_NAME_CHANNEL + '_analytics_page_view_modal']: {
            bind: 'analytics-page-view-modal',
            analytics: ANALYTICS.PAGE_VIEW_MODAL
          },
          [PREFIX_NAME_CHANNEL + '_analytics_page_view_information_error']: {
            bind: 'analytics-page-view-information-error',
            analytics: ANALYTICS.ERROR_UNAVAILABLE_INFORMATION
          },
          [PREFIX_NAME_CHANNEL + '_analytics_page_view_operation_error']: {
            bind: 'analytics-page-view-operation-error',
            analytics: ANALYTICS.ERROR_NOT_PERFORMED_OPERATION
          }
        }
      }
    }
  };

  const page = {
    ...base,
    components: [
      ...commonComponents,
      ...stepComponents,
      manager,
      ...modals,
      ...globalApis,
      analyticsManager
    ]
  };
  localStorage.addOutStorageChannels(page.components, [ 'finance_transaction_visited' ], CONFIG);

  const signConnector = signConnectorGenerator(page);
  signConnector('cells-dm-global-apis-cards-bgadpmock', PAGE_NAME, [
    'get-card-transaction-defer-movements-succes',
    'get-card-transaction-defer-movements-error'
  ]);

  const connectionsOut = utils.connectionsOut(page);
  connectionsOut('cells-sign-operation-dm-mx').open_sign_modal_financeTransactionMultipurchase = {
    bind: 'signature-required'
  };
  connectionsOut('cells-sign-operation-dm-mx').sign_modal_signature_type = {
    bind: 'signature-type-enabled-financeTransactionMultipurchase'
  };

  return page;
};
