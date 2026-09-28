/* eslint-disable new-cap, no-dupe-keys, no-shadow */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'pocketsCreate';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const PRODUCT = 'pocket';
  const SPINNER = utils.SPINNER(CONFIG);
  const ANALYTICS_POCKETS = require('./analytics/_pockets')();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const MAX_STEPS = 3;

  const isNativeIos = CONFIG.nativeIos || false;

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
          pockets_scroll_zone: {
            bind: 'scrollItemIntoView'
          },
          [PAGE_NAME + '_recalculate_header']: {
            bind: 'recalculateHeader'
          },
          pockets_enable_create_pocket: {
            bind: 'showConfirm'
          },
          pockets_show_summary: {
            bind: 'showConfirm'
          },
          pockets_reset_scroll: {
            bind: 'resetLayerScroll'
          },
          pockets_create_pocket: {
            bind: 'close'
          }
        },
        out: {
          pockets_scroll_complete: {
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
          },
          global_retargeting_reset_step: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
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
          },
          global_retargeting_send_information_update: {
            bind: 'navigate-to-previous-page'
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
      titleName: 'pockets-create-pocket',
      className: isNativeIos ? 'header--core-ios header--core' : 'header--core',
      rightIcon: 'coronita:close',
      back: true,
      cellsConnections: {
        in: {},
        out: {
          navigation_about_info_to_page: {
            bind: 'click-right-button',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'click-right-button'
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
      keyContributionCreateFlag: 'glomo.pockets.createAndContribute',
      isSpherica,
      cellsConnections: {
        in: {
          pockets_set_contract_number: {
            bind: 'contractNumber'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_account_set_account_for_operations: {
            bind: 'selectedAccount'
          },
          financial_health_push_advice_set_account: {
            bind: 'selectedAccount'
          },
          pocket_native_account: {
            bind: 'selectedAccount'
          },
          blue_redirect_data_account_selected: {
            bind: 'selectedAccount'
          },
          checklist_actions_data_account_selected: {
            bind: 'selectedAccount'
          },
          global_financial_overview_details: {
            bind: 'setFinancialOverviewResponse'
          },
          navigate_to_pockets_create: {
            bind: 'initializeData'
          },
          blue_global_navigate_pockets_create: {
            bind: 'initializeData'
          },
          navigate_checklist_actions_to_pockets_create: {
            bind: 'initializeData'
          },
          pockets_is_payroll_account: {
            bind: 'isPayrollAccount'
          },
          pockets_set_pockets_number: {
            bind: 'numberOfPockets'
          },
          pockets_entered_amount: {
            bind: 'setAmount'
          },
          pockets_set_pocket_name: {
            bind: 'setPocketAlias'
          },
          pockets_create_pocket: {
            bind: 'setPostPocket'
          },
          pockets_create_success: {
            bind: 'setSuccess'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlags'
          },
          [PAGE_NAME + '_init_page']: {
            bind: 'initRetargeting'
          },
          global_device_get_network_type_success: {
            bind: 'sendPostRetargeting'
          },
          pockets_init_retargeting: {
            bind: 'sendPostRetargeting'
          }
        },
        out: {
          global_retargeting_info_account: {
            bind: 'send-retargeting-account'
          },
          global_retargeting_form_submission: {
            bind: 'send-pockets-post-retargeting'
          },
          pockets_set_selected_account: {
            bind: 'set-selected-account'
          },
          pockets_set_selected_account_name: {
            bind: 'set-selected-account-alias'
          },
          pockets_app_page_visit: {
            bind: 'set-selected-account-alias'
          },
          pockets_set_maximum_amount_account: {
            bind: 'set-maximum-amount'
          },
          pockets_set_summary: {
            bind: 'set-summary-amount'
          },
          pockets_set_payroll_account: {
            bind: 'set-is-payroll-account'
          },
          pockets_show_spinner: {
            bind: 'show-spinner'
          },
          pockets_hide_spinner: {
            bind: 'hide-spinner'
          },
          pockets_create_success: {
            bind: 'create-pocket-success'
          },
          pockets_navigate_success: {
            bind: 'navigate-to-success',
            link: {
              page: 'pocketsSuccess',
              skipHistory: true
            }
          },
          pockets_app_completed: {
            bind: 'create-pocket-success-receipt'
          },
          [PAGE_NAME + '_pockets_set_success_properties']: {
            bind: 'set-success-properties-pocketsCreate'
          },
          pockets_set_pockets_number: {
            bind: 'set-number-of-pockets'
          },
          pockets_reset_steps: {
            bind: 'reset-page-pocketsCreate'
          },
          pockets_set_pocket_alias: {
            bind: 'set-pocket-alias'
          },
          pockets_set_pocket_amount: {
            bind: 'set-amount'
          },
          dashboard_refresh_financial_overview: {
            bind: 'refresh-account'
          },
          pockets_analytics_info: {
            bind: 'set-pocket-amount-info'
          },
          global_retry_error: {
            bind: 'send-retry-error'
          },
          global_retargeting_contracted_product: {
            bind: 'navigate-to-success'
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
      decorateSteps: true,
      repeatOperative: true,
      isSpherica,
      cellsConnections: {
        in: {
          blue_name_pocket_listening_mode: {
            bind: 'setNameBlue'
          },
          blue_amount_pocket_listening_mode: {
            bind: 'setAmountBlue'
          },
          global_retargeting_send_information_update: {
            bind: 'cleanBlueProperties'
          },
          pockets_navigate_success: {
            bind: 'cleanBlueProperties'
          },
          global_retry_error: {
            bind: 'cleanBlueProperties'
          },
          pockets_set_payroll_account: {
            bind: 'isPayrollAccount'
          },
          pockets_set_maximum_amount_account: {
            bind: 'maxAmount'
          },
          [PAGE_NAME + '_init_page']: {
            bind: 'init'
          },
          pockets_set_selected_account: {
            bind: 'setAccount'
          },
          pockets_set_pocket_alias: {
            bind: 'setPocketName'
          },
          pockets_set_pocket_amount: {
            bind: 'setPocketAmount'
          },
          pockets_change_pocket_name: {
            bind: 'changePocketNameSelected'
          },
          pockets_change_pocket_amount: {
            bind: 'changePocketAmountSelected'
          },
          pockets_set_summary: {
            bind: 'setSummary'
          },
          pockets_register_step: {
            bind: 'registerStep'
          },
          pockets_next_step: {
            bind: 'nextStep'
          },
          pockets_collapse_step: {
            bind: 'manageStateSteps'
          },
          pockets_info_button_pressed: {
            bind: 'setInfoModal'
          },
          pockets_reset_steps: {
            bind: 'reset'
          }
        },
        out: {
          pockets_scroll_zone: {
            bind: 'cells-scroll-zone'
          },
          pockets_set_account: {
            bind: 'set-account'
          },
          pockets_set_amount_step_properties: {
            bind: 'set-properties-amount-step'
          },
          pockets_set_decorated_input_message: {
            bind: 'set-decotated-input-message-step'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-modal'
          },
          pockets_enable_create_pocket: {
            bind: 'enable-create-pocket-changed'
          },
          pockets_reset_scroll: {
            bind: 'reset-scroll'
          },
          pockets_show_summary: {
            bind: 'set-summary-amount-pocketsCreate'
          },
          pockets_summary_label: {
            bind: 'set-summary-label'
          },
          pockets_reset_name_step: {
            bind: 'reset-name-step'
          },
          pockets_reset_amount_step: {
            bind: 'reset-amount-step'
          },
          pockets_reset_default_value: {
            bind: 'reset-default-value'
          },
          pockets_set_second_amount_empty: {
            bind: 'set-empty-amount-message'
          },
          pockets_reset_second_input: {
            bind: 'reset-second-input'
          },
          pockets_set_app_step_3: {
            bind: 'set-summary-pocketsCreate'
          },
          set_name_blue_with_collapsed: {
            bind: 'set-name-blue-with-collapsed'
          },
          set_amount_blue_with_collapsed: {
            bind: 'set-amount-blue-with-collapsed'
          },
          set_amount_blue_without_collapsed: {
            bind: 'set-amount-blue-without-collapsed'
          }
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-modal'
            }
          }
        },
        remove: {
          out: [ 'global_alert_manager_open_with_settings' ]
        }
      }
    }
  };

  const pocketAccountStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    properties: {
      id: 'pockets-product-selector',
      shouldHideChangeButton: true,
      collapsed: true,
      errorMessage: 'error-message',
      currentStep: 1,
      maxSteps: MAX_STEPS,
      active: true,
      productSelected: true,
      changeLabel: null,
      stepTitle: 'pockets-origin-account',
      className: 'cells-step-container',
      disableChange: true,
      hideCurrentStepLabel: true,
      visibleChars: 4,
      localCurrency: 'MXN',
      decorated: false,
      fixed: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initialize'
          },
          pockets_set_account: {
            bind: 'selected'
          },
          pockets_scroll_complete: {
            bind: 'scrollComplete'
          }
        },
        out: {
          pockets_register_step: {
            bind: 'register-step'
          },
          pockets_next_step: {
            bind: 'continue-pressed'
          },
          pockets_collapse_step: {
            bind: 'change-step-state'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      stepTitle: 'pockets-origin-account-spherica'
    }
  };

  const pocketNameStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-input-message',
    tagSpherica: 'cells-step-input-message-spherica',
    properties: {
      className: 'input-message-wrapper-collapsed',
      active: true,
      showSkeletonRemaining: true,
      showSkeletonWithOutInputValidation: true,
      showSkeleton: true,
      showContinueButton: true,
      showIconMessage: true,
      maxChars: 18,
      iconAlertColor: 'color-dark-core',
      allowedChars: '[A-Za-z0-9 ]',
      isAmount: false,
      currentStep: 2,
      displayedCurrentStep: '1',
      displayedMaxSteps: '2',
      maxSteps: MAX_STEPS,
      textBeforeCurrentStep: 'cells-step-word-display-step',
      title: 'pockets-pocket',
      inputPlaceholder: 'pockets-pocket-name',
      inputLabel: 'pockets-pocket-name',
      description: '',
      infoAlertKeyText: 'pockets-pocket-name-info',
      regexValidationFromInputText: '^[A-Za-z0-9 ]+$',
      isTextInput: true,
      itemName: 'pockets-pocket-name',
      infoMessage: '',
      iconInfoMessage: '',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initialize'
          },
          pockets_scroll_complete: {
            bind: 'scrollComplete'
          },
          pockets_reset_name_step: {
            bind: 'setProperties'
          },
          pockets_reset_steps: {
            bind: 'reset'
          },
          pockets_set_decorated_input_message: {
            bind: 'decorated'
          },
          set_name_blue_with_collapsed: {
            bind: 'setInput'
          }
        },
        out: {
          pockets_register_step: {
            bind: 'register-step'
          },
          pockets_next_step: {
            bind: 'continue-pressed'
          },
          pockets_set_pocket_name: {
            bind: 'continue-pressed'
          },
          pockets_collapse_step: {
            bind: 'change-step-state'
          },
          pockets_change_pocket_name: {
            bind: 'change-pressed'
          },
          pockets_input_focus: {
            bind: 'cells-molecule-input-focus'
          },
          pockets_init_retargeting: {
            bind: 'cells-molecule-input-focus'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'pockets-card',
      title: 'pockets-pocket-spherica',
      textBeforeCurrentStep: '',
      extraKeyValuesClass: 'inline value-book',
      stepChangeLabel: 'cells-step-input-message-step-change-label-spherica',
      infoAlertKeyText: 'pockets-pocket-name-info-spherica',
      isTextInput: false,
      allowedChars: '',
      enableRegexValidation: true,
      regexValidationFromInputText: '^[A-Za-z0-9ÁÉÍÓÚáéíóúüÜàèìòùÀÈÌÒÙ ´]+$'
    }
  };

  const pocketAmountStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-enter-amount',
    tagSpherica: 'cells-step-enter-amount-spherica',
    properties: {
      className: 'inline-wrapper-collapsed',
      currentStep: 3,
      displayedCurrentStep: '2',
      displayedMaxSteps: '2',
      keyValueClass: 'inline',
      uiMode: 'full',
      maxSteps: MAX_STEPS,
      stepTitle: 'pockets-amount-step-title',
      language: 'es-MX',
      currency: 'MXN',
      localCurrency: 'MXN',
      amountInputLabel: 'pockets-scheduled-amount-label',
      showInlineAmount: true,
      showCurrenciesInfo: false,
      ignoreNotSameCurrency: true,
      textBeforeCurrentStep: 'cells-step-word-display-step',
      limitedAmountAvailableMessage: 'pockets-limited-amount-available-message',
      limitedAmountAvailableOfTransactionMessage: 'pockets-limited-amount-available-of-transaction-message',
      limitedAmountAvailableTransactionMessageSecondary: 'pockets-limited-amount-available-of-transaction-message-secondary',
      filledAmountLabel: 'pockets-create-pocket-amount-label',
      maxProductErrorMessage: 'pockets-max-product-error-message',
      avoidInputValidation: true,
      active: false,
      activate: true,
      lastStep: true,
      autoActivateStep: true,
      decorateSteps: true,
      validateAmountRange: true,
      keepOpened: true,
      decorated: false,
      autoFormat: true,
      disableInline: true,
      showCollapsedEmptySecondAmount: true,
      showClassIconMessage: 'collapsed-info-box-icon-message',
      collapsedInfoMessage: 'pockets-collapsed-info-message',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_init_page']: {
            bind: 'initialize'
          },
          pockets_reset_default_value: {
            bind: 'defaultValue'
          },
          pockets_scroll_complete: {
            bind: 'scrollComplete'
          },
          pockets_reset_amount_step: {
            bind: 'setProperties'
          },
          pockets_reset_second_input: {
            bind: 'defaultSecondValue'
          },
          pockets_set_amount_step_properties: {
            bind: 'setProperties'
          },
          pockets_set_second_amount_empty: {
            bind: 'isSecondAmountEmpty'
          },
          set_amount_blue_with_collapsed: {
            bind: 'sendAmountWithCollapsed'
          },
          set_amount_blue_without_collapsed: {
            bind: 'sendAmountWithOutCollapsed'
          }
        },
        out: {
          pockets_register_step: {
            bind: 'register-step'
          },
          pockets_entered_amount: {
            bind: 'amount-set'
          },
          pockets_collapse_step: {
            bind: 'change-step-state'
          },
          pockets_info_button_pressed: {
            bind: 'icon-info-pressed'
          },
          pockets_change_pocket_amount: {
            bind: 'change-pressed'
          },
          [PAGE_NAME + '_cells_step_focus_in']: {
            bind: 'cells-step-focus-in'
          },
          pockets_info_icon_pressed: {
            bind: 'icon-info-pressed',
            analytics: ANALYTICS_POCKETS.PAGE_VIEW_POCKETS_SCHEDULED_INFO
          },
          global_retargeting_go_next_step: {
            bind: 'amount-set'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'pockets-card gap-collapsed',
      keyValueClass: 'inline value-book',
      stepTitle: 'pockets-amount-step-title-spherica',
      textBeforeCurrentStep: '',
      filledAmountLabel: 'pockets-create-pocket-amount-label-spherica',
      showClassIconMessage: 'collapsed-input-message inline',
      changeLabel: 'cells-step-enter-amount-change-label-spherica',
      showTextRightIcon: true,
      amountInputLabel: 'pockets-scheduled-amount-label-spherica'
    }
  };

  const pocketsSummary = {
    zone: 'app__confirm',
    tag: 'cells-operation-summary',
    tagSpherica: 'cells-operation-summary-spherica',
    type: 'UI',
    properties: {
      isNativeIos: isNativeIos,
      buttonLabel: 'metas-saving-goals-accept',
      hideCustomFeesMessage: false,
      showLoadingSkeleton: true,
      showAddition: true,
      localCurrency: 'MXN',
      operationLanguage: 'es-MX',
      summaryViewTitle: 'pockets-create-pocket-amount-label',
      summaryViewTitleAdditionalAmount: 'pockets-scheduled-amount',
      hideCustomFeesMessage: true,
      cellsConnections: {
        in: {
          pockets_summary_label: {
            bind: 'summaryViewTitle'
          },
          pockets_show_summary: {
            bind: 'operation'
          }
        },
        out: {
          pockets_create_pocket: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      summaryViewTitle: 'pockets-create-pocket-amount-label-spherica',
      stepChangeLabel: 'pockets-create-summary-step-change-label-spherica',
      summaryViewTitleAdditionalAmount: 'pockets-scheduled-amount-spherica',
      summaryViewClass: 'savings-summary',
      operationAdditionalAmountClass: 'amount-large'
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
          3: 'app-step-2',
          last: 'app-step-3'
        }
      },
      cellsConnections: {
        in: {
          pockets_set_selected_account_name: {
            bind: 'productName'
          },
          pockets_app_page_visit: {
            bind: 'firePageVisit'
          },
          pockets_input_focus: {
            bind: 'fireAppStarted'
          },
          [PAGE_NAME + '_cells_step_focus_in']: {
            bind: 'onStep'
          },
          pockets_analytics_info: {
            bind: 'parsePocket'
          },
          pockets_set_app_step_3: {
            bind: 'onLastStep'
          }
        },
        out: {
          pocketsCreate_analytics_app_page_visit: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS_POCKETS.APP_PAGE_VISIT_POCKET_CREATE
          },
          pocketsCreate_analytics_app_started: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS_POCKETS.APP_STARTED
          },
          pocketsCreate_analytics_app_step_2: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS_POCKETS.APP_STEP_2
          },
          pocketsCreate_analytics_app_step_3: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS_POCKETS.APP_STEP_3
          }
        }
      }
    }
  };

  const base = {
    hash: 'pockets-create',
    currentPage: {
      url: '/pockets-create',
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
      pocketAccountStep,
      pocketNameStep,
      pocketAmountStep,
      pocketsSummary,
      analyticsPockets
    ]
  };

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'create-pocket-error',
      acceptRetry: { bind: 'setPostPocket', component: 'glomo-pockets-dm-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'goBack', component: 'glomo-navigation-handler' }
    }
  ]);

  return sphericaPageUtils.spherize(base);
};
