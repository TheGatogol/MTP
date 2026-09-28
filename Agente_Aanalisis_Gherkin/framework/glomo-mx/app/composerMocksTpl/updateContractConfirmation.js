'use strict';

module.exports = config => {
  const pageName = 'updateContractConfirmation';
  const { createPrefixFromPageName, useNames, createSpinnerMain } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getGlobalName = _name => `global_${getChannelName(_name)}`.toLowerCase();
  const _localStorage = require('./common/_local-storage');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { accounts } },
    native = false,
    nativeIos = false
  } = config;
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      animationType: 'verticalUp',
      className: nativeIos ? 'ios-top-padding' : ''
    }
  };
  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'update-contract-payroll-header',
      cellsConnections: {
        in: {
          [getGlobalName('manager_update_contract_set_header')]: {
            bind: 'titleName'
          }
        },
        out: {
          [getGlobalName('molecule_header_click_right_button')]: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };
  const managerUpdateContract = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-update-contract',
    familyPath: '@glomo-web-components/bbva-manager-update-contract',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_account_navigate_to_update_account: {
            bind: 'setManagerInitialData'
          },
          [getGlobalName('molecule_header_click_right_button')]: {
            bind: 'requestExitConfirmation'
          },
          [getGlobalName('multistep_update_contract_post_confirmation')]: {
            bind: 'postDocumentationDossiers'
          },
          [getGlobalName('global_apis_accounts_success_documentation')]: {
            bind: 'handlePostDocumentationDossiers'
          },
          [getGlobalName('global_apis_accounts_error_documentation')]: {
            bind: 'errorPostDocumentationDossiers'
          },
          dashboard_customer_email: {
            bind: 'contactDetailEmail'
          },
          alert_manager_accept_update_contract_confirmation_exit: {
            bind: 'resetConfirmation'
          },
          alert_manager_accept_update_contract_success_modal: {
            bind: 'exitSuccessPage'
          },
          alert_manager_cancel_update_contract_success_modal: {
            bind: 'exitSuccessPage'
          },
          alert_manager_accept_update_contract_retry_modal: {
            bind: 'postDocumentationDossiers'
          },
          alert_manager_accept_update_contract_error_modal: {
            bind: 'resetConfirmation'
          },
          alert_manager_cancel_update_contract_incomplete_modal: {
            bind: 'resetConfirmation'
          },
          [getGlobalName('manager_update_contract_return_to_dashboard')]: {
            bind: 'resetConfirmation'
          }
        },
        out: {
          [getGlobalName('manager_update_contract_set_header')]: {
            bind: 'switch-header-text'
          },
          [getGlobalName('manager_update_contract_set_ui')]: {
            bind: 'send-to-ui'
          },
          [getGlobalName('manager_update_contract_post_dossier')]: {
            bind: 'post-documentation-dossiers'
          },
          open_control_veil: {
            bind: 'manager-update-contract-show-spinner'
          },
          close_control_veil: {
            bind: 'manager-update-contract-hide-spinner'
          },
          global_set_in_storage: {
            bind: 'manager-update-contract-set-update-contract-success-date'
          },
          global_alert_manager_open_with_settings: {
            bind: 'error-update-contract-show-modal'
          },
          [getGlobalName('manager_update_contract_reset_terms')]: {
            bind: 'reset-update-contract-terms'
          },
          [getGlobalName('manager_update_contract_return_to_dashboard')]: {
            bind: 'success-update-contract-return',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          }
        }
      }
    }
  };
  const multistepUpdateContract = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-multistep-update-contract',
    familyPath: '@glomo-web-components/bbva-multistep-update-contract',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getGlobalName('manager_update_contract_set_ui')]: {
            bind: 'product'
          },
          [getGlobalName('manager_update_contract_reset_terms')]: {
            bind: 'resetCheckbox'
          }
        },
        out: {
          [getGlobalName('multistep_update_contract_post_confirmation')]: {
            bind: 'multistep-request-save-confirmation'
          }
        }
      }
    }
  };
  const globalApisAccounts = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-dm-global-apis-accounts-bgadpmock',
    properties: {
      host: host,
      native: native,
      accountsApiVersion: accounts,
      requiredToken: requiredToken,
      cellsConnections: {
        in: {
          [getGlobalName('manager_update_contract_post_dossier')]: {
            bind: 'postCreateDocumentation'
          }
        },
        out: {
          [getGlobalName('global_apis_accounts_success_documentation')]: {
            bind: 'set-create-documentation'
          },
          [getGlobalName('global_apis_accounts_error_documentation')]: {
            bind: 'error-on-get-create-documentation'
          }
        }
      }
    }
  };
  const base = {
    currentPage: {
      url: '/update-contract-confirmation'
    },
    hash: 'update-contract-confirmation',
    template,
    components: [
      moleculeHeader,
      managerUpdateContract,
      multistepUpdateContract,
      globalApisAccounts,
      createSpinnerMain(config)
    ]
  };
  _localStorage.addOutStorageChannels(base.components, [ 'update_contract_success_date' ], config);
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-accounts-bgadpmock', pageName, ['error-on-get-create-documentation', 'set-create-documentation']);
  return base;
};
