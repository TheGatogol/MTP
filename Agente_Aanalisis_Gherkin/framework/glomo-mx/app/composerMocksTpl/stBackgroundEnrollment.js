'use strict';

module.exports = CONFIG => {
  const {
    createSpinner,
    getLocalCurrency,
    getLanguage,
    toUnderscoreCase,
    useNames,
    pluginEtherToken,
    pluginSoftoken
  } = require('./common/helpers/_utils');
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        security: securityApiVersion,
        document: documentApiVersion,
        customersV1: customersApiVersion,
        usersManagement,
        authenticationDevices
      },
      security: {
        localVersion: securityLocalApiVersion,
        headers: {
          authenticationType: authenticationTypeSecurity
        }
      },
      customers: {
        headers: {
          authenticationType: authenticationTypeCustomer
        }
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const pageName = 'stBackgroundEnrollment';
  const operativePrefix = toUnderscoreCase(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true
    }
  };
  const cellsHandleLife = {
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
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          ['global_' + pageName + '_reset_page']: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const controllerDevices = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'glomo-device-accesses-controller',
    tag: 'glomo-device-accesses-mx-st-controller',
    connId: 'controller',
    properties: {
      host,
      securityApiVersion,
      documentApiVersion,
      requiredToken,
      native,
      isNativeiOS: nativeIos,
      securityLocalApiVersion,
      authenticationType: authenticationTypeSecurity,
      isBackgroundEnrollment: true,
      cellsConnections: {
        in: {
          device_accesses_device_id: {
            bind: 'deviceId'
          },
          native_user_id: {
            bind: 'userId'
          },
          'global-auth-token': {
            bind: 'tsec'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_send_tokens_enrollment: {
            bind: 'enrollmentTokenBackground'
          },
          global_ether_token_st_background_enrollment_gen_otp_success: {
            bind: 'generateOtpSuccess'
          },
          global_ether_token_st_background_enrollment_generateotp_success: {
            bind: 'generateOtpSuccess'
          },
          global_ether_token_st_background_enrollment_gen_otp_error: {
            bind: 'errorGenOtpS3'
          },
          global_ether_token_st_background_enrollment_generateotp_error: {
            bind: 'errorGenOtpS3'
          },
          global_ether_token_st_background_enrollment_deletetoken_success: {
            bind: 'deleteTokenS3'
          },
          [getChannelName('post_software_token_success')]: {
            bind: 'postTokenSuccess'
          },
          [getChannelName('post_software_token_error')]: {
            bind: 'goToStEnrollment'
          },
          global_ether_token_st_background_enrollment_generate_activation_form_success: {
            bind: 'etherTokenGenerateSuccess'
          },
          global_ether_token_st_background_enrollment_generate_activation_form_error: {
            bind: 'goToStEnrollment'
          },
          [getChannelName('post_software_tokens_activation_success')]: {
            bind: 'postTokenActivationSuccess'
          },
          [getChannelName('post_software_tokens_activation_error')]: {
            bind: 'goToErrorBack'
          },
          global_ether_token_st_background_enrollment_activate_token_success: {
            bind: 'etherTokenActivateSuccess'
          },
          global_ether_token_st_background_enrollment_activate_token_error: {
            bind: 'goToErrorBack'
          },
          [getChannelName('path_user_profile_success')]: {
            bind: 'userManagementSuccess'
          },
          [getChannelName('path_user_profile_error')]: {
            bind: 'continueToNextLanding'
          },
          [getChannelName('api_dm_error')]: {
            bind: 'continueToNextLanding'
          }
        },
        out: {
          global_landing_page_manager_next_flow: {
            bind: 'continue-to-next-landing'
          },
          [getChannelName('redirect_to_atm_locator_page')]: {
            bind: 'on-icon-click-place',
            link: {
              page: 'atmLocator'
            }
          },
          [getChannelName('global_action_launcher_dialer')]: {
            bind: 'call-bbva-line'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          global_ether_token_st_background_enrollment_gen_otp: {
            bind: 'gen-s3-otp'
          },
          global_ether_token_st_background_enrollment_delete_all_tokens: {
            bind: 'delete-token-ether-s3'
          },
          [getChannelName('post_software_token')]: {
            bind: 'activate-token-aws'
          },
          [getChannelName('post_software_tokens_activation')]: {
            bind: 'software-token-activate-post'
          },
          global_ether_token_st_background_enrollment_generate_activation_form: {
            bind: 'ether-token-activate-client'
          },
          global_ether_token_st_background_enrollment_activate_token: {
            bind: 'create-software-token-devices'
          },
          [getChannelName('path_user_profile')]: {
            bind: 'path-user-profile-management'
          },
          share_st_background_data: {
            bind: 'share-st-background-data'
          },
          global_logout_sesion_expiration: {
            bind: 'st-logout-error'
          },
          go_to_stEnrollment_page: {
            bind: 'go-to-st-enrollment-page',
            link: {
              page: 'stEnrollment'
            }
          }
        },
        params: {
          pageFrom: 'pageFrom'
        }
      }
    }
  };
  const dmAuthentication = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-local-authentication-devices-dm',
    familyPath: '@glomo-web-components/bbva-local-authentication-devices-dm',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      version: authenticationDevices,
      otpId: pageName,
      requiredOTP: true,
      native,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('post_software_token')]: {
            bind: 'postSoftwareTokens'
          },
          [getChannelName('post_software_tokens_activation')]: {
            bind: 'postSoftwareTokenActivation'
          }
        },
        out: {
          [getChannelName('post_software_token_success')]: {
            bind: 'post-software-tokens'
          },
          [getChannelName('post_software_tokens_activation_success')]: {
            bind: 'software-token-activation-api-dm-create'
          },
          [getChannelName('post_software_token_error')]: {
            bind: 'error-on-post-software-tokens'
          },
          [getChannelName('post_software_tokens_activation_error')]: {
            bind: 'software-token-activation-api-dm-create-error'
          },
          [getChannelName('api_dm_error')]: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };
  const dmDataproviderUsersManagement = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-local-users-management-profiles-api-dm',
    familyPath: '@glomo-web-components/bbva-local-users-management-api-dm',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      version: usersManagement,
      otpId: pageName,
      requiredOTP: true,
      native,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('path_user_profile')]: {
            bind: 'pathUsersManagementUsersUserProfilesProfilePatch'
          }
        },
        out: {
          [getChannelName('path_user_profile_success')]: {
            bind: 'path-users-profile-success'
          },
          [getChannelName('path_user_profile_error')]: {
            bind: 'path-users-profile-error'
          },
          [getChannelName('api_dm_error')]: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };
  const dmApiCustomers = {
    zone: 'app__main',
    type: 'DM',
    familyPath: 'cells-dm-global-apis-customers',
    tag: 'cells-dm-global-apis-customers-mx',
    properties: {
      host,
      customersApiVersion,
      requiredToken,
      authenticationType: authenticationTypeCustomer,
      native,
      cellsConnections: {
        in: {
          dashboard_get_list_biometrics: {
            bind: 'getListBiometrics'
          }
        },
        out: {
          dashboard_list_biometrics_success: {
            bind: 'get-list-biometrics-success'
          },
          dashboard_list_biometrics_error: {
            bind: 'get-list-biometrics-error'
          }
        }
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: '/st-background/enrollment'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      cellsHandleLife,
      controllerDevices,
      dmAuthentication,
      dmDataproviderUsersManagement,
      dmApiCustomers
    ]
  };
  if (CONFIG.native) {
    base.components.push(pluginEtherToken(CONFIG, pageName), pluginSoftoken(CONFIG));
  }
  return base;
};
