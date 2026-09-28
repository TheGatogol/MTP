'use strict';
module.exports = CONFIG => {
  const {SPINNER, getLanguage, headerHeight} = require('./common/helpers/_utils');
  const pageName = 'deviceAccessPage';
  const pages = require('./common/_pages')(CONFIG)('device-access-page');
  const isNativeIos = CONFIG.nativeIos || false;
  const native = CONFIG.native || false;
  const pageAnalytics = require('./analytics/_deviceAccess.js')(CONFIG);
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const literals = require('./analytics/common/_literals.js');
  const configButtons = {
    buttons: {
      primary: {
        text: 'device-access—page-button',
        action: 'exit',
        disabled: 'true'
      }
    }
  };
  const cameraConfig = {
    flash: false,
    autoFocus: true
  };
  const options = {
    title: 'Registro',
    backgroundColor: '#072146',
    navBarBackgroundColor: '#194078',
    navBarTintColor: '#FFFFFF',
    firstButton: 'Tengo un QR',
    secondButton: 'No tengo un QR',
    firstFooterLabel: 'Escanea el QR al reverso de tu tarjeta',
    secondFooterLabel: 'Si no tienes un QR, toma una foto de los 16 números de tu tarjeta.',
    closeImageName: 'ic_back'
  };
  const qrPluginConfig = {
    android: {
      codeType: 'QR',
      cameraConfig,
      customViewConfig: {
        name: 'qr_enrollment_view_overlay',
        options
      },
      overlayConfig: {
        backgroundColor: '#73072146',
        captureFrameColor: '#5BBEFF',
        borderWidth: '0',
        isFrameVisible: false,
        isImageVisible: false,
        onlyCorners: true
      }
    },
    ios: {
      codeType: 'QR',
      cameraConfig,
      customViewConfig: {
        customViewName: 'qr_enrollment_view_overlay',
        id: 'qrEnrollmentView',
        options
      },
      overlayConfig: {
        backgroundColor: '#101010',
        captureFrameColor: '#5BBEFF',
        borderWidth: '0',
        isImageVisible: false
      }
    }
  };
  const nonAccountLink = {
    disableLinkClick: false,
    disableIconClick: false,
    activateContainerClick: true,
    buttonConfig: { icon: 'coronita:forward'},
    titleText: 'device-access-non-client-link-form-title',
    texts: [ {text: 'device-access-non-client-identification-form-access'} ]
  };
  const creditEntrypoint = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-link-list',
    properties: {
      light: true,
      className: 'no-border-bottom',
      disableLinkClick: true,
      disableIconClick: true,
      activateContainerClick: false,
      titleText: '',
      buttonConfig: {},
      texts: [],
      cellsConnections: {
        in: {
          DEVICE_ACCESS_FLAG_NON_ACCOUNT_CLIENT_CLICK: {
            bind: 'setProperties'
          }
        },
        out: {
          DEVICE_ACCESS_INIT_MONOPRODUCT: {
            bind: 'link-list-clicked'
          }
        }
      }
    }
  };
  const base = {
    hash: 'device-access-page',
    currentPage: {
      url: '/device-access-page'
    },
    pages,
    language: getLanguage(),
    template: {
      tag: 'cells-template-coronita',
      properties: {
        headerHeight,
        extraHeaderClass: 'bbva-core-blue',
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        fixOffsetScroll: 0,
        footerHeight: 100,
        className: isNativeIos ? 'ios-top-padding bg-white' : 'bg-white',
        cellsConnections: {
          in: {
            DEVICE_ACCESS_INIT_PAGE: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER(CONFIG), // eslint-disable-line new-cap
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_deviceAccessPage: {
                bind: 'init'
              }
            },
            out: {
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              DEVICE_ACCESS_INIT_PAGE: {
                bind: 'init-page'
              },
              DEVICE_ACCESS_RESET_PAGE: {
                bind: 'init-page'
              },
              close_control_veil: {
                bind: 'reset'
              },
              init_page_device_access_get_platform: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'device-access—page-header-text',
          cellsConnections: {
            out: {
              DEVICE_ACCESS_BACK: {
                bind: 'click-right-button'
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
          backAction: 'header-right-button',
          cellsConnections: {
            in: {
              DIGITAL_ACTIVATION_CLOSE_PAGE: {
                bind: 'goBack'
              }
            },
            out: {
              digital_activation_back_forward: {
                bind: 'header-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-card-advice',
        properties: {
          className: 'image-m no-wrapper',
          imageUrl: './images/call-activation.svg',
          titleText: 'device-access—page-cells-card-advice-title',
          text: 'device-access—page-cells-card-advice-text',
          isBackgroundLight: true
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        properties: {
          title: 'device-access—page-cells-title',
          mainDescription: 'device-access—page-cells-description'
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-molecule-input',
        properties: {
          className: 'input-lateral-padding',
          label: 'device-access—page-label',
          icon: 'coronita:camera',
          iconAction: 'tap',
          extraIcon: 'coronita:close',
          extraIconLabel: 'clear',
          iconVisibility: 'always',
          iconToggled: 'coronita:camera',
          allowedChars: '^[0-9]+$',
          maxLength: 16,
          type: 'text',
          inputMode: 'numeric',
          timeoutKeyUp: 100,
          delayKeyUp: 100,
          cellsConnections: {
            in: {
              device_access_clean_input_alert: {
                bind: 'value'
              },
              device_access_send_card_number: {
                bind: 'value'
              },
              device_access_send_qr_card_number: {
                bind: 'value'
              }
            },
            out: {
              DEVICE_ACCESS_FOCUS_INPUT: {
                bind: 'cells-molecule-input-focus'
              },
              DEVICE_ACCESS_KEY_UP: {
                bind: 'bind-value-changed'
              },
              DEVICE_ACCESS_CARD_DATA_ON_BLUR: {
                bind: 'cells-molecule-input-blur'
              },
              DEVICE_ACCESS_CARD_DATA: {
                bind: 'cells-molecule-input-keyup'
              },
              DEVICE_ACCESS_OPEN_QR_CAMERA: {
                bind: 'cells-molecule-input-icon-tap'
              },
              DEVICE_ACCESS_MOLECULE_INPUT_CLEAR: {
                bind: 'cells-molecule-input-clear'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        properties: {
          className: 'help-message',
          icon: 'coronita:info',
          message: 'device-access—page-info-icon',
          type: 'info-dark'
        }
      },
      creditEntrypoint,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        properties: {
          className: 'default-horizontal-margin funds-investment-last-spacing',
          type: 'info-dark',
          icon: 'coronita:info',
          message: 'device-access—page-glomo-icon-message'
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        type: 'UI',
        properties: {
          className: 'no-shadow no-border-bottom',
          config: configButtons,
          cellsConnections: {
            in: {
              DEVICE_ACCESS_ENABLE_CONTINUE_BUTTON: {
                bind: 'enablePrimaryButton'
              },
              DEVICE_ACCESS_DISABLE_CONTINUE_BUTTON: {
                bind: 'disablePrimaryButton'
              },
              DEVICE_ACCESS_RESET: {
                bind: 'disablePrimaryButton'
              },
              DEVICE_ACCESS_MOLECULE_INPUT_CLEAR: {
                bind: 'disablePrimaryButton'
              }
            },
            out: {
              DEVICE_ACCESS_ACCEPT: {
                bind: 'cells-confirm-buttons-click-primary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-controller-device-activation-facial-biometrics-enrollment',
        tag: 'bbva-controller-device-activation-facial-biometrics-enrollment',
        properties: {
          isNativeIos,
          srcImgError: './images/general_error.svg',
          srcImgSuccess: './images/check_successful.svg',
          srcImgInfo: './images/Info.svg',
          qrConfig: isNativeIos ? qrPluginConfig.ios : qrPluginConfig.android,
          lineBbva: CONFIG.bbvaLine,
          characterQrCard: '•',
          nonAccountLink,
          cellsConnections: {
            in: {
              global_login_success: {
                bind: 'customerData'
              },
              global_feature_flag_collection_updated: {
                bind: 'settings'
              },
              DEVICE_ACCESS_BACK: {
                bind: 'deviceAccessLeaveProcess'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'deviceAccessLeaveProcess'
              },
              DEVICE_ACCESS_ACCEPT: {
                bind: 'validateSubscription'
              },
              DEVICE_ACCESS_RESET_PAGE: {
                bind: 'resetPage'
              },
              DEVICE_ACCESS_INIT_PAGE: {
                bind: 'hideSpinner'
              },
              DEVICE_ACCESS_PAGE: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_DATA_FLAGS: {
                bind: 'setProperties'
              },
              DEVICE_ACCESS_CARD_DATA_ON_BLUR: {
                bind: 'dataInputs'
              },
              DEVICE_ACCESS_CARD_DATA: {
                bind: 'dataInput'
              },
              device_access_open_settings_qr: {
                bind: 'openNativeSettings'
              },
              DEVICE_ACCESS_OPEN_QR_CAMERA: {
                bind: 'callQrScanner'
              },
              qr_scanner_plugin_response_success: {
                bind: 'qrScannerResponse'
              },
              device_access_cipher_keys_success: {
                bind: 'validateKeys'
              },
              device_access_decipher_qr_card_number_success: {
                bind: 'onDecipherQrSuccess'
              },
              device_access_decrypt_data_success: {
                bind: 'rsaSuccess'
              },
              device_access_validate_subscription_success: {
                bind: 'validateSubscriptionSuccess'
              },
              device_access_validate_subscription_error: {
                bind: 'validateSubscriptionError'
              },
              device_access_device_activation_success: {
                bind: 'deviceActivationSuccess'
              },
              device_access_device_activation_error: {
                bind: 'deviceActivationError'
              },
              device_access_list_biometrics_success: {
                bind: 'listBiometricsSuccess'
              },
              device_access_list_biometrics_error: {
                bind: 'listBiometricsError'
              },
              device_card_ocr_scanned: {
                bind: 'ocrCard'
              },
              device_card_ocr_is_capable: {
                bind: 'buildOCRPayload'
              },
              device_access_show_call_bbva_line: {
                bind: 'openCallBbva'
              },
              qr_scanner_plugin_response_error: {
                bind: 'openErrorModalQr'
              },
              device_access_notification_error_accept: {
                bind: 'cleanInput'
              },
              device_access_notification_error_cancel: {
                bind: 'cleanInput'
              },
              device_access_leave_process_accept: {
                bind: 'reset'
              },
              device_access_code_qr_cancel: {
                bind: 'reset'
              },
              DEVICE_ACCESS_INIT_MONOPRODUCT: {
                bind: 'initNonAccountFlow'
              },
              device_access_get_customer_channel_status_success: {
                bind: 'getChannelStatusDataResponse'
              },
              device_access_get_customer_channel_status_error: {
                bind: 'getChannelStatusDataResponseError'
              },
              device_access_user_with_card_accept: {
                bind: 'goBackLogin'
              },
              device_access_user_with_card_cancel: {
                bind: 'goBackLogin'
              }
            },
            out: {
              DEVICE_ACCESS_CALL_PAGE: {
                bind: 'device-activation-call',
                link: {
                  page: 'deviceAccessCall',
                  skipHistory: true
                }
              },
              DEVICE_ACCESS_VERIFICATION_PAGE: {
                bind: 'device-access-verification',
                link: {
                  page: 'deviceAccessVerification',
                  skipHistory: true
                }
              },
              DEVICE_ACCESS_SUCCESS_PAGE: {
                bind: 'device-access-success',
                link: {
                  page: 'deviceAccessSuccess',
                  skipHistory: true
                }
              },
              DEVICE_ACCESS_ENABLE_CONTINUE_BUTTON: {
                bind: 'enable-button'
              },
              DEVICE_ACCESS_DISABLE_CONTINUE_BUTTON: {
                bind: 'disable-button'
              },
              device_access_clean_input_alert: {
                bind: 'device-access-clean-input-alert'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              glomo_qr_plugin_params: {
                bind: 'glomo-qr-plugin-params'
              },
              device_access_send_qr_card_number: {
                bind: 'send-qr-card-number'
              },
              device_access_get_cipher_rsa_keys: {
                bind: 'get-cipher-rsa-keys'
              },
              device_access_decipher_qr_card_number: {
                bind: 'decipher-qr-card-number'
              },
              device_access_decrypt_data_params: {
                bind: 'decrypt-data-rsa'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-alert-manager'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              device_access_validate_subscription: {
                bind: 'validate-subscription'
              },
              device_access_analytics_notifications_error: {
                bind: 'analytics-footprint-notifications-error'
              },
              device_access_analytics_face_recognition_blocked: {
                bind: 'analytics-footprint-face-recognition-blocked'
              },
              device_access_analytics_invalid_card: {
                bind: 'analytics-footprint-invalid-card'
              },
              global_retry_error: {
                bind: 'device-access-error-retry'
              },
              device_access_device_activation: {
                bind: 'device-activation'
              },
              DEVICE_ACCESS_DATA_CALL_PAGE: {
                bind: 'device-activation-call-image'
              },
              device_access_analytics_ivr: {
                bind: 'analytics-step-two-ivr'
              },
              device_access_analytics_biometric: {
                bind: 'analytics-step-two-biometric'
              },
              device_access_analytics_ivr_biometric: {
                bind: 'analytics-step-two-ivr-biometric'
              },
              DEVICE_ACCESS_DATA: {
                bind: 'device-access-data'
              },
              DEVICE_ACCESS_TYPE_FLOW: {
                bind: 'device-access-type-flow'
              },
              DEVICE_ACCESS_DATA_FLAGS: {
                bind: 'device-access-flags'
              },
              device_access_get_list_biometrics: {
                bind: 'get-list-biometrics'
              },
              DEVICE_ACCESS_HIDDEN_ICON_MESSAGE: {
                bind: 'hidden-icon-message'
              },
              device_access_open_native_settings: {
                bind: 'open-native-settings'
              },
              device_access_send_card_number: {
                bind: 'send-card-number'
              },
              device_access_scan_card_data: {
                bind: 'build-payload-card-data'
              },
              global_action_launcher_dialer: {
                bind: 'open-call-bbva'
              },
              device_access_logout_user: {
                bind: 'go-back-login'
              },
              device_access_analytics_app_page_completed: {
                bind: 'analytics-step-app-page-completed'
              },
              device_access_analytics_analytics_type_flow: {
                bind: 'send-data-type-flow'
              },
              DEVICE_ACCESS_FLAG_NON_ACCOUNT_CLIENT_CLICK: {
                bind: 'flag-non-account-client-entrypoint'
              },
              device_access_get_customer_channel_status_non_account: {
                bind: 'get-customer-channel-status'
              },
              device_access_analytics_started_credit: {
                bind: 'non-account-client-started-credit'
              },
              device_access_analytics_app_blocked: {
                bind: 'device-access-analytics-app-blocked'
              },
              device_access_analytics_camera_denied_access: {
                bind: 'device-access-analytics-camera-denied-access'
              },
              device_access_analytics_something_is_wrong: {
                bind: 'device-access-analytics-something-is-wrong'
              },
              device_access_analytics_incorrect_identity: {
                bind: 'device-access-analytics-incorrect-identity'
              },
              device_access_analytics_facial_identity_fail: {
                bind: 'analytics-footprint-facial-blocked'
              },
              device_access_analytics_access_with_card: {
                bind: 'analytics-footprint-user-with-card'
              },
              device_access_analytics_access_qr_not_valid: {
                bind: 'analytics-footprint-qr-not-valid'
              },
              device_access_analytics_resgistration_required: {
                bind: 'analytics-registration-required'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-mobile-nativesettings',
        properties: {
          cellsConnections: {
            in: {
              device_access_open_native_settings: {
                bind: 'openSetting'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
        tag: 'bbva-nativeconnector-bbva-qr',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              glomo_qr_plugin_params: {
                bind: 'openCameraCodeReader'
              }
            },
            out: {
              qr_scanner_plugin_response_success: {
                bind: 'bbva-qr-plugin-camera-code-success'
              },
              qr_scanner_plugin_response_error: {
                bind: 'bbva-qr-plugin-camera-code-error'
              },
              qr_scanner_plugin_response_error_analytic: {
                bind: 'bbva-qr-plugin-camera-code-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-mobile-ocrcard',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              device_access_read_card_ocr: {
                bind: 'canScan'
              },
              device_access_scan_card_data: {
                bind: 'scan'
              }
            },
            out: {
              device_card_ocr_is_capable: {
                bind: 'card-ocr-is-capable'
              },
              device_card_ocr_scanned: {
                bind: 'card-ocr-scanned'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-nativeconnector-cipher',
        type: 'DM',
        properties: {
          isNative: native,
          returnAsObject: true,
          cellsConnections: {
            in: {
              device_access_get_cipher_rsa_keys: {
                bind: 'rsaKeyPair'
              },
              device_access_decrypt_data_params: {
                bind: 'rsaDecrypt'
              }
            },
            out: {
              device_access_cipher_keys_success: {
                bind: 'rsa-key-pair-success'
              },
              device_access_decrypt_data_success: {
                bind: 'rsa-decrypt-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-device-accesses-manager-mx',
        familyPath: '@glomo-web-components/glomo-analytics-device-accesses-manager',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              DEVICE_ACCESS_FOCUS_INPUT: {
                bind: 'appStartedFocus'
              },
              device_access_analytics_ivr: {
                bind: 'appStepTwo'
              },
              device_access_analytics_biometric: {
                bind: 'appPageVisit'
              },
              device_access_analytics_ivr_biometric: {
                bind: 'appStepTwo'
              },
              device_access_analytics_notifications_error: {
                bind: 'footprintNotificationsError'
              },
              device_access_analytics_invalid_card: {
                bind: 'footprintInvalidCard'
              },
              qr_scanner_plugin_response_error_analytic: {
                bind: 'footprintOcr'
              },
              device_access_analytics_analytics_type_flow: {
                bind: 'typeFlow'
              },
              device_access_analytics_started_credit: {
                bind: 'appOnClickStartContinue'
              },
              device_access_analytics_app_blocked: {
                bind: 'footprintErrorApplicationBlocked'
              },
              device_access_analytics_camera_denied_access: {
                bind: 'footprintErrorNoCameraPermissions'
              },
              device_access_analytics_something_is_wrong: {
                bind: 'footprintErrorSomethingIsWrong'
              },
              device_access_analytics_incorrect_identity: {
                bind: 'footprintErrorIncorrectIdentity'
              },
              device_access_analytics_facial_identity_fail: {
                bind: 'footprintErrorIdentityFail'
              },
              device_access_analytics_access_with_card: {
                bind: 'footprintErrorAccessWithCard'
              },
              DEVICE_ACCESS_ACCEPT: {
                bind: 'appOnClickStartContinue'
              },
              device_access_analytics_face_recognition_blocked: {
                bind: 'footprintFaceRecognitionBlocked'
              },
              device_access_analytics_access_qr_not_valid: {
                bind: 'footprintErrorNotValidQR'
              },
              device_access_analytics_resgistration_required: {
                bind: 'footprintMustRegisterAgain'
              }
            },
            out: {
              DEVICE_ACCESS_ANALYTICS_APP_STEP_TWO_IVR: {
                bind: 'device-access-analytic-app-step-two-ivr',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.footprint', literals.sections.mobileTokenRecovery, 'solicitud de llamada')
              },
              DEVICE_ACCESS_ANALYTICS_APP_STEP_TWO_BIOMETRIC: {
                bind: 'device-access-analytic-app-page-visit',
                analytics: pageAnalytics.appPageVisit
              },
              DEVICE_ACCESS_ANALYTICS_FOOTPRINT_NOTIFICATIONS_ERROR: {
                bind: 'device-access-analytic-footprint-notifications-error',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.unassociatedCard', literals.commons.tokenMovil, 'error tarjeta no asociada', '', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTICS_FOOTPRINT_INVALID_CARD: {
                bind: 'device-access-analytic-footprint-invalid-card',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.invalidCard', literals.commons.tokenMovil, 'error tarjeta no valida', '', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTICS_FOOTPRINT_QR_OCR_SCREEN: {
                bind: 'device-access-analytic-footprint-qr-ocr-screen',
                analytics: pageAnalytics._advancedFootPrint('qr')
              },
              DEVICE_ACCESS_ANALYTIC_FOOTPRINT_USER_ERROR_APPLICATION_BLOCKED: {
                bind: 'device-access-analytic-footprint-user-error-application-blocked',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.blockedApp', literals.commons.tokenMovil, 'error aplicacion bloqueada', '', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTIC_FOOTPRINT_USER_ERROR_CAMERA_DENIED_ACCESS: {
                bind: 'device-access-analytic-footprint-user-error-camera-denied-access'
              },
              DEVICE_ACCESS_ANALYTIC_FOOTPRINT_USER_ERROR_SOMETHING_IS_WRONG: {
                bind: 'device-access-analytic-footprint-user-error-something-is-wrong',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.somethingIsWrong', literals.commons.tokenMovil, 'huella facial', 'aviso algo salio mal')
              },
              DEVICE_ACCESS_ANALYTIC_FOOTPRINT_USER_ERROR_INCORRECT_IDENTITY: {
                bind: 'device-access-analytic-footprint-user-error-incorrect-identity',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.incorrectIdentity', literals.commons.tokenMovil, 'error identidad incorrecta', '', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTIC_FOOTPRINT_USER_ERROR_IDENTITY_FAIL: {
                bind: 'device-access-analytic-footprint-user-error-identity-fail',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.identityFail', literals.commons.tokenMovil, 'error verificacion facial', '', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTIC_FOOTPRINT_USER_ERROR_ACCESS_WITH_CARD: {
                bind: 'device-access-analytic-footprint-user-error-access-with-card',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.footprint', literals.commons.tokenMovil, 'reintentar con tarjeta')
              },
              DEVICE_ACCESS_ANALYTIC_ON_CLICK_START_CONTINUE: {
                bind: 'device-access-analytic-on-click-continue',
                analytics: pageAnalytics.appOnClickStart
              },
              DEVICE_ACCESS_ANALYTIC_FACE_RECOGNITION_BLOCKED: {
                bind: 'device-access-analytic-footprint-face-recognition-blocked',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.faceRecognitionBlocked', literals.commons.tokenMovil, 'huella facial', 'error reconocimiento bloqueado', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTIC_NOT_VALID_QR: {
                bind: 'device-access-analytic-not-valid-qr',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.invalidQR', literals.commons.tokenMovil, 'error codigo qr no valido', '', literals.types.error)
              },
              DEVICE_ACCESS_ANALYTICS_REGISTER_AGAIN: {
                bind: 'device-access-analytic-footprint-must-register-again',
                analytics: pageAnalytics.advancedFootprintFlag('deviceAccess.repeatRegistration', literals.commons.tokenMovil, 'error registrarse de nuevo', '', literals.types.error)

              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-cards-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          cardsApiVersion: CONFIG.globalServices.versions.cardPayments,
          native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              device_access_decipher_qr_card_number: {
                bind: 'cardsDecipherQrPost'
              }
            },
            out: {
              device_access_decipher_qr_card_number_success: {
                bind: 'decipher-qr-success-response-event'
              },
              device_access_decipher_qr_card_number_error: {
                bind: 'decipher-qr-error-response-event'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-notifications-subscriptions',
        properties: {
          host: CONFIG.globalServices.host,
          native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          subscriptionsApiVersion: CONFIG.globalServices.versions.notifications,
          cellsConnections: {
            in: {
              device_access_validate_subscription: {
                bind: 'validateSubscription'
              }
            },
            out: {
              device_access_validate_subscription_success: {
                bind: 'post-validate-subscription-success'
              },
              device_access_validate_subscription_error: {
                bind: 'error-on-post-validate-subscription'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: 'cells-dm-global-apis-customers',
        tag: 'cells-dm-global-apis-customers-mx',
        properties: {
          host: CONFIG.globalServices.host,
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          authenticationType: CONFIG.globalServices.customers.headers.authenticationType,
          native,
          cellsConnections: {
            in: {
              device_access_device_activation: {
                bind: 'postDeviceActivation'
              },
              device_access_get_list_biometrics: {
                bind: 'getListBiometrics'
              },
              device_access_get_customer_channel_status_non_account: {
                bind: 'getCustomerChannelStatus'
              }
            },
            out: {
              device_access_device_activation_success: {
                bind: 'post-device-activation-success'
              },
              device_access_device_activation_error: {
                bind: 'post-device-activation-error'
              },
              device_access_list_biometrics_success: {
                bind: 'get-list-biometrics-success'
              },
              device_access_list_biometrics_error: {
                bind: 'get-list-biometrics-error'
              },
              device_access_get_customer_channel_status_success: {
                bind: 'get-customer-channel-status-success'
              },
              device_access_get_customer_channel_status_error: {
                bind: 'error-on-get-customer-channel-status'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-bgadp-user-dm',
        properties: {
          host: CONFIG.globalServices.hostGrantingTicket,
          consumerId: CONFIG.globalServices.consumerIdAnonymous,
          country: 'mx',
          native,
          grantingTicketApiVersion: CONFIG.globalServices.versions.grantingTicket,
          cellsConnections: {
            in: {
              device_access_logout_user: {
                bind: 'logout'
              }
            },
            out: {
              device_access_logout: {
                bind: 'logout-request-start'
              }
            }
          }
        }
      }
    ]
  };
  addCommonErrors(base.components)();
  addRetryErrors(base)([
    {
      id: 'DEVICE-ACCESS-ITERRUPTED-CONNECTION-ERROR',
      cancelRetry: { bind: 'reset', component: 'bbva-controller-device-activation-facial-biometrics-enrollment' },
      acceptCallForHelp: { bind: 'reset', component: 'bbva-controller-device-activation-facial-biometrics-enrollment' }
    }
  ]);
  return base;
};
