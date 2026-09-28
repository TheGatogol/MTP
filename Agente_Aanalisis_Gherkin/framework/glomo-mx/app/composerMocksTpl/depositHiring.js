/* eslint-disable max-statements, no-dupe-keys */
const constants = require('./analytics/common/_constants');
const {
  getLocalCurrency,
  getLanguage,
  useNames,
  createPrefixFromPageName,
  createSpinner,
  glomoOpenDocument,
  headerHeight,
  connectionsOut
} = require('./common/helpers/_utils');
const { errors } = require('./analytics/common/_literals.js');
const PAGE_NAME = 'depositHiring';
const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
const getChannelNameCallMeBack = _name => getChannelName(_name).toLowerCase();
const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
const localStorageApp = require('./common/_local-storage');
const CMB_CONFIG = {
  operativeName: PAGE_NAME,
  configEntryPoints: {
    showInHeader: true,
    showInSticky: true
  },
  lastStep: 5,
  useFeatureFlag: true,
  scheduleNotAllowed: true
};
const CMB_CONFIG_ANALYTICS = {
  operativeName: PAGE_NAME,
  steps: {
    1: '1 simulacion',
    2: '2 cuenta deposito',
    3: '3 instruccion al vencimiento',
    4: '4 terminos y condiciones',
    5: '5 confirmar'
  },
  levels: {
    1: 'inversiones',
    2: 'inversion a plazos'
  }
};

