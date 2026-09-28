'use strict';
module.exports = CONFIG => {
  const prefix = 'OC_LOAN_PAYMENT_PLAN_RESTRUCTURE';
  const successPrefix = 'OC_PAYMENT_PLAN_LOAN_SUCCESS';
  const errorPrefix = 'OC_PAYMENT_PLAN_LOAN_ERROR';
  const label = 'LABEL';
  const description = 'DESCRIPTION';
  const pageName = 'ocLoanPaymentPlanRestructurePage';
  const {
    getLanguage,
    getLocalCurrency,
    SPINNER: spinner,
    detailDownloadParams: downloadParams,
    connectionsOut
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_ocPaymentPlan')(CONFIG);
  const constants = require('./analytics/common/_constants');
  const isNativeIos = CONFIG.nativeIos || false;
  downloadParams.headers = {
    'Content-Type': 'application/json'
  };
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'bbva-manager-oc-loan-payment-plan-restructure-header-text',
      cellsConnections: {
        out: {
          [prefix + '_HEADER_RIGHT_BUTTON']: {
            bind: 'click-right-button'
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
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [prefix + '_INIT_PAGE']: {
            bind: 'init-page'
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
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      continue: 'successPage',
      cellsConnections: {
        in: {
          [prefix + '_NAVIGATE_TO_PAGE_SUCCESS']: {
            bind: 'navigate'
          },
          [prefix + '_EXIT_SUPPORT_FIXED_PAYMENTS']: {
            bind: 'goBack'
          }
        },
        out: {
          [prefix + '_EXIT_PAGE']: {
            bind: 'header-left-button',
            backStep: true
          },
          [prefix + '_GO_TO_OC_PAYMENT_PLAN_LOAN_SUCCESS_PAGE']: {
            bind: 'navigation-to-successPage',
            backStep: true,
            link: {
              page: 'ocPaymentPlanLoanSuccessPage'
            }
          }
        }
      }
    }
  };
  const simpleList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-list-simple',
    familyPath: '@bbva-web-components/bbva-list-simple',
    render: 'litElement',
    properties: {
      hidden: true
    }
  };
  const paymentPlanMultiStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-payment-plan',
    familyPath: '@glomo-web-components/bbva-multistep-payment-plan',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [errorPrefix + '_EXIT_ERROR_PAGE']: {
            bind: 'resetValues'
          },
          [prefix + '_EXIT_SUPPORT_FIXED_PAYMENTS']: {
            bind: 'resetValues'
          },
          [prefix + '_SET_OFFER']: {
            bind: 'offer'
          },
          [prefix + '_SET_IS_REESTRUCTURE_REFACTOR']: {
            bind: 'restructureRefactor'
          },
          [prefix + '_SET_IS_PRODUCT_RESTRUCTURE_LOAN_REFACTOR']: {
            bind: 'restructureConsumoRefactor'
          },
          [prefix + '_SET_TERMS_AND_CONDITIONS']: {
            bind: 'termsAndConditionsOffer'
          },
          [prefix + '_SET_TEXT_LABEL_TO_CHECKBOX_ACCEPT_TERMS_AND_CONDITIONS_MULTISTEP']: {
            bind: 'checkboxTextOne'
          },
          [prefix + '_SET_TEXT_LABEL_TO_CHECKBOX_AUTHORIZE_PLAN_MULTISTEP']: {
            bind: 'checkboxTextTwo'
          },
          [prefix + '_EXIT_PAGE']: {
            bind: 'resetValues'
          },
          [prefix + '_GO_TO_OC_PAYMENT_PLAN_LOAN_SUCCESS_PAGE']: {
            bind: 'resetValues'
          },
          [prefix + '_NAVIGATE_TO_PAGE_ERROR']: {
            bind: 'resetValues'
          }
        },
        out: {
          [prefix + '_CONSULT_TERMS_AND_CONDITIONS']: {
            bind: 'consult-terms-and-conditions-pdf'
          },
          [prefix + '_CONSULT_AGGREMENT']: {
            bind: 'consult-agreement-pdf'
          },
          [prefix + '_CHECK_AND_CONFIRM_OFFER']: {
            bind: 'check-and-confirm-offer'
          },
          [prefix + '_SET_APP_STARTED']: {
            bind: 'review-terms-and-conditions'
          },
          [prefix + '_APP_STEP_TERMS_AND_CONDITIONS']: {
            bind: 'authorize-offer-binding'
          },
          [prefix + '_APP_STEP_CONFIRMATION']: {
            bind: 'check-and-confirm-offer'
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-loan-restructure',
    familyPath: '@glomo-web-components/bbva-manager-payment-plan',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      productType: 'LOAN-RESTRUCTURE',
      hostServices: CONFIG.globalServices.host,
      detailDownloadConfig: downloadParams,
      offerImagePath: './images/offers/loan/loan.svg',
      cellsConnections: {
        params: {
          offerId: 'offerId',
          loanId: 'productId',
          setCustomer: 'global_user'
        },
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleExitProcess'
          },
          [prefix + '_EXIT_PAGE']: {
            bind: 'reset'
          },
          [prefix + '_GO_TO_OC_PAYMENT_PLAN_LOAN_SUCCESS_PAGE']: {
            bind: 'reset'
          },
          [prefix + '_NAVIGATE_TO_PAGE_ERROR']: {
            bind: 'reset'
          },
          [prefix + '_INIT_PAGE']: {
            bind: 'getCustomerDetail'
          },
          [prefix + '_HEADER_RIGHT_BUTTON']: {
            bind: 'handleExitProcess'
          },
          [prefix + '_SET_PARAMS_OFFER']: {
            bind: 'initValues'
          },
          [prefix + '_CONSULT_TERMS_AND_CONDITIONS']: {
            bind: 'getPdfTermsAndConditions'
          },
          [prefix + '_CONSULT_AGGREMENT']: {
            bind: 'getPdfAgreement'
          },
          [prefix + '_CHECK_AND_CONFIRM_OFFER']: {
            bind: 'confirmOfferBinding'
          },
          [prefix + '_SET_CUSTOMER_DETAIL']: {
            bind: 'handleCustomerResponse'
          },
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_SUCCESS']: {
            bind: 'getResponseOfferLoansSuccess'
          },
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_ERROR']: {
            bind: 'getResponseOfferLoanError'
          },
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_INSTALLMENT_SUCCESS']: {
            bind: 'handleOfferBindingSuccess'
          },
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_INSTALLMENT_ERROR']: {
            bind: 'handleOfferBindingError'
          },
          [prefix + '_SET_COMMON_ERRORS']: {
            bind: 'handleAPIErrors'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS_SUCCESS']: {
            bind: 'getBusinessDocumentsSuccess'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS_ERROR']: {
            bind: 'getBusinessDocumentsError'
          },
          [prefix + '_OPEN_ENCODING_DOCUMENT_SUCCESS']: {
            bind: 'handleEncodingDocumentSuccess'
          },
          [prefix + '_OPEN_ENCODING_DOCUMENT_ERROR']: {
            bind: 'handleEncodingDocumentError'
          }
        },
        out: {
          [successPrefix + '_HEADER_TITLE_TEXT']: {
            bind: 'set-header-page-success'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS']: {
            bind: 'get-business-documents-event'
          },
          [prefix + '_SET_OFFER']: {
            bind: 'set-offer-event'
          },
          [prefix + '_SET_TERMS_AND_CONDITIONS']: {
            bind: 'set-terms-and-conditions-event'
          },
          [prefix + '_GET_BUSINESS_DOCUMENTS_AGREEMENT']: {
            bind: 'get-business-documents-agreement-event'
          },
          [prefix + '_SET_TEXT_LABEL_TO_CHECKBOX_ACCEPT_TERMS_AND_CONDITIONS_MULTISTEP']: {
            bind: 'set-text-checkbox-one-event'
          },
          [prefix + '_SET_TEXT_LABEL_TO_CHECKBOX_AUTHORIZE_PLAN_MULTISTEP']: {
            bind: 'set-text-checkbox-two-event'
          },
          [prefix + '_SET_IS_REESTRUCTURE_REFACTOR']: {
            bind: 'set-is-restructure-refactor-event'
          },
          [prefix + '_SET_IS_PRODUCT_RESTRUCTURE_LOAN_REFACTOR']: {
            bind: 'set-is-restructure-loan-refactor-event'
          },
          [prefix + '_SET_CUSTOMER_ID']: {
            bind: 'set-customer-id-event'
          },
          [prefix + '_GET_CUSTOMER_DETAIL']: {
            bind: 'get-customer-details-event'
          },
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS']: {
            bind: 'get-data-provider-loan-event'
          },
          [prefix + '_SET_PARAMS_OFFER']: {
            bind: 'send-offer-data-event'
          },
          [prefix + '_SET_PARAMS_OFFER_ANALYTICS']: {
            bind: 'send-offer-data-event'
          },
          [prefix + '_SET_PARAMS_INSTALLMENT']: {
            bind: 'set-params-to-service-installments'
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
          [prefix + '_OPEN_BUSINESS_DOCUMENT_WITH_CONNECTOR']: {
            bind: 'set-business-document-on-connector-event'
          },
          [successPrefix + '_SET_PANEL_INFO_HEADING']: {
            bind: 'set-panel-info-heading-event'
          },
          [successPrefix + '_SET_PANEL_INFO_TEXT']: {
            bind: 'set-panel-info-text-event'
          },
          [successPrefix + '_PLAN_TYPE_' + label]: {
            bind: 'set-list-plan-type-label-event'
          },
          [successPrefix + '_PLAN_TYPE_' + description]: {
            bind: 'set-list-plan-type-description-event'
          },
          [successPrefix + '_CARD_TO_ASSOCIATE_' + label]: {
            bind: 'set-list-card-to-associate-label-event'
          },
          [successPrefix + '_CARD_TO_ASSOCIATE_' + description]: {
            bind: 'set-list-card-to-associate-description-event'
          },
          [successPrefix + '_PLAN_BALANCE_' + label]: {
            bind: 'set-list-plan-balance-label-event'
          },
          [successPrefix + '_PLAN_BALANCE_' + description]: {
            bind: 'set-list-plan-balance-description-event'
          },
          [successPrefix + '_TERM_' + label]: {
            bind: 'set-list-term-label-event'
          },
          [successPrefix + '_TERM_' + description]: {
            bind: 'set-list-term-description-event'
          },
          [successPrefix + '_INITIAL_PAYMENT_' + label]: {
            bind: 'set-list-initial-payment-label-event'
          },
          [successPrefix + '_INITIAL_PAYMENT_' + description]: {
            bind: 'set-list-initial-payment-description-event'
          },
          [successPrefix + '_DEADLINE_' + label]: {
            bind: 'set-list-deadline-label-event'
          },
          [successPrefix + '_DEADLINE_' + description]: {
            bind: 'set-list-deadline-description-event'
          },
          [successPrefix + '_INTEREST_RATE_' + label]: {
            bind: 'set-list-interest-rate-label-event'
          },
          [successPrefix + '_INTEREST_RATE_' + description]: {
            bind: 'set-list-interest-rate-description-event'
          },
          [successPrefix + '_MONTHLY_PAYMENT_' + label]: {
            bind: 'set-list-monthly-payment-label-event'
          },
          [successPrefix + '_MONTHLY_PAYMENT_' + description]: {
            bind: 'set-list-monthly-payment-description-event'
          },
          [successPrefix + '_SET_EMAIL_LABEL']: {
            bind: 'set-list-email-label-event'
          },
          [successPrefix + '_SET_EMAIL_DESCRIPTION']: {
            bind: 'set-list-email-description-event'
          },
          [successPrefix + '_SET_NOTIFICATION_MESSAGE']: {
            bind: 'set-notification-message-event'
          },
          [successPrefix + '_SET_DEFAULT_BUTTON_TEXT']: {
            bind: 'set-default-button-text-event'
          },
          [prefix + '_NAVIGATE_TO_PAGE_SUCCESS']: {
            bind: 'navigate-to-page-success'
          },
          [prefix + '_NAVIGATE_TO_PAGE_SUCCESS_RESET']: {
            bind: 'navigate-to-page-success'
          },
          [errorPrefix + '_SET_HEADER_NAME_ERROR']: {
            bind: 'set-header-error-page-event'
          },
          [errorPrefix + '_SET_MICRO_ILLUSTRATION_ERROR']: {
            bind: 'set-micro-illustration-error-page-event'
          },
          [errorPrefix + '_SET_HEADING_ERROR']: {
            bind: 'set-heading-text-error-page-event'
          },
          [errorPrefix + '_SET_TEXT_ERROR']: {
            bind: 'set-body-text-error-page-event'
          },
          [errorPrefix + '_OFFER_OUT_SCHEDULE']: {
            bind: 'set-offer-out-of-schedule-event',
            analytics: analytics._offerErrorsAdvancedFootPrint('fixedPaymentPlanForRestructuringLoan', 'outOfSchedule')
          },
          [errorPrefix + '_OFFER_NOT_AVAILABLE']: {
            bind: 'set-offer-not-available-event',
            analytics: analytics._offerErrorsAdvancedFootPrint('fixedPaymentPlanForRestructuringLoan', 'offerNotAvailable')
          },
          [errorPrefix + '_ERROR_ON_SERVICE']: {
            bind: 'set-error-on-service-event',
            analytics: analytics._offerErrorsAdvancedFootPrint('fixedPaymentPlanForRestructuringLoan', 'errorOnService')
          },
          [prefix + '_NAVIGATE_TO_PAGE_ERROR']: {
            bind: 'navigate-to-page-error',
            link: {
              page: 'ocPaymentPlanLoanErrorPage'
            }
          },
          open_control_veil: {
            bind: 'show-spinner-event'
          },
          close_control_veil: {
            bind: 'hide-spinner-event'
          }
        }
      }
    }
  };
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-loan-analytics',
    familyPath: '@glomo-web-components/bbva-manager-payment-plan',
    render: 'litElement',
    properties: {
      signatureTypes: constants.SIGNATURE_TYPES,
      productType: 'LOAN-RESTRUCTURE',
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
            bind: 'fireAppStep2'
          },
          [prefix + '_APP_STEP_CONFIRMATION']: {
            bind: 'fireAppStep3'
          },
          [prefix + '_APP_STEP_OTP']: {
            bind: 'fireAppStep4'
          },
          [prefix + '_NAVIGATE_TO_PAGE_SUCCESS']: {
            bind: 'setAppCompletedData'
          },
          [prefix + '_EXIT_SUPPORT_FIXED_PAYMENTS']: {
            bind: 'reset'
          },
          [prefix + '_NAVIGATE_TO_PAGE_SUCCESS_RESET']: {
            bind: 'reset'
          },
          [prefix + '_NAVIGATE_TO_PAGE_ERROR']: {
            bind: 'reset'
          }
        },
        out: {
          [prefix + '_ANALYTICS_APP_PAGE_VISIT']: {
            bind: 'analytics-app-page-visit',
            analytics: analytics._getAppPageVisit('fixedPaymentPlanForRestructuringLoan')
          },
          [prefix + '_ANALYTICS_APP_STARTED']: {
            bind: 'analytics-app-started',
            analytics: analytics._getAppStarted('fixedPaymentPlanForRestructuringLoan')
          },
          [prefix + '_ANALYTICS_APP_STEP_TERMS_AND_CONDITIONS']: {
            bind: 'analytics-app-step-2',
            analytics: analytics._appStep(2, 'fixedPaymentPlanForRestructuringLoan', '2 terminos y condiciones')
          },
          [prefix + '_ANALYTICS_APP_STEP_CONFIRMATION']: {
            bind: 'analytics-app-step-3',
            analytics: analytics._appStep(3, 'fixedPaymentPlanForRestructuringLoan', '3 confirmacion')
          },
          [prefix + '_ANALYTICS_APP_STEP_OTP']: {
            bind: 'analytics-app-step-4',
            analytics: analytics._appStep(4, 'fixedPaymentPlanForRestructuringLoan', '4 otp')
          },
          [successPrefix + '_SET_DATA_FOR_APP_COMPLETED']: {
            bind: 'set-data-on-analytics-app-completed'
          },
          [prefix + '_ANALYTICS_APP_ON_CLICK_START']: {
            bind: 'analytics-app-on-click-start',
            analytics: analytics._getAppOnClickStart('fixedPaymentPlanForRestructuringLoan')
          }
        }
      }
    }
  };
  const helpModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    properties: {
      id: 'oc-support-fixed-payments-warning-exit-modal',
      modalType: 'warning',
      titleIcon: 'coronita:alert',
      cellsConnections: {
        in: {
          [prefix + '_SET_TITLE_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'titleText'
          },
          [prefix + '_SET_BODY_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'bodyText'
          },
          [prefix + '_SET_BUTTON_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'buttonText'
          },
          [prefix + '_SET_LINK_TEXT_WARNING_EXIT_MODAL']: {
            bind: 'linkText'
          },
          [prefix + '_OPEN_WARNING_EXIT_MODAL']: {
            bind: 'open'
          }
        },
        out: {
          [prefix + '_EXIT_SUPPORT_FIXED_PAYMENTS']: {
            bind: 'help-modal-footer-button-click'
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
      host: CONFIG.globalServices.host,
      apiVersion: CONFIG.globalServices.versions.businessDocument,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
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
  const campaignsDataProvider = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-campaigns',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-dataprovider-campaigns',
    properties: {
      host: CONFIG.globalServices.host,
      version: CONFIG.globalServices.versions.campaignsV3,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS']: {
            bind: 'getOffersCampaigns'
          }
        },
        out: {
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_SUCCESS']: {
            bind: 'get-offers-campaigns-v3-success'
          },
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_ERROR']: {
            bind: 'get-offers-campaigns-v3-error'
          }
        }
      }
    }
  };
  const loansDataProvider = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-loans',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-dataprovider-loans',
    properties: {
      host: CONFIG.globalServices.host,
      apiVersion: CONFIG.globalServices.versions.loansV2,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [prefix + '_SET_PARAMS_INSTALLMENT']: {
            bind: 'postInstallments'
          }
        },
        out: {
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_INSTALLMENT_SUCCESS']: {
            bind: 'post-loan-installments-v2-success'
          },
          [prefix + '_SET_PARAMS_DATA_PROVIDER_LOANS_INSTALLMENT_ERROR']: {
            bind: 'post-loan-installments-v2-error'
          },
          [prefix + '_SET_COMMON_ERRORS']: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };
  const apiCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: CONFIG.globalServices.host,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          [prefix + '_SET_CUSTOMER_ID']: {
            bind: 'customerId'
          },
          [prefix + '_GET_CUSTOMER_DETAIL']: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [prefix + '_SET_CUSTOMER_DETAIL']: {
            bind: 'set-customer-detail'
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
  const base = {
    hash: 'oc-loan-payment-plan-restructure-page',
    currentPage: {
      url: '/' + pageName
    },
    pages,
    template,
    components: [
      spinner(CONFIG),
      header,
      lifeCycle,
      navigationHandler,
      simpleList,
      paymentPlanMultiStep,
      manager,
      analyticsManager,
      helpModal,
      businessDocumentsDataProvider,
      campaignsDataProvider,
      loansDataProvider,
      apiCustomers,
      openDocument
    ]
  };
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-loans', pageName, ['post-loan-installments-v2-success', 'post-loan-installments-v2-error']);
  const connectionsOuts = connectionsOut(base);
  connectionsOuts('cells-sign-operation-dm-mx').OC_LOAN_PAYMENT_PLAN_RESTRUCTURE_APP_STEP_OTP = {
    bind: 'signature-required'
  };
  return base;
};
