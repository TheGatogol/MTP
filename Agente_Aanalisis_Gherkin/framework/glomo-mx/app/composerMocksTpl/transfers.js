/* eslint-disable complexity, max-statements, no-dupe-keys */
'use strict';
module.exports = (CONFIG, PAGENAME = 'transfers') => {
  const {
    globalServices: {
      host: hostServices,
      versions: versionApis,
      requiredToken = 'tsec'
    },
    native,
    nativeIos
  } = CONFIG;
  const moment = require('moment');
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName, getFormatDate, getLanguage, getLocalCurrency, createSpinner } = UTILS;
  const OPERATIVEPREFIX = createPrefixFromPageName(PAGENAME);
  const [ getChannelName ] = useNames(OPERATIVEPREFIX);
  const analyticsReuse = require('./analytics/_reuseOperations')(CONFIG);
  const PAGES = require('./common/_pages')(CONFIG)(PAGENAME);
  const LOCAL_CURRENCY = getLocalCurrency();
  const ANALYTICS = require('./analytics/_transfers')(CONFIG);
  const pageDmsOutCommonErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGENAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const sphericaSuffix = isSpherica ? '-spherica' : '';
  const cellsSpinnerVeil = createSpinner(CONFIG);
  const pageChannelPrefix = PAGENAME === 'transfers' ? '' : PAGENAME.concat('_');
  cellsSpinnerVeil.tagSpherica = 'cells-spinner-veil-spherica';
  cellsSpinnerVeil.propertiesSpherica = {
    className: 'solid-spinner'
  };
  if (isSpherica) {
    cellsSpinnerVeil.properties.messages = [ 'glomo-transfers-spinner-content-description-spherica' ];
  }

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          [getChannelName('alert_manager_open_with_settings_spherica')]: {
            bind: 'openWithSettings'
          },
          [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
            bind: 'close'
          },
          suspected_transaction_reset_operatives: {
            bind: 'close'
          },
          global_equity_error_navigate_back: {
            bind: 'close'
          }
        },
        out: {
          [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
            bind: 'alert-CONFIRM-EXIT-OPERATION-TRANSFERS-accept'
          },
          cancel_out_of_schedule_alert: {
            bind: 'alert-OUT-OF-SCHEDULE-cancel',
            backStep: true,
            'forward-to-native': true
          },
          CHANGE_PRODUCT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-product-selector-exchange-rates-accept'
          },
          CHANGE_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-change-exchange-rates-accept'
          },
          CHANGE_RECIPIENT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-recipient-selector-exchange-rates-accept'
          },
          global_stand_in_unavailable_transfers_modal_exit: {
            bind: 'alert-stand-in-unavailable-transfers-accept'
          },
          global_alert_OWN_TRANSFER_FOREIGN_CURRENCY_ERROR_accept: {
            bind: 'alert-OWN-TRANSFER-FOREIGN-CURRENCY-ERROR-accept'
          },
          global_alert_OWN_TRANSFER_FOREIGN_CURRENCY_ERROR_cancel: {
            bind: 'alert-OWN-TRANSFER-FOREIGN-CURRENCY-ERROR-cancel'
          },
          codicel_accept_invite_contact_transfer: {
            bind: 'alert-CODICEL-INVITE-CONTACT-TRANSFER-MODAL-accept'
          },
          codicel_accept_invite_pre_contact: {
            bind: 'alert-CODICEL-NOT-FUND-MODAL-accept'
          },
          SHOW_ALIAS_IN_USE_MODAL_ACCEPT: {
            bind: 'alert-alias-in-use-accept'
          },
          global_transfers_to_call: {
            bind: 'alert-error-transfers-high-risk-of-fraud-accept'
          },
          global_operations_modal_aric_send_exit_to_header: {
            bind: 'alert-error-transfers-high-risk-of-fraud-cancel',
            backStep: true
          }
        }
      }
    }
  };

  const MAX_DIGITS = '20';
  const ORDERITEM = {
    newRecipient: 0,
    savedContacts: 2,
    myAccounts: 1
  };
  const AVAILABLE_TRANSFER_CURRENCIES = ['MXN', 'USD'];
  const MAX_REFERENCE_DIGITS = '7';
  const TRANSFERTYPEMX = {
    INTERNAL_TRANSFERS: 'glomo-transfer-generate-equity-analytics-typology-internal-transfer',
    INTERBANK_TRANSFERS: 'glomo-transfer-generate-equity-analytics-typology-interbank-transfer',
    OWN_TRANSFERS: 'glomo-transfer-generate-equity-analytics-typology-own-transfer'
  };

  var base = {
    hash: PAGENAME,
    currentPage: {
      url: '/transfers',
      params: []
    },
    pages: PAGES,
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        delayScrollTop: 500,
        animationType: 'verticalUp',
        headerHeight: UTILS.headerHeight,
        headerFixed: true,
        className: `requestBranchAppoinment bg-core-blue header-fixed ${nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'bbva-core-blue',
        cellsConnections: {
          in: {
            [getChannelName('_RESET_PAGE')]: {
              bind: 'reset'
            },
            [getChannelName('_SCROLL_ZONE')]: {
              bind: 'scrollItemIntoView'
            },
            [getChannelName('_SHOW_CONFIRM_CHANEL')]: {
              bind: 'showConfirm'
            },
            [getChannelName('_COMPLET_TRANSFER')]: {
              bind: 'resetLayerScroll'
            },
            [getChannelName('_SET_TIMER')]: {
              bind: 'recalculateHeader'
            },
            [getChannelName('_RESET_TIMER')]: {
              bind: 'recalculateHeader'
            },
            [getChannelName('_INIT_PAGE')]: {
              bind: 'recalculateHeader'
            },
            [getChannelName('init_page')]: {
              bind: 'recalculateHeader'
            },
            [getChannelName('_INPUT_FOCUS_IN')]: {
              bind: 'recalculateStatusBarTop'
            },
            [getChannelName('_INPUT_FOCUS_OUT')]: {
              bind: 'recalculateHeader'
            },
            [getChannelName('_INPUT_FOCUS_OUT_RESET_STATUS_BAR')]: {
              bind: 'recalculateStatusBarTop'
            },
            transfers__CLOSE_REVIEW_SECTION_MODAL: {
              bind: 'recalculateStatusBarTop'
            }
          }
        }
      },
      propertiesSpherica: {
        className: nativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: nativeIos ? 'header--white' : ''
      }
    },
    components: [
      cellsSpinnerVeil,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-handle-life-cycle',
        properties: {
          pageName: PAGENAME,
          customInitEvents: {
            'not-collapse-any-steps': true,
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_transfers: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('init_page')]: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              transfers__CHANGE_AND_RESET: {
                bind: 'reset'
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
          backAction: 'back-step-navigation',
          cellsConnections: {
            in: {
              [getChannelName('_SET_TRANSFERS_SUCCESS_DATA')]: {
                bind: 'navigateToPage'
              },
              [getChannelName('EXIT_TRANSFERS')]: {
                bind: 'goBack'
              }
            },
            out: {
              NAVIGATION_REQUEST_TRANSFERS_SUCCESS: {
                bind: 'navigation-to-transfersSuccess',
                link: {
                  page: 'transfersSuccess'
                }
              },
              [getChannelName('_EXIT_PAGE_TRANSFERS')]: {
                bind: 'back-step-navigation',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-transfer-title-name',
          cellsConnections: {
            in: {
              [getChannelName('set_transfer_title')]: {
                bind: 'titleName'
              }
            },
            out: {
              [getChannelName('_HEADER_CLOSE')]: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--white',
          rightIcon: 'coronita:close',
          rightIconText: 'cells-molecule-header-spherica-close',
          variant: 'primary'
        }
      }
    ]
  };

  const UI = [
    {
      zone: 'app__header',
      tag: 'glomo-aggregation-circular-timer',
      tagSpherica: 'glomo-aggregation-circular-timer-spherica',
      type: 'UI',
      properties: {
        id: 'timerCircular',
        trailWidth: '5',
        size: '65',
        noTimeWarningVisualChange: 'true',
        reflect: 'true',
        counterClockwise: 'true',
        cellsConnections: {
          in: {
            [getChannelName('_SET_TIMER')]: {
              bind: 'timeout'
            },
            [getChannelName('_RESTART_TIMER')]: {
              bind: 'restartTimer'
            },
            [getChannelName('_RESET_TIMER')]: {
              bind: 'setProperties'
            }
          },
          out: {
            [getChannelName('_TIME_RAN_OUT')]: {
              bind: 'timeout'
            }
          }
        }
      },
      propertiesSpherica: {
        variant: 'primary-alt'
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-step-product-selector',
      tagSpherica: 'cells-step-product-selector-spherica',
      type: 'UI',
      properties: {
        isSpherica,
        id: 'transfer-origin',
        alignItems: 'amount-align',
        active: true,
        className: 'subTitle amount-xxxs-padding grey-product-label',
        firstStep: true,
        visibleChars: 5,
        stepTitle: `glomo-transfer-title-product-selector${sphericaSuffix}`,
        accountTitle: `glomo-transfer-title-product-selector${sphericaSuffix}`,
        changeLabel: `glomo-transfer-product-selector-change${sphericaSuffix}`,
        productsListLabel: `glomo-transfer-product-selector-title-accounts-and-cards${sphericaSuffix}`,
        localCurrency: LOCAL_CURRENCY,
        singleProductOriginType: false,
        disableSeparation: false,
        showSeparator: true,
        stepClickDisable: true,
        errorMessage: `glomo-transfer-product-balance-error-message${sphericaSuffix}`,
        customErrorMessageAdditionalLink: 'preLink',
        viewAllLabel: 'glomo-transfer-view-all',
        cellsConnections: {
          in: {
            [getChannelName('init_page')]: {
              bind: 'initialize'
            },
            [getChannelName('_SET_PRODUCTS_LIST_TOTAL')]: {
              bind: 'products'
            },
            [getChannelName('_SET_MAX_PRODUCT')]: {
              bind: 'maxProducts'
            },
            [getChannelName('_SET_MY_PRODUCTS_RECEIVER')]: {
              bind: 'products'
            },
            [getChannelName('_SET_PRODUCT_SELECTOR_PROPERTIES')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SENDER_SELECTED_FROM_PRODUCT_DETAIL')]: {
              bind: 'preselectProduct'
            },
            [getChannelName('_SET_SELECTED_SENDER_PRODUCT')]: {
              bind: 'onProductSelected'
            },
            [getChannelName('_CHANGE_TO_BACKGROUD')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_MAX_STEPS_PROPERTY')]: {
              bind: 'maxSteps'
            },
            [getChannelName('_SET_PRODUCT_SELECTOR_STEP_PROPERTIES')]: {
              bind: 'setProperties'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'resetAllProducts'
            },
            restore_steps_after_transfer_success: {
              bind: 'reset'
            },
            [getChannelName('_SET_TRANSFERS_SUCCESS_DATA')]: {
              bind: 'reset'
            },
            [getChannelName('_BACK_TO_START_DASHBOARD_PRODUCT_DETAIL')]: {
              bind: 'reset'
            },
            cancel_out_of_schedule_alert: {
              bind: 'resetAllProducts'
            },
            burn_item_from_operative_smart_servicing: {
              bind: 'resetCollapsedStep'
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'resetCollapsedStep'
            },
            [getChannelName('_SET_TRANSFERS_SUCCESS_DATA')]: {
              bind: 'resetCollapsedStep'
            },
            [getChannelName('_BACK_TO_START_DASHBOARD_PRODUCT_DETAIL')]: {
              bind: 'resetCollapsedStep'
            },
            [getChannelName('_SET_PRODUCTS_LIST')]: {
              bind: 'products'
            },
            selected_accounts_blue: {
              bind: 'selected'
            },
            global_equity_error_navigate_back: {
              bind: 'resetAllProducts'
            },
            navigation_to_codi: {
              bind: 'reset'
            },
            transfers_reset: {
              bind: 'resetAllProducts'
            }
          },
          out: {
            [getChannelName('_REGISTER_STEP_PRODUCT_SELECTOR')]: {
              bind: 'register-step'
            },
            [getChannelName('_DONT_CHANGE_PRODUCT_SELECTED')]: {
              bind: 'dont-change-and-continue'
            },
            [getChannelName('_COLLAPSE_OTHER_STEP')]: {
              bind: 'change-step-state'
            },
            [getChannelName('_ON_SENDER_PRODUCT_SELECTED')]: {
              bind: 'on-change-product-selected'
            },
            [getChannelName('_PRESELECTED_EQUITY_RECEIVER')]: {
              bind: 'on-selected-change'
            },
            [getChannelName('_VIEW_PRODUCTS_MODAL')]: {
              bind: 'view-all'
            },
            [getChannelName('_CHANGE_AND_RESET')]: {
              bind: 'origin-changed'
            },
            [getChannelName('_CHANGE_PRODUCT_SELECTOR_SHOW_ALERT')]: {
              bind: 'change-product-selector-show-alert'
            },
            transfers_analytics_reuse_transfers_list_summary_continue: {
              bind: 'change-pressed'
            }
          }
        }
      },
      propertiesSpherica: {
        visibleChars: 4
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-step-recipient-selector',
      tagSpherica: 'cells-step-recipient-selector-spherica',
      type: 'UI',
      properties: {
        id: 'transfer-destination',
        className: 'transfer',
        visibleChars: 5,
        noReset: true,
        stepTitle: `glomo-transfer-recipient-selector-title${sphericaSuffix}`,
        itemsOrder: ORDERITEM,
        hideMyAccounts: true,
        localCurrency: LOCAL_CURRENCY,
        showContactBtnList: true,
        showAccountsLinkTop: true,
        changeLabel: `glomo-transfer-product-selector-change${sphericaSuffix}`,
        changeSourceButtonLabel: 'glomo-transfer-step-recipient-selector-change-recipient-button-label',
        avatarIsNotAlwaysNeeded: true,
        hideAddService: true,
        showServiceLink: true,
        hideContactList: true,
        serviceLinkListValid: true,
        optionsDisabled: true,
        noTitleForce: true,
        showList: true,
        loadingItems: true,
        serviceLinkHideItemImages: true,
        noResultsMessagePicture: './images/sustainability/Empty-State-Day.svg',
        noResultsMessageTitle: 'bbva-reuseoperations-list-no-items-list',
        myAccountsLabelKey: 'glomo-transfer-recipient-selector-my-accounts-and-cards',
        showContactsBtnIcon: 'coronita:like',
        formatMovements: 'services-list',
        serviceLinkIconList: 'coronita:expand',
        headingTitle: 'cells-avatar-item-reuse-operation-title',
        newRecipientLabelKeyDescription: 'glomo-transfer-step-recipient-selector-description-button-new',
        cellsConnections: {
          in: {
            [getChannelName('init_page')]: {
              bind: 'initialize'
            },
            [getChannelName('_SET_MY_PRODUCTS')]: {
              bind: 'products'
            },
            [getChannelName('_SET_SELECTED_PRODUCT_RECEIVER')]: {
              bind: 'onProductSelected'
            },
            [getChannelName('_SET_COLLAPSED_AVATAR_DATA')]: {
              bind: 'recipientSelected'
            },
            [getChannelName('_ON_CHOOSE_ANOTHER_CONTACT')]: {
              bind: 'uncached'
            },
            [getChannelName('_SET_DISABLED_OPTIONS_BUTTONS')]: {
              bind: 'setProperties'
            },
            [getChannelName('_ON_ACCEPT_REVIEW_SECTION')]: {
              bind: 'collapsed'
            },
            [getChannelName('_SET_RECIPIENT_BEHAVIOUR')]: {
              bind: 'collapsed'
            },
            [getChannelName('_SET_MAX_STEPS_PROPERTY')]: {
              bind: 'maxSteps'
            },
            [getChannelName('_SET_RECIPIENT_SELECTOR_STEP_PROPERTIES')]: {
              bind: 'setProperties'
            },
            [getChannelName('_RESET_RECIPIENT_SELECTOR')]: {
              bind: 'reset'
            },
            [getChannelName('_CONTINUE_GOOGLE_ASSISTANT')]: {
              bind: 'active'
            },
            [getChannelName('_DISABLED_TRANSFER_DESTINATIONS')]: {
              bind: 'active'
            },
            [getChannelName('_PRE_SELECTED_EQUITY_ACCOUNT')]: {
              bind: 'initWithDefaultProductSelected'
            },
            [getChannelName('_PRE_SELECTED_EQUITY_ACCOUNT_DISABLED_CHANGE_BUTTON')]: {
              bind: 'disableChange'
            },
            [getChannelName('_EQUITY_UNCACHED_PRE_SELECTED_RECEIVER')]: {
              bind: 'uncached'
            },
            reuse_operation_list_formated: {
              bind: 'listItems'
            },
            reuse_operation_list_max_items: {
              bind: 'maxItems'
            },
            reuse_operation_list_contact_list: {
              bind: 'hideContactList'
            },
            reuse_operation_list_not_valid: {
              bind: 'showServiceLink'
            },
            reuse_operation_list_spinner: {
              bind: 'setSpinnersLoaded'
            },
            is_futura_active: {
              bind: 'fromFutura'
            },
            account_selected_for_tranfer_blue: {
              bind: 'accountsBlueListeningMode'
            },
            modal_selected_blue: {
              bind: 'isBlueFlow'
            },
            transfers_reset: {
              bind: 'reset-transfers'
            }
          },
          out: {
            disable_change_to_futura: {
              bind: 'from-futura-is-active'
            },
            [getChannelName('_DISABLE_MY_ACCOUNTS')]: {
              bind: 'disable-my-accounts'
            },
            [getChannelName('_REGISTER_STEP_RECIPIENT_SELECTOR')]: {
              bind: 'register-step'
            },
            [getChannelName('_GO_NEXT_STEP')]: {
              bind: 'recipient-selected-changed'
            },
            [getChannelName('validates_product_type')]: {
              bind: 'recipient-selected-changed'
            },
            [getChannelName('_GO_NEXT_AND_CONTINUE_STEP')]: {
              bind: 'dont-change-and-continue'
            },
            [getChannelName('_VIEW_MY_DESTINATION_PRODUCTS')]: {
              bind: 'view-all'
            },
            [getChannelName('_COLLAPSE_OTHER_STEP')]: {
              bind: 'change-pressed'
            },
            [getChannelName('_CHANGE_STEP_STATE_SHOW_ALERT')]: {
              bind: 'change-recipient-selector-show-alert'
            },
            [getChannelName('_COLLAPSE_MANUAL_STEP')]: {
              bind: 'recipient-selector-change-recipient'
            },
            [getChannelName('_SHOW_SAVED_CONTACTS_MODAL')]: {
              bind: 'show-saved-contacts',
              link: {
                page: 'contactsAgenda'
              }
            },
            [getChannelName('_ON_GET_SAVED_CONTACTS')]: {
              bind: 'show-saved-contacts'
            },
            [getChannelName('_VALIDATE_OPEN_NEW_RECIPIENT_MODAL')]: {
              bind: 'new-recipient'
            },
            [getChannelName('_ANALYTIC_VIEW_MY_DESTINATION_PRODUCTS')]: {
              bind: 'view-all'
            },
            reuse_operation_selected: {
              bind: 'open-reuse-operation'
            },
            transfers_analytic_reuse_transfers: {
              bind: 'open-reuse-operation'
            },
            reuse_operation_list_selected_recipient: {
              bind: 'set-selected'
            },
            reuse_operation_open_modal_more_operations: {
              bind: 'searcher-view-all'
            },
            reuse_operation_list_reques_transactions: {
              bind: 'link-clicked'
            }
          }
        }
      },
      propertiesSpherica: {
        visibleChars: 4,
        customAvatar: true,
        hideAvatar: true,
        filledClassIconMessageDefault: ''
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-step-foreign-currency-operation',
      tagSpherica: 'glomo-step-foreign-currency-operation-spherica',
      type: 'UI',
      properties: {
        id: 'transfer-amount',
        className: 'refactor-transfers',
        stepTitle: `glomo-transfer-import${sphericaSuffix}`,
        changeLabel: `glomo-transfer-product-selector-change${sphericaSuffix}`,
        label: `glomo-step-foreign-currency-operation-amount${sphericaSuffix}`,
        limitedAmountAvailableMessage: `cells-enter-limited-amount-available${sphericaSuffix}`,
        limitedAmountAvailableOfTransactionMessage: 'cells-enter-limited-amount-available-of-transaction-after-transfer',
        language: getLanguage(),
        currency: LOCAL_CURRENCY,
        localCurrency: LOCAL_CURRENCY,
        max: MAX_DIGITS,
        numeralPositiveOnly: true,
        notInitializeWithAttached: true,
        hideAvailableBalance: false,
        showCurrenciesInfo: false,
        simpleMaxProductMessage: false,
        currencyList: AVAILABLE_TRANSFER_CURRENCIES,
        ignoreNotSameCurrency: true,
        hiddenMinLimit: true,
        showMaxValueMssgFocus: false,
        showLastValidValue: true,
        showExchangeSection: true,
        hideCellsRadioGroup: true,
        hideHeading: true,
        maxCharacters: 20,
        disableFlagSelector: true,
        hideMinValueMessage: true,
        hideAmountInMinOrMaxErrorMessage: true,
        minValue: 0.01,
        minValueErrorMessage: 'glomo-transfer-enter-amount-min-value-error-message',
        currencySelectDisabled: true,
        majorVersionThree: true,
        hideCurrencySelectedFlag: true,
        iconMessageType: 'info-dark',
        conversionText: '',
        cellsConnections: {
          in: {
            [getChannelName('init_page')]: {
              bind: 'initialize'
            },
            [getChannelName('message_opinator_true')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_ACTIVE_ICON_FEES_MESSAGE')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_ENTER_AMOUNT_PROPERTIES')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_COLLAPSE_EXCHANGE_RATES_STEP')]: {
              bind: 'collapsed'
            },
            [getChannelName('_SET_THIS_STEP_THREE')]: {
              bind: 'getThisDetailForTimeOut'
            },
            [getChannelName('_RESET_ENTER_AMOUNT')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_AMOUNT_IN_ORIGIN_CURRENCY')]: {
              bind: 'amountInOriginCurrency'
            },
            [getChannelName('_SET_MAX_STEPS_PROPERTY')]: {
              bind: 'maxSteps'
            },
            [getChannelName('_SET_CURRENCY_OPERATIONS_STEP_PROPERTIES')]: {
              bind: 'currentStep'
            },
            [getChannelName('_SEND_AMOUNT')]: {
              bind: 'setAmount'
            },
            [getChannelName('_CONTINUE_GOOGLE_ASSISTANT')]: {
              bind: 'continue'
            },
            [getChannelName('_EQUITY_UNCACHED_PRE_SELECTED_RECEIVER_AMOUNT_ACTIVE')]: {
              bind: 'active'
            },
            TRANSFERS_SET_ICON_MESSAGE_PROPERTY: {
              bind: 'iconMessage'
            },
            TRANSFERS_SET_ICON_MESSAGE_TYPE_PROPERTY: {
              bind: 'iconMessageType'
            },
            TRANSFERS_SET_PROPERTIES_LIMITED_AMOUNT_CLASS: {
              bind: 'extraLimitedAmountClass'
            }
          },
          out: {
            [getChannelName('_REGISTER_STEP_AMOUNT')]: {
              bind: 'register-step'
            },
            [getChannelName('_GO_NEXT_STEP')]: {
              bind: 'step-continue'
            },
            [getChannelName('_COLLAPSE_OTHER_STEP')]: {
              bind: 'change-step-state'
            },
            [getChannelName('_SET_SELECTED_AMOUNT')]: {
              bind: 'step-set-value'
            },
            [getChannelName('_LIMITED_AMOUNT_FOCUS_OUT')]: {
              bind: 'focus-out'
            },
            [getChannelName('_RECEIVER_SECTION_ON_ICON_CLICK')]: {
              bind: 'receiver-section-on-icon-click'
            },
            [getChannelName('_SET_ALERT_PROPERTIES')]: {
              bind: 'change-step-state-receiver'
            },
            [getChannelName('_SET_THIS_DETAIL_FOR_TIMEOUT')]: {
              bind: 'detail-this-timeout'
            },
            [getChannelName('_INPUT_FOCUS_IN')]: {
              bind: 'amount-input-focus'
            },
            [getChannelName('_INPUT_FOCUS_OUT')]: {
              bind: 'dispatched-blur'
            },
            [getChannelName('_INPUT_FOCUS_OUT_RESET_STATUS_BAR')]: {
              bind: 'dispatched-blur'
            },
            [getChannelName('_address')]: {
              bind: 'glomo-foreign-currency-link-clicked',
              analytics: ANALYTICS.boostInternationalTransfers,
              link: {
                page: 'internationalTransfersPanel'
              }
            },
            transfers_analytics_reuse_transfers_list_summary_continue: {
              bind: 'change-pressed'
            },
            transfers_update_amount_futura: {
              bind: 'step-set-value'
            },
            transfers_VALIDATE_AMOUNT_CONCEPT_COMPLETED: {
              bind: 'step-continue'
            }
          }
        }
      },
      propertiesSpherica: {
        limitedAmountClass: 'refactor-transfers-spherica',
        remainingClass: 'transfer-amount-spherica',
        classBelowAmountCollapsed: 'message-input',
        showTextRightIcon: true,
        newCellsConnections: {
          add: {
            out: {
              transfers__COMPLET_TRANSFER: {
                bind: 'dispatched-blur'
              },
              transfers__INPUT_FOCUS_IN: {
                bind: 'foreign-currency-operation-input-clicked'
              }
            }
          }
        }
      }
    },
    {
      tag: 'bbva-dataprovider-banxico',
      familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
      render: 'litElement',
      zone: 'app__transactional',
      type: 'DM',
      properties: {
        host: CONFIG.globalServices.host,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        native: CONFIG.native || false,
        apiVersion: CONFIG.globalServices.versions.banxico,
        cellsConnections: {
          in: {
            [getChannelName('get_bank_record')]: {
              bind: 'bankRecordGet'
            }
          },
          out: {
            [getChannelName('success_get_bank_record')]: {
              bind: 'get-bank-record-success'
            },
            [getChannelName('error_get_bank_record')]: {
              bind: 'get-bank-record-error'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-step-concept',
      tagSpherica: 'cells-step-concept-spherica',
      type: 'UI',
      properties: {
        id: 'transfer-concept',
        lastStep: true,
        active: false,
        title: `glomo-transfer-concept${sphericaSuffix}`,
        changeLabel: `glomo-transfer-product-selector-change${sphericaSuffix}`,
        stepTitle: `glomo-transfer-concept${sphericaSuffix}`,
        conceptLabel: 'glomo-transfer-generate-internal-optional-concept-label',
        showReference: true,
        showConceptLabel: true,
        labelClass: 'label-normal',
        referenceClass: 'space',
        conceptClass: 'concept-in-line',
        maxLengthReference: MAX_REFERENCE_DIGITS,
        allowedCharsReference: '^[0-9]*$',
        allowedValue: '[0-9]{6,7}',
        externalReference: moment().format('DDMMYY[0]'),
        conceptName: 'glomo-transfer-generate-interbank-transfer-response-parse-data-top-info-0-key',
        referenceName: 'glomo-transfer-concept-reference',
        selectLabel: 'cells-step-concept-transfer-reason-type-placeholder',
        isRequired: false,
        notInitializeWithAttached: true,
        allowedChars: '^[-_a-zñA-ZÑ0-9 ]*$',
        showValidationMessage: false,
        autoValidate: true,
        errorMessage: 'glomo-transfer-reference-error-message',
        referenceLimit: true,
        referenceMinLength: 6,
        preventSpaceStart: true,
        inputMode: 'numeric',
        cellsConnections: {
          in: {
            [getChannelName('init_page')]: {
              bind: 'initialize'
            },
            [getChannelName('_SET_SHOW_REFERENCE_CONCEPT')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_MAX_STEPS_PROPERTY')]: {
              bind: 'maxSteps'
            },
            [getChannelName('_SET_CONCEPT_STEP_PROPERTIES')]: {
              bind: 'currentStep'
            },
            [getChannelName('_EQUITY_SHOW_REFERENCE')]: {
              bind: 'showReference'
            }
          },
          out: {
            [getChannelName('_REGISTER_STEP_CONCEPT')]: {
              bind: 'register-step'
            },
            [getChannelName('_GO_NEXT_STEP')]: {
              bind: 'continue-pressed'
            },
            [getChannelName('_CONCEPT_CHANGED')]: {
              bind: 'continue-pressed'
            },
            [getChannelName('_SET_CONSUMER_SERVICE_FEES')]: {
              bind: 'continue-pressed'
            },
            [getChannelName('_COLLAPSE_OTHER_STEP')]: {
              bind: 'change-step-state'
            },
            [getChannelName('_SET_STEP_ID_AND_RESET')]: {
              bind: 'change-step-state'
            },
            [getChannelName('_CONCEPT_STEP_STATE_CHANGED')]: {
              bind: 'change-step-state'
            },
            [getChannelName('_COMPLET_TRANSFER')]: {
              bind: 'continue-pressed'
            },
            [getChannelName('_INPUT_FOCUS_IN')]: {
              bind: 'cells-molecule-input-focus'
            },
            [getChannelName('_INPUT_FOCUS_OUT')]: {
              bind: 'cells-molecule-input-blur'
            },
            [getChannelName('_INPUT_FOCUS_OUT_RESET_STATUS_BAR')]: {
              bind: 'cells-molecule-input-blur'
            },
            transfers_analytics_reuse_transfers_list_summary_continue: {
              bind: 'change-step-state'
            },
            transfers_COLLAPSED_CHANGED: {
              bind: 'collapsed-changed'
            },
            transfers_VALIDATE_AMOUNT_CONCEPT_COMPLETED: {
              bind: 'continue-pressed'
            }
          }
        }
      },
      newCellsConnections: {
        add: {
          out: {
            transfers__INPUT_FOCUS_IN: {
              bind: 'continue-pressed'
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      tag: 'cells-modal-selector',
      tagSpherica: 'cells-modal-selector-spherica',
      type: 'UI',
      properties: {
        hideCheckIcon: true,
        noFocusOrigin: true,
        selected: null,
        cellsConnections: {
          in: {
            [getChannelName('_GET_RECIPIENT_MAGIC_QUERY')]: {
              bind: 'reset'
            },
            [getChannelName('_SET_LIST_OF_BANKS')]: {
              bind: 'items'
            },
            transfers__OPEN_LIST_BANK: {
              bind: 'open'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'close'
            },
            restore_steps_after_transfer_success: {
              bind: 'close'
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'close'
            },
            global_equity_error_navigate_back: {
              bind: 'close'
            }
          },
          out: {
            [getChannelName('_ITEM_SELECTED_CHANGED')]: {
              bind: 'item-selected-changed'
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      tag: 'cells-modal-selector',
      tagSpherica: 'cells-modal-selector-spherica',
      type: 'UI',
      properties: {
        hideCheckIcon: true,
        noFocusOrigin: true,
        selected: null,
        items: [{
          id: 'DEBIT_CARD',
          name: 'cells-product-more-info-debit-card-name'
        },
        {
          id: 'CREDIT_CARD',
          name: 'cells-product-more-info-card-name'
        }],
        cellsConnections: {
          in: {
            [getChannelName('_GET_RECIPIENT_MAGIC_QUERY')]: {
              bind: 'reset'
            },
            transfers__OPEN_LIST_PRODUCT_TYPE: {
              bind: 'open'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'close'
            },
            restore_steps_after_transfer_success: {
              bind: 'close'
            },
            global_equity_error_navigate_back: {
              bind: 'close'
            }
          },
          out: {
            transfers__ITEM_SELECTED_TYPE: {
              bind: 'item-selected-changed'
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      tag: 'cells-modal-new-recipient-selector',
      tagSpherica: 'cells-modal-new-recipient-selector-spherica',
      type: 'UI',
      properties: {
        style: '--cells-molecule-input-input-padding-left: 1rem',
        className: 'query-section-icon query-section-border',
        querySectionClass: 'section-overflow-hidden',
        hideDateModal: true,
        iconPrimary: 'coronita:myprofile',
        iconVisibility: 'always',
        iconAction: 'toggle',
        iOSFixedHeader: true,
        extraIcon: 'coronita:close',
        extraIconAction: 'clear',
        visibilityExtraIcon: 'always',
        iconToggled: 'coronita:myprofile',
        showCorrectBtnIcon: 'coronita:correct',
        enableScanButton: true,
        cellsConnections: {
          in: {
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            },
            [getChannelName('_SET_REVIEW_SECTION_PROPERTIES')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_RESPONSE_MAGIC_QUERY')]: {
              bind: 'setResponseMagicQuery'
            },
            [getChannelName('_OPEN_MODAL_NEW_RECIPIENT')]: {
              bind: 'opened'
            },
            [getChannelName('_SET_PROPERTIES_MAGIC_QUERY')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_INPUT_ERROR_MESSAGE')]: {
              bind: 'invalidInputErrorMessage'
            },
            [getChannelName('_SET_INVALID_INPUT')]: {
              bind: 'invalidInput'
            },
            [getChannelName('_CLOSE_REVIEW_SECTION_MODAL')]: {
              bind: 'close'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'close'
            },
            restore_steps_after_transfer_success: {
              bind: 'close'
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'close'
            },
            CONTACT_AGENDA_FROM_NATIVE: {
              bind: 'contactList'
            },
            transfer_set_contact_mobile_phone: {
              bind: 'inputValue'
            },
            cancel_out_of_schedule_alert: {
              bind: 'close'
            },
            [getChannelName('_ON_CLICK_AVATAR_ITEM_DIMO_ENROLLMENT')]: {
              bind: 'close'
            },
            transfers_close_modal_new_recipient: {
              bind: 'close'
            },
            global_equity_error_navigate_back: {
              bind: 'close'
            },
            blue_transfers_set_name_receiver: {
              bind: 'recipientInputValue'
            },
            blue_transfers_set_receiver_input: {
              bind: 'inputValue'
            }
          },
          out: {
            [getChannelName('_GET_RECIPIENT_MAGIC_QUERY')]: {
              bind: 'magic-query'
            },
            [getChannelName('_INPUT_VALUE_CHANGED')]: {
              bind: 'input-value-changed'
            },
            [getChannelName('_ON_CHOOSE_ANOTHER_CONTACT')]: {
              bind: 'on-click-secondary-button'
            },
            [getChannelName('_ON_ACCEPT_REVIEW_SECTION')]: {
              bind: 'recipient-end'
            },
            [getChannelName('_ON_ACCEPT_REVIEW_SECTION_SAVED_CONTACT')]: {
              bind: 'on-accept-review-section-saved-contact'
            },
            [getChannelName('_SELECT_MODAL_NEW_RECIPIENT_CLICKED')]: {
              bind: 'open-modal-selector'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            transfer_open_contact_list: {
              bind: 'get-contact-list-from-native',
              'forward-to-native': true
            },
            get_contact_from_contact_list: {
              bind: 'cells-molecule-input-icon-tap'
            },
            [getChannelName('reset_value_searched')]: {
              bind: 'cells-modal-new-recipient-selector-reseted'
            },
            [getChannelName('_ON_CLICK_AVATAR_ITEM_DIMO_ENROLLMENT')]: {
              bind: 'on-click-avatar-item-dimo-enrollment'
            },
            [getChannelName('_ON_CLICK_AVATAR_ITEM_SAVED_CONTACT')]: {
              bind: 'on-click-avatar-item-saved-contact'
            },
            on_click_avatar_item_receiver_contact: {
              bind: 'on-click-avatar-item-receiver-contact'
            },
            transfers_reset: {
              bind: 'reset-transfers'
            },
            navigation_to_codi: {
              bind: 'redirect-to-codi',
              link: {
                page: 'codiQrScanner',
                skipHistory: true
              }
            }
          }
        }
      },
      propertiesSpherica: {
        className: 'query-section-icon',
        avatar: 'custom',
        headingWithoutBold: true,
        extraIcon: '',
        recipientNameTitle: 'glomo-transfer-review-section-beneficiary-name-title-label-spherica',
        showCorrectBtnIcon: 'coronita:right',
        bottomInfoMessage: 'cells-modal-new-recipient-selector-recipient-info-text-security-code-spherica',
        contactInfoMessage: 'cells-modal-new-recipient-selector-recipient-contact-info-message-spherica',
        infoMessagePrimaryInputClass: 'message-input',
        showCustomCheckAndInput: true,
        customCheckAndInputClass: 'custom-container',
        hideMessageDestinaryAlreadySaved: true
      }
    },
    {
      zone: 'app__transactional',
      tag: 'cells-product-selector-modal',
      tagSpherica: 'cells-product-selector-modal-spherica',
      type: 'UI',
      properties: {
        id: 'first-products-modal',
        className: 'group-accounts group-space',
        listTitle: 'glomo-transfer-title-group',
        groupByProperty: 'family',
        iOSFixedHeader: nativeIos,
        modalTitle: `glomo-transfer-recipient-selector-my-accounts-and-cards${sphericaSuffix}`,
        localCurrency: getLocalCurrency(),
        visibleChars: 5,
        showCloseModalButton: !isSpherica,
        closeButtonLabel: 'glomo-transfer-product-selector-close',
        errorMessage: `glomo-transfer-product-balance-error-message${sphericaSuffix}`,
        customErrorMessageAdditionalLink: 'preLink',
        cellsConnections: {
          in: {
            [getChannelName('_SET_LIST_ALL_PRODUCTS')]: {
              bind: 'treatProducts'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'close'
            },
            restore_steps_after_transfer_success: {
              bind: 'close'
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'close'
            },
            global_equity_error_navigate_back: {
              bind: 'close'
            }
          },
          out: {
            [getChannelName('_SET_SELECTED_PRODUCT_SENDER')]: {
              bind: 'select-product'
            },
            [getChannelName('_SET_SELECTED_SENDER_PRODUCT')]: {
              bind: 'select-product'
            }
          }
        }
      },
      propertiesSpherica: {
        visibleChars: 4
      }
    },
    {
      zone: 'app__transactional',
      tag: 'cells-product-selector-modal',
      tagSpherica: 'cells-product-selector-modal-spherica',
      type: 'UI',
      properties: {
        id: 'second-products-modal',
        className: 'group-accounts group-space',
        listTitle: 'glomo-transfer-title-group',
        groupByProperty: 'family',
        modalTitle: `glomo-transfer-recipient-selector-my-accounts-and-cards${sphericaSuffix}`,
        localCurrency: 'MXN',
        visibleChars: 5,
        iOSFixedHeader: true,
        showCloseModalButton: !isSpherica,
        closeButtonLabel: 'glomo-transfer-product-selector-close',
        errorMessage: 'glomo-transfer-product-balance-error-message',
        customErrorMessageAdditionalLink: 'preLink',
        cellsConnections: {
          in: {
            [getChannelName('_VIEW_MY_DESTINATION_PRODUCTS')]: {
              bind: 'treatProducts'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'close'
            },
            restore_steps_after_transfer_success: {
              bind: 'close'
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'close'
            },
            global_equity_error_navigate_back: {
              bind: 'close'
            }
          },
          out: {
            [getChannelName('_VALIDATE_OWN_PRODUCT_SELECTED')]: {
              bind: 'select-product'
            },
            [getChannelName('_GO_NEXT_STEP')]: {
              bind: 'select-product'
            }
          }
        }
      },
      propertiesSpherica: {
        visibleChars: 4
      }
    },
    {
      zone: 'app__transactional',
      tag: 'cells-product-selector-modal',
      tagSpherica: 'cells-product-selector-modal-spherica',
      type: 'UI',
      properties: {
        id: 'reuse-operations-selector-modal',
        className: 'group-accounts group-space',
        listTitle: 'glomo-transfer-title-group',
        modalTitle: 'bbva-reuseoperations-list-modal-title',
        localCurrency: getLocalCurrency(),
        visibleChars: 5,
        iOSFixedHeader: nativeIos,
        showCloseModalButton: true,
        manageScrollToBottom: true,
        closeButtonLabel: 'glomo-transfer-product-selector-close',
        cellsConnections: {
          in: {
            reuse_operation_list_all_formated: {
              bind: 'treatProducts'
            },
            transfers_reset_and_leave_process: {
              bind: 'close'
            },
            reuse_operation_list_request_more_transactions_button_status: {
              bind: 'showCloseModalButton'
            },
            reuse_operation_list_request_more_transactions_spinner_status: {
              bind: 'showSpinner'
            }
          },
          out: {
            reuse_operation_list_selected_recipient: {
              bind: 'select-product'
            },
            reuse_operation_list_modal_request_more_movemnts: {
              bind: 'selector-modal-scrolled-to-bottom'
            }
          }
        }
      }
    },
    {
      zone: 'app__confirm',
      tag: 'cells-operation-summary',
      tagSpherica: 'cells-operation-summary-spherica',
      type: 'UI',
      properties: {
        id: 'budgetSubmitCreate',
        className: 'comission-text comission-amount-spacing',
        classCommission: 'cells-summary-view--commission-text',
        localCurrency: LOCAL_CURRENCY,
        buttonLabel: `glomo-transfer-btn-review-and-authorize-continue${sphericaSuffix}`,
        showAddition: true,
        summaryViewTitle: `glomo-transfer-summary-view-title${sphericaSuffix}`,
        message: 'cells-icon-message-message-not-load-total-operation',
        messageButtonLabel: 'glomo-transfer-recipient-selector-exchange-rates-accept',
        cellsConnections: {
          in: {
            [getChannelName('_SET_SUMMARY_DATA')]: {
              bind: 'operation'
            },
            transfers_on_transfer_unavailible: {
              bind: 'operation'
            }
          },
          out: {
            [getChannelName('_TICKET_SAVE')]: {
              bind: 'summary-closed'
            },
            transfers_analytics_reuse_transfers_list_summary_continue: {
              bind: 'summary-closed'
            }
          }
        }
      },
      propertiesSpherica: {
        primaryButtonClass: 'positive'
      }
    },
    {
      zone: 'app__main',
      type: 'UI',
      tag: 'bbva-notification-toast',
      familyPath: '@bbva-web-components/bbva-notification-toast',
      familyPathSpherica: '@bbva-spherica-components/bbva-notification-toast',
      render: 'litElement',
      properties: {
        type: 'success',
        iconExplainer: 'coronita:correct',
        fixedBottom: true,
        duration: 3000,
        autoHide: true,
        cellsConnections: {
          in: {
            transfers_show_notification_toast: {
              bind: 'show'
            },
            transfers_set_text_notification_toast: {
              bind: isSpherica ? 'alertText' : 'simpleLinkText'
            }
          }
        }
      },
      propertiesSpherica: {
        iconExplainer: 'spherica:right',
        className: 'u-margin--1 u-margin-bottom--2 u-max-width--2'
      }
    },
    {
      zone: 'app__overlay',
      type: 'UI',
      tag: 'bbva-help-modal',
      tagSpherica: 'bbva-help-modal-spherica',
      familyPath: '@bbva-web-components/bbva-help-modal',
      familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
      render: 'litElement',
      container: true,
      attributes: {
        'justify-content': 'left'
      },
      properties: {
        id: 'confirmModalExperienceTransfers',
        fullHeight: true,
        fixedFooter: true,
        headerType: 'modal-three-level',
        headerText: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-error-title',
        className: 'on-boarding-welcome-alert-manager',
        headerLeftIconAriaLabel: 'padlock',
        cellsConnections: {
          in: {
            global_transfers_modal_reject: {
              bind: 'open'
            },
            global_operations_modal_aric_close: {
              bind: 'close'
            },
            global_operations_modal_aric_close_call: {
              bind: 'close'
            },
            [getChannelName('_DISMISS_BBVA_HELP_MODAL_ALERT')]: {
              bind: 'close'
            }
          },
          out: {
            global_operations_modal_aric_send_exit_to_header: {
              bind: 'help-modal-header-right-primary-click',
              backStep: true
            },
            global_operations_modal_aric_close: {
              bind: 'header-main-close-icon-click'
            },
            global_operations_modal_aric_close_call: {
              bind: 'help-modal-close'
            }
          }
        }
      },
      propertiesSpherica: {
        justifyContent: 'center',
        className: 'error',
        titleIcon: 'spherica:warning',
        alignment: 'center',
        modalType: 'error',
        centerTextAlignment: 'center',
        closeLabel: 'bbva-help-modal-close-button'
      }
    },
    {
      zone: 'confirmModalExperienceTransfers.slot-content',
      type: 'UI',
      tag: 'bbva-clip-microillustration',
      tagSpherica: 'bbva-clip-microillustration-spherica',
      familyPath: '@bbva-web-components/bbva-clip-microillustration',
      familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
      render: 'litElement',
      properties: {
        className: 'no-padding u-display--table u-margin--left u-margin-top--0 u-margin--1 u-text--left',
        microillustration: 'error',
        size: 'L'
      },
      propertiesSpherica: {
        hidden: true
      }
    },
    {
      zone: 'confirmModalExperienceTransfers.slot-content',
      type: 'UI',
      tag: 'bbva-type-text',
      tagSpherica: 'bbva-type-text-spherica',
      familyPath: '@bbva-spherica-components/bbva-type-text',
      familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
      render: 'litElement',
      properties: {
        text: 'alert-TRANSFER-ERROR-message',
        fontWeight: '500',
        size: 'XL',
        alignment: 'left',
        className: 'u-margin--1 u-margin-top--0'
      },
      propertiesSpherica: {
        tag: 'span',
        size: '3XL',
        fontType: 'title-secondary',
        alignment: 'center'
      }
    },
    {
      zone: 'confirmModalExperienceTransfers.slot-content',
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
      },
      propertiesSpherica: {
        size: 'M',
        tag: 'span',
        fontType: 'body',
        alignment: 'center'
      }
    },
    {
      zone: 'confirmModalExperienceTransfers.slot-footer',
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
            global_transfers_to_call: {
              bind: 'click'
            }
          }
        }
      },
      propertiesSpherica: {
        size: 'M',
        fullwidth: true,
        alignment: 'center'
      }
    }
  ];

  const DMS = [
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-transfers-mx-dm',
      familyPath: 'glomo-transfers-dm',
      properties: {
        host: CONFIG.globalServices.host,
        requiredToken,
        contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
        authenticationType: CONFIG.globalServices.security.headers.authenticationType,
        receiversApiVersion: '1',
        catalogsApiVersion: CONFIG.globalServices.versions.catalogs,
        exchangeRatesApiVersion: '1',
        transferApiVersion: CONFIG.globalServices.versions.transfer,
        language: getLanguage(),
        native: CONFIG.native,
        localCurrency: LOCAL_CURRENCY,
        otpId: PAGENAME,
        errorAlertImagePath: './images/errors/error.svg',
        speedometerHighImagePath: './images/transfers/speedometer-high.svg',
        enablePrepareFeedback: true,
        setContactsStandInHeaders: !CONFIG.native,
        isNativeiOS: nativeIos,
        limitCharacterAlias: 10,
        avoidSendAmountCurrencyInConcept: true,
        isSortBankList: true,
        standInTransfersFlags: {
          'spei': 'glomo.standin.transfers.alwaysOn',
          'bbva': 'glomo.standin.transfers.internal',
          'bbva-tdc': 'glomo.standin.transfers.internal.tdc'
        },
        cellsConnections: {
          in: {
            RESET_LIST_CONTACTS_FLAG: {
              bind: 'isContactListCalled'
            },
            RESET_FLAG_EQUITY_CONTRACT: {
              bind: 'isPatrimonial'
            },
            navigation_to_equity_tranfers: {
              bind: 'isContractPatrimonial'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            },
            codicel_peer_to_peer_send_navigate_codicel_review: {
              bind: 'exitFromExpensesGroup'
            },
            navigate_expenses_group_to_transfer: {
              bind: 'entryFromExpensesGroup'
            },
            global_storage_get_loginData_success: {
              bind: 'loginDataLocalStoreSuccess'
            },
            global_dimo_transfer_enable: {
              bind: 'dimoFeature'
            },
            global_cache_channel: {
              bind: 'globalAccountsNativeProp'
            },
            global_dashboard_cards_for_deeplink: {
              bind: 'globalCards'
            },
            global_dashboard_cards: {
              bind: 'globalCards'
            },
            dashboard_accounts: {
              bind: 'globalAccounts'
            },
            dashboard_customer_email: {
              bind: 'accountEmail'
            },
            global_user_id: {
              bind: 'clientId'
            },
            set_contact_from_contact_list: {
              bind: 'parseMobileContact'
            },
            global_feature_stand_in_status: {
              bind: 'standIn'
            },
            register_device: {
              bind: 'setDeviceId'
            },
            device_accesses_device_id: {
              bind: 'deviceId'
            },
            global_set_app_settings: {
              bind: 'publicSettings'
            },
            [getChannelName('_ON_SENDER_PRODUCT_SELECTED')]: {
              bind: 'selectedSender'
            },
            [getChannelName('_SET_SELECTED_PRODUCT_SENDER')]: {
              bind: 'senderProductDetail'
            },
            [getChannelName('_COLLAPSE_MANUAL_STEP')]: {
              bind: 'senderProductDetail'
            },
            NAVIGATION_REQUEST_SELECTED_ITEM: {
              bind: 'contactsAgendaResponse'
            },
            navigation_contacts_agenda_back_step: {
              bind: 'initPage'
            },
            SHOW_ALIAS_IN_USE_MODAL_ACCEPT: {
              bind: 'aliasInUseModalOnClickAccept'
            },
            [getChannelName('_LIMITED_AMOUNT_FOCUS_OUT')]: {
              bind: 'inputFocusOutExchangeRates'
            },
            [getChannelName('_SET_SELECTED_AMOUNT')]: {
              bind: 'finalAmountSelected'
            },
            [getChannelName('_CONCEPT_CHANGED')]: {
              bind: 'getConcept'
            },
            [getChannelName('SEND_TICKET_TO_TRANSFER')]: {
              bind: 'transfersSuccesPage'
            },
            app_step_three_analytics_transfers: {
              bind: 'transfersOperationData'
            },
            [getChannelName('_SET_CONSUMER_SERVICE_FEES')]: {
              bind: 'reviewAndAuthorize'
            },
            [getChannelName('_SET_TRANSFER_TYPE')]: {
              bind: 'transferType'
            },
            [getChannelName('_PARSE_GLOBAL_ACCOUNTS_AND_CARDS')]: {
              bind: 'initPage'
            },
            [getChannelName('_INIT_PAGE')]: {
              bind: 'initPageLocal'
            },
            [getChannelName('_SENDER_SELECTED_FROM_PRODUCT_DETAIL')]: {
              bind: 'selectedSender'
            },
            [getChannelName('_SET_SELECTED_RECEIVER')]: {
              bind: 'selectedReceiver'
            },
            [getChannelName('_VALIDATE_OWN_PRODUCT_SELECTED')]: {
              bind: 'onSelectOwnProduct'
            },
            [getChannelName('_DISPATCH_RECEIVERS_SERVICE')]: {
              bind: 'dispatchReceivers'
            },
            transfers_dispatch_receivers_reuse_operation_list: {
              bind: 'dispatchReceivers'
            },
            [getChannelName('_SET_DM_CONTACT_DETAIL')]: {
              bind: 'contactDetail'
            },
            [getChannelName('_DISPATCH_SAVE_CONTACT_SERVICE')]: {
              bind: 'getSaveContact'
            },
            [getChannelName('_SET_SAVED_CONTACT_DETAIL_DM')]: {
              bind: 'savedContactDetail'
            },
            [getChannelName('_SEND_EMAIL_SERVICE')]: {
              bind: 'getSaveContact'
            },
            [getChannelName('_SET_DM_ORIGIN_CURRENCY')]: {
              bind: 'originCurrency'
            },
            [getChannelName('_SET_DM_EXCHANGE_RATES_FLAG')]: {
              bind: 'exchangeRatesFlag'
            },
            [getChannelName('_SET_DM_FOREIGN_CURRENCY')]: {
              bind: 'foreignCurrency'
            },
            [getChannelName('_SET_DM_RELATIVE_VALUE')]: {
              bind: 'relativeValue'
            },
            [getChannelName('_SET_DM_TOTAL_AMOUNT')]: {
              bind: 'totalAmount'
            },
            [getChannelName('_SET_PROPERTIES_DM')]: {
              bind: 'setProperties'
            },
            [getChannelName('_SET_ENTRY_POINT')]: {
              bind: 'entryPoint'
            },
            [getChannelName('_SET_DM_CONCEPT')]: {
              bind: 'conceptValidated'
            },
            [getChannelName('_KEY_GOOGLE_ASSISTANT')]: {
              bind: 'assistantData'
            },
            EXIT_TRANSFERS_PAGE_ACCEPT: {
              bind: 'exit'
            },
            [getChannelName('_VALIDATE_OPEN_NEW_RECIPIENT_MODAL')]: {
              bind: 'addNewRecipient'
            },
            blue_transfers_open_receiver_modal: {
              bind: 'addNewRecipient'
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'exit'
            },
            global_stand_in_pending_transfers_info: {
              bind: 'exitOperative'
            },
            global_stand_in_spei_transfers_info_cancel: {
              bind: 'exitOperative'
            },
            global_stand_in_add_new_contact_transfers_info: {
              bind: 'exitOperative'
            },
            global_stand_in_unavailable_transfers_modal_exit: {
              bind: 'exitOperative'
            },
            [getChannelName('SUCCES_ON_SEND_NEW_CONTACT_NOTIFICATION')]: {
              bind: 'successOnSendNewContactNotification'
            },
            [getChannelName('request_operation_registries_error')]: {
              bind: 'errorOnSendNewContactNotification'
            },
            [getChannelName('settlement_request_success')]: {
              bind: 'parsedResponseTransfer'
            },
            [getChannelName('error_on_settlement')]: {
              bind: 'errorMakeOwnTransferForeignCurrency'
            },
            navigation_from_deep_link_to_operations: {
              bind: 'initPageDeeplink'
            },
            [getChannelName('high_risk_of_fraud')]: {
              bind: 'functionErrorHighRiskOfFraud'
            },
            global_transfers_to_call: {
              bind: 'callBBVALine'
            },
            [getChannelName('_OPEN_QUERY_SECTION_PROPERTIES')]: {
              bind: 'handleNewRecipient'
            },
            transfers_on_spei_availability_success: {
              bind: 'validateSpeiAvailability'
            },
            transfers_on_spei_availability_error: {
              bind: 'notifyInterbankTransferUnavailable'
            },
            global_mtu_exception_back_navigation: {
              bind: 'mtuFlag'
            },
            transfers_set_transfer_title: {
              bind: 'featureTitleName'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            },
            transfers__SET_ENTER_AMOUNT_PROPERTIES: {
              bind: 'inputFocusOutExchangeRates'
            },
            global_equity_error_navigate_back: {
              bind: 'exit'
            },
            global_storage_get_standInTransferCount_error: {
              bind: 'standInStorageResult'
            },
            global_storage_get_standInTransferCount_success: {
              bind: 'standInStorageResult'
            },
            transfers_disable_prepare_feedback_from_blue: {
              bind: 'enablePrepareFeedback'
            },
            global_mtu_navigation_confirm_limit: {
              bind: 'mtuMakePayment'
            },
            blue_transfers_review_and_authorize: {
              bind: 'validateAmountConcept'
            },
            transfers_COLLAPSED_CHANGED: {
              bind: 'isCollapsedConcept'
            },
            transfers_VALIDATE_AMOUNT_CONCEPT_COMPLETED: {
              bind: 'validateAmountConcept'
            }
          },
          out: {
            transfers_request_spei_availavility: {
              bind: 'get-banxico-spei-availability'
            },
            [getChannelName('_SET_PROPERTIES_NEW_RECIPIENT')]: {
              bind: 'set-properties-new-recipient'
            },
            [getChannelName('_OPEN_MODAL_NEW_RECIPIENT')]: {
              bind: 'open-modal-new-recipient'
            },
            global_alert_manager_open_with_settings: {
              bind: 'transfers-dm-modal-config'
            },
            [getChannelName('KEY_RECOVERY_EMAIL_OBTAINED')]: {
              bind: 'set-customer-contacts'
            },
            [getChannelName('_SET_LIST_OF_BANKS')]: {
              bind: 'set-list-of-banks'
            },
            [getChannelName('_SET_GLOBAL_ACCOUNTS_PARSED')]: {
              bind: 'set-global-accounts-parsed'
            },
            [getChannelName('_SET_GLOBAL_CARDS_PARSED')]: {
              bind: 'set-global-cards-parsed'
            },
            [getChannelName('_VALIDATE_PRODUCTS')]: {
              bind: 'validate-products'
            },
            [getChannelName('_SET_ENTER_AMOUNT_PROPERTIES')]: {
              bind: 'set-properties-enter-amount'
            },
            global_retry_error: {
              bind: 'retry-error'
            },
            [getChannelName('_SET_SUMMARY_DATA')]: {
              bind: 'set-data-summary-review-and-authorize'
            },
            ANALYTICS_APP_STEP_THREE: {
              bind: 'amount-and-currency-selected'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            sign_close_modal: {
              bind: 'close-sign-modal'
            },
            sign_modal_close_spinner: {
              bind: 'close-control-veil'
            },
            [getChannelName('_HUELLA_TRANSFERS_OTP')]: {
              bind: 'transfers-otp'
            },
            [getChannelName('success_redirect_to_expenses')]: {
              bind: 'redirect-success-to-expenses-group'
            },
            [getChannelName('_SET_TRANSFERS_SUCCESS_DATA')]: {
              bind: 'set-transfers-success-data'
            },
            dashboard_data_refresh_channel: {
              bind: 'reset-account-detail',
              'forward-to-native': true
            },
            global_refresh_dashboard_generic: {
              bind: 'reset-dashboard',
              'forward-to-native': true
            },
            [getChannelName('_SET_RECIPIENT_DISABLE_BUTTONS')]: {
              bind: 'set-recipient-disabled-buttons'
            },
            transfers_set_opx_saved_contacts: {
              bind: 'set-saved-contacts'
            },
            [getChannelName('_SET_OPX_RESPONSE_RECEIVERS')]: {
              bind: 'set-response-receivers'
            },
            [getChannelName('_SET_SUCCESSFUL_POST_CONTACT_RESPONSE')]: {
              bind: 'set-succesful-post-contact-response'
            },
            [getChannelName('_SET_SUCCESSFUL_POST_CONTACT_PRODUCT')]: {
              bind: 'successful-post-contact-product'
            },
            [getChannelName('_SET_SUCCESSFUL_EXCHANGE_RATES_RESPONSE')]: {
              bind: 'set-successful-exchange-rates-response'
            },
            [getChannelName('_SET_OPX_INPUT_AMOUNT')]: {
              bind: 'set-input-amount'
            },
            [getChannelName('_CLEAN_FOREIGN_CURRENCY')]: {
              bind: 'clean-foreign-currency'
            },
            [getChannelName('_RESET_TIMER_BEFORE_TRANSFER')]: {
              bind: 'reset-timer-before-transfer'
            },
            [getChannelName('_BACK_TO_START_DASHBOARD_PRODUCT_DETAIL')]: {
              bind: 'back-to-start-dashboard-product-detail',
              backStep: true
            },
            call_line_open_dialer: {
              bind: 'open-dialer',
              backStep: true
            },
            transfer_set_contact_mobile_phone: {
              bind: 'set-contact-mobile-phone'
            },
            [getChannelName('_SET_RECIPIENT_STEP_FROM_CONTACTS_AGENDA')]: {
              bind: 'set-recipient-from-contacts-agenda'
            },
            global_feedback_voice_controller_connect_transfers_visa_abandon: {
              bind: 'prepare-feedback-event',
              link: {
                page: 'dashboard',
                cleanUntil: 'transfers'
              }
            },
            [getChannelName('_EXIT_TRANSFERS_TO_DASHBOARD')]: {
              bind: 'exit-page-transfers-from-google',
              link: {
                page: 'dashboard',
                skipHistory: true
              }
            },
            [getChannelName('EXIT_TRANSFERS')]: {
              bind: 'exit-page-transfers'
            },
            global_user_id: {
              bind: 'customer-id-changed'
            },
            [getChannelName('OPERATION_REGISTRIES_SEND')]: {
              bind: 'operation-registries-sed-notification'
            },
            [getChannelName('_HUELLA_INFORMATIVE_STANDIN_MODAL')]: {
              bind: 'stand-in-bank-transfers-modal'
            },
            [getChannelName('_OPEN_QUERY_SECTION_PROPERTIES')]: {
              bind: 'add-new-recipient'
            },
            [getChannelName('_OPEN_NEW_RECIPIENT_MODAL')]: {
              bind: 'add-new-recipient',
              analytics: ANALYTICS.getAdvanceFootprint('nueva cuenta')
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'exit-operative'
            },
            [getChannelName('_SET_SELECTED_PRODUCT_RECEIVER')]: {
              bind: 'continue-selected-product-receiver'
            },
            global_generic_error: {
              bind: 'error-on-post-notification'
            },
            [getChannelName('request_exhange_rates_settlement')]: {
              bind: 'request-exchange-settlement'
            },
            global_get_from_storage: {
              bind: 'get-native-local-storage'
            },
            global_set_in_storage: {
              bind: 'global-set-in-storage'
            },
            [getChannelName('INIT_TRANSFERS_FROM_DEEPLINK')]: {
              bind: 'glomo-transfers-mx-dm-init-transfers'
            },
            global_action_launcher_dialer: {
              bind: 'call-bbva-line'
            },
            [getChannelName('high_risk_of_fraud')]: {
              bind: 'high-risk-of-fraud'
            },
            global_transfers_modal_reject: {
              bind: 'glomo-transfers-mx-dm-reject-transfers'
            },
            transfers_on_transfer_unavailible: {
              bind: 'transfer-unavailible-summary'
            },
            transfers_transfer_availability: {
              bind: 'transfer-unavailability-status'
            },
            analytics_transfers_mx_app_step_completed_reject: {
              bind: 'analytics-transfers-mx-app-step-completed-reject'
            },
            transfers_analytics_reuse_transfers_list_huella_transfers_otp: {
              bind: 'transfers-otp'
            },
            transfers_analytics_reuse_transfers_list_set_transfers_success_data: {
              bind: 'set-transfers-success-data'
            },
            global_mtu_exception_navigation: {
              bind: 'mtu-exception-handler-navigation',
              link: {
                page: 'mtuException'
              }
            },
            mtu_make_payment: {
              bind: 'mtu-make-payment'
            },
            transfers_saved_contacts: {
              bind: 'set-saved-contacts'
            },
            sign_modal_close: {
              bind: 'transfers-dm-stand-in-close-otp-modal'
            }
          },
          params: {
            globalUser: 'global_user',
            clientIdSettlement: 'global_client_id'
          }
        }
      },
      propertiesSpherica: {
        isSpherica,
        errorAlertImagePath: './images/spherica/error/lt-goal-icon.svg',
        newCellsConnections: {
          add: {
            out: {
              transfers_alert_manager_open_with_settings_spherica: {
                bind: 'transfers-dm-modal-config-spherica'
              }
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'cells-dm-global-apis-operation-registries',
      type: 'DM',
      properties: {
        host: CONFIG.globalServices.host,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        native: !!CONFIG.native,
        cellsConnections: {
          in: {
            [getChannelName('OPERATION_REGISTRIES_SEND')]: {
              bind: 'postRecoverRegistry'
            }
          },
          out: {
            [getChannelName('SUCCES_ON_SEND_NEW_CONTACT_NOTIFICATION')]: {
              bind: 'success-on-post-operation-registries-data'
            },
            [getChannelName('request_operation_registries_error')]: {
              bind: 'error-on-post-operation-registries-data'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-opx-transfer-mx-dm',
      familyPath: 'glomo-opx-transfer-dm',
      type: 'DM',
      properties: {
        isSpherica,
        openingHour: '6',
        closingHour: '17',
        closingMinutes: '29',
        autoActivateStep: true,
        repeatOperative: true,
        decorateSteps: true,
        baseMaxSteps: 4,
        currencyImagePath: {
          USD: './images/transfers/Usa.svg',
          MXN: './images/transfers/Mexico.svg',
          EUR: './images/transfers/Europa.svg'
        },
        errorAlertImagePath: './images/errors/error.svg',
        speedometerHighImagePath: './images/transfers/speedometer-high.svg',
        transactionsApiVersions: [versionApis.accountsV2, versionApis.accounts],
        transactionsCardsApiVersions: [versionApis.cardTransactionsV2, versionApis.cardTransactionsV1],
        identifierPatrimonialBtrader: ['PT', 'BR'],
        reuseOperationListDiscardConcepts: ['DIMO-', 'COMPRA FONDOS INVERSION', 'PAGO TARJETA DE CREDITO'],
        cellsConnections: {
          in: {
            global_financial_overview_details: {
              bind: 'financialOverview'
            },
            [getChannelName('_SELECT_MODAL_NEW_RECIPIENT_CLICKED')]: {
              bind: 'handleItemSelected'
            },
            transfers__ITEM_SELECTED_TYPE: {
              bind: 'selectedTypeProduct'
            },
            global_dimo_transfer_enable: {
              bind: 'dimoTransferFeature'
            },
            global_client_id: {
              bind: 'clientId'
            },
            global_mtu_exception_navigation: {
              bind: 'mtuExceptionFlag'
            },
            global_storage_get_loginData_success: {
              bind: 'getClientId'
            },
            global_storage_get_loginData_error: {
              bind: 'getClientId'
            },
            codicel_peer_to_peer_send_navigate_codicel_review: {
              bind: 'reset'
            },
            [getChannelName('_DISABLE_MY_ACCOUNTS')]: {
              bind: 'disableMyAccounts'
            },
            [getChannelName('_REGISTER_STEP_PRODUCT_SELECTOR')]: {
              bind: 'registerStep'
            },
            [getChannelName('_REGISTER_STEP_RECIPIENT_SELECTOR')]: {
              bind: 'registerStep'
            },
            [getChannelName('_REGISTER_STEP_AMOUNT')]: {
              bind: 'registerStep'
            },
            [getChannelName('_REGISTER_STEP_CONCEPT')]: {
              bind: 'registerStep'
            },
            navigate_dashboard_to_transfer: {
              bind: 'initPage'
            },
            global_account_navigate_to_transfer: {
              bind: 'initPage'
            },
            global_account_navigate_for_transfer: {
              bind: 'initPage'
            },
            navigation_loan_detail_to_transfer: {
              bind: 'initPage'
            },
            init_opx_from_operative: {
              bind: 'initPage'
            },
            navigation_product_detail_to_transfer: {
              bind: 'initPage'
            },
            navigate_message_boost_to_transfer: {
              bind: 'initPage'
            },
            navigation_help_section_detail_to_transfer: {
              bind: 'initPage'
            },
            navigation_dash_detail_to_transfer: {
              bind: 'initPageLocal'
            },
            navigation_product_detail_to_transfers: {
              bind: 'initPageLocal'
            },
            navigation_to_equity_tranfers: {
              bind: 'initPage'
            },
            navigate_expenses_group_to_transfer: {
              bind: 'initPageFromExpensesGroup'
            },
            navigation_to_btrader_transfers: {
              bind: 'initPage'
            },
            navigation_from_futura_dashboard: {
              bind: 'initPage'
            },
            navigation_checklist_actions_to_challenge: {
              bind: 'initPage'
            },
            [getChannelName('_SET_GLOBAL_ACCOUNTS_PARSED')]: {
              bind: 'globalAccountsParsed'
            },
            [getChannelName('_SET_GLOBAL_CARDS_PARSED')]: {
              bind: 'globalCardsParsed'
            },
            [getChannelName('_VALIDATE_PRODUCTS')]: {
              bind: 'validateProducts'
            },
            [getChannelName('_SET_THIS_DETAIL_FOR_TIMEOUT')]: {
              bind: 'enterAmountProps'
            },
            CHANGE_PRODUCT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
              bind: 'resetProductSelectorExchangeRatesProperties'
            },
            CHANGE_RECIPIENT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
              bind: 'resetProductAndRecipientExchangeRatesProperty'
            },
            CHANGE_EXCHANGE_RATES_ALERT_ACCEPT: {
              bind: 'goToStepExchangeRates'
            },
            [getChannelName('_GO_NEXT_STEP')]: {
              bind: 'goNextStep'
            },
            [getChannelName('_GO_NEXT_AND_CONTINUE_STEP')]: {
              bind: 'goNextStep'
            },
            [getChannelName('_COLLAPSE_OTHER_STEP')]: {
              bind: 'goToStep'
            },
            [getChannelName('_HEADER_CLOSE')]: {
              bind: 'manageBackButton'
            },
            __bridge_cancelled_back_navigation: {
              bind: 'manageBackButton'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'reset'
            },
            restore_steps_after_transfer_success: {
              bind: 'reset'
            },
            [getChannelName('RESET_AND_LEAVE_PROCESS')]: {
              bind: 'reset'
            },
            [getChannelName('_SET_STEP_ID_AND_RESET')]: {
              bind: 'cleanFollowingSteps'
            },
            [getChannelName('_CHANGE_AND_RESET')]: {
              bind: 'cleanFollowingSteps'
            },
            [getChannelName('_SET_RECIPIENT_DISABLE_BUTTONS')]: {
              bind: 'setDisabledButtons'
            },
            [getChannelName('_ON_SENDER_PRODUCT_SELECTED')]: {
              bind: 'senderProductDetail'
            },
            [getChannelName('_DONT_CHANGE_PRODUCT_SELECTED')]: {
              bind: 'validateSenderBalance'
            },
            [getChannelName('_SET_SELECTED_PRODUCT_RECEIVER')]: {
              bind: 'onSenderReceiver'
            },
            [getChannelName('_SET_PROPERTIES_NEW_RECIPIENT')]: {
              bind: 'setPropertiesNewRecipient'
            },
            [getChannelName('_INPUT_VALUE_CHANGED')]: {
              bind: 'errorMessageChange'
            },
            [getChannelName('_GET_RECIPIENT_MAGIC_QUERY')]: {
              bind: 'getReceivers'
            },
            transfers_set_opx_saved_contacts: {
              bind: 'saveContacts'
            },
            [getChannelName('_SET_OPX_RESPONSE_RECEIVERS')]: {
              bind: 'validateReceiverNumberIsInSavedContacts'
            },
            [getChannelName('_ON_ACCEPT_REVIEW_SECTION')]: {
              bind: 'onClickContinueReviewSection'
            },
            [getChannelName('_ON_ACCEPT_REVIEW_SECTION_SAVED_CONTACT')]: {
              bind: 'onAcceptReviewSectionSavedContact'
            },
            [getChannelName('_PRE_SELECTED_EQUITY_ACCOUNT')]: {
              bind: 'onAcceptReviewSectionSavedContact'
            },
            [getChannelName('_SET_SUCCESSFUL_POST_CONTACT_RESPONSE')]: {
              bind: 'setSuccessfulPostContactResponse'
            },
            [getChannelName('_SET_SUCCESSFUL_POST_CONTACT_PRODUCT')]: {
              bind: 'updateContactProduct'
            },
            [getChannelName('_SET_SUCCESSFUL_EXCHANGE_RATES_RESPONSE')]: {
              bind: 'setSuccessfulExchangeRatesResponse'
            },
            [getChannelName('_SET_OPX_INPUT_AMOUNT')]: {
              bind: 'inputAmount'
            },
            [getChannelName('_CLEAN_FOREIGN_CURRENCY')]: {
              bind: 'cleanForeignCurrencyProps'
            },
            [getChannelName('_RECEIVER_SECTION_ON_ICON_CLICK')]: {
              bind: 'receiverSectionOnIconClick'
            },
            [getChannelName('_ITEM_SELECTED_CHANGED')]: {
              bind: 'selectedBank'
            },
            [getChannelName('_SET_ALERT_PROPERTIES')]: {
              bind: 'setAlertProperties'
            },
            [getChannelName('_TIME_RAN_OUT')]: {
              bind: 'timeRanOut'
            },
            [getChannelName('_CHANGE_PRODUCT_SELECTOR_SHOW_ALERT')]: {
              bind: 'setProductSelectorExchangeRatesAlertProperties'
            },
            [getChannelName('_CHANGE_STEP_STATE_SHOW_ALERT')]: {
              bind: 'setRecipientSelectorExchangeRatesAlertProperties'
            },
            [getChannelName('_RESET_TIMER_BEFORE_TRANSFER')]: {
              bind: 'resetTimer'
            },
            [getChannelName('_SET_TRANSFERS_SUCCESS_DATA')]: {
              bind: 'reset'
            },
            [getChannelName('_BACK_TO_START_DASHBOARD_PRODUCT_DETAIL')]: {
              bind: 'reset'
            },
            cancel_out_of_schedule_alert: {
              bind: 'reset'
            },
            [getChannelName('_CONCEPT_CHANGED')]: {
              bind: 'getConcept'
            },
            [getChannelName('_CONCEPT_STEP_STATE_CHANGED')]: {
              bind: 'conceptChanged'
            },
            [getChannelName('_SET_RECIPIENT_STEP_FROM_CONTACTS_AGENDA')]: {
              bind: 'setRecipientStep'
            },
            [getChannelName('_SET_GLOBAL_CONTRACTS_PARSED')]: {
              bind: 'globalContractsParsed'
            },
            [getChannelName('_EQUITY_VALIDATE_CONTRACTS')]: {
              bind: 'validateContracts'
            },
            [getChannelName('_EQUITY_SET_PRINCIPAL_ACCOUNT')]: {
              bind: 'principalAccount'
            },
            [getChannelName('_EQUITY_VALIDATE_PRODUCTS')]: {
              bind: 'validateProducts'
            },
            [getChannelName('response_decrypted_banxico_response')]: {
              bind: 'parseClabeAccountBanxico'
            },
            [getChannelName('_ON_CHOOSE_ANOTHER_CONTACT')]: {
              bind: 'resetInfoDimo'
            },
            [getChannelName('reset_value_searched')]: {
              bind: 'resetInfoDimo'
            },
            [getChannelName('_ON_CLICK_AVATAR_ITEM_DIMO_ENROLLMENT')]: {
              bind: 'onClickContactDimo'
            },
            [getChannelName('_ON_CLICK_AVATAR_ITEM_SAVED_CONTACT')]: {
              bind: 'onAcceptReviewSectionSavedContact'
            },
            on_click_avatar_item_receiver_contact: {
              bind: 'selectedReceiverDimo'
            },
            [getChannelName('success_get_bank_record')]: {
              bind: 'recordSuccess'
            },
            [getChannelName('error_get_bank_record')]: {
              bind: 'recordError'
            },
            global_feature_flag_collection_updated: {
              bind: 'setDenominationFlagGlobal'
            },
            transfers_saved_contacts: {
              bind: 'destinationParam'
            },
            [getChannelName('INIT_TRANSFERS_FROM_DEEPLINK')]: {
              bind: 'initPage'
            },
            reuse_operation_selected: {
              bind: 'requestTransactions'
            },
            reuse_operation_error_get_transactions: {
              bind: 'operationsNotAvaliables'
            },
            reuse_operation_list_of_product_movements: {
              bind: 'reuseOperationListFormatMovements'
            },
            reuse_operation_list_selected_recipient: {
              bind: 'formatSelectedReuseOperation'
            },
            reuse_operation_list_selected_movement: {
              bind: 'receiveSpecificMovement'
            },
            reuse_operation_open_modal_more_operations: {
              bind: 'openModalReuseOperations'
            },
            reuse_operation_list_modal_request_more_movemnts: {
              bind: 'transactionsNextPage'
            },
            reuse_operation_no_more_movements: {
              bind: 'noMoreOperatiosnAvaliables'
            },
            [getChannelName('_SET_TRANSFERS_SUCCESS_DATA')]: {
              bind: 'burnItemFromOperative'
            },
            [getChannelName('_EQUITY_UNCACHED_PRE_SELECTED_RECEIVER_AMOUNT_ACTIVE')]: {
              bind: 'restoreStepAmount'
            },
            transfers_update_amount_futura: {
              bind: 'recalculateFuturaProductsBalances'
            },
            global_blue_transfer_data: {
              bind: 'blueData'
            },
            global_equity_error_navigate_back: {
              bind: 'reset'
            },
            blue_transfers_set_saved_contact: {
              bind: 'setRecipientStep'
            },
            transfers__COLLAPSE_MANUAL_STEP: {
              bind: 'resetReceiverSubProductType'
            }
          },
          out: {
            is_futura_active: {
              bind: 'is-futura-active'
            },
            burn_item_from_operative_smart_servicing: {
              bind: 'transfer-dm-operation-success'
            },
            restore_steps_after_transfer_success: {
              bind: 'transfer-dm-operation-success'
            },
            open_control_veil: {
              bind: 'open-control-veil'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            transfers__OPEN_LIST_BANK: {
              bind: 'open-modal-selector-bank'
            },
            transfers__OPEN_LIST_PRODUCT_TYPE: {
              bind: 'open-modal-selector-product-type'
            },
            [getChannelName('_CHANGE_TO_BACKGROUD')]: {
              bind: 'change-class-backgroud'
            },
            [getChannelName('_SET_RECIPIENT_BEHAVIOUR')]: {
              bind: 'set-recipient-behaviour'
            },
            [getChannelName('_SET_DISABLED_OPTIONS_BUTTONS')]: {
              bind: 'set-disabled-buttons'
            },
            [getChannelName('_SET_PRODUCT_SELECTOR_PROPERTIES')]: {
              bind: 'set-product-selector-properties'
            },
            [getChannelName('_SET_AMOUNT_IN_ORIGIN_CURRENCY')]: {
              bind: 'set-amount-in-origin-currency'
            },
            CLOSE_CONFIRM_TRANSFERS: {
              bind: 'show-close-confirm'
            },
            [getChannelName('_SCROLL_ZONE')]: {
              bind: 'cells-scroll-zone'
            },
            [getChannelName('_SHOW_CONFIRM_CHANEL')]: {
              bind: 'can-execute-changed'
            },
            [getChannelName('_RESET_ENTER_AMOUNT')]: {
              bind: 'reset-enter-amount-props'
            },
            [getChannelName('_SET_ENTER_AMOUNT_PROPERTIES')]: {
              bind: 'set-properties-enter-amount'
            },
            [getChannelName('_SET_TRANSFER_TYPE')]: {
              bind: 'transfer-type'
            },
            [getChannelName('_PARSE_GLOBAL_ACCOUNTS_AND_CARDS')]: {
              bind: 'parse-accounts'
            },
            [getChannelName('_INIT_PAGE')]: {
              bind: 'parse-local-accounts'
            },
            [getChannelName('_SENDER_SELECTED_FROM_PRODUCT_DETAIL')]: {
              bind: 'sender-selected-from-product-detail'
            },
            [getChannelName('_PRESELECTED_EQUITY_RECEIVER')]: {
              bind: 'sender-selected-from-product-detail'
            },
            ANALYTICS_APP_PAGE_VISIT: {
              bind: 'selected-sender-data'
            },
            [getChannelName('_SET_MY_PRODUCTS')]: {
              bind: 'set-accounts-list'
            },
            [getChannelName('_SET_THIS_STEP_THREE')]: {
              bind: 'set-properties-to-foreign-currency'
            },
            [getChannelName('_SET_MY_PRODUCTS_RECEIVER')]: {
              bind: 'set-accounts-list-receiver'
            },
            [getChannelName('_SET_SHOW_REFERENCE_CONCEPT')]: {
              bind: 'show-reference-concept'
            },
            [getChannelName('_SET_SELECTED_RECEIVER')]: {
              bind: 'set-selected-receiver'
            },
            [getChannelName('_SET_PROPERTIES_MAGIC_QUERY')]: {
              bind: 'set-properties-new-recipient-selector'
            },
            [getChannelName('_SET_INPUT_ERROR_MESSAGE')]: {
              bind: 'error-message-change-value'
            },
            [getChannelName('_SET_INVALID_INPUT')]: {
              bind: 'error-message-invalid-input'
            },
            [getChannelName('_DISPATCH_RECEIVERS_SERVICE')]: {
              bind: 'dispatch-receivers-service'
            },
            [getChannelName('_SET_ACTIVE_ICON_FEES_MESSAGE')]: {
              bind: 'active-icon-message'
            },
            ANALYTICS_APP_STEP_TWO_OWN_TRANSFERS: {
              bind: 'own-transfers-type'
            },
            [getChannelName('_HUELLA_NEW_ACCOUNT_CONFIRMED')]: {
              bind: 'huella-new-account-confirmed'
            },
            [getChannelName('_SET_REVIEW_SECTION_PROPERTIES')]: {
              bind: 'set-alias-properties'
            },
            [getChannelName('_SET_RESPONSE_MAGIC_QUERY')]: {
              bind: 'set-review-mode'
            },
            ANALYTICS_APP_STEP_TWO_INTERNAL_INTERBANK_TRANSFERS: {
              bind: 'internal-and-interbank-transfers-type'
            },
            [getChannelName('_CLOSE_REVIEW_SECTION_MODAL')]: {
              bind: 'close-save-alias-modal'
            },
            [getChannelName('_SET_DM_CONTACT_DETAIL')]: {
              bind: 'set-contact-detail'
            },
            [getChannelName('_DISPATCH_SAVE_CONTACT_SERVICE')]: {
              bind: 'dispatch-save-contact-service'
            },
            [getChannelName('_SET_SAVED_CONTACT_DETAIL_DM')]: {
              bind: 'set-saved-contact-detail'
            },
            [getChannelName('_SEND_EMAIL_SERVICE')]: {
              bind: 'dispatch-send-email-service'
            },
            [getChannelName('_SET_DM_ORIGIN_CURRENCY')]: {
              bind: 'set-origin-currency'
            },
            [getChannelName('_SET_TIMER')]: {
              bind: 'set-timer'
            },
            [getChannelName('_RESTART_TIMER')]: {
              bind: 'set-restart'
            },
            [getChannelName('_SET_DM_EXCHANGE_RATES_FLAG')]: {
              bind: 'set-exchange-rates-flag'
            },
            [getChannelName('_SET_DM_FOREIGN_CURRENCY')]: {
              bind: 'set-foreign-currency'
            },
            [getChannelName('_SET_DM_RELATIVE_VALUE')]: {
              bind: 'set-relative-value'
            },
            [getChannelName('_SET_DM_TOTAL_AMOUNT')]: {
              bind: 'set-total-amount'
            },
            SHOW_ALIAS_IN_USE_MODAL: {
              bind: 'show-alias-in-use-alert'
            },
            [getChannelName('_RESET_TIMER')]: {
              bind: 'reset-timer'
            },
            [getChannelName('_SET_PROPERTIES_DM')]: {
              bind: 'set-properties-dm'
            },
            SET_CHANGE_EXCHANGE_RATES_ALERT: {
              bind: 'set-change-exchange-rates-alert'
            },
            [getChannelName('_SET_PRODUCTS_LIST')]: {
              bind: 'set-all-products-list'
            },
            [getChannelName('_SET_ENTRY_POINT')]: {
              bind: 'set-entry-point'
            },
            [getChannelName('_SET_MAX_STEPS_PROPERTY')]: {
              bind: 'set-max-steps'
            },
            [getChannelName('_SET_PRODUCT_SELECTOR_STEP_PROPERTIES')]: {
              bind: 'set-product-selector-step-properties'
            },
            [getChannelName('_SET_RECIPIENT_SELECTOR_STEP_PROPERTIES')]: {
              bind: 'set-recipient-selector-step-properties'
            },
            [getChannelName('_SET_CURRENCY_OPERATIONS_STEP_PROPERTIES')]: {
              bind: 'set-currency-operations-step-properties'
            },
            [getChannelName('_SET_CONCEPT_STEP_PROPERTIES')]: {
              bind: 'set-concept-step-properties'
            },
            [getChannelName('_RESET_RECIPIENT_SELECTOR')]: {
              bind: 'set-recipient-selector-properties'
            },
            [getChannelName('_SET_DM_CONCEPT')]: {
              bind: 'set-dm-concept'
            },
            [getChannelName('_SEND_AMOUNT')]: {
              bind: 'send-amount'
            },
            [getChannelName('_CONTINUE_GOOGLE_ASSISTANT')]: {
              bind: 'continue-google-assistant'
            },
            [getChannelName('_KEY_GOOGLE_ASSISTANT')]: {
              bind: 'set-key-google-assistant'
            },
            [getChannelName('set_transfer_title')]: {
              bind: 'glomo-opx-transfer-set-title'
            },
            [getChannelName('send_dimo_transfer_feature')]: {
              bind: 'send-dimo-transfer-feature'
            },
            native_client_id: {
              bind: 'send-client-id-from-transfers'
            },
            send_number_phone_payments_codicel: {
              bind: 'send-number-phone-from-transfers'
            },
            transfer_dimo_number_phone_receiver: {
              bind: 'send-number-phone-receiver-from-transfers'
            },
            transfer_dimo_banxico_response: {
              bind: 'send-banxico-query-response-from-transfers'
            },
            transfer_dimo_disable_change_step: {
              bind: 'send-disable-change-step'
            },
            navigation_codicel_peer_to_peer_send: {
              bind: 'send-body-dimo-from-transfers',
              link: {
                page: 'codicelPeerToPeerSend'
              }
            },
            [getChannelName('redirection_dimo_to_expenses_group')]: {
              bind: 'redirection-dimo-to-expenses-group'
            },
            global_get_from_storage: {
              bind: 'global-get-from-storage'
            },
            [getChannelName('get_bank_record')]: {
              bind: 'get-records'
            },
            [getChannelName('message_opinator_true')]: {
              bind: 'message-boost-interbank-transfers'
            },
            [getChannelName('request_client_id')]: {
              bind: 'glomo-opx-transfer-get-client-id'
            },
            [getChannelName('_DISABLED_TRANSFER_DESTINATIONS')]: {
              bind: 'active-transfer-destination'
            },
            TRANSFERS_SET_ICON_MESSAGE_PROPERTY: {
              bind: 'set-properties-icon-message'
            },
            TRANSFERS_SET_ICON_MESSAGE_TYPE_PROPERTY: {
              bind: 'set-properties-icon-message-type'
            },
            TRANSFERS_SET_PROPERTIES_LIMITED_AMOUNT_CLASS: {
              bind: 'set-properties-limited-amount-class'
            },
            reuse_operation_list_set_api_version: {
              bind: 'reuse-operation-list-api-version'
            },
            reuse_operation_list_set_card_api_version: {
              bind: 'reuse-operation-list-card-api-version'
            },
            reuse_operation_list_selected_product_id: {
              bind: 'reuse-operation-list-selected-product-id'
            },
            reuse_operation_list_selected_product_last_movement: {
              bind: 'reuse-operation-list-selected-product-last-movement'
            },
            reuse_operation_list_selected_product_type: {
              bind: 'reuse-operation-list-selected-product-type'
            },
            reuse_operation_list_max_items: {
              bind: 'reuse-operation-list-max-limits'
            },
            reuse_operation_list_all_formated: {
              bind: 'reuse-operation-list-all-account-movements'
            },
            reuse_operation_list_formated: {
              bind: 'reuse-operation-list-account-movements'
            },
            reuse_operation_list_reques_transactions: {
              bind: 'reuse-operation-request-transactions'
            },
            reuse_operation_list_get_movemente_id: {
              bind: 'reuse-operation-list-selected-movement-id'
            },
            reuse_operation_list_get_movemente_full_detail: {
              bind: 'reuse-operation-list-execute-specific-movement-detail'
            },
            transfers_analytics_reuse_transfers_list_huella_on_click_start: {
              bind: 'reuse-operation-list-analytics-on-click-start'
            },
            transfers_dispatch_receivers_reuse_operation_list: {
              bind: 'reuse-operation-list-request-receiver'
            },
            reuse_operation_list_request_more_transactions: {
              bind: 'reuse-operation-request-more-transactions'
            },
            reuse_operation_list_request_more_transactions_button_status: {
              bind: 'reuse-operation-request-more-transactions-button-status'
            },
            reuse_operation_list_request_more_transactions_spinner_status: {
              bind: 'reuse-operation-request-more-transactions-spinner-status'
            },
            reuse_operation_list_show_icon: {
              bind: 'reuse-operation-list-show-icon-state'
            },
            reuse_operation_list_not_valid: {
              bind: 'reuse-operation-hide-not-avaliable'
            },
            reuse_operation_list_spinner: {
              bind: 'reuse-operation-set-spinner-status'
            },
            global_alert_manager_open_with_settings: {
              bind: 'reuse-operation-list-insuficiente-balance'
            },
            transfers_analytics_reuse_transfers_list_page_visit: {
              bind: 'reuse-operation-list-analytics-page-visit'
            },
            transfers_analytics_reuse_transfers_list_interbank_concept: {
              bind: 'reuse-operation-list-analytics-interbank-concept'
            },
            reuse_operation_list_analytics_feature_flag: {
              bind: 'reuse-operation-analytics-feature-flag'
            },
            selected_accounts_blue: {
              bind: 'selected-accounts-listening-mode-blue'
            },
            account_selected_for_tranfer_blue: {
              bind: 'accounts-for-modal-blue'
            },
            transfers_SHOW_SAVED_CONTACTS_MODAL: {
              bind: 'show-saved-contacts',
              link: {
                page: 'contactsAgenda'
              }
            },
            contacts_agenda_search_input_from_blue: {
              bind: 'set-contact-agenda-input'
            },
            transfers_LIMITED_AMOUNT_FOCUS_OUT: {
              bind: 'calculate-exchange-rate'
            },
            transfers_disable_prepare_feedback_from_blue: {
              bind: 'disable-prepare-feedback-from-blue'
            },
            blue_transfers_set_name_receiver: {
              bind: 'set-receiver-name'
            },
            modal_selected_blue: {
              bind: 'open-modal-blue'
            },
            transfer_concept_is_current_step: {
              bind: 'transfer-concept-is-current-step'
            },
            blue_transfers_disable_analytics_origin: {
              bind: 'set-skip-blue-analytics'
            },
            blue_transfers_open_receiver_modal: {
              bind: 'open-new-receivers-modal'
            },
            blue_transfers_send_receivers: {
              bind: 'send-receiver-data'
            },
            blue_send_input_transfer: {
              bind: 'send-receiver-input'
            },
            blue_transfers_set_saved_contact: {
              bind: 'set-saved-contact'
            },
            blue_transfers_review_and_authorize: {
              bind: 'review-and-authorize-blue-data'
            },
            blue_transfers_set_receiver_input: {
              bind: 'set-receiver-input'
            }
          },
          params: {
            clientId: 'global_client_id'
          }
        }
      },
      propertiesSpherica: {
        isSpherica,
        errorAlertImagePath: './images/spherica/error/lt-goal-icon.svg',
        newCellsConnections: {
          add: {
            out: {
              transfers_alert_manager_open_with_settings_spherica: {
                bind: 'open-alert-manager-with-settings-spherica'
              },
              transfers_set_text_notification_toast: {
                bind: 'set-properties-succesful-bottom-modal'
              },
              transfers_show_notification_toast: {
                bind: 'set-properties-succesful-bottom-modal'
              },
              blue_transfers_set_dimo_data: {
                bind: 'blue-set-dimo-data'
              },
              blue_transfers_set_dimo_back_action: {
                bind: 'blue-set-dimo-back-action'
              }
            }
          },
          remove: {
            out: [
              'CLOSE_CONFIRM_TRANSFERS',
              'SET_CHANGE_EXCHANGE_RATES_ALERT'
            ]
          }
        }
      }
    },
    {
      zone: 'app__main',
      tag: 'glomo-contextual-sale-manager',
      type: 'DM',
      properties: {
        host: CONFIG.globalServices.host,
        apiVersion: CONFIG.globalServices.versions.campaigns,
        native: !!CONFIG.native,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            [getChannelName('_SET_OPX_RESPONSE_RECEIVERS')]: {
              bind: 'receiverProductInformation'
            },
            blue_transfers_send_receivers: {
              bind: 'receiverProductInformation'
            },
            transfers_set_opx_saved_contacts: {
              bind: 'receiverProductInformation'
            },
            [getChannelName('_GET_RECIPIENT_MAGIC_QUERY')]: {
              bind: 'transferNumber'
            },
            blue_send_input_transfer: {
              bind: 'transferNumber'
            },
            [getChannelName('_SET_TRANSFER_TYPE')]: {
              bind: 'transferType'
            },
            [getChannelName('validates_product_type')]: {
              bind: 'requestListOffer'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            },
            [getChannelName('header_close')]: {
              bind: 'resetData'
            }
          },
          out: {
            send_information_card_promotion_channel: {
              bind: 'send-information-card-promotion'
            },
            channel_sending_offer_information: {
              bind: 'send-information-data-offert'
            },
            show_card_promotion_transfer: {
              bind: 'show-card-promotion'
            },
            sending_dynamic_data_for_analytics: {
              bind: 'send-data-analitycs-contextual-sales'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-private-banking-portfolios',
      properties: {
        host: CONFIG.globalServices.host,
        native: !!CONFIG.native,
        privatePortafoliosApiVersion: CONFIG.globalServices.versions.privateBankingPortfolios,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        cellsConnections: {
          in: {
            [getChannelName('EQUITY_REQUEST_LIST_BANKING_PORTFOLIOS')]: {
              bind: 'getListPrivateBankingPortfolios'
            },
            [getChannelName('EQUITY_REQUEST_BANKING_PORTFOLIOS_BALANCES')]: {
              bind: 'getBalancesOfPrivateBankingPortfolio'
            },
            [getChannelName('EQUITY_DISPATCH_ORDERS_PORTFOLIOS')]: {
              bind: 'postOrdersPrivateBankingPortfolio'
            }
          },
          out: {
            [getChannelName('EQUITY_SUCCESS_RESPONSE_LIST_BANKING_PORTFOLIOS')]: {
              bind: 'get-list-private-banking-portfolios-success-response'
            },
            [getChannelName('EQUITY_ERROR_RESPONSE_LIST_BANKING_PORTFOLIOS')]: {
              bind: 'error-on-get-list-private-banking-portfolios'
            },
            [getChannelName('EQUITY_SUCCESS_RESPONSE_BALANCE_BANKING_PORTFOLIO')]: {
              bind: 'get-balance-private-banking-portfolio-success-response'
            },
            [getChannelName('EQUITY_ERROR_RESPONSE_BALANCE_BANKING_PORTFOLIO')]: {
              bind: 'error-on-get-balance-private-banking-portfolio-success-response'
            },
            [getChannelName('EQUITY_SUCCESS_DISPATCH_ORDERS_PORTFOLIOS')]: {
              bind: 'success-on-post-equity-transfers'
            },
            [getChannelName('EQUITY_ERROR_DISPATCH_ORDERS_PORTFOLIOS')]: {
              bind: 'error-on-post-equity-transfers'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      familyPath: 'glomo-equity-transfer-manager',
      tag: 'glomo-equity-transfer-manager-mx',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            __bridge_app: {
              bind: 'pageOrigin'
            },
            transfers__SET_TRANSFER_TYPE: {
              bind: 'transferType'
            },
            global_feature_stand_in_status: {
              bind: 'standIn'
            },
            [getChannelName('init_page')]: {
              bind: 'sendDenomination'
            },
            global_financial_overview_details: {
              bind: 'financialOverview'
            },
            dashboard_customer_email: {
              bind: 'accountEmail'
            },
            dashboard_equity: {
              bind: 'globalContracts'
            },
            dashboard_accounts: {
              bind: 'globalAccounts'
            },
            global_feature_flag_collection_updated: {
              bind: 'setDenominationFlagGlobal'
            },
            send_open_web_flag: {
              bind: 'setDenominationFlag'
            },
            [getChannelName('_SET_PRODUCTS_LIST')]: {
              bind: 'listAccount'
            },
            [getChannelName('_VIEW_PRODUCTS_MODAL')]: {
              bind: 'viewAllList'
            },
            [getChannelName('EQUITY_SUCCESS_RESPONSE_LIST_BANKING_PORTFOLIOS')]: {
              bind: 'responseEquityContracts'
            },
            [getChannelName('EQUITY_ERROR_RESPONSE_LIST_BANKING_PORTFOLIOS')]: {
              bind: 'errorResponseContracts'
            },
            [getChannelName('EQUITY_SUCCESS_RESPONSE_BALANCE_BANKING_PORTFOLIO')]: {
              bind: 'accountsService'
            },
            [getChannelName('EQUITY_ERROR_RESPONSE_BALANCE_BANKING_PORTFOLIO')]: {
              bind: 'errorResponseAccount'
            },
            [getChannelName('EQUITY_SUCCESS_DISPATCH_ORDERS_PORTFOLIOS')]: {
              bind: 'successResponseOrdersPrivateBanking'
            },
            [getChannelName('EQUITY_ERROR_DISPATCH_ORDERS_PORTFOLIOS')]: {
              bind: 'errorResponseOrdersPrivateBanking'
            },
            [getChannelName('_SET_SELECTED_RECEIVER')]: {
              bind: 'selectedReceiver'
            },
            [getChannelName('_SET_SELECTED_AMOUNT')]: {
              bind: 'setSelectedAmount'
            },
            [getChannelName('_CONCEPT_CHANGED')]: {
              bind: 'setSelectedConcept'
            },
            [getChannelName('_TICKET_SAVE')]: {
              bind: 'validateEquityTransfer'
            },
            app_step_three_analytics_transfers: {
              bind: 'transfersOperationData'
            },
            [getChannelName('_SET_SELECTED_PRODUCT_RECEIVER')]: {
              bind: 'selectedReceiverEquity'
            },
            [getChannelName('_ON_SENDER_PRODUCT_SELECTED')]: {
              bind: 'selectedSenderEquity'
            },
            navigation_product_detail_to_transfer: {
              bind: 'initDetail'
            },
            navigation_to_equity_tranfers: {
              bind: 'initDetail'
            },
            navigation_to_btrader_transfers: {
              bind: 'initDetail'
            },
            [getChannelName('_VALIDATE_PRODUCTS')]: {
              bind: 'validateContractsEquity'
            },
            SEND_EMAIL_TO_EQUITY: {
              bind: 'accountEmailLocal'
            },
            init_opx_from_operative: {
              bind: 'initDetail'
            },
            select_operation_navigate_to_operationals: {
              bind: 'initiateTranfersFromOperative'
            },
            [getChannelName('_CHANGE_AND_RESET')]: {
              bind: 'resetEquityProps'
            },
            [getChannelName('_PRESELECTED_EQUITY_RECEIVER')]: {
              bind: 'preSelectedEquityAccount'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'reset'
            },
            mtu_make_payment: {
              bind: 'validateEquityTransfer'
            },
            restore_steps_after_transfer_success: {
              bind: 'reset'
            },
            global_equity_error_navigate_back: {
              bind: 'reset'
            }
          },
          out: {
            RESET_FLAG_EQUITY_CONTRACT: {
              bind: 'reset-flag-equity-contract'
            },
            ANALYTICS_APP_PAGE_VISIT: {
              bind: 'selected-sender-data-analytics'
            },
            init_opx_from_operative: {
              bind: 'initiate-transfers-from-operative'
            },
            [getChannelName('init_page')]: {
              bind: 'initiate-transfers-from-operative'
            },
            [getChannelName('_SET_PRODUCTS_LIST_TOTAL')]: {
              bind: 'send-data-list-account'
            },
            [getChannelName('_SET_MAX_PRODUCT')]: {
              bind: 'send-data-max-products'
            },
            [getChannelName('_SET_LIST_ALL_PRODUCTS')]: {
              bind: 'send-data-all-products'
            },
            global_retry_error: {
              bind: 'retry-error'
            },
            [getChannelName('EQUITY_REQUEST_LIST_BANKING_PORTFOLIOS')]: {
              bind: 'equity-request-contracts'
            },
            [getChannelName('EQUITY_REQUEST_BANKING_PORTFOLIOS_BALANCES')]: {
              bind: 'equity-request-balances-portfolios'
            },
            [getChannelName('EQUITY_DISPATCH_ORDERS_PORTFOLIOS')]: {
              bind: 'equity-dispatch-orders-private-banking'
            },
            [getChannelName('_SET_TRANSFERS_SUCCESS_DATA')]: {
              bind: 'set-equity-transfers-success-data'
            },
            [getChannelName('_SET_GLOBAL_CONTRACTS_PARSED')]: {
              bind: 'set-global-contracts-parsed'
            },
            [getChannelName('_EQUITY_VALIDATE_CONTRACTS')]: {
              bind: 'validate-equity-contracts'
            },
            [getChannelName('_EQUITY_VALIDATE_PRODUCTS')]: {
              bind: 'validate-equity-products'
            },
            [getChannelName('_EQUITY_SET_PRINCIPAL_ACCOUNT')]: {
              bind: 'equity-send-principal-account'
            },
            ANALYTICS_APP_STEP_TWO_OWN_TRANSFERS: {
              bind: 'analytics-validate-selected-receiver-contract'
            },
            global_generic_error: {
              bind: 'error-on-get-mock'
            },
            [getChannelName('SEND_TICKET_TO_TRANSFER')]: {
              bind: 'send-transfer-ticket-save'
            },
            [getChannelName('_PRE_SELECTED_EQUITY_ACCOUNT')]: {
              bind: 'pre-selected-account-disable-change'
            },
            [getChannelName('_PRE_SELECTED_EQUITY_ACCOUNT_DISABLED_CHANGE_BUTTON')]: {
              bind: 'pre-selected-account-disable-change'
            },
            [getChannelName('_EQUITY_SHOW_REFERENCE')]: {
              bind: 'show-reference-concept'
            },
            [getChannelName('_EQUITY_UNCACHED_PRE_SELECTED_RECEIVER')]: {
              bind: 'uncached-pre-selected-receiver'
            },
            [getChannelName('_EQUITY_UNCACHED_PRE_SELECTED_RECEIVER_AMOUNT_ACTIVE')]: {
              bind: 'uncached-pre-selected-receiver'
            },
            transfers_analytics_reuse_transfers_list_set_transfers_success_data: {
              bind: 'set-equity-transfers-success-data'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-dm-global-apis-exchange-rates',
      properties: {
        host: CONFIG.globalServices.host,
        requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
        native: !!CONFIG.native,
        exchangeRatesApiVersion: CONFIG.globalServices.versions.settlementV1,
        bgadpImpl: 'global',
        cellsConnections: {
          in: {
            [getChannelName('request_exhange_rates_settlement')]: {
              bind: 'postExchangeRatesSettlement'
            }
          },
          out: {
            [getChannelName('settlement_request_success')]: {
              bind: 'success-on-exchange-settlement'
            },
            [getChannelName('error_on_settlement')]: {
              bind: 'error-on-exchange-settlement'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      familyPath: '@glomo-web-components/glomo-analytics-transfer-manager',
      tag: 'glomo-analytics-transfer-manager-mx',
      render: 'litElement',
      properties: {
        transferType: TRANSFERTYPEMX,
        projectNameGlomo: ANALYTICS.bindLiterals.PROJECT_NAME_GLOMO,
        projectNameGlomoAlwaysOn: ANALYTICS.bindLiterals.PROJECT_NAME_GLOMO_ALWAYSON,
        cellsConnections: {
          in: {
            global_feature_stand_in_status: {
              bind: 'settingStandinMode'
            },
            analytics_transfers_mx_app_step_completed_reject: {
              bind: 'appCompletedReject'
            },
            navigation_to_equity_tranfers: {
              bind: 'appOnClickStartProductDetail'
            },
            ANALYTICS_APP_PAGE_VISIT: {
              bind: 'appPageVisit'
            },
            reuse_operation_list_analytics_feature_flag: {
              bind: 'analyticsRuseTransferFlag'
            },
            [getChannelName('_OPEN_QUERY_SECTION_PROPERTIES')]: {
              bind: 'appStartedNew'
            },
            [getChannelName('_ON_GET_SAVED_CONTACTS')]: {
              bind: 'appStartedContacts'
            },
            [getChannelName('_VIEW_MY_DESTINATION_PRODUCTS')]: {
              bind: 'appStartedAccounts'
            },
            transfer_concept_is_current_step: {
              bind: 'appPageViewConcept'
            },
            [getChannelName('_ANALYTIC_VIEW_MY_DESTINATION_PRODUCTS')]: {
              bind: 'appPageViewMyAccounts'
            },
            transfers_analytic_reuse_transfers: {
              bind: 'appStartedReuseTransfer'
            },
            [getChannelName('_HUELLA_TRANSFERS_OTP')]: {
              bind: 'appPageViewOTP'
            },
            [getChannelName('_HUELLA_INFORMATIVE_STANDIN_MODAL')]: {
              bind: 'appPageInformativeStandinTransfer'
            },
            [getChannelName('_HUELLA_NEW_ACCOUNT_CONFIRMED')]: {
              bind: 'appFootprintNewAccountConfirm'
            },
            ANALYTICS_APP_STEP_TWO_OWN_TRANSFERS: {
              bind: 'appStepTwoOwnTransfers'
            },
            ANALYTICS_APP_STEP_TWO_INTERNAL_INTERBANK_TRANSFERS: {
              bind: 'appStepTwoInternalInterbankTransfers'
            },
            ANALYTICS_APP_STEP_THREE: {
              bind: 'appStepThree'
            },
            codicel_accept_invite_contact_transfer: {
              bind: 'pageViewModalInviteDimo'
            },
            blue_transfers_set_analytics_origin: {
              bind: 'isFromBlue'
            },
            blue_transfers_disable_analytics_origin: {
              bind: 'disableTransferAnalyticsFromBlue'
            },
            transfers_EXIT_TRANSFERS: {
              bind: 'reset'
            },
            restore_steps_after_transfer_success: {
              bind: 'reset'
            }
          },
          out: {
            app_on_click_start_analytics_transfers: {
              bind: 'analytics-app-on-click-start',
              analytics: ANALYTICS.APP_ON_CLICK_START,
              featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_TRANSFERS
            },
            app_page_view_concept_analytics_transfers: {
              bind: 'analytics-app-page-view-concept',
              analytics: ANALYTICS.getAdvanceFootprint('concepto')
            },
            app_page_view_my_accounts_analytics_transfers: {
              bind: 'analytics-app-page-view-my-accounts',
              analytics: ANALYTICS.getAdvanceFootprint('mis cuentas bbva')
            },
            app_page_view_otp_analytics_transfers: {
              bind: 'analytics-app-page-view-otp',
              analytics: ANALYTICS.getAdvanceFootprint('otp', 'isCustomField')
            },
            app_page_view_informative_standin_analytics_transfers: {
              bind: 'analytics-app-page-view-standin-informative-transfer',
              analytics: ANALYTICS.getAdvanceFootprint('informacion modo esencial')
            },
            app_page_visit_analytics_transfers: {
              bind: 'analytics-app-page-visit-transfers',
              analytics: ANALYTICS.appPageVisit
            },
            app_started_analytics_transfers: {
              bind: 'analytics-app-started',
              analytics: ANALYTICS.appStarted
            },
            app_step_two_analytics_transfers: {
              bind: 'analytics-app-step-two',
              analytics: ANALYTICS.appStep2
            },
            app_step_three_analytics_transfers: {
              bind: 'analytics-app-step-three',
              analytics: ANALYTICS.appStep3
            },
            app_page_view_new_account_confirmed: {
              bind: 'analytics-app-foot-print-new-account-confirm',
              analytics: ANALYTICS.getAdvanceFootprint('nueva cuenta confirmada')
            },
            app_page_view_modal_dimo_invite_analytics_transfers: {
              bind: 'modal-invite-dimo-page-view',
              analytics: ANALYTICS.getAdvanceFootprint('invitar a dimo')
            },
            app_completed_reject_modal_aric_fraud_analytics_transfers: {
              bind: 'analytics-app-completed-reject',
              analytics: ANALYTICS.appCompletedRejectAricFraud
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'bbva-analytics-controller-transaction-detail-account-reuse-mx',
      familyPath: '@glomo-web-components/bbva-controller-transaction-detail-account-reuse-mx',
      render: 'litElement',
      properties: {
        evtPrefix: 'reuse-operation-list',
        cellsConnections: {
          in: {
            global_financial_overview_details: {
              bind: 'financialOverview'
            },
            transfers_analytics_reuse_transfers_list_huella_on_click_start: {
              bind: 'filterAppOnClickStart'
            },
            transfers_analytics_reuse_transfers_list_page_visit: {
              bind: 'fireAnalyticsAppPageVisit'
            },
            transfers_analytics_reuse_transfers_list_change_pressed: {
              bind: 'fireAnalyticsAppStartedChange'
            },
            transfers_analytics_reuse_transfers_list_summary_continue: {
              bind: 'fireAnalyticsAppStartedContinue'
            },
            transfers_analytics_reuse_transfers_list_huella_transfers_otp: {
              bind: 'reuseOperationListFireAppHuellaOtp'
            },
            reuse_operation_active_analytics: {
              bind: 'setAnalyticsRuseTransferFlag'
            },
            reuse_operation_active_analytics_modal: {
              bind: 'setAnalyticsRuseTransferFlag'
            },
            transfers_analytics_reuse_transfers_list_set_transfers_success_data: {
              bind: 'reuseOperationListFireAppCompleted'
            },
            transfers_analytics_reuse_transfers_list_interbank_concept: {
              bind: 'reuseOperationListFireAppHuella'
            }
          },
          out: {
            reuse_operation_app_onclick_start: {
              bind: 'app-on-click-start',
              analytics: analyticsReuse.appOnClickStartList
            },
            reuse_operation_app_onclick_start_modal: {
              bind: 'app-on-click-start-modal',
              analytics: analyticsReuse.appOnClickStartListModal
            },
            reuse_operation_active_analytics: {
              bind: 'app-on-click-start'
            },
            reuse_operation_active_analytics_modal: {
              bind: 'app-on-click-start-modal'
            },
            reuse_operation_app_visit: {
              bind: 'analytics-app-page-visit',
              analytics: analyticsReuse.appPageVisitList
            },
            reuse_operation_app_started: {
              bind: 'analytics-app-started',
              analytics: analyticsReuse.APP_STARTED
            },
            reuse_operation_app_otp: {
              bind: 'analytics-app-step-2',
              analytics: analyticsReuse.APP_STEP_2
            },
            reuse_operation_app_complete: {
              bind: 'analytics-app-completed',
              analytics: analyticsReuse.APP_COMPLETED
            },
            reuse_operation_app_huella: {
              bind: 'analytics-app-huella',
              analytics: analyticsReuse._getAdvancedFootprint('transferencias', 'concepto')
            },
            reuse_operation_app_huella_otp: {
              bind: 'analytics-app-huella-otp',
              analytics: analyticsReuse._getAdvancedFootprint('transferencias', 'otp')
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'DM',
      tag: 'glomo-opx-peer-to-peer-mx-dm',
      familyPath: 'glomo-opx-peer-to-peer-dm',
      properties: {
        isLocalProject: true,
        flagTransfersFlow: true,
        cellsConnections: {
          in: {
            global_set_app_settings: {
              bind: 'handlePublicKey'
            },
            [getChannelName('request_client_id')]: {
              bind: 'getClientIdFromStorage'
            },
            global_storage_get_loginData_success: {
              bind: 'handleGlobalLoginData'
            },
            global_storage_get_loginData_error: {
              bind: 'handleGlobalLoginData'
            },
            global_client_id: {
              bind: 'clientId'
            },
            global_dimo_transfer_enable: {
              bind: 'dimoTransferFeature'
            },
            [getChannelName('_GET_RECIPIENT_MAGIC_QUERY')]: {
              bind: 'saveInputValue'
            },
            blue_send_input_transfer: {
              bind: 'saveInputValue'
            },
            blue_transfers_send_receivers: {
              bind: 'validateResponse'
            },
            [getChannelName('_SET_OPX_RESPONSE_RECEIVERS')]: {
              bind: 'validateResponse'
            },
            [getChannelName('response_key_generated')]: {
              bind: 'responseKeyGenerated'
            },
            [getChannelName('response_data_encrypted_aes')]: {
              bind: 'responseDataCipheredAes'
            },
            [getChannelName('response_data_encrypted_rsa_success')]: {
              bind: 'responseDataEncryptedRSA'
            },
            generic_clabe_search_success: {
              bind: 'handleClabeSearchSuccess'
            },
            [getChannelName('clabe_search_error')]: {
              bind: 'handleClabeSearchError'
            },
            codicel_accept_invite_pre_contact: {
              bind: 'getInviteCoDiCelConfigTransfer'
            },
            transfers_get_all_contacts: {
              bind: 'getAllContacts'
            },
            transfers_response_all_contacts_success: {
              bind: 'filterMobileContact'
            },
            codicel_accept_invite_contact_transfer: {
              bind: 'acceptInviteContact'
            },
            transfers_response_get_contacts_error: {
              bind: 'handlerPermissionDeniedContactsPlugin'
            },
            global_feature_flag_collection_updated: {
              bind: 'featureFlagCollection'
            }
          },
          out: {
            [getChannelName('request_generate_random_key')]: {
              bind: 'generate-random-key'
            },
            [getChannelName('request_encrypt_aes')]: {
              bind: 'cipher-phone-with-aes'
            },
            [getChannelName('request_encrypt_rsa_cipher')]: {
              bind: 'request-encrypt-data-with-rsa'
            },
            [getChannelName('request_decrypt_banxico_response')]: {
              bind: 'decrypt-banxico-response-aes'
            },
            [getChannelName('post_clabe_search')]: {
              bind: 'request-registered-clabe-search'
            },
            close_control_veil: {
              bind: 'close-control-veil'
            },
            global_get_from_storage: {
              bind: 'get-local-storage-codicel'
            },
            global_alert_manager_open_with_settings: {
              bind: 'invite-enroll-codicel'
            },
            transfers_get_all_contacts: {
              bind: 'get-all-contacts-cel'
            },
            transfers_request_get_all_contacts: {
              bind: 'get-all-contacts'
            },
            transfers_close_modal_new_recipient: {
              bind: 'close-modal-new-recipient'
            },
            transfers_share_invitation: {
              bind: 'send-contact-invitation'
            }
          }
        }
      },
      propertiesSpherica: {
        isSpherica,
        newCellsConnections: {
          add: {
            out: {
              transfers_alert_manager_open_with_settings_spherica: {
                bind: 'invite-enroll-codicel'
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
    },
    {
      type: 'DM',
      tag: 'glomo-codicel-crypto-dm',
      zone: 'app__transactional',
      properties: {
        isNative: CONFIG.native,
        keyMocks: CONFIG.mocksCipher,
        cellsConnections: {
          in: {
            [getChannelName('request_generate_random_key')]: {
              bind: 'generateRandomKey'
            },
            [getChannelName('request_encrypt_aes')]: {
              bind: 'encryptAES'
            },
            [getChannelName('request_decrypt_banxico_response')]: {
              bind: 'decryptAES'
            }
          },
          out: {
            [getChannelName('response_key_generated')]: {
              bind: 'random-key-generated'
            },
            [getChannelName('response_data_encrypted_aes')]: {
              bind: 'data-encrypted-aes-success'
            },
            [getChannelName('response_decrypted_banxico_response')]: {
              bind: 'data-decrypted-aes-success'
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'DM',
      tag: 'cells-nativeconnector-cipher',
      properties: {
        isNative: CONFIG.native,
        mocks: CONFIG.mocksCipher,
        cellsConnections: {
          in: {
            [getChannelName('request_encrypt_rsa_cipher')]: {
              bind: 'rsaEncrypt'
            }
          },
          out: {
            [getChannelName('response_data_encrypted_rsa_success')]: {
              bind: 'rsa-encrypt-success'
            }
          }
        }
      }
    },
    {
      zone: 'app__transactional',
      type: 'DM',
      tag: 'cells-dm-global-apis-banxico',
      properties: {
        host: CONFIG.globalServices.host,
        native: CONFIG.native,
        requiredToken: CONFIG.globalServices.requiredToken,
        cellsConnections: {
          in: {
            [getChannelName('post_clabe_search')]: {
              bind: 'postRegisteredClabeSearch'
            },
            transfers_request_spei_availavility: {
              bind: 'getSpeiAvailability'
            }
          },
          out: {
            generic_clabe_search_success: {
              bind: 'success-on-post-banxico-registered-clabe-search'
            },
            [getChannelName('clabe_search_error')]: {
              bind: 'error-on-post-banxico-registered-clabe-search'
            },
            transfers_on_spei_availability_success: {
              bind: 'success-on-get-banxico-spei-availability'
            },
            transfers_on_spei_availability_error: {
              bind: 'error-on-get-banxico-spei-availability'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'glomo-transactions-dm-mx',
      familyPath: 'glomo-transactions-dm',
      properties: {
        monthLimit: 3,
        host: hostServices,
        accountsApiVersion: versionApis.accountsV2,
        apiAggregatorApiVersion: versionApis.apiAggregator,
        cardsApiVersion: versionApis.cards,
        depositsApiVersion: versionApis.deposits,
        addTransactionsType: false,
        productType: 'accounts',
        fixedVersion: true,
        locale: getLocalCurrency(),
        localCurrency: getLocalCurrency(),
        requiredToken,
        includeModelSubheaders: false,
        transactionDetailByCategory: false,
        formatAmountPositive: false,
        formatDate: getFormatDate(),
        language: getLanguage(),
        capitalizeTransactionTitle: true,
        pageSize: 20,
        moreTransactions: true,
        currentPagination: '',
        native,
        enableClaimSection: true,
        uncategorized: 'UNCATEGORIZED',
        addNewOperations: true,
        reuseOperationActive: true,
        cellsConnections: {
          in: {
            reuse_operation_list_set_api_version: {
              bind: 'accountsApiVersion'
            },
            reuse_operation_list_set_card_api_version: {
              bind: 'cardsApiVersion'
            },
            reuse_operation_list_selected_product_id: {
              bind: 'productId'
            },
            reuse_operation_list_selected_product_last_movement: {
              bind: 'lastMovementId'
            },
            reuse_operation_list_selected_product_type: {
              bind: 'productType'
            },
            reuse_operation_list_reques_transactions: {
              bind: 'getTransactions'
            },
            reuse_operation_list_request_more_transactions: {
              bind: 'getMoreTransactions'
            },
            reuse_operation_list_get_movemente_id: {
              bind: 'transactionId'
            },
            reuse_operation_list_get_movemente_full_detail: {
              bind: 'getTransactionDetail'
            },
            transfers_set_transfers_success_data: {
              bind: 'resetAfterOperative'
            },
            [pageChannelPrefix + 'EXIT_TRANSFERS_PAGE_ACCEPT']: {
              bind: 'resetAfterOperative'
            },
            global_equity_error_navigate_back: {
              bind: 'resetAfterOperative'
            }
          },
          out: {
            reuse_operation_error_get_transactions: {
              bind: 'error-on-get-transactions'
            },
            reuse_operation_list_of_product_movements: {
              bind: 'set-transactions'
            },
            reuse_operation_list_selected_movement: {
              bind: 'set-transaction-detail'
            },
            reuse_operation_no_more_movements: {
              bind: 'result-no-pagination'
            }
          }
        }
      }
    }
  ];

  if (isSpherica) {
    UI.push(glomoAlertManagerSpherica);
  }

  if (CONFIG.nativeShell) {
    base.components.push({
      zone: 'app__main',
      tag: 'glomo-mobile-contacts-dm',
      type: 'DM',
      properties: {
        numberLength: 10,
        cellsConnections: {
          in: {
            get_contact_from_contact_list: {
              bind: 'pickContact'
            }
          },
          out: {
            set_contact_from_contact_list: {
              bind: 'contact-changed'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-action-launcher',
      properties: {
        cellsConnections: {
          in: {
            call_line_open_dialer: {
              bind: 'openDialer'
            },
            transfers_share_invitation: {
              bind: 'share'
            }
          }
        }
      }
    },
    {
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-contacts',
      properties: {
        cellsConnections: {
          in: {
            transfers_request_get_all_contacts: {
              bind: 'getAllContacts'
            }
          },
          out: {
            transfers_response_all_contacts_success: {
              bind: 'all-contacts-served'
            },
            transfers_response_get_contacts_error: {
              bind: 'error'
            }
          }
        }
      }
    }
    );
  }

  base.components.push(...UI, ...DMS);
  localStorageApp.addOutStorageChannels(base.components, ['loginData', 'codicel_peer_to_peer', 'last_five_send_codicel', 'standInTransferCount'], CONFIG);
  const singConnector = require('./common/_sign-connector')(CONFIG)(base);
  const addSignConnector = (component, events) => singConnector(component, PAGENAME, events);
  addSignConnector('glomo-transfers-mx-dm', ['set-transfers-success-data', 'retry-error']);

  addSignConnector('cells-dm-global-apis-exchange-rates', ['success-on-exchange-settlement', 'error-on-exchange-settlement']);

  addSignConnector('cells-dm-global-apis-private-banking-portfolios', ['success-on-post-equity-transfers', 'error-on-post-equity-transfers']);

  addSignConnector('cells-dm-global-apis-operation-registries', ['success-on-post-operation-registries-data', 'error-on-post-operation-registries-data']);

  pageDmsOutCommonErrors(base)([
    {
      id: 'INFORMATION-MODAL-BACK-TO-START',
      acceptRetry: { bind: 'backToStartDashboardOrProductDetail', component: 'glomo-transfers-mx-dm' },
      cancelRetry: { bind: 'backToStartDashboardOrProductDetail', component: 'glomo-transfers-mx-dm' }
    },
    {
      id: 'OWN-TRANSFER-FOREIGN-CURRENCY-ERROR',
      acceptRetry: { bind: 'cleanForeignCurrencyProps', component: 'glomo-opx-transfer-mx-dm' },
      cancelRetry: { bind: 'backToStartDashboardOrProductDetail', component: 'glomo-transfers-mx-dm' }
    },
    {
      id: 'ACCEPT-BACK-ON-SAME-PAGE',
      cancelRetry: { bind: 'backToStartDashboardOrProductDetail', component: 'glomo-transfers-mx-dm' }
    },
    {
      id: 'CALL-BBVA-LINE',
      acceptRetry: { bind: 'openDialer', component: 'glomo-opx-transfer-mx-dm' },
      cancelRetry: { bind: 'backToStartDashboardOrProductDetail', component: 'glomo-transfers-mx-dm' }
    },
    {
      id: 'transfer-error-default',
      acceptCallForHelp: { bind: 'backToStartDashboardOrProductDetail', component: 'glomo-transfers-mx-dm' },
      cancelRetry: { bind: 'backToStartDashboardOrProductDetail', component: 'glomo-transfers-mx-dm' }
    }
  ]);

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
