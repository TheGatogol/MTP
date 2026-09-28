/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const commonUtils = require('./common/helpers/_utils');
  const { useNames } = commonUtils;
  const PAGE_NAME = 'disabilityVideocallHearingTacticalPutAttention';
  const SPINNER = commonUtils.SPINNER(CONFIG);
  const OPERATIVE_PREFIX = PAGE_NAME.toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const PAGES = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_disabilityVideocallHearingTactical')();
  const isNativeiOS = CONFIG.nativeIos || false;

  const TEMPLATE_COMPONENT = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      iOSFixedHeader: isNativeiOS,
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      showConfirmInManualScroll: true
    }
  };

  const LIFECYCLE_COMPONENT = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
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
          [getChannelName('init_page')]: {
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

  const NAVIGATION_HANDLER_COMPONENT = {
    zone: 'app__header',
    tag: 'glomo-navigation-handler',
    type: 'UI',
    properties: {
      backAction: 'navigate-to-previous-page',
      cellsConnections: {
        in: {
          [getChannelName('CLOSE_OPERATIVE')]: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('EXIT')]: {
            bind: 'navigate-to-previous-page',
            backStep: true
          }
        }
      }
    }
  };

  const MANAGER_DISABILITY_VIDEOCALL_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-disability-videocall',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-manager-disability-videocall',
    properties: {
      id: 'dmDVHTPA',
      cellsConnections: {
        in: {
          disability_videocall_status_network: {
            bind: 'putAttention'
          },
          [getChannelName('PERMISSIONS_CHECK_STATE_SUCCESS')]: {
            bind: 'handleCheckStatePermissions'
          },
          [getChannelName('PERMISSIONS_REQUEST_ERROR')]: {
            bind: 'handlePermissionRequest'
          },
          [getChannelName('STATUS_CAMERA_PERMISSION')]: {
            bind: 'handlePermissionRequest'
          },
          [getChannelName('CLICK_ACCEPT_BUTTON')]: {
            bind: 'clickButtonControler'
          },
          [getChannelName('HEADER_RIGHT_PRIMARY_CLICK')]: {
            bind: 'closeOperative'
          }
        },
        out: {
          [getChannelName('HIDE_PANEL_INFO')]: {
            bind: 'bbva-manager-disability-videocall-hide-panel-info'
          },
          [getChannelName('HIDE_CARD_BANNER')]: {
            bind: 'bbva-manager-disability-videocall-hide-card-banner'
          },
          [getChannelName('HIDE_NOTIFICATION_STATUS')]: {
            bind: 'bbva-manager-disability-videocall-hide-notification-status'
          },
          [getChannelName('MICROILLUSTRATION_TYPE')]: {
            bind: 'bbva-manager-disability-videocall-microillustration-type'
          },
          [getChannelName('MICROILLUSTRATION_URL_TYPE')]: {
            bind: 'bbva-manager-disability-videocall-microillustration-url-type'
          },
          [getChannelName('TITLE_TEXT')]: {
            bind: 'bbva-manager-disability-videocall-title-text'
          },
          [getChannelName('DESCRIPTION_NOTIFICATION_MESSAGE')]: {
            bind: 'bbva-manager-disability-videocall-description-notification-message'
          },
          [getChannelName('TEXT_LIST_BULLET')]: {
            bind: 'bbva-manager-disability-videocall-text-list-bullet'
          },
          [getChannelName('DESCRIPTION_TEXT')]: {
            bind: 'bbva-manager-disability-videocall-text-panel-info'
          },
          [getChannelName('BUTTON_TEXT')]: {
            bind: 'bbva-manager-disability-videocall-button-text'
          },
          [getChannelName('LINK_TEXT_MODAL')]: {
            bind: 'bbva-manager-disability-videocall-link-text'
          },
          [getChannelName('NOTIFICATION_STATUS')]: {
            bind: 'bbva-manager-disability-videocall-notification-status-changed'
          },
          [getChannelName('TEXT_NOTIFICATION_STATUS')]: {
            bind: 'bbva-manager-disability-videocall-text-notification-status'
          },
          [getChannelName('HIDE_NOTIFICATION_MESSAGE')]: {
            bind: 'bbva-manager-disability-videocall-hide-notification-message'
          },
          [getChannelName('NAVIGATE_TO_CALLING_PAGE')]: {
            bind: 'bbva-manager-disability-videocall-navigate-to-calling-page',
            link: {
              page: 'disabilityVideocallHearingTacticalCalling'
            }
          },
          [getChannelName('CLOSE_OPERATIVE')]: {
            bind: 'bbva-manager-disability-videocall-close-operative'
          },
          [getChannelName('REQUEST_CAMERA_PERMISSION')]: {
            bind: 'bbva-manager-disability-videocall-request-camera-permission'
          },
          [getChannelName('REQUEST_MICROPHONE_PERMISSION')]: {
            bind: 'bbva-manager-disability-videocall-request-microphone-permission'
          },
          [getChannelName('OPEN_SETTINGS_MOBILE')]: {
            bind: 'bbva-manager-disability-videocall-open-settings-mobile'
          },
          [getChannelName('ANALYTICS_PUT_ATTENTION')]: {
            bind: 'bbva-manager-disability-videocall-put-attention',
            analytics: ANALYTICS.get_advanced_foot_print_level3('pon atencion')
          },
          [getChannelName('ANALYTICS_CONNECTION_BAD')]: {
            bind: 'bbva-manager-disability-videocall-put-attention-error',
            analytics: ANALYTICS.error_page_view('error conexion a internet bajo')
          },
          get_network_status_disability_videocall: {
            bind: 'bbva-manager-disability-videocall-get-network-status',
            'forward-to-native': true
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          }
        }
      }
    }
  };

  const CELLS_MOBILE_PERMISSIONS_PLUGIN_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-permissions-plugin',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('REQUEST_MICROPHONE_PERMISSION')]: {
            bind: 'request'
          }
        },
        out: {
          [getChannelName('PERMISSIONS_REQUEST_ERROR')]: {
            bind: 'permissions-request-error'
          }
        }
      }
    }
  };

  const GLOMO_DEVICE_ACCESS_CONTROLER_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-device-accesses-mx-controller',
    familyPath: 'glomo-device-accesses-controller',
    properties: {
      permissionsMobile: ['camera', 'microphone'],
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'getPermissionsMobile'
          },
          [getChannelName('REQUEST_CAMERA_PERMISSION')]: {
            bind: 'getCameraPermission'
          },
          [getChannelName('OPEN_SETTINGS_MOBILE')]: {
            bind: 'setMobileSeting'
          }
        },
        out: {
          [getChannelName('PERMISSIONS_CHECK_STATE_SUCCESS')]: {
            bind: 'on-permissions-data-ready'
          },
          [getChannelName('STATUS_CAMERA_PERMISSION')]: {
            bind: 'camera-permanently-denied'
          },
          [getChannelName('OPEN_NATIVE_SETTINGS')]: {
            bind: 'open-native-settings'
          }
        }
      }
    }
  };

  const CELLS_MOBILE_NATIVESETTINGS_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-nativesettings',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('OPEN_NATIVE_SETTINGS')]: {
            bind: 'openSetting'
          }
        }
      }
    }
  };

  const HEADER_MAIN_COMPONENT = {
    zone: 'app__header',
    type: 'UI',
    tag: 'bbva-header-main',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-header-main',
    properties: {
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      text: 'disability-videocall-hearing-tactical-header-name-text',
      variant: 'modal-three-level',
      cellsConnections: {
        out: {
          [getChannelName('HEADER_RIGHT_PRIMARY_CLICK')]: {
            bind: 'header-main-icon-right-primary-click'
          }
        }
      }
    }
  };

  const NOTIFICATION_STATUS_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-status',
    familyPath: '@bbva-web-components/bbva-notification-status',
    render: 'litElement',
    properties: {
      icon: 'coronita:wifi',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('HIDE_NOTIFICATION_STATUS')]: {
            bind: 'hidden'
          },
          [getChannelName('TEXT_NOTIFICATION_STATUS')]: {
            bind: 'text'
          },
          [getChannelName('NOTIFICATION_STATUS')]: {
            bind: 'status'
          }
        }
      }
    }
  };

  const PANEL_INFO_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      className: 'dimentions-image',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('HIDE_PANEL_INFO')]: {
            bind: 'hidden'
          },
          [getChannelName('MICROILLUSTRATION_TYPE')]: {
            bind: 'microillustration'
          },
          [getChannelName('MICROILLUSTRATION_URL_TYPE')]: {
            bind: 'image'
          },
          [getChannelName('DESCRIPTION_TEXT')]: {
            bind: 'text'
          },
          [getChannelName('TITLE_TEXT')]: {
            bind: 'heading'
          }
        }
      }
    }
  };

  const CARD_BANNER_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-card-banner',
    familyPath: '@bbva-web-components/bbva-card-banner',
    render: 'litElement',
    container: true,
    properties: {
      id: 'cardBanner',
      className: 'u-box-shadow--none',
      cellsConnections: {
        in: {
          [getChannelName('HIDE_CARD_BANNER')]: {
            bind: 'hidden'
          },
          [getChannelName('TEXT_LIST_BULLET')]: {
            bind: 'listItems'
          },
          [getChannelName('DESCRIPTION_TEXT')]: {
            bind: 'description'
          },
          [getChannelName('TITLE_TEXT')]: {
            bind: 'contentTitle'
          }
        }
      }
    }
  };

  const BANNER_IMAGE_COMPONENT = {
    zone: 'cardBanner.image',
    type: 'UI',
    tag: 'bbva-banner-image',
    familyPath: '@bbva-web-components/bbva-banner-image',
    render: 'litElement',
    properties: {
      className: 'no-padding image-size-auto',
      cellsConnections: {
        in: {
          [getChannelName('MICROILLUSTRATION_URL_TYPE')]: {
            bind: 'imageSrc'
          }
        }
      }
    }
  };

  const NOTIFICATION_MESSAGE_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-notification-message',
    familyPath: '@bbva-web-components/bbva-notification-message',
    render: 'litElement',
    properties: {
      className: 'u-margin--grid u-margin-top--0-5',
      variant: 'default',
      icon: 'coronita:info',
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('DESCRIPTION_NOTIFICATION_MESSAGE')]: {
            bind: 'message'
          },
          [getChannelName('HIDE_NOTIFICATION_MESSAGE')]: {
            bind: 'hidden'
          }
        }
      }
    }
  };

  const PANEL_BUTTON_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-button',
    familyPath: '@bbva-web-components/bbva-panel-button',
    render: 'litElement',
    properties: {
      buttonVariant: 'primary',
      className: 'u-box-shadow--none',
      show: true,
      variant: 'fixed',
      cellsConnections: {
        in: {
          [getChannelName('BUTTON_TEXT')]: {
            bind: 'buttonText'
          }
        },
        out: {
          [getChannelName('CLICK_ACCEPT_BUTTON')]: {
            bind: 'panel-button-item-click'
          }
        }
      }
    }
  };

  const base = {
    hash: 'disability-videocall-hearing-tactical-put-attention',
    currentPage: {
      url: '/disability-videocall-hearing-tactical-put-attention'
    },
    pages: PAGES,
    template: TEMPLATE_COMPONENT,
    components: [
      LIFECYCLE_COMPONENT,
      SPINNER,
      NAVIGATION_HANDLER_COMPONENT,
      MANAGER_DISABILITY_VIDEOCALL_COMPONENT,
      CELLS_MOBILE_PERMISSIONS_PLUGIN_COMPONENT,
      GLOMO_DEVICE_ACCESS_CONTROLER_COMPONENT,
      CELLS_MOBILE_NATIVESETTINGS_COMPONENT,
      HEADER_MAIN_COMPONENT,
      NOTIFICATION_STATUS_COMPONENT,
      PANEL_INFO_COMPONENT,
      CARD_BANNER_COMPONENT,
      BANNER_IMAGE_COMPONENT,
      NOTIFICATION_MESSAGE_COMPONENT,
      PANEL_BUTTON_COMPONENT
    ]
  };

  return base;
};