module.exports = CONFIG => {
  const HOST = CONFIG.globalServices.host;
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const MAX_STEPS = 4;
  const native = CONFIG.native || false;
  const DOCUMENT_PLUGIN = glomoOpenDocument(CONFIG);
  const {
    APP_ON_CLICK_START,
    appPageVisit,
    appStarted,
    pageView,
    _getAppStep
  } = require('./analytics/_depositHiring')(CONFIG);
  const { analyticsCallMeBack, controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(CMB_CONFIG);
  const analyticsCmb = analyticsCallMeBack(CMB_CONFIG_ANALYTICS);

  const template = {
    tag: 'glomo-opx-template',
    properties: {
      headerHeight: headerHeight,
      headerFixed: true,
      iOSFixedHeader: CONFIG.nativeIos,
      topOnConfirm: true,
      animationType: 'verticalUp',
      className: `bg-core-blue header-fixed ${CONFIG.nativeIos ? 'ios-top-padding' : ''}`,
      extraHeaderClass: 'header--core',
      cellsConnections: {
        in: {
          [getChannelName('init_page_recalculate_header')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('_SCROLL_ZONE')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('_FINISH_STEPS')]: {
            bind: 'showConfirm'
          },
          [getChannelName('_CLOSE_CONFIRM_VALID_AMOUNT')]: {
            bind: 'close'
          },
          [getChannelName('_SHOW_CONFIRM')]: {
            bind: 'collapseOpened'
          },
          [getChannelName('_RESET_SCROLL')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('_ALL_STEPS_SCROLL')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelNameCallMeBack('_call_me_back_show_confirm_channel')]: {
            bind: 'showConfirm'
          }
        },
        out: {
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'cells-scroll-complete'
          },
          [getChannelName('_SCROLL_CHANNEL')]: {
            bind: 'opx-template-content-scroll'
          }
        }
      }
    }
  };

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
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
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page_recalculate_header')]: {
            bind: 'init-page-first-time'
          },
          [getChannelName('_INIT_PAGE')]: {
            bind: 'init-page'
          },
          [getChannelName('_reset_step')]: {
            bind: 'reset'
          },
          [getChannelNameCallMeBack('_call_me_back_reset_step')]: {
            bind: 'reset'
          },
          [getChannelNameCallMeBack('_call_me_back_initialize')]: {
            bind: 'init-page'
          },
          global_retargeting_initialize_deposit_hirings: {
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

  const modalService = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'glomo-alert-manager',
    properties: {
      className: 'exit-investment-funds generic-error-investment-funds',
      cellsConnections: {
        in: {
          [getChannelName('_GENERIC_BACK_PAGE_REVIEW')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('MODAL_ON_ERROR_MINIMUM_AMOUNT')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('modal-exit')]: {
            bind: 'openWithSettings'
          },
          [getChannelName('CANCEL_MODAL_CONFIRM')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('ACCEPT_CONTRACT_GETDATA_EXIT_CONFIRM')]: {
            bind: 'alert-CONTRACT-EXISTING-DETAIL-GETDATA-MODAL-accept'
          },
          [getChannelName('ACCEPT_ERROR_REQUIREMENTS_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-requirements-accept'
          },
          [getChannelName('ACCEPT_MINIMUM_AMOUNT_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-minimum-amount-accept'
          },
          [getChannelName('CANCEL_MINIMUM_AMOUNT_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-minimum-amount-cancel',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'alert-deposit-hiring-error-minimum-amount-accept'
          },
          [getChannelName('ACCEPT_NOT_PARTICIPANTS_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-not-participants-accept'
          },
          [getChannelName('ACCEPT_NOT_HOLDER_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-not-holder-accept'
          },
          [getChannelName('ACCEPT_NOT_HUNDRED_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-not-hundred-percent-accept'
          },
          [getChannelName('ACCEPT_NOT_CONTRACTING_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-not-contracting-product-accept'
          },
          [getChannelName('ACCEPT_LEVEL_ACCOUNTS_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-level-accounts-accept'
          },
          [getChannelName('ACCEPT_WRONG_CURRENCY_CONFIRM')]: {
            bind: 'alert-deposit-hiring-error-wrong-currency-accept'
          },
          [getChannelName('CANCEL_MODAL_CONFIRM')]: {
            bind: 'alert-deposit-hiring-exit-cancel'
          },
          deposit_hiring_EXIT_OPERATIVE_FLOW: {
            bind: 'alert-deposit-hiring-exit-accept'
          },
          global_retargeting_send_information_update: {
            bind: 'alert-deposit-hiring-exit-accept'
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
      backAction: 'navigation-to-back',
      cellsConnections: {
        in: {
          [getChannelName('ACCEPT_MINIMUM_AMOUNT_CONFIRM')]: {
            bind: 'goBack'
          },
          deposit_hiring_EXIT_OPERATIVE_FLOW: {
            bind: 'goBack'
          },
          [getChannelName('_NAVIGATE_TO_PAGE_SUCCESS')]: {
            bind: 'navigateToPage'
          },
          [getChannelName('_NAVIGATE_TO_PAGE_STORE')]: {
            bind: 'navigateToPage'
          },
          [getChannelName('_exit_modal_pages')]: {
            bind: 'goBack'
          },
          [getChannelName('_cancel_modal_pages')]: {
            bind: 'goBack'
          },
          [getChannelName('_accept_retry_modal')]: {
            bind: 'goBack'
          },
          [getChannelName('_cancel_retry_modal')]: {
            bind: 'goBack'
          },
          [getChannelName('_data_accept_modal')]: {
            bind: 'goBack'
          },
          [getChannelName('_minimun_accept_modal')]: {
            bind: 'goBack'
          },
          [getChannelName('_participants_accept_modal')]: {
            bind: 'goBack'
          },
          [getChannelName('_participants_accept_modal')]: {
            bind: 'goBack'
          },
          global_redirect_to_contract_payment_existing_send_navigate: {
            bind: 'navigateToPage'
          }
        },
        out: {
          navigation_deposit_to_prev_page: {
            bind: 'navigation-to-back',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'navigation-to-back'
          },
          SHOW_DEPOSIT_HIRING_NAVIGATION_TO_SUCCESS: {
            bind: 'navigation-to-success',
            link: {
              page: 'depositHiringReview',
              skipHistory: true
            }
          },
          SHOW_DEPOSIT_STORE_FORWARD_NAVIGATION_TO_SUCCESS: {
            bind: 'navigation-to-store-and-forward',
            link: {
              page: 'depositHiringReview',
              skipHistory: true
            }
          },
          global_retargeting_contracted_product_offer: {
            bind: 'navigation-to-store-and-forward'
          },
          global_retargeting_contracted_product: {
            bind: 'navigation-to-success'
          },
          global_redirect_to_contract_payment_existing: {
            bind: 'navigation-to-contract-payments-existing-modal',
            link: {
              page: 'contractPaymentExistingModal'
            }
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      rightIcon: 'coronita:close',
      titleName: 'glomo-deposit-hiring-title',
      className: 'header--core',
      setTimeoutHideTooltip: 3000,
      cellsConnections: {
        in: {
          [getChannelName('add-header-class')]: {
            bind: 'setSecondaryClass'
          },
          [getChannelNameCallMeBack('_call_me_back_change_header_tooltip_status')]: {
            bind: 'hasDisplayedTooltip'
          },
          [getChannelNameCallMeBack('_call_me_back_set_header_timeout_tooltip')]: {
            bind: 'setTimeoutShowTooltip'
          },
          [getChannelNameCallMeBack('_call_me_back_set_header_configuration')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('_HEADER_MODAL_EXIT_CONFIRMATION')]: {
            bind: 'click-right-button'
          },
          [getChannelNameCallMeBack('_call_me_back_init_header_configuration')]: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    }
  };

  const dmHiring = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-deposits-dm-mx',
    familyPath: 'glomo-deposits-dm',
    properties: {
      host: CONFIG.globalServices.host,
      accountsApiVersion: CONFIG.globalServices.versions.accounts,
      depositsApiVersion: CONFIG.globalServices.versions.depositsV2,
      apiVersion: CONFIG.globalServices.versions.campaigns,
      native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      localCurrency: getLocalCurrency(),
      currentLanguage: getLanguage(),
      environment: CONFIG.encryptedCoupon,
      btnLabelExit: 'glomo-deposits-modal-btn-exit',
      cellsConnections: {
        in: {
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          global_cache_channel: {
            bind: 'globalCacheStorage'
          },
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          [getChannelName('_INIT_PAGE')]: {
            bind: 'initMainHiringPage'
          },
          global_deposit_hiring_error_operation_simulate_retry_accept: {
            bind: 'initMainHiringPage'
          },
          [getChannelName('_CLEAN_INPUT_AMOUNT')]: {
            bind: 'cleanInputAmount'
          },
          [getChannelName('_OFFER_AMOUNT_CHANGED')]: {
            bind: 'offerAmountChanged'
          },
          [getChannelName('_OFFER_INPUT_AMOUNT_CHANGED')]: {
            bind: 'offerInputAmountChanged'
          },
          [getChannelName('_OFFER_SLIDER_CHANGED')]: {
            bind: 'offerSliderChanged'
          },
          [getChannelName('_SIMULATOR_HELP_BTN_TAPPED')]: {
            bind: 'modalSimulatorHelpBtnTapped'
          },
          [getChannelName('_ON_CHANGE_ACCOUNT_SELECTED')]: {
            bind: 'productSelected'
          },
          [getChannelName('_INSTRUCTION_HELP_BTN_INFO')]: {
            bind: 'modalInstructionHelpBtnInfo'
          },
          [getChannelName('_CHANGE_INSTRUCTION_SELECTED')]: {
            bind: 'changeInstructionSelected'
          },
          [getChannelName('_OPEN_PRODUCT_SHEET_PDF')]: {
            bind: 'openProductSheetPdf'
          },
          [getChannelName('_OPEN_PRODUCT_TERMS_PDF')]: {
            bind: 'openProductTermsPdf'
          },
          [getChannelName('_SUCCESS_RESPONSE_PDF')]: {
            bind: 'successResponsePDF'
          },
          [getChannelName('_ERROR_RESPONSE_PDF')]: {
            bind: 'getErrorResponsePdf'
          },
          [getChannelName('_ERROR_POST_BD')]: {
            bind: 'errorResponse'
          },
          [getChannelName('_SUCCESS_POST_BD')]: {
            bind: 'successBasePdf'
          },
          [getChannelName('_PRIMARY_CHANNEL')]: {
            bind: 'generateDepositHiring'
          },
          [getChannelName('deposits_request_success')]: {
            bind: 'manageResponseSuccessHiring'
          },
          [getChannelName('deposits_request_error')]: {
            bind: 'manageResponseErrorHiring'
          },
          [getChannelName('_HEADER_MODAL_EXIT_CONFIRMATION')]: {
            bind: 'modalExitConfirmation'
          },
          [getChannelName('_success-accounts')]: {
            bind: 'mappingAcountInfo'
          },
          [getChannelName('_error-accounts')]: {
            bind: 'onRevertModalDispatch'
          },
          [getChannelName('_success-participants')]: {
            bind: 'manageResponseSuccessParticipants'
          },
          [getChannelName('error-participants')]: {
            bind: 'manageResponseErrorParticipants'
          },
          [getChannelName('_message_time_valid_contract')]: {
            bind: 'validateHoursForMessage'
          },
          global_deposit_hiring_error_operation_simulate_retry_cancel: {
            bind: 'resetDepositHiring'
          },
          global_deposit_hiring_error_operation_simulate_exit_accept: {
            bind: 'resetDepositHiring'
          },
          global_deposit_hiring_error_operation_simulate_exit_cancel: {
            bind: 'resetDepositHiring'
          },
          global_deposit_hiring_error_operation_hiring_exit_accept: {
            bind: 'resetDepositHiring'
          },
          global_deposit_hiring_error_operation_hiring_exit_cancel: {
            bind: 'resetDepositHiring'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          [getChannelName('deposits_simulate_request_error')]: {
            bind: 'manageErrorResponseCoupon'
          },
          [getChannelName('deposits_simulate_request_success')]: {
            bind: 'manageSuccessResponseCoupon'
          },
          [getChannelName('deposit_modal_info_coupon')]: {
            bind: 'modalHelpInfoCoupon'
          },
          global_set_app_settings: {
            bind: 'setPublicSettings'
          },
          global_storage_get_app_settings_success: {
            bind: 'setPublicSettings'
          },
          global_open_document_base64_success: {
            bind: 'closeSpinner'
          },
          global_deposits_hiring_modal_retry_inital_flow_accept: {
            bind: 'initMainHiringPage'
          },
          global_deposits_hiring_modal_retry_inital_flow_exit_accept: {
            bind: 'resetDepositHiring'
          },
          global_redirect_to_contract_payment_existing_create_channel: {
            bind: 'createNameToNavigateContractPaymentExistingModal'
          },
          global_retargeting_go_next_step: {
            bind: 'setContractAccion'
          },
          global_financial_overview_details: {
            bind: 'dataDepositContracts'
          },
          deposit_hiring_EXIT_OPERATIVE_FLOW: {
            bind: 'resetDepositHiring'
          }
        },
        out: {
          [getChannelName('modal-exit')]: {
            bind: 'modal-exit-confirmation'
          },
          [getChannelName('promotion_valid_change_coupon')]: {
            bind: 'promotion-valid-changed'
          },
          [getChannelName('_get_accouts')]: {
            bind: 'request-accouts-services'
          },
          [getChannelName('deposits_sign_request_body')]: {
            bind: 'deposit-hiring-service'
          },
          [getChannelName('post_campaigns_request')]: {
            bind: 'request-campaings-services'
          },
          [getChannelName('_get_participants')]: {
            bind: 'request-accouts-partincipants'
          },
          [getChannelName('_INPUT_AMOUNT_CHANGED')]: {
            bind: 'set-input-amount'
          },
          [getChannelName('_INPUT_AMOUNT_MIN_CHANGED')]: {
            bind: 'set-input-amount-min'
          },
          deposits_hiring_slider_disabled: {
            bind: 'deposit-disabled-slider'
          },
          [getChannelName('_SLIDE_VALUES_CHANGED')]: {
            bind: 'set-slide-values'
          },
          [getChannelName('_SLIDE-VALUE-SELECTED_CHANGED')]: {
            bind: 'set-slide-value-selected'
          },
          [getChannelName('_DISABLE_OFFER_BUTTON_CHANGED')]: {
            bind: 'disable-offer-button'
          },
          [getChannelName('_SET_DEPOSIT_LIST')]: {
            bind: 'set-deposit-list'
          },
          [getChannelName('_SET_MAX_AVAILABLE_BALANCE')]: {
            bind: 'set-max-available-balance'
          },
          [getChannelName('_SET_MESSAGES_LIST')]: {
            bind: 'set-messages-list-deposit-hiring'
          },
          [getChannelName('_TOTAL_INTERESTS_CHANGED')]: {
            bind: 'total-interests-changed'
          },
          [getChannelName('_OFFER_DATA_CHANGED')]: {
            bind: 'offer-data-changed'
          },
          [getChannelName('_RATE_CHANGED')]: {
            bind: 'rate-changed'
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
          global_open_document_base64: {
            bind: 'open-document-open-by-base64'
          },
          [getChannelName('_REFRESH_ACCOUNTS')]: {
            bind: 'refresh-accounts'
          },
          [getChannelName('_INSTRUCTIONS_CHANGED')]: {
            bind: 'set-data-instructions'
          },
          [getChannelName('_MESSAGE_CONTENT_CHANGED')]: {
            bind: 'message-content-changed'
          },
          [getChannelName('_OFFER_INSTRUCTION_CHANGED')]: {
            bind: 'offer-instruction-changed'
          },
          [getChannelName('_SET_DATA_TERMS')]: {
            bind: 'set-data-terms'
          },
          [PAGE_NAME + '_DOC_CONTENT']: {
            bind: 'base-src-changed'
          },
          [PAGE_NAME + '_DOC_TITLE']: {
            bind: 'title-pdf-text'
          },
          [getChannelName('_reset_step')]: {
            bind: 'reset-deposit-hiring-flow'
          },
          [getChannelName('_exit_modal_pages')]: {
            bind: 'alert-deposit-hiring-exit-accept'
          },
          [getChannelName('_cancel_modal_pages')]: {
            bind: 'alert-deposit-hiring-exit-cancel'
          },
          [getChannelName('_accept_retry_modal')]: {
            bind: 'alert-deposit-hiring-retry-accept'
          },
          [getChannelName('_cancel_retry_modal')]: {
            bind: 'alert-deposit-hiring-retry-cancel'
          },
          [getChannelName('_data_accept_modal')]: {
            bind: 'alert-deposit-hiring-data-accept'
          },
          [getChannelName('_minimun_accept_modal')]: {
            bind: 'alert-deposit-hiring-minimum-accept'
          },
          [getChannelName('_participants_accept_modal')]: {
            bind: 'alert-deposit-hiring-participants-accept'
          },
          [getChannelName('_participants_accept_modal')]: {
            bind: 'alert-deposit-hiring-error-exit'
          },
          [getChannelName('_set_status_product')]: {
            bind: 'set-product-status'
          },
          open_control_veil: {
            bind: 'deposits-start-spinner'
          },
          close_control_veil: {
            bind: 'deposits-stop-spinner'
          },
          close_undefined_control_veil: {
            bind: 'close-spinner-veil'
          },
          global_deposits_error_operation_simualte_retry: {
            bind: 'modal-error-operation-simulate-retry'
          },
          global_deposits_purchase_modal_help_info_offer: {
            bind: 'modal-error-operation-simulate-exit'
          },
          global_deposits_error_operation_simualte_exit: {
            bind: 'modal-error-operation-hiring-exit'
          },
          global_deposits_purchase_modal_error_time: {
            bind: 'modal-error-operation-out-time'
          },
          global_deposits_purchase_modal_help_info: {
            bind: 'modal-info-simulator'
          },
          global_deposits_purchase_review_modal_gat: {
            bind: 'modal-info-instruction'
          },
          global_deposits_purchase_modal_info_ipab: {
            bind: 'modal-info-ipab'
          },
          global_alert_manager_open_with_settings: {
            bind: 'glomo-deposits-dm-mx-show-modal'
          },
          [getChannelName('_NAVIGATE_TO_PAGE_SUCCESS')]: {
            bind: 'deposit-navigate-to-page-success'
          },
          [getChannelName('_NAVIGATE_TO_PAGE_STORE')]: {
            bind: 'deposit-navigate-to-page-store-and-forward'
          },
          [getChannelName('_APP_PAGE_VISIT')]: {
            bind: 'view-deposit-hiring-pages'
          },
          [getChannelName('_APP_ANALYTICS_INFO')]: {
            bind: 'app-info-mapping-data-deposit-hiring'
          },
          [getChannelName('_APP_COMPLETED_SUCCESS')]: {
            bind: 'app-page-completed-success'
          },
          [getChannelName('_DISABLE_PRIMARY_BTN_ACCOUNTS')]: {
            bind: 'disable-primary-btn-accounts'
          },
          [getChannelName('_DISABLE_SECONDARY_BTN_ACCOUNTS')]: {
            bind: 'disable-secondary-btn-accounts'
          },
          global_send_info_process_promotion: {
            bind: 'info-process-promotion-code'
          },
          [getChannelName('_valid_message_button_hiring')]: {
            bind: 'show-message-out-of-time-hiring'
          },
          global_retry_error: {
            bind: 'retry-error',
            analytics: pageView({level3: errors.operationError, isPageError: true})
          },
          global_deposits_error_operation_simulate_retry: {
            bind: 'modal-error-operation-simulate-retry'
          },
          [getChannelName('analytics_set_data')]: {
            bind: 'set-offer-data'
          },
          [getChannelNameCallMeBack('_call_me_back_reset_step')]: {
            bind: 'reset-deposit-hiring-flow'
          },
          [getChannelName('_header_cupon_offert')]: {
            bind: 'set-promotion-header-hiring'
          },
          [getChannelName('_body_cupon_offert')]: {
            bind: 'set-promotion-body-hiring'
          },
          [getChannelName('set_feature_flags')]: {
            bind: 'set-feature-flags'
          },
          [getChannelName('_send_panel_comparative')]: {
            bind: 'send-comparative-coupon'
          },
          [getChannelName('_show_panel_comparative')]: {
            bind: 'show-panel-comparative'
          },
          global_retargeting_send_information_update: {
            bind: 'reset-deposit-hiring-flow'
          },
          global_retargeting_set_step_offer_properties_deposits: {
            bind: 'set-offer-data'
          },
          glomo_navigation_to_opportunities: {
            bind: 'navigate-to-opportunities',
            link: {
              page: 'contractProductSection',
              skipHistory: true
            }
          },
          global_redirect_to_contract_payment_existing_send_navigate: {
            bind: 'deposit-navigate-to-page-contract-payments-existing-modal'
          },
          global_redirect_to_contract_payment_existing_create_channel: {
            bind: 'redirect-to-contract-payment-existing'
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    }
  };

  const offerStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-deposits-offer-page',
    properties: {
      active: true,
      additionalTaxesClass: 'deposit-puchase-wrapper',
      additionalTaxesFlag: true,
      barProgressColor: '#004481',
      barColor: '#666666',
      amountSubHeaderClass: 'spacing-icon',
      mainClass: 'create-imposition',
      variant: 'informational-section',
      amountLabel: 'cells-step-deposits-offer-page-amount-label',
      amountInfoMessage: 'cells-step-deposits-offer-page-info-limit-amount',
      amountSubHeader: 'cells-step-deposits-offer-page-amount-sub-header',
      changeDataText: '',
      changeLabel: 'deposits-step-product-selector-change',
      className: 'deposit-hiring flexed-icons',
      currentStep: 1,
      continueButtonClassList: 'button-aqua-sticky',
      summaryViewClassList: 'deposit-hiring',
      enterAmountHeader: 'cells-step-deposits-offer-page-enter-amount-header',
      headerImageSrc: './images/card-hiring.svg',
      headerColorClass: 'core-blue',
      notHideDecimal: true,
      warningMessage: '',
      infoMessage: '',
      stickyMessage: 'bbva-controller-call-me-back-remote-manager-button-text',
      typeInfoMessage: 'coronita:caution',
      infoMessageIcon: 'warning-dark',
      inputCurrencyDescription: 'cells-step-deposits-offer-page-select-currency-description',
      inputCurrencyHeader: 'cells-step-deposits-offer-page-select-currency-header',
      isFatcaActive: true,
      selectedCurrencyActive: true,
      liquidationItems: [],
      localCurrency: getLocalCurrency(),
      maxSteps: MAX_STEPS,
      productSummaryText: 'cells-step-deposits-offer-page-summary-text',
      rateIcon: '',
      showOfferData: true,
      summaryViewWithTerm: true,
      stepId: 'step1',
      stepTitle: 'cells-step-deposits-offer-page-step-title',
      textAmountButton: 'cells-step-product-selector-continue-button-label',
      type: 'tel',
      buttonListClass: 'no-wrap coupon button-more-info-coupon',
      cellsConnections: {
        in: {
          [getChannelName('_INIT_PAGE')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('_INPUT_AMOUNT_CHANGED')]: {
            bind: 'amount'
          },
          [getChannelName('_INPUT_AMOUNT_MIN_CHANGED')]: {
            bind: 'min'
          },
          [getChannelName('_SET_MAX_AVAILABLE_BALANCE')]: {
            bind: 'maxAvailableBalance'
          },
          [getChannelName('_SLIDE_VALUES_CHANGED')]: {
            bind: 'sliderValues'
          },
          [getChannelName('_SLIDE-VALUE-SELECTED_CHANGED')]: {
            bind: 'selectedSliderIndex'
          },
          [getChannelName('_DISABLE_OFFER_BUTTON_CHANGED')]: {
            bind: 'disabledNextButton'
          },
          [getChannelName('_SET_DEPOSIT_LIST')]: {
            bind: 'depositList'
          },
          [getChannelName('_TOTAL_INTERESTS_CHANGED')]: {
            bind: 'totalInterests'
          },
          [getChannelName('_OFFER_DATA_CHANGED')]: {
            bind: 'offerData'
          },
          [getChannelName('_RATE_CHANGED')]: {
            bind: 'rate'
          },
          deposits_hiring_slider_disabled: {
            bind: 'sliderEnabled'
          },
          [getChannelName('_reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('_SET_MESSAGES_LIST')]: {
            bind: 'listMessages'
          },
          [getChannelName('_header_cupon_offert')]: {
            bind: 'cuponHeader'
          },
          [getChannelName('_body_cupon_offert')]: {
            bind: 'cuponData'
          },
          [getChannelName('_view_gat_new_simulate')]: {
            bind: 'cuponOffer'
          },
          [getChannelName('_show_taxes_valid_code')]: {
            bind: 'validCupon'
          },
          [getChannelName('_send_panel_comparative')]: {
            bind: 'cuponOffer'
          },
          [getChannelName('_show_panel_comparative')]: {
            bind: 'validCupon'
          }
        },
        out: {
          [getChannelName('add-header-class')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('REGISTER_STEP')]: {
            bind: 'register-step'
          },
          [getChannelName('_OFFER_AMOUNT_CHANGED')]: {
            bind: 'amount-changed-on-blur'
          },
          [getChannelName('_OFFER_INPUT_AMOUNT_CHANGED')]: {
            bind: 'amount-input-changed'
          },
          [getChannelName('_OFFER_SLIDER_CHANGED')]: {
            bind: 'current-slider-value'
          },
          [getChannelName('_SIMULATOR_HELP_BTN_TAPPED')]: {
            bind: 'simulator-help-btn-tapped-event'
          },
          [getChannelName('_OPEN_PRODUCT_SHEET_PDF')]: {
            bind: 'cells-lists-link-clicked'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('_STICKY_CHANGE_OFFER')]: {
            bind: 'summary-closed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'summary-closed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'sticky-btn-clicked'
          },
          [getChannelName('_view_gat_new_simulate')]: {
            bind: 'set-new-gat-simulate'
          },
          [getChannelName('_show_taxes_valid_code')]: {
            bind: 'values-for-promotion-code'
          },
          [getChannelName('deposit_modal_info_coupon')]: {
            bind: 'cells-text-description-title-icon-click'
          },
          [getChannelName('deposit_focus_amount_input')]: {
            bind: 'on-focus-input-amount'
          },
          global_retargeting_get_change_amount_deposit_hiring: {
            bind: 'amount-changed-on-blur'
          }
        }
      }
    }
  };

  const productSelector = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    properties: {
      changeLabel: 'glomo-deposit-hiring-terms-step-change-label',
      className: 'selected-product deposit-hiring',
      currentStep: 2,
      description: 'glomo-deposit-hiring-accounts-step-description',
      disabledUpdateTitleOnChangeProduct: true,
      displayedCurrentStep: '1',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: '3',
      localCurrency: getLocalCurrency(),
      maxSteps: MAX_STEPS,
      productsListLabel: 'glomo-deposit-hiring-accounts-step-list-label',
      showSeparator: true,
      showDescriptionOneProduct: true,
      stepClickDisable: true,
      stepTitle: 'glomo-deposit-hiring-accounts-step-title',
      cellsConnections: {
        in: {
          [getChannelName('_INIT_PAGE')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('_reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('_REFRESH_ACCOUNTS')]: {
            bind: 'products'
          },
          [getChannelName('_MODAL_SELECTED_ACCOUNT')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('_DISABLE_PRIMARY_BTN_ACCOUNTS')]: {
            bind: 'primaryButtonDisabled'
          },
          [getChannelName('_DISABLE_SECONDARY_BTN_ACCOUNTS')]: {
            bind: 'secondaryButtonDisabled'
          },
          [getChannelName('_set_status_product')]: {
            bind: 'setProperties'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP')]: {
            bind: 'register-step'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-step-state'
          },
          [getChannelName('_VIEW_ALL_PRODUCTS')]: {
            bind: 'view-all'
          },
          [getChannelName('_ON_CHANGE_ACCOUNT_SELECTED')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'dont-change-and-continue'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-step-state'
          }
        }
      }
    }
  };

  const productSelectorModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    properties: {
      className: 'selected-product selector-hiring deposit-hiring',
      showCloseModalButton: true,
      iOSFixedHeader: CONFIG.nativeIos,
      modalTitle: 'glomo-deposit-hiring-accounts-step-selector-modal-title',
      closeButtonLabel: 'glomo-deposit-hiring-accounts-step-selector-modal-button',
      localCurrency: getLocalCurrency(),
      cellsConnections: {
        in: {
          [getChannelName('_VIEW_ALL_PRODUCTS')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('_MODAL_SELECTED_ACCOUNT')]: {
            bind: 'select-product'
          }
        }
      }
    }
  };

  const radioButtons = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-radio-buttons',
    properties: {
      className: 'deposit-hiring',
      stepChangeLabel: 'glomo-deposit-hiring-instructions-step-change-label',
      currentStep: 3,
      displayedCurrentStep: '2',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: '3',
      maxSteps: MAX_STEPS,
      typeMessage: 'info-dark',
      typeIconMessage: 'info-dark',
      title: 'glomo-deposit-hiring-instructions-step-title',
      description: 'glomo-deposit-hiring-instructions-step-subtitle',
      notInitializeWithAttached: true,
      buttonLabel: 'glomo-deposit-hiring-instructions-btn-continue',
      cellsConnections: {
        in: {
          [getChannelName('_INIT_PAGE')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('_reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('_INSTRUCTIONS_CHANGED')]: {
            bind: 'radioButtonList'
          },
          [getChannelName('_MESSAGE_CONTENT_CHANGED')]: {
            bind: 'infoMessage'
          },
          [getChannelName('_OFFER_INSTRUCTION_CHANGED')]: {
            bind: 'selected'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP')]: {
            bind: 'register-step'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelName('_INSTRUCTION_HELP_BTN_INFO')]: {
            bind: 'cells-step-radio-button-icon-help-clicked'
          },
          [getChannelName('_CHANGE_INSTRUCTION_SELECTED')]: {
            bind: 'changed-radio-button-selected'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-pressed'
          },
          global_retargeting_get_instructions_deposit_hiring: {
            bind: 'changed-radio-button-selected'
          }
        }
      }
    }
  };

  const checkListContract = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    properties: {
      id: 'deposit-hiring-checklist-contract',
      className: 'deposit-hiring',
      loading: true,
      currentStep: 4,
      typeIconMessage: 'info-dark',
      typeIconMessageChangeData: 'info-dark',
      displayedCurrentStep: '3',
      textBeforeCurrentStep: 'cells-step-word-display-step',
      displayedMaxSteps: '3',
      maxSteps: MAX_STEPS,
      showCurrentStepLabel: true,
      stepTitle: 'glomo-deposit-hiring-terms-step-title',
      stepChangeLabel: 'glomo-deposit-hiring-terms-step-change-label',
      buttonText: 'glomo-deposit-hiring-terms-btn-continue',
      isButtonDisabled: true,
      consultText: 'glomo-deposit-hiring-terms-step-message-description',
      acceptedTermsText: 'glomo-deposit-hiring-contract-accepted-terms-message-collapsed',
      cellsKeyValuesClass: 'italic-accepted-term',
      cellsConnections: {
        in: {
          [getChannelName('_INIT_PAGE')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('_SET_DATA_TERMS')]: {
            bind: 'setProperties'
          },
          [getChannelName('_reset_step')]: {
            bind: 'reset'
          },
          [getChannelName('_valid_message_button_hiring')]: {
            bind: 'messageInfo'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP')]: {
            bind: 'register-step'
          },
          [getChannelName('_OPEN_PRODUCT_TERMS_PDF')]: {
            bind: 'request-pdf'
          },
          [getChannelName('deposits_next_step')]: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          },
          [getChannelName('_message_time_valid_contract')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'continue-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_change_step_state')]: {
            bind: 'change-pressed'
          }
        }
      }
    }
  };

  const summarySection = {
    zone: 'app__confirm',
    tag: 'cells-summary-view',
    type: 'UI',
    properties: {
      className: 'aqua-dark-button',
      buttonLabel: 'glomo-deposits-summary-button',
      cellsConnections: {
        in: {
          [getChannelName('hide_hiring_sticky_button')]: {
            bind: 'hidePrimaryButton'
          },
          deposit_hiring_hidde_call_me_back_sticky_button: {
            bind: 'showSecondaryButton'
          },
          [getChannelNameCallMeBack('_call_me_back_show_summary_view_button')]: {
            bind: 'secondaryButtonLabel'
          }
        },
        out: {
          [getChannelName('_PRIMARY_CHANNEL')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          }
        }
      }
    }
  };

  const opxDm = {
    zone: 'app__main',
    tag: 'glomo-opx-deposits-hiring-manager',
    type: 'DM',
    properties: {
      lang: getLanguage(),
      autoActivateStep: true,
      repeatOperative: true,
      operativeName: 'DEPOSITHIRING',
      launchCurrentStep: true,
      cellsConnections: {
        in: {
          [getChannelName('deposits_next_step')]: {
            bind: 'goToNext'
          },
          [getChannelName('REGISTER_STEP')]: {
            bind: 'registerStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'goToStep'
          },
          [getChannelName('_reset_step')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('_FINISH_STEPS')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('_SCROLL_ZONE')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('_APP_CURRENT_STEP')]: {
            bind: 'send-current-step-for-data'
          },
          [getChannelName('hide_hiring_sticky_button')]: {
            bind: 'hide-hiring-sticky-button'
          },
          deposit_hiring_hidde_call_me_back_sticky_button: {
            bind: 'hide-hiring-call-me-back-button'
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
      host: HOST,
      native: native,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
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

  const depositsDMGlobalApis = {
    zone: 'app_main',
    tag: 'cells-dm-global-apis-deposits',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      native,
      depositsApiVersion: CONFIG.globalServices.versions.depositsV2,
      cellsConnections: {
        in: {
          [getChannelName('deposits_sign_request_body')]: {
            bind: 'postDeposits'
          }
        },
        out: {
          [getChannelName('deposits_request_success')]: {
            bind: 'set-post-deposits'
          },
          [getChannelName('deposits_request_error')]: {
            bind: 'error-on-post-deposits'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };

  const dmGlobalApisAccounts = {
    zone: 'app_main',
    tag: 'cells-dm-global-apis-accounts',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      native,
      depositsApiVersion: CONFIG.globalServices.versions.accounts,
      cellsConnections: {
        in: {
          [getChannelName('_get_accouts')]: {
            bind: 'getAccounts'
          },
          [getChannelName('_get_participants')]: {
            bind: 'getAccountParticipants'
          }
        },
        out: {
          [getChannelName('_success-accounts')]: {
            bind: 'set-accounts'
          },
          [getChannelName('_error-accounts')]: {
            bind: 'error-on-get-accounts'
          },
          [getChannelName('_success-participants')]: {
            bind: 'set-account-participants'
          },
          [getChannelName('error-participants')]: {
            bind: 'error-on-get-participants'
          },
          global_retargeting_get_offer_detail: {
            bind: 'set-deposits-offer'
          },
          global_retargeting_get_quotations: {
            bind: 'set-post-deposits-simulate'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };

  const dmGlobalApisCatalogs = {
    zone: 'app_main',
    tag: 'cells-dm-global-apis-campaigns',
    type: 'DM',
    properties: {
      host: HOST,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      native,
      apiVersion: CONFIG.globalServices.versions.campaigns,
      cellsConnections: {
        in: {
          [getChannelName('post_campaigns_request')]: {
            bind: 'postRedeemCoupon'
          }
        },
        out: {
          [getChannelName('deposits_simulate_request_success')]: {
            bind: 'successful-redeem-coupon'
          },
          [getChannelName('deposits_simulate_request_error')]: {
            bind: 'error-on-redeem-coupon'
          }
        },
        params: {
          offerId: 'offerId'
        }
      }
    }
  };

  const depositsAnalyticsHiring = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-offers-deposit-hiring-manager',
    familyPath: '@glomo-web-components/glomo-analytics-offers-deposit-hiring-manager',
    render: 'litElement',
    properties: {
      signatureTypes: constants.SIGNATURE_TYPES,
      modalCodes: {
        'ipab': {pageInfoLevel3: '', isPageError: false},
        'instruction': {pageInfoLevel3: '', isPageError: false},
        'simulator': {pageInfoLevel3: '', isPageError: false},
        'MODAL-HELP-INFORMATION': {pageInfoLevel3: 'codigo de promocion', isPageError: false},
        'deposit-hiring-error-not-participants': {pageInfoLevel3: 'error cuenta sin beneficiarios', isPageError: true},
        'deposit-hiring-error-level-accounts': {pageInfoLevel3: 'error actualizar cuenta', isPageError: true},
        'deposit-hiring-error-minimum-amount': {pageInfoLevel3: 'error saldo insuficiente', isPageError: true},
        'deposit-hiring-error-requirements': {pageInfoLevel3: 'error requisitos incompletos', isPageError: true},
        'deposit-hiring-error-account-blocked': {pageInfoLevel3: 'error cuenta bloqueada', isPageError: true},
        'deposit-hiring-error-wrong-currency': {pageInfoLevel3: 'error pagare no asociado a cuenta', isPageError: true}
      },
      cellsConnections: {
        in: {
          [getChannelName('_INIT_PAGE')]: {
            bind: 'reset'
          },
          dashboard_oc_banner_deposit_hiring_clicked: {
            bind: 'fireAppOnClickStart'
          },
          deposits_hiring_slider_disabled: {
            bind: 'AppPageVisit'
          },
          [getChannelName('analytics_set_data')]: {
            bind: 'setDepositInfoSimulate'
          },
          [getChannelName('_CHANGE_INSTRUCTION_SELECTED')]: {
            bind: 'setDepositInfoTypology'
          },
          [getChannelName('_SIMULATOR_HELP_BTN_TAPPED')]: {
            bind: 'changeModal'
          },
          [getChannelName('_OFFER_SLIDER_CHANGED')]: {
            bind: 'changeSlider'
          },
          [getChannelName('_STICKY_CHANGE_OFFER')]: {
            bind: 'changeOfferPressed'
          },
          [getChannelName('_APP_CURRENT_STEP')]: {
            bind: 'dispatchStepEvent'
          },
          global_send_info_process_promotion: {
            bind: 'proccess'
          },
          open_sign_modal_deposit_hiring: {
            bind: 'openSign'
          },
          [getChannelName('_INSTRUCTION_HELP_BTN_INFO')]: {
            bind: 'changeInstructionHelpModal'
          },
          global_deposits_purchase_modal_info_ipab: {
            bind: 'modalInfoIpabModal'
          },
          [getChannelName('deposit_focus_amount_input')]: {
            bind: 'changeAmount'
          },
          [getChannelName('deposit_modal_info_coupon')]: {
            bind: 'changeModal'
          },
          [getChannelName('_FINISH_STEPS')]: {
            bind: 'dispatchHiringConfirmationStep'
          },
          global_alert_manager_open_with_settings: {
            bind: 'firePageView'
          }
        },
        out: {
          [getChannelName('APP_ON_CLICK_START')]: {
            bind: 'analytics-app-on-click-start',
            analytics: APP_ON_CLICK_START
          },
          [getChannelName('APP_PAGE_VISIT')]: {
            bind: 'app-visit',
            analytics: appPageVisit
          },
          [getChannelName('_APP_STARTED_ANALYTICS')]: {
            bind: 'app-started',
            analytics: appStarted
          },
          [getChannelName('_APP_STEP2_ANALYTICS')]: {
            bind: 'app-step-2',
            analytics: _getAppStep(2, '2 cuenta deposito')
          },
          [getChannelName('_APP_STEP3_ANALYTICS')]: {
            bind: 'app-step-3',
            analytics: _getAppStep(3, '3 instruccion al vencimiento')
          },
          [getChannelName('_APP_STEP4_ANALYTICS')]: {
            bind: 'app-step-4',
            analytics: _getAppStep(4, '4 terminos y condiciones', 'withTypology')
          },
          [getChannelName('_APP_STEP5_ANALYTICS')]: {
            bind: 'app-step-5',
            analytics: _getAppStep(5, '5 confirmar', 'withTypology')
          },
          [getChannelName('_APP_STEP6_ANALYTICS')]: {
            bind: 'app-step-6',
            analytics: _getAppStep(6, '6 otp', 'withTypology')
          },
          [getChannelName('page_view')]: {
            bind: 'dispatch-dynamic-page-view',
            analytics: pageView()
          },
          deposit_hiring_to_success: {
            bind: 'parse-deposit-hiring-to-receipt'
          },
          deposit_hiring_gat_nominal: {
            bind: 'change-modal-info',
            analytics: pageView({pageInfoLevel3: '', isPageError: false})
          },
          deposit_hiring_instruction_modal: {
            bind: 'change-instruction-modal',
            analytics: pageView({pageInfoLevel3: '', isPageError: false})
          },
          deposit_hiring_ipab_modal: {
            bind: 'modal-info-ipab-modal',
            analytics: pageView({pageInfoLevel3: '', isPageError: false})
          }
        }
      }
    }
  };

  const spinner = createSpinner(CONFIG);
  spinner.properties.className = 'solid-spinner';

  const base = {
    hash: +'deposit-hiring',
    currentPage: {
      url: '/deposit-hiring'
    },
    pages,
    template,
    components: [
      spinner,
      lifeCycle,
      modalService,
      navigationHandler,
      header,
      dmHiring,
      offerStep,
      productSelector,
      productSelectorModal,
      radioButtons,
      checkListContract,
      summarySection,
      opxDm,
      investmentDocumntPdf,
      depositsDMGlobalApis,
      depositsAnalyticsHiring,
      dmGlobalApisAccounts,
      dmGlobalApisCatalogs,
      controllerCmb,
      analyticsCmb
    ]
  };

  if (CONFIG.native) {
    base.components.push(DOCUMENT_PLUGIN);
  }

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-deposits', PAGE_NAME, ['set-post-deposits', 'error-on-post-deposits']);
  const connectionsOutChannel = connectionsOut(base);
  connectionsOutChannel('cells-sign-operation-dm-mx').open_sign_modal_deposit_hiring = {
    bind: 'signature-required'
  };

  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'deposits_hiring',
      acceptRetry: { bind: 'initMainHiringPage', component: 'glomo-deposits-dm-mx' },
      cancelRetry: { bind: 'goBack', component: 'glomo-navigation-handler' }
    } ]
  );

  localStorageApp.addOutStorageChannels(base.components, [ 'loginData' ], CONFIG);

  return base;
};
