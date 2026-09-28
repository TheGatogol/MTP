'use strict';
const loanAmortizationScheduleSampleDocuments = require('./common/_loan-amortization-schedule-sample-documents');
module.exports = config => {
  const pageName = 'ocLoanOfferPageSpherica';
  const localStorageApp = require('./common/_local-storage');
  const { stopLossWidgetComponent } = require('./common/_abandoned_cart.js');
  const { stopLossWidget, stopLossAnalytics } = stopLossWidgetComponent(config, 'ocLoan', 'SHOPPING_CART');

  const {
    SPINNERSPHERICA: getSpinnerSpherica,
    pluginSoftoken,
    pluginEtherToken,
    detailDownloadParams,
    glomoOpenDocument,
    getLocalCurrency,
    getAlternativeFormatDate
  } = require('./common/helpers/_utils.js');
  const analytics = require('./analytics/_ocLoanOfferPageSpherica.js')();
  const cmbConfig = {
    operativeName: 'ocLoanOfferPage',
    productName: 'Consumo',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    migrationGenesys: true,
    notGlobalInitConfigurationChannel: true
  };
  const {controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(cmbConfig);
  const {
    native = false,
    nativeIos = false,
    globalServices: {
      host,
      publicSettingsId,
      publicSettingsHost,
      requiredToken,
      versions: {
        appSettings: appSettingsApiVersion,
        customersV1: customersApiVersion,
        customerContactDetails: customerContactDetailsApiVersion,
        loans
      }
    }
  } = config;

  const attachedServices = {
    'bbva-global-single-sign-on-api-dm': {
      'single-sign-on-api-dm-create-error': 'postSingleSignOn',
      'api-dm-error': 'postSingleSignOn'
    }
  };

  const shareReceipt = {
    zone: 'app_main',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    type: 'UI',
    properties: {
      country: 'mx',
      infoImage: './images/spherica/sphericaInfo.svg',
      language: 'es-MX',
      localCurrency: getLocalCurrency(),
      dateHourNoSecondsFormat: 'DD MMM YYYY, HH:mm [h]',
      sharedReceiptStyles: {
        fieldValue: {
          'word-wrap': 'break-word',
          'overflow-wrap': 'break-word',
          'white-space': 'normal'
        },
        infolcon: {
          'display': 'block',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'width': '1.75rem'
        },
        sectionHeaderAmount: {
          'font-size': '2.5rem',
          'font-weight': '350'
        }
      },
      cellsConnections: {
        in: {
          oc_loan_share_data_receipt: {
            bind: 'captureReceipt'
          },
          oc_loan_share_data_result_receipt: {
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
          }
        }
      }
    }
  };

  const base = {
    hash: 'oc-loan-offer-spherica',
    currentPage: {
      url: '/oc-loan-offer-spherica'
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      familyPath: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: 'bbva-core-blue'
      }
    },
    components: [
      getSpinnerSpherica(),
      shareReceipt,
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/loan-and-mortgage-origination-oc-loan-mx',
        tag: 'loan-and-mortgage-origination-oc-loan-mx',
        render: 'litElement',
        properties: {
          appSettingsApiVersion,
          avoidTermsPacksService: true,
          customerContactDetailsApiVersion,
          customersApiVersion,
          detailDownloadConfig: detailDownloadParams,
          documentModalName: 'MODAL',
          documentPdfName: 'PDF',
          host,
          initFromLandingWeb: false,
          loansApiVersion: loans,
          loansRequiredOTP: true,
          annualHiringRate: 'TASA ANUAL',
          commission: 'COMISION REVIRE',
          monthlyRate: 'Tasa mensual',
          native,
          iOSFixedHeader: nativeIos,
          nominalRateDueId: 'CAT',
          offersApiVersion: loans,
          openingCommissionId: 'COMISION REVIRE',
          operationDateFormat: getAlternativeFormatDate(),
          publicSettingsId,
          publicSettingsKey: 'app_settings_glomo',
          publicSettingsHost: publicSettingsHost,
          sampleAmortizationScheduleDocument: loanAmortizationScheduleSampleDocuments,
          rateAnnualId: 'TASA_ANUAL',
          requiredToken,
          shareReceipt: true,
          unifiedTotalValueId: 'TASA_MENSUAL',
          maxServiceAttempts: '3',
          attachedServices,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'setFeatureFlags'
              },
              global_set_app_settings: {
                bind: 'appSettings'
              },
              __bridge_page_ocLoanOfferPageSpherica: {
                bind: 'initOcLoanFlow'
              },
              global_call_me_back_show_sticky_button: {
                bind: 'footerLink'
              },
              oc_loan_set_customers: {
                bind: 'customers'
              },
              oc_loan_set_customer_indicators: {
                bind: 'customerIndicators'
              },
              oc_loan_set_loan_type: {
                bind: 'loanType'
              },
              oc_loan_init: {
                bind: 'webPlusGlomo'
              },
              global_sign_token_standby_timer_succes: {
                bind: 'clearLoader'
              },
              global_sign_token_standby_otp_cancel: {
                bind: 'clearLoader'
              },
              sign_modal_cancelled: {
                bind: 'clearLoader'
              },
              cells_to_native_modal_closed: {
                bind: 'clearLoader'
              },
              oc_loan_sso_service_error: {
                bind: 'requestedDownloadStatus'
              },
              oc_loan_document_service_error: {
                bind: 'requestedDownloadStatus'
              },
              oc_loan_signature_modal: {
                bind: 'hidden'
              },
              global_widget_loan_simulator_exit_operative_spherica: {
                bind: 'showMultistepComponent'
              },
              global_login_success_indicators: {
                bind: 'customers'
              },
              dashboard_customer_email: {
                bind: 'userEmail'
              },
              global_storage_get_deviceId_success: {
                bind: 'device'
              },
              oc_loan_stop_loss_offer_benefits_empty: {
                bind: 'skipStopLoss'
              },
              oc_loan_stop_loss_modal_header_leave: {
                bind: 'stopLossLeave'
              },
              oc_loan_stop_loss_modal_footer_leave: {
                bind: 'stopLossLeave'
              }
            },
            out: {
              oc_loan_exit_flow: {
                bind: 'loan-and-mortgage-origination-oc-loan-exit-flow',
                backStep: true
              },
              oc_loan_offer_page__call_me_back_init_sticky_configuration: {
                bind: 'loan-and-mortgage-origination-oc-loan-simulation-call-me-back-click'
              },
              oc_loan_go_atm_locator: {
                bind: 'loan-and-mortgage-origination-oc-loan-modal-manager-lack-information-atm-locator-click',
                link: {
                  page: 'atmLocator'
                }
              },
              oc_loan_offer_set: {
                bind: 'offer-api-dm-fetch'
              },
              global_close_control_veil: {
                bind: 'offer-api-dm-fetch-error'
              },
              oc_loan_fire_confirmation_step: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-all-complete'
              },
              oc_loan_success_create_loan: {
                bind: 'loans-api-dm-create'
              },
              oc_loan_operation_error: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-retry-error'
              },
              oc_loan_request_document: {
                bind: 'loan-and-mortgage-origination-oc-loan-file-list-document-click'
              },
              oc_loan_get_offer: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-loan-offer-set'
              },
              oc_loan_set_public_settings: {
                bind: 'public-settings-api-dm-fetch'
              },
              oc_loan_set_loan_contracted: {
                bind: 'loans-api-dm-create'
              },
              oc_loan_generate_receipt: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-share-recipt-format'
              },
              oc_loan_retry_sso: {
                bind: 'loan-and-mortgage-origination-oc-loan-request-sso'
              },
              oc_loan_go_to_catalog: {
                bind: 'loan-and-mortgage-origination-oc-loan-sustainability-navigate-to-catalog',
                link: {
                  page: 'loanSustainableProductList'
                }
              },
              oc_loan_go_to_simulator: {
                bind: 'loan-and-mortgage-origination-oc-loan-sustainability-go-to-sustainable-simulator',
                link: {
                  page: 'loanSustainableRateSimulator'
                }
              },
              open_control_veil: {
                bind: 'loan-and-mortgage-origination-oc-loan-feature-flag-loaded'
              },
              close_control_veil: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-loan-offer-set'
              },
              analytic_oc_loan_icon_click_modal_rates_costs: {
                bind: 'loan-and-mortgage-origination-oc-loan-rate-item-icon-click'
              },
              oc_loan_analytics_app_started_input: {
                bind: 'form-field-input-blur'
              },
              oc_loan_analytics_app_started_slider: {
                bind: 'loan-and-mortgage-origination-oc-loan-simulation-term-select'
              },
              oc_loan_analytics_app_started_rate_item_icon: {
                bind: 'loan-and-mortgage-origination-oc-loan-rate-item-icon-click'
              },
              oc_loan_analytics_app_started_continue_button: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-continue-button-click'
              },
              oc_loan_analytics_store_attributes: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-offer-quotations-simulate-set'
              },
              oc_loan_analytics_terms_and_conditions: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-navigate'
              },
              oc_loan_analytics_step_confirmations: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-terms-packs-set'
              },
              oc_loan_analytics_step_otp: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-analytic-otp-oc-loan'
              },
              analytic_oc_loan_charge_benefits: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-dynamic-benefits-set'
              },
              analyitic_oc_loan_success: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-loan-success'
              },
              analyitic_oc_loan_bureau: {
                bind: 'loan-and-mortgage-origination-oc-loan-bad-credit-history'
              },
              global_retargeting_initialize: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-loan-offer-set'
              },
              global_retargeting_get_offer_detail: {
                bind: 'offer-api-dm-fetch'
              },
              global_retargeting_set_step_offer_properties: {
                bind: 'loan-and-mortgage-origination-oc-loan-simulation-data-retargeting'
              },
              global_retargeting_send_information_update: {
                bind: 'loan-and-mortgage-origination-oc-loan-exit-flow'
              },
              global_retargeting_contracted_product: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-loan-success'
              },
              global_retargeting_go_next_step_continue_benefits: {
                bind: 'loan-and-mortgage-origination-oc-loan-continue-benefits-button-click'
              },
              oc_loan_offer_page__call_me_back_initialize: {
                bind: 'loan-and-mortgage-origination-oc-loan-continue-benefits-button-click'
              },
              global_retargeting_benefits_step: {
                bind: 'loan-and-mortgage-origination-oc-loan-close-modal-simulation-click'
              },
              global_retargeting_go_next_step_continue: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-navigate'
              },
              global_retargeting_go_next_step_depositPurchase: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-not-benefits'
              },
              global_retargeting_go_next_step: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-documents-step-terms-create'
              },
              global_retargeting_go_next_step_summary: {
                bind: 'loan-and-mortgage-origination-oc-loan-multistep-loan-create'
              },
              global_retargeting_get_quotations_simulate: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-quotations-simulate-rtg'
              },
              global_open_document_url: {
                bind: 'loan-and-mortgage-origination-oc-loan-dm-post-document'
              },
              oc_loan_share_data_receipt: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-share-data'
              },
              oc_loan_share_data_result_receipt: {
                bind: 'loan-and-mortgage-origination-oc-loan-review-share-data-result'
              },
              oc_loan_stop_loss_modal_offer_id_set: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-offer-id-set'
              },
              oc_loan_stop_loss_modal_title_set: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-title-set'
              },
              oc_loan_stop_loss_modal_open: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-modal-open'
              },
              oc_loan_stop_loss_offer_benefit_id_set: {
                bind: 'loan-and-mortgage-origination-oc-loan-stop-loss-offer-benefit-id-set'
              }
            },
            params: {
              offerId: 'offerId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-nativeconnector-cipher',
        tag: 'bbva-nativeconnector-cipher',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              oc_loan_encrypt_otp: {
                bind: 'rsaEncrypt'
              }
            },
            out: {
              oc_loan_encrypt_otp_successful: {
                bind: 'rsa-encrypt-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-consumer-loan-mx',
        familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              contract_product_section_offers_parsed: {
                bind: 'offers'
              },
              contract_product_section_oc_banner_consumer_loan_clicked: {
                bind: 'appOnClickStartAnalyticProcuctSection'
              },
              oc_loan_request_document: {
                bind: 'annualRate'
              },
              analytic_oc_loan_icon_click_modal_rates_costs: {
                bind: 'onHelpIconClicked'
              },
              oc_loan_exit_flow: {
                bind: 'resetData'
              },
              oc_loan_analytics_store_attributes: {
                bind: 'storeAttributes'
              },
              analytic_oc_loan_charge_benefits: {
                bind: 'fireMarkBenefits'
              },
              oc_loan_get_offer: {
                bind: 'fireLoanAppPageVisit'
              },
              oc_loan_bbva_help_icon_click: {
                bind: 'bbvaHelpIconClick'
              },
              oc_loan_analytics_app_started_input: {
                bind: 'fireAppStartedFromAmountSelected'
              },
              oc_loan_analytics_app_started_slider: {
                bind: 'fireAppStartedFromSlider'
              },
              oc_loan_analytics_app_started_rate_item_icon: {
                bind: 'fireAppStartedFromRateItemIcon'
              },
              oc_loan_analytics_app_started_continue_button: {
                bind: 'fireAppStartedContinue'
              },
              oc_loan_analytics_terms_and_conditions: {
                bind: 'fireAppStepTermsAndConditions'
              },
              oc_loan_analytics_step_confirmations: {
                bind: 'fireAppStepConfirmation'
              },
              oc_loan_analytics_step_otp: {
                bind: 'fireAppStepOtp'
              },
              analyitic_oc_loan_success: {
                bind: 'fireLoanCompleted'
              },
              analyitic_oc_loan_bureau: {
                bind: 'fireLoanCompleted'
              },
              sign_modal_open: {
                bind: 'openSignatureModal'
              },
              sign_modal_cancelled: {
                bind: 'closeSignatureModal'
              },
              sign_modal_close: {
                bind: 'closeSignatureModal'
              },
              oc_loan_go_to_catalog: {
                bind: 'fireMarkSustainableCatalog'
              },
              oc_loan_go_to_simulator: {
                bind: 'fireMarkSustainableSimulator'
              },
              app_onclick_nbo: {
                bind: 'storeProductName'
              },
              app_onclick_nba: {
                bind: 'storeProductName'
              }
            },
            out: {
              oc_loan_analytics_app_page_visit: {
                bind: 'analytics-app-page-visit',
                analytics: analytics.getStepAnalytic('pageVisit')
              },
              oc_loan_analytics_app_page_started: {
                bind: 'analytics-app-started',
                analytics: analytics.getStepAnalytic('appStarted')
              },
              oc_loan_analytics_app_step_terms_and_conditions: {
                bind: 'analytics-app-step-terms-and-conditions',
                analytics: analytics.getStepAnalytic('appStep2TermsAndConditions')
              },
              oc_loan_analytics_app_step_confirmation: {
                bind: 'analytics-app-step-confirmation',
                analytics: analytics.getStepAnalytic('appStep3Confirmation')
              },
              oc_loan_analytics_app_step_otp: {
                bind: 'analytics-app-step-otp',
                analytics: analytics.getStepAnalytic('appStep4Otp')
              },
              analytics_annual_rate: {
                bind: 'analytics-mark-annual-rate',
                analytics: analytics.annualRateAnalytic()
              },
              analytics_cat: {
                bind: 'analytics-mark-cat',
                analytics: analytics.catAnalytic()
              },
              analytics_commission: {
                bind: 'analytics-mark-commission',
                analytics: analytics.commissionAnalytic()
              },
              analytics_benefits: {
                bind: 'analytics-mark-benefits',
                analytics: analytics.benefitsAnalytic()
              },
              analytics_sustainaible_catalog: {
                bind: 'analytics-mark-sustainable-catalog',
                analytics: analytics.sustainableLoanCatalog()
              },
              analytics_sustainaible_simulator: {
                bind: 'analytics-mark-sustainable-simulator',
                analytics: analytics.sustainableLoanSimulator()
              },
              oc_loan_analytics_app_page_completed: {
                bind: 'analytics-app-step-completed',
                analytics: analytics.getStepAnalytic('appCompletedSucces')
              },
              oc_loan_signature_modal: {
                bind: 'signature-modal-set'
              }
            }
          }
        }
      },
      controllerCmb,
      stopLossWidget,
      stopLossAnalytics
    ]
  };

  const signConnector = require('./common/_widget-sign-connector.js')(config)(base);
  signConnector('loan-and-mortgage-origination-oc-loan-mx');
  if (native) {
    const openDocument = glomoOpenDocument(config);
    base.components.push(pluginSoftoken(config), pluginEtherToken(config));
    if (openDocument) {
      base.components.push(openDocument);
    }
  }
  localStorageApp.addOutStorageChannels(base.components, [ 'call_me_back' ], config);
  return base;
};
