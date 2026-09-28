'use strict';

module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('monthlyStatementPage');
  const isNativeIos = CONFIG.nativeIos || false;

  const base = {
    hash: 'monthly-statement-page',
    currentPage: {
      url: '/monthly-statement-page',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        noAnimation: 'animationless',
        animationType: 'fade',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 48,
        footerFixed: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        iOSFixedHeader: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        rightDrawer: true,
        disableEdgeSwipe: !!CONFIG.nativeShell,
        avoidToggleMenu: !!CONFIG.nativeShell,
        edgeSwipeSensitivity: 50,
        cellsConnections: {
          in: {
            coming_soon_init_page: {
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
          pageName: 'monthlyStatementPage',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_comingSoon: {
                bind: 'init'
              }
            },
            out: {
              coming_soon_reset_page: {
                bind: 'reset'
              },
              coming_soon_init_page: {
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
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'header-left-button',
          cellsConnections: {
            in: {
              coming_soon_to_back: {
                bind: 'goBack'
              }
            },
            out: {
              navigation_coming_soon_to_preview: {
                bind: 'header-left-button',
                backStep: true
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
          leftIcon: 'coronita:return-12',
          titleName: 'cells-coming-soon-header-title-monthly-statement-page',
          cellsConnections: {
            in: {},
            out: {
              coming_soon_to_back: {
                bind: 'click-left-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-icon-message',
        properties: {
          src: './images/comingSoon/comingSoon.png',
          iconSize: 500,
          message: 'cells-coming-soon-message',
          cellsConnections: {
            in: {
            },
            out: {
            }
          }
        }
      }
    ]
  };

  return base;
};
