/* eslint-disable max-statements, no-shadow */
'use strict';
const { SPINNER: spinner, getLocalCurrency, useNames, toUnderscoreCase, getLanguage, glomoOpenDocument, detailDownloadParams, headerHeight } = require('./common/helpers/_utils');
const pageDmsOutCommonErrors = require('./common/commonErrors/_dm-common-errors');
const pageName = 'dynamicLifeInsuranceOfferPage';
const operativePrefix = toUnderscoreCase(pageName).toUpperCase();
const [ getChannelName ] = useNames(operativePrefix);
const getChannelNameCallMeBack = name => getChannelName(name).toLowerCase();
const maxSteps = 4;
const featuresList = [
  {
    links: [
      { id: 'link1', icon: '', text: 'dynamic-life-insurance-text-amount-insurance-modal' }
    ]
  }
];
const checkListContractPDFData = [
  {
    id: 'general-conditions-coverages-assistances',
    icon: 'coronita:pdf',
    text: 'dynamic-life-insurance-checklist-contract-pdf-data-item-1-text'
  },
  {
    id: 'payment-conditions',
    icon: 'coronita:pdf',
    text: 'dynamic-life-insurance-checklist-contract-pdf-data-item-2-text'
  }
];
const checkListContractCheckboxList = [
  {
    valid: false,
    active: true,
    buttonText: 'dynamic-life-insuance-checklist-contract-item-1-checkbox-list-text'
  },
  {
    valid: false,
    active: true,
    buttonText: 'dynamic-life-insuance-checklist-contract-item-2-checkbox-list-text'
  },
  {
    valid: false,
    active: true,
    buttonText: 'dynamic-life-insuance-checklist-contract-item-3-checkbox-list-text'
  },
  {
    valid: false,
    active: true,
    buttonText: 'dynamic-life-insuance-checklist-contract-item-4-checkbox-list-text'
  }
];
const configIconMsg = {
  type: 'info',
  icon: 'coronita:info',
  message: 'dynamic-life-insurance-final-icon-message-text'
};

