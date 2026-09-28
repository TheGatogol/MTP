'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pageName = 'securityMenu';
  const localStorageApp = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const keyRecoveryUpdateAnalytics = require('./analytics/_keyRecoveryUpdate')(CONFIG);
  const configButtons = [
    {
      icon: 'coronita:digitalsignature',
      titleText: 'security-settings-privacity-access',
      action: 'navigate',
      navigate: true,
      page: 'securityAccess',
      public: false
    },
    {
      icon: 'coronita:tasks',
      titleText: 'security-settings-privacity-permissions',
      action: 'navigate',
      navigate: true,
      page: 'appPermissions',
      public: true
    },
    {
      icon: 'coronita:hide',
      titleText: 'glomo-discreet-mode-header',
      action: 'navigate',
      navigate: true,
      page: 'discreetModeSettings',
      public: false,
      id: 'discreetMode'
    },
    {
      icon: sphericaPageUtils.isSpherica() ? 'coronita:feedback' : 'coronita:quizz',
      titleText: 'security-settings-privacity-advices',
      action: 'navigate',
      navigate: true,
      page: 'securityTips',
      public: true
    },
    {
      icon: 'coronita:mobile',
      titleText: 'security-settings-privacity-reactivation',
      action: 'navigate',
      navigate: true,
      page: 'securityReactivation',
      public: false
    },
    {
      icon: 'coronita:alert',
      titleText: 'security-settings-emergency-zone',
      action: 'navigate',
      navigate: true,
      page: 'emergencyZone',
      public: false
    },
    {
      icon: 'coronita:privacy-and-data',
      titleText: 'security-settings-security-profile',
      action: 'navigate',
      navigate: true,
      page: 'securityProfile',
      public: false,
      id: 'securityProfile'
    }
  ];

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: false,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: utils.headerHeight,
      className: isNativeIos ? 'ios-top-padding' : '',
      cellsConnections: {
        in: {
          security_settings_privacity_init_page: {
            bind: 'recalculateHeader'
          }
        },
        out: { }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: `${isNativeIos ? 'ios-top-padding ' : ''}bg-light-grey`
    }
  };

  const handlerLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_securityMenu: {
            bind: 'init'
          }
        },
        out: {
          security_settings_reset_page: {
            bind: 'reset'
          },
          security_settings_privacity_init_page: {
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

  const navigationHandler = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          security_settings_back_navigation: {
            bind: 'goBack'
          },
          navigation_security_settings_to_page: {
            bind: 'navigateToPage'
          }
        },
        out: {
          navigation_security_settings_to_previous_page: {
            bind: 'navigate-to-previous-page',
            backStep: true
          },
          navigation_security_settings_to_app_permissions: {
            bind: 'navigation-to-appPermissions',
            link: {
              page: 'appPermissions'
            }
          },
          navigation_security_settings_to_discreetModeSettings: {
            bind: 'navigation-to-discreetModeSettings',
            link: {
              page: 'discreetModeSettings'
            }
          },
          navigation_security_settings_to_security_tips: {
            bind: 'navigation-to-securityTips',
            link: {
              page: 'securityTipsPage'
            }
          },
          navigation_security_settings_to_security_access: {
            bind: 'navigation-to-securityAccess',
            link: {
              page: 'securityAccess'
            },
            analytics: keyRecoveryUpdateAnalytics.INTERNAL_LINK_ACCESSES
          },
          navigation_security_settings_to_security_reactivation: {
            bind: 'navigation-to-securityReactivation',
            link: {
              page: 'securityReactivation'
            }
          },
          navigation_security_settings_to_emergency_zone: {
            bind: 'navigation-to-emergencyZone',
            link: {
              page: 'emergencyZone'
            }
          },
          navigation_security_settings_to_security_profile: {
            bind: 'navigation-to-securityProfile',
            link: {
              page: 'securityProfile'
            }
          }
        }
      }
    }
  };

  const header = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      className: 'header--core',
      search: false,
      leftIcon: 'coronita:return-12',
      titleName: 'security-menu-header-main-page',
      cellsConnections: {
        in: {},
        out: {
          security_settings_back_request: {
            bind: 'click-left-button'
          }
        }
      }
    },
    propertiesSpherica: {
      leftIcon: 'coronita:back',
      className: 'header--core-grey header',
      variant: 'primary-alt',
      leftIconText: 'cells-molecule-header-spherica-return',
      titleName: 'security-menu-header-text'
    }
  };

  const buttonList = {
    zone: 'app__main',
    type: 'UI',
    tag: 'glomo-button-list',
    tagSpherica: 'glomo-button-list-spherica',
    properties: {
      addDivisor: true,
      cellsConnections: {
        in: {
          security_settings_buttons_list: {
            bind: 'buttons'
          }
        },
        out: {
          security_settings_item_clicked: {
            bind: 'button-clicked'
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'primary',
      className: 'button-list-padding gap-m',
      addDivisor: false
    }
  };

  const glomoSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-settings-dm-mx',
    familyPath: 'glomo-settings-dm',
    properties: {
      filterItems: true,
      notificationsState: false,
      cellsConnections: {
        in: {
          security_settings_item_clicked: {
            bind: 'manageSetting'
          },
          security_settings_reset_page: {
            bind: 'reset'
          },
          glomo_discreet_mode_navigation_to_security_settings_param: {
            bind: 'pageFrom'
          },
          security_settings_back_request: {
            bind: 'checkBackNavigation'
          }
        },
        out: {
          navigation_security_settings_to_page: {
            bind: 'navigate-to-setting'
          },
          security_settings_back_navigation: {
            bind: 'security-menu-go-back-navigation'
          },
          global_landing_page_manager_next_flow: {
            bind: 'security-menu-next-flow-navigation'
          }
        }
      }
    }
  };

  const securityManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'security-settings-privacity-manager',
    properties: {
      buttons: configButtons,
      cellsConnections: {
        in: {
          security_settings_privacity_init_page: {
            bind: 'init'
          },
          global_storage_get_discreet_mode_success: {
            bind: 'getDiscreetModeSuccess'
          },
          global_storage_get_discreet_mode_error: {
            bind: 'getDiscreetModeError'
          },
          global_feature_flag_inapp_facial_update: {
            bind: 'isFacialRecognitionEnabled'
          },
          global_feature_flag_profile_sections: {
            bind: 'featureFlags'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsFunnel'
          }
        },
        out: {
          security_settings_buttons_list: {
            bind: 'security-settings-buttons-list'
          },
          global_get_from_storage: {
            bind: 'get-local-storage'
          }
        }
      }
    }
  };

  const base = {
    hash: 'security-menu-page',
    currentPage: {
      url: '/security-menu-page',
      params: []
    },
    pages: pages,
    template,
    components: [
      handlerLifeCycle,
      navigationHandler,
      header,
      buttonList,
      glomoSettings,
      securityManager
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'discreet_mode' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
