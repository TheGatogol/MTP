/* eslint-disable no-dupe-keys */
'use strict';

module.exports = (CONFIG, OPERATIVE = 'cardCreditCardPayment') => {
  const pageName = 'cardCreditCardPayment';
  const PRODUCT = 'card';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const base = require('./product/_credit-card-payment')(PRODUCT)(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const utils = require('./common/helpers/_utils');
  const { get }  = require('./common/helpers/_utils');
  const COUNTRY = utils.getCountry();
  const LANGUAGE = utils.getLanguage(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const PREFIX_NAME_CHANNEL = OPERATIVE.split(/(?=[A-Z])/).join('_').toLowerCase();
  const host = CONFIG.globalServices.host;
  const native = CONFIG.native || false;
  const ANALYTICS = require('./analytics/_cardCreditCardPayment')({});
  const MAX_STEPS = 2;
  const sphericaEnabledOperatives = [ 'cardCreditCardPayment' ];
  const getComponent = get(base);
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = !!CONFIG.nativeIos;

  base.template.propertiesSpherica = {
    className: ''
  };

  base.components.push(
    {
      zone: 'app__header',
      type: 'UI',
      tag: 'glomo-navigation-handler',
      properties: {
        backAction: 'header-right-button',
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_navigate_card_detail']: {
              bind: 'goBack'
            },
            NAVIGATE_TO_CARD_PAYMENT_PROMISE: {
              bind: 'navigateToPage'
            }
          },
          out: {
            key_recovery_back_forward_date_page: {
              bind: 'header-right-button',
              backStep: true,
              'forward-to-native': true
            },
            GO_TO_CARD_PAYMENT_PROMISE: {
              bind: 'navigation-to-cardDetail',
              backStep: true
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-card-detail-manager-mx',
      familyPath: 'glomo-card-detail-manager',
      properties: {
        cardTransactionsVersion: CONFIG.globalServices.versions.cardTransactions,
        isRateAppGlobal: true,
        showServiceErrorLimitsAttempts: true,
        showRetriesErrorLimitOnCardActivations: true,
        showImageProduct: true,
        creditCardOperativesToHide: ['cardLocation', 'editAvailableCreditLimit'],
        debitCardOperativesToHide: ['cardLocation', 'cardActivation', 'accountStatus', 'payCard', 'transfers'],
        cellsConnections: {
          in: {
            global_financial_overview_details: {
              bind: 'financialData'
            },
            card_credit_card_payment_send_data_push_notification_detail_deeplink: {
              bind: 'navigationDeepLink'
            },
            [PREFIX_NAME_CHANNEL + '_SUCCESS_CARD_INFROMATION']: {
              bind: 'successCardDetailData'
            }
          },
          out: {
            global_set_financial_overview_accounts: {
              bind: 'get-accounts-success'
            },
            [PREFIX_NAME_CHANNEL + '_SET_VERSION_GET_CARD']: {
              bind: 'set-version-and-card-id'
            },
            [PREFIX_NAME_CHANNEL + '_GET_CARD_INFORMATION']: {
              bind: 'get-request-card-data'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-opx-card-credit-card-payment-mx',
      familyPath: 'glomo-opx-card-credit-card-payment',
      type: 'DM',
      properties: {
        host,
        native,
        transferApiVersion: CONFIG.globalServices.versions.transfer,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        maxSteps: MAX_STEPS,
        autoActivateStep: true,
        language: LANGUAGE,
        localCurrency: LOCAL_CURRENCY,
        phoneNumber: CONFIG.phoneNumberContact,
        paymentTypeLocaleKey: {
          MINIMUM_AMOUNT: 'card-credit-card-payment-minimum-amount',
          MINIMUM_AMOUNT_TO_AVOID_INTEREST: 'card-credit-card-payment-minimum-amount-to-avoid-interest-payment',
          TOTAL_DEBT_AMOUNT: 'card-credit-card-payment-total-debt-amount',
          OTHER_AMOUNT: 'card-credit-card-payment-other-amount'
        },
        paymentMethodsNames: [
          'MINIMUM_AMOUNT',
          'MINIMUM_AMOUNT_TO_AVOID_INTEREST',
          'TOTAL_DEBT_AMOUNT'
        ],
        cellsConnections: {
          in: {
            card_credit_card_payment_send_selected_card_to_futura: {
              bind: 'automaticPayment'
            },
            [PREFIX_NAME_CHANNEL + '_init_page']: {
              bind: 'init'
            },
            [PREFIX_NAME_CHANNEL + '_reset_page']: {
              bind: 'reset'
            },
            GO_TO_CARD_PAYMENT_PROMISE: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
              bind: 'registerStep'
            },
            [PREFIX_NAME_CHANNEL + '_manage_state_steps']: {
              bind: 'manageStateSteps'
            },
            global_send_card_detail_data: {
              bind: 'selectedCard'
            },
            manage_navigation_card_credit_card_payment_to_page: {
              bind: 'manageBackNavigation'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'manageBackNavigation'
            },
            [PREFIX_NAME_CHANNEL + '_selected_amount']: {
              bind: 'setSelectedAmount'
            },
            [PREFIX_NAME_CHANNEL + '_change_step_state_channel']: {
              bind: 'manageStateSteps'
            },
            [PREFIX_NAME_CHANNEL + '_change_account_selected']: {
              bind: 'setSelectedAccount'
            },
            global_set_financial_overview_accounts: {
              bind: 'setAccounts'
            },
            global_financial_overview_details: {
              bind: 'financialData'
            },
            navigation_from_futura_dashboard: {
              bind: 'initFrequentOperations'
            },
            [PREFIX_NAME_CHANNEL + '_clean-amount']: {
              bind: 'setSelectedAmount'
            },
            [PREFIX_NAME_CHANNEL + '_collapse_step_product_selector']: {
              bind: 'collapseStep'
            },
            [PREFIX_NAME_CHANNEL + '_summary_closed']: {
              bind: 'doCreditCardPayment'
            },
            global_card_credit_card_payment_retry_own_tranfer: {
              bind: 'doCreditCardPayment'
            },
            global_card_credit_card_payment_call_own_tranfer: {
              bind: 'callToBank'
            },
            global_card_credit_card_payment_cancel_header_own_tranfer: {
              bind: 'resetCounter'
            },
            global_card_credit_card_payment_cancel_header_call_own_tranfer: {
              bind: 'resetCounter'
            },
            [PREFIX_NAME_CHANNEL + '_transfer_result_channel']: {
              bind: 'rawCreditCardPaymentResult'
            },
            [PREFIX_NAME_CHANNEL + '_transfer_error_channel']: {
              bind: 'onTransferError'
            },
            [PREFIX_NAME_CHANNEL + '_set_cards_payments_simulate']: {
              bind: 'parseCardPaymentsSimulation'
            },
            global_card_credit_card_payment_simulated_amount: {
              bind: 'setSimulatedAmount'
            },
            [PREFIX_NAME_CHANNEL + '_error_card_payments_simulate']: {
              bind: 'errorCardPaymentSimulate'
            },
            global_card_credit_card_payment_retry_own_tranfer_simulate: {
              bind: 'doPaymentsSimulationAction'
            },
            [PREFIX_NAME_CHANNEL + '_change_amount_pressed']: {
              bind: 'changeProductPressed'
            },
            [PREFIX_NAME_CHANNEL + '_dont_change_amount']: {
              bind: 'checkChangeProduct'
            },
            [PREFIX_NAME_CHANNEL + '_change_account_pressed']: {
              bind: 'changeProductPressed'
            },
            [PREFIX_NAME_CHANNEL + '_dont_change_account']: {
              bind: 'checkChangeProduct'
            },
            global_card_credit_card_payment_own_tranfer_simulate_tap_out_modal: {
              bind: 'changeProductPressed'
            },
            global_card_credit_card_payment_own_tranfer_simulate_tap_out_modal_reset_error_counter: {
              bind: 'resetCounter'
            },
            global_card_detail_data_refresh: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_SUCCESS_CARD_INFROMATION']: {
              bind: 'cardSelectedSuccess'
            },
            global_send_card_detail_data: {
              bind: 'cardSelectedSuccess'
            },
            [PREFIX_NAME_CHANNEL + '_ERROR_CARD_INFORMATION']: {
              bind: 'onGetCardError'
            },
            global_card_credit_card_payment_retry_error_on_get_card: {
              bind: 'init'
            },
            global_card_credit_card_payment_leave_close_modal: {
              bind: 'manageNotificationCloseModal'
            },
            global_card_credit_card_payment_leave_error_on_get_information: {
              bind: 'manageNotificationCloseModal'
            },
            set_push_data_void: {
              bind: 'pushData'
            },
            global_card_credit_card_payment_push_notification_exit: {
              bind: 'manageDestination'
            },
            global_card_credit_card_payment_exit: {
              bind: 'manageDestination'
            },
            global_card_credit_card_payment_cancel_own_tranfer: {
              bind: 'manageDestination'
            },
            global_card_credit_card_payment_cancel_call_own_tranfer: {
              bind: 'manageDestination'
            },
            global_card_credit_card_payment_leave_error_on_get_card: {
              bind: 'manageDestination'
            },
            card_credit_card_payment_transfer_result_channel_burn_item: {
              bind: 'burnItemFromOperative'
            },
            send_card_data_listening_mode: {
              bind: 'selectedCard'
            },
            blue_selected_payment_option_card_credit: {
              bind: 'blueSelected'
            },
            card_credit_card_payment_call_transfer_error_accept_page: {
              bind: 'callToBank'
            }
          },
          out: {
            global_account_credit_card_payment_set_success_result_share_receipt: {
              bind: 'set-success-result-share-receipt'
            },
            burn_item_from_operative_smart_servicing: {
              bind: 'transfer-dm-operation-success'
            },
            card_credit_card_payment_SET_VERSION_FUTURA: {
              bind: 'send-card-version'
            },
            card_credit_card_payment_get_card_data: {
              bind: 'get-card-params'
            },
            card_credit_card_payment_manager_product_id: {
              bind: 'send-card-id'
            },
            [PREFIX_NAME_CHANNEL + '_step_recipient_selector_set_products']: {
              bind: 'step-recipient-selector-set-products'
            },
            [PREFIX_NAME_CHANNEL + '_parsed_payment_methods_channel']: {
              bind: 'parsed-payment-methods-changed'
            },
            [PREFIX_NAME_CHANNEL + '_currencies_list_channel']: {
              bind: 'currencies-list-changed'
            },
            [PREFIX_NAME_CHANNEL + '_radio_buttons_config_channel']: {
              bind: 'radio-buttons-config-changed'
            },
            [PREFIX_NAME_CHANNEL + '_max_limit_channel']: {
              bind: 'max-limit-changed'
            },
            card_credit_card_payment_max_limit_amount_channel: {
              bind: 'set-max-limit-amount'
            },
            [PREFIX_NAME_CHANNEL + '_navigate_card_detail']: {
              bind: 'navigate-to-card-detail',
              backStep: true
            },
            [PREFIX_NAME_CHANNEL + '_saved_accounts']: {
              bind: 'set-saved-accounts'
            },
            [PREFIX_NAME_CHANNEL + '_product_max_limit_amount']: {
              bind: 'set-max-limit'
            },
            [PREFIX_NAME_CHANNEL + '_set_simulation_result']: {
              bind: 'set-simulation-result'
            },
            global_card_credit_card_payment_show_close_confirm: {
              bind: 'show-close-confirm'
            },
            [PREFIX_NAME_CHANNEL + '_card_granted_credits_channel']: {
              bind: 'card-granted-credits-changed'
            },
            [PREFIX_NAME_CHANNEL + '_card_disposed_balance_amount_channel']: {
              bind: 'card-disposed-balance-amount-changed'
            },
            [PREFIX_NAME_CHANNEL + '_show_positive_balance_channel']: {
              bind: 'show-positive-balance-message-changed'
            },
            [PREFIX_NAME_CHANNEL + '_reset_accounts']: {
              bind: 'reset-accounts'
            },
            [PREFIX_NAME_CHANNEL + '_account_step_properties_channel']: {
              bind: 'set-account-step-properties'
            },
            [PREFIX_NAME_CHANNEL + '_can_execute']: {
              bind: 'can-execute-changed'
            },
            [PREFIX_NAME_CHANNEL + '_summary_open']: {
              bind: 'set-card-summary'
            },
            [PREFIX_NAME_CHANNEL + '_only_summary_closed']: {
              bind: 'set-card-summary-close'
            },
            [PREFIX_NAME_CHANNEL + '_summary_view_title']: {
              bind: 'set-summary-view-title'
            },
            [PREFIX_NAME_CHANNEL + '_summary_button_label']: {
              bind: 'set-summary-button-label'
            },
            [PREFIX_NAME_CHANNEL + '_set_selected_account']: {
              bind: 'only-one-selected'
            },
            [PREFIX_NAME_CHANNEL + '_set_fixed_account']: {
              bind: 'set-fixed-account'
            },
            [PREFIX_NAME_CHANNEL + '_set_amount_decorated']: {
              bind: 'set-amount-decorated'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            [PREFIX_NAME_CHANNEL + '_make_own_transfer_channel']: {
              bind: 'make-own-transfer'
            },
            global_card_detail_data_refresh: {
              bind: 'navigate-to-credit-card-payment-review',
              link: {
                page: 'creditCardPaymentReview'
              }
            },
            global_card_credit_card_payment_own_tranfer_error: {
              bind: 'own-tranfer-error'
            },
            global_card_credit_card_payment_success: {
              bind: 'success-bbva-card-payment-message'
            },
            financial_overview_refresh: {
              bind: 'financial-overview-refresh'
            },
            [PREFIX_NAME_CHANNEL + '_set_selected']: {
              bind: 'card-credit-card-payment-update-selected-amount'
            },
            global_card_credit_card_payment_simulation_error: {
              bind: 'card-payment-simulation-error'
            },
            [PREFIX_NAME_CHANNEL + '_payments_simulation']: {
              bind: 'card-payments-simulate-action'
            },
            [PREFIX_NAME_CHANNEL + '_set_cards_payments_simulate_parsed']: {
              bind: 'card-payments-simulation-parsed'
            },
            [PREFIX_NAME_CHANNEL + '_summary_hide_fees_message']: {
              bind: 'hide-fees-message'
            },
            [PREFIX_NAME_CHANNEL + '_SET_VERSION_GET_CARD']: {
              bind: 'set-version-and-card-id'
            },
            [PREFIX_NAME_CHANNEL + '_GET_CARD_INFORMATION']: {
              bind: 'get-request-card-data'
            },
            [PREFIX_NAME_CHANNEL + '_GET_FINANCIAL_ACCOUNT']: {
              bind: 'get-account-financial-request'
            },
            [PREFIX_NAME_CHANNEL + '_enable_focus_out']: {
              bind: 'enable-focus-out'
            },
            global_alert_manager_open_with_settings: {
              bind: 'show-modal-with-settings'
            },
            NAVIGATE_TO_CARD_PAYMENT_PROMISE: {
              bind: 'navigate-to-card-payment-promise'
            },
            blue_selected_amount_payment_card_credit: {
              bind: 'send-blue-selected'
            }
          },
          params: {
            defaultSourceId: 'productId',
            creditCardPaymentResult: 'creditCardPaymentResult'
          }
        }
      },
      propertiesSpherica: {
        paymentTypeLocaleKey: {
          MINIMUM_AMOUNT: 'card-credit-card-payment-minimum-amount',
          MINIMUM_AMOUNT_TO_AVOID_INTEREST: 'card-credit-card-payment-minimum-amount-to-avoid-interest-payment',
          TOTAL_DEBT_AMOUNT: 'card-credit-card-payment-total-debt-amount',
          OTHER_AMOUNT: 'card-credit-card-payment-other-amount-spherica'
        },
        isSpherica,
        visibleChars: 4,
        newCellsConnections: {
          add: {
            out: {
              global_alert_manager_open_with_settings_spherica: {
                bind: 'show-modal-with-settings'
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
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-card-detail-manager-mx',
      familyPath: 'glomo-card-detail-manager',
      properties: {
        cellsConnections: {
          in: {
            card_credit_card_payment_manager_product_id: {
              bind: 'productId'
            },
            global_financial_overview_details: {
              bind: 'financialData'
            },
            blue_card_credit_card_payment_manager_product_id: {
              bind: 'productId'
            },
            cards_blue_global_financial_overview_details: {
              bind: 'dataCardListeningMode'
            }
          },
          out: {
            global_set_financial_overview_accounts: {
              bind: 'get-accounts-success'
            },
            send_card_data_listening_mode: {
              bind: 'send-card-data-listening-mode'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-step-recipient-selector',
      tagSpherica: 'cells-step-recipient-selector-spherica',
      type: 'UI',
      properties: {
        notInitializeWithAttached: true,
        active: true,
        collapsed: true,
        skip: true,
        previous: true,
        fixed: true,
        registeredOperationHidden: true,
        maxSteps: MAX_STEPS,
        stepTitle: 'card-credit-card-payment-step-recipient-selector-title',
        initWithDefaultProductSelected: true,
        className: 'show-header with-additional-info',
        localCurrency: LOCAL_CURRENCY,
        defaultImage: './images/cards/cardFrontDefault.png',
        nameRightToImage: true,
        visibleChars: 5,
        imgWidth: 48,
        imgHeight: 32,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_init_page']: {
              bind: 'initialize'
            },
            [PREFIX_NAME_CHANNEL + '_reset_page']: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
              bind: 'scrollComplete'
            },
            [PREFIX_NAME_CHANNEL + '_step_recipient_selector_set_products']: {
              bind: 'products'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_change_step_state_channel']: {
              bind: 'change-step-state'
            }
          }
        }
      },
      propertiesSpherica: {
        nameRightToImage: false,
        productItemSavedClass: 'saved-product-item stack',
        visibleChars: 4
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-step-enter-amount-credit-card',
      tagSpherica: 'cells-step-enter-amount-credit-card-spherica',
      type: 'UI',
      properties: {
        currentStep: 1,
        maxSteps: MAX_STEPS,
        stepTitle: 'credit-card-payment-step-amount',
        className: 'not-border-bottom',
        notInitializeWithAttached: true,
        resetAmountOnChange: true,
        textDefaultMessage: false,
        disablePreviousStepAnimation: true,
        showDebtsWithRadioButtons: true,
        showOverDraftMessage: true,
        enableChangeStep: true,
        showNoDebtInfoMessage: false,
        showSameDayDeadlineInfoMessage: false,
        hideAmountHelpButton: true,
        notExtraActionClosed: true,
        localCurrency: LOCAL_CURRENCY,
        changeLabel: 'glomo-common-operatives-change',
        textTypePayment: 'card-credit-card-payment-choose-amount-label',
        language: LANGUAGE,
        keepSelectedDataBeforeNotifyAmount: true,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_init_page']: {

              bind: 'initialize'
            },
            [PREFIX_NAME_CHANNEL + '_reset_page']: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
              bind: 'scrollComplete'
            },
            [PREFIX_NAME_CHANNEL + '_parsed_payment_methods_channel']: {
              bind: 'paymentMethodTypes'
            },
            [PREFIX_NAME_CHANNEL + '_currencies_list_channel']: {
              bind: 'currenciesList'
            },
            [PREFIX_NAME_CHANNEL + '_radio_buttons_config_channel']: {
              bind: 'configDebtsRadioButtons'
            },
            [PREFIX_NAME_CHANNEL + '_max_limit_channel']: {
              bind: 'maxLimit'
            },
            card_credit_card_payment_max_limit_amount_channel: {
              bind: 'maxLimit'
            },
            [PREFIX_NAME_CHANNEL + '_card_granted_credits_channel']: {
              bind: 'availableBalance'
            },
            [PREFIX_NAME_CHANNEL + '_card_disposed_balance_amount_channel']: {
              bind: 'minimumAmount'
            },
            [PREFIX_NAME_CHANNEL + '_show_positive_balance_channel']: {
              bind: 'showSameDayDeadlineInfoMessage'
            },
            [PREFIX_NAME_CHANNEL + '_set_amount_decorated']: {
              bind: 'decorated'
            },
            [PREFIX_NAME_CHANNEL + '_set_selected']: {
              bind: 'selected'
            },
            global_card_detail_data_refresh: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_enable_focus_out']: {
              bind: 'enableFocusOut'
            },
            blue_selected_amount_payment_card_credit: {
              bind: 'blueSelected'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
              bind: 'register-step'
            },
            [PREFIX_NAME_CHANNEL + '_change_step_state_channel']: {
              bind: 'change-step-state'
            },
            [PREFIX_NAME_CHANNEL + '_selected_amount']: {
              bind: 'selected-amount'
            },
            [PREFIX_NAME_CHANNEL + '_clean-amount']: {
              bind: 'clean-amount'
            },
            [PREFIX_NAME_CHANNEL + '_analytics_selected_amount_changed']: {
              bind: 'selected-changed'
            },
            [PREFIX_NAME_CHANNEL + '_change_amount_pressed']: {
              bind: 'change-pressed'
            },
            [PREFIX_NAME_CHANNEL + '_dont_change_amount']: {
              bind: 'dont-change-and-continue'
            },
            [PREFIX_NAME_CHANNEL + '_event_focus_out']: {
              bind: 'focus-out'
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
    },
    {
      zone: 'app__main',
      tag: 'cells-step-product-selector',
      tagSpherica: 'cells-step-product-selector-spherica',
      type: 'UI',
      properties: {
        currentStep: 2,
        className: 'card-credit-card-payment-account-selector',
        notInitializeWithAttached: true,
        disabledUpdateTitleOnChangeProduct: true,
        maxSteps: MAX_STEPS,
        header: 'card-credit-card-payment-step-product-selector-header',
        stepTitle: 'card-credit-card-payment-step-product-selector-title',
        productsListLabel: 'card-credit-card-payment-step-product-accounts-selector-title',
        localCurrency: LOCAL_CURRENCY,
        changeLabel: 'glomo-common-operatives-change',
        errorMessage: 'card-credit-card-payment-account-insufficient-funds',
        errorTextMessage: 'card-credit-card-payment-account-insufficient-funds',
        maxProducts: 2,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_init_page']: {
              bind: 'initialize'
            },
            [PREFIX_NAME_CHANNEL + '_reset_page']: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_reset_accounts']: {
              bind: 'reset'
            },
            [PREFIX_NAME_CHANNEL + '_account_step_properties_channel']: {
              bind: 'setProperties'
            },
            [PREFIX_NAME_CHANNEL + '_scroll_complete']: {
              bind: 'scrollComplete'
            },
            [PREFIX_NAME_CHANNEL + '_saved_accounts']: {
              bind: 'products'
            },
            [PREFIX_NAME_CHANNEL + '_set_modal_account']: {
              bind: 'onProductSelected'
            },
            [PREFIX_NAME_CHANNEL + '_product_max_limit_amount']: {
              bind: 'maxLimit'
            },
            [PREFIX_NAME_CHANNEL + '_set_selected_account']: {
              bind: 'selected'
            },
            [PREFIX_NAME_CHANNEL + '_set_fixed_account']: {
              bind: 'fixed'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_register_step_channel']: {
              bind: 'register-step'
            },
            [PREFIX_NAME_CHANNEL + '_change_account_selected']: {
              bind: 'on-change-product-selected'
            },
            [PREFIX_NAME_CHANNEL + '_show_more_accounts']: {
              bind: 'view-all'
            },
            [PREFIX_NAME_CHANNEL + '_collapse_step_product_selector']: {
              bind: 'dont-change-and-continue'
            },
            [PREFIX_NAME_CHANNEL + '_analytics_view_account_selection_step']: {
              bind: 'product-selector-focused'
            },
            [PREFIX_NAME_CHANNEL + '_analytics_edit_account']: {
              bind: 'edit-view-focused'
            },
            [PREFIX_NAME_CHANNEL + '_change_account_pressed']: {
              bind: 'change-pressed'
            },
            [PREFIX_NAME_CHANNEL + '_dont_change_account']: {
              bind: 'dont-change-and-continue'
            },
            [PREFIX_NAME_CHANNEL + '_change_step_state_channel']: {
              bind: 'change-step-state'
            }
          }
        }
      },
      propertiesSpherica: {
        stepTitle: 'card-credit-card-payment-step-product-selector-title-spherica',
        changeLabel: 'glomo-common-operatives-modify',
        variant: 'primary-alt',
        maxProducts: 3,
        productsListLabel: 'card-credit-card-payment-step-product-accounts-selector-title-spherica',
        viewAllLabel: 'glomo-common-view-more',
        header: ''
      }
    },
    {
      zone: 'app__transactional',
      tag: 'cells-product-selector-modal',
      tagSpherica: 'cells-product-selector-modal-spherica',
      type: 'UI',
      properties: {
        className: 'card-credit-card-payment-account-selector',
        modalTitle: 'card-credit-card-payment-step-product-accounts-selector-title',
        visibleChars: 4,
        localCurrency: LOCAL_CURRENCY,
        showCloseModalButton: true,
        errorMessage: 'card-credit-card-payment-account-insufficient-funds',
        closeButtonLabel: 'card-credit-card-payment-step-product-accounts-close-button',
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_show_more_accounts']: {
              bind: 'treatProducts'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_set_modal_account']: {
              bind: 'selected-product'
            }
          }
        }
      },
      propertiesSpherica: {
        modalTitle: 'card-credit-card-payment-step-product-accounts-selector-title-spherica',
        showCloseModalButton: false
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      familyPath: 'cells-dm-global-apis-transfer',
      tag: 'cells-dm-global-apis-transfer-mx',
      properties: {
        host,
        native,
        transferApiVersion: CONFIG.globalServices.versions.transfer,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        localCurrency: LOCAL_CURRENCY,
        language: LANGUAGE,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_make_own_transfer_channel']: {
              bind: 'makeOwnTransfer'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_transfer_result_channel']: {
              bind: 'transfer-result-changed'
            },
            card_credit_card_payment_transfer_result_channel_burn_item: {
              bind: 'transfer-result-changed'
            },
            [PREFIX_NAME_CHANNEL + '_transfer_error_channel']: {
              bind: 'transfer-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-analytics-card-credit-card-payment-manager',
      familyPath: '@glomo-web-components/glomo-analytics-card-credit-card-payment-manager',
      render: 'litElement',
      properties: {
        country: COUNTRY,
        cellsConnections: {
          in: {
            global_get_card_orange_data_success: {
              bind: 'getProductName'
            },
            navigation_product_detail_to_card_credit_card_payment: {
              bind: 'fireAppOnClickStart'
            },
            navigation_card_detail_to_Credit_card_payment: {
              bind: 'fireAppOnClickStart'
            },
            navigation_account_detail_to_Credit_card_payment: {
              bind: 'fireAppOnClickStart'
            },
            card_visit_payment_page: {
              bind: 'firePageVisit'
            },
            [PREFIX_NAME_CHANNEL + '_analytics_selected_amount_changed']: {
              bind: 'fireAppStartedPayType'
            },
            [PREFIX_NAME_CHANNEL + '_analytics_view_account_selection_step']: {
              bind: 'fireAccountSelection'
            },
            [PREFIX_NAME_CHANNEL + '_can_execute']: {
              bind: 'fireAppConfirmation'
            },
            [PREFIX_NAME_CHANNEL + '_transfer_result_channel']: {
              bind: 'fireAppCompleted'
            },
            [PREFIX_NAME_CHANNEL + '_analytics_edit_account']: {
              bind: 'fireEditAccount'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_analytics_app_on_click_start']: {
              bind: 'analytics-app-on-click-start',
              analytics: ANALYTICS.APP_ON_CLICK_START
            },
            [PREFIX_NAME_CHANNEL + '_analytics_app_page_visit']: {
              bind: 'analytics-page-visit',
              analytics: ANALYTICS.APP_PAGE_VISIT
            },
            [PREFIX_NAME_CHANNEL + '_analytics_app_started']: {
              bind: 'analytics-app-started',
              analytics: ANALYTICS.APP_STARTED
            },
            [PREFIX_NAME_CHANNEL + '_analytics_account_selection']: {
              bind: 'analytics-account-selection',
              analytics: ANALYTICS.ACCOUNT_SELECTION
            },
            [PREFIX_NAME_CHANNEL + '_analytics_app_confirmation']: {
              bind: 'analytics-app-confirmation',
              analytics: ANALYTICS.APP_STEP_2_CONFIRM
            },
            [PREFIX_NAME_CHANNEL + '_analytics_app_completed']: {
              bind: 'analytics-app-completed',
              analytics: ANALYTICS.APP_COMPLETED
            },
            [PREFIX_NAME_CHANNEL + '_analytics_edit_account_view']: {
              bind: 'analytics-edit-account',
              analytics: ANALYTICS.EDIT_ACCOUNT
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-cards-bgadpmock',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        cardsApiVersion: CONFIG.globalServices.versions.cardPayments,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        localCurrency: LOCAL_CURRENCY,
        language: LANGUAGE,
        cellsConnections: {
          in: {
            [PREFIX_NAME_CHANNEL + '_payments_simulation']: {
              bind: 'postPaymentSimulation'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_set_cards_payments_simulate']: {
              bind: 'set-cards-payments-simulate'
            },
            [PREFIX_NAME_CHANNEL + '_error_card_payments_simulate']: {
              bind: 'error-on-post-cards-payments-simulate'
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
      tag: 'cells-dm-global-apis-cards',
      properties: {
        host,
        cardsApiVersion: CONFIG.globalServices.versions.cards,
        native,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cardActivations: [ { 'activationId': 'ON_OFF' } ],
        cellsConnections: {
          in: {
            card_credit_card_payment_SET_VERSION_FUTURA: {
              bind: 'cardsApiVersion'
            },
            [PREFIX_NAME_CHANNEL + '_SET_VERSION_GET_CARD']: {
              bind: 'setProperties'
            },
            [PREFIX_NAME_CHANNEL + '_GET_CARD_INFORMATION']: {
              bind: 'getCard'
            },
            card_credit_card_payment_manager_product_id: {
              bind: 'cardId'
            },
            card_credit_card_payment_get_card_data: {
              bind: 'getCard'
            },
            card_credit_card_payment_notification_detail_set_version_card_id: {
              bind: 'setProperties'
            },
            card_credit_card_payment_notification_detail_request_get_card_information: {
              bind: 'getCard'
            }
          },
          out: {
            [PREFIX_NAME_CHANNEL + '_SUCCESS_CARD_INFROMATION']: {
              bind: 'set-card'
            },
            card_credit_card_payment_send_selected_card_to_futura: {
              bind: 'set-card'
            },
            [PREFIX_NAME_CHANNEL + '_ERROR_CARD_INFORMATION']: {
              bind: 'error-on-get-card'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-controller-notification-detail',
      familyPath: '@glomo-web-components/bbva-controller-notification-detail',
      render: 'litElement',
      properties: {
        operativeType: 'rejectionPushTdc',
        cellsConnections: {
          in: {
            global_set_app_settings: {
              bind: 'setDataEventsRejectionPushTdc'
            },
            global_financial_overview_details: {
              bind: 'setDataFinancial'
            },
            navigation_from_deep_link_to_operations: {
              bind: 'pushNotificationDetail'
            },
            navigation_from_deep_link_from_notification_detail: {
              bind: 'pushNotificationDetail'
            }
          },
          out: {
            card_credit_card_payment_send_data_push_notification_detail_deeplink: {
              bind: 'bbva-controller-notification-detail-send-data-push-deeplink'
            },
            global_set_financial_overview_accounts: {
              bind: 'bbva-controller-notification-detail-send-detail-accounts'
            },
            card_credit_card_payment_notification_detail_set_version_card_id: {
              bind: 'bbva-controller-notification-detail-set-version-and-card-id'
            },
            card_credit_card_payment_notification_detail_request_get_card_information: {
              bind: 'bbva-controller-notification-detail-get-request-card-data'
            }
          }
        }
      }
    }
  );

  if (isSpherica) {
    base.components.push({
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
            card_credit_card_payment_modal_transfer_call_page: {
              bind: 'alert-CALL-TRANSFER-ERROR-cancel'
            },
            card_credit_card_payment_modal_error_get_info_accept_page: {
              bind: 'alert-ERROR-ON-GET-INFORMATION-accept'
            },
            card_credit_card_payment_modal_exit_card_payment_accept_page: {
              bind: 'alert-EXIT-CARD-CREDIT-CARD-PAYMENT-accept',
              backStep: true
            },
            card_credit_card_payment_modal_exit_card_payment_close_page: {
              bind: 'alert-EXIT-CARD-CREDIT-CARD-PAYMENT-cancel'
            },
            card_credit_card_payment_modal_card_payment_error_accept_page: {
              bind: 'alert-CARD-CREDIT-CARD-PAYMENT-ERROR-accept'
            },
            card_credit_card_payment_modal_card_payment_error_close_page: {
              bind: 'alert-CARD-CREDIT-CARD-PAYMENT-ERROR-cancel'
            },
            card_credit_card_payment_modal_error_card_data_accept_page: {
              bind: 'alert-ERROR-CARD-DATA-accept'
            },
            card_credit_card_payment_modal_error_simulate_data_accept_page: {
              bind: 'alert-RETRY-CARD-PAYMENT-SIMULATE-accept'
            },
            card_credit_card_payment_modal_error_simulate_data_cancel_page: {
              bind: 'alert-RETRY-CARD-PAYMENT-SIMULATE-cancel'
            },
            card_credit_card_payment_call_transfer_error_accept_page: {
              bind: 'alert-CALL-TRANSFER-ERROR-accept'
            },
            card_credit_card_payment_call_transfer_error_cancel_page: {
              bind: 'alert-CALL-TRANSFER-ERROR-cancel'
            }
          }
        }
      }
    });
  }

  base.template.tagSpherica = 'glomo-opx-template-spherica';
  base.template.propertiesSpherica = {
    className: isNativeIos ? 'hide-inactive-steps last-step-min-heigh-auto ios-top-padding' : 'hide-inactive-steps last-step-min-heigh-auto',
    extraHeaderClass: isNativeIos ? 'bg-white' : '',
    iOSFixedHeader: isNativeIos,
    summaryPositionUnset: true
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

  getComponent('cells-spinner-veil').tagSpherica = 'cells-spinner-veil-spherica';
  getComponent('cells-spinner-veil').propertiesSpherica = sphericaPageUtils.getProperties({
    componentName: 'cells-spinner-veil-spherica',
    className: 'solid-spinner'
  });

  addCommonErrors(base.components)();
  return sphericaEnabledOperatives.includes(OPERATIVE) ?  sphericaPageUtils.spherize(base) : base;
};
