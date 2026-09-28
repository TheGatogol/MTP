'use strict';

module.exports = CONFIG => {
  const pageName = 'pfmDashboardCheckUp';
  const {APP_SIDEBAR: appSidebar, useNames, createPrefixFromPageName, connectionsOut} = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  const _getAdvancedFootprintWithLevel2 = require('./analytics/_pfmDashboardCheckUp');
  const isNativeIos = CONFIG.nativeIos || false;
  const literals = require('./analytics/common/_literals').checkUp;
  const statusIllustrations = {
    Excelente: 'moneygraphic',
    Saludable: 'networth',
    Estable: 'financialhealth',
    Critica: 'moneygraphicnegative'
  };
  const statusPayroll = {
    principalAccount: 'IS_PRINCIPAL_ACCOUNT',
    pending: 'PENDING',
    inProgress: 'IN PROGRESS'
  };
  const base = {
    currentPage: {
      url: '/pfm/dashboard/check-up'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'bg-light-grey',
        disableEdgeSwipe: true,
        hasFooter: true,
        rightDrawer: true,
        avoidToggleMenu: CONFIG.nativeShell || false,
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            [getChannelName('global_open_native_menu')]: {
              bind: 'toggleMenu'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              ['__bridge_page_' + pageName]: {
                bind: 'init'
              }
            },
            out: {
              [getChannelName('initialize_page')]: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      }
    ]
  };
  const bbvaFeaturePfmCheckUpManager = {
    familyPath: '@glomo-web-components/bbva-feature-pfm-dashboard-check-up-mx',
    tag: 'bbva-feature-pfm-dashboard-check-up-mx',
    type: 'UI',
    render: 'litElement',
    zone: 'app__main',
    properties: {
      host: CONFIG.globalServices.host,
      native: CONFIG.native || false,
      financialHealthDataApiVersion: CONFIG.globalServices.versions.accountsV1,
      customerServicesPayrollPortabilitiesApiVersion: CONFIG.globalServices.versions.customerServices,
      statusIllustrations,
      statusPayroll,
      months: 3,
      cellsConnections: {
        in: {
          global_set_app_settings: {
            bind: 'setGlomoSetting'
          },
          global_login_success_indicators: {
            bind: 'setIndicators'
          },
          dashboard_accounts: {
            bind: 'setAccounts'
          },
          navigation_pfm_dashboard_to_checkup: {
            bind: 'showSpinner'
          },
          [getChannelName('initialize_page')]: {
            bind: 'init'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'navigateToBack'
          }
        },
        out: {
          [getChannelName('global_open_native_menu')]: {
            bind: 'open-sidebar'
          },
          go_back: {
            bind: 'go-back',
            backStep: true
          },
          [getChannelName('financial_health_data_successful')]: {
            bind: 'dispatch-financial-health-successful'
          },
          [getChannelName('financial_health_data_error')]: {
            bind: 'dispatch-financial-health-error'
          },
          [getChannelName('customer_services_payroll_portabilities_error')]: {
            bind: 'customer-services-payroll-portabilites-error'
          },
          [getChannelName('api_dm_error')]: {
            bind: 'api-dm-error'
          },
          [getChannelName('payroll_prtabilities_successful_response')]: {
            bind: 'customer-services-payroll-portabilites-successful',
            analytics: _getAdvancedFootprintWithLevel2({level2: 'cambiar nomina'})
          },
          navigation_product_detail_to_receive_payroll: {
            bind: 'navigate-to-payroll',
            link: {
              page: 'payrollPortability'
            }
          }
        }
      }
    }
  };
  const bbvaAnalyticsmanagerPfmDashboardCheckUp = {
    familyPath: '@glomo-web-components/bbva-analyticmanager-pfm',
    tag: 'bbva-analyticmanager-pfm-dashboard-check-up',
    type: 'UI',
    render: 'litElement',
    zone: 'app__main',
    properties: {
      errorLiterals: {
        level2: literals.errorInformationNotAvailable,
        errorPage: literals.errorInformationNotAvailable
      },
      cellsConnections: {
        in: {
          [getChannelName('financial_health_data_successful')]: {
            bind: 'firePageViewFiancialHealthStatus'
          },
          [getChannelName('financial_health_data_error')]: {
            bind: 'firePageError'
          },
          [getChannelName('customer_services_payroll_portabilities_error')]: {
            bind: 'firePageError'
          },
          [getChannelName('api_dm_error')]: {
            bind: 'firePageError'
          }
        },
        out: {
          [getChannelName('page_view')]: {
            bind: 'analytics-page-view',
            analytics: _getAdvancedFootprintWithLevel2({level2: {bind: 'level2'}, error: {bind: 'errorPage'}})
          }
        }
      }
    }
  };
  base.components.push(
    bbvaFeaturePfmCheckUpManager,
    bbvaAnalyticsmanagerPfmDashboardCheckUp
  );
  if (CONFIG.nativeShell) {
    connectionsOut(base)('bbva-feature-pfm-dashboard-check-up-mx')
      .global_open_native_menu = {
        bind: 'open-sidebar',
        'forward-to-native': true
      };
  } else {
    base.components.push(appSidebar(CONFIG));
  }
  return base;
};
