/* eslint-disable max-statements */
'use strict';
/**
 * DEVICE ACCESSES FLOW: SOFT TOKEN ENROLLMENT
 * EXTENDS: _stEnrollment.js
 * FLOW INITIAL PAGE: FALSE
 * COMES FROM: stEnrollmentTerms.js
 * GOES TO: If enroll succeeds, a navigation backStep is fired.
 * Page initialazing soft token enrollment.
 */
module.exports = CONFIG => {
  const pageConfig = {
    pageName: 'stEnrollment',
    pageUrl: 'soft-token/enrollment',
    chPrefix: 'soft_token_enrollment_'
  };

  const {
    setProperty,
    connectionsIn,
    connectionsOut,
    getLocalCurrency,
    getLanguage,
    toUnderscoreCase,
    useNames,
    pluginTokenCronto,
    pluginEtherToken
  } = require('./common/helpers/_utils');

  const {
    phoneNumberBbvaLine,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        authenticationDevices,
        usersManagement,
        securityV0
      }
    },
    native = false
  } = CONFIG;

  const base = require('./common/deviceAccesses/_stEnrollment')(CONFIG)(pageConfig);

  const setPropertyComponent = setProperty(base);
  const connectionsInComponent = connectionsIn(base);
  const connectionsOutComponent = connectionsOut(base);
  const operativePrefix = toUnderscoreCase(pageConfig.pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const isNativeIos = CONFIG.nativeIos || false;
  const softTokenAnalytics = require('./analytics/_softToken')(CONFIG);

  /****************************************************************
   *                 PAGE CONFIGURATION                           *
   ****************************************************************/
  setPropertyComponent('cells-molecule-header').hidden = true;
  setPropertyComponent('cells-confirm-buttons').hidden = true;
  setPropertyComponent('glomo-notification-message').hidden = true;
  setPropertyComponent('glomo-notification-message').className = 'u-margin--1';
  setPropertyComponent('cells-molecule-header').rightIcon = 'coronita:close';
  setPropertyComponent('glomo-notification-message').infoTitleClass = 'info-title';
  setPropertyComponent('glomo-notification-message').infoTextClass = 'more-info';
  setPropertyComponent('glomo-notification-message').moreInfoTextClass = 'more-info';
  setPropertyComponent('glomo-notification-message').imageSrc = './images/deviceAccesses/soft-token-enroll.svg';
  setPropertyComponent('glomo-notification-message').infoTitle = 'device-accesses-soft-token-enrollment-info-title-reactivation';
  setPropertyComponent('glomo-notification-message').infoText = 'device-accesses-soft-token-enrollment-info-text-reactivation';
  setPropertyComponent('glomo-notification-message').moreInfoText = 'device-accesses-soft-token-enrollment-more-info-text-reactivation';
  setPropertyComponent('glomo-device-accesses-mx-st-controller').errorModalImg = './images/errors/error.svg';
  setPropertyComponent('glomo-device-accesses-mx-st-controller').brsMaintenanceImg = './images/spherica/deviceAccesses/construction-glass.png';
  setPropertyComponent('glomo-device-accesses-mx-st-controller').lineBbva = phoneNumberBbvaLine;
  setPropertyComponent('glomo-device-accesses-mx-st-controller').isNativeiOS = isNativeIos;
  setPropertyComponent('glomo-device-accesses-mx-st-controller').listTokenTexts = {
    'S1': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-reactivation',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-reactivation'
    },
    'S2': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-reactivation',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-reactivation'
    },
    'S3': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-s3',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-s3'
    },
    'SO2': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-reactivation',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-reactivation'
    },
    'PHYSICAL': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-substitution',
      infoText: 'device-accesses-soft-token-enrollment-info-text-substitution',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-substitution'
    },
    'PHY': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-substitution',
      infoText: 'device-accesses-soft-token-enrollment-info-text-substitution',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-substitution'
    },
    'D3': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-substitution',
      infoText: 'device-accesses-soft-token-enrollment-info-text-substitution',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-substitution'
    },
    'T1': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-substitution',
      infoText: 'device-accesses-soft-token-enrollment-info-text-substitution',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-substitution'
    },
    'T3': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-substitution',
      infoText: 'device-accesses-soft-token-enrollment-info-text-substitution',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-substitution'
    },
    'T5': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-substitution',
      infoText: 'device-accesses-soft-token-enrollment-info-text-substitution',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-substitution'
    },
    'T7': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-cronto',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-cronto'
    },
    'CRO': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-cronto',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-cronto'
    },
    'BOT': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-cronto',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-cronto'
    },
    'PHYSICAL_AND_SOFTWARE': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-cronto',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-cronto'
    },
    'SOFTWARE_AMAZON': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-s3',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-s3'
    },
    'SAM': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-s3',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-s3'
    },
    'SOF3': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-s3',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-s3'
    },
    'SOFTWARE': {
      infoTitle: 'device-accesses-soft-token-enrollment-info-title-reactivation',
      infoText: 'device-accesses-soft-token-enrollment-info-text-s3',
      moreInfoText: 'device-accesses-soft-token-enrollment-more-info-text-s3'
    }
  };

  /****************************************************************
   *                 USER INTERACTIONS CONNECTIONS                *
   ****************************************************************/
  connectionsOutComponent('cells-confirm-buttons')[pageConfig.chPrefix + 'cells_confirm_buttons_click_primary'] = {
    bind: 'cells-confirm-buttons-click-primary'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller')[pageConfig.chPrefix + 'cells_confirm_buttons_click_primary'] = {
    bind: 'validateActivateToken'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_cronto_activate_token = {
    bind: 'activate-token-cronto'
  };
  if (CONFIG.environment === 'pro') {
    connectionsOutComponent('cells-molecule-header').global_logout_sesion_expiration = {
      bind: 'click-right-button'
    };
    connectionsInComponent('cells-molecule-header').__bridge_cancelled_back_navigation = {
      bind: 'goBack'
    };
  } else {
    connectionsOutComponent('cells-molecule-header').global_landing_page_manager_next_flow = {
      bind: 'click-right-button'
    };
    connectionsOutComponent('cells-molecule-header').global_close_control_veil = {
      bind: 'click-right-button'
    };
  }
  connectionsInComponent('cells-molecule-header').st_enrollment_hide_component = {
    bind: 'hidden'
  };
  connectionsInComponent('cells-confirm-buttons').st_enrollment_hide_component = {
    bind: 'hidden'
  };
  connectionsInComponent('glomo-notification-message').st_enrollment_hide_component = {
    bind: 'hidden'
  };
  connectionsOutComponent('cells-handle-life-cycle')[pageConfig.chPrefix + 'init_page'] = {
    bind: 'init-page',
    analytics: softTokenAnalytics.softToken('ACTIVATION')
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').share_st_background_data = {
    bind: 'validateS3Stock'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller')[pageConfig.chPrefix + 'init_page'] = {
    bind: 'initStEnrollment'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_feature_flag_collection_updated = {
    bind: 'featureFlagCollection'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_get_security_tokens = {
    bind: 'get-list-token'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_hide_component = {
    bind: 'hide-token-components'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_get_authentication_devices = {
    bind: 'get-list-devices'
  };
  connectionsInComponent('glomo-notification-message').st_enrollment_set_info_title = {
    bind: 'infoTitle'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_set_info_title = {
    bind: 'on-set-info-title'
  };
  connectionsInComponent('glomo-notification-message').st_enrollment_set_info_text = {
    bind: 'infoText'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_set_info_text = {
    bind: 'on-set-info-text'
  };
  connectionsInComponent('glomo-notification-message').st_enrollment_set_more_info_text = {
    bind: 'moreInfoText'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_set_more_info_text = {
    bind: 'on-set-more-info-text'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_send_tokens_enrollment = {
    bind: 'tokensList'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_get_authentication_devices_success = {
    bind: 'autenthicationDevicesGetSuccess'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_get_authentication_devices_error = {
    bind: 'configErrorAuthDevice'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_post_software_token = {
    bind: 'activate-token-aws'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_post_software_token_success = {
    bind: 'postTokenSuccess'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_post_software_token_error = {
    bind: 'errorEnrollment'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').go_to_stEnrollment_page = {
    bind: 's3TokenActivationRetries'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_post_software_tokens_activation = {
    bind: 'software-token-activate-post'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_ether_token_delete_all_tokens = {
    bind: 'delete-token-ether-s3'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_post_software_tokens_activation_success = {
    bind: 'postTokenActivationSuccess'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_post_software_tokens_activation_error = {
    bind: 'errorEnrollment'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_api_dm_error = {
    bind: 'setUpApiDmError'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_path_user_profile_error = {
    bind: 'continueToNextLanding'
  };
  /****************************************************************
   *                        FLOW CONNECTIONS                      *
   ****************************************************************/
  connectionsInComponent('glomo-device-accesses-mx-st-controller')['global-auth-token'] = {
    bind: 'tsec'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').native_user_id = {
    bind: 'userId'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller')[pageConfig.chPrefix + 'navigation_soft_token_enrollment_enroll_success'] = {
    bind: 'glomo-device-accesses-soft-token-success',
    analytics: softTokenAnalytics.softToken('ACTIVATION_SUCCESS'),
    link: {
      page: 'stEnrollmentSuccess'
    }
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller')[pageConfig.chPrefix + 'navigation_soft_token_enrollment_enroll_error'] = {
    bind: 'glomo-device-accesses-soft-token-error',
    analytics: softTokenAnalytics.softToken('ACTIVATION_FAILURE'),
    link: {
      page: 'stEnrollmentError'
    }
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_get_security_tokens_success = {
    bind: 'listTokenSuccess'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_get_security_tokens_error = {
    bind: 'listTokenError'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_api_security_error = {
    bind: 'listTokenError'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_cronto_activate_token_success = {
    bind: 'tokenCrontoSuccess'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_cronto_activate_token_error = {
    bind: 'tokenCrontoError'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_call_line = {
    bind: 'callBbvaLine'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_branches = {
    bind: 'goToAtmLocator'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_cancel_modal_s3 = {
    bind: 'exit'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_cancel_modal_cronto = {
    bind: 'exit'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_cancel_modal_soft_token = {
    bind: 'exit'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').device_access_st_enrollment_brs_maintenance = {
    bind: 'exit'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_action_launcher_dialer = {
    bind: 'call-bbva-line'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_alert_manager_open_with_settings = {
    bind: 'show-modal-error'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_alert_manager_open_with_settings_spherica = {
    bind: 'show-spherical-modal-error'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').modal_error_ether_token_failure = {
    bind: 'error-ether-token-retry',
    analytics: softTokenAnalytics.softToken('ACTIVATION_ERROR')
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').modal_error_ether_token_exit = {
    bind: 'error-ether-token-exit',
    analytics: softTokenAnalytics.softToken('SUBSTITUTION_ERROR')
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_logout_sesion_expiration = {
    bind: 'st-logout-error'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_redirect_to_atm_locator_page = {
    bind: 'st-enrollment-atm-locator',
    link: {
      page: 'atmLocator'
    }
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_action_launcher_dialer = {
    bind: 'st-enrollment-call-bbva-line'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_ether_token_st_enrollment_generate_activation_form = {
    bind: 'ether-token-activate-client'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_ether_token_st_enrollment_generate_activation_form_success = {
    bind: 'etherTokenGenerateSuccess'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_ether_token_st_enrollment_generate_activation_form_error = {
    bind: 'errorEnrollment'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_ether_token_st_enrollment_activate_token = {
    bind: 'create-software-token-devices'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_ether_token_st_enrollment_activate_token_success = {
    bind: 'etherTokenActivateSuccess'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_ether_token_st_enrollment_activate_token_error = {
    bind: 'errorEnrollment'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').global_ether_token_st_enrollment_delete_all_tokens_success = {
    bind: 'deleteTokenS3'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_path_user_profile = {
    bind: 'path-user-profile-management'
  };
  connectionsInComponent('glomo-device-accesses-mx-st-controller').st_enrollment_path_user_profile_success = {
    bind: 'userManagementSuccess'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_delete_all_tokens = {
    bind: 'delete-all-token-types'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').st_enrollment_share_transition_flags = {
    bind: 'share-st-enrollment-flags-to-transition'
  };
  connectionsOutComponent('glomo-device-accesses-mx-st-controller').global_landing_page_manager_next_flow = {
    bind: 'continue-to-next-landing'
  };

  const dmDataproviderSecurity = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-dataprovider-security',
    familyPath: '@glomo-web-components/bbva-dataprovider-security',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      version: securityV0,
      otpId: pageConfig.pageName,
      requiredOTP: true,
      native: CONFIG.native || false,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('get_security_tokens')]: {
            bind: 'getSecurityTokensMx'
          }
        },
        out: {
          [getChannelName('get_security_tokens_success')]: {
            bind: 'security-tokens-mx-fetched'
          },
          [getChannelName('get_security_tokens_error')]: {
            bind: 'error-on-get-security-tokens-mx'
          },
          [getChannelName('api_security_error')]: {
            bind: 'api-dm-error'
          }
        }
      }
    }
  };

  const dmAuthenticationDevices = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-local-authentication-devices-dm',
    familyPath: '@glomo-web-components/bbva-local-authentication-devices-dm',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      version: authenticationDevices,
      otpId: pageConfig.pageName,
      requiredOTP: true,
      native,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      cellsConnections: {
        in: {
          [getChannelName('get_authentication_devices')]: {
            bind: 'getDeviceAuthenticationData'
          },
          [getChannelName('post_software_token')]: {
            bind: 'postSoftwareTokens'
          },
          [getChannelName('post_software_tokens_activation')]: {
            bind: 'postSoftwareTokenActivation'
          }
        },
        out: {
          [getChannelName('get_authentication_devices_success')]: {
            bind: 'get-devices-authentication-data-success'
          },
          [getChannelName('get_authentication_devices_error')]: {
            bind: 'get-devices-authentication-data-error'
          },
          [getChannelName('post_software_token_success')]: {
            bind: 'post-software-tokens'
          },
          [getChannelName('post_software_token_error')]: {
            bind: 'error-on-post-software-tokens'
          },
          [getChannelName('post_software_tokens_activation_success')]: {
            bind: 'software-token-activation-api-dm-create'
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
      otpId: pageConfig.pageName,
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

  base.components.push(
    dmDataproviderSecurity,
    dmAuthenticationDevices,
    dmDataproviderUsersManagement
  );

  if (CONFIG.native) {
    base.components.push(pluginTokenCronto(CONFIG), pluginEtherToken(CONFIG, pageConfig.pageName));
  }

  return base;
};
