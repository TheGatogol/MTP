/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.SPINNER(CONFIG);
  const APP_SIDEBAR = utils.APP_SIDEBAR(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pages = require('./common/_pages')(CONFIG)('apps');
  const APPS = [
    {
      img: 'app-bbva-wallet.svg',
      label: 'BBVA Wallet',
      linkGooglePlay: 'com.bbva.bbvawalletmx',
      linkAppStore: 'id970582311',
      packageId: 'com.bbva.bbvawalletmx',
      scheme: 'bbvawalletpe://'
    },
    {
      img: 'app-bbva-send.svg',
      label: 'BBVA Send',
      linkGooglePlay: 'com.bbvasend.inicio',
      linkAppStore: 'id1044879220',
      packageId: 'com.bbvasend.inicio',
      scheme: ''
    },
    {
      img: 'app-bbva-multipagos.svg',
      label: 'Multipagos',
      linkGooglePlay: 'com.bbva.pagosbancomer',
      linkAppStore: 'id1118007135',
      packageId: 'com.bbva.pagosbancomer',
      scheme: ''
    },
    {
      img: 'app-bbva-nomina.svg',
      label: 'Mi nómina BBVA',
      linkGooglePlay: 'com.bbva.nominados',
      linkAppStore: 'id1166341405',
      packageId: 'com.bbva.nominados',
      scheme: ''
    },
    {
      img: 'app-bbva-linea.svg',
      label: 'Linea BBVA',
      linkGooglePlay: 'com.bbva.conmigo',
      linkAppStore: 'id990830942',
      packageId: 'com.bbva.conmigo',
      scheme: ''
    },
    {
      img: 'app-bbva-plan.svg',
      label: 'BBVA plan',
      linkGooglePlay: 'com.bancomer.bbva.bbvasave',
      linkAppStore: 'id1157146764',
      packageId: 'com.bancomer.bbva.bbvasave',
      scheme: ''
    }
  ];
  const base = {
    currentPage: {
      url: '/apps',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        extraHeaderClass: 'dark-blue-bg',
        headerHeight: 0,
        iOSFixedHeader: true,
        className: `${isNativeIos ? 'ios-top-padding' : ''} safe-area-app`,
        cellsConnections: {
          in: {
            apps_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      }
    },

    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'apps',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_apps: {
                bind: 'init'
              }
            },
            out: {
              apps_init_page: {
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
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-apps-header-title',
          continue: 'dashboard',
          cellsConnections: {
            in: {},
            out: {
              navigation_app_list_to_page: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
      APP_SIDEBAR,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-list-apps',
        properties: {
          cellsConnections: {
            in: {
              cells_apps_list: {
                bind: 'apps'
              }
            },
            out: {
              open_control_veil: {
                bind: 'glomo-list-apps-open-app'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-list-apps-dm',
        properties: {
          appsCollection: APPS,
          cellsConnections: {
            in: {
              apps_success_can_open_app_uri: {
                bind: 'openAppBbva'
              },
              apps_error_open_bbva_app: {
                bind: 'openMarketBbva'
              },
              apps_open_bbva_app: {
                bind: 'appSelected'
              },
              apps_succes_opened_app_close_veil: {
                bind: 'closeVeil'
              },
              apps_succes_open_market_close_veil: {
                bind: 'closeVeil'
              }
            },
            out: {
              cells_apps_list: {
                bind: 'apps-collection-changed'
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              apps_open_app_uri: {
                bind: 'glomo-list-apps-open-app-uri'
              },
              apps_open_market_bbva: {
                bind: 'glomo-list-apps-open-market'
              }
            }
          }
        }
      }
    ]
  };

  // eslint-disable-next-line no-extra-boolean-cast
  if (!!CONFIG.nativeShell) {

    const connectionsOut = utils.connectionsOut(base);
    connectionsOut('glomo-list-apps').apps_open_bbva_app = {
      bind: 'glomo-list-apps-open-app'
    };
    base.components.push({
      zone: 'app__main',
      tag: 'cells-mobile-action-launcher',
      type: 'DM',
      properties: {
        cellsConnections: {
          in: {
            apps_open_bbva_app: {
              bind: 'canOpenURI'
            },
            apps_open_market_bbva: {
              bind: 'openMarket'
            },
            apps_open_app_uri: {
              bind: 'openURI'
            }
          },
          out: {
            apps_success_can_open_app_uri: {
              bind: 'success-can-open-uri'
            },
            apps_error_open_bbva_app: {
              bind: 'error-can-open-uri'
            },
            apps_succes_open_market_close_veil: {
              bind: 'success-open-market'
            },
            apps_succes_opened_app_close_veil: {
              bind: 'success-open-uri'
            }
          }
        }
      }
    });
  }

  return base;
};
