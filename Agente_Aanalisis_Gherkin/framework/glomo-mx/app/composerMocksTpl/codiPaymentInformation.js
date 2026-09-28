'use strict';

module.exports = (CONFIG) => {
  const localStorageApp = require('./common/_local-storage');
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'codiPaymentInformation';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const {
    useNames,
    createPrefixFromPageName,
    createSpinner,
    getLocalCurrency,
    getLanguage
  } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const analyticsPage = require('./analytics/_codiPaymentSend')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const { cellsConnectionStatus } = require('./common/_cross-components');
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
      className: `dark-blue-bg ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      drawerWidth: '100%',
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      headerHeight: 45,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          PAYMENT_INFORMATION_INIT_PAGE: {
            bind: 'recalculateHeader'
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
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_codiPaymentInformation: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          [getChannelName('_init_page')]: {
            bind: 'init-page'
          },
          codiPaymentInformation_get_enrollment: {
            bind: 'init-page'
          },
          codiPaymentInformation_get_push_log: {
            bind: 'init-page'
          },
          initialize_app_lifecycle_observer: {
            bind: 'init-page',
            'forward-to-native': true
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
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
        in: {
          [getChannelName('exit_operative')]: {
            bind: 'goBack'
          }
        }
      }
    }
  };
  const multistep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-codi-p2p-mobile-transfer-request',
    familyPath: '@glomo-web-components/bbva-multistep-codi-p2p-mobile-transfer-request',
    render: 'litElement',
    properties: {
      isPayment: true,
      maxSteps: 1,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      isNativeIos: isNativeIos,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setAmountLimitRequest'
          },
          [getChannelName('WARNING_CHANGE_ACCOUNTS')]: {
            bind: 'resetMultistep'
          },
          codi_send_payment_successful_receive: {
            bind: 'restoreDataToDefault'
          },
          codi_payment_information_set_data_contracts: {
            bind: 'dataContracts'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'bindAccountSummary'
          },
          global_login_success: {
            bind: 'userData'
          },
          [getChannelName('notification_information_summary')]: {
            bind: 'setInformationPayment'
          }
        },
        out: {
          [getChannelName('SELECT_AN_ACCOUNT')]: {
            bind: 'multistep-select-an-account'
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
          [getChannelName('payment_amount_step_finished')]: {
            bind: 'amount-step-finished'
          },
          [getChannelName('analytic_select_origin_account')]: {
            bind: 'analytic-select-origin-account'
          },
          [getChannelName('analytic_confirm_origin_account')]: {
            bind: 'analytic-confirm-origin-account'
          },
          [getChannelName('operation_number_analytic')]: {
            bind: 'analytic-operation-number'
          },
          [getChannelName('payment_send_finished')]: {
            bind: 'payment-send-finished'
          },
          [getChannelName('SHOW_MODAL_CLOSE_PAYMENT')]: {
            bind: 'close-header-main'
          }
        }
      }
    }
  };
  const managerAnalytic = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytic-manager-codi',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('analytic_select_origin_account')]: {
            bind: 'setSelectedAccount'
          },
          codi_payment_information_analytic_amount_payment_send: {
            bind: 'amountPaymentSend'
          },
          codi_payment_information_analytic_set_amount_request_pay: {
            bind: 'amountRequest'
          },
          [getChannelName('analytic_confirm_origin_account')]: {
            bind: 'analyticStepConfirmAccountPayment'
          },
          [getChannelName('analytic_otp_payment_send')]: {
            bind: 'analyticStepOtpPayment'
          },
          [getChannelName('operation_number_analytic')]: {
            bind: 'setIdOperationNumberAnalytic'
          },
          analytic_codi_payment_successful: {
            bind: 'codiPaymentAnalyticComplete'
          },
          codi_payment_information_response_transfer_interbank_error: {
            bind: 'setResponseTransferInterbankError'
          },
          codiPaymentInformation_init_page: {
            bind: 'analyticPaymentSendLoadAccounts'
          },
          codi_payment_information_set_data_contracts: {
            bind: 'analyticFootprintAccounts'
          },
          codi_payment_information_analytics_huella_server_error: {
            bind: 'analyticsFootprintServerError'
          },
          codi_payment_information_analytics_huella_operation_unrealized: {
            bind: 'analyticsFootprintOperationUnrealized'
          }
        },
        out: {
          [getChannelName('analytic_click_account')]: {
            bind: 'analytic-click-account',
            analytics: analyticsPage.firstInteraction
          },
          [getChannelName('analytic_step_confirm_account_payment')]: {
            bind: 'analytic-step-confirm-account-payment',
            analytics: analyticsPage.stepConfiguration('confirm payment')
          },
          [getChannelName('analytic_step_otp_payment')]: {
            bind: 'analytic-step-otp-payment',
            analytics: analyticsPage.stepConfiguration('otp')
          },
          [getChannelName('analytic_id_operation_number')]: {
            bind: 'analytic-id-operation-number'
          },
          codi_payment_information_analytic_complete: {
            bind: 'codi-payment-analytic-complete',
            analytics: analyticsPage.stepFinish
          },
          codi_payment_information_analytic_step_load_accounts: {
            bind: 'analytic-payment-send-load-accounts',
            analytics: analyticsPage.stepConfiguration('load accounts')
          },
          codi_payment_information_analytic_payment_send_footprint_accounts: {
            bind: 'analytic-payment-send-footprint-accounts',
            analytics: analyticsPage.footprintAccounts
          },
          codi_payment_information_analytic_payment_send_footprint_server_error: {
            bind: 'analytic-payment-send-footprint-server-error',
            analytics: analyticsPage.footprintServiceError
          },
          codi_payment_information_analytic_payment_send_footprint_operation_unrealized: {
            bind: 'analytic-payment-send-footprint-operation-unrealized',
            analytics: analyticsPage.fottprintUnavailableOperation
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-mobile-payment',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      isBbva: true,
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'setCustomerData'
          },
          dashboard_accounts: {
            bind: 'setFirstAccountId'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          [getChannelName('get_enrollment')]: {
            bind: 'getEnrollmentData'
          },
          global_storage_get_codi_email_user_success: {
            bind: 'setEmailUser'
          },
          global_storage_get_codi_email_user_error: {
            bind: 'setEmailUser'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setDataCodiEnrollment'
          },
          global_storage_get_login_banxico_request_body_codi_success: {
            bind: 'verifyLoginBanxicoSuccess'
          },
          global_storage_get_login_banxico_request_body_codi_error: {
            bind: 'requestAccountsMixinErrorNoEnrollment'
          },
          [getChannelName('post_login_banxico_success')]: {
            bind: 'verifyAccountValidate'
          },
          [getChannelName('post_login_banxico_error')]: {
            bind: 'verifyPostLoginBanxicoError'
          },
          [getChannelName('account_step_finished')]: {
            bind: 'handleAccountStepFinishedMixin'
          },
          [getChannelName('get_account_success')]: {
            bind: 'getAccountClabe'
          },
          [getChannelName('get_account_error')]: {
            bind: 'getAccountClabe'
          },
          set_local_storage: {
            bind: 'getChargedMovement'
          },
          [getChannelName('SHOW_MODAL_ACCOUNTS')]: {
            bind: 'showModalAccounts'
          },
          [getChannelName('SELECT_AN_ACCOUNT')]: {
            bind: 'setAccountToPay'
          },
          [getChannelName('SELECT_ACCOUNT')]: {
            bind: 'parseAnAccountSelect'
          },
          [getChannelName('payment_amount_step_finished')]: {
            bind: 'handleAmountStepFinished'
          },
          [getChannelName('payment_send_finished')]: {
            bind: 'verifySpeiAvailabilityPayment'
          },
          [getChannelName('SHOW_MODAL_WARNING_CHANGE_ACCOUNT')]: {
            bind: 'showModalWarningChangeAccounts'
          },
          [getChannelName('get_banxico_spei_availability_success')]: {
            bind: 'verifySpeiAvailabilityPaymentSuccess'
          },
          global_mtu_navigation_confirm_limit: {
            bind: 'verifySpeiAvailabilityPayment'
          },
          [getChannelName('get_banxico_spei_availability_error')]: {
            bind: 'verifySpeiAvailabilityError'
          },
          [getChannelName('response_transfer_internal_success')]: {
            bind: 'setResponseTransferSuccess'
          },
          [getChannelName('response_transfer_interbank_success')]: {
            bind: 'setResponseTransferSuccess'
          },
          [getChannelName('response_service_payments_success')]: {
            bind: 'setResponseTransferSuccess'
          },
          [getChannelName('response_transfer_internal_error')]: {
            bind: 'setResponseTransferError'
          },
          codi_payment_information_response_transfer_interbank_error: {
            bind: 'setResponseTransferError'
          },
          [getChannelName('response_service_payments_error')]: {
            bind: 'setResponseTransferError'
          },
          [getChannelName('SHOW_MODAL_CLOSE_PAYMENT')]: {
            bind: 'showModalProcessAbandon'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'readNotificationData'
          },
          codi_transaction_history_send_payment: {
            bind: 'setDataMovement'
          },
          codiPaymentInformation_post_notification_success: {
            bind: 'notificationRejectResponse'
          },
          codiPaymentInformation_post_notification_error: {
            bind: 'notificationRejectResponse'
          },
          banxico_aric_fraud_error: {
            bind: 'validationAricFraudError'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          global_codi_to_call: {
            bind: 'callBBVALineFraud'
          }
        },
        out: {
          payment_information_andare_su_dashboard: {
            bind: 'navigate-back-to-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          [getChannelName('codi_mobile_payment_get_spei_availability')]: {
            bind: 'verify-spei-availability'
          },
          codi_payment_information_set_data_contracts: {
            bind: 'response'
          },
          [getChannelName('set_account_id')]: {
            bind: 'set-account-id'
          },
          [getChannelName('get_clabe_account')]: {
            bind: 'request-get-account'
          },
          [getChannelName('VIEW_ALL_ACCOUNTS')]: {
            bind: 'open-modal-accounts-codi'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'set-account-select-multistep'
          },
          [getChannelName('REDIRECT_QR_SCANNER')]: {
            bind: 'back-step-out-flow',
            link: {
              page: 'codiQrScanner',
              skipHistory: true
            }
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-modal'
          },
          global_alert_modal_close: {
            bind: 'close-modal-warning-change-account'
          },
          [getChannelName('WARNING_CHANGE_ACCOUNTS')]: {
            bind: 'warning-change-account'
          },
          [getChannelName('codi_mobile_payment_post_login_banxico')]: {
            bind: 'request-login-banxico-verify'
          },
          [getChannelName('codi_mobile_payment_authentication_key')]: {
            bind: 'payment-codi-authentication-key'
          },
          set_banxico_external_link: {
            bind: 'send-banxico-external-link'
          },
          analytic_codi_payment_successful: {
            bind: 'payment-successful-codi-analytic'
          },
          codi_payment_successful_review: {
            bind: 'payment-successful-codi',
            link: {
              page: 'codiPaymentInformationSuccess'
            }
          },
          codi_send_payment_successful_receive: {
            bind: 'payment-successful-codi-mobile-payment'
          },
          [getChannelName('request_internal_transfer')]: {
            bind: 'internal-transfer'
          },
          [getChannelName('request_interbank_transfer')]: {
            bind: 'interbank-transfer'
          },
          [getChannelName('request_service_payments')]: {
            bind: 'send-service-payment-payload'
          },
          codi_payment_information_analytics_huella_server_error: {
            bind: 'analytics-footprint-server-error'
          },
          codi_payment_information_analytics_huella_operation_unrealized: {
            bind: 'analytics-footprint-operation-unrealized'
          },
          [getChannelName('analytic_otp_payment_send')]: {
            bind: 'analytic-otp-payment-send'
          },
          [getChannelName('notification_information_summary')]: {
            bind: 'set-notification-information-summary'
          },
          [getChannelName('navigate_to_onboarding')]: {
            bind: 'redirect-to-onboarding-codi',
            link: {
              page: 'codiBeginRegister'
            }
          },
          codi_payment_information_analytic_set_amount_request_pay: {
            bind: 'set-amount-request-pay'
          },
          codi_payment_information_analytic_amount_payment_send: {
            bind: 'analytic-amount-payment-send'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          codiPaymentInformation_send_payment_status_to_unified_log: {
            bind: 'send-payment-status-to-unified-log'
          },
          codiPaymentInformation_codi_payment_rejected_notification: {
            bind: 'post-notification-rejected'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          global_codi_modal_reject: {
            bind: 'aric-fraud-error-codi'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
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
      native,
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
      native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('codi_mobile_payment_post_login_banxico')]: {
            bind: 'postLogin'
          },
          [getChannelName('codi_mobile_payment_get_spei_availability')]: {
            bind: 'getSpeiAvailability'
          },
          [getChannelName('request_internal_transfer')]: {
            bind: 'postInternalTransfers'
          },
          [getChannelName('request_interbank_transfer')]: {
            bind: 'postInterbankTransfers'
          }
        },
        out: {
          [getChannelName('post_login_banxico_success')]: {
            bind: 'success-on-post-banxico-login'
          },
          [getChannelName('post_login_banxico_error')]: {
            bind: 'error-on-post-banxico-login'
          },
          [getChannelName('get_banxico_spei_availability_success')]: {
            bind: 'success-on-get-banxico-spei-availability'
          },
          [getChannelName('get_banxico_spei_availability_error')]: {
            bind: 'error-on-get-banxico-spei-availability'
          },
          [getChannelName('response_transfer_internal_success')]: {
            bind: 'success-on-post-banxico-internal-transfer'
          },
          [getChannelName('response_transfer_internal_error')]: {
            bind: 'error-on-post-banxico-internal-transfer'
          },
          [getChannelName('response_transfer_interbank_success')]: {
            bind: 'success-on-post-banxico-interbank-transfer'
          },
          codi_payment_information_response_transfer_interbank_error: {
            bind: 'error-on-post-banxico-interbank-transfer'
          },
          banxico_aric_fraud_error: {
            bind: 'high-risk-of-fraud'
          }
        }
      }
    }
  };
  const dataProviderPayments = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-dataprovider-payments',
    familyPath: '@glomo-web-components/bbva-dataprovider-payments',
    render: 'litElement',
    properties: {
      otpId: pageName,
      requiredOTP: true,
      native: !!CONFIG.native,
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      version: CONFIG.globalServices.versions.paymentsV0,
      cellsConnections: {
        in: {
          [getChannelName('request_service_payments')]: {
            bind: 'servicePaymentsPostV0'
          }
        },
        out: {
          [getChannelName('response_service_payments_success')]: {
            bind: 'post-service-payments-v0-success'
          },
          [getChannelName('response_service_payments_error')]: {
            bind: 'post-service-payments-v0-error'
          }
        }
      }
    }
  };
  const productSelector = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    properties: {
      id: 'modal-product-selector-accounts-modal',
      className: isNativeIos ? 'ios-top-padding__header' : '',
      modalTitle: 'codi-refactor-payment-information-page-modal-title',
      closeButtonLabel: 'codi-refactor-payment-information-page-close-button',
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
          codiPaymentInformation_get_enrollment: {
            bind: 'getEnrollmentData'
          },
          codiPaymentInformation_get_push_log: {
            bind: 'getFromLocalStoragePushLog'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'setEnrollmentData'
          },
          global_storage_get_enrollment_codi_key_error: {
            bind: 'setEnrollmentData'
          },
          global_app_change_to_background_state: {
            bind: 'backgroundEnterLog'
          },
          global_app_change_to_foreground_state: {
            bind: 'foregrounEnterLog'
          },
          global_storage_get_banxico_push_unified_log_event_success: {
            bind: 'pushReceptionLog'
          },
          global_storage_get_banxico_push_unified_log_event_error: {
            bind: 'pushReceptionLog'
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
          connection_status_codiPaymentInformation_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiPaymentInformation_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiPaymentInformation_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiPaymentInformation_post_unified_log_event_error: {
            bind: 'responseUnifiedLogError'
          },
          codiPaymentInformation_SHOW_MODAL_CLOSE_PAYMENT: {
            bind: 'codiSectionLeaveLog'
          },
          codiPaymentInformation_send_payment_status_to_unified_log: {
            bind: 'setPaymentStatus'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          codiPaymentInformation_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiPaymentInformation_unified_log_event_post: {
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
          codiPaymentInformation_codi_payment_rejected_notification: {
            bind: 'notificationPost'
          },
          codiPaymentInformation_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiPaymentInformation_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiPaymentInformation_post_notification_success: {
            bind: 'post-notification-success'
          },
          codiPaymentInformation_post_notification_error: {
            bind: 'post-notification-error'
          },
          codiPaymentInformation_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiPaymentInformation_post_unified_log_event_error: {
            bind: 'post-unified-log-event-error'
          }
        }
      }
    }
  };

  const helpModalAricFraudCodi = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-help-modal',
    container: true,
    attributes: {
      'justify-content': 'left'
    },
    properties: {
      id: 'aricFraudModalCodi',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal-three-level',
      headerText: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-error-title',
      className: 'on-boarding-welcome-alert-manager',
      headerLeftIconAriaLabel: 'padlock',
      cellsConnections: {
        in: {
          global_codi_modal_reject: {
            bind: 'open'
          }
        },
        out: {
          global_operations_modal_aric_send_exit_to_header: {
            bind: 'help-modal-header-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const helpModalCodiContentIlustration = {
    zone: 'aricFraudModalCodi.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-clip-microillustration',
    tag: 'bbva-clip-microillustration',
    render: 'litElement',
    properties: {
      className: 'no-padding u-display--table u-margin--left u-margin-top--0 u-margin--1 u-text--left',
      microillustration: 'error',
      size: 'L'
    }
  };

  const helpModalCodiSubHeader = {
    zone: 'aricFraudModalCodi.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    render: 'litElement',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    properties: {
      text: 'alert-TRANSFER-ERROR-message',
      fontWeight: '500',
      size: 'XL',
      alignment: 'left',
      className: 'u-margin--1 u-margin-top--0'
    }
  };

  const helpModalCodiText = {
    zone: 'aricFraudModalCodi.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-top--0',
      text: 'alert-TRANSFER-ERROR-message-aric-fraud',
      alignment: 'left'
    }
  };

  const helpModalCodiButton = {
    zone: 'aricFraudModalCodi.slot-footer',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--2 u-margin-bottom--2',
      text: 'alert-GENERIC-ERROR-call',
      cellsConnections: {
        out: {
          global_codi_to_call: {
            bind: 'click'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-payment-information',
    currentPage: {
      url: '/codi-payment-information'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      lifeCycle,
      navigationHandler,
      accountsApi,
      multistep,
      manager,
      managerAnalytic,
      productSelector,
      banxicoAPI,
      cellsConnectionStatus(pageName),
      managerCodiLog,
      dataProviderBanxico,
      dataProviderPayments,
      helpModalAricFraudCodi,
      helpModalCodiContentIlustration,
      helpModalCodiSubHeader,
      helpModalCodiText,
      helpModalCodiButton
    ]
  };
  localStorageApp.addOutStorageChannels(base.components, [
    'codi_payments_information',
    'enrollment_codi_key',
    'codi_email_user',
    'codi_banxico_request_acc',
    'banxico_push_status',
    'registration_completed_codi',
    'codi_historical_notification',
    'banxico_push_unified_log_event'
  ], CONFIG);
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-banxico', pageName, ['success-on-post-banxico-internal-transfer', 'error-on-post-banxico-internal-transfer', 'success-on-post-banxico-interbank-transfer', 'error-on-post-banxico-interbank-transfer', 'lost_internet_log', 'unified_log_timeout_session_key']);
  signConnector('bbva-dataprovider-payments', pageName, ['post-service-payments-v0-success', 'post-service-payments-v0-error']);
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'PAYMENTS-NOT-AVAILABLE-TRANSFER',
      acceptRetry: { bind: 'handlePaymentFinished', component: 'bbva-manager-codi-mobile-payment' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-mobile-payment' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'bbva-manager-codi-mobile-payment' }
    }
  ]);
  return base;
};
