'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pageName = 'discreetModeActivation';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_discreetModeSettings')(CONFIG);
  const buttonsConfig = {
    buttons: {
      primary: {
        text: 'discreet-mode-activation-label-confirm-button',
        class: 'primary'
      },
      secondary: {
        text: 'discreet-mode-activation-label-cancel-button',
        class: 'link'
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: '/discreet-mode-activation'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        animationType: 'horizontal',
        headerHeight: utils.headerHeight,
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: isNativeIos,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            discreet_mode_activation_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        connId: 'handleLifeCicle',
        properties: {
          pageName,
          cache: [],
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
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              discreet_mode_activation_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_VIEW_ACTIVATE_PAGE
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          titleName: 'alert-DISCREET-MODE-ACTIVATION-title',
          rightIcon: 'coronita:close',
          cellsConnections: {
            out: {
              global_discreet_mode_activation_go_back_navigation: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-text-description',
        properties: {
          title: 'glomo-discreet-mode-enrollment-main-label',
          mainDescription: 'glomo-discreet-mode-enrollment-description',
          decoratedImage: './images/discreetMode/discreet-mode-enrollment-hero.svg',
          sizeImage: 'image--xl',
          className: 'text-centered margin-top-m'
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        connId: 'confirmButtons',
        properties: {
          config: buttonsConfig,
          className: 'no-shadow dark-medium-blue-background',
          cellsConnections: {
            out: {
              discreet_mode_activation_confirm_buttons_click_primary: {
                bind: 'cells-confirm-buttons-click-primary'
              },
              global_discreet_mode_activation_go_back_navigation: {
                bind: 'cells-confirm-buttons-click-secondary'
              }
            }
          }
        }
      }
    ]
  };
  return base;
};