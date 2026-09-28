/* eslint-disable complexity */
'use strict';

module.exports = CONFIG => {

  const { getLocalCurrency, getLanguage, SPINNER: spinner } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('billPayments');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'billPayments';
  const ANALYTICS = require('./analytics/_billPayments')(CONFIG);
  const ANALYTICS_FREQUENT_OPERATIONS =  require('./analytics/_dynamicFrequentOperations')();
  const MAXSTEPS = 3;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          BP_PREPARE_DELETE_SERVICE_CHANNEL: {
            bind: 'alert-DELETE-SERVICE-accept'
          },
          BP_RETRY_SEARCH_SERVICE: {
            bind: 'alert-BILL-PAYMENTS-MODAL-ERROR-accept'
          },
          BP_RETRY_MAKE_PAYMENTS_PASE_SERVICE: {
            bind: 'alert-error-make-payments-process-accept'
          },
          BP_RETRY_OTP_CALL_CHANNEL: {
            bind: 'alert-bp-otp-modal-error-accept'
          },
          BP_EXIT_OTP_CALL_CHANNEL: {
            bind: 'alert-bp-otp-modal-error-cancel'
          },
          BP_EXIT_MAKE_PAYMENTS_PASE_SERVICE: {
            bind: 'alert-error-make-payments-process-cancel'
          },
          BP_EXIT_MAKE_PAYMENTS_CALL_MODAL_SERVICE: {
            bind: 'alert-bp-call-line-modal-error-cancel'
          },
          global_bill_payments_accept_exit_process_product_detail: {
            bind: 'alert-bill-payments-exit-process-product-detail-accept'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mxbillPayments',
    currentPage: {
      url: '/bill-payments'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        className: `${isNativeIos ? 'ios-top-padding ' : ''} header-fixed bg-core-blue app-main-min-height last-step-min-height`,
        delayScrollTop: 700,
        topOnConfirm: true,
        animationType: 'verticalUp',
        extraHeaderClass: 'bbva-dark-medium-blue',
        iOSFixedHeader: isNativeIos,
        cellsConnections: {
          in: {
            [PAGE_NAME + '_page_init_page']: {
              bind: 'recalculateHeader'
            },
            [PAGE_NAME + 'init_page']: {
              bind: 'resetLayerScroll'
            },
            [PAGE_NAME + '_SHOW_CONFIRM_CHANNEL']: {
              bind: 'collapseOpened'
            },
            [PAGE_NAME + '_OPEN_CONFIRM_CHANNEL']: {
              bind: 'collapseOpened'
            },
            [PAGE_NAME + '_CLOSE_CONFIRM_CHANNEL']: {
              bind: 'close'
            },
            [PAGE_NAME + '_SCROLL_ZONE']: {
              bind: 'scrollItemIntoView'
            },
            [PAGE_NAME + '_RESET_LAYER_SCROLL_CHANNEL']: {
              bind: 'resetLayerScroll'
            },
            [PAGE_NAME + '_INPUT_FOCUS_IN']: {
              bind: 'recalculateStatusBarTop'
            },
            [PAGE_NAME + '_INPUT_FOCUS_OUT']: {
              bind: 'recalculateHeader'
            },
            [PAGE_NAME + '_INPUT_FOCUS_OUT_RESET_STATUS_BAR']: {
              bind: 'recalculateStatusBarTop'
            }
          },
          out: {
            [PAGE_NAME + 'SCROLL_COMPLETE']: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      },
      propertiesSpherica: {
        className: `${isNativeIos ? 'ios-top-padding ' : ''} header-fixed app-main-min-height last-step-min-height`,
        extraHeaderClass: ''
      }
    },
    components: [
      spinner(CONFIG),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core ' + isNativeIos ? 'header--core-ios' : '',
          rightIcon: 'coronita:close',
          leftIconSize: '22',
          titleName: 'glomo-bill-payments-header-title',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_to_continue']: {
                bind: 'navigate'
              },
              navigation_bill_payments_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_bill_payments_to_prev_page: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: '',
          rightIconText: 'cells-molecule-header-coronita-close-aria-label'
        }
      },
      {
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
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME + '_page_init_page']: {
                bind: 'init-page'
              },
              [PAGE_NAME + 'init_page']: {
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
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_to_continue']: {
                bind: 'navigate'
              },
              [PAGE_NAME + '_back_request']: {
                bind: 'goBack'
              },
              navigation_bill_payments_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_bill_payments_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-opx-bill-payments-dm-mx',
        familyPath: 'glomo-opx-bill-payments-dm',
        properties: {
          autoActivateStep: true,
          maxSteps: MAXSTEPS,
          cellsConnections: {
            in: {
              [PAGE_NAME + '_BOOT_DM_STEPS']: {
                bind: '_boot'
              },
              [PAGE_NAME + '_GO_NEXT_SERVICE_SELECTOR_STEP_CHANNEL']: {
                bind: 'goNextStep'
              },
              [PAGE_NAME + '_GO_NEXT_AMOUNT_STEP_CHANNEL']: {
                bind: 'goNextStep'
              },
              [PAGE_NAME + '_GO_NEXT_CONCEPT_STEP_CHANNEL']: {
                bind: 'goNextStep'
              },
              [PAGE_NAME + '_STEP_COLLAPSED_CHANNEL']: {
                bind: 'onAnyStepCollapsedChanged'
              },
              [PAGE_NAME + 'SCROLL_COMPLETE']: {
                bind: 'scrollComplete'
              },
              [PAGE_NAME + '_GO_LAST_ACTIVE_STEP_CHANNEL']: {
                bind: 'getLastActiveStep'
              },
              [PAGE_NAME + '_REGISTER_STEP_CHANNEL_SERVICE_SELECTOR']: {
                bind: 'registerStep',
                previousState: true
              },
              [PAGE_NAME + '_REGISTER_STEP_CHANNEL_ENTER_AMOUNT']: {
                bind: 'registerStep',
                previousState: true
              },
              [PAGE_NAME + '_REGISTER_STEP_CHANNEL_STEP_CONCEPT']: {
                bind: 'registerStep',
                previousState: true
              },
              [PAGE_NAME + '_reset_all_active_steps']: {
                bind: 'resetSteps'
              }
            },
            out: {
              [PAGE_NAME + '_SCROLL_ZONE']: {
                bind: 'cells-scroll-zone'
              },
              [PAGE_NAME + '_SHOW_CONFIRM_CHANNEL']: {
                bind: 'show-confirm'
              }
            }
          }
        }
      }
    ]
  };

  const billPaymentsProductSelected = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      localCurrency: getLocalCurrency(CONFIG),
      changeLabel: 'glomo-bill-payments-edit-label',
      maxSteps: MAXSTEPS,
      active: true,
      collapsed: true,
      stepTitle: 'glomo-bill-payments-step-product-selector-step-title',
      isOneProduct: true,
      stepId: 'cells-step-product-selector',
      customSelected: {
        filledAlignment: {
          right: false
        }
      },
      cellsConnections: {
        in: {
          [PAGE_NAME + 'init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_SEND_PRODUCTS_CHANNEL']: {
            bind: 'products'
          },
          [PAGE_NAME + '_SEND_PRODUCT_SELECTED_CHANNEL']: {
            bind: 'selected'
          },
          [PAGE_NAME + 'SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_SET_ALERT_ICON_NOT_ENOUGH_BALANCE_CHANNEL']: {
            bind: 'infoIcon'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'glomo-bill-payments-edit-label-spherica',
      stepTitle: 'glomo-bill-payments-step-product-selector-step-title-spherica'
    }
  };

  const billPaymentsServiceSelector = {
    zone: 'app__main',
    tag: 'cells-step-bill-payment-service-selector-mx',
    tagSpherica: 'cells-step-bill-payment-service-selector-spherica-mx',
    familyPath: 'cells-step-bill-payment-service-selector',
    familyPathSpherica: 'cells-step-bill-payment-service-selector-spherica',
    type: 'UI',
    properties: {
      className: 'one-column',
      currentStep: 1,
      stepId: 'cells-step-bill-payment-service-selector',
      noStoredMessageLabel: 'cells-step-bill-payment-service-selector-step-no-stored-service',
      noStoredDescription: 'cells-step-bill-payment-service-selector-description',
      changeLabel: 'glomo-bill-payments-edit-label',
      maxSteps: MAXSTEPS,
      stepTitle: 'glomo-bill-payments-service-tax-title',
      titleDescription: 'cells-step-bill-payment-service-selector-title-description',
      optionsDisabled: false,
      closeSwipe: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + 'init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_SET_SERVICE_SELECTOR_STATUS_STEP_CHANNEL']: {
            bind: 'active'
          },
          [PAGE_NAME + '_SEND_SERVICES_SELECTOR_CHANNEL']: {
            bind: 'actions'
          },
          [PAGE_NAME + '_SHOW_ALL_HEADER_STATUS_CHANNEL']: {
            bind: 'hideShowAllHeader'
          },
          [PAGE_NAME + '_SEND_FAVORITES_TO_STEP_LIST_CHANNEL']: {
            bind: 'storedServices'
          },
          [PAGE_NAME + '_ACTIVE_SERVICES_SELECTOR_STEP']: {
            bind: 'active'
          },
          [PAGE_NAME + '_SEND_SERVICE_SELECTED_CHANNEL']: {
            bind: 'service'
          },
          [PAGE_NAME + '_EMPTY_SERVICE_STEP_CHANNEL']: {
            bind: 'service'
          },
          [PAGE_NAME + '_COLLAPSE_SERVICE_SELECTOR_STEP_CHANNEL']: {
            bind: 'collapsed'
          },
          [PAGE_NAME + '_RESET_SELECTOR_SERVICE_STEP_CHANNEL']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SET_DECORATED_PREVIUS_STEP_FALSE_OUT']: {
            bind: 'decorated'
          },
          [PAGE_NAME + '_restart_steps']: {
            bind: 'active'
          },
          [PAGE_NAME + '_restart_product_selector']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_FREQUENT_OPERATIONS_SEND_OPERATION_SERVICES']: {
            bind: 'disableChange'
          }
        },
        out: {
          [PAGE_NAME + '_REGISTER_STEP_CHANNEL_SERVICE_SELECTOR']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_PREPARE_SERVICE_LIST_CHANNEL']: {
            bind: 'service-list-event'
          },
          [PAGE_NAME + '_KEEP_SERVICE_SELECTED_CHANNEL']: {
            bind: 'keep-service-selected'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_CHANNEL']: {
            bind: 'set-selected-service-event'
          },
          [PAGE_NAME + '_PREPARE_SHOW_ALL_SERVICES_CHANNEL']: {
            bind: 'show-all-services-event'
          },
          [PAGE_NAME + 'SELECT_CHANGE_SERVICE_SELECTED']: {
            bind: 'change-service-selected'
          },
          [PAGE_NAME + 'CHANGE_SERVICE_SELECTED']: {
            bind: 'on-change-pressed'
          },
          [PAGE_NAME + '_PREPARE_DELETE_MODAL']: {
            bind: 'on-delete-item'
          },
          [PAGE_NAME + '_STEP_COLLAPSED_CHANNEL']: {
            bind: 'keep-service-selected'
          },
          [PAGE_NAME + '_GO_NEXT_STEP_DM_CHANNEL']: {
            bind: 'go-next-step'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'glomo-bill-payments-edit-label-spherica',
      stepTitle: 'glomo-bill-payments-service-tax-title-spherica'
    }
  };

  const modalRecipientServiceSelector = {
    zone: 'app__overlay',
    tag: 'cells-modal-new-recipient-service-selector',
    tagSpherica: 'cells-modal-new-recipient-service-selector-spherica',
    type: 'UI',
    properties: {
      className: `bill-pay-modal ${ isNativeIos ? 'ios-top-padding' : ''}`,
      chooseOtherServiceLabel: 'glomo-service-detail-secondary-button-label',
      listItemsClassName: 'services-list',
      selectedItemClass: 'blue-title-avatar secondary-down',
      inputSearcherClass: 'items-separator-input',
      noResumeView: true,
      noRecentSearch: true,
      onKeyUpSearch: true,
      showTitleResults: true,
      onKeyUpSearchDelay: 20,
      titleHeaderPage: 'glomo-bill-payments-operation-name',
      additionalFieldsIcon: 'coronita:camera',
      additionalFieldsIconVisibility: 'always',
      searchPlaceholder: 'cells-modal-new-recipient-service-selector-search-label',
      infoMessageIcon: 'coronita:info',
      searcherAllowedValue: '^[A-Za-z0-9]*$',
      searcherErrorMessage: 'glomo-bill-payments-alias-field-error',
      searcherAutoValidate: true,
      noResultsImage: 'images/emptyState/Empty-State-Day-Micro.svg',
      noResultsMessageTitle: 'glomo-bill-payments-search-title-no-results',
      noResultsMessage: 'glomo-bill-payments-search-no-results',
      enableItemSeparator: true,
      iOSFixedHeader: isNativeIos,
      agreementValidate: true,
      avoidResetItems: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_PREPARE_SERVICE_LIST_CHANNEL']: {
            bind: 'openVeil'
          },
          [PAGE_NAME + '_PREPARE_FAVORITES_LIST_CHANNEL']: {
            bind: 'openVeil'
          },
          [PAGE_NAME + '_REQUEST_GET_ADDITIONAL_FIELDS_CHANNEL']: {
            bind: 'openVeil'
          },
          [PAGE_NAME + '_OPEN_SERVICE_MODAL_LIST']: {
            bind: 'opened'
          },
          [PAGE_NAME + '_REQUEST_GET_SERVICE_CHANNEL']: {
            bind: 'openVeil'
          },
          [PAGE_NAME + '_REQUEST_GET_BILLS_CHANNEL']: {
            bind: 'openVeil'
          },
          [PAGE_NAME + '_SET_OPTIONS_DISABLED_CHANNEL']: {
            bind: 'optionsDisabled'
          },
          [PAGE_NAME + '_SET_REFERENCE_INSTRUCTIONS_MXN']: {
            bind: 'payInstructions'
          },
          [PAGE_NAME + '_SET_ADDITIONAL_SERVICE_FIELDS_CHANNEL']: {
            bind: 'additionalFields'
          },
          [PAGE_NAME + '_SET_ENABLE_SEARCHING_CHANNEL']: {
            bind: 'disableSearching'
          },
          [PAGE_NAME + '_SEND_SERVICES_LIST_TO_MODAL_CHANNEL']: {
            bind: 'setServices'
          },
          [PAGE_NAME + '_SEND_ALL_STORED_SERVICES_CHANNEL']: {
            bind: 'setServices'
          },
          [PAGE_NAME + '_HIDE_SERVICE_LIST_SECTION']: {
            bind: 'hideSearch'
          },
          [PAGE_NAME + '_PREPARE_REFERENCE_WITH_SELECTED_SERVICE']: {
            bind: 'selected'
          },
          [PAGE_NAME + '_SET_LIST_SERVICES']: {
            bind: 'closeVeil'
          },
          [PAGE_NAME + '_SET_FAVORITES_LIST_SERVICES']: {
            bind: 'closeVeil'
          },
          [PAGE_NAME + '_SET_REFERENCE_CONFIG_CHANNEL']: {
            bind: 'closeVeil'
          },
          [PAGE_NAME + '_SET_SERVICE_INDICATORS_EVENT']: {
            bind: 'closeVeil'
          },
          [PAGE_NAME + '_GET_BILLS_EVENT']: {
            bind: 'closeVeil'
          },
          [PAGE_NAME + '_SET_BILL_PAYMENT_CHANNEL']: {
            bind: 'closeVeil'
          },
          [PAGE_NAME + '_SET_REFERENCE_CONFIG_CHANNEL']: {
            bind: 'additionalFields'
          },
          [PAGE_NAME + '_SEND_SERVICE_SELECTED_CHANNEL']: {
            bind: 'close'
          },
          [PAGE_NAME + '_DISABLED_SPINNER_CHANNEL']: {
            bind: 'searcherSpinnerDisabled'
          },
          [PAGE_NAME + '_VALID_LENGTH_REFERENCE_CHANNEL']: {
            bind: 'formIsInvalid'
          },
          [PAGE_NAME + 'SET-INFO-MESSAGE-REFERENCE']: {
            bind: 'infoMessage'
          },
          [PAGE_NAME + '_SET_REFERENCE_ALIAS_CLASS']: {
            bind: 'expandedAlias'
          },
          [PAGE_NAME + '_RESULTS_LIST_TITLE_CHANNEL']: {
            bind: 'listTitleResults'
          },
          [PAGE_NAME + '_SHOW_RESULTS_LIST_TITLE_CHANNEL']: {
            bind: 'showResultsTitle'
          },
          [PAGE_NAME + '_RESET_MODAL_CHANNEL']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_CAPITALIZE_REFERENCE_INPUT_CHARACTERS_EVENT']: {
            bind: 'additionalFields'
          },
          [PAGE_NAME + '_SEND_TITLE_HEADER-MODAL']: {
            bind: 'titleHeaderPage'
          },
          [PAGE_NAME + '_open_service_selector_modal']: {
            bind: 'opened'
          },
          [PAGE_NAME + '_show_input_search']: {
            bind: 'hideSearch'
          },
          [PAGE_NAME + '_fill_modal_selected_service']: {
            bind: 'selected'
          },
          [PAGE_NAME + '_fill_additional_fiels_modal_service']: {
            bind: 'additionalFields'
          }
        },
        out: {
          [PAGE_NAME + '_PREPARE_REFERENCE_SERVICE_CHANNEL']: {
            bind: 'additional-fields-values-retrieved'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_INFO']: {
            bind: 'selected-service'
          },
          [PAGE_NAME + '_PREPARE_HELP_SERVICE_MODAL_CHANNEL']: {
            bind: 'help-service-icon-clicked-event',
            analytics: ANALYTICS.APP_PAYMENT_REFERENCE_HELP
          },
          [PAGE_NAME + '_PRODUCT_SEARCHED_CHANNEL']: {
            bind: 'retrieve-services'
          },
          [PAGE_NAME + '_INPUT_SERVICES_KEYUP_CHANNEL']: {
            bind: 'cells-molecule-input-keyup'
          },
          [PAGE_NAME + '_REFERENCE_INPUT_VALUE_CHANGED']: {
            bind: 'additional-field-input-value-changed'
          },
          [PAGE_NAME + '_CHOOSE_ANOTHER_SERVICE_EVENT']: {
            bind: 'selected-service'
          },
          [PAGE_NAME + '_PREPARE_DELETE_MODAL']: {
            bind: 'on-delete-item'
          },
          open_control_veil: {
            bind: 'bill-payments-open-control-veil'
          },
          close_control_veil: {
            bind: 'bill-payments-close-control-veil'
          },
          [PAGE_NAME + '_ADD_DETAIL_BARCODE_TYPE']: {
            bind: 'icon-input-tap-event'
          },
          billPayments_PREPARE_SERVICE_LIST_CHANNEL: {
            bind: 'select-another-service'
          }
        }
      }
    },
    propertiesSpherica: {
      noResultsImage: 'images/spherica/empty_state_day.svg'
    }
  };

  const billPaymentsStepAmount = {
    zone: 'app__main',
    tag: 'cells-step-enter-amount-bill-payments',
    tagSpherica: 'cells-step-enter-amount-bill-payments-spherica',
    type: 'UI',
    properties: {
      currencyClass: 'amount-large',
      stepId: 'cells-step-enter-amount-bill-payments',
      changeLimitMessage: 'cells-step-enter-amount-bill-payments-change-limits',
      changeLabel: 'glomo-bill-payments-edit-label',
      currentStep: 2,
      currency: getLocalCurrency(CONFIG),
      decorated: true,
      hideAmountLabel: true,
      hideBillsID: true,
      hideInfoMessage: true,
      hideLinkToBackOnError: true,
      inputCurrency: getLocalCurrency(CONFIG),
      language: getLanguage(CONFIG),
      localCurrency: getLocalCurrency(CONFIG),
      maxSteps: MAXSTEPS,
      billTypeClass: 'amount-column-radio',
      enableDividerOnRadioGroup: true,
      showCurrenciesInfo: false,
      stepTitle: 'glomo-bill-payments-amount-step-title',
      showDailyLimits: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + 'init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + 'SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_SET_AMOUNT_DEFAULT_VALUE']: {
            bind: 'defaultValue'
          },
          [PAGE_NAME + '_SET_AMOUNT_DM_ELEMENT_LIST']: {
            bind: 'dmElementsList'
          },
          [PAGE_NAME + '_SET_AMOUNT_LIMIT_VALUES']: {
            bind: 'amountsLimit'
          },
          [PAGE_NAME + '_ACTIVE_AMOUNT_STEP']: {
            bind: 'active'
          },
          [PAGE_NAME + '_RESET_AMOUNT_STEP_CHANNEL']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SEND_FIELDTYPE_CODEBAR_AMOUNT']: {
            bind: 'defaultValue'
          },
          [PAGE_NAME + '_SET_DISABLED_DECIMAL_AMOUNT_CHANNEL']: {
            bind: 'disableDecimal'
          }
        },
        out: {
          [PAGE_NAME + '_SEND_STEP_AMOUNT_BILL_PAYMENTS_VALUES']: {
            bind: 'send-step-amount-bill-payments-values'
          },
          [PAGE_NAME + '_REGISTER_STEP_CHANNEL_ENTER_AMOUNT']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_STEP_COLLAPSED_CHANNEL']: {
            bind: 'send-step-amount-bill-payments-values'
          },
          [PAGE_NAME + '_FOCUS_IN_STEP_2']: {
            bind: 'cells-step-focus-in'
          },
          [PAGE_NAME + '_AMOUNT_STEP_CHANGE_CHANNEL']: {
            bind: 'change-step-state'
          },
          [PAGE_NAME + '_SET_DECORATED_PREVIUS_STEP_FALSE']: {
            bind: 'send-step-amount-bill-payments-values'
          },
          [PAGE_NAME + '_INPUT_FOCUS_IN']: {
            bind: 'amount-input-focus'
          },
          [PAGE_NAME + '_INPUT_FOCUS_OUT_RESET_STATUS_BAR']: {
            bind: 'dispatched-blur'
          },
          [PAGE_NAME + '_INPUT_FOCUS_OUT']: {
            bind: 'dispatched-blur'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'glomo-bill-payments-edit-label-spherica',
      changeLimitMessage: 'cells-step-enter-amount-bill-payments-change-limits',
      stepTitle: 'glomo-bill-payments-amount-step-title-spherica'
    }
  };

  const billPaymentsStepConcept = {
    zone: 'app__main',
    tag: 'cells-step-concept',
    tagSpherica: 'cells-step-concept-spherica',
    type: 'UI',
    properties: {
      currentStep: 3,
      decorated: true,
      stepId: 'cells-step-concept',
      maxSteps: MAXSTEPS,
      title: 'glomo-bill-payments-header-concept',
      conceptLabel: 'glomo-bill-payments-header-concept',
      showConceptLabel: true,
      active: false,
      minChars: 5,
      infoMessageIcon: 'coronita:info',
      conceptClass: 'concept-in-line',
      changeLabel: 'glomo-bill-payments-edit-label',
      lastStep: false,
      continueButtonClass: 'with-info-message',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'init_page']: {
            bind: 'initialize'
          },
          [PAGE_NAME + 'SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_SEND_MAX_LENGTH_CONCEPT']: {
            bind: 'maxLength'
          },
          [PAGE_NAME + '_SEND_MIN_LENGTH_CONCEPT']: {
            bind: 'minChars'
          },
          [PAGE_NAME + '_SEND_FIELDTYPE_CONCEPT']: {
            bind: 'allowedChars'
          },
          [PAGE_NAME + '_ACTIVE_CONCEPT_STEP']: {
            bind: 'active'
          },
          [PAGE_NAME + '_SEND_INFO_MESSAGE_CONCEPT']: {
            bind: 'infoMessage'
          },
          [PAGE_NAME + '_SEND_TEXT_CONCEPT']: {
            bind: 'inputConcept'
          },
          [PAGE_NAME + '_SEND_READONLY_CONCEPT']: {
            bind: 'readonlyInput'
          },
          [PAGE_NAME + '_ENABLE-CONTINUE-BUTTON_CHANNEL']: {
            bind: 'readonlyInput'
          },
          [PAGE_NAME + '_SEND_ICONCODE_CONCEPT']: {
            bind: 'iconCode'
          },
          [PAGE_NAME + '_SEND_CONTINUE_CONCEPT']: {
            bind: '_onContinue'
          },
          [PAGE_NAME + '_SEND_ISMANDATORY_CONCEPT']: {
            bind: 'isRequired'
          },
          [PAGE_NAME + '_COLLAPSE_CONCEPT_STEP_CHANNEL']: {
            bind: 'collapsed'
          },
          [PAGE_NAME + '_RESET_CONCEPT_STEP_CHANNEL']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME + '_GO_NEXT_STEP_CHANNEL']: {
            bind: 'continue-pressed'
          },
          [PAGE_NAME + '_COLLAPSE_ALL_STEPS']: {
            bind: 'continue-pressed'
          },
          [PAGE_NAME + '_SEND_CONCEPT_INFO']: {
            bind: 'continue-pressed'
          },
          [PAGE_NAME + '_CHANGE_CONCEPT_CHANNEL']: {
            bind: 'change-step-state'
          },
          [PAGE_NAME + '_REGISTER_STEP_CHANNEL_STEP_CONCEPT']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_RESET_LAYER_SCROLL_CHANNEL']: {
            bind: 'continue-pressed'
          },
          [PAGE_NAME + '_STEP_COLLAPSED_CHANNEL']: {
            bind: 'step-collapsed-changed'
          },
          [PAGE_NAME + '_GO_NEXT_STEP_DM_CHANNEL']: {
            bind: 'go-next-step'
          },
          [PAGE_NAME + '_FOCUS_IN_STEP_3']: {
            bind: 'cells-step-focus-in'
          },
          [PAGE_NAME + '_INPUT_FOCUS_IN']: {
            bind: 'cells-molecule-input-focus'
          },
          [PAGE_NAME + '_INPUT_FOCUS_OUT']: {
            bind: 'cells-molecule-input-blur'
          },
          [PAGE_NAME + '_INPUT_FOCUS_OUT_RESET_STATUS_BAR']: {
            bind: 'cells-molecule-input-blur'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary-alt',
      changeLabel: 'glomo-bill-payments-edit-label-spherica'
    }
  };

  const summaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      showAddition: true,
      buttonLabel: 'glomo-bill-payments-summary-continue-label',
      summaryViewTitle: 'glomo-bill-payments-summary-view-title',
      localCurrency: getLocalCurrency(CONFIG),
      hideCustomFeesMessage: true,
      forceFeesMessage: 'glomo-bill-payments-summary-fees-message',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SEND_AMOUNT_INFO']: {
            bind: 'operation'
          },
          [PAGE_NAME + '_RESET_SUMMARY_VIEW_CHANNEL']: {
            bind: 'refreshTransferSimulation'
          },
          [PAGE_NAME + '_ENABLE-CONTINUE-BUTTON_CHANNEL']: {
            bind: 'disabledPrimaryButton'
          }
        },
        out: {
          [PAGE_NAME + '_SUMMARY_CLOSED']: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };

  const cellsModalAlert = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-alert',
    tagSpherica: 'cells-modal-alert-spherica',
    properties: {
      content: 'glomo-bill-payments-deleted-service-success-message',
      type: 'success',
      toast: true,
      duration: 6000,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SUCCESS_SERVICE_DELETED']: {
            bind: 'open'
          }
        }
      }
    }
  };

  const helpModalBillPayments = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-help-modal',
    container: true,
    attributes: {
      'justify-content': 'left'
    },
    properties: {
      id: 'confirmModalExperienceBillPayments',
      fullHeight: true,
      fixedFooter: true,
      headerType: 'modal-three-level',
      headerText: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-error-title',
      className: 'on-boarding-welcome-alert-manager',
      headerLeftIconAriaLabel: 'padlock',
      cellsConnections: {
        in: {
          global_billpayment_modal_reject: {
            bind: 'open'
          },
          suspected_transaction_reset_operatives: {
            bind: 'close'
          }
        },
        out: {
          global_billpayment_send_exit_to_header: {
            bind: 'help-modal-header-right-primary-click',
            backStep: true
          }
        }
      }
    }
  };

  const helpModalBillPaymentsContentIlustration = {
    zone: 'confirmModalExperienceBillPayments.slot-content',
    type: 'UI',
    familyPath: '@bbva-web-components/bbva-clip-microillustration',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    tag: 'bbva-clip-microillustration',
    tagSpherica: 'bbva-clip-microillustration-spherica',
    render: 'litElement',
    properties: {
      className: 'no-padding u-display--table u-margin--left u-margin-top--0 u-margin--1 u-text--left',
      microillustration: 'error',
      size: 'L'
    }
  };

  const helpModalBillPaymentsSubHeader = {
    zone: 'confirmModalExperienceBillPayments.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
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

  const helpModalBillPaymentsText = {
    zone: 'confirmModalExperienceBillPayments.slot-content',
    type: 'UI',
    tag: 'bbva-type-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPath: '@bbva-spherica-components/bbva-type-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-margin--1 u-margin-top--0',
      text: 'alert-TRANSFER-ERROR-message-aric-fraud',
      alignment: 'left'
    }
  };

  const helpModalBillPaymentsButton = {
    zone: 'confirmModalExperienceBillPayments.slot-footer',
    type: 'UI',
    tag: 'bbva-button-default',
    tagSpherica: 'bbva-button-default-spherica',
    familyPath: '@bbva-web-components/bbva-button-default',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      className: 'u-display--table u-margin--center u-margin-top--2 u-margin-bottom--2',
      text: 'alert-GENERIC-ERROR-call',
      cellsConnections: {
        out: {
          global_bill_payments_to_call: {
            bind: 'click'
          }
        }
      }
    }
  };

  const billPaymentsManager = {
    zone: 'app__main',
    tag: 'bbva-manager-bill-payments',
    familyPath: '@glomo-web-components/bbva-manager-bill-payments',
    type: 'DM',
    render: 'litElement',
    properties: {
      isGlobalRepository: true,
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      agreementValidate: true,
      enablePrepareFeedback: true,
      timeDelayQRPlugin: 1000,
      timeDelayCapture: 3000,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          },
          global_mtu_exception_back_navigation: {
            bind: 'mtuFlag'
          },
          dashboard_accounts: {
            bind: 'getGlobalAccounts'
          },
          dashboard_customer_email: {
            bind: 'customerContact'
          },
          [PAGE_NAME + '_page_init_page']: {
            bind: 'openVeil'
          },
          navigation_product_detail_to_bill_payments: {
            bind: 'prepareAccountsInfo'
          },
          global_account_navigate_to_bill_payments: {
            bind: 'prepareAccountsInfo'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          [PAGE_NAME + '_SET_LIST_SERVICES']: {
            bind: 'getServiceList'
          },
          [PAGE_NAME + '_SET_LIST_SCHEDULED_SERVICE_PAYMENT']: {
            bind: 'setServicesList'
          },
          [PAGE_NAME + '_SET_BILL_SEARCH_EVENT']: {
            bind: 'setBillSearchResponse'
          },
          [PAGE_NAME + '_SET_TAXES_SEARCH_EVENT']: {
            bind: 'setTaxesSearchResponse'
          },
          [PAGE_NAME + '_SET_BILL_SEARCH_ERROR_EVENT']: {
            bind: 'setBillSearchErrorResponse'
          },
          [PAGE_NAME + '_SET_TAXES_SEARCH_ERROR_EVENT']: {
            bind: 'prepareModalError'
          },
          [PAGE_NAME + '_SET_TAXES_SEARCH_ERROR_SERVICE_EVENT']: {
            bind: 'prepareModalError'
          },
          [PAGE_NAME + '_SET_FAVORITES_LIST_SERVICES']: {
            bind: 'getFavoritesList'
          },
          [PAGE_NAME + '_PREPARE_HELP_SERVICE_MODAL_CHANNEL']: {
            bind: 'prepareHelpServiceModal'
          },
          [PAGE_NAME + '_GET_CONCEPT_DATA']: {
            bind: 'getListAdditionalField'
          },
          [PAGE_NAME + 'CHANGE_SERVICE_SELECTED']: {
            bind: 'changeServiceSelected'
          },
          [PAGE_NAME + '_AMOUNT_STEP_CHANGE_CHANNEL']: {
            bind: 'changeAmountSelected'
          },
          [PAGE_NAME + 'SELECT_CHANGE_SERVICE_SELECTED']: {
            bind: 'selectChangeService'
          },
          [PAGE_NAME + '_CHANGE_CONCEPT_CHANNEL']: {
            bind: 'changeConceptSelected'
          },
          [PAGE_NAME + '_PREPARE_SHOW_ALL_SERVICES_CHANNEL']: {
            bind: 'sendAllStoredServices'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_CHANNEL']: {
            bind: 'prepareReferenceService'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_INFO']: {
            bind: 'setSelectedService'
          },
          [PAGE_NAME + '_PREPARE_REFERENCE_SERVICE_CHANNEL']: {
            bind: 'closeServicesListStep'
          },
          [PAGE_NAME + '_SEND_STEP_AMOUNT_BILL_PAYMENTS_VALUES']: {
            bind: 'sendAmountInfo'
          },
          [PAGE_NAME + '_COLLAPSE_ALL_STEPS']: {
            bind: 'showConfirmEvent'
          },
          [PAGE_NAME + '_SUMMARY_CLOSED']: {
            bind: 'makePaymentRequest'
          },
          BP_RETRY_MAKE_PAYMENTS_PASE_SERVICE: {
            bind: 'makePaymentRequest'
          },
          BP_RETRY_OTP_CALL_CHANNEL: {
            bind: 'makePaymentRequest'
          },
          [PAGE_NAME + '_PRODUCT_SEARCHED_CHANNEL']: {
            bind: 'itemSearched'
          },
          [PAGE_NAME + '_SET_SERVICE_INDICATORS_EVENT']: {
            bind: 'getServiceIndicator'
          },
          [PAGE_NAME + '_SET_ADDITIONAL_PAYMENT_FIELDS_EVENT']: {
            bind: 'setAdditionalPaymentFields'
          },
          [PAGE_NAME + '_INPUT_SERVICES_KEYUP_CHANNEL']: {
            bind: 'fillList'
          },
          [PAGE_NAME + '_SET_STORES_SERVICES_EVENT']: {
            bind: 'setStoredServices'
          },
          [PAGE_NAME + '_CHOOSE_ANOTHER_SERVICE_EVENT']: {
            bind: 'resetBillPayment'
          },
          [PAGE_NAME + '_PREPARE_DELETE_MODAL']: {
            bind: 'prepareDeleteModal'
          },
          BP_PREPARE_DELETE_SERVICE_CHANNEL: {
            bind: 'prepareDeleteService'
          },
          [PAGE_NAME + '_SET_DELETED_SERVICE_EVENT']: {
            bind: 'deletedServiceResponse'
          },
          [PAGE_NAME + '_SUCCESS_RESPONSE_PAYMENT_PASE_CHANNEL']: {
            bind: 'setBillPaymentesSuccessConfig'
          },
          [PAGE_NAME + '_ERROR_RESPONSE_PAYMENT_PASE_CHANNEL']: {
            bind: 'getMakePaymentsError'
          },
          [PAGE_NAME + '_ERROR_ON_GET_SERVICE_INDICATORS_CHANNEL']: {
            bind: 'prepareModalError'
          },
          [PAGE_NAME + '_SEND_CONCEPT_INFO']: {
            bind: 'setConceptInfo'
          },
          [PAGE_NAME + '_ERROR_ON_GET_SERVICES_LIST_CHANNEL']: {
            bind: 'setErrorServicesList'
          },
          [PAGE_NAME + '_ERROR_RESPONSE_DELETED_SERVICE_EVENT']: {
            bind: 'getDeleteServiceError'
          },
          BP_RETRY_SEARCH_SERVICE: {
            bind: 'requestServiceIndicator'
          },
          navigation_bill_payments_to_prev_page: {
            bind: 'prepareExitModal'
          },
          global_bill_payments_accept_exit_process_product_detail: {
            bind: 'exitProcess'
          },
          BP_EXIT_MAKE_PAYMENTS_PASE_SERVICE: {
            bind: 'exitProcess'
          },
          BP_EXIT_MAKE_PAYMENTS_CALL_MODAL_SERVICE: {
            bind: 'exitProcess'
          },
          BP_EXIT_OTP_CALL_CHANNEL: {
            bind: 'exitProcess'
          },
          [PAGE_NAME + '_FOCUS_IN_STEP_2']: {
            bind: 'analyticsStepAmount'
          },
          [PAGE_NAME + '_FOCUS_IN_STEP_3']: {
            bind: 'analyticsStepConcept'
          },
          [PAGE_NAME + '_RESPONSE_PAYMENT_OTP']: {
            bind: 'analyticsStepOTP'
          },
          BPS_PREPARE_TO_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_ERROR_ON_GET_STORED_SERVICES']: {
            bind: 'noFoundStoredServicesError'
          },
          [PAGE_NAME + '_SEND_CODE_BAR_SUCCESS_DATA_CHANNEL']: {
            bind: 'setQRCodeBar'
          },
          [PAGE_NAME + '_REFERENCE_INPUT_VALUE_CHANGED']: {
            bind: 'processBillNumber'
          },
          [PAGE_NAME + '_KEEP_SERVICE_SELECTED_CHANNEL']: {
            bind: 'keepServiceSelected'
          },
          [PAGE_NAME + '_handle_qr_code_data_from_native']: {
            bind: 'setQRCodeBar'
          },
          [PAGE_NAME + '_ADD_DETAIL_BARCODE_TYPE']: {
            bind: 'fireNativeQrReader'
          },
          [PAGE_NAME + '_SET_DECORATED_PREVIUS_STEP_FALSE']: {
            bind: 'setDecoratedFalse'
          },
          [PAGE_NAME + 'init_page']: {
            bind: 'reset'
          },
          sign_modal_cancelled: {
            bind: 'changeAmountSelectedFromSign'
          },
          global_bill_payments_repeat_search_bill: {
            bind: 'changeAmountSelectedFromSign'
          },
          global_bill_payments_accept_exit_process_dashboard_failed_tax: {
            bind: 'exitProcess'
          },
          [PAGE_NAME + '_ERROR_ONGET_TAXES_NOT_OTP']: {
            bind: 'validateTaxesResponse'
          },
          [PAGE_NAME + '_GET_TAXES_OTP']: {
            bind: 'validateTaxesResponse'
          },
          global_bill_payments_repeat_codebar_lecture: {
            bind: 'fireNativeQrReader'
          },
          [PAGE_NAME + '_HIGH_RISK_OF_FRAUD']: {
            bind: 'getMakePaymentsError'
          },
          global_bill_payments_to_call: {
            bind: 'callBBVALine'
          },
          dashboard_frequent_operations_send_operation_services: {
            bind: 'processAccountSelection'
          },
          [PAGE_NAME + '_SEND_PRODUCTS_ARRAY_CHANNEL']: {
            bind: 'availableAccounts'
          },
          suspected_transaction_reset_operatives: {
            bind: 'exitProcess'
          }
        },
        out: {
          [PAGE_NAME + '_SET_DECORATED_PREVIUS_STEP_FALSE_OUT']: {
            bind: 'set-previus-step-decorated-false'
          },
          [PAGE_NAME + '_open_nativeconnector_bbva_qr']: {
            bind: 'fire-native-code-bar-event'
          },
          [PAGE_NAME + '_BOOT_DM_STEPS']: {
            bind: 'boot-steps-dm-event'
          },
          [PAGE_NAME + '_GO_NEXT_SERVICE_SELECTOR_STEP_CHANNEL']: {
            bind: 'go-next-service-selector-step-event'
          },
          [PAGE_NAME + '_GO_NEXT_AMOUNT_STEP_CHANNEL']: {
            bind: 'go-next-amount-step-event'
          },
          [PAGE_NAME + '_GO_NEXT_CONCEPT_STEP_CHANNEL']: {
            bind: 'go-next-concept-step-event'
          },
          [PAGE_NAME + 'SCROLL_ZONE_MODIFY']: {
            bind: 'cells-scroll-zone-modify'
          },
          [PAGE_NAME + '_SEND_PRODUCT_SELECTED_CHANNEL']: {
            bind: 'send-product-selected-event'
          },
          [PAGE_NAME + '_SEND_PRODUCTS_CHANNEL']: {
            bind: 'send-products-event'
          },
          [PAGE_NAME + '_SET_SERVICE_SELECTOR_STATUS_STEP_CHANNEL']: {
            bind: 'set-service-selected-status-step-event'
          },
          [PAGE_NAME + '_SEND_SERVICES_SELECTOR_CHANNEL']: {
            bind: 'send-services-selector-event'
          },
          [PAGE_NAME + '_ACTIVE_SERVICES_SELECTOR_STEP']: {
            bind: 'active-services-selector-step-event'
          },
          [PAGE_NAME + '_OPEN_SERVICE_MODAL_LIST']: {
            bind: 'open-modal-services-list-event'
          },
          [PAGE_NAME + '_HIDE_SERVICE_LIST_SECTION']: {
            bind: 'hide-service-list-from-modal-event'
          },
          [PAGE_NAME + '_SET_REFERENCE_INSTRUCTIONS_MXN']: {
            bind: 'set-reference-instructions-mxn-event'
          },
          [PAGE_NAME + '_PREPARE_REFERENCE_WITH_SELECTED_SERVICE']: {
            bind: 'send-selected-service-to-reference-event'
          },
          [PAGE_NAME + '_SEND_ALL_STORED_SERVICES_CHANNEL']: {
            bind: 'send-all-stored-services-to-modal-event'
          },
          [PAGE_NAME + '_SEND_SERVICES_LIST_TO_MODAL_CHANNEL']: {
            bind: 'send-services-list-array-event'
          },
          [PAGE_NAME + '_SEND_WITHOUT_RESULTS_ANALYTICS_CHANNEL']: {
            bind: 'send-analytics-without-results-event',
            analytics: ANALYTICS.APP_SEARCH_WITHOUT_RESULTS
          },
          [PAGE_NAME + '_SHOW_ALL_HEADER_STATUS_CHANNEL']: {
            bind: 'send-show-all-header-status-event'
          },
          [PAGE_NAME + '_SEND_FAVORITES_TO_STEP_LIST_CHANNEL']: {
            bind: 'send-favorites-to-step-list-event'
          },
          [PAGE_NAME + '_SET_ENABLE_SEARCHING_CHANNEL']: {
            bind: 'set-enable-searching-input-event'
          },
          [PAGE_NAME + '_SET_OPTIONS_DISABLED_CHANNEL']: {
            bind: 'set-options-disabled-event'
          },
          [PAGE_NAME + '_DISABLED_SPINNER_CHANNEL']: {
            bind: 'close-searching-services-spinner-event'
          },
          [PAGE_NAME + '_SET_ADDITIONAL_SERVICE_FIELDS_CHANNEL']: {
            bind: 'set-additional-fields-event'
          },
          [PAGE_NAME + '_OPEN_HELP_SERVICE_MODAL_CHANNEL']: {
            bind: 'open-help-modal-event'
          },
          [PAGE_NAME + '_EMPTY_SERVICE_STEP_CHANNEL']: {
            bind: 'empty-service-selected-step-event'
          },
          [PAGE_NAME + 'ANALITICS_APP_EDIT_SERVICE']: {
            bind: 'app_edit_service',
            analytics: ANALYTICS.APP_EDIT_SERVICE
          },
          [PAGE_NAME + 'ANALITICS_APP_DELETE_SERVICE']: {
            bind: 'app_delete_service',
            analytics: ANALYTICS.APP_DELETE_SERVICE
          },
          global_alert_manager_open_with_settings: {
            bind: 'send-global-alert-manager-settings'
          },
          [PAGE_NAME + '_SEND_MAX_LENGTH_CONCEPT']: {
            bind: 'send-max-length-concept'
          },
          [PAGE_NAME + '_SEND_MIN_LENGTH_CONCEPT']: {
            bind: 'send-min-length-concept'
          },
          [PAGE_NAME + '_SEND_FIELDTYPE_CONCEPT']: {
            bind: 'send-field-type-concept'
          },
          [PAGE_NAME + '_SEND_INFO_MESSAGE_CONCEPT']: {
            bind: 'send-info-message-concept'
          },
          [PAGE_NAME + '_SEND_EDITABLE_CONCEPT']: {
            bind: 'send-editable-concept'
          },
          [PAGE_NAME + '_SEND_ISMANDATORY_CONCEPT']: {
            bind: 'send-is-mandatory-concept'
          },
          [PAGE_NAME + '_SEND_SERVICE_SELECTED_CHANNEL']: {
            bind: 'send-service-selected-event'
          },
          [PAGE_NAME + '_SET_AMOUNT_LIMIT_VALUES']: {
            bind: 'set-amount-limit-event'
          },
          [PAGE_NAME + '_SET_AMOUNT_DM_ELEMENT_LIST']: {
            bind: 'set-bill-type-event'
          },
          [PAGE_NAME + '_SET_AMOUNT_DEFAULT_VALUE']: {
            bind: 'set-default-amount-value-event'
          },
          [PAGE_NAME + '_ACTIVE_AMOUNT_STEP']: {
            bind: 'active-amount-step-event'
          },
          [PAGE_NAME + '_ACTIVE_CONCEPT_STEP']: {
            bind: 'active-concept-step-event'
          },
          [PAGE_NAME + '_SEND_TEXT_CONCEPT']: {
            bind: 'send-text-concept'
          },
          [PAGE_NAME + '_SEND_CONTINUE_CONCEPT']: {
            bind: 'send-continue-concept'
          },
          [PAGE_NAME + '_SET_REFERENCE_ALIAS_CLASS']: {
            bind: 'set-reference-alias-class-event'
          },
          [PAGE_NAME + '_SEND_READONLY_CONCEPT']: {
            bind: 'send-readonly-concept'
          },
          [PAGE_NAME + '_SEND_ICONCODE_CONCEPT']: {
            bind: 'send-iconcode-concept'
          },
          [PAGE_NAME + '_OPEN_CONFIRM_CHANNEL']: {
            bind: 'bill-open-confirm-event'
          },
          [PAGE_NAME + '_CLOSE_CONFIRM_CHANNEL']: {
            bind: 'bill-close-confirm-event'
          },
          [PAGE_NAME + '_SEND_AMOUNT_INFO']: {
            bind: 'sent-amount-info-event'
          },
          [PAGE_NAME + '_REQUEST_GET_SERVICE_CHANNEL']: {
            bind: 'request-get-service-event'
          },
          [PAGE_NAME + '_REQUEST_GET_ADDITIONAL_FIELDS_CHANNEL']: {
            bind: 'request-get-additional-fields-event'
          },
          [PAGE_NAME + '_REQUEST_GET_BILLS_CHANNEL']: {
            bind: 'request-get-bills-event'
          },
          [PAGE_NAME + '_SET_REFERENCE_CONFIG_CHANNEL']: {
            bind: 'set-reference-config-event'
          },
          [PAGE_NAME + '_SET_BILL_PAYMENT_CHANNEL']: {
            bind: 'set-bill-payment-info-event'
          },
          [PAGE_NAME + '_VALID_LENGTH_REFERENCE_CHANNEL']: {
            bind: 'valid-length-reference-event'
          },
          BILL_PAYMENTS_SET_SERVICE_DATA_CHANNEL: {
            bind: 'set-service-data-event'
          },
          [PAGE_NAME + '_REQUEST_DELETE_STORED_SERVICE_CHANNEL']: {
            bind: 'request-delete-stored-service-event'
          },
          [PAGE_NAME + 'SET-INFO-MESSAGE-REFERENCE']: {
            bind: 'set-info-message-reference'
          },
          [PAGE_NAME + '_REQUEST_MAKE_PAYMENT_CHANNEL']: {
            bind: 'request-make-payment-event'
          },
          [PAGE_NAME + '_REQUEST_SEARCH_TAXES_EVENT']: {
            bind: 'request-search-taxes-event'
          },
          [PAGE_NAME + '_REQUEST_SEARCH_BILL_EVENT']: {
            bind: 'request-search-bill-event'
          },
          [PAGE_NAME + '_SET_IS_FROM_DASHBOARD_CHANNEL']: {
            bind: 'set-is-from-dashboard-event'
          },
          [PAGE_NAME + 'SET-INVALID-REFERENCE-FROM-DM']: {
            bind: 'set-invalid-reference-from-dm-event'
          },
          [PAGE_NAME + '_COLLAPSE_CONCEPT_STEP_CHANNEL']: {
            bind: 'collapse-concept-step-event'
          },
          [PAGE_NAME + '_COLLAPSE_SERVICE_SELECTOR_STEP_CHANNEL']: {
            bind: 'collapse-service-selector-step-event'
          },
          [PAGE_NAME + '_RESET_SELECTOR_SERVICE_STEP_CHANNEL']: {
            bind: 'reset-service-selector-step-event'
          },
          [PAGE_NAME + '_RESET_AMOUNT_STEP_CHANNEL']: {
            bind: 'reset-amount-step-event'
          },
          [PAGE_NAME + '_RESET_MODAL_CHANNEL']: {
            bind: 'reset-modal-service-event'
          },
          [PAGE_NAME + '_RESET_CONCEPT_STEP_CHANNEL']: {
            bind: 'reset-concept-step-event'
          },
          [PAGE_NAME + '_RESET_SUMMARY_VIEW_CHANNEL']: {
            bind: 'reset-summary-view-event'
          },
          [PAGE_NAME + '_EXIT_BILL_PAYMENTS_PROCESS_CHANNEL']: {
            bind: 'exit-bill-payments-process-event',
            backStep: true
          },
          [PAGE_NAME + '_SET_ALERT_ICON_NOT_ENOUGH_BALANCE_CHANNEL']: {
            bind: 'set-alert-icon-not-enough-balance-event'
          },
          [PAGE_NAME + '_ENABLE-CONTINUE-BUTTON_CHANNEL']: {
            bind: 'enable-continue-button-event'
          },
          BP_SHOW_SUCCESS_RESPONSE_PAGE_CHANNEL: {
            bind: 'send-success-config-page-event',
            link: {
              page: 'billPaymentsSuccess'
            }
          },
          BP_SEND_STORED_LIST_TO_SUCCESS: {
            bind: 'send-stored-list-to-success-event'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          sign_modal_close_spinner: {
            bind: 'close-control-veil'
          },
          sign_close_modal: {
            bind: 'aric-fraud-help-modal-high-risk'
          },
          [PAGE_NAME + 'app_page_visit_click_channel']: {
            bind: 'app-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [PAGE_NAME + 'APP_STARTED_CLICK_CHANNEL']: {
            bind: 'app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [PAGE_NAME + '_ANALYTICS_APP_STEP_2']: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS.APP_STEP_2
          },
          [PAGE_NAME + '_ANALYTICS_APP_STEP_3']: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS.APP_STEP_3
          },
          [PAGE_NAME + '_ANALYTICS_APP_STEP_4']: {
            bind: 'analytics-app-step-4',
            analytics: ANALYTICS.APP_STEP_4
          },
          [PAGE_NAME + '_ANALYTICS_APP_STEP_5']: {
            bind: 'analytics-app-step-5',
            analytics: ANALYTICS.APP_STEP_5
          },
          [PAGE_NAME + '_HIDE_SERVICE_INSTRUCTIONS']: {
            bind: 'hide-service-instructions-event'
          },
          [PAGE_NAME + '_ANALYTICS_PAYMENT_REFERENCE']: {
            bind: 'app-payment-reference-event',
            analytics: ANALYTICS.APP_PAYMENT_ERROR
          },
          [PAGE_NAME + '_ERROR_PAYMENT_NOT_MADE']: {
            bind: 'app-payment-not-made-event',
            analytics: ANALYTICS.APP_SEARCH_ERROR
          },
          [PAGE_NAME + '_ANALYTICS_COMMON_ERROR']: {
            bind: 'app-common-error-event',
            analytics: ANALYTICS.APP_COMMON_ERROR
          },
          [PAGE_NAME + '_SEND_FIELDTYPE_CODEBAR_AMOUNT']: {
            bind: 'send-field-type-codebar-amount'
          },
          [PAGE_NAME + '_RESULTS_LIST_TITLE_CHANNEL']: {
            bind: 'send-results-list-title-event'
          },
          [PAGE_NAME + '_SHOW_RESULTS_LIST_TITLE_CHANNEL']: {
            bind: 'send-show-results-list-title-event'
          },
          [PAGE_NAME + '_SET_DISABLED_DECIMAL_AMOUNT_CHANNEL']: {
            bind: 'set-disabled-decimal-event'
          },
          [PAGE_NAME + '_SEND_TITLE_HEADER-MODAL']: {
            bind: 'send-title-header-modal'
          },
          [PAGE_NAME + '_STEP_COLLAPSED_CHANNEL']: {
            bind: 'recalculate-show-confirm-event'
          },
          [PAGE_NAME + '_GO_LAST_ACTIVE_STEP_CHANNEL']: {
            bind: 'go-last-active-step-event'
          },
          [PAGE_NAME + '_SUCCESS_SERVICE_DELETED']: {
            bind: 'store-service-deleted-event'
          },
          [PAGE_NAME + 'request_api_operation']: {
            bind: 'send-response-recover-registry'
          },
          [PAGE_NAME + '_reset_all_active_steps']: {
            bind: 'reset-all-steps'
          },
          [PAGE_NAME + '_restart_steps']: {
            bind: 'reactivate-first-step'
          },
          [PAGE_NAME + '_restart_product_selector']: {
            bind: 'modal-reset-product-selector'
          },
          global_prepare_feedback: {
            bind: 'prepare-feedback-event-abandon'
          },
          global_billpayment_modal_reject: {
            bind: 'aric-fraud-help-modal-high-risk'
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          [PAGE_NAME + '_PREPARE_SERVICE_LIST_CHANNEL']: {
            bind: 'prepare-service-list-event'
          },
          [PAGE_NAME + '_FREQUENT_OPERATIONS_SEND_OPERATION_SERVICES']: {
            bind: 'set-payment-services'
          },
          BP_IS_FROM_FREQUENT_SERVICE_PAYMENT_CHANNEL: {
            bind: 'set-is-from-frequent-service-payment-event'
          },
          BP_FREQUENT_OPERATIONS_ID_TO_DELETE: {
            bind: 'frequent-operations-id-to-delete-event'
          },
          BP_FREQUENT_OPERATIONS_DATA: {
            bind: 'frequent-operations-data-event'
          },
          [PAGE_NAME + 'APP_PAGE_VISIT_CHANNEL']: {
            bind: 'analytics-app-page-visit',
            analytics: ANALYTICS_FREQUENT_OPERATIONS.appPageVisit
          },
          [PAGE_NAME + 'APP_EDIT_STEP_CHANNEL']: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS_FREQUENT_OPERATIONS.appStarted
          },
          'BILL_PAYMENTS_APP_INTERNAL_LINK_CHANNEL': {
            bind: 'analytics-app-internal-link',
            analytics: ANALYTICS_FREQUENT_OPERATIONS.appInternalLink
          },
          [PAGE_NAME + 'APP_PAGE_VIEW_CHANNEL']: {
            bind: 'analytics-app-page-view-otp',
            analytics: ANALYTICS_FREQUENT_OPERATIONS.appPageViewOtp
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
              bind: 'send-global-alert-manager-settings'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const bbvaNativeConnector = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    className: isNativeIos ? 'ios-top-padding' : '',
    iOSFixedHeader: isNativeIos,
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_open_nativeconnector_bbva_qr']: {
            bind: 'openCameraCodeReader'
          },
          [PAGE_NAME + '_native_camera_code_reader_result']: {
            bind: 'qrPluginResponseCode'
          }
        },
        out: {
          [PAGE_NAME + '_native_camera_code_reader_result']: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          [PAGE_NAME + '_handle_qr_code_error_data_from_native']: {
            bind: 'bbva-qr-plugin-camera-code-error'
          },
          [PAGE_NAME + '_handle_qr_code_data_from_native']: {
            bind: 'bbva-native-connector-qr-plugin-parsed-code'
          },
          [PAGE_NAME + '_handle_qr_code_parse_error_data_from_native']: {
            bind: 'bbva-native-connector-qr-plugin-gs1-parse-error'
          }
        }
      }
    }
  };

  const paymentsApiDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-payments',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_PREPARE_SERVICE_LIST_CHANNEL']: {
            bind: 'getServices'
          },
          [PAGE_NAME + '_PREPARE_FAVORITES_LIST_CHANNEL']: {
            bind: 'getStoredServices'
          },
          [PAGE_NAME + '_REQUEST_GET_SERVICE_CHANNEL']: {
            bind: 'getServiceIndicators'
          },
          [PAGE_NAME + '_REQUEST_GET_ADDITIONAL_FIELDS_CHANNEL']: {
            bind: 'getAdditionalPaymentFields'
          },
          [PAGE_NAME + '_page_init_page']: {
            bind: 'getStoredServices'
          },
          [PAGE_NAME + '_REQUEST_DELETE_STORED_SERVICE_CHANNEL']: {
            bind: 'deleteStoredService'
          },
          [PAGE_NAME + '_REQUEST_MAKE_PAYMENT_CHANNEL']: {
            bind: 'makePaymentPase'
          },
          [PAGE_NAME + '_REQUEST_SEARCH_TAXES_EVENT']: {
            bind: 'searchTaxes'
          },
          [PAGE_NAME + '_REQUEST_SEARCH_BILL_EVENT']: {
            bind: 'searchBill'
          }
        },
        out: {
          [PAGE_NAME + '_SET_LIST_SERVICES']: {
            bind: 'set-services-list'
          },
          [PAGE_NAME + '_SET_BILL_SEARCH_EVENT']: {
            bind: 'get-bills'
          },
          [PAGE_NAME + '_SET_BILL_SEARCH_ERROR_EVENT']: {
            bind: 'service-bills-empty'
          },
          [PAGE_NAME + '_SET_BILL_SEARCH_ERROR_EVENT']: {
            bind: 'error-on-get-bills'
          },
          [PAGE_NAME + '_SET_TAXES_SEARCH_EVENT']: {
            bind: 'get-taxes'
          },
          [PAGE_NAME + '_SET_TAXES_SEARCH_ERROR_EVENT']: {
            bind: 'service-taxes-empty'
          },
          [PAGE_NAME + '_SET_TAXES_SEARCH_ERROR_SERVICE_EVENT']: {
            bind: 'error-on-get-taxes'
          },
          [PAGE_NAME + '_SET_FAVORITES_LIST_SERVICES']: {
            bind: 'set-stored-services-list'
          },
          [PAGE_NAME + '_SET_ADDITIONAL_PAYMENT_FIELDS_EVENT']: {
            bind: 'set-additional-payment-fields'
          },
          [PAGE_NAME + '_SET_SERVICE_INDICATORS_EVENT']: {
            bind: 'set-service-indicators'
          },
          [PAGE_NAME + '_SET_STORES_SERVICES_EVENT']: {
            bind: 'set-stored-services-list'
          },
          [PAGE_NAME + '_ERROR_RESPONSE_DELETED_SERVICE_EVENT']: {
            bind: 'error-on-stored-service-deleted'
          },
          [PAGE_NAME + '_SET_DELETED_SERVICE_EVENT']: {
            bind: 'stored-service-deleted'
          },
          [PAGE_NAME + '_SUCCESS_RESPONSE_PAYMENT_PASE_CHANNEL']: {
            bind: 'success-response-payment-pase'
          },
          [PAGE_NAME + '_ERROR_RESPONSE_PAYMENT_PASE_CHANNEL']: {
            bind: 'error-response-payment-pase'
          },
          [PAGE_NAME + '_RESPONSE_PAYMENT_OTP']: {
            bind: 'signature-required-first-step-dm'
          },
          [PAGE_NAME + '_ERROR_ON_GET_SERVICE_INDICATORS_CHANNEL']: {
            bind: 'error-on-get-service-indicators'
          },
          [PAGE_NAME + '_ERROR_ON_GET_SERVICES_LIST_CHANNEL']: {
            bind: 'error-on-get-services-list'
          },
          [PAGE_NAME + '_ERROR_ON_GET_STORED_SERVICES']: {
            bind: 'error-on-get-stored-services'
          },
          [PAGE_NAME + '_GET_TAXES_OTP']: {
            bind: 'get-taxes'
          },
          [PAGE_NAME + '_ERROR_ONGET_TAXES_NOT_OTP']: {
            bind: 'error-on-get-taxes'
          },
          [PAGE_NAME + '_HIGH_RISK_OF_FRAUD']: {
            bind: 'high-risk-of-fraud'
          },
          [PAGE_NAME + '_SET_LIST_SCHEDULED_SERVICE_PAYMENT']: {
            bind: 'set-services-list'
          }
        }
      }
    }
  };

  const globalApisOperationRegistries = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-operation-registries',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'request_api_operation']: {
            bind: 'postRecoverRegistry'
          }
        },
        out: {
          [PAGE_NAME + 'operation_request_success']: {
            bind: 'success-on-post-operation-registries-data'
          },
          [PAGE_NAME + 'operation_request_error']: {
            bind: 'error-on-post-operation-registries-data'
          }
        }
      }
    }
  };

  const UI = [billPaymentsProductSelected, billPaymentsServiceSelector,
    modalRecipientServiceSelector, billPaymentsStepAmount,
    billPaymentsStepConcept, summaryView, cellsModalAlert, helpModalBillPayments,
    helpModalBillPaymentsContentIlustration, helpModalBillPaymentsSubHeader,
    helpModalBillPaymentsText, helpModalBillPaymentsButton];

  if (isSpherica) {
    UI.push(glomoAlertManagerSpherica);
  }
  const DMs = [billPaymentsManager, paymentsApiDM, globalApisOperationRegistries, bbvaNativeConnector];
  base.components.push(...DMs, ...UI);
  const signConnectorPayments = require('./common/_sign-connector')(CONFIG)(base);
  const signConnectorOperationRegistries = require('./common/_sign-connector')(CONFIG)(base);
  signConnectorPayments('cells-dm-global-apis-payments', PAGE_NAME, ['success-response-payment-pase', 'error-response-payment-pase']);
  signConnectorOperationRegistries('cells-dm-global-apis-operation-registries', PAGE_NAME, ['success-on-post-operation-registries-data', 'error-on-post-operation-registries-data']);
  return sphericaPageUtils.spherize(base);
};
