'use strict';

module.exports = (CONFIG) => {
  const { native = false, nativeIos = false, nativeShell = false,
    globalServices: { host, requiredToken = 'tsec',
      versions: { accounts, calculate, documentsFileV0, piggyBanks }
    }
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)('piggy-banks');
  const { getAppOnClickStart, getPageVisit, getAppStarted, getAppCompleted, internalLink, appStep, getFootprint } = require('./analytics/_piggyBanks')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { createSpinner, pluginDatePicker, getLanguage } = require('./common/helpers/_utils');

  const configPiggyBanks = {
    back: true,
    fixedHeader: true,
    header: {
      id: 'main-header',
      variant: 'first-level-sequential',
      text: 'piggy-banks-piggy-banks-mx-filter-header-title',
      showLeftIcon: true,
      rightButtons: [],
      leftButtons: [
        {
          icon: 'spherica:back',
          accessibilityText: 'piggy-banks-piggy-banks-mx-detail-header-return',
          label: 'piggy-banks-piggy-banks-mx-detail-header-return'
        }
      ]
    }
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      disableScrollLock: true,
      disableEdgeSwipe: true,
      drawerWidth: '100%',
      className: 'bg-light-grey',
      footerHeight: 0,
      headerHeight: 0,
      animationType: 'verticalUp',
      headerFixed: true
    }
  };

  const piggyBanksWidget = {
    zone: 'app__main',
    type: 'UI',
    tag: 'piggy-banks-piggy-banks-mx',
    render: 'litElement',
    familyPath: '@glomo-web-components/piggy-banks-piggy-banks-mx',
    properties: {
      host,
      native,
      requiredToken,
      piggyBanksApiVersion: piggyBanks,
      accountsApiVersion: accounts,
      calculateApiVersion: calculate,
      documentFileApiVersion: documentsFileV0,
      country: 'mx',
      defaultCurrency: 'MXN',
      language: getLanguage(),
      termsAndConditions: { isAgree: false },
      config: configPiggyBanks,
      attachToBody: native,
      cellsConnections: {
        in: {
          bbva_controller_piggy_banks_selected_contract_id: {
            bind: 'selectedContractId'
          },
          bbva_controller_piggy_banks_payroll_amount: {
            bind: 'payrollAvgAmount'
          },
          bbva_controller_piggy_banks_payroll_currency: {
            bind: 'payrollAvgAmountCurrency'
          },
          bbva_piggy_banks_controller_show_onboarding: {
            bind: 'needOnboarding'
          },
          piggy_banks_piggy_banks_set_date_native_connector: {
            bind: 'valuesDate'
          }
        },
        out: {
          piggy_banks_piggy_banks_manage_back_step: {
            bind: 'navigation-go-product-detail',
            backStep: true
          },
          financial_overview_refresh: {
            bind: 'navigation-go-product-detail-refresh',
            backStep: true
          },
          piggy_banks_piggy_banks_list_selected_account: {
            bind: 'piggy-banks-piggy-banks-mx-list-selected-account'
          },
          piggy_banks_piggy_banks_on_account_select: {
            bind: 'piggy-banks-piggy-banks-mx-on-account-select'
          },
          piggy_banks_piggy_banks_mx_on_piggy_bank_select: {
            bind: 'piggy-banks-piggy-banks-mx-on-piggy-bank-select'
          },
          piggy_banks_analytics_app_on_click_start: {
            bind: 'piggy-banks-piggy-banks-mx-new-onboarding-close',
            analytics: getAppOnClickStart('create', 'crear apartado')
          },
          piggy_banks_analytics_create_step_change: {
            bind: 'piggy-banks-piggy-banks-mx-create-step-change'
          },
          piggy_banks_analytics_app_on_click_start_action: {
            bind: 'piggy-banks-piggy-banks-mx-action-select'
          },
          piggy_banks_analytics_app_started_form_name: {
            bind: 'piggy-banks-piggy-banks-mx-create-data-form-name-focus'
          },
          piggy_banks_analytics_app_started_form_amount: {
            bind: 'piggy-banks-piggy-banks-mx-create-data-form-amount-focus'
          },
          piggy_banks_analytics_creation_automatic_saving_toggle: {
            bind: 'piggy-banks-piggy-banks-mx-creation-automatic-saving-toggle'
          },
          piggy_banks_pay_piggy_bank_section_detail: {
            bind: 'piggy-banks-piggy-banks-mx-go-section-detail',
            analytics: internalLink('detalle del apartado', 'cuentas', 'apartado')
          },
          piggy_banks_add_return_money_amount_input_focus: {
            bind: 'piggy-banks-piggy-banks-mx-add-return-money-amount-input-focus'
          },
          piggy_banks_submit_add_remove_money: {
            bind: 'piggy-banks-piggy-banks-mx-submit-add-remove-money'
          },
          piggy_banks_piggy_banks_create_piggy_bank_success_modal_open: {
            bind: 'piggy-banks-piggy-banks-mx-create-piggy-bank-success-modal-open'
          },
          piggy_banks_analytics_multistep_all_complete: {
            bind: 'piggy-banks-piggy-banks-mx-multistep-all-complete'
          },
          piggy_banks_analytics_periodicity_select: {
            bind: 'piggy-banks-piggy-banks-mx-periodicity-select'
          },
          piggy_banks_analytics_create_step_completed_change: {
            bind: 'piggy-banks-piggy-banks-mx-create-step-completed-change'
          },
          piggy_banks_analytics_response_ko_create: {
            bind: 'piggy-banks-piggy-banks-mx-response-ko-create',
            analytics: getFootprint('create', 'error operacion no realizada', '', true, 'error operacion no realizada')
          },
          piggy_banks_piggy_banks_request_start_native_datepicker: {
            bind: 'piggy-banks-piggy-banks-mx-rules-form-start-date-calendar-open'
          },
          piggy_banks_piggy_banks_request_end_native_datepicker: {
            bind: 'piggy-banks-piggy-banks-mx-rules-form-end-date-calendar-open'
          },
          piggy_banks_piggy_banks_access_rules: {
            bind: 'piggy-banks-piggy-banks-mx-access-rules-click',
            analytics: getFootprint('percentage', 'listado', '', true)
          },
          piggy_banks_piggy_banks_piggy_bank_detail_open: {
            bind: 'piggy-banks-piggy-banks-mx-piggy-bank-detail-open',
            analytics: getFootprint('percentage', 'dashboard', '', true)
          },
          piggy_banks_piggy_banks_access_more_detail_open: {
            bind: 'piggy-banks-piggy-banks-more-detail-open',
            analytics: getFootprint('percentage', 'detalle', '', true)
          },
          params: {
            customerId: 'global_user_id'
          }
        }
      }
    }
  };

  const piggyBanksController = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-piggy-banks-mx',
    familyPath: '@glomo-web-components/bbva-controller-piggy-banks-mx',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      piggyBanksApiVersion: piggyBanks,
      accountsApiVersion: accounts,
      productsTypesAllowed: ['AH', 'CH'],
      cellsConnections: {
        in: {
          piggy_banks_controller_reset_page: {
            bind: 'reset'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          piggy_banks_piggy_banks_list_selected_account: {
            bind: 'validateChangeSelectedAccount'
          },
          piggy_banks_piggy_banks_on_account_select: {
            bind: 'validateChangeSelectedAccount'
          },
          piggy_banks_piggy_banks_mx_on_piggy_bank_select: {
            bind: 'validateChangeSelectedAccount'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          },
          piggy_banks_piggy_banks_request_start_native_datepicker: {
            bind: 'openCalendar'
          },
          piggy_banks_piggy_banks_request_end_native_datepicker: {
            bind: 'openCalendar'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'datePickerSuccess'
          },
          global_nativeconnector_date_picker_launch_error: {
            bind: 'datePickerError'
          }
        },
        out: {
          bbva_controller_piggy_banks_payroll_amount: {
            bind: 'bbva-controller-piggy-banks-mx-payroll-amount'
          },
          bbva_controller_piggy_banks_payroll_currency: {
            bind: 'bbva-controller-piggy-banks-mx-payroll-currency'
          },
          global_nativeconnector_datepicker_launch: {
            bind: 'bbva-controller-piggy-banks-mx-calendar-open'
          },
          piggy_banks_piggy_banks_set_date_native_connector: {
            bind: 'bbva-controller-piggy-banks-mx-date-picker-set'
          },
          dashboard_refresh_financial_overview: {
            bind: 'bbva-controller-piggy-banks-mx-refresh-account-data'
          },
          bbva_controller_piggy_banks_selected_contract_id: {
            bind: 'bbva-controller-piggy-banks-mx-selected-contract-id'
          }
        },
        params: {
          user: 'global_user'
        }
      }
    }
  };

  const piggyBanksAnalyticmanager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-piggy-banks-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-piggy-banks',
    render: 'litElement',
    properties: {
      modalSuccess: 'modalSuccess',
      modalCreate: 'modalCreatePiggyBank',
      cellsConnections: {
        in: {
          piggy_banks_reset_page: {
            bind: 'reset'
          },
          piggy_banks_analytics_create_step_change: {
            bind: 'fireViewPiggybankSteps'
          },
          piggy_banks_analytics_app_on_click_start_action: {
            bind: 'fireButtonRowEvents'
          },
          piggy_banks_add_return_money_amount_input_focus: {
            bind: 'fireAddReturnInputFocus'
          },
          piggy_banks_submit_add_remove_money: {
            bind: 'submitAddReturnMoney'
          },
          piggy_banks_piggy_banks_create_piggy_bank_success_modal_open: {
            bind: 'firePiggyBankModalsSuccessful'
          },
          piggy_banks_analytics_multistep_all_complete: {
            bind: 'firePiggybankConfirmation'
          },
          piggy_banks_analytics_creation_automatic_saving_toggle: {
            bind: 'fireClickInToggleButton'
          },
          piggy_banks_analytics_periodicity_select: {
            bind: 'fireSelectOption'
          },
          piggy_banks_analytics_create_step_completed_change: {
            bind: 'tempMethod'
          },
          piggy_banks_analytics_app_started_form_name: {
            bind: 'fireClickInputName'
          },
          piggy_banks_analytics_app_started_form_amount: {
            bind: 'fireClickInputAmount'
          }
        },
        out: {
          analytics_create_piggy_banks_page_visit_data_section: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-create-piggy-bank-page-visit',
            analytics: getPageVisit('create', 'crear apartado', '1 datos del apartado')
          },
          analytics_create_piggy_bank_input_name_click: {
            bind: 'bbva-analyticmanager-piggy-banks-create-piggy-bank-input-name-click',
            analytics: getAppStarted('create', 'nombre del apartado')
          },
          analytics_create_piggy_bank_input_amount_click: {
            bind: 'bbva-analyticmanager-piggy-banks-create-piggy-bank-input-amount-click',
            analytics: getAppStarted('create', 'monto')
          },
          analytics_create_piggy_bank_summary_open: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-create-piggy-bank-summary-open',
            analytics: appStep('create', '2 confirmacion', '2')
          },
          analytics_piggy_banks_create_piggy_bank_success_modal_open: {
            bind: 'bbva-analyticmanager-piggy-banks-create-piggy-bank-success-modal-open',
            analytics: getAppCompleted('create')
          },
          analytics_create_piggy_banks_button_toggle_click: {
            bind: 'bbva-analyticmanager-piggy-banks-create-piggy-bank-toggle-button-click',
            analytics: getAppStarted('automatic', 'aportaciones automaticas')
          },
          analytics_create_piggy_banks_page_visit_create_rule: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-create-piggy-bank-with-rule-view',
            analytics: getFootprint('create', '1 datos del apartado', 'aportacion periodica', false, false)
          },
          analytics_piggy_banks_internal_link_add_money: {
            bind: 'bbva-analyticmanager-piggy-banks-add-money-row-button-click',
            analytics: getAppOnClickStart('add', 'anadir dinero', 'apartado')
          },
          analytics_piggy_banks_page_visit_add_money: {
            bind: 'bbva-analyticmanager-piggy-banks-add-money-page-visit',
            analytics: getPageVisit('add', 'abonar apartado', '1 importe')
          },
          analytics_piggy_banks_add_money_input_click: {
            bind: 'bbva-analyticmanager-piggy-banks-add-money-input-click',
            analytics: getAppStarted('add', 'importe')
          },
          analytics_piggy_banks_add_money_success_modal_open: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-add-money-success-modal-open',
            analytics: getAppCompleted('add', 'abonar apartado', 'pagina exitosa')
          },
          analytics_piggy_banks_internal_link_return_money: {
            bind: 'bbva-analyticmanager-piggy-banks-return-money-row-button-click',
            analytics: getAppOnClickStart('return', 'retirar dinero', 'apartado')
          },
          analytics_piggy_banks_page_visit_return_money: {
            bind: 'bbva-analyticmanager-piggy-banks-return-money-page-visit',
            analytics: getPageVisit('return', 'retirar apartado', '1 importe')
          },
          analytics_piggy_banks_return_money_input_click: {
            bind: 'bbva-analyticmanager-piggy-banks-return-money-input-click',
            analytics: getAppStarted('return', 'monto a retirar')
          },
          analytics_piggy_banks_return_money_success_modal_open: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-return-money-success-modal-open',
            analytics: getAppCompleted('return')
          }
        }
      }
    }
  };

  const base = {
    hash: 'piggy-banks',
    currentPage: {
      url: '/piggy-banks'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'piggyBanks',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_piggyBanks: {
                bind: 'init'
              }
            },
            out: {
              piggy_banks_reset_page: {
                bind: 'reset'
              },
              piggy_banks_init_page: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      piggyBanksController,
      piggyBanksWidget,
      piggyBanksAnalyticmanager
    ]
  };

  if (!nativeIos && nativeShell) {
    base.components.push(pluginDatePicker(CONFIG));
  }

  addCommonErrors(base.components)();
  return base;
};
