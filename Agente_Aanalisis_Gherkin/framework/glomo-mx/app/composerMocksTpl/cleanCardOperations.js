'use strict';

const { merge, bbvaQrPluginConfigs } = require('./common/helpers');

module.exports = (CONFIG) => {
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'cleanCardOperations';
  const pageNameChannel = 'clean_card_operations';
  const pages = require('./common/helpers').getPages(CONFIG)(pageName);
  const analyticsPage = require('./analytics/_cleanCardOperations')(CONFIG);
  const {disconnectedBanner, cellsConnectionStatus} = require('./common/_cross-components');

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          clean_card_operations_OPEN_EXIT_MODAL_INFO_SPHERICA: {
            bind: 'openWithSettings'
          },
          clean_card_operations_OPEN_PIN_REQUEST_ERROR_MODAL_SPHERICA: {
            bind: 'openWithSettings'
          },
          clean_card_operations_OPEN_ACTIVATE_ERROR_MODAL_SPHERICA: {
            bind: 'openWithSettings'
          },
          clean_card_operations_success_card_activation_spherica: {
            bind: 'openWithSettings'
          },
          clean_card_operations_OPEN_QR_CODE_INVALID_SPHERICA: {
            bind: 'openWithSettings'
          }
        },
        out: {
        }
      }
    }
  };

  const qrPluginConfig = merge(bbvaQrPluginConfigs.commons, {
    android: {
      customViewConfig: {
        options: {
          title: 'Escanear código QR',
          firstFooterLabel: 'Con tu celular, visualiza el código QR de tu tarjeta y haz que coincida con el marco interior; asegúrate de tener buena iluminación.'
        }
      }
    },
    ios: {
      customViewConfig: {
        id: 'qrEnrollmentView',
        options: {
          title: 'Escanear código QR',
          firstFooterLabel: 'Con tu celular, visualiza el código QR de tu tarjeta y haz que coincida con el marco interior; asegúrate de tener buena iluminación.'
        }
      }
    }
  });
  const qrPluginConfig2 = merge(bbvaQrPluginConfigs.commons.codi, {
    default: {
      customViewConfig: {
        name: 'qr_custom_navigation_overlay',
        options: {
          title: 'Escanear código QR',
          descriptionLabelName: 'Coloca la cámara de tu celular frente al código QR de tu tarjeta. Asegurate de alinearlo dentro del marco y de tener buena iluminación.'
        }
      }
    }
  });

  const faqsTexts = [
    [
      {
        name: 'glomo-qr-faq-name-text-1',
        description: 'glomo-qr-faq-name-description-1'
      }, {
        name: 'glomo-qr-faq-name-text-2',
        description: 'glomo-qr-faq-name-description-2'
      }, {
        name: 'glomo-qr-faq-name-text-3',
        description: 'glomo-qr-faq-name-description-3'
      }, {
        name: 'glomo-qr-faq-name-text-4',
        description: 'glomo-qr-faq-name-description-4'
      }, {
        name: 'glomo-qr-faq-name-text-5',
        description: 'glomo-qr-faq-name-description-5'
      }
    ],
    [
      {
        name: 'glomo-qr-faq-name-text-1',
        description: 'glomo-qr-faq-name-description-1'
      }, {
        name: 'glomo-qr-faq-name-text-2-additional',
        description: 'glomo-qr-faq-name-description-2-additional'
      }, {
        name: 'glomo-qr-faq-name-text-3-additional',
        description: 'glomo-qr-faq-name-description-3'
      }, {
        name: 'glomo-qr-faq-name-text-4-additional',
        description: 'glomo-qr-faq-name-description-4-additional'
      }, {
        name: 'glomo-qr-faq-name-text-5',
        description: 'glomo-qr-faq-name-description-5-additional'
      }
    ]
  ];

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: '',
      iOSFixedHeader: isNativeIos,
      animationType: 'verticalUp',
      hasFooter: false,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {}
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
          [pageNameChannel + '_EXIT_PAGE']: {
            bind: 'goBack'
          },
          [pageName + '_failed_card_pre_activation_exit']: {
            bind: 'goBack'
          }
        },
        out: {
          [pageName + '_navigation_to_back_page']: {
            bind: 'navigation-to-back',
            backStep: true
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
      pageName,
      cache: [ '' ],
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          [`__bridge_page_${pageName}`]: {
            bind: 'init'
          }
        },
        out: {
          [pageNameChannel + '_init_page']: {
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

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header-spherica',
    properties: {
      variant: 'primary',
      rightIconText: 'bbva-header-main-close-aria-label',
      className: '',
      search: false,
      back: true,
      rightIcon: 'coronita:close',
      cellsConnections: {
        in: {
          [pageNameChannel + '_HEADER_TITLE']: {
            bind: 'titleName'
          },
          [pageNameChannel + '_DEFAULT_EXIT']: {
            bind: 'defaultPinExit'
          },
          [pageNameChannel + '_CHANGE_COLOR_HEADER']: {
            bind: 'class'
          }
        },
        out: {
          [pageNameChannel + '_ALERT_BUTTON_EXIT_HEADER']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const qrProcessor = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-qr-processor-spherica',
    properties: {
      heading: 'glomo-qr-processor-manager-view-pin-info-text',
      mainIcon: './images/spherica/cleanCardOperations/activate-qr-card.svg',
      width: 256,
      height: 160,
      loadingMessages: [ 'glomo-qr-processor-loading-text-1' ],
      cellsConnections: {
        in: {
          [pageNameChannel + '_INIT_QR_PROCESSOR_DEFAULT_VALUES']: {
            bind: '_init'
          },
          [pageNameChannel + '_OPERATION_TEXT_CHANNEL']: {
            bind: ''
          },
          [pageNameChannel + '_OPERATION_TITLE_CHANNEL']: {
            bind: 'heading'
          },
          [pageNameChannel + '_SEND_IMAGE_PRE_ACTIVATION']: {
            bind: 'mainIcon'
          },
          [pageNameChannel + '_OPERATION_MESSAGE_INFO']: {
            bind: 'textInfoBoxAdditional'
          },
          [pageNameChannel + '_SEND_CUSTOMER_INFO']: {
            bind: 'setCardInfo'
          },
          [pageNameChannel + '_SUCCESS_PIN_VIEW']: {
            bind: 'successActionChange'
          },
          [pageNameChannel + '_HIDE_SPINNER']: {
            bind: 'loaded'
          },
          [pageNameChannel + '_ALERT_BUTTON_EXIT_HEADER']: {
            bind: '_init'
          },
          __bridge_cancelled_back_navigation: {
            bind: '_init'
          },
          persist_data_additional_card_flag: {
            bind: 'isAdditionalCard'
          },
          send_text_to_inactive_cards: {
            bind: 'textInfoBoxAdditional'
          }
        },
        out: {
          [pageNameChannel + '_SCANNER_BUTTON']: {
            bind: 'open-qr-code-processor-event'
          },
          [pageNameChannel + '_QR_FAQ_INFORMATION']: {
            bind: 'qr-faq',
            analytics: analyticsPage.HUELLA_PAGE_VIEW_FAQS,
            link: {
              page: 'cleanCardQrFaqs'
            }
          },
          [pageNameChannel + '_LAUNCH_PIN_REQUEST_AGAIN']: {
            bind: 'launch-pin-request-again-event'
          },
          [pageNameChannel + '_SEND_ADDITIONAL_FAQS']: {
            bind: 'qr-faq'
          }
        }
      }
    }
  };

  const qrProcessorManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-qr-processor-manager',
    properties: {
      isSpherica: true,
      alertBoxVariant: 'primary-alt',
      qrCardImage: './images/spherica/cleanCardOperations/activate-qr-card.svg',
      isGlobalContext: true,
      faqsTexts,
      generalErrorImage: './images/errors/error.svg',
      errorImage: './images/spherica/cleanCardOperations/activate-qr-card.svg',
      hasEncryptionSupport: !!CONFIG.native,
      cofigQrObject: qrPluginConfig2,
      cellsConnections: {
        params: {
          qr: 'qr'
        },
        in: {
          navigation_to_view_pin_with_qr_code: {
            bind: 'setInitialData'
          },
          navigation_to_card_activation_with_qr_code: {
            bind: 'setInitialData'
          },
          navigation_to_tdd_confirm_reception_with_qr_code: {
            bind: 'setInitialData'
          },
          global_financial_overview_details: {
            bind: 'setFinancialData'
          },
          handle_clean_card_operations: {
            bind: 'handlePublicZoneQRCodeData'
          },
          [pageNameChannel + '_handle_qr_code_data_from_native']: {
            bind: 'handleQRCodeData'
          },
          [pageNameChannel + '_handle_qr_code_error_data_from_native']: {
            bind: 'handleQRCodeInvalidData'
          },
          [pageNameChannel + '_handle_qr_code_parse_error_data_from_native']: {
            bind: 'handleQRCodeInvalidData'
          },
          [pageNameChannel + '_SCANNER_BUTTON']: {
            bind: 'openQRCodeProcessor'
          },
          [pageNameChannel + '_ALERT_BUTTON_EXIT_HEADER']: {
            bind: 'showCardActivationExitWarning'
          },
          [pageNameChannel + '_LAUNCH_PIN_REQUEST_AGAIN']: {
            bind: 'getPinRequestAgain'
          },
          [pageNameChannel + '_public_key_generated']: {
            bind: 'sendRequestToGetPin'
          },
          [pageNameChannel + '_decrypt_error']: {
            bind: 'showPinRequestFailureModal'
          },
          [pageNameChannel + '_set_decrypted_pin']: {
            bind: 'handleDecryptedPin'
          },
          [pageNameChannel + '_PIN_REQUEST_SUCCESS_RESPONSE']: {
            bind: 'handlePinSuccessResponse'
          },
          [pageNameChannel + '_PIN_REQUEST_ERROR_RESPONSE']: {
            bind: 'showPinRequestFailureModal'
          },
          [pageNameChannel + '_CARD_ACTIVATION_SUCCESS_RESPONSE']: {
            bind: 'handleShowModalTypeCardSuccessResponse'
          },
          [pageNameChannel + '_CARD_ACTIVATION_ERROR_RESPONSE']: {
            bind: 'handleShowModalTypeCardFailedResponse'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'showCardActivationExitWarning'
          },
          signature_cancel_cleanCardOperations: {
            bind: 'handleOtpModal'
          },
          [pageNameChannel + '_OPEN_QR_CODE_INVALID']: {
            bind: 'reset'
          },
          [pageNameChannel + '_OPEN_EXIT_MODAL_INFO']: {
            bind: 'reset'
          },
          [pageNameChannel + '_EXIT_PAGE']: {
            bind: 'reset'
          },
          [pageNameChannel + '_SUCCESS_PIN_VIEW']: {
            bind: 'reset'
          },
          [pageNameChannel + '_OPEN_PIN_REQUEST_ERROR_MODAL']: {
            bind: 'reset'
          },
          [pageNameChannel + '_OPEN_ACTIVATE_ERROR_MODAL']: {
            bind: 'reset'
          },
          [pageNameChannel + '_success_card_activation']: {
            bind: 'reset'
          },
          persist_data_additional_show_nip_qr: {
            bind: 'setAdditionalData'
          },
          [pageNameChannel + '_SEND_ADDITIONAL_FAQS']: {
            bind: 'sendTextToCleanCardQrFraqs'
          }
        },
        out: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'trigger-modal-event'
          },
          clean_card_operations_OPEN_EXIT_MODAL_INFO_SPHERICA: {
            bind: 'info-exit-page-event'
          },
          clean_card_operations_OPEN_PIN_REQUEST_ERROR_MODAL_SPHERICA: {
            bind: 'pin-request-error-event',
            analytics: analyticsPage.ERROR_PIN_DISPLAY
          },
          clean_card_operations_OPEN_ACTIVATE_ERROR_MODAL_SPHERICA: {
            bind: 'card-activation-error-modal-show-event',
            analytics: analyticsPage.ERROR_CARD_ACTIVATION            },
          clean_card_operations_success_card_activation_spherica: {
            bind: 'show-card-activation-success'
          },
          clean_card_operations_OPEN_QR_CODE_INVALID_SPHERICA: {
            bind: 'show-error-modal-event'
          },
          tag_open_native_settings: {
            bind: 'open-native-settings'
          },
          [pageNameChannel + '_HEADER_TITLE']: {
            bind: 'header-text-changed'
          },
          [pageNameChannel + '_CHANGE_COLOR_HEADER']: {
            bind: 'send-color-background-header'
          },
          [pageNameChannel + '_INIT_QR_PROCESSOR_DEFAULT_VALUES']: {
            bind: 'init-qr-processor-default-values'
          },
          [pageNameChannel + '_OPERATION_TITLE_CHANNEL']: {
            bind: 'show-operation-heading-event'
          },
          [pageNameChannel + '_SEND_IMAGE_PRE_ACTIVATION']: {
            bind: 'send-image-qr-card-pre-activation'
          },
          [pageNameChannel + '_OPERATION_TEXT_CHANNEL']: {
            bind: 'show-operation-text-event'
          },
          [pageNameChannel + '_OPERATION_MESSAGE_INFO']: {
            bind: 'show-operation-message-icon-event'
          },
          [pageNameChannel + '_EXIT_PAGE']: {
            bind: 'page-exit-event'
          },
          [pageNameChannel + '_REQUEST_CARD_ACTIVATION_CHANNEL']: {
            bind: 'card-activation-request-event'
          },
          [pageNameChannel + 'error-card-confirm-reception']: {
            bind: 'send-error-card-confirm-reception',
            analytics: analyticsPage.getErrorAnalitycs('errorCardConfirm')
          },
          [pageNameChannel + '_open_nativeconnector_bbva_qr']: {
            bind: 'open-nativeconnector-bbva-qr-event'
          },
          [pageNameChannel + '_operation_open_qr_code_processor']: {
            bind: 'open-qr-code-processor-event'
          },
          [pageNameChannel + '_generate_public_key']: {
            bind: 'get-new-public-key-event'
          },
          [pageNameChannel + '_pin_decrypt']: {
            bind: 'pin-decrypt-event'
          },
          [pageNameChannel + '_SEND_CUSTOMER_INFO']: {
            bind: 'set-custom-info-event'
          },
          [pageNameChannel + '_SUCCESS_PIN_VIEW']: {
            bind: 'success-pin-action-event',
            analytics: analyticsPage.HUELLA_PAGE_SUCCESSFUL_VIEW_NIP
          },
          [pageNameChannel + '_SEND_PIN_REQUEST']: {
            bind: 'send-pin-request-event'
          },
          [pageNameChannel + '_HIDE_SPINNER']: {
            bind: 'hide-spinner-page-event'
          },
          global_phone_call_channel: {
            bind: 'call-event',
            'forward-to-native': true
          },
          [pageNameChannel + '_OPEN_ATM_LOCATOR']: {
            bind: 'navigate-to-atm-branch-locator-event',
            link: {
              page: 'atmLocator',
              skipHistory: true
            }
          },
          financial_overview_refresh: {
            bind: 'refresh-dashboard-event'
          },
          send_faqs_to_clean_card_QR_Faqs: {
            bind: 'qr-faq-additional'
          },
          send_text_to_inactive_cards: {
            bind: 'send-text-inactive-cards'
          },
          qr_reader_target_message: {
            bind: 'send-qr-code-processor-message'
          },
          dashboard_refresh_financial_overview: {
            bind: 'page-exit-to-dashboard-event',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard'
            }
          }
        }
      }
    }
  };

  const managerQrScanner = {
    zone: 'app_main',
    type: 'DM',
    tag: 'bbva-manager-qr-scanner',
    familyPath: '@glomo-web-components/bbva-manager-qr-scanner',
    render: 'litElement',
    properties: {
      selectedPluginConfig: isNativeIos ? 'ios' : 'android',
      qrPluginConfigs: qrPluginConfig,
      cellsConnections: {
        in: {
          [pageNameChannel + '_operation_open_qr_code_processor']: {
            bind: 'managePluginParams'
          }
        },
        out: {
          [pageNameChannel + '_request_open_qr_scanner']: {
            bind: 'glomo-qr-plugin-params'
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-qr-processor-analytics-manager',
    familyPath: 'glomo-qr-processor-manager',
    properties: {
      cellsConnections: {
        in: {
          navigation_to_card_activation_with_qr_code: {
            bind: 'firePage'
          },
          navigation_to_tdd_confirm_reception_with_qr_code: {
            bind: 'fireConfirmReceptionPage'
          },
          navigation_to_view_pin_with_qr_code: {
            bind: 'firePage'
          },
          [pageNameChannel + '_operation_open_qr_code_processor']: {
            bind: 'appStartedDynamic'
          },
          [pageNameChannel + '_open_nativeconnector_bbva_qr']: {
            bind: 'appStartedDynamic'
          },
          [pageNameChannel + '_SCANNER_BUTTON']: {
            bind: 'openQrCodeProcessor'
          },
          [pageNameChannel + '_QR_FAQ_INFORMATION']: {
            bind: 'appStartedDynamic'
          },
          [pageNameChannel + '_OPEN_QR_CODE_INVALID']: {
            bind: 'errorQrReading'
          },
          [pageNameChannel + '_success_card_activation']: {
            bind: 'appCompletedDynamic'
          },
          clean_card_operations_OPEN_QR_CODE_INVALID_SPHERICA: {
            bind: 'errorQrReading'
          },
          clean_card_operations_success_card_activation_spherica: {
            bind: 'appCompletedDynamic'
          },
          global_alert_manager_open_with_settings: {
            bind: 'appCompletedConfirmReception'
          },
          [pageNameChannel + '_REQUEST_CARD_ACTIVATION_CHANNEL']: {
            bind: 'viewConfirmReceptionOTP'
          },
          [pageName + '_show_atm_pre_activation']: {
            bind: 'completedReceptionAtmBranchlocator'
          },
          sign_modal_open: {
            bind: 'viewOTP'
          },
          connection_status_cleanCardOperations_offline: {
            bind: 'connectionStatuosOffline'
          }
        },
        out: {
          [pageNameChannel + '_APP_ERROR_CONNECTIONS']: {
            bind: 'analytics-app-error-connection',
            analytics: analyticsPage.getErrorAnalitycs('errorConnections')
          },
          [pageNameChannel + '_APP_PAGE_VISIT']: {
            bind: 'analytics-page-visit',
            analytics: analyticsPage.APP_PAGE_VISIT
          },
          [pageNameChannel + '_APP_PAGE_VISIT_CONFIRM_RECEPTION']: {
            bind: 'analytics-confirm-reception-page',
            analytics: analyticsPage.APP_PAGE_VISIT_CONFIRM_RECEPTION
          },
          [pageNameChannel + '_HUELLA_PAGE_VIEW_NIP']: {
            bind: 'analytics-huella-page-view',
            analytics: analyticsPage.HUELLA_PAGE_VIEW_NIP
          },
          [pageNameChannel + '_APP_STARTED_DYNAMIC']: {
            bind: 'analytics-app-started-dynamic',
            analytics: analyticsPage.APP_STARTED_DYNAMIC
          },
          [pageNameChannel + '_APP_STARTED_DYNAMIC_CONFIRM_RECEPTION']: {
            bind: 'analytics-app-started-dynamic-confirm-reception-tdd',
            analytics: analyticsPage.APP_STARTED_DYNAMIC_CONFIRM_RECEPTION
          },
          [pageNameChannel + '_APP_COMPLETED_DYNAMIC']: {
            bind: 'analytics-app-completed-dynamic',
            analytics: analyticsPage.APP_COMPLETED
          },
          [pageNameChannel + '_APP_COMPLETED_CONFIRM_RECEPTION']: {
            bind: 'analytics-app-completed-confirm-reception-tdd',
            analytics: analyticsPage.APP_COMPLETED_CONFIRM_RECEPTION
          },
          [pageNameChannel + 'ERROR_QR_READING_CARD_ACTIVATION']: {
            bind: 'analytics-error-qr-reading-card-activation',
            analytics: analyticsPage.ERROR_QR_READING_CARD_ACTIVATION
          },
          [pageNameChannel + '_ERROR_QR_READING_TDD_RECEPTION']: {
            bind: 'analytics-error-qr-reading-confirm-reception-tdd',
            analytics: analyticsPage.getErrorAnalitycs('errorsQrReading')
          },
          [pageNameChannel + 'ERROR_QR_READING_VIEW_NIP']: {
            bind: 'analytics-error-qr-reading-view-nip',
            analytics: analyticsPage.ERROR_QR_READING_VIEW_NIP
          },
          [pageNameChannel + 'APP_STEP_OTP']: {
            bind: 'analytics-otp-modal',
            analytics: analyticsPage.APP_STEP_OTP
          },
          [pageNameChannel + '_APP_STEP_OTP_CONFIRM_RECEPTION']: {
            bind: 'analytics-otp-confirm-reception-tdd-modal',
            analytics: analyticsPage.APP_STEP_OTP_CONFIRM_RECEPTION
          },
          [pageNameChannel + 'APP_STEP_QR_SCANNER']: {
            bind: 'analytics-open-qr-code-processor',
            analytics: analyticsPage.APP_STEP_OPEN_QR_SCANNER
          },
          [pageNameChannel + '_APP_STEP_QR_SCANNER_CONFIRM_RECEPTION']: {
            bind: 'analytics-open-qr-code-processor-confirm-reception-tdd',
            analytics: analyticsPage.APP_STEP_OPEN_QR_SCANNER_CONFIRM_RECEPTION
          },
          [pageNameChannel + '_ATM_BRANCH_LOCATOR_CONFIRM_RECEPTION']: {
            bind: 'analytics-atm-branch-locator-confirm-reception-tdd',
            analytics: analyticsPage.APP_COMPLETED_RECEPTION_ATM_BRANCH_LOCATOR
          }
        }
      }
    }
  };

  const cardsDM = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: pageName,
      cardsApiVersion: CONFIG.globalServices.versions.cardsV1,
      native: !!CONFIG.native,
      cellsConnections: {
        in: {
          [pageNameChannel + '_REQUEST_CARD_ACTIVATION_CHANNEL']: {
            bind: 'postCardActivation'
          }
        },
        out: {
          [pageNameChannel + '_CARD_ACTIVATION_SUCCESS_RESPONSE']: {
            bind: 'card-activation-success-response-event'
          },
          [pageNameChannel + '_CARD_ACTIVATION_ERROR_RESPONSE']: {
            bind: 'card-activation-error-response-event'
          }
        }
      }
    }
  };

  const cardsBgadpMockDM = {
    zone: 'app__transactional',
    type: 'DM',
    tag: 'cells-dm-global-apis-cards-bgadpmock',
    properties: {
      host: CONFIG.globalServices.host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      otpId: pageName,
      cardsApiVersion: CONFIG.globalServices.versions.cardsV1,
      native: CONFIG.native || false,
      cellsConnections: {
        in: {
          [pageNameChannel + '_SEND_PIN_REQUEST']: {
            bind: 'getCardPin'
          }
        },
        out: {
          [pageNameChannel + '_PIN_REQUEST_SUCCESS_RESPONSE']: {
            bind: 'pin-success-response-event'
          },
          [pageNameChannel + '_PIN_REQUEST_ERROR_RESPONSE']: {
            bind: 'pin-error-response-event'
          }
        }
      }
    }
  };

  const mobileLibraryMcrypt = {
    zone: 'app__main',
    tag: 'cells-mobile-libmcrypt',
    type: 'UI',
    properties: {
      cellsConnections: {
        in: {
          [pageNameChannel + '_generate_public_key']: {
            bind: 'generatekpub'
          },
          [pageNameChannel + '_pin_decrypt']: {
            bind: 'decrypt'
          }
        },
        out: {
          [pageNameChannel + '_public_key_generated']: {
            bind: 'public-key-generated'
          },
          [pageNameChannel + '_decrypt_error']: {
            bind: 'error'
          },
          [pageNameChannel + '_set_decrypted_pin']: {
            bind: 'value-decrypted'
          }
        }
      }
    }
  };

  const bbvaNativeConnector = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    className: isNativeIos ? 'ios-top-padding' : '',
    iOSFixedHeader: isNativeIos,
    properties: {
      cellsConnections: {
        in: {
          [pageNameChannel + '_request_open_qr_scanner']: {
            bind: 'openCameraCodeReader'
          },
          [pageNameChannel + '_open_nativeconnector_bbva_qr']: {
            bind: 'openCameraCodeReader'
          },
          [pageNameChannel + '_native_camera_code_reader_result']: {
            bind: 'qrPluginResponseCode'
          }
        },
        out: {
          [pageNameChannel + '_native_camera_code_reader_result']: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          [pageNameChannel + '_handle_qr_code_error_data_from_native']: {
            bind: 'bbva-qr-plugin-camera-code-error'
          },
          [pageNameChannel + '_handle_qr_code_data_from_native']: {
            bind: 'bbva-native-connector-qr-plugin-parsed-code'
          },
          [pageNameChannel + '_handle_qr_code_parse_error_data_from_native']: {
            bind: 'bbva-native-connector-qr-plugin-gs1-parse-error'
          }
        }
      }
    }
  };

  const nativeComponent = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          tag_open_native_settings: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const base = {
    hash: pageNameChannel,
    currentPage: {
      url: `/${pageName}`
    },
    pages,
    template,
    components: [
      disconnectedBanner(pageName),
      cellsConnectionStatus(pageName),
      lifeCycle,
      navigationHandler,
      header,
      qrProcessorManager,
      analyticsManager,
      qrProcessor,
      cardsDM,
      cardsBgadpMockDM,
      mobileLibraryMcrypt,
      bbvaNativeConnector,
      managerQrScanner,
      nativeComponent
    ]
  };

  base.components.push(glomoAlertManagerSpherica);


  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('cells-dm-global-apis-cards-bgadpmock', pageName, ['pin-success-response-event', 'pin-error-response-event']);
  signConnector('cells-dm-global-apis-cards', pageName, ['card-activation-success-response-event', 'card-activation-error-response-event']);

  return base;
};
