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
  const pageName = 'ocCarLoanAccountSelection';
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-header-main',
    tag: 'bbva-header-main',
    render: 'litElement',
    properties: {
      text: 'bbva-oc-car-loan-account-selection-header-title',
      iconRightPrimary: 'bbva:close',
      variant: 'modal-three-level',
      accessibilityTextIconRightPrimary: 'Close',
      cellsConnections: {
        out: {
          [getChannelName('account_selection_exit_page')]: {
            bind: 'header-main-icon-right-primary-click',
            backStep: true
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
          [getChannelName('account_selected_tracking_success')]: {
            bind: 'patchTrackingInformation'
          }
        },
        out: {
          [getChannelName('account_selected_tracking_information_success')]: {
            bind: 'patch-tracking-information-success'
          },
          [getChannelName('account_selected_tracking_information_error')]: {
            bind: 'patch-tracking-information-error'
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
          [getChannelName('account_selected_button')]: {
            bind: 'accountSelected'
          },
          [getChannelName('account_selected')]: {
            bind: 'accountSelectedList'
          },
          [getChannelName('account_selected_tracking_information_success')]: {
            bind: 'accountSuccessPage'
          },
          [getChannelName('account_selected_tracking_information_error')]: {
            bind: 'retryError'
          },
          global_retry_error: {
            bind: 'closeSpinner'
          }
        },
        out: {
          [getChannelName('accounts')]: {
            bind: 'oc-car-loan-more-valid-account'
          },
          [getChannelName('account_selection_guideline')]: {
            bind: 'oc-car-loan-guideline'
          },
          [getChannelName('account_selection_hide_button')]: {
            bind: 'oc-car-loan-hide-button'
          },
          [getChannelName('account_selection_link_view_more')]: {
            bind: 'oc-car-loan-link-view-more'
          },
          [getChannelName('account_selected_tracking_success')]: {
            bind: 'account-success-tracking'
          },
          oc_car_loan_account_selection_date_time_account: {
            bind: 'date-time-account-success'
          },
          oc_car_loan_account_selection_success_payload: {
            bind: 'account-data-success',
            link: {
              page: 'ocCarLoanAccountSelectionSuccess',
              cleanUntil: pageName
            }
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          global_open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          }
        }
      }
    }
  };

  const handlerlifeCycle = {
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
          ch_oc_car_loan_account_selection_init_page: {
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

  const headerCategory = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tag: 'bbva-header-category',
    render: 'litElement',
    attributes: {
      'hide-padding-bottom': 'true'
    },
    properties: {
      id: 'descriptionTitle',
      className: 'u-margin-top--0-5',
      text: 'bbva-oc-car-loan-charge-account'
    }
  };

  const textDescriptionTitle = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1',
      size: 'S',
      cellsConnections: {
        in: {
          [getChannelName('account_selection_guideline')]: {
            bind: 'text'
          }
        }
      }
    }
  };

  const textDescription = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-text',
    tag: 'bbva-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-top--1-5',
      size: 'S',
      text: 'bbva-account-selection-oc-car-loan-movements-info-guideline-2'
    }
  };

  const headerListAccounts = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    tag: 'bbva-header-category',
    render: 'litElement',
    attributes: {
      amount: 'true'
    },
    properties: {
      id: 'accountsTitle',
      text: 'bbva-oc-car-loan-account-text',
      variant: 'card',
      cellsConnections: {
        in: {
          [getChannelName('account_selection_link_view_more')]: {
            bind: 'optionLink'
          }
        },
        out: {
          [getChannelName('account_selection_link_view_more_click')]: {
            bind: 'header-category-link-click',
            link: {
              page: 'ocCarLoanAccountListSelection'
            }
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
        in: {
          [getChannelName('accounts')]: {
            bind: 'itemsList'
          }
        },
        out: {
          [getChannelName('account_selected')]: {
            bind: 'bbva-aggregation-list-item-click'
          }
        }
      }
    }
  };

  const button = {
    zone: 'app__footer',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-button-default',
    tag: 'bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--1-5',
      text: 'bbva-oc-car-loan-button-continue-text',
      cellsConnections: {
        in: {
          [getChannelName('account_selection_hide_button')]: {
            bind: 'hidden'
          }
        },
        out: {
          [getChannelName('account_selected_button')]: {
            bind: 'click'
          }
        }
      }
    }
  };

  const base = {
    hash: 'oc-car-loan-account-selection',
    currentPage: {
      url: '/ocCarLoanAccountSelection'
    },
    pages,
    template,
    components: [
      spinner,
      header,
      handlerlifeCycle,
      headerCategory,
      loanAccountSelectionDm,
      apiSelectAccount,
      textDescriptionTitle,
      textDescription,
      headerListAccounts,
      cardListAccounts,
      button
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
