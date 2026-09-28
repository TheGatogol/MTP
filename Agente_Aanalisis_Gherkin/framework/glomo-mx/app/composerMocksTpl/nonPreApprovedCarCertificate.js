'use strict';

module.exports = (config) => {
  const pageName = 'nonPreApprovedCarCertificate';
  const { glomoOpenDocument, connectionsOut, getLocalCurrency, getLanguage, createPrefixFromPageName, toUnderscoreCase, useNames, detailDownloadParams: detailDocument, createSpinner } = require('./common/helpers/_utils');
  const prefix = createPrefixFromPageName(pageName);
  const spinner = createSpinner(config);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const native = config.native || false;
  const isNativeIos = config.nativeIos || false;
  const pages = require('./common/_pages')(config)(pageName);
  detailDocument.formatter = 'no-op';
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(config);
  const operativePrefix = toUnderscoreCase(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const getChannelNameCallMeBack = nameChannel => getChannelName(nameChannel).toLowerCase();
  const analyticsNpaCarCertificate = require('./analytics/_nonPreApprovedCarCertificate')(config);
  const requiredToken = config.globalServices.requiredToken || 'tsec';
  const host = config.globalServices.host;
  const { controllerCallMeBack, analyticsCallMeBack } = require('./common/_redirectCallMeBack');

  const cmbConfig = {
    operativeName: pageName,
    configEntryPoints: {
      showInHeader: true,
      showInSticky: true,
      showInSummary: true
    },
    onlyCallMeBack: true,
    lastStep: 4,
    useFeatureFlag: true,
    recoverySettings: true
  };

  const customerTerms = [ {
    termType: { id: 'BD-MX-AA-AUTBUR-003' },
    acceptanceMethod: { id: 'TA001' },
    origin: { id: 'RN' },
    referenceNumber: '',
    acceptanceMessages: [
      { value: 'BDAUTBUR08' },
      { value: 'BDAUTBUR09' },
      { value: 'BDUSODPS09' }
    ]
  } ];

  const cmbConfigAnalytics = {
    operativeName: pageName,
    steps: {
      1: '1 cotizacion',
      2: '2 datos',
      3: '3 terminos y condiciones',
      4: '4 confirmacion'
    },
    levels: {
      1: 'prestamos',
      2: 'contratacion credito auto'
    },
    buttons: {
      summary: '4 confirmacion'
    }
  };

  spinner.properties.className = 'solid-spinner';
  const base = {
    hash: 'nonPreApprovedCarCertificate',
    currentPage: {
      url: '/non-pre-approved-car-certificate'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        extraHeaderClass: 'bbva-core-blue',
        className: isNativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: isNativeIos,
        disableScrollLock: true,
        headerFixed: true,
        cellsConnections: {
          in: {
            [prefix + '_recalculando_header']: {
              bind: 'recalculateHeader'
            },
            [prefix + '_recalculando_header_text_focus_in']: {
              bind: 'recalculateHeader'
            },
            [prefix + '_recalculando_header_text_focus_out']: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      spinner,
      controllerCallMeBack(cmbConfig),
      analyticsCallMeBack(cmbConfigAnalytics),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          rightIconSize: '20',
          continue: 'dashboard',
          titleName: 'no-pre-approved-car-certificate-blocking-case',
          setTimeoutHideTooltip: 3000,
          titleTooltip: 'no-pre-approved-car-certificate-tooltip-title',
          contentLink: 'no-pre-approved-car-certificate-tooltip-content-link',
          contentTooltip: 'no-pre-approved-car-certificate-tooltip-content',
          tooltipBackgroundColor: 'white',
          tooltipTextColor: 'black',
          tooltipCloseColor: '#1973b8',
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'setColorsTooltip'
              },
              car_loan_header_icon_CMB: {
                bind: 'rightSecondaryIcon'
              },
              car_loan_flag_tooltip_CMB: {
                bind: 'hasDisplayedTooltip'
              },
              car_loan_show_tooltip_time: {
                bind: 'setTimeoutShowTooltip'
              }
            },
            out: {
              OC_OPEN_MODAL: {
                bind: 'click-right-button'
              },
              [prefix + '_HEADER_RIGHT_ICON_TAPPED']: {
                bind: 'click-right-button'
              },
              [getChannelNameCallMeBack('_call_me_back_init_header_configuration')]: {
                bind: 'click-right-secondary-button'
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
          pageName,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_nonPreApprovedCarCertificate: {
                bind: 'init'
              }
            },
            out: {
              [prefix + '_INIT_PAGE']: {
                bind: 'init-page',
                analytics: analyticsNpaCarCertificate._getPageVisitRaw(pageName)
              },
              [prefix + '_RESET_PAGE']: {
                bind: 'reset'
              },
              [prefix + '_recalculando_header']: {
                bind: 'init-page'
              },
              [getChannelNameCallMeBack('_call_me_back_initialize')]: {
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
      },
      {
        zone: 'app__main',
        tag: 'bbva-analytics-manager-oc-car-loan',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              [prefix + '_CAR_DATA_STEP_COMPLETED']: {
                bind: 'carInfo'
              },
              [prefix + '_STEP_COMPLETE']: {
                bind: 'manageSteps'
              },
              [prefix + '_OTP_STEP_COMPLETE']: {
                bind: 'onLastStepChanged'
              },
              [prefix + '_APP_STARTED_ITEM_CLICK']: {
                bind: 'onAppStartedItemClick'
              },
              [prefix + '_APP_STARTED_PDF']: {
                bind: 'onAppStartedItemClick'
              },
              [prefix + '_APP_STARTED_CREATE_FULL_SCREEN_MODAL']: {
                bind: 'onAppStartedItemClick'
              },
              [prefix + '_APP_STARTED_COMMISSION_OPENNING_SCREEN_FULL_MODAL']: {
                bind: 'onAppStartedItemClick'
              },
              [prefix + '_APP_FORM_STARTED']: {
                bind: 'onAppStartedItemClick'
              },
              [prefix + 'SEND_MODAL_TO_ANALYTICS']: {
                bind: 'manageSuccessModals'
              },
              [prefix + '_OPERATION_ID_ANALYTICS']: {
                bind: 'operationNumber'
              },
              non_pre_approved_car_certificate_user_form_advisory: {
                bind: 'advisoryInfo'
              }
            },
            out: {
              analytics_second_step: {
                bind: 'analytics-second-step',
                analytics: analyticsNpaCarCertificate._getAppStepWithLevel3(pageName, 2, '2 datos')
              },
              analytics_third_step: {
                bind: 'analytics-third-step',
                analytics: analyticsNpaCarCertificate._getAppStepWithLevel3(pageName, 3, '3 terminos y condiciones')
              },
              analytics_fourth_step: {
                bind: 'analytics-fourth-step',
                analytics: analyticsNpaCarCertificate._getAppStepWithLevel3(pageName, 4, '4 confirmacion')
              },
              analytics_otp_step: {
                bind: 'analytics-otp-step',
                analytics: analyticsNpaCarCertificate._getAppStepWithLevel3(pageName, 5, '5 otp')
              },
              [prefix + '_APP_STARTED_ANALYTICS']: {
                bind: 'analytics-app-started',
                analytics: analyticsNpaCarCertificate._getDynamicAppStarted(pageName)
              },
              [prefix + 'analytics-unfit-success-step']: {
                bind: 'analytics-unfit-success-step',
                analytics: analyticsNpaCarCertificate._getAppCompleted(pageName, 'badCreditHistory')
              },
              [prefix + 'analytics-not-completed-success-step']: {
                bind: 'analytics-not-completed-success-step',
                analytics: analyticsNpaCarCertificate._getAppCompleted(pageName, 'quoteNotCompleted')
              },
              [prefix + 'analytics-younger-success-step']: {
                bind: 'analytics-younger-success-step',
                analytics: analyticsNpaCarCertificate._getAppCompleted(pageName, 'younger')
              },
              [prefix + 'analytics-completed-success-step']: {
                bind: 'analytics-completed-success-step',
                analytics: analyticsNpaCarCertificate._getAppCompleted(pageName)
              },
              [prefix + 'analytics-iva-interaction-link']: {
                bind: 'npa-app-whitout-iva-interaction-link',
                analytics: analyticsNpaCarCertificate._getInteractionLink(pageName, 'comision por apertura')
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
          backAction: 'npa-car-loan-close',
          cellsConnections: {
            in: {
              [prefix + '_UPDATE_CONTINUE_NAVIGATION']: {
                bind: 'continue'
              },
              [prefix + '_DATA_INFO_COMPLETE']: {
                bind: 'navigate'
              },
              [prefix + '_SEND_ATM_LOCATOR_PAGE']: {
                bind: 'navigate'
              },
              [prefix + '_ACCEPT_BLOCKING_CASE']: {
                bind: 'goBack'
              },
              [prefix + '_CANCEL_BLOCKING_CASE']: {
                bind: 'goBack'
              },
              [prefix + '_BACKSTEP']: {
                bind: 'goBack'
              }
            },
            out: {
              NPA_CAR_LOAN_NAVIGATE_TO_SUCCESS_RECEIPT: {
                bind: 'navigation-to-success-receipt',
                link: {
                  page: 'nonPreApprovedCarCertificateSuccess'
                }
              },
              NPA_CAR_LOAN_NAVIGATE_TO_ATM_LOCATOR: {
                bind: 'navigation-to-atm-locator',
                link: {
                  page: 'atmLocator'
                }
              },
              NPA_CAR_LOAN_LEAVE_PROCESS: {
                bind: 'npa-car-loan-close',
                skipNavigations: true,
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-non-pre-approved-car-loan',
        familyPath: '@glomo-web-components/bbva-manager-oc-car-loan',
        render: 'litElement',
        properties: {
          language: getLanguage(),
          detailDocument,
          customerTerms,
          localCurrency: getLocalCurrency(),
          isNativeIos,
          cellsConnections: {
            in: {
              npa_car_loan_call_me_back_flag_value: {
                bind: 'showCallMeBackHeader'
              },
              global_deep_link: {
                bind: 'init'
              },
              navigation_from_deep_link_from_notification_detail: {
                bind: 'init'
              },
              global_set_app_settings: {
                bind: 'setAppSettingsParams'
              },
              [prefix + '_INIT_PAGE']: {
                bind: 'init'
              },
              global_user: {
                bind: 'setCustomerData'
              },
              native_user_id: {
                bind: 'setCustomerPhone'
              },
              dashboard_customer_email: {
                bind: 'setCustomerEmail'
              },
              global_login_success: {
                bind: 'globalCacheStorage'
              },
              NPA_CAR_LOAN_CACHE_DATA: {
                bind: 'globalCacheStorage'
              },
              [prefix + 'SET_CUSTOMER_CONTACTS']: {
                bind: 'customerContacts'
              },
              [prefix + '_CREATE_FULL_SCREEN_MODAL']: {
                bind: 'createFullModalBody'
              },
              [prefix + '_CREATE_HALF_SCREEN_MODAL']: {
                bind: 'createHalfModalBody'
              },
              [prefix + '_HITCH_SCREEN_FULL_MODAL']: {
                bind: 'createFullModalBody'
              },
              [prefix + '_COMMISSION_OPENNING_SCREEN_FULL_MODAL']: {
                bind: 'createFullModalBody'
              },
              [prefix + '_REQUEST_CAR_LOAN']: {
                bind: 'startSignProcess'
              },
              [prefix + '_EXIT_NO_PRE_APPROVED_CAR_CONFIRMATION']: {
                bind: 'reset'
              },
              [prefix + '_CAR_DATA_STEP_COMPLETED']: {
                bind: 'handleCarData'
              },
              [prefix + '_USER_DATA_STEP_COMPLETED']: {
                bind: 'handleUserData'
              },
              [prefix + '_RATES_DATA_STEP_COMPLETED']: {
                bind: 'handleRatesData'
              },
              [prefix + '_BACK_DASHBOARD_MODAL']: {
                bind: 'setCustomerData'
              },
              [prefix + '_SEND_MERCHANT_INSTALLMENT_DATA']: {
                bind: 'handleUpdatedData'
              },
              [prefix + '_SET_MERCHANT_OPTIONS_INSTALLMENT_SUCCESS']: {
                bind: 'handleMerchantInstallmentResponse'
              },
              [prefix + '_SEND_MERCHANT_OPTIONS_INSTALLMENT_ERROR']: {
                bind: 'handleErrorMerchantInstallment'
              },
              [prefix + '_VEHICLE_FINANCIAL_SIMULATION_SUCCESS']: {
                bind: 'vehicleSimulationSuccess'
              },
              [prefix + '_VEHICLE_FINANCIAL_SIMULATION_ERROR']: {
                bind: 'vehicleSimulationError'
              },
              [prefix + '_PATCH_ECONOMIC_DATA_SUCCESS']: {
                bind: 'patchEconomicDataSuccess'
              },
              [prefix + '_PATCH_ECONOMIC_DATA_ERROR']: {
                bind: 'onPatchEconomicDataError'
              },
              [prefix + '_REQUEST_CUSTOMER_TERMS']: {
                bind: 'requestCustomersTerms'
              },
              [prefix + '_POST_CUSTOMER_TERMS_SUCCESS']: {
                bind: 'customerTermsSuccess'
              },
              [prefix + '_POST_CUSTOMER_TERMS_ERROR']: {
                bind: 'errorRequestCutomerTerms'
              },
              [prefix + '_BLOCKING_CASE_ICON_CLICK']: {
                bind: 'branchLocator'
              },
              [prefix + '_PDF_INFO']: {
                bind: 'TableFakePDF'
              },
              [prefix + '_PROPOSAL_CREATION_SUCCESS']: {
                bind: 'proposalCreationSuccess'
              },
              [prefix + '_PROPOSAL_CREATION_ERROR']: {
                bind: 'proposalCreationError'
              },
              [prefix + '_VALIDATE_DIGITAL_FILE_SUCCESS']: {
                bind: 'digitalFileSuccess'
              },
              [prefix + '_VALIDATE_DIGITAL_FILE_ERROR']: {
                bind: 'onDigitalFileError'
              },
              npa_car_loan_sign_close_modal: {
                bind: 'cancelSignProcess'
              }
            },
            out: {
              car_loan_header_icon_CMB: {
                bind: 'car-loan-icon-CMB-flag'
              },
              car_loan_flag_tooltip_CMB: {
                bind: 'car-loan-toolTip-flag'
              },
              car_loan_show_tooltip_time: {
                bind: 'car-loan-toolTip-time-show'
              },
              npa_car_loan_summary_footer_link_text: {
                bind: 'car-loan-footer-link-text'
              },
              request_features_open_web_channel: {
                bind: 'car-loan-request-CMB-flag-enabled',
                'forward-to-native': true
              },
              global_retargeting_form_submission: {
                bind: 'send-post-retargeting'
              },
              global_retargeting_contracted_product: {
                bind: 'send-patch-offer-finalized'
              },
              [prefix + '_SHOW_PAYMENT_CAPACITY_REJECTION_MODAL']: {
                bind: 'manager-no-pre-approved-car-show-payment-capacity-rejection-modal',
                analytics: analyticsNpaCarCertificate._getError(pageName + '.capacity', 'error importe no autorizado')
              },
              [prefix + '_SHOW_GENERIC_REJECTION_MODAL']: {
                bind: 'manager-no-pre-approved-car-show-generic-rejection-modal',
                analytics: analyticsNpaCarCertificate._getError(pageName + '.errorOnService', 'error servicio')
              },
              [prefix + '_APP_STARTED_CREATE_FULL_SCREEN_MODAL']: {
                bind: 'analytics-send-modal-data-started'
              },
              [prefix + '_INIT_MULTISTEP']: {
                bind: 'show-ui-multistep'
              },
              [prefix + '_OPEN_SOME_STEP']: {
                bind: 'manager-no-pre-approved-car-ui-open-some-step'
              },
              global_alert_manager_open_with_settings: {
                bind: 'manager-npa-car-loan-show-screen-modal'
              },
              close_control_veil: {
                bind: 'manager-no-pre-approved-car-close-veil'
              },
              open_control_veil: {
                bind: 'manager-no-pre-approved-car-open-veil'
              },
              [prefix + '_RESET_NO_PRE_APPROVED_CAR_VALIDATION_UI']: {
                bind: 'manager-no-pre-approved-car-ui-reset-validation'
              },
              [prefix + '_BACKSTEP']: {
                bind: 'manager-no-pre-approved-car-route-backstep'
              },
              [prefix + '_UPDATE_CONTINUE_NAVIGATION']: {
                bind: 'npa-car-loan-update-continue-navigation'
              },
              [prefix + '_DATA_INFO_COMPLETE']: {
                bind: 'npa-car-loan-receipt-data'
              },
              [prefix + '_GET_CUSTOMER_CONTACTS']: {
                bind: 'get-customer-contacts'
              },
              [prefix + '_SET_CUSTOMER_ID']: {
                bind: 'set-customer-id'
              },
              [prefix + '_SET_CUSTOMER_EMAIL']: {
                bind: 'customer-email-set'
              },
              [prefix + '_SET_CUSTOMER_AGE']: {
                bind: 'customer-age-set'
              },
              [prefix + '_SET_CUSTOMER_PHONE_NUMBER']: {
                bind: 'customer-phone-number-set'
              },
              [prefix + '_SEND_MERCHANT_OPTIONS_INSTALLMENT']: {
                bind: 'set-merchant-options-installment'
              },
              [prefix + '_recalculando_header']: {
                bind: 'set-merchant-options-installment'
              },
              [prefix + '_MERCHANT_DATA_RECEIVED']: {
                bind: 'manager-npa-car-merchant-data-response'
              },
              [prefix + '_UPDATE_ALLOWED_RANGED']: {
                bind: 'update-allowed-range'
              },
              [prefix + '_UPDATE_MAX_RANGE']: {
                bind: 'update-max-terms'
              },
              [prefix + '_UPDATE_CURRENT_TERM']: {
                bind: 'update-current-term'
              },
              [prefix + '_PATCH_ECONOMIC_DATA']: {
                bind: 'patch-economic-data'
              },
              [prefix + '_OTP_STEP_COMPLETE']: {
                bind: 'patch-economic-data'
              },
              [prefix + '_POST_CUSTOMER_TERMS']: {
                bind: 'oc-car-loan-customer-terms-data-send'
              },
              [prefix + '_SEND_ATM_LOCATOR_PAGE']: {
                bind: 'send-atm-locator'
              },
              global_open_document_url: {
                bind: 'npa-car-loan-amortization-table'
              },
              [prefix + '_SWITCH_LOANS_API_VERSION']: {
                bind: 'switch-loans-api-version'
              },
              [prefix + '_CREATE_PROPOSAL']: {
                bind: 'create-proposal'
              },
              [prefix + '_REGISTER_FINANCIAL_SIMULATION']: {
                bind: 'send-vehicle-financial-information-data'
              },
              [prefix + '_GET_CUSTOMER_DIGITAL_FILE']: {
                bind: 'request-customer-digital-file'
              },
              [prefix + '_HIDE_CONFIRM_BUTTON']: {
                bind: 'manager-npa-car-loan-close-confirm-button'
              },
              global_retry_error: {
                bind: 'npa-car-loan-manager-retry-error'
              },
              [prefix + 'SEND_MODAL_TO_ANALYTICS']: {
                bind: 'analytics-send-modal-data'
              },
              car_loan_send_response: {
                bind: 'bbva-manager-oc-car-loan-response-send'
              },
              [prefix + '_OPERATION_ID_ANALYTICS']: {
                bind: 'analytics-operation-id'
              },
              [prefix + '_STEP_COMPLETE']: {
                bind: 'analytics-operation-success'
              },
              non_pre_approved_car_certificate_share_common_data: {
                bind: 'manager-npa-car-certificate-common-data'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-multistep-no-pre-approved-car-certificate',
        familyPath: '@glomo-web-components/bbva-multistep-oc-car-loan',
        render: 'litElement',
        properties: {
          className: 'u-padding-bottom--1-5',
          loanCurrency: getLocalCurrency(),
          language: getLanguage(),
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'showCallMeBackFlag'
              },
              [getChannelNameCallMeBack('_call_me_back_show_summary_button')]: {
                bind: 'footerLink'
              },
              send_open_web_flag: {
                bind: 'setCallMeBackFlag'
              },
              [prefix + '_INIT_MULTISTEP']: {
                bind: 'renderMultistep'
              },
              [prefix + '_RESET_PAGE']: {
                bind: 'resetNoPreApprovedCarValidation'
              },
              [prefix + '_SET_CUSTOMER_EMAIL']: {
                bind: 'customerEmail'
              },
              [prefix + '_SET_CUSTOMER_PHONE_NUMBER']: {
                bind: 'customerPhoneNumber'
              },
              [prefix + '_SET_CUSTOMER_AGE']: {
                bind: 'customerAge'
              },
              [prefix + '_OPEN_SOME_STEP']: {
                bind: 'openStep'
              },
              [prefix + '_SHOW_CONFIRM_ZONE_FROM_EXIT_ALERT']: {
                bind: 'dismissCloseNoPreApprovedCarAlert'
              },
              [prefix + '_RESET_NO_PRE_APPROVED_CAR_FROM_EXIT_ALERT']: {
                bind: 'resetAndCloseNoPreApprovedCarValidation'
              },
              [prefix + '_RESET_NO_PRE_APPROVED_CAR_FROM_SAVING_ERROR']: {
                bind: 'resetAndCloseNoPreApprovedCarValidation'
              },
              [prefix + '_REJECTION_CASE_ACCEPT']: {
                bind: 'resetAndCloseNoPreApprovedCarValidation'
              },
              [prefix + '_REJECTION_CASE_CLOSE']: {
                bind: 'resetAndCloseNoPreApprovedCarValidation'
              },
              [prefix + '_RESET_NO_PRE_APPROVED_CAR_VALIDATION_UI']: {
                bind: 'resetNoPreApprovedCarValidation'
              },
              [prefix + '_HEADER_RIGHT_ICON_TAPPED']: {
                bind: 'validateExitConfirmation'
              },
              [prefix + '_STEP_CHANGED']: {
                bind: 'handleStepStateChange'
              },
              [prefix + '_UPDATE_MAX_RANGE']: {
                bind: 'maxRangeTerms'
              },
              [prefix + '_UPDATE_CURRENT_TERM']: {
                bind: 'installment'
              },
              [prefix + '_UPDATE_ALLOWED_RANGED']: {
                bind: 'installmentsList'
              },
              [prefix + '_MERCHANT_DATA_RECEIVED']: {
                bind: 'updateQuoteData'
              },
              non_pre_approved_car_certificate_share_common_data: {
                bind: 'setSharedCommonData'
              }
            },
            out: {
              npa_car_loan_call_me_back_flag_value: {
                bind: 'npa-car-loan-show-call-me-back-flag-value'
              },
              [getChannelNameCallMeBack('_call_me_back_set_current_step')]: {
                bind: 'call-me-back-analytics-manage-step'
              },
              [getChannelNameCallMeBack('_call_me_back_init_sticky_configuration')]: {
                bind: 'npa-car-loan-open-call-me-back-from-sticky'
              },
              [prefix + '_CREATE_FULL_SCREEN_MODAL']: {
                bind: 'multistep-no-pre-approved-car-create-full-modal'
              },
              [prefix + '_CREATE_HALF_SCREEN_MODAL']: {
                bind: 'multistep-no-pre-approved-car-create-half-modal'
              },
              [prefix + '_HIDE_CONFIRM_BUTTON']: {
                bind: 'multistep-no-pre-approved-hide-confirm-button'
              },
              [prefix + '_EXIT_NO_PRE_APPROVED_CAR_CONFIRMATION']: {
                bind: 'multistep-no-pre-approved-car-certificate-exit'
              },
              [prefix + '_CAR_DATA_STEP_COMPLETED']: {
                bind: 'multistep-no-pre-approved-car-step-car-form-completed'
              },
              [prefix + '_USER_DATA_STEP_COMPLETED']: {
                bind: 'multistep-no-pre-approved-car-step-user-form-completed'
              },
              [prefix + '_RATES_DATA_STEP_COMPLETED']: {
                bind: 'multistep-npa-car-loan-rates-data'
              },
              [prefix + '_STEP_CHANGED']: {
                bind: 'npa-car-loan-step-change'
              },
              [prefix + '_SEND_MERCHANT_INSTALLMENT_DATA']: {
                bind: 'merchant-options-installments-data-updated'
              },
              [prefix + '_TERMS_CONDITIONS_STEP_COMPLETED']: {
                bind: 'multistep-no-pre-approved-car-step-terms-completed'
              },
              [prefix + '_COMMISSION_OPENNING_SCREEN_FULL_MODAL']: {
                bind: 'multistep-no-pre-approved-car-create-commission-openning-full-modal'
              },
              [prefix + '_HITCH_SCREEN_FULL_MODAL']: {
                bind: 'multistep-no-pre-approved-car-create-hitch-full-modal',
                analytics: analyticsNpaCarCertificate._getInteractionLink(pageName, 'enganche')
              },
              [prefix + '_PDF_INFO']: {
                bind: 'npa-car-loan-action-PDF'
              },
              [prefix + '_STEP_COMPLETE']: {
                bind: 'analytics-manage-step'
              },
              non_pre_approved_car_certificate_user_form_advisory: {
                bind: 'analytics-user-form-advisory'
              },
              [prefix + '_APP_STARTED_PDF']: {
                bind: 'npa-car-loan-analytics-PDF'
              },
              [prefix + '_APP_STARTED_ITEM_CLICK']: {
                bind: 'data-step-started-type-analytics'
              },
              [prefix + '_APP_STARTED_COMMISSION_OPENNING_SCREEN_FULL_MODAL']: {
                bind: 'multistep-no-pre-approved-car-create-commission-openning-full-modal'
              },
              [prefix + '_APP_FORM_STARTED']: {
                bind: 'multistep-no-pre-approved-car-step-car-form-completed'
              },
              [prefix + '_recalculando_header_text_focus_in']: {
                bind: 'form-field-input-focus'
              },
              [prefix + '_recalculando_header_text_focus_out']: {
                bind: 'form-field-input-blur'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-panel-button-fixed',
        familyPath: '@bbva-web-components/bbva-panel-button-fixed',
        render: 'litElement',
        properties: {
          className: 'no-gradient',
          buttonText: 'no-pre-approved-car-certificate-confirm-button',
          buttonClass: 'positive',
          show: true,
          language: getLanguage(),
          hidden: true,
          cellsConnections: {
            in: {
              [prefix + '_HIDE_CONFIRM_BUTTON']: {
                bind: 'hidden'
              },
              npa_car_loan_summary_footer_link_text: {
                bind: 'footerLink'
              }
            },
            out: {
              [prefix + '_REQUEST_CAR_LOAN']: {
                bind: 'panel-button-fixed-item-click'
              },
              open_control_veil: {
                bind: 'panel-button-fixed-item-click'
              },
              [getChannelNameCallMeBack('_call_me_back_init_summary_configuration')]: {
                bind: 'panel-button-fixed-footer-link-click'
              }
            }
          }
        }
      },
      {
        type: 'DM',
        tag: 'cells-dm-global-apis-loans',
        properties: {
          host,
          contractsApiVersion: config.globalServices.versions.contracts,
          native,
          requiredToken,
          loansApiVersion: config.globalServices.versions.loansV2,
          cellsConnections: {
            in: {
              [prefix + '_SWITCH_LOANS_API_VERSION']: {
                bind: 'loansApiVersion'
              },
              [prefix + '_SEND_MERCHANT_OPTIONS_INSTALLMENT']: {
                bind: 'createMerchantOptionsInstallment'
              },
              [prefix + '_CREATE_PROPOSAL']: {
                bind: 'postProposal'
              }
            },
            out: {
              [prefix + '_SET_MERCHANT_OPTIONS_INSTALLMENT_SUCCESS']: {
                bind: 'set-loan-merchant-options-installments'
              },
              [prefix + '_SEND_MERCHANT_OPTIONS_INSTALLMENT_ERROR']: {
                bind: 'error-on-post-loan-merchant-options-installments'
              },
              [prefix + '_PROPOSAL_CREATION_SUCCESS']: {
                bind: 'post-proposal'
              },
              [prefix + '_PROPOSAL_CREATION_ERROR']: {
                bind: 'error-on-post-proposal'
              },
              close_control_veil: {
                bind: 'error-on-post-proposal'
              },
              global_retargeting_get_offer_detail: {
                bind: 'set-offer-detail'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'bbva-dataprovider-consumer-finance-dossiers',
        familyPath: '@glomo-web-components/bbva-dataprovider-consumer-finance-dossiers',
        render: 'litElement',
        properties: {
          host,
          apiVersion: config.globalServices.versions.dossiers,
          requiredToken,
          native,
          cellsConnections: {
            in: {
              [prefix + '_REGISTER_FINANCIAL_SIMULATION']: {
                bind: 'postVehicleFinancialSimulation'
              }
            },
            out: {
              [prefix + '_VEHICLE_FINANCIAL_SIMULATION_SUCCESS']: {
                bind: 'post-vehicle-financial-simulation-success'
              },
              [prefix + '_VEHICLE_FINANCIAL_SIMULATION_ERROR']: {
                bind: 'post-vehicle-financial-simulation-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'cells-dm-global-apis-customers-bgadpmock',
        tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
        properties: {
          host,
          customersApiVersion: config.globalServices.versions.customersV1,
          apiAggregatorApiVersion: config.globalServices.versions.apiAggregatorV1,
          otpId: pageName,
          native,
          requiredToken,
          returnTsec: true,
          cellsConnections: {
            in: {
              global_device_accesses_customer_id: {
                bind: 'customerId'
              },
              [prefix + '_SET_CUSTOMER_ID']: {
                bind: 'customerId'
              },
              [prefix + '_GET_CUSTOMER_CONTACTS']: {
                bind: 'getCustomerContacts'
              },
              [prefix + '_PATCH_ECONOMIC_DATA']: {
                bind: 'patchEconomicData'
              },
              [prefix + '_POST_CUSTOMER_TERMS']: {
                bind: 'postCustomerTerms'
              },
              [prefix + '_GET_CUSTOMER_DIGITAL_FILE']: {
                bind: 'postValidateDigitalFile'
              }
            },
            out: {
              [prefix + 'SET_CUSTOMER_CONTACTS']: {
                bind: 'set-customer-contacts'
              },
              [prefix + '_PATCH_ECONOMIC_DATA_SUCCESS']: {
                bind: 'patch-customer-economic-data'
              },
              [prefix + '_PATCH_ECONOMIC_DATA_ERROR']: {
                bind: 'error-on-patch-economic-data'
              },
              [prefix + '_POST_CUSTOMER_TERMS_SUCCESS']: {
                bind: 'post-customer-terms'
              },
              [prefix + '_POST_CUSTOMER_TERMS_ERROR']: {
                bind: 'error-on-post-customer-terms'
              },
              [prefix + '_VALIDATE_DIGITAL_FILE_SUCCESS']: {
                bind: 'successful-post-validate-digital-file'
              },
              [prefix + '_VALIDATE_DIGITAL_FILE_ERROR']: {
                bind: 'failed-post-validate-digital-file'
              }
            }
          }
        }
      }
    ]
  };
  if (native) {
    base.components.push(glomoOpenDocument(config));
  }
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-customers-mx-bgadpmock', pageName, [
    'patch-customer-economic-data',
    'error-on-patch-economic-data'
  ]);
  connectionsOut(base)('cells-sign-operation-dm-mx').npa_car_loan_sign_close_modal = {
    bind: 'signature-cancel-' + pageName
  };
  addRetryErrors(base)([
    {
      id: 'error-digital-file',
      acceptRetry: { bind: 'retryDigitalFile', component: 'bbva-manager-non-pre-approved-car-loan' },
      cancelRetry: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' },
      acceptCallForHelp: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' }
    },
    {
      id: 'error-merchant-options-installments',
      acceptRetry: { bind: 'retryMerchantOptionsInstallments', component: 'bbva-manager-non-pre-approved-car-loan' },
      cancelRetry: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' },
      acceptCallForHelp: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' }
    },
    {
      id: 'error-vehicle-financial-simulation',
      acceptRetry: { bind: 'retryVehicleFinancialSimulation', component: 'bbva-manager-non-pre-approved-car-loan' },
      cancelRetry: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' },
      acceptCallForHelp: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' }
    },
    {
      id: 'error-economic-data',
      acceptRetry: { bind: 'retryEconomicData', component: 'bbva-manager-non-pre-approved-car-loan' },
      cancelRetry: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' },
      acceptCallForHelp: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' }
    },
    {
      id: 'error-proposal',
      acceptRetry: { bind: 'retryProposalCreation', component: 'bbva-manager-non-pre-approved-car-loan' },
      cancelRetry: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' },
      acceptCallForHelp: { bind: 'resetAndCloseNoPreApprovedCarValidation', component: 'bbva-multistep-no-pre-approved-car-certificate' }
    }
  ]);
  addCommonErrors(base.components)();
  return base;
};
