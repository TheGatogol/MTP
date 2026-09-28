'use strict';

module.exports = CONFIG => {
  const localStorageApp = require('./common/_local-storage');
  const pages = require('./common/_pages')(CONFIG)('pfmDashboardDetail');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { nativeShell = false, nativeIos = false, native = false, globalServices: { host, requiredToken = 'tsec', versions: { pfmV2, balancesSearch } } } = CONFIG;
  const { taxonomicGroupIndexes, taxonomicGroupTitles, cardProductTypes, cardValidStatuses, accountValidStatuses, pfmTooltipOrder } = require('./pfm/_constants');
  const analytics = require('./analytics/_pfm')(CONFIG);
  const { getCustomTag, getFootprint } = require('./analytics/_pfmPettyExpenses')();
  const relevantFactsAnalytics = require('./analytics/_relevantFacts')(CONFIG);
  const { createSpinner, getLanguage, getLocalCurrency, appFooter, get, APP_SIDEBAR: appSidebar } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'pfmDashboardDetail');
  const footerHeightPfm = 64;
  const featureFlagProactivityMessage = {
    key: 'glomo.dashboard.pfm.proactiveJourneyEnabled',
    defaultValue: false
  };
  const analyticsFlagFromPage = {
    key: 'glomo.analytics.proactivityJourney',
    defaultValue: true
  };
  const pfmPublicSettings = {
    detail: [ {
      key: 'PFM_dashboard_chart_configuration',
      value: '{"data":{"donut":[{"taxonomyLevelShown":"SUBCATEGORIES","relatedGroup":"3","numberOfItems":"3","order":3},{"taxonomyLevelShown":"SUBCATEGORIES","relatedGroup":"2","numberOfItems":"3","order":1},{"taxonomyLevelShown":"CATEGORIES","relatedGroup":"1","numberOfItems":"3","order":2},{"taxonomyLevelShown":"CATEGORIES","relatedGroup":"4","numberOfItems":"3","order":4}]}}'
    } ]
  };

  const pfmPfmDashboard = {
    zone: 'app__main',
    type: 'UI',
    tag: 'pfm-pfm-dashboard-gl',
    render: 'litElement',
    familyPath: '@glomo-web-components/pfm-pfm-dashboard-gl',
    properties: {
      config: {
        fixedHeader: true,
        header: {
          text: 'pfm-petty-expenses-gl-feature-title',
          variant: 'first-level-sequential',
          rightButtons: [
            {
              accessibilityText: 'pfm-petty-expenses-gl-menu',
              eventIconName: 'pfm-petty-expenses-gl-menu-select',
              icon: 'spherica:menu',
              id: 'btn-menu',
              label: 'pfm-petty-expenses-gl-menu'
            }
          ],
          leftButtons: [
            {
              accessibilityText: 'pfm-petty-expenses-gl-return',
              eventIconName: 'pfm-petty-expenses-gl-navigation-go-back',
              icon: 'spherica:back',
              id: 'btn-back',
              label: 'pfm-petty-expenses-gl-return'
            }
          ]
        }
      },
      attachModalsToBody: true,
      iOSFixedHeader: nativeIos,
      className: 'u-margin-top--0 u-padding-top--0',
      native,
      host,
      requiredToken,
      requiredTokenProactivity: requiredToken,
      personalFinancesApiVersion: pfmV2,
      balancesSearchApiVersion: balancesSearch,
      language: getLanguage(),
      cacheType: 'SESSION',
      contentFragmentHost: 'https://assets-stage.caasbbva.com',
      contentFragmentPath: 'content/caas/mexico/app/pfm/onboardingdashboard.model.json',
      pfmKeySettings: 'PFM_dashboard_chart_configuration',
      publicSettings: pfmPublicSettings,
      publicSettingsId: 'pfm-dashboard',
      localCurrency: getLocalCurrency(),
      expensesGroupId: taxonomicGroupIndexes.expenses,
      incomesGroupId: taxonomicGroupIndexes.incomes,
      investmentSavingsFinancingGroupId: taxonomicGroupIndexes.financialMovements,
      titles: taxonomicGroupTitles,
      tooltipOrder: pfmTooltipOrder,
      proactivityMessagePublicSettingsHost: host,
      emptyDescriptionGroup: true,
      emplacement: 'DAY_TO_DAY',
      useInternalProducts: true,
      internalProducts: {contracts: []},
      hideHelpFaqs: true,
      helpTooltipContextual: true,
      cellsConnections: {
        in: {
          ch_advice_configuration_update_products: {
            bind: 'resetRelatedContracts'
          },
          global_pfm_id: {
            bind: 'pfmId'
          },
          ch_accounts_products: {
            bind: 'internalAccounts'
          },
          ch_accounts_card_products: {
            bind: 'internalProducts'
          },
          ch_card_products: {
            bind: 'internalCards'
          },
          ch_pfm_dashboard_set_selected_tab: {
            bind: 'selectedTab'
          },
          ch_pfm_dashboard_set_config_head: {
            bind: 'config'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'discreetMode'
          },
          ch_pfm_dashboard_set_user_first_name: {
            bind: 'personName'
          },
          blue_redirect_pfm_dashboard_detail_flag: {
            bind: 'isBlueNavigation'
          }
        },
        out: {
          pfm_dashboard_detail_close_message: {
            bind: 'proactivity-message-close'
          },
          global_navigation_message_to_detail: {
            bind: 'proactivity-message-execute',
            link: {
              page: 'relevantFactsDetail',
              params: {
                relevantFactId: 'relevantFactId'
              }
            }
          },
          navigation_to_pfm_expenses_page_group: {
            bind: 'pfm-pfm-dashboard-gl-show-more-select',
            link: {
              page: 'pfmCategorization'
            }
          },
          ch_refresh_navigation_back: {
            bind: 'pfm-pfm-dashboard-gl-show-more-select'
          },
          navigation_to_pfm_expenses_page_category: {
            bind: 'pfm-pfm-dashboard-gl-category-select'
          },
          navigation_to_pfm_settings: {
            bind: 'pfm-pfm-dashboard-gl-config-link-select',
            link: {
              page: 'adviceConfiguration'
            }
          },
          pfm_dashboard_icon_click: {
            bind: 'header-main-icon-click'
          },
          pfm_dashboard_interaction_link_analytics: {
            bind: 'pfm-pfm-dashboard-gl-select-tab-change'
          },
          pfm_dashboard_navigation_back_to_blue: {
            bind: 'pfm-pfm-dashboard-gl-blue-navigation',
            link: {
              page: 'digitalButler'
            }
          }
        }
      }
    }
  };
  const pfmSavingTools = {
    zone: 'app__main',
    type: 'UI',
    tag: 'pfm-saving-tools-gl',
    render: 'litElement',
    familyPath: '@glomo-web-components/pfm-saving-tools-gl',
    properties: {
      className: 'u-position--relative',
      native,
      host,
      requiredToken,
      balancesApiVersion: balancesSearch,
      frequency: 'ONE_TIME',
      pfmApiVersion: pfmV2,
      personalFinancesApiVersion: pfmV2,
      expensesGroupId: taxonomicGroupIndexes.expenses,
      incomesGroupId: taxonomicGroupIndexes.incomes,
      hideSavingCheckLink: true,
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      listToolsOptions: [],
      cellsConnections: {
        in: {
          ch_pfm_dashboard_detail_init: {
            bind: 'firstUpdated'
          },
          global_pfm_id: {
            bind: 'pfmId'
          },
          ch_default_pfm_profile_period_startdate: {
            bind: 'fromOperationDate'
          },
          ch_default_pfm_profile_period_enddate: {
            bind: 'toOperationDate'
          },
          ch_pfm_saving_tools_operation: {
            bind: 'listToolsOptions'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'discreetMode'
          },
          pfm_pfm_dashboard_hide_saving_tools: {
            bind: 'hidden'
          }
        },
        out: {
          navigation_to_pfm_goals_page: {
            bind: 'pfm-saving-tools-gl-goals-click',
            link: {
              page: 'goals'
            },
            analytics: analytics.createInteractionLinkWithLevel2('mi dinero', 'click en metas')
          },
          navigation_to_pfm_program_page: {
            bind: 'pfm-saving-tools-gl-program-click',
            link: {
              page: 'investmentsFollowUp'
            },
            analytics: analytics.createInteractionLinkWithLevel2('mi dinero', 'click en inversiones')
          },
          navigation_to_pfm_bcsore_page: {
            bind: 'pfm-saving-tools-gl-bcscore-click',
            link: {
              page: 'creditScore'
            }
          },
          navigation_to_pfm_petty_expenses_page: {
            bind: 'pfm-saving-tools-gl-pettyexpenses-click',
            link: {
              page: 'pfmPettyExpenses'
            },
            analytics: getCustomTag('monitorear gastos hormiga')
          }
        }
      }
    }
  };

  const bbvaControllerPfmDashboardMx = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-controller-pfm-dashboard-mx',
    tag: 'bbva-controller-pfm-dashboard-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      pfmApiVersion: pfmV2,
      cardTypes: cardProductTypes,
      cardValidStatuses: cardValidStatuses,
      accountValidStatuses: accountValidStatuses,
      native,
      selectedTab: {
        name: 'dashboard',
        value: 0
      },
      expensesGroupId: taxonomicGroupIndexes.expenses,
      taxonomicGroupIndexes: taxonomicGroupIndexes,
      amountWithSign: true,
      pageName: 'pfm-dashboard',
      searchOnlyCurrentPfm: true,
      isSpherica: sphericaPageUtils.isSpherica(),
      iconPrefix: sphericaPageUtils.isSpherica() ? 'spherica' : 'bbva',
      excludeCardSubProduct: [ 'DEBIT_CARD' ],
      investmentsProducts: ['DEPOSIT', 'INVESTMENT_FUND', 'INVE'],
      cellsConnections: {
        in: {
          pfm_dashboard_init_page: {
            bind: 'init'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          ch_default_pfm_profile_period_data: {
            bind: 'periodPfm'
          },
          navigation_to_pfm_expenses_page_category: {
            bind: 'navigationToCategorizationCategory'
          },
          global_financial_overview_success: {
            bind: 'parseInvestmentsProducts'
          },
          pfm_dashboard_icon_click: {
            bind: 'manageHeaderIconClick'
          },
          global_feature_flag_collection_updated: {
            bind: 'getFeatureFlagPfm'
          }
        },
        out: {
          ch_pfm_dashboard_detail_init: {
            bind: 'get-default-pfm-id'
          },
          ch_pfm_dashboard_set_selected_tab: {
            bind: 'set-selected-tab-dashboard'
          },
          ch_pfm_dashboard_set_config_head: {
            bind: 'pfm-pfm-dashboard-set-config-head'
          },
          ch_pfm_saving_tools_operation: {
            bind: 'pfm-saving-tools-operation'
          },
          ch_categorization_category_selected: {
            bind: 'category-selected',
            link: {
              page: 'pfmCategorization'
            }
          },
          navigation_to_pfm_categorization_page_group: {
            bind: 'pfm-dashboard-detail-group-select',
            link: {
              page: 'pfmCategorization'
            }
          },
          ch_refresh_navigation_back: {
            bind: 'pfm-dashboard-detail-group-select'
          },
          ch_group_id_to_categorization: {
            bind: 'set-group-id-to-categorization'
          },
          pfm_pfm_dashboard_hide_saving_tools: {
            bind: 'pfm-pfm-dashboard-hide-saving-tools'
          },
          ch_pfm_pfm_dashboard_return: {
            bind: 'pfm-pfm-dashboard-return',
            backStep: true
          },
          ch_pfm_pfm_dashboard_open_native_menu: {
            bind: 'pfm-pfm-dashboard-show-menu'
          },
          ch_pfm_dashboard_set_user_first_name: {
            bind: 'pfm-pfm-dashboard-user-first-name'
          },
          ch_pfm_petty_expenses_products: {
            bind: 'pfm-petty-expenses-products'
          },
          ch_pfm_petty_expenses_start_date: {
            bind: 'get-default-pfm-profile-start-period-data'
          },
          ch_pfm_petty_expenses_end_date: {
            bind: 'get-default-pfm-profile-end-period-data'
          },
          ch_pfm_petty_expenses_enabled: {
            bind: 'pfm-petty-expenses-enabled',
            analytics: getFootprint('')
          }
        },
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        }
      }
    }
  };
  const glomoAnalyticstPfmManager = {
    zone: 'app__main',
    tag: 'glomo-analytics-pfm-manager',
    familyPath: '@glomo-web-components/glomo-analytics-pfm-manager',
    render: 'litElement',
    type: 'DM',
    properties: {
      tabData: { '0': 'expenses', '1': 'incomes', '3': 'saves', '2': 'investments' },
      appStartedText: '',
      onStartEventSuffix: 'pfm-dashboard',
      cellsConnections: {
        in: {
          pfm_dashboard_interaction_link_analytics: {
            bind: 'firePageViewWithTabConfig'
          },
          ch_categorization_category_selected: {
            bind: 'categorizationCategorySelectAnalytics'
          }
        },
        out: {
          ch_pfm_dashboard_analytics_interaction_link_incomes: {
            bind: 'analytics-page-view-tab-selected-incomes',
            analytics: analytics.createInteractionLinkWithLevel2('mi dinero', 'tab ver ingresos')
          },
          ch_pfm_dashboard_analytics_interaction_link_expenses: {
            bind: 'analytics-page-view-tab-selected-expenses',
            analytics: analytics.createInteractionLinkWithLevel2('mi dinero', 'tab ver gastos')
          },
          ch_pfm_dashboard_analytics_interaction_link_saves: {
            bind: 'analytics-page-view-tab-selected-saves',
            analytics: analytics.createInteractionLinkWithLevel2('mi dinero', 'tab ver ahorro inversiones')
          },
          ch_pfm_dashboard_analytics_interaction_link_investments: {
            bind: 'analytics-page-view-tab-selected-investments',
            analytics: analytics.createInteractionLinkWithLevel2('mi dinero', 'tab ver movimientos financieros')
          },
          ch_pfm_categorization_analytics_category_page_view: {
            bind: 'analytics-page-view-categorization-category',
            analytics: analytics.PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW
          }
        }
      }
    }
  };
  const bbvaManagerRelevantFacts = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-manager-relevant-facts',
    familyPath: '@glomo-web-components/bbva-manager-relevant-facts',
    render: 'litElement',
    properties: {
      flagFromPage: featureFlagProactivityMessage,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'getProactiveJourneyFlagValue'
          }
        },
        out: {
          ch_flag_value_proactivity_message: {
            bind: 'show-proactivity-message'
          }
        }
      }
    }
  };
  const bbvaAnalyticmanagerPersonalization = {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-personalization',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-personalization',
    render: 'litElement',
    properties: {
      analyticsFlagFromPage: analyticsFlagFromPage,
      cellsConnections: {
        in: {
          relevant_facts_pfm_dashboard_navigation_notify_channel: {
            bind: 'firePageView'
          },
          pfm_dashboard_message_loaded: {
            bind: 'firePageView'
          },
          pfm_dashboard_message_without_campaigns: {
            bind: 'firePageViewWithoutCampaigns'
          },
          global_navigation_message_to_detail: {
            bind: 'fireClickEvent'
          },
          pfm_dashboard_detail_close_message: {
            bind: 'fireCloseEvent'
          }
        },
        out: {
          ch_relevant_facts_pfm_dashboard_analytics_page_view: {
            bind: 'analytics-page-view',
            analytics: relevantFactsAnalytics.pfmDashboardDetailPageView
          },
          ch_relevant_facts_pfm_dashboard_analytics_page_view_without_campaigns: {
            bind: 'analytics-page-view-without-campaigns',
            analytics: relevantFactsAnalytics.MESSAGE_PFM_DASHBOARD_PAGE_VIEW_WITHOUT_CAMPAIGNS
          },
          ch_relevant_facts_pfm_dashboard_analytics_click_event: {
            bind: 'relevant-facts-analytics-click-event-pfm-dashboard',
            analytics: relevantFactsAnalytics.MESSAGE_PFM_DASHBOARD_CLICK_LINK
          },
          ch_relevant_facts_pfm_dashboard_analytics_close_event: {
            bind: 'relevant-facts-analytics-close-event-pfm-dashboard',
            analytics: relevantFactsAnalytics.MESSAGE_PFM_DASHBOARD_CLICK_CLOSE
          },
          ch_analytics_flag_to_ticket: {
            bind: 'relevant-facts-analytics-click-event-pfm-dashboard'
          }
        }
      }
    }
  };
  const cellsBottomModalMessage = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-bottom-modal-message',
    tagSpherica: 'cells-bottom-modal-message-spherica',
    properties: {
      autoHide: true,
      time: 3000,
      type: 'success',
      cellsConnections: {
        in: {
          global_delete_budget_success_message: {
            bind: 'open'
          }
        }
      }
    }
  };

  if (sphericaPageUtils.isSpherica()) {
    pfmPfmDashboard.properties.cellsConnections.in.ch_pfm_dashboard_show_onboarding = {
      bind: 'showWelcomeOnboarding'
    };
    pfmPfmDashboard.properties.cellsConnections.in.ch_pfm_dashboard_show_tooltips = {
      bind: 'showWelcomeTooltips'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.global_storage_get_pfm_welcome_tutorial_success = {
      bind: 'triggerTutorial'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.global_storage_get_pfm_welcome_tutorial_error = {
      bind: 'triggerTutorial'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.out.global_get_from_storage = {
      bind: 'get-native-local-storage'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.out.global_set_in_storage = {
      bind: 'set-native-local-storage'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.out.ch_pfm_dashboard_show_onboarding = {
      bind: 'welcome-to-pfm-customer',
      analytics: analytics.createAdvancedFootprintWithLevel2and3('mi dinero', 'onboarding')
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.out.ch_pfm_dashboard_show_tooltips = {
      bind: 'welcome-to-pfm-customer'
    };
  }

  const base = {
    currentPage: {
      url: '/pfm/dashboard/detail'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: `bg-light-grey${nativeIos ? ' ios-top-padding' : ''}`,
        headerHeight: 0,
        extraHeaderClass: 'dark-blue-bg',
        animationType: 'horizontal',
        disableScrollLock: true,
        footerFixed: true,
        hasFooter: true,
        footerHeight: footerHeightPfm,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        avoidToggleMenu: nativeShell,
        rightDrawer: true,
        cellsConnections: {
          in: {
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
            },
            ch_pfm_pfm_dashboard_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        footerFloating: true,
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey${nativeIos ? ' dashboard-ios-top-padding ios-top-padding' : ''}`
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pfmDashboardDetail',
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': true
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_pfmDashboardDetail: {
                bind: 'init'
              }
            },
            out: {
              pfm_dashboard_reset_page: {
                bind: 'reset'
              },
              pfm_dashboard_init_page: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              },
              pfm_dashboard_message_loaded: {
                bind: 'init-page'
              },
              pfm_dashboard_message_without_campaigns: {
                bind: 'init-page'
              }
            }
          }
        }
      },
      pfmPfmDashboard,
      pfmSavingTools,
      bbvaControllerPfmDashboardMx,
      glomoAnalyticstPfmManager,
      bbvaManagerRelevantFacts,
      bbvaAnalyticmanagerPersonalization,
      cellsBottomModalMessage
    ]
  };

  if (CONFIG.nativeShell) {
    const fnGet = get(base);
    fnGet('bbva-controller-pfm-dashboard-mx').properties.cellsConnections.out.global_open_native_menu = {
      bind: 'pfm-pfm-dashboard-show-menu',
      'forward-to-native': true
    };
  } else {
    base.components.push(appSidebar(CONFIG));
  }
  base.components.push(appFooter(CONFIG, 'pfmDashboard'));

  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, [ 'pfm_welcome_tutorial' ], CONFIG);

  return sphericaPageUtils.spherize(base);
};
