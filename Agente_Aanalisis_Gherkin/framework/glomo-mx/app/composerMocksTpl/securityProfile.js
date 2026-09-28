'use strict';

module.exports = CONFIG => {
  const {
    headerHeight
  } = require('./common/helpers/_utils');

  const
    { globalServices: { host, requiredToken = 'tsec', versions: { contactsBook, appSettings }, publicSettingsId},
      nativeIos = false, native = false
    } = CONFIG;

  const pages = require('./common/_pages')(CONFIG)('securityProfile');
  const _localStorage = require('./common/_local-storage');
  const securityProfileAnalytics = require('./analytics/_securityProfile')();
  const pageName = 'securityProfile';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();
  const template =  {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight,
      iOSFixedHeader: true,
      className: `${nativeIos ? 'ios-top-padding' : ''} safe-area-app`
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`
    }
  };

  const securityTipsProvider = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-security-tips-xp-dm',
    familyPath: '@glomo-web-components/bbva-security-tips-xp-dm',
    render: 'litElement',
    properties: {
      host,
      version: appSettings,
      country: 'mx',
      native,
      headers: {'x-api-key': CONFIG.globalServices.apiKeyAp},
      publicSettings: publicSettingsId,
      cellsConnections: {
        in: {
          request_security_profile_tips_data: {
            bind: 'getSecurityTips'
          }
        },
        out: {
          success_response_security_profile_tips_data: {
            bind: 'success-on-get-security-tips'
          },
          error_response_security_profile_tips_data: {
            bind: 'error-on-get-security-tips'
          }
        }
      }
    }
  };

  const handleLifeCycle = {
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
          __bridge_page_securityProfile: {
            bind: 'init'
          }
        },
        out: {
          security_profile_init_page: {
            bind: 'init-page'
          },
          security_profile_reset_page: {
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

  const securityTipsListManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-security-tips-list',
    familyPath: '@glomo-web-components/bbva-manager-security-tips-list',
    render: 'litElement',
    properties: {
      country: 'mx',
      cellsConnections: {
        in: {
          security_profile_init_page: {
            bind: 'init'
          },
          success_response_security_profile_tips_data: {
            bind: 'successGetTips'
          },
          error_response_security_profile_tips_data: {
            bind: 'errorGetTips'
          },
          security_profile_tip_selected: {
            bind: 'tipSelected'
          },
          global_security_tips_request_error_retry: {
            bind: '_goRetry'
          },
          global_security_tips_request_error_back: {
            bind: '_goBack'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          request_security_profile_tips_data: {
            bind: 'get-security-tips'
          },
          global_security_tips_set_tip_detail_modal: {
            bind: 'set-tip-detail-modal',
            link: {
              page: 'securityTipsDetailPage'
            }
          },
          global_security_tips_request_error_modal: {
            bind: 'error-on-get-security-tips'
          },
          global_phone_call_channel: {
            bind: 'call-bbva-line',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const securitySettings = {
    zone: 'app__main',
    tag: 'bbva-feature-security-settings-access-mx',
    tagSpherica: 'bbva-feature-security-settings-access-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-security-profile-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-security-profile-mx-spherica',
    type: 'DM',
    render: 'litElement',
    properties: {
      isNativeIos: nativeIos,
      accessiblePublicItems: ['privacity', 'securityTips'],
      dictionarioFlag: { discreet_mode: 'glomo.discreetMode.intelligence' },
      menuIds: ['securityProfileSpherica', 'securityProfile'],
      cellsConnections: {
        in: {
          security_profile_init_page: {
            bind: 'init'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewDetails'
          },
          dashboard_customers_indicators: {
            bind: 'customerDetail'
          },
          global_set_customer_addresses: {
            bind: 'customerContacts'
          },
          global_password_definition: {
            bind: 'passwordStrength'
          },
          security_profile_notification_permissions_success: {
            bind: 'setNotificationPermissionsStatus'
          },
          web_view_visibility: {
            bind: 'checkWebVisibility'
          }
        },
        out: {
          bbva_security_header_back_navigation: {
            bind: 'exit-operative',
            backStep: true
          },
          bbva_security_emergency_zone_link: {
            bind: 'navigate-to-security-settings-emergency',
            link: {
              page: 'emergencyZone'
            }
          },
          bbva_security_tips_link: {
            bind: 'navigate-to-security-tips',
            link: {
              page: 'securityTipsPage'
            }
          },
          bbva_security_access_key_management: {
            bind: 'navigate-to-key-recovery-update',
            link: {
              page: 'keyRecoveryUpdate'
            }
          },
          bbva_security_update_email_management: {
            bind: 'navigate-to-email-management',
            link: {
              page: 'updateEmailPage'
            }
          },
          bbva_security_app_permissions_link: {
            bind: 'navigate-to-security-settings-permissions',
            link: {
              page: 'appPermissions'
            }
          },
          global_navigation_to_register_id: {
            bind: 'security-settings-manager-mx-init-national-id',
            link: {
              page: 'nationalIdAndVideoselfie'
            }
          },
          global_navigation_to_discreet_mode_config: {
            bind: 'navigate-to-discreet-mode-settings',
            link: {
              page: 'discreetModeSettings'
            }
          },
          global_navigation_to_push_notifications_activation: {
            bind: 'go-to-activate-notifications',
            link: {
              page: 'notificationsSettingsPage'
            }
          },
          global_action_launcher_uri: {
            bind: 'navigate-to-external-url'
          },
          global_security_deep_links: {
            bind: 'navigate-to-deep-links'
          },
          security_profile_tip_selected: {
            bind: 'navigate-to-security-tip-detail'
          },
          navigate_to_pending_action: {
            bind: 'navigate-to-pending-action',
            link: {
              bind: 'pageName'
            }
          },
          global_set_in_storage: {
            bind: 'set-local-storage'
          },
          global_get_from_storage: {
            bind: 'get-local-storage'
          },
          global_native_settings: {
            bind: 'open-native-settings'
          },
          global_fido_navigation: {
            bind: 'start-fido',
            link: {
              page: 'fido'
            }
          },
          security_profile_data_visualization_donut: {
            bind: 'update-data-visualization-donut'
          },
          security_profile_active_page: {
            bind: 'security-settings-active-page'
          },
          security_profile_page_init_manager: {
            bind: 'init-security-settings-manager'
          },
          security_profile_push_notifications_link: {
            bind: 'navigate-to-push_notifications'
          },
          security_profile_identity_document_link: {
            bind: 'navigate-to-identity_document'
          },
          security_profile_completed_actions_page_link: {
            bind: 'completed-actions-link'
          },
          security_profile_on_screen_lock: {
            bind: 'navigate-to-screen_lock'
          },
          security_profile_on_discreet_mode: {
            bind: 'navigate-to-discreet-mode-settings'
          },
          security_profile_on_update_app: {
            bind: 'navigate-to-app_update'
          },
          security_profile_web_visibility: {
            bind: 'web-visibility'
          }
        }
      }
    }
  };

  const securitySettingsTaggingManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-security-settings-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-security-settings',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          security_profile_active_page: {
            bind: 'activePage'
          },
          security_profile_data_visualization_donut: {
            bind: 'setDataConfig'
          },
          security_profile_page_init_manager: {
            bind: 'initManager'
          },
          security_profile_push_notifications_link: {
            bind: 'onSecurityProfileNotifications'
          },
          security_profile_identity_document_link: {
            bind: 'onSecurityProfileIdentityDocument'
          },
          security_profile_completed_actions_page_link: {
            bind: 'onSecurityProfileCompletedActionsPageView'
          },
          bbva_security_tips_link: {
            bind: 'onSecurityTips'
          },
          security_profile_discreet_mode_link: {
            bind: 'onDiscreetModeLink'
          },
          bbva_security_update_email_management: {
            bind: 'onValidateEmailLink'
          },
          security_profile_on_screen_lock: {
            bind: 'onScreenLock'
          },
          security_profile_on_discreet_mode: {
            bind: 'onDiscreetModeLink'
          },
          security_profile_on_update_app: {
            bind: 'onUpdateApp'
          },
          global_fido_navigation: {
            bind: 'onFidoEnrollment'
          }
        },
        out: {
          securityProfileAnalytics_page_view: {
            bind: 'security-profile-page-view',
            analytics: securityProfileAnalytics.pageView
          },
          securityProfileAnalytics_notifications_link: {
            bind: 'security-profile-notifications-link',
            analytics: securityProfileAnalytics.activateNotificationsAccessLink
          },
          securityProfileAnalytics_identity_document_link: {
            bind: 'security-profile-identity-document-link',
            analytics: securityProfileAnalytics.activateIdentityDocumentLink
          },
          securityProfileAnalytics_completed_actions_link: {
            bind: 'security-profile-completed-actions-page-view',
            analytics: securityProfileAnalytics.completedRecomendationsPageView
          },
          securityProfileAnalytics_security_tips_link: {
            bind: 'security-profile-security-tips',
            analytics: securityProfileAnalytics.securityTipsLink
          },
          securityProfileAnalytics_discreet_mode_link: {
            bind: 'security-profile-discreet-mode',
            analytics: securityProfileAnalytics.discreetModeLink
          },
          securityProfileAnalytics_validate_email_link: {
            bind: 'security-profile-validate-email',
            analytics: securityProfileAnalytics.validateEmailLink
          },
          securityProfileAnalytics_screen_lock_link: {
            bind: 'security-profile-screen-lock',
            analytics: securityProfileAnalytics.screenLockLink
          },
          securityProfileAnalytics_update_app_link: {
            bind: 'security-profile-update-app-link',
            analytics: securityProfileAnalytics.updateAppLink
          },
          security_profile_analtytics_fido_enrollment_link: {
            bind: 'security-profile-digital-token',
            analytics: securityProfileAnalytics.fidoEnrollmentLink
          }
        }
      }
    }
  };

  const nativeSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_native_settings: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const cellsMobilePush = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-push',
    properties: {
      cellsConnections: {
        in: {
          security_profile_init_page: {
            bind: 'getPermissionStatus'
          },
          security_profile_web_visibility: {
            bind: 'getPermissionStatus'
          }
        },
        out: {
          security_profile_notification_permissions_success: {
            bind: 'get-permission-status-success'
          },
          security_profile_notification_permissions_error: {
            bind: 'get-permission-status-error'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/security-menu-page'
    },
    pages,
    template: template,
    components: [
      handleLifeCycle,
      securitySettings,
      securitySettingsTaggingManager,
      securityTipsProvider,
      securityTipsListManager,
      nativeSettings,
      cellsMobilePush
    ]
  };

  _localStorage.addOutStorageChannels(base.components, ['security_tips_last_access_data', 'visited_security_profile'], CONFIG);

  return sphericaPageUtils.spherize(base);
};
