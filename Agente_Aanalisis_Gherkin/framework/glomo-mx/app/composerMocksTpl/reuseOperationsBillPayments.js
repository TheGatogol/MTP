/* eslint-disable new-cap */
'use strict';
module.exports = CONFIG => {
  const PAGE_NAME = 'reuseOperationsBillPayments';
  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;
  const native = CONFIG.native || false;
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const ANALYTICS_REUSE = require('./analytics/_reuseOperations')(CONFIG);
  const MAXSTEPS = 4;
  const base = {
    hash: 'mxbillPayments',
    currentPage: {
      url: '/bill-payments-reuse-operation'
    },
    pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        className: `${isNativeIos ? 'ios-top-padding' : ''} bg-core-blue header-fixed `,
        delayScrollTop: 700,
        topOnConfirm: true,
        animationType: 'verticalUp',
        extraHeaderClass: 'bbva-core-blue',
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
            [PAGE_NAME + '_INPUT_FOCUS_OUT']: {
              bind: 'recalculateHeader'
            },
            [PAGE_NAME + '_INPUT_FOCUS_IN']: {
              bind: 'recalculateStatusBarTop'
            },
            [PAGE_NAME + '_INPUT_FOCUS_OUT_RESET_STATUS_BAR']: {
              bind: 'recalculateStatusBarTop'
            },
            [PAGE_NAME + '_NEW_AMOUNT_LIMIT_SUMMARY']: {
              bind: 'showConfirm'
            },
            [PAGE_NAME + '_show_summary']: {
              bind: 'showConfirm'
            }
          },
          out: {
            [PAGE_NAME + 'SCROLL_COMPLETE']: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: `${isNativeIos ? 'header--core-ios' : ''} header--core`,
          rightIcon: 'coronita:close',
          leftIconSize: '22',
          titleName: 'glomo-bill-payments-header-title',
          cellsConnections: {
            in: {
              [PAGE_NAME + '_to_continue']: {
                bind: 'navigate'
              }
            },
            out: {
              [PAGE_NAME + '_back_request']: {
                bind: 'click-right-button'
              }
            }
          }
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
              ['__bridge_page_' + PAGE_NAME]: {
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
              [PAGE_NAME + '_back_request']: {
                bind: 'goBack'
              }
            },
            out: {
              navigation_bill_payments_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              },
              [PAGE_NAME + '_RESET']: {
                bind: 'navigation-to-back'
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
              [PAGE_NAME + '_REGISTER_STEP_CHANNEL']: {
                bind: 'registerStep',
                previousState: true
              },
              [PAGE_NAME + '_GO_NEXT_SERVICE_SELECTOR_STEP_CHANNEL']: {
                bind: 'goNextStep'
              },
              [PAGE_NAME + '_GO_NEXT_AMOUNT_STEP_CHANNEL']: {
                bind: 'goNextStep'
              },
              [PAGE_NAME + '_GO_NEXT_PRODUCT_SELECTOR_STEP_CHANNEL_REUSE']: {
                bind: 'goNextStep'
              },
              [PAGE_NAME + '_GO_NEXT_PRODUCT_SELECTOR_STEP_CHANNEL']: {
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
    type: 'UI',
    properties: {
      changeLabel: 'glomo-bill-payments-edit-label',
      currentStep: 3,
      maxSteps: MAXSTEPS,
      active: true,
      collapsed: true,
      stepTitle: 'glomo-bill-payments-step-product-selector-step-title',
      isOneProduct: true,
      shouldHideChangeButton: false,
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
          [PAGE_NAME + '_SEND_PRODUCTS_ARRAY_CHANNEL']: {
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
          },
          [PAGE_NAME + '_SELECTED_PRODUCT_FROM_VIEW_ALL']: {
            bind: 'selected'
          },
          [PAGE_NAME + '_RESET']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME + '_REGISTER_STEP_CHANNEL']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_SELECTED_ACCOUNT_CHANNEL']: {
            bind: 'on-change-product-selected'
          },
          [PAGE_NAME + '_OPEN_VIEWALL_PRODUCTS_MODAL']: {
            bind: 'view-all'
          },
          [PAGE_NAME + '_CHANGE_PRODUCT_LIST_CHANNEL']: {
            bind: 'change-step-state'
          },
          [PAGE_NAME + '_KEEP_PRODUCT_SELECTED_CHANNEL']: {
            bind: 'dont-change-and-continue'
          },
          [PAGE_NAME + '_UPDATE_AMOUNT_LIMIT']: {
            bind: 'on-change-product-selected'
          }
        }
      }
    }
  };
  const billPaymentsProductSelectorModal = {
    zone: 'app__transactional',
    tag: 'cells-product-selector-modal',
    type: 'UI',
    properties: {
      modalTitle: 'glomo-bill-payments-step-product-selector-list-label',
      iOSFixedHeader: isNativeIos,
      extraHeaderClass: 'bbva-dark-medium-blue',
      showCloseModalButton: true,
      closeButtonLabel: 'info-UNDERSTAND-close',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_OPEN_VIEWALL_PRODUCTS_MODAL']: {
            bind: 'treatProducts'
          }
        },
        out: {
          [PAGE_NAME + '_SELECTED_PRODUCT_FROM_MODAL']: {
            bind: 'select-product'
          }
        }
      }
    }
  };
  const billPaymentsServiceSelector = {
    zone: 'app__main',
    tag: 'cells-step-bill-payment-service-selector-mx',
    familyPath: 'cells-step-bill-payment-service-selector',
    type: 'UI',
    properties: {
      className: 'one-column',
      currentStep: 1,
      stepId: 'cells-step-bill-payment-service-selector',
      noStoredMessageLabel: 'cells-step-bill-payment-service-selector-step-no-stored-services',
      changeLabel: 'glomo-bill-payments-edit-label',
      maxSteps: MAXSTEPS,
      decorated: true,
      stepTitle: 'glomo-bill-payments-service-step-title',
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
          [PAGE_NAME + '_DISABLE_SERVICE_CHANGE']: {
            bind: 'disableChange'
          },
          [PAGE_NAME + '_RESET']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME + '_REGISTER_STEP_CHANNEL']: {
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
    }
  };
  const modalRecipientServiceSelector = {
    zone: 'app__transactional',
    tag: 'cells-modal-new-recipient-service-selector',
    type: 'UI',
    properties: {
      className: `bill-pay-modal ${ isNativeIos ? 'ios-top-padding' : ''}`,
      chooseOtherServiceLabel: 'glomo-service-detail-secondary-button-label',
      inputSearcherClass: 'items-separator-input',
      listItemsClassName: 'services-list',
      selectedItemClass: 'blue-title-avatar secondary-down',
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
      agreementValidate: true,
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
          [PAGE_NAME + '_OPEN_SERVICE_LIST_MODAL']: {
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
          [PAGE_NAME + '_OPEN_SELECTED_SERVICE_INFO_MODAL']: {
            bind: 'opened'
          },
          [PAGE_NAME + '_SET_SERVICES_LIST_TO_MODAL']: {
            bind: 'setServices'
          },
          [PAGE_NAME + '_CLOSE_VEIL_MODAL']: {
            bind: 'closeVeil'
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
            bind: 'help-service-icon-clicked-event'
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
          _FIRE_NATIVE_CODE_BAR_CHANNEL: {
            bind: 'icon-input-tap-event'
          }
        }
      }
    }
  };
  const billPaymentsStepAmount = {
    zone: 'app__main',
    tag: 'cells-step-enter-amount-bill-payments',
    type: 'UI',
    properties: {
      active: false,
      stepId: 'cells-step-enter-amount-bill-payments',
      changeLabel: 'glomo-bill-payments-edit-label',
      currentStep: 2,
      currency: LOCAL_CURRENCY,
      decorated: true,
      hideAmountLabel: true,
      hideBillsID: true,
      hideInfoMessage: true,
      hideLinkToBackOnError: true,
      inputCurrency: LOCAL_CURRENCY,
      language: LANGUAGE,
      localCurrency: LOCAL_CURRENCY,
      maxSteps: MAXSTEPS,
      billTypeClass: 'amount-column-radio',
      enableDividerOnRadioGroup: true,
      showCurrenciesInfo: false,
      stepTitle: 'glomo-bill-payments-amount-step-title',
      disableOneBillAmountLimit: true,
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
          [PAGE_NAME + '_NEW_AMOUNT_LIMIT']: {
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
          },
          [PAGE_NAME + '_SET_ENTER_AMOUNT_DEFAULT']: {
            bind: 'defaultValue'
          },
          [PAGE_NAME + '_ENTER_AMOUNT_COLLAPSED_ACCEPT']: {
            bind: 'onClickMessageButton'
          },
          [PAGE_NAME + '_RESET']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME + '_SEND_STEP_AMOUNT_BILL_PAYMENTS_VALUES']: {
            bind: 'send-step-amount-bill-payments-values'
          },
          [PAGE_NAME + '_REGISTER_STEP_CHANNEL']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_STEP_COLLAPSED_CHANNEL']: {
            bind: 'send-step-amount-bill-payments-values'
          },
          [PAGE_NAME + '_AMOUNT_STEP_CHANGE_CHANNEL']: {
            bind: 'change-step-state'
          },
          [PAGE_NAME + '_INPUT_FOCUS_IN']: {
            bind: 'amount-input-focus'
          },
          [PAGE_NAME + '_INPUT_FOCUS_OUT']: {
            bind: 'dispatched-blur'
          },
          [PAGE_NAME + '_INPUT_FOCUS_OUT_RESET_STATUS_BAR']: {
            bind: 'dispatched-blur'
          }
        }
      }
    }
  };
  const billPaymentsStepConcept = {
    zone: 'app__main',
    tag: 'cells-step-concept',
    type: 'UI',
    properties: {
      currentStep: 4,
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
      lastStep: true,
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
          [PAGE_NAME + '_SEND_ICONCODE_CONCEPT']: {
            bind: 'iconCode'
          },
          [PAGE_NAME + '_SEND_CONTINUE_CONCEPT']: {
            bind: 'continue'
          },
          [PAGE_NAME + '_SEND_ISMANDATORY_CONCEPT']: {
            bind: 'isRequired'
          },
          [PAGE_NAME + '_COLLAPSE_CONCEPT_STEP_CHANNEL']: {
            bind: 'collapsed'
          },
          [PAGE_NAME + '_RESET_CONCEPT_STEP_CHANNEL']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SET_LAST_STEP_ACTIVE']: {
            bind: 'lastStep'
          },
          [PAGE_NAME + '_RESET']: {
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
          [PAGE_NAME + '_REGISTER_STEP_CHANNEL']: {
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
    }
  };
  const summaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      showAddition: true,
      buttonLabel: 'glomo-bill-payments-summary-continue-label',
      summaryViewTitle: 'glomo-bill-payments-summary-view-title',
      localCurrency: LOCAL_CURRENCY,
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
          },
          [PAGE_NAME + '_RESET']: {
            bind: 'reset'
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
    properties: {
      content: 'glomo-bill-payments-deleted-service-success-message',
      type: 'success',
      toast: true,
      duration: 3000,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SUCCESS_SERVICE_DELETED']: {
            bind: 'open'
          }
        }
      }
    }
  };
  const billPaymentsManager = {
    zone: 'app__main',
    tag: 'bbva-manager-bill-payments',
    type: 'DM',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-manager-bill-payments',
    properties: {
      host: CONFIG.globalServices.host,
      native,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isFromDashboard: true,
      isGlobalRepository: true,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
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
          [PAGE_NAME + '_SET_DEFAULT_ACCOUNT_DM']: {
            bind: 'prepareAccountsInfo'
          },
          [PAGE_NAME + '_SET_GLOBAL_PRODUCTS_CACHE_DM']: {
            bind: 'globalAccounts'
          },
          [PAGE_NAME + '_SET_LIST_SERVICES']: {
            bind: 'getServiceList'
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
          [PAGE_NAME + '_SET_SERVICE_INDICATORS_EVENT_REUSE']: {
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
          [PAGE_NAME + '_SELECTED_ACCOUNT_CHANNEL']: {
            bind: 'setAccountFromSelector'
          },
          [PAGE_NAME + '_SELECTED_PRODUCT_FROM_MODAL']: {
            bind: 'setAccountFromSelector'
          },
          [PAGE_NAME + '_CHANGE_PRODUCT_LIST_CHANNEL']: {
            bind: 'changeProductSelected'
          },
          [PAGE_NAME + '_KEEP_PRODUCT_SELECTED_CHANNEL']: {
            bind: 'keepProductSelected'
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
          [PAGE_NAME + '_COLLAPSED_SERVICE_SELECTED_DM']: {
            bind: 'closeServicesListStep'
          },
          [PAGE_NAME + '_SET_ENTER_NAME_DEFAULT']: {
            bind: 'name'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_INFO_MODAL']: {
            bind: 'serviceData'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_TO_MODAL']: {
            bind: 'prepareStoreService'
          }
        },
        out: {
          [PAGE_NAME + '_BOOT_DM_STEPS']: {
            bind: 'boot-steps-dm-event'
          },
          [PAGE_NAME + '_GO_NEXT_SERVICE_SELECTOR_STEP_CHANNEL']: {
            bind: 'go-next-service-selector-step-event'
          },
          [PAGE_NAME + '_GO_NEXT_AMOUNT_STEP_CHANNEL']: {
            bind: 'go-next-amount-step-event'
          },
          [PAGE_NAME + '_GO_NEXT_PRODUCT_SELECTOR_STEP_CHANNEL']: {
            bind: 'go-next-product-selector-step-event'
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
          [PAGE_NAME + '_SEND_PRODUCTS_ARRAY_CHANNEL']: {
            bind: 'send-products-list-event'
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
            bind: 'send-analytics-without-results-event'
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
            bind: 'app_edit_service'
          },
          [PAGE_NAME + 'ANALITICS_APP_DELETE_SERVICE']: {
            bind: 'app_delete_service'
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
          reuseOperationsBillPayments_SET_REFERENCE_CONFIG_CHANNEL: {
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
          RO_BP_SHOW_SUCCESS_RESPONSE_PAGE_CHANNEL: {
            bind: 'send-success-config-page-event',
            link: {
              page: 'billPaymentsSuccess'
            }
          },
          [PAGE_NAME + '_RESET']: {
            bind: 'send-success-config-page-event'
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
          [PAGE_NAME + '_SELECTED_PRODUCT_FROM_VIEW_ALL']: {
            bind: 'selected-product-view-all-event'
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
      native,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          navigate_to_billPayments_operation: {
            bind: 'getServices'
          },
          [PAGE_NAME + '_PREPARE_FAVORITES_LIST_CHANNEL']: {
            bind: 'getStoredServices'
          },
          [PAGE_NAME + '_REQUEST_GET_SERVICE_CHANNEL']: {
            bind: 'getServiceIndicators'
          },
          [PAGE_NAME + '_request_not_favorite_service_indicators']: {
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
          [PAGE_NAME + '_reuse_search_specific_service']: {
            bind: 'set-service-indicators'
          }
        }
      }
    }
  };
  const reuseBillPaymentsManager = {
    zone: 'app__main',
    tag: 'bbva-controller-transaction-detail-account-reuse-mx',
    familyPath: '@glomo-web-components/bbva-controller-transaction-detail-account-reuse-mx',
    type: 'DM',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.host,
      native,
      paymentsApiVersion: CONFIG.globalServices.versions.payments,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      isFromDashboard: false,
      evtPrefix: 'reuse-bill-payments',
      cellsConnections: {
        in: {
          navigate_to_billPayments_operation: {
            bind: 'reuseTransaction'
          },
          dashboard_accounts: {
            bind: 'getGlobalAccounts'
          },
          dashboard_customer_email: {
            bind: 'customerContact'
          },
          [PAGE_NAME + '_SEND_SERVICES_LIST_TO_MODAL_CHANNEL']: {
            bind: 'setListServices'
          },
          [PAGE_NAME + '_SET_LIST_SERVICES']: {
            bind: 'setListAllServices'
          },
          [PAGE_NAME + '_SET_SERVICE_INDICATORS_EVENT']: {
            bind: 'toCloseSelectedService'
          },
          [PAGE_NAME + '_SEND_SERVICE_SELECTED_CHANNEL']: {
            bind: 'prefillAmountBillPayment'
          },
          [PAGE_NAME + '_UPDATE_AMOUNT_LIMIT']: {
            bind: 'billPaymentsUpdadeMaxAmountInput'
          },
          [PAGE_NAME + '_KEEP_PRODUCT_SELECTED_CHANNEL']: {
            bind: 'billPaymentsUpdadeMaxAmountInput'
          },
          [PAGE_NAME + '_GO_NEXT_STEP_CHANNEL']: {
            bind: 'billPaymentsUpdateConcept'
          },
          [PAGE_NAME + '_reuse_search_specific_service']: {
            bind: 'searchServiceSuccess'
          },
          [PAGE_NAME + '_RESET']: {
            bind: 'resetBillPaymentsState'
          },
          reuseOperationsBillPayments_SET_REFERENCE_CONFIG_CHANNEL: {
            bind: 'additionalData'
          }
        },
        out: {
          [PAGE_NAME + '_SET_GLOBAL_PRODUCTS_CACHE_DM']: {
            bind: 'reuse-bill-payments-set-products-list'
          },
          [PAGE_NAME + '_SET_SERVICE_INDICATORS_EVENT_REUSE']: {
            bind: 'reuse-bill-payments-set-service-indicators'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_INFO']: {
            bind: 'reuse-bill-payments-set-service-selected-dm'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_INFO_MODAL']: {
            bind: 'reuse-bill-payments-set-service-selected-modal'
          },
          [PAGE_NAME + '_SET_SERVICES_LIST_TO_MODAL']: {
            bind: 'reuse-bill-payments-set-services-list-modal'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_TO_MODAL']: {
            bind: 'reuse-bill-payments-service-selected-open-modal'
          },
          [PAGE_NAME + '_OPEN_SELECTED_SERVICE_INFO_MODAL']: {
            bind: 'reuse-bill-payments-service-selected-open-modal'
          },
          [PAGE_NAME + '_CLOSE_VEIL_MODAL']: {
            bind: 'open-modal-close-veil'
          },
          [PAGE_NAME + '_COLLAPSED_SERVICE_SELECTED_DM']: {
            bind: 'reuse-bill-payments-service-selected-collapsed-dm'
          },
          [PAGE_NAME + '_SET_DEFAULT_ACCOUNT_DM']: {
            bind: 'reuse-bill-payments-set-products-account-default'
          },
          [PAGE_NAME + '_GO_NEXT_PRODUCT_SELECTOR_STEP_CHANNEL_REUSE']: {
            bind: 'reuse-bill-payments-go-next-product-selector-step-event'
          },
          [PAGE_NAME + '_SET_ENTER_NAME_DEFAULT']: {
            bind: 'reuse-bill-payments-set-value-name-default'
          },
          [PAGE_NAME + '_SET_ENTER_AMOUNT_DEFAULT']: {
            bind: 'reuse-bill-payments-set-value-amount-default'
          },
          [PAGE_NAME + '_ENTER_AMOUNT_COLLAPSED_ACCEPT']: {
            bind: 'reuse-bill-payments-amount-collapsed'
          },
          [PAGE_NAME + '_SEND_TEXT_CONCEPT']: {
            bind: 'reuse-bill-payments-send-text-concept'
          },
          [PAGE_NAME + '_SEND_CONCEPT_INFO']: {
            bind: 'reuse-bill-payments-concept-collapsed'
          },
          [PAGE_NAME + '_STEP_COLLAPSED_CHANNEL']: {
            bind: 'reuse-bill-payments-concept-collapsed'
          },
          [PAGE_NAME + '_RESET_LAYER_SCROLL_CHANNEL']: {
            bind: 'reuse-bill-payments-reset-layer-scroll'
          },
          [PAGE_NAME + '_SET_LAST_STEP_ACTIVE']: {
            bind: 'reuse-bill-payments-active-concept'
          },
          [PAGE_NAME + '_DISABLE_SERVICE_CHANGE']: {
            bind: 'reuse-bill-payments-diable-service-change'
          },
          [PAGE_NAME + '_NEW_AMOUNT_LIMIT']: {
            bind: 'reuse-bill-payments-update-input-amount-limit'
          },
          [PAGE_NAME + '_NEW_AMOUNT_LIMIT_SUMMARY']: {
            bind: 'reuse-bill-payments-update-input-amount-limit-summary'
          },
          [PAGE_NAME + '_show_summary']: {
            bind: 'reuse-bill-payments-state-summary'
          },
          [PAGE_NAME + '_request_not_favorite_service_indicators']: {
            bind: 'reuse-bill-payments-request-agrement'
          }
        }
      }
    }
  };
  const reuseAnalyticsOperationDataManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analytics-controller-transaction-detail-account-reuse-mx',
    familyPath: '@glomo-web-components/bbva-controller-transaction-detail-account-reuse-mx',
    render: 'litElement',
    properties: {
      evtPrefix: 'reuse-operation',
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          navigate_to_billPayments_operation: {
            bind: 'filterAppOnClickStart'
          },
          [PAGE_NAME + '_SET_SELECTED_SERVICE_INFO']: {
            bind: 'fireAnalyticsAppPageVisit'
          },
          [PAGE_NAME + 'CHANGE_SERVICE_SELECTED']: {
            bind: 'fireAnalyticsAppStartedEdit'
          },
          [PAGE_NAME + '_AMOUNT_STEP_CHANGE_CHANNEL']: {
            bind: 'fireAnalyticsAppStartedEdit'
          },
          [PAGE_NAME + 'SELECT_CHANGE_SERVICE_SELECTED']: {
            bind: 'fireAnalyticsAppStartedEdit'
          },
          [PAGE_NAME + '_CHANGE_CONCEPT_CHANNEL']: {
            bind: 'fireAnalyticsAppStartedEdit'
          },
          [PAGE_NAME + '_SUMMARY_CLOSED']: {
            bind: 'fireAnalyticsAppStartedConfirm'
          },
          [PAGE_NAME + '_RESPONSE_PAYMENT_OTP']: {
            bind: 'fireAnalyticsAppStep'
          },
          [PAGE_NAME + '_SUCCESS_RESPONSE_PAYMENT_PASE_CHANNEL']: {
            bind: 'fireAnalyticsAppCompleted'
          },
          [PAGE_NAME + '_OPEN_SELECTED_SERVICE_INFO_MODAL']: {
            bind: 'fireAnalyticsAppHuella'
          }
        },
        out: {
          reuse_operation_app_onclick_start: {
            bind: 'app-on-click-start',
            analytics: ANALYTICS_REUSE.APP_ONCLICK_START
          },
          reuse_operation_app_visit: {
            bind: 'analytics-app-page-visit',
            analytics: ANALYTICS_REUSE.APP_PAGE_VISIT
          },
          reuse_operation_app_started: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS_REUSE.APP_STARTED
          },
          reuse_operation_app_otp: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS_REUSE.APP_STEP_2
          },
          reuse_operation_app_complete: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS_REUSE.APP_COMPLETED
          },
          reuse_operation_app_huella: {
            bind: 'analytics-app-huella',
            analytics: ANALYTICS_REUSE._getAdvancedFootprint('pagar servicios', 'referencia de pago')
          }
        }
      }
    }
  };
  const UI = [
    billPaymentsServiceSelector,
    modalRecipientServiceSelector,
    billPaymentsStepAmount,
    billPaymentsProductSelected,
    billPaymentsProductSelectorModal,
    billPaymentsStepConcept,
    summaryView,
    cellsModalAlert
  ];
  const DMs = [billPaymentsManager, paymentsApiDM, reuseBillPaymentsManager, reuseAnalyticsOperationDataManager];
  base.components.push(...DMs, ...UI);
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-payments', PAGE_NAME, ['success-response-payment-pase', 'error-response-payment-pase']);
  return base;
};
