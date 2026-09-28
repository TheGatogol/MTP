/* eslint-disable complexity, max-statements */
'use strict';
const moment = require('moment');
module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  // eslint-disable-next-line new-cap
  const VERIDAS_SPINNER = utils.SPINNER(CONFIG);
  const createPrefixFromPageName = utils.createPrefixFromPageName;
  const PAGE_NAME = 'upgradeAccountCustomerDataPage';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const PREFIX_NAME_CHANNEL = OPERATIVE_PREFIX.split(/(?=[A-Z])/).join('_').toLowerCase();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const localStorageApp = require('./common/_local-storage');

  const ANALYTICS = require('./analytics/_upgradeAccountCustomer')(CONFIG);

  const CUSTOMER_DOCUMENTS_TYPE = [
    { 'id': '005', 'name': 'PREDIAL BIMESTRAL' },
    { 'id': '006', 'name': 'RECIBO DE LUZ' },
    { 'id': '007', 'name': 'RECIBO DE TELEFONO' },
    { 'id': '008', 'name': 'RECIBO DE AGUA' },
    { 'id': '026', 'name': 'CREDENCIAL ELECTOR' },
    { 'id': '064', 'name': 'RECIBO DE GAS NAT' }
  ];

  SPINNER.properties.cellsConnections.in.upgrade_account_show_spinner = {
    bind: 'show'
  };
  SPINNER.properties.cellsConnections.in.upgrade_account_hide_spinner = {
    bind: 'hide'
  };
  VERIDAS_SPINNER.properties.messages = [ 'bbva-widget-scanner-verifications-biometrics-spinner-veil-message' ];
  VERIDAS_SPINNER.properties.secondaryMessage = [ 'bbva-widget-scanner-verifications-biometrics-spinner-veil-secondary-message' ];
  VERIDAS_SPINNER.properties.cellsConnections.in.upgrade_account_multistep_verify_document_show_spinner_veil = {
    bind: 'show'
  };
  VERIDAS_SPINNER.properties.cellsConnections.in.upgrade_account_multistep_verify_document_hide_spinner_veil = {
    bind: 'hide'
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    familyPath: '@bbva-web-components/bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'upgrade-account-init-header',
      iconRightPrimary: 'bbva:close',
      cellsConnections: {
        in: {},
        out: {
          upgrade_account_customer_data_header_main_icon_right_primary_click: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-st-button-upgrade-level',
        disabled: false,
        action: 'multistep-upgrade-account-button-clicked'
      }
    }
  };

  const base = {
    hash: 'mxupgradeAccountCustomerDataPage',
    currentPage: {
      url: '/upgrade-account-customer-data-page',
      params: []
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        footerHeight: 112,
        cellsConnections: {
          in: {
            upgrade_account_multistep_hidden_footer_continue: {
              bind: 'hasFooter'
            },
            upgrade_account_multistep_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      }
    },
    components: [
      SPINNER,
      VERIDAS_SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              ['__bridge_app_' + PAGE_NAME]: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PAGE_NAME]: {
                bind: 'init'
              }
            },
            out: {
              upgrade_account_multistep_page: {
                bind: 'init-page',
                analytics: ANALYTICS.APP_STEP_3
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
          backAction: 'navigation-to-dashboard',
          currentPage: PAGE_NAME,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'handleNativeBackButton'
              },
              global_opened_modal: {
                bind: 'openedModal'
              },
              upgrade_account_customer_data_header_main_icon_right_primary_click: {
                bind: 'goBack'
              },
              upgrade_account_customer_data_navigation_to_previous_page: {
                bind: 'goBack'
              }
            },
            out: {
              upgrade_account_customer_data_navigation_to_previous_page: {
                bind: 'navigate-to-previous-page'
              },
              global_alert_modal_close: {
                bind: 'navigate-native-back-button'
              },
              navigation_upgrade_account_to_dashboard: {
                bind: 'navigation-to-dashboard'
              },
              global_upgrade_account_exit: {
                bind: 'navigation-to-dashboard'
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          className: 'button-tertiary',
          config: configButtons,
          hidden: 'true',
          cellsConnections: {
            in: {
              upgrade_account_multistep_hidden_continue: {
                bind: 'hidden'
              }
            },
            out: {
              upgrade_account_multistep_click_continue: {
                bind: 'multistep-upgrade-account-button-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-multistep-upgrade-account',
        familyPath: '@glomo-web-components/bbva-multistep-upgrade-account',
        render: 'litElement',
        properties: {
          currentStep: 1,
          maxSteps: 6,
          isNativeIos: isNativeIos,
          bubbleEvent: 'true',
          changeLabel: 'glomo-common-operatives-change',
          productsListLabel: 'glomo-common-accounts-selector-title',
          veridasDMConfig: {
            host: CONFIG.globalServices.host,
            apiVersion: '1',
            requiredToken: 'tsec', // public access
            native: !!CONFIG.native
          },
          pageName: PAGE_NAME,
          usageContinueEnabled: true,
          customerDocumentsType: CUSTOMER_DOCUMENTS_TYPE,
          cellsConnections: {
            in: {
              upgrade_account_multistep_verify_completed: {
                bind: 'completeStep'
              },
              upgrade_account_option_media_capture_modal_gallery: {
                bind: 'mediaCapture'
              },
              upgrade_account_option_media_capture_modal_camera: {
                bind: 'mediaCapture'
              },
              upgrade_account_multistep_address_completed: {
                bind: 'completeStep'
              },
              upgrade_account_multistep_personal_completed: {
                bind: 'completeStep'
              },
              upgrade_account_multistep_financial_completed: {
                bind: 'completeStep'
              },
              upgrade_account_multistep_credits_completed: {
                bind: 'completeStep'
              },
              upgrade_account_multistep_usage_completed: {
                bind: 'completeStep'
              },
              upgrade_account_multistep_terms_completed: {
                bind: 'completeStep'
              },
              upgrade_account_multistep_set_personal_data: {
                bind: 'personalData'
              },
              upgrade_account_personal_data_continue_enabled: {
                bind: 'personalDataContinueEnabled'
              },
              upgrade_account_set_addresses_data: {
                bind: 'addressesData'
              },
              upgrade_account_change_addresses: {
                bind: 'hideUnmaskedAddress'
              },
              upgrade_account_set_customer_documents_type_data: {
                bind: 'onProoAddressChanged'
              },
              upgrade_account_deposits_amount_changed: {
                bind: 'depositsAmountFormOptions'
              },
              upgrade_account_deposits_operations_changed: {
                bind: 'depositsOperationsFormOptions'
              },
              upgrade_account_transfers_amount_changed: {
                bind: 'transfersAmountFormOptions'
              },
              upgrade_account_transfers_operations_changed: {
                bind: 'transfersOperationsFormOptions'
              },
              upgrade_account_dollar_amount_changed: {
                bind: 'dollarAmountFormOptions'
              },
              upgrade_account_dollar_operations_changed: {
                bind: 'dollarOperationsFormOptions'
              },
              upgrade_account_countries_operations_changed: {
                bind: 'countriesCatalog'
              },
              upgrade_account_send_collapsed_info: {
                bind: 'collapsedFinancialOperationInfo'
              },
              upgrade_account_send_status_response: {
                bind: 'showFinancialOperationButton'
              },
              upgrade_account_conditions_checks_options_changed: {
                bind: 'conditionsChecksOptions'
              },
              upgrade_account_send_conditions_status_response: {
                bind: 'showTermsAndConditionsButton'
              },
              upgrade_account_usage_account_changed: {
                bind: 'usageAccountFormOptions'
              },
              upgrade_account_bank_relationship_changed: {
                bind: 'bankRelationshipFormOptions'
              },
              upgrade_account_money_origin_changed: {
                bind: 'moneyOriginFormOptions'
              },
              upgrade_account_multistep_page: {
                bind: 'initStep'
              },
              upgrade_account_customer_data_personal_data_complete_step: {
                bind: 'completePersonalDataStep'
              },
              upgrade_account_multistep_show_ine: {
                bind: 'showIneInput'
              },
              upgrade_account_multistep_show_curp: {
                bind: 'showCurpInput'
              },
              upgrade_account_send_occupation_list: {
                bind: 'occupationsList'
              },
              [PAGE_NAME + 'SEND_CIVIL_STATUS_LIST']: {
                bind: 'civilStatusList'
              },
              upgrade_account_show_activity: {
                bind: 'showActivitySelect'
              },
              upgrade_account_activities_form: {
                bind: 'activitiesFormOptions'
              },
              upgrade_account_option_media_capture_right_click_accept: {
                bind: 'receiptStatus'
              },
              upgrade_account_input_date_validation: {
                bind: 'inputDateValidation'
              },
              upgrade_account_continue_enabled: {
                bind: 'addressContinueEnabled'
              },
              upgrade_account_multistep_success_form: {
                bind: 'onSuccessForm'
              },
              upgrade_account_multistep_update_confirm_agreements: {
                bind: 'confirmVerificationsAgreements'
              },
              upgrade_account_customer_scanner_verifications_reset_captures: {
                bind: 'resetVerificationsCaptures'
              },
              [PREFIX_NAME_CHANNEL + 'documents_verifications_fetch_success']: {
                bind: 'goNextStepVerify'
              },

              // Invalid fields
              upgrade_account_invalid_rfc: {
                bind: 'invalidRfc'
              },
              upgrade_account_invalid_ine: {
                bind: 'invalidIne'
              },
              upgrade_account_invalid_elector_key: {
                bind: 'invalidElectorKey'
              },
              upgrade_account_invalid_register_year: {
                bind: 'invalidRegisterYear'
              },
              upgrade_account_invalid_curp: {
                bind: 'invalidCurp'
              },
              upgrade_account_multistep_usage_summary: {
                bind: 'usageSumary'
              },
              upgrade_account_multistep_step_usage_completed: {
                bind: 'completeUsageStep'
              },
              upgrade_account_exit_process: {
                bind: 'reset'
              },
              upgrade_account_set_show_title_text: {
                bind: 'showAddressTitle'
              },
              upgrade_account_date_picker_data: {
                bind: 'datePickerData'
              },
              upgade_account_loading_address: {
                bind: 'loadingAddress'
              },
              upgrade_account_customer_ocr_curp: {
                bind: 'curp'
              },
              upgrade_account_customer_calculate_rfc: {
                bind: 'updatedRfc'
              },
              upgrade_account_veridas_config: {
                bind: 'veridas'
              }
            },
            out: {
              upgrade_account_multistep_hidden_continue: {
                bind: 'upgrade-account-multistep-all-complete'
              },
              upgrade_account_multistep_hidden_footer_continue: {
                bind: 'expandable-multistep-all-complete'
              },
              upgrade_account_multistep_click_continue_verify: {
                bind: 'next-step-upgrade-account-multistep-verify',
                analytics: ANALYTICS.APP_STEP_7
              },
              upgrade_account_multistep_click_continue_personal: {
                bind: 'next-step-upgrade-account-multistep-personal'
              },
              upgrade_account_multistep_click_continue_financial: {
                bind: 'next-step-upgrade-account-multistep-financial',
                analytics: ANALYTICS.APP_STEP_10
              },
              upgrade_account_multistep_click_continue_terms: {
                bind: 'next-step-upgrade-account-multistep-terms',
                analytics: ANALYTICS.APP_STEP_12
              },
              upgrade_account_multistep_click_continue_usage: {
                bind: 'next-step-upgrade-account-multistep-usage',
                analytics: ANALYTICS.APP_STEP_11
              },
              upgrade_account_multistep_click_continue_address: {
                bind: 'next-step-upgrade-account-multistep-address',
                analytics: ANALYTICS.APP_STEP_9
              },
              upgrade_account_multistep_click_continue_credits: {
                bind: 'next-step-upgrade-account-multistep-credits'
              },
              upgrade_account_personal_data_form_changed: {
                bind: 'personal-data-form-changed'
              },
              upgrade_account_multistep_click_open_modal: {
                bind: 'modal-operation-link-click'
              },
              upgrade_account_multistep_financial_operation_info: {
                bind: 'send-financial-operation-info'
              },
              upgrade_account_multistep_finanial_operation_validate: {
                bind: 'validate-financial-operation-info'
              },
              upgrade_account_multistep_conditions_validate: {
                bind: 'validate-terms-and-conditions'
              },
              upgrade_account_multistep_conditions_modal: {
                bind: 'modal-data-treatment-link-click'
              },
              upgrade_account_modal_address_edit_open: {
                bind: 'show-modal-address'
              },
              upgrade_account_multistep_option_media_capture_modal: {
                bind: 'open-option-media-capture-modal'
              },
              upgrade_account_multistep_ine_validation: {
                bind: 'validate-ine'
              },
              upgrade_account_multistep_curp_validation: {
                bind: 'validate-curp'
              },
              upgrade_account_multistep_verify_document_show_spinner_veil: {
                bind: 'show-message-spinner-veil'
              },
              upgrade_account_multistep_verify_document_hide_spinner_veil: {
                bind: 'hide-message-spinner-veil'
              },
              upgrade_account_validate_ocupation: {
                bind: 'occupation-selected'
              },
              upgrade_account_multistep_verify_document_agreements_not_confirmed: {
                bind: 'verifications-agreements-not-confirmed'
              },
              [PREFIX_NAME_CHANNEL + 'scanner_verifications_completed']: {
                bind: 'verifications-completed'
              },
              upgrade_account_customer_scanner_verifications_error: {
                bind: 'verifications-error'
              },
              upgrade_account_ine_help_open: {
                bind: 'open-ine-help-modal'
              },
              upgrade_account_ine_help_config: {
                bind: 'open-ine-help-modal'
              },
              upgrade_account_multistep_toggle_address: {
                bind: 'toggle-address-mask'
              },
              upgrade_account_proof_date_changed: {
                bind: 'date-changed'
              },
              upgrade_account_proof_changed: {
                bind: 'select-proof-option'
              },
              upgrade_account_option_media_capture_modal_close: {
                bind: 'close-upgrade-account-option-media-capture-modal'
              },
              upgrade_account_option_media_capture_right_click: {
                bind: 'media-capture-right-click-delete'
              },
              upgrade_account_multistep_verification_documents_ocr_data: {
                bind: 'documents-ocr-data'
              },
              upgrade_account_multistep_verification_documents_obverse_img: {
                bind: 'obverse-image-success'
              },
              upgrade_account_multistep_verification_documents_reverse_img: {
                bind: 'reverse-image-success'
              },
              upgrade_account_multistep_verification_documents_selfie_img: {
                bind: 'selfie-image-success'
              },
              upgrade_account_multistep_ine_focus: {
                bind: 'ine-focus'
              },
              upgrade_account_multistep_elector_key_focus: {
                bind: 'elector-key-focus'
              },
              upgrade_account_multistep_register_year_focus: {
                bind: 'register-year-focus'
              },
              UPGRADE_ACCOUNT_MULTISTEP_LAUNCH_DOCUMENT_CAPTURE: {
                bind: 'launch-document-capture-success',
                analytics: ANALYTICS.APP_STEP_5
              },
              UPGRADE_ACCOUNT_MULTISTEP_LAUNCH_SELFIE_CAPTURE: {
                bind: 'launch-selfie-capture-success',
                analytics: ANALYTICS.APP_STEP_6
              },
              upgrade_account_customer_data_personal_data_click_continue: {
                bind: 'personal-data-click-continue',
                analytics: ANALYTICS.APP_STEP_8
              },
              upgrade_account_multistep_error_validation_biometrics_modal: {
                bind: 'verification-error',
                analytics: ANALYTICS.ERROR_VALIDATION
              },
              upgrade_account_step_personal_disabled: {
                bind: 'step-personal-disabled'
              },
              upgrade_account_step_usage_data_form: {
                bind: 'usage-data-form-changed'
              },
              upgrade_account_reset_process: {
                bind: 'reset-process'
              },
              upgrade_account_verification_max_retries_exit_modal: {
                bind: 'open-confirm-exit-modal',
                analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
              },
              upgrade_account_customer_accept_exit_modal: {
                bind: 'accept-modal-exit-process'
              },
              upgrade_account_multistep_date_picker: {
                bind: 'open-date-picker'
              },
              upgrade_account_multistep_financial_operations_deposits_select: {
                bind: 'deposits-select'
              },
              upgrade_account_multistep_financial_operations_transfers_select: {
                bind: 'transfers-select'
              },
              upgrade_account_multistep_financial_operations_dollar_select: {
                bind: 'dollar-select'
              }

            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-terms-conditions-step-dm-upgrade-account',
        familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
        render: 'litElement',
        properties: {
          pageName: PAGE_NAME,
          cellsConnections: {
            in: {
              upgrade_account_multistep_page: {
                bind: 'sendConditionsOptions'
              },
              upgrade_account_multistep_click_continue_terms: {
                bind: 'continueStepClicked'
              },
              upgrade_account_multistep_conditions_validate: {
                bind: 'validateStepStatus'
              },
              upgrade_account_multistep_conditions_modal: {
                bind: 'openConditionsModal'
              },
              upgrade_account_reset_process: {
                bind: 'resetProcess'
              }
            },
            out: {
              upgrade_account_multistep_checked_data: {
                bind: 'update-terms-step'
              },
              upgrade_account_conditions_checks_options_changed: {
                bind: 'conditions-checks-options-changed'
              },
              upgrade_account_send_conditions_status_response: {
                bind: 'status-response-event'
              },
              upgrade_account_open_conditions_modal: {
                bind: 'open-upgrade-account-conditions-modal',
                analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-financial-operations-step-dm-upgrade-account',
        familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
        render: 'litElement',
        properties: {
          pageName: PAGE_NAME,
          cellsConnections: {
            in: {
              upgrade_account_multistep_get_countries_success_response: {
                bind: 'sendOperationInformation'
              },
              upgrade_account_multistep_page: {
                bind: 'validateStepStatus'
              },
              upgrade_account_multistep_click_continue_financial: {
                bind: 'continueStepClicked'
              },
              upgrade_account_multistep_click_open_modal: {
                bind: 'openOperationsModal'
              },
              upgrade_account_multistep_financial_operation_info: {
                bind: 'collapsedInfo'
              },
              upgrade_account_multistep_finanial_operation_validate: {
                bind: 'validateStepStatus'
              },
              upgrade_account_reset_process: {
                bind: 'resetProcess'
              },
              upgrade_account_multistep_financial_operations_deposits_select: {
                bind: 'depositsSelect'
              },
              upgrade_account_multistep_financial_operations_transfers_select: {
                bind: 'transfersSelect'
              },
              upgrade_account_multistep_financial_operations_dollar_select: {
                bind: 'dollarSelect'
              }
            },
            out: {
              upgrade_account_multistep_checked_data: {
                bind: 'update-financial-step'
              },
              upgrade_account_open_operation_modal: {
                bind: 'open-upgrade-account-operation-modal',
                analytics: ANALYTICS.OPERATIONS_PRINT
              },
              upgrade_account_deposits_amount_changed: {
                bind: 'deposits-amount-form-options-changed'
              },
              upgrade_account_deposits_operations_changed: {
                bind: 'deposits-operations-form-options-changed'
              },
              upgrade_account_transfers_amount_changed: {
                bind: 'transfers-amount-form-options-changed'
              },
              upgrade_account_transfers_operations_changed: {
                bind: 'transfers-operations-form-options-changed'
              },
              upgrade_account_dollar_amount_changed: {
                bind: 'dollar-amount-form-options-changed'
              },
              upgrade_account_dollar_operations_changed: {
                bind: 'dollar-operations-form-options-changed'
              },
              upgrade_account_countries_operations_changed: {
                bind: 'countries-form-options-changed'
              },
              upgrade_account_send_collapsed_info: {
                bind: 'send-collapsed-info'
              },
              upgrade_account_send_status_response: {
                bind: 'status-response-event'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-widget-scanner-verifications-biometrics-consent-modal',
        familyPath: '@glomo-web-components/bbva-widget-scanner-verifications-biometrics',
        render: 'litElement',
        properties: {
          pageName: PAGE_NAME,
          headerText: 'bbva-widget-scanner-verifications-biometrics-consent-modal-header',
          titleText: 'bbva-widget-scanner-verifications-biometrics-consent-modal-title',
          messageText: 'bbva-widget-scanner-verifications-biometrics-consent-modal-message',
          ctaLabel: 'bbva-widget-scanner-verifications-biometrics-consent-modal-cta-label',
          cellsConnections: {
            in: {
              upgrade_account_multistep_verify_document_agreements_open_consent_modal: {
                bind: 'open'
              },
              upgrade_account_widget_scanner_consent_modal_set_agreements: {
                bind: 'agreements'
              },
              upgrade_account_widget_scanner_consent_modal_disable_cta: {
                bind: 'ctaDisabled'
              }
            },
            out: {
              upgrade_account_widget_scanner_consent_modal_agreements_changes: {
                bind: 'agreements-changed'
              },
              upgrade_account_widget_scanner_consent_modal_cta: {
                bind: 'cta-clicked'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-widget-scanner-verifications-biometrics-retry-modal',
        familyPath: '@glomo-web-components/bbva-widget-scanner-verifications-biometrics',
        render: 'litElement',
        properties: {
          pageName: PAGE_NAME,
          headerText: 'bbva-widget-scanner-verifications-biometrics-retry-modal-header',
          titleText: 'bbva-widget-scanner-verifications-biometrics-retry-modal-title',
          subtitleText: 'bbva-widget-scanner-verifications-biometrics-retry-modal-subtitle',
          messageText: 'bbva-widget-scanner-verifications-biometrics-retry-modal-message',
          buttonLabel: 'bbva-widget-scanner-verifications-biometrics-retry-modal-button-label',
          cellsConnections: {
            in: {
              upgrade_account_customer_scanner_verifications_error: {
                bind: 'open'
              }
            },
            out: {
              upgrade_account_customer_scanner_verifications_retry_modal_close: {
                bind: 'help-modal-close'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-verify-identity-step-dm-upgrade-account',
        familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
        render: 'litElement',
        properties: {
          pageName: PAGE_NAME,
          cellsConnections: {
            in: {
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              upgrade_account_multistep_page: {
                bind: 'initStep'
              },
              upgrade_account_multistep_click_continue_verify: {
                bind: 'continueStepClicked'
              },
              upgrade_account_multistep_verify_document_agreements_not_confirmed: {
                bind: 'needConfirmAgreements'
              },
              upgrade_account_widget_scanner_consent_modal_agreements_changes: {
                bind: 'changeAgreements'
              },
              upgrade_account_widget_scanner_consent_modal_cta: {
                bind: 'updateAgreements'
              },
              upgrade_account_multistep_update_terms_agreements_success_response: {
                bind: 'updateAgreementsSuccess'
              },
              upgrade_account_multistep_update_terms_agreements_error_response: {
                bind: 'updateAgreementsError'
              },
              upgrade_account_reset_process: {
                bind: 'resetProcess'
              },
              upgrade_account_verification_max_retries_exit_modal: {
                bind: 'showExitModalWithDate'
              },
              global_get_accounts_documentation_dossiers_data_success: {
                bind: 'dueDate'
              },
              global_account_documents_dossiers_data: {
                bind: 'dueDate'
              },
              dashboard_accounts: {
                bind: 'account'
              },
              upgrade_account_customer_scanner_verifications_retry_modal_close: {
                bind: 'closeRetryModal'
              },
              [PREFIX_NAME_CHANNEL + 'scanner_verifications_completed']: {
                bind: 'verificationsCompleted'
              },
              [PREFIX_NAME_CHANNEL + 'documents_verifications_api_dm_fetch']: {
                bind: 'fetchDocumentsVerifications'
              },
              [PREFIX_NAME_CHANNEL + 'documents_verifications_api_dm_fetch_error']: {
                bind: 'errorDocumentsVerifications'
              }
            },
            out: {
              upgrade_account_multistep_checked_data: {
                bind: 'update-verify-step'
              },
              upgrade_account_widget_scanner_consent_modal_set_agreements: {
                bind: 'set-agreements'
              },
              upgrade_account_multistep_update_terms_agreements: {
                bind: 'update-terms-agreements'
              },
              upgrade_account_multistep_update_confirm_agreements: {
                bind: 'confirm-agreements'
              },
              upgrade_account_widget_scanner_consent_modal_disable_cta: {
                bind: 'disable-cta'
              },
              upgrade_account_multistep_verify_document_agreements_open_consent_modal: {
                bind: 'open-consent-modal',
                analytics: ANALYTICS.APP_STEP_4
              },
              upgrade_account_customer_scanner_verifications_reset_captures: {
                bind: 'reset-captures'
              },
              global_retry_error: {
                bind: 'fullmodal-error',
                analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
              },
              upgrade_account_verification_exit_modal: {
                bind: 'show-error-exit-modal',
                analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
              },
              upgrade_account_veridas_config: {
                bind: 'veridas-config'
              },
              upgrade_account_multistep_verify_document_show_spinner_veil: {
                bind: 'show-message-spinner-veil'
              },
              upgrade_account_multistep_verify_document_hide_spinner_veil: {
                bind: 'hide-message-spinner-veil'
              },
              [PREFIX_NAME_CHANNEL + 'documents_verifications_get']: {
                bind: 'get-documents-verifications'
              },
              [PREFIX_NAME_CHANNEL + 'documents_verifications_document_extracted_data']: {
                bind: 'document-extracted-data'
              },
              [PREFIX_NAME_CHANNEL + 'documents_verifications_fetch_success']: {
                bind: 'fetch-documents-verifications-success'
              },
              upgrade_account_customer_scanner_verifications_error: {
                bind: 'fetch-documents-verifications-error'
              },
              upgrade_account_customer_accept_exit_modal: {
                bind: 'accept-modal-exit-process'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-address-step-dm-upgrade-account',
        familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
        render: 'litElement',
        properties: {
          municipalityParagraph: 'set-modal-municipalityParagraph-property',
          stateParagraph: 'set-modal-stateParagraph-property',
          countryParagraph: 'set-modal-countryParagraph-property',
          dateLimitMonthsArray: moment().subtract(3, 'months').format('YYYY-MM-DD'),
          dateLimitMax: moment().format('YYYY-MM-DD'),
          dateYearNow: moment().format('YYYY'),
          pageName: PAGE_NAME,
          native: CONFIG.native,
          cellsConnections: {
            in: {
              upgrade_account_multistep_page: {
                bind: 'initStep'
              },
              upgrade_account_multistep_click_continue_address: {
                bind: 'continueStepClicked'
              },
              upgrade_account_notify_customer_data: {
                bind: 'onCustomerDataChanged'
              },
              upgrade_account_multistep_set_customer_addresses: {
                bind: 'onCustomerDetailChanged'
              },
              upgrade_account_modal_address_edit_open: {
                bind: 'openModal'
              },
              upgrade_account_multistep_option_media_capture_modal: {
                bind: 'showOptionMediaCapture'
              },
              upgrade_account_option_media_capture_modal_first_option_selected: {
                bind: 'firstOptionSelected'
              },
              upgrade_account_option_media_capture_modal_second_option_selected: {
                bind: 'secondOptionSelected'
              },
              upgrade_account_multistep_toggle_address: {
                bind: 'onToggleMasked'
              },
              upgrade_account_send_zipcode: {
                bind: 'searchPostalCode'
              },
              upgrade_account_geographic_places_success: {
                bind: 'onGeographicPlacesSuccess'
              },
              upgrade_account_geographic_places_error: {
                bind: 'onGeographicPlacesError'
              },
              upgrade_account_address_changed: {
                bind: 'onAddressChanged'
              },
              upgrade_account_proof_date_changed: {
                bind: 'onDateChanged'
              },
              upgrade_account_proof_changed: {
                bind: 'onSelectedProof'
              },
              upgrade_account_validate_fields: {
                bind: 'validateModalFields'
              },
              upgrade_account_put_address_success: {
                bind: 'onPutAddressSuccess'
              },
              upgrade_account_put_address_error: {
                bind: 'onPutAddressError'
              },
              upgrade_account_option_media_capture_right_click: {
                bind: 'onMediaCaptureRightClick'
              },
              upgrade_account_option_media_capture_modal_gallery: {
                bind: 'mediaCapture'
              },
              upgrade_account_option_media_capture_modal_camera: {
                bind: 'mediaCapture'
              },
              upgrade_account_multistep_verification_documents_obverse_img: {
                bind: 'setObverseImage'
              },
              upgrade_account_multistep_verification_documents_reverse_img: {
                bind: 'setReverseImage'
              },
              upgrade_account_upload_document_success: {
                bind: 'onUploadDocumentsSuccess'
              },
              upgrade_account_upload_document_error: {
                bind: 'onUploadDocumentsError'
              },
              upgrade_account_reset_process: {
                bind: 'resetProcess'
              },
              upgrade_account_multistep_date_picker: {
                bind: 'openDatePicker'
              },
              upgrade_account_date_picker_success: {
                bind: 'onDatePickerSuccess'
              },
              upgrade_account_date_picker_error: {
                bind: 'onDatePickerError'
              },
              upgrade_account_date_picker_data: {
                bind: 'datePickerData'
              },
              upgrade_account_multistep_error_customer_addresses: {
                bind: 'onGetCustomerAddressesError'
              },
              global_get_accounts_documentation_dossiers_data_success: {
                bind: 'dueDate'
              },
              global_account_documents_dossiers_data: {
                bind: 'dueDate'
              }
            },
            out: {
              upgrade_account_multistep_checked_data: {
                bind: 'update-address-step'
              },
              upgrade_account_set_addresses_data: {
                bind: 'set-addresses-data'
              },
              upgrade_account_change_addresses: {
                bind: 'change-address'
              },
              upgrade_account_get_customer_addresses: {
                bind: 'get-customer-addresses'
              },
              upgrade_account_get_customer_unmasked_addresses: {
                bind: 'get-customer-unmasked-address'
              },
              upgrade_account_set_customer_documents_type_data: {
                bind: 'set-customer-document-types-data'
              },
              open_upgrade_account_address_modal: {
                bind: 'send-modal-address',
                analytics: ANALYTICS.ADDRESS_EDITION_PRINT
              },
              upgrade_account_option_media_capture_modal: {
                bind: 'open-upgrade-account-option-media-capture-modal',
                analytics: ANALYTICS.EXTERNAL_ADDRESSS_EXTERNAL_LINK_PRINT
              },
              upgrade_account_option_media_capture_modal_gallery: {
                bind: 'launch-gallery-capture-success'
              },
              upgrade_account_option_media_capture_modal_camera: {
                bind: 'launch-camera-capture-success'
              },
              upgrade_account_search_geographic_places: {
                bind: 'search-geographic-places'
              },
              upgrade_account_set_geographic_places: {
                bind: 'set-geographic-places'
              },
              upgrade_account_set_geographic_places_error: {
                bind: 'set-geographic-places-error'
              },
              upgrade_account_validate_fields_result: {
                bind: 'set-modal-validation-status'
              },
              upgrade_account_put_address: {
                bind: 'put-address-data'
              },
              upgrade_account_show_spinner: {
                bind: 'show-spinner'
              },
              upgrade_account_hide_spinner: {
                bind: 'hide-spinner'
              },
              upgrade_account_set_address_id: {
                bind: 'set-address-id'
              },
              upgrade_account_option_media_capture_right_click_modal: {
                bind: 'media-capture-right-click-delete'
              },
              upgrade_account_option_media_capture_right_click_accept: {
                bind: 'media-capture-right-click-delete-accept'
              },
              upgrade_account_input_date_validation: {
                bind: 'input-date-validation'
              },
              upgrade_account_continue_enabled: {
                bind: 'enable-continue-button'
              },
              upgrade_account_upload_document: {
                bind: 'upload-proof-document'
              },
              global_retry_error: {
                bind: 'fullmodal-error',
                analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
              },
              upgrade_account_set_show_title_text: {
                bind: 'set-show-title-text',
                analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
              },
              upgrade_account_date_picker_launch: {
                bind: 'launch-date-picker'
              },
              upgrade_account_date_picker_data: {
                bind: 'date-picker-data'
              },
              upgrade_account_verification_exit_modal: {
                bind: 'show-error-exit-modal'
              },
              upgrade_account_verification_info_modal: {
                bind: 'show-error-info-modal'
              },
              upgrade_account_customer_accept_exit_modal: {
                bind: 'accept-modal-exit-process'
              },
              upgrade_account_reset_address_modal: {
                bind: 'reset-address-modal'
              },
              upgrade_account_close_modal: {
                bind: 'close-open-modal'
              },
              upgade_account_loading_address: {
                bind: 'loading-address'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-usage-step-dm-upgrade-account',
        familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
        render: 'litElement',
        properties: {
          pageName: PAGE_NAME,
          cellsConnections: {
            in: {
              upgrade_account_multistep_click_continue_usage: {
                bind: 'continueStepClicked'
              },
              upgrade_account_multistep_page: {
                bind: 'sendUsageSelectorData'
              },
              upgrade_account_reset_process: {
                bind: 'resetProcess'
              },
              upgrade_account_step_usage_data_form: {
                bind: 'formData'
              },
              upgrade_account_multistep_usage_account: {
                bind: 'usageAccount'
              },
              upgrade_account_signature_validated: {
                bind: 'signatureValue'
              }
            },
            out: {
              upgrade_account_multistep_checked_data: {
                bind: 'update-usage-step'
              },
              upgrade_account_usage_account_changed: {
                bind: 'usage-account-form-options-changed'
              },
              upgrade_account_bank_relationship_changed: {
                bind: 'bank-relationship-form-options-changed'
              },
              upgrade_account_money_origin_changed: {
                bind: 'money-origin-form-options-changed'
              },
              upgrade_account_multistep_usage_summary: {
                bind: 'usage-summary'
              },
              upgrade_account_multistep_step_usage_completed: {
                bind: 'complete-step'
              },
              upgrade_account_post_additional_information: {
                bind: 'upgrade-account-request-additional-information'
              }
            }
          }
        }
      }
    ]
  };

  const personalDataStepDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-personal-data-step-dm-upgrade-account',
    familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
    render: 'litElement',
    properties: {
      pageName: PAGE_NAME,
      native: CONFIG.native,
      servicesMaxRetries: 3,
      cellsConnections: {
        in: {
          upgrade_account_multistep_page: {
            bind: 'initStep'
          },
          upgrade_account_multistep_occupations: {
            bind: 'occupations'
          },
          upgrade_account_multistep_set_customer_data: {
            bind: 'onCustomerDataChanged'
          },
          upgrade_account_multistep_set_customer_detail: {
            bind: 'onCustomerDetailChanged'
          },
          upgrade_account_personal_data_form_changed: {
            bind: 'formData'
          },
          [PREFIX_NAME_CHANNEL + 'documents_verifications_document_extracted_data']: {
            bind: 'ocrData'
          },
          upgrade_account_multistep_ine_validation: {
            bind: 'validateIne'
          },
          upgrade_account_multistep_curp_validation: {
            bind: 'verifyCurp'
          },
          upgrade_account_multistep_get_countries_success_response: {
            bind: 'countries'
          },
          upgrade_account_multistep_civil_registries_success: {
            bind: 'onCivilRegistriesSuccess'
          },
          upgrade_account_multistep_civil_registries_error: {
            bind: 'onCivilRegistriesError',
            previousState: false
          },
          upgrade_account_validate_ocupation: {
            bind: 'validateOccupation'
          },
          upgrade_account_request_post_validate_credentials_data_result: {
            bind: 'onValidateCredentialsDataSuccess'
          },
          upgrade_account_request_post_validate_credentials_data_error: {
            bind: 'onValidateCredentialsDataError'
          },
          upgrade_account_multistep_get_marital_statuses_success_response: {
            bind: 'onMaritalStatusSuccess'
          },
          upgrade_account_multistep_get_marital_statuses_error_response: {
            bind: 'onMaritalStatusError'
          },
          upgrade_account_multistep_ine_focus: {
            bind: 'manageValidateCredentialsInvalidFields'
          },
          upgrade_account_multistep_elector_key_focus: {
            bind: 'manageValidateCredentialsInvalidFields'
          },
          upgrade_account_multistep_register_year_focus: {
            bind: 'manageValidateCredentialsInvalidFields'
          },
          upgrade_account_multistep_patch_customer_data: {
            bind: 'onPatchCustomerSuccess'
          },
          upgrade_account_multistep_error_patch_customer: {
            bind: 'onPatchCustomerError'
          },
          upgrade_account_multistep_patch_customer_economic_data: {
            bind: 'onPatchEconomicDataSuccess'
          },
          upgrade_account_multistep_error_patch_economic_data: {
            bind: 'onPatchEconomicDataError'
          },
          upgrade_account_multistep_customer_detail_error_response: {
            bind: 'onErrorCustomerDetailRequestResponse'
          },
          upgrade_account_customer_data_personal_data_click_continue: {
            bind: 'clickContinue'
          },
          upgrade_account_step_personal_disabled: {
            bind: 'disabledStepPersonal'
          },
          upgrade_account_reset_process: {
            bind: 'resetProcess'
          },
          global_get_accounts_documentation_dossiers_data_success: {
            bind: 'dueDate'
          },
          global_account_documents_dossiers_data: {
            bind: 'dueDate'
          },
          upgrade_account_multistep_error_get_customer_data: {
            bind: 'onErrorCustomerDataRequestResponse'
          },
          upgrade_account_multistep_verification_documents_selfie_img: {
            bind: 'setSelfieImage'
          }
        },
        out: {
          upgrade_account_get_customer_data: {
            bind: 'get-customer-data'
          },
          upgrade_account_get_customer_detail: {
            bind: 'get-customer-detail'
          },
          upgrade_account_multistep_set_personal_data: {
            bind: 'set-personal-data'
          },
          upgrade_account_personal_data_continue_enabled: {
            bind: 'enable-continue-button'
          },
          upgrade_account_customer_data_personal_data_complete_step: {
            bind: 'complete-step'
          },
          upgrade_account_multistep_checked_data: {
            bind: 'update-personal-step'
          },
          upgrade_account_multistep_show_ine: {
            bind: 'show-ine-input'
          },
          upgrade_account_multistep_show_curp: {
            bind: 'show-curp-input'
          },
          upgrade_account_request_post_validate_credentials: {
            bind: 'validate-ine'
          },
          upgrade_account_post_civil_registries: {
            bind: 'post-civil-registries-search'
          },
          upgrade_account_multistep_success_form: {
            bind: 'success-form'
          },
          upgrade_account_show_spinner: {
            bind: 'show-spinner'
          },
          upgrade_account_hide_spinner: {
            bind: 'hide-spinner'
          },
          upgrade_account_request_post_validate_credentials_data: {
            bind: 'post-validate-credentials-data'
          },
          upgrade_account_send_occupation_list: {
            bind: 'send-occupations-list'
          },
          upgrade_account_show_activity: {
            bind: 'show-activity'
          },
          [PAGE_NAME + 'SEND_CIVIL_STATUS_LIST']: {
            bind: 'send-civil-status-list'
          },
          upgrade_account_activities_form: {
            bind: 'send-activities-form'
          },
          upgrade_account_request_post_civil_registries_error: {
            bind: 'post-civil-registries-error',
            analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
          },
          upgrade_account_get_marital_statuses: {
            bind: 'get-maritalStatus'
          },
          upgrade_account_notify_customer_data: {
            bind: 'notify-customer-data'
          },

          // Invalid fields
          upgrade_account_invalid_rfc: {
            bind: 'invalid-rfc'
          },
          upgrade_account_invalid_ine: {
            bind: 'invalid-ine'
          },
          upgrade_account_invalid_elector_key: {
            bind: 'invalid-elector-key'
          },
          upgrade_account_invalid_register_year: {
            bind: 'invalid-register-year'
          },
          upgrade_account_invalid_curp: {
            bind: 'invalid-curp'
          },
          upgrade_account_patch_customer_data: {
            bind: 'request-customer-patch'
          },
          upgrade_account_patch_economic_data: {
            bind: 'request-patch-economic-data'
          },

          // Navigation
          go_back_to_dashboard: {
            bind: 'navigation-to-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          global_retry_error: {
            bind: 'fullmodal-error',
            analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
          },
          upgrade_account_verification_exit_modal: {
            bind: 'show-error-exit-modal',
            analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
          },
          upgrade_account_customer_accept_exit_modal: {
            bind: 'accept-modal-exit-process'
          },
          upgrade_account_customer_ocr_curp: {
            bind: 'ocr-curp'
          },
          upgrade_account_customer_occupation_id: {
            bind: 'send-occupation-id'
          },
          upgrade_account_customer_calculate_rfc: {
            bind: 'update-rfc'
          },
          upgrade_account_signature_validated: {
            bind: 'bbva-manager-upgrade-account-signature-validated'
          }
        }
      }
    }
  };


  const pageDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-customer-data-dm-upgrade-account',
    familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
    render: 'litElement',
    properties: {
      pageName: PAGE_NAME,
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          upgrade_account_multistep_page: {
            bind: 'initStep'
          },
          upgrade_account_multistep_checked_data: {
            bind: 'checkStepCompleted'
          },
          upgrade_account_multistep_set_customer_data: {
            bind: 'customer'
          },
          upgrade_account_multistep_set_customer_detail: {
            bind: 'customerDetail'
          },
          upgrade_account_multistep_civil_registries_success: {
            bind: 'civilRegistries'
          },
          navigation_upgrade_account_to_dashboard: {
            bind: 'manageBackNavigation'
          },
          upgrade_account_multistep_click_continue: {
            bind: 'requestAccountUpgrade'
          },
          upgrade_account_request_put_questionnaire_success_response: {
            bind: 'onSuccessQuestionnaireRequestResponse'
          },
          upgrade_account_request_put_questionnaire_error_response: {
            bind: 'onErrorQuestionnaireRequestResponse'
          },
          upgrade_account_request_post_terms_success_response: {
            bind: 'onSuccessTermsRequestResponse'
          },
          upgrade_account_request_post_terms_error_response: {
            bind: 'onErrorTermsRequestResponse'
          },
          upgrade_account_customer_accept_exit_modal: {
            bind: 'exitProcess'
          },
          upgrade_account_patch_modify_customer_success: {
            bind: 'onPatchModifyCustomerSuccess'
          },
          upgrade_account_patch_modify_customer_error: {
            bind: 'onPatchModifyCustomerError'
          },
          global_client_id: {
            bind: 'customerId'
          },
          global_storage_get_loginData_success: {
            bind: 'setCustomerId'
          },
          global_storage_get_loginData_error: {
            bind: 'setCustomerId'
          },
          upgrade_account_fatca_archiving_success: {
            bind: 'onPostFatcaArchivingSuccess'
          },
          upgrade_account_fatca_archiving_error: {
            bind: 'onPostFatcaArchivingError'
          },
          upgrade_account_kyc_archiving_success: {
            bind: 'onPostKycArchivindSuccess'
          },
          upgrade_account_kyc_archiving_error: {
            bind: 'onPostKycArchivingError'
          },
          dashboard_accounts: {
            bind: 'account'
          },
          upgrade_account_customer_occupation_id: {
            bind: 'occupationId'
          },
          upgrade_acccount_session_storage_token: {
            bind: 'saveSessionStorageToken'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'global-get-from-storage'
          },
          upgrade_account_multistep_verify_completed: {
            bind: 'update-verify-step-complete'
          },
          upgrade_account_multistep_address_completed: {
            bind: 'update-address-step-complete'
          },
          upgrade_account_multistep_personal_completed: {
            bind: 'update-personal-step-complete'
          },
          upgrade_account_multistep_credits_completed: {
            bind: 'update-credits-step-complete'
          },
          upgrade_account_multistep_terms_completed: {
            bind: 'update-terms-step-complete'
          },
          upgrade_account_multistep_financial_completed: {
            bind: 'update-financial-step-complete'
          },
          upgrade_account_multistep_usage_completed: {
            bind: 'update-usage-step-complete'
          },
          global_upgrade_account_show_close_confirm: {
            bind: 'open-exit-modal'
          },
          upgrade_account_exit_process: {
            bind: 'reset'
          },
          upgrade_account_finish_retry_exit_process: {
            bind: 'finish-retry-exit-upgrade-account',
            backStep: true
          },
          upgrade_account_open_review: {
            bind: 'open-upgrade-review-page',
            link: {
              page: 'upgradeAccountReviewPage'
            }
          },
          upgrade_account_request_put_questionnaire: {
            bind: 'request-put-questionnaire'
          },
          upgrade_account_request_post_terms: {
            bind: 'request-post-terms',
            analytics: ANALYTICS.APP_STEP_13
          },
          upgrade_account_hide_spinner: {
            bind: 'hide-spinner'
          },
          upgrade_account_patch_modify_customer: {
            bind: 'request-patch-modify-customer'
          },
          global_retry_error: {
            bind: 'fullmodal-error',
            analytics: ANALYTICS.ERROR_OPERATION_NOT_PERFORMED
          },
          upgrade_account_verification_exit_modal: {
            bind: 'show-error-exit-modal'
          },
          upgrade_account_accept_exit_modal: {
            bind: 'accept-modal-exit-process'
          },
          upgrade_account_customer_accept_exit_modal: {
            bind: 'accept-modal-exit-process'
          },
          upgrade_account_fatca_archiving: {
            bind: 'request-post-fatca-archiving'
          },
          upgrade_account_kyc_archiving: {
            bind: 'request-post-kyc-archiving'
          },
          upgrade_account_show_spinner: {
            bind: 'show-spinner'
          }
        }
      }
    }
  };

  const apiCatalogs = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-catalogs',
    properties: {
      host: CONFIG.globalServices.host,
      catalogsApiVersion: '0',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      headers: { 'Accept-Language': 'es' },
      countriesId: '06320074E',
      catalogId: '00350074E',
      maritalStatusId: 'MARITAL_STATUS',
      catalogPaginationKeys: [0, 50],
      cellsConnections: {
        in: {
          upgrade_account_multistep_page: {
            bind: 'getCountries'
          },
          upgrade_account_get_marital_statuses: {
            bind: 'getMaritalStatuses'
          }
        },
        out: {
          upgrade_account_multistep_get_countries_success_response: {
            bind: 'set-countries'
          },
          upgrade_account_multistep_get_countries_error_response: {
            bind: 'error-on-get-countries'
          },
          upgrade_account_multistep_get_marital_statuses_success_response: {
            bind: 'set-marital-statuses'
          },
          upgrade_account_multistep_get_marital_statuses_error_response: {
            bind: 'error-on-get-marital-statuses'
          }
        }
      }
    }
  };

  const customerDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: '1',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          upgrade_account_get_customer_data: {
            bind: 'getCustomer'
          },
          upgrade_account_post_civil_registries: {
            bind: 'postCivilRegistriesSearch'
          }
        },
        out: {
          upgrade_account_multistep_set_customer_data: {
            bind: 'set-customer'
          },
          upgrade_account_multistep_civil_registries_success: {
            bind: 'post-civil-registries-search-success'
          },
          upgrade_account_multistep_civil_registries_error: {
            bind: 'post-civil-registries-search-error'
          },
          upgrade_account_multistep_error_get_customer_data: {
            bind: 'error-on-get-customers'
          }
        },
        params: {
          customerId: 'customerId'
        }
      }
    }
  };

  const apiCustomersV0 = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: '0',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          upgrade_account_get_customer_detail: {
            bind: 'getCustomerDetail'
          },
          upgrade_account_get_customer_addresses: {
            bind: 'getCustomerAddresses',
            previousState: false
          },
          upgrade_account_get_customer_unmasked_addresses: {
            bind: 'getCustomerAddresses',
            previousState: false
          }
        },
        out: {
          upgrade_account_multistep_set_customer_addresses: {
            bind: 'set-customer-addresses'
          },
          upgrade_account_multistep_error_customer_addresses: {
            bind: 'error-on-get-customer-addresses'
          },
          upgrade_account_multistep_set_customer_detail: {
            bind: 'set-customer-detail'
          },
          upgrade_account_multistep_error_customer_detail: {
            bind: 'error-on-get-customer-detail'
          }
        },
        params: {
          customerId: 'customerId'
        }
      }
    }
  };

  const customerDocumentsApiDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-global-documents-verifications-api-dm',
    familyPath: '@glomo-web-components/bbva-global-customer-documents-api-dm-mx',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      version: CONFIG.globalServices.versions.documentsVerifications,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cachetype: 'NONE',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [PREFIX_NAME_CHANNEL + 'documents_verifications_get']: {
            bind: 'getDocumentsVerifications'
          }
        },
        out: {
          [PREFIX_NAME_CHANNEL + 'documents_verifications_api_dm_fetch']: {
            bind: 'documents-verifications-api-dm-fetch'
          },
          [PREFIX_NAME_CHANNEL + 'documents_verifications_api_dm_fetch_error']: {
            bind: 'documents-verifications-api-dm-fetch-error'
          },
          [PREFIX_NAME_CHANNEL + 'documents_verifications_api_dm_fetch_error']: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const modal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-modal-input-address-upgrade-account',
    familyPath: '@glomo-web-components/bbva-modal-upgrade-account',
    render: 'litElement',
    properties: {
      modalTitle: 'upgrade-account-multistep-address-data-modal-titleText-property',
      buttonText: 'upgrade-account-multistep-address-data-modal-buttonText-property',
      municipalityParagraph: 'upgrade-account-multistep-address-data-modal-municipalityParagraph-property',
      stateParagraph: 'upgrade-account-multistep-address-data-modal-stateParagraph-property',
      countryParagraph: 'upgrade-account-multistep-address-data-modal-countryParagraph-property',
      cellsConnections: {
        in: {
          open_upgrade_account_address_modal: {
            bind: 'open'
          },
          upgrade_account_set_geographic_places: {
            bind: 'setGeographicPlaces'
          },
          upgrade_account_validate_fields_result: {
            bind: 'onFieldsValidation'
          },
          upgrade_account_set_geographic_places_error: {
            bind: 'onGeographicPlacesError'
          },
          upgrade_account_reset_address_modal: {
            bind: 'reset'
          },
          upgrade_account_close_modal: {
            bind: 'close'
          }
        },
        out: {
          upgrade_account_show_spinner: {
            bind: 'show-spinner'
          },
          upgrade_account_hide_spinner: {
            bind: 'hide-spinner'
          },
          upgrade_account_send_zipcode: {
            bind: 'send-postal-code-to-manager'
          },
          upgrade_account_address_changed: {
            bind: 'send-address-change-to-manager'
          },
          upgrade_account_validate_fields: {
            bind: 'validate-modal-fields'
          }
        }
      }
    }
  };

  const geographicPlaces = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-geographicplaces',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          upgrade_account_search_geographic_places: {
            bind: 'getListPlaces'
          }
        },
        out: {
          upgrade_account_geographic_places_success: {
            bind: 'set-list-places'
          },
          upgrade_account_geographic_places_error: {
            bind: 'error-on-get-list-places'                    }
        }
      }
    }
  };

  const apiCustomersMx = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: '1',
      apiAggregatorApiVersion: '1',
      native: CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          upgrade_account_set_address_id: {
            bind: 'addressId'
          },
          upgrade_account_request_put_questionnaire: {
            bind: 'putQuestionnaire'
          },
          upgrade_account_put_address: {
            bind: 'putAddress'
          },
          upgrade_account_multistep_update_terms_agreements: {
            bind: 'postCustomerTerms'
          },
          upgrade_account_request_post_validate_credentials_data: {
            bind: 'postNationalElectoralInstituteValidateCredentialsData'
          },
          upgrade_account_patch_customer_data: {
            bind: 'patchCustomer'
          },
          upgrade_account_patch_economic_data: {
            bind: 'patchEconomicData'
          },
          upgrade_account_upload_document: {
            bind: 'postCustomerIdentificationProcessDocuments'
          },
          upgrade_account_fatca_archiving: {
            bind: 'postCustomerIdentificationProcessDocuments'
          },
          upgrade_account_kyc_archiving: {
            bind: 'postCustomerIdentificationProcessDocuments'
          },
          upgrade_account_post_additional_information: {
            bind: 'postAdditionalInformation'
          }
        },
        out: {
          upgrade_account_request_put_questionnaire_success_response: {
            bind: 'put-questionnaire-kyc-success'
          },
          upgrade_account_request_put_questionnaire_error_response: {
            bind: 'put-questionnaire-kyc-error',
            analytics: ANALYTICS.ERROR_PAGE
          },
          upgrade_account_put_address_success: {
            bind: 'put-contact-detail-address'
          },
          upgrade_account_put_address_error: {
            bind: 'error-on-put-contact-detail-address'
          },
          upgrade_account_multistep_update_terms_agreements_success_response: {
            bind: 'post-customer-terms-BD-MX-AA-USODPS-002'
          },
          upgrade_account_multistep_update_terms_agreements_error_response: {
            bind: 'error-on-post-customer-terms-BD-MX-AA-USODPS-002'
          },
          upgrade_account_request_post_validate_credentials_data_result: {
            bind: 'post-national-electoral-institute-validate-credentials-data-success'
          },
          upgrade_account_request_post_validate_credentials_data_error: {
            bind: 'post-national-electoral-institute-validate-credentials-data-error'
          },
          upgrade_account_multistep_patch_customer_data: {
            bind: 'patch-customer-success'
          },
          upgrade_account_multistep_error_patch_customer: {
            bind: 'error-on-patch-customer'
          },
          upgrade_account_multistep_patch_customer_economic_data: {
            bind: 'patch-customer-economic-data'
          },
          upgrade_account_multistep_error_patch_economic_data: {
            bind: 'error-on-patch-economic-data'
          },
          upgrade_account_upload_document_success: {
            bind: 'post-customer-identification-process-documents-sucess'
          },
          upgrade_account_upload_document_error: {
            bind: 'post-customer-identification-process-documents-error'
          },
          upgrade_account_fatca_archiving_success: {
            bind: 'post-customer-identification-process-documents-fatca-sucess'
          },
          upgrade_account_fatca_archiving_error: {
            bind: 'post-customer-identification-process-documents-fatca-error'
          },
          upgrade_account_kyc_archiving_success: {
            bind: 'post-customer-identification-process-documents-kyc-sucess'
          },
          upgrade_account_kyc_archiving_error: {
            bind: 'post-customer-identification-process-documents-kyc-error'
          },
          upgrade_account_set_additional_information_success: {
            bind: 'post-additional-information-success'
          },
          upgrade_account_set_additional_information_error: {
            bind: 'post-additional-information-error'
          }
        },
        params: {
          customerId: 'customerId',
          addressId: 'addressId'
        }
      }
    }
  };

  const apiCustomersUpgradeAgreements = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: '1',
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          upgrade_account_post_customer_agreements_tsec: {
            bind: 'headers'
          },
          upgrade_account_request_post_terms: {
            bind: 'postCustomerTerms'
          }
        },
        out: {
          upgrade_account_request_post_terms_success_response: {
            bind: 'post-customer-terms'
          },
          upgrade_account_request_post_terms_error_response: {
            bind: 'error-on-post-customer-terms'
          }
        },
        params: {
          customerId: 'customerId'
        }
      }
    }
  };

  const modalOptionsMediaCapture = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-options-media-capture-upgrade-account',
    familyPath: '@glomo-web-components/bbva-modal-upgrade-account',
    render: 'litElement',
    properties: {
      headerText: 'upgrade-account-modal-options-media-capture-header-text',
      paragraph: 'upgrade-account-modal-options-media-capture-paragraph',
      firstOptionLabel: 'upgrade-account-modal-options-media-capture-first-option-label',
      secondOptionLabel: 'upgrade-account-modal-options-media-capture-second-option-label',
      cellsConnections: {
        in: {
          upgrade_account_option_media_capture_modal: {
            bind: 'open'
          },
          upgrade_account_option_media_capture_modal_close: {
            bind: 'close'
          }
        },
        out: {
          upgrade_account_option_media_capture_modal_first_option_selected: {
            bind: 'options-media-capture-first-selected'
          },
          upgrade_account_option_media_capture_modal_second_option_selected: {
            bind: 'options-media-capture-second-selected'
          }
        }
      }
    }
  };

  const customModalUpgradeAccount = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-custom-modal-info-upgrade-account',
    familyPath: '@glomo-web-components/bbva-modal-upgrade-account',
    render: 'litElement',
    properties: {
      modalHeader: 'upgrade-account-ine-help-title',
      buttonText: 'upgrade-account-ine-help-button',
      cellsConnections: {
        in: {
          upgrade_account_ine_help_config: {
            bind: 'config'
          },
          upgrade_account_ine_help_open: {
            bind: 'open'
          }
        },
        out: {
        }
      }
    }
  };

  const modifyCustomerFatca = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: '1',
      apiAggregatorApiVersion: '1',
      native: CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          upgrade_account_patch_modify_customer: {
            bind: 'patchCustomer'
          }
        },
        out: {
          upgrade_account_patch_modify_customer_success: {
            bind: 'patch-customer-success'
          },
          upgrade_account_patch_modify_customer_error: {
            bind: 'error-on-patch-customer'
          }
        },
        params: {
          customerId: 'customerId'
        }
      }
    }
  };

  const analyticsManagerUpgradeAccount = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-upgrade-account-customer',
    familyPath: '@glomo-web-components/bbva-manager-upgrade-account',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          upgrade_account_multistep_verify_document_agreements_open_consent_modal: {
            bind: 'analyticStep'
          },
          UPGRADE_ACCOUNT_MULTISTEP_LAUNCH_DOCUMENT_CAPTURE: {
            bind: 'analyticStep'
          },
          UPGRADE_ACCOUNT_MULTISTEP_LAUNCH_SELFIE_CAPTURE: {
            bind: 'analyticStep'
          },
          upgrade_account_multistep_click_continue_verify: {
            bind: 'analyticStep'
          },
          upgrade_account_customer_data_personal_data_click_continue: {
            bind: 'analyticStep'
          },
          upgrade_account_multistep_click_continue_address: {
            bind: 'analyticStep'
          },
          upgrade_account_multistep_click_continue_financial: {
            bind: 'analyticStep'
          },
          upgrade_account_multistep_click_continue_usage: {
            bind: 'analyticStep'
          },
          upgrade_account_multistep_click_continue_terms: {
            bind: 'analyticStep'
          },
          upgrade_account_request_post_terms: {
            bind: 'analyticOtp'
          },
          upgrade_account_modal_address_edit_open: {
            bind: 'analyticEditAddress'
          },
          upgrade_account_option_media_capture_modal: {
            bind: 'analyticVoucherCapture'
          },
          upgrade_account_multistep_click_open_modal: {
            bind: 'analyticOperationsModal'
          },
          upgrade_account_multistep_error_validation_biometrics_modal: {
            bind: 'analyticVerificationError'
          },
          upgrade_account_multistep_error_process_max_retries_exceeded_modal: {
            bind: 'analyticMaxRetriesExceeded'
          }
        },
        out: {
          upgrade_account_app_step_4: {
            bind: 'upgrade-account-analytic-step-4',
            analytics: ANALYTICS.APP_STEP_4
          },
          upgrade_account_app_step_5: {
            bind: 'upgrade-account-analytic-step-5',
            analytics: ANALYTICS.APP_STEP_5
          },
          upgrade_account_app_step_6: {
            bind: 'upgrade-account-analytic-step-6',
            analytics: ANALYTICS.APP_STEP_6
          },
          upgrade_account_app_step_7: {
            bind: 'upgrade-account-analytic-step-',
            analytics: ANALYTICS.APP_STEP_7
          },
          upgrade_account_app_step_8: {
            bind: 'upgrade-account-analytic-step-8',
            analytics: ANALYTICS.APP_STEP_8
          },
          upgrade_account_app_step_9: {
            bind: 'upgrade-account-analytic-step-9',
            analytics: ANALYTICS.APP_STEP_9
          },
          upgrade_account_app_step_10: {
            bind: 'upgrade-account-step-10',
            analytics: ANALYTICS.APP_STEP_10
          },
          upgrade_account_app_step_11: {
            bind: 'upgrade-account-analytic-step-11',
            analytics: ANALYTICS.APP_STEP_11
          },
          upgrade_account_app_step_12: {
            bind: 'upgrade-account-analytic-step-12',
            analytics: ANALYTICS.APP_STEP_12
          },
          upgrade_account_app_step_13: {
            bind: 'analytics-otp-modal',
            analytics: ANALYTICS.APP_STEP_13
          }
        }
      }
    }
  };

  base.components.push(modal);
  base.components.push(geographicPlaces);
  base.components.push(header);
  base.components.push(personalDataStepDm);
  base.components.push(pageDm);
  base.components.push(customerDm);
  base.components.push(customerDocumentsApiDm);
  base.components.push(apiCustomersMx);
  base.components.push(apiCustomersV0);
  base.components.push(apiCustomersUpgradeAgreements);
  base.components.push(apiCatalogs);
  base.components.push(modalOptionsMediaCapture);
  base.components.push(customModalUpgradeAccount);
  base.components.push(analyticsManagerUpgradeAccount);
  base.components.push(modifyCustomerFatca);
  if (!isNativeIos) {
    base.components.push({
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-nativeconnector-datepicker',
      familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
      render: 'litElement',
      properties: {
        cellsConnections: {
          in: {
            upgrade_account_date_picker_launch: {
              bind: 'launchDatePicker'
            }
          },
          out: {
            upgrade_account_date_picker_success: {
              bind: 'launch-date-picker-success'
            },
            upgrade_account_date_picker_error: {
              bind: 'launch-date-picker-error'
            }
          }
        }
      }
    });
  }

  addRetryErrors(base)([
    {
      id: 'error-confirmed-agreements',
      acceptRetry: { bind: 'retryUpdateAgreements', component: 'bbva-verify-identity-step-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-validate-credentials-data',
      acceptRetry: { bind: 'retryValidateCredentialsData', component: 'bbva-personal-data-step-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-verify-curp',
      acceptRetry: { bind: 'retryVerifyCurp', component: 'bbva-personal-data-step-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-modify-customer',
      acceptRetry: { bind: 'retryModifyCustomerRequest', component: 'bbva-personal-data-step-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-economic-data',
      acceptRetry: { bind: 'retryEconomicData', component: 'bbva-personal-data-step-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-put-addresses',
      acceptRetry: { bind: 'retryPutAddresses', component: 'bbva-address-step-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-upload-documents',
      acceptRetry: { bind: 'retryUploadDocuments', component: 'bbva-address-step-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-post-terms',
      acceptRetry: { bind: 'requestAccountUpgrade', component: 'bbva-customer-data-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-put-kyc',
      acceptRetry: { bind: 'requestPutQuestionary', component: 'bbva-customer-data-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-modify-customer-fatca',
      acceptRetry: { bind: 'retryModifyCustomerRequest', component: 'bbva-customer-data-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'get-customer-address',
      acceptRetry: { bind: 'onToggleMasked', component: 'bbva-address-step-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'onAcceptContinueModal', component: 'bbva-address-step-dm-upgrade-account' }
    },
    {
      id: 'error-post-fatca-archiving',
      acceptRetry: { bind: 'retryFatcaArchivingRequest', component: 'bbva-customer-data-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    },
    {
      id: 'error-post-kyc-archiving',
      acceptRetry: { bind: 'retryKycArchivingRequest', component: 'bbva-customer-data-dm-upgrade-account' },
      cancelRetry: { bind: 'cancelRetry', component: 'bbva-customer-data-dm-upgrade-account' },
      acceptCallForHelp: { bind: 'exitProcess', component: 'bbva-customer-data-dm-upgrade-account' }
    }
  ]);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-customers-mx-bgadpmock', PAGE_NAME, [
    'post-customer-terms', 'error-on-post-customer-terms',
    'put-contact-detail-address',
    'error-on-put-contact-detail-address',
    'post-customer-identification-process-documents-sucess',
    'post-customer-identification-process-documents-error',
    'patch-customer-success',
    'error-on-patch-customer',
    'patch-customer-economic-data',
    'error-on-patch-economic-data'
  ]);
  signConnector('cells-dm-global-apis-customers', PAGE_NAME, ['set-customer-addresses', 'error-on-get-customer-addresses']);
  signConnector('cells-dm-global-apis-customers-bgadpmock', PAGE_NAME, ['patch-customer-success', 'error-on-patch-customer']);
  signConnector('cells-dm-global-apis-customers-bgadpmock', PAGE_NAME, ['post-customer-terms', 'error-on-post-customer-terms']);
  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return base;
};
