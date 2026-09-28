'use strict';

module.exports = (CONFIG) => {
  const { appFooter, getLanguage, detailDownloadParams, getLocalCurrency, SPINNERSPHERICA: getSpinnerSpherica } = require('./common/helpers/_utils');
  const pageName = 'carInsurance';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const appFooterCarInsurance = appFooter(CONFIG, pageName);
  const analytics = require('./analytics/_insuranceRemoteBanker')(pageName);
  const {
    nativeIos = false,
    native = false,
    phoneNumberSAC,
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

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      hasFooter: !!appFooterCarInsurance,
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

  const carInsuranceRemoteBanker = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/insurance-origination-oc-car-insurance-remote-banker-mx',
    tag: 'insurance-origination-oc-car-insurance-remote-banker-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      otpId: pageName,
      language: getLanguage(),
      iOSFixedHeader: nativeIos,
      financialOverviewApiVersion: financialOverviewApiVersion,
      accountsApiVersion: accountsV1,
      cardsApiVersion: cardsV1,
      insurancesQuotationsApiVersion: insurancesQuotationsApiV1,
      insurancesApiVersion: insurancesApiV1,
      evadeServiceLaunch: true,
      insuranceType: 'VEHICLE_INSURANCE',
      customerServiceCenter: phoneNumberSAC,
      cellsConnections: {
        in: {
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          sign_modal_close_reset: {
            bind: 'clearLoader'
          }
        },
        out: {
          car_insurance_remote_banker_exit: {
            bind: 'car-insurance-remote-banker-leave-hiring-modal-button-click',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          car_insurance_remote_banker_share_receipt: {
            bind: 'car-insurance-remote-banker-success-page-share-receipt'
          },
          car_insurance_remote_banker_open_terms_and_conditions_pdf: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-open-document-terms-and-conditions'
          },
          car_insurance_remote_bankerquotations_error: {
            bind: 'car-insurance-remote-banker-quotations-errors-modal-close',
            backStep: true
          },
          car_insurance_remote_banker_insurances_success: {
            bind: 'car-insurance-remote-banker-success-page-exit',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          car_insurance_remote_banker_insurances_error: {
            bind: 'car-insurance-remote-banker-insurances-errors-modal-close',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true
            }
          },
          car_insurance_remote_banker_common_error_exit: {
            bind: 'car-insurance-remote-banker-common-errors-modal-exit',
            backStep: true
          },
          car_insurance_remote_banker_contact_advisor_quotations_error: {
            bind: 'car-insurance-remote-banker-quotations-errors-modal-contact-advisor',
            link: {
              page: 'equityAssistance',
              params: {
                productId: 'productId'
              }
            }
          },
          car_insurance_remote_banker_contact_advisor_insurance_error: {
            bind: 'car-insurance-remote-banker-insurances-errors-modal-contact-advisor',
            link: {
              page: 'equityAssistance',
              params: {
                productId: 'productId'
              }
            }
          },
          car_insurance_remote_banker_quotations_success: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-dm-complete-mapped-data'
          },
          car_insurance_remote_banker_show_coverage_details: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-car-insurance-remote-banker-custom-secure-content-show-coverage-details'
          },
          car_insurance_remote_banker_next_step: {
            bind: 'car-insurance-remote-banker-custom-secure-content-btn-continue'
          },
          car_insurance_remote_banker_step_payment_method: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-car-insurance-remote-banker-contract-page-active-step-2'
          },
          car_insurance_remote_banker_step_terms_and_conditions: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-car-insurance-remote-banker-contract-page-active-step-3'
          },
          car_insurance_remote_banker_step_confirmation: {
            bind: 'car-insurance-terms-and-conditions-content-go-summary'
          },
          car_insurance_remote_banker_insurance_create: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-dm-insurances-create-success'
          },
          car_insurance_remote_banker_error_al_ready_exists: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-dm-quotations-resource-already-exists-error'
          },
          car_insurance_remote_banker_error_date_interval_out_of_range: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-dm-quotations-date-out-of-range-error'
          },
          car_insurance_remote_banker_error_on_service: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-dm-insurances-create-error'
          },
          car_insurance_remote_banker_error_on_funds: {
            bind: 'insurance-origination-oc-car-insurance-remote-banker-mx-car-insurance-remote-banker-quotations-errors-modal-insufficient-balance-error'
          }
        },
        params: {
          insurancesQuotationId: 'quotationId',
          adviceId: 'adviceId'
        }
      }
    }
  };

  const remoteBankerController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-oc-car-insurance-remote-banker-mx',
    familyPath: '@glomo-web-components/bbva-controller-oc-car-insurance-remote-banker-mx',
    render: 'litElement',
    properties: {
      hostServices: host,
      apiVersion: businessDocumentsGenerateV0,
      headerTitleModalPdf: 'car-insurance-remote-banker-success-page-policy-title',
      detailDownloadConfig: detailDownloadParams,
      cellsConnections: {
        in: {
          car_insurance_remote_banker_open_terms_and_conditions_pdf: {
            bind: 'generatePdfDocument'
          },
          car_insurance_remote_banker_success_on_open_pdf: {
            bind: 'documentOpenHandler'
          },
          car_insurance_remote_banker_error_on_open_pdf: {
            bind: 'documentOpenHandler'
          },
          car_insurance_remote_banker_share_receipt: {
            bind: 'shareReceipt'
          },
          car_insurance_remote_banker_quotations_success: {
            bind: 'handleQuotationData'
          },
          car_insurance_remote_banker_show_coverage_details: {
            bind: 'handleCoverageDetails'
          },
          car_insurance_remote_banker_step_payment_method: {
            bind: 'handleStep2'
          },
          car_insurance_remote_banker_step_terms_and_conditions: {
            bind: 'handleStep3'
          },
          car_insurance_remote_banker_step_confirmation: {
            bind: 'handleStep4'
          },
          car_insurance_remote_banker_insurance_create: {
            bind: 'handleInsurancesCreateSuccess'
          },
          car_insurance_remote_banker_error_al_ready_exists: {
            bind: 'handleErrorAlreadyExists'
          },
          car_insurance_remote_banker_error_date_interval_out_of_range: {
            bind: 'handleQuotationError'
          },
          car_insurance_remote_banker_error_on_service: {
            bind: 'handleServiceError'
          },
          car_insurance_remote_banker_error_on_funds: {
            bind: 'handleInsufficientBalance'
          }
        },
        out: {
          car_insurance_remote_banker_open_pdf: {
            bind: 'bbva-controller-oc-car-insurance-remote-banker-mx-business-document-open'
          },
          car_insurance_remote_banker_set_info_share: {
            bind: 'bbva-controller-oc-car-insurance-remote-banker-mx-set-info-to-share'
          },
          car_insurance_remote_banker_set_operative_receipt: {
            bind: 'bbva-controller-oc-car-insurance-remote-banker-mx-set-operative-receipt'
          },
          car_insurance_remote_banker_app_page_visit: {
            bind: 'bbva-controller-oc-car-insurance-remote-banker-mx-app-page-visit'
          },
          car_insurance_remote_banker_event_build: {
            bind: 'bbva-controller-oc-car-insurance-remote-banker-mx-analytics'
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
          car_insurance_remote_banker_app_page_visit: {
            bind: 'appPageVisit'
          },
          car_insurance_remote_banker_event_build: {
            bind: 'eventBuild'
          },
          sign_modal_open: {
            bind: 'singConnectorEvent'
          }
        },
        out: {
          car_insurance_remote_banker_app_on_click_start: {
            bind: 'insurance-remote-banker-analytics-app-on-click-start',
            analytics: analytics.appOnClickStat('remoteBankerOCCar')
          },
          car_insurance_remote_banker_app_on_page_visit: {
            bind: 'insurance-remote-banker-analytics-app-page-visit',
            analytics: analytics.appPageVisit('remoteBankerOCCar')
          },
          car_insurance_remote_banker_app_started: {
            bind: 'insurance-remote-banker-analytics-app-started',
            analytics: analytics.appStarted('remoteBankerOCCar')
          },
          car_insurance_remote_banker_app_step_payment_method: {
            bind: 'insurance-remote-banker-analytics-app-step-2',
            analytics: analytics._getAppStep('appStep2', 'remoteBankerOCCar')
          },
          car_insurance_remote_banker_app_step_terms_and_conditions: {
            bind: 'insurance-remote-banker-analytics-app-step-3',
            analytics: analytics._getAppStep('appStep3', 'remoteBankerOCCar')
          },
          car_insurance_remote_banker_app_step_confirmation: {
            bind: 'insurance-remote-banker-analytics-app-step-4',
            analytics: analytics._getAppStep('appStep4', 'remoteBankerOCCar')
          },
          car_insurance_remote_banker_app_step_otp: {
            bind: 'insurance-remote-banker-analytics-app-step-5',
            analytics: analytics._getAppStep('appStep5', 'remoteBankerOCCar')
          },
          car_insurance_remote_banker_app_completed: {
            bind: 'insurance-remote-banker-analytics-app-completed',
            analytics: analytics.appCompleted('remoteBankerOCCar')
          },
          car_insurance_remote_banker_error_contracted: {
            bind: 'insurance-remote-banker-analytics-error-contracted',
            analytics: analytics._getErrors('errorInsuranceContracted', 'remoteBankerOCCar.contractedInsurance.error')
          },
          car_insurance_remote_banker_error_quotation: {
            bind: 'insurance-remote-banker-analytics-error-quotation',
            analytics: analytics._getErrors('errorExpiredQuote', 'remoteBankerOCCar.expiredQuote.error')
          },
          car_insurance_remote_banker_error_on_service_analytics: {
            bind: 'insurance-remote-banker-analytics-error-service',
            analytics: analytics.errorService('remoteBankerOCCar.serviceError.error')
          },
          car_insurance_remote_banker_error_on_funds_analytics: {
            bind: 'insurance-remote-banker-analytics-error-funds',
            analytics: analytics.errorLink('remoteBankerOCCar.insufficientFunds.error')
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
          car_insurance_remote_banker_open_pdf: {
            bind: 'openByUrl'
          }
        },
        out: {
          car_insurance_remote_banker_success_on_open_pdf: {
            bind: 'open-document-open-by-url-success'
          },
          car_insurance_remote_banker_error_on_open_pdf: {
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
          car_insurance_remote_banker_set_info_share: {
            bind: 'setProperties'
          },
          car_insurance_remote_banker_set_operative_receipt: {
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


  const base = {
    hash: 'car-insurance',
    currentPage: {
      url: '/car-insurance'
    },
    pages,
    template,
    components: [
      getSpinnerSpherica(CONFIG),
      carInsuranceRemoteBanker,
      remoteBankerController,
      analyticManagerInsuranceRemoteBanker,
      cellsShareGenericReceipt,
      openDocument
    ]
  };

  const signWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signWidgetConnector('insurance-origination-oc-car-insurance-remote-banker-mx', {
    widgetId: 'carInsurance'
  });

  return base;
};
