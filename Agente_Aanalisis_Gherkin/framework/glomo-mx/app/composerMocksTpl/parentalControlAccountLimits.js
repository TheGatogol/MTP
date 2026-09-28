'use strict';

module.exports = (CONFIG) => {
  const { _getAdvancedFootprintWithLevel3 } = require('./analytics/_parentalControlAccountLimits')(CONFIG);
  const {
    useNames,
    createPrefixFromPageName
  } = require('./common/helpers/_utils');
  const {
    globalServices,
    native = false,
    nativeIos = false
  } = CONFIG;
  const { host, requiredToken = 'tsec', versions } = globalServices;

  const pages = require('./common/_pages')(CONFIG)('parentalControlAccountLimits');
  const localStorageApp = require('./common/_local-storage');
  const product = 'parentalControlAccountLimits';
  const prefixPage = createPrefixFromPageName(product);
  const [ getChannelName ] = useNames(prefixPage);
  const base = {
    hash: product,
    currentPage: {
      url: '/parental-control-account-limits'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            parental_control_account_limits_init_page: {
              bind: 'recalculateHeader'
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
          pageName: product,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_parentalControlAccountLimits: {
                bind: 'init'
              }
            },
            out: {
              parental_control_account_limits_init_page: {
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
        type: 'UI',
        familyPath: '@glomo-web-components/bbva-feature-operational-limits-youngsters-mx',
        tag: 'bbva-feature-operational-limits-youngsters-mx',
        render: 'litElement',
        properties: {
          host,
          native,
          versionCard: versions.limitsV1,
          requiredToken,
          cellsConnections: {
            in: {
              [getChannelName('init_page')]: {
                bind: 'init'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              global_storage_get_operationalLimitOnboarding_success: {
                bind: 'getLocalStorageData'
              },
              global_storage_get_operationalLimitOnboarding_error: {
                bind: 'getLocalStorageData'
              }
            },
            out: {
              [product + '_go_back']: {
                bind: 'parental-control-account-limits-go-back',
                backStep: true
              },
              [product + '_limit_type']: {
                bind: 'send-limit-type'
              },
              [product + '_analytics-page-view-information']: {
                bind: 'link-clicked-continue',
                analytics: _getAdvancedFootprintWithLevel3('informacion')
              },
              [product + '_analytics-page-view-detail']: {
                bind: 'link-clicked-edit',
                analytics: _getAdvancedFootprintWithLevel3('detalle')
              },
              [product + '_analytics-page-view-operation']: {
                bind: 'edit-limits-form-input-focus-operation',
                analytics: _getAdvancedFootprintWithLevel3('modificar limite por operacion')
              },
              [product + '_analytics-page-view-daily']: {
                bind: 'edit-limits-form-input-focus-daily',
                analytics: _getAdvancedFootprintWithLevel3('modificar limite diario')
              },
              [product + '_analytics-page-view-month']: {
                bind: 'edit-limits-form-input-focus-month',
                analytics: _getAdvancedFootprintWithLevel3('modificar limite mensual')
              },
              global_set_in_storage: {
                bind: 'account-transaction-operational-limits-set-local-storage'
              },
              global_get_from_storage: {
                bind: 'account-transaction-operational-limits-get-local-storage'
              }
            },
            params: {
              customerId: 'global_user_id',
              productId: 'productId'
            }
          }
        }
      }
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'operationalLimitOnboarding' ], CONFIG);

  return base;
};
