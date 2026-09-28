'use strict';
module.exports = CONFIG => {
  const prefix = 'OC_LOAN_PAYMENT_PLAN_LOAN_CONSOLIDATION';
  const pageName = 'ocLoanPaymentPlanLoanConsolidationPage';
  const {
    createSpinner,
    getLocalCurrency,
    getLanguage,
    getCurrencyCode,
    detailDownloadParams: downloadParams,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { campaignsV3: campaignsApiVersion, businessDocument: businessDocumentsApiVersion, loansV2: loansInstallmentsApiVersion } },
    native = false,
    nativeIos = false
  } = CONFIG;
  const numberSolutions = CONFIG.phoneNumberClientPaymentsSolutions;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_ocLoanPaymentPlanLoanConsolidation')(CONFIG);
  const constants = require('./analytics/common/_constants');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  downloadParams.headers = {
    'Content-Type': 'application/json'
  };
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerHeight: headerHeightMinimum,
      headerFixed: true,
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      className: nativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: nativeIos
    }
  };
  const navigationHandler = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      continue: 'successPage',
      cellsConnections: {
        in: {},
        out: {}
      }
    }
  };
  const featurePaymentPlan = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-oc-loan-payment-plan-loan-restructuring-mx',
    familyPath: '@glomo-web-components/bbva-feature-oc-loan-payment-plan-loan-restructuring-mx',
    render: 'litElement',
    properties: {
      currencyCode: getCurrencyCode(),
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      host,
      requiredToken,
      campaignsApiVersion,
      loansInstallmentsApiVersion,
      native,
      detailDownloadConfig: downloadParams,
      requiredOTPInstallments: true,
      numberSolutions,
      cellsConnections: {
        params: {
          offerId: 'offerId',
          loanId: 'productId'
        },
        in: {
          [prefix + '_EXIT_PAGE']: {
            bind: 'resetValues'
          },
          [prefix + '_EXIT_CONSOLIDATION_OFFER']: {
            bind: 'resetValues'
          },
          [prefix + '_SET_PARAMS_OFFER']: {
            bind: 'initOffer'
          },
          [prefix + 'EXIT_SUCCESS_PAGE_GO_BACK']: {
            bind: 'resetValues'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          [prefix + '_EXIT_SUPPORT_FIXED_PAYMENTS']: {
            bind: 'resetValues'
          },
          [prefix + 'SET_PARAMS_DATA_PROVIDER_LOANS']: {
            bind: 'getResponseOfferLoansSuccess'
          },
          [prefix + '_OPEN_ENCODING_DOCUMENT_SUCCESS']: {
            bind: 'handleEncodingDocument'
          },
          [prefix + '_OPEN_ENCODING_DOCUMENT_ERROR']: {
            bind: 'handleEncodingDocument'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS_SUCCESS']: {
            bind: 'getBusinessDocumentsSuccess'
          },
          [prefix + '_HANDLE_COMMON_ERROR_API']: {
            bind: 'commonErrorApi'
          }
        },
        out: {
          [prefix + 'EXIT_SUCCESS_PAGE_GO_BACK']: {
            bind: 'bbva-oc-loan-payment-plan-loan-restructuring-go-back',
            backStep: true
          },
          [prefix + '_BINDING_OFFER_SUCCESS']: {
            bind: 'binding-offer-success-flow-event'
          },
          [prefix + '_SET_TITLE_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'set-title-text-warning-exit-modal-event'
          },
          [prefix + '_SET_BODY_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'set-body-text-warning-exit-modal-event'
          },
          [prefix + '_SET_BUTTON_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'set-button-text-warning-exit-modal-event'
          },
          [prefix + '_SET_LINK_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'set-link-text-warning-exit-modal-event'
          },
          [prefix + '_OPEN_WARNING_EXIT_MODAL']: {
            bind: 'open-warning-exit-modal-event'
          },
          [prefix + 'SET_PARAMS_DATA_PROVIDER_LOANS']: {
            bind: 'get-data-provider-loan-event'
          },
          [prefix + '_EXIT_CONSOLIDATION_OFFER']: {
            bind: 'help-modal-footer-button-click',
            backStep: true
          },
          open_control_veil: {
            bind: 'show-spinner-event'
          },
          close_control_veil: {
            bind: 'hide-spinner-event'
          },
          [prefix + '_OPEN_BUSINESS_DOCUMENT_WITH_CONNECTOR']: {
            bind: 'set-business-document-on-connector-event'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS']: {
            bind: 'get-business-documents-event'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS_AGREEMENT']: {
            bind: 'get-business-documents-agreement-event'
          },
          [prefix + '_HANDLE_COMMON_ERROR_API']: {
            bind: 'api-dm-error'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [prefix + '_SET_PARAMS_OFFER']: {
            bind: 'set-offer-initial-event'
          },
          [prefix + '_SET_PARAMS_OFFER_ANALYTICS']: {
            bind: 'set-page-visit-event'
          },
          [prefix + '_SET_APP_STARTED']: {
            bind: 'review-offer-page-started'
          },
          [prefix + '_APP_STEP_TERMS_AND_CONDITIONS']: {
            bind: 'authorize-offer-binding'
          },
          [prefix + '_APP_STEP_CONFIRMATION']: {
            bind: 'check-offer-page-review'
          },
          [prefix + '_NAVIGATE_TO_PAGE_ERROR']: {
            bind: 'reset'
          },
          [prefix + '_OFFER_OUT_SCHEDULE']: {
            bind: 'set-offer-out-of-schedule-event',
            analytics: analytics.offerErrorsAdvancedFootPrint('outOfSchedule')
          },
          [prefix + '_OFFER_NOT_AVAILABLE']: {
            bind: 'set-offer-not-available-event',
            analytics: analytics.offerErrorsAdvancedFootPrint('offerNotAvailable')
          },
          [prefix + '_ERROR_ON_SERVICE']: {
            bind: 'set-error-on-service-event',
            analytics: analytics.offerErrorsAdvancedFootPrint('errorOnService')
          }
        }
      }
    }
  };
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-oc-loan-payment-plan-loan-restructuring-mx-analytics',
    familyPath: '@glomo-web-components/bbva-feature-oc-loan-payment-plan-loan-restructuring-mx',
    render: 'litElement',
    productType: 'LOAN-RESTRUCTURE',
    properties: {
      signatureTypes: constants.SIGNATURE_TYPES,
      productType: 'PCC',
      currency: getLocalCurrency(),
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'appOnClickStart'
          },
          [prefix + '_SET_PARAMS_OFFER_ANALYTICS']: {
            bind: 'firePageVisit'
          },
          [prefix + '_SET_APP_STARTED']: {
            bind: 'firePageStarted'
          },
          [prefix + '_APP_STEP_TERMS_AND_CONDITIONS']: {
            bind: 'fireAppStepTermsAndConditions'
          },
          [prefix + '_APP_STEP_CONFIRMATION']: {
            bind: 'fireAppStepConfirmation'
          },
          widget_signature_handle_required_first_step: {
            bind: 'fireAppStepOTP'
          },
          [prefix + '_BINDING_OFFER_SUCCESS']: {
            bind: 'setAppCompletedData'
          },
          [prefix + '_SET_DATA_FOR_APP_COMPLETED']: {
            bind: 'appCompleteType'
          },
          [prefix + 'EXIT_SUCCESS_PAGE_GO_BACK']: {
            bind: 'reset'
          },
          [prefix + '_EXIT_CONSOLIDATION_OFFER']: {
            bind: 'reset'
          }
        },
        out: {
          [prefix + '_ANALYTICS_APP_PAGE_VISIT']: {
            bind: 'analytics-app-page-visit',
            analytics: analytics.getAppPageVisit()
          },
          [prefix + '_ANALYTICS_APP_STARTED']: {
            bind: 'analytics-app-started',
            analytics: analytics.getAppStarted()
          },
          [prefix + '_ANALYTICS_APP_STEP_TERMS_AND_CONDITIONS']: {
            bind: 'analytics-app-step-terms-and-conditions',
            analytics: analytics.appStep(2, '2 terminos y condiciones')
          },
          [prefix + '_ANALYTICS_APP_STEP_CONFIRMATION']: {
            bind: 'analytics-app-step-confirmation',
            analytics: analytics.appStep(3, '3 confirmacion')
          },
          [prefix + '_ANALYTICS_APP_STEP_OTP']: {
            bind: 'analytics-app-step-otp',
            analytics: analytics.appStep(4, '4 otp')
          },
          [prefix + '_SET_DATA_FOR_APP_COMPLETED']: {
            bind: 'set-data-on-analytics-app-completed'
          },
          [prefix + '_ANALYTICS_APP_PAGE_COMPLETED_PAYMENT_PLAN_LOAN']: {
            bind: 'analytics-app-completed-consolidacion-consumo',
            analytics: analytics.getAppCompleted()
          },
          [prefix + '_ANALYTICS_APP_ON_CLICK_START']: {
            bind: 'analytics-app-on-click-start',
            analytics: analytics.getAppOnClickStart()
          }
        }
      }
    }
  };
  const nativeDocuments = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-open-document',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [prefix + '_OPEN_BUSINESS_DOCUMENT_WITH_CONNECTOR']: {
            bind: 'openByUrl'
          }
        },
        out: {
          [prefix + '_OPEN_ENCODING_DOCUMENT_SUCCESS']: {
            bind: 'open-document-open-by-url-success'
          },
          [prefix + '_OPEN_ENCODING_DOCUMENT_ERROR']: {
            bind: 'open-document-open-by-url-error'
          }
        }
      }
    }
  };
  const businessDocumentsDataProvider = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-business-documents',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-dataprovider-business-documents',
    properties: {
      host,
      apiVersion: businessDocumentsApiVersion,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [prefix + '_GET_BUSINESS_DOCUMENTS']: {
            bind: 'getBusinessDocuments'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS_AGREEMENT']: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          [prefix + '_GET_BUSINESS_DOCUMENTS_SUCCESS']: {
            bind: 'get-business-documents-v0-success'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS_ERROR']: {
            bind: 'get-business-documents-v0-error'
          }
        }
      }
    }
  };
  const base = {
    hash: prefix,
    currentPage: {
      url: '/' + pageName
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      navigationHandler,
      featurePaymentPlan,
      analyticsManager,
      nativeDocuments,
      businessDocumentsDataProvider
    ]
  };
  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signConnector('bbva-feature-oc-loan-payment-plan-loan-restructuring-mx');

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'SIMULATION-ERROR',
      acceptRetry: { bind: 'retrySimulate', component: 'bbva-feature-oc-loan-payment-plan-loan-restructuring-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    },
    {
      id: 'ERROR-INSTALLMENTS',
      acceptRetry: { bind: 'continueThirdSection', component: 'bbva-feature-oc-loan-payment-plan-loan-restructuring-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);
  return base;
};
