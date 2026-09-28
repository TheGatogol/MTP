'use strict';

module.exports = (CONFIG) => {
  const { appFooter, getLanguage, detailDownloadParams, getLocalCurrency, SPINNERSPHERICA: getSpinnerSpherica } = require('./common/helpers/_utils');
  const pageName = 'lifeInsurance';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const appFooterLifeInsurance = appFooter(CONFIG, pageName);
  const analytics = require('./analytics/_insuranceRemoteBanker')(pageName);
  const {
    nativeIos = false,
    native = false,
    globalServices: {
      host, requiredToken = 'tsec',
      versions: {
        accountsV1,
        cardsV1,
        financialOverviewApiVersion,
        businessDocumentsGenerateV0,
        insurancesApiV1,
        insurancesQuotationsApiV1
      }
    }
  } = CONFIG;
  let base = {};

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      hasFooter: !!appFooterLifeInsurance,
      headerFixed: true,
      topOnConfirm: true,
      animationType: 'fade',
      disableEdgeSwipe: true,
      showConfirmInManualScroll: true,
      iOSFixedHeader: nativeIos,
      extraHeaderClass: 'dark-blue-bg',
      footerFixed: true,
      handleStoppedScroll: true,
      preventScrollWithOverlay: true
    },
    propertiesSpherica: {
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`
    }
  };

  const lifeInsuranceRemoteBanker = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/insurance-origination-oc-life-insurance-remote-banker-mx',
    tag: 'insurance-origination-oc-life-insurance-remote-banker-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      otpId: pageName,
      language: getLanguage(),
      iOSFixedHeader: nativeIos,
      currency: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      financialOverviewApiVersion: financialOverviewApiVersion,
      accountsApiVersion: accountsV1,
      cardsApiVersion: cardsV1,
      insurancesQuotationsApiVersion: insurancesQuotationsApiV1,
      insurancesApiVersion: insurancesApiV1,
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          sign_modal_close_reset: {
            bind: 'clearLoader'
          }
        },
        out: {
          life_insurance_remote_banker_exit: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-remote-banker-exit',
            backStep: true
          },
          life_insurance_remote_banker_go_to_dashboard: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-remote-banker-exit-go-to-dashboard',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          life_insurance_remote_banker_open_health_app: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-open-financial-health-app'
          },
          life_insurance_remote_banker_share_receipt: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-share-receipt'
          },
          life_insurance_remote_banker_contact_advisor: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-contact-advisor',
            link: {
              page: 'equityAssistance',
              params: {
                productId: 'productId'
              }
            }
          },
          life_insurance_remote_banker_open_terms_and_conditions_pdf: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-open-terms-and-conditions-pdf'
          },
          life_insurance_remote_banker_quotation_success: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-insurance-quotations-success'
          },
          life_insurance_remote_banker_coverage_details: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-show-coverage-details'
          },
          life_insurance_remote_banker_next_step: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-next-step-payment-method'
          },
          life_insurance_remote_banker_step_payment_method: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-active-step-1'
          },
          life_insurance_remote_banker_step_terms_and_conditions: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-active-step-2'
          },
          life_insurance_remote_banker_step_confirmation: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-all-steps-completed'
          },
          life_insurance_remote_banker_insurance_create: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-insurance-created'
          },
          life_insurance_remote_banker_error_al_ready_exists: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-insurance-quotations-error-resourceAlreadyExists'
          },
          life_insurance_remote_banker_error_date_interval_out_of_range: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-insurance-quotations-error-dateIntervalOutOfRange'
          },
          life_insurance_remote_banker_error_on_service: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-insurance-quotations-error-communicationError'
          },
          life_insurance_remote_banker_error_on_funds: {
            bind: 'insurance-origination-oc-life-insurance-remote-banker-mx-insufficient-balance-footer-link-click'
          }
        },
        params: {
          quotationId: 'quotationId',
          advisorId: 'adviceId'
        }
      }

    }
  };

  const remoteBankerController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-oc-life-insurance-remote-banker-mx',
    familyPath: '@glomo-web-components/bbva-controller-oc-life-insurance-remote-banker-mx',
    render: 'litElement',
    properties: {
      hostServices: host,
      apiVersion: businessDocumentsGenerateV0,
      headerTitleModalPdf: 'bbva-feature-oc-life-insurance-remote-banker-mx-generic-modal-header-text',
      detailDownloadConfig: detailDownloadParams,
      cellsConnections: {
        in: {
          life_insurance_remote_banker_open_terms_and_conditions_pdf: {
            bind: 'generatePdfDocument'
          },
          life_insurance_remote_banker_success_on_open_pdf: {
            bind: 'documentOpenHandler'
          },
          life_insurance_remote_banker_error_on_open_pdf: {
            bind: 'documentOpenHandler'
          },
          life_insurance_remote_banker_share_receipt: {
            bind: 'shareReceipt'
          },
          life_insurance_remote_banker_open_health_app: {
            bind: 'openFinancialHealthApp'
          },
          life_insurance_remote_banker_quotation_success: {
            bind: 'handleQuotationData'
          },
          life_insurance_remote_banker_coverage_details: {
            bind: 'handleCoverageDetails'
          },
          life_insurance_remote_banker_next_step: {
            bind: 'handleContinue'
          },
          life_insurance_remote_banker_step_payment_method: {
            bind: 'handleStep2'
          },
          life_insurance_remote_banker_step_terms_and_conditions: {
            bind: 'handleStep3'
          },
          life_insurance_remote_banker_step_confirmation: {
            bind: 'handleStep4'
          },
          life_insurance_remote_banker_insurance_create: {
            bind: 'handleInsurancesCreateSuccess'
          },
          life_insurance_remote_banker_error_al_ready_exists: {
            bind: 'handleAlreadyContracted'
          },
          life_insurance_remote_banker_error_date_interval_out_of_range: {
            bind: 'handleQuotationError'
          },
          life_insurance_remote_banker_error_on_service: {
            bind: 'handleServiceError'
          },
          life_insurance_remote_banker_error_on_funds: {
            bind: 'handleInsufficientBalance'
          }
        },
        out: {
          life_insurance_remote_banker_open_pdf: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-business-document-open'
          },
          life_insurance_remote_banker_set_info_share: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-set-info-to-share'
          },
          life_insurance_remote_banker_set_operative_receipt: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-set-operative-receipt'
          },
          life_insurance_remote_banker_open_market: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-open-app'
          },
          life_insurance_remote_banker_app_page_visit: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-app-page-visit'
          },
          life_insurance_remote_banker_event_build: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-analytics'
          },
          open_control_veil: {
            bind: 'show-loader'
          },
          close_control_veil: {
            bind: 'clear-loader'
          }
        }
      }
    }
  };

  const analyticManagerInsuranceRemoteBanker = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-insurance-remote-banker',
    familyPath: '@glomo-web-components/bbva-analyticmanager-insurance-origination',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_from_deep_link_from_notification_detail: {
            bind: 'getNotificationData'
          },
          life_insurance_remote_banker_app_page_visit: {
            bind: 'appPageVisit'
          },
          life_insurance_remote_banker_event_build: {
            bind: 'eventBuild'
          },
          sign_modal_open: {
            bind: 'singConnectorEvent'
          }
        },
        out: {
          life_insurance_remote_banker_app_on_click_start: {
            bind: 'insurance-remote-banker-analytics-app-on-click-start',
            analytics: analytics.appOnClickStat('remoteBankerOCLife')
          },
          life_insurance_remote_banker_app_on_page_visit: {
            bind: 'insurance-remote-banker-analytics-app-page-visit',
            analytics: analytics.appPageVisit('remoteBankerOCLife')
          },
          life_insurance_remote_banker_app_started: {
            bind: 'insurance-remote-banker-analytics-app-started',
            analytics: analytics.appStarted('remoteBankerOCLife')
          },
          life_insurance_remote_banker_app_step_payment_method: {
            bind: 'insurance-remote-banker-analytics-app-step-2',
            analytics: analytics._getAppStep('appStep2', 'remoteBankerOCLife')
          },
          life_insurance_remote_banker_app_step_terms_and_conditions: {
            bind: 'insurance-remote-banker-analytics-app-step-3',
            analytics: analytics._getAppStep('appStep3', 'remoteBankerOCLife')
          },
          life_insurance_remote_banker_app_step_confirmation: {
            bind: 'insurance-remote-banker-analytics-app-step-4',
            analytics: analytics._getAppStep('appStep4', 'remoteBankerOCLife')
          },
          life_insurance_remote_banker_app_step_otp: {
            bind: 'insurance-remote-banker-analytics-app-step-5',
            analytics: analytics._getAppStep('appStep5', 'remoteBankerOCLife')
          },
          life_insurance_remote_banker_app_completed: {
            bind: 'insurance-remote-banker-analytics-app-completed',
            analytics: analytics.appCompleted('remoteBankerOCLife')
          },
          life_insurance_remote_banker_error_contracted: {
            bind: 'insurance-remote-banker-analytics-error-contracted',
            analytics: analytics._getErrors('errorInsuranceContracted', 'remoteBankerOCLife.contractedInsurance.error')
          },
          life_insurance_remote_banker_error_quotation: {
            bind: 'insurance-remote-banker-analytics-error-quotation',
            analytics: analytics._getErrors('errorExpiredQuote', 'remoteBankerOCLife.expiredQuote.error')
          },
          life_insurance_remote_banker_error_on_service_analytics: {
            bind: 'insurance-remote-banker-analytics-error-service',
            analytics: analytics.errorService('remoteBankerOCLife.serviceError.error')
          },
          life_insurance_remote_banker_error_on_funds_analytics: {
            bind: 'insurance-remote-banker-analytics-error-funds',
            analytics: analytics.errorLink('remoteBankerOCLife.insufficientFunds.error')
          }
        }
      }
    }
  };

  const cellsMobileActionLauncher = {
    zone: 'app__main',
    tag: 'cells-mobile-action-launcher',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          life_insurance_remote_banker_open_market: {
            bind: 'openMarket'
          }
        },
        out: {
          apps_success_open_market_close_veil: {
            bind: 'success-open-market'
          }
        }
      }
    }
  };

  const openDocument = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-open-document',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          life_insurance_remote_banker_open_pdf: {
            bind: 'openByUrl'
          }
        },
        out: {
          life_insurance_remote_banker_success_on_open_pdf: {
            bind: 'open-document-open-by-url-success'
          },
          life_insurance_remote_banker_error_on_open_pdf: {
            bind: 'open-document-open-by-url-error'
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mxGlobal',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          life_insurance_remote_banker_set_info_share: {
            bind: 'setProperties'
          },
          life_insurance_remote_banker_set_operative_receipt: {
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
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  base = {
    hash: 'life-insurance',
    currentPage: {
      url: '/life-insurance'
    },
    pages,
    template,
    components: [
      getSpinnerSpherica(CONFIG),
      lifeInsuranceRemoteBanker,
      analyticManagerInsuranceRemoteBanker,
      remoteBankerController,
      cellsShareGenericReceipt,
      openDocument,
      cellsMobileActionLauncher
    ]
  };

  const signWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signWidgetConnector('insurance-origination-oc-life-insurance-remote-banker-mx', {
    widgetId: 'lifeInsurance'
  });

  return base;
};
