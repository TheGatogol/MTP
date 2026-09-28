/* eslint-disable max-statements */
'use strict';
module.exports = config => {
  const {
    createPrefixFromPageName,
    createSpinner,
    useNames
  } = require('./common/helpers/_utils');
  const pageName = 'codiQrPaymentsMain';
  const pages = require('./common/_pages')(config)('codiQrPaymentsMain');
  const analyticsPage = require('./analytics/_codiQrPayments')(config);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const operativePrefix = createPrefixFromPageName(pageName);
  const isNativeIos = config.nativeIos || false;
  const [ getChannelName ] = useNames(operativePrefix);
  const localStorageApp = require('./common/_local-storage');
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi, paymentsV1 }
    },
    native = false
  } = config;

  const cellsSpinnerVeil = createSpinner(config);
  cellsSpinnerVeil.properties.cellsConnections.in = {
    ...cellsSpinnerVeil.properties.cellsConnections.in,
    banxico_aric_fraud_error: {
      bind: 'hide'
    }
  };

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_codi_to_call: {
            bind: 'alert-error-transfers-high-risk-of-fraud-accept'
          },
          global_operations_modal_aric_send_exit_to_header: {
            bind: 'alert-error-transfers-high-risk-of-fraud-cancel',
            backStep: true
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      className: `dark-blue-bg ${config.nativeIos ? 'ios-top-padding' : ''}`,
      headerHeight: 45,
      iOSFixedHeader: isNativeIos,
      mode: 'seamed'
    },
    propertiesSpherica: {
      className: '',
      headerHeight: 0,
      extraHeaderClass: ''
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      private: true,
      tokenName: config.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page_init_page')]: {
            bind: 'init-page'
          },
          codi_multistep_data_reset: {
            bind: 'init-page'
          },
          navigate_to_qr_payments_main: {
            bind: 'init-page'
          },
          app_error_access_token: {
            bind: 'access-token-error'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          codiQrPaymentsMain_get_enrollment: {
            bind: 'init-page'
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
          [getChannelName('analytic_step_amount')]: {
            bind: 'setAmountQr'
          },
          [getChannelName('analytic_step_account')]: {
            bind: 'setStepAccountQr'
          },
          [getChannelName('analytic_step_with_amount')]: {
            bind: 'setStepWithAmountQr'
          },
          signature_handle_required_first_step: {
            bind: 'setStepOtpQr'
          },
          [getChannelName('send_qr_payment_id_operation')]: {
            bind: 'setStepCompletedQrPayment'
          },
          codi_payment_page_view_error_unrealized_operation: {
            bind: 'analyticsPageViewUnrealizedOperation'
          }
        },
        out: {
          [getChannelName('send_analytic_step_account_qr')]: {
            bind: 'analytic-account-step-qr-codi',
            analytics: analyticsPage._appStepsConfiguration('selectAccountStep')
          },
          [getChannelName('send_analytic_qr_step_confirm')]: {
            bind: 'analytic-qr-step-with-amount-qr',
            analytics: analyticsPage._appStepsConfiguration('confirmation')
          },
          [getChannelName('send_analytic_qr_step_otp')]: {
            bind: 'analytic-qr-step-otp-qr',
            analytics: analyticsPage._appStepsConfiguration('otp')
          },
          codi_qr_request_send_analytic_step_completed: {
            bind: 'analytic-qr-step-completed',
            analytics: analyticsPage.appCompleted
          },
          codi_qr_request_send_analytic_error_unrealized_operation: {
            bind: 'analytic-payment-send-footprint-unrealized-operation',
            analytics: analyticsPage.errorUnrealizedOperation
          }
        }
      }
    }
  };

  const managerCodiQrPayments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-codi-qr-payments',
    familyPath: '@glomo-web-components/bbva-manager-codi',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page_init_page')]: {
            bind: 'getPaymentsInformation'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          codi_multistep_data_reset: {
            bind: 'multiStepReset'
          },
          global_storage_get_codi_payments_information_success: {
            bind: 'paymentsInformationData'
          },
          global_login_success: {
            bind: 'setCustomerData'
          },
          dashboard_accounts: {
            bind: 'setFirstAccountId'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_storage_get_enrollment_codi_key_success: {
            bind: 'validateEnrollment'
          },
          navigate_to_qr_payments_main: {
            bind: 'getAccounts'
          },
          global_storage_get_codi_historical_notification_success: {
            bind: 'rawNotificationsData'
          },
          codi_redirect_qr_success_page: {
            bind: 'setPaymentData'
          },
          [getChannelName('SHOW_MODAL_ACCOUNTS')]: {
            bind: 'showModalAccounts'
          },
          [getChannelName('SELECT_ACCOUNT')]: {
            bind: 'parseAnAccountSelect'
          },
          [getChannelName('send_payment_information')]: {
            bind: 'getClabeAccount'
          },
          [getChannelName('qr_payment_get_account_success')]: {
            bind: 'setAccountClabe'
          },
          [getChannelName('codi_qr_payments_internal_transfer_success')]: {
            bind: 'setQrPaymentsReceipts'
          },
          [getChannelName('codi_qr_payments_interbank_transfer_success')]: {
            bind: 'setQrPaymentsReceipts'
          },
          [getChannelName('codi_qr_service_payments_success')]: {
            bind: 'setQrPaymentsReceipts'
          },
          [getChannelName('codi_qr_service_payments_error')]: {
            bind: 'setQrPaymentsReceipts'
          },
          [getChannelName('codi_qr_payments_interbank_transfer_error')]: {
            bind: 'paymentsReceiptsError'
          },
          [getChannelName('codi_qr_payments_internal_transfer_error')]: {
            bind: 'paymentsReceiptsError'
          },
          [getChannelName('qr_payment_selected_account')]: {
            bind: 'setAccountSelected'
          },
          [getChannelName('show_modal_close')]: {
            bind: 'showModalOutFlow'
          },
          [getChannelName('qr_payment_postpone_payment')]: {
            bind: 'rejectOrPostponeQr'
          },
          [getChannelName('post_notification_success')]: {
            bind: 'setResponseNotificationQrPayment'
          },
          [getChannelName('post_notification_error')]: {
            bind: 'setResponseNotificationQrPayment'
          },
          connection_status_codiQrPaymentsMain_offline: {
            bind: 'networkDisconnected'
          },
          connection_status_codiQrPaymentsMain_online: {
            bind: 'networkReconnected'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          banxico_aric_fraud_error: {
            bind: 'validationAricFraudError'
          },
          global_codi_to_call: {
            bind: 'callBBVALineFraud'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-local-storage-codi'
          },
          global_set_in_storage: {
            bind: 'set-local-storage-codi'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName('send_list_accounts')]: {
            bind: 'send-list-accounts'
          },
          [getChannelName('VIEW_ALL_ACCOUNTS')]: {
            bind: 'send-accounts-modal'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'set-account-select-multistep'
          },
          [getChannelName('codi_qr_payments_internal_transfer')]: {
            bind: 'send-internal-transfer-payload'
          },
          [getChannelName('codi_qr_payments_interbank_transfer')]: {
            bind: 'send-interbank-transfer-payload'
          },
          [getChannelName('codi_qr_service_payments')]: {
            bind: 'send-service-payment-payload'
          },
          codi_qr_payments_main_codi_qr_service_payments_V1: {
            bind: 'send-service-payment-payload-v1'
          },
          [getChannelName('reset_multistep_data_send')]: {
            bind: 'send-qr-payment-receipt'
          },
          [getChannelName('reset_multistep_data_close')]: {
            bind: 'accept-close-modal'
          },
          set_banxico_external_link: {
            bind: 'send-banxico-external-link'
          },
          send_qr_payment_successful: {
            bind: 'send-qr-payment-receipt',
            link: {
              page: 'codiQrPaymentsReceipt'
            }
          },
          qr_payment_successful_voucher: {
            bind: 'send-qr-payment-voucher'
          },
          [getChannelName('qr_payment_set_account_id')]: {
            bind: 'set-account-id'
          },
          [getChannelName('qr_payment_get_clabe_account')]: {
            bind: 'get-clabe-account'
          },
          [getChannelName('send_qr_payment_id_operation')]: {
            bind: 'send-qr-payment-id-operation'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [getChannelName('back_step_out_flow')]: {
            bind: 'back-step-out-flow',
            backStep: true
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-modal'
          },
          [getChannelName('post_notification_rejected_qr_payment')]: {
            bind: 'post-notification-rejected-qr-payment'
          },
          codi_payment_postponed_set_postponed_text: {
            bind: 'send-codi-payment-postponed-text',
            link: {
              page: 'codiPaymentPostponed'
            }
          },
          codi_payments_multistep_reset: {
            bind: 'payments-multistep-reset'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          codi_qr_payments_main_connected_successful: {
            bind: 'connected-successful',
            analytics: analyticsPage.errorConnection
          },
          global_codi_modal_reject: {
            bind: 'aric-fraud-error-codi'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          codi_payment_page_view_error_unrealized_operation: {
            bind: 'analytics-codi-page-view-error-unrealized-operation'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-alert-modal'
            },
            codi_payment_postponed_set_postponed_text_spherica: {
              bind: 'send-codi-payment-postponed-text-spherica',
              link: {
                page: 'codiPaymentPostponed'
              }
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings',
            'codi_payment_postponed_set_postponed_text',
            'global_codi_modal_reject'
          ]
        }
      }
    }
  };
  const globalApiBanxico = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-banxico',
    properties: {
      otpId: pageName,
      host: config.globalServices.host,
      native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('codi_qr_payments_internal_transfer')]: {
            bind: 'postInternalTransfers'
          },
          [getChannelName('codi_qr_payments_interbank_transfer')]: {
            bind: 'postInterbankTransfers'
          }
        },
        out: {
          [getChannelName('codi_qr_payments_internal_transfer_success')]: {
            bind: 'success-on-post-banxico-internal-transfer'
          },
          [getChannelName('codi_qr_payments_internal_transfer_error')]: {
            bind: 'error-on-post-banxico-internal-transfer'
          },
          [getChannelName('codi_qr_payments_interbank_transfer_success')]: {
            bind: 'success-on-post-banxico-interbank-transfer'
          },
          [getChannelName('codi_qr_payments_interbank_transfer_error')]: {
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
      native: !!config.native,
      host: config.globalServices.host,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      version: config.globalServices.versions.paymentsV0,
      cellsConnections: {
        in: {
          [getChannelName('codi_qr_service_payments')]: {
            bind: 'servicePaymentsPostV0'
          }
        },
        out: {
          [getChannelName('codi_qr_service_payments_success')]: {
            bind: 'post-service-payments-v0-success'
          },
          [getChannelName('codi_qr_service_payments_error')]: {
            bind: 'post-service-payments-v0-error'
          }
        }
      }
    }
  };
  const localPayments = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-local-payments-api-dm-mx',
    familyPath: '@glomo-web-components/bbva-local-payments-api-dm',
    render: 'litElement',
    properties: {
      otpId: pageName,
      requiredOTP: true,
      native,
      host,
      requiredToken,
      version: paymentsV1,
      cellsConnections: {
        in: {
          codi_qr_payments_main_codi_qr_service_payments_V1: {
            bind: 'postServicePayments'
          }
        },
        out: {
          codi_qr_payments_main_codi_qr_service_payments_success: {
            bind: 'post-service-payment-success'
          },
          codi_qr_payments_main_codi_qr_service_payments_error: {
            bind: 'post-service-payment-error'
          }
        }
      }
    }
  };
  const multistepCodiQrPayments = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-codi-qr-payments-p2m',
    tagSpherica: 'bbva-multistep-codi-qr-payments-p2m-spherica',
    familyPath: '@glomo-web-components/bbva-multistep-codi-qr-payments-p2m',
    familyPathSpherica: '@glomo-web-components/bbva-multistep-codi-qr-payments-p2m-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setAmountLimitRequest'
          },
          codi_payments_multistep_reset: {
            bind: 'resetMultistep'
          },
          [getChannelName('reset_multistep_data_close')]: {
            bind: 'resetMultistep'
          },
          [getChannelName('reset_multistep_data_send')]: {
            bind: 'resetMultistep'
          },
          codi_qr_payments_send_info_qr: {
            bind: 'qrItems'
          },
          [getChannelName('send_list_accounts')]: {
            bind: 'products'
          },
          [getChannelName('SET_ACCOUNT_SELECT_MULTISTEP')]: {
            bind: 'bindModalAccountSummary'
          },
          global_mtu_navigation_confirm_limit: {
            bind: 'sendInfo'
          }
        },
        out: {
          [getChannelName('SHOW_MODAL_ACCOUNTS')]: {
            bind: 'open-full-accounts-modal'
          },
          [getChannelName('send_payment_information')]: {
            bind: 'send-info'
          },
          [getChannelName('show_modal_close')]: {
            bind: 'close-multistep-event'
          },
          [getChannelName('analytic_step_account')]: {
            bind: 'analytic-set-value-account'
          },
          [getChannelName('analytic_step_with_amount')]: {
            bind: 'send-info-for-analytic-and-display'
          },
          [getChannelName('qr_payment_selected_account')]: {
            bind: 'qr-payment-selected-account'
          },
          [getChannelName('qr_payment_postpone_payment')]: {
            bind: 'qr-payment-postpone-payment'
          }
        }
      }
    }
  };
  const modalAccounts = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: 'modal-product-selector-accounts-modal',
      modalTitle: 'codi-payment-qr-modal-accounts',
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
  const accountsApi = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-accounts',
    properties: {
      host: config.globalServices.host,
      native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      accountsApiVersion: config.globalServices.versions.accounts,
      cellsConnections: {
        in: {
          [getChannelName('qr_payment_set_account_id')]: {
            bind: 'accountId'
          },
          [getChannelName('qr_payment_get_clabe_account')]: {
            bind: 'getAccount'
          }
        },
        out: {
          [getChannelName('qr_payment_get_account_success')]: {
            bind: 'get-on-get-account'
          }
        }
      }
    }
  };
  const managerBanxico = {
    tag: 'bbva-dataprovider-banxico',
    familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: config.globalServices.host,
      native,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      apiVersion: config.globalServices.versions.banxicoApi,
      cellsConnections: {
        in: {
          [getChannelName('post_notification_rejected_qr_payment')]: {
            bind: 'notificationPost'
          }
        },
        out: {
          [getChannelName('post_notification_success')]: {
            bind: 'post-notification-success'
          },
          [getChannelName('post_notification_error')]: {
            bind: 'post-notification-error'
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
          codiQrPaymentsMain_get_enrollment: {
            bind: 'getEnrollmentData'
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
          connection_status_codiQrPaymentsMain_online: {
            bind: 'getSendLogLostInternet'
          },
          connection_status_codiQrPaymentsMain_offline: {
            bind: 'saveLostInternetConnection'
          },
          codiQrPaymentsMain_post_unified_log_event_success: {
            bind: 'responseUnifiedLogSuccess'
          },
          codiQrPaymentsMain_post_unified_log_event_error: {
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
          codiQrPaymentsMain_unified_log_event_api_version: {
            bind: 'bbva-manager-codi-unified-log-send-version-post'
          },
          codiQrPaymentsMain_unified_log_event_post: {
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
          codiQrPaymentsMain_unified_log_event_api_version: {
            bind: 'apiVersionUnifedLogEvent'
          },
          codiQrPaymentsMain_unified_log_event_post: {
            bind: 'unifiedLogEventPost'
          }
        },
        out: {
          codiQrPaymentsMain_post_unified_log_event_success: {
            bind: 'post-unified-log-event-success'
          },
          codiQrPaymentsMain_post_unified_log_event_error: {
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
    tagSpherica: 'bbva-help-modal-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    familyPath: '@bbva-experience-components/bbva-help-modal',
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
    tagSpherica: 'bbva-clip-microillustration-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
    tagSpherica: 'bbva-type-text-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
    tagSpherica: 'bbva-type-text-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
    tagSpherica: 'bbva-button-default-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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
    hash: 'codi-qr-payments-main',
    currentPage: {
      url: '/codi-qr-payments-main'
    },
    pages,
    template,
    components: [
      cellsSpinnerVeil,
      lifeCycle,
      managerCodiQrPayments,
      globalApiBanxico,
      dataProviderPayments,
      localPayments,
      multistepCodiQrPayments,
      modalAccounts,
      accountsApi,
      managerAnalytic,
      managerBanxico,
      cellsConnectionStatus(pageName),
      managerCodiLog,
      dataProviderBanxico,
      helpModalAricFraudCodi,
      helpModalCodiContentIlustration,
      helpModalCodiSubHeader,
      helpModalCodiText,
      helpModalCodiButton
    ]
  };
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-banxico', pageName, [
    'success-on-post-banxico-internal-transfer', 'error-on-post-banxico-internal-transfer', 'success-on-post-banxico-interbank-transfer', 'error-on-post-banxico-interbank-transfer', 'lost_internet_log', 'unified_log_timeout_session_key'
  ]);
  signConnector('bbva-dataprovider-payments', pageName, ['post-service-payments-v0-success', 'post-service-payments-v0-error']);
  signConnector('bbva-local-payments-api-dm-mx', pageName, ['post-service-payment-success', 'post-service-payment-error']);
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'PAYMENT-QR-NOT-ERROR',
      acceptRetry: { bind: '_requestInterbankTransfer', component: 'bbva-manager-codi-qr-payments' },
      cancelRetry: { bind: 'goPageBack', component: 'bbva-manager-codi-qr-payments' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'bbva-manager-codi-qr-payments' }
    }
  ]);
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  localStorageApp.addOutStorageChannels(base.components, ['codi_payments_information',
    'codi_historical_notification', 'codi_pending_accounts', 'enrollment_codi_key'], config);
  return sphericaPageUtils.spherize(base);
};
