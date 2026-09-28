/* eslint-disable no-shadow */
'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'businessAccountInfo';
  const page = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const isNativeIos = CONFIG.nativeIos || false;

  const base = {
    hash: 'business-account-info',
    currentPage: {
      url: '/business-account-info',
      params: []
    },
    pages: page,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_noClientBusinessCardInfo: {
                bind: 'init'
              }
            },
            out: {
              no_client_info_init_page: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
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
          className: 'header--dark',
          rightIcon: 'coronita:close',
          titleName: 'business-account-info-header-title',
          continue: 'dashboard',
          cellsConnections: {
            out: {
              navigation_dashboard_to_page: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-key-values-list',
        properties: {
          list: [
            {
              class: 'center key-bold dl-reversed',
              key: 'business-account-info-title'
            },
            {
              class: 'center reversed key-size-ml margin-l',
              key: 'business-account-info-msg-1'
            },
            {
              class: 'center reversed key-size-ml margin-l',
              key: 'business-account-info-msg-2'
            }
          ]
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-confirm-buttons',
        properties: {
          className: 'no-shadow',
          classButtonPrimary: '',
          config: {
            buttons: {
              primary: {
                text: 'cells-modal-alert-understood',
                action: ''
              }
            }
          },
          cellsConnections: {
            out: {
              navigation_dashboard_to_page: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };
  return base;
};
