'use-strict';
module.exports = (config) => {
  const storage = require('./common/_local-storage');
  const pageName = 'nCreditLineIncrease';
  const pages = require('./common/_pages')(config)(pageName);
  const { globalServices: { host, requiredToken = 'tsec' },
    native = false,
    nativeIos = false
  } = config;
  const { viewPage, errorModal, upgradeModal } = require('./analytics/_nCreditLineIncrease')();

  let base = {};

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      headerFixed: true,
      disableScrollLock: true,
      iOSFixedHeader: nativeIos,
      className: 'dark-blue-bg',
      extraHeaderClass: nativeIos ? 'ios-top-padding' : ''
    }
  };

  const featureNilc = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-feature-credit-card-line-increase-mx',
    tag: 'bbva-feature-credit-card-line-increase-mx',
    render: 'litElement',
    properties: {
      native,
      host,
      requiredToken,
      amount: '50,000.00',
      informativeEvents: ['nilcp1', 'nilcp2'],
      contratableEvents: ['nilcp3', 'nilcp4'],
      localPrefix: 'bbva-feature-credit-card-line-increase-mx',
      informativeType: 'I',
      contratableType: 'C',
      iOSFixedHeader: nativeIos,
      segmentProfileValue: 'nonNominatedProactive',
      maxRetries: 3,
      annualRateId: 'cells-new-credit-line-increase-text-segment-profile',
      cellsConnections: {
        in: {
          global_storage_get_loginData_success: {
            bind: 'handleLoginDataRequest'
          },
          global_storage_get_loginData_error: {
            bind: 'global_storage_get_loginData_error'
          },
          global_client_id: {
            bind: 'customerId'
          },
          dashboard_accounts: {
            bind: 'dashboardAccounts'
          },
          __bridge_page_nCreditLineIncrease: {
            bind: 'requestClientId'
          },
          contract_product_section_oc_banner_n_limit_increase_clicked: {
            bind: 'handleOportunitiesOffer'
          },
          global_customer_relationship_management_offers: {
            bind: 'offers'
          },
          navigation_from_futura_dashboard: {
            bind: 'handleDashboardOffer'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'handleOfferFromDeepLink'
          },
          contract_product_section_offers_parsed: {
            bind: 'offersCPS'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'handleOfferFromNotificationCenter'
          }
        },
        out: {
          bbva_feature_credit_card_line_increase_mx_increment_credit_card_navigate: {
            bind: 'bbva-feature-credit-card-line-increase-mx-increment-credit-card-navigate',
            link: {
              page: 'increment',
              params: {
                offerId: 'offerId',
                productId: 'productId'
              }
            }
          },
          bbva_feature_credit_card_line_increase_mx_increment_credit_card_data_send: {
            bind: 'bbva-feature-credit-card-line-increase-mx-card-offer-success'
          },
          bbva_feature_credit_card_line_increase_mx_navigation_return: {
            bind: 'bbva-feature-credit-card-line-increase-mx-navigation-return',
            backStep: true
          },
          open_upgrade_hybrid: {
            bind: 'bbva-feature-credit-card-line-increase-mx-information-update',
            link: {
              page: 'upgradeCustomer'
            }
          },
          global_get_from_storage: {
            bind: 'bbva-feature-credit-card-line-increase-mx-global-get-from-storage'
          },
          bbva_feature_credit_card_line_increase_mx_increment_modal_load: {
            bind: 'bbva-feature-credit-card-line-increase-mx-modal-load',
            analytics: viewPage
          },
          bbva_feature_credit_card_line_increase_mx_increment_error_modal_load: {
            bind: 'bbva-feature-credit-card-line-increase-mx-error-modal-open',
            analytics: errorModal
          },
          bbva_feature_credit_card_line_increase_mx_increment_upgrade_modal_load: {
            bind: 'bbva-feature-credit-card-line-increase-mx-upgrade-completed-modal-open',
            analytics: upgradeModal
          }
        }
      }
    }
  };

  base = {
    hash: 'n-credit-line-increase',
    currentPage: {
      url: '/n-credit-line-increase'
    },
    pages: pages,
    template,
    components: [
      featureNilc
    ]
  };
  storage.addOutStorageChannels(base.components, [ 'loginData' ], config);
  return base;
};
