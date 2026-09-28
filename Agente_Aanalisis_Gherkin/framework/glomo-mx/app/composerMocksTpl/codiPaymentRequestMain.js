'use strict';
module.exports = (CONFIG) => {
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'codiPaymentRequestMain';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analyticsPage = require('./analytics/_codiPaymentRequest')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    createPrefixFromPageName,
    createSpinner,
    getLanguage,
    getLocalCurrency,
    useNames
  } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const eventCustom = {
    ['init-custom-event-payment-request']: true,
    'swipe-menu-enabled': false
  };
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = CONFIG;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      headerHeight: 45,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('cells_scroll_zone')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('can_execute_changed')]: {
            bind: 'showConfirm'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'close'
          },
          [getChannelName('reset_scroll')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('operation_in_process')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('modal_visibility_changed')]: {
            bind: 'setModalActive'
          },
          increment_valid_steps: {
            bind: 'showConfirm'
          }
        },
        out: {
          [getChannelName('scroll_complete')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: eventCustom,
      private: true,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [operativePrefix + '_get_enrollment_data_payment_request']: {
            bind: 'init-page'
          },
          [getChannelName('INIT_PAGE_ACCOUNTS')]: {
            bind: 'init-page'
          },
          [getChannelName('INIT_PAGE_RESET_MULTISTEP')]: {
            bind: 'init-page'
          },
          [getChannelName('INIT_PAGE_GET_REFERENCE')]: {
            bind: 'init-page'
          },
          [getChannelName('init_page')]: {
            bind: 'init-custom-event-payment-request'
          },
          [getChannelName('leave_page_reset')]: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          codiPaymentRequestMain_get_enrollment: {
            bind: 'init-page'
          }
        }
      }
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      cellsConnections: {
        out: {
          [getChannelName('payment_request_success')]: {
            bind: 'navigation-to-payment-request-success-page',
            link: {
              page: 'codiPaymentRequestSuccess'
            }
          }
        }
      }
    }
  };
  const managerAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_codi_request_money: {
            bind: 'setCodiRequestMoney',
            'forward-to-native': true
          },
          [getChannelName('analytic_select_origin_account_request')]: {
            bind: 'setSelectedAccountRequest'
          },
          [getChannelName('analytic_confirm_origin_account_request')]: {
            bind: 'analyticMobileRequestLoadContact'
          },
          [getChannelName('analytic_phone_step_finish')]: {
            bind: 'analyticStepPhoneRequest'
          },
          [getChannelName('analytic_amount_request_send')]: {
            bind: 'setAmountRequest'
          },
          [getChannelName('analytic_reference_concept_step_finish')]: {
            bind: 'analyticStepConcept'
          },
          [getChannelName('analytic_succesful_request')]: {
            bind: 'setIdOperationRequest'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          }
        },
        out: {
          [getChannelName('analytic_native_to_request')]: {
            bind: 'analytic-native-to-request'
          },
          [getChannelName('analytic_click_account_request')]: {
            bind: 'analytic-click-account-request',
            analytics: analyticsPage.appStarted
          },
          [getChannelName('analytic_step_contact')]: {
            bind: 'analytic-step-contact',
            analytics: analyticsPage._stepConfiguration('contact')
          },
          [getChannelName('analytic_step_phone_request')]: {
            bind: 'analytic-step-phone-request',
            analytics: analyticsPage._stepConfiguration('amount')
          },
          [getChannelName('analytic_click_amount-request')]: {
            bind: 'analytic-click-amount-request',
            analytics: analyticsPage._stepConfiguration('concept')
          },
          [getChannelName('analytic_step_concept_request')]: {
            bind: 'analytic-step-concept-request',
            analytics: analyticsPage._stepConfiguration('confirmation')
          },
          [getChannelName('analytic_id_operation_request')]: {
            bind: 'analytic-id-operation-request',
            analytics: analyticsPage.appCompleted
          }
        }
      }
    }
  };
  const managerCodi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-mobile-request',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'daiCodiDai'
          },
          clear_selected_contact_input: {
            bind: 'clearPhoneContact'
          },
          dashboard_accounts: {
            bind: 'accounts'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          [getChannelName('post_banxico_authorization_request_success_qr')]: {
            bind: 'authorizationRequestSuccess'
          },
          [getChannelName('get_account_success')]: {
            bind: 'getAccountClabe'
          },
          [getChannelName('get_account_error')]: {
            bind: 'getAccountClabe'
          },
          [getChannelName('INIT_PAGE_GET_REFERENCE')]: {
            bind: 'getReference'
          },
          [getChannelName('response_all_contacts_success')]: {
            bind: 'parseMobileContacts'
          },
          [getChannelName('SHOW_MODAL_ACCOUNTS')]: {
            bind: 'showModalAccounts'
          },
          [getChannelName('SELECT_AN_ACCOUNT')]: {
            bind: 'userSelectAccount'
          },
          [getChannelName('SELECT_ACCOUNT')]: {
            bind: 'parseAnAccountSelect'
          },
          [getChannelName('search_contact')]: {
            bind: 'generateSelectionList'
          },
          [getChannelName('selected_contact_modal')]: {
            bind: 'selectedContactFromModal'
          },
          [getChannelName('response_get_contacts_error')]: {
            bind: 'handlerPermissionDeniedContactsPlugin'
          },
          [getChannelName('phone_step_finished')]: {
            bind: 'handlePhoneStepFinished'
          },
          [getChannelName('amount_step_finished')]: {
            bind: 'handleAmountStepFinished'
          },
          [getChannelName('reference_concept_step_finished')]: {
            bind: 'handleReferenceConceptStepFinished'
          },
          [getChannelName('payment_request_finished')]: {
            bind: 'makeRequest'
          },
          [getChannelName('SHOW_MODAL_CLOSE_REQUEST')]: {
            bind: 'showModalOutFlow'
          },
          [getChannelName('SHOW_MODAL_SAME_PHONE')]: {
            bind: 'showModalWarningSamePhone'
          },
          [getChannelName('SHOW_MODAL_WARNING_CHANGE_ACCOUNT')]: {
            bind: 'showModalWarningChangeAccounts'
          },
          [getChannelName('account_step_finished')]: {
            bind: 'handleAccountStepFinished'
          },
          [getChannelName('COMPLETE_DATA_REQUEST_QR')]: {
            bind: 'showModalInfoDataQR'
          },
          codi_mobile_payment_request_messages_success: {
            bind: 'handlePaymentMessagesSuccess'
          },
          codi_mobile_payment_request_messages_error: {
            bind: 'handlePaymentMessagesError'
          },
          [getChannelName('SET_ENCRYPT_AES')]: {
            bind: 'setCipherAESRequest'
          },
          [getChannelName('SET_SHA_IN_HEX')]: {
            bind: 'setShaInHex'
          },
          [getChannelName('SET_ENCRYPT_HMAC_SHA_TO_BASE')]: {
            bind: 'setHmacSHARequest'
          },
          ['connection_status_' + pageName + '_offline']: {
            bind: 'notConnectionPaymentRequest'
          },
          connection_status_codiPaymentRequestMain_online: {
            bind: 'connectionPaymentRequest'
          },
          [getChannelName('open_contact_book')]: {
            bind: 'openContactModal'
          },
          codi_refactor_accept_no_operation_modal_accept: {
            bind: 'makeRequest'
          },
          [getChannelName('external_key_generated')]: {
            bind: 'externalKeyGeneratedSuccess'
          },
          codi_error_retry__qr_mobile_accept: {
            bind: 'retryVerification'
          },
          codi_error_exit_account_pending: {
            bind: 'exitModalPending'
          },
          codi_error_exit_account_pending_cancel: {
            bind: 'exitModalPending'
          },
          codi_error_retry_mobile_request_accept: {
            bind: 'retryVerification'
          },
          codi_error_retry__mobile_request_cancel: {
            bind: 'manageBackButton'
          },
          [getChannelName('post_banxico_default_app_enrollment_success')]: {
            bind: 'modalPendingAccounts'
          },
          [getChannelName('post_banxico_default_app_enrollment_error')]: {
            bind: 'modalPendingAccounts'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getChannelName('generate_external_key')]: {
            bind: 'create-external-key'
          },
          [getChannelName('request_validate_account_banxico_qr')]: {
            bind: 'post-authorization-banxico-qr'
          },
          [getChannelName('request_post_login_banxico')]: {
            bind: 'request-login-banxico-verify'
          },
          [operativePrefix + '_codi_navigate_to_modal_first_request']: {
            bind: 'navigate-to-modal-first-request',
            link: {
              page: 'codiPaymentRequestInitial'
            }
          },
          [operativePrefix + '_CODI_PAYMENT_REQUEST_SET_ITEMS_CARRUSEL']: {
            bind: 'set-items-carrusel'
          },
          [getChannelName('disable_amount_button')]: {
            bind: 'disable-amount-button'
          },
          [getChannelName('set_account_id')]: {
            bind: 'set-account-id'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'request-get-account'
          },
          [getChannelName('SET_REFERENCE_MULTISTEP')]: {
            bind: 'set-reference-to-multistep'
          },
          [getChannelName('open_contact_modal')]: {
            bind: 'open-contact-modal'
          },
          [getChannelName('request_get_all_contacts')]: {
            bind: 'get-all-contacts'
          },
          [getChannelName('set_group_list_items')]: {
            bind: 'set-parsed-contact-group'
          },
          [getChannelName('VIEW_ALL_ACCOUNTS')]: {
            bind: 'open-modal-accounts-codi'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'set-account-select-multistep'
          },
          [getChannelName('set_large_list_items')]: {
            bind: 'set-selection-list'
          },
          [getChannelName('request_payment_messages_banxico')]: {
            bind: 'request-codi-payment-messages'
          },
          [getChannelName('large_contact_list_changed')]: {
            bind: 'large-contact-list-changed'
          },
          [getChannelName('close_contact_modal')]: {
            bind: 'close-contact-modal'
          },
          [getChannelName('set_contact_from_agenda')]: {
            bind: 'set-contact-from-agenda'
          },
          [getChannelName('request_success')]: {
            bind: 'request-successful'
          },
          global_alert_modal_close: {
            bind: 'close-modal-warning-change-account'
          },
          [getChannelName('WARNING_CHANGE_ACCOUNTS')]: {
            bind: 'warning-change-account'
          },
          codi_payment_successful_review: {
            bind: 'request-successful-codi',
            link: {
              page: 'codiPaymentRequestSuccess'
            }
          },
          global_payment_request_result: {
            bind: 'request-successful-result'
          },
          [getChannelName('RESPONSE')]: {
            bind: 'response'
          },
          global_payment_reference_result: {
            bind: 'reference-successful-result'
          },
          global_payment_title_result: {
            bind: 'title-successful-result'
          },
          [operativePrefix + '_codi_payment_successful_receive']: {
            bind: 'codi-payment-successful-receive'
          },
          [getChannelName('ENCRYPT_SHA_HEX')]: {
            bind: 'encrypt-sha-in-hex'
          },
          [getChannelName('BACK_STEP')]: {
            bind: 'back-step-out-flow'
          },
          [getChannelName('OPEN_BUTTON_FIXED')]: {
            bind: 'open-button-fixed-end-flow'
          },
          [getChannelName('SET_AMOUNT_IN_PANEL')]: {
            bind: 'set-amount-in-panel-button-fixed'
          },
          [getChannelName('SET_LABEL_IN_PANEL')]: {
            bind: 'set-label-in-panel-button-fixed'
          },
          [getChannelName('SET_INFO_IN_PANEL')]: {
            bind: 'set-info-in-panel-button-fixed'
          },
          [getChannelName('PAYMENT_REQUEST_CIPHER_AES')]: {
            bind: 'encrypt-cipher-aes'
          },
          [getChannelName('PAYMENT_REQUEST_ENCRYPT_HMACSHA_TO_BASE')]: {
            bind: 'encrypt-hmac-sha-base'
          },
          [getChannelName('OPEN_MODAL_NOT_CONECTION')]: {
            bind: 'request-no-connection'
          },
          [getChannelName('analytic_succesful_request')]: {
            bind: 'analytic-succesful-request'
          },
          [getChannelName('OPEN_MODAL_INVITE_CONTACT')]: {
            bind: 'request-invite-contact',
            analytics: analyticsPage.huellaPageView
          },
          [getChannelName('OPEN_MODAL_NOT_AVAILABLE_CODI')]: {
            bind: 'request-codi-not-available',
            analytics: analyticsPage.notAvailableCodiPageView
          },
          [operativePrefix + '_codi_not_connection']: {
            bind: 'not-conection-modal-request'
          },
          [operativePrefix + '_codi_refactor_no_operation_retry']: {
            bind: 'retry-again'
          },
          [getChannelName('atm_share_social_sharing')]: {
            bind: 'atm-share-social-sharing',
            analytics: analyticsPage.internalLink
          },
          [getChannelName('disable_button_payment_request')]: {
            bind: 'disable-button-payment-request'
          },
          [getChannelName('navigate_to_onboarding')]: {
            bind: 'redirect-to-onboarding-codi',
            link: {
              page: 'codiBeginRegister'
            }
          },
          codiPaymentRequestMain_send_response_login_to_log: {
            bind: 'send-response-login-to-log'
          },
          codiPaymentRequestMain_send_response_payment_messages_to_log: {
            bind: 'send-response-payment-messages-to-log'
          },
          [getChannelName('payment_request_reset_multistep')]: {
            bind: 'payment-request-reset-multistep'
          },
          codi_payments_error_retry_exit: {
            bind: 'exit-error-retry',
            backStep: true
          },
          codi_payment_request_main_page_view_analytic: {
            bind: 'page-view-analytic',
            analytics: analyticsPage.appPageVisit
          },
          codi_payment_request_main_analytics_by_disconnection: {
            bind: 'analytics-by-disconnection',
            analytics: analyticsPage.error
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-modal'
          },
          codi_payment_request_main_open_settings_native: {
            bind: 'openSetting'
          }
        }
      }
    }
  };
  const accountsApi = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      cellsConnections: {
        in: {
          [getChannelName('set_account_id')]: {
            bind: 'accountId'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'getAccount'
          }
        },
        out: {
          [getChannelName('get_account_success')]: {
            bind: 'get-on-get-account'
          },
          [getChannelName('get_account_error')]: {
            bind: 'error-on-get-account'
          }
        }
      }
    }
  };
  const banxicoAPI = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-banxico',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      apiVersion: CONFIG.globalServices.versions.banxicoApi,
      cellsConnections: {
        in: {
          [getChannelName('request_post_login_banxico')]: {
            bind: 'postLogin'
          },
          [getChannelName('request_payment_messages_banxico')]: {
            bind: 'postPaymentMessages'
          },
          [getChannelName('request_validate_account_banxico_qr')]: {
            bind: 'postAuthorizationRequest'
          }
        },
        out: {
          codi_mobile_payment_request_messages_success: {
            bind: 'success-on-post-banxico-payment-messages'
          },
          codi_mobile_payment_request_messages_error: {
            bind: 'error-on-post-banxico-payment-messages'
          },
          [getChannelName('post_banxico_authorization_request_success_qr')]: {
            bind: 'success-on-post-banxico-authorization-request'
          },
          [getChannelName('post_banxico_authorization_request_error_qr')]: {
            bind: 'error-on-post-banxico-authorization-request'
          }
        }
      }
    }
  };
  const multiStepCodi = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-codi-p2p-mobile-transfer-request',
    familyPath: '@glomo-web-components/bbva-multistep-codi-p2p-mobile-transfer-request',
    render: 'litElement',
    properties: {
      isNativeIos: isNativeIos,
      maxSteps: 4,
      isPayment: false,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setAmountLimitRequest'
          },
          [getChannelName('INIT_PAGE_RESET_MULTISTEP')]: {
            bind: 'resetMultistep'
          },
          [getChannelName('WARNING_CHANGE_ACCOUNTS')]: {
            bind: 'resetMultistep'
          },
          [getChannelName('payment_request_reset_multistep')]: {
            bind: 'resetMultistep'
          },
          [getChannelName('RESPONSE')]: {
            bind: 'dataContracts'
          },
          [getChannelName('SET_REFERENCE_MULTISTEP')]: {
            bind: 'setReference'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'bindAccountSummary'
          },
          [getChannelName('set_contact_from_agenda')]: {
            bind: 'handleContactSelectedFromAgenda'
          },
          [getChannelName('disable_amount_button')]: {
            bind: 'disabledButtonAmount'
          },
          global_login_success: {
            bind: 'userData'
          },
          codi_mobile_payment_request_messages_error: {
            bind: 'hideSpinnerAndShowButton'
          },
          codi_mobile_payment_request_messages_success: {
            bind: 'hideSpinnerAndShowButton'
          }
        },
        out: {
          [getChannelName('open_contact_book')]: {
            bind: 'contact-icon-clicked'
          },
          clear_selected_contact_input: {
            bind: 'clearPhoneContact'
          },
          [getChannelName('phone_step_finished')]: {
            bind: 'phone-step-finished'
          },
          [getChannelName('amount_step_finished')]: {
            bind: 'amount-step-finished'
          },
          [getChannelName('reference_concept_step_finished')]: {
            bind: 'reference-concept-step-finished'
          },
          [getChannelName('SELECT_AN_ACCOUNT')]: {
            bind: 'multistep-select-an-account'
          },
          [getChannelName('SHOW_MODAL_SAME_PHONE')]: {
            bind: 'show_modal_same_phone'
          },
          [getChannelName('SHOW_MODAL_WARNING_CHANGE_ACCOUNT')]: {
            bind: 'codi-request-payments-p2m-create-full-modal-warning'
          },
          [getChannelName('SHOW_MODAL_ACCOUNTS')]: {
            bind: 'codi-request-payments-p2m-full-modal-accounts'
          },
          [getChannelName('account_step_finished')]: {
            bind: 'account-step-finished'
          },
          [getChannelName('CLOSE_BUTTON_FIXED')]: {
            bind: 'close-button-fixed-end-flow'
          },
          [getChannelName('analytic_select_origin_account_request')]: {
            bind: 'analytic-select-origin-account-request'
          },
          [getChannelName('analytic_confirm_origin_account_request')]: {
            bind: 'analytic-confirm-origin-account-request'
          },
          [getChannelName('analytic_phone_step_finish')]: {
            bind: 'analytic-phone-step-finish'
          },
          [getChannelName('analytic_reference_concept_step_finish')]: {
            bind: 'analytic-reference-concept-step-finish'
          },
          [getChannelName('analytic_amount_request_send')]: {
            bind: 'analytic-amount-request-send'
          },
          [getChannelName('payment_request_finished')]: {
            bind: 'payment-request-finished'
          },
          [getChannelName('SHOW_MODAL_CLOSE_REQUEST')]: {
            bind: 'close-header-main',
            backStep: true
          }
        }
      }
    }
  };
  const modalContactSelector = {
    zone: 'app__transactional',
    tag: 'cells-modal-contact-selector',
    type: 'UI',
    properties: {
      className: isNativeIos ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
      iOSFixedHeader: isNativeIos,
      emptyImage: 'images/empty_state_day.svg',
      titleHeaderPage: 'peer-to-peer-send-modal-contact-selector-title',
      infoMessage: '',
      inputLabel: 'peer-to-peer-send-modal-contact-selector-input-text',
      emptyTitle: 'peer-to-peer-send-modal-contact-empty-title',
      emptyMessage: 'peer-to-peer-send-modal-contact-empty-text',
      cellsConnections: {
        in: {
          [getChannelName('open_contact_modal')]: {
            bind: 'open'
          },
          [getChannelName('close_contact_modal')]: {
            bind: 'close'
          },
          [getChannelName('set_large_list_items')]: {
            bind: 'largeListItems'
          },
          [getChannelName('set_group_list_items')]: {
            bind: 'groupListItems'
          },
          [getChannelName('large_contact_list_changed')]: {
            bind: 'largeContactList'
          }
        },
        out: {
          [getChannelName('selected_contact_modal')]: {
            bind: 'set-selected-contact'
          },
          [getChannelName('search_contact')]: {
            bind: 'search-text-changed'
          },
          [getChannelName('modal_visibility_changed')]: {
            bind: 'opened-changed'
          }
        }
      }
    }
  };
  const productSelectorAccountsModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    properties: {
      id: 'modal-product-selector-accounts-modal',
      className: isNativeIos ? 'ios-top-padding__header' : '',
      modalTitle: 'codi-refactor-payment-information-page-modal-title',
      closeButtonLabel: 'codi-payment-qr-modal-accounts-close',
      cellsConnections: {
        in: {
          [getChannelName('VIEW_ALL_ACCOUNTS')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('SELECT_ACCOUNT')]: {
            bind: 'select-product'
          }
        }
      }
    }
  };
  const cryptoDm = {
    type: 'DM',
    tag: 'glomo-codicel-crypto-dm',
    zone: 'app__main',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('ENCRYPT_SHA_HEX')]: {
            bind: 'generateSha512InHex'
          },
          [getChannelName('PAYMENT_REQUEST_CIPHER_AES')]: {
            bind: 'encryptAES'
          },
          [getChannelName('PAYMENT_REQUEST_ENCRYPT_HMACSHA_TO_BASE')]: {
            bind: 'generateHmacSha256InBase64'
          }
        },
        out: {
          [getChannelName('SET_SHA_IN_HEX')]: {
            bind: 'sha-512-in-hex-generated'
          },
          [getChannelName('SET_ENCRYPT_AES')]: {
            bind: 'data-encrypted-aes-success'
          },
          [getChannelName('SET_ENCRYPT_HMAC_SHA_TO_BASE')]: {
            bind: 'hmac-sha-256-in-base64-generated'
          }
        }
      }
    }
  };
  const nativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('open_settings_native')]: {
            bind: 'openSetting'
          }
        }
      }
    }
  };
  const contactsPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-contacts',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('request_get_all_contacts')]: {
            bind: 'getAllContacts'
          }
        },
        out: {
          [getChannelName('response_all_contacts_success')]: {
            bind: 'all-contacts-served'
          },
          [getChannelName('response_get_contacts_error')]: {
            bind: 'error'
          }
        }
      }
    }
  };

  const codicelCrypto = {
    type: 'DM',
    tag: 'glomo-codicel-crypto-dm',
    zone: 'app__main',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('generate_external_key')]: {
            bind: 'createExternalKeyAccounts'
          }
        },
        out: {
          [getChannelName('external_key_generated')]: {
            bind: 'external-key-generated'
          }
        }
      }
    }
  };

  const shareSocialMediaPlugin = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-socialsharing',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('atm_share_social_sharing')]: {
            bind: 'share'
          }
        }
      }
    }
  };

  const managerCodiLog = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-unified-log',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          native_user_id: {
            bind: 'numberPhone'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          codiPaymentRequestMain_get_enrollment: {
            bind: 'getEnrollmentData'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_lost_internet_log_success: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_lost_internet_log_error: {
            bind: 'saveGetConnectionLog'
          },
          global_storage_get_unified_log_timeout_session_key_success: {
            bind: 'setTimeoutSessionVerified'
          },
          global_storage_get_unified_log_timeout_session_key_error: {
            bind: 'setTimeoutSessionVerified'
          },
          codi_session_timeout_expired: {
            bind: 'saveInLocalstorageTimeout'
          },
          connection_status_codiPaymentRequestMain_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiPaymentRequestMain_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiPaymentRequestMain_send_response_login_to_log: {
            bind: 'webServiceConsumeLog'
          },
          codiPaymentRequestMain_send_response_payment_messages_to_log: {
            bind: 'webServiceConsumeLog'
          },
          codiPaymentRequestMain_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiPaymentRequestMain_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiPaymentRequestMain_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiPaymentRequestMain_unified_log_event_post: {
            bind: 'unified-log-event-post'
          }
        }
      }
    }
  };

  const dataProviderBanxico = {
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: banxicoApi,
      cellsConnections: {
        in: {
          codiPaymentRequestMain_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiPaymentRequestMain_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiPaymentRequestMain_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiPaymentRequestMain_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-payment-request-main',
    currentPage: {
      url: '/codi-payment-request-main'
    },
    pages,
    template,
    components: [
      lifeCycle,
      navigationHandler,
      accountsApi,
      managerCodi,
      multiStepCodi,
      cryptoDm,
      codicelCrypto,
      modalContactSelector,
      productSelectorAccountsModal,
      createSpinner(CONFIG),
      banxicoAPI,
      managerAnalytics,
      cellsConnectionStatus(pageName),
      managerCodiLog,
      dataProviderBanxico
    ]
  };
  localStorageApp.addOutStorageChannels(base.components, [
    'codi_payments_information',
    'see_first_request_modal_completed',
    'device_info_codi_key',
    'enrollment_codi_key',
    'codi_pending_accounts',
    'codi_banxico_request_acc',
    'banxico_push_status',
    'registration_completed_codi',
    'login_banxico_codi',
    'lost_internet_log',
    'unified_log_timeout_session_key'
  ], CONFIG);
  addRetryErrors(base)([
    {
      id: 'QR-CREATE-NOT-AVAILABLE',
      acceptRetry: { bind: 'getEnrollmentData', component: 'bbva-manager-codi-mobile-request' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-mobile-request' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'bbva-manager-codi-mobile-request' }
    }
  ]);

  if (CONFIG.native) {
    base.components.push(
      contactsPlugin,
      nativeSettings,
      shareSocialMediaPlugin,
      cellsConnectionStatus(pageName)
    );
  }
  return base;
};
