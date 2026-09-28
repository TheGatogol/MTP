/* eslint-disable max-statements */
'use strict';
const {
  getLocalCurrency, useNames, getLanguage, createPrefixFromPageName, SPINNERSPHERICA: getSpinner} = require('./common/helpers/_utils');
const getinstantCashConfig = require('./instantCash/_config');
const getComponentTemplates = require('./instantCash/_templates');
const PAGE_NAME_CHANNEL = 'instant_cash';
const pageName = 'instantCash';

module.exports = CONFIG => {
  const operativePrefix = createPrefixFromPageName(pageName);
  const [getChannelName, getLocaleName] = useNames(operativePrefix);
  const {
    responseOperatorSettings,
    responseHandlerSettings,
    requestRetryHandlerSettings
  } = getinstantCashConfig(CONFIG, pageName);

  const language = getLanguage(CONFIG);
  const localCurrency = getLocalCurrency(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const MAX_STEPS = 3;
  const { alertManagerTemplates } = getComponentTemplates(CONFIG, pageName, true);
  const ANALYTICS = require('./analytics/_instantCash')(CONFIG);
  const bbvaPhoneNumberAssistant = CONFIG.phoneNumberAssistant;
  const spinner = getSpinner(CONFIG);
  spinner.properties = spinner.propertiesSpherica;
  delete spinner.propertiesSpherica;

  spinner.properties.className = 'solid-spinner';
  const _localStorage = require('./common/_local-storage');
  const cmbConfig = {
    operativeName: pageName,
    productName: 'EFI',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    migrationGenesys: true,
    notGlobalInitConfigurationChannel: true
  };
  const {controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(cmbConfig);

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          'instant_cash_open_modal_spherica': {
            bind: 'openWithSettings'
          }
        },
        out: {
          instant_cash_exit_modal_accept: {
            bind: 'alert-INSTANT-CASH-CONFIRM-MODAL-accept'
          }
        }
      }
    }
  };

  const lifeCycleHandler = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-handle-life-cycle',
    properties: {
      pageName,
      private: false,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          global_refresh_dashboard_generic: {
            bind: 'init-page',
            'forward-to-native': true
          },
          [getChannelName('page_initialized')]: {
            bind: 'init-page'
          },
          [getChannelName('page_initialized_first_time')]: {
            bind: 'init-page-first-time'
          },
          instant_cash__call_me_back_reset_step: {
            bind: 'reset'
          },
          instant_cash__call_me_back_initialize: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
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
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'close-instant-cash-operative',
      cellsConnections: {
        in: {
          [getChannelName('exit_operative')]: {
            bind: 'goBack'
          }
        },
        out: {
          global_instant_cash_operative_exit: {
            bind: 'close-instant-cash-operative',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'close-instant-cash-operative'
          }
        }
      }
    }
  };
  const instantCashDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-instant-cash-mx-dm',
    familyPath: 'glomo-opx-instant-cash-dm',
    properties: {
      isSpherica: true,
      isGlobal: true,
      localCurrency,
      lang: language,
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      totalHeight: '1600',
      operativeName: pageName.toUpperCase(),
      host: CONFIG.globalServices.host,
      cardsApiVersion: CONFIG.globalServices.versions.cards,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      uiTemplates: alertManagerTemplates,
      responseOperators: responseOperatorSettings,
      responseHandlers: responseHandlerSettings,
      requestRetryHandlerSets: requestRetryHandlerSettings,
      phoneNumberAdvisor: bbvaPhoneNumberAssistant,
      cellsConnections: {
        in: {
          [getChannelName('view_all_acounts')]: {
            bind: 'viewAll'
          },
          [getChannelName('exit_operative_request')]: {
            bind: 'canExitOperativeStraightForward'
          },
          [getChannelName('reset_operative')]: {
            bind: 'exitOperative'
          },
          instant_cash_exit_modal_accept: {
            bind: 'exitOperative'
          },
          [getChannelName('page_initialized')]: {
            bind: 'getCustomerDetail'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          },
          global_opened_modal: {
            bind: 'hasAnyOpenModal'
          },
          [getChannelName('INIT_STEPS')]: {
            bind: 'init'
          },
          [getChannelName('SUCCESS_CUSTOMER_ID_DETAIL')]: {
            bind: 'contactDetails'
          },
          [getChannelName('ERROR_CUSTOMER_ID_DETAIL')]: {
            bind: 'contactDetails'
          },
          [getChannelName('key_values_list_icon_clicked')]: {
            bind: 'onKeyValueHelpIconClicked'
          },
          [getChannelName('header_category_icon_clicked')]: {
            bind: 'onHeaderCategoryHelpIconClicked'
          },
          dashboard_customer_email: {
            bind: 'setEmail'
          },
          [getChannelName('on_deposit_account_selected')]: {
            bind: 'onDepositAccountSelected'
          },
          [PAGE_NAME_CHANNEL + '_GET_RESPONSE_ASSISTANCE']: {
            bind: 'advisorResponseData'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          dashboard_oc_banner_instant_cash_clicked: {
            bind: 'setParams'
          },
          contract_product_section_oc_banner_instant_cash_clicked: {
            bind: 'setParams'
          },
          navigation_from_futura_dashboard: {
            bind: 'setParamsFutura'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'getOfferDetail'
          },
          global_get_offer_banner: {
            bind: 'getInfoOffers'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          [getChannelName('hire_instant_cash')]: {
            bind: 'hireInstantCashHandlingAttempts'
          },
          [getChannelName('page_initialized')]: {
            bind: 'initialize'
          },
          [getChannelName('register_step')]: {
            bind: 'registerStepsTest'
          },
          [getChannelName('go_next_step')]: {
            bind: 'goNextStep'
          },
          [getChannelName('on_first_step_continue_button_pressed')]: {
            bind: 'onFirstStepContinue'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('go_to_call_me_back_flow')]: {
            bind: 'goToCallMeBackFlow'
          },
          [getChannelName('first_step_change_pressed')]: {
            bind: 'onBackIntoFirstStep'
          },
          [getChannelName('last_step_continue')]: {
            bind: 'onLastStepContinue'
          },
          instant_cash_number_quotas_selected_changed: {
            bind: 'performTermSimulation'
          },
          [getChannelName('amount_input_blur')]: {
            bind: 'onAmountInputBlur'
          },
          [getChannelName('amount_input_blur_empty')]: {
            bind: 'onAmountInputBlurEmpty'
          },
          [getChannelName('amount_changed')]: {
            bind: 'onAmountChanged'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'onAmountInputFocus'
          },
          [getChannelName('CONTINUE_NEXT_STEP')]: {
            bind: 'onFirstStepContinue'
          },
          instant_cash_on_click_link_rates: {
            bind: 'openModalRates'
          }
        },
        out: {
          'instant_cash_open_modal_spherica': {
            bind: 'open-modal'
          },
          [getChannelName('has_icon_message')]: {
            bind: 'has-icon-message-top-amount'
          },
          [getChannelName('analytics_simulation_data_persist')]: {
            bind: 'analytics-persist-simulation-data'
          },
          [getChannelName('analytics_offer_hiring_data_persist')]: {
            bind: 'analytics-persist-offer-hiring-success'
          },
          [getChannelName('analytics_offer_hiring_data_persist-error')]: {
            bind: 'analytics-persist-offer-hiring-error'
          },
          [getChannelName('ICON_MESSAGE_DATA')]: {
            bind: 'set-icon-message-text'
          },
          global_hanlder_native_back_button: {
            bind: 'close-current-open-modal'
          },
          set_call_instant_cash: {
            bind: 'set-secondary-text-button'
          },
          instant_cash_successful_screen: {
            bind: 'navigate-to-successful-screen',
            link: {
              page: 'instantCashReview',
              cleanUntil: 'instantCash'
            }
          },
          global_retargeting_contracted_product: {
            bind: 'navigate-to-successful-screen'
          },
          [getChannelName('_CHANGE_HEADER_TOOLTIP_STATUS')]: {
            bind: 'change-tooltip-status'
          },
          [getChannelName('_SET_TIMEOUT_SHOW_TOOLTIP')]: {
            bind: 'set-timeout-show-tooltip'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('REQUEST_CUSTOMER_ID_DETAIL')]: {
            bind: 'request-customer-detail'
          },
          [getChannelName('set_step_instant_cash_properties')]: {
            bind: 'set-step-instant-cash-properties'
          },
          [getChannelName('exit_operative')]: {
            bind: 'exit-operative'
          },
          [getChannelName('steps_registered')]: {
            bind: 'steps-registered-changed'
          },
          [getChannelName('manage_first_step_summary_content')]: {
            bind: 'manage-first-step-summary-content'
          },
          [getChannelName('set_step_instant_cash_property')]: {
            bind: 'set-step-instant-cash-property'
          },
          [getChannelName('set_step_product_selector_properties')]: {
            bind: 'set-step-product-selector-properties'
          },
          [getChannelName('set_step_recipient_selector_properties')]: {
            bind: 'set-step-recipient-selector-properties'
          },
          [getChannelName('set_modal_selector_properties')]: {
            bind: 'set-modal-selector-properties'
          },
          [getChannelName('show_confirm_channel')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('current_step')]: {
            bind: 'current-step-changed'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('PERSIST_CURRENT_SELECTED')]: {
            bind: 'persist-current-selected-amount'
          },
          instant_cash_change_visibility_first_step: {
            bind: 'change-recipient-hidden-prop'
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          global_retargeting_form_submission: {
            bind: 'hide-spinner'
          },
          set_selected_term: {
            bind: 'set-selected-term'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('INIT_STEPS')]: {
            bind: 'init-steps'
          },
          global_instant_cash_share_receipt_data: {
            bind: 'set-instant-cash-share-receipt-data'
          },
          instant_cash_reload_current_amount_simulated: {
            bind: 'analytics-persist-simulation-data'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };
  const moleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header-spherica',
    properties: {
      variant: 'primary',
      className: `header--white header ${isNativeIos ? 'safe-card-header' : ''}`,
      rightIcon: 'coronita:close',
      rightIconText: 'bbva-header-main-close-aria-label',
      rightIconSize: '24',
      rightIconAction: 'close-operative',
      rightSecondaryIcon: 'coronita:telephone',
      rightIconSecondaryText: 'bbva-header-main-call-aria-label',
      rightSecondaryIconSize: '24',
      setTimeoutHideTooltip: '3000',
      titleName: 'instant-cash-header-title',
      secondaryClass: 'header--core',
      cellsConnections: {
        in: {
          [getChannelName('on_first_step_continue_button_pressed')]: {
            bind: 'setSecondaryClass'
          },
          [getChannelName('reset_operative')]: {
            bind: 'removeSecondaryClass'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          instant_cash__call_me_back_change_header_tooltip_status: {
            bind: 'hasDisplayedTooltip'
          },
          instant_cash__call_me_back_set_header_timeout_tooltip: {
            bind: 'setTimeoutShowTooltip'
          },
          instant_cash__call_me_back_set_header_configuration: {
            bind: 'setProperties'
          }
        },
        out: {
          navigation_app_list_to_page: {
            bind: 'close-operative'
          },
          [getChannelName('reset_operative')]: {
            bind: 'close-operative'
          },
          instant_cash__call_me_back_init_header_configuration: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    }
  };
  const stepRecipientSelector = {
    zone: 'app__main',
    tag: 'cells-step-recipient-selector-spherica',
    type: 'UI',
    properties: {
      stepTitle: 'instant-cash-step-recipient-title-lower-case',
      nameRightToImage: false,
      notInitializeWithAttached: true,
      active: true,
      collapsed: true,
      skip: true,
      previous: true,
      fixed: true,
      registeredOperationHidden: true,
      hideCurrentStepLabel: true,
      localCurrency,
      hidden: true,
      changeLabel: '',
      className: 'font-size-ml show-header with-line-height-quantities show-quantities',
      imgWidth: 48,
      imgHeight: 32,
      defaultImage: './images/cards/cardFrontDefaultVisa.svg',
      saved: true,
      productSelected: true,
      disableChange: true,
      cellsConnections: {
        in: {
          [getChannelName('set_step_recipient_selector_properties')]: {
            bind: 'setProperties'
          },
          instant_cash_reset_page: {
            bind: 'reset'
          },
          instant_cash_change_visibility_first_step: {
            bind: 'hidden'
          }
        }
      }
    }
  };
  const productSelectorModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-product-selector-modal-spherica',
    properties: {
      className: 'selected-product selector-hiring deposit-hiring',
      showCloseModalButton: true,
      modalTitle: 'glomo-deposit-hiring-accounts-step-selector-modal-title',
      closeButtonLabel: 'glomo-deposit-hiring-accounts-step-selector-modal-button',
      localCurrency,
      cellsConnections: {
        in: {
          [getChannelName('view_all_acounts')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('modal_selected_account')]: {
            bind: 'select-product'
          }
        }
      }
    }
  };
  const stepInstantCash = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-instant-cash-spherica-mx',
    familyPath: 'cells-step-instant-cash-spherica',
    properties: {
      currentStep: 1,
      maxSteps: MAX_STEPS,
      active: true,
      stepId: 'instant-cash-offer-detail-step',
      localCurrency,
      language,
      hideCurrentStepLabel: true,
      hideHeader: true,
      advice: 'element.style: var(font-weight: 300)',
      showAmountTextOnInfobox: true,
      classColorAdvice: '',
      className: 'main-banner-no-margin',
      secondaryButtonLabel: 'instant-cash-first-step-sticky-section-secondary-button-label',
      stepTitle: '',
      changeLabel: 'instant-cash-first-step-change-label-spherica',
      cardAdvice: {
        imageUrl: './images/spherica/deposit-account.svg',
        centered: true,
        class: 'info-card',
        size: '2XL',
        sizeImage: 'XL',
        isMaskDown: true,
        cardNumberMasked: true,
        showCardMask: true,
        maskChars: '•',
        isBackgroundUpper: true,
        isBackgroundDark: true,
        titleText: 'instant-cash-first-step-card-advice-title',
        textFeature: 'instant-cash-first-step-features-title-spherica',
        listInfo: [
          'instant-cash-first-step-features-first-feature',
          'instant-cash-first-step-features-second-feature',
          'instant-cash-first-step-features-third-feature',
          'instant-cash-first-step-features-fourth-feature'
        ]
      },
      iconMessageTopAmount: [
        {
          iconMessageTop: {
            heading: 'instant-cash-first-step-icon-title-top-amount-heading',
            type: 'info',
            icon: 'coronita:dollar',
            iconSize: '26'
          }
        }
      ],

      fullSummary: [
        {
          id: 'amount-section',
          title: 'instant-cash-first-step-full-summary-amount-section-title-spherica',
          description: 'instant-cash-first-step-full-summary-amount-section-description-spherica',
          hideStickyContainerOn: {
            'amount-input-focus': true,
            'amount-input-focus-out': false
          },
          validateAmountInput: {
            invalid: true,
            currency: localCurrency,
            amountLabel: 'instant-cash-first-step-full-summary-amount-section-amount-input-label',
            infoMessage: 'instant-cash-first-step-full-summary-amount-section-amount-input-info-message',
            customErrorMessageMax: 'instant-cash-first-step-full-summary-amount-section-amount-input-error-message-max',
            customErrorMessageMin: 'instant-cash-first-step-full-summary-amount-section-amount-input-error-message-min',
            autoFormat: false,
            min: 100
          }
        },
        {
          id: 'term-section',
          title: 'instant-cash-first-step-full-summary-term-section-title-spherica',
          description: 'instant-cash-first-step-full-summary-term-section-description-spherica',
          selectModal: {
            title: 'instant-cash-first-step-full-summary-term-section-select-modal-title',
            disabled: false
          }
        },
        {
          id: 'taxes-and-commissions-section',
          title: 'instant-cash-first-step-full-summary-taxes-and-commissions-section-title-spherica',
          hasHelp: true,
          keyValuesList: {
            list: [
              {
                id: 'annual-rate',
                key: 'instant-cash-first-step-full-summary-taxes-and-commissions-section-annual-fixed-interest-rate-key',
                icon: 'coronita:help',
                class: 'inline'
              },
              {
                id: 'disposition-commission',
                key: 'instant-cash-first-step-full-summary-taxes-and-commissions-section-commission-per-disposition-key',
                icon: 'coronita:help',
                class: 'inline'
              },
              {
                id: 'cat-rate',
                key: 'instant-cash-first-step-full-summary-taxes-and-commissions-section-cat-rate-key',
                icon: 'coronita:help',
                class: 'inline'
              }
            ]
          },
          textDescription: {
            id: 'list',
            link: {text: 'instant-cash-first-step-full-summary-taxes-and-commissions-section-rates-link-text'}
          }
        }
      ],
      propPathsUpdatedOnSticky: [
        {
          path: 'showSecondaryButton'
        }
      ],
      cellsConnections: {
        in: {
          [getChannelName('has_icon_message')]: {
            bind: 'hasIconMessageTopAmount'
          },
          [getChannelName('exit_operative')]: {
            bind: 'resetFullSumary'
          },
          instant_cash_reset_operative: {
            bind: 'reset'
          },
          [getChannelName('manage_first_step_summary_content')]: {
            bind: 'manageSummaryContent'
          },
          set_call_instant_cash: {
            bind: 'stickySection'
          },
          [getChannelName('page_initialized')]: {
            bind: 'manageSummaryContent'
          },
          [getChannelName('INIT_STEPS')]: {
            bind: 'initialize'
          },
          [getChannelName('set_step_instant_cash_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_step_instant_cash_property')]: {
            bind: 'setWrapper'
          },
          set_selected_term: {
            bind: 'selectedNumberQuotas'
          },
          [getChannelName('template_content_scroll')]: {
            bind: 'manageCurrentScroll'
          },
          [getChannelName('PERSIST_CURRENT_SELECTED')]: {
            bind: 'filledSummary'
          },
          instant_cash__call_me_back_show_sticky_button: {
            bind: 'secondaryButtonLabel'
          },
          global_call_me_back_show_secondary_button: {
            bind: 'showSecondaryButton'
          },
          instant_cash_reload_current_amount_simulated: {
            bind: 'restorePreviousAmount'
          }
        },
        out: {
          [getChannelName('open_modal_selector')]: {
            bind: 'open-document-modal-selector'
          },
          [getChannelName('on_first_step_continue_button_pressed')]: {
            bind: 'summary-closed'
          },
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('analitics_step_one_collapsed')]: {
            bind: 'collapsed-changed'
          },
          [getChannelName('first_step_change_pressed')]: {
            bind: 'change-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'amount-input-focus'
          },
          [getChannelName('amount_input_blur')]: {
            bind: 'amount-changed-on-blur'
          },
          [getChannelName('amount_input_blur_empty')]: {
            bind: 'amount-changed-empty'
          },
          [getChannelName('amount_changed')]: {
            bind: 'amount-changed'
          },
          global_retargeting_select_amount: {
            bind: 'amount-changed-on-blur'
          },
          instant_cash__call_me_back_init_sticky_configuration: {
            bind: 'first-step-secondary-button-pressed'
          },
          [getChannelName('key_values_list_icon_clicked')]: {
            bind: 'cells-key-values-list-icon-clicked'
          },
          [getChannelName('header_category_icon_clicked')]: {
            bind: 'help-click'
          },
          [getChannelName('CONTINUE_NEXT_STEP')]: {
            bind: 'continue-next-step'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-next-step'
          },
          instant_cash_on_click_link_rates: {
            bind: 'open-rates-select-modal'
          }
        }
      }
    }
  };
  const stepProductSelector = {
    zone: 'app__main',
    tag: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      changeLabel: 'instant-cash-first-step-change-label-spherica',
      visibleChars: 4,
      resetOnFocus: true,
      stepId: 'instant-cash-product-selection-step',
      currentStep: 2,
      maxSteps: MAX_STEPS,
      stepTitle: 'instant-cash-step-product-selector-title',
      localCurrency,
      disabled: true,
      shouldHideChangeButton: false,
      hideCurrentStepLabel: true,
      notSavedState: true,
      isInstantCash: true,
      showDescriptionOneProduct: true,
      cellsConnections: {
        in: {
          [getChannelName('INIT_STEPS')]: {
            bind: 'initialize'
          },
          [getChannelName('set_step_product_selector_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('modal_selected_account')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('reset_operative')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('on_deposit_account_selected')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_deposit_account_change')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analitics_step_two_collapsed')]: {
            bind: 'collapsed-changed'
          },
          [getChannelName('view_all_acounts')]: {
            bind: 'view-all'
          }
        }
      }
    }
  };
  const stepChecklist = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract-spherica',
    properties: {
      stepTitle: 'instant-cash-terms-and-conditions-step-step-title-lower-case',
      isButtonPrimary: true,
      buttonContinueAditionalClass: 'size-ml',
      variant: 'primary-alt',
      className: 'size-ml',
      style: 'min-height: 0;',
      consultText: null,
      changeLabel: getLocaleName('terms-change-label'),
      stepId: 'instant-cash-terms-and-conditions-step',
      currentStep: 3,
      maxSteps: MAX_STEPS,
      hideChangeDataBox: true,
      checkboxList: [
        {
          valid: false,
          active: true,
          buttonText: 'instant-cash-terms-and-conditions-step-first-checkbox-text'
        }
      ],
      cellsConnections: {
        in: {
          [getChannelName('INIT_STEPS')]: {
            bind: 'initialize'
          },
          [getChannelName('set_step_card_checklist_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('notify_step_card_checklist_path')]: {
            bind: 'notifyPath'
          },
          global_exit_oc_loan_offer: {
            bind: 'reset'
          },
          [getChannelName('reset_operative')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('go_next_step')]: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_step_three_change')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analitics_step_third_collapsed')]: {
            bind: 'collapsed-changed'
          }
        }
      }
    }
  };
  const zoneContainer = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view-spherica',
    properties: {
      primaryButtonClass: 'positive',
      showAddition: true,
      buttonLabel: 'instant-cash-step-summary-button',
      className: 'instant-cash',
      cellsConnections: {
        out: {
          [getChannelName('hire_instant_cash')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };
  const template = {
    tag: 'glomo-opx-template-spherica',
    properties: {
      className: 'bg-light-grey header-fixed remove-display-container-slot',
      extraHeaderClass: 'bbva-light-grey',
      animationType: 'verticalUp',
      headerFixed: true,
      iOSFixedHeader: isNativeIos,
      delayScrollTop: 300,
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getChannelName('show_confirm_channel')]: {
            bind: 'showConfirm'
          },
          [getChannelName('page_initialized')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'scrollItemIntoView'
          }
        },
        out: {
          [getChannelName('template_content_scroll')]: {
            bind: 'opx-template-content-scroll'
          },
          [getChannelName('template_content_scroll')]: {
            bind: 'template-content-scroll'
          }
        }
      }
    }
  };
  const modalSelector = {
    zone: 'app__transactional',
    tag: 'cells-modal-selector-spherica',
    type: 'UI',
    properties: {
      hideCheckIcon: true,
      noFocusOrigin: true,
      cellsConnections: {
        in: {
          instant_cash_reset_page: {
            bind: 'reset'
          },
          [getChannelName('set_modal_selector_properties')]: {
            bind: 'items'
          },
          [getChannelName('open_modal_selector')]: {
            bind: 'open'
          }
        },
        out: {
          instant_cash_number_quotas_selected_changed: {
            bind: 'item-selected-changed'
          },
          global_retargeting_period_month: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };
  const apiCustomer = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: CONFIG.globalServices.host,
      contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'customerId'
          },
          [getChannelName('REQUEST_CUSTOMER_ID_DETAIL')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getChannelName('SUCCESS_CUSTOMER_ID_DETAIL')]: {
            bind: 'set-customer-detail'
          },
          [getChannelName('ERROR_CUSTOMER_ID_DETAIL')]: {
            bind: 'error-on-get-customer-detail'
          }
        }
      }
    }
  };
  const analyticsInstantCash = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-instant-cash-analytics-manager-mx',
    familyPath: 'glomo-instant-cash-manager',
    properties: {
      language,
      localCurrency,
      cellsConnections: {
        in: {
          CMB_ASSISTANCE_MANAGER: {
            bind: 'callMeBackAssistanceManagerLink'
          },
          [getChannelName('analitics_step_one_collapsed')]: {
            bind: 'stepOneCollapsedUpdate'
          },
          [getChannelName('analitics_step_two_collapsed')]: {
            bind: 'stepTwoCollapsedUpdate'
          },
          [getChannelName('analitics_step_third_collapsed')]: {
            bind: 'stepThirdCollapsedUpdate'
          },
          [getChannelName('page_initialized')]: {
            bind: 'fireAppPageVisit'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'fireAppStartedAmount'
          },
          [getChannelName('open_modal_selector')]: {
            bind: 'fireAppStartedLapse'
          },
          [getChannelName('key_values_list_icon_clicked')]: {
            bind: 'handleOfferTooltip'
          },
          [getChannelName('CONTINUE_NEXT_STEP')]: {
            bind: 'fireAppStartedContinueButton'
          },
          [getChannelName('analytics_simulation_data_persist')]: {
            bind: 'parseDataToPersist'
          },
          [getChannelName('analytics_offer_hiring_data_persist')]: {
            bind: 'parseDataHiringSuccess'
          },
          [getChannelName('analytics_offer_hiring_data_persist-error')]: {
            bind: 'parseDataHiringError'
          },
          [getChannelName('first_step_change_pressed')]: {
            bind: 'fireFingerprintReturnToFirstStep'
          },
          [getChannelName('analytics_deposit_account_change')]: {
            bind: 'fireFingerprintReturnToSecondStep'
          },
          [getChannelName('analytics_step_three_change')]: {
            bind: 'fireFingerprintReturnToThirdStep'
          }
        },
        out: {
          [getChannelName('analytics_app_page_visit')]: {
            bind: 'analytics-app-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('analytics_app_started_amount')]: {
            bind: 'analytics-app-started-amount',
            analytics: ANALYTICS._getAppStarted('importe')
          },
          [getChannelName('analytics_app_started_lapse')]: {
            bind: 'analytics-app-started-lapse',
            analytics: ANALYTICS._getAppStarted('plazo')
          },
          [getChannelName('analytics_app_started_interest_rates')]: {
            bind: 'analytics-app-started-interest-rates',
            analytics: ANALYTICS._getAppStarted('tasas y comisiones')
          },
          [getChannelName('analytics_app_started_cat')]: {
            bind: 'analytics-app-started-cat',
            analytics: ANALYTICS._getAppStarted('cat')
          },
          [getChannelName('analytics_app_started_average_monthly_interest')]: {
            bind: 'analytics-app-started-average-monthly-interest',
            analytics: ANALYTICS._getAppStarted('tasa interes promedio mensual')
          },
          [getChannelName('analytics_app_started_annual_interest_rate')]: {
            bind: 'analytics-app-started-annual-interest-rate',
            analytics: ANALYTICS._getAppStarted('tasa interes fija anual')
          },
          [getChannelName('analytics_app_started_withdrawal_interest')]: {
            bind: 'analytics-app-started-withdrawal-interest',
            analytics: ANALYTICS._getAppStarted('comision por disposicion')
          },
          [getChannelName('analytics_app_started_continue_button')]: {
            bind: 'analytics-app-started-continue-button',
            analytics: ANALYTICS._getAppStarted('me interesa')
          },
          [getChannelName('analytics_app_step_deposit_account')]: {
            bind: 'analytics-app-step-2',
            analytics: ANALYTICS._getAppStep(2, '2 cuenta de deposito')
          },
          [getChannelName('analytics_app_step_terms_and_conditions')]: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS._getAppStep(3, '3 terminos y condiciones')
          },
          [getChannelName('analytics_app_step_confirmation')]: {
            bind: 'analytics-app-step-4',
            analytics: ANALYTICS._getAppStep(4, '4 confirmacion')
          },
          [getChannelName('analytics_app_completed_success')]: {
            bind: 'analytics-app-completed-success',
            analytics: ANALYTICS.getAppCompleted('contratado', {bind: 'operationNumber'})
          },
          [getChannelName('analytics_app_completed_error')]: {
            bind: 'analytics-app-completed-error',
            analytics: ANALYTICS.getAppCompletedWithError('rechazado', {bind: 'userSegmentProfile'})
          },
          [getChannelName('analytics_fingerprint_modal_interest_rates')]: {
            bind: 'analytics-fingerprint-modal-interest-rates',
            analytics: ANALYTICS._getInternalLink('tasas y comisiones', '1 detalle')
          },
          [getChannelName('analytics_fingerprint_modal_cat')]: {
            bind: 'analytics-fingerprint-modal-cat',
            analytics: ANALYTICS._getInternalLink('cat', '1 detalle')
          },
          [getChannelName('analytics_fingerprint_modal_average_monthly_interest')]: {
            bind: 'analytics-fingerprint-modal-average-monthly-interest',
            analytics: ANALYTICS._getInternalLink('tasa interes promedio mensual', '1 detalle')
          },
          [getChannelName('analytics_fingerprint_modal_annual_interest_rate')]: {
            bind: 'analytics-fingerprint-modal-annual-interest-rate',
            analytics: ANALYTICS._getInternalLink('tasa interes fija anual', '1 detalle')
          },
          [getChannelName('analytics_fingerprint_modal_withdrawal_interest')]: {
            bind: 'analytics-fingerprint-modal-withdrawal-interest',
            analytics: ANALYTICS._getInternalLink('comision por disposicion', '1 detalle')
          },
          [getChannelName('analytics_fingerprint_return_to_offer')]: {
            bind: 'analytics-fingerprint-return-to-offer',
            analytics: ANALYTICS._getInternalLink('cambiar datos de la operacion', '4 confirmacion')
          },
          [getChannelName('analytics_fingerprint_return_to_account_selection')]: {
            bind: 'analytics-fingerprint-return-to-account-selection',
            analytics: ANALYTICS._getInternalLink('cambiar cuenta de deposito', '4 confirmacion')
          },
          [getChannelName('analytics_fingerprint_return_to_terms_and_conditions')]: {
            bind: 'analytics-fingerprint-return-to-terms-and-conditions',
            analytics: ANALYTICS._getInternalLink('consulta terminos y condiciones', '4 confirmacion')
          },
          [getChannelName('analytics_internal_link')]: {
            bind: 'analytics-internal-link-secondary-button',
            analytics: ANALYTICS.INTERNAL_LINK_ASSISTANCE_MANAGER
          },
          [getChannelName('analytics_internal_link_call_header')]: {
            bind: 'analytics-internal-link-call-header',
            analytics: ANALYTICS.INTERNAL_LINK_ASSISTANCE_MANAGER_HEADER
          }
        }
      }
    }
  };
  const dm = [navigationHandler, lifeCycleHandler, instantCashDm, analyticsInstantCash, apiCustomer, controllerCmb];
  const steps = [stepRecipientSelector, stepInstantCash, stepProductSelector, stepChecklist];
  const modals = [ modalSelector ];
  const ui = [spinner, moleculeHeader, ...steps, ...modals, zoneContainer, productSelectorModal];
  const base = {
    hash: pageName,
    currentPage: {
      url: '/instant-cash'
    },
    template,
    components: [...dm, ...ui]
  };

  base.components.push(glomoAlertManagerSpherica);
  _localStorage.addOutStorageChannels(base.components, [ 'call_me_back' ], CONFIG);
  return base;
};
