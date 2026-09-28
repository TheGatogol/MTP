/* eslint-disable new-cap */
'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('sustainabilityNewsDetail');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'sustainabilityNewsDetail';
  const ANALYTICS = require('./analytics/_sustainabilityPublic')(CONFIG);

  const base = {
    hash: 'mxsustainability-news-detail',
    currentPage: {
      url: '/sustainability-news-detail'
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
          titleName: 'Noticia',
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
              sustainability_news_detail_page_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_NEWS
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
              global_sustainability_back_request: {
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

  const newsDescription = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-text-description',
    properties: {
      className: 'subtitle-l',
      cellsConnections: {
        in: {
          sustainability_news_detail_date: {
            bind: 'title'
          },
          sustainability_news_detail_title: {
            bind: 'subtitle'
          },
          sustainability_news_detail_main_description: {
            bind: 'htmlDescription'
          }
        }
      }
    }
  };

  const sustainabilityManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-sustainability',
    render: 'litElement',
    tag: 'bbva-manager-sustainability',
    properties: {
      cellsConnections: {
        in: {
          sustainability_navigate_to_news_detail: {
            bind: 'parseSelectedNew'
          },
          sustainability_prepare_related_tip_modal: {
            bind: 'prepareHelpTipsModal'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackBtn'
          }
        },
        out: {
          sustainability_news_detail_title: {
            bind: 'sustainability-news-detail-title'
          },
          sustainability_news_detail_date: {
            bind: 'sustainability-news-detail-date'
          },
          sustainability_news_detail_main_description: {
            bind: 'sustainability-news-detail-main-description'
          },
          sustainability_set_related_tip: {
            bind: 'sustainability-news-detail-related-tip'
          },
          global_sustainability_send_related_tip_modal_config: {
            bind: 'sustainability-tips-modal-event'
          },
          navigation_sustainability_news_to_previous_page: {
            bind: 'click-left-button',
            backStep: true
          },
          CLOSE_MODAL: {
            bind: 'native-back-close-modal'
          }
        }
      }
    }
  };

  const newsDivider = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-divider',
    render: 'litElement'
  };

  const relatedTip = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-clip-list',
    familyPath: '@glomo-web-components/bbva-clip-list',
    render: 'litElement',
    properties: {
      iconSize: 48,
      allClickable: true,
      listTitle: 'glomo-sustainability-news-detail-related-tip',
      className: 'security-tips heading-link emergency description',
      cellsConnections: {
        in: {
          sustainability_set_related_tip: {
            bind: 'list'
          }
        },
        out: {
          sustainability_prepare_related_tip_modal: {
            bind: 'link-click'
          }
        }
      }
    }
  };

  const UI = [
    newsDescription,
    newsDivider,
    relatedTip
  ];
  const DMs = [ sustainabilityManager ];

  base.components.push(...UI, ...DMs);
  return base;
};
