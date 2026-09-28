/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers');
  const PAGE_NAME = 'equityContractsContribution';
  const PAGE_NAME_CHANNEL = 'equity_contracts_contribution';
  const ANALYTICS_CONTRIBUTION = require('./analytics/_equityContractsContribution')(CONFIG);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const SPINNER = utils.SPINNERMAIN(CONFIG);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner cells-spinner-veil-fixed'
  };
  const pages = utils.getPages(PAGE_NAME);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      headerFixed: true,
      iOSFixedHeader: true,
      topOnConfirm: true,
      delayScrollTop: 500,
      animationType: 'verticalUp',
      className: 'header-fixed',
      extraHeaderClass: 'dark-blue-bg',
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_show_finish_messages_step']: {
            bind: 'showConfirm'
          },
          [PAGE_NAME_CHANNEL + '_init_page']: {
            bind: 'resetLayerScroll'
          },
          [PAGE_NAME_CHANNEL + '_set_reset_scroll']: {
            bind: 'resetLayerScroll'
          },
          [PAGE_NAME_CHANNEL + '_set_confirm_animation']: {
            bind: 'collapseOpened'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_template_content_scroll']: {
            bind: 'opx-template-content-scroll'
          },
          [PAGE_NAME_CHANNEL + '_scroll_complete']: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName: PAGE_NAME,
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
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_init_page']: {
            bind: 'init-page'
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
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      continue: 'dashboard',
      className: IS_NATIVE_IOS ? 'ios-top-padding safe-card-header header--core' : 'header--core',
      secondaryClass: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      titleName: 'equity-contracts-contribution-header-title',
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_add_header_class']: {
            bind: 'setSecondaryClass'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      rightIconText: 'bbva-header-main-close-aria-label',
      className: `header--white header${IS_NATIVE_IOS ? ' ios-top-padding safe-card-header' : ''}`,
      secondaryClass: ''
    }
  };

  const offerPageStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-offer-page',
    tagSpherica: 'cells-step-card-offer-page-spherica',
    properties: {
      id: 'cells-step-card-offer-page-collapsed',
      currentStep: 1,
      className: 'equity-contracts cells-step-container',
      localCurrency: 'MXN',
      language: 'es-MX',
      digitalNumber: 4,
      availableLineText: 'equity-contracts-operation-balance-fund',
      stepTitle: 'equity-contracts-operation-fund-data-step-header',
      hideCollapsedBenefits: true,
      showContractNumberCollapsed: true,
      showSmallAmountAvailableLine: true,
      hideImageCollapsed: true,
      hideBenefitsSubHeader: true,
      active: true,
      showSummary: true,
      mainTaxesText: '',
      hasStickyAmount: true,
      collapsed: true,
      scrolled: true,
      disableChange: true,
      showInfoMessage: true,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME_CHANNEL + '_set_offer_page_force_collapse']: {
            bind: 'collapsed'
          },
          [PAGE_NAME_CHANNEL + '_set_card_offer']: {
            bind: 'cardOffer'
          },
          [PAGE_NAME_CHANNEL + '_set_offer_page_taxes']: {
            bind: 'taxesInfo'
          },
          [PAGE_NAME_CHANNEL + '_scroll_complete']: {
            bind: 'scrollComplete'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_register_card_offer_step']: {
            bind: 'register-step'
          }
        }
      }
    }
  };

  const simulationStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-simulation-operation',
    tagSpherica: 'cells-step-simulation-operation-spherica',
    properties: {
      id: 'cells-step-simulation-operation',
      currentStep: 2,
      className: 'equity-contracts',
      language: 'es-MX',
      currency: 'MXN',
      localCurrency: 'MXN',
      stepTitle: 'equity-contracts-contribution-simulation-step-text-header',
      hideCurrentStepLabel: true,
      changeLabel: 'equity-contracts-operations-simulation-edit-label-step',
      showInfoMessage: true,
      infoType: 'info',
      infoIconSize: 24,
      showThirdInfoMessage: true,
      iconSize: 'icon-size-24',
      amountErrorMinLimitMessage: 'equity-contracts-contribution-simulation-amount-error-min-limit-message',
      amountErrorMaxLimitMessage: 'equity-contracts-contribution-simulation-amount-error-max-limit-message',
      showIconInInputRangeMessage: true,
      complexAmountErrorMaxLimitMessage: false,
      filledAmountLabel: 'equity-contracts-operation-simulation-summary-view-amount-operation',
      messageText: 'equity-contracts-contribution-simulation-notification-message-purchase',
      hiddenMinLimit: true,
      hiddenMaxLimit: true,
      showTopAmountMessage: false,
      showGraph: false,
      keepOpened: true,
      keepAmount: true,
      active: true,
      range: true,
      showSimulator: false,
      keepValues: [
        'showInfoMessage'
      ],
      simulationConfirmButtons: {
        buttons: {
          primary: {
            class: 'secondary',
            text: 'equity-contracts-operation-simulation-first-button'
          },
          secondary: {
            class: 'link',
            text: 'equity-contracts-operation-simulation-second-button'
          }
        }
      },
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_hidden_max_limit']: {
            bind: 'hiddenMaxLimit'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_active_step']: {
            bind: 'active'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_step_description']: {
            bind: 'stepDescription'
          },
          [PAGE_NAME_CHANNEL + '_set_info_message']: {
            bind: 'infoMessage'
          },
          [PAGE_NAME_CHANNEL + '_set_second_message']: {
            bind: 'iconMessageThird'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_max_value']: {
            bind: 'maxValue'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_min_value']: {
            bind: 'minValue'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_max_message']: {
            bind: 'amountErrorMaxLimitMessage'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_min_message']: {
            bind: 'amountErrorMinLimitMessage'
          },
          [PAGE_NAME_CHANNEL + '_set_after_amount_range_message']: {
            bind: 'afterAmountRangeMessage'
          },
          [PAGE_NAME_CHANNEL + '_set_button_text']: {
            bind: 'buttonText'
          },
          [PAGE_NAME_CHANNEL + '_scroll_complete']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_collapsed_message']: {
            bind: 'availableCurrenciesInfo'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_flag_for_collapsed_message']: {
            bind: 'setProperties'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_detail']: {
            bind: 'simulationInfo'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_show_second_message']: {
            bind: 'showThirdInfoMessage'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_collapsed']: {
            bind: 'setProperties'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_register_simulation_step']: {
            bind: 'register-step'
          },
          [PAGE_NAME_CHANNEL + '_collapse_other_step']: {
            bind: 'change-pressed'
          },
          [PAGE_NAME_CHANNEL + '_focus_in']: {
            bind: 'cells-step-focus-in'
          },
          [PAGE_NAME_CHANNEL + '_send_amount_for_simulation']: {
            bind: 'send-step-amount-value'
          },
          [PAGE_NAME_CHANNEL + '_go_to_next']: {
            bind: 'cells-confirm-buttons-click-primary'
          },
          [PAGE_NAME_CHANNEL + '_set_exit_confirm']: {
            bind: 'cells-confirm-buttons-click-primary'
          },
          [PAGE_NAME_CHANNEL + '_focus_step_simulation']: {
            bind: 'cells-step-focus-in'
          },
          [PAGE_NAME_CHANNEL + '_app_on_click_started']: {
            bind: 'amount-input-focus'
          }
        }
      }
    },
    propertiesSpherica: {
      simulationConfirmButtons: {
        buttons: {
          primary: {
            text: 'equity-contracts-operation-simulation-first-button'
          },
          secondary: {
            class: 'btn-link full',
            variant: 'primary-alt',
            text: 'equity-contracts-operation-simulation-second-button'
          }
        }
      },
      cellsKeyValuesSetupClass: 'key-medium',
      changeLabel: 'equity-contracts-contribution-change-step-label',
      id: 'cells-step-simulation-operation-spherica',
      boldKeys: 'key-medium'
    }
  };

  const warningMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      id: 'cells-icon-message-out-of-time',
      type: 'warning-dark',
      className: 'margin-l',
      icon: 'coronita:info',
      hidden: true,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_set_hide_last_warning_message']: {
            bind: 'hidden'
          },
          [PAGE_NAME_CHANNEL + '_set_last_warning_message']: {
            bind: 'message'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'margin-l h-gutter'
    }
  };

  const infoMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      id: 'cells-icon-message',
      type: 'info',
      className: 'margin-l',
      message: 'equity-contracts-contribution-last-info-message',
      icon: 'coronita:info',
      hidden: true,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_set_hide_last_info_message']: {
            bind: 'hidden'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'margin-l h-gutter'
    }
  };

  const summaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      id: 'cells-summary-view',
      buttonLabel: 'equity-contracts-contribution-summary-button-text',
      summaryViewTitle: 'equity-contracts-operation-simulation-amount',
      operationAmountClass: 'amount-huge-decimals',
      localCurrency: 'MXN',
      currencyCode: 'MXN',
      hideCustomFeesMessage: true,
      showLoadingSkeleton: true,
      showAddition: true,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_set_simulation_summary_operation']: {
            bind: 'operation'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_launch_contribution_service']: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      primaryButtonClass: 'positive',
      buttonLabel: 'equity-contracts-contribution-summary-button-text-spherica'
    }
  };

  const stepManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-equity-contracts-operations',
    properties: {
      lang: CONFIG.lang,
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: false,
      operative: 'CONTRIBUTION',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'manageExitButton'
          },
          [PAGE_NAME_CHANNEL + '_exit_page']: {
            bind: 'manageExitButton'
          },
          [PAGE_NAME_CHANNEL + '_register_card_offer_step']: {
            bind: 'registerStep'
          },
          [PAGE_NAME_CHANNEL + '_register_simulation_step']: {
            bind: 'registerStep'
          },
          [PAGE_NAME_CHANNEL + '_collapse_other_step']: {
            bind: 'goToStep'
          },
          [PAGE_NAME_CHANNEL + '_go_to_next']: {
            bind: 'goToNext'
          },
          [PAGE_NAME_CHANNEL + '_set_exit_confirm']: {
            bind: 'setExitConfirm'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_step']: {
            bind: 'currentStep'
          },
          exit_equity_contracts_contribution_page: {
            bind: 'reset'
          }
        },
        out: {
          global_equity_contracts_operation_show_exit_warning_message: {
            bind: 'exit-warning-message-event'
          },
          [PAGE_NAME_CHANNEL + '_show_finish_messages_step']: {
            bind: 'can-execute-changed'
          },
          [PAGE_NAME_CHANNEL + '_handle_exit_page']: {
            bind: 'exit-page-event'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'exit-warning-message-event'
            }
          }
        },
        remove: {
          out: [
            'global_equity_contracts_operation_show_exit_warning_message'
          ]
        }
      }
    }
  };

  const manager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-equity-contracts-operations-manager',
    properties: {
      heroImage: './images/errors/error.svg',
      avatar: './images/official_document.svg',
      isAWebBuild: !CONFIG.native || true,
      cellsConnections: {
        in: {
          global_equity_contracts_go_to_contribution: {
            bind: 'fund'
          },
          [PAGE_NAME_CHANNEL + '_init_page']: {
            bind: 'getCustomerDetail'
          },
          [PAGE_NAME_CHANNEL + '_handle_exit_page']: {
            bind: 'handleExitPage'
          },
          [PAGE_NAME_CHANNEL + '_send_amount_for_simulation']: {
            bind: 'handleSimulation'
          },
          [PAGE_NAME_CHANNEL + '_show_finish_messages_step']: {
            bind: 'isLastStep'
          },
          [PAGE_NAME_CHANNEL + '_template_content_scroll']: {
            bind: 'handleStickyAnimation'
          },
          [PAGE_NAME_CHANNEL + '_launch_contribution_service']: {
            bind: 'launchContributionService'
          },
          [PAGE_NAME_CHANNEL + '_set_on_success_contribution_simulate']: {
            bind: 'handleSimulationSuccessResponse'
          },
          [PAGE_NAME_CHANNEL + '_set_on_error_contribution_simulate']: {
            bind: 'handleSimulationFailResponse'
          },
          [PAGE_NAME_CHANNEL + '_set_success_customer_detail']: {
            bind: 'customerDetail'
          },
          [PAGE_NAME_CHANNEL + '_set_error_customer_detail']: {
            bind: 'customerDetail'
          },
          [PAGE_NAME_CHANNEL + '_set_contribution_success_service']: {
            bind: 'handleSuccessResponse'
          },
          [PAGE_NAME_CHANNEL + '_set_contribution_error_service']: {
            bind: 'handleFailResponse'
          },
          [PAGE_NAME_CHANNEL + '_focus_step_simulation']: {
            bind: 'handleFocusSteps'
          },
          [PAGE_NAME_CHANNEL + '_app_on_click_started']: {
            bind: 'appStarted'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_set_card_offer']: {
            bind: 'set-offer-page-info-event'
          },
          [PAGE_NAME_CHANNEL + '_set_offer_page_taxes']: {
            bind: 'set-offer-page-taxes-event'
          },
          [PAGE_NAME_CHANNEL + '_set_info_message']: {
            bind: 'set-simulation-info-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_second_message']: {
            bind: 'set-simulation-second-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_max_value']: {
            bind: 'set-simulation-amount-max-value-event'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_min_value']: {
            bind: 'set-simulation-amount-min-value-event'
          },
          [PAGE_NAME_CHANNEL + '_set_after_amount_range_message']: {
            bind: 'set-simulation-after-amount-range-message-event'
          },
          [PAGE_NAME_CHANNEL + '_go_to_next']: {
            bind: 'simulation-step-collapsed-event'
          },
          [PAGE_NAME_CHANNEL + '_set_exit_confirm']: {
            bind: 'simulation-step-collapsed-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_step']: {
            bind: 'set-step-event'
          },
          [PAGE_NAME_CHANNEL + '_set_button_text']: {
            bind: 'set-simulation-button-text-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_collapsed_message']: {
            bind: 'set-simulation-collapsed-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_flag_for_collapsed_message']: {
            bind: 'set-simulation-flag-for-collapsed-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_detail']: {
            bind: 'set-simulation-detail-event',
            analytics: ANALYTICS_CONTRIBUTION.MARK_PAGE_VIEW_SIMULATION
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_show_second_message']: {
            bind: 'set-simulation-show-second-info-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_reset_scroll']: {
            bind: 'set-reset-scroll-event'
          },
          [PAGE_NAME_CHANNEL + '_set_hide_last_warning_message']: {
            bind: 'set-simulation-hide-last-warning-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_hide_last_info_message']: {
            bind: 'set-simulation-hide-last-info-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_last_warning_message']: {
            bind: 'set-simulation-last-warning-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_step_description']: {
            bind: 'set-simulation-description-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_summary_operation']: {
            bind: 'set-simulation-summary-operation-event'
          },
          [PAGE_NAME_CHANNEL + '_set_confirm_animation']: {
            bind: 'set-simulation-confirm-animation-event'
          },
          [PAGE_NAME_CHANNEL + '_set_offer_page_force_collapse']: {
            bind: 'set-offer-page-force-collapse-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_active_step']: {
            bind: 'set-simulation-active-step-event'
          },
          [PAGE_NAME_CHANNEL + '_set_simulation_hidden_max_limit']: {
            bind: 'set-simulation-hidden-max-limit-event'
          },
          [PAGE_NAME_CHANNEL + '_set_request_contribution_simulate']: {
            bind: 'request-contribution-simulate-event'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_collapsed']: {
            bind: 'set-amount-collapsed-event'
          },
          [PAGE_NAME_CHANNEL + '_set_customer_id']: {
            bind: 'set-customer-id-event'
          },
          [PAGE_NAME_CHANNEL + '_get_customer_detail']: {
            bind: 'get-customer-detail-event'
          },
          [PAGE_NAME_CHANNEL + '_set_launch_contribution_service']: {
            bind: 'launch-contribution-service-event'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_max_message']: {
            bind: 'set-simulation-amount-max-value-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_amount_min_message']: {
            bind: 'set-simulation-amount-min-value-message-event'
          },
          [PAGE_NAME_CHANNEL + '_set_app_page_visit_object']: {
            bind: 'set-app-page-visit-object-event'
          },
          [PAGE_NAME_CHANNEL + '_set_app_started_object']: {
            bind: 'set-app-started-object-event'
          },
          [PAGE_NAME_CHANNEL + '_set_app_step_2_object']: {
            bind: 'set-app-step-2-object-event'
          },
          [PAGE_NAME_CHANNEL + '_analytics_set_mark_fund_not_found']: {
            bind: 'analytics-set-mark-fund-not-found-event',
            analytics: ANALYTICS_CONTRIBUTION.MARK_FUND_NOT_FOUND
          },
          [PAGE_NAME_CHANNEL + '_analytics_set_mark_contract_is_blocked']: {
            bind: 'analytics-set-mark-contract-is-blocked-event',
            analytics: ANALYTICS_CONTRIBUTION.MARK_CONTRACT_IS_BLOCKED
          },
          exit_equity_contracts_contribution_page: {
            bind: 'exit-equity-contracts-operations-page-event',
            backStep: true
          },
          global_equity_contracts_common_error: {
            bind: 'equity-contracts-common-error-event'
          },
          global_equity_contracts_full_error: {
            bind: 'equity-contracts-full-error-event'
          },
          global_set_equity_contracts_operations_title_name: {
            bind: 'set-equity-contracts-operations-title-name-event'
          },
          global_set_app_completed_object: {
            bind: 'set-app-completed-object-event'
          },
          global_go_to_equity_contracts_contribution_success: {
            bind: 'go-to-equity-contracts-contribution-success',
            link: {
              page: 'equityContractsContributionSuccess',
              skipHistory: true
            }
          },
          open_control_veil: {
            bind: 'open-control-veil-event'
          },
          close_control_veil: {
            bind: 'close-control-veil-event'
          }
        },
        params: {
          setCustomer: 'global_user'
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'equity-contracts-common-error-event'
            },
            global_glomo_signature_open_modal_error_spherica: {
              bind: 'equity-contracts-full-error-event'
            }
          }
        },
        remove: {
          out: [
            'global_equity_contracts_common_error',
            'global_equity_contracts_full_error'
          ]
        }
      }
    }
  };

  const customer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: CONFIG.globalServices.host,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_set_customer_id']: {
            bind: 'customerId'
          },
          [PAGE_NAME_CHANNEL + '_get_customer_detail']: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_set_success_customer_detail']: {
            bind: 'set-customer-detail'
          },
          [PAGE_NAME_CHANNEL + '_set_error_customer_detail']: {
            bind: 'error-on-get-customer-detail'
          }
        }
      }
    }
  };

  const investmentFunds = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-investment-funds',
    properties: {
      host: CONFIG.globalServices.host,
      investmentFundsApiVersion: CONFIG.globalServices.versions.investmentFunds,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_set_request_contribution_simulate']: {
            bind: 'postFundSimulateSubscription'
          },
          [PAGE_NAME_CHANNEL + '_set_launch_contribution_service']: {
            bind: 'postFundSubscriptions'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_set_on_success_contribution_simulate']: {
            bind: 'success-on-post-subscriptions-simulate'
          },
          [PAGE_NAME_CHANNEL + '_set_on_error_contribution_simulate']: {
            bind: 'error-on-post-subscriptions-simulate'
          },
          [PAGE_NAME_CHANNEL + '_set_contribution_success_service']: {
            bind: 'set-fund-subscription'
          },
          [PAGE_NAME_CHANNEL + '_set_contribution_error_service']: {
            bind: 'error-on-post-fund-subscription'
          }
        }
      }
    }
  };

  const analytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-equity-contracts-operations-analytics-manager',
    familyPath: 'glomo-equity-contracts-operations-manager',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME_CHANNEL + '_set_app_page_visit_object']: {
            bind: 'appPageVisit'
          },
          [PAGE_NAME_CHANNEL + '_set_app_started_object']: {
            bind: 'appStarted'
          },
          [PAGE_NAME_CHANNEL + '_set_app_step_2_object']: {
            bind: 'appStep2'
          }
        },
        out: {
          [PAGE_NAME_CHANNEL + '_analytics_app_page_visit']: {
            bind: 'analytics-app-page-visit-event',
            analytics: ANALYTICS_CONTRIBUTION.APP_PAGE_VISIT
          },
          [PAGE_NAME_CHANNEL + '_analytics_app_started']: {
            bind: 'analytics-app-started-event',
            analytics: ANALYTICS_CONTRIBUTION.APP_STARTED
          },
          [PAGE_NAME_CHANNEL + '_analytics_app_step_2']: {
            bind: 'analytics-app-step-2-event',
            analytics: ANALYTICS_CONTRIBUTION.APP_STEP_2
          }
        }
      }
    }
  };

  let base;
  base = {
    hash: 'mx-equity-contracts-contribution',
    currentPage: {
      url: `/${PAGE_NAME}`,
      params: []
    },
    pages: pages,
    template,
    components: [
      SPINNER,
      lifeCycle,
      header,
      offerPageStep,
      simulationStep,
      warningMessage,
      infoMessage,
      summaryView,
      stepManager,
      customer,
      investmentFunds,
      manager,
      analytics
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-investment-funds', PAGE_NAME, ['set-fund-subscription', 'error-on-post-fund-subscription']);

  return sphericaPageUtils.spherize(base);
};
