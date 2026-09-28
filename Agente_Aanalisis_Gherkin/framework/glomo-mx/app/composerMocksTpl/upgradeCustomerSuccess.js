'use strict';

module.exports = (CONFIG) => {
  const { nativeIos = false } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)('upgradeCustomerSuccess');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'upgradeCustomerSuccess');
  const analitycsUpgrade = require('./analytics/_upgradeCustomer')();
  const base = {
    hash: 'upgrade-customer-success',
    currentPage: {
      url: '/upgrade-customer-success'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: 'dark-blue-bg',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: nativeIos
      }
    },
    components: []
  };
  const bbvaFeatureUpgradeCustomerSuccessMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-upgrade-customer-success-mx',
    tagSpherica: 'bbva-feature-upgrade-customer-success-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-upgrade-customer-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-upgrade-customer-mx-spherica',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          success_upgrade_hybrid: {
            bind: 'initSuccess'
          }
        },
        out: {
          upgrade_customer_success_modal_exit: {
            bind: 'bbva-feature-upgrade-customer-success-mx-modal-exit',
            link: {
              page: 'account',
              cleanUntil: 'account',
              skipHistory: true,
              params: {
                productId: 'productId',
                documentcomplete: 'documentcomplete'
              }
            }
          },
          upgrade_customer_success_inapp_modal_exit: {
            bind: 'bbva-feature-upgrade-customer-success-mx-inapp-modal-exit',
            link: {
              page: 'dashboard',
              cleanUntil: 'dashboard',
              skipHistory: true,
              params: {
                productId: 'productId',
                documentcomplete: 'documentcomplete'
              }
            }
          },
          upgrade_customer_success_dossier_completed: {
            bind: 'bbva-feature-upgrade-customer-success-mx-dossiers-completed'
          },
          rcp_update_customer_completed: {
            bind: 'bbva-feature-upgrade-customer-success-mx-dossiers-completed'
          },
          dispatch_analytic_success_upgrade_hybrid: {
            bind: 'bbva-feature-upgrade-customer-success-mx-analytic-success-init'
          }
        }
      }
    }
  };
  const upgradeAnalytic = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-upgrade-customer',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          dispatch_analytic_success_upgrade_hybrid: {
            bind: 'dispatchPageViewSuccess'
          }
        },
        out: {
          proceedings_app_view_analytic_success_open: {
            bind: 'analytics-upgrade-customer-page-view-success',
            analytics: analitycsUpgrade.appPageViewSuccess
          }
        }
      }
    }
  };
  base.components.push(
    bbvaFeatureUpgradeCustomerSuccessMx,
    upgradeAnalytic
  );
  return sphericaPageUtils.spherize(base);
};
