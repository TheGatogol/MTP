/* eslint-disable no-shadow */
'use strict';
const utils = require('./common/helpers/_utils');
const page = require('./common/_pages');
const LITERALS = require('./analytics/common/_literals');

const PAGE_NAME = 'rechargeTag';

module.exports = (CONFIG) => {

  const pages = page(CONFIG)(PAGE_NAME);
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const CURRENCY_CODE = utils.getCurrencyCode(CONFIG);
  const { useNames, createPrefixFromPageName } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const MAX_STEPS = 2;
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const analyticsTagRecharge = require('./analytics/_glomo-analytics-manager-recharge')(CONFIG);
  const {
    globalServices: {
      versions: {
        paymentsV1 = '1'
      }
    },
    native = false
  } = CONFIG;

  const glomoAlertManagerSpherica = {
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
          RECHARGE_TAG_EXIT_PROCESS_ACCEPT: {
            bind: 'alert-confirm-delete-tag-modal-recharge-accept',
            backStep: true
          }
        }
      }
    }
  };

  const createMoreInfoModal = ({ code, firstParagraphKey }) => ({
    code,
    className: 'info',
    maximize: !isSpherica,
    iconOnlyFullHeight: undefined,
    title: 'pase-tag-recharge-more-info-header',
    type: 'paragraphs',
    values: [
      { icon: 'coronita:help', class: 'help-dark-blue' },
      { title: 'pase-tag-recharge-more-info-title', class: 'spacing text-center' },
      {
        text: isSpherica ? `${firstParagraphKey}-spherica` : `${firstParagraphKey}`,
        class: 'spacing text-center'
      },
      { text: 'pase-tag-recharge-more-info-paragraph-two' }
    ]
  });

  const modalRechargeItems = {
    'confirm-delete-tag-modal-recharge': {
      code: 'confirm-delete-tag-modal-recharge',
      maximize: false,
      className: 'custom',
      closeOnPrimaryButton: true,
      iconOnlyFullHeight: true,
      hideCloseIcon: false,
      title: 'pase-tag-recharge-title-exit-modal-spherica',
      acceptBtLabel: 'pase-tag-recharge-title-button-one-modal',
      cancelBtLabel: 'pase-tag-recharge-title-button-two-modal',
      values: [
        { icon: 'coronita:help', iconClass: 'icon-size-24', class: 'info' },
        { title: 'pase-tag-recharge-title-confirm-modal-exit-recharge', class: 'spacing--xs text-center' },
        { text: 'pase-tag-recharge-text-confirm-modal-exit-recharge', class: 'spacing text-center title-grey' }
      ]
    },

    'more-info-recharge': createMoreInfoModal({
      code: 'more-info-recharge',
      firstParagraphKey: 'pase-tag-recharge-more-info-paragraph-one',
      ...(!isSpherica ? {acceptBtLabel: 'pase-tag-recharge-title-button-one-modal'} : {})
    }),

    'more-info-recharge-televia': createMoreInfoModal({
      code: 'more-info-recharge-televia',
      firstParagraphKey: 'tag-recharge-more-info-paragraph-one',
      ...(!isSpherica ? {acceptBtLabel: 'pase-tag-recharge-title-button-one-modal'} : {})
    }),

    'system-not-available-pase-error': {
      code: 'system-not-available-pase-error',
      title: 'pase-tag-title',
      maximize: true,
      className: 'close-button--right info header--white-call-me-back',
      closeOnPrimaryButton: true,
      acceptBtLabel: 'pase-register-tag-exit',
      cancelFromHeaderEvent: 'HEADER',
      cancelBtLabel: 'pase-register-call-pase',
      heroImage: '../images/Connectivity.svg',
      values: [
        { title: 'pase-register-no-system-title', class: 'spacing--xs text-center' },
        { text: 'pase-register-no-system-message', class: 'spacing text-center title-grey' }
      ]
    }
  };

  const template = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      className: isNativeIos ? 'bg-core-blue ios-top-padding' : '',
      disableEdgeSwipe: true,
      headerFixed: true,
      animationType: 'verticalUp',
      preventScrollWithOverlay: true,
      iOSFixedHeader: true,
      extraHeaderClass: 'dark-blue-bg header--core',
      headerHeight: utils.headerHeight,
      topOnConfirm: true,
      cellsConnections: {
        in: {
          [getChannelName + '_SCROLL_ZONE']: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName + '_ALL_STEPS_SCROLL']: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName + '_SHOW_CONFIRM_OFFER_PAGE']: {
            bind: 'showConfirm'
          },
          [getChannelName + '_SHOW_SUMMARY']: {
            bind: 'showConfirm'
          },
          [getChannelName + '_RESET_STEPS_NAVIGATION']: {
            bind: 'showConfirm'
          }
        },
        out: {
          [getChannelName + '_SCROLL_COMPLETE']: {
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
          [getChannelName + '_INIT_PAGE']: {
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

  const paymentsServiceApis = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-payments',
    properties: {
      host: CONFIG.globalServices.host,
      headers: { 'Accept-Language': 'es' },
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName + '_REQUEST_RECHARGE']: {
            bind: 'makePaymentPase'
          },
          [getChannelName + '_REQUEST_RECHARGE_VERSION_REVERSE']: {
            bind: 'makePaymentPase'
          },
          [(getChannelName + '_FEATURE_FLAGS_VERSION_REVERSE')]: {
            bind: 'flagsBackOfOperation'
          }
        },
        out: {
          [getChannelName + '_POST_PAYMENT_SUCCESS']: {
            bind: 'success-response-payment-pase'
          },
          [getChannelName + '_POST_PAYMENT_ERROR']: {
            bind: 'error-response-payment-pase'
          },
          [getChannelName + '_ERROR_PAYMENT_604']: {
            bind: 'high-risk-of-fraud'
          }
        }
      }
    }
  };

  const customerServiceApis = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      paymentsServicesApiVersion: CONFIG.globalServices.customers,
      native,
      otpId: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName + '_SET_CUSTOMER_ID']: {
            bind: 'customerId'
          },
          [getChannelName + '_REQUEST_CUSTOMER_ADDRESSES']: {
            bind: 'getCustomerDetail'
          }
        },
        out: {
          [getChannelName + '_RESPONSE_CUSTOMER_ADDRESSES']: {
            bind: 'set-customer-detail'
          },
          [getChannelName + '_ERROR_RESPONSE_CUSTOMER_ADDRESSES']: {
            bind: 'error-on-get-customer-detail'
          }
        }
      }
    }
  };

  const headerPaseTagRecharge = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: isNativeIos ? 'header--core-ios header--core' : 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'pase-tag-recharge-header',
      cellsConnections: {
        out: {
          recharge_tag_OPEN_MODAL_EXIT: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      rightIcon: 'coronita:close',
      rightIconSize: '24',
      rightIconText: 'cells-molecule-header-spherica-close',
      className: `header--white header ${isNativeIos ? 'safe-card-header' : ''}`,
      titleName: 'pase-tag-recharge-header'
    }
  };

  const headerStepCard = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    properties: {
      fixed: true,
      shouldHideChangeButton: true,
      isOneProduct: true,
      active: true,
      collapsed: true,
      stepTitle: 'pase-tag-recharge-step-one-title',
      maxSteps: MAX_STEPS,
      isWarningMessage: true,
      availableLineText: 'pase-tag-recharge-step-one-line-text',
      changeLabel: '',
      filledAlignment: {
        right: true,
        top: false
      },
      imgWidth: 50,
      imgHeight: 50,
      localCurrency: LOCAL_CURRENCY,
      infoMessage: 'pase-tag-recharge-step-one-info-message',
      cellsConnections: {
        in: {
          [getChannelName + '_SET_RECHARGE_DETAIL']: {
            bind: 'selected'
          },
          [getChannelName + '_SET_RECHARGE_DETAIL_ERROR_MESSAGE']: {
            bind: 'errorMessage'
          },
          [getChannelName + '_SET_RECHARGE_DETAIL_ERROR_MESSAGE_SHOW']: {
            bind: 'selectedError'
          }
        }
      }
    }
  };

  const selectAmountRecharge = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-enter-amount',
    tagSpherica: 'cells-step-enter-amount-spherica',
    properties: {
      amountInputLabel: 'pase-tag-recharge-step-other-import',
      currentStep: 1,
      maxSteps: MAX_STEPS,
      stepTitle: 'pase-tag-recharge-step-two-title',
      stepDescription: 'pase-tag-recharge-step-two-description',
      language: LANGUAGE,
      uiMode: 'full',
      className: 'pase-tag',
      validateAmountRange: true,
      avoidValidation: 'false',
      range: true,
      showIconInRangeMessageSection: true,
      showAlterInputInfo: true,
      showCurrenciesInfo: false,
      showMessageBelowAmountCollapsed: true,
      showThirdInfoMessage: true,
      showRightCurrencyIcon: true,
      minProduct: 200,
      minValue: 200,
      minLimit: 200,
      maxLimit: 2000,
      zeroDecimalsHidden: true,
      hideDecimalsMessage: true,
      complexAmountErrorMaxLimitMessage: 'true',
      hiddenMaxLimit: 'false',
      multiple: 100,
      currency: CURRENCY_CODE,
      isRemaining: true,
      multipleAmountRangeMessageKey: 'cells-limited-amount-default-info-amount',
      amountErrorMaxLimitMessage: 'pase-tag-recharge-step-two-balance-message',
      multipleAmountRangeErrorMessageKey: 'tag-recharge-step-two-min-limit-message',
      hiddenMinLimit: 'false',
      name: 'noLimitsRemaining',
      changeLabel: 'pase-tag-recharge-step-two-change-label',
      disableAmountGroupWarning: true,
      errorMessageBasedOnAccountBalance: true,
      errorBalanceMessage: 'pase-tag-recharge-step-two-balance-message-two',
      cellsConnections: {
        in: {
          [getChannelName + '_INIT_PAGE']: {
            bind: 'initialize'
          },
          [getChannelName + '_SET_LIMITED_AMOUNT']: {
            bind: 'maxProduct'
          },
          [getChannelName + '_SHOW_BUTTONS']: {
            bind: 'amounts'
          },
          [getChannelName + '_SHOW_BUTTONS_CURRENCY']: {
            bind: 'currency'
          },
          [getChannelName + '_SHOW_BUTTONS_CURRENCY']: {
            bind: 'localCurrency'
          },
          [getChannelName + '_SHOW_BUTTONS_CURRENCY']: {
            bind: 'currencyCode'
          },
          [getChannelName + '_SHOW_BUTTONS_TOP_AMOUNT']: {
            bind: 'topAmountMessageCurrencyCode'
          },
          [getChannelName + '_DISABLE_STEPS']: {
            bind: 'active'
          },
          [getChannelName + '_set_enter_amount_third_message']: {
            bind: 'iconMessageThird'
          },
          [getChannelName + '_set_message_amount_collapsed']: {
            bind: 'messageBelowAmountCollapsed'
          },
          blue_redirect_recharge_tag_set_amount: {
            bind: 'amountValidationFromBlue'
          }
        },
        out: {
          [getChannelName + '_REGISTER_STEP_CHANNEL']: {
            bind: 'register-step'
          },
          [getChannelName + '_INTERACTION_QUANTITY']: {
            bind: 'send-step-amount-value'
          },
          [getChannelName + '_INTERACTION_INPUT_FOCUS']: {
            bind: 'amount-input-focus'
          },
          [getChannelName + '_NEXT_STEP']: {
            bind: 'send-step-amount-value'
          },
          [getChannelName + '_SET_AMOUNT_RECHARGE_SELECTED']: {
            bind: 'send-step-amount-value'
          },
          [getChannelName + '_ALL_STEPS_COLLAPSED']: {
            bind: 'send-step-amount-value'
          },
          [getChannelName + '_MANAGE_STEP']: {
            bind: 'change-step-state'
          },
          [getChannelName + '_CHANGE_ALL_STEPS_COLLAPSED']: {
            bind: 'change-step-state'
          },
          [getChannelName + '_OPEN_MORE_INFO_RECHARGE']: {
            bind: 'more-info-button-press'
          }
        }
      }
    },
    propertiesSpherica: {
      amountInputLabel: 'pase-tag-recharge-step-other-import-spherica',
      changeLabel: 'pase-tag-recharge-generic-step-change-label-spherica',
      showTextRightIcon: true,
      stepTitle: 'pase-tag-recharge-step-two-title-spherica',
      messageBelowAmountCollapsed: 'tag-recharge-step-two-message-below-label-collapsed'
    }
  };

  const productSelectorStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    properties: {
      currentStep: 2,
      maxSteps: MAX_STEPS,
      stepTitle: 'pase-tag-recharge-step-three-title',
      ...(isSpherica ? '' : {
        imgCollapsed: './images/payrollAdvance/bbva50.svg',
        imgHeight: 26,
        imgWidth: 26
      }),
      description: 'pase-tag-recharge-step-three-description',
      productsListLabel: 'pase-tag-recharge-step-three-product-list-label',
      changeLabel: 'pase-tag-recharge-step-three-change-label',
      errorMessage: 'pase-tag-recharge-step-three-error-message',
      changeOriginText: 'recharge-tag-edit-view-change-primary-button-edit',
      dontChangeAndContinueText: 'recharge-tag-edit-view-change-link-button-edit',
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          [getChannelName + '_INIT_PAGE']: {
            bind: 'initialize'
          },
          [getChannelName + '_SEND_PRODUCTS']: {
            bind: 'products'
          },
          [getChannelName + '_MODAL_PRODUCT_SELECTED']: {
            bind: 'onProductSelected'
          },
          [getChannelName + '_VALIDATE_ACCOUNT']: {
            bind: 'showErrorProductsItem'
          },
          [getChannelName + '_VALIDATE_BUTTON_ACCOUNT']: {
            bind: 'primaryButtonDisabled'
          },
          blue_redirect_recharge_tag_blue_product_selected: {
            bind: 'defaultProductIdFromBlue'
          }
        },
        out: {
          [getChannelName + '_REGISTER_STEP_CHANNEL']: {
            bind: 'register-step'
          },
          [getChannelName + '_ACCOUNT_SELECTED']: {
            bind: 'on-change-product-selected'
          },
          [getChannelName + '_NEXT_STEP']: {
            bind: 'on-change-product-selected'
          },
          [getChannelName + '_SHOW_SUMMARY']: {
            bind: 'select-product'
          },
          [getChannelName + '_ALL_STEPS_COLLAPSED']: {
            bind: 'on-change-product-selected'
          },
          [getChannelName + '_ACCOUNT_SELECTED_ANALYTICS']: {
            bind: 'on-change-product-selected'
          },
          [getChannelName + '_MANAGE_STEP']: {
            bind: 'change-pressed'
          },
          [getChannelName + '_CHANGE_ALL_STEPS_COLLAPSED']: {
            bind: 'change-pressed'
          },
          [getChannelName + '_DONT_CHANGE_AND_CONTINUE']: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName + '_DONT_CHANGE_AND_CONTINUE_ALL']: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName + '_VIEW_ALL_PRODUCTS']: {
            bind: 'view-all'
          },
          [getChannelName + '_FOCUS_SELECT_ACCOUNT_STEP']: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'pase-tag-recharge-generic-step-change-label-spherica',
      description: 'pase-tag-recharge-step-two-description-spherica',
      showDescriptionOneProduct: true
    }
  };

  const allProductSelector = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    properties: {
      modalTitle: 'pase-tag-recharge-product-selector-modal-title',
      showCloseModalButton: !isSpherica,
      className: 'selected-product',
      closeButtonLabel: 'pase-tag-recharge-product-selector-modal-button-label',
      localCurrency: LOCAL_CURRENCY,
      language: LANGUAGE,
      iOSFixedHeader: true,
      cellsConnections: {
        in: {
          [getChannelName + '_VIEW_ALL_PRODUCTS']: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName + '_MODAL_PRODUCT_SELECTED']: {
            bind: 'selected-product'
          },
          [getChannelName + '_PRODUCT_SELECTED']: {
            bind: 'selected-product'
          }
        }
      }
    }
  };

  const paseTagRechargeOpxDm = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-opx-pase-tag-card-recharge-manager',
    tag: 'glomo-opx-pase-tag-card-recharge-manager-mx',
    properties: {
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      modalRechargeItems,
      cellsConnections: {
        in: {
          rechargeTag_Agreement_Type: {
            bind: 'typeAgreement'
          },
          [getChannelName + '_REGISTER_STEP_CHANNEL']: {
            bind: 'registerStep'
          },
          [getChannelName + '_NEXT_STEP']: {
            bind: 'nextStep'
          },
          [getChannelName + '_ALL_STEPS_COLLAPSED']: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getChannelName + '_SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [getChannelName + '_MANAGE_STEP']: {
            bind: 'nextStep'
          },
          [getChannelName + '_CHANGE_ALL_STEPS_COLLAPSED']: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getChannelName + '_DONT_CHANGE_AND_CONTINUE_ALL']: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getChannelName + '_DONT_CHANGE_AND_CONTINUE']: {
            bind: 'goToNext'
          },
          recharge_tag_OPEN_MODAL_EXIT: {
            bind: 'openModalExit'
          },
          [getChannelName + '_SHOW_CONFIRM']: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getChannelName + '_AMOUNT_SELECTED_INSUFFICIENT']: {
            bind: 'resetFollowingSteps'
          },
          [getChannelName + '_INIT_PAGE']: {
            bind: 'onAnyStepCollapsedChanged'
          },
          [getChannelName + '_RESET_STEPS_NAVIGATION']: {
            bind: 'resetWithDefaultSettings'
          }
        },
        out: {
          [getChannelName + '_SCROLL_ZONE']: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName + '_ALL_STEPS_SCROLL']: {
            bind: 'cells-all-steps-scroll'
          },
          [getChannelName + '_SHOW_CONFIRM_OFFER_PAGE']: {
            bind: 'all-steps-collapsed-changed'
          },
          [getChannelName + '_ANALYTICS_CONFIRMATION']: {
            bind: 'all-steps-collapsed-changed'
          },
          rechargeTag_OPEN_MODAL_ITEMS: {
            bind: 'open-info-modal'
          },
          [getChannelName + '_RESPONSE-ERROR-RECHARGE-SERVICE']: {
            bind: 'response-error-recharge-service'
          },
          [getChannelName + '_NAVIGATION_TO_CARD_LIST']: {
            bind: 'navigation-to-card-list-event',
            link: {
              page: 'paseTagCardList',
              skipHistory: true
            }
          },
          paseTagCardRecharge_REFRESH_LIST: {
            bind: 'navigation-to-card-list-event'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      modalRechargeItems,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-info-modal'
            }
          }
        },
        remove: {
          out: [
            'rechargeTag_OPEN_MODAL_ITEMS',
            'recharge_tag_OPEN_MODAL_EXIT'
          ]
        }
      }
    }
  };

  const paseTagRechargeDm = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-toll-recharge-manager',
    tag: 'glomo-toll-recharge-manager-mx',
    properties: {
      modalConfigItems: modalRechargeItems,
      localCurrency: LOCAL_CURRENCY,
      cellsConnections: {
        in: {
          register_tag_success_NAVIGATION_SUCCESS_REGISTER_TAG_TO_RECHARGE_TAG: {
            bind: 'getDetailRecharge'
          },
          PASE_TAG_NAVIGATION_TO_RECHARGE_TAG: {
            bind: 'getDetailRecharge'
          },
          paseTagCardRegisterReview_TO_RECHARGE: {
            bind: 'getDetailRecharge'
          },
          global_login_success: {
            bind: 'globalCacheStorage'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          [getChannelName + '_INIT_PAGE']: {
            bind: 'init'
          },
          [getChannelName + '_SET_AMOUNT_RECHARGE_SELECTED']: {
            bind: 'amountRechargeSelected'
          },
          [getChannelName + '_ACCOUNT_SELECTED']: {
            bind: 'accountSelected'
          },
          [getChannelName + '_ACCEPTED_FINAL_AMOUNT']: {
            bind: 'requestRecharge'
          },
          [getChannelName + '_POST_PAYMENT_SUCCESS']: {
            bind: 'successResponseRecharge'
          },
          global_login_success_indicators: {
            bind: 'requestEmail'
          },
          [getChannelName + '_RESPONSE_CUSTOMER_ADDRESSES']: {
            bind: 'getEmail'
          },
          [getChannelName + '_EXIT_RECHARGE_PAGE']: {
            bind: 'resetStepExit'
          },
          [getChannelName + '_ERROR_RESPONSE_CUSTOMER_ADDRESSES']: {
            bind: 'errorCustomerDetail'
          },
          [getChannelName + '_RESPONSE-ERROR-RECHARGE-SERVICE']: {
            bind: 'showInfoModalErrorFormat'
          },
          [getChannelName + '_POST_PAYMENT_ERROR']: {
            bind: 'responseErrorService'
          },
          [getChannelName + '_ERROR_PAYMENT_604']: {
            bind: 'responseErrorPayload'
          },
          [getChannelName + '_OPEN_MORE_INFO_RECHARGE']: {
            bind: 'moreInfoRechargeAgreement'
          },
          recharge_tag_OPEN_MODAL_EXIT: {
            bind: 'manageBackButton'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'openModalExit'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlagCollection'
          },
          global_mtu_exception_back_navigation: {
            bind: 'mtuFlag'
          },
          blue_redirect_pase_tag_navigation_to_recharge_tag: {
            bind: 'navigationFromBlue'
          }
        },
        out: {
          global_retry_error: {
            bind: 'retry-error'
          },
          rechargeTag_Agreement_Type: {
            bind: 'agreement-type'
          },
          [getChannelName + '_SET_RECHARGE_DETAIL']: {
            bind: 'set-recharge-detail-event'
          },
          [getChannelName + '_SHOW_CONFIRM']: {
            bind: 'set-recharge-detail-event'
          },
          [getChannelName + 'page_visit_analytics']: {
            bind: 'set-recharge-detail-event'
          },
          [getChannelName + '_SET_RECHARGE_DETAIL_ERROR_MESSAGE']: {
            bind: 'set-recharge-detail-error-message-event'
          },
          [getChannelName + '_SET_RECHARGE_DETAIL_ERROR_MESSAGE_SHOW']: {
            bind: 'set-recharge-detail-error-message-show-event'
          },
          [getChannelName + '_SEND_PRODUCTS']: {
            bind: 'products-changed'
          },
          [getChannelName + '_SET_LIMITED_AMOUNT']: {
            bind: 'limited-amount-changed'
          },
          [getChannelName + '_SEND_DATA_API_PAYMENTS_REQUEST']: {
            bind: 'request-post-payments-services-data'
          },
          [getChannelName + '_SHOW_BUTTONS']: {
            bind: 'show-buttons-amount'
          },
          [getChannelName + '_AMOUNT_SELECTED_INSUFFICIENT']: {
            bind: 'reset-steps-after-user-selector'
          },
          [getChannelName + '_SHOW_BUTTONS_CURRENCY']: {
            bind: 'currency-mx'
          },
          [getChannelName + '_SHOW_BUTTONS_TOP_AMOUNT']: {
            bind: 'top-amount-message-currency-code'
          },
          [getChannelName + '_SET_SUMMARY_AMOUNT']: {
            bind: 'summary-amount-changed'
          },
          [getChannelName + '_SET_SUMMARY_AMOUNT_ANALYTICS']: {
            bind: 'summary-amount-changed'
          },
          [getChannelName + '_DISABLE_STEPS']: {
            bind: 'set-recharge-detail-disable-steps'
          },
          [getChannelName + '_REQUEST_RECHARGE']: {
            bind: 'request-recharge-event'
          },
          [getChannelName + '_REQUEST_RECHARGE_VERSION_REVERSE']: {
            bind: 'request-recharge-event-back-of-operation'
          },
          [getChannelName + '_FEATURE_FLAGS_VERSION_REVERSE']: {
            bind: 'feature-flags'
          },
          tag_SERVICE_SUCCESS_RESPONSE: {
            bind: 'success-detail'
          },
          televiaRechargeUp_NAVIGATION_TO_RECHARGE_REVIEW: {
            bind: 'navigation-to-recharge-review',
            link: {
              page: 'televiaRechargeUp'
            }
          },
          [getChannelName + '_RESET_STEPS_NAVIGATION']: {
            bind: 'reset-steps-event'
          },
          [getChannelName + '_REQUEST_CUSTOMER_ID']: {
            bind: 'request-customer-id-event'
          },
          [getChannelName + '_REQUEST_CUSTOMER_ADDRESSES']: {
            bind: 'request-customer-addresses-event'
          },
          [getChannelName + '_SET_CUSTOMER_ID']: {
            bind: 'customer-id-changed'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName + '_ANALYTICS_SUCCESS']: {
            bind: 'success-response-analytics'
          },
          [getChannelName + '_VALIDATE_ACCOUNT']: {
            bind: 'validate-account-event'
          },
          [getChannelName + '_VALIDATE_BUTTON_ACCOUNT']: {
            bind: 'validate-account-event'
          },
          OC_OPEN_MODAL: {
            bind: 'open-modal-info'
          },
          PRT_OPEN_MODAL: {
            bind: 'open-info-modal'
          },
          [getChannelName + '_RESPONSE-ERROR-RECHARGE-SERVICE']: {
            bind: 'response-error-list-service'
          },
          [getChannelName + '_set_enter_amount_third_message']: {
            bind: 'set-enter-amount-third-message'
          },
          [getChannelName + '_set_message_amount_collapsed']: {
            bind: 'set-message-amount-collapsed'
          },
          CLOSE_CONFIRM_TAG: {
            bind: 'show-close-confirm'
          },
          [getChannelName + 'set_analytics_data']: {
            bind: 'persistent-data-changed'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          },
          blue_redirect_recharge_tag_set_amount: {
            bind: 'recharge-tag-amount'
          },
          blue_redirect_recharge_tag_blue_product_selected: {
            bind: 'recharge-tag-product'
          },
          dashboard_refresh_financial_overview: {
            bind: 'success-detail'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      modalConfigItems: modalRechargeItems,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-info-modal'
            },
            CLOSE_CONFIRM_TAG_SPHERICA: {
              bind: 'show-close-confirm'
            }
          }
        },
        remove: {
          out: [
            'PRT_OPEN_MODAL',
            'CLOSE_CONFIRM_TAG'
          ]
        }
      }
    }
  };

  const operationSummaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-operation-summary',
    tagSpherica: 'cells-operation-summary-spherica',
    properties: {
      showLoadingSkeleton: true,
      showAddition: true,
      primaryButtonClass: 'tertiary',
      className: 'comission-text',
      classCommission: 'cells-summary-view--commission-text',
      summaryViewTitle: 'pase-tag-recharge-summary-view-title',
      operationAmountClass: 'amount-huge-decimals',
      buttonLabel: 'pase-tag-recharge-summary-view-button-label',
      localCurrency: LOCAL_CURRENCY,
      hideCustomFeesMessage: true,
      cellsConnections: {
        in: {
          [getChannelName + '_SET_SUMMARY_AMOUNT']: {
            bind: 'operation'
          }
        },
        out: {
          [getChannelName + '_ACCEPTED_FINAL_AMOUNT']: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      buttonLabel: 'pase-tag-recharge-summary-view-button-label-spherica'
    }
  };

  const analyticsPaseTagCardRecharge = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-toll-recharge-manager',
    tag: 'glomo-tag-card-recharge-analytics-recharge',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName + 'set_analytics_data']: {
            bind: 'data'
          },
          [getChannelName + 'page_visit_analytics']: {
            bind: 'firePageVisit'
          },
          [getChannelName + '_INTERACTION_QUANTITY']: {
            bind: 'appStarted'
          },
          [getChannelName + '_INTERACTION_INPUT_FOCUS']: {
            bind: 'appStartedFocus'
          },
          [getChannelName + '_FOCUS_SELECT_ACCOUNT_STEP']: {
            bind: 'selectAccountStep'
          },
          [getChannelName + '_ALL_STEPS_SCROLL']: {
            bind: 'checkRechargeResume'
          },
          sign_modal_open: {
            bind: 'confirmationStep'
          },
          [getChannelName + '_ANALYTICS_SUCCESS']: {
            bind: 'appCompletedSuccess'
          }
        },
        out: {
          [getChannelName + '_ANALYTICS_PAGE_VISIT_RECHARGE_TAG']: {
            bind: 'analytics-page-visit',
            analytics: analyticsTagRecharge.pageViewVisit(LITERALS.tag.recharge, LITERALS.commons.oneAmount, LITERALS.commons.oneAmount)
          },
          [getChannelName + '_ANALYTICS_APP_STARTED']: {
            bind: 'analytics-app-started',
            analytics: analyticsTagRecharge.appStarted(LITERALS.tag.recharge, LITERALS.commons.oneAmount)
          },
          [getChannelName + '_ANALYTICS_APP_STEP_SELECTED_ACCOUNT']: {
            bind: 'fire-analytics-app-account-selected-step',
            analytics: analyticsTagRecharge.appStep(2, LITERALS.tag.recharge, LITERALS.commons.accountSelection_two, LITERALS.commons.accountSelection_two)
          },
          [getChannelName + '_ANALYTICS_APP_STEP_CONFIRMATION']: {
            bind: 'analytics-app-step-confirmation',
            analytics: analyticsTagRecharge.appStep(3, LITERALS.tag.recharge, LITERALS.commons.third_confirmaton, LITERALS.commons.third_confirmaton)
          },
          [getChannelName + '_ANALYTICS_APP_STEP_SIGNING']: {
            bind: 'analytics-app-step-signing',
            analytics: analyticsTagRecharge.appStep(4, LITERALS.tag.recharge, LITERALS.tag.fourthOtp, LITERALS.tag.fourthOtp)
          },
          [getChannelName + '_ANALYTICS_APP_COMPLETED_SUCCESS']: {
            bind: 'analytics-app-completed-success',
            analytics: analyticsTagRecharge.appCompleted(LITERALS.tag.recharge, LITERALS.commons.successfulPage, LITERALS.commons.successfulPage, LITERALS.commons.ended)
          }
        }
      }
    }
  };

  const base = {
    hash: 'recharge-tag',
    currentPage: {
      url: '/recharge-tag'
    },
    pages,
    template,
    components: [
      lifeCycle,
      headerPaseTagRecharge,
      paymentsServiceApis,
      paseTagRechargeOpxDm,
      paseTagRechargeDm,
      headerStepCard,
      selectAmountRecharge,
      allProductSelector,
      productSelectorStep,
      operationSummaryView,
      analyticsPaseTagCardRecharge,
      customerServiceApis
    ]
  };

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-payments', PAGE_NAME, ['success-response-payment-pase', 'error-response-payment-pase', 'high-risk-of-fraud']);

  return sphericaPageUtils.spherize(base);
};