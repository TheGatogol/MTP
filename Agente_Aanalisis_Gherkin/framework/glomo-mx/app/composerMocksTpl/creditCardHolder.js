/* eslint-disable camelcase, complexity, max-statements, new-cap, no-dupe-keys */
'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const PAGE_NAME = 'creditCardHolder';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const localCurrency = utils.getLocalCurrency(CONFIG);
  const language = utils.getLanguage(CONFIG);
  const isSpherica = sphericaPageUtils.isSpherica();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG, isSpherica);
  const isNativeIos = CONFIG.nativeIos || false;
  const maxSteps = 5;
  const spinner = utils.SPINNER(CONFIG);
  const ANALYTICS = require('./analytics/_creditCardHolder')(CONFIG);
  const customInitEvents = {
    ['init-credit-card-holder']: true,
    ['swipe-menu-enabled']: false
  };
  const detailDownloadParams = utils.detailDownloadParams;
  const Glomo_Open_Document = utils.glomoOpenDocument(CONFIG);
  const _localStorage = require('./common/_local-storage');

  spinner.tagSpherica = 'cells-spinner-veil-spherica';
  const CMB_CONFIG = {
    operativeName: PAGE_NAME,
    productName: 'TDC',
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    migrationGenesys: true,
    notGlobalInitConfigurationChannel: true
  };
  const {
    native = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        campaigns
      }
    }
  } = CONFIG;
  const {controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const controllerCmb = controllerCallMeBack(CMB_CONFIG);
  const base = {
    currentPage: {
      url: '/credit-card-holder'
    },
    template: {
      tag: 'glomo-opx-template',
      tagSpherica: 'glomo-opx-template-spherica',
      properties: {
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        topOnConfirm: true,
        animationType: 'verticalUp',
        className: 'dark-blue-bg',
        extraHeaderClass: isNativeIos
          ? 'ios-top-padding dark-blue-bg'
          : 'dark-blue-bg',
        cellsConnections: {
          in: {
            [PAGE_NAME + '_INIT_CHANNEL']: {
              bind: 'recalculateHeader'
            },
            [PAGE_NAME + '_CELLS_SCROLL_ZONE']: {
              bind: 'scrollItemIntoView'
            },
            [PAGE_NAME + '_RESET_SCROLL']: {
              bind: 'resetLayerScroll'
            },
            [PAGE_NAME + '_SHOW_CONFIRM_CHANNEL']: {
              bind: 'showConfirm'
            }
          },
          out: {
            [PAGE_NAME + '_SCROLL_COMPLETE']: {
              bind: 'cells-scroll-complete'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        className: isNativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [ spinner ]
  };

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          CCH_HELP_BUTTON_ALERT_SPHERICA: {
            bind: 'openWithSettings'
          }
        },
        out: {
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'alert-CREDIT-CARD-HOLDER-EXIT-accept'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_EXIT_ACCEPT: {
            bind: 'alert-CREDIT-CARD-HOLDER-RECEIPT-ERROR-EXIT-accept'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_ACCEPT: {
            bind: 'alert-CREDIT-CARD-HOLDER-RECEIPT-ERROR-RETRY-accept'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_CANCEL: {
            bind: 'alert-CREDIT-CARD-HOLDER-RECEIPT-ERROR-RETRY-cancel'
          }
        }
      }
    }
  };

  const moleculeHeader = {
    zone: 'app__header',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    type: 'UI',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      rightIconSize: '22',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_MOLECULE_HEADER_TITLE']: {
            bind: 'titleName'
          }
        },
        out: {
          [PAGE_NAME + '_EXIT_HEADER']: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: '',
      rightIconText: 'cells-molecule-header-spherica-close',
      variant: 'primary'
    }
  };
  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'cch',
      operative: 'atm-locator',
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'goBack'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'goBack'
          },
          CREDIT_CARD_HOLDER_SHOW_BRANCHES: {
            bind: 'navigate'
          },
          CCH_SHOW_SUCCESSFUL_CONTRACTING_PAGE: {
            bind: 'navigateToPage'
          },
          [PAGE_NAME + '_NAVIGATION_TO_UPDATE_NATIONAL_ID']: {
            bind: 'navigateToPage'
          }
        },
        out: {
          [PAGE_NAME + '_NAVIGATE_TO_PREVIOUS_PAGE']: {
            bind: 'navigate-to-previous-page',
            backStep: true
          },
          [PAGE_NAME + '_NAVIGATE_TO_ATM_LOCATOR']: {
            bind: 'navigation-to-cch-atm-locator',
            link: {
              page: 'atmLocator',
              skipHistory: true
            }
          },
          [PAGE_NAME + '_NAVIGATE_TO_REVIEW']: {
            bind: 'navigation-to-review',
            link: {
              page: 'creditCardHolderReview',
              skipHistory: true
            }
          },
          [PAGE_NAME + '_NAVIGATION_CCH_TO_UPDATE_NATIONAL_ID']: {
            bind: 'navigation-to-updateNationalId',
            link: {
              page: 'updateNationalId'
            }
          },
          global_retargeting_contracted_product: {
            bind: 'navigation-to-review'
          },
          global_retargeting_send_information_update: {
            bind: 'navigate-to-previous-page'
          }
        }
      }
    }
  };
  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'creditCardHolder',
      customInitEvents,
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
          [PAGE_NAME + '_RESET_PAGE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'init-page'
          },
          credit_card_holder__call_me_back_reset_step: {
            bind: 'reset'
          },
          credit_card_holder__call_me_back_initialize: {
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
  const opxCreditCardHolderDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-credit-card-holder-dm',
    properties: {
      autoActivateStep: true,
      decorateSteps: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'init'
          },
          [PAGE_NAME + '_EXIT_HEADER']: {
            bind: 'exitPage'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'exitPage'
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          navigation_atm_locator_back_request: {
            bind: 'forcePageExit'
          },
          CCH_MODIFY_CUSTOMER_RETRY_ERROR_CANCEL: {
            bind: 'forceExitPage'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_EXIT_ACCEPT: {
            bind: 'forceExitPage'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_CANCEL: {
            bind: 'forceExitPage'
          },
          [PAGE_NAME + '_REGISTER_STEP_LOAN_OFFER']: {
            bind: 'registerStep',
            previousState: true
          },
          [PAGE_NAME + '_REGISTER_STEP_USER_FORM']: {
            bind: 'registerStep',
            previousState: true
          },
          [PAGE_NAME + '_REGISTER_STEP_PAYMENT_SELECTOR']: {
            bind: 'registerStep',
            previousState: true
          },
          [PAGE_NAME + '_REGISTER_STEP_RADIO_BUTTONS']: {
            bind: 'registerStep',
            previousState: true
          },
          [PAGE_NAME + '_REGISTER_STEP_CHECKLIST_CONTRACT']: {
            bind: 'registerStep',
            previousState: true
          },
          [PAGE_NAME + '_CONTINUE_STEP_LOAN_BUTTON']: {
            bind: 'nextStep'
          },
          [PAGE_NAME + '_CONTINUE_STEP_USER_FORM_BUTTON']: {
            bind: 'nextStep'
          },
          [PAGE_NAME + '_CONTINUE_STEP_PAYMENT_BUTTON']: {
            bind: 'nextStep'
          },
          [PAGE_NAME + '_CONTINUE_STEP_RADIO_BUTTON']: {
            bind: 'nextStep'
          },
          [PAGE_NAME + '_CONTINUE_STEP_TERMS_BUTTON']: {
            bind: 'nextStep'
          },
          [PAGE_NAME + '_CHANGE_STEP_STATE']: {
            bind: 'goToStep'
          },
          [PAGE_NAME + '_CONTINUE_STEP_PHANTOM']: {
            bind: 'chargeAccount'
          },
          [PAGE_NAME + '_BACK_STEP_PHANTOM']: {
            bind: 'chargeAccount'
          }
        },
        out: {
          [PAGE_NAME + '_CELLS_SCROLL_ZONE']: {
            bind: 'cells-scroll-zone'
          },
          [PAGE_NAME + 'PHANTOM_STEP']: {
            bind: 'phanthom-step'
          },
          [PAGE_NAME + '_SHOW_CONFIRM_CHANNEL']: {
            bind: 'can-execute-changed'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'exit-operative'
          },
          [PAGE_NAME + '_SHOW_EXIT_ALERT']: {
            bind: 'show-exit-alert'
          },
          [PAGE_NAME + '_OPERATION_SUMMARY_ANALYTICS']: {
            bind: 'operation-summary'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          in: {
            creditCardHolder_HIDE_USER_FORM_STEP: {
              bind: 'userFormStep'
            }
          },
          out: {
            get_max_step: {
              bind: 'get-displayed-max-steps'
            },
            get_current_step_payment: {
              bind: 'configure-step-paymentSelectorStep-displayedCurrentStep'
            },
            get_current_step_summary: {
              bind: 'configure-step-summaryStep-displayedCurrentStep'
            },
            get_current_step_finish: {
              bind: 'configure-step-finishStep-displayedCurrentStep'
            }
          }
        }
      }
    }
  };

  const globalApisCampaigns = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-campaigns',
    properties: {
      host,
      native,
      requiredToken,
      apiVersion: campaigns,
      cellsConnections: {
        in: {
          'received_tdc_get_offer_list': {
            bind: 'getOffers'
          }
        },
        out: {
          'received_tdc_set_offer_list': {
            bind: 'set-offers'
          },
          'received_tdc_set_offer_list_error': {
            bind: 'error-on-retrieve-campaigns'
          }
        }
      }
    }
  };

  const creditCardHolderManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-credit-card-holder-manager',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: PAGE_NAME,
      detailDocumentPdfTemplate: detailDownloadParams,
      maxAttempsUpdateRfc: 3,
      documentTypes: ['INE', 'I', 'PASSPORT', 'P', 'MILITARY', 'C', 'M'],
      alternateButtonLabel: 'oc-credit-card-holder-general-offer-mailing-alternate-add-data',
      cellsConnections: {
        in: {
          global_user_id: {
            bind: 'customerId'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewDetails'
          },
          global_user: {
            bind: 'user'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'initPage'
          },
          'received_tdc_set_offer_list': {
            bind: 'offersReceived'
          },
          'received_tdc_set_offer_list_error': {
            bind: 'offersReceivedError'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'notificationCenterData'
          },
          'received_tdc_send_notification_data': {
            bind: 'initPage'
          },
          dashboard_oc_banner_credit_card_holder_clicked: {
            bind: 'initPage'
          },
          ['contract_product_section_oc_banner_credit_card_holder_clicked']: {
            bind: 'initPage'
          },
          navigation_from_futura_dashboard: {
            bind: 'initPage'
          },
          appliance_simulator_credit_card_holder_clicked: {
            bind: 'initPage'
          },
          blue_navigate_payload_tdc_offer: {
            bind: 'initPage'
          },
          npa_credit_card_holder_navigation: {
            bind: 'initPage'
          },
          dashboard_accounts: {
            bind: 'getGlobalAccounts'
          },
          dashboard_customer_email: {
            bind: 'userEmail'
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          CREDIT_CARD_HOLDER_SHOW_BRANCHES: {
            bind: 'showBranches'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SEND_AMOUNT_SELECTED']: {
            bind: 'amountSelected'
          },
          [PAGE_NAME + '_CONTINUE_STEP_LOAN_BUTTON']: {
            bind: 'offerDataCollapsedView'
          },
          [PAGE_NAME + '_MASK_UNMASK_ADDRESS']: {
            bind: 'validateDescriptionButtonClicked'
          },
          [PAGE_NAME + '_ICON_HELP_CLICKED']: {
            bind: 'openHelpModalInfo'
          },
          [PAGE_NAME + '_RADIO_BUTTON_SELECTED']: {
            bind: 'setDeliveryOptionSelected'
          },
          [PAGE_NAME + '_SET_BUTTON_CHECKED']: {
            bind: 'checkedButtons'
          },
          [PAGE_NAME + '_CONTINUE_STEP_PAYMENT_BUTTON']: {
            bind: 'setDomiciliatonCheck'
          },
          [PAGE_NAME + '_CONTINUE_STEP_RADIO_BUTTON']: {
            bind: 'setDeliveryCheck'
          },
          [PAGE_NAME + '_HIDE_HEADER_LOAN_OFFER']: {
            bind: 'hideStepTitle'
          },
          [PAGE_NAME + '_REQUEST_CARD_HIRING']: {
            bind: 'loadPayloadRequestCreditCard'
          },
          [PAGE_NAME + '_CELLS_SWITCH_CHANGED']: {
            bind: 'showSpinner'
          },
          [PAGE_NAME + '_UPDATE_DOMICILIATION_CHECK']: {
            bind: 'closeSpinner'
          },
          [PAGE_NAME + '_SET_CREDIT_HISTORY_MODAL_CONFIG']: {
            bind: 'setCreditHistoryModalConfig'
          },
          [PAGE_NAME + '_SHOW_EXIT_ALERT']: {
            bind: 'manageBackButton'
          },
          [PAGE_NAME + '_LIST_FILE_CLICK']: {
            bind: 'downloadBusinessPdf'
          },
          [PAGE_NAME + '_GET_BUSINESS_DOCUMENTS']: {
            bind: 'loadBusinessDocumentsData'
          },
          [PAGE_NAME + '_ERROR_ON_GET_BUSINESS_DOCUMENTS']: {
            bind: 'onDownloadReceiptError'
          },
          [PAGE_NAME + '_REQUEST_TERMS_AND_CONDITIONS_PDF']: {
            bind: 'requestBusinessDocuments'
          },
          [PAGE_NAME + '_REQUEST_SET_CUSTOMER']: {
            bind: 'patchModifyCustomerRequest'
          },
          [PAGE_NAME + '_MODIFY_CUSTOMER_SUCCESS']: {
            bind: 'onPatchModifyCustomerSuccess'
          },
          [PAGE_NAME + '_MODIFY_CUSTOMER_ERROR']: {
            bind: 'onPatchModifyCustomerError'
          },
          [PAGE_NAME + '_GET_MARITAL_STATUS_SUCCESS']: {
            bind: 'onMaritalStatusSuccess'
          },
          [PAGE_NAME + '_MARITAL_STATUS_SELECTED']: {
            bind: 'setMaritalStatusDropdownSelection'
          },
          [PAGE_NAME + '_GET_MARITAL_STATUS_ERROR']: {
            bind: 'onMaritalStatusError'
          },
          update_national_id_success_navigate_to_previous_page: {
            bind: 'setFlagsComesFromIne'
          },
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'skipFirstStepComesFromIne'
          },
          [PAGE_NAME + '_ITEM_SELECTED_CHANGED']: {
            bind: 'cutOffDateData'
          },
          [PAGE_NAME + '_SEND_ALTERNATE_ADDRESS']: {
            bind: 'loadAlternateAddressData'
          },
          global_open_document_url_success: {
            bind: 'onDowloadReceiptSuccess'
          },
          global_open_document_url_error: {
            bind: 'onDownloadReceiptError'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_ACCEPT: {
            bind: 'handleRetryDownloadPdf'
          },
          [PAGE_NAME + '_PLUGIN_PERMISSIONS_SUCCESS']: {
            bind: 'permissionRequestSuccess'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS']: {
            bind: 'showModalRatesAndConditions'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'getPressCloseModal'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_BUTTON_CLICK_CLOSE']: {
            bind: 'getPressCloseModal'
          },
          [PAGE_NAME + '_REQUEST_SIMULATION']: {
            bind: 'requestSimulation'
          },
          CREDIT_CARD_HOLDER_SHOW_MODAL_ANNUALITY: {
            bind: 'showModalAnnuality'
          }
        },
        out: {
          'received_tdc_get_offer_list': {
            bind: 'get-offer-list'
          },
          'received_tdc_send_notification_data': {
            bind: 'send-notification-data'
          },
          navigation_to_dashboard: {
            bind: 'send-to-dashboard',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'show-credit-card-holder-modal'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          [PAGE_NAME + '_SEND_REQUEST_BUSINESS_DOCUMENTS']: {
            bind: 'request-business-documents'
          },
          [PAGE_NAME + '_SET_OFFER_DETAIL']: {
            bind: 'set-offer-detail'
          },
          [PAGE_NAME + '_SEND_OTP_ANALYTICS']: {
            bind: 'signature-required-first-step-dm'
          },
          [PAGE_NAME + '_SET_NAVIGATE_CONTINUE']: {
            bind: 'set-navigate-continue'
          },
          [PAGE_NAME + '_SEND_ANALYTICS_OFFER_DATA']: {
            bind: 'send-analytics-offer-data'
          },
          [PAGE_NAME + '_SEND_OFFER_DATA_NPA']: {
            bind: 'send-offer-data-npa'
          },
          [PAGE_NAME + '_SEND_COMPLETED_ERROR_ANALYTICS']: {
            bind: 'send-app-completed-error'
          },
          [PAGE_NAME + '_SEND_HUELLA_ERROR_PAGE']: {
            bind: 'send-huella-error-page'
          },
          [PAGE_NAME + '_SHOW_DOCUMENTS_MODAL']: {
            bind: 'show-documents-modal'
          },
          [PAGE_NAME + '_SHOW_CREDIT_HISTORY_MODAL']: {
            bind: 'set-credit-history-modal'
          },
          [PAGE_NAME + '_SET_DOCUMENT_LIST']: {
            bind: 'set-document-list'
          },
          [PAGE_NAME + '_COLLAPSED_FIRST_STEP']: {
            bind: 'collapsed-first-step'
          },
          [PAGE_NAME + '_CHANGE_LABEL']: {
            bind: 'change-label'
          },
          [PAGE_NAME + '_ACTIVE_NEXT_STEP']: {
            bind: 'active-next-step'
          },
          [PAGE_NAME + '_SET_FIXED_STEP']: {
            bind: 'set-fixed-step'
          },
          [PAGE_NAME + '_SET_MOLECULE_HEADER_TITLE']: {
            bind: 'set-molecule-header-title'
          },
          [PAGE_NAME + '_SET_HEADER_CONTENT_CONFIG']: {
            bind: 'set-header-content'
          },
          [PAGE_NAME + '_SET_AMOUNT_DATA_CONFIG']: {
            bind: 'set-amount-data'
          },
          [PAGE_NAME + '_SET_BENEFITS_LIST_CONFIG']: {
            bind: 'set-benefits-list'
          },
          [PAGE_NAME + '_SET_TAXES_INFO_CONFIG']: {
            bind: 'set-taxes-info'
          },
          [PAGE_NAME + '_SET_MAIN_TEXT_CONFIG']: {
            bind: 'set-main-text'
          },
          [PAGE_NAME + '_SET_CHECK_BOX_LIST_TNC']: {
            bind: 'set-checkbox-list'
          },
          [PAGE_NAME + '_SET_OFFER_DATA_INFO']: {
            bind: 'set-offer-data'
          },
          [PAGE_NAME + '_SET_SUMMARY_TITLE']: {
            bind: 'set-summary-title'
          },
          [PAGE_NAME + '_SET_AMOUNT_SELECTED']: {
            bind: 'set-amount-selected'
          },
          [PAGE_NAME + '_SET_POINTS_BLUE']: {
            bind: 'set-points-blue'
          },
          [PAGE_NAME + '_SET_STEP_TITLE']: {
            bind: 'set-step-title'
          },
          [PAGE_NAME + '_SET_RADIO_BUTTONS_CONFIG']: {
            bind: 'set-radios'
          },
          [PAGE_NAME + '_SET_INFO_ACCOUNT_PAYMENT_PHANTOM_STEP']: {
            bind: 'set-account-info-phantom-step'
          },
          [PAGE_NAME + '_SET_PADDING_ACCOUNT_PAYMENT_PHANTOM_STEP']: {
            bind: 'set-padding-account-phantom-step'
          },
          CCH_SHOW_SUCCESSFUL_CONTRACTING_PAGE: {
            bind: 'show-successful-contracting'
          },
          global_alert_modal_close: {
            bind: 'close-info-incomplete-modal'
          },
          global_open_document_url: {
            bind: 'native-download-receipt'
          },
          [PAGE_NAME + '_MESSAGE_ICON_UPDATE_INE_RFC']: {
            bind: 'icon-message-update-ine-rfc'
          },
          [PAGE_NAME + '_DATA_NAVIGATION_TO_UPDATE_NATIONAL_ID']: {
            bind: 'data-go-ine-route'
          },
          [PAGE_NAME + '_SET_CUSTOMER_ID']: {
            bind: 'set-customer-id'
          },
          [PAGE_NAME + '_RESET_MODAL_SELECTOR']: {
            bind: 'reset-modal-selector'
          },
          [PAGE_NAME + '_SET_FIELDS_USER_FORM_STEP']: {
            bind: 'set-cells-step-user-form-items'
          },
          [PAGE_NAME + '_HIDE_USER_FORM_STEP']: {
            bind: 'hide-user-form-step'
          },
          [PAGE_NAME + '_HIDE_USER_FORM_STEP_COLLAPSED']: {
            bind: 'hide-user-form-step'
          },
          [PAGE_NAME + '_MODIFY_CUSTOMER_REQUEST']: {
            bind: 'request-customer-patch'
          },
          [PAGE_NAME + '_MARITAL_STATUS_REQUEST']: {
            bind: 'get-marital-status'
          },
          [PAGE_NAME + '_SET_ITEMS_SELECTOR']: {
            bind: 'set-items-selector'
          },
          [PAGE_NAME + '_SET_USER_FORM_MARIATAL_STATUS_VALUE']: {
            bind: 'set-step-user-data-form-value'
          },
          [PAGE_NAME + '_MODIFY_CUSTOMER_SUCCESS_VIEW']: {
            bind: 'patch-customer-response-success'
          },
          [PAGE_NAME + '_SEND_ANALYTICS_PAGE_VIEW']: {
            bind: 'send-analytics-page-view'
          },
          [PAGE_NAME + '_SET_DECORTARED_STEP']: {
            bind: 'set-decorated-step'
          },
          [PAGE_NAME + '_ACTIVE_NEXT_USER_FORM_STEP']: {
            bind: 'active-user-form-step'
          },
          [PAGE_NAME + '_SELECTOR_MODAL_ITEMS']: {
            bind: 'selector-modal-items'
          },
          [PAGE_NAME + '_SELECTOR_MODAL_ITEM_SELECTED']: {
            bind: 'selector-modal-item-selected'
          },
          [PAGE_NAME + '_SELECTOR_MODAL_FIRST_ITEM_SELECTED']: {
            bind: 'selector-modal-first-item-selected'
          },
          [PAGE_NAME + '_POSSIBLE_CUT_DATE']: {
            bind: 'possible-cut-date'
          },
          [PAGE_NAME + '_POSSIBLE_PAYMENT_DATE']: {
            bind: 'possible-payment-date'
          },
          [PAGE_NAME + '_DOMICILIATION_ALERT_MESSAGE']: {
            bind: 'domiciliation-alert-message'
          },
          [PAGE_NAME + 'DOMICILIATION-TITLE']: {
            bind: 'domiciliation-title'
          },
          [PAGE_NAME + '_CUT_OFF_DATE']: {
            bind: 'cut-off-date'
          },
          [PAGE_NAME + '_SELECTOR_OPTION_']: {
            bind: 'selected-option'
          },
          [PAGE_NAME + '_STEP_TITLE']: {
            bind: 'step-title'
          },
          [PAGE_NAME + '_OPEN_EDIT_ADDRESS_MODAL']: {
            bind: 'open-edit-address-modal'
          },
          [PAGE_NAME + 'get_device_geolocation']: {
            bind: 'get-current-position'
          },
          [PAGE_NAME + '_SET_SHOW_PRIVACITY_CONFIG']: {
            bind: 'set-reset-icon'
          },
          [PAGE_NAME + 'get_device_geolocation_permission']: {
            bind: 'get-check-state-permission'
          },
          [PAGE_NAME + 'get_open_prompt_forLocation_service']: {
            bind: 'get-open-prompt-for-location-service'
          },
          [PAGE_NAME + '_PAYMENT_TYPE_SUBTEXT']: {
            bind: 'payment-type-subtext'
          },
          global_retargeting_form_submission: {
            bind: 'close-control-veil'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_OPEN_TEXT_RATES']: {
            bind: 'oc-credit-card-holder-interest-rate-modal-text'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_OPEN']: {
            bind: 'show-modal-rates-and-conditions'
          },
          [PAGE_NAME + 'MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'modal-rates-and-conditions-close'
          },
          CREDIT_CARD_HOLDER_SHOW_MODAL_ANNUALITY_OPEN: {
            bind: 'glomo-credit-card-holder-manager-show-modal-annuality'
          },
          CREDIT_CARD_HOLDER_TEXT_CARD_MODAL: {
            bind: 'glomo-credit-card-holder-manager-set-text-card'
          },
          CREDIT_CARD_HOLDER_TEXT_CARD_MODAL_FROM_APP: {
            bind: 'glomo-credit-card-holder-manager-set-text-from-app'
          },
          CREDIT_CARD_HOLDER_TEXT_REFERENCE_ANNUALITY: {
            bind: 'glomo-credit-card-holder-manager-set-text-refernce-annuality'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      alertBoxVariant: 'primary-alt',
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'show-credit-card-holder-modal'
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
  const cellsGlobalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SEND_REQUEST_BUSINESS_DOCUMENTS']: {
            bind: 'getBusinessDocuments'
          }
        },
        out: {
          [PAGE_NAME + '_GET_BUSINESS_DOCUMENTS']: {
            bind: 'success-on-get-business-documents'
          },
          [PAGE_NAME + '_ERROR_ON_GET_BUSINESS_DOCUMENTS']: {
            bind: 'error-on-get-business-documents'
          }
        }
      }
    }
  };
  const analyticsCreditCardHolderManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-credit-card-holder-manager-mx',
    familyPath: '@glomo-web-components/glomo-analytics-credit-card-holder-manager',
    render: 'litElement',
    properties: {
      page: PAGE_NAME,
      config: {
        steps: {
          2: 'app-page-view-step-two',
          3: 'app-step-two',
          4: 'app-step-three',
          5: 'app-step-four',
          sign: 'app-step-otp'
        }
      },
      cellsConnections: {
        in: {
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SEND_ANALYTICS_OFFER_DATA']: {
            bind: 'setOfferData'
          },
          [PAGE_NAME + '_SEND_OFFER_DATA_NPA']: {
            bind: 'setOfferNonPreApprovedData'
          },
          [PAGE_NAME + '_SEND_APP_STARTED_AMOUNT_ANALYTICS']: {
            bind: 'appStartedAmount'
          },
          [PAGE_NAME + '_SEND_APP_STARTED_I_WANT_ANALYTICS']: {
            bind: 'appStartedContinueClick'
          },
          [PAGE_NAME + '_UPDATE_DOMICILIATION_CHECK']: {
            bind: 'domiciliationType'
          },
          [PAGE_NAME + '_UPDATE_PAYMENT_TYPE']: {
            bind: 'paymentSelected'
          },
          [PAGE_NAME + '_PAYMENT_SELECTOR_STEP_FOCUS_IN']: {
            bind: 'onStep'
          },
          [PAGE_NAME + '_RADIO_BUTTON_SELECTED']: {
            bind: 'deliverySelected'
          },
          [PAGE_NAME + '_RADIO_BUTTONS_STEP_FOCUS_IN']: {
            bind: 'setPaymentInformation'
          },
          [PAGE_NAME + '_CHECKLIST_CONTRACT_STEP_FOCUS_IN']: {
            bind: 'setTermsAndConditionsInformation'
          },
          [PAGE_NAME + '_OPERATION_SUMMARY_ANALYTICS']: {
            bind: 'appStepSummary'
          },
          [PAGE_NAME + '_SEND_OTP_ANALYTICS']: {
            bind: 'manageAnalyticsSign'
          },
          CCH_SHOW_SUCCESSFUL_CONTRACTING_PAGE: {
            bind: 'setCompletedData'
          },
          [PAGE_NAME + '_SEND_COMPLETED_ERROR_ANALYTICS']: {
            bind: 'setCompletedData'
          },
          [PAGE_NAME + '_SEND_HUELLA_ERROR_PAGE']: {
            bind: 'fireAdvanceMark'
          },
          [PAGE_NAME + '_USER_FORM_STEP_FOCUS_IN']: {
            bind: 'dataUserFormStep'
          },
          [PAGE_NAME + '_SEND_ANALYTICS_PAGE_VIEW']: {
            bind: 'firePageView'
          },
          [PAGE_NAME + '_OPEN_CELLS_MODAL_SELECTOR']: {
            bind: 'selectorModalView'
          },
          [PAGE_NAME + '_OPEN_MAP_ADDRESS']: {
            bind: 'setPrintAnotherAddress'
          }
        },
        out: {
          [PAGE_NAME + '_APP_PAGE_VISIT_ANALYTICS']: {
            bind: 'analytics-page-visit',
            analytics: ANALYTICS.appPageVisit
          },
          [PAGE_NAME + '_APP_STARTED_ANALYTICS']: {
            bind: 'analytics-app-started',
            analytics: ANALYTICS.appStarted
          },
          [PAGE_NAME + '_APP_STEP_TWO_ANALYTICS']: {
            bind: 'analytics-app-step-two',
            analytics: ANALYTICS.appStep(2, '2 tipo de pago')
          },
          [PAGE_NAME + '_APP_STEP_THREE_ANALYTICS']: {
            bind: 'analytics-app-step-3',
            analytics: ANALYTICS.appStep(3, '3 direccion envio')
          },
          [PAGE_NAME + '_APP_STEP_FOUR_ANALYTICS']: {
            bind: 'analytics-app-step-4',
            analytics: ANALYTICS.appStep(4, '4 terminos y condiciones')
          },
          [PAGE_NAME + '_APP_STEP_FIVE_ANALYTICS']: {
            bind: 'analytics-app-step-5',
            analytics: ANALYTICS.appStep(5, '5 confirmacion')
          },
          [PAGE_NAME + '_APP_STEP_OTP_ANALYTICS']: {
            bind: 'analytics-app-step-otp',
            analytics: ANALYTICS.appStep(6, '6 otp')
          },
          [PAGE_NAME + '_APP_COMPLETED_ANALYTICS']: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.appCompleted
          },
          [PAGE_NAME + '_APP_HUELLA_ERROR_PAGE']: {
            bind: 'analytics-advanced-mark',
            analytics: ANALYTICS.appHuellaErrorPage
          },
          [PAGE_NAME + '_APP_PAGE_VIEW_USER_FORM_STEP_ANALYTICS']: {
            bind: 'analytics-app-page-view-step-two',
            analytics: ANALYTICS.appPageViewUserFormStep
          },
          [PAGE_NAME + '_APP_PAGE_VIEW_MODIFY_CUSTOMER_SUCCESS_ANALYTICS']: {
            bind: 'analytics-page-view-modify-customer-success',
            analytics: ANALYTICS.appPageViewModifyCustomerSuccess
          },
          [PAGE_NAME + '_APP_PAGE_VIEW_MODIFY_CUSTOMER_RETRY_ERROR_ANALYTICS']: {
            bind: 'analytics-page-view-modify-customer-error-register',
            analytics: ANALYTICS.appPageViewModifyCustomerErrorRegister
          },
          [PAGE_NAME + '_APP_PAGE_VIEW_MODIFY_CUSTOMER_MAX_ATTEMPS_ERROR_ANALYTICS']: {
            bind: 'analytics-page-view-modify-customer-error-validate',
            analytics: ANALYTICS.appPageViewModifyCustomerErrorValidate
          },
          [PAGE_NAME + '_APP_HUELLA_SELECTOR_MODAL']: {
            bind: 'analytics-selector-modal',
            analytics: ANALYTICS.appHuellaPaymentDateSelection
          },
          [PAGE_NAME + '_APP_HUELLA_ALTERNATE_ADDRESS']: {
            bind: 'analytics-another-address',
            analytics: ANALYTICS.appHuellaAlternateAddress
          }
        }
      }
    }
  };
  const stepLoanOffer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-step-loan-offer',
    tagSpherica: 'glomo-step-loan-offer-spherica',
    properties: {
      className: 'standard-message sticky-margin unpadded header-core-blue',
      changeLabel: 'oc-credit-card-holder-general-offer-change-btn-label',
      localCurrency,
      language,
      currentStep: 1,
      maxSteps,
      sliderProperty: false,
      messageInfo: false,
      textButtonAccepted: 'oc-credit-card-holder-general-offer-accept-btn-label',
      colorButtonEnable: 'btn-clicked',
      enableSticky: false,
      autoFormat: true,
      decimalsHiddenCollapsedAmount: false,
      iconsDark: true,
      hideCurrentStepLabel: true,
      topSeparator: true,
      bottomSeparator: true,
      annualityReimbursement: {
        configBasic: {
          description: 'oc-credit-card-holder-text-banner-annuality',
          text: 'oc-credit-card-holder-text-banner-annuality-title',
          smallImg: {
            id: 'banner',
            alt: 'star',
            src: 'images/spherica/creditCardHolder/star-glass.png'
          },
          bannerLink: 'oc-credit-card-holder-text-banner-annuality-link'
        }
      },
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_SET_FIXED_STEP']: {
            bind: 'fixed'
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SET_HEADER_CONTENT_CONFIG']: {
            bind: 'headerContent'
          },
          [PAGE_NAME + '_SET_AMOUNT_DATA_CONFIG']: {
            bind: 'amountData'
          },
          [PAGE_NAME + '_SET_BENEFITS_LIST_CONFIG']: {
            bind: 'principalList'
          },
          [PAGE_NAME + '_SET_TAXES_INFO_CONFIG']: {
            bind: 'customMessage'
          },
          [PAGE_NAME + '_SET_MAIN_TEXT_CONFIG']: {
            bind: 'mainText'
          },
          [PAGE_NAME + '_SET_OFFER_DATA_INFO']: {
            bind: 'offerData'
          },
          [PAGE_NAME + '_SET_SUMMARY_TITLE']: {
            bind: 'summaryTexts'
          },
          [PAGE_NAME + '_SET_AMOUNT_SELECTED']: {
            bind: 'amountSelected'
          },
          [PAGE_NAME + '_SET_POINTS_BLUE']: {
            bind: 'keyInfo'
          },
          [PAGE_NAME + '_SET_STEP_TITLE']: {
            bind: 'stepTitle'
          },
          [PAGE_NAME + '_SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_COLLAPSED_FIRST_STEP']: {
            bind: 'collapsed'
          },
          [PAGE_NAME + '_CHANGE_LABEL']: {
            bind: 'changeLabel'
          },
          [PAGE_NAME + '_SET_BG_COLOR_STEP']: {
            bind: 'filledClass'
          },
          [PAGE_NAME + '_SET_BG_COLOR_TITLE']: {
            bind: 'stepClass'
          },
          [PAGE_NAME + '_MESSAGE_ICON_UPDATE_INE_RFC']: {
            bind: 'additionalMessageWarning'
          },
          [PAGE_NAME + '_DATA_NAVIGATION_TO_UPDATE_NATIONAL_ID']: {
            bind: 'userInformation'
          },
          [PAGE_NAME + '_SET_DECORTARED_STEP']: {
            bind: 'decorated'
          },
          global_call_me_back_show_secondary_button: {
            bind: 'showCallMeBack'
          },
          credit_card_holder__call_me_back_show_sticky_button: {
            bind: 'stickyMessage'
          }
        },
        out: {
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS']: {
            bind: 'link-clicked'
          },
          [PAGE_NAME + '_REGISTER_STEP_LOAN_OFFER']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_SEND_AMOUNT_SELECTED']: {
            bind: 'amount-selected-changed'
          },
          [PAGE_NAME + '_CONTINUE_STEP_LOAN_BUTTON']: {
            bind: 'go-next-step'
          },
          [PAGE_NAME + '_CHANGE_STEP_STATE']: {
            bind: 'change-pressed'
          },
          [PAGE_NAME + '_HIDE_HEADER_LOAN_OFFER']: {
            bind: 'change-pressed'
          },
          [PAGE_NAME + '_SEND_APP_STARTED_AMOUNT_ANALYTICS']: {
            bind: 'amount-input-focus'
          },
          [PAGE_NAME + '_SEND_APP_STARTED_I_WANT_ANALYTICS']: {
            bind: 'go-next-step'
          },
          credit_card_holder__call_me_back_init_sticky_configuration: {
            bind: 'sticky-button-clicked'
          },
          [PAGE_NAME + '_NAVIGATION_TO_UPDATE_NATIONAL_ID']: {
            bind: 'glomo-profile-manager-routes-go-ine'
          },
          navigation_profile_to_update_national_id: {
            bind: 'glomo-profile-manager-routes-go-ine'
          },
          global_retargeting_go_next_step: {
            bind: 'go-next-step'
          },
          [PAGE_NAME + '_REQUEST_SIMULATION']: {
            bind: 'valid-amount-input-focus-out'
          },
          CREDIT_CARD_HOLDER_SHOW_MODAL_ANNUALITY: {
            bind: 'cells-oc-banner-main-click-default'
          }
        }
      }
    },
    propertiesSpherica: {
      changeLabel: 'oc-credit-card-holder-general-offer-change-btn-label-spherica'
    }
  };

  const stepUserForm = {
    zone: 'app__main',
    tag: 'cells-step-user-form',
    tagSpherica: 'cells-step-user-form-spherica',
    type: 'UI',
    properties: {
      stepId: 'cells-step-user-form',
      currentStep: 2,
      maxSteps,
      infoType: 'info-dark-blue',
      filledWithoutSummary: true,
      shouldHideChangeButton: true,
      hideCurrentStepLabel: true,
      stepTitle: 'oc-credit-card-holder-outdated-user-form-title',
      descriptionText: '',
      notInitializeWithAttached: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'initialize'
          },
          [PAGE_NAME + '_SET_FIELDS_USER_FORM_STEP']: {
            bind: 'setProperties'
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SET_USER_FORM_MARIATAL_STATUS_VALUE']: {
            bind: 'setValueById'
          },
          [PAGE_NAME + '_HIDE_USER_FORM_STEP']: {
            bind: 'hidden'
          },
          [PAGE_NAME + '_HIDE_USER_FORM_STEP_COLLAPSED']: {
            bind: 'collapsed'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_MODIFY_CUSTOMER_SUCCESS_VIEW']: {
            bind: 'setProperties'
          },
          [PAGE_NAME + '_RESET_MODAL_SELECTOR']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_ACTIVE_NEXT_USER_FORM_STEP']: {
            bind: 'active'
          }
        },
        out: {
          [PAGE_NAME + '_REGISTER_STEP_USER_FORM']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_CONTINUE_STEP_USER_FORM_BUTTON']: {
            bind: 'go-next-step'
          },
          [PAGE_NAME + '_MARITAL_STATUS_SELECTOR']: {
            bind: 'cells-step-user-form-dropdown-maritalStatusDropdown-clicked'
          },
          [PAGE_NAME + '_REQUEST_SET_CUSTOMER']: {
            bind: 'cells-step-user-form-field-values'
          },
          [PAGE_NAME + '_COLLAPSED_USER_FORM']: {
            bind: 'collapsed-changed'
          },
          [PAGE_NAME + '_USER_FORM_STEP_FOCUS_IN']: {
            bind: 'cells-step-focus-in'
          }
        }
      }
    },
    propertiesSpherica: {
      displayedCurrentStep: 1,
      displayedMaxSteps: 4,
      changeLabel: 'oc-credit-card-holder-general-offer-change-btn-label-spherica',
      stepTitle: 'oc-credit-card-holder-outdated-user-form-title-spherica',
      hideCurrentStepLabel: false
    }
  };
  const stepPaymentSelector = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-payment-selector',
    tagSpherica: 'cells-step-payment-selector-spherica',
    properties: {
      id: 'paymentCreditCard',
      currentStep: 3,
      maxSteps,
      language: utils.getLanguage(),
      creditCardPayment: true,
      btnHelpRight: true,
      paymentMethodCheck: true,
      hideCurrentStepLabel: true,
      domiciliationAlertMessage: 'oc-credit-card-holder-general-offer-domiciliation-info',
      paymentRadioMethodSelected: 0,
      domiciliationChoice: true,
      domiciliationSwitch: true,
      termsCollapsed: true,
      creditCardCollapsed: false,
      addressCollapsed: true,
      typeInfoMessage: 'info-dark-blue',
      changeStepBehavior: true,
      className: 'credit-card-subtile-bbva',
      classNameIconMessage: 'info-message top-icon-message',
      stepPaymentDescription: 'oc-credit-card-holder-cut-off-date-selector-description',
      selectInfoMessage: 'oc-credit-card-holder-cut-off-date-select-info-message',
      paymentDateButtonText: 'oc-credit-card-holder-cut-off-date-possible-payment-date-text',
      cutOffDateButtonText: 'oc-credit-card-holder-cut-off-date-possible-cut-date-text',
      possibleCutDateKey: 'oc-credit-card-holder-cut-off-date-possible-cut-date-text',
      possiblePaymentDateKey: 'oc-credit-card-holder-cut-off-date-possible-payment-date-text',
      titleSelectModal: 'oc-credit-card-holder-cut-off-date-title-select-modal',
      paymentDateButtonAriaLabel: 'cells-step-payment-selector-credit-card-payment-date-button-aria-label',
      cutOffDateButtonAriaLabel: 'cells-step-payment-selector-credit-card-cut-off-date-button-aria-label',
      selectModalClassList: 'select-modal-padding',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'initialize'
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + 'PHANTOM_STEP']: {
            bind: 'phantomStep'
          },
          [PAGE_NAME + '_SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_SET_INFO_ACCOUNT_PAYMENT_PHANTOM_STEP']: {
            bind: 'chargueAccount'
          },
          [PAGE_NAME + '_SET_PADDING_ACCOUNT_PAYMENT_PHANTOM_STEP']: {
            bind: 'paddingChargeAccount'
          },
          [PAGE_NAME + '_ACTIVE_NEXT_STEP']: {
            bind: 'active'
          },
          [PAGE_NAME + '_DOMICILIATION_ALERT_MESSAGE']: {
            bind: 'domiciliationAlertMessage'
          },
          [PAGE_NAME + 'DOMICILIATION-TITLE']: {
            bind: 'domiciliationTitle'
          },
          [PAGE_NAME + '_CUT_OFF_DATE']: {
            bind: 'cutOffDate'
          },
          [PAGE_NAME + '_SELECTOR_OPTION_']: {
            bind: 'selectedOption'
          },
          [PAGE_NAME + '_STEP_TITLE']: {
            bind: 'stepTitle'
          },
          [PAGE_NAME + '_SELECTOR_MODAL_ITEM_SELECTED']: {
            bind: 'itemSelected'
          },
          [PAGE_NAME + '_POSSIBLE_CUT_DATE']: {
            bind: 'possibleCutDateValue'
          },
          [PAGE_NAME + '_POSSIBLE_PAYMENT_DATE']: {
            bind: 'possiblePaymentDateValue'
          },
          [PAGE_NAME + '_PAYMENT_TYPE_SUBTEXT']: {
            bind: 'paymentTypeSubtext'
          }
        },
        out: {
          [PAGE_NAME + '_REGISTER_STEP_PAYMENT_SELECTOR']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_CHANGE_STEP_STATE']: {
            bind: 'change-pressed'
          },
          [PAGE_NAME + '_CONTINUE_STEP_PAYMENT_BUTTON']: {
            bind: 'go-next-step'
          },
          CCH_HELP_BUTTON_ALERT: {
            bind: 'show-payment-help-modal'
          },
          [PAGE_NAME + '_SET_BUTTON_CHECKED']: {
            bind: 'payment-checked-radio-button'
          },
          [PAGE_NAME + '_UPDATE_PAYMENT_TYPE']: {
            bind: 'update-payment-type-parameters'
          },
          [PAGE_NAME + '_CELLS_SWITCH_CHANGED']: {
            bind: 'cells-switch-changed'
          },
          [PAGE_NAME + '_UPDATE_DOMICILIATION_CHECK']: {
            bind: 'update-domiciliation-check'
          },
          [PAGE_NAME + '_PAYMENT_SELECTOR_STEP_FOCUS_IN']: {
            bind: 'cells-step-focus-in'
          },
          [PAGE_NAME + '_OPEN_CELLS_MODAL_SELECTOR']: {
            bind: 'open-document-modal-selector'
          },
          global_retargeting_payment_type: {
            bind: 'payment-checked-radio-button'
          },
          global_retargeting_go_next_step: {
            bind: 'go-next-step'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      displayedMaxSteps: 4,
      displayedCurrentStep: 2,
      hiddenStep: true,
      alertBoxVariant: 'primary-alt',
      changeLabel: 'oc-credit-card-holder-general-offer-change-btn-label-spherica',
      hideCurrentStepLabel: false,
      newCellsConnections: {
        add: {
          out: {
            CCH_HELP_BUTTON_ALERT_SPHERICA: {
              bind: 'show-payment-help-modal'
            }
          }
        },
        remove: {
          out: [
            'CCH_HELP_BUTTON_ALERT'
          ]
        }
      }
    }
  };
  const stepRadioButtons = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-radio-buttons',
    tagSpherica: 'cells-step-radio-buttons-spherica',
    properties: {
      className: 'oc-credit-card-holder',
      currentStep: 4,
      hideCurrentStepLabel: true,
      maxSteps,
      classFilledOption: 'inline-data-selected',
      iconMessageExtraClass: 'default-font',
      title: 'oc-credit-card-holder-general-offer-mailing-address-title',
      description: 'oc-credit-card-holder-general-offer-mailing-address-desc',
      iconMessageClass: 'top-icon-message',
      iconType: '',
      typeMessage: '',
      typeIconMessage: 'info-dark-blue',
      showIconMessageButton: true,
      iconMessageClass: 'no-background-color',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'initialize'
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SET_RADIO_BUTTONS_CONFIG']: {
            bind: 'radioButtonList'
          },
          [PAGE_NAME + '_SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          },
          [PAGE_NAME + '_SET_SHOW_PRIVACITY_CONFIG']: {
            bind: 'setProperties'
          }
        },
        out: {
          [PAGE_NAME + '_REGISTER_STEP_RADIO_BUTTONS']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_CHANGE_STEP_STATE']: {
            bind: 'change-step-state'
          },
          [PAGE_NAME + '_CONTINUE_STEP_RADIO_BUTTON']: {
            bind: 'go-next-step'
          },
          [PAGE_NAME + '_MASK_UNMASK_ADDRESS']: {
            bind: 'cells-step-radio-buttons-description-button-clicked'
          },
          [PAGE_NAME + '_ICON_HELP_CLICKED']: {
            bind: 'cells-step-radio-button-icon-help-clicked'
          },
          [PAGE_NAME + '_RADIO_BUTTON_SELECTED']: {
            bind: 'radio-button-selected-changed'
          },
          [PAGE_NAME + '_RADIO_BUTTONS_STEP_FOCUS_IN']: {
            bind: 'cells-step-focus-in'
          },
          global_retargeting_pay_date: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'go-next-step'
          }
        }
      }
    },
    propertiesSpherica: {
      title: 'oc-credit-card-holder-general-offer-mailing-address-title-spherica',
      hideCurrentStepLabel: false,
      displayedCurrentStep: 3,
      displayedMaxSteps: 4,
      hiddenStep: true
    }
  };
  const steptermsAndConditions = {
    zone: 'app__main',
    tag: 'cells-step-card-checklist-contract',
    tagSpherica: 'cells-step-card-checklist-contract-spherica',
    type: 'UI',
    properties: {
      currentStep: 5,
      consultText: 'oc-credit-card-holder-general-offer-terms-conditions-desc',
      stepTitle: 'oc-credit-card-holder-general-offer-terms-conditions-title',
      changeDataIconMessageClass: 'cells-step-card-checklist-checkbox-list-section-button',
      hideHelpIcon: true,
      className: 'cells-step-card-checklist-pdf-link contactdata-not-bold-italic header-title-step-padding-md key-bold key-italic inline-vertical-align__key',
      hideChangeDataBox: false,
      showButton: true,
      typeIconMessage: 'info-dark-blue',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'initialize'
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'reset'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SET_CHECK_BOX_LIST_TNC']: {
            bind: 'checkboxList'
          },
          [PAGE_NAME + '_SCROLL_COMPLETE']: {
            bind: 'scrollComplete'
          }
        },
        out: {
          [PAGE_NAME + '_REGISTER_STEP_CHECKLIST_CONTRACT']: {
            bind: 'register-step'
          },
          [PAGE_NAME + '_CHANGE_STEP_STATE']: {
            bind: 'change-pressed'
          },
          [PAGE_NAME + '_CONTINUE_STEP_TERMS_BUTTON']: {
            bind: 'go-next-step'
          },
          [PAGE_NAME + '_SET_CREDIT_HISTORY_MODAL_CONFIG']: {
            bind: 'show-credit-history-modal'
          },
          [PAGE_NAME + '_REQUEST_TERMS_AND_CONDITIONS_PDF']: {
            bind: 'terms-and-conditions-document'
          },
          [PAGE_NAME + '_CONTINUE_STEP_PHANTOM']: {
            bind: 'continue-pressed'
          },
          [PAGE_NAME + '_BACK_STEP_PHANTOM']: {
            bind: 'change-pressed'
          },
          [PAGE_NAME + '_CHECKLIST_CONTRACT_STEP_FOCUS_IN']: {
            bind: 'cells-step-focus-in'
          },
          global_retargeting_go_next_step: {
            bind: 'go-next-step'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'oc-credit-card-holder-general-offer-terms-conditions-title-spherica',
      consultText: 'oc-credit-card-holder-general-offer-terms-conditions-desc-spherica',
      variant: 'primary-alt',
      isButtonPrimary: true,
      maxSteps,
      hideCurrentStepLabel: false,
      displayedCurrentStep: 4,
      displayedMaxSteps: 4,
      visibleStep: true
    }
  };

  const summaryViewSteps = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      className: 'aqua-dark-button',
      showAddition: true,
      buttonLabel: 'oc-credit-card-holder-general-offer-request-card-btn-label',
      cellsConnections: {
        out: {
          [PAGE_NAME + '_REQUEST_CARD_HIRING']: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      primaryButtonClass: 'positive'
    }
  };
  const cellsModalCardAdvice = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-card-advice',
    tagSpherica: 'cells-modal-card-advice-spherica',
    properties: {
      iOSFixedHeader: isNativeIos,
      className: 'no-lateral-margin common-header without-padding-left-right-button',
      isTextLeft: true,
      hiddenImage: true,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SHOW_CREDIT_HISTORY_MODAL']: {
            bind: 'openWithConfig'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'no-lateral-margin center-text'
    }
  };
  const bbvaHelpModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'aggregationListFile',
      fullHeight: true,
      headerText: 'oc-credit-card-holder-general-offer-documents-title',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SHOW_DOCUMENTS_MODAL']: {
            bind: 'open'
          },
          [PAGE_NAME + 'MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'close'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'close'
          }
        },
        out: {
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'help-modal-close'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_BUTTON_CLICK_CLOSE']: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    }
  };
  const modalMapAlternateAddress = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-edit-address-modal',
    tagSpherica: 'cells-edit-address-modal-spherica',
    properties: {
      apiKey: CONFIG.mapsApiKey,
      myCurrentLocation: CONFIG.myCurrentLocationCardHolder,
      modalFullHeight: true,
      modalIosFixedHeader: isNativeIos,
      locationPermission: 'denied',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_PLUGIN_GEOLOCATION_ACCEPT_CHANNEL']: {
            bind: 'acceptGeolocationPermissionsHandler'
          },
          [PAGE_NAME + '_OPEN_EDIT_ADDRESS_MODAL']: {
            bind: 'open'
          },
          [PAGE_NAME + '_SUCCESS_RESPONSE_LIST_PLACES']: {
            bind: 'setResponseListPlaces'
          },
          [PAGE_NAME + '_ERROR_RESPONSE_LIST_PLACES']: {
            bind: 'setErrorResponseListPlaces'
          }
        },
        out: {
          [PAGE_NAME + '_OPEN_MAP_ADDRESS']: {
            bind: 'open-map-address'
          },
          [PAGE_NAME + '_SEND_ALTERNATE_ADDRESS']: {
            bind: 'send-alternate-address'
          },
          [PAGE_NAME + '_SERVICE_LIST_PLACES']: {
            bind: 'get-list-places-service'
          }
        }
      }
    }
  };
  const globalMobileGeolocation = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-mobile-geolocation',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + 'get_device_geolocation']: {
            bind: 'getCurrentPosition'
          },
          [PAGE_NAME + 'get_open_prompt_forLocation_service']: {
            bind: 'promptForLocationService'
          }
        },
        out: {
          [PAGE_NAME + '_PLUGIN_GEOLOCATION_ACCEPT_CHANNEL']: {
            bind: 'current-position-available'
          }
        }
      }
    }
  };
  const globalMobilePermissions = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-mobile-permissions-plugin',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + 'get_device_geolocation_permission']: {
            bind: 'checkState'
          }
        },
        out: {
          [PAGE_NAME + '_PLUGIN_PERMISSIONS_SUCCESS']: {
            bind: 'permissions-check-state-success'
          }
        }
      }
    }
  };
  const globalApisGeographicplaces = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-geographicplaces',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SERVICE_LIST_PLACES']: {
            bind: 'getListPlaces'
          }
        },
        out: {
          [PAGE_NAME + '_SUCCESS_RESPONSE_LIST_PLACES']: {
            bind: 'set-list-places'
          },
          [PAGE_NAME + '_ERROR_RESPONSE_LIST_PLACES']: {
            bind: 'error-on-get-list-places'
          }
        }
      }
    }
  };
  const bbvaAggregationListFile = {
    zone: 'aggregationListFile.slot-content',
    type: 'UI',
    tag: 'bbva-aggregation-file-list',
    tagSpherica: 'bbva-aggregation-file-list-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-file-list',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-file-list-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_DOCUMENT_LIST']: {
            bind: 'listFile'
          }
        },
        out: {
          [PAGE_NAME + '_LIST_FILE_CLICK']: {
            bind: 'list-file-clicked'
          }
        }
      }
    }
  };

  const dmGlobalApisCatalogs = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-catalogs',
    properties: {
      host: CONFIG.globalServices.host,
      catalogsApiVersion: CONFIG.globalServices.versions.catalogs,
      native: !!CONFIG.native,
      headers: { 'Accept-Language': 'es' },
      maritalStatusId: 'MARITAL_STATUS',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_MARITAL_STATUS_REQUEST']: {
            bind: 'getMaritalStatuses'
          }
        },
        out: {
          [PAGE_NAME + '_GET_MARITAL_STATUS_SUCCESS']: {
            bind: 'set-marital-statuses'
          },
          [PAGE_NAME + '_GET_MARITAL_STATUS_ERROR']: {
            bind: 'error-on-get-marital-statuses'
          }
        }
      }
    }
  };

  const modalSelector = {
    zone: 'app__transactional',
    tag: 'cells-modal-selector',
    tagSpherica: 'cells-modal-selector-spherica',
    type: 'UI',
    properties: {
      hideCheckIcon: true,
      cellsConnections: {
        in: {
          creditCardHolder_SET_ITEMS_SELECTOR: {
            bind: 'items'
          },
          [PAGE_NAME + '_MARITAL_STATUS_SELECTOR']: {
            bind: 'open'
          },
          [PAGE_NAME + '_SHOW_EXIT_ALERT']: {
            bind: 'close'
          },
          [PAGE_NAME + '_RESET_MODAL_SELECTOR']: {
            bind: 'reset'
          }
        },
        out: {
          [PAGE_NAME + '_MARITAL_STATUS_SELECTED']: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };

  const cellsModalSelector = {
    zone: 'app__main',
    tag: 'cells-modal-selector',
    tagSpherica: 'cells-modal-selector-spherica',
    type: 'UI',
    properties: {
      id: 'cut-off-date',
      hideCheckIcon: true,
      className: 'multiline-options cards-dropdown-selector',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_INIT_CHANNEL']: {
            bind: 'reset'
          },
          [PAGE_NAME + '_SELECTOR_MODAL_ITEMS']: {
            bind: 'items'
          },
          [PAGE_NAME + '_SELECTOR_MODAL_FIRST_ITEM_SELECTED']: {
            bind: 'selected'
          },
          [PAGE_NAME + '_SELECTOR_MODAL_ITEM_SELECTED']: {
            bind: 'itemSelected'
          },
          [PAGE_NAME + '_OPEN_CELLS_MODAL_SELECTOR']: {
            bind: 'open'
          }
        },
        out: {
          [PAGE_NAME + '_ITEM_SELECTED_CHANGED']: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };

  const showModalRatesAndConditions = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'helpModal',
      fullHeight: true,
      hideContentPaddingTop: true,
      fixedFooter: true,
      iOSFixedHeader: isNativeIos,
      headerText: 'oc-credit-card-holder-interest-rate-modal-title',
      iconRightPrimary: 'coronita:close',
      buttonText: 'Entendido',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_OPEN']: {
            bind: 'open'
          },
          [PAGE_NAME + 'MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'close'
          },
          [PAGE_NAME + '_EXIT_OPERATIVE']: {
            bind: 'close'
          }
        },
        out: {
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_CLOSE']: {
            bind: 'help-modal-close'
          },
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_BUTTON_CLICK_CLOSE']: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullHeight: false,
      icon: 'spherica:close',
      closeLabel: 'credit-card-holder-header-close',
      headerType: '',
      modalType: 'info',
      titleIcon: 'spherica:info',
      buttonText: '',
      fixedFooter: false
    }
  };
  const showModalRatesAndConditionsText1 = {
    zone: 'helpModal.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      alignment: 'center',
      tag: 'span',
      size: 'S',
      cellsConnections: {
        in: {
          creditCardHolderSHOW_MODAL_RATES_AND_CONDITIONS_OPEN_TEXT_RATES: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      className: 'u-margin--grid u-margin-bottom--1'
    }
  };

  const showModalRatesAndConditionsPanelInfo = {
    zone: 'helpModal.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    tagSpherica: 'bbva-panel-info-spherica',
    familyPath: '@bbva-web-components/bbva-panel-info',
    familyPathSpherica: '@glomo-web-components/bbva-panel-info-spherica',
    render: 'litElement',
    properties: {
      microillustration: 'tipsdollar',
      cellsConnections: {
        in: {
          [PAGE_NAME + 'SHOW_MODAL_RATES_AND_CONDITIONS_OPEN_TEXT_RATES']: {
            bind: 'text'
          }
        }
      }
    }
  };

  const showModalRatesAndConditionsText = {
    zone: 'helpModal.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text-spherica',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      alignment: 'center',
      tag: 'span',
      size: 'S',
      text: 'oc-credit-card-holder-interest-rate-modal-text-history-credit'
    },
    propertiesSpherica: {
      text: 'oc-credit-card-holder-interest-rate-modal-text-history-credit-spherica'
    }
  };

  const showModalAnnuality = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'helpModalAnnuality',
      hideContentPaddingTop: true,
      iOSFixedHeader: isNativeIos,
      headerText: 'oc-credit-card-holder-text_header-modal-annuality',
      iconRightPrimary: 'coronita:close',
      cellsConnections: {
        in: {
          CREDIT_CARD_HOLDER_SHOW_MODAL_ANNUALITY_OPEN: {
            bind: 'open'
          },
          creditCardHolder_SHOW_MODAL_RATES_AND_CONDITIONS_CLOSE: {
            bind: 'close'
          },
          creditCardHolder_EXIT_OPERATIVE: {
            bind: 'close'
          }
        },
        out: {
          creditCardHolder_SHOW_MODAL_RATES_AND_CONDITIONS_CLOSE: {
            bind: 'help-modal-close'
          },
          creditCardHolder_SHOW_MODAL_RATES_AND_CONDITIONS_BUTTON_CLICK_CLOSE: {
            bind: 'help-modal-footer-button-click'
          }
        }
      }
    },
    propertiesSpherica: {
      icon: 'spherica:close',
      closeLabel: 'credit-card-holder-header-close',
      modalType: 'info'
    }
  };

  const showModalAnnualityTextFromApp = {
    zone: 'helpModalAnnuality.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          CREDIT_CARD_HOLDER_TEXT_CARD_MODAL_FROM_APP: {
            bind: 'text'
          }
        }
      }
    }
  };

  const showModalAnnualityTextFirstCard = {
    zone: 'helpModalAnnuality.slot-content',
    type: 'UI',
    tag: 'bbva-list-bullet',
    tagSpherica: 'bbva-list-bullet-spherica-lit',
    familyPath: '@bbva-web-components/bbva-list-bullet',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          CREDIT_CARD_HOLDER_TEXT_CARD_MODAL: {
            bind: 'text'
          }
        }
      }
    }
  };

  const showModalAnnualityTextReference = {
    zone: 'helpModalAnnuality.slot-content',
    type: 'UI',
    tag: 'bbva-text',
    tagSpherica: 'bbva-type-text',
    familyPath: '@bbva-web-components/bbva-text',
    familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
    render: 'litElement',
    properties: {
      size: '2XS',
      tag: 'p',
      cellsConnections: {
        in: {
          CREDIT_CARD_HOLDER_TEXT_REFERENCE_ANNUALITY: {
            bind: 'text'
          }
        }
      }
    },
    propertiesSpherica: {
      size: '2XS',
      tag: 'p',
      className: 'u-margin-top--2'
    }
  };

  const dmGlobalApisCustomers = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-customers-bgadpmock',
    tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
    properties: {
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregatorV1,
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      headers: { 'Accept-Language': 'es' },
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_CUSTOMER_ID']: {
            bind: 'customerId'
          },
          [PAGE_NAME + '_MODIFY_CUSTOMER_REQUEST']: {
            bind: 'patchCustomer'
          }
        },
        out: {
          [PAGE_NAME + '_MODIFY_CUSTOMER_SUCCESS']: {
            bind: 'patch-customer-success'
          },
          [PAGE_NAME + '_MODIFY_CUSTOMER_ERROR']: {
            bind: 'error-on-patch-customer'
          }
        }
      }
    }
  };
  if (isSpherica) {
    base.components.push(showModalRatesAndConditionsText1);
  } else {
    base.components.push(showModalRatesAndConditionsPanelInfo);
  }

  base.components.push(
    moleculeHeader,
    navigationHandler,
    handleLifeCycle,
    opxCreditCardHolderDm,
    globalApisCampaigns,
    creditCardHolderManager,
    cellsGlobalApisBusinessDocuments,
    analyticsCreditCardHolderManager,
    stepLoanOffer,
    stepUserForm,
    stepPaymentSelector,
    stepRadioButtons,
    steptermsAndConditions,
    summaryViewSteps,
    cellsModalCardAdvice,
    bbvaHelpModal,
    bbvaAggregationListFile,
    modalSelector,
    dmGlobalApisCustomers,
    dmGlobalApisCatalogs,
    cellsModalSelector,
    modalMapAlternateAddress,
    globalMobileGeolocation,
    globalApisGeographicplaces,
    globalMobilePermissions,
    controllerCmb,
    showModalRatesAndConditions,
    showModalRatesAndConditionsText,
    showModalAnnuality,
    showModalAnnualityTextFromApp,
    showModalAnnualityTextFirstCard,
    showModalAnnualityTextReference
  );

  if (CONFIG.native) {
    base.components.push(Glomo_Open_Document);
  }

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('glomo-credit-card-holder-manager', PAGE_NAME, [
    'set-customer-addresses',
    'error-on-get-customer-addresses',
    'post-cards-npm',
    'error-on-post-cards-npm'
  ]);

  signConnector('cells-dm-global-apis-customers-mx-bgadpmock', PAGE_NAME, [
    'patch-customer-success', 'error-on-patch-customer']);
  _localStorage.addOutStorageChannels(base.components, [ 'call_me_back' ], CONFIG);
  addRetryErrors(base)([
    {
      id: 'GENERIC',
      acceptRetry: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      },
      cancelRetry: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      }
    },
    {
      id: 'BUREAU-ERROR',
      acceptRetry: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      },
      cancelRetry: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      }
    },
    {
      id: 'INFO-INCOMPLETE-ERROR',
      acceptRetry: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      },
      cancelRetry: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      }
    },
    {
      id: 'UNAVAILABLE-OPERATION',
      acceptRetry: {
        bind: 'loadPayloadRequestCreditCard',
        component: 'glomo-credit-card-holder-manager'
      },
      cancelRetry: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      },
      acceptCallForHelp: {
        bind: 'forceExitPage',
        component: 'glomo-opx-credit-card-holder-dm'
      }
    },
    {
      id: 'MODIFY-CUSTOMER-ERROR',
      acceptRetry: { bind: 'forceExitPage', component: 'glomo-opx-credit-card-holder-dm' },
      cancelRetry: { bind: 'forceExitPage', component: 'glomo-opx-credit-card-holder-dm' }
    }
  ]);
  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
