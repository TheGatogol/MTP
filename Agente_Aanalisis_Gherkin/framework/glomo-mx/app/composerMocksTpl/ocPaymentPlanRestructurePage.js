'use strict';
module.exports = CONFIG => {
  const {
    getLanguage,
    getLocalCurrency,
    SPINNER: spinner,
    detailDownloadParams: downloadParams,
    useNames,
    createPrefixFromPageName,
    connectionsOut
  } = require('./common/helpers/_utils');
  const pageName = 'ocPaymentPlanRestructurePage';
  const operativePrefix = createPrefixFromPageName(pageName);
  const errorPrefix = 'OC_PAYMENT_PLAN_CARD_ERROR';
  const [ getChannelName ] = useNames(operativePrefix);
  const analytics = require('./analytics/_ocPaymentPlan')(CONFIG);
  const constants = require('./analytics/common/_constants');
  const successPrefix = 'OC_PAYMENT_PLAN_CARD_SUCCESS';
  const label = 'LABEL';
  const description = 'DESCRIPTION';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos  = CONFIG.nativeIos || false;
  downloadParams.headers = {
    'Content-Type': 'application/json'
  };
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: 'header--core',
      drawerWidth: '100%',
      disableScrollLock: true,
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      headerFixed: true,
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
      titleName: 'bbva-manager-oc-card-reestructure-tdc-header-text',
      cellsConnections: {
        out: {
          [getChannelName('HEADER_RIGHT_BUTTON')]: {
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
          [getChannelName('INIT_PAGE')]: {
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
          [getChannelName('_SET_TITLE_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'titleText'
          },
          [getChannelName('_SET_BODY_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'bodyText'
          },
          [getChannelName('_SET_BUTTON_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'buttonText'
          },
          [getChannelName('_SET_LINK_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'linkText'
          },
          [getChannelName('_OPEN_WARNING_EXIT_MODAL')]: {
            bind: 'open'
          }
        },
        out: {
          [getChannelName('EXIT_REESTRUCTURE_TDC_PLAN')]: {
            bind: 'help-modal-footer-button-click'
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
          [getChannelName('NAVIGATE_TO_PAGE_SUCCESS')]: {
            bind: 'navigate'
          },
          [getChannelName('EXIT_REESTRUCTURE_TDC_PLAN')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('EXIT_PAGE')]: {
            bind: 'header-left-button',
            backStep: true
          },
          [getChannelName('GO_TO_OC_PAYMENT_PLAN_CARD_SUCCESS_PAGE')]: {
            bind: 'navigation-to-successPage',
            link: {
              page: 'ocPaymentPlanCardSuccessPage',
              cleanUntil: pageName
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
          [getChannelName('EXIT_REESTRUCTURE_TDC_PLAN')]: {
            bind: 'resetValues'
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'resetValues'
          },
          [getChannelName('_SET_OFFER')]: {
            bind: 'offer'
          },
          [getChannelName('_SET_TERMS_AND_CONDITIONS')]: {
            bind: 'termsAndConditionsOffer'
          },
          [getChannelName('_SET_TEXT_LABEL_TO_CHECKBOX_ACCEPT_TERMS_AND_CONDITIONS_MULTISTEP')]: {
            bind: 'checkboxTextOne'
          },
          [getChannelName('_SET_TEXT_LABEL_TO_CHECKBOX_AUTHORIZE_PLAN_MULTISTEP')]: {
            bind: 'checkboxTextTwo'
          },
          [getChannelName('_SET_IS_REESTRUCTURE_REFACTOR')]: {
            bind: 'restructureRefactor'
          },
          [getChannelName('GO_TO_OC_PAYMENT_PLAN_CARD_SUCCESS_PAGE')]: {
            bind: 'resetValue'
          },
          [getChannelName('NAVIGATE_TO_PAGE_ERROR')]: {
            bind: 'resetValues'
          }
        },
        out: {
          [getChannelName('_CONSULT_TERMS_AND_CONDITIONS')]: {
            bind: 'consult-terms-and-conditions-pdf'
          },
          [getChannelName('_CONSULT_AGGREMENT')]: {
            bind: 'consult-agreement-pdf'
          },
          [getChannelName('CHECK_AND_CONFIRM_OFFER')]: {
            bind: 'check-and-confirm-offer'
          },
          [getChannelName('_SET_APP_STARTED')]: {
            bind: 'review-terms-and-conditions'
          },
          [getChannelName('_APP_STEP_TERMS_AND_CONDITIONS')]: {
            bind: 'authorize-offer-binding'
          },
          [getChannelName('_APP_STEP_CONFIRMATION')]: {
            bind: 'check-and-confirm-offer'
          }
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-oc-card-payment-plan-reestructure',
    familyPath: '@glomo-web-components/bbva-manager-payment-plan',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      productType: 'RESTRUCTURE-TDC',
      hostServices: CONFIG.globalServices.host,
      detailDownloadConfig: downloadParams,
      offerImagePath: './images/deposit_into_account_dollar.svg',
      cellsConnections: {
        params: {
          cardId: 'productId',
          offerId: 'offerId',
          setCustomer: 'global_user'
        },
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleExitProcess'
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('GO_TO_OC_PAYMENT_PLAN_CARD_SUCCESS_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('NAVIGATE_TO_PAGE_ERROR')]: {
            bind: 'reset'
          },
          [getChannelName('INIT_PAGE')]: {
            bind: 'getCustomerDetail'
          },
          [getChannelName('HEADER_RIGHT_BUTTON')]: {
            bind: 'handleExitProcess'
          },
          [getChannelName('_CONSULT_TERMS_AND_CONDITIONS')]: {
            bind: 'getPdfTermsAndConditions'
          },
          [getChannelName('CHECK_AND_CONFIRM_OFFER')]: {
            bind: 'confirmOfferBinding'
          },
          [getChannelName('SET_CUSTOMER_DETAIL')]: {
            bind: 'handleCustomerResponse'
          },
          [getChannelName('_CONSULT_AGGREMENT')]: {
            bind: 'getPdfAgreement'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SUCCESS')]: {
            bind: 'getResponseOfferCardSuccess'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_ERROR')]: {
            bind: 'getResponseOfferCardError'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SIMULATE_SUCCESS')]: {
            bind: 'getResponseSimulateSuccess'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SIMULATE_ERROR')]: {
            bind: 'handleOfferSimulationErrorResponse'
          },
          [getChannelName('_SET_PARAMS_OFFER')]: {
            bind: 'initValues'
          },
          [getChannelName('_GET_BUSINESS_DOCUMENTS_SUCCESS')]: {
            bind: 'getBusinessDocumentsSuccess'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_INSTALLMENT_SUCCESS')]: {
            bind: 'handleOfferBindingSuccess'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_INSTALLMENT_ERROR')]: {
            bind: 'handleOfferBindingError'
          },
          [getChannelName('_OPEN_ENCODING_DOCUMENT_SUCCESS')]: {
            bind: 'handleEncodingDocumentSuccess'
          },
          [getChannelName('_OPEN_ENCODING_DOCUMENT_ERROR')]: {
            bind: 'handleEncodingDocumentError'
          },
          [getChannelName('_SET_COMMON_ERRORS')]: {
            bind: 'handleAPIErrors'
          }
        },
        out: {
          [successPrefix + '_HEADER_TITLE_TEXT']: {
            bind: 'set-header-page-success'
          },
          [getChannelName('NAVIGATE_TO_PAGE_SUCCESS')]: {
            bind: 'navigate-to-page-success'
          },
          [getChannelName('_SET_OFFER')]: {
            bind: 'set-offer-event'
          },
          [getChannelName('_SET_TERMS_AND_CONDITIONS')]: {
            bind: 'set-terms-and-conditions-event'
          },
          [getChannelName('_SET_TEXT_LABEL_TO_CHECKBOX_ACCEPT_TERMS_AND_CONDITIONS_MULTISTEP')]: {
            bind: 'set-text-checkbox-one-event'
          },
          [getChannelName('_SET_TEXT_LABEL_TO_CHECKBOX_AUTHORIZE_PLAN_MULTISTEP')]: {
            bind: 'set-text-checkbox-two-event'
          },
          [getChannelName('_SET_IS_REESTRUCTURE_REFACTOR')]: {
            bind: 'set-is-restructure-refactor-event'
          },
          [getChannelName('_SET_CUSTOMER_ID')]: {
            bind: 'set-customer-id-event'
          },
          [getChannelName('_GET_CUSTOMER_DETAIL')]: {
            bind: 'get-customer-details-event'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS')]: {
            bind: 'get-data-provider-card-event'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SIMULATE')]: {
            bind: 'get-data-provider-card-simulation-event'
          },
          [getChannelName('_SET_PARAMS_OFFER')]: {
            bind: 'send-offer-data-event'
          },
          [getChannelName('_SET_PARAMS_OFFER_ANALYTICS')]: {
            bind: 'send-offer-data-event'
          },
          [getChannelName('_SET_PARAMS_INSTALLMENT')]: {
            bind: 'set-params-to-service-installments'
          },
          [getChannelName('_GET_BUSINESS_DOCUMENTS')]: {
            bind: 'get-business-documents-event'
          },
          [getChannelName('_GET_BUSINESS_DOCUMENTS_AGREEMENT')]: {
            bind: 'get-business-documents-agreement-event'
          },
          [getChannelName('_GET_BUSINESS_DOCUMENTS_POST')]: {
            bind: 'get-business-documents-post-event'
          },
          [getChannelName('_OPEN_BUSINESS_DOCUMENT_WITH_CONNECTOR')]: {
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
          [getChannelName('_SET_TITLE_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'set-title-text-warning-exit-modal-event'
          },
          [getChannelName('_SET_BODY_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'set-body-text-warning-exit-modal-event'
          },
          [getChannelName('_SET_BUTTON_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'set-button-text-warning-exit-modal-event'
          },
          [getChannelName('_SET_LINK_TEXT_WARNING_EXIT_MODAL')]: {
            bind: 'set-link-text-warning-exit-modal-event'
          },
          [getChannelName('_OPEN_WARNING_EXIT_MODAL')]: {
            bind: 'open-warning-exit-modal-event'
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
            analytics: analytics._offerErrorsAdvancedFootPrint('fixedPaymentPlanForRestructuring', 'outOfSchedule')
          },
          [errorPrefix + '_OFFER_NOT_AVAILABLE']: {
            bind: 'set-offer-not-available-event',
            analytics: analytics._offerErrorsAdvancedFootPrint('fixedPaymentPlanForRestructuring', 'offerNotAvailable')
          },
          [errorPrefix + '_ERROR_ON_SERVICE']: {
            bind: 'set-error-on-service-event',
            analytics: analytics._offerErrorsAdvancedFootPrint('fixedPaymentPlanForRestructuring', 'errorOnService')
          },
          [getChannelName('NAVIGATE_TO_PAGE_ERROR')]: {
            bind: 'navigate-to-page-error',
            backStep: true,
            link: {
              page: 'ocPaymentPlanCardErrorPage'
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
    tag: 'bbva-manager-oc-card-analytics',
    familyPath: '@glomo-web-components/bbva-manager-payment-plan',
    render: 'litElement',
    properties: {
      signatureTypes: constants.SIGNATURE_TYPES,
      productType: 'RESTRUCTURE-TDC',
      currency: getLocalCurrency(),
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'appOnClickStart'
          },
          [getChannelName('_SET_PARAMS_OFFER_ANALYTICS')]: {
            bind: 'firePageVisit'
          },
          [getChannelName('_SET_APP_STARTED')]: {
            bind: 'firePageStarted'
          },
          [getChannelName('_APP_STEP_TERMS_AND_CONDITIONS')]: {
            bind: 'fireAppStep2'
          },
          [getChannelName('_APP_STEP_CONFIRMATION')]: {
            bind: 'fireAppStep3'
          },
          [getChannelName('_APP_STEP_OTP')]: {
            bind: 'fireAppStep4'
          },
          [getChannelName('NAVIGATE_TO_PAGE_SUCCESS')]: {
            bind: 'setAppCompletedData'
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('GO_TO_OC_PAYMENT_PLAN_CARD_SUCCESS_PAGE')]: {
            bind: 'reset'
          },
          [getChannelName('NAVIGATE_TO_PAGE_ERROR')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('_ANALYTICS_APP_PAGE_VISIT')]: {
            bind: 'analytics-app-page-visit',
            analytics: analytics._getAppPageVisit('fixedPaymentPlanForRestructuring')
          },
          [getChannelName('_ANALYTICS_APP_STARTED')]: {
            bind: 'analytics-app-started',
            analytics: analytics._getAppStarted('fixedPaymentPlanForRestructuring')
          },
          [getChannelName('_ANALYTICS_APP_STEP_TERMS_AND_CONDITIONS')]: {
            bind: 'analytics-app-step-2',
            analytics: analytics._appStep(2, 'fixedPaymentPlanForRestructuring', '2 terminos y condiciones')
          },
          [getChannelName('_ANALYTICS_APP_STEP_CONFIRMATION')]: {
            bind: 'analytics-app-step-3',
            analytics: analytics._appStep(3, 'fixedPaymentPlanForRestructuring', '3 confirmacion')
          },
          [getChannelName('_ANALYTICS_APP_STEP_OTP')]: {
            bind: 'analytics-app-step-4',
            analytics: analytics._appStep(4, 'fixedPaymentPlanForRestructuring', '4 otp')
          },
          [successPrefix + '_SET_DATA_FOR_APP_COMPLETED']: {
            bind: 'set-data-on-analytics-app-completed'
          },
          [getChannelName('_ANALYTICS_APP_ON_CLICK_START')]: {
            bind: 'analytics-app-on-click-start',
            analytics: analytics._getAppOnClickStart('fixedPaymentPlanForRestructuring')
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
          [getChannelName('_GET_BUSINESS_DOCUMENTS')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('_GET_BUSINESS_DOCUMENTS_AGREEMENT')]: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          [getChannelName('_GET_BUSINESS_DOCUMENTS_SUCCESS')]: {
            bind: 'get-business-documents-v0-success'
          },
          [getChannelName('_GET_BUSINESS_DOCUMENTS_ERROR')]: {
            bind: 'get-business-documents-v0-error'
          }
        }
      }
    }
  };
  const cardsDataProvider = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-cards',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-dataprovider-cards',
    properties: {
      host: CONFIG.globalServices.host,
      cardsApiVersion: CONFIG.globalServices.versions.cardsV1,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS')]: {
            bind: 'getOfferDetail'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SIMULATE')]: {
            bind: 'simulationsPostOfferCard'
          },
          [getChannelName('_SET_PARAMS_INSTALLMENT')]: {
            bind: 'installmentsPlansPost'
          }
        },
        out: {
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SUCCESS')]: {
            bind: 'get-offer-card-v1-success'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_ERROR')]: {
            bind: 'get-offer-card-v1-error'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SIMULATE_SUCCESS')]: {
            bind: 'post-offer-simulations-card-v1-success'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_SIMULATE_ERROR')]: {
            bind: 'post-offer-simulations-card-v1-error'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_INSTALLMENT_SUCCESS')]: {
            bind: 'post-installments-card-v1-success'
          },
          [getChannelName('_SET_PARAMS_DATA_PROVIDER_CARDS_INSTALLMENT_ERROR')]: {
            bind: 'post-installments-card-v1-error'
          },
          [getChannelName('_SET_COMMON_ERRORS')]: {
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
          [getChannelName('_SET_CUSTOMER_ID')]: {
            bind: 'customerId'
          },
          [getChannelName('_GET_CUSTOMER_DETAIL')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getChannelName('SET_CUSTOMER_DETAIL')]: {
            bind: 'set-customer-detail'
          }
        }
      }
    }
  };
  const base = {
    hash: 'mx-oc-payment-plan-restructure-page',
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
      helpModal,
      simpleList,
      paymentPlanMultiStep,
      manager,
      analyticsManager,
      businessDocumentsDataProvider,
      cardsDataProvider,
      apiCustomers
    ]
  };
  if (CONFIG.native) {
    base.components.push({
      zone: 'app__main',
      tag: 'cells-nativeconnector-open-document',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            [getChannelName('_OPEN_BUSINESS_DOCUMENT_WITH_CONNECTOR')]: {
              bind: 'openByUrl'
            }
          },
          out: {
            [getChannelName('_OPEN_ENCODING_DOCUMENT_SUCCESS')]: {
              bind: 'open-document-open-by-url-success'
            },
            [getChannelName('_OPEN_ENCODING_DOCUMENT_ERROR')]: {
              bind: 'open-document-open-by-url-error'
            }
          }
        }
      }
    });
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-cards', pageName, ['post-installments-card-v1-success', 'post-installments-card-v1-error']);
  const connectionsOuts = connectionsOut(base);
  connectionsOuts('cells-sign-operation-dm-mx').oc_payment_plan_restructure_page__APP_STEP_OTP = {
    bind: 'signature-required'
  };
  return base;
};
