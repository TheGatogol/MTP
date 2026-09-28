/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const commonUtils = require('./common/helpers/_utils');
  const { useNames } = commonUtils;
  const PAGE_NAME = 'disabilityVideocallHearingTacticalCalling';
  const isNativeiOS = CONFIG.nativeIos || false;
  const SPINNER = commonUtils.SPINNER(CONFIG);
  const OPERATIVE_PREFIX = PAGE_NAME.toLowerCase();
  const [ getChannelName ] = useNames(OPERATIVE_PREFIX);
  const PAGES = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_disabilityVideocallHearingTactical')();

  const TEMPLATE_COMPONENT = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      disableEdgeSwipe: true,
      disableScrollLock: true,
      extraHeaderClass: 'dark-blue-bg',
      headerFixed: true,
      iOSFixedHeader: isNativeiOS,
      topOnConfirm: true,
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
          [getChannelName('init_page_get_user_info')]: {
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
      id: 'dmDVHTC',
      isNativeIOS: isNativeiOS,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'clickButtonControler'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          disability_videocall_veryshow_logout: {
            bind: 'actionsFromNative'
          },
          [getChannelName('init_page')]: {
            bind: 'startVideocall'
          },
          [getChannelName('init_page_get_user_info')]: {
            bind: 'getUserInfo'
          },
          [getChannelName('PROGRESS_TIMER_COUNTER_FINISH')]: {
            bind: 'startVideocall'
          },
          [getChannelName('HEADER_RIGHT_PRIMARY_CLICK')]: {
            bind: 'closeModalCall'
          },
          [getChannelName('ACCEPT_BUTTON')]: {
            bind: 'clickButtonControler'
          },
          [getChannelName('CANCEL_BUTTON')]: {
            bind: 'closeModalCall'
          }
        },
        out: {
          [getChannelName('MICROILLUSTRATION_TYPE')]: {
            bind: 'bbva-manager-disability-videocall-microillustration-type'
          },
          [getChannelName('MICROILLUSTRATION_URL_TYPE')]: {
            bind: 'bbva-manager-disability-videocall-microillustration-url-type'
          },
          [getChannelName('TITLE_PANEL_INFO')]: {
            bind: 'bbva-manager-disability-videocall-title-text'
          },
          [getChannelName('DESCRIPTION_NOTIFICATION_MESSAGE')]: {
            bind: 'bbva-manager-disability-videocall-description-notification-message'
          },
          [getChannelName('TEXT_PANEL_INFO')]: {
            bind: 'bbva-manager-disability-videocall-text-panel-info'
          },
          [getChannelName('TIMEOUT')]: {
            bind: 'bbva-manager-disability-videocall-timeout'
          },
          [getChannelName('BUTTON_TEXT')]: {
            bind: 'bbva-manager-disability-videocall-button-text'
          },
          [getChannelName('FOOTERLINK')]: {
            bind: 'bbva-manager-disability-videocall-link-text'
          },
          [getChannelName('NOTIFICATION_STATUS')]: {
            bind: 'bbva-manager-disability-videocall-notification-status-changed'
          },
          [getChannelName('TEXT_NOTIFICATION_STATUS')]: {
            bind: 'bbva-manager-disability-videocall-text-notification-status'
          },
          [getChannelName('HIDE_TIMER')]: {
            bind: 'bbva-manager-disability-videocall-hide-timer'
          },
          [getChannelName('HIDE_NOTIFICATION_MESSAGE')]: {
            bind: 'bbva-manager-disability-videocall-hide-notification-message'
          },
          [getChannelName('OPEN_MODAL')]: {
            bind: 'open-modal'
          },
          [getChannelName('CLOSE_MODAL')]: {
            bind: 'close-modal'
          },
          [getChannelName('STOP_TIMER')]: {
            bind: 'stop-timer'
          },
          [getChannelName('CLOSE_OPERATIVE')]: {
            bind: 'bbva-manager-disability-videocall-close-operative'
          },
          [getChannelName('EXIT_PAGE')]: {
            bind: 'exit-to-page'
          },
          [getChannelName('ANALYTICS_CALLING')]: {
            bind: 'bbva-manager-disability-videocall-start-videocall',
            analytics: ANALYTICS.get_advanced_foot_print_level3('llamando')
          },
          [getChannelName('ANALYTICS_WAITING_TIME_ENDED')]: {
            bind: 'bbva-manager-disability-videocall-waiting-time-ended',
            analytics: ANALYTICS.get_advanced_foot_print_level3('el tiempo de espera se acabo')
          },
          close_screen_timer_disability_videocall: {
            bind: 'bbva-manager-disability-videocall-close-screen-timer',
            'forward-to-native': true
          },
          user_info_disability_videocall: {
            bind: 'bbva-manager-disability-videocall-user-info',
            'forward-to-native': true
          },
          waiting_time_ended_disability_videocall: {
            bind: 'bbva-manager-disability-videocall-waiting-time-ended',
            'forward-to-native': true
          },
          global_logout_sesion_expiration: {
            bind: 'bbva-manager-disability-videocall-logout'
          },
          global_stop_app_logoff_time: {
            bind: 'bbva-manager-disability-videocall-stop-timeout-app'
          },
          global_start_session_end_time: {
            bind: 'bbva-manager-disability-videocall-start-timeout-app'
          },
          open_control_veil: {
            bind: 'show-spinner'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          }
        },
        params: {
          customerId: 'global_user_id'
        }
      }
    }
  };

  const HELP_MODAL_COMPONENT = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-help-modal',
    familyPath: '@bbva-web-components/bbva-help-modal',
    render: 'litElement',
    container: true,
    properties: {
      id: 'slotModal',
      className: 'hide-padding-container padding-container-wrapper',
      fullHeight: true,
      fixedFooter: true,
      headerText: 'disability-videocall-hearing-tactical-header-name-text',
      headerType: 'modal-three-level',
      hideContentPaddingTop: true,
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      cellsConnections: {
        in: {
          [getChannelName('OPEN_MODAL')]: {
            bind: 'open'
          },
          [getChannelName('CLOSE_MODAL')]: {
            bind: 'close'
          }
        },
        out: {
          [getChannelName('HEADER_RIGHT_PRIMARY_CLICK')]: {
            bind: 'help-modal-header-right-primary-click'
          }
        }
      }
    }
  };

  const PANEL_INFO_COMPONENT = {
    zone: 'slotModal.slot-content',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      className: 'dimentions-image',
      loading: true,
      cellsConnections: {
        in: {
          [getChannelName('MICROILLUSTRATION_TYPE')]: {
            bind: 'microillustration'
          },
          [getChannelName('MICROILLUSTRATION_URL_TYPE')]: {
            bind: 'image'
          },
          [getChannelName('TEXT_PANEL_INFO')]: {
            bind: 'text'
          },
          [getChannelName('TITLE_PANEL_INFO')]: {
            bind: 'heading'
          }
        }
      }
    }
  };

  const NOTIFICATION_MESSAGE_COMPONENT = {
    zone: 'slotModal.slot-content',
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

  const PROGRESS_TIMER_COMPONENT = {
    zone: 'slotModal.slot-footer',
    type: 'UI',
    tag: 'bbva-progress-timer',
    familyPath: '@bbva-web-components/bbva-progress-timer',
    render: 'litElement',
    properties: {
      className: 'u-margin-top--2',
      showVertical: true,
      cellsConnections: {
        in: {
          [getChannelName('TIMEOUT')]: {
            bind: 'timeout'
          },
          [getChannelName('HIDE_TIMER')]: {
            bind: 'hidden'
          },
          [getChannelName('STOP_TIMER')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('PROGRESS_TIMER_COUNTER_FINISH')]: {
            bind: 'progress-timer-counter-finish'
          }
        }
      }
    }
  };

  const PANEL_BUTTON_COMPONENT = {
    zone: 'slotModal.slot-footer',
    type: 'UI',
    tag: 'bbva-panel-button',
    familyPath: '@bbva-web-components/bbva-panel-button',
    render: 'litElement',
    properties: {
      buttonVariant: 'primary',
      fixed: true,
      show: true,
      cellsConnections: {
        in: {
          [getChannelName('BUTTON_TEXT')]: {
            bind: 'buttonText'
          },
          [getChannelName('FOOTERLINK')]: {
            bind: 'footerLink'
          }
        },
        out: {
          [getChannelName('ACCEPT_BUTTON')]: {
            bind: 'panel-button-item-click'
          },
          [getChannelName('CANCEL_BUTTON')]: {
            bind: 'panel-button-footer-link-click'
          }
        }
      }
    }
  };


  const base = {
    hash: 'disability-videocall-hearing-tactical-calling',
    currentPage: {
      url: '/disability-videocall-hearing-tactical-calling'
    },
    pages: PAGES,
    template: TEMPLATE_COMPONENT,
    components: [
      LIFECYCLE_COMPONENT,
      SPINNER,
      NAVIGATION_HANDLER_COMPONENT,
      MANAGER_DISABILITY_VIDEOCALL_COMPONENT,
      HELP_MODAL_COMPONENT,
      PANEL_INFO_COMPONENT,
      NOTIFICATION_MESSAGE_COMPONENT,
      PROGRESS_TIMER_COMPONENT,
      PANEL_BUTTON_COMPONENT
    ]
  };

  return base;
};
