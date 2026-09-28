/* eslint-disable no-shadow */
'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', publicSettingsHost, versions: { sustainability, customersV1, campaigns } },
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
    headerHeightMinimum,
    del: utilsDel
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('sustainability');
  const PAGE_NAME = 'sustainability';
  const localStorage = require('./common/_local-storage');
  const ANALYTICS = require('./analytics/_sustainability')(CONFIG);

  const storageKeys = {
    equivalencesViewed: 'sustainabilityFeature-equivalencesViewed',
    collectiveAchievementsViewed: 'sustainabilityFeature-collectiveAchievementsViewed',
    alertsClosed: 'sustainabilityFeature-suggestionsViewed',
    onboardingCompleted: 'sustainabilityFeature-onboardingCompleted'
  };
  const navigationPages = {
    payReceipts: 'billPaymentsDashboard',
    news: 'sustainabilityNews',
    glossary: 'sustainabilityGlossary'
  };

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      extraHeaderClass: 'dark-blue-bg',
      disableScrollLock: true,
      hasFooter: false,
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
    }
  };

  const handleLifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      tokenName: requiredToken,
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
          sustainability_init_page: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const sustainabilityFeatureManager = {
    zone: 'app__main',
    tag: 'bbva-manager-carbon-footprint',
    familyPath: '@glomo-web-components/bbva-manager-carbon-footprint',
    type: 'DM',
    render: 'litElement',
    properties: {
      storageKeys,
      navigationPages,
      cellsConnections: {
        in: {
          sustainability_init_page: {
            bind: 'initFeature'
          },
          global_feature_flag_sustainability: {
            bind: 'toggles'
          },
          global_feature_flag_collection_updated: {
            bind: 'featuresFlags'
          },
          sustainability_onboarding_completed: {
            bind: 'saveOnboardingCompleted'
          },
          [`global_storage_get_${storageKeys.onboardingCompleted}_success`]: {
            bind: 'checkShouldShowOnboardingMode'
          },
          [`global_storage_get_${storageKeys.onboardingCompleted}_error`]: {
            bind: 'checkShouldShowOnboardingMode'
          },
          sustainability_update_equivalences_viewed: {
            bind: 'saveEquivalencesViewed'
          },
          sustainability_update_suggestions_viewed: {
            bind: 'saveSuggestionsViewed'
          },
          sustainability_update_collective_achievements_viewed: {
            bind: 'saveCollectiveAchievementsViewed'
          },
          sustainability_back_navigation: {
            bind: 'manageBackNavigation'
          },
          sustainability_forward_navigation: {
            bind: 'manageForwardNavigation'
          },
          sustainability_actions_navigation: {
            bind: 'manageForwardNavigation'
          },
          sustainability_reset: {
            bind: 'reset'
          },
          global_sidebar_menu_link_clicked: {
            bind: 'manageSidebarClick'
          },
          navigation_to_profile: {
            bind: 'manageSidebarClick'
          },
          sustainability_share_idea: {
            bind: 'share'
          },
          sustainability_share_equivalence: {
            bind: 'share'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'bbva-manager-carbon-footprint-get-from-storage'
          },
          global_set_in_storage: {
            bind: 'bbva-manager-carbon-footprint-save-to-storage'
          },
          sustainability_selected_mode: {
            bind: 'bbva-manager-carbon-footprint-selected-mode'
          },
          sustainability_exit_feature: {
            bind: 'bbva-manager-carbon-footprint-exit-feature',
            backStep: true
          },
          sustainability_reset: {
            bind: 'bbva-manager-carbon-footprint-reset'
          },
          sustainability_navigate_forward: {
            bind: 'bbva-manager-carbon-footprint-navigate-forward',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          sustainability_share_social_sharing: {
            bind: 'bbva-manager-carbon-footprint-share-link'
          },
          sustainability_set_toggles: {
            bind: 'bbva-manager-carbon-footprint-set-toggles-values'
          }
        }
      }
    }
  };

  const sustainabilityFeatureAnalyticsManager = {
    zone: 'app__main',
    tag: 'bbva-manager-carbon-footprint-analytics',
    familyPath: '@glomo-web-components/bbva-manager-carbon-footprint',
    type: 'DM',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_native_menu_item_clicked_analytics: {
            bind: 'menuItemClickedAnalytic'
          },
          sustainability_reset: {
            bind: 'reset'
          },
          sustainability_carbon_data_fetched: {
            bind: 'pageView'
          },
          sustainability_tab_click: {
            bind: 'interactionsTabsAnalyticts'
          },
          sustainability_update_equivalences_viewed: {
            bind: 'seeOtherEquivalences'
          },
          sustainability_equivalence_know_more: {
            bind: 'equivalencesAnalytics'
          },
          sustainability_alert_no_content_shown: {
            bind: 'noContentShow'
          },
          sustainability_alert_shown: {
            bind: 'alertDetailAnalytics'
          },
          sustainability_alert_action_click: {
            bind: 'actionsActivate'
          },
          sustainability_suggestion_notification_shown: {
            bind: 'alertPageViewAnalytics'
          },
          sustainability_update_suggestions_viewed: {
            bind: 'closeAlertAnalytics'
          },
          sustainability_modal_state_changed: {
            bind: 'evolutionAnalytics'
          },
          sustainability_recommendation_click: {
            bind: 'recommendationDetailAnalytics'
          },
          sustainability_recommendation_group_click: {
            bind: 'actionGroupAnalytics'
          },
          sustainability_recommendation_idea_open: {
            bind: 'analyticsIdea'
          },
          sustainability_more_info_item_click: {
            bind: 'navigationsAnalytics'
          },
          sustainability_ecodes_modal_open: {
            bind: 'ecodesModalAnalytics'
          },
          sustainability_ecodes_video_play: {
            bind: 'ecodesModalActionAnalytics'
          },
          sustainability_share_idea: {
            bind: 'shareIdeaAnalytics'
          },
          sustainability_share_equivalence: {
            bind: 'shareEquivalenceAnalytics'
          },
          sustainability_emissions_button_click: {
            bind: 'emissionsSubhomeAnalytics'
          }
        },
        out: {
          sustainability_analytics_menu_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-menu-click',
            analytics: ANALYTICS.MENU_CLICK
          },
          sustainability_analytics_onboarding_page_view: {
            bind: 'bbva-manager-carbon-footprint-analytics-onboarding-page-view',
            analytics: ANALYTICS.APP_PAGE_VIEW
          },
          sustainability_analytics_page_view: {
            bind: 'bbva-manager-carbon-footprint-analytics-page-view',
            analytics: ANALYTICS.APP_PAGE_VIEW
          },
          sustainability_analytics_tab_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-interactions-link',
            analytics: ANALYTICS.INTERACTION_LINK
          },
          sustainability_analytics_internal_link: {
            bind: 'bbva-manager-carbon-footprint-analytics-internal-link',
            analytics: ANALYTICS.INTERNAL_LINK
          },
          sustainability_analytics_alert_no_content_shown: {
            bind: 'bbva-manager-carbon-footprint-analytics-no-content-show',
            analytics: ANALYTICS.ALERT_PAGE_VIEW
          },
          sustainability_analytics_alert_shown: {
            bind: 'bbva-manager-carbon-footprint-analytics-page-view-through',
            analytics: ANALYTICS.ALERT_PAGE_VIEW
          },
          sustainability_analytics_suggestion_notification_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-click-through',
            analytics: ANALYTICS.SUGGESTION_NOTIFICATION_CLICK
          },
          sustainability_analytics_alert_action_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-navigation-actions',
            analytics: ANALYTICS.ALERT_ACTION_CLICK
          },
          sustainability_analytics_alert_action_pay_receipts_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-pay-receipts-analytics',
            analytics: ANALYTICS.ON_CLICK_START
          },
          sustainability_analytics_tracker_alert_page_view: {
            bind: 'bbva-manager-carbon-footprint-analytics-alert-page-view',
            analytics: ANALYTICS.SUGGESTION_NOTIFICATION_SHOWN
          },
          sustainability_analytics_suggestion_notification_close: {
            bind: 'bbva-manager-carbon-footprint-analytics-close-alert',
            analytics: ANALYTICS.SUGGESTION_NOTIFICATION_CLOSE
          },
          sustainability_analytics_recommendation_simulable_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-see-actions',
            analytics: ANALYTICS.RECOMMENDATION_SIMULABLE
          },
          sustainability_analytics_recommendation_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-action-page-view',
            analytics: ANALYTICS.RECOMMENDATION_CLICK
          },
          sustainability_analytics_page_view_third_level: {
            bind: 'bbva-manager-carbon-footprint-analytics-page-view-third-level',
            analytics: ANALYTICS.ANALYTICS_LEVEL3
          },
          sustainability_analytics_recommendation_idea_page_view: {
            bind: 'bbva-manager-carbon-footprint-analytics-idea-page-view',
            analytics: ANALYTICS.IDEA_APP_PAGE_VIEW
          },
          sustainability_analytics_more_info_item_click: {
            bind: 'bbva-manager-carbon-footprint-analytics-navigation',
            analytics: ANALYTICS.MORE_INFO_ITEM_CLICK
          },
          sustainability_analytics_ecodes_video_play: {
            bind: 'bbva-manager-carbon-footprint-analytics-see-video',
            analytics: ANALYTICS.ECODES_VIDEO
          },
          sustainability_analytics_share: {
            bind: 'bbva-manager-carbon-footprint-analytics-share',
            analytics: ANALYTICS.SHARE
          }
        }
      }
    }
  };

  const sustainabilityCarbonFootprintOverview = {
    zone: 'app__main',
    tag: 'sustainability-carbon-footprint-overview',
    familyPath: '@bbva-web-components-widgets/sustainability-carbon-footprint-overview',
    type: 'UI',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      sustainabilityApiVersion: sustainability,
      mode: 'loading',
      appSettingsId: 'GLOMO-MX-1.0-PROD',
      appSettingsSustainabilityConfigKey: 'sustainability_carbon_footprint',
      appSettingsHost: publicSettingsHost,
      appSettingsRequiredToken: 'none',
      aemHost: aemHost,
      collectiveAchievementsAemPath: 'content/caas/mexico/app/sustainability/collective-impact.model.json',
      ecodesAemPath: 'content/caas/mexico/app/sustainability/sustainability-info.model.json',
      tipsAemPath: 'content/caas/mexico/app/sustainability/action-detail.model.json',
      onboardingAemPath: 'content/caas/mexico/app/sustainability/onboarding.model.json',
      configAemPath: 'content/caas/mexico/app/sustainability/config.model.json',
      onboardingTourData: {
        'trackerFakeData.value': 3050,
        'trackerFakeData.category.details.0.value': 1189,
        'trackerFakeData.category.details.1.value': 1861,
        'trackerFakeData.equivalence.details.1.value': '21887',
        'trackerFakeData.equivalence.details.1.example': '21887 MXN'
      },
      features: {
        appHasRecategorization: false,
        appHasBringReceiptsFeature: false,
        appHasPayInAppFeature: true,
        clientHasCard: true,
        countryClientsMustHaveCardLinkedWithAccount: true
      },
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      legitimateInterestMark: true,
      cellsConnections: {
        in: {
          sustainability_selected_mode: {
            bind: 'mode'
          },
          sustainability_set_toggles: {
            bind: 'toggles'
          },
          [`global_storage_get_${storageKeys.equivalencesViewed}_success`]: {
            bind: 'equivalencesViewed'
          },
          [`global_storage_get_${storageKeys.alertsClosed}_success`]: {
            bind: 'suggestionsViewed'
          },
          [`global_storage_get_${storageKeys.collectiveAchievementsViewed}_success`]: {
            bind: 'lastCollectiveAchievementViewed'
          },
          sustainability_reset: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigateBack'
          }
        },
        out: {
          global_open_native_menu: {
            bind: 'sustainability-carbon-footprint-overview-menu-click',
            'forward-to-native': true
          },
          sustainability_onboarding_completed: {
            bind: 'sustainability-carbon-footprint-overview-onboarding-start'
          },
          sustainability_update_equivalences_viewed: {
            bind: 'sustainability-carbon-footprint-overview-equivalence-view'
          },
          sustainability_update_suggestions_viewed: {
            bind: 'sustainability-carbon-footprint-overview-alert-close'
          },
          sustainability_update_collective_achievements_viewed: {
            bind: 'sustainability-carbon-footprint-overview-collective-achievements-view'
          },
          sustainability_back_navigation: {
            bind: 'navigation-go-back'
          },
          sustainability_forward_navigation: {
            bind: 'navigation-go-forward'
          },
          sustainability_actions_navigation: {
            bind: 'sustainability-carbon-footprint-overview-tip-click'
          },
          sustainability_carbon_data_fetched: {
            bind: 'carbon-footprint-overview-api-dm-fetch'
          },
          sustainability_tab_click: {
            bind: 'sustainability-carbon-footprint-overview-tab-click'
          },
          sustainability_equivalence_know_more: {
            bind: 'sustainability-carbon-footprint-overview-equivalence-know'
          },
          sustainability_alert_no_content_shown: {
            bind: 'sustainability-carbon-footprint-overview-no-content-show'
          },
          sustainability_alert_shown: {
            bind: 'sustainability-carbon-footprint-overview-alert-view'
          },
          sustainability_alert_action_click: {
            bind: 'sustainability-carbon-footprint-overview-action-activate'
          },
          sustainability_suggestion_notification_shown: {
            bind: 'sustainability-carbon-footprint-overview-alert-show'
          },
          sustainability_modal_state_changed: {
            bind: 'modal-state-change'
          },
          sustainability_recommendation_click: {
            bind: 'sustainability-carbon-footprint-overview-tip-click'
          },
          sustainability_recommendation_group_click: {
            bind: 'sustainability-carbon-footprint-overview-action-group-select'
          },
          sustainability_recommendation_idea_open: {
            bind: 'sustainability-carbon-footprint-overview-idea-open'
          },
          sustainability_more_info_item_click: {
            bind: 'sustainability-carbon-footprint-overview-info-view'
          },
          sustainability_ecodes_modal_open: {
            bind: 'sustainability-carbon-footprint-overview-sustainable-info-modal-open'
          },
          sustainability_ecodes_video_play: {
            bind: 'sustainability-carbon-footprint-overview-sustainable-info-click'
          },
          sustainability_share_idea: {
            bind: 'sustainability-carbon-footprint-overview-idea-share'
          },
          sustainability_share_equivalence: {
            bind: 'sustainability-carbon-footprint-overview-equivalence-share'
          },
          sustainability_emissions_button_click: {
            bind: 'sustainability-carbon-footprint-overview-emissions-list-view'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mxsustainability',
    currentPage: {
      url: '/sustainability'
    },
    pages: pages,
    template: template,
    components: [
      createSpinner(CONFIG),
      handleLifeCycle,
      sustainabilityFeatureManager,
      sustainabilityFeatureAnalyticsManager,
      sustainabilityCarbonFootprintOverview
    ]
  };

  if (nativeShell) {
    base.components.push({
      zone: 'app__main',
      type: 'DM',
      tag: 'cells-mobile-socialsharing',
      properties: {
        cellsConnections: {
          in: {
            sustainability_share_social_sharing: {
              bind: 'share'
            }
          }
        }
      }
    });
  } else {
    base.components.push(appSideBar(CONFIG));
  }

  localStorage.addOutStorageChannels(base.components, Object.values(storageKeys), CONFIG);

  return base;
};
