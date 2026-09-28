/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const commonUtils = require('./common/helpers/_utils');
  const { useNames } = commonUtils;
  const PAGE_NAME = 'disabilityVideocallHearingTactical';
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
      footerFixed: true,
      hasFooter: true,
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
      id: 'dmDVHT',
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          assistance_section_disability_videocall_opening_hours: {
            bind: 'disabilityVideocallSchedule'
          },
          [getChannelName('init_page')]: {
            bind: 'setManagerInitialData'
          },
          [getChannelName('CLOSE_FROM_HEADER')]: {
            bind: 'closeOperative'
          },
          [getChannelName('CANCEL_LINK_BUTTON')]: {
            bind: 'closeOperative'
          },
          [getChannelName('ACCEP_BUTTON_CLICK')]: {
            bind: 'clickButtonControler'
          },
          device_info_platform_success_disibility: {
            bind: 'trueTime'
          },
          device_info_platform_success_time_zone_disibility: {
            bind: 'timeZone'
          }
        },
        out: {
          [getChannelName('HEADER_VARIANT_MODAL')]: {
            bind: 'bbva-manager-disability-videocall-header-variant-modal'
          },
          [getChannelName('MICROILLUSTRATION_TYPE')]: {
            bind: 'bbva-manager-disability-videocall-microillustration-type'
          },
          [getChannelName('MICROILLUSTRATION_URL_TYPE')]: {
            bind: 'bbva-manager-disability-videocall-microillustration-url-type'
          },
          [getChannelName('TITLE_TEXT_MODAL')]: {
            bind: 'bbva-manager-disability-videocall-title-text'
          },
          [getChannelName('DESCRIPTION_NOTIFICATION_MESSAGE')]: {
            bind: 'bbva-manager-disability-videocall-description-notification-message'
          },
          [getChannelName('HIDE_NOTIFICATION_MESSAGE')]: {
            bind: 'bbva-manager-disability-videocall-hide-notification-message'
          },
          [getChannelName('TEXT_PANEL_INFO')]: {
            bind: 'bbva-manager-disability-videocall-text-panel-info'
          },
          [getChannelName('HIDE_PANEL_INFO')]: {
            bind: 'bbva-manager-disability-videocall-hide-panel-info'
          },
          [getChannelName('BUTTON_TEXT')]: {
            bind: 'bbva-manager-disability-videocall-button-text'
          },
          [getChannelName('LINK_TEXT')]: {
            bind: 'bbva-manager-disability-videocall-link-text'
          },
          [getChannelName('CLOSE_OPERATIVE')]: {
            bind: 'bbva-manager-disability-videocall-close-operative'
          },
          [getChannelName('NAVIGATE_TO_PAGE')]: {
            bind: 'bbva-manager-disability-videocall-navigate-to-put-attention-page',
            link: {
              page: 'disabilityVideocallHearingTacticalPutAttention'
            }
          },
          [getChannelName('ANALYTICS_VIDEOCALL_LSM')]: {
            bind: 'bbva-manager-disability-videocall-consent-permissions',
            analytics: ANALYTICS.HUELLA_PAGEVIEW_VIDEOCALL_LSM
          },
          [getChannelName('ANALYTICS_NOT_ATTENTION')]: {
            bind: 'bbva-manager-disability-videocall-not-attention',
            analytics: ANALYTICS.get_advanced_foot_print_level3('fuera del horario')
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
      variant: 'modal',
      cellsConnections: {
        in: {
          [getChannelName('HEADER_VARIANT_MODAL')]: {
            bind: 'variant'
          }
        },
        out: {
          [getChannelName('CLOSE_FROM_HEADER')]: {
            bind: 'header-main-icon-right-primary-click'
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
      loading: true,
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
          [getChannelName('TITLE_TEXT_MODAL')]: {
            bind: 'heading'
          },
          [getChannelName('TEXT_PANEL_INFO')]: {
            bind: 'text'
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
      hidden: true,
      cellsConnections: {
        in: {
          [getChannelName('HIDE_NOTIFICATION_MESSAGE')]: {
            bind: 'hidden'
          },
          [getChannelName('DESCRIPTION_NOTIFICATION_MESSAGE')]: {
            bind: 'message'
          }
        }
      }
    }
  };

  const PANEL_BUTTON_COMPONENT = {
    zone: 'app__footer',
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
          },
          [getChannelName('LINK_TEXT')]: {
            bind: 'footerLink'
          }
        },
        out: {
          [getChannelName('ACCEP_BUTTON_CLICK')]: {
            bind: 'panel-button-item-click'
          },
          [getChannelName('CANCEL_LINK_BUTTON')]: {
            bind: 'panel-button-footer-link-click'
          }
        }
      }
    }
  };

  const base = {
    hash: 'disability-videocall-hearing-tactical',
    currentPage: {
      url: '/disability-videocall-hearing-tactical'
    },
    pages: PAGES,
    template: TEMPLATE_COMPONENT,
    components: [
      LIFECYCLE_COMPONENT,
      SPINNER,
      NAVIGATION_HANDLER_COMPONENT,
      MANAGER_DISABILITY_VIDEOCALL_COMPONENT,
      HEADER_MAIN_COMPONENT,
      PANEL_INFO_COMPONENT,
      NOTIFICATION_MESSAGE_COMPONENT,
      PANEL_BUTTON_COMPONENT
    ]
  };

  return base;
};
