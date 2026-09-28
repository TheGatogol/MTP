'use strict';

module.exports = CONFIG => {
  const { entities } = require('./pfm/_constants');
  const pages = require('./common/_pages')(CONFIG)('adviceConfiguration');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'adviceConfiguration');
  const { nativeIos = false, native = false, globalServices: { host, requiredToken = 'tsec', versions: { pfmV2 } } } = CONFIG;
  const analytics = require('./analytics/_pfm')(CONFIG);
  const { createSpinner, headerHeight, getLocalCurrency, getLanguage } = require('./common/helpers/_utils');

  const adviceFhConfiguration = {
    zone: 'app__main',
    type: 'DM',
    tag: 'advice-fh-configuration-gl',
    render: 'litElement',
    familyPath: '@glomo-web-components/advice-fh-configuration-gl',
    properties: {
      native,
      host,
      requiredToken,
      attachModalsToBody: false,
      currency: getLocalCurrency(),
      personalFinancesApiVersion: pfmV2,
      language: getLanguage(),
      hideForecasting: true,
      hideNotificationMessageLink: true,
      hideCloseTextButton: true,
      productsModal: true,
      webSelector: true,
      entitiesImages: entities,
      creditCardClassification: '00016',
      hideGoodsConfiguration: true,
      hideInvestmentConfiguration: true,
      amountsAvailable: ['AVAILABLE_BALANCE', 'CURRENT_BALANCE', 'DISPOSED_CURRENT_BALANCES'],
      financialOverviewData: {contracts: []},
      cellsConnections: {
        in: {
          ch_advice_configuration_reset_page: {
            bind: 'firstUpdated'
          },
          navigation_to_pfm_settings: {
            bind: 'productsModal'
          },
          global_pfm_id: {
            bind: 'pfmId'
          },
          ch_accounts_card_products: {
            bind: 'financialOverviewData'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'discreetMode'
          },
          ch_advice_configuration_reset_close_modal: {
            bind: '_closed'
          }
        },
        out: {
          ch_advice_configuration_primary_click: {
            bind: 'header-main-icon-right-primary-click'
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
      cellsConnections: {
        in: {},
        out: {}
      }
    }
  };

  if (sphericaPageUtils.isSpherica()) {
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_navigation_back = {
      bind: 'advice-fh-configuration-gl-modal-close',
      cleanUntil: 'adviceConfiguration',
      backStep: true
    };
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_navigation_modal_error_back = {
      bind: 'advice-fh-configuration-gl-exit-configuration-error-modal-close',
      cleanUntil: 'adviceConfiguration',
      backStep: true
    };
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_update_products = {
      bind: 'advice-fh-configuration-gl-pfm-configuration-save'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_init_page = {
      bind: 'pfmResetClosedModal'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.out.ch_advice_configuration_reset_close_modal = {
      bind: 'bbva-controller-pfm-dashboard-mx-reset-close-modal'
    };
  } else {
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_save_products = {
      bind: 'advice-fh-configuration-gl-pfm-configuration-save'
    };
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_products_change = {
      bind: 'advice-fh-configuration-gl-configuration-update'
    };
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_error_close_modal = {
      bind: 'advice-fh-configuration-gl-error-modal-close'
    };
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_close_modal = {
      bind: 'advice-fh-configuration-gl-modal-close'
    };
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_products_close_modal = {
      bind: 'advice-fh-configuration-gl-products-modal-close'
    };
    adviceFhConfiguration.properties.cellsConnections.out.ch_advice_configuration_exit_configuration_modal_close = {
      bind: 'advice-fh-configuration-gl-exit-configuration-error-modal-close'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_init_page = {
      bind: 'pfmResetConfigurationToogles'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_save_products = {
      bind: 'pfmConfigurationSave'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_products_change = {
      bind: 'pfmSetConfigurationSave'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_error_close_modal = {
      bind: 'pfmConfigurationNavigationBack'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_close_modal = {
      bind: 'pfmConfigurationNavigationBack'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_products_close_modal = {
      bind: 'pfmConfigurationNavigationBack'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.in.ch_advice_configuration_exit_configuration_modal_close = {
      bind: 'pfmConfigurationNavigationBack'
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.out.ch_advice_configuration_navigation_back = {
      bind: 'glomo-pfm-profiles-advice-navigation-back',
      cleanUntil: 'adviceConfiguration',
      backStep: true
    };
    bbvaControllerPfmDashboardMx.properties.cellsConnections.out.ch_advice_configuration_update_products = {
      bind: 'glomo-pfm-profiles-advice-reset-products'
    };
  }

  const base = {
    currentPage: {
      url: '/advice/configuration'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        animationType: 'horizontal',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: headerHeight,
        iOSFixedHeader: nativeIos,
        className: nativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            ch_advice_configuration_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
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
          pageName: 'adviceConfiguration',
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_adviceConfiguration: {
                bind: 'init'
              }
            },
            out: {
              ch_advice_configuration_reset_page: {
                bind: 'reset'
              },
              ch_advice_configuration_init_page: {
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
        tag: 'glomo-analytics-pfm-manager',
        familyPath: '@glomo-web-components/glomo-analytics-pfm-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          onStartEventSuffix: 'advice-configuration',
          cellsConnections: {
            in: {
              ch_advice_configuration_init_page: {
                bind: 'firePageView'
              },
              ch_advice_configuration_products_change: {
                bind: 'firePageInteraction'
              },
              ch_advice_configuration_update_products: {
                bind: 'firePageInteraction'
              }
            },
            out: {
              ch_pfm_settings_analytics_page_view: {
                bind: 'analytics-page-view',
                analytics: analytics.PFM_SETTINGS_FLOW_PAGE_VIEW
              },
              ch_advice_configuration_analytics_products_change: {
                bind: 'analytics-page-interaction',
                analytics: analytics.createInteractionLinkWithLevel2('configuracion', 'click en aceptar')
              }
            }
          }
        }
      },
      adviceFhConfiguration,
      bbvaControllerPfmDashboardMx
    ]
  };

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
