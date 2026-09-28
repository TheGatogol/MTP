'use strict';

module.exports = CONFIG => {
  const {
    investmentsFollowUpOtherContractId,
    globalServices,
    native = false,
    nativeIos = false
  } = CONFIG;
  const pageName = 'investmentsFollowUpDistribution';
  const utils = require('./common/helpers/_utils');
  const analytics = require('./analytics/_investmentsFollowUp')();
  const _localStorage = require('./common/_local-storage');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const LANGUAGE = utils.getLanguage(CONFIG);
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: globalServices.requiredToken || 'tsec',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_dashboard: {
            bind: 'init'
          }
        },
        out: {
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          },
          investments_follow_up_distribution_reset_page: {
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
      currentPage: 'investmentsFollowUpDistribution',
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'handleNativeBackButton'
          }
        },
        out: {
          investments_follow_up_distribution_of_investments_navigation_to_previous_page: {
            bind: 'navigate-to-previous-page'
          }
        }
      }
    }
  };
  const componentDistribution = {
    zone: 'app__main',
    type: 'UI',
    tag: 'follow-up-investments-distribution-of-investments',
    familyPath: '@bbva-web-components-widgets/follow-up-investments-distribution-of-investments',
    render: 'litElement',
    properties: {
      language: LANGUAGE,
      native,
      moreInfoModel: {},
      otherContractId: investmentsFollowUpOtherContractId,
      cellsConnections: {
        in: {
          investments_follow_up_dashboard_more_info: {
            bind: 'moreInfoModel'
          },
          investments_follow_up_distribution_of_investments_navigation_to_previous_page: {
            bind: 'navigateBack'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'follow-up-investments-distribution-of-investments-menu-open',
            'forward-to-native': true
          },
          investments_follow_up_analytics_distribution: {
            bind: 'follow-up-investments-distribution-of-investments-tab-change'
          },
          investments_follow_up_distribution_of_investments_back: {
            backStep: true,
            bind: 'navigation-go-back'
          },
          investments_follow_up_distribution_of_investments_open_menu: {
            bind: 'follow-up-investments-distribution-of-investments-menu-open',
            'forward-to-native': true
          }
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
          investments_follow_up_analytics_more_info_products: {
            bind: 'setResetDistributionValue'
          },
          investments_follow_up_distribution_of_investments_back: {
            bind: 'setResetDistributionValue'
          },
          investments_follow_up_analytics_distribution: {
            bind: 'fireInvestmentsDistributionAnalytics'
          }
        },
        out: {
          investments_follow_up_analytics_more_information_products: {
            bind: 'analytics-more-information-products-page-view',
            analytics: analytics.INVESTMENTS_MORE_INFORMATION_PRODUCTS_PAGE_VIEW
          },
          investments_follow_up_analytics_more_information_families: {
            bind: 'analytics-more-information-families-page-view',
            analytics: analytics.INVESTMENTS_MORE_INFORMATION_FAMILIES_PAGE_VIEW
          }
        }
      }
    }
  };
  const base = {
    hash: pageName,
    currentPage: {
      url: '/',
      params: []
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        iOSFixedHeader: nativeIos,
        className: 'bg-light' + nativeIos ? 'ios-top-padding' : '',
        hasFooter: false,
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
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
      componentDistribution,
      analyticsManager
    ]
  };

  _localStorage.addOutStorageChannels(base.components, [ 'follow_up_show_onboarding' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
