/* eslint-disable new-cap, no-dupe-keys */
'use strict';

module.exports = (CONFIG, OPERATIVE = 'checksDeposits') => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const pages = require('./common/_pages')(CONFIG)('checksDeposits');

  const SPINNER = utils.SPINNER(CONFIG);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS_CHECKS_DEPOSIT = require('./analytics/_checksDeposit')('checksDeposits');
  const OPERATIONS = [
    {
      label: 'glomo-checks-deposits-share',
      id: 'share',
      icon: 'coronita:share',
      disabled: false,
      operative: 'checkDepositAdd'
    }
  ];

  let MAX_STEPS = 2;

  const base = {
    hash: 'checks-deposits',
    currentPage: {
      url: '/checks-deposits'
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
            checks_deposits_init_page: {
              bind: 'recalculateHeader'
            },
            checks_deposits_scroll_zone: {
              bind: 'scrollItemIntoView'
            },
            checks_deposits_summary_open: {
              bind: 'showConfirm'
            },
            checks_deposits_reset_scroll: {
              bind: 'resetLayerScroll'
            },
            checks_deposits_complete_simulation: {
              bind: 'resetLayerScroll'
            },
            checks_deposits_modal_visibility_changed: {
              bind: 'setModalActive'
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
            checks_deposits_scroll_complete: {
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
              checks_deposits_reset_content: {
                bind: 'reset'
              },
              checks_deposits_init_page: {
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
      {
        zone: 'app__confirm',
        type: 'UI',
        tag: 'cells-operation-summary',
        properties: {
          summaryViewClass: 'aqua-dark-button',
          localCurrency: LOCAL_CURRENCY,
          buttonLabel: 'glomo-checks-deposits-summary-view-continue',
          showLegalTerms: false,
          showAddition: true,
          showLoadingSkeleton: true,
          showFeesIcon: false,
          summaryViewTitle: 'glomo-checks-deposits-summary-title',
          message: 'glomo-standard-error-handler-simulation-message',
          messageButtonLabel: 'alert-generic-error-retry',
          messageClass: 'no-heading',
          noFeesMessage: 'checks-deposits',
          cellsConnections: {
            in: {
              checks_deposits_simulation: {
                bind: 'operation'
              },
              checks_deposits_disable_execute: {
                bind: 'refreshTransferSimulation'
              },
              checks_deposits_simulation_error: {
                bind: 'showMessage'
              }
            },
            out: {
              checks_deposits_summary_closed: {
                bind: 'summary-closed'
              },
              checks_deposits_complete_simulation: {
                bind: 'operation-in-process'
              },
              checks_deposits_simulation_error_retry: {
                bind: 'click-message-button'
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
          titleName: 'glomo-checks-deposits-header-title',
          cellsConnections: {
            out: {
              checks_deposits_exit_operative: {
                bind: 'click-right-button'
              },
              checks_deposits_open_info_modal: {
                bind: 'click-right-secondary-button'
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
        localCurrency: LOCAL_CURRENCY,
        isOneProduct: true,
        stepTitle: 'checks-deposits-destiny-label',
        notInitializeWithAttached: true,
        productLabel: 'check-deposits-accounts-selector-title',
        cellsConnections: {
          in: {
            checks_deposits_init_page: {
              bind: 'initialize'
            },
            checks_deposits_set_selected_product: {
              bind: 'selected'
            },
            checks_deposits_set_selected_product_id: {
              bind: 'defaultProductId'
            },
            checks_deposits_set_products: {
              bind: 'fetchProducts'
            },
            checks_deposits_scroll_complete: {
              bind: 'scrollComplete'
            },
            checks_deposits_leave_the_page: {
              bind: 'reset'
            },
            checks_deposits_reset_steps: {
              bind: 'reset'
            },
            checks_deposits_custom_acepted: {
              bind: 'reset'
            }
          },
          out: {
            checks_deposits_register_step_channel: {
              bind: 'register-step'
            },
            checks_deposits_source_selected: {
              bind: 'selected-changed'
            },
            checks_deposits_collapse_other_step: {
              bind: 'change-step-state'
            },
            checks_deposits_continue_product_selected: {
              bind: 'on-change-product-selected'
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
        className: 'checks-deposits-add',
        currentStep: 2,
        maxSteps: MAX_STEPS,
        changeLabel: 'checks-deposits-edit-label',
        stepTitle: 'checks-deposits-add-check-step-title',
        language: 'en',
        showMessage: true,
        hidePrimaryListData: true,
        showSecondaryListData: true,
        locale: {
          stepChangeLabel: 'checks-deposits-steps-change-label',
          stepDescription: 'checks-deposits-add-check-step-description',
          selectButton: 'checks-deposits-add-check-step-link-label',
          editButton: 'checks-deposits-add-check-step-edit-button',
          stepContinueButton: 'checks-deposits-add-check-step-continue-button-label',
          listDataTitle: 'checks-deposits-add-check-step-list-data-title',
          listDataTitleCollapse: ''
        },
        cellsConnections: {
          in: {
            checks_deposits_init_page: {
              bind: 'initialize'
            },
            checks_deposits_set_check_information: {
              bind: 'data'
            },
            checks_deposits_leave_the_page: {
              bind: 'reset'
            },
            checks_deposits_reset_steps: {
              bind: 'reset'
            },
            global_checks_deposits_remove_check_accept: {
              bind: 'reset'
            },
            global_checks_deposits_photos_reset_process: {
              bind: 'reset'
            },
            checks_deposits_set_icon_message_text: {
              bind: 'iconMessageText'
            },
            checks_deposits_custom_acepted: {
              bind: 'reset'
            }
          },
          out: {
            checks_deposits_go_to_check_aggregator: {
              bind: 'link-clicked',
              link: {
                page: 'checksDepositsCheckAggregator'
              }
            },
            checks_deposits_edit_check: {
              bind: 'cells-step-select-as-link-edit-icon-clicked'
            },
            checks_deposits_delete_check_aggregator: {
              bind: 'cells-step-select-as-link-delete-icon-clicked'
            },
            checks_deposits_register_step_channel: {
              bind: 'register-step'
            },
            checks_deposits_checked_linked_continue: {
              bind: 'continue-pressed'
            },
            checks_deposits_disable_execute: {
              bind: 'cells-step-select-as-link-change-pressed'
            },
            checks_deposits_remove_check: {
              bind: 'remove-check-deposits'
            },
            checks_deposits_cells_step_focus_in_step2: {
              bind: 'cells-step-focus-in'
            }
          }
        }
      }
    }
  ];

  const dms = [
    {
      zone: 'app__main',
      tag: 'glomo-opx-check-deposits',
      type: 'DM',
      properties: {
        autoActivateStep: true,
        decorateSteps: true,
        currency: LOCAL_CURRENCY,
        language: LANGUAGE,
        pageName: OPERATIVE,
        maxSteps: MAX_STEPS,
        stepsInit: {
          1: {
            active: true,
            blocked: false,
            collapsed: true,
            decorated: false,
            disabled: false,
            next: false,
            previous: false,
            skip: false,
            scrolled: true,
            fixed: true
          },
          2: {
            active: true,
            blocked: false,
            collapsed: false,
            decorated: false,
            disabled: false,
            next: false,
            scrolled: true,
            previous: false,
            skip: false
          }
        },
        validSteps: [false, false],
        cellsConnections: {
          in: {
            __bridge_cancelled_back_navigation: {
              bind: 'requestToLeaveThePage'
            },
            checks_deposits_init_page: {
              bind: 'init'
            },
            checks_deposits_reset_steps: {
              bind: 'restart'
            },
            checks_deposits_register_step_channel: {
              bind: 'registerStep',
              previousState: true
            },
            checks_deposits_source_selected: {
              bind: 'selectedSource'
            },
            checks_deposits_collapse_other_step: {
              bind: 'manageStateSteps'
            },
            checks_deposits_disable_execute: {
              bind: 'manageStateSteps'
            },
            checks_deposits_exit_operative: {
              bind: 'requestToLeaveThePage'
            },
            global_default_error: {
              bind: 'openErrorModal'
            },
            checks_deposits_continue_product_selected: {
              bind: 'continueStep'
            },
            checks_deposits_checked_linked_continue: {
              bind: 'continueStep'
            },
            checks_deposits_set_check_information: {
              bind: 'continueStep'
            },
            global_exit_operative_checks_deposits_accept: {
              bind: 'leaveThePage'
            },
            checks_deposits_do_not_change_product_selected: {
              bind: 'continueStep'
            },
            checks_deposits_custom_acepted: {
              bind: 'restart'
            }
          },
          out: {
            checks_deposits_leave_the_page: {
              bind: 'leave-the-page',
              backStep: true
            },
            checks_deposits_init_services: {
              bind: 'init-services'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            checks_deposits_reset_scroll: {
              bind: 'reset-scroll'
            },
            checks_deposits_summary_open: {
              bind: 'can-execute-changed'
            },
            checks_deposits_scroll_zone: {
              bind: 'cells-scroll-zone'
            },
            checks_deposits_simulation: {
              bind: 'reset-operation-ready'
            },
            checks_deposits_set_source_list: {
              bind: 'set-source-list'
            },
            global_alert_manager_open_with_settings: {
              bind: 'ask-for-confirmation-to-leave-alert'
            },
            checks_deposits_simulation_ready: {
              bind: 'simulation-ready'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-check-deposits-dm-mx',
      familyPath: 'glomo-check-deposits-dm',
      type: 'DM',
      properties: {
        host: CONFIG.globalServices.host,
        native: CONFIG.native,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        accountsApiVersion: CONFIG.globalServices.versions.accounts,
        customersApiVersion: CONFIG.globalServices.versions.customers,
        language: LANGUAGE,
        currencyCode: LOCAL_CURRENCY,
        paymentDateFormat: 'DD MMMM YYYY',
        reviewOperations: OPERATIONS,
        compression: utils.checksPhotosCompression,
        contactPhoneNumber: CONFIG.phoneNumberContact,
        consumerId: CONFIG.consumerId,
        successScreenImage: './images/accounts/Account-Dollar.svg',
        customErrorConfig: {
          overdraftNotAllowed: {
            title: 'glomo-checks-deposits-error-overdraft-not-allowed-title',
            message: 'glomo-checks-deposits-error-overdraft-not-allowed-message',
            infoMessage: 'glomo-checks-deposits-error-overdraft-not-allowed-info'
          },
          inactiveCheck: {
            title: 'glomo-checks-deposits-error-inactive-check-title',
            message: 'glomo-checks-deposits-error-inactive-check-message'
          },
          exceededLimitOperation: {
            hasCallOptions: true,
            action: 'callOnContinue',
            title: 'glomo-checks-deposits-error-exceeded-limit-operation-title',
            message: 'glomo-checks-deposits-error-exceeded-limit-operation-message'
          },
          magneticBandError: {
            title: 'glomo-checks-deposits-error-magnetic-band-error-title',
            message: 'glomo-checks-deposits-error-magnetic-band-error-message',
            infoMessage: 'glomo-checks-deposits-error-magnetic-band-error-message-info'
          },
          nonExpectedCurrencyAmount: {
            title: 'glomo-checks-deposits-error-non-expected-currency-amount-title',
            message: 'glomo-checks-deposits-error-non-expected-currency-amount-message',
            infoMessage: 'glomo-checks-deposits-error-non-expected-currency-amount-info'
          },
          canceledAccount: {
            title: 'glomo-checks-deposits-error-canceled-account-title',
            message: 'glomo-checks-deposits-error-canceled-account-message'
          },
          unprotectedCheck: {
            title: 'glomo-checks-deposits-error-unprotected-check-title',
            message: 'glomo-checks-deposits-error-unprotected-check-message'
          },
          notHaveProtectionService: {
            title: 'glomo-checks-deposits-error-not-have-protection-service-title',
            message: 'glomo-checks-deposits-error-not-have-protection-service-message',
            infoMessage: 'glomo-checks-deposits-error-not-have-protection-service-info'
          },
          operationExceedingAllowedAmount: {
            title: 'glomo-checks-deposits-error-operation-exceeding-allowed-amount-title',
            message: 'glomo-checks-deposits-error-operation-exceeding-allowed-amount-message',
            infoMessage: 'glomo-checks-deposits-error-operation-exceeding-allowed-amount-message-info'
          },
          checkExpired: {
            title: 'glomo-checks-deposits-error-check-expired-title',
            message: 'glomo-checks-deposits-error-check-expired-message',
            infoMessage: 'glomo-checks-deposits-error-check-expired-info'
          },
          anotherBankCheck: {
            title: 'glomo-checks-deposits-error-another-bank-check-title',
            message: 'glomo-checks-deposits-error-another-bank-check-message',
            infoMessage: 'glomo-checks-deposits-error-another-bank-check-message-info'
          },
          invalidCheck: {
            title: 'glomo-checks-deposits-error-invalid-check-title',
            message: 'glomo-checks-deposits-error-invalid-check-message',
            infoMessage: 'glomo-checks-deposits-error-invalid-check-message-info'
          },
          accountBlocked: {
            title: 'glomo-checks-deposits-error-account-blocked-title',
            message: 'glomo-checks-deposits-error-account-blocked-message'
          },
          incorrectProtectedCheckAmount: {
            title: 'glomo-checks-deposits-error-incorrect-protected-check-amount-title',
            message: 'glomo-checks-deposits-error-incorrect-protected-check-amount-message',
            infoMessage: 'glomo-checks-deposits-error-incorrect-protected-check-amount-info'
          },
          invalidSecurityCode: {
            title: 'glomo-checks-deposits-error-invalid-security-code-title',
            message: 'glomo-checks-deposits-error-invalid-security-code-message',
            infoMessage: 'glomo-checks-deposits-error-invalid-security-code-info'
          },
          blockedAccount: {
            title: 'glomo-checks-deposits-error-blocked-account-title',
            message: 'glomo-checks-deposits-error-blocked-account-message'
          },
          invalidAmount: {
            title: 'glomo-checks-deposits-error-invalid-amount-title',
            message: 'glomo-checks-deposits-error-invalid-amount-message',
            infoMessage: 'glomo-checks-deposits-error-invalid-amount-info'
          },
          technicalError: {
            title: 'glomo-checks-deposits-error-technical-error-title',
            message: 'glomo-checks-deposits-error-technical-error-message',
            infoMessage: 'glomo-checks-deposits-error-technical-error-info'
          }
        },
        cellsConnections: {
          in: {
            dashboard_customer_email: {
              bind: 'customerContact'
            },
            global_login_success_indicators: {
              bind: 'getCustomerData'
            },
            checks_deposits_set_selected_account: {
              bind: 'initData'
            },
            checks_deposits_go_to_new_operation: {
              bind: 'initData'
            },
            checks_deposits_leave_the_page: {
              bind: 'reset'
            },
            checks_deposits_reset_steps: {
              bind: 'reset'
            },
            global_checks_deposits_check_aggregator_continue_pressed: {
              bind: 'parseCheckInfo'
            },
            global_checks_deposits_photos_list: {
              bind: 'photosInfo'
            },
            global_storage_get_loginData_success: {
              bind: 'getDataFromLocalStorageSuccess'
            },
            checks_deposits_checked_linked_continue: {
              bind: 'postDocumentsFiles'
            },
            checks_deposits_summary_closed: {
              bind: 'executeChecksDeposits'
            },
            global_dashboard_accounts: {
              bind: 'setAliasAccounts'
            },
            checks_deposits_edit_check: {
              bind: 'editCheck'
            },
            checks_deposits_delete_check_aggregator: {
              bind: 'requestConfirmationRemoveCheck'
            },
            global_checks_deposits_remove_check_accept: {
              bind: 'removeCheck'
            },
            global_checks_deposits_photos_reset_process: {
              bind: 'resetProcess'
            },
            checks_deposits_simulation_error_retry: {
              bind: 'simulationRetry'
            },
            global_set_app_settings: {
              bind: 'setAppSettingsParams'
            },
            checks_deposits_open_info_modal: {
              bind: 'openChecksDepositsInfoModal'
            },
            checks_deposits_simulation_ready: {
              bind: 'confirmChecksDeposits'
            },
            checks_deposits_error_response_customer: {
              bind: 'getCustomerErrorDetail'
            },
            global_cache_channel: {
              bind: 'userDetail'
            },
            checks_deposits_custom_acepted: {
              bind: 'reset'
            }
          },
          out: {
            global_checks_deposits_reset_process: {
              bind: 'checks-deposits-reset-process'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            checks_deposits_set_check_information: {
              bind: 'checks-deposits-check-information'
            },
            navigate_to_checks_deposits_review: {
              bind: 'check-deposits-go-to-review',
              link: {
                page: 'checksDepositsReview'
              }
            },
            global_checks_deposits_response: {
              bind: 'check-deposits-successful'
            },
            checks_deposits_reset_steps: {
              bind: 'check-deposits-go-to-review'
            },
            global_open_alert_manager: {
              bind: 'ask-for-confirmation-remove-checks-deposits'
            },
            global_checks_deposits_go_to_edit_check: {
              bind: 'check-deposits-go-to-edit-check',
              link: {
                page: 'checksDepositsCheckAggregator'
              }
            },
            global_retry_error: {
              bind: 'retry-error'
            },
            checks_deposits_simulation_error: {
              bind: 'checks-deposits-simulation-error-message'
            },
            checks_deposits_set_selected_product_id: {
              bind: 'glomo-checks-deposits-set-selected-account-id'
            },
            checks_deposits_set_selected_product: {
              bind: 'glomo-checks-deposits-set-selected-account'
            },
            checks_deposits_set_products: {
              bind: 'glomo-checks-deposits-set-products'
            },
            checks_deposits_set_icon_message_text: {
              bind: 'checks-deposits-set-icon-message-text'
            },
            global_alert_manager_open_with_settings: {
              bind: 'open-modal'
            },
            checks_deposits_simulation: {
              bind: 'checks-deposits-confirm-operation'
            },
            global_get_from_storage: {
              bind: 'get-native-local-storage'
            },
            checks_deposits_error_code_incomes: {
              bind: 'set-trace-error-code'
            },
            checks_deposits_trace_amount_data: {
              bind: 'set-trace-amount-data'
            },
            checks_deposits_custom_acepted: {
              bind: 'glomo-check-deposits-custom-acepted-alert',
              link: {
                page: 'checksDepositsList',
                cleanUntil: 'checksDepositsList'
              }
            },
            checks_deposits_ask_remove_checks_analitycs: {
              bind: 'ask-for-confirmation-remove-checks-deposits',
              analytics: ANALYTICS_CHECKS_DEPOSIT.advanced_footprint('', 'eliminar')
            },
            checks_deposits_accepted_ask_remove_checks_analitycs: {
              bind: 'accepted-confirmation-remove-checks',
              analytics: ANALYTICS_CHECKS_DEPOSIT.internalLink('eliminar cheque', 'eliminar')
            }
          },
          params: {
            customerId: 'global_user_id'
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-analytics-checks-deposits-manager-mx',
      familyPath: '@glomo-web-components/glomo-analytics-checks-deposits-manager',
      render: 'litElement',
      type: 'DM',
      properties: {
        config: {
          steps: {
            1: 'app-page-visit',
            2: 'app-step-2',
            3: 'app-step-3'
          }
        },
        cellsConnections: {
          in: {
            checks_deposits_set_selected_product: {
              bind: 'account'
            },
            checks_deposits_go_to_check_aggregator: {
              bind: 'sendAnalyticAppStarted'
            },
            checks_deposits_open_info_modal: {
              bind: 'sendAnalyticAppStartedInfoModal'
            },
            checks_deposits_set_selected_account: {
              bind: 'sendAnalyticAppPageVisit'
            },
            checks_deposits_set_check_information: {
              bind: 'sendAnalyticsAppStep10'
            },
            checks_deposits_trace_amount_data: {
              bind: 'sendAnalyticsAppStep11'
            },
            checks_deposits_sign_close_modal: {
              bind: 'sendAnalyticsAppStep11'
            },
            checks_deposits_sign_open_modal: {
              bind: 'sendAnalyticsAppStep12'
            },
            checks_deposits_error_code_incomes: {
              bind: 'sendAnalyticsHuellaErrors'
            },
            global_checks_deposits_response: {
              bind: 'sendAnalyticsComplete'
            },
            global_checks_deposits_aggregator_accept_leave_page: {
              bind: 'sendAnalyticAppStarted'
            },
            checks_deposits_edit_check: {
              bind: 'sendAnalyticsAppStep9'
            },
            checks_deposits_aggregator_exit_operative: {
              bind: 'sendAnalyticAppPageVisit'
            },
            checks_deposits_disable_execute: {
              bind: 'sendAnalyticsAppStep10'
            },
            analytics_photons_list: {
              bind: 'analyticsPhotosList'
            },
            checks_deposits_photos_exit_operative: {
              bind: 'sendAnalyticAppPageVisit'
            },
            checks_deposits_leave_the_page: {
              bind: 'analyticsReset'
            },
            checks_deposits_reset_steps: {
              bind: 'analyticsReset'
            },
            checks_deposits_init_page: {
              bind: 'analyticsReset'
            }
          },
          out: {
            checks_deposits_analytics_app_complete: {
              bind: 'analytics-app-complete',
              analytics: ANALYTICS_CHECKS_DEPOSIT.app_complete
            },
            checks_deposits_analytics_app_started: {
              bind: 'analytics-app-started',
              analytics: ANALYTICS_CHECKS_DEPOSIT.appStarted('1 anadir cheque')
            },
            checks_deposits_analytics_app_started_info_modal: {
              bind: 'analytics-app-started-info-modal',
              analytics: ANALYTICS_CHECKS_DEPOSIT.appStarted('info cobro digital'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_visit: {
              bind: 'analytics-app-page-visit',
              analytics: ANALYTICS_CHECKS_DEPOSIT.app_page_visit,
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_9: {
              bind: 'analytics-app-step-9',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_common_steps('9')
            },
            checks_deposits_analytics_app_step_10: {
              bind: 'analytics-app-step-10',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_common_steps('10'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_11: {
              bind: 'analytics-app-step-11',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_common_steps('11'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_app_step_12: {
              bind: 'analytics-app-step-12',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_common_steps('12'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_overdraft_not_allowed: {
              bind: 'analytics-error-overdraft-not-allowed',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error el cheque no puede cobrarse', 'error el cheque no puede cobrarse'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_inactive_check: {
              bind: 'analytics-error-inactive-check',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error en cuenta de cobro', 'error en cuenta de cobro'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_exceeded_limit_operation: {
              bind: 'analytics-error-exceeded-limit-operation',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error limite excedido', 'error limite excedido'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_magnetic_band_error: {
              bind: 'analytics-error-magnetic-band-error',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error datos de cheques', 'error datos de cheques'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_non_expected_currency_amount: {
              bind: 'analytics-error-non-expected-currency-amount',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error importe en otra divisa', 'error importe en otra divisa'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_canceled_account: {
              bind: 'analytics-error-canceled-account',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error en cuenta de cobro', 'error en cuenta de cobro'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_unprotected_check: {
              bind: 'analytics-error-unprotected-check',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error cheque no liberado', 'error cheque no liberado'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_not_have_protection_service: {
              bind: 'analytics-error-not-have-protection-service',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error medio de cobro no valido', 'error medio de cobro no valido'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_operation_exceeding_allowed_amount: {
              bind: 'analytics-error-operation-exceeding-allowed-amount',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error importe no autorizado', 'error importe no autorizado'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_check_expired: {
              bind: 'analytics-error-check-expired',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error liberacion vencida', 'error liberacion vencida'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_invalid_check: {
              bind: 'analytics-error-invalid-check',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error el cheque no puede cobrarse', 'error el cheque no puede cobrarse'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_account_blocked: {
              bind: 'analytics-error-account-blocked',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error en cuenta', 'error en cuenta'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_incorrect_protected_check_amount: {
              bind: 'analytics-error-incorrect-protected-check-amount',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error importe no autorizado', 'error importe no autorizado'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_invalid_security_code: {
              bind: 'analytics-error-invalid-security-code',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error datos de cheques', 'error datos de cheques'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_blocked_account: {
              bind: 'analytics-error-blocked-account',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error en cuenta', 'error en cuenta'),
              featureFlag: ANALYTICS_CHECKS_DEPOSIT.ANALYTICS_FEATURE_FLAG
            },
            checks_deposits_analytics_invalid_amount: {
              bind: 'analytics-error-invalid-amount',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error importe excedido', 'error importe excedido')
            },
            checks_deposits_analytics_invalid_check: {
              bind: 'analytics-error-invalid-check',
              analytics: ANALYTICS_CHECKS_DEPOSIT.checks_management_error('error solicitudes excedidas', 'error solicitudes excedidas')
            }
          }
        }
      }
    }
  ];

  base.components.push(...steps, ...dms);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('glomo-check-deposits-dm-mx', 'checksDeposits',
    ['check-deposits-go-to-review', 'error-on-post-accounts-checks-incomes', 'close-sign-modal']);

  const connectionsOut = utils.connectionsOut(base);

  connectionsOut('cells-sign-operation-dm-mx').checks_deposits_sign_close_modal = {
    bind: 'signature-cancel-checksDeposits'
  };

  connectionsOut('cells-sign-operation-dm-mx').checks_deposits_sign_open_modal = {
    bind: 'signature-required'
  };

  addRetryErrors(base)([
    {
      id: 'checks-deposits-operative-error',
      acceptRetry: { bind: 'executeChecksDeposits', component: 'glomo-check-deposits-dm-mx' },
      cancelRetry: { bind: 'aceptedCustomAlertButtons', component: 'glomo-check-deposits-dm-mx' },
      successEvent: { bind: 'check-deposits-successful', component: 'glomo-check-deposits-dm-mx' }
    },
    {
      id: 'checks-deposits-call-center-operative-error',
      acceptRetry: { bind: 'callCustomerServicePhone', component: 'glomo-check-deposits-dm-mx' },
      cancelRetry: { bind: 'aceptedCustomAlertButtons', component: 'glomo-check-deposits-dm-mx' },
      successEvent: { bind: 'check-deposits-successful', component: 'glomo-check-deposits-dm-mx' }
    },
    {
      id: 'checks-deposits-exit-operative-error',
      acceptRetry: { bind: 'aceptedCustomAlertButtons', component: 'glomo-check-deposits-dm-mx' },
      successEvent: { bind: 'check-deposits-successful', component: 'glomo-check-deposits-dm-mx' }
    }
  ]);
  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return base;
};
