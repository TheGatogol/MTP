/* eslint-disable no-dupe-keys */
'use strict';

module.exports = (CONFIG, OPERATIVE = 'checksManagement') => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(OPERATIVE);
  const COUNTRY = utils.getCountry(CONFIG);// eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS_CHECKS_MANAGEMENT = require('./analytics/_checksManagement')({});
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);

  const MAX_STEPS = 2;

  const base = {
    hash: COUNTRY + '-checks-management',
    currentPage: {
      url: '/checks-management'
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        animationType: 'verticalUp',
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding bg-core-blue' : 'bg-core-blue',
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            checks_management_init_page: {
              bind: 'recalculateHeader'
            },
            checks_management_scroll_zone: {
              bind: 'scrollItemIntoView'
            },
            checks_management_summary_open: {
              bind: 'showConfirm'
            },
            checks_management_reset_scroll: {
              bind: 'resetLayerScroll'
            },
            checks_management_complete_simulation: {
              bind: 'resetLayerScroll'
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
          out: {
            checks_management_scroll_complete: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'DM',
        properties: {
          pageName: OPERATIVE,
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + OPERATIVE]: {
                bind: 'init'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              checks_management_reset_content: {
                bind: 'reset'
              },
              checks_management_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementFootprint('datos cheques')
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
        tag: 'cells-molecule-header',
        type: 'UI',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          rightSecondaryIcon: 'coronita:help',
          titleName: 'glomo-checks-management-header-title',
          cellsConnections: {
            out: {
              checks_management_exit_operative: {
                bind: 'click-right-button'
              },
              checks_management_open_info_modal: {
                bind: 'click-right-secondary-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__confirm',
        type: 'UI',
        tag: 'cells-operation-summary',
        properties: {
          buttonLabel: 'glomo-checks-management-summary-view-continue',
          summaryViewClass: 'aqua-dark-button',
          hideCustomFeesMessage: true,
          operationAmountClass: 'amount-huge-decimals',
          showAddition: true,
          showLoadingSkeleton: true,
          summaryViewTitle: 'glomo-checks-management-review-amount-subtitle',
          cellsConnections: {
            in: {
              checks_management_simulation: {
                bind: 'operation'
              },
              checks_management_leave_the_page: {
                bind: 'refreshTransferSimulation'
              },
              checks_management_disable_execute: {
                bind: 'refreshTransferSimulation'
              },
              checks_management_simulation_error: {
                bind: 'showMessage'
              },
              global_checks_management_set_account_currency_code: {
                bind: 'localCurrency'
              }
            },
            out: {
              checks_management_summary_closed: {
                bind: 'summary-closed'
              },
              checks_management_complete_simulation: {
                bind: 'operation-in-process'
              },
              checks_management_simulation_error_retry: {
                bind: 'click-message-button'
              }
            }
          }
        }
      }
    ]
  };

  const steps = [
    {
      zone: 'app__main',
      tag: 'cells-step-product-selector',
      type: 'UI',
      properties: {
        currentStep: 1,
        maxSteps: MAX_STEPS,
        isOneProduct: true,
        stepTitle: 'checks-management-destiny-label',
        notInitializeWithAttached: true,
        productLabel: 'check-management-accounts-selector-title',
        cellsConnections: {
          in: {
            checks_management_init_page: {
              bind: 'initialize'
            },
            checks_management_set_selected_account: {
              bind: 'selected'
            },
            checks_management_set_selected_account_id: {
              bind: 'defaultProductId'
            },
            checks_management_set_products: {
              bind: 'fetchProducts'
            },
            checks_management_scroll_complete: {
              bind: 'scrollComplete'
            },
            checks_management_leave_the_page: {
              bind: 'reset'
            },
            checks_management_reset_steps: {
              bind: 'reset'
            },
            global_checks_management_set_account_currency_code: {
              bind: 'localCurrency'
            }
          },
          out: {
            checks_management_register_step_channel: {
              bind: 'register-step'
            },
            checks_management_source_selected: {
              bind: 'selected-changed'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-step-select-as-link',
      type: 'UI',
      properties: {
        currentStep: 2,
        maxSteps: MAX_STEPS,
        changeLabel: 'checks-management-edit-label',
        stepTitle: 'checks-management-add-check-step-title',
        showMessage: true,
        showLink: true,
        language: LANGUAGE,
        locale: {
          stepChangeLabel: 'checks-management-steps-change-label',
          stepDescription: 'checks-management-add-check-step-description',
          selectButton: 'checks-management-add-check-step-link-label',
          editButton: 'checks-management-add-check-step-edit-button',
          stepContinueButton: 'checks-management-add-check-step-continue-button-label',
          listDataTitle: 'checks-management-add-check-step-list-data-title',
          listDataMultiTitle: {
            dataTitle1: 'cells-step-select-as-link-list-data-title-one',
            dataTitle2: 'cells-step-select-as-link-list-data-title-two',
            dataTitle3: 'cells-step-select-as-link-list-data-title-three',
            dataTitle4: 'cells-step-select-as-link-list-data-title-four',
            dataTitle5: 'cells-step-select-as-link-list-data-title-five'
          }
        },
        cellsConnections: {
          in: {
            checks_management_set_check_data_multiple: {
              bind: 'data'
            },
            recharge_data_if_cancel: {
              bind: 'data'
            },
            checks_management_leave_the_page: {
              bind: 'reset'
            },
            checks_management_reset_steps: {
              bind: 'reset'
            },
            checks_management_delete_one_check_confirmed: {
              bind: 'data'
            },
            checks_management_delete_check_confirmed: {
              bind: 'reset'
            },
            global_checks_management_photos_reset_process: {
              bind: 'reset'
            },
            checks_management_edit_multi_check: {
              bind: 'reset'
            },
            checks_management_delete_multi_check: {
              bind: 'reset'
            },
            checks_management_go_to_check_aggregator: {
              bind: 'reset'
            },
            checks_management_set_icon_message_text: {
              bind: 'iconMessageText'
            }
          },
          out: {
            checks_management_go_to_check_aggregator: {
              bind: 'link-clicked',
              link: {
                page: 'checksManagementAddCheck'
              }
            },
            checks_management_edit_check: {
              bind: 'cells-step-select-as-link-edit-icon-clicked'
            },
            checks_management_edit_multi_check: {
              bind: 'cells-step-select-as-link-edit-icon-clicked'
            },
            checks_management_delete_check: {
              bind: 'cells-step-select-as-link-delete-icon-clicked'
            },
            checks_management_delete_multi_check: {
              bind: 'cells-step-select-as-link-delete-icon-clicked',
              analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementFootprint('datos cheques', 'eliminar cheque')
            },
            checks_management_register_step_channel: {
              bind: 'register-step'
            },
            checks_management_select_as_link_continue_pressed: {
              bind: 'continue-pressed'
            },
            checks_management_disable_execute: {
              bind: 'cells-step-select-as-link-change-pressed'
            },
            checks_management_analytics_select_as_link_view_step: {
              bind: 'cells-step-focus-in'
            },
            global_request_feature_flag: {
              bind: 'cells-step-focus-in'
            },
            save_checks_before_change: {
              bind: 'save-checks-data'
            }
          }
        }
      }
    }
  ];

  const dms = [
    {
      zone: 'app__main',
      tag: 'glomo-opx-checks-management',
      type: 'DM',
      properties: {
        autoActivateStep: true,
        decorateSteps: true,
        language: LANGUAGE,
        pageName: OPERATIVE,
        dataMultiple: false,
        cellsConnections: {
          in: {
            __bridge_cancelled_back_navigation: {
              bind: 'requestToLeaveThePage'
            },
            checks_management_init_page: {
              bind: 'init'
            },
            checks_management_reset_steps: {
              bind: 'restart'
            },
            checks_management_register_step_channel: {
              bind: 'registerStep',
              previousState: true
            },
            checks_management_source_selected: {
              bind: 'continueStep'
            },
            checks_management_select_as_link_continue_pressed: {
              bind: 'continueStep'
            },
            checks_management_disable_execute: {
              bind: 'manageStateSteps'
            },
            checks_management_exit_operative: {
              bind: 'requestToLeaveThePage'
            },
            global_checks_management_set_account_currency_code: {
              bind: 'currency'
            },
            global_exit_operative_checks_management_accept: {
              bind: 'leaveThePage'
            }
          },
          out: {
            checks_management_leave_the_page: {
              bind: 'leave-the-page',
              backStep: true
            },
            global_alert_manager_open_with_settings: {
              bind: 'ask-for-confirmation-to-leave-page'
            },
            checks_management_init_services: {
              bind: 'init-services'
            },
            checks_management_reset_scroll: {
              bind: 'reset-scroll'
            },
            checks_management_summary_open: {
              bind: 'can-execute-changed'
            },
            checks_management_scroll_zone: {
              bind: 'cells-scroll-zone'
            },
            checks_management_simulation: {
              bind: 'reset-operation-ready'
            },
            checks_management_simulation_ready: {
              bind: 'simulation-ready'
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
        host: CONFIG.globalServices.host,
        native: CONFIG.native,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        accountsApiVersion: CONFIG.globalServices.versions.accountsV1,
        customersApiVersion: CONFIG.globalServices.versions.customers,
        documentId: 'ls1658.pdf',
        language: LANGUAGE,
        paymentDateFormat: utils.getShortFormatDate(),
        compression: utils.checksPhotosCompression,
        customerContact: true,
        hideCustomerContactMessage: true,
        multipleRelease: true,
        cellsConnections: {
          in: {
            global_checks_section_navigate_to_checks_management_add: {
              bind: 'setProducts'
            },
            dashboard_customer_email: {
              bind: 'customerContact'
            },
            checks_management_open_info_modal: {
              bind: 'openChecksManagementInfoModal'
            },
            checks_management_leave_the_page: {
              bind: 'reset'
            },
            checks_management_simulation_ready: {
              bind: 'confirmChecksManagementAuthorize'
            },
            checks_management_summary_closed: {
              bind: 'postCheckBooksManageChecks'
            },
            global_checks_management_set_check_data: {
              bind: 'parseMultipleCheckData'
            },
            checks_management_edit_check: {
              bind: 'sendData'
            },
            checks_management_edit_multi_check: {
              bind: 'sendData'
            },
            checks_management_delete_check: {
              bind: 'confirmDeleteCheck'
            },
            checks_management_delete_multi_check: {
              bind: 'confirmDeleteCheck'
            },
            global_glomo_alert_manager_modal_delete_check_management_accept: {
              bind: 'deleteCurrentCheck'
            },
            global_set_app_settings: {
              bind: 'setAppSettingsParams'
            },
            checks_management_set_check_data_multiple: {
              bind: 'setChecks'
            },
            save_checks_before_change: {
              bind: 'checksSaved'
            },
            checks_management_add_check_confirm_buttons_click_secondary: {
              bind: 'reloadCheckData'
            },
            checks_management_add_check_exit_operative: {
              bind: 'reloadCheckData'
            },
            global_glomo_alert_manager_modal_delete_check_management_cancel: {
              bind: 'reloadCheckData'
            },
            global_exit_operative_checks_management_accept: {
              bind: 'reset'
            },
            checks_management_go_to_check_aggregator: {
              bind: 'validateDataMultiple'
            },
            checks_management_modal_checks_modal_error: {
              bind: 'openChecksModal'
            },
            global_checks_management_set_data_checks_error: {
              bind: 'setChecksError'
            }
          },
          out: {
            global_checks_management_open_info_modal: {
              bind: 'open-info-modal'
            },
            global_checks_management_reset_process: {
              bind: 'checks-management-reset-process'
            },
            checks_management_set_selected_account: {
              bind: 'glomo-checks-management-set-selected-account'
            },
            checks_management_set_selected_account_id: {
              bind: 'glomo-checks-management-set-selected-account-id'
            },
            checks_management_set_products: {
              bind: 'glomo-checks-management-set-products'
            },
            checks_management_set_check_data_multiple: {
              bind: 'checks-management-send-check-data-multiple',
              analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementAppStep('2 confirmar datos', 'liberar cheques', '2 confirmar datos', '2')
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            checks_management_simulation: {
              bind: 'checks-management-authorize-confirm-operation'
            },
            checks_management_checks_management_confirm: {
              bind: 'checks-management-authorize-confirm-operation'
            },
            global_checks_management_response: {
              bind: 'checks-management-go-to-review-1-to-5',
              link: {
                page: 'checksManagementReview'
              }
            },
            global_checks_management_go_to_edit_check: {
              bind: 'checks-management-send-check-data',
              link: {
                page: 'checksManagementAddCheck'
              }
            },
            checks_management_delete_one_check_confirmed: {
              bind: 'checks-management-delete-one-check-confirmed',
              analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementModalDelete('datos cheques', 'eliminar cheque')
            },
            checks_management_reset_steps: {
              bind: 'checks-management-go-to-review'
            },
            checks_management_reset_steps: {
              bind: 'checks-management-go-to-review-1-to-5'
            },
            checks_management_set_icon_message_text: {
              bind: 'checks-management-set-icon-message-text'
            },
            global_checks_management_set_account_currency_code: {
              bind: 'glomo-checks-management-set-account-currency'
            },
            global_checks_management_set_account_local_currency: {
              bind: 'glomo-checks-management-set-account-currency'
            },
            global_checks_management_set_edit_mode: {
              bind: 'checks-management-set-edit-mode'
            },
            global_retry_error: {
              bind: 'retry-error-manage-non-consecutive-checks'
            },
            recharge_data_if_cancel: {
              bind: 'recharge-data'
            },
            global_checks_management_set_data_checks_error: {
              bind: 'checks-management-data-checks-error'
            },
            global_checks_management_data_multiple_validated_analytics: {
              bind: 'checks-management-data-multiple-validated',
              analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementAddCheck('datos cheques', '', 'datos cheques')
            },
            global_checks_management_data_multiple_reloaded_analytics: {
              bind: 'checks-management-data-multiple-reloaded',
              analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementFillCheck('liberar cheques', '1 anadir cheque', 'cancelar')
            },
            global_checks_management_number_of_checks_analytics: {
              bind: 'checks-management-number-of-checks-to-release'
            },
            checks_management_modal_checks_modal_error: {
              bind: 'checks-management-all-checks-fail'
            },
            global_alert_manager_open_with_settings: {
              bind: 'checks-management-checks-modal-error'
            },
            checks_management_release_operation_number: {
              bind: 'checks-management-operation-number'
            }
          }
        }
      }
    }, {
      zone: 'app__main',
      tag: 'glomo-analytics-checks-management-dm',
      familyPath: 'glomo-checks-management-dm',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            global_checks_management_number_of_checks_analytics: {
              bind: 'typology'
            },
            checks_management_select_as_link_continue_pressed: {
              bind: 'appStep3'
            },
            checks_management_sign_open_modal: {
              bind: 'appStep4'
            }
          },
          out: {
            global_checks_management_analytics_step_three: {
              bind: 'analytics-app-step3',
              analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementAppStep('3 confirmacion', 'liberar cheques', '3 confirmacion', '3', true)
            },
            global_checks_management_analytics_step_four: {
              bind: 'analytics-app-step4',
              analytics: ANALYTICS_CHECKS_MANAGEMENT.checksManagementAppStep('4 otp', 'liberar cheques', '4 otp', '4', true, true)
            }
          }
        }
      }
    }
  ];

  base.components.push(...steps, ...dms);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('glomo-checks-management-dm', 'checksManagement', [
    'checks-management-go-to-review',
    'checks-management-go-to-review-1-to-5',
    'checks-management-all-checks-fail',
    'error-on-post-checkbooks-manage-non-consecutive-checks',
    'error-on-post-checkbooks-manage-checks',
    'error-on-post-chequesbooks-manage-non-consecutive-checks',
    'close-sign-modal'
  ]);

  // Add retry errors
  addRetryErrors(base)([
    {
      id: 'checks-management-manage-non-consecutive-checks-error',
      acceptRetry: { bind: 'postCheckbooksManageNonConsecutiveChecks', component: 'glomo-checks-management-dm' },
      cancelRetry: { bind: 'leaveThePage', component: 'glomo-opx-checks-management' },
      acceptCallForHelp: { bind: 'leaveThePage', component: 'glomo-opx-checks-management' }
    }
  ]);

  //Add common errors
  addCommonErrors(base.components)();

  const connectionsOut = utils.connectionsOut(base);

  connectionsOut('cells-sign-operation-dm-mx').checks_management_sign_close_modal = {
    bind: 'signature-cancel-checksManagement'
  };

  connectionsOut('cells-sign-operation-dm-mx').checks_management_sign_open_modal = {
    bind: 'signature-required'
  };

  return base;
};
