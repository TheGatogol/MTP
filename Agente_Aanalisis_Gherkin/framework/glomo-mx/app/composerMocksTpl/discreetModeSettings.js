'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pageName = 'discreetModeSettings';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const isNativeIos = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_discreetModeSettings')(CONFIG);
  const base = {
    hash: pageName,
    currentPage: {
      url: '/discreet-mode-settings',
      params: []
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
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            discreet_mode_init_page: {
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
        properties: {
          pageName,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_discreetModeSettings: {
                bind: 'init'
              }
            },
            out: {
              discreet_mode_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_VIEW
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              discreet_mode_reset_page: {
                bind: 'reset'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'security-settings-discreet-mode-gl',
        familyPath: '@glomo-web-components/security-settings-discreet-mode-gl',
        render: 'litElement',
        type: 'UI',
        properties: {
          isNativeIos,
          showNotificationMessage: true,
          cellsConnections: {
            in: {
              discreet_mode_data: {
                bind: 'setOptionsDiscreetMode'
              },
              web_view_visibility: {
                bind: 'checkVisibility'
              }
            },
            out: {
              discreet_mode_confirm_exit: {
                bind: 'security-settings-discreet-mode-gl-close-discreet-mode'
              },
              discreet_mode_link_option_clicked: {
                bind: 'security-settings-discreet-mode-gl-link-option-clicked'
              },
              discreet_mode_select_option: {
                bind: 'security-settings-discreet-mode-gl-radio-item-toggle-option'
              },
              discreet_mode_confirm_option: {
                bind: 'security-settings-discreet-mode-gl-button-confirm-option'
              },
              discreet_mode_return_from_settings: {
                bind: 'security-settings-discreet-mode-gl-return-from-settings'
              },
              discreet_mode_exit_page: {
                bind: 'security-settings-discreet-mode-gl-close-discreet-mode',
                backStep: true
              },
              global_discreet_mode_open_discover_modal: {
                bind: 'security-settings-discreet-mode-gl-discover-modal-open'
              },
              discreet_mode_action_launcher_open_app_settings: {
                bind: 'security-settings-discreet-mode-gl-link-go-to-settings'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-nativeconnector-action-launcher',
        tag: 'bbva-nativeconnector-action-launcher',
        render: 'litElement',
        properties: {
          packageName: isNativeIos ? CONFIG.codiSettings.appIosId : 'com.bancomer.mbanking.dev',
          cellsConnections: {
            in: {
              discreet_mode_action_launcher_open_app_settings: {
                bind: 'openAppSettings'
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
