'use strict';

module.exports = (CONFIG) => {
  const {
    useNames,
    createPrefixFromPageName,
    createSpinner,
    footerHeight
  } = require('./common/helpers/_utils');
  const {
    globalServices: {host, requiredToken = 'tsec', versions: {accounts}},
    native = false,
    nativeIos = false
  } = CONFIG;
  const pageName = 'ocCarLoanAccountListSelection';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const [ getChannelName ] = useNames(createPrefixFromPageName(pageName));
  const spinner = createSpinner(CONFIG);
  spinner.properties.className = 'solid-spinner';

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      footerFixed: true,
      footerHeight,
      iOSFixedHeader: nativeIos
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_ocCarLoanAccountSelection: {
            bind: 'init'
          }
        },
        out: {
          close_control_veil: {
            bind: 'init-page'
          },
          [getChannelName('account_selection_reset_page')]: {
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-header-main',
    tag: 'bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'bbva-oc-car-loan-account-text',
      iconRightPrimary: 'bbva:close',
      variant: 'modal-three-level',
      accessibilityTextIconRightPrimary: 'Close',
      cellsConnections: {
        out: {
          ch_oc_car_loan_account_selection_exit_page: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const loanAccountSelectionDm = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'bbva-account-selection-manager-oc-car-loan',
    familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
    render: 'litElement',
    properties: {
      apiVersion: accounts,
      host,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          ch_oc_car_loan_send_accounts: {
            bind: 'accountsValidation'
          },
          ch_oc_car_loan_set_proposal_id: {
            bind: 'proposalId'
          },
          [getChannelName('account_selected_modal')]: {
            bind: 'accountSelectedList'
          },
          [getChannelName('account_selected_tracking_information_success_modal')]: {
            bind: 'accountSuccessPage'
          },
          [getChannelName('account_selected_tracking_information_error_modal')]: {
            bind: 'retryError'
          }
        },
        out: {
          [getChannelName('accounts_modal')]: {
            bind: 'oc-car-loan-more-valid-account-modal'
          },
          [getChannelName('account_selected_tracking_success_modal')]: {
            bind: 'account-success-tracking'
          },
          ch_oc_car_loan_set_proposal_id: {
            bind: 'set-proposal-id'
          },
          oc_car_loan_account_selection_date_time_account: {
            bind: 'date-time-account-success'
          },
          oc_car_loan_account_selection_success_payload: {
            bind: 'account-data-success',
            link: {
              page: 'ocCarLoanAccountSelectionSuccess',
              cleanUntil: 'ocCarLoanAccountSelection'
            }
          },
          global_open_control_veil: {
            bind: 'show-spinner'
          },
          global_retry_error: {
            bind: 'retry-error'
          }
        }
      }
    }
  };

  const apiSelectAccount = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-consumer-finance-dossiers',
    familyPath: '@glomo-web-components/bbva-dataprovider-consumer-finance-dossiers',
    render: 'litElement',
    properties: {
      apiVersion: accounts,
      host,
      native,
      requiredToken,
      otpId: pageName,
      requiredOTP: true,
      cellsConnections: {
        in: {
          [getChannelName('account_selected_tracking_success_modal')]: {
            bind: 'patchTrackingInformation'
          }
        },
        out: {
          [getChannelName('account_selected_tracking_information_success_modal')]: {
            bind: 'patch-tracking-information-success'
          },
          [getChannelName('account_selected_tracking_information_error_modal')]: {
            bind: 'patch-tracking-information-error'
          }
        }
      }
    }
  };

  const cardListAccounts = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-aggregation-card-list',
    tag: 'bbva-aggregation-card-list',
    render: 'litElement',
    properties: {
      cellsConnections: {
        className: 'u-margin-top--1',
        in: {
          [getChannelName('accounts_modal')]: {
            bind: 'itemsList'
          }
        },
        out: {
          [getChannelName('account_selected_modal')]: {
            bind: 'bbva-aggregation-list-item-click'
          }
        }
      }
    }
  };

  const base = {
    hash: 'oc-car-loan-account-list-selection',
    currentPage: {
      url: '/ocCarLoanAccountListSelection'
    },
    pages,
    template,
    components: [
      spinner,
      header,
      lifeCycle,
      loanAccountSelectionDm,
      apiSelectAccount,
      cardListAccounts
    ]
  };

  const widgetSignConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  widgetSignConnector('bbva-dataprovider-consumer-finance-dossiers');
  widgetSignConnector('bbva-account-selection-manager-oc-car-loan',
    {
      widgetId: 'retry-error-default',
      acceptRetry: { bind: 'retryError', component: 'bbva-account-selection-manager-oc-car-loan' }
    }
  );

  return base;
};