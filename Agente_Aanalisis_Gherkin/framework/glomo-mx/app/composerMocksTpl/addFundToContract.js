/* eslint-disable complexity, max-statements */
'use strict';
module.exports = CONFIG => {
  const {
    useNames,
    createPrefixFromPageName,
    getLocalCurrency,
    getLanguage,
    createSpinner,
    headerHeight
  } = require('./common/helpers/_utils');
  const PAGE_NAME = 'addFundToContract';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)('addFundToContract');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const ANALYTICS = require('./analytics/_fundAddNewContract')();
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { accounts, contactsBook } },
    native = false,
    nativeIos = false,
    settingsHost,
    namespace,
    endpoints: { fundList }
  } = CONFIG;

  const { minFundsAmounts } = require('./common/fundHelpers/_fundList');

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      headerHeight,
      headerFixed: true,
      iOSFixedHeader: true,
      topOnConfirm: true,
      className: 'funds-investment header-fixed',
      extraHeaderClass: 'dark-blue-bg',
      cellsConnections: {
        in: {
          [getChannelName('show_button_finish_steps')]: {
            bind: 'showConfirm'
          },
          add_fund_to_contract_init_page: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('exit_funds_hiring_flow')]: {
            bind: 'close'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'close'
          },
          [getChannelName('reset_from_fund_selected')]: {
            bind: 'close'
          },
          [getChannelName('cells_scroll_zone_modify')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('CONFIRM_ANIMATION')]: {
            bind: 'collapseOpened'
          }
        },
        out: {
          [getChannelName('SCROLL_TEMPLATE')]: {
            bind: 'opx-template-content-scroll'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: nativeIos ? 'header--white' : ''
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false,
        'not-collapse-any-steps': true
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
          add_fund_to_contract_init_page: {
            bind: 'init-page'
          },
          [getChannelName('not_collapse_any_steps')]: {
            bind: 'not-collapse-any-steps'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const spinner  = createSpinner(CONFIG);
  if (isSpherica) {
    spinner.tagSpherica = 'cells-spinner-veil-spherica';
  }
  spinner.properties.className = `${nativeIos ? 'feedback-ios-top-padding ' : ''}solid-spinner`;
  spinner.properties.open = true;
  spinner.properties.cellsConnections.in = {
    ...spinner.properties.cellsConnections.in,
    [`global_${getChannelName('show_branch_modal')}`]: {
      bind: 'hide'
    },
    [`global_${getChannelName('TOGGLE_SPINNER')}`]: {
      bind: 'hide'
    },
    [getChannelName('FUNDS_FILTER_HIDDE_SPINNER')]: {
      bind: 'hide'
    },
    [getChannelName('reset_entire_flow_after_success')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_VARIABLE')]: {
      bind: 'hide'
    },
    [getChannelName('GET_INVESTMENT_FUNDS_LIST')]: {
      bind: 'show'
    },
    [getChannelName('SET_INVESTMENT_FUNDS_LIST')]: {
      bind: 'hide'
    },
    [getChannelName('FUNDS_FILTER_SHOW_SPINNER')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_SHOW_SPINNER_VARIABLE')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_SHOW_SPINNER_ALL_PRODUCTS')]: {
      bind: 'show'
    },
    [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_ALL_PRODUCTS')]: {
      bind: 'hide'
    },
    [getChannelName('view_all_accounts')]: {
      bind: 'hide'
    },
    [getChannelName('POST_FUND_SIMULATE')]: {
      bind: 'show'
    },
    [getChannelName('HIDE_SPINNER_FUND_SIMULATE')]: {
      bind: 'hide'
    },
    [getChannelName('REQUEST_FUND_DETAIL_MODAL')]: {
      bind: 'show'
    },
    [getChannelName('SET_DATA_DETAILS_SECTION_MODAL')]: {
      bind: 'hide'
    },
    [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
      bind: 'show'
    },
    [getChannelName('HIDE_SPINNER_FUND_CONTRACT')]: {
      bind: 'hide'
    },
    [getChannelName('ERROR_CONTRACT_MODAL_OPEN')]: {
      bind: 'hide'
    },
    [getChannelName('ERROR_LIST_FUNDS_AVAILABLE_REQUEST')]: {
      bind: 'closeVeil'
    },
    [getChannelName('ERROR_POST_DETAIL_FUND_AVAILABLE_SIMULATE')]: {
      bind: 'closeVeil'
    },
    [getChannelName('ERROR_DETAIL_FUND_AVAILABLE_REQUEST')]: {
      bind: 'closeVeil'
    },
    [getChannelName('REQUEST_PDF')]: {
      bind: 'show'
    },
    ADDFUNDTOCONTRACT_OPEN_PDF_MODAL: {
      bind: 'closeVeil'
    },
    [getChannelName('_ERROR_RESPONSE_PDF')]: {
      bind: 'closeVeil'
    }
  };

  const opxDm = {
    zone: 'app__main',
    tag: 'glomo-opx-funds-contribution-dm',
    type: 'DM',
    properties: {
      lang: getLanguage(),
      autoActivateStep: true,
      repeatOperativeStep: true,
      decorateSteps: true,
      prevStepScrolled: true,
      operativeName: PAGE_NAME,
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'setHeaderOriginColor'
          },
          [getChannelName('register_step_channel')]: {
            bind: 'registerStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('GO_TO_STEP_SERVICE_SELECTED')]: {
            bind: 'goToStep'
          },
          [getChannelName('next_step')]: {
            bind: 'goToNext'
          },
          [getChannelName('select_account_dont_change_and_continue')]: {
            bind: 'goToNext'
          },
          [getChannelName('set_info_profile')]: {
            bind: 'goToNext'
          },
          [getChannelName('not_collapse_any_steps')]: {
            bind: 'reset'
          },
          [getChannelName('back-button')]: {
            bind: 'manageBackButton'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          [getChannelName('active-exit-alert')]: {
            bind: 'showExitConfirm'
          },
          [getChannelName('reset_from_fund_selected')]: {
            bind: 'resetFollowingSteps'
          },
          [getChannelName('go_atm_locator_fatca')]: {
            bind: 'reset'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'reset'
          },
          [getChannelName('CONTENT_ID_STEP')]: {
            bind: 'goToStep'
          },
          [getChannelName('RESET_STEP_ID')]: {
            bind: 'resetFollowingSteps'
          },
          [getChannelName('close_step_with_modal')]: {
            bind: 'collapseStepFromModal'
          },
          [getChannelName('open_change_account_step')]: {
            bind: 'consultStep'
          }
        },
        out: {
          [getChannelName('exit-flow')]: {
            bind: 'navigate-back-button',
            backStep: true
          },
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
            bind: 'show-close-confirm'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'cells-scroll-zone'
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
      id: getLocaleName('header'),
      className: 'header--grey',
      secondaryClass: 'header--core',
      titleName: 'add-fund-to-contract-flow-title',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'removeSecondaryClass'
          },
          [getChannelName('next_step')]: {
            bind: 'setSecondaryClass'
          },
          [getChannelName('remove_header_class')]: {
            bind: 'removeSecondaryClass'
          },
          global_funds_hiring_exit: {
            bind: 'removeSecondaryClass'
          },
          [getChannelName('exit_funds_hiring_flow')]: {
            bind: 'removeSecondaryClass'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'removeSecondaryClass'
          }
        },
        out: {
          [getChannelName('back-button')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'header--white',
      variant: 'primary',
      secondaryClass: '',
      titleName: 'add-fund-to-contract-flow-title-spherica',
      rightIconText: 'cells-molecule-header-spherica-close'
    }
  };

  const fundsHiringFilter = {
    zone: 'app__transactional',
    tag: 'cells-change-contact-details-modal',
    tagSpherica: 'cells-change-contact-details-modal-spherica',
    type: 'UI',
    properties: {
      operativeName: PAGE_NAME,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      className: nativeIos ? 'ios-top-padding__header' : '',
      classChange: 'funds-investment',
      modalTitle: 'add-fund-to-contract-modal-title',
      continueButtonLabel: 'add-fund-to-contract-filter-label',
      closeButtonLabel: 'add-fund-to-contract-modal-close-button',
      classDescription: 'description-filter-funds',
      contactDetailRadioGroup: 'radio-group-filter-funds  lb-title ',
      radioGroupSelectorContact: 'radio-group-selector-filter-funds',
      titleDescription: {title: 'add-fund-to-contract-filter-modal-title', class: 'title-filter-funds'},
      description: 'add-fund-to-contract-filter-modal-description',
      preventClose: true,
      radioButtonList: [
        { contact: 'Corto plazo (menos de 1 año)' },
        { contact: 'Mediano plazo (1 a 3 años)' },
        { contact: 'Largo plazo (más de 3 años)' }
      ],
      selected: '0',
      cellsConnections: {
        in: {
          [getChannelName('INVESTMENT_FILTER_FOUNDS')]: {
            bind: 'open'
          },
          add_fund_to_contract_disable_event_selected_modal_filter: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('CONTACT_FILTER_FOUNDS')]: {
            bind: 'contact-selected'
          },
          [getChannelName('CONTACT_MODAL_CLOSE')]: {
            bind: 'click-right-button'
          },
          add_fund_to_contract_funds_close_modal_filter_founds: {
            bind: 'prevent-close'
          }
        }
      }
    },
    propertiesSpherica: {
      closeButtonLabel: false,
      classButtonLabel: nativeIos ? '' : 'padding-button',
      radioGroupSelectorContact: 'contact-detail-selector-contact-detail'
    }
  };

  const fundDetailModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'glomo-modal-fund-detail',
    tagSpherica: 'glomo-modal-fund-detail-spherica',
    properties: {
      id: `modal-${getLocaleName('fund-detail')}`,
      className: nativeIos ? 'ios-top-padding__header' : '',
      language: getLanguage(),
      detailFound: true,
      secctionDetailPeru: true,
      disableDivider: true,
      commissionsPdf: true,
      isAssociatedRisk: true,
      hidePeriod: true,
      hidePeriodChart: true,
      performanceDivider: true,
      hideStatistics: true,
      modalTitle: 'add-fund-to-contract-modal-fund-detail-title',
      showSecondaryButton: true,
      continueButtonLabel: 'add-fund-to-contract-detail-modal-continue-button-label',
      cancelButtonLabel: 'add-fund-to-contract-detail-modal-cancel-button-label',
      localCurrency: getLocalCurrency(),
      tabTitles: [
        'add-fund-to-contract-detail-modal-performance-tab-label',
        'add-fund-to-contract-detail-modal-detail-tab-label'],
      cellsConnections: {
        in: {
          [getChannelName('open_fund_modal')]: {
            bind: 'open'
          },
          [getChannelName('open_modal_fund_detail')]: {
            bind: 'open'
          },
          [getChannelName('close_fund_modal')]: {
            bind: 'close'
          },
          [getChannelName('params_fund_modal')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_DATA_DETAILS_SECTION_MODAL')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_MESSAGE_SERIE_GB')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('close_fund_modal')]: {
            bind: 'click-right-button'
          },
          [getChannelName('TAB_SELECTED_MODAL_FUND_DETAIL')]: {
            bind: 'glomo-modal-fund-details-tab-selected'
          },
          [getChannelName('CLICK_ON_PDF_DETAILS_MODAL')]: {
            bind: 'cells-list-file-item-clicked'
          },
          [getChannelName('CHOOSE_FUND_FROM_DETAIL_MODAL')]: {
            bind: 'on-close-fund-modal'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'on-close-fund-modal'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos
    }
  };

  const modalService = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'glomo-alert-manager',
    tagSpherica: 'glomo-alert-manager-spherica',
    properties: {
      className: (nativeIos ? 'ios-top-padding' : '') + ' exit-investment-funds generic-error-investment-funds',
      cellsConnections: {
        in: {
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM_DETAIL')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('OPEN_MODAL_ERROR_SIMULATION_DETAIL')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('OPEN_MODAL_ERROR_GENERIC_DETAIL')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('CANCEL_MODAL_SERVIVCEINFO')]: {
            bind: 'close'
          },
          [getChannelName('INVESTMENT_SERVICE_CONFIRM')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('OPEN_SIMULATION_HELP_MODAL')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('error_modal_account_filter')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('ERROR_CONTRACT_MODAL_OPEN')]: {
            bind: 'openWithSettings'
          }
        },
        out: {
          [getChannelName('CANCEL_MODAL_EXIT_CONFIRM')]: {
            bind: 'alert-LEAVE-OPERATIVE-cancel'
          },
          [getChannelName('exit_funds_hiring_flow')]: {
            bind: 'alert-LEAVE-OPERATIVE-accept',
            backStep: true
          },
          [getChannelName('CANCEL_MODAL_SERVICEINFO')]: {
            bind: 'alert-SERVIVCEINFO-cancel'
          },
          [getChannelName('CANCEL_MODAL_SERVIVHEADER')]: {
            bind: 'alert-SERVIVCEINFO-HEADER'
          },
          [getChannelName('ACEPT_MODAL_SERVIVCEINFO')]: {
            bind: 'alert-SERVIVCEINFO-accept'
          },
          [getChannelName('CANCEL_MODAL_SERVIVCEINFO')]: {
            bind: 'cancel'
          },
          [getChannelName('EXIT_NOT_AVAILABLE_FUNDS')]: {
            bind: 'alert-NOTAVAILABLE-FUNDS-accept',
            backStep: true
          },
          [getChannelName('CANCEL_NOT_AVAILABLE_FUNDS')]: {
            bind: 'alert-NOTAVAILABLE-FUNDS-cancel',
            backStep: true
          },
          remove_header_class: {
            bind: 'alert-LEAVE-OPERATIVE-accept'
          },
          [getChannelName('ERROR_CONTRACT_MODAL_ACCEPT')]: {
            bind: 'alert-GENERIC-ERROR-accept'
          },
          [getChannelName('ERROR_CONTRACT_MODAL_CANCEL')]: {
            bind: 'alert-GENERIC-ERROR-cancel'
          },
          [getChannelName('ERROR_MIN_AMOUNT')]: {
            bind: 'alert-DIY-MODAL-INFO-MIN-AMOUNT-accept',
            backStep: true
          },
          [getChannelName('ALL_FUNDS_CONTRACTED')]: {
            bind: 'alert-DIY-MODAL-ALL-FUNDS-CONTRACTED-accept',
            backStep: true
          },
          [getChannelName('ALL_FUNDS_CONTRACTED_CANCEL')]: {
            bind: 'alert-DIY-MODAL-ALL-FUNDS-CONTRACTED-HEADER',
            backStep: true
          },
          FUNDSHIRING_MODAL_CHANGE_SERVICE_ACCEPTED: {
            bind: 'alert-ERRORMODAL-accept'
          }
        }
      }
    }
  };

  const offerStep = {
    zone: 'app__main',
    tag: 'cells-safe-card-offer-page',
    tagSpherica: 'cells-safe-card-offer-page-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('offer')}`,
      currentStep: 1,
      active: true,
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      className: 'funds-hiring',
      stepTitle: 'add-fund-to-contract-offer-page-features-header',
      changeTitle: 'add-fund-to-contract-product-step-common-operatives-change',
      headerImageSrc: './images/fundsHiring/Funds.svg',
      iconSize: '80',
      productSummaryText: 'add-fund-to-contract-offer-page-summary-text',
      productSummaryClass: 'insurance-carrier',
      featuresHeader: 'add-fund-to-contract-offer-page-features-header',
      featuresText: 'add-fund-to-contract-offer-page-features-text',
      featuresAmount: {
        'amount': 50.00,
        'currency': 'MXN'
      },
      perks: [
        'add-fund-to-contract-offer-page-advantage-1',
        'add-fund-to-contract-offer-page-advantage-2',
        'add-fund-to-contract-offer-page-advantage-3'
      ],
      detailText: false,
      typeMessage: 'warning',
      infoMessage: 'add-fund-to-contract-offer-page-info-message-warning',
      nextButtonClass: 'tertiary',
      nextButtonText: 'add-fund-to-contract-offerpage-button',
      legalNoticeLink: 'add-fund-to-contract-offer-page-legal-notice-link',
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'initialize'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('set_contract_offer')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_questionnaire_text')]: {
            bind: 'questionnaireText'
          },
          [getChannelName('disabled_next_button_offer')]: {
            bind: 'disabledNextButton'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('next_step')]: {
            bind: 'next-pressed'
          },
          [getChannelName('active-exit-alert')]: {
            bind: 'next-pressed'
          },
          [getChannelName('open_modal_inv_guide_offer')]: {
            bind: 'open-modal-legal-notice'
          },
          [getChannelName('set_max_products_select_fund')]: {
            bind: 'next-pressed'
          },
          [getChannelName('remove_header_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('offer_analytics_page_visit_change')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_view_offer_step')]: {
            bind: 'change-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'funds-hiring card-blue',
      image: './images/spherica/fundsHiring/Funds.svg',
      headerImageSrc: '',
      headerCardInfo: { 'title': 'add-fund-to-contract-offer-page-summary-title-spherica' },
      productSummaryText: 'add-fund-to-contract-offer-page-summary-text-spherica',
      productSummaryClass: '',
      icon: 'coronita:caution',
      nextButtonClass: 'positive full',
      legalNoticeLink: 'add-fund-to-contract-offer-page-legal-notice-link-spherica',
      stickySectionButton: 'cells-safe-card-offer-page-customize-sticky-button-text'
    }
  };

  const stepAccountSelector = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('account-selector')}`,
      localCurrency: getLocalCurrency(),
      visibleChars: isSpherica ? 4 : 5,
      currentStep: 2,
      notInitializeWithAttached: true,
      disabledUpdateTitleOnChangeProduct: true,
      forceEnableEdit: true,
      stepTitle: 'add-fund-to-contract-origin-account',
      changeLabel: 'add-fund-to-contract-cells-step-common-operatives-change',
      productLabel: 'add-fund-to-contract-account-step-product-label',
      className: 'selected-product selector-hiring deposit-hiring ios-view-more',
      changeOriginText: 'cells-step-product-selector-change-selection-button-label',
      notSavedState: true,
      hideCurrentStepLabel: true,
      hideOneProductMessage: true,
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'initialize'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('view_all_accounts')]: {
            bind: 'products'
          },
          [getChannelName('update_origin_accounts')]: {
            bind: 'products'
          },
          [getChannelName('max_accounts')]: {
            bind: 'maxProducts'
          },
          [getChannelName('selected_product_from_modal')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('update_account_description')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('selected_account')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('select_account_dont_change_and_continue')]: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName('open_change_account_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('show_all_user_acounts')]: {
            bind: 'view-all'
          },
          [getChannelName('SET_ACCOUNTS_LIST')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('set_secondary_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_step_focus_in')]: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      maxSteps: 4,
      displayedCurrentStep: 1,
      stepTitle: 'add-fund-to-contract-origin-account-spherica',
      productLabel: 'add-fund-to-contract-account-step-product-label-spherica',
      filledProductItemClass: 'stack',
      primaryAmountClass: 'currency-l',
      savedProductItemClass: 'one-product-without-panel',
      variant: '',
      hideCurrentStepLabel: false
    }
  };
  const selectStep = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('fund-selection')}`,
      stepTitle: 'add-fund-to-contract-select-fund',
      changeLabel: 'add-fund-to-contract-edit-label-step',
      currentStep: 3,
      errorMessage: getLocaleName('error-benefits-message'),
      description: getLocaleName('product-step-funds-selector-main-description'),
      lowerMessage: getLocaleName('product-step-funds-lower-message'),
      typeLowerMessage: 'warning',
      productsListLabel: getLocaleName('product-step-funds-selector-list-title'),
      className: 'funds-hiring funds-investment investment-fund-list funds-step deposit-hiring',
      changeOriginText: 'cells-step-product-selector-change-selection-button-label',
      notInitializeWithAttached: false,
      additionalInformationSeparator: ' ',
      disabledUpdateTitleOnChangeProduct: true,
      notSavedState: true,
      divideHeader: true,
      shouldHideChangeButton: true,
      hideItemAdditional: true,
      positionMessageAdditionalLink: 'preLink',
      viewAllLabel: 'add-fund-to-contract-see-more-btn-label',
      currencySelectedTitle: 'cells-step-product-selector-currency-selector',
      hideCurrentStepLabel: true,
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'initialize'
          },
          [getChannelName('products_parsed_funds')]: {
            bind: 'products'
          },
          [getChannelName('cancel_fatca_modal')]: {
            bind: 'reset'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('CONTACT_MODAL_CLOSE')]: {
            bind: 'reset'
          },
          [getChannelName('CONTACT_MODAL_CLOSE')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('DISABLE_EVENT_SELECTED')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('FUNDS_RESET_FILTER_CLOSE')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_RENT')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_MULTI')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_RENT')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_MULTI')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          add_fund_to_contract_disable_event_selected_modal_filter: {
            bind: 'onChangeProductSelectedEvent'
          },
          add_fund_to_contract_disable_event_selected_modal_filter_option: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('SEND_DATA_FUND_MODAL_DETAIL')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('MODAL_CHANGE_SERVICE_RESET')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('SET_IGNORE_DISPATCH')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('NEXT_STEP_PRODUCT_SELECTOR')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('NEXT_STEP_EVENT_RESTORE')]: {
            bind: 'onChangeProductSelectedEvent'
          },
          [getChannelName('FUNDS_RESET_COLLAPSED')]: {
            bind: 'resetCollapsed'
          },
          [getChannelName('SET_FUND_STEP_DESCRIPTION')]: {
            bind: 'description'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step_modal')]: {
            bind: 'change-pressed'
          },
          [getChannelName('CALL_OWN_METHOD_TO_DISPATCH_ELEMENT')]: {
            bind: 'on-change-product-selected-change'
          },
          [getChannelName('request_simulation_funds_list')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('fund_selected')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('set_secondary_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('SHOW_MODAL_FILTER_FOUND')]: {
            bind: 'view-all'
          },
          [getChannelName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('analytics_step_focus_in')]: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      maxSteps: 4,
      displayedCurrentStep: 2,
      divideHeader: false,
      changeLabel: 'add-fund-to-contract-edit-label-step-spherica',
      className: 'title-size-medium-l',
      hideCurrentStepLabel: false,
      stepTitle: 'add-fund-to-contract-select-fund-spherica',
      iconLowerMessage: 'coronita:caution'
    }
  };

  const investmentSimulationStep = {
    zone: 'app__main',
    tag: 'cells-step-simulation-operation',
    tagSpherica: 'cells-step-simulation-operation-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('simulation-operation')}`,
      className: 'equity-contracts',
      amountButtonText: 'add-fund-to-contract-calculate-button-text',
      amountErrorMaxLimitMessage: 'add-fund-to-contract-amount-error-max-limit-message-contribution',
      amountErrorMinLimitMessage: 'add-fund-to-contract-simulation-operation-error-minimum-amount',
      amountRangeMessage: 'add-fund-to-contract-simulation-operation-minimum-range',
      changeLabel: 'add-fund-to-contract-edit-label-step',
      complexAmountErrorMaxLimitMessage: true,
      currency: getLocalCurrency(),
      currentStep: 4,
      filledAmountLabel: 'add-fund-to-contract-summary-view-amount-operation',
      hiddenMinLimit: false,
      hideCurrentStepLabel: true,
      infoType: 'info',
      keepAmount: true,
      keepOpened: true,
      keepValues: [
        'showInfoMessage'
      ],
      language: CONFIG.lang,
      localCurrency: getLocalCurrency(),
      messageText: 'add-fund-to-contract-notification-message-purchase',
      multipleRange: 0,
      notEnoughBalanceAfterKey: 'add-fund-to-contract-info-message-form-amount-min-fund-amount-purchase-between',
      range: true,
      showGraph: false,
      showIconInInputRangeMessage: true,
      showIconSimulationHelp: true,
      showInfoMessage: false,
      showSimulator: false,
      showTopAmountMessage: false,
      stepDescription: 'add-fund-to-contract-amount-step-description',
      stepTitle: 'add-fund-to-contract-investment-amount-title',
      type: 'tel',
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'initialize'
          },
          [getChannelName('set_information_simulation')]: {
            bind: 'simulationInfo'
          },
          [getChannelName('create_buttons_simulator')]: {
            bind: 'simulationConfirmButtons'
          },
          [getChannelName('min_value_simulator')]: {
            bind: 'minValue'
          },
          [getChannelName('max_value_simulator')]: {
            bind: 'maxValue'
          },
          [getChannelName('COLLAPSED_SIMULATOR')]: {
            bind: 'setProperties'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME')]: {
            bind: 'isNotEnoughAmount'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_SIMULATION_DESCRIPTION')]: {
            bind: 'stepDescription'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('SHOW_INPUT_AMOUNT_VIEW')]: {
            bind: 'change-pressed'
          },
          [getChannelName('enter_amount')]: {
            bind: 'send-step-amount-value'
          },
          [getChannelName('next_step')]: {
            bind: 'cells-confirm-buttons-click-primary'
          },
          [getChannelName('SHOW_SIMULATION_HELP_MODAL')]: {
            bind: 'icon-simulation-hepl-pressed'
          },
          [getChannelName('amount_input_focus')]: {
            bind: 'amount-input-focus'
          },
          [getChannelName('status_bar_on_amount_blur')]: {
            bind: 'amount-input-focus-out'
          },
          [getChannelName('analytics_step_focus_in')]: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      displayedCurrentStep: 3,
      maxStepsCustom: 4,
      amountErrorMaxLimitMessage: 'add-fund-to-contract-amount-error-max-limit-message-contribution-spherica',
      amountErrorMinLimitMessage: 'add-fund-to-contract-simulation-operation-error-minimum-amount-spherica',
      amountInputLabel: 'add-fund-to-contract-amount-step-input-label',
      changeLabel: 'add-fund-to-contract-edit-label-step-spherica',
      className: 'no-background-container-info funds-hiring',
      filledAmountLabel: 'add-fund-to-contract-summary-view-amount-operation-spherica',
      hideCurrentStepLabel: false,
      messageText: 'add-fund-to-contract-notification-message-purchase-spherica',
      showTextRightIcon: true,
      stepDescription: 'add-fund-to-contract-amount-step-description-spherica',
      stepTitle: 'add-fund-to-contract-investment-amount-title-spherica'
    }
  };

  const termsAndConditionsStep = {
    zone: 'app__main',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    type: 'UI',
    properties: {
      id: `step-${getLocaleName('checklist-contract')}`,
      stepTitle: 'cells-step-card-checklist-contract-step-title',
      changeLabel: 'cells-step-card-offer-page-link-collapsed',
      currentStep: 5,
      consultText: 'add-fund-to-contract-checklist-contract-description',
      notInitializeWithAttached: false,
      hideChangeDataBox: true,
      className: '',
      hideCurrentStepLabel: true,
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'initialize'
          },
          [getChannelName('set_pdfs_documents')]: {
            bind: 'pdfData'
          },
          [getChannelName('LIST_CHECKBOX_TERMS')]: {
            bind: 'checkboxList'
          },
          [getChannelName('multiple_email')]: {
            bind: 'hasMultipleData'
          },
          [getChannelName('SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('SET_CHECKLIST_HEADER')]: {
            bind: 'consultText'
          }
        },
        out: {
          [getChannelName('register_step_channel')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('request_document')]: {
            bind: 'request-pdf'
          },
          [getChannelName('profitability_details_clicked_from_checklist_step')]: {
            bind: 'request-document'
          },
          [getChannelName('next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('reques_simulate')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('change_preferential_email')]: {
            bind: 'change-data-pressed'
          },
          [getChannelName('RESET_STEP_PROP')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('set_secondary_class')]: {
            bind: 'change-pressed'
          },
          [getChannelName('analytics_step_focus_in')]: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      maxSteps: 4,
      displayedCurrentStep: 4,
      className: 'page-end-margin',
      variantListFile: 'primary-alt',
      variant: 'primary-alt',
      isButtonPrimary: true,
      iconCheckedSize: 'icon-size-24',
      hideCurrentStepLabel: false,
      showCurrentStepLabel: true
    }
  };

  const cellsIconMessageOutOfTime = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      id: 'cells-icon-message-out-of-time',
      type: 'warning',
      className: 'margin-l',
      icon: 'coronita:info',
      class: 'message-connection',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('SHOW_LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
            bind: 'hidden'
          },
          [getChannelName('SHOW_LAST_ICON_MESSAGE_HOURS_FUNDS')]: {
            bind: 'message'
          }
        },
        out: {}
      }
    },
    propertiesSpherica: {
      icon: 'coronita:caution'
    }
  };

  const cellsIconMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-icon-message',
    tagSpherica: 'cells-icon-message-spherica',
    properties: {
      id: 'cells-icon-message',
      type: 'info',
      className: 'margin-l funds-hiring-last-spacing funds-hiring-icon-message-spacing',
      message: 'add-fund-to-contract-icon-message-blue-text',
      icon: 'coronita:info',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('LAST_ICON_MESSAGE')]: {
            bind: 'hidden'
          }
        },
        out: {}
      }
    },
    propertiesSpherica: {
      className: 'margin-l funds-hiring-icon-message-spacing'
    }
  };

  const summarySection = {
    zone: 'app__confirm',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    type: 'UI',
    properties: {
      id: getLocaleName('summary-section'),
      showAddition: true,
      primaryButtonClass: 'tertiary',
      className: 'funds-investment',
      showLoadingSkeleton: true,
      buttonLabel: 'add-fund-to-contract-summary-button-label',
      summaryViewTitle: 'add-fund-to-contract-summary-title',
      operationAmountClass: 'amount-huge-decimals',
      hideCustomFeesMessage: true,
      managmentFeesMessage: 'funds-hiring',
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getChannelName('SET_INFO_SUMMARY')]: {
            bind: 'operation'
          },
          [getChannelName('input_amount_request_simulate')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('REQUEST_CONTRACTING_FUND')]: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      summaryViewTitle: 'add-fund-to-contract-summary-title-spherica',
      primaryButtonClass: 'positive'
    }
  };

  const productSelectorFoundsModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      showCloseModalButton: true,
      closeButtonLabel: 'add-fund-to-contract-modal-close-button',
      className: nativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      modalTitle: getLocaleName('modal-title'),
      productsListTitle: getLocaleName('modal-products-title'),
      cellsConnections: {
        in: {
          [getChannelName('show_all_founds')]: {
            bind: 'treatProducts'
          },
          [getChannelName('funds_order_change')]: {
            bind: 'treatProducts'
          },
          [getChannelName('changed_order')]: {
            bind: 'setProperties'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos
    }
  };

  const productSelectorFoundsModalAllProducts = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      closeButtonLabel: 'add-fund-to-contract-modal-close-button',
      showCloseModalButton: true,
      className: (nativeIos ? 'ios-top-padding__header' : '') + ' custom-label',
      errorMessage: getLocaleName('error-message'),
      modalTitle: getLocaleName('product-step-funds-selector-list-title'),
      additionalInformationSeparator: '',
      productsListTitle: '',
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_ALL_PRODUCTS')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS_OK')]: {
            bind: 'filterPayload'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_SHOW_SPINNER_ALL_PRODUCTS')]: {
            bind: 'show-spinner-filter'
          },
          [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_ALL_PRODUCTS')]: {
            bind: 'hidde-spinner-filter'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos,
      className: (nativeIos ? 'ios-top-padding__header' : '') + 'title-size-medium-l funds-hiring',
      showCloseModalButton: false
    }
  };

  const productSelectorFoundsModalDebt = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      closeButtonLabel: 'add-fund-to-contract-modal-close-button',
      showCloseModalButton: true,
      className: (nativeIos ? 'ios-top-padding__header' : '') + ' custom-label',
      errorMessage: getLocaleName('error-message'),
      modalTitle: 'add-fund-to-contract-investment-funds-description-modal',
      additionalInformationSeparator: '',
      productsListTitle: '',
      showFloatBottom: true,
      preventClose: true,
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ALL_SELECTED_FILTER')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER')]: {
            bind: 'filterPayload'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_DEBT')]: {
            bind: 'selected-product'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('SELECTED_PRODUCT_RESTORE')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_SHOW_SPINNER')]: {
            bind: 'show-spinner-filter'
          },
          [getChannelName('FUNDS_FILTER_HIDDE_SPINNER')]: {
            bind: 'hidde-spinner-filter'
          },
          [getChannelName('FUNDS_RESET_FILTER')]: {
            bind: 'botton-float-tapped'
          },
          [getChannelName('FUNDS_RESET_FILTER_CLOSE')]: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_debt_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos,
      className: (nativeIos ? 'ios-top-padding__header' : '') + 'title-size-medium-l funds-hiring',
      showCloseModalButton: false
    }
  };

  const productSelectorFoundsModalVariable = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      closeButtonLabel: 'add-fund-to-contract-modal-close-button',
      showCloseModalButton: true,
      className: (nativeIos ? 'ios-top-padding__header' : '') + ' custom-label',
      errorMessage: getLocaleName('error-message'),
      modalTitle: 'add-fund-to-contract-investment-funds-variable-modal',
      productsListTitle: '',
      additionalInformationSeparator: '',
      showFloatBottom: true,
      preventClose: true,
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ALL_SELECTED_VARIABLE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_VARIABLE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_VARIABLE')]: {
            bind: 'filterPayload'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_REVERSE')]: {
            bind: 'filterPayload'
          },
          [getChannelName('FUNDS_ORDER_RISK_REVERSE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_RENT')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_VARIABLE')]: {
            bind: 'selected-product'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_SHOW_SPINNER_VARIABLE')]: {
            bind: 'show-spinner-filter'
          },
          [getChannelName('FUNDS_FILTER_HIDDE_SPINNER_VARIABLE')]: {
            bind: 'hidde-spinner-filter'
          },
          [getChannelName('FUNDS_RESET_FILTER_VARIABLE')]: {
            bind: 'botton-float-tapped'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_RENT')]: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_variable_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos,
      className: (nativeIos ? 'ios-top-padding__header' : '') + 'title-size-medium-l funds-hiring',
      showCloseModalButton: false
    }
  };

  const productSelectorFoundsModalMulti = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      closeButtonLabel: 'add-fund-to-contract-modal-close-button',
      showCloseModalButton: true,
      className: (nativeIos ? 'ios-top-padding__header' : '') + ' custom-label',
      errorMessage: getLocaleName('error-message'),
      modalTitle: 'add-fund-to-contract-investment-funds-multi-modal',
      additionalInformationSeparator: '',
      productsListTitle: '',
      showFloatBottom: true,
      preventClose: true,
      cellsConnections: {
        in: {
          [getChannelName('FUNDS_ALL_SELECTED_MULTI')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_MULTI')]: {
            bind: 'treatProducts'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_MULTI')]: {
            bind: 'filterPayload'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_MULTI')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_MULTI')]: {
            bind: 'selected-product'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_MULTI_TAPPED')]: {
            bind: 'botton-float-tapped'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_MULTI')]: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_multi_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos,
      className: (nativeIos ? 'ios-top-padding__header' : '') + 'title-size-medium-l funds-hiring',
      showCloseModalButton: false
    }
  };

  const productSelectorFoundsModalType = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      closeButtonLabel: 'add-fund-to-contract-modal-close-button',
      className: nativeIos ? 'ios-top-padding__header' : '',
      errorMessage: getLocaleName('error-message'),
      modalTitle: getLocaleName('modal-title'),
      preventClose: true,
      additionalInformationSeparator: ' ',
      productType: 'filter-funds',
      titleFilterFunds: {
        title: 'add-fund-to-contract-investment-service-title-type',
        classTitle: 'filter-title',
        description: 'add-fund-to-contract-investment-service-description-type',
        classSubTitle: 'filter-subtitle'
      },
      showFloatBottom: false,
      cellsConnections: {
        in: {
          [getChannelName('SHOW_FUNDS_TYPE')]: {
            bind: 'treatProducts'
          },
          [getChannelName('CLOSE_MODAL_FUNDS')]: {
            bind: 'close'
          },
          [getChannelName('CLOSE_MODALS_FILTER')]: {
            bind: 'close'
          },
          add_fund_to_contract_disable_event_selected_modal_filter_option: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'selected-product'
          },
          [getChannelName('click_title_to_order')]: {
            bind: 'title-click'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'cells-product-item-link-pressed'
          },
          [getChannelName('FUND_MODAL_TYPE_CLOSE')]: {
            bind: 'prevent-close'
          },
          add_fund_to_contract_funds_close_modal_option: {
            bind: 'prevent-close'
          },
          [getChannelName('analytics_view_fund_type_modal')]: {
            bind: 'opened-changed'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos,
      className: `title-size-medium-l${nativeIos ? ' ios-top-padding__header' : ''}`,
      titleFilterFunds: {
        title: 'add-fund-to-contract-investment-service-title-type-spherica',
        classTitle: 'filter-title',
        description: 'add-fund-to-contract-investment-service-description-type',
        classSubTitle: 'filter-subtitle'
      }
    }
  };

  const productSelectorModal = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      id: `modal-${getLocaleName('product-selector')}`,
      showCloseModalButton: true,
      closeButtonLabel: getLocaleName('step-account-modal-close-button'),
      className: nativeIos ? 'ios-top-padding__header' : '',
      localCurrency: getLocalCurrency(),
      errorMessage: getLocaleName('error-message'),
      modalTitle: getLocaleName('list-products'),
      cellsConnections: {
        in: {
          [getChannelName('show_all_user_acounts')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('selected_product_from_modal')]: {
            bind: 'selected-product'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos
    }
  };

  const appSettingsFundsData = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-public-app-settings',
    properties: {
      host: settingsHost,
      native: !!native,
      namespace,
      endpoint: fundList,
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'getAppSettings'
          }
        },
        out: {
          global_set_app_settings_addFundToContract: {
            bind: 'app-settings-request-success'
          },
          global_set_app_settings_addFundToContract_error: {
            bind: 'app-settings-request-error'
          }
        }
      }
    }
  };

  const addFundToContractManager = {
    zone: 'app__main',
    tag: 'glomo-add-fund-to-contract-manager',
    type: 'DM',
    properties: {
      isSpherica,
      host,
      accountsApiVersion: accounts,
      native,
      isNativeIos: nativeIos,
      requiredToken,
      operativeName: 'add-fund-to-contract',
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      minFundsAmounts,
      termTypeTexts: [{
        text: 'Corto plazo (menos de 1 año)',
        term: 'CORTO PLAZO',
        typeFund: 'DEUDA CORTO PLAZO'
      },
      {
        text: 'Mediano plazo (1 a 3 años)',
        term: 'MEDIANO PLAZO',
        typeFund: 'DEUDA MEDIANO PLAZO'
      },
      {
        text: 'Largo plazo (más de 3 años)',
        term: 'LARGO PLAZO',
        typeFund: 'DEUDA LARGO PLAZO'
      }
      ],
      multistrategyTerms: [{
        type: 'CRECIMIENTO'
      },
      {
        type: 'MERCADO ESTRATEGIA'
      },
      {
        type: 'DEUDA LARGO PLAZO'
      },
      {
        type: 'PRESERVACION CAPITAL'
      },
      {
        type: 'GENERACION FLUJOS'
      }
      ],
      payloadSelectedTypeFund: [{
        name: 'Deuda',
        icon: isSpherica ? 'coronita:forward' : '',
        iconSize: isSpherica ? '24' : '',
        productType: 'FUNDS',
        additionalInformation: [ {
          key: 'Tienen diferentes niveles de riesgo y están pensados para todo tipo de metas.',
          className: `text-left${isSpherica ? '' : ' item__payment__normal__font'}`
        } ]
      },
      {
        name: 'Renta Variable',
        icon: isSpherica ? 'coronita:forward' : '',
        iconSize: isSpherica ? '24' : '',
        productType: 'FUNDS',
        additionalInformation: [ {
          key: 'Son de mayor riesgo y están enfocados a metas de largo plazo.',
          className: `text-left${isSpherica ? '' : ' item__payment__normal__font'}`
        } ]
      },
      {
        name: 'Multiestrategia',
        icon: isSpherica ? 'coronita:forward' : '',
        iconSize: isSpherica ? '24' : '',
        productType: 'FUNDS',
        additionalInformation: [ {
          key: 'Son  fondos diversificados con estrategias integrales para cada perfil de riesgo.',
          className: `text-left${isSpherica ? '' : ' item__payment__normal__font'}`
        } ]
      }
      ],
      cellsConnections: {
        in: {
          global_set_app_settings_addFundToContract: {
            bind: 'dataFunds'
          },
          global_set_app_settings_addFundToContract_error: {
            bind: 'dataFunds'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          [getChannelName('SCROLL_TEMPLATE')]: {
            bind: 'animationStiky'
          },
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM')]: {
            bind: 'modalConfirmExit'
          },
          add_fund_to_contract_init_page: {
            bind: 'init'
          },
          [getChannelName('open_modal_inv_guide_offer')]: {
            bind: 'showModalInvGuide'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          [getChannelName('request_simulation')]: {
            bind: 'setResponseSimulation'
          },
          [getChannelName('success_post_fund_simulate')]: {
            bind: 'setResponseSimulate'
          },
          [getChannelName('SET_ACCOUNTS_LIST')]: {
            bind: 'setAccounts'
          },
          [getChannelName('selected_account')]: {
            bind: 'setInvestmentService'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'canExecute'
          },
          [getChannelName('REQUEST_CONTRACTING_FUND')]: {
            bind: 'addNewFundContractRequest'
          },
          [getChannelName('SUCCESS_ON_FUND_CONTRACT')]: {
            bind: 'successHiring'
          },
          [getChannelName('ERROR_ON_FUND_CONTRACT')]: {
            bind: 'successHiring'
          },
          [getChannelName('SET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'setResponseListFunds'
          },
          [getChannelName('ACEPT_MODAL_SERVIVCEINFO')]: {
            bind: 'getInvestmentFundList'
          },
          [getChannelName('CANCEL_MODAL_SERVICEINFO')]: {
            bind: 'cancelServiceSelected'
          },
          [getChannelName('SHOW_MODAL_FILTER_FOUND')]: {
            bind: 'filterFound'
          },
          [getChannelName('CALL_OWN_METHOD_TO_DISPATCH_ELEMENT')]: {
            bind: 'filterTypeFound'
          },
          [getChannelName('CONTACT_FILTER_FOUNDS')]: {
            bind: 'contactSelectedFound'
          },
          [getChannelName('FUNDS_RESET_FILTER')]: {
            bind: 'filterFound'
          },
          [getChannelName('FUNDS_FILTER_LAVEL_RISK_MULTI_TAPPED')]: {
            bind: 'filterFound'
          },
          [getChannelName('FUNDS_RESET_FILTER_VARIABLE')]: {
            bind: 'filterFound'
          },
          [getChannelName('request_simulation_funds_list')]: {
            bind: 'requestSimulationFund'
          },
          [getChannelName('profitability_details_clicked')]: {
            bind: 'requestSimulationFund'
          },
          [getChannelName('FUNDS_RESET_FILTER_CLOSE')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_RENT')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_DEBT')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_VARIABLE')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('RESTORE_EVENT_PRODUCT_SELECTOR_MULTI')]: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('FUNDS_CLOSE_MODAL_MULTI')]: {
            bind: 'ignoreEventCloseModal'
          },
          add_fund_to_contract_funds_close_modal_option: {
            bind: 'ignoreEventCloseModal'
          },
          add_fund_to_contract_funds_close_modal_filter_founds: {
            bind: 'ignoreEventCloseModal'
          },
          [getChannelName('CANCEL_MODAL_SERVIVHEADER')]: {
            bind: 'getInvestmentFundList'
          },
          [getChannelName('request_document')]: {
            bind: 'filterDocumentRequest'
          },
          [getChannelName('_SUCCESS_RESPONSE_PDF')]: {
            bind: 'successResponsePDF'
          },
          [getChannelName('_ERROR_RESPONSE_PDF')]: {
            bind: 'getErrorResponsePdf'
          },
          [getChannelName('_ERROR_POST_BD')]: {
            bind: 'getErrorResponsePdf'
          },
          [getChannelName('_SUCCESS_POST_BD')]: {
            bind: 'successBasePdf'
          },
          [getChannelName('SHOW_SIMULATION_HELP_MODAL')]: {
            bind: 'modalSimulationHelp'
          },
          [getChannelName('fund_selected')]: {
            bind: 'fundSelected'
          },
          [getChannelName('enter_amount')]: {
            bind: 'enterAmountSimulation'
          },
          [getChannelName('SUCCESS_CUSTOMER_DETAIL')]: {
            bind: 'setCustomerMainEmail'
          },
          [getChannelName('TAB_SELECTED_MODAL_FUND_DETAIL')]: {
            bind: 'requestFundDetail'
          },
          [getChannelName('SUCCESS_FUND_DETAIL_REQUEST')]: {
            bind: 'setResponseFundDetail'
          },
          [getChannelName('CLICK_ON_PDF_DETAILS_MODAL')]: {
            bind: 'sendPdfLink'
          },
          [getChannelName('CHOOSE_FUND_FROM_DETAIL_MODAL')]: {
            bind: 'selectFundFromModalDetail'
          },
          [getChannelName('collapse_other_step_modal')]: {
            bind: 'modalAlert'
          },
          [getChannelName('FUND_MODAL_TYPE_CLOSE')]: {
            bind: 'prevent-close'
          },
          [getChannelName('SELECTED_PRODUCT_RESTORE')]: {
            bind: 'selectedProductRestore'
          },
          [getChannelName('ERROR_ON_INVESTMENT_FUNDS_LIST')]: {
            bind: 'errorOnGetFundList'
          },
          [getChannelName('ERROR_CONTRACT_MODAL_ACCEPT')]: {
            bind: 'redirectToDashboard'
          },
          [getChannelName('ERROR_CONTRACT_MODAL_CANCEL')]: {
            bind: 'redirectToDashboard'
          },
          [getChannelName('SHOW_INPUT_AMOUNT_VIEW')]: {
            bind: 'showInputAmountView'
          },
          [getChannelName('scroll_zone')]: {
            bind: 'scrollZoneModify'
          },
          [getChannelName('ERROR_LIST_FUNDS_AVAILABLE_REQUEST')]: {
            bind: 'errorGetListFunds'
          },
          [getChannelName('ERROR_POST_DETAIL_FUND_AVAILABLE_SIMULATE')]: {
            bind: 'errorGetDetailFunds'
          },
          [getChannelName('ERROR_DETAIL_FUND_AVAILABLE_REQUEST')]: {
            bind: 'errorGetDetailFunds'
          },
          [getChannelName('selected_found_product_from_modal')]: {
            bind: 'productSelectedFromModal'
          },
          [getChannelName('RESET_STEP_PROP')]: {
            bind: 'resetStepProp'
          },
          FUND_ADD_FUND_TO_CONTRACT: {
            bind: 'relatedContractData'
          },
          dashboard_accounts: {
            bind: 'globalAccounts'
          },
          global_open_document_base64_error: {
            bind: 'getErrorResponsePdf'
          },
          global_open_document_url_error: {
            bind: 'getErrorResponsePdf'
          }
        },
        out: {
          [getChannelName('OPEN_MODAL_EXIT_CONFIRM_DETAIL')]: {
            bind: 'open-diy-info-modal'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('REQUEST_CUSTOMER_DETAIL')]: {
            bind: 'request-customer-detail'
          },
          [getChannelName('set_contract_offer')]: {
            bind: 'set-offer-contract'
          },
          [getChannelName('min_value_simulator')]: {
            bind: 'set-min-value-accepted'
          },
          [getChannelName('max_value_simulator')]: {
            bind: 'set-max-value-accepted'
          },
          [getChannelName('set_information_simulation')]: {
            bind: 'set-simulation-created'
          },
          [getChannelName('create_buttons_simulator')]: {
            bind: 'manage-buttons-simulator'
          },
          [getChannelName('view_all_accounts')]: {
            bind: 'set-accounts-list'
          },
          [getChannelName('set_pdfs_documents')]: {
            bind: 'set-checklist-contract-pdf-data'
          },
          [getChannelName('products_parsed_funds')]: {
            bind: 'products-parsed-funds'
          },
          [getChannelName('SET_INFO_SUMMARY')]: {
            bind: 'send-step-amount-sticky-value'
          },
          [getChannelName('LAST_ICON_MESSAGE')]: {
            bind: 'show-last-icon-message-event'
          },
          [getChannelName('SHOW_LAST_ICON_MESSAGE_OUT_OF_TIME')]: {
            bind: 'show-last-icon-message-out-of-time-event'
          },
          [getChannelName('SHOW_LAST_ICON_MESSAGE_HOURS_FUNDS')]: {
            bind: 'glomo-add-fund-contract-icon-message-hours'
          },
          [getChannelName('GET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'get-investment-funds-list'
          },
          [getChannelName('GO_TO_STEP_SERVICE_SELECTED')]: {
            bind: 'return-step-service'
          },
          [getChannelName('INVESTMENT_SERVICE_CONFIRM')]: {
            bind: 'confirm-investment-service-selected'
          },
          [getChannelName('SHOW_FUNDS_TYPE')]: {
            bind: 'fund-type-filter'
          },
          [getChannelName('INVESTMENT_FILTER_FOUNDS')]: {
            bind: 'filterAllFunds'
          },
          [getChannelName('FUNDS_ALL_SELECTED_FILTER')]: {
            bind: 'filter-funds-short-term'
          },
          [getChannelName('FUNDS_ALL_SELECTED_VARIABLE')]: {
            bind: 'filter-funds-selected-variable'
          },
          [getChannelName('FUNDS_ALL_SELECTED_MULTI')]: {
            bind: 'filter-funds-selected-multi'
          },
          [getChannelName('FUNDS_ORDER_RISK')]: {
            bind: 'filter-funds-order-debt'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER')]: {
            bind: 'filter-funds-order-ok-debt'
          },
          [getChannelName('FUNDS_ORDER_RISK_VARIABLE')]: {
            bind: 'filter-funds-order-rent'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_VARIABLE')]: {
            bind: 'filter-funds-order-ok-rent'
          },
          [getChannelName('FUNDS_ORDER_RISK_MULTI')]: {
            bind: 'filter-funds-order-multi'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_MULTI')]: {
            bind: 'filter-funds-order-ok-multi'
          },
          [getChannelName('FUNDS_ORDER_RISK_ALL_PRODUCTS')]: {
            bind: 'filter-funds-order-all'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS_OK')]: {
            bind: 'filter-funds-order-ok-all'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_ALL_PRODUCTS')]: {
            bind: 'show-all-products'
          },
          [getChannelName('POST_FUND_SIMULATE')]: {
            bind: 'request-post-fund-simulate'
          },
          [getChannelName('HIDE_SPINNER_FUND_SIMULATE')]: {
            bind: 'close-spinner-simulation'
          },
          [getChannelName('HIDE_SPINNER_FUND_CONTRACT')]: {
            bind: 'hide-spinner-fund-contracted'
          },
          [getChannelName('open_modal_fund_detail')]: {
            bind: 'open-modal-performance-and-details'
          },
          [getChannelName('FUNDS_ORDER_RISK_FILTER_REVERSE')]: {
            bind: 'filter-funds-order-ok-reverse'
          },
          [getChannelName('FUNDS_ORDER_RISK_REVERSE')]: {
            bind: 'filter-funds-order-reverse'
          },
          [getChannelName('CLOSE_MODAL_FUNDS')]: {
            bind: 'close-modal-funds-option'
          },
          [getChannelName('DISABLE_EVENT_SELECTED')]: {
            bind: 'fund-disabale-event'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER')]: {
            bind: 'disable-event-modal-debt'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_RENT')]: {
            bind: 'disable-event-modal-rent'
          },
          [getChannelName('DISABLE_EVENT_SELECTED_MODAL_FILTER_MULTI')]: {
            bind: 'disable-event-modal-multi'
          },
          add_fund_to_contract_disable_event_selected_modal_filter: {
            bind: 'disable-event-modal-debt'
          },
          add_fund_to_contract_disable_event_selected_modal_filter_option: {
            bind: 'disable-event-modal-option'
          },
          [getChannelName('REQUEST_PDF')]: {
            bind: 'request-pdf-contract'
          },
          [getChannelName('_SET_BUSINESS_DOC')]: {
            bind: 'set-business-properties'
          },
          [getChannelName('_REQUEST_PDF_DM_POST')]: {
            bind: 'request-post-document'
          },
          [getChannelName('REQUEST_FUND_DETAIL_MODAL')]: {
            bind: 'request-fund-detail'
          },
          [getChannelName('SET_DATA_DETAILS_SECTION_MODAL')]: {
            bind: 'data-to-detail-section-modal'
          },
          [getChannelName('SET_MESSAGE_SERIE_GB')]: {
            bind: 'data-detail-fund-serie'
          },
          [getChannelName('OPEN_SIMULATION_HELP_MODAL')]: {
            bind: 'open-simulation-help-modal'
          },
          [getChannelName('SEND_DATA_FUND_MODAL_DETAIL')]: {
            bind: 'data-fund-modal-detail'
          },
          [getChannelName('SET_IGNORE_DISPATCH')]: {
            bind: 'change-ignore-dispatch'
          },
          funds_pdf_download: {
            bind: 'funds-pdf',
            'forward-to-native': true
          },
          ADDFUNDTOCONTRACT_DOC_CONTENT: {
            bind: 'base-src-changed'
          },
          ADDFUNDTOCONTRACT_DOC_TITLE: {
            bind: 'title-pdf-text'
          },
          ADDFUNDTOCONTRACT_OPEN_PDF_MODAL: {
            bind: 'show-document-event'
          },
          FUNDSHIRING_GENERIC_MODAL_OPEN: {
            bind: 'error-modal-generic'
          },
          [getChannelName('ERROR_CONTRACT_MODAL_OPEN')]: {
            bind: 'open-diy-info-modal'
          },
          navigation_investment_funds_to_dashboard: {
            bind: 'redirect-to-dashboard',
            'forward-to-native': true
          },
          [getChannelName('CONTENT_ID_STEP')]: {
            bind: 'content-id'
          },
          [getChannelName('RESET_STEP_ID')]: {
            bind: 'reset-step-id'
          },
          [getChannelName('LIST_CHECKBOX_TERMS')]: {
            bind: 'list-checkbox-terms-and-conditions'
          },
          [getChannelName('HEADERS_NOTIFICATIONS')]: {
            bind: 'set-headers'
          },
          [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
            bind: 'request-add-new-fund-contract'
          },
          ADD_FUND_TO_CONTRACT_SET_HEADER_COLOR: {
            bind: 'set-color-header-success'
          },
          ADD_FUND_TO_CONTRACT_SET_HEADER_COLOR_IOS: {
            bind: 'set-color-header-success-ios'
          },
          [getChannelName('reset_entire_flow_after_success')]: {
            bind: 'review-hiring-data'
          },
          [getChannelName('set_questionnaire_text')]: {
            bind: 'set-questionnaire-text'
          },
          [getChannelName('disabled_next_button_offer')]: {
            bind: 'disabled-next-button-offer'
          },
          [getChannelName('error_modal_account_filter')]: {
            bind: 'open-diy-info-modal'
          },
          [getChannelName('COLLAPSED_SIMULATOR')]: {
            bind: 'set-amount-collapsed-simulator'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME')]: {
            bind: 'set-amount-collapsed-simulator-out-of-time'
          },
          [getChannelName('next_step')]: {
            bind: 'set-amount-collapsed-simulator-out-of-time'
          },
          [getChannelName('COLLAPSED_SIMULATOR_OUT_OF_TIME_MESSAGE')]: {
            bind: 'set-amount-collapsed-simulator-out-of-time-message'
          },
          [getChannelName('CONFIRM_ANIMATION')]: {
            bind: 'open-stiky-animation'
          },
          [getChannelName('NEXT_STEP_PRODUCT_SELECTOR')]: {
            bind: 'selected-product-next'
          },
          [getChannelName('NEXT_STEP_EVENT_RESTORE')]: {
            bind: 'event-retore'
          },
          [getChannelName('analytics_set_in_time_step')]: {
            bind: 'in-time-changed'
          },
          [getChannelName('close_step_with_modal')]: {
            bind: 'close-step'
          },
          [getChannelName('update_account_description')]: {
            bind: 'update-account-step-description'
          },
          [getChannelName('cells_scroll_zone_modify')]: {
            bind: 'cells-scroll-zone-modify'
          },
          [getChannelName('FUNDS_RESET_COLLAPSED')]: {
            bind: 'open-fund-selector-step'
          },
          [`global_${getChannelName('TOGGLE_SPINNER')}`]: {
            bind: 'spinner-toggle-event'
          },
          [getChannelName('SET_SIMULATION_DESCRIPTION')]: {
            bind: 'set-simulation-description'
          },
          [getChannelName('SET_CHECKLIST_HEADER')]: {
            bind: 'set-checklist-header'
          },
          [getChannelName('SET_FUND_STEP_DESCRIPTION')]: {
            bind: 'set-fund-step-description'
          },
          [getChannelName('HIDE_STEP_FUND_SERVICE')]: {
            bind: 'hidden-step-fund-service'
          },
          [getChannelName('analytics_review')]: {
            bind: 'review-hiring-data'
          },
          NAVIGATE_TO_REVIEW_FUNDS_ADD_NEW_CONTRACT: {
            bind: 'review-hiring-data-result',
            link: {
              page: 'addFundToContractReview',
              skipHistory: true
            }
          },
          global_open_document_base64: {
            bind: 'show-funds-pdf'
          },
          global_open_document_url: {
            bind: 'pdf-get-url'
          }
        },
        params: {
          globalUserId: 'global_user_id'
        }
      }
    }
  };

  const dmGlobalApisCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host,
      native,
      requiredToken,
      contactsBookApiVersion: contactsBook,
      cellsConnections: {
        in: {
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'customerId'
          },
          [getChannelName('REQUEST_CUSTOMER_DETAIL')]: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getChannelName('SUCCESS_CUSTOMER_DETAIL')]: {
            bind: 'set-customer-detail'
          },
          [getChannelName('ERROR_CUSTOMER_DETAIL')]: {
            bind: 'error-on-get-customer-detail'
          }
        }
      }
    }
  };

  const productsDM = {
    zone: 'app__main',
    tag: 'cells-dm-global-apis-products',
    type: 'DM',
    properties: {
      host,
      headers: {
        'Accept-Language': 'es'
      },
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('GET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'getInvestmentFundProductsByInvestmenFundId'
          },
          [getChannelName('REQUEST_FUND_DETAIL_MODAL')]: {
            bind: 'getInvestmentFundProductsByFundId'
          }
        },
        out: {
          [getChannelName('SET_INVESTMENT_FUNDS_LIST')]: {
            bind: 'success-on-get-investment-funds-by-investment-fund-id'
          },
          [getChannelName('ERROR_ON_INVESTMENT_FUNDS_LIST')]: {
            bind: 'error-on-get-investment-funds-by-investment-fund-id'
          },
          [getChannelName('SUCCESS_FUND_DETAIL_REQUEST')]: {
            bind: 'success-on-get-investment-fund-products-by-fund-id'
          },
          [getChannelName('ERROR_LIST_FUNDS_AVAILABLE_REQUEST')]: {
            bind: 'error-on-get-investment-funds-by-investment-fund-id'
          },
          [getChannelName('ERROR_DETAIL_FUND_AVAILABLE_REQUEST')]: {
            bind: 'error-on-get-investment-fund-products-by-fund-id'
          }
        }
      }
    }
  };

  const investmentFundDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-investment-funds',
    properties: {
      host,
      requiredToken,
      native,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('POST_FUND_SIMULATE')]: {
            bind: 'postFundSimulate'
          },
          [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
            bind: 'postFundsByInvestmenFundId'
          }
        },
        out: {
          [getChannelName('success_post_fund_simulate')]: {
            bind: 'success-on-post-simulate'
          },
          [getChannelName('SUCCESS_ON_FUND_CONTRACT')]: {
            bind: 'success-on-post-funds-by-investment-fund-id'
          },
          [getChannelName('ERROR_POST_DETAIL_FUND_AVAILABLE_SIMULATE')]: {
            bind: 'error-on-post-simulate'
          },
          [getChannelName('ERROR_ON_FUND_CONTRACT')]: {
            bind: 'error-on-post-funds-by-investment-fund-id'
          }
        }
      }
    }
  };

  const investmentDocumntPdf = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host,
      requiredToken,
      native,
      cellsConnections: {
        in: {
          [getChannelName('REQUEST_PDF')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('_SET_BUSINESS_DOC')]: {
            bind: 'setProperties'
          },
          [getChannelName('_REQUEST_PDF_DM_POST')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getChannelName('_SUCCESS_RESPONSE_PDF')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('_ERROR_RESPONSE_PDF')]: {
            bind: 'error-on-get-business-documents'
          },
          [getChannelName('_ERROR_POST_BD')]: {
            bind: 'error-on-post-business-documents'
          },
          [getChannelName('_SUCCESS_POST_BD')]: {
            bind: 'post-business-documents-success'
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    tag: 'glomo-analytics-funds-hiring-manager-mx',
    familyPath: '@glomo-web-components/glomo-analytics-funds-hiring-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      signatureTypes: {'05': 'sms', '33': 'token'},
      config: {
        steps: {
          2: 'account-step',
          3: 'fund-step',
          4: 'invest-amount-step',
          5: 'terms-and-conditions'
        }
      },
      cellsConnections: {
        in: {
          add_fund_to_contract_init_page: {
            bind: 'fireStepLoaded'
          },
          [getChannelName('analytics_view_offer_step')]: {
            bind: 'fireStepLoaded'
          },
          [getChannelName('set_max_products_select_fund')]: {
            bind: 'setStartPage'
          },
          [getChannelName('fund_selected')]: {
            bind: 'setFunds'
          },
          [getChannelName('SET_INFO_SUMMARY')]: {
            bind: 'setAmountSelected'
          },
          [getChannelName('analytics_set_in_time_step')]: {
            bind: 'setInTime'
          },
          [getChannelName('set_information_simulation')]: {
            bind: 'huellaSimulationStep'
          },
          [getChannelName('POST_FUND_SIMULATE')]: {
            bind: 'getSimulate'
          },
          [getChannelName('analytics_step_focus_in')]: {
            bind: 'onStep'
          },
          [getChannelName('show_button_finish_steps')]: {
            bind: 'viewOCConfirm'
          },
          [getChannelName('REQUEST_FUND_CONTRACT_SERVICE')]: {
            bind: 'viewOTP'
          },
          [getChannelName('analytics_review')]: {
            bind: 'viewHiringSuccess'
          },
          [getChannelName('error_modal_account_filter')]: {
            bind: 'errorGeneric'
          }
        },
        out: {
          [getChannelName('analytics_page_visit')]: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.APP_PAGE_VISIT
          },
          [getChannelName('analytics_page_started')]: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.APP_STARTED
          },
          [getChannelName('analytics_step_account_selected')]: {
            bind: 'analytics-account-step',
            analytics: ANALYTICS.APP_STEP2
          },
          [getChannelName('analytics_step_fund_selected')]: {
            bind: 'analytics-fund-step',
            analytics: ANALYTICS.APP_STEP3
          },
          [getChannelName('analytics_step_amount_inserted')]: {
            bind: 'analytics-invest-amount-step',
            analytics: ANALYTICS.APP_STEP4
          },
          [getChannelName('analytics_step_terms_and_conditions_selected')]: {
            bind: 'analytics-terms-and-conditions',
            analytics: ANALYTICS.APP_STEP5
          },
          [getChannelName('analytics_step_confirm_hiring')]: {
            bind: 'analytics-oc-confirmation',
            analytics: ANALYTICS.APP_STEP6
          },
          [getChannelName('analytics_step_otp_modal')]: {
            bind: 'analytics-otp-modal',
            analytics: ANALYTICS.APP_STEP7
          },
          [getChannelName('analytics_app_completed_successfully')]: {
            bind: 'analytics-app-completed-successfully',
            analytics: ANALYTICS.APP_COMPLETED
          },
          [getChannelName('analytics_huella_simulation_confirmed')]: {
            bind: 'analytics-huella-invest-simulation-step',
            analytics: ANALYTICS.HUELLA_STEP5
          },
          [getChannelName('analytics_error_insufficient_balance')]: {
            bind: 'analytics-error-insufficient-balance',
            analytics: ANALYTICS.HUELLA_STEP_MIN_AMOUNT
          },
          [getChannelName('analytics_error_all_funds_contracted')]: {
            bind: 'analytics-error-all-funds-contracted',
            analytics: ANALYTICS.HUELLA_STEP_ALL_FUNDS_CONTRACTED
          }
        }
      }
    }
  };

  const base = {
    hash: 'add-fund-to-contract',
    currentPage: {
      url: '/add-fund-to-contract',
      params: []
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      fundDetailModal,
      modalService,
      header,
      opxDm,
      appSettingsFundsData,
      addFundToContractManager,
      offerStep,
      stepAccountSelector,
      selectStep,
      investmentSimulationStep,
      productSelectorFoundsModalType,
      termsAndConditionsStep,
      cellsIconMessageOutOfTime,
      cellsIconMessage,
      summarySection,
      productSelectorFoundsModal,
      productSelectorFoundsModalDebt,
      productSelectorFoundsModalVariable,
      productSelectorFoundsModalMulti,
      productSelectorFoundsModalAllProducts,
      productSelectorModal,
      fundsHiringFilter,
      productsDM,
      investmentFundDm,
      dmGlobalApisCustomers,
      investmentDocumntPdf,
      analyticsManager
    ]
  };

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-investment-funds', PAGE_NAME, ['success-on-post-funds-by-investment-fund-id', 'error-on-post-funds-by-investment-fund-id']);

  return sphericaPageUtils.spherize(base);
};
