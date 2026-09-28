'use strict';
module.exports = CONFIG => {
  const PAGENAME = 'fido';
  const utils = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGENAME);
  const isSpherica = sphericaPageUtils.isSpherica();
  const {
    useNames,
    createPrefixFromPageName
  } = utils;
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGENAME);
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const pages = require('./common/_pages')(CONFIG)(PAGENAME);
  const securityAccessAnalytics = require('./analytics/_accesAndSignatures')(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const constants = require('./common/helpers/_constants');
  const TOAST_SNACKBAR_PARAMS = constants.toastSnackBarGeneralParamsSuccess;
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: isNativeIos ? 'ios-top-padding' : '',
      fixOffsetScroll: 0,
      iOSFixedHeader: isNativeIos
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: 'bg-light-grey'
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGENAME,
      private: true,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_fido: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page_fido')]: {
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
  const fidoDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-fido-enrollment-mx',
    familyPath: '@glomo-web-components/bbva-manager-fido',
    render: 'litElement',
    properties: {
      otpId: PAGENAME,
      firstLogin: false,
      id: 'fidoDm',
      native: CONFIG.native || false,
      toastSnackBarParams: TOAST_SNACKBAR_PARAMS,
      activeBioAccess: {
        key: 'activeBioAccess',
        value: true
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsActivateBiometrics'
          },
          global_feature_flag_fido: {
            bind: 'flagSecurityJourneyFido'
          },
          global_device_accesses_customer_id: {
            bind: 'userId'
          },
          [getChannelName('error_biometrics')]: {
            bind: 'checkSecurityJurneyFlag'
          },
          [getChannelName('succes_biometrics')]: {
            bind: 'checkSecurityJurneyFlag'
          },
          sign_modal_cancelled_fido: {
            bind: 'resetSingOtp'
          },
          web_view_visibility: {
            bind: 'backNative'
          },
          device_accesses_sign_request: {
            bind: 'getOtpRequest'
          },
          device_accesses_signing_headers: {
            bind: 'getOtpHeaders'
          },
          register_fido_acepted: {
            bind: 'readBiometric'
          },
          global_configuration_fido_success_accept: {
            bind: 'readBiometric'
          },
          succes_device_fido: {
            bind: 'registerBiometric'
          },
          succes_register_fido: {
            bind: 'activateDigital'
          },
          sign_modal_request: {
            bind: 'signRequest'
          },
          error_register_fido: {
            bind: 'errorRegisterBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'errorRegister'
          },
          cancel_fido_confirm: {
            bind: 'openModalCancel'
          },
          cancel_fido_confirm_header: {
            bind: 'openModalCancel'
          },
          set_configuration_acepted: {
            bind: 'openSettingNative'
          },
          modal_other_moment_back_dashboard: {
            bind: 'cancelActivationToken'
          },
          succes_deleted_fido: {
            bind: 'responseDeleted'
          },
          error_deleted_fido: {
            bind: 'responseDeleted'
          },
          [getChannelName('succes_fido_list')]: {
            bind: 'getFidosResponse'
          },
          modal_other_moment_state_change: {
            bind: 'showFidoEnrollment'
          },
          [getChannelName('cancel_configuration_header')]: {
            bind: 'returnToDashboard'
          },
          cancel_configuration_header_spherica: {
            bind: 'returnToDashboard'
          },
          cancel_fido_configuration_link: {
            bind: 'cancelActivationToken'
          }
        },
        out: {
          check_plugin_biometrics: {
            bind: 'validate-biometrics-plugin'
          },
          open_modal_configuration_mobile: {
            bind: 'show-content-configuration-modal'
          },
          global_set_in_storage: {
            bind: 'set-native-local-storage'
          },
          set_modal_mobile_settings: {
            bind: 'show-content-configuration-modal'
          },
          generate_autentication_biometric: {
            bind: 'generate-autentication'
          },
          delete_from_device: {
            bind: 'delete-from-device-fido-start'
          },
          delete_from_user_device: {
            bind: 'delete-from-device-fido-user-id'
          },
          delete_from_device_id: {
            bind: 'delete-from-device-fido-device-id'
          },
          delete_from_device_action: {
            bind: 'delete-from-device-fido-action'
          },
          register_from_fido: {
            bind: 'register-fido'
          },
          action_from_fido: {
            bind: 'register-from-device-fido-action'
          },
          action_from_fido_start: {
            bind: 'start-register-fido',
            analytics: securityAccessAnalytics.viewTwoEnterBiometrics
          },
          subject_event_register: {
            bind: 'subject-register',
            analytics: securityAccessAnalytics._getAppStep('activar')
          },
          info_dispacht_sign: {
            bind: 'succes-on-post-plugin-biometrics'
          },
          global_fido_enroll_biometry_cancelled: {
            bind: 'fido-enroll-biometry-cancelled'
          },
          fido_enrolled_navigate_to_dashboard: {
            bind: 'fido-enrolled-navigate-to-dashboard',
            link: {
              page: 'dashboard'
            },
            analytics: securityAccessAnalytics.viewSuccessfulPage
          },
          global_message_snackbar: {
            bind: 'global-message-snackbar'
          },
          info_error_register_security_face_id: {
            bind: 'show-alert-success-security-access_face_id',
            backStep: true
          },
          info_succes_register_security: {
            bind: 'show-alert-success-security-access',
            backStep: true
          },
          info_error_register_security_touch_id: {
            bind: 'show-alert-success-security-access_touch_id',
            backStep: true
          },
          device_accesses_sign_response: {
            bind: 'signature-sign-request-fido',
            'forward-to-native': true
          },
          sing_modal_close_fido: {
            bind: 'close-modal-otp'
          },
          info_modal_header_text: {
            bind: 'propertie-modal-header-text'
          },
          info_modal_button_text: {
            bind: 'propertie-modal-button-text'
          },
          info_modal_link_text: {
            bind: 'propertie-modal-link-text'
          },
          info_modal_button_text_cancel: {
            bind: 'info-modal-cancel-fido-button'
          },
          info_modal_text_cancel: {
            bind: 'info-modal-cancel-fido-text'
          },
          open_setttings_mobile: {
            bind: 'open-native-settings'
          },
          open_modal_cancel_info: {
            bind: 'open-modal-cancel-fido',
            analytics: securityAccessAnalytics._getAppStep('en otro momento')
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-activate-fido'
          },
          activate_modal_fido: {
            bind: 'open-modal-activate-fido',
            analytics: securityAccessAnalytics.viewAnAccessMethodAndSignatures
          },
          modal_content_info_show: {
            bind: 'show-content'
          },
          cancel_otp_fido: {
            bind: 'back-cancel-sofToken',
            backStep: true
          },
          cancel_otp_fido_dashboard: {
            bind: 'back-cancel-sofToken-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          set_deleted_fido: {
            bind: 'start-deleted-fido'
          },
          [getChannelName('set_data_toggle_false')]: {
            bind: 'change-toggle-false'
          },
          [getChannelName('set_data_toggle_false_error')]: {
            bind: 'change-toggle-false-error',
            backStep: true
          },
          second_session_back_dashboard: {
            bind: 'fido-back-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          succes_on_post_plugin_biometrics: {
            bind: 'succes-on-post-plugin-biometrics',
            analytics: securityAccessAnalytics.viewThreeOtp
          },
          [getChannelName('set_get_list_fido')]: {
            bind: 'start-get-fido-list'
          },
          cancel_otp_request: {
            bind: 'cancel-otp-request-fido',
            'forward-to-native': true
          },
          info_modal_header_text_spherica: {
            bind: 'propertie-modal-header-text-spherica'
          },
          info_modal_microillustrations: {
            bind: 'propertie-modal-microillustrations-spherica'
          },
          info_modal_title: {
            bind: 'propertie-modal-title-spherica'
          },
          info_modal_text: {
            bind: 'propertie-modal-text-spherica'
          },
          activate_modal_configurate_fido: {
            bind: 'open-modal-configurate-fido'
          },
          info_modal_button_text_spherica: {
            bind: 'propertie-modal-button-text-spherica'
          },
          info_modal_link_text_spherica: {
            bind: 'propertie-modal-link-text-spherica'
          },
          notify_token_enrolled: {
            bind: 'fido-enrollment-notify-token-enrolled',
            'forward-to-native': true
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      heroImageModal: 'success-glass.png',
      newCellsConnections: {
        add: {
          in: {
            global_set_app_settings: {
              bind: 'setAppSettingsParams'
            },
            global_configuration_fido_success_accept_spherica: {
              bind: 'readBiometric'
            }
          },
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-activate-fido-spherica'
            }
          },
          remove: {
            out: [ 'global_alert_manager_open_with_settings' ]
          }
        }
      }
    }
  };
  const mobileSetings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          open_setttings_mobile: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const helpModal = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: PAGENAME,
      headerType: 'modal',
      fullHeight: true,
      idLink: 'link',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          activate_modal_fido: {
            bind: 'open'
          },
          info_modal_header_text: {
            bind: 'headerText'
          },
          info_modal_button_text: {
            bind: 'buttonText'
          },
          info_modal_link_text: {
            bind: 'linkText'
          },
          modal_content_info_show: {
            bind: 'innerHTML'
          },
          exit_fido_acepted: {
            bind: 'close'
          }
        },
        out: {
          register_fido_acepted: {
            bind: 'help-modal-footer-button-click'
          },
          cancel_fido_confirm_header: {
            bind: 'help-modal-header-right-primary-click'
          },
          cancel_fido_confirm: {
            bind: 'help-modal-footer-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      fixedFooter: true,
      icon: 'spherica:close',
      closeLabel: 'glomo-security-access-close',
      headerType: '',
      newCellsConnections: {
        add: {
          in: {
            info_modal_header_text_spherica: {
              bind: 'headerText'
            },
            info_modal_microillustrations: {
              bind: 'altIllustration'
            },
            info_modal_title: {
              bind: 'titleText'
            },
            info_modal_text: {
              bind: 'bodyText'
            },
            info_modal_button_text_spherica: {
              bind: 'buttonText'
            },
            info_modal_link_text_spherica: {
              bind: 'linkText'
            }
          },
          out: {
            cancel_fido_confirm_header: {
              bind: 'help-modal-close-icon-click'
            }
          }
        }
      }
    }
  };
  const helpModalConfiguration = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'bbvaHelpModalPage',
      headerType: 'modal',
      fullHeight: true,
      idLink: 'link',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          open_modal_configuration_mobile: {
            bind: 'open'
          },
          info_modal_header_text: {
            bind: 'headerText'
          },
          info_modal_button_text: {
            bind: 'buttonText'
          },
          info_modal_link_text: {
            bind: 'linkText'
          },
          set_modal_mobile_settings: {
            bind: 'innerHTML'
          }
        },
        out: {
          set_configuration_acepted: {
            bind: 'help-modal-footer-button-click'
          },
          back_dashboard: {
            bind: 'help-modal-footer-link-click',
            link: {
              page: 'dashboard'
            }
          },
          [getChannelName('cancel_configuration_header')]: {
            bind: 'help-modal-header-right-primary-click'
          }
        }
      }
    },
    propertiesSpherica: {
      fixedFooter: true,
      icon: 'spherica:close',
      closeLabel: 'glomo-security-access-close',
      headerType: '',
      newCellsConnections: {
        add: {
          in: {
            activate_modal_configurate_fido: {
              bind: 'open'
            },
            info_modal_header_text_spherica: {
              bind: 'headerText'
            },
            info_modal_microillustrations: {
              bind: 'altIllustration'
            },
            info_modal_title: {
              bind: 'titleText'
            },
            info_modal_text: {
              bind: 'bodyText'
            },
            info_modal_button_text_spherica: {
              bind: 'buttonText'
            },
            info_modal_link_text_spherica: {
              bind: 'linkText'
            }
          },
          out: {
            set_configuration_acepted: {
              bind: 'help-modal-footer-button-click'
            },
            cancel_fido_configuration_link: {
              bind: 'help-modal-footer-link-click',
              link: {
                page: 'dashboard'
              }
            },
            cancel_configuration_header_spherica: {
              bind: 'help-modal-close-icon-click'
            }
          }
        }
      }
    }
  };
  const helpModalAlert = {
    zone: isSpherica ? 'app__transactional' : 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'other-moment',
      idButton: 'button',
      style: '--bbva-help-modal-title-icon-color-info: #1464A5',
      modalType: 'info',
      titleIcon: 'coronita:info',
      cellsConnections: {
        in: {
          open_modal_cancel_info: {
            bind: 'open'
          },
          info_modal_button_text_cancel: {
            bind: 'bodyText'
          },
          info_modal_text_cancel: {
            bind: 'buttonText'
          }
        },
        out: {
          modal_other_moment_back_dashboard: {
            bind: 'help-modal-footer-button-click',
            link: {
              page: 'dashboard'
            }
          },
          modal_other_moment_state_change: {
            bind: 'modal-state-change'
          }
        }
      }
    },
    propertiesSpherica: {
      fullHeight: false,
      variant: 'primary',
      titleIcon: 'spherica:info',
      icon: 'spherica:close',
      closeLabel: 'glomo-security-access-close',
      headerText: 'fido-enrollment-fido-back-native-title',
      iOSFixedHeader: isNativeIos,
      headerType: '',
      newCellsConnections: {
        add: {
          in: {
            info_modal_header_text: {
              bind: 'headerText'
            }
          },
          out: {
            modal_other_moment_close_icon: {
              bind: 'help-modal-close-icon-click',
              link: {
                page: 'dashboard'
              }
            },
            modal_other_moment_state_change: {
              bind: 'modal-state-change'
            }
          }
        }
      }
    }
  };
  const pluginFido = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-fido',
    familyPath: '@glomo-web-components/bbva-nativeconnector-fido',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          generate_autentication_biometric: {
            bind: 'getDeviceId'
          },
          action_from_fido_start: {
            bind: 'register'
          },
          set_deleted_fido: {
            bind: 'delete'
          },
          [getChannelName('set_get_list_fido')]: {
            bind: 'list'
          }
        },
        out: {
          succes_device_fido: {
            bind: 'get-device-id-success'
          },
          succes_register_fido: {
            bind: 'register-success'
          },
          notify_fido_enrolled: {
            bind: 'register-success',
            'forward-to-native': true
          },
          succes_authenticate_fido: {
            bind: 'authenticate-success'
          },
          error_register_fido: {
            bind: 'register-error'
          },
          succes_deleted_fido: {
            bind: 'delete-success'
          },
          error_deleted_fido: {
            bind: 'delete-error'
          },
          [getChannelName('succes_fido_list')]: {
            bind: 'list-success'
          }
        }
      }
    }
  };
  const biometricAutentication = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-nativeconnector-biometrics',
    familyPath: '@glomo-web-components/bbva-nativeconnector-biometrics',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('init_page_fido')]: {
            bind: 'checkenabled'
          }
        },
        out: {
          [getChannelName('succes_biometrics')]: {
            bind: 'checkenabled-success'
          },
          [getChannelName('error_biometrics')]: {
            bind: 'checkenabled-error'
          }
        }
      }
    }
  };
  const base = {
    has: 'fido',
    currentPage: {
      url: '/fido'
    },
    pages,
    template,
    components: [
      lifeCycle,
      fidoDm,
      helpModal,
      helpModalAlert,
      pluginFido,
      biometricAutentication,
      helpModalConfiguration,
      mobileSetings
    ]
  };

  return sphericaPageUtils.spherize(base);
};
