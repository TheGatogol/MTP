'use strict';
module.exports = config => {
  const {
    createPrefixFromPageName,
    createSpinner,
    getAlternativeFormatDate,
    getLanguage,
    headerHeight,
    useNames
  } = require('./common/helpers/_utils');
  const pageName = 'codiQrPaymentsReaderSuccess';
  const pages = require('./common/_pages')(config)(pageName);
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const analyticsPage = require('./analytics/_codiQrPayments')(config);
  const localStorageApp = require('./common/_local-storage');
  const codiEnrollment = 'enrollment_codi_key';
  const isNativeIos = config.nativeIos || false;
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { banxicoApi }
    },
    native = false
  } = config;

  const glomoAlertManagerSpherica =  {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-modal-codi-invalid-qr'
          },
          open_alert_modal_from_invalid_mc_codi: {
            bind: 'open-modal-codi-invalid-qr'
          }
        }
      }
    }
  };

  const base = {
    hash: 'codi-qr-payments-reader-success',
    currentPage: {
      url: '/codi-qr-payments-reader-success'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        className: `dark-blue-bg ${config.nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: isNativeIos,
        mode: 'seamed'
      },
      propertiesSpherica: {
        className: `${config.nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: ''
      }
    },
    components: [
      createSpinner(config),
      cellsConnectionStatus(pageName),
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          titleName: 'glomo-multistep-codi-qr-payments',
          className: 'header--core',
          rightIcon: 'coronita:close',
          rightIconSize: '22',
          cellsConnections: {
            out: {
              [getChannelName('GO_BACK_STEP')]: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--white',
          variant: 'primary-alt',
          rightIconText: 'cells-molecule-header-spherica-close'
        }
      },
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          private: true,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + pageName]: {
                bind: 'init'
              }
            },
            out: {
              codiQrPaymentsReaderSuccess_INIT_PAGE: {
                bind: 'init-page'
              },
              codiQrPaymentsReaderSuccess_get_enrollment: {
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
        type: 'UI',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        properties: {
          withoutHead: true,
          formatDate: getAlternativeFormatDate(),
          language: getLanguage(),
          cellsConnections: {
            in: {
              [getChannelName('SET_QR_DATA')]: {
                bind: 'result'
              },
              [getChannelName('BACK_STEP')]: {
                bind: 'reset'
              },
              __bridge_page_codiQrPaymentsReaderSuccess: {
                bind: 'reset'
              }
            },
            out: {
              navigate_to_qr_payments_main: {
                bind: 'go-to-next',
                link: {
                  page: 'codiQrPaymentsMain',
                  skipHistory: true
                },
                analytics: analyticsPage.appStarted
              }
            }
          }
        },
        propertiesSpherica: {
          operationsVariant: 'primary-alt',
          headerSectionConfig: 'white',
          withSuccessHead: true,
          isImgMicroillustration: true,
          withoutHead: false,
          imgFullPath: './images/spherica/success.svg'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-codi-qr-payments-success',
        familyPath: '@glomo-web-components/bbva-manager-codi',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              global_set_enrollment_data: {
                bind: 'enrollmentData'
              },
              codi_data_enrollment_from_storage: {
                bind: 'validateEnrollment'
              },
              [`global_storage_get_${codiEnrollment}_success`]: {
                bind: 'queryLocalstorageData'
              },
              [`global_storage_get_${codiEnrollment}_error`]: {
                bind: 'queryLocalstorageData'
              },
              glomo_navigate_to_private_qr_scanner: {
                bind: 'decryptQrData'
              },
              [getChannelName('SET_ENCODE_DATA')]: {
                bind: 'createScfRequest'
              },
              codi_qr_payments_authentication_key_success: {
                bind: 'decryptPaymentData'
              },
              codi_qr_payments_authentication_key_error: {
                bind: 'responseKeyError'
              },
              codi_redirect_qr_success_page: {
                bind: 'successfulQr'
              },
              [getChannelName('SET_SHA_IN_HEX')]: {
                bind: 'setSha512Hex'
              },
              [getChannelName('SET_DECRYPTED_DATA')]: {
                bind: 'setDataDecrypted'
              },
              [getChannelName('SET_DECRYPTED_DATA_ERROR')]: {
                bind: 'setDataDecryptedError'
              },
              [getChannelName('GO_BACK_STEP')]: {
                bind: 'goPageBack'
              },
              [getChannelName('BACK_STEP')]: {
                bind: 'reset'
              }
            },
            out: {
              [getChannelName('BACK_STEP')]: {
                bind: 'back-step-out-flow',
                link: {
                  page: 'codiQrScanner',
                  cleanUntil: 'codiQrPaymentsReaderSuccess',
                  skipHistory: true
                }
              },
              qr_reader_success_andare_su_dashboard: {
                bind: 'navigate-back-to-dashboard',
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
              global_set_in_storage: {
                bind: 'set-local-storage-codi'
              },
              codi_qr_payment_open_modal_channel: {
                bind: 'codiqr-open-modal-onboarding'
              },
              global_get_from_storage: {
                bind: 'get-local-storage-codi'
              },
              [getChannelName('GENERATE_HMAC_KEY_SOURCE')]: {
                bind: 'send-key-for-generate-SHA-256'
              },
              codi_qr_payments_authentication_key: {
                bind: 'send-decrypt-to-manager-banxico'
              },
              codi_redirect_qr_success_page: {
                bind: 'send-decrypt-qr'
              },
              [getChannelName('SET_QR_DATA')]: {
                bind: 'send-successful-qr',
                analytics: analyticsPage.appPageVisit
              },
              global_alert_manager_open_with_settings: {
                bind: 'open-modal-codi-invalid-qr',
                analytics: analyticsPage.errorQrInvalid
              },
              [getChannelName('ENCRYPT_SHA_IN_HEX')]: {
                bind: 'encrypt-sha-in-hex'
              },
              codi_data_enrollment_from_storage: {
                bind: 'send-enrollment-data'
              },
              codi_qr_payments_send_info_qr: {
                bind: 'send-qr-info-for-multistep'
              },
              [getChannelName('DESCRYPT_DATA')]: {
                bind: 'qr-payment-decrypt-AES'
              },
              codi_qr_payments_reader_success_qr_reading_analytics: {
                bind: 'qr-reading-analytics',
                analytics: analyticsPage.validateQr
              },
              codiQrPaymentsReaderSuccess_send_success_authentication_key_to_log: {
                bind: 'send-sucess-response-authentication-key-to-log'
              },
              codiQrPaymentsReaderSuccess_send_error_authentication_key_to_log: {
                bind: 'send-error-response-authentication-key-to-log'
              }
            },
            params: {
              codiQrDataNative: 'codiQrDataNative'
            }
          }
        },
        propertiesSpherica: {
          isSpherica,
          newCellsConnections: {
            add: {
              out: {
                global_alert_manager_open_with_settings_spherica: {
                  bind: 'open-modal-codi-invalid-qr'
                },
                open_alert_modal_from_invalid_mc_codi: {
                  bind: 'open-alert-modal'
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
      },
      {
        type: 'DM',
        tag: 'glomo-codicel-crypto-dm',
        zone: 'app__main',
        properties: {
          cellsConnections: {
            in: {
              [getChannelName('ENCRYPT_SHA_IN_HEX')]: {
                bind: 'generateSha512InHex'
              },
              [getChannelName('GENERATE_HMAC_KEY_SOURCE')]: {
                bind: 'generateHmacKeySource'
              },
              [getChannelName('DESCRYPT_DATA')]: {
                bind: 'decryptAES'
              }
            },
            out: {
              [getChannelName('SET_SHA_IN_HEX')]: {
                bind: 'sha-512-in-hex-generated'
              },
              [getChannelName('SET_ENCODE_DATA')]: {
                bind: 'sha-256-generated-base64'
              },
              [getChannelName('SET_DECRYPTED_DATA')]: {
                bind: 'data-decrypted-aes-success'
              },
              [getChannelName('SET_DECRYPTED_DATA_ERROR')]: {
                bind: 'data-decrypted-aes-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'DM',
        tag: 'cells-dm-global-apis-banxico',
        properties: {
          host: config.globalServices.host,
          native: config.native || false,
          requiredToken: config.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              codi_qr_payments_authentication_key: {
                bind: 'postCreateAuthenticationKey'
              }
            },
            out: {
              codi_qr_payments_authentication_key_success: {
                bind: 'success-on-post-banxico-authentication-key'
              },
              codi_qr_payments_authentication_key_error: {
                bind: 'error-on-post-banxico-authentication-key'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-codi-unified-log',
        familyPath: '@glomo-web-components/bbva-manager-codi',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              native_user_id: {
                bind: 'numberPhone'
              },
              global_login_success: {
                bind: 'setCustomerData'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              codiQrPaymentsReaderSuccess_get_enrollment: {
                bind: 'getEnrollmentData'
              },
              global_storage_get_enrollment_codi_key_success: {
                bind: 'setEnrollmentData'
              },
              global_storage_get_enrollment_codi_key_error: {
                bind: 'setEnrollmentData'
              },
              global_storage_get_lost_internet_log_success: {
                bind: 'saveGetConnectionLog'
              },
              global_storage_get_lost_internet_log_error: {
                bind: 'saveGetConnectionLog'
              },
              global_app_change_to_background_state: {
                bind: 'backgroundEnterLog'
              },
              global_app_change_to_foreground_state: {
                bind: 'foregrounEnterLog'
              },
              global_storage_get_unified_log_timeout_session_key_success: {
                bind: 'setTimeoutSessionVerified'
              },
              global_storage_get_unified_log_timeout_session_key_error: {
                bind: 'setTimeoutSessionVerified'
              },
              codi_session_timeout_expired: {
                bind: 'saveInLocalstorageTimeout'
              },
              connection_status_codiQrPaymentsReaderSuccess_online: {
                bind: 'getSendLogLostInternet'
              },
              connection_status_codiQrPaymentsReaderSuccess_offline: {
                bind: 'saveLostInternetConnection'
              },
              codiQrPaymentsReaderSuccess_post_unified_log_event_success: {
                bind: 'responseUnifiedLogSuccess'
              },
              codiQrPaymentsReaderSuccess_post_unified_log_event_error: {
                bind: 'responseUnifiedLogError'
              },
              codiQrPaymentsReaderSuccess_send_success_authentication_key_to_log: {
                bind: 'informAuthenticationKeyLog'
              },
              codiQrPaymentsReaderSuccess_send_error_authentication_key_to_log: {
                bind: 'informAuthenticationKeyLog'
              }
            },
            out: {
              global_get_from_storage: {
                bind: 'get-local-storage-codi'
              },
              global_set_in_storage: {
                bind: 'set-local-storage-codi'
              },
              codiQrPaymentsReaderSuccess_unified_log_event_api_version: {
                bind: 'bbva-manager-codi-unified-log-send-version-post'
              },
              codiQrPaymentsReaderSuccess_unified_log_event_post: {
                bind: 'unified-log-event-post'
              }
            }
          }
        }
      },
      {
        tag: 'bbva-dataprovider-banxico',
        familyPath: '@glomo-web-components/bbva-dataprovider-banxico',
        render: 'litElement',
        zone: 'app__transactional',
        type: 'DM',
        properties: {
          host,
          native,
          requiredToken,
          apiVersion: banxicoApi,
          cellsConnections: {
            in: {
              codiQrPaymentsReaderSuccess_unified_log_event_api_version: {
                bind: 'apiVersionUnifedLogEvent'
              },
              codiQrPaymentsReaderSuccess_unified_log_event_post: {
                bind: 'unifiedLogEventPost'
              }
            },
            out: {
              codiQrPaymentsReaderSuccess_post_unified_log_event_success: {
                bind: 'post-unified-log-event-success'
              },
              codiQrPaymentsReaderSuccess_post_unified_log_event_error: {
                bind: 'post-unified-log-event-error'
              }
            }
          }
        }
      }
    ]
  };
  localStorageApp.addOutStorageChannels(base.components, [
    'qr_payments_codi_onboarding',
    'enrollment_codi_key',
    'registration_completed_codi',
    'lost_internet_log',
    'unified_log_timeout_session_key'
  ], config);

  if (isSpherica) {
    base.components.push(glomoAlertManagerSpherica);
  }

  return sphericaPageUtils.spherize(base);
};