module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_dynamicLifeInsurance')(CONFIG);
  const cdmxPhone = CONFIG.phoneNumberSAC;
  const isNative = CONFIG.native || false;
  const isNativeIos = CONFIG.nativeIos || false;
  const businessDocumentsApiVersion = CONFIG.globalServices.versions.businessDocumentsV0;
  const CmbConfig = {
    operativeName: pageName,
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    lastStep: 4,
    onlyCallMeBack: true,
    recoverySettings: true,
    useFeatureFlag: true,
    scheduleNotAllowed: true,
    isCallCenter: true,
    twoCallMeBacks: true
  };
  const CmbConfigAnalytics = {
    operativeName: pageName,
    steps: {
      1: '5 seguro personalizado',
      2: '6 beneficiarios',
      3: '7 forma de pago',
      4: '8 terminos y condiciones'
    },
    levels: {
      1: 'seguro vida dinamico',
      2: 'seguro vida dinamico one click'
    }
  };
  const { analyticsCallMeBack, controllerCallMeBack} = require('./common/_redirectCallMeBack');

  const cellsHandleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_dynamicLifeInsuranceOfferPage: {
            bind: 'init'
          }
        },
        out: {
          INIT_PAGE_DYNAMIC_LIFE_INSURANCE_OFFER_PAGE: {
            bind: 'init-page',
            params: {
              value: true
            }
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          [getChannelNameCallMeBack('_call_me_back_initialize')]: {
            bind: 'init-page'
          }
        }
      }
    }
  };
  const cellsMoleculeHeader = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      titleName: 'dynamic-life-insurance-main-page-header-title',
      className: 'header--core',
      rightIcon: 'coronita:close',
      setTimeoutHideTooltip: 3000,
      cellsConnections: {
        in: {
          LIMP_HEADER_TITLE_TEXT: {
            bind: 'titleName'
          },
          LIMP_CHANGE_HEADER_COLOR: {
            bind: 'class'
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
          [getChannelName('NAVIGATION_OFFER_PAGE_BACK_REQUEST')]: {
            bind: 'click-right-button'
          },
          [getChannelNameCallMeBack('_call_me_back_init_header_configuration')]: {
            bind: 'click-right-secondary-button'
          }
        }
      }
    }
  };
  const glomoNavigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-right-button',
      cellsConnections: {
        in: {
          [getChannelName('ACCEPT_MODAL_ERROR')]: {
            bind: 'goBack'
          }
        },
        out: {
          NAVIGATION_LIFE_INSURANCE_OFFER_PAGE_TO_PREVIOUS_PAGE: {
            bind: 'header-right-button',
            backStep: true
          },
          [getChannelNameCallMeBack('_call_me_back_reset_step')]: {
            bind: 'header-right-button'
          },
          global_retargeting_send_information_update: {
            bind: 'header-right-button'
          }
        }
      }
    }
  };
  const glomoDynamicLifeInsuranceDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-dynamic-life-insurance-dm',
    properties: {
      host: CONFIG.globalServices.host,
      native: isNative,
      customersApiVersion: 0,
      financialApiVersion: CONFIG.globalServices.versions.financialOverviewApiVersion,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      contactPhone: cdmxPhone,
      isNativeIos: isNativeIos,
      businessDocumentsApiVersion,
      detailDownloadParams,
      cellsConnections: {
        in: {
          global_tsec_channel: {
            bind: 'tsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'showConfimExitModal'
          },
          INIT_PAGE_DYNAMIC_LIFE_INSURANCE_OFFER_PAGE: {
            bind: '_boot'
          },
          DYNAMIC_LIFE_INSURANCE_MAIN_PAGE_SEND_PERSIST_DATA_TO_OFFER: {
            bind: 'setProperties'
          },
          DYNAMIC_LIFE_INSURANCE_SEND_EDITED_PERCENTAGES: {
            bind: 'setEditedPercentages'
          },
          DYNAMIC_LIFE_INSURANCE_CONFIRM_DELETE_ACCEPT: {
            bind: 'confirmDeleteBeneficiary'
          },
          DYNAMIC_LIFE_INSURANCE_EDIT_COVERAGE_AMOUNT_PAGE_SEND_NEW_AMOUNT_COVERAGE: {
            bind: 'editAmountAdditionalCoverage'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_EXIT_INSURANCE: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_ERROR_LIMIT_INSURANCE: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_INTERRUPTED: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_OPERATION_FAILED: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_CANCEL_ERROR_LIMIT_INSURANCE: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_CANCEL_INTERRUPTED: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_CANCEL_OPERATION_FAILED: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_SUCCESS_NAVIGATION_SUCCESS_PAGE_BACK_REQUEST: {
            bind: 'finishedProcess'
          },
          [getChannelName('SET_CATALOGS_RECORDS')]: {
            bind: 'successfullOnGetRecordsParentals'
          },
          [getChannelName('ERROR_GET_CATALOGS')]: {
            bind: 'errorOnRequest'
          },
          [getChannelName('SHOW_DETAIL_COVERAGE')]: {
            bind: 'openModalInfoCoverages'
          },
          [getChannelName('BENEFICIARIES_STEP_ADD')]: {
            bind: 'openBeneficiaryInput'
          },
          [getChannelName('ADD_NEW_BENEFICIARY')]: {
            bind: 'setNewBeneficiary'
          },
          [getChannelName('SAVE_EDIT_BENEFICIARY')]: {
            bind: 'setBeneficiaryEdited'
          },
          [getChannelName('EDIT_BENEFICIARY_EVENT')]: {
            bind: 'editBeneficiary'
          },
          [getChannelName('EDIT_PERCENTAGE_EVENT')]: {
            bind: 'editPercentages'
          },
          [getChannelName('DELETE_BENEFICIARY_EVENT')]: {
            bind: 'deleteBeneficiary'
          },
          [getChannelName('BENEFICIARIES_CONTIDIONS')]: {
            bind: 'openModalInfoBeneficiaries'
          },
          [getChannelName('OPEN_MODAL_FRECUENCY')]: {
            bind: 'openModalFrequency'
          },
          [getChannelName('CHECKED_FREQUENCY_PAYMENT')]: {
            bind: 'checkedCardFrequencyOption'
          },
          [getChannelName('CHANGE_TYPE_PLAN')]: {
            bind: 'checkedOptionIncremental'
          },
          [getChannelName('CLICK_ICON_PLAN')]: {
            bind: 'openModalInfoPlan'
          },
          [getChannelName('CONTINUE_PRESSED')]: {
            bind: 'patchModifyOptions'
          },
          [getChannelName('ICON_LINK_PRESSED')]: {
            bind: 'getListBusinessDocument'
          },
          [getChannelName('SELECTED_PRODUCT')]: {
            bind: 'selectedProduct'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_SUCCESS_ON_GET_BUSINESS_DOCS')]: {
            bind: 'onGetSuccessDocuments'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_ERROR_ON_GET_BUSINESS_DOCS')]: {
            bind: 'onGetErrorDocuments'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_SUCCESS_ON_POST_BUSINESS_DOC')]: {
            bind: 'onPostSuccessDocument'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_ERROR_ON_POST_BUSINESS_DOC')]: {
            bind: 'onErrorPostDocument'
          },
          [getChannelName('ON_POST_VALIDATE_MONEY_SUCCESS')]: {
            bind: 'successfullOnPostValidateMoneyLaudering'
          },
          [getChannelName('ON_CREATE_INSURANCE_POLICY_SUCCESS')]: {
            bind: 'successfullOnPostCreateInsurancePolicy'
          },
          [getChannelName('ON_CREATE_INSURANCE_POLICY_ERROR')]: {
            bind: 'onErrorPostCreateInsurancePolicy'
          },
          [getChannelName('ACCEPT_LAST_STEP')]: {
            bind: 'sendPatchQuotationBeneficiarie'
          },
          [getChannelName('PAYMENT_FREQUENCY_OPTION_SELECTED')]: {
            bind: 'changeOptionRentals'
          },
          [getChannelName('ENTER_PROMO_CODE_CLICKED')]: {
            bind: 'openModalPromoCode'
          },
          [getChannelName('SET_VALUE_INPUT_COUPON')]: {
            bind: 'setPromoCodeOffer'
          },
          [getChannelName('ENTER_PROMO_CODE_PATCH')]: {
            bind: 'patchPromoCodeOffer'
          },
          [getChannelName('DELETE_PROMO_CODE_CLICKED')]: {
            bind: 'patchDeleteCuopon'
          },
          [getChannelName('TO_PATCH_OPTIONS')]: {
            bind: 'patchModifyOptions'
          },
          [getChannelName('HIDDE_CONTACT_DATA')]: {
            bind: 'sendContactPhone'
          },
          [getChannelName('SHOW_CONTACT_DATA')]: {
            bind: 'sendContactPhone'
          },
          [getChannelName('CHANE_INSURED_AMOUNT')]: {
            bind: 'openChangeAmount'
          },
          [getChannelName('CHANGE_COVERAGES')]: {
            bind: 'openChangeCoverages'
          },
          [getChannelName('ON_BLUR_NEW_AMOUNT')]: {
            bind: 'receiveCustomInsuredAmount'
          },
          [getChannelName('ON_BLUR_NEW_AMOUNTS')]: {
            bind: 'receiveCustomInsuredAmount'
          },
          [getChannelName('CONTINUE_PROCESS_CLICKED')]: {
            bind: 'sendInfoToOfferPage'
          },
          [getChannelName('SEND_INFO_TO_OFFER_PAGE')]: {
            bind: 'sendInfoToOfferPage'
          },
          [getChannelName('CLICK_EDIT_AMOUNT_CARD')]: {
            bind: 'openModalEditAmountCoverage'
          },
          [getChannelName('OPEN_MODAL_INFO_AMOUNT')]: {
            bind: 'openModalInfoAmount'
          },
          [getChannelName('NAVIGATION_OFFER_PAGE_BACK_REQUEST')]: {
            bind: 'showConfimExitModal'
          },
          [getChannelName('ERROR_ON_REQUEST')]: {
            bind: 'errorOnRequest'
          },
          [getChannelName('POST_QUOTATIONS_REQUEST_SUCCESS')]: {
            bind: 'successfullOnPostQuotations'
          },
          [getChannelName('PATCH_QUOTATIONS_REQUEST_SUCCESS')]: {
            bind: 'successfullOnPatchQuotations'
          },
          [getChannelName('ON_CHANGE_PRESSED')]: {
            bind: 'sendPaymentFrequency'
          },
          [getChannelName('_GO_NEXT_STEP_to_confirm')]: {
            bind: 'onStepTermsCollapsed'
          },
          global_open_document_url_success: {
            bind: 'closeVeil'
          },
          global_open_document_url_error: {
            bind: 'onErrorPostDocument'
          }
        },
        out: {
          close_control_veil: {
            bind: 'close-control-veil'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          global_generic_error_dinamic: {
            bind: 'dynamic-life-insurance-dm-general-error'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-modal-dynamic-life-insurance'
          },
          [getChannelName('RESET_PROCESS')]: {
            bind: 'reset-process'
          },
          [getChannelName('ACTIVATE_STEPS')]: {
            bind: 'active-steps'
          },
          [getChannelName('GET_CATALOGS')]: {
            bind: 'get-catalogs-parentals-list'
          },
          [getChannelName('SET_VALUES_ADD_AMOUNT_PROCESS')]: {
            bind: 'set-values-modal-add-amount'
          },
          [getChannelName('OPEN_MODAL_ADD_AMOUNT_PROCESS')]: {
            bind: 'open-modal-add-amount'
          },
          [getChannelName('SET_BENEFICIARY')]: {
            bind: 'beneficiaries-changed'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('PAYMENT_FREQUENCY_OPTION_DEFAULT')]: {
            bind: 'set-default-payment-frequency'
          },
          [getChannelName('SET_EMAIL_MASKED')]: {
            bind: 'set-email-info-mask'
          },
          [getChannelName('SHOW_UNMASKED_ADDRESS')]: {
            bind: 'show-unmasked-address'
          },
          [getChannelName('SHOW_LIFE_INSURANCE_NOTICE')]: {
            bind: 'show-select-notice'
          },
          [getChannelName('OPEN_MODAL_NOTICE')]: {
            bind: 'open-notice-modal'
          },
          [getChannelName('KINSHIP_LIST_OPTIONS')]: {
            bind: 'set-kinship-list'
          },
          [getChannelName('CONFIRM_DELETE_BENEFICARY')]: {
            bind: 'open-modal-confirm-delete-beneficiary'
          },
          [getChannelName('OPEN_MODAL_COVERAGE_AMOUNT')]: {
            bind: 'open-modal-list-coverage',
            backStep: true
          },
          [getChannelName('OPEN_MODAL_BENEFICIARY')]: {
            bind: 'open-modal-beneficiary-changed'
          },
          [getChannelName('OPEN_MODAL_ADD_BENEFICIARY')]: {
            bind: 'open-modal-add-beneficiary',
            link: {
              page: 'dynamicLifeInsuranceAddBeneficiaryPage'
            }
          },
          [getChannelName('EDIT_BENEFICIARY')]: {
            bind: 'edit-beneficiary-data',
            link: {
              page: 'dynamicLifeInsuranceAddBeneficiaryPage'
            }
          },
          [getChannelName('EDIT_PERCENTAGE')]: {
            bind: 'show-edit-percentage',
            link: {
              page: 'dynamicLifeInsuranceEditPercentagePage'
            }
          },
          [getChannelName('SEND_CURRENT_ADDRESS')]: {
            bind: 'send-current-address'
          },
          [getChannelName('SET_PAYMENT_FREQUENCY_LIST')]: {
            bind: 'set-payment-frequency-list'
          },
          [getChannelName('SET_PRODUCTS_ACCOUNTS_LIST')]: {
            bind: 'set-products-accounts'
          },
          [getChannelName('SHOW_PAYMENT_FREQUENCY_MODAL')]: {
            bind: 'show-payment-frequency-modal'
          },
          [getChannelName('SET_PRIMARY_INFO_COLLAPSED')]: {
            bind: 'set-primary-info-collapsed'
          },
          [getChannelName('DOC_CONTENT')]: {
            bind: 'base-src-changed'
          },
          [getChannelName('DOC_TITLE')]: {
            bind: 'doc-title-changed'
          },
          [getChannelName('OPEN_PDF_MODAL')]: {
            bind: 'show-document-event'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_GET_LIST_BUSINESS_DOCUMENTS')]: {
            bind: 'get-list-business-documents'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_POST_BUSINESS_DOCUMENT')]: {
            bind: 'post-business-document'
          },
          [getChannelName('SET_VERSION_CREATE_INSURANCE_POLICY')]: {
            bind: 'set-version-create-insurance-policy'
          },
          [getChannelName('POST_CREATE_INSURANCE_POLICY')]: {
            bind: 'post-create-insurance-policy'
          },
          [getChannelName('POST_VALIDATE_MONEY')]: {
            bind: 'post-validate-money'
          },
          [getChannelName('SET_NEW_OPERATION')]: {
            bind: 'on-update-quotaion-data'
          },
          [getChannelName('UPDATE_CHECKS_TERMS_CONDITIONS')]: {
            bind: 'send-terms-conditions-checks'
          },
          [getChannelName('RESET_VALUE_INPUT_PROMO_CODE_PROCESS')]: {
            bind: 'reset-value-input-modal-promo-add-amount'
          },
          [getChannelName('SET_VALUES_ADD_PROMO_CODE_PROCESS')]: {
            bind: 'set-values-modal-promo-add-amount'
          },
          [getChannelName('OPEN_MODAL_ADD_PROMO_CODE_PROCESS')]: {
            bind: 'open-modal-enter-promo-code'
          },
          [getChannelName('CUOPON_APPLY_EVENT')]: {
            bind: 'cuopon-apply-event'
          },
          [getChannelName('SET_CONTACT_PHONE')]: {
            bind: 'set-contact-phone'
          },
          [getChannelName('SET_DEVICE_ID')]: {
            bind: 'set-device-id'
          },
          [getChannelName('SEND_PERSIST_DATA_TO_OFFER')]: {
            bind: 'persist-data-to-steps'
          },
          [getChannelName('OPEN_MODAL_UPDATE_DATA')]: {
            bind: 'on-update-quotaion-data'
          },
          [getChannelName('SET_PROPERTIES_CARDS_ADDITIONAL_COVERAGES')]: {
            bind: 'set-config-cards-additional-coverages'
          },
          [getChannelName('NEW_PROPERTIES_CARDS_ADDITIONAL_COVERAGES')]: {
            bind: 'set-new-config-cards-additional-coverages'
          },
          [getChannelName('OPEN_ADDITIONAL_COVERAGES_MODAL')]: {
            bind: 'open-cards-additional-coverages-modal'
          },
          [getChannelName('SEND_INFO_TO_SUCCESS_PAGE')]: {
            bind: 'on-post-create-insurance-page-success',
            link: {
              page: 'dynamicLifeInsuranceSuccess'
            }
          },
          [getChannelName('TO_ANALITYCS_SUCCESS_PAYMENT')]: {
            bind: 'to-analitycs-success-payment'
          },
          [getChannelName('TO_ANALITYCS_DATA_TYPE_PAYMENT')]: {
            bind: 'to-analitycs-data-type-payment'
          },
          [getChannelName('ACCEPT_MODAL_ERROR')]: {
            bind: 'accept-modal-error-clicked',
            skipHistory: true
          },
          [getChannelName('POST_INSURANCE_QUOTATION_REQUEST')]: {
            bind: 'post-insurance-quotation-request'
          },
          [getChannelName('PATCH_INSURANCE_QUOTATION_REQUEST')]: {
            bind: 'patch-insurance-quotation-request'
          },
          [getChannelName('REACTIVE_STEP_PRODUCT_SELECTOR')]: {
            bind: 'reactive-product-selector'
          },
          [getChannelName('DISABLE_SUMMARY_BUTTON_FINAL')]: {
            bind: 'disable-button-summary-final'
          },
          global_open_document_url: {
            bind: 'open-document-by-url'
          },
          global_retargeting_contracted_product: {
            bind: 'on-post-create-insurance-page-success'
          },
          global_retargeting_send_information_update: {
            bind: 'open-modal-list-coverage'
          }
        }
      }
    }
  };
  const GlomoOpxDynamicLifeInsuranceDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-dynamic-life-insurance-dm',
    properties: {
      autoActivateStep: true,
      decorateSteps: true,
      host: CONFIG.globalServices.host,
      native: isNative,
      pageName,
      maxSteps,
      cellsConnections: {
        in: {
          [getChannelName('ACTIVATE_STEPS')]: {
            bind: 'init'
          },
          [getChannelName('BACK_BUTTON_NAVIGATION')]: {
            bind: 'manageBackButton'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'registerStep',
            previousState: true
          },
          [getChannelName('_GO_NEXT_STEP')]: {
            bind: 'goNextStep'
          },
          [getChannelName('DONT_CHANGE_CONTINUE_AND_GO_NEXT_STEP')]: {
            bind: 'goNextStep'
          },
          [getChannelName('CHANGE_ORIGIN_AND_DONT_GO_NEXT_STEP')]: {
            bind: 'changeProductOrigin'
          },
          [getChannelName('CELLS_STEP_FOCUS_IN')]: {
            bind: 'stepFocusIn'
          },
          [getChannelName('CHANGE_PRESSED')]: {
            bind: 'changeStateStep'
          },
          [getChannelName('RESET_PROCESS')]: {
            bind: 'resetContent'
          },
          [getChannelName('REACTIVE_STEP_PRODUCT_SELECTOR')]: {
            bind: 'setStepProductToChange'
          },
          DYNAMIC_LIFE_INSURANCE_ADD_BENEFICIARY_PAGE_ADD_NEW_BENEFICIARY: {
            bind: 'executeScrollAgain'
          },
          [getChannelName('VALID_CHANGE')]: {
            bind: 'allowViewSummary'
          }
        },
        out: {
          [getChannelName('SHOW_BUTTON_CONFIRM_STEPS')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('SCROLL_ZONE')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('RESET_SCROLL')]: {
            bind: 'reset-scroll'
          },
          [getChannelName('SHOW_CONFIRM_CHANNEL')]: {
            bind: 'all-steps-collapsed'
          },
          [getChannelName('UPDATE_STATUS_FINAL_MESSAGE')]: {
            bind: 'update-status-alert-final-message'
          },
          [getChannelName('SCROLL_TEMPLATE_TOP')]: {
            bind: 'scroll-template-top'
          },
          [getChannelName('SCROLL_ZONE')]: {
            bind: 'cells-scroll-zone'
          },
          [getChannelName('RESET_LAYER_SCROLL')]: {
            bind: 'reset-scroll'
          },
          [getChannelName('RESET_PRODUCT_SELECTED')]: {
            bind: 'reset-product-selected'
          }
        }
      }
    }
  };
  const cellsStepDynamicLifeInsuranceOffer = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-dynamic-life-insurance-offer',
    properties: {
      currentStep: 1,
      maxSteps,
      headerImageSrc: './images/dynamicLife/logo-dynamic-life-insurance.svg',
      hideHeader: true,
      mainSectionTitleText: 'dynamic-life-insurance-step-1-title-text',
      summaryHeaderText: 'dynamic-life-insurance-step-1-main-section-description-text',
      insuredAmountTitleText: 'dynamic-life-insurance-step-1-insured-amount-title-text',
      insuredAmountBtnChange: 'dynamic-life-insurance-step-1-insured-amount-btn-change-text',
      titleFrequencyPayment: 'dynamic-life-insurance-step-1-title-frequency-text',
      descriptionFrequencyPayment: 'dynamic-life-insurance-step-1-description-frequency-text',
      titlePromotionCode: 'dynamic-life-insurance-step-1-title-promotion-code-text',
      btnPromotionCode: 'dynamic-life-insurance-step-1-btn-promotion-code-text',
      titleTypePlans: 'dynamic-life-insurance-step-1-title-type-plans-text',
      descriptionTypePlans: 'dynamic-life-insurance-step-1-description-type-plans-text',
      insuranceTextMessage: 'dynamic-life-insurance-step-1-insurance-text-message',
      btnContinueText: 'dynamic-life-insurance-want-button-modal-coverages-assistances-text',
      secondaryButtonText: 'dynamic-life-insuance-cmb-button-text',
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('ACTIVATE_STEPS')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          DYNAMIC_LIFE_INSURANCE_MAIN_PAGE_SEND_PERSIST_DATA_TO_OFFER: {
            bind: 'setProperties'
          },
          [getChannelName('SEND_PERSIST_DATA_TO_OFFER')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_PRIMARY_INFO_COLLAPSED')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_NEW_OPERATION')]: {
            bind: 'setProperties'
          },
          [getChannelName('CUOPON_APPLY_EVENT')]: {
            bind: 'setProperties'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showSecondaryButton'
          }
        },
        out: {
          [getChannelName('EDIT_COVERAGES_SELECT')]: {
            bind: 'edit-additional-coverages'
          },
          [getChannelName('CHECKED_FREQUENCY_PAYMENT')]: {
            bind: 'checked-frequency-payment'
          },
          [getChannelName('CHANGE_TYPE_PLAN')]: {
            bind: 'selected-type-plan'
          },
          [getChannelName('ENTER_PROMO_CODE_CLICKED')]: {
            bind: 'enter-promo-code'
          },
          [getChannelName('DELETE_PROMO_CODE_CLICKED')]: {
            bind: 'delete-code-promotion'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('SHOW_DETAIL_COVERAGE')]: {
            bind: 'click-additional-link'
          },
          [getChannelName('CHANE_INSURED_AMOUNT')]: {
            bind: 'change-insured-amount'
          },
          [getChannelName('CLICK_ICON_PLAN')]: {
            bind: 'clck-icon-plan'
          },
          [getChannelName('CHANGE_COVERAGES')]: {
            bind: 'click-link-section'
          },
          [getChannelName('CONTINUE_PRESSED')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('_GO_NEXT_STEP')]: {
            bind: 'go-next-step'
          },
          [getChannelName('CELLS_STEP_FOCUS_IN')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('CHANGE_PRESSED')]: {
            bind: 'change-step-state'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          },
          global_retargeting_insurance_frequency_payment: {
            bind: 'checked-frequency-payment'
          },
          global_retargeting_insurance_selected_type_plan: {
            bind: 'selected-type-plan'
          }
        }
      }
    }
  };
  const glomoLifeInsuranceBeneficiariesStep = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-life-insurance-beneficiaries-step',
    properties: {
      stepId: 'glomo-life-insurance-beneficiaries-step',
      currentStep: 2,
      maxSteps,
      cellsConnections: {
        in: {
          [getChannelName('ACTIVATE_STEPS')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('SET_BENEFICIARY')]: {
            bind: 'beneficiaries'
          },
          [getChannelName('PAYMENT_FREQUENCY_OPTION_SELECTED')]: {
            bind: 'paymentFrequency'
          },
          [getChannelName('PAYMENT_FREQUENCY_OPTION_DEFAULT')]: {
            bind: 'paymentFrequency'
          },
          [getChannelNameCallMeBack('_call_me_back_hidden_sticky_button')]: {
            bind: 'hiddenCallMeBack'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('BENEFICIARIES_STEP_ADD')]: {
            bind: 'add-new-beneficiary'
          },
          [getChannelName('EDIT_BENEFICIARY_EVENT')]: {
            bind: 'edit-beneficiary'
          },
          [getChannelName('EDIT_PERCENTAGE_EVENT')]: {
            bind: 'edit-percentage'
          },
          [getChannelName('DELETE_BENEFICIARY_EVENT')]: {
            bind: 'delete-beneficiary'
          },
          [getChannelName('BENEFICIARIES_CONTIDIONS')]: {
            bind: 'show-benef-condition'
          },
          [getChannelName('_GO_NEXT_STEP')]: {
            bind: 'continue-next-step'
          },
          [getChannelName('_GO_NEXT_STEP_payments')]: {
            bind: 'continue-next-step'
          },
          [getChannelName('TO_PATCH_OPTIONS')]: {
            bind: 'continue-next-step'
          },
          [getChannelName('CHANGE_PRESSED')]: {
            bind: 'change-pressed'
          },
          [getChannelName('ON_CHANGE_PRESSED')]: {
            bind: 'change-step-state'
          },
          [getChannelName('OPEN_MODAL_FRECUENCY')]: {
            bind: 'open-modal-payment-frequency'
          },
          [getChannelName('CELLS_STEP_FOCUS_IN')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('OPEN_MODAL_PROMO_CODE')]: {
            bind: 'enter-promo-code'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'call-me-back'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'continue-next-step'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-next-step'
          }
        }
      }
    }
  };
  const cellsStepProductSelector = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-product-selector',
    properties: {
      className: 'selected-product',
      stepId: 'cells-step-product-selector',
      currentStep: 3,
      maxSteps,
      hideCurrentStepLabel: true,
      disabledUpdateTitleOnChangeProduct: true,
      stepTitle: 'glomo-life-insurance-main-payment-method',
      savedLabel: 'dynamic-life-insurance-step-3-description-section-text',
      description: 'dynamic-life-insurance-step-3-description-section-text',
      changeLabel: 'glomo-life-insurance-main-change',
      localCurrency: getLocalCurrency(),
      productsListLabel: 'dynamic-life-insurance-step-3-subtitle-text',
      primaryAmountLabel: 'oc-loan-offer-page-account-available-balance',
      stickySectionButton: 'dynamic-life-insuance-cmb-button-text',
      cellsConnections: {
        in: {
          [getChannelName('ACTIVATE_STEPS')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('SET_PRODUCTS_ACCOUNTS_LIST')]: {
            bind: 'products'
          },
          [getChannelName('MODAL_SELECTED_ACCOUNT')]: {
            bind: 'collapsed'
          },
          [getChannelName('MODAL_SELECTED_ACCOUNT')]: {
            bind: 'onProductSelected'
          },
          [getChannelName('RESET_PRODUCT_SELECTED')]: {
            bind: 'resetCollapsedStep'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          }
        },
        out: {
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('SELECTED_PRODUCT')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('DONT_CHANGE_CONTINUE_AND_GO_NEXT_STEP')]: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName('CHANGE_ORIGIN_AND_DONT_GO_NEXT_STEP')]: {
            bind: 'origin-changed'
          },
          [getChannelName('VIEW_ALL_PRODUCTS')]: {
            bind: 'view-all'
          },
          [getChannelName('CHANGE_PRESSED')]: {
            bind: 'change-pressed'
          },
          [getChannelName('CELLS_STEP_FOCUS_IN')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'on-change-product-selected'
          },
          global_retargeting_insurance_product_selected: {
            bind: 'on-change-product-selected'
          },
          global_retargeting_go_next_step: {
            bind: 'first-product-selected'
          }
        }
      }
    }
  };
  const cellsProductSelectorModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-product-selector-modal',
    properties: {
      active: false,
      className: 'selected-product',
      showCloseModalButton: true,
      modalTitle: 'glomo-life-insurance-main-payment-method',
      closeButtonLabel: 'glomo-life-insurance-main-continue',
      cellsConnections: {
        in: {
          [getChannelName('VIEW_ALL_PRODUCTS')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('MODAL_SELECTED_ACCOUNT')]: {
            bind: 'select-product'
          }
        }
      }
    }
  };
  const cellsModalSelectorPayment = {
    zone: 'app__overlay',
    tag: 'cells-modal-selector',
    type: 'UI',
    properties: {
      autoClose: true,
      cellsConnections: {
        in: {
          [getChannelName('SET_PAYMENT_FREQUENCY_LIST')]: {
            bind: 'items'
          },
          [getChannelName('SHOW_PAYMENT_FREQUENCY_MODAL')]: {
            bind: 'open'
          },
          [getChannelName('ACTIVATE_STEPS')]: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('PAYMENT_FREQUENCY_OPTION_SELECTED')]: {
            bind: 'item-selected-changed'
          }
        }
      }
    }
  };
  const cellsStepTermsAndConditions = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-step-card-checklist-contract',
    properties: {
      currentStep: 4,
      maxSteps,
      stepTitle: 'dynamic-life-insuance-checklist-contract-step-title-text',
      consultText: 'dynamic-life-insuance-checklist-contract-consult-text',
      messageDescription: 'dynamic-life-insuance-checklist-contract-message-description-text',
      pdfData: checkListContractPDFData,
      showButton: true,
      contactData: cdmxPhone,
      checkboxList: checkListContractCheckboxList,
      secondaryButtonText: 'dynamic-life-insuance-cmb-button-text',
      cellsConnections: {
        in: {
          [getChannelName('ACTIVATE_STEPS')]: {
            bind: 'initialize'
          },
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'scrollComplete'
          },
          [getChannelName('UPDATE_CHECKS_TERMS_CONDITIONS')]: {
            bind: 'checkboxList'
          },
          [getChannelName('SET_CONTACT_PHONE')]: {
            bind: 'contactData'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showSecondaryButton'
          }
        },
        out: {
          [getChannelName('VALID_CHANGE')]: {
            bind: 'valid-changed'
          },
          [getChannelName('REGISTER_STEP_CHANNEL')]: {
            bind: 'register-step'
          },
          [getChannelName('_GO_NEXT_STEP')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('_GO_NEXT_STEP_to_confirm')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('CHANGE_PRESSED')]: {
            bind: 'change-pressed'
          },
          [getChannelName('HIDDE_CONTACT_DATA')]: {
            bind: 'continue-pressed'
          },
          [getChannelName('SHOW_CONTACT_DATA')]: {
            bind: 'change-pressed'
          },
          [getChannelName('CELLS_STEP_FOCUS_IN')]: {
            bind: 'cells-step-focus-in'
          },
          [getChannelName('ICON_LINK_PRESSED')]: {
            bind: 'cells-list-file-item-clicked'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'continue-pressed'
          },
          global_retargeting_go_next_step: {
            bind: 'continue-pressed'
          }
        }
      }
    }
  };
  const glomoIconMessage = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-icon-message',
    properties: {
      id: 'dynamic-life-insurance-icon-message',
      className: 'padded',
      type: configIconMsg.type,
      icon: configIconMsg.icon,
      message: configIconMsg.message,
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('UPDATE_STATUS_FINAL_MESSAGE')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };
  const cellsSummaryView = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    properties: {
      id: 'dynamic-life-insurance-summary-view',
      showAddition: true,
      primaryButtonClass: 'tertiary',
      buttonLabel: 'funds-hiring-summary-button-label',
      noFeesMessage: 'dynamic-insurances',
      hideCustomFeesMessage: true,
      cellsConnections: {
        in: {
          [getChannelName('SET_NEW_OPERATION')]: {
            bind: 'setProperties'
          },
          [getChannelName('RESET_PROCESS')]: {
            bind: 'reset'
          },
          [getChannelName('DISABLE_SUMMARY_BUTTON_FINAL')]: {
            bind: 'disabledPrimaryButton'
          }
        },
        out: {
          [getChannelName('ACCEPT_LAST_STEP')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    }
  };
  const glomoModalCardAdvice = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-card-advice',
    container: true,
    properties: {
      id: 'slots',
      iOSFixedHeader: isNativeIos,
      className: 'padding-bottom-content',
      cellsConnections: {
        in: {
          [getChannelName('OPEN_MODAL_ADD_PROMO_CODE_PROCESS')]: {
            bind: 'openWithConfig'
          },
          [getChannelName('SET_VALUES_ADD_PROMO_CODE_PROCESS')]: {
            bind: 'configModal'
          }
        },
        out: {
          [getChannelName('ENTER_PROMO_CODE_PATCH')]: {
            bind: 'modal-dynamic-life-code-promotion-click-primary'
          },
          [getChannelName('_ADVISOR_NOT_AVAILABLE_EXIT')]: {
            bind: 'modal-dynamic-life-code-promotion-click-secondary'
          },
          [getChannelName('_CLOSED_BUTTON')]: {
            bind: 'cells-bottom-modal-closed'
          }
        }
      }
    }
  };
  const slotInputCardAdvice = {
    zone: 'slots.content_intermediate',
    type: 'UI',
    tag: 'cells-molecule-input',
    properties: {
      id: 'couponPromotion',
      name: 'inputSlot',
      label: 'dynamic-life-insurance-promotional-code-modal-label-text',
      type: 'text',
      value: '',
      minLength: '6',
      maxLength: '13"',
      autoValidate: true,
      allowedValue: '[a-zA-Z0-9]',
      allowedChars: '[a-zA-Z0-9]',
      errorMessageIcon: 'coronita:alert',
      infoMessageIcon: 'coronita:info',
      infoMessageClass: 'message-input',
      errorMessageClass: 'message-input',
      errorMessage: 'dynamic-life-insurance-promotional-code-modal-info-error',
      infoMessage: 'dynamic-life-insurance-promotional-code-modal-info-text',
      cellsConnections: {
        in: {
          [getChannelName('RESET_VALUE_INPUT_PROMO_CODE_PROCESS')]: {
            bind: 'value'
          }
        },
        out: {
          [getChannelName('SET_VALUE_INPUT_COUPON')]: {
            bind: 'cells-molecule-input-keyup'
          }
        }
      }
    }
  };
  const glomoAnalyticsDynamicLifeInsuranceManager = {
    zone: 'app__main',
    tag: 'glomo-analytics-dynamic-life-insurance-manager',
    familyPath: '@glomo-web-components/glomo-analytics-dynamic-life-insurance-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('CELLS_STEP_FOCUS_IN')]: {
            bind: 'focus'
          },
          DYNAMICS_PERSIST: {
            bind: 'dynamics'
          },
          [getChannelName('TO_ANALITYCS_DATA_TYPE_PAYMENT')]: {
            bind: 'fireDynamicLifeInsuranceBeneficiaries'
          },
          [getChannelName('_GO_NEXT_STEP_payments')]: {
            bind: 'fireDynamicLifeInsurancePayments'
          },
          [getChannelName('SELECTED_PRODUCT')]: {
            bind: 'fireDynamicLifeInsuranceTerms'
          },
          [getChannelName('_GO_NEXT_STEP_to_confirm')]: {
            bind: 'fireDynamicLifeInsuranceConfirm'
          },
          [getChannelName('POST_CREATE_INSURANCE_POLICY')]: {
            bind: 'fireDynamicLifeInsuranceOtp'
          },
          [getChannelName('TO_ANALITYCS_SUCCESS_PAYMENT')]: {
            bind: 'fireDynamicLifeInsuranceSuccess'
          }
        },
        out: {
          [getChannelName('_ANALYTICS_APP_STEP_6')]: {
            bind: 'analytics-app-step-6',
            analytics: analytics.APP_STEP_6
          },
          [getChannelName('_ANALYTICS_APP_STEP_7')]: {
            bind: 'analytics-app-step-7',
            analytics: analytics.APP_STEP_7
          },
          [getChannelName('_ANALYTICS_APP_STEP_8')]: {
            bind: 'analytics-app-step-8',
            analytics: analytics.APP_STEP_8
          },
          [getChannelName('_ANALYTICS_APP_STEP_9')]: {
            bind: 'analytics-app-step-9',
            analytics: analytics.APP_STEP_9
          },
          [getChannelName('_ANALYTICS_APP_STEP_10')]: {
            bind: 'analytics-app-step-10',
            analytics: analytics.APP_STEP_10
          },
          [getChannelName('_ANALYTICS_APP_COMPLETED')]: {
            bind: 'analytics-app-completed',
            analytics: analytics.APP_COMPLETED
          }
        }
      }
    }
  };
  const cellsDmGlobalApisCustomers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-customers',
    properties: {
      host: CONFIG.globalServices.host,
      customersApiVersion: 0,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'customerId'
          },
          [getChannelName('SHOW_UNMASKED_ADDRESS')]: {
            bind: 'getCustomerAddresses'
          }
        },
        out: {
          [getChannelName('SET_CUSTOMER_DETAIL')]: {
            bind: 'set-customer-addresses'
          },
          [getChannelName('ERROR_GET_CUSTOMER_DETAIL')]: {
            bind: 'error-on-get-customer-addresses'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisInsurancesCatalogs = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances-catalogs',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('GET_CATALOGS')]: {
            bind: 'getInsuranceRecords'
          }
        },
        out: {
          [getChannelName('SET_CATALOGS_RECORDS')]: {
            bind: 'success-on-get-records'
          },
          [getChannelName('ERROR_GET_CATALOGS')]: {
            bind: 'error-on-get-records'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisLifeHealthInsurances = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-life-health-insurances',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('POST_INSURANCE_QUOTATION_REQUEST')]: {
            bind: 'postDynamicLifeInsuranceQuotationRequest'
          },
          [getChannelName('PATCH_INSURANCE_QUOTATION_REQUEST')]: {
            bind: 'patchDynamicLifeInsuranceQuotationRequest'
          }
        },
        out: {
          [getChannelName('POST_QUOTATIONS_REQUEST_SUCCESS')]: {
            bind: 'post-quotations-request-success'
          },
          [getChannelName('PATCH_QUOTATIONS_REQUEST_SUCCESS')]: {
            bind: 'patch-quotations-request-success'
          },
          [getChannelName('ERROR_ON_REQUEST')]: {
            bind: 'post-quotations-request-error'
          },
          [getChannelName('ERROR_ON_REQUEST')]: {
            bind: 'patch-quotations-request-error'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisBusinessDocuments = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-business-documents',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      businessDocumentsApiVersion,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('SET_DEVICE_ID')]: {
            bind: 'deviceId'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_GET_LIST_BUSINESS_DOCUMENTS')]: {
            bind: 'getBusinessDocuments'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_POST_BUSINESS_DOCUMENT')]: {
            bind: 'postBusinessDocuments'
          }
        },
        out: {
          [getChannelName('DYNAMIC_LIFE_INSURANCE_SUCCESS_ON_GET_BUSINESS_DOCS')]: {
            bind: 'success-on-get-business-documents'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_ERROR_ON_GET_BUSINESS_DOCS')]: {
            bind: 'error-on-get-business-documents'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_SUCCESS_ON_POST_BUSINESS_DOC')]: {
            bind: 'post-business-documents-success'
          },
          [getChannelName('DYNAMIC_LIFE_INSURANCE_ERROR_ON_POST_BUSINESS_DOC')]: {
            bind: 'error-on-post-business-documents'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisInsurances = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances',
    properties: {
      host: CONFIG.globalServices.host,
      native: !!CONFIG.native,
      version: '0',
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      cellsConnections: {
        in: {
          [getChannelName('SET_VERSION_CREATE_INSURANCE_POLICY')]: {
            bind: 'version'
          },
          [getChannelName('POST_CREATE_INSURANCE_POLICY')]: {
            bind: 'npmPostInsurances'
          },
          [getChannelName('POST_VALIDATE_MONEY')]: {
            bind: 'postInsurancesValidateMoneyLaundering'
          }
        },
        out: {
          [getChannelName('ON_CREATE_INSURANCE_POLICY_SUCCESS')]: {
            bind: 'post-insurance-success'
          },
          [getChannelName('ON_CREATE_INSURANCE_POLICY_ERROR')]: {
            bind: 'error-on-post-insurance'
          },
          [getChannelName('ON_POST_VALIDATE_MONEY_SUCCESS')]: {
            bind: 'post-insurance-validate-money-laundering-success'
          },
          [getChannelName('on_post_validate_money_error')]: {
            bind: 'post-insurance-validate-money-laundering-error'
          }
        }
      }
    }
  };
  const template = {
    tag: 'glomo-opx-template',
    properties: {
      animationType: 'verticalUp',
      headerHeight,
      headerFixed: true,
      iOSFixedHeader: true,
      topOnConfirm: true,
      className: 'header-fixed',
      extraHeaderClass: 'dark-blue-bg',
      cellsConnections: {
        in: {
          [getChannelName('SCROLL_TEMPLATE_TOP')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('SCROLL_ZONE')]: {
            bind: 'scrollItemIntoView'
          },
          LIMP_CHANGE_HEADER_COLOR: {
            bind: 'extraHeaderClass'
          },
          [getChannelName('SHOW_CONFIRM_CHANNEL')]: {
            bind: 'showConfirm'
          },
          [getChannelName('RESET_LAYER_SCROLL')]: {
            bind: 'resetLayerScroll'
          }
        },
        out: {
          [getChannelName('_SCROLL_COMPLETE')]: {
            bind: 'cells-scroll-complete'
          }
        }
      }
    }
  };
  const cellsModalAddAmount = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-add-amount',
    properties: {
      titleHeaderSection: 'dynamic-life-insurance-main-page-header-title',
      titleSection: 'dynamic-life-insurance-modal-add-amount-title-section',
      descriptionSection: 'dynamic-life-insurance-modal-add-amount-description-section',
      buttonLabel: 'dynamic-life-insurance-modal-add-amount-button-continue',
      amountInputLabel: 'dynamic-life-insurance-modal-add-amount-input-label',
      rangeMessageBeforeNumber: 'dynamic-life-insurance-modal-add-amount-range-message-before-number',
      rangeMessageAfterNumber: 'dynamic-life-insurance-modal-add-amount-range-message-after-number',
      notEnoughBalanceBeforeKey: 'dynamic-life-insurance-modal-add-amount-not-enough-balance-after-key',
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      featuresList: featuresList,
      cellsConnections: {
        in: {
          [getChannelName('SET_VALUES_ADD_AMOUNT_PROCESS')]: {
            bind: 'setProperties'
          },
          [getChannelName('OPEN_MODAL_ADD_AMOUNT_PROCESS')]: {
            bind: 'open'
          },
          [getChannelName('SET_NEW_OPERATION')]: {
            bind: 'setProperties'
          },
          [getChannelName('CONTINUE_PROCESS_CLICKED')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('CONTINUE_PROCESS_CLICKED')]: {
            bind: 'cells-modal-add-amount-send-new-amount'
          },
          [getChannelName('ON_BLUR_NEW_AMOUNT')]: {
            bind: 'cells-modal-add-amount-on-blur-input-amount'
          },
          [getChannelName('ON_BLUR_NEW_AMOUNTS')]: {
            bind: 'selected-amount'
          },
          [getChannelName('OPEN_MODAL_INFO_AMOUNT')]: {
            bind: 'cells-modal-add-amount-features-click-link'
          }
        }
      }
    }
  };
  const base = {
    hash: 'dynamic-life-insurance-offer',
    currentPage: {
      url: '/dynamic-life-insurance-offer'
    },
    pages,
    template,
    components: [
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      glomoNavigationHandler,
      spinner(CONFIG),
      glomoDynamicLifeInsuranceDM,
      GlomoOpxDynamicLifeInsuranceDm,
      cellsStepDynamicLifeInsuranceOffer,
      glomoLifeInsuranceBeneficiariesStep,
      cellsModalAddAmount,
      cellsModalSelectorPayment,
      cellsStepProductSelector,
      cellsProductSelectorModal,
      cellsStepTermsAndConditions,
      glomoIconMessage,
      cellsSummaryView,
      glomoModalCardAdvice,
      glomoAnalyticsDynamicLifeInsuranceManager,
      cellsDmGlobalApisCustomers,
      cellsDmGlobalApisBusinessDocuments,
      cellsDmGlobalApisInsurances,
      cellsDmGlobalApisLifeHealthInsurances,
      cellsDmGlobalApisInsurancesCatalogs,
      slotInputCardAdvice,
      analyticsCallMeBack(CmbConfigAnalytics),
      controllerCallMeBack(CmbConfig)
    ]
  };
  pageDmsOutCommonErrors(base.components)();
  if (isNative) {
    base.components.push(glomoOpenDocument(CONFIG));
  }
  const singConnector = require('./common/_sign-connector')(CONFIG)(base);
  singConnector('cells-dm-global-apis-customers', pageName, ['set-customer-addresses', 'error-on-get-customer-addresses']);
  const singConnectorCreate = require('./common/_sign-connector')(CONFIG)(base);
  singConnectorCreate('cells-dm-global-apis-insurances', pageName, ['post-insurance-success', 'error-on-post-insurance']);
  return base;
};
