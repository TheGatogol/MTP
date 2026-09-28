'use strict';

module.exports = CONFIG => {
  const {
    aemHost,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        configurationRelatedContracts: contractsConfigurationRelatedContractsApiVersion,
        contractsConfigurationV1: contractsConfigurationsApiVersion,
        financialInvestmentsV1: financialInvestmentsApiVersion,
        financialOverviewApiVersion: financialOverviewApiVersion
      }
    },
    investmentsFollowUpFaqsUrl,
    contentHealthFragmentUrl,
    investmentsFollowUpTypeInternationalFunds,
    native = false,
    nativeIos = false,
    nativeShell = false
  } = CONFIG;
  const pageName = 'investmentsFollowUp';
  const { getLanguage, pluginDatePicker, connectionsIn, connectionsOut } = require('./common/helpers/_utils');
  const analytics = require('./analytics/_investmentsFollowUp')();
  const _localStorage = require('./common/_local-storage');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_investmentsFollowUp: {
            bind: 'init'
          }
        },
        out: {
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          investments_follow_up_init_page: {
            bind: 'init-page'
          },
          investments_follow_up_reset_page: {
            bind: 'reset'
          }
        }
      }
    }
  };
  const navigation = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'navigation-to-dashboard',
      currentPage: 'investmentsFollowUp',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          },
          investments_follow_up_back: {
            bind: 'goBack'
          }
        },
        out: {
          investments_follow_up_navigation_to_previous_page: {
            bind: 'navigate-to-previous-page'
          },
          investments_follow_up_navigation_to_dasboard: {
            bind: 'navigation-to-dashboard',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };
  const componentDashboard = {
    zone: 'app__main',
    type: 'UI',
    tag: 'follow-up-investments-dashboard-mx',
    familyPath: '@glomo-web-components/follow-up-investments-dashboard-mx',
    render: 'litElement',
    properties: {
      language: getLanguage(),
      native,
      host,
      requiredToken,
      iOSFixedHeader: nativeIos,
      contractsConfigurationRelatedContractsApiVersion,
      contractsConfigurationsApiVersion,
      financialOverviewApiVersion,
      financialInvestmentsApiVersion,
      typeInternationalFunds: investmentsFollowUpTypeInternationalFunds,
      numberIsin: '000000000000',
      numberTypeIsin: 'ISIN',
      numberStockMarket: '00000000000000000000000000000000',
      specificAmountProduct: 'CURRENT_BALANCE',
      investmentProductType: [
        'DEPOSIT',
        'INVESTMENT_FUND'
      ],
      compositeEncryptionIndicator: [
        'DEPOSIT'
      ],
      showOnboarding: false,
      showMonthlyQueries: true,
      showHelpFaqs: true,
      aemData: null,
      aemDataFinancial: null,
      aemHost,
      contentFragmentPath: investmentsFollowUpFaqsUrl,
      contentHealthFragmentPath: contentHealthFragmentUrl,
      onboardingInitTimeout: 1000,
      useMocks: true,
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          global_storage_get_follow_up_show_onboarding_error: {
            bind: 'showOnboarding'
          },
          global_storage_get_follow_up_show_onboarding_success: {
            bind: 'showOnboarding'
          },
          global_nativeconnector_date_picker_launch_success: {
            bind: 'datePickerSuccess'
          },
          investments_follow_up_init_page: {
            bind: 'init'
          },
          investments_follow_up_navigation_to_previous_page: {
            bind: 'navigateBack'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'follow-up-investments-dashboard-onboarding-init'
          },
          global_open_native_menu: {
            bind: 'follow-up-investments-dashboard-menu-click',
            'forward-to-native': true
          },
          global_set_in_storage: {
            bind: 'follow-up-investments-dashboard-onboarding-close'
          },
          investments_follow_up_analytics_dashboard: {
            bind: 'follow-up-investments-dashboard-type-chart-change'
          },
          investments_follow_up_analytics_dashboard_date: {
            bind: 'follow-up-investments-dashboard-type-period-change'
          },
          investments_follow_up_analytics_faqs: {
            bind: 'follow-up-investments-dashboard-faqs-modal-changed'
          },
          investments_follow_up_analytics_more_info_products: {
            bind: 'follow-up-investments-dashboard-more-info-click',
            analytics: analytics.INVESTMENTS_MORE_INFORMATION_PRODUCTS_PAGE_VIEW
          },
          investments_follow_up_back: {
            bind: 'navigation-go-back'
          },
          investments_follow_up_dashboard_more_info: {
            bind: 'follow-up-investments-dashboard-more-info-click',
            link: {
              page: 'investmentsFollowUpDistribution'
            }
          },
          investments_follow_up_show_description_graph: {
            bind: 'follow-up-investments-show-description-graph',
            analytics: analytics.INVESTMENTS_DESCRIPTION_GRAPH_PAGE_VIEW
          },
          investments_follow_up_dashboard_detail_article: {
            bind: 'follow-up-investments-dashboard-detail-article',
            analytics: analytics.INVESTMENTS_DETAIL_ARTICLE_PAGE_VIEW
          },
          investments_follow_up_faqs_detail: {
            bind: 'follow-up-investments-dashboard-faq-detail-click'
          },
          investments_follow_up_faqs_detail_back: {
            bind: 'follow-up-investments-dashboard-faq-detail-modal-changed'
          },
          investments_follow_up_system_error: {
            bind: 'follow-up-investments-dashboard-error-modal-changed'
          },
          investments_follow_up_open_menu: {
            bind: 'follow-up-investments-dashboard-menu-click',
            'forward-to-native': true
          },
          global_nativeconnector_datepicker_launch: {
            bind: 'follow-up-investments-dashboard-show-date-picker'
          },
          navigation_funds_channel: {
            bind: 'follow-up-investments-dashboard-product-fund-click',
            link: {
              page: 'fund',
              params: {
                productId: 'productId'
              }
            }
          },
          navigation_traditional_funds_channel: {
            bind: 'follow-up-investments-dashboard-product-fund-click-traditional',
            link: {
              page: 'traditionalInvestmentFund',
              params: {
                productId: 'productId'
              }
            }
          },
          navigation_funds_invest_channel: {
            bind: 'follow-up-investments-dashboard-product-fund-invest-click',
            link: {
              page: 'investAdvisoryProductDetail',
              params: {
                productId: 'productId'
              }
            }
          },
          navigation_deposits_channel: {
            bind: 'follow-up-investments-dashboard-product-deposit-click',
            link: {
              page: 'deposit',
              params: {
                productId: 'productId'
              }
            }
          },
          global_invest_advisory_pre_data_balances_by_period: {
            bind: 'follow-up-investments-dashboard-pre-data-balances-by-period'
          },
          follow_up_dashboard_term_concepts_investments: {
            bind: 'follow-up-investments-dashboard-terms-concepts',
            analytics: analytics.INVESTMENTS_TERMS_DESCRIPTION_PAGE_VIEW
          },
          follow_up_dashboard_learn_to_invest: {
            bind: 'follow-up-investments-dashboard-learn-to-invest',
            analytics: analytics.INVESTMENTS_LEARN_TO_INVEST_PAGE_VIEW
          }
        },
        params: {
          globalUser: 'global_user'
        }
      }
    }
  };
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-investments',
    familyPath: '@glomo-web-components/bbva-analyticmanager-investments',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          investments_follow_up_init_page: {
            bind: 'getDashboardDataInit'
          },
          investments_follow_up_analytics_dashboard: {
            bind: 'getDashboardData'
          },
          investments_follow_up_analytics_dashboard_date: {
            bind: 'getDashboardDate'
          },
          investments_follow_up_analytics_faqs: {
            bind: 'manageFaqsModal'
          },
          investments_follow_up_faqs_detail: {
            bind: 'getFaqQuestion'
          },
          investments_follow_up_faqs_detail_back: {
            bind: 'manageBackFromFaqsDetail'
          },
          investments_follow_up_navigation_to_previous_page: {
            bind: 'reset'
          },
          investments_follow_up_system_error: {
            bind: 'manageSystemError'
          }
        },
        out: {
          investments_follow_up_analytics_dashboard_value_page_view: {
            bind: 'analytics-value-page-view',
            analytics: analytics.INVESTMENTS_DASHBOARD_VALUE_PAGE_VIEW
          },
          investments_follow_up_analytics_dashboard_profitability_page_view: {
            bind: 'analytics-profitability-page-view',
            analytics: analytics.INVESTMENTS_DASHBOARD_PROFITABILITY_PAGE_VIEW
          },
          investments_follow_up_analytics_dashboard_date_interaction_link: {
            bind: 'analytics-dashboard-date-page-view',
            analytics: analytics.INVESTMENTS_DASHBOARD_DATE_INTERACTION_LINK
          },
          investments_follow_up_analytics_faqs_page_view: {
            bind: 'analytics-faqs-page-view',
            analytics: analytics.INVESTMENTS_FAQS_PAGE_VIEW
          },
          investments_follow_up_analytics_faqs_question_page_view: {
            bind: 'analytics-faqs-question-view',
            analytics: analytics.INVESTMENTS_FAQS_QUESTIONS_PAGE_VIEW
          },
          investments_follow_up_analytics_systeme_error_page_view: {
            bind: 'analytics-system-error-page-view',
            analytics: analytics.INVESTMENTS_SYSTEM_ERROR_PAGE_VIEW
          }
        }
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: '/investments-follow-up'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        hasFooter: false,
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            investments_follow_up_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      }
    },

    components: [
      lifeCycle,
      navigation,
      componentDashboard,
      analyticsManager
    ]
  };

  if (nativeShell) {
    if (!nativeIos) {
      base.components.push(pluginDatePicker(CONFIG));
    }
  }

  _localStorage.addOutStorageChannels(base.components, [ 'follow_up_show_onboarding' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
