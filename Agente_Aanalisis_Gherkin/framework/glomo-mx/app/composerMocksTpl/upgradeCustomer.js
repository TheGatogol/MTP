'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec',
      versions: { customersV1: customersApiVersion } },
    native = false,
    nativeIos = false
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)('upgradeCustomer');
  const analitycs = require('./analytics/_upgradeCustomer')(CONFIG);
  const localStorageApp = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'upgradeCustomer');

  const base = {
    hash: 'upgrade-customer',
    currentPage: {
      url: '/upgrade-customer'
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

  const bbvaFeatureUpgradeCustomerMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-upgrade-customer-mx',
    tagSpherica: 'bbva-feature-upgrade-customer-mx-spherica',
    familyPath: '@glomo-web-components/bbva-feature-upgrade-customer-mx',
    familyPathSpherica: '@glomo-web-components/bbva-feature-upgrade-customer-mx-spherica',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      customersApiVersion,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'listenAppContextChannel'
          },
          global_storage_get_loginData_success: {
            bind: 'handleLoginDataRequest'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          navigation_page_dashboard: {
            bind: 'handleInappEntryPoint'
          },
          global_user_id: {
            bind: 'customerId'
          },
          open_upgrade_hybrid: {
            bind: 'initOperative'
          },
          global_storage_get_know_your_client_exception_success: {
            bind: 'handleKycException'
          },
          global_storage_get_know_your_client_exception_error: {
            bind: 'handleKycException'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'handlePushNotificationEntryPoint'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'handlePushNotificationEntryPoint'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'global-get-from-storage'
          },
          navigate_to_proceedings: {
            bind: 'bbva-feature-upgrade-customer-mx-success-post-terms-link',
            link: {
              page: 'proceedings',
              skipHistory: true
            }
          },
          upgrade_customer_hybrid_full_modal_exit: {
            bind: 'bbva-feature-upgrade-customer-mx-full-modal-exit',
            backStep: true,
            skipHistory: true
          },
          upgrade_customer_hybrid_half_modal_exit: {
            bind: 'bbva-feature-upgrade-customer-mx-half-modal-exit',
            backStep: true,
            skipHistory: true
          },
          upgrade_customer_hybrid_full_modal_page_view_open: {
            bind: 'bbva-feature-upgrade-customer-mx-main-upgrade-modal-open'
          },
          upgrade_customer_hybrid_full_modal_kyc_open: {
            bind: 'bbva-feature-upgrade-customer-mx-full-modal-kyc-open'
          },
          upgrade_customer_hybrid_medium_modal_privacy_modal: {
            bind: 'bbva-feature-upgrade-customer-mx-privacy-link-click'
          },
          upgrade_customer_hybrid_medium_modal_internal_sworn: {
            bind: 'bbva-feature-upgrade-customer-mx-sworn-link-click'
          },
          upgrade_customer_hybrid_inapp_half_modal_exit: {
            bind: 'bbva-feature-upgrade-customer-mx-inapp-half-modal-exit',
            link: {
              page: 'dashboard',
              skipHistory: true,
              cleanUntil: 'dashboard'
            }
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
          upgrade_customer_hybrid_full_modal_page_view_open: {
            bind: 'dispatchPageView'
          },
          upgrade_customer_hybrid_full_modal_kyc_open: {
            bind: 'dispatchPageViewKyc'
          },
          upgrade_customer_hybrid_medium_modal_privacy_modal: {
            bind: 'dispatchInternalLinkPrivacy'
          },
          upgrade_customer_hybrid_medium_modal_internal_sworn: {
            bind: 'dispatchInternalLinkSworn'
          }
        },
        out: {
          upgrade_customer_hybrid__app_view_analytic_modal_open: {
            bind: 'analytics-upgrade-customer-page-view',
            analytics: analitycs.appPageView
          },
          upgrade_customer_hybrid__app_view_analytic_modal_kyc_open: {
            bind: 'analytics-upgrade-customer-page-view-kyc',
            analytics: analitycs.appPageViewKyc
          },
          upgrade_customer_hybrid__link_analytic_privacy: {
            bind: 'analytics-upgrade-customer-internal-link-privacy',
            analytics: analitycs.internalLinkPrivacy
          },
          upgrade_customer_hybrid__link_analytic_sworn: {
            bind: 'analytics-upgrade-customer-internal-link-sworn',
            analytics: analitycs.internalLinkSworn
          }
        }
      }
    }
  };

  base.components.push(
    bbvaFeatureUpgradeCustomerMx,
    upgradeAnalytic
  );

  localStorageApp.addOutStorageChannels(base.components, ['know_your_client_exception', 'loginData'], CONFIG);
  const signWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signWidgetConnector('bbva-feature-upgrade-customer-mx');
  return sphericaPageUtils.spherize(base);
};
