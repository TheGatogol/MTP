'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { sustainability, sustainabilityV3} },
    native = false,
    nativeIos = false,
    nativeShell = false,
    aemHost
  } = CONFIG;
  const {
    createSpinner,
    APP_SIDEBAR: appSideBar,
    getLocalCurrency,
    getLanguage,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const pageName = 'carbonFootprintSection';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_carbonFootprintSection')(CONFIG);
  const navigationPages = {
    'HOME_APPLIANCE': 'applianceSimulator',
    'CAR': 'carSimulator',
    'SOLAR_PANELS': 'solarPanelsSimulator',
    'actions-cta-forestry': 'sustainabilityCarbonFootprintOffset',
    'scheduleReceipts': 'scheduledBillPayments',
    'payReceipts': 'billPaymentsDashboard'
  };
  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      headerHeight: headerHeightMinimum,
      className: nativeIos ? 'ios-top-padding' : '',
      rightDrawer: true,
      disableEdgeSwipe: nativeShell,
      avoidToggleMenu: nativeShell,
      edgeSwipeSensitivity: 50,
      cellsConnections: {
        in: {
          global_open_native_menu: {
            bind: 'toggleMenu'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: 'bg-light-grey',
      className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`
    }
  };

  const bbvaControllerCarbonFootprintSectionMx = {
    zone: 'app__main',
    tag: 'bbva-controller-carbon-footprint-section-mx',
    familyPath: '@glomo-web-components/bbva-controller-carbon-footprint-section-mx',
    type: 'DM',
    render: 'litElement',
    properties: {
      native,
      navigationPages,
      cellsConnections: {
        in: {
          sustainability_forward_navigation: {
            bind: 'manageForwardNavigation'
          },
          sustainability_carbon_footprint_back_navigation: {
            bind: 'manageBackNavigation'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          }
        },
        out: {
          sustainability_navigate_forward: {
            bind: 'bbva-controller-carbon-footprint-section-mx-navigate-forward',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          sustainability_exit_feature: {
            bind: 'bbva-controller-carbon-footprint-section-mx-exit-feature',
            backStep: true
          },
          sustainability_carbon_footprint_section_set_features_flags: {
            bind: 'bbva-controller-carbon-footprint-section-mx-set-toggles-flags'
          }
        }
      }
    }
  };

  const sustainabilityCarbonFootprintSection = {
    zone: 'app__main',
    tag: 'sustainability-carbon-footprint-section',
    familyPath: '@bbva-web-components-widgets/sustainability-carbon-footprint-section',
    type: 'UI',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      sustainabilityApiVersion: sustainabilityV3,
      sustainabilityInsightsApiVersion: sustainability,
      aemHost,
      sectionCFPath: 'content/caas/mexico/app/sustainability/sustainability-carbon-footprint-section.model.json',
      helpFaqsCFPath: 'content/caas/mexico/app/sustainability/sustainability-carbon-footprint-faqs.model.json',
      showHelpFaqs: true,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      native,
      cellsConnections: {
        params: {
          customerId: 'global_user_id'
        },
        in: {
          sustainability_carbon_footprint_section_set_features_flags: {
            bind: 'toggles'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigateBack'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'sustainability-carbon-footprint-section-menu-click',
            'forward-to-native': true
          },
          sustainability_carbon_footprint_back_navigation: {
            bind: 'navigation-go-back'
          },
          sustainability_forward_navigation: {
            bind: 'sustainability-carbon-footprint-section-navigation-external'
          },
          sustainability_carbon_footprint_subcategory_click: {
            bind: 'sustainability-carbon-footprint-section-emissions-and-comparison-subcategory-click-analytics'
          },
          sustainability_carbon_footprint_detail_page_view: {
            bind: 'sustainability-carbon-footprint-section-emissions-and-comparison-subcategory-click-analytics'
          },
          sustainability_carbon_footprint_detail_tab_click_view: {
            bind: 'sustainability-carbon-footprint-section-detail-tab-click-analytics'
          },
          sustainability_carbon_footprint_section_graphic_description_graphic_link_click: {
            bind: 'sustainability-carbon-footprint-section-graphic-description-graphic-link-click'
          },
          sustainability_carbon_footprint_section_emissions_equivalence_how_is_calculated_button_click: {
            bind: 'sustainability-carbon-footprint-section-emissions-equivalence-how-is-calculated-button-click'
          },
          sustainability_carbon_footprint_section_actions_header_category_click: {
            bind: 'sustainability-carbon-footprint-section-actions-header-category-click'
          },
          sustainability_carbon_footprint_section_actions_list_type_link_click: {
            bind: 'sustainability-carbon-footprint-section-actions-list-type-link-click'
          },
          sustainability_carbon_footprint_section_actions_list_detail_link_click: {
            bind: 'sustainability-carbon-footprint-section-actions-list-detail-link-click'
          },
          sustainability_carbon_footprint_section_mark_modify: {
            bind: 'sustainability-carbon-footprint-interest-mark-modify'
          },
          sustainability_carbon_footprint_section_error_navigate: {
            bind: 'sustainability-carbon-footprint-section-error-navigate'
          },
          sustainability_carbon_footprint_section_billing_actions_card_link_click: {
            bind: 'sustainability-carbon-footprint-section-billing-actions-card-link-click'
          },
          sustainability_carbon_footprint_section_init_feature: {
            bind: 'sustainability-carbon-footprint-section-init-feature'
          }
        }
      }
    }
  };

  const SustainabilityCarbonFootprintSectionAnalyticsManager = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-sustainability-carbon-footprint-section',
    familyPath: '@glomo-web-components/bbva-analyticmanager-sustainability',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          sustainability_carbon_footprint_section_init_feature: {
            bind: 'pageView'
          },
          sustainability_carbon_footprint_subcategory_click: {
            bind: 'internalLink'
          },
          sustainability_carbon_footprint_detail_page_view: {
            bind: 'pageViewDetail'
          },
          sustainability_carbon_footprint_detail_tab_click_view: {
            bind: 'interactionLink'
          },
          sustainability_forward_navigation: {
            bind: 'internalLinkSimulate'
          },
          sustainability_carbon_footprint_section_graphic_description_graphic_link_click: {
            bind: 'pageViewGraphicDetail'
          },
          sustainability_carbon_footprint_section_emissions_equivalence_how_is_calculated_button_click: {
            bind: 'pageViewCalculationConsent'
          },
          sustainability_carbon_footprint_section_actions_header_category_click: {
            bind: 'pageViewRecomendations'
          },
          sustainability_carbon_footprint_section_actions_list_type_link_click: {
            bind: 'internalLinkActions'
          },
          sustainability_carbon_footprint_section_actions_list_detail_analytics: {
            bind: 'pageViewRecomendationsDetail'
          },
          sustainability_carbon_footprint_section_mark_modify: {
            bind: 'pageViewMarkModify'
          },
          sustainability_carbon_footprint_section_error_navigate: {
            bind: 'pageViewError'
          },
          sustainability_carbon_footprint_section_billing_actions_card_link_click: {
            bind: 'appOnClickStart'
          }
        },
        out: {
          sustainability_carbon_footprint_analytics_page_view: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view',
            analytics: analytics.PAGE_VIEW
          },
          sustainability_carbon_footprint_section_analytics_internal_link: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-internal-link',
            analytics: analytics.INTERNAL_LINK
          },
          sustainability_carbon_footprint_section_analytics_page_view_detail: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view-detail',
            analytics: analytics.PAGE_VIEW_DETAIL
          },
          sustainability_carbon_footprint_section_analytics_interaction_link: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-interaction-link',
            analytics: analytics.INTERACTION_LINK
          },
          sustainability_carbon_footprint_section_analytics_internal_link_simulate: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-internal-link-simulate',
            analytics: analytics.INTERNAL_LINK_SIMULATE
          },
          sustainability_carbon_footprint_section_analytics_internal_link_actions: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-internal-link-actions',
            analytics: analytics.INTERNAL_LINK_ACTIONS
          },
          sustainability_carbon_footprint_section_analytics_page_view_graphic_description: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view-graphic-description',
            analytics: analytics.PAGE_VIEW_GRAPHIC_DESCRIPTION
          },
          sustainability_carbon_footprint_section_calculation_consent: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view-calculation-consent',
            analytics: analytics.PAGE_VIEW_CONSENT
          },
          sustainability_carbon_footprint_section_recomendations: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view-recomendations',
            analytics: analytics.PAGE_VIEW_RECOMMENDATIONS
          },
          sustainability_carbon_footprint_section_recomendations_detail: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view-recomendations-detail',
            analytics: analytics.PAGE_VIEW_RECOMMENDATIONS_DETAIL
          },
          sustainability_carbon_footprint_section_mark_modify: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view-mark-modify',
            analytics: analytics.PAGE_VIEW_MARK_MODIFY
          },
          sustainability_carbon_footprint_section_error: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-page-view-error',
            analytics: analytics.PAGE_VIEW_ERROR
          },
          sustainability_carbon_footprint_section_app_on_click_start: {
            bind: 'bbva-analyticmanager-sustainability-carbon-footprint-section-app-on-click-start',
            analytics: analytics.APP_ON_CLICK_START_BILLING_ACTIONS
          }
        }
      }
    }

  };

  const base = {
    hash: 'carbonFootprintSection',
    currentPage: {
      url: '/sustainability-carbon-footprint-section'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      sustainabilityCarbonFootprintSection,
      bbvaControllerCarbonFootprintSectionMx,
      SustainabilityCarbonFootprintSectionAnalyticsManager,
      appSideBar(CONFIG)
    ]
  };

  return base;
};
