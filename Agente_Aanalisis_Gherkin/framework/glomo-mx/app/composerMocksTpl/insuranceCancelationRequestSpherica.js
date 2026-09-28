module.exports = CONFIG => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { publicSettings, customerContactDetailsV1, insurancesContractsV1, cancellationReasons },
      publicSettingsId,
      publicSettingsHost
    },
    nativeIos = false,
    native = false
  } = CONFIG;
  const {
    getLanguage,
    SPINNERSPHERICA: createSpinner
  } = require('./common/helpers/_utils');
  const spinnerManager = createSpinner(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('insuranceCancelationRequestSpherica');
  const analyticsManager = require('./analytics/_cancelInsurance')(CONFIG);
  const insurancesProducts = {
    '4046': {
      name: 'life-dynamic',
      keepInsuranceModalIllustration: 'lifeInsurance',
      analyticsName: 'seguro vida'
    },
    '4035': {
      name: 'travel',
      keepInsuranceModalIllustration: 'travelInsurance',
      analyticsName: 'seguro viaje'
    }
  };

  const productsWithNextPaymentDate = [ '4046' ];

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      headerFixed: true,
      className: 'header--core',
      extraHeaderClass: 'header--core',
      iOSFixedHeader: nativeIos
    }
  };

  const bbvaMultistepCancelInsuranceTravel = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/insurance-cancellation-cancel-travel-insurance-mx',
    tag: 'insurance-cancellation-cancel-travel-insurance-mx',
    render: 'litElement',
    properties: {
      requestSimulation: true,
      requestRasonsSimulation: true,
      native,
      insurancesProducts,
      productsWithNextPaymentDate,
      host,
      requiredToken,
      iOSFixedHeader: nativeIos,
      showLabelSticky: true,
      showIconLeftSummarySteps: true,
      showSecondaryButton: true,
      publicSettingsId,
      publicSettingsHost,
      publicSettingsKey: 'cancelInsurance',
      publicSettingsApiVersion: publicSettings,
      cancellationReasonsApiVersion: cancellationReasons,
      customerContactDetailsApiVersion: customerContactDetailsV1,
      insuranceContractApiVersion: insurancesContractsV1,
      locale: 'es-Mx',
      cellsConnections: {
        in: {
          SEND_APP_SETTINGS_INFO: {
            bind: 'appSettingsInfo'
          },
          SEND_APP_SETTINGS_NUMBER: {
            bind: 'bbvaLinePhone'
          },
          global_alert_manager_open_with_settings_travel: {
            bind: 'initCancellation'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewResponse'
          },
          global_user_id: {
            bind: 'customerId'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          sign_modal_cancelled_travel: {
            bind: 'signModalCancelled'
          }
        },
        out: {
          insurance_cancelation_request_app_init_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-init-cancellation'
          },
          insurance_cancelation_request_app_visit_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-loaded-completed'
          },
          insurance_cancelation_request_app_listen_open_modal: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-reason-cancellation-step-link-keep-click'
          },
          insurance_cancelation_request_app_started_analytics: {
            bind: 'reason-cancellation-step-reason-cancellation-change'
          },
          insurance_cancelation_request_app_started_analytics_keep_modal: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-show-keep-modal-analytic'
          },
          insurance_cancelation_request_app_keep_in_mind_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-reason-cancellation-step-continue-click'
          },
          insurance_cancelation_request_app_cancellation_detail_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-retention-arguments-step-continue-click'
          },
          insurance_cancelation_request_app_confirmation_cancellation_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-cancellation-detail-step-continue-click'
          },
          insurance_cancelation_request_app_step_success_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-show-success-modal'
          },
          insurance_cancelation_request_app_step_error_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-show-error-modal'
          },
          insurance_cancelation_request_app_otp_analytics: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-post-request-cancel'
          },
          insurance_cancelation_request_exit_flow: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-exit-flow',
            backStep: true
          },
          insurance_cancelation_request_exit_dashboard: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-exit-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          insurance_cancelation_request_share_receipt_result: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-send-receipt-result'
          },
          insurance_cancelation_request_share_receipt_open: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-share-receipt-open'
          },
          global_action_launcher_dialer: {
            bind: 'insurance-cancellation-cancel-travel-insurance-mx-open-call-action'
          }
        }
      }
    }
  };

  const bbvaMultistepCancelInsuranceLife = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/insurance-cancellation-cancel-life-insurance-mx',
    tag: 'insurance-cancellation-cancel-life-insurance-mx',
    render: 'litElement',
    properties: {
      requestSimulation: true,
      requestRasonsSimulation: true,
      native,
      insurancesProducts,
      productsWithNextPaymentDate,
      host,
      requiredToken,
      iOSFixedHeader: nativeIos,
      showLabelSticky: true,
      showIconLeftSummarySteps: true,
      showSecondaryButton: true,
      publicSettingsId,
      publicSettingsHost,
      publicSettingsKey: 'cancelInsurance',
      publicSettingsApiVersion: publicSettings,
      cancellationReasonsApiVersion: cancellationReasons,
      customerContactDetailsApiVersion: customerContactDetailsV1,
      insuranceContractApiVersion: insurancesContractsV1,
      locale: 'es-Mx',
      cellsConnections: {
        in: {
          SEND_APP_SETTINGS_INFO: {
            bind: 'appSettingsInfo'
          },
          SEND_APP_SETTINGS_NUMBER: {
            bind: 'bbvaLinePhone'
          },
          global_alert_manager_open_with_settings_dynamic_life: {
            bind: 'initCancellation'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewResponse'
          },
          global_user_id: {
            bind: 'customerId'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          sign_modal_cancelled_life_dynamic: {
            bind: 'signModalCancelled'
          }
        },
        out: {
          insurance_cancelation_request_app_init_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-init-cancellation'
          },
          insurance_cancelation_request_app_visit_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-loaded-completed'
          },
          insurance_cancelation_request_app_listen_open_modal: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-reason-cancellation-step-link-keep-click'
          },
          insurance_cancelation_request_app_started_analytics: {
            bind: 'reason-cancellation-step-reason-cancellation-change'
          },
          insurance_cancelation_request_app_started_analytics_keep_modal: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-show-keep-modal-analytic'
          },
          insurance_cancelation_request_app_keep_in_mind_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-reason-cancellation-step-continue-click'
          },
          insurance_cancelation_request_app_cancellation_detail_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-retention-arguments-step-continue-click'
          },
          insurance_cancelation_request_app_confirmation_cancellation_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-cancellation-detail-step-continue-click'
          },
          insurance_cancelation_request_app_step_success_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-show-success-modal'
          },
          insurance_cancelation_request_app_step_error_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-show-error-modal'
          },
          insurance_cancelation_request_app_otp_analytics: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-post-request-cancel'
          },
          insurance_cancelation_request_exit_flow: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-exit-flow',
            backStep: true
          },
          insurance_cancelation_request_exit_dashboard: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-exit-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          insurance_cancelation_request_share_receipt_result: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-send-receipt-result'
          },
          insurance_cancelation_request_share_receipt_open: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-share-receipt-open'
          },
          global_action_launcher_dialer: {
            bind: 'insurance-cancellation-cancel-life-insurance-mx-open-call-action'
          }
        }
      }
    }
  };

  const shareReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      cellsConnections: {
        in: {
          insurance_cancelation_request_share_receipt_result: {
            bind: 'result'
          },
          insurance_cancelation_request_share_receipt_open: {
            bind: 'captureReceipt'
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
          }
        }
      }
    }
  };

  const bbvacancelationInsuranceDm = {
    zone: 'app__transactional',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-cancel-insurance-request',
    tag: 'bbva-manager-cancel-insurance-request',
    render: 'litElement',
    properties: {
      insurancesProducts,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'getAppSettings'
          },
          sign_modal_cancelled_widgetErrorHandler: {
            bind: 'signModalCancelled'
          },
          global_device_accesses_customer_id: {
            bind: 'setCustomerId'
          },
          dashboard_customer_email: {
            bind: 'setCustomerEmail'
          },
          global_storage_get_loginData_success: {
            bind: 'setClientId'
          },
          global_client_id: {
            bind: 'clienteId'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewResponseData'
          },
          INSURANCE_DETAIL_NAVIGATE_OPEN_CANCEL_DETAIL: {
            bind: 'initProcess'
          },
          CANCEL_INSURANCE_MODAL_ERROR_ACCEPT: {
            bind: 'openCallBbva'
          },
          CANCEL_INSURANCE_EXISTING_ERROR_ACCEPT: {
            bind: 'openCallBbva'
          },
          CANCEL_INSURANCE_MODAL_KEEP_ACCEPT: {
            bind: 'closeOperative'
          },
          CANCEL_INSURANCE_MODAL_KEEP_CANCEL: {
            bind: 'closeOperative'
          },
          CANCEL_INSURANCE_MODAL_ERROR_CANCEL: {
            bind: 'closeOperative'
          },
          CANCEL_INSURANCE_EXISTING_ERROR_CANCEL: {
            bind: 'closeOperative'
          },
          INSURANCE_CANCELATION_SUCCESS_CLOSE_OPERATIVE: {
            bind: 'closeOperativeComplete'
          },
          CLICK_MODAL_KEEP_INSURNACE: {
            bind: 'closeOperative'
          },
          NAVIGATION_MAIN_PAGE_BACK_REQUEST: {
            bind: 'closeOperative'
          },
          FINANCIAL_OVERVIEW_RETRIEVED: {
            bind: 'setFinancialOverview'
          },
          FINANCIAL_OVERVIEW_ERROR: {
            bind: 'errorRequestFinancial'
          },
          SUCCESS_INSURANCE_PRODUCT_CANCELLATION_REASONS: {
            bind: 'setCancelationReasons'
          },
          ERROR_INSURANCE_PRODUCT_CANCELLATION_REASONS: {
            bind: 'errorCancelationReasons'
          },
          INSURANCE_CANCELLATION_REQUEST_SUCCESS: {
            bind: 'setCancelationRequestSuccess'
          },
          INSURANCE_CANCELLATION_REQUEST_ERROR: {
            bind: 'errorCancelationRequest'
          },
          SET_INSURANCE_CANCELATION_REASON_SELECTED: {
            bind: 'setReasonCancelationSelected'
          },
          LISTEN_NEXT_STEP: {
            bind: 'validIsFinalStep'
          },
          GET_PAYROLL_CONTACT_DETAIL_SUCCESS: {
            bind: 'successfullOnGetCustomersDetail'
          },
          CLICK_ACCEPT: {
            bind: 'sendCacelationRequest'
          },
          LISTEN_OPEN_CALL_BBVA: {
            bind: 'openCallBbva'
          },
          CLICK_BUTTON_KEEP: {
            bind: 'sendCancelInsuranceModal'
          }
        },
        out: {
          SEND_APP_SETTINGS_INFO: {
            bind: 'bbva-manager-ic-send-app-settings'
          },
          SEND_APP_SETTINGS_NUMBER: {
            bind: 'bbva-manager-ic-call-phone-new'
          },
          global_get_from_storage: {
            bind: 'bbva-manager-ic-get-client-id'
          },
          global_retry_error: {
            bind: 'bbva-manager-ic-retry-error'
          },
          GET_FINANCIAL_OVERVIEW_REQUEST: {
            bind: 'bbva-manager-ic-get-financial-overview'
          },
          SET_CUSTOMER_ID: {
            bind: 'bbva-manager-ic-set-customer-id'
          },
          GET_PAYROLL_CONTACT_DETAIL: {
            bind: 'bbva-manager-ic-get-customer-detail'
          },
          SEND_INSURANCE_IMG_SRC_MODAL: {
            bind: 'bbva-manager-ic-send-img-src-modal-data'
          },
          SEND_INSURANCE_DETAIL_HEADER: {
            bind: 'bbva-manager-ic-send-insurance-detail-header'
          },
          GET_CANCELATION_REASONS_REQUEST: {
            bind: 'bbva-manager-ic-get-cancelation-reasons'
          },
          SEND_INSURANCE_CANCELATION_REASONS: {
            bind: 'bbva-manager-ic-send-insurance-detail-reasons'
          },
          ACTIVE_BTN_TO_CONFIRM: {
            bind: 'bbva-manager-ic-active-btn-summary'
          },
          POST_INSURANCE_CANCELLATION_REQUEST: {
            bind: 'bbva-manager-ic-post-cancel-insurance'
          },
          POST_INSURANCE_CANCELLATION_SET_HEADERS: {
            bind: 'bbva-manager-ic-set-headers'
          },
          NAVIGATE_TO_SUCCESS_PAGE: {
            bind: 'bbva-manager-ic-post-cancel-insurances'
          },
          SEND_INFO_TO_SUCCESS_PAGE: {
            bind: 'bbva-manager-ic-navigate-to-success-page',
            link: {
              page: 'insuranceCancelationSuccess'
            }
          },
          SEND_CONFIG_MODAL: {
            bind: 'bbva-manager-ic-send-config-modal'
          },
          CLOSE_AND_RESET_PROCESS: {
            bind: 'bbva-manager-ic-reset-process'
          },
          CLOSE_OPERATIVE: {
            bind: 'bbva-manager-ic-navigate-to-back-page',
            link: {
              page: 'dashboard'
            }
          },
          CLOSE_PROCESS: {
            bind: 'bbva-manager-ic-navigate-to-main-page',
            backStep: true
          },
          global_phone_call_channel: {
            bind: 'bbva-manager-ic-call-phone',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings_dynamic_life: {
            bind: 'bbva-manager-cancel-insurance-request-life-dynamic-init-cancellation'
          },
          global_alert_manager_open_with_settings_travel: {
            bind: 'bbva-manager-cancel-insurance-request-travel-init-cancellation'
          },
          sign_modal_cancelled_travel: {
            bind: 'sign-modal-cancelled-travel'
          },
          sign_modal_cancelled_life_dynamic: {
            bind: 'sign-modal-cancelled-life-dynamic'
          },
          APP_INIT_ANALYTICS: {
            bind: 'bbva-manager-ic-init-analytics'
          },
          APP_VISIT_ANALYTICS: {
            bind: 'bbva-manager-ic-visit-analytics'
          },
          APP_STARTED_ANALYTICS: {
            bind: 'bbva-manager-ic-started-analytics'
          },
          APP_OTP_ANALYTICS: {
            bind: 'bbva-manager-ic-otp-analytics'
          },
          APP_STEP_SUCCESS_ANALYTICS: {
            bind: 'bbva-manager-ic-success-analytics'
          },
          APP_SEND_DATA_ANALYTICS: {
            bind: 'bbva-manager-ic-send-data-analytics'
          },
          APP_RESET_DATA_ANALYTICS: {
            bind: 'bbva-manager-ic-reset-analytics'
          },
          APP_STEP_ERROR_ANALYTICS: {
            bind: 'bbva-manager-ic-error-analytics'
          }
        }
      }
    }
  };

  const bbvaAnalitycscancelationInsuranceDm = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-analytics-manager-cancel-insurance-request',
    familyPath: '@glomo-web-components/bbva-manager-cancel-insurance-request',
    render: 'litElement',
    properties: {
      insurancesProducts,
      cellsConnections: {
        in: {
          insurance_cancelation_request_app_init_analytics: {
            bind: 'initAnalitycs'
          },
          insurance_cancelation_request_app_visit_analytics: {
            bind: 'fireAnalitycVisit'
          },
          insurance_cancelation_request_app_started_analytics: {
            bind: 'fireVisitAndStarted'
          },
          insurance_cancelation_request_app_started_analytics_keep_modal: {
            bind: 'fireVisitAndStarted'
          },
          insurance_cancelation_request_app_keep_in_mind_analytics: {
            bind: 'fireKeepInMindAnalytic'
          },
          insurance_cancelation_request_app_cancellation_detail_analytics: {
            bind: 'fireCancellationDetailAnalytic'
          },
          insurance_cancelation_request_app_confirmation_cancellation_analytics: {
            bind: 'fireConfirmationCancellationAnalytic'
          },
          insurance_cancelation_request_app_otp_analytics: {
            bind: 'fireAnalitycStepOtp'
          },
          insurance_cancelation_request_app_step_success_analytics: {
            bind: 'fireAnalitycStepSuccess'
          },
          insurance_cancelation_request_app_step_error_analytics: {
            bind: 'fireAnalitycStepError'
          }
        },
        out: {
          ANALITYC_ON_CLICK_START: {
            bind: 'bbva-manager-ic-on-click-start',
            analytics: analyticsManager.APP_ONCLICK_START
          },
          ANALITYC_ON_VISIT: {
            bind: 'bbva-manager-ic-on-visit',
            analytics: analyticsManager.APP_PAGE_VISIT
          },
          ANALITYC_ON_STEP_VISIT: {
            bind: 'bbva-manager-ic-on-step-started-cancellation-reason-payment',
            analytics: analyticsManager.appStarted('payment')
          },
          ANALITYC_ON_STEP_VISIT_INFO: {
            bind: 'bbva-manager-ic-on-step-started-cancellation-reason-info',
            analytics: analyticsManager.appStarted('info')
          },
          ANALITYC_ON_STEP_VISIT_OFFER: {
            bind: 'bbva-manager-ic-on-step-started-cancellation-reason-offer',
            analytics: analyticsManager.appStarted('offer')
          },
          ANALITYC_ON_STEP_VISIT_SERVICE: {
            bind: 'bbva-manager-ic-on-step-started-cancellation-reason-service',
            analytics: analyticsManager.appStarted('service')
          },
          ANALITYC_ON_STEP_VISIT_OTHER: {
            bind: 'bbva-manager-ic-on-step-started-cancellation-reason-other',
            analytics: analyticsManager.appStarted('other')
          },
          ANALITYC_ON_STEP_VISIT_KEEP: {
            bind: 'bbva-manager-ic-on-step-started-cancellation-reason-keep',
            analytics: analyticsManager.appStarted('keep')
          },
          ANALITYC_ON_STEP_TWO: {
            bind: 'bbva-manager-ic-on-step-two',
            analytics: analyticsManager.appCustomStep(2, 'antes de cancelar')
          },
          ANALITYC_ON_STEP_THREE: {
            bind: 'bbva-manager-ic-on-step-three',
            analytics: analyticsManager.appCustomStep(3, 'detalle de cancelacion')
          },
          ANALITYC_ON_STEP_FOUR: {
            bind: 'bbva-manager-ic-on-step-four',
            analytics: analyticsManager.appCustomStep(4, 'confirmacion')
          },
          ANALITYC_ON_STEP_FIVE: {
            bind: 'bbva-manager-ic-on-step-five',
            analytics: analyticsManager.appCustomStep(5, 'otp')
          },
          ANALITYC_ON_STEP_COMPLETE: {
            bind: 'bbva-manager-ic-on-step-complete',
            analytics: analyticsManager.APP_COMPLETED
          },
          ANALITYC_ON_STEP_ERROR: {
            bind: 'bbva-manager-ic-on-step-error-already',
            analytics: analyticsManager.appError('alreadyCanceled', 'errorPage')
          },
          ANALITYC_ON_STEP_ERROR_CANCEL_FAILED: {
            bind: 'bbva-manager-ic-on-step-error-cancel-failed',
            analytics: analyticsManager.appError('cancelFailed', 'errorPage')
          },
          ANALITYC_ON_STEP_ERROR_OPERATION_NOT_COMPLETED: {
            bind: 'bbva-manager-ic-on-step-error-operation-not-completed',
            analytics: analyticsManager.appError('operationNotCompleted', 'errorPage')
          }
        }
      }
    }
  };

  const base = {
    hash: 'insurance-cancelation-request-spherica',
    currentPage: {
      url: '/insurance-cancelation-request-spherica'
    },
    pages,
    template,
    components: [
      spinnerManager,
      bbvaMultistepCancelInsuranceTravel,
      bbvaMultistepCancelInsuranceLife,
      bbvacancelationInsuranceDm,
      bbvaAnalitycscancelationInsuranceDm,
      shareReceipt
    ]
  };

  const singConnectorCreate = require('./common/_widget-sign-connector')(CONFIG)(base);
  singConnectorCreate('insurance-cancellation-cancel-travel-insurance-mx');
  singConnectorCreate('insurance-cancellation-cancel-life-insurance-mx');

  return base;
};
