'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('pfmDashboardDetail');
  const isNativeIos = CONFIG.nativeIos || false;

  const LANGUAGE = utils.getLanguage(CONFIG);
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);

  const RELEVANT_FACTS_ANALYTICS = require('./analytics/_relevantFacts')(CONFIG);
  const ANALYTICS_POCKETS = require('./analytics/_pockets')();

  const base = {
    currentPage: {
      url: '/feed/detail/:relevantFactId',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        animationType: 'fade',
        drawerWidth: '100%',
        disableScrollLock: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        iOSFixedHeader: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        rightDrawer: true
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'relevantFactsDetail',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_relevantFactsDetail: {
                bind: 'init'
              }
            },
            out: {
              global_navigation_to_goals: {
                bind: 'init-page'
              },
              ticket_detail_loaded_analytics: {
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
        zone: 'app__main',
        type: 'UI',
        tag: 'proactivity-ticket',
        familyPath: '@bbva-web-components-widgets/proactivity-ticket',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          locale: LANGUAGE,
          language: LANGUAGE,
          native: !!CONFIG.native,
          opinatorFeedback: false,
          config: {
            fixedHeader: true,
            header: {
              id: 'main-header',
              text: 'proactivity-ticket-title',
              variant: 'first-level-sequential',
              leftIconLabel: 'proactivity-ticket-back',
              leftIconAriaLabel: 'proactivity-ticket-back',
              showLeftIcon: true
            },
            loader: true
          },
          cellsConnections: {
            in: {
              send_relevant_fact_id: {
                bind: 'relevantFactId'
              }
            },
            out: {
              ticket_navigation_to_opperative: {
                bind: 'proactivity-ticket-action-navigate'
              },
              ticket_detail_loaded: {
                bind: 'proactivity-ticket-load'
              },
              go_back: {
                bind: 'header-main-back-icon-click',
                backStep: true
              }
            },
            params: {
              relevantFactId: 'relevantFactId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-relevant-facts',
        familyPath: '@glomo-web-components/bbva-manager-relevant-facts',
        render: 'litElement',
        properties: {
          excludedAccountFamilies: [ 'PT' ],
          excludedAccountTypes: [ '13-0300' ],
          cellsConnections: {
            in: {
              navigation_from_deep_link_to_operations: {
                bind: 'setRelevantFactInfo'
              },
              ticket_navigation_to_opperative: {
                bind: 'decomposeUrl'
              },
              global_unparsed_offers_retrieved: {
                bind: 'getOffers'
              },
              ticket_detail_loaded: {
                bind: 'headerTitle'
              },
              global_financial_overview_details: {
                bind: 'getFinancialData'
              }
            },
            out: {
              ticket_header_title: {
                bind: 'proactivity-ticket-header-title'
              },
              global_ticket_dynamic_navigation_to_opperative_native: {
                bind: 'proactivity-ticket-action-navigate-dynamic-native',
                link: {
                  page: {
                    bind: 'page',
                    skipHistory: true
                  },
                  params: {
                    evtProductId: 'productId'
                  }
                }
              },
              global_ticket_dynamic_navigation_to_opperative_pockets: {
                bind: 'proactivity-ticket-action-navigate-dynamic-pockets',
                link: {
                  page: 'pocketsWelcome'
                }
              },
              global_ticket_dynamic_navigation_to_opperative: {
                bind: 'proactivity-ticket-action-navigate-dynamic',
                link: {
                  page: {
                    bind: 'page'
                  },
                  params: {
                    evtProductId: 'productId',
                    secondEvtProductId: 'transactionId',
                    offerId: 'offerId'
                  }
                }
              },
              pocket_native_account: {
                bind: 'send-account-info'
              },
              send_relevant_fact_id: {
                bind: 'send-relevant-fact-info'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'bbva-analyticmanager-personalization',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-analyticmanager-personalization',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              global_ticket_dynamic_navigation_to_opperative_native: {
                bind: 'fireDetailClickEvent'
              },
              global_ticket_dynamic_navigation_to_opperative_pockets: {
                bind: 'fireDetailClickEvent'
              },
              global_ticket_dynamic_navigation_to_opperative: {
                bind: 'fireDetailClickEvent'
              },
              ticket_detail_loaded_analytics: {
                bind: 'fireDetailView'
              },
              global_feature_flag_collection_updated: {
                bind: 'getFeatureFlagCollection'
              },
              ch_analytics_flag_to_ticket: {
                bind: 'getAnalyticsFlagFromPage'
              }
            },
            out: {
              ch_relevant_facts_detail_view_analytics: {
                bind: 'analytics-detail-view',
                analytics: RELEVANT_FACTS_ANALYTICS.RELEVANT_FACT_DETAIL_VIEW
              },
              ch_relevant_facts_detail_analytics_click_event: {
                bind: 'relevant-facts-detail-analytics-click-event',
                analytics: RELEVANT_FACTS_ANALYTICS.RELEVANT_FACT_DETAIL_CLICK
              }
            }
          }
        }
      }
    ]
  };

  return base;
};