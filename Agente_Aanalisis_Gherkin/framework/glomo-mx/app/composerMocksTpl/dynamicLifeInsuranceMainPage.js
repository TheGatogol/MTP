/* eslint-disable no-shadow */
'use strict';


module.exports = CONFIG => {
  const { SPINNER: spinner, getLocalCurrency, useNames, toUnderscoreCase, getLanguage, glomoOpenDocument, detailDownloadParams, headerHeight } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('dynamicLifeInsuranceMainPage');
  const analytics = require('./analytics/_dynamicLifeInsurance')(CONFIG);
  const pageDmsOutCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const pageName = 'dynamicLifeInsuranceMainPage';
  const operativePrefix = toUnderscoreCase(pageName).toUpperCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const getChannelNameCallMeBack = name => getChannelName(name).toLowerCase();
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
    lastStep: 1,
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
      1: '1 detalle'
    },
    levels: {
      1: 'seguro vida dinamico',
      2: 'seguro vida dinamico one click'
    }
  };
  const { analyticsCallMeBack, controllerCallMeBack} = require('./common/_redirectCallMeBack');
  const specialProgramsList = [
    {
      id: 1,
      subtitle: 'dynamic-life-insurance-text-special-moments-subtitle',
      title: 'dynamic-life-insurance-text-special-moments-title',
      image: './images/dynamicLife/special-gift.svg',
      iconHeader: './images/dynamicLife/icon-star-gold.svg',
      description: 'dynamic-life-insurance-text-special-moments-description',
      linkText: ''
    }
  ];
  const infoRestrictions = [
    {
      description: 'dynamic-life-insurance-text-restrictions-description-one',
      links: [
        {
          id: '5511020000', icon: '', text: '55 1102 0000'
        }
      ],
      itemClass: 'container-center text-grey'
    },
    {
      description: 'dynamic-life-insurance-text-restrictions-description-two',
      itemClass: 'container-center text-grey'
    }
  ];
  const featuresList = [
    {
      links: [
        { id: 'link1', icon: '', text: 'dynamic-life-insurance-text-amount-insurance-modal' }
      ]
    }
  ];
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
          __bridge_page_dynamicLifeInsuranceMainPage: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('MAIN_PAGE_INIT_PAGE')]: {
            bind: 'init-page'
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
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'dynamic-life-insurance-main-page-header-title',
      setTimeoutHideTooltip: 3000,
      cellsConnections: {
        in: {
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
          [getChannelName('NAVIGATION_MAIN_PAGE_BACK_REQUEST')]: {
            bind: 'click-right-button'
          },
          [getChannelNameCallMeBack('_back_request')]: {
            bind: 'goBack',
            backStep: true,
            skipHistory: true,
            'forward-to-native': true
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
          [getChannelName('NAVIGATION_MAIN_PAGE_TO_PREVIOUS_PAGE')]: {
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
      native: CONFIG.native || false,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      customersApiVersion: CONFIG.globalServices.versions.customers,
      campaignsApiVersion: CONFIG.globalServices.versions.campaigns,
      language: getLanguage(),
      isNativeIos: isNativeIos,
      businessDocumentsApiVersion,
      detailDownloadParams,
      cellsConnections: {
        in: {
          contract_product_section_oc_banner_dynamic_life_insurance_clicked: {
            bind: 'initOportunities'
          },
          navigation_from_futura_dashboard: {
            bind: 'initOportunities'
          },
          dashboard_oc_banner_dynamic_life_insurance_clicked: {
            bind: 'initOportunities'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'initOportunities'
          },
          global_user_id: {
            bind: 'customerId'
          },
          oc_offer_channel: {
            bind: 'initOportunities'
          },
          global_tsec_channel: {
            bind: 'getTsec'
          },
          global_deviceid_channel: {
            bind: 'deviceId'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'showConfimExitModal'
          },
          global_set_offers: {
            bind: 'successfullOnGetOffers'
          },
          [getChannelName('MAIN_PAGE_INIT_PAGE')]: {
            bind: 'init'
          },
          [getChannelName('OPEN_MODAL_ALL_BENEFITS')]: {
            bind: 'viewAllCoveragesAssistances'
          },
          [getChannelName('OPEN_MODAL_KNOW_MORE')]: {
            bind: 'openModalKnowMore'
          },
          [getChannelName('CLICK_LINK_NOTICE')]: {
            bind: 'openModalNoticeQuestionnaire'
          },
          [getChannelName('FINISH_PROCESS_CUSTOMIZE_INSURANCE')]: {
            bind: 'getInsuranceProductSettings'
          },
          [getChannelName('REQUEST_HEALTH_QUESTIONS_VALIDATE')]: {
            bind: 'continueHealthQuestions'
          },
          [getChannelName('CONTINUE_PROCESS_CLICKED')]: {
            bind: 'continueToQuotation'
          },
          [getChannelName('TOGGLE_UNMASKED_ADDRESS_HANDLER')]: {
            bind: 'toggleMaskedAddressHandler'
          },
          [getChannelName('TOGGLE_UNMASKED_EMAIL_HANDLER')]: {
            bind: 'toggleMaskedEmailHandler'
          },
          [getChannelName('SET_CUSTOMER_ADDRESS_UNMASKED')]: {
            bind: 'successfullOnGetCustomersAddressesUnmasked'
          },
          [getChannelName('SET_CUSTOMER_EMAIL_UNMASKED')]: {
            bind: 'successfullOnGetCustomersDetailUnmasked'
          },
          global_login_success_indicators: {
            bind: 'successfullOnGetCustomers'
          },
          [getChannelName('SEND_INFO_TO_OFFER_PAGE')]: {
            bind: 'sendInfoToOfferPage'
          },
          [getChannelName('GENERAL_CONDITIONS_LINK')]: {
            bind: 'getListBusinessDocument'
          },
          [getChannelName('OPEN_PDF_GENERAL_CONDITIONS')]: {
            bind: 'getListBusinessDocument'
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
          [getChannelName('CLICK_LINK_INFO_CARD')]: {
            bind: 'openModalInfoCoverages'
          },
          [getChannelName('ON_BLUR_NEW_AMOUNT')]: {
            bind: 'receiveCustomInsuredAmount'
          },
          [getChannelName('ON_BLUR_NEW_AMOUNTS')]: {
            bind: 'receiveCustomInsuredAmount'
          },
          [getChannelName('ADDITIONAL_CHECKED_CARD')]: {
            bind: 'checkAdditionalCoverage'
          },
          [getChannelName('ADDITIONAL_UNCHECKED_CARD')]: {
            bind: 'uncheckAdditionalCoverage'
          },
          [getChannelName('CLICK_EDIT_AMOUNT_CARD')]: {
            bind: 'openModalEditAmountCoverage'
          },
          [getChannelName('OPEN_MODAL_INFO_AMOUNT')]: {
            bind: 'openModalInfoAmount'
          },
          [getChannelName('CLICK_CLOSE_HEADER_MODAL')]: {
            bind: 'validateContinueClose'
          },
          [getChannelName('SUCCESS_GET_INSURANCES_OFFERS_DETAIL')]: {
            bind: 'successfullOnGetInsurancesOffers'
          },
          [getChannelName('SUCCESS_GET_INSURANCES_OFFERS_SIMULATE')]: {
            bind: 'successfullOnGetInsurancesOffersSimulate'
          },
          [getChannelName('ERROR_GET_INSURANCES_OFFERS_SIMULATE')]: {
            bind: 'errorOnRequestOffersSimualte'
          },
          [getChannelName('ERROR_ON_REQUEST')]: {
            bind: 'errorOnRequest'
          },
          [getChannelName('SUCCESS_INSURANCE_PRODUCT_SETTINGS')]: {
            bind: 'successfullOnGetInsurancesProduct'
          },
          [getChannelName('POST_QUOTATIONS_REQUEST_SUCCESS')]: {
            bind: 'successfullOnPostQuotations'
          },
          [getChannelName('PATCH_QUOTATIONS_REQUEST_SUCCESS')]: {
            bind: 'successfullOnPatchQuotations'
          },
          [getChannelName('NAVIGATION_MAIN_PAGE_BACK_REQUEST')]: {
            bind: 'showConfimExitModal'
          },
          DYNAMIC_LIFE_INSURANCE_EDIT_COVERAGE_AMOUNT_PAGE_SEND_NEW_AMOUNT_COVERAGE: {
            bind: 'editAmountAdditionalCoverage'
          },
          DYNAMIC_LIFE_INSURANCE_MAIN_PAGE_OPEN_MODAL_WARNING_USD_ACCEPT: {
            bind: 'reSimulateOnPesos'
          },
          DYNAMIC_LIFE_INSURANCE_OFFER_PAGE_OPEN_MODAL_COVERAGE_AMOUNT: {
            bind: 'openModalCoveragesAdditionals'
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
          DYNAMIC_LIFE_INSURANCE_ERROR: {
            bind: 'acceptModalError'
          },
          DYNAMIC_LIFE_INSURANCE_ERROR_CANCEL: {
            bind: 'acceptModalError'
          },
          global_open_document_url_success: {
            bind: 'closeVeil'
          },
          global_open_document_url_error: {
            bind: 'onErrorPostDocument'
          }
        },
        out: {
          __bridge_cancelled_back_navigation: {
            bind: 'onBackButtonTaped'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-modal-dynamic-life-insurance'
          },
          global_generic_error_dinamic: {
            bind: 'dynamic-life-insurance-dm-general-error'
          },
          [getChannelName('SET_FEATURES_LIST')]: {
            bind: 'set-features-list'
          },
          [getChannelName('SHOW_PARTIAL_COVERAGES')]: {
            bind: 'show-partial-coverages'
          },
          [getChannelName('SET_ALL_BENEFITS')]: {
            bind: 'set-all-coverages-and-assistances'
          },
          [getChannelName('OPEN_MODAL_ALL_COVERAGES_AND_ASSISTANCES')]: {
            bind: 'open-all-coverages-and-assistances-modal'
          },
          [getChannelName('SET_OPERATION')]: {
            bind: 'set-operation-life-insurance'
          },
          [getChannelName('OPEN_HEALTH_QUESTIONNAIRE')]: {
            bind: 'open-health-questionnaire'
          },
          [getChannelName('SET_NOTICES_QUESTIONNAIRE')]: {
            bind: 'set-notices-questionnaire'
          },
          [getChannelName('OPEN_MODAL_HEALTH_QUESTIONNAIRE')]: {
            bind: 'open-modal-health-questionnaire'
          },
          [getChannelName('CONTINUE_PROCESS')]: {
            bind: 'continue-process'
          },
          [getChannelName('SET_VALUES_ADD_AMOUNT_PROCESS')]: {
            bind: 'set-values-modal-add-amount'
          },
          [getChannelName('OPEN_MODAL_ADD_AMOUNT_PROCESS')]: {
            bind: 'open-modal-add-amount'
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
          [getChannelName('SEND_PERSIST_DATA_TO_OFFER')]: {
            bind: 'persist-data-to-steps',
            link: {
              page: 'dynamicLifeInsuranceOfferPage'
            }
          },
          [getChannelName('OPEN_EDIT_COVERAGE_AMOUNT')]: {
            bind: 'open-modal-edit-amount-coverage',
            link: {
              page: 'dynamicLifeInsuranceEditCoverageAmountPage'
            }
          },
          FIRE_DYNAMICS_LIFE_INSURANCE_ON_CLICK_START: {
            bind: 'incia-flujo-analitycs-start'
          },
          FIRE_DYNAMICS_LIFE_INSURANCE_PAGE_VISIT: {
            bind: 'incia-flujo-analitycs-visit'
          },
          [getChannelName('SET_EMAIL_MASKED')]: {
            bind: 'set-email-info-mask'
          },
          [getChannelName('SET_ADDRESS_MASKED')]: {
            bind: 'set-address-info-mask'
          },
          [getChannelName('SET_EMAIL_UNMASKED')]: {
            bind: 'set-email-info-unmask'
          },
          [getChannelName('SET_ADDRESS_UNMASKED')]: {
            bind: 'set-address-info-unmask'
          },
          [getChannelName('SET_CUSTOMER_ID')]: {
            bind: 'set-customer-id'
          },
          [getChannelName('SHOW_UNMASKED_ADDRESS_REQUEST')]: {
            bind: 'show-unmasked-address'
          },
          [getChannelName('SHOW_UNMASKED_EMAIL_REQUEST')]: {
            bind: 'show-unmasked-email'
          },
          [getChannelName('GET_CUSTOMER')]: {
            bind: 'get-customer-info'
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
          [getChannelName('SET_DEVICE_ID_TO_DOCUMENTS_API')]: {
            bind: 'set-device-id'
          },
          [getChannelName('CLOSE_MODAL_COVERAGE_ADITIONALS')]: {
            bind: 'close-open-modal-list-coverage'
          },
          [getChannelName('TO_ANALITYCS_DATA_PAYMENT')]: {
            bind: 'to-analitycs-data-payment'
          },
          [getChannelName('TO_ANALITYCS_ERROR')]: {
            bind: 'to-analitycs-error-comunication'
          },
          [getChannelName('ACCEPT_MODAL_ERROR')]: {
            bind: 'accept-modal-error-clicked',
            skipHistory: true
          },
          global_alert_modal_close: {
            bind: 'accept-modal-error-clicked'
          },
          [getChannelName('GET_OFFER_DETAIL')]: {
            bind: 'get-offer-detail'
          },
          [getChannelName('GET_OFFER_SIMUALTE')]: {
            bind: 'get-offer-simualte'
          },
          [getChannelName('GET_INSURANCES_PRODUCT_SETTINGS')]: {
            bind: 'get-insurances-product-settings'
          },
          [getChannelName('POST_INSURANCE_QUOTATION_REQUEST')]: {
            bind: 'post-insurance-quotation-request'
          },
          [getChannelName('PATCH_INSURANCE_QUOTATION_REQUEST')]: {
            bind: 'patch-insurance-quotation-request'
          },
          global_retargeting_go_next_step: {
            bind: 'persist-data-to-steps'
          },
          global_open_document_url: {
            bind: 'open-document-by-url'
          },
          global_retargeting_operation_life_insurance_coverage: {
            bind: 'show-partial-coverages'
          },
          global_retargeting_operation_life_insurance: {
            bind: 'set-operation-life-insurance'
          },
          global_retargeting_initialize: {
            bind: 'set-operation-life-insurance'
          },
          global_retargeting_input_amount_select: {
            bind: 'on-update-quotaion-data'
          }
        }
      }
    }
  };
  const glomoAggregationLifeInsuranceInfo = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-aggregation-life-insurance-info',
    properties: {
      headerImageSrc: './images/dynamicLife/logo-dynamic-life-insurance.svg',
      summaryHeaderText: 'dynamic-life-insurance-main-summary-header-text',
      featuresTitleText: 'dynamic-life-insurance-main-features-title-text',
      allBenefitsText: 'dynamic-life-insurance-main-all-coverages-text',
      programsTitleText: 'dynamic-life-insurance-main-programs-title-text',
      programsDescriptionText: 'dynamic-life-insurance-main-programs-description-text',
      considerationsTitleText: 'dynamic-life-insurance-main-considerations-title-text',
      considerationsDescriptionText: 'dynamic-life-insurance-main-considerations-descriptions-text',
      adviceConsiderationsText: 'dynamic-life-insurance-main-advice-considerations-text',
      showDataAddressText: 'dynamic-life-insurance-main-unmask-info-text',
      showDataEmailText: 'dynamic-life-insurance-main-unmask-info-text',
      continueTextButton: 'dynamic-life-insurance-main-custom-insurance-continue-text',
      specialProgramsList: specialProgramsList,
      infoRestrictions: infoRestrictions,
      maskCharsUserInfo: '•',
      stickySecondaryButton: 'dynamic-life-insuance-cmb-button-text',
      cellsConnections: {
        in: {
          [getChannelName('SHOW_PARTIAL_COVERAGES')]: {
            bind: 'benefitsInfo'
          },
          [getChannelName('SET_FEATURES_LIST')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_OPERATION')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_EMAIL_MASKED')]: {
            bind: 'emailInfo'
          },
          [getChannelName('SET_ADDRESS_MASKED')]: {
            bind: 'addressInfo'
          },
          [getChannelName('SET_EMAIL_UNMASKED')]: {
            bind: 'setProperties'
          },
          [getChannelName('SET_ADDRESS_UNMASKED')]: {
            bind: 'setProperties'
          },
          [getChannelNameCallMeBack('_call_me_back_sticky_button')]: {
            bind: 'showStickyButton'
          }
        },
        out: {
          [getChannelName('OPEN_MODAL_ALL_BENEFITS')]: {
            bind: 'open-all-benefits-modal'
          },
          [getChannelName('OPEN_MODAL_KNOW_MORE')]: {
            bind: 'open-card-advice'
          },
          [getChannelName('TOGGLE_UNMASKED_ADDRESS_HANDLER')]: {
            bind: 'toggle-masked-address-handler'
          },
          [getChannelName('TOGGLE_UNMASKED_EMAIL_HANDLER')]: {
            bind: 'toggle-masked-email-handler'
          },
          [getChannelName('FINISH_PROCESS_CUSTOMIZE_INSURANCE')]: {
            bind: 'continue-process-insurance'
          },
          [getChannelName('TO_PHONE_CALL_CHANNEL')]: {
            bind: 'request-call-center'
          },
          global_action_launcher_dialer: {
            bind: 'request-call-center',
            'forward-to-native': true
          },
          [getChannelNameCallMeBack('_call_me_back_go_next_step')]: {
            bind: 'continue-process-insurance'
          },
          [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
            bind: 'secondary-button-pressed'
          },
          global_retargeting_form_submission: {
            bind: 'continue-process-insurance'
          }
        }
      }
    }
  };
  const cellsModalAccordionList = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-accordion-list',
    properties: {
      iOSFixedHeader: isNativeIos,
      closeButton: 'dynamic-life-insurance-close-button-modal-coverages-assistances-text',
      cellsConnections: {
        in: {
          [getChannelName('SET_ALL_BENEFITS')]: {
            bind: 'items'
          },
          [getChannelName('OPEN_MODAL_ALL_COVERAGES_AND_ASSISTANCES')]: {
            bind: 'open'
          }
        },
        out: {
          [getChannelName('GENERAL_CONDITIONS_LINK')]: {
            bind: 'cells-modal-accordion-list-click-link'
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
      notEnoughBalanceBeforeKey: 'dynamic-life-insurance-modal-add-amount-min-key',
      notEnoughBalanceAfterKey: 'dynamic-life-insurance-modal-add-amount-max-key',
      currencyCode: getLocalCurrency(),
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      featuresList: featuresList,
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('SET_VALUES_ADD_AMOUNT_PROCESS')]: {
            bind: 'setProperties'
          },
          [getChannelName('OPEN_MODAL_ADD_AMOUNT_PROCESS')]: {
            bind: 'open'
          },
          [getChannelName('OPEN_MODAL_UPDATE_DATA')]: {
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
          },
          global_retargeting_go_next_step: {
            bind: 'cells-modal-add-amount-send-new-amount'
          }
        }
      }
    }
  };
  const glomoLifeInsuranceHealthQuestions = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'glomo-life-insurance-health-questions',
    properties: {
      productId: '4046',
      planId: '041',
      headerTitleText: 'dynamic-life-insurance-questionnaire-lifehealth-header-title-text',
      titleSectionText: 'dynamic-life-insurance-questionnaire-lifehealth-section-title-text',
      descriptionSectionText: 'dynamic-life-insurance-questionnaire-lifehealth-section-description-text',
      instructionsText: 'dynamic-life-insurance-questionnaire-lifehealth-section-instructions-text',
      importantInstructionText: 'dynamic-life-insurance-questionnaire-lifehealth-section-important-instructions-text',
      messageText: 'dynamic-life-insurance-questionnaire-lifehealth-section-message-text',
      errorMessageText: 'dynamic-life-insurance-questionnaire-lifehealth-section-error-message-text',
      buttonContinueText: 'dynamic-life-insurance-questionnaire-lifehealth-section-btn-continue-text',
      iOSFixedHeader: isNativeIos,
      cellsConnections: {
        in: {
          [getChannelName('OPEN_HEALTH_QUESTIONNAIRE')]: {
            bind: 'setQuestions'
          },
          [getChannelName('SET_NOTICES_QUESTIONNAIRE')]: {
            bind: 'notices'
          },
          [getChannelName('OPEN_MODAL_HEALTH_QUESTIONNAIRE')]: {
            bind: 'open'
          },
          [getChannelName('CONTINUE_PROCESS')]: {
            bind: 'continueProcess'
          },
          [getChannelName('OPEN_MODAL_ADD_AMOUNT_PROCESS')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('REQUEST_HEALTH_QUESTIONS_VALIDATE')]: {
            bind: 'request-health-questions-validate'
          },
          [getChannelName('CLICK_LINK_NOTICE')]: {
            bind: 'click-link-notices'
          },
          global_retargeting_go_next_step: {
            bind: 'request-health-questions-validate'
          }
        }
      }
    }
  };
  const cellsModalCardSelect = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'cells-modal-card-select',
    properties: {
      iOSFixedHeader: isNativeIos,
      active: true,
      preventClose: false,
      cardSelectClass: 'checkbox-customize',
      titleModalHeaderText: 'dynamic-life-insurance-main-page-header-title',
      titleSectionText: 'dynamic-life-insurance-main-modal-coverages-assistances-title',
      descriptionSectionText: 'dynamic-life-insurance-main-modal-coverages-assistances-text',
      buttonLabel: 'dynamic-life-insurance-step-1-btn-continue-text',
      cellsConnections: {
        in: {
          [getChannelName('SET_PROPERTIES_CARDS_ADDITIONAL_COVERAGES')]: {
            bind: 'setProperties'
          },
          [getChannelName('NEW_PROPERTIES_CARDS_ADDITIONAL_COVERAGES')]: {
            bind: 'cardList'
          },
          [getChannelName('OPEN_ADDITIONAL_COVERAGES_MODAL')]: {
            bind: 'open'
          },
          [getChannelName('OPEN_MODAL_UPDATE_DATA')]: {
            bind: 'setProperties'
          },
          [getChannelName('CLOSE_MODAL_COVERAGE_ADITIONALS')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('ADDITIONAL_CHECKED_CARD')]: {
            bind: 'cells-modal-card-select-checked-card'
          },
          [getChannelName('ADDITIONAL_UNCHECKED_CARD')]: {
            bind: 'cells-modal-card-select-unchecked-card'
          },
          [getChannelName('SEND_INFO_TO_OFFER_PAGE')]: {
            bind: 'cells-modal-card-select-process-data'
          },
          [getChannelName('OPEN_PDF_GENERAL_CONDITIONS')]: {
            bind: 'cells-modal-card-select-click-link-features'
          },
          [getChannelName('CLICK_LINK_INFO_CARD')]: {
            bind: 'cells-modal-card-select-click-link-info-card'
          },
          [getChannelName('CLICK_EDIT_AMOUNT_CARD')]: {
            bind: 'cells-modal-card-select-click-option-amount-card'
          },
          [getChannelName('CLICK_CLOSE_HEADER_MODAL')]: {
            bind: 'cells-modal-card-select-close-click-icon'
          },
          global_retargeting_insurance_checked_card: {
            bind: 'cells-modal-card-select-checked-card'
          },
          global_retargeting_insurance_uncheck_checked_card: {
            bind: 'cells-modal-card-select-unchecked-card'
          }
        }
      }
    }
  };
  const cellDmGlobalApisCustomers = {
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
          [getChannelName('SHOW_UNMASKED_ADDRESS_REQUEST')]: {
            bind: 'getCustomerAddresses'
          },
          [getChannelName('SHOW_UNMASKED_EMAIL_REQUEST')]: {
            bind: 'getCustomerContacts'
          }
        },
        out: {

          [getChannelName('SET_CUSTOMER_ADDRESS_UNMASKED')]: {
            bind: 'set-customer-addresses'
          },
          [getChannelName('error_get_customer_detail')]: {
            bind: 'error-on-get-customer-addresses'
          },
          [getChannelName('SET_CUSTOMER_EMAIL_UNMASKED')]: {
            bind: 'set-customer-contacts'
          },
          [getChannelName('error_get_email_unmasked')]: {
            bind: 'error-on-get-customer-contacts'
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
          [getChannelName('SET_DEVICE_ID_TO_DOCUMENTS_API')]: {
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
  const cellsDmGlobalApisInsurancesOffers = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances-offers',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('GET_OFFER_DETAIL')]: {
            bind: 'getInsurancesOfferDetail'
          },
          [getChannelName('GET_OFFER_SIMUALTE')]: {
            bind: 'postInsurancesOfferSimulate'
          }
        },
        out: {
          [getChannelName('SUCCESS_GET_INSURANCES_OFFERS_DETAIL')]: {
            bind: 'success-get-insurances-offers-detail'
          },
          [getChannelName('SUCCESS_GET_INSURANCES_OFFERS_SIMULATE')]: {
            bind: 'success-get-insurances-offers-simulate'
          },
          [getChannelName('ERROR_ON_REQUEST')]: {
            bind: 'error-get-insurances-offers-detail'
          },
          [getChannelName('ERROR_GET_INSURANCES_OFFERS_SIMULATE')]: {
            bind: 'error-get-insurances-offers-simulate'
          }
        }
      }
    }
  };
  const cellsDmGlobalApisInsurancesProducts = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-insurances-products',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [getChannelName('GET_INSURANCES_PRODUCT_SETTINGS')]: {
            bind: 'getInsuranceProductSettings'
          }
        },
        out: {
          [getChannelName('SUCCESS_INSURANCE_PRODUCT_SETTINGS')]: {
            bind: 'success-insurance-product-settings'
          },
          [getChannelName('ERROR_ON_REQUEST')]: {
            bind: 'error-insurance-product-settings'
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
  const analyticsDynamicLifeInsurance = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-analytics-dynamic-life-insurance-manager',
    familyPath: '@glomo-web-components/glomo-analytics-dynamic-life-insurance-manager',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          DYNAMIC_LIFE_INSURANCE_OFFER_PAGE_CONTINUE_PRESSED: {
            bind: 'fireDynamicLifeInsuranceBeneficiaries'
          },
          FIRE_DYNAMICS_LIFE_INSURANCE_ON_CLICK_START: {
            bind: 'fireDynamicLifeInsuranceAppOnclickStart'
          },
          dashboard_oc_banner_dynamic_life_insurance_clicked: {
            bind: 'fireDynamicLifeInsuranceHuella'
          },
          FIRE_DYNAMICS_LIFE_INSURANCE_PAGE_VISIT: {
            bind: 'fireDynamicLifeInsuranceAppPageVisit'
          },
          [getChannelName('OPEN_MODAL_ALL_BENEFITS')]: {
            bind: 'started1'
          },
          [getChannelName('OPEN_MODAL_KNOW_MORE')]: {
            bind: 'started2'
          },
          [getChannelName('TOGGLE_UNMASKED_ADDRESS_HANDLER')]: {
            bind: 'started3'
          },
          [getChannelName('TOGGLE_UNMASKED_EMAIL_HANDLER')]: {
            bind: 'started4'
          },
          [getChannelName('FINISH_PROCESS_CUSTOMIZE_INSURANCE')]: {
            bind: 'started6'
          },
          [getChannelName('TO_PHONE_CALL_CHANNEL')]: {
            bind: 'started5'
          },
          [getChannelName('OPEN_MODAL_HEALTH_QUESTIONNAIRE')]: {
            bind: 'fireDynamicLifeInsuranceQuestionnaire'
          },
          [getChannelName('TO_ANALITYCS_DATA_PAYMENT')]: {
            bind: 'fireDynamicLifeInsuranceAmount'
          },
          [getChannelName('OPEN_ADDITIONAL_COVERAGES_MODAL')]: {
            bind: 'fireDynamicLifeInsuranceAdditionalCoverages'
          },
          [getChannelName('SEND_PERSIST_DATA_TO_OFFER')]: {
            bind: 'fireDynamicLifeInsurancePersonalized'
          },
          [getChannelName('TO_ANALITYCS_ERROR')]: {
            bind: 'fireDynamicLifeInsuranceError'
          }
        },
        out: {
          [getChannelName('ANALYTICS_CLICK_START')]: {
            bind: 'analytics-on-click-start',
            analytics: analytics.APP_ONCLICK_START
          },
          [getChannelName('_ANALYTICS_VISIT')]: {
            bind: 'analytics-app-page-visit',
            analytics: analytics.APP_PAGE_VISIT
          },
          [getChannelName('_ANALYTICS_APP_STARTED')]: {
            bind: 'analytics-app-started',
            analytics: analytics.APP_STARTED
          },
          [getChannelName('_ANALYTICS_APP_STEP_2')]: {
            bind: 'analytics-app-step-2',
            analytics: analytics.APP_STEP_2
          },
          [getChannelName('_ANALYTICS_APP_STEP_3')]: {
            bind: 'analytics-app-step-3',
            analytics: analytics.APP_STEP_3
          },
          [getChannelName('_ANALYTICS_APP_STEP_4')]: {
            bind: 'analytics-app-step-4',
            analytics: analytics.APP_STEP_4
          },
          [getChannelName('_ANALYTICS_APP_STEP_5')]: {
            bind: 'analytics-app-step-5',
            analytics: analytics.APP_STEP_5
          },
          [getChannelName('_ANALYTICS_HUELLA')]: {
            bind: 'analytics-app-huella',
            analytics: analytics.APP_HUELLA_VIEW
          },
          [getChannelName('_ANALYTICS_APP_ERROR')]: {
            bind: 'analytics-app-error',
            analytics: analytics.APP_ERROR
          },
          DYNAMICS_PERSIST: {
            bind: 'persist-dynamics'
          }
        }
      }
    }
  };
  const base = {
    hash: 'dynamic-life-insurance-page',
    currentPage: {
      url: '/dynamic-life-insurance-page'
    },
    pages: pages,
    template: {
      tag: 'glomo-opx-template',
      properties: {
        animationType: 'verticalUp',
        headerHeight,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        topOnConfirm: true,
        className: 'header-fixed',
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            dynamic_life_insurance_scroll_zone: {
              bind: 'scrollItemIntoView'
            },
            [getChannelName('OPEN_CONFIRM_CHANNEL')]: {
              bind: 'open'
            },
            dynamic_life_insurance_close_confirm: {
              bind: 'close'
            },
            [getChannelName('SHOW_CONFIRM_CHANNEL')]: {
              bind: 'showConfirm'
            }
          },
          out: {
            dynamic_life_insurance_scroll_complete: {
              bind: 'cells-scroll-complete'
            },
            dynamic_life_insurance_opx_scroll_complete: {
              bind: 'opx-template-content-scroll'
            }
          }
        }
      }
    },
    components: [
      spinner(CONFIG),
      cellsHandleLifeCycle,
      cellsMoleculeHeader,
      glomoNavigationHandler,
      glomoDynamicLifeInsuranceDM,
      glomoAggregationLifeInsuranceInfo,
      glomoLifeInsuranceHealthQuestions,
      cellsModalAddAmount,
      cellsModalCardSelect,
      cellsModalAccordionList,
      cellDmGlobalApisCustomers,
      cellsDmGlobalApisBusinessDocuments,
      cellsDmGlobalApisInsurancesOffers,
      cellsDmGlobalApisInsurancesProducts,
      cellsDmGlobalApisLifeHealthInsurances,
      analyticsDynamicLifeInsurance,
      analyticsCallMeBack(CmbConfigAnalytics),
      controllerCallMeBack(CmbConfig)
    ]
  };
  pageDmsOutCommonErrors(base.components)();
  if (isNative) {
    const OPEN_DOCUMENT = glomoOpenDocument(CONFIG);
    base.components.push(OPEN_DOCUMENT);
  }
  const singConnector = require('./common/_sign-connector')(CONFIG)(base);
  singConnector('cells-dm-global-apis-customers', pageName, ['set-customer-addresses', 'set-customer-contacts', 'error-on-get-customer-addresses', 'error-on-get-customer-contacts']);
  return base;
};
