/* eslint-disable complexity, max-statements */
'use strict';

module.exports = (CONFIG,  operative = 'accountCreditCardPayment') => {
  const PAGE_NAME = 'accountCreditCardPayment';
  const base = require('./product/_credit-card-payment')('account')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const { get }  = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const utils = require('./common/helpers/_utils');
  const {
    useNames,
    createPrefixFromPageName
  } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const getGlobalName = channelName => `global_${getChannelName(channelName)}`.toLowerCase();
  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const FORMAT_DATE = utils.getShortFormatDate();
  const ANALYTICS = require('./analytics/_accountCreditCardPayment')(CONFIG);
  const MAX_STEPS = 3;
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const native = CONFIG.native || false;
  const VISIBLECHARS = utils.getVisibleChars(CONFIG)('card');
  const isNativeIos = CONFIG.nativeIos || false;
  const sphericaEnabledOperatives = [ 'accountCreditCardPayment' ];
  const getComponent = get(base);

  base.template.propertiesSpherica = {
    className: ''
  };

  const opxAccountCreditCardPayment = {
    zone: 'app__main',
    tag: 'glomo-opx-account-credit-card-payment-mx',
    familyPath: 'glomo-opx-account-credit-card-payment',
    type: 'DM',
    properties: {
      className: isNativeIos ? 'header--core-ios header--core' : 'header--core',
      host: CONFIG.globalServices.host,
      native,
      transferApiVersion: CONFIG.globalServices.versions.transfer,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      maxSteps: MAX_STEPS,
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      phoneNumber: CONFIG.phoneNumberContact,
      errorImage: './images/errors/error.svg',
      formatDate: FORMAT_DATE,
      visibleChars: 5,
      cellsConnections: {
        in: {
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          global_dashboard_cards_for_deeplink: {
            bind: 'dashboardCards'
          },
          global_dashboard_cards: {
            bind: 'dashboardCards'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackNavigation'
          },
          navigation_product_detail_to_credit_card_payment: {
            bind: 'setAccountIdAndAmount'
          },
          navigation_from_futura_dashboard: {
            bind: 'setAccountIdAndAmount'
          },
          [getGlobalName('init_page')]: {
            bind: 'init'
          },
          [getGlobalName('steps_completed')]: {
            bind: 'reset'
          },
          [getGlobalName('set_selected_account')]: {
            bind: 'setAccountSelected'
          },
          [getGlobalName('set_selected_card')]: {
            bind: 'getCardPaymentMethods'
          },
          [getGlobalName('change_account')]: {
            bind: 'changeAccount'
          },
          [getGlobalName('change_card')]: {
            bind: 'changeCard'
          },
          [getGlobalName('exit_request')]: {
            bind: 'manageBackNavigation'
          },
          [getGlobalName('set_card_payment_methods_success')]: {
            bind: 'setGetCardPaymentMethodsSuccess'
          },
          [getGlobalName('set_card_payment_methods_error')]: {
            bind: 'setGetCardPaymentMethodsError'
          },
          [getGlobalName('register_accounts_step')]: {
            bind: 'registerStep'
          },
          [getGlobalName('register_cards_step')]: {
            bind: 'registerStep'
          },
          [getGlobalName('register_amount_step')]: {
            bind: 'registerStep'
          },
          [getGlobalName('accept_exit')]: {
            bind: 'exit'
          },
          [getGlobalName('change_payment_amount')]: {
            bind: 'changePaymentAmount'
          },
          [getGlobalName('_selected_payment_method')]: {
            bind: 'setPaymentMethodSelected'
          },
          [getGlobalName('set_payment_simulate_success')]: {
            bind: 'setPaymentSimulateSuccess'
          },
          [getGlobalName('set_payment_simulate_error')]: {
            bind: 'setPaymentSimulateError'
          },
          [getGlobalName('set_response_own_transter_success')]: {
            bind: 'setOwnTransferSuccess'
          },
          [getGlobalName('set_response_own_transter_error')]: {
            bind: 'setOwnTransferError'
          },
          [getGlobalName('make_own_transfer')]: {
            bind: 'setMakeOwnTransfer'
          },
          [getGlobalName('set_cards_balances')]: {
            bind: 'cardsbalances'
          },
          [getGlobalName('error_on_get_cards_balances')]: {
            bind: 'errorDataCards'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getGlobalName('cells_scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getGlobalName('set_reset_scroll')]: {
            bind: 'set-reset-scroll'
          },
          [getGlobalName('set_accounts')]: {
            bind: 'set-accounts',
            analytics: ANALYTICS._getAdvancedFootprintData('getAdvancedFootprintPageAccountSelect')
          },
          [getGlobalName('set_cards')]: {
            bind: 'set-cards'
          },
          [getGlobalName('set_card_id')]: {
            bind: 'set-card-id'
          },
          [getGlobalName('set_card_api_version')]: {
            bind: 'set-card-api-version'
          },
          [getGlobalName('set_get_card_payment_methods')]: {
            bind: 'set-get-card-payment-methods'
          },
          [getGlobalName('set_updated_card')]: {
            bind: 'set-updated-card'
          },
          [getGlobalName('set_account_selected')]: {
            bind: 'set-account-selected'
          },
          [getGlobalName('set_collapsed')]: {
            bind: 'set-collapsed'
          },
          [getGlobalName('set_fixed')]: {
            bind: 'set-fixed'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          [getGlobalName('disable_next_step')]: {
            bind: 'disable-next-step'
          },
          [getGlobalName('disable_next_step_amount')]: {
            bind: 'disable-next-step-amount'
          },
          global_alert_manager_open_with_settings: {
            bind: 'exit-account-credit-card-payment'
          },
          [getGlobalName('exit_operative')]: {
            bind: 'exit-operative'
          },
          [getGlobalName('radio_Buttons_Payments_Methods')]: {
            bind: 'radio-Buttons-Payments-Methods'
          },
          [getGlobalName('max_limit_changed')]: {
            bind: 'max-limit-changed'
          },
          [getGlobalName('set_currency_list')]: {
            bind: 'set-currency-list'
          },
          [getGlobalName('radio_buttons_config_channel')]: {
            bind: 'radio-buttons-config-changed'
          },
          [getGlobalName('set_text_type_payment')]: {
            bind: 'set-text-type-payment'
          },
          [getGlobalName('set_config_step_card')]: {
            bind: 'set-config-step-card'
          },
          [getGlobalName('set_config_step_amount')]: {
            bind: 'set-config-step-amount'
          },
          [getGlobalName('set_custom_selected')]: {
            bind: 'set-custom-selected'
          },
          [getGlobalName('set_collapsed_amount')]: {
            bind: 'set-collapsed-amount'
          },
          [getGlobalName('reset_amount')]: {
            bind: 'reset-amount'
          },
          [getGlobalName('set_collapsed_card')]: {
            bind: 'set-collapsed-card'
          },
          [getGlobalName('set_product_id')]: {
            bind: 'set-product-id'
          },
          [getGlobalName('set_simulation_request')]: {
            bind: 'set-simulation-request'
          },
          [getGlobalName('enable_credit_card_payment')]: {
            bind: 'enable-credit-card-payment'
          },
          [getGlobalName('set_operation_summary')]: {
            bind: 'set-operation-summary'
          },
          [getGlobalName('disable_credit_card_payment')]: {
            bind: 'disable-credit-card-payment'
          },
          [getGlobalName('set_summary_button_label')]: {
            bind: 'set-summary-button-label'
          },
          [getGlobalName('set_summary_hide_fees_message')]: {
            bind: 'set-summary-hide-fees-message'
          },
          [getGlobalName('set_make_own_transfer')]: {
            bind: 'set-make-own-transfer'
          },
          [getGlobalName('set_success_result')]: {
            bind: 'set-success-result'
          },
          global_account_credit_card_payment_set_success_result_share_receipt: {
            bind: 'set-success-result-share-receipt'
          },
          [getGlobalName('navigate_to_success_review')]: {
            bind: 'navigate-to-success-review'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getGlobalName('analytics_page_view_cards')]: {
            bind: 'page-view-cards',
            analytics: ANALYTICS._getAdvancedFootprintData('getAdvancedFootprintPageViewCards')
          },
          [getGlobalName('analytics_app_page_visit')]: {
            bind: 'set-product-name',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getGlobalName('analytics_app_started')]: {
            bind: 'set-step-from-selection',
            analytics: ANALYTICS.APP_STARTED
          },
          [getGlobalName('analytics_app_step_2')]: {
            bind: 'set-attributes',
            analytics: ANALYTICS.APP_STEP_2
          },
          [getGlobalName('analytics_app_completed')]: {
            bind: 'set-review',
            analytics: ANALYTICS.APP_COMPLETED
          },
          [getGlobalName('set_skeleton')]: {
            bind: 'set-skeleton'
          },
          [getGlobalName('cards_request_balances')]: {
            bind: 'cards-request-balances'
          },
          [getGlobalName('disable_amount_button')]: {
            bind: 'disable-amount-button'
          },
          [getGlobalName('set_selected_account_value')]: {
            bind: 'set-selected-account-value'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          [getGlobalName('set_hide_help_button')]: {
            bind: 'set-hide-help-button'
          }
        },
        params: {
          defaultSourceId: 'productId',
          creditCardPaymentResult: 'creditCardPaymentResult'
        }
      }
    },
    propertiesSpherica: {
      visibleChars: 4,
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'exit-account-credit-card-payment'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const apisTransfer = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-transfer',
    tag: 'cells-dm-global-apis-transfer-mx',
    properties: {
      host: CONFIG.globalServices.host,
      native,
      transferApiVersion: CONFIG.globalServices.versions.transfer,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      localCurrency: LOCAL_CURRENCY,
      language: LANGUAGE,
      cellsConnections: {
        in: {
          [getGlobalName('set_make_own_transfer')]: {
            bind: 'makeOwnTransfer'
          }
        },
        out: {
          [getGlobalName('set_response_own_transter_success')]: {
            bind: 'transfer-result-changed'
          },
          dashboard_refresh_financial_overview: {
            bind: 'transfer-result-changed'
          },
          [getGlobalName('set_response_own_transter_error')]: {
            bind: 'transfer-error'
          }
        }
      }
    }
  };

  const accountSelector = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: 'accounts',
      currentStep: 1,
      stepTitle: 'cells-credit-card-payment-operation-type-account',
      changeLabel: 'glomo-common-operatives-change',
      producstListLabel: 'glomo-common-accounts-selector-title',
      notSavedState: true,
      notInitializeWithAttached: true,
      errorMessage: 'glomo-account-credit-card-payment-insuficent-balance',
      isWarningMessage: true,
      disabledUpdateTitleOnChangeProduct: false,
      viewMoreDestination: 'source',
      localCurrency: LOCAL_CURRENCY,
      maxSteps: MAX_STEPS,
      changeOriginText: 'cells-step-product-selector-change-origin-button-label',
      dontChangeAndContinueText: 'cells-step-product-selector-continue-button-label',
      infoIcon: 'coronita:alert',
      visibleChars: 5,
      cellsConnections: {
        in: {
          account_credit_card_payment_scroll_complete: {
            bind: 'scrollComplete'
          },
          [getGlobalName('steps_completed')]: {
            bind: 'reset'
          },
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_accounts')]: {
            bind: 'fetchProducts'
          },
          [getGlobalName('set_account_selected')]: {
            bind: 'fetchProducts'
          },
          [getGlobalName('set_collapsed')]: {
            bind: 'collapsed'
          },
          [getGlobalName('set_fixed')]: {
            bind: 'fixed'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          [getGlobalName('source_modal_selected_account')]: {
            bind: 'onProductSelected'
          },
          [getGlobalName('set_selected_account_value')]: {
            bind: 'selected'
          }
        },
        out: {
          card_credit_card_payment_change_account_selected: {
            bind: 'on-change-product-selected'
          },
          [getGlobalName('register_accounts_step')]: {
            bind: 'register-step'
          },
          [getGlobalName('set_selected_account')]: {
            bind: 'selected-changed'
          },
          [getGlobalName('change_account')]: {
            bind: 'change-pressed',
            analytics: ANALYTICS._getAdvancedFootprintData('getAdvancedFootprintPageViewAccounts')
          },
          [getGlobalName('_view_all_accounts')]: {
            bind: 'view-all'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'glomo-common-operatives-modify',
      variant: 'primary-alt',
      visibleChars: 4,
      viewAllLabel: 'glomo-common-view-more'
    }
  };

  const cardSelector = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: 'cards',
      currentStep: 2,
      className: 'card-credit-card-payment-account-selector',
      notInitializeWithAttached: true,
      disabledUpdateTitleOnChangeProduct: true,
      maxSteps: MAX_STEPS,
      localCurrency: LOCAL_CURRENCY,
      stepTitle: 'card-credit-card-payment-step-recipient-selector-title',
      changeLabel: 'glomo-common-operatives-change',
      selectedLabel: 'cells-product-selector-primary-amount-label',
      errorMessage: 'card-credit-card-payment-account-insufficient-funds',
      errorTextMessage: 'card-credit-card-payment-account-insufficient-funds',
      dontChangeAndContinueText: 'cells-step-product-selector-continue-button-label',
      notSavedState: true,
      changeOriginText: 'cells-step-product-selector-change-origin-button-label',
      viewMoreDestination: 'source',
      cellsConnections: {
        in: {
          account_credit_card_payment_scroll_complete: {
            bind: 'scrollComplete'
          },
          [getGlobalName('steps_completed')]: {
            bind: 'reset'
          },
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_cards')]: {
            bind: 'products'
          },
          [getGlobalName('set_updated_card')]: {
            bind: 'selected'
          },
          [getGlobalName('set_updated_card')]: {
            bind: 'onProductSelected'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          [getGlobalName('disable_next_step')]: {
            bind: 'active'
          },
          [getGlobalName('set_config_step_card')]: {
            bind: 'setProperties'
          },
          [getGlobalName('set_custom_selected')]: {
            bind: 'customSelected'
          },
          [getGlobalName('set_collapsed_card')]: {
            bind: 'collapsed'
          },
          [getGlobalName('source_modal_selected_cards')]: {
            bind: 'onProductSelected'
          }
        },
        out: {
          [getGlobalName('register_cards_step')]: {
            bind: 'register-step'
          },
          [getGlobalName('set_selected_card')]: {
            bind: 'selected-changed'
          },
          [getGlobalName('change_card')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('_view_all_cards')]: {
            bind: 'view-all'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'glomo-common-operatives-modify',
      variant: 'primary-alt',
      producstListLabel: 'glomo-common-card-label-list',
      viewAllLabel: 'glomo-common-view-more',
      visibleChars: 4
    }
  };
  const stepEnterAmountCreditCard = {
    zone: 'app__main',
    tag: 'cells-step-enter-amount-credit-card',
    tagSpherica: 'cells-step-enter-amount-credit-card-spherica',
    type: 'UI',
    properties: {
      currentStep: 3,
      maxSteps: MAX_STEPS,
      stepTitle: 'credit-card-payment-step-amount',
      className: 'not-border-bottom',
      resetAmountOnChange: true,
      showDebtsWithRadioButtons: true,
      showOverDraftMessage: true,
      enableChangeStep: true,
      showNoDebtInfoMessage: false,
      showSameDayDeadlineInfoMessage: false,
      notExtraActionClosed: true,
      localCurrency: LOCAL_CURRENCY,
      changeLabel: 'glomo-common-operatives-change',
      language: LANGUAGE,
      notInitializeWithAttached: true,
      keepSelectedDataBeforeNotifyAmount: true,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_reset')]: {
            bind: 'reset'
          },
          account_credit_card_payment_scroll_complete: {
            bind: 'scrollComplete'
          },
          [getGlobalName('steps_completed')]: {
            bind: 'reset'
          },
          [getGlobalName('radio_Buttons_Payments_Methods')]: {
            bind: 'paymentMethodTypes'
          },
          [getGlobalName('set_currency_list')]: {
            bind: 'currenciesList'
          },
          [getGlobalName('radio_buttons_config_channel')]: {
            bind: 'configDebtsRadioButtons'
          },
          [getGlobalName('max_limit_changed')]: {
            bind: 'maxLimit'
          },
          [getGlobalName('set_text_type_payment')]: {
            bind: 'textTypePayment'
          },
          [getGlobalName('set_config_step_amount')]: {
            bind: 'setProperties'
          },
          [getGlobalName('set_collapsed_amount')]: {
            bind: 'collapsed'
          },
          [getGlobalName('reset_amount')]: {
            bind: 'reset'
          },
          [getGlobalName('disable_amount_button')]: {
            bind: 'selectedLocalDebt'
          },
          [getGlobalName('disable_next_step_amount')]: {
            bind: 'active'
          },
          [getGlobalName('set_hide_help_button')]: {
            bind: 'hideAmountHelpButton'
          }
        },
        out: {
          card_credit_card_payment_event_focus_out: {
            bind: 'focus-out'
          },
          card_credit_card_payment_selected_amount: {
            bind: 'selected-amount'
          },
          card_credit_card_payment_dont_change_amount: {
            bind: 'dont-change-and-continue'
          },
          [getGlobalName('register_amount_step')]: {
            bind: 'register-step'
          },
          [getGlobalName('selected_amount')]: {
            bind: 'selected'
          },
          [getGlobalName('change_payment_amount')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('_selected_payment_method')]: {
            bind: 'selected-amount'
          }
        }
      }
    },
    propertiesSpherica: {
      notResetLocalAmount: true,
      notResetLocalOtherAmount: true,
      stepTitle: 'credit-card-payment-step-amount-spherica',
      otherAmountLabel: 'cells-step-enter-amount-credit-card-other-amount-spherica',
      changeLabel: 'glomo-common-operatives-modify',
      textTypePayment: '',
      labelButtonContinue: 'card-credit-card-payment-summary-button-confirm-label',
      singleDebtTitleWithoutCurrency: '',
      inputLabel: 'credit-card-payment-step-amount-spherica',
      showTextRightIcon: true
    }
  };

  const apiCardsDM = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards',
    properties: {
      host: CONFIG.globalServices.host,
      cardsApiVersion: CONFIG.globalServices.versions.cards,
      native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getGlobalName('set_card_id')]: {
            bind: 'cardId'
          },
          [getGlobalName('set_card_api_version')]: {
            bind: 'cardsApiVersion'
          },
          [getGlobalName('set_get_card_payment_methods')]: {
            bind: 'getCard'
          }
        },
        out: {
          [getGlobalName('set_card_payment_methods_success')]: {
            bind: 'set-card'
          },
          [getGlobalName('set_card_payment_methods_error')]: {
            bind: 'error-on-get-card'
          }
        }
      }
    }
  };

  const cellsProductSelectorModal = {
    zone: 'app__overlay',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    type: 'UI',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      modalTitle: 'cells-global-dashboard-account-header',
      showCloseModalButton: true,
      closeButtonLabel: 'cells-product-selector-modal-close-button',
      productsListTitle: 'cells-global-dashboard-account-header',
      errorMessage: 'glomo-account-credit-card-payment-insuficent-balance',
      cellsConnections: {
        in: {
          [getGlobalName('_view_all_accounts')]: {
            bind: 'treatProducts'
          },
          [getGlobalName('steps_completed')]: {
            bind: 'reset'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('source_modal_selected_account')]: {
            bind: 'selected-product'
          }
        }
      }
    },
    propertiesSpherica: {
      modalTitle: 'card-credit-card-payment-step-product-accounts-selector-title-spherica',
      productType: 'account',
      productsListLabel: 'card-credit-card-payment-step-product-accounts-selector-title-spherica'
    }
  };

  const productSelectorModal = {
    zone: 'app__transactional',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    type: 'UI',
    properties: {
      className: 'card-credit-card-payment-account-selector',
      modalTitle: 'card-credit-card-payment-step-product-accounts-selector-title',
      visibleChars: VISIBLECHARS,
      localCurrency: LOCAL_CURRENCY,
      showCloseModalButton: true,
      errorMessage: 'card-credit-card-payment-account-insufficient-funds',
      closeButtonLabel: 'card-credit-card-payment-step-product-accounts-close-button',
      cellsConnections: {
        in: {
          [getGlobalName('_view_all_cards')]: {
            bind: 'treatProducts'
          },
          [getGlobalName('steps_completed')]: {
            bind: 'reset'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('source_modal_selected_cards')]: {
            bind: 'selected-product'
          }
        }
      }
    },
    propertiesSpherica: {
      modalTitle: 'card-credit-card-payment-step-product-accounts-selector-title-spherica',
      productsListTitle: 'glomo-common-card-label-list',
      productType: 'card',
      productsListLabel: 'card-credit-card-payment-step-product-cards-selector-title-spherica'
    }
  };

  const apiCardsDMBGAD = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      cardsApiVersion: CONFIG.globalServices.versions.cardPayments,
      native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getGlobalName('set_product_id')]: {
            bind: 'cardId'
          },
          [getGlobalName('set_simulation_request')]: {
            bind: 'postPaymentSimulation'
          },
          [getGlobalName('cards_request_balances')]: {
            bind: 'getAllCards'
          }
        },
        out: {
          [getGlobalName('set_payment_simulate_success')]: {
            bind: 'set-cards-payments-simulate'
          },
          [getGlobalName('set_payment_simulate_error')]: {
            bind: 'error-on-post-cards-payments-simulate'
          },
          [getGlobalName('set_cards_balances')]: {
            bind: 'set-cards'
          },
          [getGlobalName('error_on_get_cards_balances')]: {
            bind: 'error-on-get-cards'
          }
        }
      }
    }
  };

  const glomoAlertMAnager = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          account_card_payment_recipient_modal_back_spheric_accept_page: {
            bind: 'alert-EXIT-ACCOUNT-CREDIT-CARD-PAYMENT-SPHERICA-accept'
          },
          account_card_payment_recipient_modal_back_spheric_close_page: {
            bind: 'alert-EXIT-ACCOUNT-CREDIT-CARD-PAYMENT-SPHERICA-cancel'
          },
          global_account_credit_card_payment_accept_exit: {
            bind: 'alert-exit-account-credit-card-payment-accept'
          }
        }
      }
    }
  };

  base.components.push(
    opxAccountCreditCardPayment,
    accountSelector,
    cardSelector,
    stepEnterAmountCreditCard,
    apiCardsDM,
    cellsProductSelectorModal,
    productSelectorModal,
    apiCardsDMBGAD,
    apisTransfer
  );

  if (isSpherica) {
    base.components.push(glomoAlertMAnager);
  }

  base.template.tagSpherica = 'glomo-opx-template-spherica';
  base.template.propertiesSpherica = {
    className: isNativeIos ? 'ios-top-padding' : '',
    extraHeaderClass: isNativeIos ? 'bbva-core-blue' : '',
    iOSFixedHeader: isNativeIos
  };

  getComponent('cells-molecule-header').tagSpherica = 'cells-molecule-header-spherica';
  getComponent('cells-molecule-header').propertiesSpherica = sphericaPageUtils.getProperties({
    componentName: 'cells-molecule-header-spherica',
    type: 'modal'
  });

  getComponent('cells-operation-summary').tagSpherica = 'cells-operation-summary-spherica';
  getComponent('cells-operation-summary').propertiesSpherica = {
    summaryViewTitle: 'card-credit-card-payment-summary-title',
    messageButtonLabel: 'card-credit-card-payment-summary-button-confirm-button-label',
    buttonLabel: 'card-credit-card-payment-summary-button-confirm-button-label'
  };


  addRetryErrors(base)([
    {
      id: 'SIMULATION-ERROR',
      acceptRetry: { bind: 'simulationPayment', component: 'glomo-opx-account-credit-card-payment-mx' },
      cancelRetry: { bind: 'exit', component: 'glomo-opx-account-credit-card-payment-mx' },
      acceptCallForHelp: { bind: 'callToBank', component: 'glomo-opx-account-credit-card-payment-mx' }
    },
    {
      id: 'TRANSFER-ACCOUNT-ERROR',
      acceptRetry: { bind: 'setMakeOwnTransfer', component: 'glomo-opx-account-credit-card-payment-mx' },
      cancelRetry: { bind: 'exit', component: 'glomo-opx-account-credit-card-payment-mx' },
      acceptCallForHelp: { bind: 'callToBank', component: 'glomo-opx-account-credit-card-payment-mx' }
    },
    {
      id: 'CARD-INFO-ERROR',
      acceptRetry: { bind: 'checkUpdateCardBalance', component: 'glomo-opx-account-credit-card-payment-mx' },
      cancelRetry: { bind: 'exit', component: 'glomo-opx-account-credit-card-payment-mx' },
      acceptCallForHelp: { bind: 'callToBank', component: 'glomo-opx-account-credit-card-payment-mx' }
    }
  ]);

  addCommonErrors(base.components)();
  return sphericaEnabledOperatives.includes(operative) ?  sphericaPageUtils.spherize(base) : base;
};
