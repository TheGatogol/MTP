'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'requestDebitCard';
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_requestDebitCard')();

  const TEMPLATE = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      hasFooter: false,
      className: isNativeIos ? 'ios-top-padding' : ''
    }
  };

  const LIFE_CICLE = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false,
        'request-debit-card-page-init': true
      },
      cellsConnections: {
        in: {
          __bridge_page_requestDebitCard: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME + '_INIT']: {
            bind: 'request-debit-card-page-init'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const MANAGER_RDC = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-request-debit-card',
    familyPath: '@glomo-web-components/bbva-manager-request-debit-card',
    render: 'litElement',
    properties: {
      bbvaLine: CONFIG.bbvaLine,
      cellsConnections: {
        params: {
          account: 'account',
          card: 'card',
          campaignId: 'offerId',
          globalUser: 'global_user'
        },
        in: {
          __bridge_page_requestDebitCard: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'backNavigation'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          sign_modal_cancelled: {
            bind: 'onSignOperationModalIsCanceled'
          },
          [PAGE_NAME + '_INIT']: {
            bind: 'setInitialData'
          },
          [PAGE_NAME + '_INFO_EXIT_ACCEPT']: {
            bind: 'backStep'
          },
          [PAGE_NAME + '_INFO_EXIT_CANCEL']: {
            bind: 'backStep'
          },
          [PAGE_NAME + '_INFO_RETRY_CANCEL']: {
            bind: 'backStep'
          },
          [PAGE_NAME + '_EXIT_ACCEPT']: {
            bind: 'backStep'
          },
          [PAGE_NAME + '_INFO_PHONE_CALL_ACCEPT']: {
            bind: 'callAssistance'
          },
          [PAGE_NAME + '_SHOW_HIDE_ADDRESS']: {
            bind: 'handleButtonAddress'
          },
          [PAGE_NAME + '_REQUEST_DEBIT_CARD']: {
            bind: 'requestCreateCard'
          },
          [PAGE_NAME + '_GET_CARD_OFFER_DATA_SUCCESS']: {
            bind: 'onResponseGetCardOffer'
          },
          [PAGE_NAME + '_SET_CUSTOMER_ADDRESS']: {
            bind: 'onResponseCustomerAddresses'
          },
          [PAGE_NAME + '_SET_CUSTOMER_DETAIL']: {
            bind: 'onResponseCustomerDetail'
          },
          [PAGE_NAME + '_ON_RESPONSE_SUCCESS_CREATE_CARD']: {
            bind: 'onResponseCreateCard'
          },
          [PAGE_NAME + '_GET_CARD_OFFER_ERROR']: {
            bind: 'onResponseErrorGetCardOffer'
          },
          [PAGE_NAME + '_ON_ERROR_CUSTOMER_DETAIL']: {
            bind: 'onResponseErrorCustomerDetail'
          },
          [PAGE_NAME + '_ON_ERROR_CUSTOMER_ADDRESSES']: {
            bind: 'onResponseErrorCustomerAddresses'
          },
          [PAGE_NAME + '_ON_RESPONSE_ERROR_CREATE_CARD_ERROR']: {
            bind: 'onResponseErrorCreateCard'
          },
          [PAGE_NAME + '_INFO_RETRY_ACCEPT']: {
            bind: 'retryRequest'
          }
        },
        out: {
          [PAGE_NAME + '_SET_ACCOUNT']: {
            bind: 'bbva-manager-rdc-ui-send-account'
          },
          [PAGE_NAME + '_GET_CARD_OFFER_DETAIL']: {
            bind: 'bbva-manager-rdc-get-card-offer'
          },
          [PAGE_NAME + '_GET_CUSTOMER_MASKED_ADDRESSES']: {
            bind: 'bbva-manager-rdc-get-customer-masked-addresses'
          },
          [PAGE_NAME + '_GET_CUSTOMER_UNMASKED_ADDRESSES']: {
            bind: 'bbva-manager-rdc-get-customer-unmasked-addresses'
          },
          [PAGE_NAME + '_GET_CUSTOMER_DETAIL']: {
            bind: 'bbva-manager-rdc-get-customer-detail'
          },
          [PAGE_NAME + '_SET_ADDRESS']: {
            bind: 'bbva-manager-rdc-ui-send-address-to-multistep'
          },
          [PAGE_NAME + '_OPEN_VEIL']: {
            bind: 'bbva-manager-rdc-open-veil'
          },
          [PAGE_NAME + '_CLOSE_VEIL']: {
            bind: 'bbva-manager-rdc-close-veil'
          },
          [PAGE_NAME + '_CREATE_CARD_REQUEST']: {
            bind: 'bbva-manager-rdc-post-create-card'
          },
          [PAGE_NAME + '_BACK_NAVIGATION']: {
            bind: 'bbva-manager-rdc-back-navigation',
            backStep: true
          },
          [PAGE_NAME + '_RESET_DATA']: {
            bind: 'bbva-manager-rdc-reset'
          },
          [PAGE_NAME + '_HELP_OPEN_DIALER']: {
            bind: 'bbva-manager-rdc-call-assistance'
          },
          [PAGE_NAME + '_OPEN_EXIT_MODAL']: {
            bind: 'bbva-manager-rdc-exit-modal'
          },
          [PAGE_NAME + '_OPEN_RETRY_MODAL']: {
            bind: 'bbva-manager-rdc-retry-modal'
          },
          [PAGE_NAME + '_OPEN_FAILED_OPERATION_MODAL']: {
            bind: 'bbva-manager-rdc-failed-operation-modal'
          },
          [PAGE_NAME + '_OPEN_CALL_BBVA_MODAL']: {
            bind: 'bbva-manager-rdc-call-bbva-modal'
          },
          ['requestDebitCardSuccess_SET_RESULT']: {
            bind: 'bbva-manager-rdc-ui-send-data-to-success-page',
            link: {
              page: 'requestDebitCardSuccess',
              skipHistory: true
            }
          }
        }
      }
    }
  };

  const MULTISTEP_RDC = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-request-debit-card',
    familyPath: '@glomo-web-components/bbva-multistep-request-debit-card',
    render: 'litElement',
    properties: {
      banner: {
        image: 'addcreditcard',
        text: 'bbva-multistep-rdc-banner-text'
      },
      infoList: [
        {
          id: 'features',
          title: 'bbva-multistep-rdc-feature-title',
          list: [
            'bbva-multistep-rdc-feature-0',
            'bbva-multistep-rdc-feature-1'
          ]
        },
        {
          id: 'benefits',
          title: 'bbva-multistep-rdc-benefit-title',
          list: [
            'bbva-multistep-rdc-benefit-0',
            'bbva-multistep-rdc-benefit-1'
          ]
        },
        {
          id: 'considerations',
          title: 'bbva-multistep-rdc-consideration-title',
          list: [
            'bbva-multistep-rdc-consideration-0',
            'bbva-multistep-rdc-consideration-1'
          ]
        }
      ],
      cellsConnections: {
        in: {
          __bridge_page_requestDebitCard: {
            bind: 'reset'
          },
          [PAGE_NAME + '_RESET_DATA']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SET_ADDRESS']: {
            bind: 'setAddress'
          },
          [PAGE_NAME + '_SET_ACCOUNT']: {
            bind: 'account'
          },
          [PAGE_NAME + '_OPEN_VEIL']: {
            bind: 'showLoader'
          },
          [PAGE_NAME + '_CLOSE_VEIL']: {
            bind: 'clearLoader'
          },
          [PAGE_NAME + '_OPEN_EXIT_MODAL']: {
            bind: 'openExitModal'
          },
          [PAGE_NAME + '_OPEN_RETRY_MODAL']: {
            bind: 'openRetryModal'
          },
          [PAGE_NAME + '_OPEN_FAILED_OPERATION_MODAL']: {
            bind: 'openFailedOperationModal'
          },
          [PAGE_NAME + '_OPEN_CALL_BBVA_MODAL']: {
            bind: 'openCallBbvaModal'
          },
          ['CONNECTION_STATUS_' + PAGE_NAME + '_OFFLINE']: {
            bind: 'openNotificationStatus'
          },
          ['CONNECTION_STATUS_' + PAGE_NAME + '_ONLINE']: {
            bind: 'closeNotificationStatus'
          }
        },
        out: {
          [PAGE_NAME + '_SHOW_HIDE_ADDRESS']: {
            bind: 'bbva-multistep-rdc-show-hide-address'
          },
          [PAGE_NAME + '_HANDLE_CONTINUE_BTN']: {
            bind: 'bbva-multistep-rdc-continue-btn'
          },
          [PAGE_NAME + '_EXIT_ACCEPT']: {
            bind: 'bbva-multistep-rdc-modal-exit'
          },
          [PAGE_NAME + '_INFO_RETRY_ACCEPT']: {
            bind: 'bbva-multistep-rdc-modal-retry'
          },
          [PAGE_NAME + '_INFO_PHONE_CALL_ACCEPT']: {
            bind: 'bbva-multistep-rdc-modal-call-bbva'
          },
          [PAGE_NAME + '_REQUEST_DEBIT_CARD']: {
            bind: 'panel-button-fixed-item-click'
          }
        }
      }
    }
  };

  const GLOBAL_APIS_CARDS_BGADPMOCK = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      cardsApiVersion: CONFIG.globalServices.versions.cardPayments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_GET_CARD_OFFER_DETAIL']: {
            bind: 'getCardOffer'
          },
          [PAGE_NAME + '_CREATE_CARD_REQUEST']: {
            bind: 'postCardsNpm'
          }
        },
        out: {
          [PAGE_NAME + '_GET_CARD_OFFER_DATA_SUCCESS']: {
            bind: 'get-card-offer-data-success'
          },
          [PAGE_NAME + '_GET_CARD_OFFER_ERROR']: {
            bind: 'get-card-offer-data-error'
          },
          [PAGE_NAME + '_ON_RESPONSE_SUCCESS_CREATE_CARD']: {
            bind: 'post-cards-npm'
          },
          [PAGE_NAME + '_ON_RESPONSE_ERROR_CREATE_CARD_ERROR']: {
            bind: 'error-on-post-cards-npm'
          },
          [PAGE_NAME + '_SIGNATURE_HANDLE_OTP']: {
            bind: 'signature-required-first-step-dm'
          },
          [PAGE_NAME + '_ERROR_OTP']: {
            bind: 'signature-invalid-dm'
          },
          sign_modal_close: {
            bind: 'error-on-post-cards-npm'
          }
        }
      }
    }
  };

  const GLOMO_CUSTOMERS_MX = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-customers-mx-dm',
    familyPath: 'glomo-customers-dm',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      customerAddressesApiVersion: CONFIG.globalServices.versions.customersV1,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_CUSTOMER_ADDRESSES']: {
            bind: 'parseGetAddresses'
          }
        },
        out: {
          [PAGE_NAME + '_SET_CUSTOMER_ADDRESS']: {
            bind: 'customers-response-get-addresses-success'
          },
          [PAGE_NAME + '_OPEN_FAILED_OPERATION_MODAL']: {
            bind: 'customers-response-get-addresses-error'
          }
        }
      }
    }
  };

  const GLOBAL_APIS_CUSTOMERS_BGADPMOCK = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      customersContactDetailsApiVersion: CONFIG.globalServices.versions.contactsBook,
      customerAddressesApiVersion: CONFIG.globalServices.versions.customersV1,
      native: !!CONFIG.native,
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          [PAGE_NAME + '_GET_CUSTOMER_UNMASKED_ADDRESSES']: {
            bind: 'getCustomerAddresses'
          },
          [PAGE_NAME + '_GET_CUSTOMER_MASKED_ADDRESSES']: {
            bind: 'getCustomerAddresses'
          },
          [PAGE_NAME + '_GET_CUSTOMER_DETAIL']: {
            bind: 'getCustomerContacts'
          }
        },
        out: {
          [PAGE_NAME + '_SET_CUSTOMER_ADDRESSES']: {
            bind: 'set-customer-addresses'
          },
          [PAGE_NAME + '_ON_ERROR_CUSTOMER_ADDRESSES']: {
            bind: 'error-on-get-customer-addresses'
          },
          [PAGE_NAME + '_SET_CUSTOMER_DETAIL']: {
            bind: 'set-customer-contacts'
          },
          [PAGE_NAME + '_ON_ERROR_CUSTOMER_DETAIL']: {
            bind: 'error-on-get-customer-contacts'
          },
          [PAGE_NAME + '_ERROR_OTP']: {
            bind: 'signature-invalid-dm'
          },
          sign_modal_close: {
            bind: 'error-on-get-customer-addresses'
          }
        }
      }
    }
  };

  const MANAGER_ANALYTICS = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-request-debit-card',
    familyPath: '@glomo-web-components/bbva-manager-request-debit-card',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT']: {
            bind: 'firePageVisit'
          },
          [PAGE_NAME + '_HANDLE_CONTINUE_BTN']: {
            bind: 'fireSteps'
          },
          [PAGE_NAME + '_REQUEST_DEBIT_CARD']: {
            bind: 'fireRequest'
          },
          [PAGE_NAME + '_SIGNATURE_HANDLE_OTP']: {
            bind: 'fireStepOTP'
          },
          [PAGE_NAME + '_ON_RESPONSE_SUCCESS_CREATE_CARD']: {
            bind: 'fireAppCompleted'
          },
          [PAGE_NAME + '_GET_CUSTOMER_UNMASKED_ADDRESSES']: {
            bind: 'showAddressFootprint'
          },
          [PAGE_NAME + '_ERROR_OTP']: {
            bind: 'otpFootprint'
          },
          [PAGE_NAME + '_OPEN_RETRY_MODAL']: {
            bind: 'dynamicErrorFootprint'
          },
          [PAGE_NAME + '_OPEN_FAILED_OPERATION_MODAL']: {
            bind: 'failedOperationFootprint'
          },
          [PAGE_NAME + '_OPEN_CALL_BBVA_MODAL']: {
            bind: 'failedOperationFootprint'
          }
        },
        out: {
          [PAGE_NAME + '_ANALYTICS_PAGE_VISIT']: {
            bind: 'bbva-analyticmanager-rdc-page-visit',
            analytics: ANALYTICS.getStepAnalitycs('pageVisit')
          },
          [PAGE_NAME + '_ANALYTICS_APP_STARTED']: {
            bind: 'bbva-analyticmanager-rdc-app-started',
            analytics: ANALYTICS.getStepAnalitycs('appStep1')
          },
          [PAGE_NAME + '_ANALYTICS_STEP_2']: {
            bind: 'bbva-analyticmanager-rdc-app-step-2',
            analytics: ANALYTICS.getStepAnalitycs('appStep2')
          },
          [PAGE_NAME + '_ANALYTICS_STEP_3']: {
            bind: 'bbva-analyticmanager-rdc-app-step-3',
            analytics: ANALYTICS.getStepAnalitycs('appStep3')
          },
          [PAGE_NAME + '_ANALYTICS_STEP_4']: {
            bind: 'bbva-analyticmanager-rdc-app-step-4',
            analytics: ANALYTICS.getStepAnalitycs('appStep4')
          },
          [PAGE_NAME + '_ANALYTICS_APP_COMPLETED']: {
            bind: 'bbva-analyticmanager-rdc-app-completed',
            analytics: ANALYTICS.getStepAnalitycs('appCompleted')
          },
          [PAGE_NAME + '_ANALYTICS_DYNAMIC_FOOTPRINT']: {
            bind: 'bbva-analyticmanager-rdc-dynamic-footprint',
            analytics: ANALYTICS.getErrorAnalitycs('dynamicFootPrint')
          },
          [PAGE_NAME + '_ANALYTICS_SHOW_ADDRESS_FOOTPRINT']: {
            bind: 'bbva-analyticmanager-rdc-show-address-footprint',
            analytics: ANALYTICS.getStepAnalitycs('appShowAddressFootPrint')
          },
          [PAGE_NAME + '_ANALYTICS_FAILED_OPERATION_FOOTPRINT']: {
            bind: 'bbva-analyticmanager-rdc-failed-operation-footprint',
            analytics: ANALYTICS.getErrorAnalitycs('faildOperationFootprint')
          }
        }
      }
    }
  };

  const ACTION_LAUNCHER = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-action-launcher',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_HELP_OPEN_DIALER']: {
            bind: 'openDialer'
          }
        }
      }
    }
  };

  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/request-debit-card'
    },
    pages: pages,
    template: TEMPLATE,
    components: [
      LIFE_CICLE,
      MANAGER_RDC,
      MULTISTEP_RDC,
      GLOMO_CUSTOMERS_MX,
      GLOBAL_APIS_CUSTOMERS_BGADPMOCK,
      GLOBAL_APIS_CARDS_BGADPMOCK,
      MANAGER_ANALYTICS,
      ACTION_LAUNCHER
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);

  signConnector('cells-dm-global-apis-customers-bgadpmock', PAGE_NAME, ['set-customer-addresses', 'error-on-get-customer-addresses']);
  signConnector('cells-dm-global-apis-cards-bgadpmock', PAGE_NAME, ['post-cards-npm', 'error-on-post-cards']);

  return base;
};
