/* eslint-disable complexity, max-statements */
'use strict';

module.exports = CONFIG => {
  const {
    nativeIos = false,
    native = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        storesCommerce
      }
    }
  }  = CONFIG;
  const {
    useNames,
    createPrefixFromPageName,
    SPINNER: spinner,
    getLocalCurrency,
    getVisibleChars,
    getLanguage } = require('./common/helpers/_utils');
  const pageName = 'cardlessWithdrawal';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const operativePrefix = createPrefixFromPageName(pageName);
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  const getGlobalName = _name => `global_${getChannelName(_name)}`.toLowerCase();
  const getLocalePrefix = _name => `glomo-${getLocaleName(_name)}`;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const _localStorage = require('./common/_local-storage');
  const visibleChars = getVisibleChars(CONFIG)('account');
  const maxSteps = 3;
  const analytics = require('./analytics/_cardlessWithdrawal')('');

  const customInitEvents = {
    ['init-cardless-withdrawal']: true,
    ['swipe-menu-enabled']: false
  };
  const namesFlag = {
    commerce: 'glomo.account.cardlessWithdrawalCommerce',
    digitalCardModal: 'glomo.account.cardlessWithdrawalDigitalActivationModal'
  };
  const base = {
    hash: 'cardless-withdrawal',
    currentPage: {
      url: '/cardless-withdrawal/'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        headerFixed: true,
        topOnConfirm: true,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'bbva-core-blue',
        animationType: 'verticalUp',
        className: nativeIos ? 'bg-core-blue' : '',
        cellsConnections: {
          in: {
            [getGlobalName('init_page')]: {
              bind: 'recalculateHeader'
            },
            [getGlobalName('cells_scroll_zone')]: {
              bind: 'scrollItemIntoView'
            },
            [getGlobalName('reset_scroll')]: {
              bind: 'resetLayerScroll'
            },
            [getGlobalName('enable_cardless_withdrawal')]: {
              bind: 'showConfirm'
            },
            [getGlobalName('modal_opened')]: {
              bind: 'setModalActive'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            },
            [getGlobalName('_INPUT_FOCUS_IN')]: {
              bind: 'recalculateStatusBarTop'
            },
            [getGlobalName('_INPUT_FOCUS_OUT')]: {
              bind: 'recalculateHeader'
            },
            [getGlobalName('_INPUT_FOCUS_OUT_RESET_STATUS_BAR')]: {
              bind: 'recalculateStatusBarTop'
            }
          },
          out: {
            [getGlobalName('scroll_complete')]: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      },
      propertiesSpherica: sphericaPageUtils.getProperties({
        componentName: 'glomo-opx-template-spherica',
        type: 'modal',
        className: nativeIos ? 'ios-top-padding header--white' : 'header--white',
        extraHeaderClass: nativeIos ? 'header--white' : ''
      })
    },
    components: [ spinner(CONFIG) ]
  };

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      iOSFixedHeader: nativeIos ? false : '',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: getLocalePrefix('dm-open-generic-modal-channel')
          },
          [getGlobalName('open_on_boarding_spherica')]: {
            bind: 'openWithSettings'
          },
          [getGlobalName('open_exit_modal_spherica')]: {
            bind: 'openWithSettings'
          },
          [getGlobalName('error_modal_spherica')]: {
            bind: 'openWithSettings'
          },
          cardless_withdrawal_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          suspected_transaction_reset_operatives: {
            bind: 'close'
          }
        },
        out: {
          global_cardless_withdrawal_error_modal_cancel: {
            bind: 'alert-glomo-cardless-withdrawal-dm-error-cancel'
          },
          global_cardless_withdrawal_exit_request_accept: {
            bind: 'alert-glomo-cardless-withdrawal-dm-exit-accept'
          },
          global_cardless_withdrawal_request_call_bbva_line: {
            bind: 'alert-CALL-BBVA-LINE-accept'
          },
          global_cardlesswithdrawal_to_call: {
            bind: 'alert-error-cardless-withdrawal-high-risk-of-fraud-accept'
          },
          global_operations_modal_aric_send_exit_to_header: {
            bind: 'alert-error-cardless-withdrawal-high-risk-of-fraud-cancel',
            backStep: true
          },
          global_cardless_withdrawal_reset_amount_input: {
            bind: 'alert-glomo-cardless-withdrawal-dm-exit-accept'
          }
        }
      }
    }
  };

  const cellsMoleculeHeader = {
    zone: 'app__header',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    type: 'UI',
    properties: {
      className: nativeIos ? 'header--core-ios header--core' : 'header--core',
      rightIcon: 'coronita:close',
      titleName: getLocalePrefix('header-title'),
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'focusOnTitle'
          }
        },
        out: {
          [getGlobalName('request_exit')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: sphericaPageUtils.getProperties({
      componentName: 'cells-molecule-header-spherica',
      type: 'modal',
      variant: 'primary',
      className: nativeIos ? 'header--white-ios header--white' : 'header--white',
      rightIconText: 'cells-molecule-header-spherica-close'
    })
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: getLocalePrefix('exit'),
      cellsConnections: {
        in: {
          [getGlobalName('exit')]: {
            bind: 'goBack'
          },
          [getGlobalName('navigate_to_review')]: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [getGlobalName('navigate_to_review_page')]: {
            bind: 'navigation-to-review',
            link: {
              page: 'cardlessWithdrawalReview'
            }
          },
          [getGlobalName('good_bye')]: {
            bind: getLocalePrefix('exit'),
            backStep: true
          }
        }
      }
    }
  };
  const cellsHandleLifeCycle = {
    zone: 'app__header',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      cache: [ 'mtuException' ],
      pageName,
      customInitEvents,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          },
          [getGlobalName('exit')]: {
            bind: 'reset'
          },
          [getGlobalName('navigate_to_review')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('init_page')]: {
            bind: 'init-cardless-withdrawal'
          },
          [getGlobalName('reset')]: {
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
  const cellsStepProductSelector = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: 'cardless-withdrawal-origin',
      currentStep: 1,
      stepTitle: getLocalePrefix('step-product-selector-title'),
      productsListLabel: getLocalePrefix('step-product-selector-title'),
      changeLabel: 'glomo-common-operatives-change',
      producstListLabel: 'glomo-common-accounts-selector-title',
      errorMessage: getLocalePrefix('step-product-selector-insuficent-balance-message'),
      notSavedState: true,
      notInitializeWithAttached: true,
      isWarningMessage: true,
      ignoreAdditionalMessageValidation: true,
      disabledUpdateTitleOnChangeProduct: false,
      viewMoreDestination: 'source',
      visibleChars,
      localCurrency: getLocalCurrency(),
      maxSteps,
      changeOriginText: getLocalePrefix('step-product-selector-title-primary-btn-label'),
      dontChangeAndContinueText: getLocalePrefix('step-product-selector-title-secondary-btn-label'),
      infoIcon: 'coronita:alert',
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_default_product_id')]: {
            bind: 'defaultProductId'
          },
          [getGlobalName('set_default_product_selected')]: {
            bind: 'selected'
          },
          [getGlobalName('set_origin_products')]: {
            bind: 'fetchProducts'
          },
          [getGlobalName('set_fixed')]: {
            bind: 'fixed'
          },
          [getGlobalName('source_modal_selected')]: {
            bind: 'onProductSelected'
          },
          [getGlobalName('set_on_product_selected')]: {
            bind: 'onProductSelected'
          },
          [getGlobalName('set_collapsed')]: {
            bind: 'collapsed'
          },
          [getGlobalName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getGlobalName('set_step_product_selector_fixed')]: {
            bind: 'setFixed'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          },
          blue_redirect_data_account_selected: {
            bind: 'preselectProduct'
          }
        },
        out: {
          [getGlobalName('register_step_product_selector')]: {
            bind: 'register-step'
          },
          [getGlobalName('_view_all')]: {
            bind: 'view-all'
          },
          [getGlobalName('selected_changed')]: {
            bind: 'selected-changed'
          },
          [getGlobalName('dont_change_and_continue')]: {
            bind: 'dont-change-and-continue'
          },
          [getGlobalName('change_step_state')]: {
            bind: 'change-step-state'
          },
          [getGlobalName('account_change_pressed')]: {
            bind: 'change-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      productsListLabel: getLocalePrefix('step-product-selector-title-accounts'),
      changeLabel: 'glomo-common-operatives-change-spherica',
      variant: 'primary-alt',
      isWarningMessage: false,
      errorOrWarningTextInfo: 'error'
    }
  };
  const cellsProductSelectorModal = {
    zone: 'app__overlay',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    type: 'UI',
    properties: {
      visibleChars,
      localCurrency: getLocalCurrency(),
      modalTitle: 'cells-global-dashboard-account-header',
      iOSFixedHeader: nativeIos,
      showCloseModalButton: true,
      closeButtonLabel: 'cells-product-selector-modal-close-button',
      productsListTitle: 'cells-global-dashboard-account-header',
      errorMessage: getLocalePrefix('step-product-selector-error-message-cardless'),
      cellsConnections: {
        in: {
          [getGlobalName('_view_all')]: {
            bind: 'treatProducts'
          },
          [getGlobalName('clean_operative')]: {
            bind: 'reset'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('source_modal_selected')]: {
            bind: 'selected-product'
          },
          [getGlobalName('modal_opened')]: {
            bind: 'opened-changed'
          }
        }
      }
    }
  };
  const cellsStepEnterAmount = {
    zone: 'app__main',
    tag: 'cells-step-enter-amount',
    tagSpherica: 'cells-step-enter-amount-spherica',
    type: 'UI',
    properties: {
      id: 'cardless-withdrawal-amount',
      currentStep: 2,
      title: getLocalePrefix('amount'),
      changeLabel: 'glomo-common-operatives-change',
      stepDescription: '',
      uiMode: 'full',
      availableCurrenciesInfo: 'info',
      keepValues: ['currency', 'minProduct', 'maxProduct', 'amounts'],
      stepTitle: getLocalePrefix('step-enter-amount-title'),
      amountInputLabel: getLocalePrefix('step-enter-amount-input'),
      range: true,
      notInitializeWithAttached: true,
      disableAmountGroupWarning: true,
      inputFocusOut: false,
      numeralPositiveOnly: true,
      showCurrenciesInfo: false,
      hideDecimalsMessage: true,
      currency: getLocalCurrency(),
      multipleAmountRangeMessageKey: getLocalePrefix('step-enter-amount-multiple-message'),
      multipleAmountRangeErrorMessageKey: getLocalePrefix('step-enter-amount-multiple-message'),
      showIconInRangeMessageSection: true,
      availableBalanceDefaultMessage: getLocalePrefix('available-balance'),
      amountErrorMinLimitMessage: getLocalePrefix('min-value-info'),
      amountErrorMaxLimitMessage: getLocalePrefix('max-value-info'),
      styleIconInfo: 'large-dark-blue',
      validateAmountRange: true,
      activate: true,
      isRemaining: true,
      maxSteps,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      infoMessage: getLocalePrefix('info-message-commerce'),
      infoType: 'info',
      infoLink: getLocalePrefix('info-link-commerce'),
      disableDecimal: true,
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_max_product')]: {
            bind: 'maxProduct'
          },
          [getGlobalName('set_config_step_amount')]: {
            bind: 'setProperties'
          },
          [getGlobalName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getGlobalName('selected_changed')]: {
            bind: 'initCurrency'
          },
          [getGlobalName('clean_operative')]: {
            bind: 'reset'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          },
          [getGlobalName('send_data_settings')]: {
            bind: 'setProperties'
          },
          [getGlobalName('set_enable_commerce_message_info')]: {
            bind: 'showInfoMessage'
          },
          blue_redirect_data_Amount_selected: {
            bind: 'amountValidationFromBlue'
          }
        },
        out: {
          [getGlobalName('register_step_enter_amount')]: {
            bind: 'register-step'
          },
          [getGlobalName('send_step_amount_value')]: {
            bind: 'send-step-amount-value'
          },
          [getGlobalName('change_step_state')]: {
            bind: 'change-step-state'
          },
          [getGlobalName('amount_change_pressed')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('link_change_pressed')]: {
            bind: 'link-clicked'
          }
        }
      }
    },
    propertiesSpherica: {
      title: getLocalePrefix('amount-spherica'),
      changeLabel: 'glomo-common-operatives-change-spherica',
      stepDescription: '',
      stepTitle: getLocalePrefix('step-enter-amount-title-spherica'),
      amountInputLabel: getLocalePrefix('step-enter-amount-input-spherica'),
      amountErrorMaxLimitMessage: getLocalePrefix('max-value-info-spherica'),
      infoMessage: getLocalePrefix('info-message-commerce-spherica'),
      paddingBottom: 'S',
      sizeAmount: 'XL',
      newCellsConnections: {
        add: {
          in: {
            global_cardless_withdrawal_reset_amount_input: {
              bind: 'resetAmountInputState'
            }
          }
        }
      }
    }
  };
  const cellsStepInputMessage = {
    zone: 'app__main',
    tag: 'cells-step-concept',
    tagSpherica: 'cells-step-concept-spherica',
    type: 'UI',
    properties: {
      id: 'cardless-withdrawal-concept',
      currentStep: 3,
      maxSteps: 3,
      maxLength: 20,
      lastStep: true,
      isRequired: false,
      title: getLocalePrefix('step-input-selector'),
      stepTitle: 'glomo-transfer-concept',
      allowedValue: '[0-9]{6,7}',
      allowedChars: '^[-_a-zñA-ZÑ0-9 ]*$',
      cellsConnections: {
        in: {
          [getGlobalName('init_page')]: {
            bind: 'initialize'
          },
          [getGlobalName('set_config_step_concept')]: {
            bind: 'setProperties'
          },
          [getGlobalName('scroll_complete')]: {
            bind: 'scrollComplete'
          },
          [getGlobalName('set_concept_selected')]: {
            bind: 'input'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          }
        },
        out: {
          [getGlobalName('register_step_input_message')]: {
            bind: 'register-step'
          },
          [getGlobalName('continue_concept_pressed')]: {
            bind: 'continue-pressed'
          },
          [getGlobalName('change_step_state')]: {
            bind: 'change-step-state'
          },
          [getGlobalName('concept_change_pressed')]: {
            bind: 'change-pressed'
          },
          [getGlobalName('_INPUT_FOCUS_IN')]: {
            bind: 'cells-molecule-input-focus'
          },
          [getGlobalName('_INPUT_FOCUS_OUT')]: {
            bind: 'cells-molecule-input-blur'
          },
          [getGlobalName('_INPUT_FOCUS_OUT_RESET_STATUS_BAR')]: {
            bind: 'cells-molecule-input-blur'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'glomo-common-operatives-change-spherica',
      paddingBottom: 'S',
      labelClass: 'hide-label'
    }
  };
  const glomoOpxCardlessWithdrawal = {
    zone: 'app__transactional',
    familyPath: 'glomo-opx-cardless-withdrawal-dm',
    tag: 'glomo-opx-cardless-withdrawal-mx-dm',
    type: 'DM',
    properties: {
      baseLocale: getLocalePrefix('dm'),
      host: CONFIG.globalServices.host,
      transferApiVersion: CONFIG.globalServices.versions.transfer,
      autoActivateStep: true,
      decorateSteps: true,
      currency: getLocalCurrency(),
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      language: getLanguage(),
      pageName,
      changeKeyForOthers: true,
      primaryAmountLabel: 'cells-product-summary-account-available-current',
      native,
      analytics: {
        infoSheet: false,
        accountSelection: false,
        amountVisit: false
      },
      withoutConcept: getLocalePrefix('concept-without-reason'),
      excludeProducts: ['ME', 'Cuenta Meta'],
      namesFlag,
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          open_modal_commerce_withdrawal: {
            bind: 'isModalCommerceOpen'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          global_account_updated_dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          navigation_product_detail_to_cardless_withdrawal: {
            bind: 'setProperties'
          },
          navigation_checklist_actions_to_cardless_withdrawal: {
            bind: 'setProperties'
          },
          global_account_navigate_to_cardless_withdrawal: {
            bind: 'setProperties'
          },
          global_storage_get_cardless_withdrawal_data_error: {
            bind: 'saveLocalStorageData'
          },
          global_storage_get_cardless_withdrawal_data_success: {
            bind: 'saveLocalStorageData'
          },
          [getChannelName('response_cardless_withdrawal_limit_success')]: {
            bind: 'setGetLimitWithdrawal'
          },
          [getChannelName('response_cardless_withdrawal_limit_error')]: {
            bind: 'setGetLimitWithdrawal'
          },
          [getChannelName('response_cardless_withdrawal_limit_api_dm_error')]: {
            bind: 'setGetLimitWithdrawal'
          },
          native_user_id: {
            bind: 'setPhoneNumber'
          },
          global_cardless_withdrawal_error_modal_cancel: {
            bind: 'exit'
          },
          [getGlobalName('init_page')]: {
            bind: 'init'
          },
          [getGlobalName('register_step_product_selector')]: {
            bind: 'registerStep',
            previousState: true
          },
          [getGlobalName('register_step_enter_amount')]: {
            bind: 'registerStep',
            previousState: true
          },
          [getGlobalName('register_step_input_message')]: {
            bind: 'registerStep',
            previousState: true
          },
          [getGlobalName('dont_change_and_continue')]: {
            bind: 'originSelected'
          },
          [getGlobalName('selected_changed')]: {
            bind: 'originSelected'
          },
          [getGlobalName('send_step_amount_value')]: {
            bind: 'setAmountSelected'
          },
          [getGlobalName('continue_concept_pressed')]: {
            bind: 'setConceptSelected'
          },
          [getGlobalName('account_change_pressed')]: {
            bind: 'changeAccountSelected'
          },
          [getGlobalName('amount_change_pressed')]: {
            bind: 'changeAmountSelected'
          },
          [getGlobalName('concept_change_pressed')]: {
            bind: 'changeConceptSelected'
          },
          [getGlobalName('change_step_state')]: {
            bind: 'manageStateSteps'
          },
          [getGlobalName('request_exit')]: {
            bind: 'manageBackButton'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          [getGlobalName('reset')]: {
            bind: 'reset'
          },
          [getGlobalName('response_user_data_success')]: {
            bind: 'setGetCustomerSuccess'
          },
          [getGlobalName('response_user_data_error')]: {
            bind: 'setGetCustomerError'
          },
          [getGlobalName('summary_closed')]: {
            bind: 'setPostMobileTransfer'
          },
          [getGlobalName('transfer_error')]: {
            bind: 'setPostMobileTransferError'
          },
          [getGlobalName('exit_request_accept')]: {
            bind: 'exit'
          },
          global_cardlesswithdrawal_to_call: {
            bind: 'callBBVALine'
          },
          [getGlobalName('high_risk_of_fraud')]: {
            bind: 'aricFraudError'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_set_app_settings: {
            bind: 'setAppSettingsParams'
          },
          global_storage_get_app_settings_success: {
            bind: 'setAppSettingsParams'
          },
          global_mtu_exception_back_navigation: {
            bind: 'mtuFlag'
          },
          blue_flag_redirection_cardless_whith_drawal: {
            bind: 'blueInitFlag'
          }
        },
        out: {
          glomo_cardless_withdrawal_close_modal: {
            bind: 'glomo-cardless-withdrawal-dm-close-modal-commerce'
          },
          glomo_cardless_withdrawal_set_amount: {
            bind: getLocalePrefix('dm-set-cardless-amount')
          },
          global_get_from_storage: {
            bind: getLocalePrefix('dm-request-local-storage-data')
          },
          global_set_in_storage: {
            bind: getLocalePrefix('dm-set-into-local-storage')
          },
          open_control_veil: {
            bind: getLocalePrefix('dm-open-control-veil')
          },
          close_control_veil: {
            bind: getLocalePrefix('dm-close-control-veil')
          },
          sign_modal_close_spinner: {
            bind: getLocalePrefix('dm-close-control-veil')
          },
          global_retry_error: {
            bind: getLocalePrefix('dm-retry-error')
          },
          global_mtu_exception_navigation: {
            bind: getLocalePrefix('dm-mtu-excepcion-test-flow'),
            link: {
              page: 'mtuException'
            }
          },
          [getGlobalName('request_user_data')]: {
            bind: getLocalePrefix('dm-request-user-data')
          },
          [getChannelName('request_cardless_withdrawal_limit')]: {
            bind: getLocalePrefix('dm-cardless-withdrawal-limits')
          },
          [getGlobalName('open_on_boarding')]: {
            bind: getLocalePrefix('dm-on-boarding-modal'),
            analytics: analytics.INFO_SHEET_PAGE_VIEW
          },
          [getGlobalName('set_concept_selected')]: {
            bind: getLocalePrefix('dm-set-concept-selected')
          },
          [getGlobalName('open_exit_modal')]: {
            bind: getLocalePrefix('dm-exit-modal')
          },
          [getGlobalName('exit')]: {
            bind: getLocalePrefix('dm-exit')
          },
          [getGlobalName('set_origin_products')]: {
            bind: getLocalePrefix('dm-set-origin-products')
          },
          [getGlobalName('set_fixed')]: {
            bind: getLocalePrefix('dm-set-fixed')
          },
          [getGlobalName('set_default_product_selected')]: {
            bind: getLocalePrefix('dm-set-default-product-selected')
          },
          [getGlobalName('set_on_product_selected')]: {
            bind: getLocalePrefix('dm-set-on-product-selected')
          },
          [getGlobalName('set_default_product_id')]: {
            bind: getLocalePrefix('dm-set-default-product-id')
          },
          [getGlobalName('set_collapsed')]: {
            bind: getLocalePrefix('dm-set-collapsed')
          },
          [getGlobalName('set_max_product')]: {
            bind: getLocalePrefix('dm-set-max-product')
          },
          [getGlobalName('enable_commerce_message_info')]: {
            bind: getLocalePrefix('dm-enable-commerce-message-info')
          },
          [getGlobalName('cells_scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getGlobalName('reset_scroll')]: {
            bind: getLocalePrefix('dm-reset-scroll')
          },
          [getGlobalName('enable_cardless_withdrawal')]: {
            bind: 'enable-cardless-withdrawal-changed'
          },
          [getGlobalName('set_operation_summary')]: {
            bind: getLocalePrefix('dm-set-operation-summary')
          },
          [getGlobalName('set_config_step_amount')]: {
            bind: getLocalePrefix('dm-set-config-step-amount')
          },
          [getGlobalName('set_config_step_concept')]: {
            bind: getLocalePrefix('dm-set-config-step-concept')
          },
          [getGlobalName('transfer_success')]: {
            bind: getLocalePrefix('dm-success-response')
          },
          [getGlobalName('transfer_error')]: {
            bind: 'transfer-error'
          },
          [getGlobalName('set_review_data')]: {
            bind: getLocalePrefix('dm-set-review-data')
          },
          [getGlobalName('navigate_to_review')]: {
            bind: getLocalePrefix('dm-navigate-to-review')
          },
          [getGlobalName('error_modal')]: {
            bind: getLocalePrefix('dm-error-modal')
          },
          [getGlobalName('analytics_account_selection')]: {
            bind: getLocalePrefix('dm-account-selection'),
            analytics: analytics.ACCOUNT_SELECTION_PAGE_VIEW
          },
          [getGlobalName('analytics_change_origin')]: {
            bind: getLocalePrefix('dm-change-origin'),
            analytics: analytics.CHANGE_ORIGIN_PAGE_VIEW
          },
          [getGlobalName('analytics_app_started')]: {
            bind: getLocalePrefix('dm-set-amount-selected-from-product'),
            analytics: analytics.APP_STARTED_AN_AMOUNT
          },
          [getGlobalName('analytics_init_select_amount')]: {
            bind: getLocalePrefix('dm-init-select-amount'),
            analytics: analytics.APP_STARTED_PAGE_VISIT_AN_AMOUNT
          },
          [getGlobalName('analytics_app_step_2')]: {
            bind: getLocalePrefix('dm-set-amount-selected-from-product'),
            analytics: analytics.APP_STEP_2
          },
          [getGlobalName('analytics_app_step_3')]: {
            bind: getLocalePrefix('dm-reset-scroll'),
            analytics: analytics.APP_STEP_3
          },
          [getGlobalName('high_risk_of_fraud')]: {
            bind: 'high-risk-of-fraud'
          },
          global_alert_manager_open_with_settings: {
            bind: getLocalePrefix('dm-open-generic-modal-channel')
          },
          [getGlobalName('send_data_settings')]: {
            bind: getLocalePrefix('dm-send-app-settings')
          },
          [getGlobalName('set_enable_commerce_message_info')]: {
            bind: getLocalePrefix('dm-enable-commerce-message-info')
          },
          global_action_launcher_dialer: {
            bind: getLocalePrefix('dm-call-bbva-line')
          },
          global_card_detail_data_success_channel: {
            bind: 'glomo-cardless-withdrawal-dm-send-data-to-activate-digital-card'
          },
          global_navigate_digital_card_generate: {
            bind: 'glomo-cardless-withdrawal-dm-account-activate-digital-card',
            link: {
              page: 'digitalCardGenerate'
            }
          },
          global_cardlesswithdrawal_modal_reject: {
            bind: 'glomo-cardless-withdrawal-dm-aric-fraud-error'
          },
          analytics_cardless_mx_app_completed_reject: {
            bind: 'glomo-cardless-withdrawal-dm-analytics-cardless-mx-app-completed-reject',
            analytics: analytics.appCompletedRejectAricFraud
          },
          sign_modal_close: {
            bind: 'glomo-cardless-withdrawal-dm-close-sign-modal'
          },
          cardless_withdrawal_alert_manager_open_with_settings_spherica: {
            bind: 'glomo-cardless-withdrawal-dm-modal-config-spherica'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: getLocalePrefix('dm-open-generic-modal-channel')
            },
            [getGlobalName('open_on_boarding_spherica')]: {
              bind: getLocalePrefix('dm-on-boarding-modal'),
              analytics: analytics.INFO_SHEET_PAGE_VIEW
            },
            [getGlobalName('open_exit_modal_spherica')]: {
              bind: getLocalePrefix('dm-exit-modal')
            },
            [getGlobalName('error_modal_spherica')]: {
              bind: getLocalePrefix('dm-error-modal')
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings',
            'global_cardless_withdrawal_open_on_boarding',
            'global_cardless_withdrawal_open_exit_modal',
            'global_cardless_withdrawal_error_modal'
          ]
        }
      }
    }
  };
  const cellsDmGlobalApisCustomers = {
    zone: 'app__transactional',
    tag: 'cells-dm-global-apis-customers',
    type: 'DM',
    properties: {
      host: CONFIG.globalServices.host,
      contactDetailsApiVersion: CONFIG.globalServices.versions.customers,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native,
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          [getGlobalName('request_user_data')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getGlobalName('response_user_data_success')]: {
            bind: 'set-customer-detail'
          },
          [getGlobalName('response_user_data_error')]: {
            bind: 'error-on-get-customer-detail'
          }
        }
      }
    }
  };

  const helpModalCardlessWithDrawal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-help-modal',
    container: true,
    attributes: {
      'justify-content': 'left'
    },
    properties: {
      id: 'confirmModalExperienceCardlessWithDrawal',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal-three-level',
      headerText: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-error-title',
      className: 'on-boarding-welcome-alert-manager',
      headerLeftIconAriaLabel: 'padlock',
      cellsConnections: {
        in: {
          global_cardlesswithdrawal_modal_reject: {
            bind: 'open'
          },
          global_cardlesswithdrawal_operations_modal_aric_close: {
            bind: 'close'
          }
        },
        out: {
          global_cardlesswithdrawal_operations_modal_aric_send_exit_to_header: {
            bind: 'help-modal-header-right-primary-click',
            backStep: true
          },
          global_cardlesswithdrawal_operations_modal_aric_close: {
            bind: 'header-main-close-icon-click'
          },
          global_cardlesswithdrawal_send_exit_to_header: {
            bind: 'help-modal-header-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const helpModalCardlessWithDrawalContentIlustration = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-clip-microillustration',
    tag: 'bbva-clip-microillustration',
    render: 'litElement',
    properties: {
      className: 'no-padding u-display--table u-margin--left u-margin-top--0 u-margin--1 u-text--left',
      microillustration: 'error',
      size: 'L'
    }
  };

  const helpModalCardlessWithDrawalSubHeader = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    render: 'litElement',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    properties: {
      text: 'alert-TRANSFER-ERROR-message',
      fontWeight: '500',
      size: 'XL',
      alignment: 'left',
      className: 'u-margin--1 u-margin-top--0'
    }
  };

  const helpModalCardlessWithDrawalText = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-top--0',
      text: 'alert-TRANSFER-ERROR-message-aric-fraud',
      alignment: 'left'
    }
  };

  const helpModalCardlessWithDrawalButton = {
    zone: 'confirmModalExperienceCardlessWithDrawal.slot-footer',
    type: 'UI',
    tag: 'bbva-button-default',
    familyPath: '@bbva-web-components/bbva-button-default',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--2 u-margin-bottom--2',
      text: 'alert-GENERIC-ERROR-call',
      cellsConnections: {
        out: {
          global_cardlesswithdrawal_to_call: {
            bind: 'click'
          }
        }
      }
    }
  };

  const bbvaDataProviderTransfers = {
    tag: 'bbva-dataprovider-transfers',
    familyPath: '@glomo-web-components/bbva-dataprovider-transfers',
    render: 'litElement',
    zone: 'app__transactional',
    type: 'DM',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      version: CONFIG.globalServices.versions.transferV1,
      params: {
        operationType: 'RETSITJ'
      },
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('request_cardless_withdrawal_limit')]: {
            bind: 'getCardlessWithdrawalLimit'
          }
        },
        out: {
          [getChannelName('response_cardless_withdrawal_limit_success')]: {
            bind: 'success-on-get-cardless-withdrawal-limit'
          },
          [getChannelName('response_cardless_withdrawal_limit_error')]: {
            bind: 'error-on-get-cardless-withdrawal-limit'
          },
          [getChannelName('response_cardless_withdrawal_limit_api_dm_error')]: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const cellsOperationSummary = {
    zone: 'app__confirm',
    tag: 'cells-operation-summary',
    tagSpherica: 'cells-operation-summary-spherica',
    type: 'UI',
    properties: {
      localCurrency: getLocalCurrency(),
      buttonLabel: getLocalePrefix('operation-summary'),
      summaryViewTitle: getLocalePrefix('operation-summary-title'),
      isNativeIos: nativeIos,
      noFeesMessage: 'cardless-withdrawal',
      showAddition: true,
      showLoadingSkeleton: true,
      cellsConnections: {
        in: {
          [getGlobalName('set_operation_summary')]: {
            bind: 'operation'
          }
        },
        out: {
          [getGlobalName('summary_closed')]: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      primaryButtonClass: 'positive',
      summaryViewClass: 'fixed-bottom-summary',
      summaryViewTitle: getLocalePrefix('operation-summary-title-spherica'),
      buttonLabel: getLocalePrefix('operation-summary-spherica')
    }
  };
  const bbvaWidgetCommerce = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-widget-cardless-with-drawal-commerce-qr',
    tagSpherica: 'bbva-widget-cardless-with-drawal-commerce-qr-spherica',
    familyPath: '@glomo-web-components/bbva-widget-cardless-with-drawal-commerce-qr',
    familyPathSpherica: '@glomo-web-components/bbva-widget-cardless-with-drawal-commerce-qr-spherica',
    render: 'litElement',
    properties: {
      showRender: true,
      iOSFixedHeader: nativeIos,
      host,
      storesVersion: storesCommerce,
      requiredToken,
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getGlobalName('link_change_pressed')]: {
            bind: 'showModalShopsGlobal'
          },
          glomo_cardless_withdrawal_close_modal: {
            bind: 'closeModalCommerce'
          }
        },
        out: {
          global_retry_error: {
            bind: 'retry-error'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          open_modal_commerce_withdrawal: {
            bind: 'show-modal-commerce-detail'
          }
        }
      }
    }
  };

  base.components.push(
    glomoOpxCardlessWithdrawal,
    cellsDmGlobalApisCustomers,
    bbvaDataProviderTransfers,
    cellsProductSelectorModal,
    glomoNavigationHandler,
    cellsHandleLifeCycle,
    cellsMoleculeHeader,
    cellsStepProductSelector,
    cellsStepEnterAmount,
    cellsStepInputMessage,
    cellsOperationSummary,
    bbvaWidgetCommerce,
    helpModalCardlessWithDrawal,
    helpModalCardlessWithDrawalContentIlustration,
    helpModalCardlessWithDrawalSubHeader,
    helpModalCardlessWithDrawalText,
    helpModalCardlessWithDrawalButton
  );
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('glomo-opx-cardless-withdrawal-mx-dm', pageName, [
    getLocalePrefix('dm-success-response'),
    'transfer-error'
  ]);
  addRetryErrors(base)([
    {
      id: 'CALL-BBVA-LINE',
      acceptRetry: { bind: 'setPostMobileTransfer', component: 'glomo-opx-cardless-withdrawal-mx-dm' },
      acceptCallForHelp: { bind: 'callBBVALine', component: 'glomo-opx-cardless-withdrawal-mx-dm' },
      cancelRetry: { bind: 'exit', component: 'glomo-opx-cardless-withdrawal-mx-dm' }
    },
    {
      id: 'INVALID-CARD',
      acceptRetry: { bind: 'setPostMobileTransfer', component: 'glomo-opx-cardless-withdrawal-mx-dm' },
      cancelRetry: { bind: 'exit', component: 'glomo-opx-cardless-withdrawal-mx-dm' }
    },
    {
      id: 'GENERIC',
      acceptRetry: { bind: 'setPostMobileTransfer', component: 'glomo-opx-cardless-withdrawal-mx-dm' },
      cancelRetry: { bind: 'exit', component: 'glomo-opx-cardless-withdrawal-mx-dm' }
    },
    {
      id: 'cardless-withdrawal-commerce-error-shops',
      acceptRetry: { bind: 'showModalShopsGlobal', component: 'bbva-widget-cardless-with-drawal-commerce-qr' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' },
      acceptCallForHelp: { bind: 'cancelRetry', component: 'bbva-widget-cardless-with-drawal-commerce-qr' }
    },
    {
      id: 'renew-card',
      acceptRetry: {  bind: 'goBack', component: 'glomo-navigation-handler'  }
    }
  ]);
  addCommonErrors(base.components)();
  _localStorage.addOutStorageChannels(base.components, [ 'cardless_withdrawal_data' ], CONFIG);

  if (sphericaPageUtils.isSpherica()) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
