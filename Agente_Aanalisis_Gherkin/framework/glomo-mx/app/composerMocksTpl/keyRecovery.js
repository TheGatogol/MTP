'use strict';
module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { customersV1 } },
    native = false,
    nativeIos = false,
    environment,
    phoneNumberContact
  } = CONFIG;
  const { bbvaQrPluginConfigs } = require('./common/helpers/_constants');
  const pageName = 'keyRecovery';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const localStorageKey = nativeIos ? 'userID' : 'remembered_user_document';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const _localStorage = require('./common/_local-storage');
  const keyRecoveryAnalytics = require('./analytics/_keyRecovery')(CONFIG);
  const _qrAdditionalConfig =  {
    firstButton: 'Tengo un Qr',
    secondButton: 'No tengo un Qr',
    firstFooterLabel: 'Escanea el QR al reverso de tu tarjeta.',
    secondFooterLabel: 'Si no tienes un QR, toma una foto de los 16 números de tu tarjeta.'
  };
  const qrConfig = JSON.parse(JSON.stringify(bbvaQrPluginConfigs.commons));
  qrConfig.android.customViewConfig.options = Object.assign(qrConfig.android.customViewConfig.options, _qrAdditionalConfig);
  qrConfig.ios.customViewConfig.options = Object.assign(qrConfig.ios.customViewConfig.options, _qrAdditionalConfig);
  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      className: nativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          device_access_registration_required_accept: {
            bind: 'alert-DEVICE-ACTIVATION-REGISTRATION-REQUIRED-accept',
            link: {
              page: 'digitalActivation',
              skipHistory: true
            }
          },
          device_access_registration_required_cancel: {
            bind: 'alert-DEVICE-ACTIVATION-REGISTRATION-REQUIRED-cancel'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/access-key-recovery'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: 'dark-blue-bg',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true
      },
      propertiesSpherica: {
        className: ''
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-feature-access-key-recovery-mx',
        familyPathSpherica: '@glomo-web-components/bbva-feature-access-key-recovery-mx-spherica',
        tag: 'bbva-feature-access-key-recovery-mx',
        tagSpherica: 'bbva-feature-access-key-recovery-mx-spherica',
        render: 'litElement',
        properties: {
          phoneNumberBbvaLine: phoneNumberContact,
          host,
          native,
          isNativeIos: nativeIos,
          environment,
          requiredToken,
          customersApiVersion: customersV1,
          imageSuccess: './images/success.svg',
          imageError: './images/Error.svg',
          imageSecurity: './images/security_changes_dark.svg',
          localStorageKey,
          localStorageSecure: true,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              __bridge_page_keyRecovery: {
                bind: 'initFlow'
              },
              native_user_id: {
                bind: 'getCustomerNativePhoneNumber'
              },
              [`global_storage_get_${localStorageKey}_success`]: {
                bind: 'getLocalStorageKeySucces'
              },
              [`global_storage_get_${localStorageKey}_error`]: {
                bind: 'getLocalStorageKeyError'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'sureLeaveTheProcess'
              },
              sign_modal_cancelled: {
                bind: 'onSignOtpCanceled'
              },
              global_glomo_signature_open_modal_error: {
                bind: 'onSignOtpCanceled'
              },
              global_glomo_signature_open_modal_error_spherica: {
                bind: 'onSignOtpCanceled'
              },
              sign_modal_cancelled_widgetErrorHandler: {
                bind: 'onSignOtpCanceled'
              },
              device_access_registration_required_cancel: {
                bind: 'exit'
              },
              key_recovery_qr_code_scanner_plugin_response_success: {
                bind: 'qrCodeScannerSuccess'
              },
              key_recovery_qr_code_scanner_plugin_response_error: {
                bind: 'qrCodeSacannerError'
              },
              key_recovery_card_ocr_is_capable: {
                bind: 'ocrCardParams'
              },
              key_recovery_card_ocr_scanned: {
                bind: 'getOcrCardData'
              },
              key_recovery_encrypted_data: {
                bind: 'getEncryptData'
              },
              key_recovery_set_date_select: {
                bind: 'setDate'
              }
            },
            out: {
              global_get_from_storage: {
                bind: 'bbva-feature-access-key-recovery-request-phone-number'
              },
              key_recovery_open_qr_code: {
                bind: 'bbva-access-key-recovery-scan-qr-code'
              },
              key_recovery_launch_date_picker: {
                bind: 'bbva-access-key-recovery-launch-date-picker'
              },
              key_recovery_open_camara: {
                bind: 'akr-open-camara-to-scan-physical-card'
              },
              key_recovery_build_params_ocr_card: {
                bind: 'bbva-build-params-ocr-card'
              },
              key_recovery_encrypt_cvv_request: {
                bind: 'bbva-encrypt-cvv-request'
              },
              key_recovery_encrypt_pin_request: {
                bind: 'bbva-encrypt-pin-request'
              },
              key_recovery_open_atm_locator: {
                bind: 'access-key-recovery-incorrect-data-event-place',
                link: {
                  page: 'atmLocator',
                  skipHistory: true
                }
              },
              global_action_launcher_dialer: {
                bind: 'access-key-recovery-incorrect-data-event-call'
              },
              key_recovery_redirect_to_digital_activation: {
                bind: 'access-key-recovery-invalid-user-footer-click',
                link: {
                  page: 'digitalActivation',
                  skipHistory: true
                }
              },
              global_logout_sesion_expiration: {
                bind: 'access-key-recovery-invalid-user-link-click'
              },
              global_generic_error: {
                bind: 'api-dm-error'
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-alert-manager'
              },
              key_recovery_navigate_to_digital_activation: {
                bind: 'akr-has-to-register-again',
                link: {
                  page: 'digitalActivation',
                  skipHistory: true
                }
              },
              key_recovery_navigate_to_atm_branches_locator: {
                bind: 'locate-atm-branches',
                link: {
                  page: 'atmLocator',
                  skipHistory: true
                }
              },
              help_open_outside_phone_number: {
                bind: 'glomo-help-phone-button-clicked',
                link: {
                  page: 'help',
                  skipHistory: true
                }
              },
              key_recovery_back_to_login: {
                bind: 'bbva-access-key-recovery-go-back'
              },
              key_recovery_akr_technical_error_native: {
                bind: 'akr-technical-error-footer-link',
                'forward-to-native': true,
                skipNavigations: true,
                backStep: true
              },
              key_recovery_akr_success_reset_password_close_modal_native: {
                bind: 'akr-success-reset-password-right-primary-icon_native',
                'forward-to-native': true,
                skipNavigations: true,
                backStep: true
              },
              key_recovery_akr_qr_code_invalid_exit_native: {
                bind: 'akr-invalid-qr-code-footer-link',
                'forward-to-native': true,
                skipNavigations: true,
                backStep: true
              },
              key_recovery_akr_qr_code_invalid_close_modal_native: {
                bind: 'akr-invalid-qr-code-right-primary-icon',
                'forward-to-native': true,
                skipNavigations: true,
                backStep: true
              },
              key_recovery_analytics_manager_app_started: {
                bind: 'key-recovery-analytics-app-started'
              },
              key_recovery_analytics_manager_set_application_process: {
                bind: 'set-application-process'
              },
              key_recovery_analytics_manager_set_application_typology_digital: {
                bind: 'set-typology-digital'
              },
              key_recovery_analytics_manager_set_application_typology_physical: {
                bind: 'set-typology-physical'
              },
              key_recovery_analytics_manager_app_step_two: {
                bind: 'key-recovery-analytics-app-step-two'
              },
              key_recovery_analytics_manager_app_step_three: {
                bind: 'key-recovery-analytics-app-step-three'
              },
              key_recovery_analytics_manager_app_step_four: {
                bind: 'key-recovery-analytics-app-step-four'
              },
              key_recovery_analytics_manager_app_step_five: {
                bind: 'key-recovery-analytics-app-step-five'
              },
              key_recovery_analytics_manager_app_completed: {
                bind: 'key-recovery-analytics-app-completed'
              },
              key_recovery_analytics_manager_page_view_client: {
                bind: 'key-recovery-analytics-page-view-client'
              },
              key_recovery_analytics_manager_page_view_card: {
                bind: 'key-recovery-analytics-page-view-card'
              },
              key_recovery_analytics_manager_card_not_associated_error: {
                bind: 'key-recovery-analytics-card-not-associated-error'
              },
              key_recovery_analytics_manager_invalid_card_error: {
                bind: 'key-recovery-analytics-invalid-card-error'
              },
              key_recovery_analytics_manager_invalid_qr_error: {
                bind: 'key-recovery-analytics-invalid-qr-error'
              },
              key_recovery_analytics_manager_third_attempt_error: {
                bind: 'key-recovery-analytics-third-attempt-error'
              }
            }
          }
        },
        propertiesSpherica: {
          override: {
            cellsConnections: {
              key_recovery_navigate_to_atm_branches_locator: {
                bind: 'button-row-item-locate-atm-branches-click',
                link: {
                  page: 'atmLocator',
                  skipHistory: true
                }
              }
            }
          },
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'open-alert-manager'
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
      }
    ]
  };
  const glomoDashboardManager = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-glomo-dashboard-manager-mx',
    familyPath: 'cells-glomo-dashboard-manager',
    properties: {
      cellsConnections: {
        in: {
          key_recovery_back_to_login: {
            bind: 'logoutAndModalIgnore'
          }
        },
        out: {
          global_logout_sesion_expiration: {
            bind: 'dashboard-native-logout-confirm'
          }
        }
      }
    }
  };
  const bbvaNativeconnectorCipher = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-cipher',
    type: 'DM',
    properties: {
      isNative: native,
      cellsConnections: {
        in: {
          key_recovery_encrypt_cvv_request: {
            bind: 'pinCipherEncryptFromConfig'
          },
          key_recovery_encrypt_pin_request: {
            bind: 'pinCipherEncryptFromConfig'
          }
        },
        out: {
          key_recovery_encrypted_data: {
            bind: 'pin-cipher-encrypt-from-config-success'
          }
        }
      }
    }
  };
  const bbvaManagerQrScanner = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-qr-scanner',
    familyPath: '@glomo-web-components/bbva-manager-qr-scanner',
    render: 'litElement',
    properties: {
      qrPluginConfigs: qrConfig || {},
      selectedPluginConfig: nativeIos ? 'ios' : 'android',
      cellsConnections: {
        in: {
          key_recovery_open_qr_code: {
            bind: 'managePluginParams'
          }
        },
        out: {
          key_recovery_qr_code_plugin_params: {
            bind: 'glomo-qr-plugin-params'
          }
        }
      }
    }
  };
  const bbvaNativeconnectorQrCode = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-bbva-qr',
    familyPath: '@glomo-web-components/bbva-nativeconnector-bbva-qr',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          key_recovery_qr_code_plugin_params: {
            bind: 'openCameraCodeReader'
          }
        },
        out: {
          key_recovery_qr_code_scanner_plugin_response_success: {
            bind: 'bbva-qr-plugin-camera-code-success'
          },
          key_recovery_qr_code_scanner_plugin_response_error: {
            bind: 'bbva-qr-plugin-camera-code-error'
          }
        }
      }
    }
  };
  const bbvaNativeconnectorOcrCard = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-ocr-card',
    familyPath: '@glomo-web-components/bbva-nativeconnector-ocr-card',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          key_recovery_open_camara: {
            bind: 'canScan'
          },
          key_recovery_build_params_ocr_card: {
            bind: 'scan'
          }
        },
        out: {
          key_recovery_card_ocr_is_capable: {
            bind: 'card-ocr-is-capable'
          },
          key_recovery_card_ocr_scanned: {
            bind: 'card-ocr-scanned'
          }
        }
      }
    }
  };
  const bbvaNativeconnectorDatepicker = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-datepicker',
    familyPath: '@glomo-web-components/bbva-nativeconnector-datepicker',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          key_recovery_launch_date_picker: {
            bind: 'launchDatePicker'
          }
        },
        out: {
          key_recovery_set_date_select: {
            bind: 'launch-date-picker-success'
          },
          key_recovery_set_date_select_error: {
            bind: 'launch-date-picker-error'
          }
        }
      }
    }
  };

  const keyRecoveryAnalyticsManager = {
    zone: 'app__main',
    tag: 'glomo-analytics-key-recovery-manager-mx',
    familyPath: '@glomo-web-components/glomo-analytics-key-recovery-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      cellsConnections: {
        in: {
          __bridge_page_keyRecovery: {
            bind: 'startManager'
          },
          global_storage_get_remembered_user_document_success: {
            bind: 'pageVisit'
          },
          global_storage_get_remembered_user_document_error: {
            bind: 'pageVisit'
          },
          key_recovery_analytics_manager_app_started: {
            bind: 'eventTarget'
          },
          key_recovery_analytics_manager_set_application_process: {
            bind: 'setProcess'
          },
          key_recovery_analytics_manager_set_application_typology_digital: {
            bind: 'setTypology'
          },
          key_recovery_analytics_manager_set_application_typology_physical: {
            bind: 'setTypology'
          },
          key_recovery_analytics_manager_app_step_two: {
            bind: 'recoveryPassword'
          },
          key_recovery_analytics_manager_app_step_three: {
            bind: 'modifyPassword'
          },
          key_recovery_analytics_manager_app_step_four: {
            bind: 'securityStep'
          },
          key_recovery_analytics_manager_page_view_client: {
            bind: 'validClient'
          },
          key_recovery_analytics_manager_page_view_card: {
            bind: 'validCard'
          },
          widget_signature_handle_required_first_step: {
            bind: 'stepConfirmation'
          },
          key_recovery_analytics_manager_app_completed: {
            bind: 'appCompleted'
          },
          key_recovery_analytics_manager_third_attempt_error: {
            bind: 'thirdAttemptError'
          },
          key_recovery_analytics_manager_invalid_qr_error: {
            bind: 'invalidQRError'
          },
          key_recovery_analytics_manager_invalid_card_error: {
            bind: 'invalidCard'
          },
          key_recovery_analytics_manager_card_not_associated_error: {
            bind: 'cardNotAssociated'
          }
        },
        out: {
          key_recovery_analytics_app_on_click_start: {
            bind: 'analytics-app-on-click-start-analytics-key-recovery',
            analytics: keyRecoveryAnalytics.appOnClickStart
          },
          key_recovery_analytics_app_page_visit: {
            bind: 'analytics-page-visit-analytics-key-recovery',
            analytics: keyRecoveryAnalytics.appPageVisit
          },
          key_recovery_analytics_app_started: {
            bind: 'analytics-key-recovery-step-dynamic',
            analytics: keyRecoveryAnalytics.appStarted
          },
          key_recovery_analytics_app_step_two: {
            bind: 'recovery-password-dynamic',
            analytics: keyRecoveryAnalytics._getAppStep('2', 'identificate')
          },
          key_recovery_analytics_app_step_three: {
            bind: 'modify-password-dynamic',
            analytics: keyRecoveryAnalytics._getAppStep('3', 'crear nueva contrasena')
          },
          key_recovery_analytics_page_view_client: {
            bind: 'valid-client-data',
            analytics: keyRecoveryAnalytics._getPageView('datos del cliente')
          },
          key_recovery_analytics_page_view_card: {
            bind: 'valid-card-data',
            analytics: keyRecoveryAnalytics._getPageView('datos de la tarjeta')
          },
          key_recovery_analytics_app_step_four: {
            bind: 'security-step-dynamic',
            analytics: keyRecoveryAnalytics._getAppStep('4', 'confirmacion')
          },
          key_recovery_analytics_app_step_five: {
            bind: 'confirmation-dynamic',
            analytics: keyRecoveryAnalytics._getAppStep('5', 'otp')
          },
          key_recovery_analytics_app_completed: {
            bind: 'app-completed-dynamic',
            analytics: keyRecoveryAnalytics.appCompleted
          },
          key_recovery_analytics_third_attempt_error: {
            bind: 'third-attempt-error-dynamic',
            analytics: keyRecoveryAnalytics._errorGetAdvancedFootprintErrorLevel2WithFeatureFlag(
              'accessKeyRecovery.thirdAttempt',
              'error datos incorrectos'
            )
          },
          key_recovery_analytics_invalid_qr_error: {
            bind: 'invalid-qr-error-dynamic',
            analytics: keyRecoveryAnalytics._errorGetAdvancedFootprintErrorLevel2WithFeatureFlag(
              'accessKeyRecovery.invalidQR',
              'error codigo qr no valido'
            )
          },
          key_recovery_analytics_invalid_card_error: {
            bind: 'invalid-card-error-dynamic',
            analytics: keyRecoveryAnalytics._errorGetAdvancedFootprintErrorLevel2WithFeatureFlag(
              'accessKeyRecovery.invalidCard',
              'error tarjeta no valida'
            )
          },
          key_recovery_analytics_card_not_associated_error: {
            bind: 'card-not-associated-error-dynamic',
            analytics: keyRecoveryAnalytics._errorGetAdvancedFootprintErrorLevel2WithFeatureFlag(
              'accessKeyRecovery.cardNotAssociated',
              'error tarjeta no asociada con tu numero'
            )
          }
        }
      }
    }
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  if (native) {
    base.components.push(
      glomoDashboardManager,
      bbvaManagerQrScanner,
      bbvaNativeconnectorQrCode,
      bbvaNativeconnectorOcrCard,
      bbvaNativeconnectorCipher,
      keyRecoveryAnalyticsManager
    );
    if (!nativeIos) {
      base.components.push(bbvaNativeconnectorDatepicker);
    }
  }
  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }
  _localStorage.addOutStorageChannels(base.components, [ localStorageKey ], CONFIG);
  errorAndSignWidgetConnector('bbva-feature-access-key-recovery-mx', {widgetId: 'keyRecovery'});
  addCommonErrors(base.components);
  return sphericaPageUtils.spherize(base);
};
