'use strict';
module.exports = config => {
  const pageName = 'ocMortgageNonPreapproved';
  const pageNameChannel = 'oc_mortgage-non_preapproved_';
  const pages = require('./common/_pages')(config)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const localStorageApp = require('./common/_local-storage');
  const { getLanguage, glomoOpenDocument, headerHeightMinimum } = require('./common/helpers/_utils');
  const {
    globalServices: { host, publicSettingsHost, requiredToken = 'tsec', publicSettingsId,
      versions: { customersV1: customersApiVersion, loans: loansApiVersion, appSettings: appSettingsApiVersion, mortgagesV1: mortgagesApiVersion } },
    native = false,
    nativeIos = false
  } = config;
  const analyticsOcMortgage = require('./analytics/_ocMortgageNonPreapproved')(config);
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
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
          },
          [pageNameChannel + 'exit_flow']: {
            bind: 'reset'
          }
        },
        out: {
          [pageNameChannel + 'reset_page']: {
            bind: 'reset'
          },
          [pageNameChannel + 'init']: {
            bind: 'init-page',
            analytics: analyticsOcMortgage.appPageVisit('1', 'simula tu credito')
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const loanAndMortgage = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx',
    tag: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx',
    render: 'litElement',
    properties: {
      loansApiVersion,
      customersApiVersion,
      mortgagesApiVersion,
      appSettingsApiVersion,
      language: getLanguage(),
      publicSettingsHost,
      host,
      native,
      requiredToken,
      typeMortgage: 'MORTGAGE',
      currency: 'MXN',
      incomeFrecuency: 'MONTHLY',
      incomeTypeId: 'TOTAL',
      termsFrecuency: 'ANNUAL',
      totalSuggestedLoans: 1,
      suggestLoanTypeId: 'MORTGAGE',
      segmentId: '00000000',
      publicSettingsId: publicSettingsId,
      publicSettingsKey: 'app_settings_glomo',
      financingProgramId: 'SF',
      notarialExpenseType: 'NOTARIAL_EXPENSES',
      holderInvestigationType: 'HOLDER_INVESTIGATION',
      notarialExpensePercentage: 3,
      notarialExpenseAmount: 0,
      segmentTypeId: 'APPG',
      initialRateType: 'INITIAL_RATE',
      yearlyIncreaseType: 'YEARLY_INCREASE',
      maximumFinancingType: 'MAXIMUM_FINANCING',
      realFinancingType: 'REAL_FINANCING',
      totalInstallmentsLoans: 240,
      catRateType: 'CAT',
      termTypeId: 'EV-MX-AO-LOGBUR-001',
      acceptanceMessagesBdnType: 'BDNOPREH01',
      acceptanceMessagesBduType: 'BDUSODPS13',
      acceptanceMessagesBdaType: 'BDAUTBUR12',
      supportTypeId: 'NO_FINANCIAL_BACKING',
      goodStatusId: 'OWN',
      providerId: '00009999',
      maxAllowedRetries: 3,
      propertyValueId: '01',
      requestedAmountId: '02',
      buyHouseId: '01',
      changeMortgageId: '02',
      mortgagePropertyId: '03',
      remodelPropertyId: '05',
      buyLandId: '06',
      installmentAmountId: '03',
      showInitialOffer: 'true',
      pageName,
      iOSFixedHeader: nativeIos,
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          global_storage_get_loginData_success: {
            bind: 'obtainRequesterFullName'
          },
          global_storage_get_loginData_error: {
            bind: 'obtainRequesterFullName'
          },
          sign_modal_cancelled_widgetErrorHandler: {
            bind: 'certificateGeneratedCancelled'
          }
        },
        out: {
          [pageNameChannel + 'exit_flow']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-flow-exit',
            link: {
              page: 'contractProductSection'
            }
          },
          [pageNameChannel + 'create-receipt-certificate']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-receipt-success-button-share-click'
          },
          [pageNameChannel + 'share-file-amortization-table']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-amortization-table-click'
          },
          [pageNameChannel + 'share-file-certificate']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-download-certificate-click'
          },
          global_get_from_storage: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-global-get-from-storage'
          },
          [pageNameChannel + 'analytics_initial_offer_continue']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-initial-offer-continue',
            analytics: analyticsOcMortgage.appStarted('1', 'simula tu credito')
          },
          [pageNameChannel + 'analytics_fire_credit_simulation_step']: {
            bind: 'public-settings-api-dm-fetch'
          },
          [pageNameChannel + 'analytics_format_credit_simulation_step']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-oc-mortgage-multistep-credit-simulation-continue-click'
          },
          [pageNameChannel + 'analytics_additional_information_step']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-additional-information-continue-click'
          },
          [pageNameChannel + 'analytics_simulation_completed']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-receipt-success'
          },
          [pageNameChannel + 'analytics_operation_not_available']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-open-generic-error-full-modal'
          },
          [pageNameChannel + 'analytics_financial_concern']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-open-financial-health-concern-modal'
          },
          [pageNameChannel + 'view_otp']: {
            bind: 'signature-required-first-step-dm'
          },
          [pageNameChannel + 'view_current_step']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-oc-mortgage-multistep-expandable-multistep-current-active-step'
          },
          ['oc_mortgage-non_preapproved_analytics_terms_and_conditions_step']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-additional-information-complete-step'
          },
          ['oc_mortgage-non_preapproved_analytics_all_steps_completed']: {
            bind: 'loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx-terms-and-conditions-all-steps-completed-continue-click'
          },
          global_open_native_menu: {
            bind: 'emergency-reports-header-menu-click',
            'forward-to-native': true
          }
        },
        params: {
          requesterFullName: 'global_client_id'
        }
      }
    }
  };

  const analytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-oc-mortgage-non-preapproved-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
    render: 'litElement',
    properties: {
      config: {
        steps: {
          'credit-simulation': 'app-step-credit-simulation',
          'additional-information': 'app-step-additional-information',
          'terms-and-conditions': 'app-step-terms-and-conditions',
          'multistep-completed': 'app-step-multistep-completed',
          'confirm-simulation': 'app-step-confirm-simulation',
          'signature-otp': 'app-step-signature-otp'
        }
      },
      cellsConnections: {
        in: {
          [pageNameChannel + 'init']: {
            bind: 'fireAppStarted'
          },
          [pageNameChannel + 'analytics_fire_credit_simulation_step']: {
            bind: 'fireCreditSimulation'
          },
          [pageNameChannel + 'analytics_format_credit_simulation_step']: {
            bind: 'formatCreditSimulation'
          },
          [pageNameChannel + 'analytics_additional_information_step']: {
            bind: 'formatAdditionalInformation'
          },
          [pageNameChannel + 'analytics_terms_and_conditions_step']: {
            bind: 'fireViewStep'
          },
          ['oc_mortgage-non_preapproved_analytics_all_steps_completed']: {
            bind: 'fireMultistepCompleted'
          },
          [pageNameChannel + 'view_otp']: {
            bind: 'fireSignature'
          },
          [pageNameChannel + 'analytics_simulation_completed']: {
            bind: 'fireSimmulationCompleted'
          },
          [pageNameChannel + 'analytics_operation_not_available']: {
            bind: 'fireOperationNotAvailable'
          },
          [pageNameChannel + 'analytics_financial_concern']: {
            bind: 'fireFinancialConcern'
          },
          [pageNameChannel + 'view_current_step']: {
            bind: 'fireViewStep'
          },
          [pageNameChannel + 'view_multistep_complete']: {
            bind: 'fireMultistepCompleted'
          }
        },
        out: {
          'analytics_oc_mortagage_non_preapproved_init': {
            bind: 'analytics-app-on-click-start',
            analytics: analyticsOcMortgage.appOnClickStart()
          },
          'analytics_oc_mortagage_non_preapproved_on_page_credit_simulation': {
            bind: 'analytics-app-step-credit-simulation',
            analytics: analyticsOcMortgage.commonStep('2', 'cotizar credito')
          },
          'analytics_oc_mortagage_non_preapproved_credit_simulation_step': {
            bind: 'analytics-app-step-additional-information',
            analytics: analyticsOcMortgage.commonStep('3', 'queremos conocerte mejor')
          },
          'analytics_oc_mortagage_non_preapproved_additional_information_step': {
            bind: 'analytics-app-step-terms-and-conditions',
            analytics: analyticsOcMortgage.commonStep('4', 'terminos y condiciones')
          },
          'analytics_oc_mortagage_non_preapproved_terms_and_conditions_step': {
            bind: 'analytics-app-step-multistep-completed',
            analytics: analyticsOcMortgage.commonStep('5', 'confirmacion')
          },
          'analytics_oc_mortagage_non_preapproved_confirm_simulation_all_step': {
            bind: 'analytics-app-step-signature-otp',
            analytics: analyticsOcMortgage.commonStep('6', 'otp', 'firma:token')
          },
          'analytics_oc_mortagage_non_preapproved_simulation_completed': {
            bind: 'analytics-app-completed',
            analytics: analyticsOcMortgage.appSimulationCompleted('firma:token')
          },
          'analytics_oc_mortagage_non_preapproved_op_not_available': {
            bind: 'analytics-operation-not-available',
            analytics: analyticsOcMortgage.appViewErrorOpNotAvailable()
          },
          'analytics_oc_mortagage_non_preapproved_financial_health': {
            bind: 'analytics-financial-concern',
            analytics: analyticsOcMortgage.appViewErrorFinancialHealth()
          }
        }
      }
    }
  };

  const controllerLoanAndMortgage = {
    zone: 'app__main',
    tag: 'bbva-controller-oc-mortgage-non-preapproved',
    familyPath: '@glomo-web-components/bbva-controller-oc-mortgage-non-preapproved',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [pageNameChannel + 'create-receipt-certificate']: {
            bind: 'createReceiptCertificate'
          },
          [pageNameChannel + 'share-file-amortization-table']: {
            bind: 'validatePdfAmortizationTable'
          },
          [pageNameChannel + 'share-file-certificate']: {
            bind: 'validatePdfCertificate'
          }
        },
        out: {
          [pageNameChannel + 'share_receipt']: {
            bind: 'bbva-controller-oc-mortgage-non-preapproved-operative-receipt-set'
          },
          [pageNameChannel + 'set_info_to_share']: {
            bind: 'bbva-controller-oc-mortgage-non-preapproved-share-receipt'
          },
          global_open_document_base64: {
            bind: 'bbva-controller-oc-mortgage-non-preapproved-document-event-show'
          }
        }
      }
    }
  };

  const sharedReceipt = {
    zone: 'app__main',
    tag: 'cells-share-generic-receipt',
    familyPath: 'cells-share-operative-receipt',
    type: 'UI',
    properties: {
      language: getLanguage(),
      country: 'mx',
      headerReceipt: false,
      maxLineWidth: 40,
      sharedReceiptStyles: {
        headerImage: {
          'padding': '0px'
        }
      },
      cellsConnections: {
        in: {
          [pageNameChannel + 'share_receipt']: {
            bind: 'captureReceipt'
          },
          [pageNameChannel + 'set_info_to_share']: {
            bind: 'setProperties'
          },
          [pageNameChannel + 'reset_page']: {
            bind: 'reset'
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
  const base = {
    hash: 'oc-mortgage-non-preapproved',
    currentPage: {
      url: '/oc-mortgage-non-preapproved'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-core-blue-bg',
        headerHeightMinimum,
        className: `${nativeIos ? 'ios-top-padding' : ''}`
      },
      propertiesSpherica: {
        headerFixed: true,
        className: `header--core ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: 'header--core',
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      lifeCycle,
      loanAndMortgage,
      analytics,
      controllerLoanAndMortgage,
      sharedReceipt
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(config));
  }
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('loan-and-mortgage-origination-lead-mortgage-non-preaproved-mx');

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], config);

  return sphericaPageUtils.spherize(base);
};
