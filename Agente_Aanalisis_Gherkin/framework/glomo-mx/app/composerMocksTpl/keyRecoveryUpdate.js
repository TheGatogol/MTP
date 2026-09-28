'use strict';

const pageName = 'keyRecoveryUpdate';
module.exports = CONFIG => {
  const {
    useNames,
    createPrefixFromPageName,
    SPINNERSPHERICA: getSpinner
  } = require('./common/helpers/_utils');
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { notifications } },
    native = false,
    nativeIos: isNativeIos = false
  } = CONFIG;
  const isNative = !!CONFIG.native;
  const iosDevices = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const keyRecoveryUpdateAnalytics = require('./analytics/_keyRecoveryUpdate')(CONFIG);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const initMessageIcon = [ {
    iconType: 'info-light-black',
    icon: 'coronita:info',
    message: 'cells-key-recovery-icon-message'
  } ];
  const policyEsf = {
    allow: {
      letters: true,
      numbers: true,
      special: false,
      ignoreCase: false
    },
    require: {
      length: 8,
      'uppercase_letters': 1,
      'lowercase_letters': 1,
      letters: 0,
      numbers: 1,
      special: 0,
      quality: 1,
      distance: 1
    },
    limit: {
      length: 10,
      'identical_char': 3,
      'consecutive_number': 0,
      'reverse_consecutive_number': 0,
      'consecutive_char': 3,
      'reverse_consecutive_char': 3,
      compromised: 3
    },
    qualityMap: {
      '3': [3, 4],
      '2': [ 2 ],
      '1': [ 1 ]
    }
  };
  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      className: `bg-light-grey ${iosDevices ? 'ios-top-padding' : ''}`,
      animationType: 'verticalUp',
      iOSFixedHeader: iosDevices
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      tokenName: CONFIG.globalServices.requiredToken || 'tsec',
      private: false,
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
          [getChannelName('init_page')]: {
            bind: 'init-page',
            cleanUntil: 'securityMenuPage'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          global_open_alert_manager_spherica: {
            bind: 'openWithSettings'
          },
          SHOW_ANALYTICS_ERROR_SAME_PASSWORD_SPHERICA: {
            bind: 'showAnalyticsErrorSamePassword'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'close'
          }
        },
        out: {
          KEY_RECOVERY_EXIT_CANCEL_CHANGE_PASSWORD_ACCEPT: {
            bind: 'alert-EXIT-CANCEL-CHANGE-PASSWORD-accept'
          },
          KEY_RECOVERY_EXIT_CHANGE_PASSWORD: {
            bind: 'alert-ERROR-PASSWORD-CHANGE-cancel'
          },
          KEY_RECOVERY_ACCEPT_CHANGE_PASSWORD: {
            bind: 'alert-ERROR-PASSWORD-CHANGE-accept'
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
      leftIcon: 'coronita:back',
      variant: 'primary-alt',
      rightIconText: 'bbva-header-main-close-aria-label',
      leftIconText: 'bbva-header-main-return-aria-label',
      className: `header--core-grey header ${iosDevices ? 'safe-card-header' : ''}`,
      leftIconSize: '22',
      titleName: 'cells-key-recovery-update-header-title',
      cellsConnections: {
        out: {
          CHANGE_PASSWORD_CANCEL_MODAL: {
            bind: 'click-left-button'
          }
        }
      }
    }
  };
  const cellsKeyRecoveryUpdate = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-key-recovery-update-spherica',
    properties: {
      isSpherica: true,
      currentPasswordDescription: 'cells-key-recovery-update-title-new-password',
      errorMessageSpacing: 'error-message-spacing',
      extraIconConfig: {
        extraIcon: 'coronita:close',
        extraIconVisibility: 'content'
      },
      preventSetHasContentOnFocus: true,
      active: true,
      isUpdate: true,
      items: initMessageIcon,
      maxNumberCharacters: 10,
      minNumberCharacters: 8,
      showDescriptionCurrentPwd: true,
      invalidConfirmPwd: true,
      showLabelNewPassword: true,
      showLabelCurrentPwd: true,
      securityLevelMessage: 'cells-key-recovery-update-security-level-message',
      continueButtonLabel: 'cells-key-recovery-update-button',
      cancelButtonLabel: 'cells-key-recovery-cancel-button',
      className: 'cells-recovery-update-password-icon-center',
      cellsConnections: {
        in: {
          [getChannelName('validaton_information_password')]: {
            bind: 'strengthNewPasswordValidation'
          },
          [getChannelName('init_page')]: {
            bind: 'initFlow'
          },
          [getChannelName('exit_process_key_recovery')]: {
            bind: 'reset'
          },
          sign_modal_submit_sign: {
            bind: 'getErrorMessage'
          },
          OPEN_MODAL_CONFIRM: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('OPEN_MODAL_HELP')]: {
            bind: 'key-recovery-update-open-description-helper-modal'
          },
          [getChannelName('OPEN_INIT_MODAL')]: {
            bind: 'key-recovery-update-open-init-modal',
            analytics: keyRecoveryUpdateAnalytics._getAdvancedFootprint('formato y contrasena')
          },
          [getChannelName('set_new_password')]: {
            bind: 'set-new-password'
          },
          [getChannelName('fire_valitation_password')]: {
            bind: 'fire-validation-password'
          },
          REQUEST_PASSWORD_CHANGE: {
            bind: 'get-passwords',
            analytics: keyRecoveryUpdateAnalytics.INTERNAL_LINK_MODIFY
          },
          GLOBAL_KEY_RECOVERY_UPDATE_EXIT_MODAL: {
            bind: 'key-recovery-update-exit-modal'
          },
          KEY_RECOVERY_UPDATE_BLOCKED_PASSWORD: {
            bind: 'key-recovery-update-blocked-password'
          },
          CHANGE_PASSWORD_CANCEL_MODAL: {
            bind: 'key-recovery-update-cancel'
          }
        }
      }
    }
  };
  const glomoKeyRecoveryDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-key-recovery-mx-dm',
    familyPath: 'glomo-key-recovery-dm',
    properties: {
      isSpherica: true,
      phone: CONFIG.phoneNumberContact,
      native: isNative,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollections'
          },
          [getChannelName('OPEN_MODAL_HELP')]: {
            bind: 'openInfoModal'
          },
          [getChannelName('OPEN_INIT_MODAL')]: {
            bind: 'openInitModal'
          },
          [getChannelName('check_success_validaton')]: {
            bind: 'validationEsfInfo'
          },
          REQUEST_PASSWORD_CHANGE: {
            bind: 'changePasswordRequest'
          },
          KEY_RECOVERY_ACCEPT_CHANGE_PASSWORD: {
            bind: 'navigationToAccessKey'
          },
          KEY_RECOVERY_EXIT_CHANGE_PASSWORD: {
            bind: 'callLineBbva'
          },
          CHANGE_PASSWORD_CANCEL_MODAL: {
            bind: 'exitModalChangePassword'
          },
          global_login_success: {
            bind: 'setCustomerPhoneNumber'
          },
          native_user_id: {
            bind: 'setNativePhoneNumber'
          },
          identities_operations_post_update_password_success: {
            bind: 'onModifyPasswordSuccess'
          },
          identities_operations_post_update_password_error: {
            bind: 'checkErrorApi'
          },
          signature_handle_required_first_step: {
            bind: 'fireOtpView'
          },
          KEY_RECOVERY_EXIT_CANCEL_CHANGE_PASSWORD_ACCEPT: {
            bind: 'exitModalChangePasswordAccepted'
          },
          [getChannelName('exit_process_key_recovery')]: {
            bind: 'reset'
          },
          KEY_RECOVERY_ACCEPT_CHANGE_PASSWORD_FORMAT_VIEW: {
            bind: 'initModalClosed'
          },
          KEY_RECOVERY_EXIT_CHANGE_PASSWORD_FORMAT_VIEW: {
            bind: 'initModalClosed'
          },
          key_recovery_accept_modify_pass_format_page_view: {
            bind: 'initModalClosed'
          },
          key_recovery_exit_modify_pass_format_page_view: {
            bind: 'initModalClosed'
          }
        },
        out: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-modal'
          },
          global_open_alert_manager_spherica: {
            bind: 'modify-password-error-request'
          },
          SHOW_ANALYTICS_ERROR_SAME_PASSWORD_SPHERICA: {
            bind: 'key-recovery-same-password',
            analytics: keyRecoveryUpdateAnalytics.PAGE_ERROR_SAME_PASSWORD
          },
          key_recovery_update_change_password_notification_create: {
            bind: 'key-recovery-password-notification-create'
          },
          [getChannelName('validaton_information_password')]: {
            bind: 'validation-information-parsed'
          },
          GLOBAL_PROFILE_UPDATE_PASSWORD_SUCCESS: {
            bind: 'key-recovery-reset-password-success',
            backStep: true
          },
          OPEN_MODAL_CONFIRM: {
            bind: 'modify-password-success',
            analytics: keyRecoveryUpdateAnalytics._getAdvancedFootprint('contrasena actualizada')
          },
          TYPE_MODAL_CONFIRM: {
            bind: 'type-modal'
          },
          MESSAGE_MODAL_CONFIRM: {
            bind: 'message-content'
          },
          ICON_MODAL_CONFIRM: {
            bind: 'icon-type'
          },
          global_retry_error: {
            bind: 'error-credentials'
          },
          SHOW_ANALYTICS_ERROR: {
            bind: 'error-blocked-password-analytics',
            analytics: keyRecoveryUpdateAnalytics.PAGE_ERROR_PASSWORD_BLOCKED
          },
          SHOW_ANALYTICS_EXIT: {
            bind: 'exit-modal-analytics',
            analytics: keyRecoveryUpdateAnalytics.PAGE_VIEWEXIT_PROCESS_MODAL
          },
          global_action_launcher_dialer: {
            bind: 'call-bbva-line'
          },
          ACCCES_KEY_RECOVERY: {
            bind: 'navigation-to-access-key-recovery',
            link: {
              page: 'keyRecovery',
              skipHistory: true
            }
          },
          ['otp_analytics' + pageName]: {
            bind: 'otp-view',
            analytics: keyRecoveryUpdateAnalytics._getAdvancedFootprint('modifica tu contrasena', 'otp')
          },
          identities_operations_post_update_password: {
            bind: 'post-update-password'
          },
          GLOBAL_KEY_RECOVERY_UPDATE_OPEN_INFO_MODAL: {
            bind: 'key-recovery-update-open-modal-help'
          },
          [getChannelName('exit_process_key_recovery')]: {
            bind: 'exit-modal-accept',
            analytics: keyRecoveryUpdateAnalytics.INTERNAL_LINK_EXIT_PROCESS_KEYRECOVERY,
            backStep: true
          },
          [getChannelName('close_init_modal')]: {
            bind: 'init-modal-closed',
            analytics: keyRecoveryUpdateAnalytics._getAdvancedFootprint('modifica tu contrasena')
          }
        }
      }
    }
  };
  const esfPassChecker = {
    zone: 'app__main',
    type: 'UI',
    render: 'litElement',
    familyPath: '@bbva-web-components-esf/esf-pass-checker',
    tag: 'esf-pass-checker',
    properties: {
      policy: policyEsf,
      cellsConnections: {
        in: {
          [getChannelName('set_new_password')]: {
            bind: 'password'
          },
          [getChannelName('fire_valitation_password')]: {
            bind: 'check'
          }
        },
        out: {
          [getChannelName('check_success_validaton')]: {
            bind: 'check-success'
          }
        }
      }
    }
  };
  const sendNotificationChangePassword = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-local-notifications-api-dm',
    tag: 'bbva-local-notifications-send-api-dm',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      version: notifications,
      cellsConnections: {
        in: {
          key_recovery_update_change_password_notification_create: {
            bind: 'postNotificationSend'
          }
        },
        out: {
          key_recovery_update_send_notification_create_success: {
            bind: 'notification-send-api-dm-create'
          }
        }
      }
    }
  };
  const identitiesOperations = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-dataprovider-identities-operations',
    tag: 'bbva-dataprovider-identities-operations',
    render: 'litElement',
    properties: {
      host,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      native: isNative,
      otpId: pageName,
      requiredOTP: true,
      cellsConnections: {
        in: {
          identities_operations_post_update_password: {
            bind: 'postUpdatePassword'
          }
        },
        out: {
          identities_operations_post_update_password_success: {
            bind: 'post-identities-operations-update-password-v0-success'
          },
          identities_operations_post_update_password_error: {
            bind: 'post-identities-operations-update-password-v0-error'
          }
        }
      }
    }
  };

  const spinnerSpherica = getSpinner(CONFIG);

  spinnerSpherica.properties =
    spinnerSpherica.propertiesSpherica;

  delete spinnerSpherica.propertiesSpherica;

  const base = {
    hash: 'key-recovery-update',
    currentPage: {
      url: '/key-recovery-update'
    },
    pages,
    template,
    components: [
      spinnerSpherica,
      lifeCycle,
      header,
      glomoKeyRecoveryDm,
      esfPassChecker,
      sendNotificationChangePassword,
      identitiesOperations,
      cellsKeyRecoveryUpdate
    ]
  };
  addCommonErrors(base.components)();

  base.components.push(glomoAlertManagerSpherica);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector('bbva-dataprovider-identities-operations', pageName, [
    'post-identities-operations-update-password-v0-success',
    'post-identities-operations-update-password-v0-error',
    'close2ign-modal'
  ]);
  return base;
};
