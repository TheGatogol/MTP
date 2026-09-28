'use strict';
module.exports = (config) => {
  const isNativeIos = config.nativeIos || false;
  const UTILS = require('./common/helpers/_utils');
  const PAGE = require('./common/_pages')(config)('appPermissions');
  const { createPrefixFromPageName } = UTILS;
  const PAGE_NAME = 'appPermissions';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const ANALYTICS = require('./analytics/_appPermissions')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const TEMPLATE = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      drawerWidth: '100%',
      disableScrollLock: true,
      hasFooter: false,
      disableEdgeSwipe: true,
      headerFixed: true,
      headerHeight: UTILS.headerHeight,
      fixOffsetScroll: 0,
      iOSFixedHeader: true
    },
    propertiesSpherica: {
      className: isNativeIos ? 'ios-top-padding' : ''
    }
  };

  const LIFE_CYCLE = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: config.globalServices.requiredToken || 'tsec',
      private: false,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          [`__bridge_page_${PAGE_NAME}`]: {
            bind: 'init'
          }
        },
        out: {
          init_page_app_permissions: {
            bind: 'init-page',
            analytics: ANALYTICS.HUELLA_PAGEVIEW

          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const HEADER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    tagSpherica: 'bbva-header-main-spherica',
    familyPath: '@bbva-web-components/bbva-header-main',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    properties: {
      id: 'appPerssionsPage',
      accessibilityTextIconLeftPrimary: 'Return',
      accessibilityTextIconRightSecondary: 'Help',
      iconLeftPrimary: 'coronita:return-12',
      iconRightSecondary: 'coronita:help',
      iconRightPrimaryExpanded: false,
      text: 'app-permissions-header-main-page',
      cellsConnections: {
        out: {
          [OPERATIVE_PREFIX + '_APP_PERMISSIONS_BACK_BUTTON']: {
            bind: 'header-main-icon-left-primary-click',
            backStep: true
          },
          [OPERATIVE_PREFIX + '_SHOW_MORE_INFO_MODAL']: {
            bind: 'header-main-icon-right-secondary-click',
            analytics: ANALYTICS.MODAL_HELP_VIEW
          }
        }
      }
    },
    propertiesSpherica: {
      variant: 'first-level-initial',
      className: isNativeIos && 'u-padding-top--0',
      rightButtons: [
        {
          id: 'btn-right-primary',
          name: 'help',
          icon: 'spherica:help',
          label: 'bbva-header-main-help-aria-label',
          accessibilityText: 'bbva-header-main-spherica-help-aria-label',
          defaultEventIconName: 'header-main-icon-right-secondary-click'
        }
      ],
      leftButtons: [
        {
          id: 'btn-left-primary',
          name: 'return',
          icon: 'spherica:back',
          label: 'bbva-header-main-return-aria-label',
          accessibilityText: 'bbva-header-main-return-aria-label',
          defaultEventIconName: 'header-main-icon-left-primary-click'
        }
      ]
    }
  };

  const MAIN_BODY = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-aggregation-app-permissions',
    tagSpherica: 'bbva-aggregation-app-permissions-spherica',
    familyPath: '@glomo-web-components/bbva-aggregation-app-permissions',
    familyPathSpherica: '@glomo-web-components/bbva-aggregation-app-permissions-spherica',
    render: 'litElement',
    properties: {
      id: 'permissionsDM',
      showHeader: true,
      textBeforeLink: 'app-permissions-info-text-before-link',
      linkText: 'app-permissions-info-android-text-link',
      textAfterLink: 'app-permissions-info-text-after-link',
      grantedText: 'app-permissions-granted-badge-text',
      cellsConnections: {
        in: {
          app_permissions_data_ready: {
            bind: 'permissions'
          }
        },
        out: {
          call_setttings_mobile: {
            bind: 'bbva-aggregation-app-permissions-link-click'
          }
        }
      }
    },
    propertiesSpherica: {
      showBadge: true,
      deniedText: '',
      ambient: 'primary'
    }
  };

  const DM_GLOMO_CONTROLLER = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-device-accesses-mx-controller',
    familyPath: 'glomo-device-accesses-controller',
    properties: {
      permissionsMobile: isNativeIos ? ['read-calendar', 'camera', 'read-contacts', 'location', 'microphone'] : ['read-calendar', 'camera', 'read-contacts', 'location', 'microphone'],
      cellsConnections: {
        in: {
          init_page_app_permissions: {
            bind: 'getPermissionsMobile'
          },
          [OPERATIVE_PREFIX + '_SHOW_MORE_INFO_MODAL']: {
            bind: 'setTextModal'
          },
          call_setttings_mobile: {
            bind: 'setMobileSeting'
          }
        },
        out: {
          set_data_dm_text_tile: {
            bind: 'show-modal-title-text'
          },
          set_data_dm_body_text: {
            bind: 'show-modal-body-text-below'
          },
          set_data_dm_button_text: {
            bind: 'show-modal-button-text-below'
          },
          set_data_array_all_app_permissions: {
            bind: 'on-permissions-data-ready'
          },
          open_setttings_mobile: {
            bind: 'open-native-settings'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };
  const mobileSetings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
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
  const DM_PERMISSIONS = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-app-permissions',
    familyPath: '@glomo-web-components/bbva-manager-app-permissions',
    render: 'litElement',
    properties: {
      globalHarcodedPermissions: [
        {name: 'notification', granted: false},
        {name: 'clock', granted: false, customLabel: false},
        ...(isNativeIos ? [] : [ {name: 'webview', granted: false, customLabel: false} ])
      ],
      nativeIos: isNativeIos,
      cellsConnections: {
        in: {
          set_data_array_all_app_permissions: {
            bind: 'setItems'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'goBackStep'
          },
          app_permissions_opened_modal: {
            bind: 'setOpenedModal'
          }
        },
        out: {
          show_app_permissions_info_modal: {
            bind: 'show-modal-info',
            link: {
              page: 'appPermissionsInfoPage'
            }
          },
          app_permissions_data_ready: {
            bind: 'on-permissions-data-ready'
          },
          [OPERATIVE_PREFIX + '_APP_PERMISSIONS_BACK_BUTTON']: {
            bind: 'glomo-backstep-event',
            backStep: true
          },
          app_permissions_close_info_modal: {
            bind: 'experiences-backstep-event'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica
    }
  };

  const SHOW_HELP_MODAL = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      fullHeight: true,
      headerType: 'modal',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      headerText: 'app-permissions-header-text',
      titleIcon: 'coronita:help',
      cellsConnections: {
        in: {
          [OPERATIVE_PREFIX + '_SHOW_MORE_INFO_MODAL']: {
            bind: 'open'
          },
          set_data_dm_text_tile: {
            bind: 'titleText'
          },
          set_data_dm_body_text: {
            bind: 'bodyText'
          },
          set_data_dm_button_text: {
            bind: 'buttonText'
          },
          app_permissions_close_info_modal: {
            bind: 'close'
          }
        },
        out: {
          app_permissions_opened_modal: {
            bind: 'modal-state-change'
          }
        }
      }
    },
    propertiesSpherica: {
      fullHeight: false,
      titleIcon: 'spherica:help',
      centerTextAlignment: true,
      closeLabel: 'app-permissions-close',
      closeLabelAccessibilityText: 'app-permissions-close-modal',
      headerType: '',
      newCellsConnections: {
        remove: {
          in: [
            'set_data_dm_button_text'
          ],
          out: [
            'app_permissions_close_info_modal',
            'app_permissions_opened_modal'
          ]
        }
      }
    }
  };

  const BASE = {
    hash: '-app-permissions',
    currentPage: {
      url: '/app-permissions'
    },
    pages: PAGE,
    template: TEMPLATE,
    components: [
      LIFE_CYCLE,
      HEADER,
      MAIN_BODY,
      SHOW_HELP_MODAL,
      DM_GLOMO_CONTROLLER,
      DM_PERMISSIONS,
      mobileSetings
    ]
  };
  return sphericaPageUtils.spherize(BASE);
};
