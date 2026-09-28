'use strict';
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('pfmPettyExpenses');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { nativeIos = false, native = false, nativeShell = false, globalServices: { host, requiredToken = 'tsec', versions: { pfmV2 } } } = CONFIG;
  const { SPINNERSPHERICA: createSpinnerSpherica, getLocalCurrency, getLanguage, pluginDatePicker } = require('./common/helpers/_utils');
  const { getFootprint, getPfmCustomTagWithLevel2, getFootprintErrorPageOperation, getFootprintErrorPageInformation } = require('./analytics/_pfmPettyExpenses')();

  const base = {
    currentPage: {
      url: '/pfm/petty-expenses'
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'bg-light-grey',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        className: `bg-light-grey${nativeIos ? 'ios-top-padding' : ''}`
      }
    },
    components: [
      createSpinnerSpherica(CONFIG),
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'pfm-petty-expenses-gl',
        render: 'litElement',
        familyPath: '@glomo-web-components/pfm-petty-expenses-gl',
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
          headerText: 'pfm-petty-expenses-gl-header-text',
          classname: 'u-margin-top--0',
          native,
          host,
          requiredToken,
          personalFinancesApiVersion: pfmV2,
          currencyLimit: getLocalCurrency(),
          language: getLanguage(),
          utc: true,
          configurationLink: false,
          hideConfigurationLink: true,
          periodValueGlobal: true,
          cellsConnections: {
            in: {
              global_pfm_id: {
                bind: 'pfmId'
              },
              ch_pfm_petty_expenses_products: {
                bind: 'userProducts'
              },
              ch_advice_configuration_update_products: {
                bind: 'resetUserProducts'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'discreetMode'
              },
              ch_default_pfm_profile_period_startdate: {
                bind: 'periodStartDate'
              },
              ch_default_pfm_profile_period_enddate: {
                bind: 'periodEndDate'
              }
            },
            out: {
              pfm_petty_expenses_navigate_back: {
                bind: 'pfm-petty-expenses-gl-navigation-go-back',
                backStep: true
              },
              global_open_native_menu: {
                bind: 'pfm-petty-expenses-gl-menu-select',
                'forward-to-native': true
              },
              ch_pfm_petty_expenses_gl_movement_item_click: {
                bind: 'pfm-petty-expenses-gl-movement-item-click'
              },
              ch_pfm_petty_expenses_gl_empty_state_analytics: {
                bind: 'pfm-petty-expenses-gl-empty-state',
                analytics: getFootprint('no hay gastos hormiga')
              },
              ch_pfm_petty_expenses_gl_petty_expenses_loaded: {
                bind: 'pfm-petty-expenses-gl-petty-expenses-loaded',
                analytics: getFootprint('gastos hormiga')
              },
              ch_pfm_petty_expenses_gl_error_analytics: {
                bind: 'pfm-petty-expenses-gl-information-no-available-error',
                analytics: getFootprintErrorPageInformation('como mejorar tu salud financiera', 'error informacion no disponible')
              },
              navigation_to_pfm_petty_expenses_page_watch_request_error: {
                bind: 'pfm-petty-expenses-gl-operation-no-available-error',
                analytics: getFootprintErrorPageOperation('como mejorar tu salud financiera', 'error operacion no disponible')
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
          cellsConnections: {
            in: {
              ch_pfm_petty_expenses_gl_movement_item_click: {
                bind: 'handleDynamicValueAnalytics'
              }
            },
            out: {
              ch_pfm_petty_expenses_gl_analytics_movement_detail_concept: {
                bind: 'pfm-petty-expenses-gl-analytics-movement-detail-concept',
                analytics: getPfmCustomTagWithLevel2()
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

  return base;
};
