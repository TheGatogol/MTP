'use strict';

module.exports = CONFIG => {
  const { getLanguage, getLocalCurrency, get, APP_SIDEBAR: appSidebar } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('adviceFinancialCoach');
  const pageName = 'adviceFinancialCoach';
  const {
    globalServices: {
      requiredToken = 'tsec',
      host
    },
    aemHost,
    native,
    nativeShell,
    nativeIos
  } = CONFIG;
  const adviceFinancialCoachAnalytics = require('./analytics/_adviceFinancialCoach')(CONFIG);

  const adviceFinancialCoachSpherica = {
    zone: 'app__main',
    type: 'UI',
    tag: 'advice-financial-coach',
    familyPath: '@glomo-web-components/advice-financial-coach',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      aemHostProposal: aemHost,
      imagePath: '/content/dam/library/illustrations/',
      hideProactivityMessageDayToDay: true,
      hideProactivityMessageFinancialHealth: true,
      maxCushionMonths: 3,
      locale: getLanguage(),
      language: getLanguage(),
      native: !!native,
      iOSFixedHeader: nativeIos,
      currency: getLocalCurrency(),
      cardsData: [],
      cellsConnections: {
        in: {
          advice_financial_coach_config_header: {
            bind: 'configHeader'
          },
          advice_financial_coach_config_header_transition_right_actions: {
            bind: 'transitionHeaderRightActions'
          },
          advice_financial_coach_to_preview_get_history: {
            bind: 'featureHistory'
          },
          advice_financial_coach_navigate_back: {
            bind: 'navigateBack'
          }
        },
        out: {
          advice_financial_coach_transition_container_forward: {
            bind: 'navigation-go-forward'
          },
          advice_financial_coach_transition_container_back: {
            bind: 'navigation-go-back'
          },
          global_open_native_menu: {
            bind: 'header-main-menu-icon-click'
          },
          advice_financial_coach_tracker_link: {
            bind: 'advice-financial-coach-tracker-link'
          },
          advice_financial_coach_tracker_view: {
            bind: 'advice-financial-coach-tracker-view'
          },
          advice_financial_coach_proposal_navigate: {
            bind: 'advice-financial-coach-proposal-navigate'
          },
          advice_financial_coach_badge_navigate: {
            bind: 'advice-financial-coach-badge-to-action-go'
          },
          advice_financial_coach_external_navigation_link: {
            bind: 'advice-financial-coach-external-navigation-link'
          },
          advice_financial_coach_first_partial_direct_access_click: {
            bind: 'advice-financial-coach-first-partial-direct-access-click'
          },
          advice_financial_coach_transaction_navigation_click: {
            bind: 'advice-financial-coach-transaction-navigation-click'
          }
        }
      }
    }
  };

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'fade',
      drawerWidth: '100%',
      disableScrollLock: true,
      footerFixed: true,
      iOSFixedHeader: nativeIos,
      headerFixed: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'dark-blue-bg',
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`,
      rightDrawer: true
    }
  };

  const adviceFinancialCoachLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: pageName,
      tokenName: requiredToken,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_adviceFinancialCoach: {
            bind: 'init'
          }
        },
        out: {
          advice_financial_coach_init_page: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-advice',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-advice',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          advice_financial_coach_tracker_link: {
            bind: 'fireClickEvent'
          },
          advice_financial_coach_tracker_view: {
            bind: 'firePageView'
          }
        },
        out: {
          ch_advice_financial_coach_view_analytics: {
            bind: 'bbva-analyticmanager-advice-page-view',
            analytics: adviceFinancialCoachAnalytics.adviceFinancialCoachView
          },
          ch_advice_financial_coach_click_event: {
            bind: 'bbva-analyticmanager-advice-internal-link',
            analytics: adviceFinancialCoachAnalytics.adviceFinancialCoachClick
          },
          ch_advice_financial_coach_interaction_link_click_event: {
            bind: 'bbva-analyticmanager-advice-interaction-link',
            analytics: adviceFinancialCoachAnalytics.adviceFinancialCoachInteractionLink
          }
        }
      }
    }
  };

  const controllerDm = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-financial-coach-mx',
    familyPath: '@glomo-web-components/bbva-controller-financial-coach-mx',
    render: 'litElement',
    properties: {
      config: {
        leftIcon: true,
        rightMenuIcon: true,
        transitionHeaderRightActions: true
      },
      cellsConnections: {
        in: {
          advice_financial_coach_init_page: {
            bind: 'initPage'
          },
          advice_financial_coach_transition_container_forward: {
            bind: 'getFeatureHistory'
          },
          advice_financial_coach_transition_container_back: {
            bind: 'getFeatureHistory'
          },
          advice_financial_coach_proposal_navigate: {
            bind: 'getUrl'
          },
          advice_financial_coach_badge_navigate: {
            bind: 'getUrl'
          },
          advice_financial_coach_external_navigation_link: {
            bind: 'getUrl'
          },
          advice_financial_coach_first_partial_direct_access_click: {
            bind: 'getUrl'
          },
          advice_financial_coach_transaction_navigation_click: {
            bind: 'getUrl'
          },
          dashboard_accounts: {
            bind: 'getFinancialData'
          },
          global_financial_overview_details: {
            bind: 'getFinancialInvestmentData'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlags'
          }
        },
        out: {
          advice_financial_coach_config_header: {
            bind: 'advice-financial-coach-config-header'
          },
          advice_financial_coach_config_header_transition_right_actions: {
            bind: 'advice-financial-coach-config-header-transition-right-actions'
          },
          advice_financial_coach_to_preview_get_history: {
            bind: 'advice-financial-coach-history'
          },
          advice_financial_coach_navigate_back: {
            bind: 'advice-financial-coach-navigate-back'
          },
          advice_financial_coach_navigate_to: {
            bind: 'advice-financial-coach-navigate-to',
            link: {
              page: {
                bind: 'destination'
              }
            }
          },
          pocket_native_account: {
            bind: 'send-account-info'
          },
          global_account_set_account_for_operations: {
            bind: 'send-account-info'
          },
          navigation_advice_financial_coach_to_preview: {
            bind: 'advice-financial-coach-navigation-go-back',
            backStep: true
          },
          navigation_from_futura_dashboard: {
            bind: 'bbva-technicalcore-global-feature-id-router-mx-navigate',
            link: {
              page: {
                bind: 'pageToNavigate'
              },
              params: {
                productId: 'productId'
              }
            }
          },
          contract_product_section_oc_banner_invest_advisory_onboarding_clicked: {
            bind: 'init'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/advice-financial-coach'
    },
    pages,
    template,
    components: [adviceFinancialCoachSpherica, adviceFinancialCoachLifeCycle, analyticsManager, controllerDm]
  };

  if (nativeShell) {
    const getComponent = get(base);
    getComponent('advice-financial-coach').properties.cellsConnections.out.global_open_native_menu = {
      bind: 'header-main-menu-icon-click',
      'forward-to-native': true
    };
  } else {
    base.components.push(appSidebar(CONFIG));
  }

  return base;
};
