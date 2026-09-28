'use strict';
module.exports = config => {
  const pageName = 'historyCredit';
  const pages = require('./common/_pages')(config)(pageName);
  const { SPINNER: spinner, useNames, createPrefixFromPageName } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  const getGlobalName = globalName => 'global_' + getChannelName(globalName).toLowerCase();
  const localName = prefixLocalName => getLocaleName(prefixLocalName).toLowerCase();
  const isNativeIos = config.nativeIos || false;
  const literals = require('./analytics/common/_literals');
  const analytics = require('./analytics/_historyCredit')(config);
  const documentsData = [
    { text: localName('offer-page-document-title'), type: 'document' }
  ];
  const checkboxData = [
    { valid: false, active: true, buttonText: localName('offer-page-checkbox') }
  ];
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      preventScrollWithOverlay: true,
      animationType: 'verticalUp',
      extraHeaderClass: 'dark-blue-bg',
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      private: true,
      tokenName: config.globalServices.requiredToken || 'tsec',
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
          },
          [getChannelName('exit_page')]: {
            bind: 'reset'
          },
          [getChannelName('navigate_to_receipt')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          app_error_access_token: {
            bind: 'access-token-error'
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
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'historyCreditReceipt',
      backAction: 'entrypoint',
      cellsConnections: {
        in: {
          [getChannelName('exit_flow')]: {
            bind: 'goBack'
          },
          history_credit_show_receipt: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getChannelName('exit_page')]: {
            bind: 'entrypoint',
            backStep: true
          },
          [getChannelName('navigate_to_historyCreditReceipt')]: {
            bind: 'navigation-to-historyCreditReceipt',
            link: {
              page: 'historyCreditReceipt',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      id: 'header-' + localName('offer-page'),
      className: 'header--core credit-bureau-header ' + (isNativeIos ? 'ios-top-padding' : ''),
      rightIcon: 'coronita:close',
      titleName: localName('offer-page-header'),
      cellsConnections: {
        out: {
          [getChannelName('go_back_navigation')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const creditBureauAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-credit-bureau-manager',
    familyPath: '@glomo-web-components/glomo-analytics-credit-bureau-manager',
    render: 'litElement',
    properties: {
      config: {
        steps: {
          sign: 'app-step-otp'
        }
      },
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'firePageVisit'
          },
          [getChannelName('show_document')]: {
            bind: 'analyticAuthorization'
          },
          [getChannelName('check_selected')]: {
            bind: 'analyticCheckbox'
          },
          [getChannelName('accept_contract')]: {
            bind: 'analyticAccept'
          },
          [getGlobalName('analytics_page_view')]: {
            bind: 'analyticModal'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'analyticOTP'
          },
          history_credit_show_receipt: {
            bind: 'fireAppCompleted'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('analytics_page_view_credit_bureau')]: {
            bind: 'analytics-page-visit',
            analytics: analytics.appPageVisit
          },
          [getChannelName('analytics_app_started_authorization')]: {
            bind: 'analytics-app-started-authorization',
            analytics: analytics._getAppStarted(literals.commons.viewAuthorization)
          },
          [getChannelName('analytics_app_started_check')]: {
            bind: 'analytics-app-started-check',
            analytics: analytics._getAppStarted(literals.commons.checkRead)
          },
          [getChannelName('analytics_app_started_accept')]: {
            bind: 'analytics-app-started-accept',
            analytics: analytics._getAppStarted(literals.commons.accept)
          },
          [getChannelName('analytics_huella_credit_bureau_modal_authorization')]: {
            bind: 'analytics-app-page-view-modal-authorization',
            analytics: analytics.huellaAvanzadaAuthorization
          },
          [getChannelName('analytics_huella_credit_bureau_modal_error')]: {
            bind: 'analytics-app-page-view-modal-error',
            analytics: analytics.huellaAvanzadaError
          },
          [getChannelName('analytics_otp_credit_bureau')]: {
            bind: 'analytics-app-step-otp',
            analytics: analytics.appStep2
          },
          [getChannelName('analytics_app_completed')]: {
            bind: 'analytics-app-completed',
            analytics: analytics.appCompleted
          }
        }
      }
    }
  };
  const creditBureauManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-credit-bureau-manager-history',
    familyPath: 'glomo-credit-bureau-manager',
    properties: {
      product: 'history-credit',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initConfiguration'
          },
          [getChannelName('valid_offer_page')]: {
            bind: 'validateOfferPage'
          },
          [getChannelName('show_document')]: {
            bind: 'showModalAuthorization'
          },
          [getChannelName('accept_contract')]: {
            bind: 'contractCreditBureau'
          },
          [getChannelName('post_success_customer_terms')]: {
            bind: 'successPostCustomerTerms'
          },
          [getChannelName('post_error_customer_terms')]: {
            bind: 'errorPostCustomerTerms'
          },
          [getChannelName('go_back_navigation')]: {
            bind: 'showModalPageExit'
          },
          global_history_credit_retry_leave_operative: {
            bind: 'leaveOperative'
          },
          global_history_credit_exit_leave_operative: {
            bind: 'leaveOperative'
          }
        },
        out: {
          [getChannelName('init_config')]: {
            bind: 'history-credit-init-configuration'
          },
          [getChannelName('contract_credit')]: {
            bind: 'history-credit-post-credit-bureau'
          },
          [getGlobalName('analytics_page_view')]: {
            bind: 'history-credit-send-analytics-page-view'
          },
          [getChannelName('exit_flow')]: {
            bind: 'history-credit-exit-flow'
          },
          global_alert_manager_open_with_settings: {
            bind: 'history-credit-open-modal'
          },
          history_credit_show_receipt: {
            bind: 'history-credit-send-receipt-data'
          },
          global_set_in_storage: {
            bind: 'history-credit-set-local-storage'
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    }
  };
  const offerPage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    properties: {
      id: 'step-' + localName('offer-page'),
      className: 'offer-page padding-text',
      active: true,
      headerImg: 'images/interestSimulator/customer_comes_first.svg',
      headerImgTitle: localName('offer-page-subtitle'),
      headerImgDescription: localName('offer-page-description'),
      offerPageTitle: localName('modal-tooltip-title'),
      consultText: localName('offer-page-see-document'),
      hideHelpIcon: true,
      hideChangeDataBox: true,
      isButtonPrimary: true,
      checkboxList: checkboxData,
      pdfData: documentsData,
      messageDescription: localName('offer-page-info-message'),
      continueButtonText: localName('btn-accept'),
      showSecondaryButton: true,
      secondaryButtonText: localName('btn-cancel'),
      hiddenHeader: true,
      disableChange: true,
      offerPage: true,
      subheaderHeadingClass: 'subheader-heading-color',
      cellsConnections: {
        in: {
          [getChannelName('reset_page')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('valid_offer_page')]: {
            bind: 'valid-changed'
          },
          [getChannelName('show_document')]: {
            bind: 'request-document'
          },
          [getChannelName('check_selected')]: {
            bind: 'cells-checkbox-button-checked'
          },
          [getChannelName('accept_contract')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('go_back_navigation')]: {
            bind: 'secondary-button-pressed'
          }
        }
      }
    }
  };
  const customersGlobalApis = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers-bgadpmock',
    properties: {
      host: config.globalServices.host,
      native: config.native || false,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      customersApiVersion: config.globalServices.versions.customersV1,
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [getChannelName('contract_credit')]: {
            bind: 'postCustomerTerms'
          }
        },
        out: {
          [getChannelName('post_success_customer_terms')]: {
            bind: 'post-customer-terms'
          },
          [getChannelName('post_error_customer_terms')]: {
            bind: 'error-on-post-customer-terms'
          },
          [getChannelName('send_otp_analytics')]: {
            bind: 'signature-required-first-step-dm'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };
  const base = {
    hash: 'history-credit',
    currentPage: {
      url: '/history-credit'
    },
    pages,
    template,
    components: [
      spinner(config),
      lifeCycle,
      navigationHandler,
      header,
      creditBureauAnalytics,
      creditBureauManager,
      offerPage,
      customersGlobalApis
    ]
  };
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-customers-bgadpmock', pageName, ['post-customer-terms', 'error-on-post-customer-terms']);
  return base;
};
