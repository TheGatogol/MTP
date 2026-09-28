'use strict';
module.exports = (config) => {
  const {
    globalServices: {
      host,
      publicSettingsHost,
      publicSettingsId,
      requiredToken = 'tsec',
      versions: {
        accountsV1,
        customerContactDetailsV1,
        investmentApiVersion,
        publicSettings,
        investmentFundsApiVersion
      }
    },
    consumerId, nativeIos: isNativeIos = false, native
  } = config;
  const _localStorage = require('./common/_local-storage');
  const { SPINNERSPHERICA: spinner, getLocalCurrency, getLanguage, useNames, headerHeightMinimum } = require('./common/helpers/_utils.js');
  const { controllerCallMeBack, analyticsCallMeBack } = require('./common/_redirectCallMeBack.js');
  const analyticsFunds = require('./analytics/_fundsHiringOrigination.js')(config);
  const pageName = 'fundsHiringOrigination';
  const pages = require('./common/_pages.js')(config)(pageName);
  const { minFundsAmounts } = require('./common/fundHelpers/_fundList');
  const investmentFundProductId = 'EJOP';
  const cmbConfig = {
    operativeName: pageName,
    configEntryPoints: {
      showInHeader: true
    },
    onlyCallMeBack: true,
    recoverySettings: true,
    lastStep: 7,
    onlyCallMeBackRemoteManager: true,
    useFeatureFlag: true,
    scheduleNotAllowed: true
  };
  const cmbConfigAnalytics = {
    operativeName: pageName,
    steps: {
      1: '1 beneficios',
      2: '2 seleccionar fondo de inversion',
      3: '3 detalle de la inversion',
      4: '4 importe',
      5: '5 nombre de la inversion',
      6: '6 terminos y condiciones',
      7: '7 confirmacion'
    },
    levels: {
      1: 'fondos flujo unificado'
    }
  };
  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      headerFixed: true,
      drawerWidth: '100%',
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'dark-blue-bg ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      headerHeight: headerHeightMinimum,
      animationType: 'verticalUp',
      disableScrollLock: true,
      cellsConnections: {
        in: {
          funds_hiring_origination_update_input: {
            bind: 'recalculateStatusBarTop'
          }
        }
      }
    }
  };
  const controllerCmb = controllerCallMeBack(cmbConfig);
  const analyticsCmb = analyticsCallMeBack(cmbConfigAnalytics);
  const fundsHiringOrigination = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/fund-origination-oc-fund-mx',
    tag: 'fund-origination-oc-fund-mx',
    render: 'litElement',
    properties: {
      host,
      publicSettingsHost,
      requiredToken,
      consumerId,
      publicSettingsKey: 'app_settings_glomo',
      publicSettingsId,
      native,
      requiredTokenOtp: true,
      iOSFixedHeader: isNativeIos,
      currencyCode: getLocalCurrency(),
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      country: 'mx',
      pageName,
      accountApiVersion: accountsV1,
      customersContactDetailApiVersion: customerContactDetailsV1,
      accountsParticipantsApiVersion: accountsV1,
      investmentFundsSimulateApiVersion: investmentApiVersion,
      publicSettingsApiVersion: publicSettings,
      investmentFundsApiVersion: investmentFundsApiVersion,
      investmentFundProductId,
      otpId: pageName,
      minFundsAmounts,
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          funds_hiring_origination__call_me_back_change_header_tooltip_status: {
            bind: 'changeHeaderCallMeBackTooltipStatus'
          },
          funds_hiring_origination__call_me_back_set_header_timeout_tooltip: {
            bind: 'getTimeTooltip'
          },
          global_call_me_back_set_header_configuration: {
            bind: 'indicatorCallMeBack'
          },
          global_login_success: {
            bind: 'setCustomerId'
          },
          global_user_id: {
            bind: 'setCustomerIds'
          },
          fund_origination_oc_fund_mx_clear_loader_channel: {
            bind: 'closeVeil'
          },
          global_open_document_url_success: {
            bind: 'closeVeil'
          },
          __bridge_page_fundsHiringOrigination: {
            bind: 'getKeyStorage'
          },
          global_storage_get_funds_hiring_onboarding_error: {
            bind: 'getLocalStorageErrorResponse'
          },
          global_storage_get_funds_hiring_onboarding_success: {
            bind: 'getLocalStorageSuccessResponse'
          },
          global_client_id: {
            bind: 'handleLoginData'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          sign_modal_cancelled: {
            bind: 'showMultistepModal'
          },
          cells_to_native_modal_closed: {
            bind: 'showMultistepModal'
          },
          sign_modal_close_reset: {
            bind: 'showMultistepModal'
          },
          global_set_app_settings: {
            bind: 'setAppSettings'
          }
        },
        out: {
          funds_hiring_origination__call_me_back_init_header_configuration: {
            bind: 'call-me-back-header-click'
          },
          funds_hiring_origination__call_me_back_go_next_step: {
            bind: 'fund-origination-oc-fund-mx-call-me-back-go-next-step'
          },
          global_retargeting_send_information_update: {
            bind: 'fund-origination-oc-fund-mx-exit-page'
          },
          global_retargeting_form_submission: {
            bind: 'fund-origination-oc-fund-mx-dm-init-process-complete'
          },
          global_retargeting_go_next_step_continue: {
            bind: 'increment-current-step-retargeting'
          },
          global_retargeting_invest_fund: {
            bind: 'fund-origination-oc-fund-mx-fund-detail-select-fund'
          },
          global_retargeting_invest_amount: {
            bind: 'fund-origination-oc-fund-mx-send-simulation-data'
          },
          global_retargeting_contracted_product: {
            bind: 'fund-origination-oc-fund-mx-dm-investment-complete'
          },
          fund_origination_oc_fund_mx_exit: {
            bind: 'fund-origination-oc-fund-mx-exit-page',
            backStep: true
          },
          fund_origination_oc_fund_mx_onboarding_analytic: {
            bind: 'fund-origination-oc-fund-mx-onboarding-slide'
          },
          fund_origination_oc_fund_mx_init_page_analytic: {
            bind: 'fund-origination-oc-fund-mx-dm-init-process-complete'
          },
          fund_origination_oc_fund_mx_app_started_analytic: {
            bind: 'fund-origination-oc-fund-mx-init-button-click'
          },
          fund_origination_oc_fund_mx_app_started_document_analytic: {
            bind: 'fund-origination-oc-fund-mx-init-document-click'
          },
          fund_origination_oc_fund_mx_app_step_list_fund_analytic: {
            bind: 'fund-origination-oc-fund-mx-init-button-click'
          },
          fund_origination_oc_fund_mx_interaction_link_analytic: {
            bind: 'fund-origination-oc-fund-mx-filter-selected'
          },
          fund_origination_oc_fund_mx_app_step_selected_fund_analytic: {
            bind: 'fund-origination-oc-fund-mx-list-found-fund-detail'
          },
          fund_origination_oc_fund_mx_external_link_analytic: {
            bind: 'fund-origination-oc-fund-mx-list-file-document-click'
          },
          found_origination_oc_found_detail_help_click: {
            bind: 'fund-origination-oc-fund-mx-open-help-modal'
          },
          found_origination_oc_found_detail_see_accounts: {
            bind: 'fund-origination-oc-fund-mx-see-all-accounts'
          },
          fund_origination_oc_fund_mx_amount_step: {
            bind: 'fund-origination-oc-fund-mx-next-step-selected-amount'
          },
          found_origination_oc_found_detail_dm: {
            bind: 'fund-origination-oc-fund-mx-dm-fund-detail'
          },
          fund_origination_oc_fund_mx_selected_account: {
            bind: 'fund-origination-oc-fund-mx-list-accounts-selected-account'
          },
          fund_origination_oc_fund_mx_selected_amount: {
            bind: 'fund-origination-oc-fund-mx-fund-amount-selected'
          },
          found_origination_oc_found_detail_simulation: {
            bind: 'fund-origination-oc-fund-mx-terms-and-conditions-complete'
          },
          otp_sing_funds_hiring_origination: {
            bind: 'signature-required-first-step-dm'
          },
          found_origination_oc_status_completed: {
            bind: 'fund-origination-oc-fund-mx-dm-investment-complete'
          },
          fund_origination_oc_fund_mx_terms_and_conditions_step_analytic: {
            bind: 'fund-origination-oc-fund-mx-fund-name-fund-name-change'
          },
          fund_origination_oc_fund_mx_interaction_accept_all_terms_analytic: {
            bind: 'fund-origination-oc-fund-mx-terms-and-conditions-accept-all-terms'
          },
          found_origination_oc_fund_mx_click_button_documents_success: {
            bind: 'button-row-item-button-1-click'
          },
          found_origination_oc_fund_mx_click_button_share: {
            bind: 'button-row-item-button-2-click'
          },
          found_origination_oc_fund_mx_click_banner_success: {
            bind: 'fund-origination-oc-fund-mx-success-navigate-mx-oc-fund'
          },
          fund_origination_oc_fund_mx_blocking_case: {
            bind: 'fund-origination-oc-fund-mx-blocking-case'
          },
          open_upgrade_hybrid: {
            bind: 'fund-origination-oc-fund-mx-go-to-remove-limit',
            link: {
              page: 'upgradeCustomer',
              skipHistory: true
            }
          },
          fund_origination_oc_fund_mx_blocking_case_internal_link_account_level: {
            bind: 'fund-origination-oc-fund-mx-page-default'
          },
          funds_origination_oc_fund_mx_modal_error: {
            bind: 'fund-origination-oc-fund-mx-dm-error-modal-config'
          },
          fund_origination_oc_fund_mx_request_pdf_channel: {
            bind: 'fund-origination-oc-fund-mx-document-click'
          },
          fund_origination_oc_fund_mx_request_notification_send_channel: {
            bind: 'fund-origination-oc-fund-mx-dm-receipt-config'
          },
          fund_origination_oc_fund_mx_config_contract_receipt_channel: {
            bind: 'fund-origination-oc-fund-mx-success-config-contract-receipt'
          },
          fund_origination_oc_fund_mx_set_config_receipt_channel: {
            bind: 'fund-origination-oc-fund-mx-success-set-config-receipt'
          },
          fund_origination_oc_fund_mx_share_receipt_channel: {
            bind: 'fund-origination-oc-fund-mx-success-share-receipt-tag'
          },
          fund_origination_oc_fund_mx_success_pdf_base64_channel: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-open-pdf-base64'
          },
          global_get_from_storage: {
            bind: 'fund-origination-oc-fund-mx-get-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'fund-origination-oc-fund-mx-set-from-local-storage'
          },
          funds_hiring_origination_update_input: {
            bind: 'form-field-input-blur'
          }
        }
      }
    }
  };

  const businessDocumentsApi = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          fund_origination_oc_fund_mx_request_pdf_base64_channel: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          fund_origination_oc_fund_mx_clear_loader_channel: {
            bind: 'error-on-post-business-documents'
          },
          fund_origination_oc_fund_mx_success_pdf_base64_channel: {
            bind: 'post-business-documents-success'
          }
        }
      }
    }
  };

  const receipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      sharedReceiptStyles: {
        infoIcon: {
          'display': 'block',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'width': '1.75rem'
        }
      },
      cellsConnections: {
        in: {
          oc_funds_origination_share_receipt_operative: {
            bind: 'captureReceipt'
          },
          fund_origination_oc_fund_mx_config_contract_receipt_channel: {
            bind: 'setProperties'
          },
          fund_origination_oc_fund_mx_set_config_receipt_channel: {
            bind: 'captureReceipt'
          },
          oc_funds_origination_share_receipt_result: {
            bind: 'result'
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
          },
          global_share_receipt_error_modal: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const lifecycle = {
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
          __bridge_page_fundsHiringOrigination: {
            bind: 'init'
          }
        },
        out: {
          init_page: {
            bind: 'init-page'
          },
          fund_hiring_origination_reset_page: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          global_call_me_back_initialize: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const ocFundAnalytics = {
    zone: 'app__main',
    familyPath: '@glomo-web-components/bbva-analyticmanager-fund-origination',
    tag: 'bbva-analyticmanager-fund-origination-mx',
    type: 'DM',
    render: 'litElement',
    properties: {
      page: pageName,
      signatureTypes: require('./analytics/common/_constants').SIGNATURE_TYPES,
      dictionaryData: {
        appStarted: {
          document: 'ver documento',
          button: 'vamos a invertir'
        },
        interaction: {
          acceptTerms: 'aceptar todos los terminos',
          CORTO_PLAZO: 'corto plazo',
          LARGO_PLAZO: 'largo plazo',
          TODOS: 'todos'
        },
        blockingCase: {
          INVALID_ACCOUNT_LEVEL: 'limite de cuenta',
          ACCOUNT_NOT_ACTIVATED: 'cuenta digital',
          GO_TO_BRANCH: 'cuenta digital',
          INSUFFICIENT_BALANCE: 'saldo insuficiente',
          REMOVE_LIMIT: 'limite de cuenta'
        },
        blockingCaseInternalLink: {
          REMOVE_LIMIT: 'ampliar cuenta'
        },
        errorModal: {
          EXIT_OPERATION_NOT_AVAILABLE: 'error operacion no realizada',
          EXIT_COMMON_ERROR: 'error informacion no disponible',
          COMMON_ERROR_SHORT: 'error no se cargo la informacion',
          EXIT_OPERATION_NOT_AVAILABLE_ONLY_ONE_TRY: 'error operacion no realizada',
          OPERATION_NOT_AVAILABLE_OTP: 'error operacion no realizada'
        },
        segmentProfile: [
          'cuenta digital',
          'saldo insuficiente',
          'limite de cuenta'
        ],
        internalLink: {
          banner: 'ver mas fondos'
        },
        externalLink: [
          'ver documentos',
          'compartir comprobante'
        ],
        statusInvestment: {
          pending: 'en revision',
          success: 'contratado'
        },
        typeFunds: [{key: 'deuda', value: 'fondos deuda'}, {key: 'renta', value: 'fondos renta variable'}],
        typeFundDefault: 'fondos multiestrategia'
      },
      config: {
        steps: {
          1: 'beneficios',
          2: 'seleccionar fondo de inversion',
          3: 'detalle de la inversion',
          4: 'importe',
          5: 'nombre de la inversion',
          6: 'terminos y condiciones',
          7: 'confirmacion',
          8: 'otp',
          9: 'pagina exitosa'
        },
        onboarding: 'onboarding'
      },
      modalConfig: {
        performanceLabel: 'rendimiento historico',
        priceLabel: 'precio por titulo',
        riskLabel: 'riesgo',
        availabilityLabel: 'liquidez',
        liquidityType: 'tipo de plazo',
        serieLabel: 'serie',
        typeFund: 'tipo de fondo',
        associateAccount: 'cuenta asociada'
      },
      cellsConnections: {
        in: {
          fund_origination_oc_fund_mx_onboarding_analytic: {
            bind: 'onboardingPageVisit'
          },
          fund_origination_oc_fund_mx_init_page_analytic: {
            bind: 'fireAppPageVisit'
          },
          fund_origination_oc_fund_mx_app_started_analytic: {
            bind: 'fireAppStarted'
          },
          fund_origination_oc_fund_mx_app_started_document_analytic: {
            bind: 'fireAppStarted'
          },
          fund_origination_oc_fund_mx_app_step_list_fund_analytic: {
            bind: 'fireAppStepListFund'
          },
          fund_origination_oc_fund_mx_interaction_link_analytic: {
            bind: 'fireInteractionLink'
          },
          fund_origination_oc_fund_mx_app_step_selected_fund_analytic: {
            bind: 'fireAppStepSelectedFund'
          },
          found_origination_oc_fund_mx_click_button_documents_success: {
            bind: 'fireExternalLink'
          },
          found_origination_oc_fund_mx_click_button_share: {
            bind: 'fireExternalLink'
          },
          fund_origination_oc_fund_mx_external_link_analytic: {
            bind: 'fireExternalLink'
          },
          found_origination_oc_found_detail_help_click: {
            bind: 'pageLevel3'
          },
          found_origination_oc_found_detail_see_accounts: {
            bind: 'pageLevel3'
          },
          found_origination_oc_found_detail_dm: {
            bind: 'infoFundData'
          },
          fund_origination_oc_fund_mx_selected_account: {
            bind: 'analyticsFireStepImport'
          },
          fund_origination_oc_fund_mx_amount_step: {
            bind: 'analyticsFireStepImport'
          },
          fund_origination_oc_fund_mx_selected_amount: {
            bind: 'fireAnalyticAmountSelected'
          },
          found_origination_oc_found_detail_simulation: {
            bind: 'fireAnalyticConfirmation'
          },
          found_origination_oc_status_completed: {
            bind: 'fireInvestmentComplete'
          },
          fund_origination_oc_fund_mx_terms_and_conditions_step_analytic: {
            bind: 'fireTermsAndConditionsStep'
          },
          fund_origination_oc_fund_mx_interaction_accept_all_terms_analytic: {
            bind: 'fireInteractionLink'
          },
          otp_sing_funds_hiring_origination: {
            bind: 'fireOtpStep'
          },
          found_origination_oc_fund_mx_click_banner_success: {
            bind: 'fireInternalLink'
          },
          fund_origination_oc_fund_mx_blocking_case: {
            bind: 'fireBlockingCase'
          },
          fund_origination_oc_fund_mx_blocking_case_internal_link: {
            bind: 'fireInternalLinkBlockingCase'
          },
          fund_origination_oc_fund_mx_blocking_case_internal_link_account_level: {
            bind: 'fireInternalLinkBlockingCase'
          },
          funds_origination_oc_fund_mx_modal_error: {
            bind: 'fireErrorService'
          }
        },
        out: {
          analytics_onboarding_step: {
            bind: 'analytics-onboarding-step',
            analytics: analyticsFunds.appPageVisitOnboarding()
          },
          analytics_app_page_visit: {
            bind: 'analytics-app-page-visit',
            analytics: analyticsFunds.appPageVisit()
          },
          analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: analyticsFunds.appStarted()
          },
          analytics_app_list_fund_step: {
            bind: 'analytics-app-step-list-fund',
            analytics: analyticsFunds.getAppStepListFund()
          },
          analytics_app_selected_fund_step: {
            bind: 'analytics-app-step-selected-fund',
            analytics: analyticsFunds.getAppStepSelectedFund()
          },
          analytics_interaction_link: {
            bind: 'analytics-interaction-link',
            analytics: analyticsFunds.interactionLink()
          },
          analytics_internal_link: {
            bind: 'analytics-internal-link',
            analytics: analyticsFunds.internalLink()
          },
          analytics_external_link: {
            bind: 'analytics-external-link',
            analytics: analyticsFunds.externalLink()
          },
          analytics_page_level_3: {
            bind: 'analytics-modal-level-3',
            analytics: analyticsFunds.modalsVisit()
          },
          analytics_funds_hiring: {
            bind: 'analytics-funds-hiring',
            analytics: analyticsFunds.getAppStepAmountFund()
          },
          analytics_amount_selected: {
            bind: 'analytics-amount-selected',
            analytics: analyticsFunds.getAppStepNameFund()
          },
          analytics_confirmation: {
            bind: 'analytics-confirmation',
            analytics: analyticsFunds.getAppStepConfirmation()
          },
          analytics_completed: {
            bind: 'analytics-investment-complete',
            analytics: analyticsFunds.getAppStepCompleted()
          },
          analytics_app_step_terms_and_conditions: {
            bind: 'analytics-app-step-terms-and-conditions',
            analytics: analyticsFunds.getTermsAndConditionsStep()
          },
          analytics_app_step_otp: {
            bind: 'analytics-otp-step',
            analytics: analyticsFunds.getOtpStep()
          },
          analytics_blocking_case: {
            bind: 'analytics-blocking-case',
            analytics: analyticsFunds.blockingCase()
          },
          analytics_internal_link_blocking_case: {
            bind: 'analytics-internal-link-blocking-case',
            analytics: analyticsFunds.internalLinkBlockingCase()
          },
          analytics_error_service: {
            bind: 'analytics-error-service',
            analytics: analyticsFunds.modalErrors()
          }
        }
      }
    }
  };

  const controller = {
    zone: 'app__main',
    familyPath: '@glomo-web-components/bbva-controller-fund-origination-oc-fund-mx',
    tag: 'bbva-controller-fund-origination-oc-fund-mx',
    type: 'DM',
    render: 'litElement',
    properties: {
      host,
      native,
      isNativeIos,
      requiredToken,
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'userDetail'
          },
          fund_origination_oc_fund_mx_request_pdf_channel: {
            bind: 'requestDocument'
          },
          fund_origination_oc_fund_mx_request_notification_send_channel: {
            bind: 'postNotificationSend'
          },
          fund_origination_oc_fund_mx_success_pdf_base64_channel: {
            bind: 'successPostBusinessDocuments'
          }
        },
        out: {
          fund_origination_oc_fund_mx_request_pdf_base64_channel: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-request-pdf-base64'
          },
          fund_origination_oc_fund_mx_clear_loader_channel: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-clear-loader'
          },
          global_open_document_url: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-open-pdf'
          },
          global_open_document_base64: {
            bind: 'bbva-controller-fund-origination-oc-fund-mx-open-pdf-base64'
          }
        }
      }
    }
  };

  const base = {
    hash: 'funds-hiring-origination',
    currentPage: {
      url: '/funds-hiring-origination'
    },
    pages,
    template,
    components: [
      fundsHiringOrigination,
      controllerCmb,
      receipt,
      ocFundAnalytics,
      controller,
      businessDocumentsApi,
      analyticsCmb,
      lifecycle,
      spinner(config)
    ]
  };
  _localStorage.addOutStorageChannels(base.components, ['funds_hiring_onboarding', 'call_me_back'], config);
  const signConnector = require('./common/_widget-sign-connector.js')(config)(base);
  signConnector('fund-origination-oc-fund-mx');
  return base;
};
