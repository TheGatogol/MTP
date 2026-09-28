'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const COUNTRY = utils.getCountry(CONFIG);
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('checksManagementAddCheck');
  const ANALYTICS_CHECKS_MANAGEMENT = require('./analytics/_checksManagement')({});

  const configButtons = {
    buttons: {
      primary: {
        text: 'checks-management-add-check-save-button',
        disabled: true
      },
      secondary: {
        text: 'checks-management-add-check-cancel-button',
        class: 'link'
      }
    }
  };

  const base = {
    hash: COUNTRY + '-checks-management-add-check',
    currentPage: {
      url: '/checks-management/add-check',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding bbva-core-blue' : 'bbva-core-blue',
        cellsConnections: {
          in: {
            checks_management_add_check_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            }
          },
          out: { }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'checksManagementAddCheck',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_checksManagementAddCheck: {
                bind: 'init'
              }
            },
            out: {
              checks_management_add_check_reset_page: {
                bind: 'reset'
              },
              checks_management_add_check_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementAppPageVisit('liberar cheques', '1 anadir cheque', 'anadir cheque')
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--white',
          rightIcon: 'coronita:close',
          titleName: 'glomo-checks-management-add-check-header-title',
          cellsConnections: {
            in: {},
            out: {
              checks_management_add_check_exit_operative: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-check-aggregator',
        properties: {
          amountLanguage: LANGUAGE,
          hideList: true,
          hideDate: true,
          showInputNumber: true,
          allowEnabledInput: true,
          hideSeparator: true,
          minAmountInput: 0.99,
          infoSectionTitle: '',
          infoSectionDescription: 'checks-management-add-check-title',
          checkNumberInfoMessage: 'checks-management-checks-number-info-label',
          numberInputLabel: 'checks-management-authorize-check-number',
          amountInputLabel: 'checks-management-authorize-check-amount',
          checkNumberAutoValidate: true,
          checkNumberErrorMessage: 'checks-management-authorize-check-number-error-message',
          checkAmountErrorMessage: 'checks-management-authorize-check-amount-error-message',
          validateCheckAmount: true,
          checkNumberAllowedChars: '[0-9]',
          checkNumberAllowedValue: '^[0-9]{7}$',
          excludeCurrentTargetOnFocusEvent: true,
          cellsConnections: {
            in: {
              global_checks_management_set_account_currency_code: {
                bind: 'currencyCode'
              },
              global_checks_management_set_account_local_currency: {
                bind: 'localCurrency'
              },
              checks_management_check_aggregator_set_data: {
                bind: 'setDataCheck'
              },
              checks_management_add_check_reset_page: {
                bind: 'reset'
              }
            },
            out: {
              checks_management_add_data_check_aggregator: {
                bind: 'notify-changes-data-check-aggregator'
              },
              checks_management_input_check_number_focus: {
                bind: 'cells-molecule-input-focus'
              },
              checks_management_input_check_amount_focus: {
                bind: 'amount-input-focus'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        properties: {
          unfixed: true,
          hideDivider: true,
          config: configButtons,
          cellsConnections: {
            in: {
              checks_management_add_check_enable_continue_button: {
                bind: 'enablePrimaryButton'
              },
              checks_management_add_check_disable_continue_button: {
                bind: 'disablePrimaryButton'
              },
              checks_management_add_check_reset_page: {
                bind: 'disablePrimaryButton'
              }
            },
            out: {
              checks_management_add_check_confirm_buttons_click_primary: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              checks_management_add_check_confirm_buttons_click_secondary: {
                bind: 'cells-confirm-buttons-click-secondary',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-checks-management-dm',
        type: 'DM',
        properties: {
          minAmountInput: 0.99,
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'requestToLeaveThePage'
              },
              checks_management_add_check_confirm_buttons_click_primary: {
                bind: 'sendData'
              },
              global_checks_management_go_to_edit_check: {
                bind: 'editCheck'
              },
              checks_management_add_data_check_aggregator: {
                bind: 'setStatusContinueButton'
              },
              global_checks_management_set_edit_mode: {
                bind: 'editMode'
              },
              checks_management_go_to_check_aggregator: {
                bind: 'initPage'
              },
              checks_management_add_check_exit_operative: {
                bind: 'requestToLeaveThePage'
              },
              global_exit_operative_checks_management_add_check_accept: {
                bind: 'leaveThePage'
              },
              checks_management_input_check_number_focus: {
                bind: 'firstCheckFilled'
              },
              checks_management_input_check_amount_focus: {
                bind: 'firstCheckFilled'
              }
            },
            out: {
              checks_management_add_check_enable_continue_button: {
                bind: 'checks-management-enabled-continue-button'
              },
              checks_management_add_check_disable_continue_button: {
                bind: 'checks-management-disable-continue-button'
              },
              checks_management_check_aggregator_set_data: {
                bind: 'checks-management-set-check-data',
                analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementFootprint('datos cheques', 'editar cheque')
              },
              checks_management_add_check_analytics: {
                bind: 'glomo-checks-management-no-data-loaded'
              },
              global_checks_management_set_check_data: {
                bind: 'checks-management-send-check-data',
                backStep: true
              },
              checks_management_add_check_leave_the_page: {
                bind: 'leave-the-page',
                backStep: true
              },
              global_alert_manager_open_with_settings: {
                bind: 'ask-for-confirmation-to-leave-page'
              },
              global_checks_management_data_multiple_check_number_selected_analytics: {
                bind: 'checks-management-first-check-number',
                analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementFillCheck('liberar cheques', '1 anadir cheque',  'numero de cheque')
              },
              global_checks_management_data_multiple_amount_selected_analytics: {
                bind: 'checks-management-first-check-amount',
                analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementFillCheck('liberar cheques', '1 anadir cheque',  'importe')
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
