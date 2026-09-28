'use strict';

module.exports = config => {
  const {
    nativeIos = false, native = false,
    globalServices: {
      requiredToken = 'tsec', host, versions: {
        products, customersV1, customersAddressesV1, accounts, businessDocumentsV0
      }
    }
  } = config;
  const {
    commons: { continue: ocAccountContinue, knowMore, termsAndConditions, confirmation, otp },
    ocAccount: { upgradeAccountKnowMore, upgradeAccount, personalData }
  } = require('./analytics/common/_literals');
  const pageName = 'ocAccount';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const ocAccountAnalytics = require('./analytics/_ocAccount')();
  const { useNames, createPrefixFromPageName, detailDownloadParams, glomoOpenDocument } = require('./common/helpers/_utils');
  const operativePrefix = createPrefixFromPageName(pageName);
  const [ getChannelName ] = useNames(operativePrefix);
  detailDownloadParams.formatter = 'no-op';

  const base = {
    currentPage: {
      url: '/oc-account'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        animationType: 'verticalUp'
      },
      propertiesSpherica: {
        disableEdgeSwipe: true,
        animationType: 'verticalUp'
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false,
            'product-id': '15'
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
              [getChannelName('set_product_id')]: {
                bind: 'product-id'
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
        tag: 'bbva-feature-oc-account-mx',
        tagSpherica: 'bbva-feature-oc-account-mx-spherica',
        familyPath: '@glomo-web-components/bbva-feature-oc-account-mx',
        familyPathSpherica: '@glomo-web-components/bbva-feature-oc-account-mx-spherica',
        render: 'litElement',
        properties: {
          pageName,
          iOSFixedHeader: nativeIos,
          productId: '15',
          setPagesValues: {
            registrationPage: {
              customerAdress: {
                maskedAddress: ''
              }
            }
          },
          host,
          apisVersions: {
            products,
            customers: customersV1,
            customersAddresses: customersAddressesV1,
            accounts,
            businessDocuments: businessDocumentsV0
          },
          native,
          requiredToken,
          detailDownloadConfig: detailDownloadParams,
          cellsConnections: {
            params: {
              customerId: 'global_user_id'
            },
            in: {
              global_financial_overview_success: {
                bind: 'setFinancialOverview'
              },
              dashboard_customer_email: {
                bind: 'email'
              },
              [`${native ? 'native_user_id' : 'global_login_success'}`]: {
                bind: 'setCustomerPhoneNumber'
              },
              [getChannelName('set_product_id')]: {
                bind: 'productId'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'exit'
              },
              cells_to_native_modal_closed: {
                bind: 'openRegistrationDigitalAccountN2Page'
              },
              global_open_document_url_success: {
                bind: 'handleOpenDocumentSuccessfulResponse'
              }
            },
            out: {
              global_open_document_url: {
                bind: 'bbva-feature-oc-account-mx-spherica-pdf-reloaded'
              },
              OPEN_UPGRADE_MODULAR: {
                bind: 'bbva-feature-oc-account-mx-spherica-navigate-to-payroll-portability',
                link: {
                  page: 'upgradeN2N4'
                }
              },
              [getChannelName('exit')]: {
                bind: 'bbva-feature-oc-account-mx-spherica-exit',
                backStep: true
              },
              oc_account_fire_page_visit: {
                bind: 'digital-account-induction-page-n2-open'
              },
              oc_account_fire_footer_button_app_started: {
                bind: 'digital-account-induction-page-footer-button-click'
              },
              oc_account_fire_know_more_app_started: {
                bind: 'digital-account-induction-page-know-more-link-click'
              },
              oc_account_know_more_page_view: {
                bind: 'digital-account-n2-modals-know-more-open',
                analytics: ocAccountAnalytics.getCustomPageView({ level3: upgradeAccountKnowMore })
              },
              [getChannelName('error_service')]: {
                bind: 'digital-account-n2-modals-error-service-exit-open',
                analytics: ocAccountAnalytics.errorServicePageView
              },
              [getChannelName('upgrade_account_page_view')]: {
                bind: 'digital-account-upgrade-page-n2-open',
                analytics: ocAccountAnalytics.getCustomPageView({ level3: upgradeAccount })
              },
              [getChannelName('app_step_2')]: {
                bind: 'digital-account-induction-page-footer-button-click',
                analytics: ocAccountAnalytics.getCustomAppStep({ numberStep: '2', appStep: personalData })
              },
              [getChannelName('app_step_3')]: {
                bind: 'digital-account-personal-information-confirmation-button-click',
                analytics: ocAccountAnalytics.getCustomAppStep({ numberStep: '3', appStep: termsAndConditions })
              },
              [getChannelName('app_step_4')]: {
                bind: 'digital-account-registration-page-n2-terms-and-conditions-step-complete',
                analytics: ocAccountAnalytics.getCustomAppStep({ numberStep: '4', appStep: confirmation })
              },
              [getChannelName('signature_required_first_step_dm')]: {
                bind: 'signature-required-first-step-dm',
                analytics: ocAccountAnalytics.getCustomPageView({ level3: otp })
              },
              [getChannelName('request_create_account_success')]: {
                bind: 'success-on-post-accounts-accounts'
              },
              financial_overview_refresh: {
                bind: 'bbva-feature-oc-account-mx-spherica-financial-overview-refresh'
              },
              dashboard_offers_refresh: {
                bind: 'bbva-feature-oc-account-mx-spherica-dashboard-refresh'
              },
              mobile_manage_operation: {
                bind: 'digital-account-successful-page-n2-generate-receipt-receipt-capture',
                'forward-to-native': true
              },
              back_to_dashboard: {
                bind: 'digital-account-successful-page-footer-link-click',
                link: {
                  page: 'dashboard'
                }
              },
              digital_account_successfull_page_close: {
                bind: 'digital-account-successful-page-close-icon-click',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          iOSFixedHeader: nativeIos
        }
      },
      {
        familyPath: '@glomo-web-components/bbva-analyticmanager-account-origination',
        tag: 'bbva-analyticmanager-oc-account-mx',
        type: 'DM',
        render: 'litElement',
        zone: 'app__main',
        properties: {
          cellsConnections: {
            in: {
              oc_account_fire_page_visit: {
                bind: 'firePageVisit'
              },
              oc_account_fire_footer_button_app_started: {
                bind: 'fireFotterButtomAppStarted'
              },
              oc_account_fire_know_more_app_started: {
                bind: 'fireKnowMoreAppStarted'
              },
              [getChannelName('request_create_account_success')]: {
                bind: 'fireAppCompleted'
              },
              oc_account_exit: {
                bind: 'reset'
              }
            },
            out: {
              oc_account_app_page_visit: {
                bind: 'analytics-page-visit',
                analytics: ocAccountAnalytics.appPageVisit
              },
              oc_account_app_started: {
                bind: 'analytics-app-started',
                analytics: ocAccountAnalytics.customAppStarted
              },
              [getChannelName('analytics_app_completed')]: {
                bind: 'analytics-app-completed',
                analytics: ocAccountAnalytics.appCompleted
              }
            }
          }
        }
      }
    ]
  };
  const signConnector = require('./common/_widget-sign-connector')(config)(base);
  signConnector('bbva-feature-oc-account-mx');
  const openDocument = glomoOpenDocument(config);
  if (openDocument) {
    base.components.push(openDocument);
  }

  return sphericaPageUtils.spherize(base);
};
