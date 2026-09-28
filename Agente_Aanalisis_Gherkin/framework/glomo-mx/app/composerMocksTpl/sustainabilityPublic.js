/* eslint-disable new-cap */
'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const SPINNER = utils.SPINNER(CONFIG);
  const pages = require('./common/_pages')(CONFIG)('sustainabilityPublic');
  const isNativeIos = CONFIG.nativeIos || false;
  const PAGE_NAME = 'sustainabilityPublic';
  const ANALYTICS = require('./analytics/_sustainabilityPublic')(CONFIG);

  const base = {
    hash: 'mxsustainability',
    currentPage: {
      url: '/sustainability-public'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
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
          titleName: 'glomo-sustainability-header',
          cellsConnections: {
            out: {
              navigation_sustainability_to_previous_page: {
                bind: 'click-left-button',
                backStep: true
              },
              sustainability_goBack_page: {
                bind: 'click-left-button'
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
              sustainability_tips_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_VIEW
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
              },
              global_sustainability_back_request_modal: {
                bind: 'goBack'
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

  const newsHeader = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-header-category',
    familyPath: '@bbva-spherica-components/bbva-header-category',
    render: 'litElement',
    properties: {
      variant: 'action',
      cellsConnections: {
        in: {
          sustainability_news_header_category_title: {
            bind: 'text'
          },
          sustainability_news_header_option_link: {
            bind: 'optionLink'
          }
        },
        out: {
          sustainability_navigate_to_news_page: {
            bind: 'header-category-link-click',
            link: {
              page: 'sustainabilityNews'
            }
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
      listHideHeader: true,
      className: 'cards-list',
      skeletonItems: 3,
      hideMessage: true,
      cellsConnections: {
        in: {
          sustainability_set_news_limit: {
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

  const dashboardGlossary = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-panel-info',
    familyPath: '@bbva-web-components/bbva-panel-info',
    render: 'litElement',
    properties: {
      microillustration: 'diversityeducation',
      cellsConnections: {
        in: {
          sustainability_glossary_heading_public: {
            bind: 'heading'
          },
          sustainability_glossary_text_public: {
            bind: 'text'
          },
          sustainability_glossary_linkText: {
            bind: 'linkText'
          }
        },
        out: {
          sustainability_set_glossary: {
            bind: 'panel-info-link-click',
            link: {
              page: 'sustainabilityGlossary'
            }
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

  const dashboardTips = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-clip-list',
    familyPath: '@glomo-web-components/bbva-clip-list',
    render: 'litElement',
    properties: {
      iconSize: 48,
      isExpandable: true,
      allClickable: true,
      listTitle: 'glomo-sustainability-tips',
      seeMore: 'glomo-sustainability-tips-seeMore',
      seeLess: 'glomo-sustainability-tips-seeLess',
      className: 'security-tips heading-link emergency description',
      cellsConnections: {
        in: {
          sustainability_set_tips: {
            bind: 'list'
          },
          sustainability_view_all_tips: {
            bind: '_showAll'
          },
          sustainability_reset_tips: {
            bind: 'resetGoBack'
          }
        },
        out: {
          sustainability_prepare_tips_modal: {
            bind: 'link-click'
          },
          sustainability_show_more_tips: {
            bind: 'bbva-expandable-panel-expanded'
          }
        }
      }
    }
  };

  const sustainabilityManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-sustainability',
    familyPath: '@glomo-web-components/bbva-manager-sustainability',
    render: 'litElement',
    properties: {
      host: CONFIG.globalServices.publicSettingsHost,
      native: !!CONFIG.native,
      version: CONFIG.globalServices.versions.appSettings || 0,
      headers: {'x-api-key': CONFIG.globalServices.apiKeyAp},
      country: 'mx',
      cellsConnections: {
        in: {
          sustainability_tips_init_page: {
            bind: 'init'
          },
          sustainability_prepare_tips_modal: {
            bind: 'prepareHelpTipsModal'
          },
          sustainability_show_more_tips: {
            bind: 'showAllClipList'
          },
          sustainability_goBack_page: {
            bind: 'resedItemTips'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackBtn'
          }
        },
        out: {
          sustainability_news_header_category_title: {
            bind: 'sustainability-set-news-header-category-title'
          },
          sustainability_set_news_limit: {
            bind: 'set-sustainability-news-limit-event'
          },
          sustainability_news_header_option_link: {
            bind: 'set-news-items-header'
          },
          sustainability_parsed_news: {
            bind: 'set-sustainability-news-event'
          },
          sustainability_parsed_glossary: {
            bind: 'set-sustainability-glossary-event'
          },
          sustainability_set_tips: {
            bind: 'set-list-tips-event'
          },
          global_sustainability_send_tips_modal_config: {
            bind: 'sustainability-tips-modal-event'
          },
          sustainability_filter_glossary: {
            bind: 'set-sustainability-glossary-event'
          },
          sustainability_glossary_heading_public: {
            bind: 'set-heading-dashboard'
          },
          sustainability_glossary_text_public: {
            bind: 'set-text-dashboard'
          },
          sustainability_glossary_linkText: {
            bind: 'set-linkText-dashboard'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          sustainability_view_all_tips: {
            bind: 'show-more-tips-list'
          },
          sustainability_reset_tips: {
            bind: 'sustainability-reset-list-item'
          },
          navigation_sustainability_to_previous_page: {
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


  const UI = [
    newsHeader,
    dashboardNews,
    dashboardGlossary,
    newsDivider,
    dashboardTips
  ];
  const DMs = [
    sustainabilityManager
  ];

  base.components.push(...UI, ...DMs);

  return base;
};
