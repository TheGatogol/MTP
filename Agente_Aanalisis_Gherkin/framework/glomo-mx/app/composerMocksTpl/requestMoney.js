'use strict';

module.exports = CONFIG => {
  const pageName = 'requestMoney';
  const {
    createSpinner
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      versions: {
        accountsV1
      },
      requiredToken = 'tsec'
    },
    nativeIos = false,
    native = false
  } = CONFIG;
  const {
    pageVisit,
    appStarted,
    appCompleted,
    _slidesPageView
  } = require('./analytics/_requestMoney')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const base = {
    hash: 'request-money',
    currentPage: {
      url: '/request-money'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            [pageName + '_init_page']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: []
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      private: true,
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
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          [pageName + '_reset_page']: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const accountTransactionServicingRequestMoney = {
    zone: 'app__main',
    type: 'UI',
    tag: 'account-transaction-servicing-request-money',
    familyPath: '@bbva-web-components-widgets/account-transaction-servicing-request-money',
    render: 'litElement',
    properties: {
      host,
      native,
      accountsApiVersion: accountsV1,
      requiredToken,
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'getFinancialData'
          },
          global_storage_get_onboardingRequestMoney_success: {
            bind: 'getLocalStorageData'
          },
          global_storage_get_onboardingRequestMoney_error: {
            bind: 'getLocalStorageData'
          },
          [pageName + '_go_back']: {
            bind: 'finishOnboarding'
          },
          [pageName + '_init_page']: {
            bind: 'init'
          },
          [pageName + '_reset_page']: {
            bind: 'finishOnboarding'
          }
        },
        out: {
          [pageName + '_go_back']: {
            bind: 'account-transaction-servicing-request-money-go-back',
            backStep: true,
            'forward-to-native': true
          },
          [pageName + '_request_money_view']: {
            bind: 'account-transaction-servicing-request-money-view-page-request-money',
            analytics: pageVisit
          },
          [pageName + '_request_money_app_started']: {
            bind: 'account-transaction-servicing-request-money-started-request-money',
            analytics: appStarted
          },
          [pageName + '_request_money_flow_completed']: {
            bind: 'account-transaction-servicing-request-money-complete-request-money',
            analytics: appCompleted
          },
          [pageName + '_onboarding_request_money']: {
            bind: 'account-transaction-servicing-request-money-onboarding-request-money-slide',
            analytics: _slidesPageView('pedir mi dinero')
          },
          [pageName + '_onboarding_can_request']: {
            bind: 'account-transaction-servicing-request-money-onboarding-can-request-slide',
            analytics: _slidesPageView('cuanto dinero puedo pedir')
          },
          [pageName + '_onboarding_can-save']: {
            bind: 'account-transaction-servicing-request-money-onboarding-can-save-slide',
            analytics: _slidesPageView('como puedo ahorrar')
          },
          [pageName + '_onboarding_action_continue']: {
            bind: 'account-transaction-servicing-request-money-finish-onboarding',
            analytics: _slidesPageView('cuando recibo dinero')
          },
          global_set_in_storage: {
            bind: 'account-transaction-servicing-request-money-set-local-storage'
          },
          global_get_from_storage: {
            bind: 'account-transaction-servicing-request-money-get-local-storage'
          },
          global_generic_error: {
            bind: 'account-transaction-servicing-request-money-error-on-get-mock'
          },
          open_control_veil: {
            bind: 'account-transaction-servicing-request-money-service-call'
          },
          close_control_veil: {
            bind: 'account-transaction-servicing-request-money-service-response'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };
  base.components.push(
    lifeCycle,
    createSpinner(CONFIG),
    accountTransactionServicingRequestMoney
  );
  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [ 'onboardingRequestMoney' ], CONFIG);

  return base;
};
