'use strict';

module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('pfmCategorization');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { taxonomicGroupIndexes, actionsPfm, actionsPfmSpherica } = require('./pfm/_constants');
  const { nativeIos = false, native = false, nativeShell = false, globalServices: { host, requiredToken = 'tsec', versions: { pfmV2, balancesSearch} } } = CONFIG;
  const analytics = require('./analytics/_pfm')();
  const { createSpinner, getLocalCurrency, getLanguage, pluginDatePicker } = require('./common/helpers/_utils');
  const pageName = 'pfmCategorization';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const actionsPfmCategorization = sphericaPageUtils.isSpherica() ?  actionsPfmSpherica : actionsPfm;

  const base = {
    currentPage: {
      url: '/pfm/categorization'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey'
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_pfmCategorization: {
                bind: 'init'
              }
            },
            out: {
              pfm_categorization_reset_page: {
                bind: 'reset'
              },
              pfm_categorization_init_page: {
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
        type: 'DM',
        tag: 'pfm-categorization-detail-gl',
        render: 'litElement',
        familyPath: '@glomo-web-components/pfm-categorization-detail-gl',
        properties: {
          classname: 'u-margin-top--0',
          native,
          host,
          requiredToken,
          personalFinancesApiVersion: pfmV2,
          balanceSearchApiVersion: balancesSearch,
          pfmBalancesCacheKey: 'pfmBalancesCacheKey',
          pfmsCacheKey: 'pfmsCacheKey',
          requiredTokenProactivity: 'tsec',
          hideBrands: true,
          hideOperativeActions: true,
          enableMovementLink: true,
          sanitizeContractsIds: true,
          selectedTab: 0,
          language: getLanguage(),
          showChartAverage: true,
          hideComandLine: true,
          modalHeaderButtons: [],
          utc: true,
          proactivityMessagePublicSettingsHost: host,
          emplacement: 'DAY_TO_DAY',
          selectedPeriodDefault: 0,
          localCurrency: getLocalCurrency(),
          expensesGroupId: taxonomicGroupIndexes.expenses,
          incomesGroupId: taxonomicGroupIndexes.incomes,
          showCalendar: !nativeIos,
          hideReturnText: true,
          hideHelpButton: true,
          hideMenuButton: true,
          hideChartDescriptionLink: true,
          groupActions: actionsPfmCategorization,
          hideProactivityMessage: true,
          cellsConnections: {
            in: {
              global_pfm_id: {
                bind: 'pfmId'
              },
              pfm_categorization_init_page: {
                bind: 'firstUpdated'
              },
              ch_simple_accounts_card_products: {
                bind: 'contracts'
              },
              ch_categorization_category_selected: {
                bind: 'history'
              },
              ch_group_id_to_categorization: {
                bind: 'groupId'
              },
              navigation_from_futura_dashboard_pfm: {
                bind: 'groupId'
              },
              ch_pfm_dashaborad_set_selected_tab: {
                bind: 'selectedTab'
              },
              ch_pfm_categorization_cache_key: {
                bind: 'pfmsCacheKey'
              },
              global_nativeconnector_date_picker_launch_success: {
                bind: 'calendarDate'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'discreetMode'
              },
              ch_pfm_categorization_reset_pfms: {
                bind: 'pfms'
              },
              ch_pfm_recategorization_single_movement_recategorize: {
                bind: 'firstUpdated'
              },
              global_hanlder_native_back_button: {
                bind: 'navigateBack'
              },
              ch_pfm_categorization_balances_cache_key: {
                bind: 'pfmBalancesCacheKey'
              },
              blue_navigation_to_history_params: {
                bind: 'navigationFromBlue'
              },
              blue_period_to_history_params: {
                bind: 'periodFromBlue'
              }
            },
            out: {
              ch_categorization_navigation_go_forward: {
                bind: 'navigation-go-forward'
              },
              ch_categorization_navigation_back: {
                bind: 'pfm-categorization-detail-gl-navigation-go-back',
                'forward-to-native': true
              },
              navigation_categorization_to_movement_detail: {
                bind: 'pfm-categorization-detail-gl-movement-select'
              },
              ch_categorization_group_detail_action_select: {
                bind: 'pfm-categorization-detail-gl-group-detail-action-select'
              },
              ch_categorization_subcategory_detail_action_select: {
                bind: 'pfm-categorization-detail-gl-subcategory-detail-action-select'
              },
              ch_categorization_tab_click: {
                bind: 'pfm-categorization-detail-gl-tab-click'
              },
              ch_categorization_dates_selector_select: {
                bind: 'pfm-categorization-detail-gl-dates-selector-select'
              },
              ch_categorization_category_select_analytics: {
                bind: 'pfm-categorization-detail-gl-category-select'
              },
              ch_categorization_subcategory_select_analytics: {
                bind: 'pfm-categorization-detail-gl-subcategory-select'
              },
              ch_categorization_state_navigation: {
                bind: 'pfm-categorization-detail-gl-navigation-state'
              },
              global_nativeconnector_datepicker_launch: {
                bind: 'pfm-categorization-detail-gl-native-calendar-show'
              },
              ch_categorization_history_tab_select_analytics: {
                bind: 'pfm-categorization-detail-gl-history-tab-chart-change'
              },
              ch_navigation_to_goals: {
                bind: 'button-row-item-budgets-click',
                link: {
                  page: 'goals'
                }
              },
              ch_navigation_to_investments: {
                bind: 'button-row-item-investments-click',
                link: {
                  page: 'investmentsFollowUp'
                }
              },
              ch_pfm_categorization_analytics_interaction_link_period: {
                bind: 'pfm-categorization-detail-gl-period-selector-confirm',
                analytics: analytics.createInternalLinkWithLevel2('definir periodo', 'click en aceptar')
              },
              ch_pfm_categorization_analytics_chart_slider_change: {
                bind: 'pfm-categorization-detail-gl-chart-slider-change'
              },
              ch_pfm_categorization_detail_category_name: {
                bind: 'pfm-categorization-detail-gl-category-name'
              },
              ch_pfm_categorization_detail_navigation_back_analytics: {
                bind: 'pfm-categorization-detail-gl-navigation-back-analytics'
              },
              global_navigation_message_to_detail: {
                bind: 'proactivity-message-execute',
                link: {
                  page: 'relevantFactsDetail',
                  params: {
                    relevantFactId: 'relevantFactId'
                  }
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-controller-pfm-dashboard-mx',
        tag: 'bbva-controller-pfm-dashboard-mx',
        render: 'litElement',
        properties: {
          taxonomicGroupIndexes: taxonomicGroupIndexes,
          expensesGroupId: taxonomicGroupIndexes.expenses,
          searchOnlyCurrentPfm: true,
          cellsConnections: {
            in: {
              navigation_to_pfm_expenses_page_group: {
                bind: 'navigationToCategorization'
              },
              navigation_to_pfm_categorization_page_group: {
                bind: 'navigationToCategorization'
              },
              ch_refresh_navigation_back: {
                bind: 'refreshNavigationBack'
              },
              navigation_from_futura_dashboard: {
                bind: 'refreshNavigationBack'
              },
              ch_categorization_category_selected: {
                bind: 'refreshNavigationBack'
              },
              ch_categorization_navigation_go_forward: {
                bind: 'navigationGoForward'
              },
              ch_categorization_group_detail_action_select: {
                bind: 'navigationGoForward'
              },
              ch_categorization_subcategory_detail_action_select: {
                bind: 'navigationGoForward'
              },
              ch_categorization_navigation_back: {
                bind: 'navigationBack'
              },
              pfm_categorization_init_page: {
                bind: 'initPageCategorization'
              },
              ch_pfm_recategorization_single_movement_recategorize: {
                bind: 'refreshDataCategorization'
              },
              ch_advice_configuration_update_products: {
                bind: 'refreshDataCategorization'
              },
              navigation_categorization_to_movement_detail: {
                bind: 'navigationToMovementDetail'
              },
              blue_navigation_to_pfm_expenses_page_category: {
                bind: 'navigationToCategorization'
              },
              blue_navigation_back_pfm: {
                bind: 'refreshNavigationBack'
              }
            },
            out: {
              ch_pfm_recategorization_refresh: {
                bind: 'pfm-categorization-refresh-data'
              },
              ch_group_id_to_categorization: {
                bind: 'set-group-id-to-categorization'
              },
              ch_pfm_categorization_cache_key: {
                bind: 'pfm-categorization-cache-key'
              },
              ch_pfm_categorization_reset_pfms: {
                bind: 'pfm-categorization-reset-pfms'
              },
              global_pfm_set_transaction_detail: {
                bind: 'backup-transaction-detail'
              },
              ch_categorization_transactions_transaction_tap: {
                bind: 'transaction-detail',
                link: {
                  page: 'pfmTransactionDetail',
                  params: {
                    id: 'globalId',
                    localId: 'transactionId',
                    transactionId: 'transactionId'
                  }
                }
              },
              pfm_show_loading: {
                bind: 'pfm-categorization-transaction-id-movement-detail'
              },
              ch_categorization_navigation_to_history: {
                bind: 'pfm-categorization-navigation-to-historyPage'
              },
              ch_categorization_navigation_to_category_history: {
                bind: 'pfm-categorization-navigation-to-historyPageCategory'
              },
              ch_categorization_navigation_to_subcategory_history: {
                bind: 'pfm-categorization-navigation-to-historyPageCategorySubcategory'
              },
              ch_categorization_navigation_back_step: {
                bind: 'navigation-back-step',
                backStep: true
              },
              ch_pfm_categorization_balances_cache_key: {
                bind: 'pfm-categorization-cache-key'
              }
            },
            params: {
              customerId: 'global_user_id'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-pfm-manager',
        familyPath: '@glomo-web-components/glomo-analytics-pfm-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          appStartedText: '',
          pfmAggregationDynamicData: {
            expenses: analytics.COMMON_PFM_LINEAL_GRAPH_VIEW_GROUP,
            categories: analytics.COMMON_PFM_GRAPH_VIEW_CATEGORY_PREFIX,
            subcategories: analytics.COMMON_PFM_GRAPH_VIEW_SUBCATEGORY_PREFIX
          },
          titleGroupId: {
            1: 'ingreso total',
            2: 'gasto total',
            3: 'actividad financiera',
            4: 'ahorro total'
          },
          onStartEventSuffix: 'categorization',
          maxEventsFired: 0,
          cellsConnections: {
            in: {
              pfm_categorization_init_page: {
                bind: 'fireCategorizationPageVisit'
              },
              ch_pfm_categorization_detail_navigation_back_analytics: {
                bind: 'fireCategorizationPageVisit'
              },
              ch_categorization_dates_selector_select: {
                bind: 'firePageView'
              },
              ch_categorization_tab_click: {
                bind: 'fireCategorizationTabClick'
              },
              ch_group_id_to_categorization: {
                bind: 'groupId'
              },
              ch_categorization_category_select_analytics: {
                bind: 'categorizationCategorySelectAnalytics'
              },
              ch_categorization_subcategory_select_analytics: {
                bind: 'categorizationSubCategorySelectAnalytics'
              },
              ch_categorization_navigation_to_history: {
                bind: 'fireHistoryView'
              },
              ch_categorization_navigation_to_category_history: {
                bind: 'fireHistoryViewCategory'
              },
              ch_categorization_navigation_to_subcategory_history: {
                bind: 'fireHistoryViewSubcategory'
              },
              ch_categorization_state_navigation: {
                bind: 'navigationCategorizationState'
              },
              global_categorization_transaction_detail_navigate_recategorization: {
                bind: 'fireOnStartRecatecorizationEvent'
              },
              product_link_bottom_clicked: {
                bind: 'fireOnStartEvent'
              },
              ch_categorization_history_tab_select_analytics: {
                bind: 'fireHistorySelectedTabView'
              },
              ch_pfm_categorization_analytics_chart_slider_change: {
                bind: 'fireHistorySelectedSliderView'
              },
              ch_pfm_categorization_detail_category_name: {
                bind: 'categoryName'
              }
            },
            out: {
              ch_pfm_categorization_analytics_page_visit: {
                bind: 'analytics-categorization-page-visit',
                analytics: analytics.createAdvancedFootprintWithLevel2({bind: 'level2'})
              },
              ch_pfm_categorization_analytics_page_view: {
                bind: 'analytics-page-view',
                analytics: analytics.createAdvancedFootprintWithLevel2('definir periodo')
              },
              ch_pfm_categorization_analytics_category_page_view: {
                bind: 'analytics-page-view-categorization-category',
                analytics: analytics.PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW
              },
              ch_pfm_categorization_analytics_tab_category_page_view: {
                bind: 'analytics-page-view-categorization-tab-click',
                analytics: analytics.createInteractionLinkWithLevel2and3({bind: 'level2'}, {bind: 'level3'}, {bind: 'interactionLevel'})
              },
              ch_pfm_categorization_analytics_history_cpage_view: {
                bind: 'analytics-page-view-historyPage',
                analytics: analytics.PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW
              },
              ch_pfm_categorization_analytics_history_category_page_view: {
                bind: 'analytics-page-view-historyPageCategory',
                analytics: analytics.PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW
              },
              ch_pfm_categorization_analytics_history_subcategory_page_view: {
                bind: 'analytics-page-view-historyPageCategorySubcategory',
                analytics: analytics.PFM_CATEGORIZATION_CATEGORY_PAGE_VIEW
              },
              ch_pfm_movement_detail_analytics_on_start_event: {
                bind: 'analytics-page-on-start-recategorization-event-recategorization',
                analytics: analytics.PFM_MOVEMENTS_RECATEGORIZE_ON_CLICK_START_EVENT
              },
              ch_pfm_categorization_analytics_internal_link_history: {
                bind: 'analytics-interaction-link-history',
                analytics: analytics.createInteractionLinkWithLevel2and3({bind: 'level2'}, {bind: 'level3'}, {bind: 'interactionLevel'})
              },
              ch_pfm_categorization_analytics_internal_link_chart_history: {
                bind: 'analytics-interaction-link-chart-history',
                analytics: analytics.createInteractionLinkWithLevel2and3({bind: 'level2'}, {bind: 'level3'}, {bind: 'interactionLevel'})
              }
            }
          }
        }
      }
    ]
  };

  if (nativeShell) {
    base.components.push(pluginDatePicker(CONFIG));
  }

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
