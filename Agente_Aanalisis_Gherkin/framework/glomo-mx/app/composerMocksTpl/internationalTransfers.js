/* eslint-disable max-statements, no-dupe-keys */
'use strict';
const utils = require('./common/helpers/_utils');
const { getCountry, getLocalCurrency, useNames, getLanguage } = utils;


module.exports = CONFIG => {

  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const CONSTANTS = require('./analytics/common/_constants');
  const COUNTRY = getCountry(CONFIG);
  const LOCAL_CURRENCY = getLocalCurrency(CONFIG);
  const LANGUAGE = getLanguage(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('internationalTransfers');
  const ANALYTICS = require('./analytics/_internationalTransfers')();
  const isNativeIos = CONFIG.nativeIos || false;
  const localStorageApp = require('./common/_local-storage');
  const PAGE_NAME = 'internationalTransfers';
  const OPERATIVE_PREFIX = PAGE_NAME.toUpperCase();
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const HOST = CONFIG.globalServices.host;
  const MAX_STEPS = 4;
  const MAX_DIGITS = 25;

  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  SPINNER.properties.className = 'solid-spinner';
  SPINNER.properties.cellsConnections.in = {
    ...SPINNER.properties.cellsConnections.in,
    navigation_international_transfers_panel_account_to_international_transfers: {
      bind: 'openVeil'
    },
    navigation_international_transfers_panel_dashboard_to_international_transfers: {
      bind: 'openVeil'
    },
    navigation_international_transfers_panel_account_list_to_international_transfers: {
      bind: 'openVeil'
    },
    [getChannelName('show_spinner')]: {
      bind: 'openVeil'
    },
    [getChannelName('hide_spinner')]: {
      bind: 'closeVeil'
    },
    [getChannelName('request_quote')]: {
      bind: 'show'
    },
    [getChannelName('success_get_currency')]: {
      bind: 'hide'
    },
    [getChannelName('error_get_currency')]: {
      bind: 'hide'
    }
  };

  const base = {
    hash: COUNTRY + 'internationalTransfers',
    currentPage: {
      url: '/international-transfers',
      params: []
    },
    pages: pages,
    template: {
      tag: 'diy-step-opx-template',
      properties: {
        delayScrollTop: 300,
        headerFixed: true,
        topOnConfirm: true,
        summaryPositionUnset: true,
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [getChannelName('show_button_finish_steps')]: {
              bind: 'showConfirm'
            },
            [getChannelName('init_page')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('CONFIRM_ANIMATION')]: {
              bind: 'collapseOpened'
            },
            [getChannelName('RESET_SCROLL')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('reset_step')]: {
              bind: 'close'
            },
            [getChannelName('SCROLL_ZONE_MODIFY')]: {
              bind: 'scrollItemIntoView'
            },
            global_international_transfer_modal_accept_destiny: {
              bind: 'recalculateHeader'
            },
            global_international_accept_change_of_quotation: {
              bind: 'recalculateHeader'
            },
            global_international_transfer_modal_restart_quotation_info: {
              bind: 'recalculateHeader'
            },
            global_international_transfer_timeout_error_accept: {
              bind: 'recalculateHeader'
            },
            global_international_transfer_modal_restart_quotation_amount: {
              bind: 'recalculateHeader'
            },
            global_modal_international_transfers_half_modal: {
              bind: 'recalculateHeader'
            },
            INTERNATIONAL_TRANSFERS_recalculate_header_timer: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            [getChannelName('SCOLL_TEMPLATE')]: {
              bind: 'opx-template-content-scroll'
            },
            [getChannelName('SCROLL_COMPLETE')]: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          continue: 'dashboard',
          secondaryClass: 'header--evening',
          className: 'header--evening',
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          titleName: 'glomo-international-transfers-foreign-currency-header-title',
          cellsConnections: {
            in: {
              add_header_class: {
                bind: 'setSecondaryClass'
              },
              remove_header_class: {
                bind: 'removeSecondaryClass'
              },
              [`global_${getChannelName('EXIT_ACCEPT')}`]: {
                bind: 'removeSecondaryClass'
              }
            },
            out: {
              [getChannelName('OPEN_MODAL_EXIT')]: {
                bind: 'click-right-button'
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
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false,
            'not-collapse-any-steps': true
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
              [getChannelName('init_page')]: {
                bind: 'init-page'
              },
              [getChannelName('init_page_recalculate_header')]: {
                bind: 'init-page'
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: {
              contract_existing_pay_to_continue: {
                bind: 'navigate'
              },
              contract_existing_pay_back_request: {
                bind: 'goBack'
              },
              navigation_contract_existing_pay_to_page: {
                bind: 'navigateToPage'
              },
              [getChannelName('exit_error_exchange_currency_flow')]: {
                bind: 'goBack'
              },
              [getChannelName('exit_international_transfers_flow')]: {
                bind: 'goBack'
              }
            },
            out: {
              nav_contract_existing_pay_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  const stepOpxDm = {
    zone: 'app__main',
    tag: 'diy-step-opx-dm',
    type: 'DM',
    properties: {
      lang: CONFIG.lang,
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      operativeName: 'internationalTransfers',
      cellsConnections: {
        in: {
          [getChannelName('SHOW_MODAL_CONFIRM')]: {
            bind: 'showExitConfirm'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'registerStep'
          },
          [getChannelName('NEXT_STEP')]: {
            bind: 'goToNext'
          },
          [getChannelName('OPEN_MODAL_EXIT')]: {
            bind: 'manageBackButton'
          },
          [getChannelName('COLLAPSE_OTHER_STEP')]: {
            bind: 'goToStep'
          },
          [getChannelName('COLLAPSE_STEPS')]: {
            bind: 'goToStep'
          },
          [getChannelName('SET_STEP')]: {
            bind: 'goToStep'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('reset_step_three')]: {
            bind: 'goToStep'
          }
        },
        out: {
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
            bind: 'show-close-confirm'
          },
          [getChannelName('GO_BACK')]: {
            bind: 'navigate-back-button'
          },
          [getChannelName('SCROLL_ZONE')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'can-execute-changed'
          }
        }
      }
    }
  };

  const transfersManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-international-transfers-mx-dm',
    familyPath: 'glomo-international-transfers-dm',
    properties: {
      enablePrepareFeedback: true,
      cellsConnections: {
        in: {
          global_client_id: {
            bind: 'clientId'
          },
          navigation_international_transfers_panel_account_to_international_transfers: {
            bind: 'initializationData'
          },
          international_transfers_collapsed_contact_proccess: {
            bind: 'receiptDataNewUser'
          },
          navigation_international_transfers_panel_dashboard_to_international_transfers: {
            bind: 'initializationData'
          },
          navigation_international_transfers_panel_dashboard_to_international_transfers_blue: {
            bind: 'navigationFromBlue'
          },
          navigation_international_transfers_panel_account_list_to_international_transfers: {
            bind: 'initializationData'
          },
          global_storage_get_loginData_success: {
            bind: 'loginDataLocalStoreSuccess'
          },
          navigation_account_section_to_international_transfers: {
            bind: 'validateData'
          },
          value_country: {
            bind: 'countryValue'
          },
          [getChannelName('set_selected_product_sender')]: {
            bind: 'initializationData'
          },
          [getChannelName('select_new_recipient')]: {
            bind: 'persistPrincipalData'
          },
          [getChannelName('create_flags_modal')]: {
            bind: 'createFlagsModal'
          },
          [getChannelName('flag_selected')]: {
            bind: 'changeFlagCurrency'
          },
          'international_transfer_high_user_success': {
            bind: 'validateCountry'
          },
          [getChannelName('button_swap_is_clicked')]: {
            bind: 'swapFlagsCountries'
          },
          [getChannelName('finish_set_amount_currency')]: {
            bind: 'requestCurrencyExchange'
          },
          [getChannelName('success_get_currency')]: {
            bind: 'quotationRequestSuccess'
          },
          [getChannelName('error_get_currency')]: {
            bind: 'quotationRequestError'
          },
          [getChannelName('listen_change_input_currency')]: {
            bind: 'inputCurrencyChanged'
          },
          [getChannelName('time_expired_to_finish')]: {
            bind: 'timeExpired'
          },
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
            bind: 'modalConfirmExitFlow'
          },
          global_international_transfer_modal_exit_flow: {
            bind: 'exitPageAccount'
          },
          [getChannelName('GO_BACK')]: {
            bind: 'exitPageAccount'
          },
          global_international_transfer_modal_exit_quotation_amount: {
            bind: 'returnDashboard'
          },
          global_international_transfer_modal_exit_quotation_info_error: {
            bind: 'exitPageAccount'
          },
          global_international_transfer_modal_exit_quotation_info: {
            bind: 'exitPageAccount'
          },
          global_international_transfer_modal_exit_exchange: {
            bind: 'exitPageAccount'
          },
          global_international_exit_fraudulent_operations: {
            bind: 'returnDashboard'
          },
          global_international_exit_fraudulent_operations_cancel: {
            bind: 'returnDashboard'
          },
          global_international_transfers_cancel_error_bank: {
            bind: 'exitPageAccount'
          },
          global_international_transfers_accept_error_return: {
            bind: 'exitPageAccount'
          },
          [getChannelName('change_recipient_reset_page')]: {
            bind: 'resetStepForeignCurrency'
          },
          [getChannelName('DATA_CONCEPT_INFO')]: {
            bind: 'conceptInfoFunction'
          },
          [getChannelName('REQUEST_CONTRACTING_TRANFER')]: {
            bind: 'saveMoneyLaunderingQuestionnaireAnswers'
          },
          [getChannelName('SUCCESS_ON_TRANSFER_CONTRACT')]: {
            bind: 'successTransfer'
          },
          [getChannelName('SCROLL_ZONE')]: {
            bind: 'scrollZoneModify'
          },
          [getChannelName('ERROR_ON_TRANSFER_CONTRACT')]: {
            bind: 'validCodeError'
          },
          global_international_transfer_modal_restart_quotation_amount: {
            bind: 'resetToQuotation'
          },
          global_international_transfer_timeout_error: {
            bind: 'changeQuotation'
          },
          global_international_transfer_timeout_error_accept: {
            bind: 'changeQuotation'
          },
          global_international_transfer_modal_restart_quotation_info: {
            bind: 'resetToQuotation'
          },
          [getChannelName('changed_flag_in_step_state')]: {
            bind: 'recipientSelectorChangedValue'
          },
          global_international_transfer_modal_accept_destiny: {
            bind: 'recipientSelectorResetModal'
          },
          [getChannelName('call_the_destination_change_modal')]: {
            bind: 'modalChangeOfDestiny'
          },
          [getChannelName('call_the_quotation_change_modal')]: {
            bind: 'modalChangeOfQuotation'
          },
          [getChannelName('accept_change_of_quotation')]: {
            bind: 'changeQuotation'
          },
          global_international_accept_change_of_quotation: {
            bind: 'changeQuotation'
          },
          [getChannelName('change-flag-quotation-clear')]: {
            bind: 'inputCloseIsPressed'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          global_international_transfers_accept: {
            bind: 'persistPrincipalData'
          },
          global_international_transfers_cancel: {
            bind: 'exitPageAccount'
          },
          global_storage_get_intenational_transfers_info_error: {
            bind: 'getInternationalTransfersLocalStorage'
          },
          global_storage_get_intenational_transfers_info_success: {
            bind: 'getInternationalTransfersLocalStorage'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'modalConfirmExitFlow'
          },
          global_international_transfer_modal_exit_direction_info: {
            bind: 'exitPageAccount'
          },
          global_international_transfer_modal_restart_direction_info: {
            bind: 'resetStepForeignCurrency'
          },
          [getChannelName('money_laundering_questionnaire_types_get_successful_response')]: {
            bind: 'handleGetMoneyLaunderingQuestionnaireSuccessfulResponse'
          },
          [getChannelName('money_laundering_questionnaire_types_get_error_response')]: {
            bind: 'handleGetMoneyLaunderingQuestionnaireErrorResponse'
          },
          [getChannelName('money_laundering_questionnaire_types_api_dm_error')]: {
            bind: 'handleGetMoneyLaunderingQuestionnaireErrorResponse'
          },
          [getChannelName('economic_activities_data')]: {
            bind: 'setEconomicActivitiesData'
          },
          [getChannelName('reason_for_transfer_answer')]: {
            bind: 'setReasonForTransferAnswer'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_successful_response')]: {
            bind: 'handleSaveMoneyLaunderingQuestionnaireAnswersSuccessfulResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_error_response')]: {
            bind: 'handleSaveMoneyLaunderingQuestionnaireAnswersErrorResponse'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_api_dm_error')]: {
            bind: 'handleSaveMoneyLaunderingQuestionnaireAnswersErrorResponse'
          },
          INTERNATIONAL_TRANSFERS_timer_description: {
            bind: 'dispatch-timer-description'
          },
          [getChannelName('flag_changed')]: {
            bind: 'sendDataOfChangeFlagDestinity'
          },
          [getChannelName('pressed_continue_button')]: {
            bind: 'pressContinueButton'
          },
          global_mtu_exception_back_navigation: {
            bind: 'cancelMtuException'
          },
          global_mtu_navigation_confirm_limit: {
            bind: 'mtuMakePayment'
          }
        },
        out: {
          international_transfers_reset_personal_information: {
            bind: 'reset-recipient-information'
          },
          global_get_from_storage: {
            bind: 'get-local-storage'
          },
          navigation_product_detail_to_international_transfers_out: {
            bind: 'set-account-associated'
          },
          [getChannelName('contact_book_step')]: {
            bind: 'set-default-data-contacts-step'
          },
          [getChannelName('CONCEPT_INITIAL_INFO')]: {
            bind: 'set-inital-concept'
          },
          [getChannelName('modal_exit_ready')]: {
            bind: 'check-open-modal-exit-confirm'
          },
          [getChannelName('send_new_contact')]: {
            bind: 'set-new-contact-collapsed-data'
          },
          'international_transfers_new_recipient': {
            bind: 'show-new-addressee',
            link: {
              page: 'internationalTransfersCreateRecipient'
            }
          },
          global_modal_international_transfers_message: {
            bind: 'open-modal-internationl-transfers'
          },
          [getChannelName('currency_exchange')]: {
            bind: 'set-currency-exchange'
          },
          [getChannelName('open_flag_modal')]: {
            bind: 'open-modal-selector-flag'
          },
          [getChannelName('flags_info_select')]: {
            bind: 'all-flags-to-selected'
          },
          [getChannelName('flag_changed')]: {
            bind: 'send-flag-changed'
          },
          [getChannelName('default_timer_data')]: {
            bind: 'set-default-data-timer'
          },
          [getChannelName('reset_input_and_timer')]: {
            bind: 'reset-foreign-exchange-and-timer'
          },
          [getChannelName('reset_info_and_timer')]: {
            bind: 'reset-info-transfer-and-timer'
          },
          [getChannelName('reset_step_collapse_active')]: {
            bind: 'international-transfer-reset-step-collapse-active'
          },
          [getChannelName('reset_step')]: {
            bind: 'international-transfer-reset-step'
          },
          [getChannelName('reset_step_three')]: {
            bind: 'international-transfer-reset-step-without'
          },
          [getChannelName('reset_foreing_currency')]: {
            bind: 'reset-foreing-currency'
          },
          [getChannelName('reset_foreing_currency_second_step')]: {
            bind: 'new-reset-foreing-currency-step'
          },
          [getChannelName('request_quote')]: {
            bind: 'request-currency-quote'
          },
          [getChannelName('information_quotation_success')]: {
            bind: 'send-quotation-information'
          },
          [getChannelName('SET_STEP')]: {
            bind: 'send-step'
          },
          [getChannelName('SET_REQUIRED')]: {
            bind: 'send-required'
          },
          [getChannelName('SET_REFERENCE_TRANSFER')]: {
            bind: 'send-reference-transfer'
          },
          global_modal_international_transfers_half_modal: {
            bind: 'show_modal_error'
          },
          global_modal_internation_transfers_fraudulent_modal: {
            bind: 'open-modal-fraudulent-operation'
          },
          global_modal_international_transfers_change_destiny: {
            bind: 'show-modal-change-of-destiny'
          },
          global_modal_international_request_banks_interantional_error: {
            bind: 'error-request-banks-international-back-mxn'
          },
          [getChannelName('SET-AMOUNT-COLLAPSED')]: {
            bind: 'set-amount-collapsed'
          },
          [getChannelName('enable_button_foreign_component')]: {
            bind: 'enable-button-currency'
          },
          global_alert_manager_open_with_settings: {
            bind: 'dispatch-modal-settings'
          },
          [getChannelName('SET_INFO_SUMMARY')]: {
            bind: 'set-sticky-information'
          },
          [getChannelName('REQUEST_TRANSFER_CONTRACT_SERVICE')]: {
            bind: 'request-contract-transfer'
          },
          [getChannelName('enabled_step_modal_changed')]: {
            bind: 'desabled-step-foreing-currency'
          },
          [getChannelName('desabled_step_modal_changed_destinity')]: {
            bind: 'reset-and-desabled-step-concep-input'
          },
          [getChannelName('send_new_value_in_recipient_properties')]: {
            bind: 'change-of-flag-value-in-recipient-inter-transfer'
          },
          [getChannelName('set-disabled-options-buttons')]: {
            bind: 'set-reset-buttons-recipient-inter-transfer'
          },
          [getChannelName('uncollapse_recipient_selector_exchange_rates_step')]: {
            bind: 'uncollapse-recipient-selector-inter-transfer'
          },
          NAVIGATE_TO_REVIEW_TRANSFER: {
            bind: 'review-transfer-data',
            link: {
              page: 'internationalTransfersSuccess',
              skipHistory: true
            }
          },
          [getChannelName('reset_timer_channel')]: {
            bind: 'reset-only-timer'
          },
          [getChannelName('SCROLL_ZONE_MODIFY')]: {
            bind: 'cells-scroll-zone-modify'
          },
          [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
            bind: 'set-sticky-information'
          },
          [getChannelName('return_page_go_back_modal')]: {
            bind: 'close-page-redirec-to-back',
            backStep: true
          },
          dashboard_pull_to_refresh_start: {
            bind: 'return-page-dashboard-operation',
            link: {
              page: 'dashboard'
            }
          },
          global_product_transfer_success: {
            bind: 'return-page-dashboard-operation',
            'forward-to-native': true
          },
          global_open_modal_request_error_international_transfers: {
            bind: 'error-request-banks-international'
          },
          global_get_from_storage: {
            bind: 'get-international-transfer-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-international-transfer-on-local-storage'
          },
          [getChannelName('error_insuficient_balance')]: {
            bind: 'error-insuficient-balance'
          },
          [getChannelName('error_exchange_rate_not_available')]: {
            bind: 'error-exchange-rate-not-available'
          },
          [getChannelName('error_operation_unavailable_retry')]: {
            bind: 'error-operation-unavailable-retry'
          },
          [getChannelName('error_operation_unavailable_exit')]: {
            bind: 'error-operation-unavailable-exit'
          },
          [getChannelName('error_destiny_invalid')]: {
            bind: 'error-destiny-invalid'
          },
          [getChannelName('error_out_time')]: {
            bind: 'error-out-time'
          },
          [getChannelName('error_code_bank')]: {
            bind: 'error-code-bank'
          },
          INTERNATIONAL_TRANSFERS_recalculate_header_timer: {
            bind: 'reset-view-header-timmer'
          },
          [getChannelName('analytics_step_confirmation')]: {
            bind: 'analytics-step-confirmation'
          },
          global_feedback_voice_controller_connect_transfers_international_abandon: {
            bind: 'prepare-feedback-event',
            link: {
              page: 'dashboard',
              cleanUntil: 'internationalTransfersSuccess'
            }
          },
          [getChannelName('request_money_laundering_questionnaire')]: {
            bind: 'dispatch-request-questionnaire-params'
          },
          INTERNATIONAL_TRANSFERS_FIRST_QUESTION_AVAILABLE_ANSWERS: {
            bind: 'dispatch-first-question-available-answers'
          },
          INTERNATIONAL_TRANSFERS_SECOND_QUESTION_AVAILABLE_ANSWERS: {
            bind: 'dispatch-second-question-available-answers'
          },
          [getChannelName('open_reason_transfer_options')]: {
            bind: 'show-reason-transfer-options-modal'
          },
          [getChannelName('rest_economic_activity_step')]: {
            bind: 'reset-economic-activity-step'
          },
          [getChannelName('hide_spinner')]: {
            bind: 'hide-spinner'
          },
          [getChannelName('money_laundering_answers')]: {
            bind: 'dispatch-money-laundering-answers'
          },
          [getChannelName('show_spinner')]: {
            bind: 'show-spinner'
          },
          [getChannelName('reason_transfer_parsed')]: {
            bind: 'dispatch-reason-transfer'
          },
          global_retry_error: {
            bind: 'show-global-retry-error'
          },
          international_transfers_listening_mode_new_recipient_blue: {
            bind: 'on-new-recipient-clear'
          },
          international_transfers_listening_mode_new_recipient_blue_data: {
            bind: 'new-recipient-blue-data'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          INTERNATIONAL_TRANSFERS_timer_description: {
            bind: 'dispatch-timer-description'
          }
        },
        params: {
          clientId: 'global_client_id'
        }
      }
    }
  };

  const analyticsInternationalsTransfer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-international-transfers-manager',
    familyPath: '@glomo-web-components/glomo-analytics-international-transfers-manager',
    render: 'litElement',
    properties: {
      signatureTypes: CONSTANTS.SIGNATURE_TYPES,
      cellsConnections: {
        in: {
          navigation_international_transfers_panel_account_list_to_international_transfers: {
            bind: 'analyticsAppStep2'
          },
          navigation_international_transfers_panel_account_to_international_transfers: {
            bind: 'analyticsAppStep2'
          },
          navigation_international_transfers_panel_dashboard_to_international_transfers: {
            bind: 'analyticsAppStep2'
          },
          [getChannelName('SET-AMOUNT-COLLAPSED')]: {
            bind: 'setCurrencyType'
          },
          INTERNATIONALTRANSFERSREVIEWRECIPIENT_analytics_app_step4: {
            bind: 'setPersistTypology'
          },
          [getChannelName('economic_activities_data')]: {
            bind: 'analyticsAppStep5'
          },
          [getChannelName('collapse_send_data_stiky')]: {
            bind: 'analyticsAppStep6'
          },
          [getChannelName('DATA_CONCEPT_INFO')]: {
            bind: 'analyticsAppStep7'
          },
          [getChannelName('SUCCESS_ON_TRANSFER_CONTRACT')]: {
            bind: 'completedSuccess'
          },
          [getChannelName('ERROR_ON_TRANSFER_CONTRACT')]: {
            bind: 'completedRejected'
          },
          [getChannelName('error_insuficient_balance')]: {
            bind: 'errorInsuficientBalance'
          },
          [getChannelName('error_exchange_rate_not_available')]: {
            bind: 'errorExchangeRate'
          },
          [getChannelName('error_destiny_invalid')]: {
            bind: 'errorInvlidDestination'
          },
          [getChannelName('error-operation-unavailable-retry')]: {
            bind: 'errorOperationRetry'
          },
          [getChannelName('error_operation_unavailable_exit')]: {
            bind: 'errorOperationUnavailable'
          },
          [getChannelName('error_code_bank')]: {
            bind: 'errorBankCode'
          },
          [getChannelName('error_out_time')]: {
            bind: 'errorOutTime'
          }
        },
        out: {
          [getChannelName('analytics_app_step2')]: {
            bind: 'analytics-app-step2',
            analytics: ANALYTICS.APP_STEP_2
          },
          [getChannelName('analytics_app_step4')]: {
            bind: 'analytics-app-step4',
            analytics: ANALYTICS.APP_STEP_4
          },
          [getChannelName('analytics_app_step5')]: {
            bind: 'analytics-app-step5',
            analytics: ANALYTICS.APP_STEP_5
          },
          [getChannelName('analytics_app_step6')]: {
            bind: 'analytics-app-step6',
            analytics: ANALYTICS.APP_STEP_6
          },
          [getChannelName('analytics_app_step7')]: {
            bind: 'analytics-app-step7',
            analytics: ANALYTICS.APP_STEP_7
          },
          [getChannelName('analytics_app_step_otp')]: {
            bind: 'analytics-otp-step',
            analytics: ANALYTICS.APP_STEP_8
          },
          [getChannelName('analytics_app_completed')]: {
            bind: 'analytics-app-completed-success',
            analytics: ANALYTICS.get_custom_app_completed_with_feature_flag('finalizado')
          },
          [getChannelName('analytics_completed_rejected')]: {
            bind: 'analytics-app-completed-rejected',
            analytics: ANALYTICS.get_custom_app_completed_with_feature_flag('rechazado')
          },
          [getChannelName('analytics_error_insuficient_balance')]: {
            bind: 'analytics-error-insuficient-balance',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error saldo insuficiente')
          },
          [getChannelName('analytics_error_exchange_rate')]: {
            bind: 'analytics-error-exchange-rate',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error tipo de cambio no disponible')
          },
          [getChannelName('analytics_error_invalid_destination')]: {
            bind: 'analytics-error-invalid-destination',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error destino no valido')
          },
          [getChannelName('analytics_error_operation_retry')]: {
            bind: 'analytics-error-operation-retry',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error operacion no disponible reintentar')
          },
          [getChannelName('analytics_error_operation_unavailable')]: {
            bind: 'analytics-error-operation-unavailable',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error operacion no disponible')
          },
          [getChannelName('analytics_error_bank_code')]: {
            bind: 'analytics-error-bank-code',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error codigo banco')
          },
          [getChannelName('analytics_error_out_time')]: {
            bind: 'analytics-error-out-time',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error fuera de horario')
          },
          [getChannelName('analytics_error_recipient_unavailable')]: {
            bind: 'analytics-error-recipient-unavailable',
            analytics: ANALYTICS.get_advanced_footprint_error_with_feature_flag('error destinatario no disponible')
          }
        }
      }
    }
  };

  const productSelector = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    type: 'UI',
    properties: {
      shouldHideChangeButton: true,
      collapsed: true,
      errorMessage: getLocaleName('error-message'),
      currentStep: 0,
      maxSteps: MAX_STEPS,
      active: true,
      productSelected: true,
      changeLabel: null,
      stepTitle: 'glomo-international-transfers-foreign-currency-root-account',
      productsListLabel: getLocaleName('list-products'),
      className: 'cells-step-container ',
      disableChange: true,
      hideCurrentStepLabel: true,
      visibleChars: 5,
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          navigation_product_detail_to_international_transfers_out: {
            bind: 'selected'
          },
          [getChannelName('collaps_selector')]: {
            bind: 'setProperties'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('COLLAPSE_OTHER_STEP')]: {
            bind: 'change-pressed'
          },
          [getChannelName('COLLAPSE_STEPS')]: {
            bind: 'change-step-state'
          },
          [getChannelName('NEXT_STEP')]: {
            bind: 'check-open-confirm'
          }
        }
      }
    }
  };

  const stepRecipientSelector = {
    zone: 'app__main',
    tag: 'cells-step-recipient-selector',
    type: 'UI',
    properties: {
      currentStep: 1,
      maxSteps: MAX_STEPS,
      active: true,
      className: '',
      hideContactList: true,
      hideCurrentStepLabel: false,
      hideMyAccounts: true,
      initWithDefaultProductSelected: true,
      newRecipientLabelKey: 'cells-step-recipient-selector-intenational-transfert-button',
      stepTitle: 'cells-step-recipient-selector-intenational-transfert-title',
      accountsRecipientIcon: 'coronita:creditcard',
      changeSourceButtonLabel: 'cells-international-transfers-change-of-destiny-title',
      recipientSelectedSaving: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('send_new_contact')]: {
            bind: 'setNewRecipient'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('send_new_value_in_recipient_properties')]: {
            bind: 'showAlertBeforeUncollapsing'
          },
          [getChannelName('cancel_change_of_destiny')]: {
            bind: '_dontChangeAndContinue'
          },
          [getChannelName('set-disabled-options-buttons')]: {
            bind: 'setProperties'
          },
          [getChannelName('uncollapse_recipient_selector_exchange_rates_step')]: {
            bind: '_changeRecipient'
          },
          international_transfers_listening_mode_new_recipient_blue: {
            bind: 'onNewRecipientClear'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('select_new_recipient')]: {
            bind: 'new-recipient'
          },
          [getChannelName('NEXT_STEP')]: {
            bind: 'check-open-confirm'
          },
          [getChannelName('SHOW_MODAL_CONFIRM')]: {
            bind: 'check-open-confirm'
          },
          international_transfers_reset_personal_information: {
            bind: 'check-open-confirm'
          },
          [getChannelName('COLLAPSE_STEPS')]: {
            bind: 'change-step-state'
          },
          [getChannelName('COLLAPSE_OTHER_STEP')]: {
            bind: 'change-pressed'
          },
          [getChannelName('changed_flag_in_step_state')]: {
            bind: 'change-step-state'
          },
          [getChannelName('call_the_destination_change_modal')]: {
            bind: 'change-recipient-selector-show-alert'
          },
          [getChannelName('change_recipient_reset_page')]: {
            bind: 'recipient-selector-change-recipient'
          }
        }
      }
    }
  };

  const cellsStepEconomicActivity = {
    zone: 'app__main',
    tag: 'cells-step-economic-activity',
    type: 'UI',
    properties: {
      id: 'cells-step-economic-activity',
      active: false,
      currentStep: 2,
      maxSteps: MAX_STEPS,
      title: 'cells-international-transfers-title-step',
      infoText: 'cells-international-transfers-info-text-step',
      firstTextAreaPlaceholder: 'cells-international-transfers-firts-text-area',
      secondTextareaPlaceholder: 'cells-international-transfers-second-text-area',
      checkboxLabel: 'cells-international-transfers-checkbox-activity',
      counterLabel: 'cells-international-transfers-counter-characters',
      changeLabel: 'cells-international-transfers-change-step-button',
      btnContinueValue: 'cells-international-transfers-finished-economic-activity-step',
      showInfoText: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          },
          INTERNATIONAL_TRANSFERS_LOCAL_ECONOMIC_ACTIVITY_DESCRIPTION_ANSWER: {
            bind: 'firstTextAreaValue'
          },
          INTERNATIONAL_TRANSFERS_FOREIGN_ECONOMIC_ACTIVITY_PROPERTIES: {
            bind: 'setProperties'
          },
          [getChannelName('rest_economic_activity_step')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('NEXT_STEP')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('economic_activities_data')]: {
            bind: 'continue-clicked'
          },
          [getChannelName('COLLAPSE_STEPS')]: {
            bind: 'change-step-state'
          }
        }
      }
    }
  };

  const globalApisExchangeRates = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-exchange-rates',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      exchangeRatesApiVersion: '1',
      bgadpImpl: 'global',
      cellsConnections: {
        in: {
          [getChannelName('request_quote')]: {
            bind: 'postExchangeRateCalculate'
          }
        },
        out: {
          [getChannelName('success_get_currency')]: {
            bind: 'success-on-get-exchange-currency'
          },
          [getChannelName('error_get_currency')]: {
            bind: 'error-on-exchange-currency'
          }
        }
      }
    }
  };

  const foreignCurrencyOperation = {
    zone: 'app__main',
    tag: 'glomo-step-foreign-currency-operation',
    type: 'UI',
    properties: {
      active: false,
      currentStep: 3,
      maxSteps: MAX_STEPS,
      amountInputLabel: 'glomo-international-transfers-step-foreign-currency-operation-import',
      stepTitle: 'glomo-international-transfers-foreign-currency-step-currency-title',
      currencySelectDisabled: false,
      localCurrency: LOCAL_CURRENCY,
      showExchangeSection: true,
      flagExchangeSection: true,
      showExchange: true,
      hasCountryCurrencyLabel: true,
      infoMessageData: true,
      notEnoughBalanceAfterKey: '',
      showOperationGroup: true,
      max: MAX_DIGITS,
      flag: false,
      hideCellsRadioGroup: true,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('currency_exchange')]: {
            bind: 'setProperties'
          },
          [getChannelName('flag_changed')]: {
            bind: 'setProperties'
          },
          [getChannelName('enable_button_foreign_component')]: {
            bind: 'setUpdatedAmount'
          },
          [getChannelName('information_quotation_success')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET-AMOUNT-COLLAPSED')]: {
            bind: 'setProperties'
          },
          [getChannelName('enabled_step_modal_changed')]: {
            bind: 'setProperties'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('reset_foreing_currency')]: {
            bind: 'setProperties'
          },
          [getChannelName('reset_foreing_currency_second_step')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('NEXT_STEP')]: {
            bind: 'step-continue'
          },
          [getChannelName('pressed_continue_button')]: {
            bind: 'step-continue'
          },
          [getChannelName('collapse_send_data_stiky')]: {
            bind: 'step-continue'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('button_swap_is_clicked')]: {
            bind: 'receiver-section-on-icon-click'
          },
          [getChannelName('create_flags_modal')]: {
            bind: 'open-document-modal-selector'
          },
          [getChannelName('finish_set_amount_currency')]: {
            bind: 'focus-out'
          },
          [getChannelName('change-flag-quotation-clear')]: {
            bind: 'amount-input-focus'
          },
          [getChannelName('listen_change_input_currency')]: {
            bind: 'amount-input-changed'
          },
          [getChannelName('call_the_quotation_change_modal')]: {
            bind: 'change-step-state-receiver'
          }
        }
      }
    }
  };

  const circularTimer = {
    zone: 'app__header',
    tag: 'glomo-aggregation-circular-timer',
    type: 'UI',
    properties: {
      id: 'aggregationCircular',
      trailWidth: 5,
      size: 65,
      className: 'show-animation',
      fillUp: true,
      reflect: true,
      cellsConnections: {
        in: {
          [getChannelName('default_timer_data')]: {
            bind: 'timeout'
          },
          [getChannelName('reset_input_and_timer')]: {
            bind: 'setProperties'
          },
          [getChannelName('reset_timer_channel')]: {
            bind: 'setProperties'
          },
          [getChannelName('reset_info_and_timer')]: {
            bind: 'setProperties'
          },
          INTERNATIONAL_TRANSFERS_timer_description: {
            bind: 'timerDescription'
          }
        },
        out: {
          [getChannelName('time_expired_to_finish')]: {
            bind: 'timeout'
          }
        }
      }
    }
  };

  const selectorModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-modal-selector',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_flag_modal')]: {
            bind: 'open'
          },
          [getChannelName('flags_info_select')]: {
            bind: 'items'
          },
          [getChannelName('item_selected_modal_changed')]: {
            bind: 'itemSelected'
          },
          [getChannelName('item_selected_reset')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('flag_selected')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };

  const stepConcept = {
    zone: 'app__main',
    tag: 'cells-step-concept',
    type: 'UI',
    properties: {
      currentStep: 4,
      active: false,
      maxSteps: MAX_STEPS,
      title: 'glomo-international-transfers-cells-step-concept',
      className: 'international-transfers',
      labelClass: 'label-normal label-wrapped',
      referenceClass: 'space label-normal',
      showReference: true,
      showConceptLabel: true,
      readonlyReferenceInput: true,
      conceptLabel: 'glomo-international-transfers-concept',
      showMovementType: true,
      selectLabel: 'glomo-international-transfers-reason-for-transfer',
      conceptRequiresMinChars: true,
      customClassInput: 'custom-fluid-input',
      minChars: 8,
      maxLength: '35',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('CONCEPT_INITIAL_INFO')]: {
            bind: 'setProperties'
          },
          [getChannelName('desabled_step_modal_changed_destinity')]: {
            bind: 'inputConcept'
          },
          [getChannelName('reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('reset_step_collapse_active')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_REQUIRED')]: {
            bind: 'isRequired'
          },
          [getChannelName('SET_REFERENCE_TRANSFER')]: {
            bind: '_reference'
          },
          [getChannelName('reason_transfer_parsed')]: {
            bind: 'movementType'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('DATA_CONCEPT_INFO')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('NEXT_STEP')]: {
            bind: 'change-pressed'
          },
          [getChannelName('NEXT_STEP')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('COLLAPSE_STEPS')]: {
            bind: 'change-step-state'
          },
          [getChannelName('show_reason_for_transfer_available_answers')]: {
            bind: 'open-selector-movements-types-modal'
          }
        }
      }
    }
  };

  const modalSelectorTransferReason = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-selector',
    properties: {
      hideCheckIcon: true,
      cellsConnections: {
        in: {
          [getChannelName('show_reason_for_transfer_available_answers')]: {
            bind: 'open'
          },
          INTERNATIONAL_TRANSFERS_SECOND_QUESTION_AVAILABLE_ANSWERS: {
            bind: 'items'
          },
          navigation_international_transfers_panel_account_to_international_transfers: {
            bind: 'reset'
          },
          navigation_international_transfers_panel_dashboard_to_international_transfers: {
            bind: 'reset'
          },
          navigation_international_transfers_panel_account_list_to_international_transfers: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('reason_for_transfer_answer')]: {
            bind: 'item-clicked'
          }
        }
      }
    }
  };

  const transferDm = {
    zone: 'app__main',
    familyPath: 'cells-dm-global-apis-transfer',
    tag: 'cells-dm-global-apis-transfer-mx',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      transfersApiVersion: CONFIG.globalServices.versions.internationalTransfersV1,
      otpId: PAGE_NAME,
      localCurrency: LOCAL_CURRENCY,
      language: LANGUAGE,
      cellsConnections: {
        in: {
          [getChannelName('REQUEST_TRANSFER_CONTRACT_SERVICE')]: {
            bind: 'postInternationalTransfers'
          }
        },
        out: {
          [getChannelName('SUCCESS_ON_TRANSFER_CONTRACT')]: {
            bind: 'success-on-post-international-transfers'
          },
          [getChannelName('ERROR_ON_TRANSFER_CONTRACT')]: {
            bind: 'error-on-post-international-transfers'
          }
        }
      }
    }
  };

  const summarySection = {
    zone: 'app__confirm',
    tag: 'cells-summary-view',
    type: 'UI',
    properties: {
      id: getLocaleName('summary-section'),
      showAddition: true,
      className: 'regular normal-font',
      buttonLabel: 'international-transfers-summary-button-label',
      summaryViewTitle: 'cells-international-transfers-import-to-transfer',
      operationAmountClass: 'amount-huge-decimals',
      hideCustomFeesMessage: true,
      localCurrency: LOCAL_CURRENCY,
      forceFeesMessage: 'cells-international-transfers-commission',
      cellsConnections: {
        in: {
          [getChannelName('SET_INFO_AMOUNT_STICKY')]: {
            bind: 'operation'
          },
          [getChannelName('reset_step_three')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('REQUEST_CONTRACTING_TRANFER')]: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };

  const bbvaDataproviderMoneyLaunderingQuestionnaireTypes = {
    tag: 'bbva-dataprovider-money-laundering-questionnaire-types',
    familyPath: '@glomo-web-components/bbva-dataprovider-money-laundering',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      version: '0',
      cellsConnections: {
        in: {
          [getChannelName('request_money_laundering_questionnaire')]: {
            bind: 'getQuestionnaireTypes'
          }
        },
        out: {
          [getChannelName('money_laundering_questionnaire_types_get_successful_response')]: {
            bind: 'data-provider-money-laundering-questionnaire-types-get-successful-response'
          },
          [getChannelName('money_laundering_questionnaire_types_get_error_response')]: {
            bind: 'data-provider-money-laundering-questionnaire-types-get-error-response'
          },
          [getChannelName('money_laundering_questionnaire_types_api_dm_error')]: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const bbvaDataproviderMoneyLaunderingInternationalTransfersQuestionnaireAnswers = {
    tag: 'bbva-dataprovider-money-laundering-international-transfers-questionnaire-answers',
    familyPath: '@glomo-web-components/bbva-dataprovider-money-laundering',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      version: '0',
      cellsConnections: {
        in: {
          [getChannelName('money_laundering_answers')]: {
            bind: 'postInternationalTransfersQuestionnaireAnswers'
          }
        },
        out: {
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_successful_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answers-post-successful-response'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_post_error_response')]: {
            bind: 'data-provider-money-laundering-international-transfers-questionnaire-answers-post-error-response'
          },
          [getChannelName('money_laundering_international_transfers_questionnaire_answers_api_dm_error')]: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const UI = [
    productSelector,
    stepRecipientSelector,
    cellsStepEconomicActivity,
    foreignCurrencyOperation,
    circularTimer,
    selectorModal,
    stepConcept,
    modalSelectorTransferReason,
    summarySection
  ];
  const DMs = [
    stepOpxDm,
    transfersManager,
    globalApisExchangeRates,
    transferDm,
    analyticsInternationalsTransfer,
    bbvaDataproviderMoneyLaunderingQuestionnaireTypes,
    bbvaDataproviderMoneyLaunderingInternationalTransfersQuestionnaireAnswers
  ];

  base.components.push(...UI, ...DMs);

  localStorageApp.addOutStorageChannels(base.components, [ 'intenational_transfers_info' ], CONFIG);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-transfer-mx', PAGE_NAME, ['success-on-post-international-transfers', 'error-on-post-international-transfers'],
    {
      analyticsComponentTag: 'glomo-analytics-international-transfers-manager',
      fireAnalyticsMethodName: 'viewStepToken'
    }
  );

  addRetryErrors(base)([
    {
      id: 'money-laundering-questionnaire-not-loaded',
      acceptRetry: { bind: 'getMoneyLaunderingQuestionnaire', component: 'glomo-international-transfers-mx-dm' },
      cancelRetry: { bind: 'manageBackButton', component: 'diy-step-opx-dm' },
      successEvent: {
        bind: 'data-provider-money-laundering-questionnaire-types-get-successful-response',
        component: 'bbva-dataprovider-money-laundering-questionnaire-types'
      },
      acceptCallForHelp: { bind: 'manageBackButton', component: 'diy-step-opx-dm' }
    },
    {
      id: 'money-laundering-questionnaire-unfinished-operation',
      acceptRetry: { bind: 'saveMoneyLaunderingQuestionnaireAnswers', component: 'glomo-international-transfers-mx-dm' },
      cancelRetry: { bind: 'manageBackButton', component: 'diy-step-opx-dm' },
      successEvent: {
        bind: 'data-provider-money-laundering-international-transfers-questionnaire-answers-post-successful-response',
        component: 'bbva-dataprovider-money-laundering-international-transfers-questionnaire-answers'
      },
      acceptCallForHelp: { bind: 'manageBackButton', component: 'diy-step-opx-dm' }
    }
  ]);

  addCommonErrors(base.components)();

  return base;
};
