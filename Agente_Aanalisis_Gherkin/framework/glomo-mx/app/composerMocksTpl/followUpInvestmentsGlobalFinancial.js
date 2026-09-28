'use strict';

const { cellsConnectionStatus } = require('./common/_cross-components');
module.exports = CONFIG => {

  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        customerAccountsApiVersion,
        customersAccountsAccountApiVersion,
        customerAccountsInstrumentsApiVersion,
        customersAccountsSearchExecutiveSummaryApiVersion,
        customersAccountsSearchHistoricalTrendApiVersion,
        customers: customersApiVersion
      }
    },
    native = false,
    nativeIos = false,
    patrimonialDistributionCategories
  } = CONFIG;

  const pageName = 'followUpInvestmentsGlobalFinancial';
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_followUpInvestmentsGlobalFinancial')();

  const myRetryConfig = ([
    {
      id: 'patrimonial_accounts_retry_error',
      component: 'follow-up-investments-global-financial-position-mx-dm',
      bind: 'patrimonial_accounts_retry_action'
    },
    {
      id: 'patrimonial_accounts_cancel_error',
      component: 'glomo-standard-error-handler-dm-mx',
      bind: 'resetRetryCount'
    },
    {
      id: 'patrimonial_accounts_success_error',
      component: 'follow-up-investments-global-financial-position-mx-dm',
      bind: 'patrimonial_accounts_success'
    },
    {
      id: 'follow_up_investments_global_financial_reset_page',
      component: 'follow-up-investments-global-financial-position-mx-dm',
      bind: 'resetAllData'
    }
  ]);

  const analyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-follow-up-investments',
    familyPath: '@glomo-web-components/bbva-analyticmanager-follow-up-investments',
    render: 'litElement',
    properties: {
      dictionaryData: {
        evolutionData: {
          'year': 'evolucion ano actual',
          '1month': 'evolucion 1 mes',
          '12months': 'evolucion 12 meses',
          '3years': 'evolucion 3 anos'
        },
        instrumentDetailData: [
          'ano actual',
          '1 mes',
          '12 meses',
          '3 anos'
        ]
      },
      cellsConnections: {
        in: {
          follow_up_investments_instrumentos_detalle_visit_analytics: {
            bind: 'fireInstrumentDetailPageVisit'
          },
          follow_up_investments_instrument_list_visit_analytics: {
            bind: 'fireInstrumentListPageVisit'
          },
          follow_up_investments_instruments_evolution_tabs_analytics: {
            bind: 'fireInstrumentDetailClick'
          },
          follow_up_investments_consolidated_evolution_tabs_analytics: {
            bind: 'tabEvolucionClick'
          }
        },
        out: {
          follow_up_investments_instrumentos_detalle_visit_analytics_dm: {
            bind: 'bbva-analyticmanager-follow-up-investments-instrument-detail-page-visit',
            analytics: analytics.APP_PAGE_VISIT_INSTRUMENTOS_DETALLE
          },
          follow_up_investments_instrument_list_visit_analytics_dm: {
            bind: 'bbva-analyticmanager-follow-up-investments-instrument-list-page-visit',
            analytics: analytics.APP_PAGE_VISIT_INSTRUMENTOS
          },
          follow_up_investments_instrument_evolution_period_option_detail_dm: {
            bind: 'bbva-analyticmanager-follow-up-investments-instrument-evolution-period-option-detail',
            analytics: analytics.INSTRUMENT_PERIOD_OPTION_DETAIL
          },
          follow_up_investments_evolucion_click_analytics_dm: {
            bind: 'bbva-analyticmanager-follow-up-investments-interaction-level-evolution-tab',
            analytics: analytics.EVOLUCION_ANO_ACTUAL_CLICK
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/follow-up-investments-global-financial',
      params: []
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        headerFixed: true,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      cellsConnectionStatus(pageName),
      analyticManager,
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'follow-up-investments-global-financial-position-mx',
        familyPath: '@glomo-web-components/follow-up-investments-global-financial-position-mx',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          customerAccountsApiVersion,
          customersAccountsAccountApiVersion,
          customerAccountsInstrumentsApiVersion,
          customersAccountsSearchExecutiveSummaryApiVersion,
          customersAccountsSearchHistoricalTrendApiVersion,
          customersApiVersion,
          maxAllowedRetries: 3,
          patrimonialDistributionCategories,
          headerFixed: true,
          iOSFixedHeader: nativeIos,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              global_user_id: {
                bind: 'customerId'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'navigateBack'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'discreetMode'
              },
              __bridge_page_followUpInvestmentsGlobalFinancial: {
                bind: 'init'
              }
            },
            out: {
              follow_up_investments_global_financial_back: {
                bind: 'follow-up-investments-global-financial-position-mx-exit',
                backStep: true,
                skipHistory: true
              },
              follow_up_investments_page_visit_analytics: {
                bind: 'follow-up-investments-global-financial-position-mx-visit-page',
                analytics: analytics.APP_PAGE_VISIT
              },
              follow_up_investments_movimientos_visit_analytics: {
                bind: 'follow-up-investments-global-financial-position-mx-visit-movements',
                analytics: analytics.APP_PAGE_VISIT_MOVIMIENTOS
              },
              follow_up_investments_ayuda_visit_analytics: {
                bind: 'follow-up-investments-global-consolidated-open-help-modal',
                analytics: analytics.APP_PAGE_VISIT_AYUDA
              },
              follow_up_investments_instrumentos_detalle_visit_analytics: {
                bind: 'follow-up-investments-global-financial-position-mx-visit-instruments-detail'
              },
              follow_up_investments_instrument_list_visit_analytics: {
                bind: 'follow-up-investments-global-financial-position-mx-visit-instruments'
              },
              follow_up_investments_mxn_click_analytics: {
                bind: 'follow-up-investments-global-consolidated-click-mxn',
                analytics: analytics.TAB_MXN_CLICK
              },
              follow_up_investments_usd_click_analytics: {
                bind: 'follow-up-investments-global-consolidated-click-usd',
                analytics: analytics.TAB_USD_CLICK
              },
              follow_up_investments_elegir_cuenta_click_analytics: {
                bind: 'follow-up-investments-global-accounts-open-account-selector',
                analytics: analytics.ELEGIR_CUENTA_CLICK
              },
              follow_up_investments_consolidated_evolution_tabs_analytics: {
                bind: 'follow-up-investments-global-consolidated-change-period'
              },
              follow_up_investments_distribucion_click_analytics: {
                bind: 'follow-up-investments-global-consolidated-click-country',
                analytics: analytics.DISTRIBUCION_CLICK
              },
              follow_up_investments_distribucion_divisa_analytics: {
                bind: 'follow-up-investments-global-consolidated-click-currency',
                analytics: analytics.DISTRIBUCION_DIVISA_CLICK
              },
              follow_up_investments_distribucion_activo_analytics: {
                bind: 'follow-up-investments-global-consolidated-click-active',
                analytics: analytics.DISTRIBUCION_ACTIVO_CLICK
              },
              follow_up_investments_distribucion_producto_analytics: {
                bind: 'follow-up-investments-global-consolidated-click-product',
                analytics: analytics.DISTRIBUCION_PRODUCTO_CLICK
              },
              follow_up_investments_global_api_error_analytics: {
                bind: 'follow-up-investments-global-financial-position-mx-open-operation-not-available-modal',
                analytics: analytics.SITE_ERROR
              },
              follow_up_investments_instruments_evolution_tabs_analytics: {
                bind: 'follow-up-investments-global-instruments-detail-analytics-event'
              },
              follow_up_investments_consolidated_accounts_page_visit: {
                bind: 'follow-up-investments-global-consolidated-view-consolidated-accounts',
                analytics: analytics.APP_PAGE_VISIT_CONSOLIDATED_ACCOUNTS
              }
            }
          }
        }
      }
    ]
  };
  addCommonErrors(base.components)();
  addRetryErrors(base)(myRetryConfig);

  return base;
};
