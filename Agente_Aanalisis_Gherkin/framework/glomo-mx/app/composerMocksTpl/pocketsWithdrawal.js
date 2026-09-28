/* eslint-disable new-cap, no-dupe-keys, no-shadow */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'pocketsWithdrawal';
  const PAGE_NAME_CHANNEL = 'pocketsWithdrawal';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const utils = require('./common/helpers/_utils');
  const isNativeIos = CONFIG.nativeIos || false;
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS_POCKETS = require('./analytics/_pockets')();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const MAX_STEPS = 3;

  if (isSpherica) {
    SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  }
  SPINNER.properties.className = isNativeIos ? 'feedback-ios-top-padding solid-spinner' : 'solid-spinner';
  SPINNER.properties.cellsConnections.in = {
    ...SPINNER.properties.cellsConnections.in,
    pockets_show_spinner: {
      bind: 'show'
    },
    pockets_hide_spinner: {
      bind: 'hide'
    }
  };

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      animationType: 'verticalUp',
      headerFixed: true,
      topOnConfirm: true,
      className: isNativeIos ? 'bg-core-blue' : '',
      extraHeaderClass: 'bbva-dark-medium-blue',
      IOSFixedHeader: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_recalculate_header']: {
            bind: 'recalculateHeader'
          },
          pockets_scroll_zone: {
            bind: 'scrollItemIntoView'
          },
          [PAGE_NAME + '_pockets_collapse_step']: {
            bind: 'scrollItemIntoView'
          },
          [PAGE_NAME + '_pockets_enable_withdraw_money']: {
            bind: 'showConfirm'
          },
          [PAGE_NAME + '_pockets_show_summary_withdraw_money']: {
            bind: 'showConfirm'
          },
          [PAGE_NAME + 'pockets_reset_scroll']: {
            bind: 'resetLayerScroll'
          },
          [PAGE_NAME + '_pockets_withdraw_money']: {
            bind: 'close'
          }
        },
        out: {
          [PAGE_NAME + '_pockets_scroll_complete']: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    },
    propertiesSpherica: {
      className: isNativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: ''
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [PAGE_NAME + '_init_page']: {
            bind: 'init-page'
          },
          [PAGE_NAME + '_recalculate_header']: {
            bind: 'init-page'
          },
          [PAGE_NAME + '_reset_page']: {
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

  const navigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'navigation_pockets_exit']: {
            bind: 'goBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBack'
          }
        },
        out: {
          [PAGE_NAME + '_navigation_pockets_to_previous_page']: {
            bind: 'navigate-to-previous-page',
            backStep: true
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
      titleName: 'pockets-withdraw-money',
      className: isNativeIos ? 'header--core-ios header--core' : 'header--core',
      rightIcon: 'coronita:close',
      cellsConnections: {
        out: {
          [PAGE_NAME_CHANNEL + '_close_modal']: {
            bind: 'click-right-button',
            backStep: true
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'header',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };

  const pocketsDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-pockets-dm-mx',
    familyPath: 'glomo-pockets-dm',
    properties: {
      pageName: PAGE_NAME,
      host: CONFIG.globalServices.host,
      pocketsApiVersion: CONFIG.globalServices.versions.pockets,
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      native: !!CONFIG.native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isFirstTime: true,
      isSpherica,
      cellsConnections: {
        in: {
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_pocket_id: {
            bind: 'pocketId'
          },
          blue_redirect_send_pocket_id: {
            bind: 'pocketId'
          },
          global_account_set_account_for_operations: {
            bind: 'selectedAccount'
          },
          blue_redirect_data_account_selected: {
            bind: 'selectedAccount'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewResponse'
          },
          pocket_set_pocket_info: {
            bind: 'pocketInfo'
          },
          navigation_to_withdrawal_money: {
            bind: 'initPocketWithdrawal'
          },
          blue_global_navigate_pockets_withdrawal: {
            bind: 'initPocketWithdrawal'
          },
          blue_send_id_init_pocket_detail_withdrawal: {
            bind: 'initPocketDetail'
          },
          [PAGE_NAME + '_pockets_entered_amount']: {
            bind: 'setAmount'
          },
          [PAGE_NAME + '_pockets_withdraw_money']: {
            bind: 'withdrawMoneyToPocket'
          }
        },
        out: {
          [PAGE_NAME + '_pockets_set_selected_account']: {
            bind: 'set-selected-account'
          },
          [PAGE_NAME + '_pockets_set_selected_pocket']: {
            bind: 'set-selected-pocket'
          },
          [PAGE_NAME + '_pockets_set_maximum_amount']: {
            bind: 'set-maximum-pocket-amount'
          },
          [PAGE_NAME + '_pockets_set_pocket_withdrawal_amount']: {
            bind: 'set-amount'
          },
          [PAGE_NAME + '_pockets_set_summary']: {
            bind: 'set-summary-amount'
          },
          [PAGE_NAME + '_pockets_set_success_properties']: {
            bind: 'set-success-properties-pocketsWithdrawal'
          },
          pockets_set_success_header_color: {
            bind: 'set-success-color-header'
          },
          pockets_navigate_success: {
            bind: 'set-add-money-success',
            link: {
              page: 'pocketsSuccess',
              skipHistory: true
            }
          },
          pockets_show_spinner: {
            bind: 'show-spinner'
          },
          pockets_hide_spinner: {
            bind: 'hide-spinner'
          },
          [PAGE_NAME + '_pockets_reset_steps']: {
            bind: 'reset-page-pocketsWithdrawal'
          },
          pockets_update_detail: {
            bind: 'update-pocket-detail'
          },
          dashboard_refresh_financial_overview: {
            bind: 'refresh-account'
          },
          global_retry_error: {
            bind: 'send-retry-error'
          },
          pocket_analytics_withdrawal_service_error: {
            bind: 'error-withdrawal-pocket',
            analytics: ANALYTICS_POCKETS.APP_PAGE_VIEW_WITHDRAWAL_ERROR
          },
          pockets_set_product_info: {
            bind: 'set-product-info'
          },
          [PAGE_NAME + '_pockets_analytics_info']: {
            bind: 'set-pocket-amount-info'
          },
          [PAGE_NAME + '_pockets_analytics_operation_number']: {
            bind: 'set-withdrawal-operation-number'
          },
          [PAGE_NAME + '_init']: {
            bind: 'init-pocketsWithdrawal'
          }
        }
      }
    }
  };

  const pocketsOPX = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-pockets-opx-manager-mx',
    familyPath: 'cells-pockets-opx-manager',
    properties: {
      pageName: PAGE_NAME,
      maxSteps: MAX_STEPS,
      autoActivateStep: true,
      decorateSteps: false,
      repeatOperative: true,
      isSpherica,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'init'
          },
          [PAGE_NAME + '_init']: {
            bind: 'setPocketsWithdrawalPorperties'
          },
          [PAGE_NAME + '_pockets_register_step']: {
            bind: 'registerStep'
          },
          [PAGE_NAME + '_pockets_next_step']: {
            bind: 'nextStep'
          },
          [PAGE_NAME + '_pockets_collapse_step']: {
            bind: 'manageStateSteps'
          },
          [PAGE_NAME + '_pockets_reset_steps']: {
            bind: 'resetAmountStep'
          },
          [PAGE_NAME + '_pockets_set_maximum_amount']: {
            bind: 'setPocketMaxAmount'
          },
          [PAGE_NAME + '_pockets_set_selected_account']: {
            bind: 'setAccount'
          },
          [PAGE_NAME + '_pockets_set_selected_pocket']: {
            bind: 'setPocket'
          },
          [PAGE_NAME + '_pockets_set_pocket_withdrawal_amount']: {
            bind: 'setPocketAmount'
          },
          pockets_change_pocket_amount: {
            bind: 'changePocketAmountSelected'
          },
          [PAGE_NAME + '_pockets_set_summary']: {
            bind: 'setSummary'
          },
          pocketsWithdrawal_close_modal: {
            bind: 'cleanBlueProperties'
          },
          pockets_navigate_success: {
            bind: 'cleanBlueProperties'
          },
          pocket_analytics_withdrawal_service_error: {
            bind: 'cleanBlueProperties'
          },
          send_pocket_amount_listening_mode_withdrawal: {
            bind: 'setAmountBlue'
          }
        },
        out: {
          [PAGE_NAME + '_pockets_set_account']: {
            bind: 'set-account'
          },
          [PAGE_NAME + '_pockets_set_pocket']: {
            bind: 'set-pocket'
          },
          [PAGE_NAME + '_pockets_set_pocket_max_amount']: {
            bind: 'set-maximum-amount-pocket'
          },
          [PAGE_NAME + '_pockets_set_amount_step_properties']: {
            bind: 'set-withdrawal-amount-message'
          },
          [PAGE_NAME + '_pockets_show_summary_withdraw_money']: {
            bind: 'set-summary-amount-pocketsWithdrawal'
          },
          [PAGE_NAME + '_pockets_enable_withdraw_money']: {
            bind: 'enable-withdraw-money-changed'
          },
          [PAGE_NAME + 'pockets_reset_scroll']: {
            bind: 'reset-scroll'
          },
          [PAGE_NAME + '_pockets_reset_summary']: {
            bind: 'reset-summary'
          },
          [PAGE_NAME + '_pockets_reset_amount_step']: {
            bind: 'reset-amount-step'
          },
          [PAGE_NAME + '_pockets_set_decorated_pocket']: {
            bind: 'set-input-message-step'
          },
          [PAGE_NAME + '_set_product_selector_proeprties']: {
            bind: 'set-product-selector-proeprties'
          },
          pockets_scroll_zone: {
            bind: 'cells-scroll-zone'
          },
          set_amount_blue_with_collapsed: {
            bind: 'set-amount-blue-with-collapsed'
          },
          set_amount_blue_without_collapsed: {
            bind: 'set-amount-blue-without-collapsed'
          }
        }
      }
    }
  };

  const pocketDetail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    properties: {
      id: 'pockets-pay-origin',
      fixed: true,
      skip: true,
      decorated: false,
      showSeparator: true,
      singleProductOriginType: false,
      disableSeparation: false,
      active: true,
      currentStep: 1,
      maxSteps: MAX_STEPS,
      shouldHideChangeButton: true,
      collapsed: true,
      localCurrency: LOCAL_CURRENCY,
      productSelected: true,
      changeLabel: null,
      stepTitle: 'pockets-pocket',
      disableChange: true,
      hideCurrentStepLabel: false,
      className: 'darker-background',
      endSeparator: true,
      previous: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_pockets_set_pocket']: {
            bind: 'selected'
          },
          [PAGE_NAME + '_pockets_scroll_complete']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_pockets_set_decorated_pocket']: {
            bind: 'decorated'
          },
          [PAGE_NAME + '_set_product_selector_proeprties']: {
            bind: 'setProperties'
          }
        },
        out: {
          [PAGE_NAME + '_pockets_register_step']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_pockets_next_step']: {
            bind: 'continue-pressed'
          },
          [PAGE_NAME + '_pockets_collapse_step']: {
            bind: 'change-step-state'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'pockets-pocket-spherica'
    }
  };

  const pocketAccount = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    properties: {
      id: 'pockets-pay-origin',
      className: 'darker-background',
      fixed: true,
      previous: true,
      skip: true,
      showSeparator: true,
      singleProductOriginType: false,
      disableSeparation: false,
      active: true,
      decorated: false,
      currentStep: 2,
      maxSteps: MAX_STEPS,
      shouldHideChangeButton: true,
      collapsed: true,
      localCurrency: LOCAL_CURRENCY,
      productSelected: true,
      changeLabel: null,
      stepTitle: 'pockets-destination-account',
      disableChange: true,
      hideCurrentStepLabel: false,
      visibleChars: 4,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_pockets_set_account']: {
            bind: 'selected'
          },
          [PAGE_NAME + '_pockets_scroll_complete']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_pockets_set_decorated_pocket']: {
            bind: 'decorated'
          },
          [PAGE_NAME + '_set_product_selector_proeprties']: {
            bind: 'setProperties'
          }
        },
        out: {
          [PAGE_NAME + '_pockets_register_step']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_pockets_next_step']: {
            bind: 'continue-pressed'
          },
          [PAGE_NAME + '_pockets_collapse_step']: {
            bind: 'change-step-state'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'pockets-destination-account-spherica'
    }
  };

  const pocketAmountStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-enter-amount',
    tagSpherica: 'cells-step-enter-amount-spherica',
    properties: {
      currentStep: 3,
      displayedCurrentStep: '',
      displayedMaxSteps: '',
      uiMode: 'full',
      maxSteps: MAX_STEPS,
      stepTitle: 'glomo-pockets-add-money-step-title',
      language: 'es-MX',
      currency: 'MXN',
      localCurrency: 'MXN',
      isSecondAmountEmpty: false,
      showCurrenciesInfo: false,
      ignoreNotSameCurrency: true,
      amountInputLabel: 'pockets-amount-label',
      limitedAmountAvailableMessage: 'pockets-withdraw-limited-amount-available-message',
      limitedAmountAvailableOfTransactionMessage: 'pockets-withdraw-limited-amount-available-transaction-message',
      limitedAmountAvailableTransactionMessageSecondary: '',
      maxProductErrorMessage: 'pockets-withdraw-max-product-error',
      active: true,
      activate: true,
      lastStep: true,
      showCheckboxBtn: false,
      autoActivateStep: true,
      decorateSteps: true,
      validateAmountRange: true,
      hideCurrentStepLabel: true,
      autoFormat: true,
      disableInline: true,
      showCollapsedEmptySecondAmount: false,
      showClassIconMessage: 'collapsed-info-box-icon-message',
      aboveInputMessage: {
        class: 'above-input-icon-message',
        type: 'info',
        icon: 'coronita:info',
        text: isSpherica ? 'pockets-withdraw-above-input-message-spherica' : 'pockets-withdraw-above-input-message'
      },
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_pockets_reset_amount_step']: {
            bind: 'setProperties'
          },
          [PAGE_NAME + '_pockets_set_pocket_max_amount']: {
            bind: 'maxProduct'
          },
          [PAGE_NAME + '_pockets_scroll_complete']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_pockets_set_amount_step_properties']: {
            bind: 'setProperties'
          },
          set_amount_blue_with_collapsed: {
            bind: 'sendAmountWithCollapsed'
          },
          set_amount_blue_without_collapsed: {
            bind: 'sendAmountWithOutCollapsed'
          }
        },
        out: {
          [PAGE_NAME + '_pockets_register_step']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_pockets_collapse_step']: {
            bind: 'change-step-state'
          },
          [PAGE_NAME + '_pockets_entered_amount']: {
            bind: 'amount-set'
          },
          [PAGE_NAME + '_focus_input']: {
            bind: 'amount-input-focus'
          },
          pockets_change_pocket_amount: {
            bind: 'change-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'pockets-card',
      displayedMaxSteps: MAX_STEPS,
      hideCurrentStepLabel: false,
      stepTitle: 'pockets-amount-step-title-spherica',
      changeLabel: 'pockets-create-summary-step-change-label-spherica'
    }
  };

  const pocketsSummary = {
    zone: 'app__confirm',
    tag: 'cells-operation-summary',
    tagSpherica: 'cells-operation-summary-spherica',
    type: 'UI',
    properties: {
      isNativeIos: isNativeIos,
      buttonLabel: 'cells-st-button-continue-label',
      hideCustomFeesMessage: false,
      showLoadingSkeleton: true,
      showAddition: true,
      localCurrency: 'MXN',
      operationLanguage: 'es-MX',
      summaryViewTitle: 'pockets-withdraw-summary-title',
      summaryViewTitleAdditionalAmount: 'pockets-scheduled-amount',
      hideCustomFeesMessage: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_pockets_show_summary_withdraw_money']: {
            bind: 'operation'
          }
        },
        out: {
          [PAGE_NAME + '_pockets_withdraw_money']: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      buttonLabel: 'cells-st-button-continue-label-spherica',
      summaryViewTitle: 'pockets-withdraw-summary-title-spherica'
    }
  };

  const analyticsPockets = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-pockets-manager',
    familyPath: '@glomo-web-components/glomo-analytics-pockets-manager',
    render: 'litElement',
    properties: {
      page: PAGE_NAME,
      config: {
        steps: {
          last: 'app-step-2'
        }
      },
      cellsConnections: {
        in: {
          global_set_product: {
            bind: 'product'
          },
          [PAGE_NAME + '_pockets_analytics_operation_number']: {
            bind: 'withdrawalOperationNumber'
          },
          [PAGE_NAME + '_pockets_analytics_info']: {
            bind: 'parsePocket'
          },
          [PAGE_NAME + '_init_page']: {
            bind: 'firePageVisit'
          },
          [PAGE_NAME + '_focus_input']: {
            bind: 'fireAppStarted'
          },
          [PAGE_NAME + '_pockets_show_summary_withdraw_money']: {
            bind: 'onLastStep'
          }
        },
        out: {
          pocketsWithdrawal_analytics_app_page_visit: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS_POCKETS.APP_PAGE_VISIT_WITHDRAWAL_PAGE
          },
          pocketsWithdrawal_analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS_POCKETS.APP_STARTED_WITHDRAWAL_PAGE
          },
          pocketsWithdrawal_analytics_app_step_2: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS_POCKETS.APP_STEP_2_WITHDRAWAL_PAGE
          },
          pockets_set_analytic_pocket_data: {
            bind: 'set-analytics-pocket-data'
          }
        }
      }
    }
  };

  const base = {
    hash: 'pockets-withdrawal',
    currentPage: {
      url: '/pockets-withdrawal',
      params: []
    },
    page,
    template,
    components: [
      SPINNER,
      lifeCycle,
      navigationHandler,
      header,
      pocketsDM,
      pocketsOPX,
      pocketDetail,
      pocketAccount,
      pocketAmountStep,
      analyticsPockets,
      pocketsSummary
    ]
  };
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'withdraw-pocket-error',
      acceptRetry: { bind: 'withdrawMoneyToPocket', component: 'glomo-pockets-dm-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
