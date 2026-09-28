'use strict';
module.exports = (config) => {
  const {
    getLocalCurrency,
    getCurrencyCode,
    getLanguage,
    createSpinner
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)('billPaymentsDashboard');
  const localStorageBillPayments = require('./common/_local-storage');
  const pageName = 'billPaymentsDashboard';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const analyticsBillPaymentsDashboard = require('./analytics/_billPaymentsDashboard')(config);
  const analitycsScheduledBillPayments = require('./analytics/_scheduledBillPayments')(config);
  const OPERATIONALS = require('./dashboard/_operationals');
  const {
    globalServices: { host, requiredToken = 'tsec' },
    native = false,
    nativeIos = false
  } = config;
  const base = {
    hash: pageName,
    currentPage: {
      url: '/bill-payments-dashboard'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        className: nativeIos ? 'bg-core-blue' : '',
        delayScrollTop: 700,
        topOnConfirm: true,
        animationType: 'verticalUp',
        extraHeaderClass: 'bbva-dark-medium-blue',
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            [pageName + '_page_init_page']: {
              bind: 'recalculateHeader'
            },
            [pageName + '_init_page']: {
              bind: 'resetLayerScroll'
            }
          },
          out: {
            [pageName + '_SCROLL_COMPLETE']: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      createSpinner(config),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
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
              [pageName + '_page_init_page']: {
                bind: 'init-page'
              },
              [pageName + '_init_page']: {
                bind: 'init-page'
              },
              [pageName + '_reset_page']: {
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
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-feature-bill-payments-mx',
        tagSpherica: 'bbva-feature-bill-payments-mx-spherica',
        familyPath: '@glomo-web-components/bbva-feature-bill-payments-mx',
        familyPathSpherica: '@glomo-web-components/bbva-feature-bill-payments-mx-spherica',
        render: 'litElement',
        properties: {
          headers: {
            host,
            native,
            requiredToken,
            isFromDashboard: false,
            agreementValidate: true
          },
          localLanguage: getLanguage(),
          localCurrency: getLocalCurrency(),
          currencyCode: getCurrencyCode(),
          native,
          nativeIOS: nativeIos,
          cdmxServiceId: '1137840',
          isNativeIos: nativeIos,
          activeModalSmartServicingLow: false,
          iOSFixedHeader: nativeIos,
          isUna: false,
          cellsConnections: {
            in: {
              bill_payment_aric_fraud_call_bbva_line: {
                bind: 'callBBVALine'
              },
              global_user_id: {
                bind: 'customerId'
              },
              global_login_success: {
                bind: 'customerResponse'
              },
              global_mtu_exception_back_navigation: {
                bind: 'mtuFlag'
              },
              [pageName + '_page_init_page']: {
                bind: 'checkAvailability'
              },
              [pageName + '_reset_page']: {
                bind: 'reset'
              },
              global_tsec_channel: {
                bind: 'tsec'
              },
              register_device: {
                bind: 'getRegisterDevice'
              },
              device_accesses_device_id: {
                bind: 'getRegisterDevice'
              },
              dashboard_customer_email: {
                bind: 'customerContact'
              },
              dashboard_accounts: {
                bind: 'getGlobalAccounts'
              },
              global_dashboard_cards: {
                bind: 'getGlobalCards'
              },
              global_storage_get_billPaymens_onboarding_success: {
                bind: 'getOnbordingDetailLocalStorage'
              },
              global_storage_get_billPaymens_onboarding_error: {
                bind: 'getOnbordingDetailLocalStorageError'
              },
              sign_modal_cancelled: {
                bind: 'signCancelled'
              },
              cells_to_native_modal_closed: {
                bind: 'signCancelled'
              },
              sign_modal_close_reset: {
                bind: 'signCancelled'
              },
              bpd_show_detail_payments_channel: {
                bind: 'getServiceDetail'
              },
              bpd_pay_service_with_arcus_channel: {
                bind: 'payServiceWithArcus'
              },
              [pageName + '_operation_request_success']: {
                bind: 'operationRequestSuccess'
              },
              [pageName + '_operation_request_error']: {
                bind: 'operationRequestError'
              },
              global_feature_flag_services: {
                bind: 'billPaymentsServicesV1'
              },
              global_feature_flag_activated_scheduled_bill_payments: {
                bind: 'queryScheduledFlag'
              },
              global_feature_flag_deactivate_scheduled_bill_payments: {
                bind: 'queryScheduledFlag'
              },
              global_feature_flag_activated_bill_payments_dashboard: {
                bind: 'availableProcess'
              },
              global_feature_flag_deactivate_bill_payments_dashboard: {
                bind: 'availableProcess'
              },
              global_feature_flag_activated_bill_taxes: {
                bind: 'isBillTaxes'
              },
              global_feature_flag_deactivate_bill_taxes: {
                bind: 'isBillTaxes'
              },
              global_feature_flag_activated_to_operationals_page: {
                bind: 'isBillPaymentsHome'
              },
              global_feature_flag_deactivate_to_operationals_page: {
                bind: 'isBillPaymentsHome'
              },
              is_from_accounts_for_store_and_forward: {
                bind: 'receiveProductIdFromAccount'
              },
              global_sign_token_standby_timer_succes: {
                bind: 'operationRequestErrorOtp'
              },
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlags'
              },
              blue_pay_service_save_listening_mode: {
                bind: 'dataAutoPayService'
              },
              blue_selected_pay_new_service: {
                bind: 'blueNewServicePay'
              },
              suspected_transaction_reset_operatives: {
                bind: 'resetOperative'
              },
              navigation_from_futura_dashboard: {
                bind: 'initPageFutura'
              },
              signature_cancel_billPaymentsDashboard: {
                bind: 'signModalCancelled'
              },
              global_open_selector_native_success: {
                bind: 'nativeOptionSelected'
              }
            },
            out: {
              burn_item_from_operative_smart_servicing: {
                bind: 'feature-bill-payments-burn-item-from-operative'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              },
              [pageName + '_exit_process_channel_to_command_center']: {
                bind: 'exit-dashboard-bill-payments-process-to-command-center',
                'forward-to-native': true,
                link: {
                  page: 'billPaymentsHome',
                  cleanUntil: 'billPaymentsHome',
                  skipHistory: true
                }
              },
              dashboard_refresh_financial_overview: {
                bind: 'financial-overview-refresh'
              },
              [pageName + '_exit_process_channel_to_dashboard']: {
                bind: 'exit-dashboard-bill-payments-process-to-dashboard',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              },
              exit_process_channel_to_digitalButler: {
                bind: 'exit-to-blue',
                link: {
                  page: 'digitalButler'
                }
              },
              exit_from_reference_expired_modal_chanel: {
                bind: 'exit-to-account-from-store-and-forward',
                link: {
                  page: 'account',
                  cleanUntil: 'account',
                  skipHistory: true,
                  params: {
                    productId: 'productId'
                  }
                }
              },
              open_schedule_payment: {
                bind: 'go-to-schedule-payment',
                analytics: analitycsScheduledBillPayments.appOnclickStartScheduledBillPayments(
                  'cuentas',
                  'pagar servicio',
                  'pagina exitosa',
                  'programar pago',
                  'transaccion'
                ),
                link: {
                  page: 'scheduledBillPayments'
                }
              },
              reference_value_from_service_selected: {
                bind: 'feature-bill-payments-reference-value'
              },
              global_get_from_storage: {
                bind: 'get-billPayments-detail-from-local-storage'
              },
              global_set_in_storage: {
                bind: 'set-data-storage-billPayments-onboarding'
              },
              [pageName + '_request_operation_registry']: {
                bind: 'send-response-recover-registry'
              },
              open_setttings_mobile: {
                bind: 'feature-bill-payments-open-settings-click'
              },
              global_action_launcher_dialer: {
                bind: 'call-bbva-line'
              },
              bill_payment_aric_fraud_modal_reject: {
                bind: 'aric-fraud-help-modal-high-risk'
              },
              global_mtu_exception_navigation: {
                bind: 'mtu-exception-handler-navigation',
                link: {
                  page: 'mtuException'
                }
              },
              billPaymentsDashboard_goto_profile: {
                bind: 'goto-profile',
                link: {
                  page: 'profile'
                }
              },
              global_open_selector_native: {
                bind: 'bbva-feature-bill-payments-method-selector-native-selector-select'
              },
              billPaymentsDashboard_analytics_billPayments_app_on_click_start: {
                bind: 'analytics-billPayments-app-on-click-start',
                analytics: analyticsBillPaymentsDashboard.appOnclickStartServiceDetail('cuentas', 'pagar servicio o impuesto')
              },
              billPaymentsDashboard_analytics_billPayments_app_page_visit: {
                bind: 'analytics-billPayments-app-page-visit',
                analytics: analyticsBillPaymentsDashboard.appPageVisitPayments('1 servicio')
              },
              billPaymentsDashboard_analytics_billPayments_app_started: {
                bind: 'analytics-billPayments-app-started',
                analytics: analyticsBillPaymentsDashboard.appStartedPayments('pagar servicio', '1 servicio')
              },
              billPaymentsDashboard_analytics_billPayments_app_step_select_service: {
                bind: 'analytics-billPayments-app-step-select-service',
                analytics: analyticsBillPaymentsDashboard.appStepPayments(2, 'pagar servicio', '2 referencia')
              },
              billPaymentsDashboard_analytics_billPayments_app_completed_select_service: {
                bind: 'feature-bill-payments-completed-select-service',
                analytics: analyticsBillPaymentsDashboard.appStepPayments(3, 'pagar servicio', '3 monto')
              },
              billPaymentsDashboard_analytics_billPayments_app_page_view_select_origin: {
                bind: 'analytics-billPayments-app-page-view-select-origin',
                analytics: analyticsBillPaymentsDashboard.appStepPayments(4, 'pagar servicio', '4 origen')
              },
              billPaymentsDashboard_analytics_billPayments_app_page_view_select_concept: {
                bind: 'analytics-billPayments-app-page-view-select-concept',
                analytics: analyticsBillPaymentsDashboard.appStepPayments(5, 'pagar servicio', '5 concepto')
              },
              billPaymentsDashboard_analytics_billPayments_app_page_view_summary: {
                bind: 'analytics-billPayments-app-page-view-summary',
                analytics: analyticsBillPaymentsDashboard.appStepPayments(6, 'pagar servicio', '6 resumen')
              },
              billPaymentsDashboard_analytics_billPayments_app_step_otp: {
                bind: 'analytics-billPayments-app-step-otp',
                analytics: analyticsBillPaymentsDashboard.appStepPayments(7, 'pagar servicio', '7 otp')
              },
              billPaymentsDashboard_analytics_billPayments_app_step_completed_reference_expiring: {
                bind: 'analytics-bill-payments-app-step-completed-reference-expiring',
                analytics: analyticsBillPaymentsDashboard.appCompletedPaymentsReferenceExpiring('pagar servicio', 'pagina exitosa', 'rechazado')
              },
              billPaymentsDashboard_analytics_billPayments_app_step_completed_pay_success: {
                bind: 'analytics-billPayments-app-step-completed-pay-success',
                analytics: analyticsBillPaymentsDashboard.appCompletedPaymentsSuccess('pagar servicio', 'pagina exitosa', 'finalizado')
              },
              billPaymentsDashboard_analytics_billPayments_app_step_completed_pay_process_success: {
                bind: 'analytics-billPayments-app-step-completed-pay-in-process',
                analytics: analyticsBillPaymentsDashboard.appCompletedPaymentsProcess('pagar servicio', 'pagina exitosa', 'en revision')
              },
              billPaymentsDashboard_analytics_billPayments_app_step_completed_reject: {
                bind: 'analytics-bill-payments-app-step-completed-reject',
                analytics: analyticsBillPaymentsDashboard.appCompletedPaymentsReject('pagar servicio', 'pagina exitosa', 'en revision')
              },
              analytics_billPayments_custom_tag_exit_process: {
                bind: 'analytics-billPayments-custom-tag-exit-process',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkExitProcess('salir')
              },
              analytics_billPayments_custom_tag_ticket_save: {
                bind: 'analytics-billPayments-custom-tag-ticket-save',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkSaveService('guardar servicio o impuesto')
              },
              analytics_billPayments_custom_tag_more_information: {
                bind: 'analytics-billPayments-app-internal-link-reference',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkQuestion('2 referencia')
              },
              analytics_billPayments_custom_tag_bar_code_reader: {
                bind: 'analytics-billPayments-app-internal-link-scanner-code',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkScannerCode('2 referencia')
              },
              analytics_billPayments_custom_tag_bar_code_reader_qr: {
                bind: 'analytics-billPayments-app-internal-link-scanner-code-qr',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkScannerCodeQr('2 referencia')
              },
              analytics_billPayments_app_internal_link_edit_service: {
                bind: 'analytics-billPayments-app-internal-link-edit-service',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditServiceAmount('3 monto')
              },
              analytics_billPayments_app_internal_link_edit_origin_service: {
                bind: 'analytics-billPayments-app-internal-link-edit-origin-service',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditServiceOrigin('4 origen')
              },
              analytics_billPayments_app_internal_link_edit_origin_amount: {
                bind: 'analytics-billPayments-app-internal-link-edit-origin-amount',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditAmountOrigin('4 origen')
              },
              analytics_billPayments_app_internal_link_edit_concept_service: {
                bind: 'analytics-billPayments-app-internal-link-edit-concept-service',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditServiceConcept('5 concepto')
              },
              analytics_billPayments_app_internal_link_edit_concept_amount: {
                bind: 'analytics-billPayments-app-internal-link-edit-concept-amount',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditAmountConcept('5 concepto')
              },
              analytics_billPayments_app_internal_link_edit_concept_origin: {
                bind: 'analytics-billPayments-app-internal-link-edit-concept-origin',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditOriginConcept('5 concepto')
              },
              analytics_billPayments_app_internal_link_edit_summary_service_service: {
                bind: 'analytics-billPayments-app-internal-link-edit-summary-service',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditServiceSummary('6 resumen')
              },
              analytics_billPayments_app_internal_link_edit_summary_service_amount: {
                bind: 'analytics-billPayments-app-internal-link-edit-summary-amount',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditAmountSummary('6 resumen')
              },
              analytics_billPayments_app_internal_link_edit_summary_service_origin: {
                bind: 'analytics-billPayments-app-internal-link-edit-summary-origin',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditOriginSummary('6 resumen')
              },
              analytics_billPayments_app_internal_link_edit_summary_service_concept: {
                bind: 'analytics-billPayments-app-internal-link-edit-summary-concept',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkEditConceptSummary('6 resumen')
              },
              analytics_billPayments_custom_tag_page_success_shared: {
                bind: 'analytics-billPayments-custom-tag-page-success-shared',
                analytics: analyticsBillPaymentsDashboard.appInternalLinkShare('pagina exitosa')
              },
              billPaymentsDashboard_analytics_billPayments_footprint_search_not_found: {
                bind: 'analytics-billPayments-app-page-view-without-result',
                analytics: analyticsBillPaymentsDashboard.appPageVisitNoResults()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_payment_option: {
                bind: 'analytics-billPayments-footprint-payment-option',
                analytics: analyticsBillPaymentsDashboard.appPageVisitPaymentOption()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_exit_process: {
                bind: 'analytics-billPayments-footprint-exit-process',
                analytics: analyticsBillPaymentsDashboard.appPageVisitExitProcess()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_save_service: {
                bind: 'analytics-billPayments-footprint-save-service',
                analytics: analyticsBillPaymentsDashboard.appPageVisitSaveService()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_no_email: {
                bind: 'analytics-billPayments-site-error-no-email',
                analytics: analyticsBillPaymentsDashboard.appPageViewErrorNoEmail()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error: {
                bind: 'analytics-billPayments-footprint-error',
                analytics: analyticsBillPaymentsDashboard.appPageViewErrorGeneric()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_duplicate_alias: {
                bind: 'analytics-billPayments-footprint-error-duplicate-alias',
                analytics: analyticsBillPaymentsDashboard.appPageViewErrorDuplicateAlias()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_reuse_operation: {
                bind: 'analytics-billPayments-footprint-reuse-operation',
                analytics: analyticsBillPaymentsDashboard.appPageVisitReUseOperation()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_info_not_available: {
                bind: 'analytics-billPayments-footprint-info-not-available',
                analytics: analyticsBillPaymentsDashboard.appPageViewInfoNotAvailable()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_search_service: {
                bind: 'analytics-billPayments-app-page-view-search-service',
                analytics: analyticsBillPaymentsDashboard.appPageViewSearchService()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_invalid_barcode: {
                bind: 'analytics-billPayments-footprint-error-invalid-barcode',
                analytics: analyticsBillPaymentsDashboard.appPageViewBarCodeError()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_invalid_qr: {
                bind: 'analytics-billPayments-footprint-error-invalid-qr',
                analytics: analyticsBillPaymentsDashboard.appPageViewQrCodeError()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_invalid_capture_line: {
                bind: 'analytics-billPayments-footprint-error-invalid-capture-line',
                analytics: analyticsBillPaymentsDashboard.appPageViewErrorCaptureLine()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_invalid_capture_line_amount: {
                bind: 'analytics-billPayments-footprint-error-invalid-capture-line-amount',
                analytics: analyticsBillPaymentsDashboard.appPageViewErrorCaptureLineAmount()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_invalid_amount: {
                bind: 'analytics-billPayments-footprint-error-invalid-amount',
                analytics: analyticsBillPaymentsDashboard.appPageViewErrorInvalidAmount()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_payment_not_made: {
                bind: 'analytics-billPayments-footprint-error-payment-not-made',
                analytics: analyticsBillPaymentsDashboard.appPageVisitPaymentNotMade()
              },
              billPaymentsDashboard_analytics_billPayments_footprint_error_invalid_capture_line_otp: {
                bind: 'analytics-billPayments-footprint-error-invalid-capture-line-otp',
                analytics: analyticsBillPaymentsDashboard.appPageVisitInvalidCaptureLineOtp()
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-operation-registries',
        properties: {
          host,
          native,
          requiredToken,
          cellsConnections: {
            in: {
              [pageName + '_request_operation_registry']: {
                bind: 'postRecoverRegistry'
              }
            },
            out: {
              [pageName + '_operation_request_success']: {
                bind: 'success-on-post-operation-registries-data'
              },
              [pageName + '_operation_request_error']: {
                bind: 'error-on-post-operation-registries-data'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-nativeconnector-native-settings',
        familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              open_setttings_mobile: {
                bind: 'openSetting'
              }
            },
            out: {
              set_open_settings: {
                bind: 'setting-opened',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-controller-bill-payments-home',
        familyPath: '@glomo-web-components/bbva-controller-bill-payments-home',
        render: 'litElement',
        properties: {
          operationalsPage: OPERATIONALS.operationalsPage,
          cellsConnections: {
            in: {
              global_set_app_settings: {
                bind: 'setAppSettingsPayments'
              },
              global_feature_flag_collection_updated: {
                bind: 'updatedPaymentsFlags'
              }
            },
            out: {
              global_feature_flag_activated_bill_taxes: {
                bind: 'bbva-controller-bill-payments-home-activate-bill-taxes'
              },
              global_feature_flag_deactivate_bill_taxes: {
                bind: 'bbva-controller-bill-payments-home-deactivate-bill-taxes'
              },
              global_feature_flag_activated_bill_payments_dashboard: {
                bind: 'bbva-controller-bill-payments-home-activate-bill-payments-dashboard'
              },
              global_feature_flag_deactivate_bill_payments_dashboard: {
                bind: 'bbva-controller-bill-payments-home-deactivate-bill-payments-dashboard'
              },
              global_feature_flag_activated_scheduled_bill_payments: {
                bind: 'bbva-controller-bill-payments-home-activate-scheduled-bill-payments'
              },
              global_feature_flag_deactivate_scheduled_bill_payments: {
                bind: 'bbva-controller-bill-payments-home-deactivate-scheduled-bill-payments'
              },
              global_feature_flag_activated_to_operationals_page: {
                bind: 'bbva-controller-bill-payments-home-activated-bill-payments-home'
              },
              global_feature_flag_deactivate_to_operationals_page: {
                bind: 'bbva-controller-bill-payments-home-deactivate-bill-payments-home'
              },
              global_feature_flag_services: {
                bind: 'bbva-controller-bill-payments-home-set-bill-payments-home-services'
              }
            }
          }
        }
      },
      {
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
          id: 'confirmModalExperienceBillPaymentsDashboard',
          fullHeight: true,
          fixedFooter: true,
          headerType: 'modal-three-level',
          headerText: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-error-title',
          className: 'on-boarding-welcome-alert-manager',
          headerLeftIconAriaLabel: 'padlock',
          cellsConnections: {
            in: {
              bill_payment_aric_fraud_modal_reject: {
                bind: 'open'
              },
              suspected_transaction_reset_operatives: {
                bind: 'close'
              }
            },
            out: {
              bill_payment_modal_aric_send_exit_to_header: {
                bind: 'help-modal-header-right-primary-click',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'confirmModalExperienceBillPaymentsDashboard.slot-content',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-clip-microillustration',
        tag: 'bbva-clip-microillustration',
        render: 'litElement',
        properties: {
          className: 'no-padding u-display--table u-margin--left u-margin-top--0 u-margin--1 u-text--left',
          microillustration: 'error',
          size: 'L'
        }
      },
      {
        zone: 'confirmModalExperienceBillPaymentsDashboard.slot-content',
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
      },
      {
        zone: 'confirmModalExperienceBillPaymentsDashboard.slot-content',
        type: 'UI',
        tag: 'bbva-type-text',
        familyPath: '@bbva-spherica-components/bbva-type-text',
        render: 'litElement',
        properties: {
          className: 'u-margin--1 u-margin-top--0',
          text: 'alert-TRANSFER-ERROR-message-aric-fraud',
          alignment: 'left'
        }
      },
      {
        zone: 'confirmModalExperienceBillPaymentsDashboard.slot-footer',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          className: 'u-display--table u-margin--center u-margin-top--2 u-margin-bottom--2',
          text: 'alert-GENERIC-ERROR-call',
          cellsConnections: {
            out: {
              bill_payment_aric_fraud_call_bbva_line: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-nativeconnector-show-info',
        familyPath: '@glomo-web-components/bbva-nativeconnector-show-info',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              global_open_selector_native: {
                bind: 'nativeListModal'
              }
            },
            out: {
              global_open_selector_native_success: {
                bind: 'show-info-native-list-modal-success'
              }
            }
          }
        }
      }
    ]
  };
  const signWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  signWidgetConnector('bbva-feature-bill-payments-mx');
  const signConnectorOperationRegistries = require('./common/_sign-connector')(config)(base);
  signConnectorOperationRegistries('cells-dm-global-apis-operation-registries', pageName, ['success-on-post-operation-registries-data', 'error-on-post-operation-registries-data']);
  localStorageBillPayments.addOutStorageChannels(base.components, [ 'billPaymens_onboarding' ], config);
  return sphericaPageUtils.spherize(base);
};
