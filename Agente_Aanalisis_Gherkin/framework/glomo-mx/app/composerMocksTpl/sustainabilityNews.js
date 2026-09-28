/* eslint-disable new-cap */
'use strict';

module.exports = CONFIG => {

  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('sustainabilityNews');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'sustainabilityNews';

  const base = {
    hash: 'mxsustainability-news',
    currentPage: {
      url: '/sustainability-news'
    },
    pages: pages,
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
          in: {
            sustainability_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-sustainability-news-header',
          cellsConnections: {
            out: {
              navigation_sustainability_news_to_previous_page: {
                bind: 'click-left-button',
                backStep: true
              }
            }
          }
        }
      },
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
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'init'
              }
            },
            out: {
              sustainability_news_page_init_page: {
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
          backAction: 'navigation-to-back',
          cellsConnections: {
            in: {
              sustainability_to_continue: {
                bind: 'navigate'
              },
              sustainability_back_request: {
                bind: 'goBack'
              },
              navigation_sustainability_to_page: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_sustainability_to_prev_page: {
                bind: 'navigation-to-back',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  const bbvaSustainabilityManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-sustainability',
    familyPath: '@glomo-web-components/bbva-manager-sustainability',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.publicSettingsHost,
      native: false,
      version: CONFIG.globalServices.versions.appSettings || 0,
      headers: {'x-api-key': CONFIG.globalServices.apiKeyAp},
      country: 'mx',
      cellsConnections: {
        in: {
          sustainability_news_page_init_page: {
            bind: 'init'
          }
        },
        out: {
          sustainability_parsed_news: {
            bind: 'set-sustainability-news-event'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          }
        }
      }
    }
  };

  const dashboardNews = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-product-item-list-info',
    properties: {
      className: 'cards-list',
      hideMessage: true,
      listHideHeader: true,
      cellsConnections: {
        in: {
          sustainability_parsed_news: {
            bind: 'listItems'
          }
        },
        out: {
          sustainability_navigate_to_news_detail: {
            bind: 'cells-product-item-list-info-list-item-tap',
            link: {
              page: 'sustainabilityNewsDetail'
            }
          }
        }
      }
    }
  };

  const UI = [
    dashboardNews
  ];
  const DMs = [ bbvaSustainabilityManager ];

  base.components.push(...UI, ...DMs);
  return base;
};
