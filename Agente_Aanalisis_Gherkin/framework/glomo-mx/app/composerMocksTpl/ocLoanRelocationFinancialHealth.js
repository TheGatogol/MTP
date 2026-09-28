'use strict';

module.exports = (CONFIG) => {
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        loans: loansApiVersion,
        businessDocument: documentsApiVersion
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;
  const {
    SPINNERSPHERICA: getSpinnerSpherica,
    getLocalCurrency,
    detailDownloadParams,
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const pageName = 'ocLoanRelocationFinancialHealth';
  const analytics = require('./analytics/_ocLoanRelocationFinancialHealth')();
  const spinner = getSpinnerSpherica(CONFIG);

  const base = {
    hash: 'oc-loan-relocation-financial-health',
    currentPage: {
      url: '/oc-loan-relocation-financial-health'
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        headerFixed: true,
        className: nativeIos ? 'ios-top-padding' : '',
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'bg-light-grey',
        headerHeight: headerHeightMinimum
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@glomo-web-components/loan-and-mortgage-origination-oc-loan-relocation-mx',
        tag: 'loan-and-mortgage-origination-oc-loan-relocation-mx',
        render: 'litElement',
        properties: {
          isNativeIos: nativeIos,
          host,
          native,
          requiredOTP: true,
          requiredToken,
          loansApiVersion,
          documentsApiVersion,
          localCurrency: getLocalCurrency(),
          detailDownloadConfig: detailDownloadParams,
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'getCollectionFlags'
              },
              global_set_app_settings: {
                bind: 'getConfigAppSettings'
              },
              global_financial_overview_details: {
                bind: 'financialData'
              },
              global_open_document_url_success: {
                bind: 'openDocumentSuccess'
              },
              sign_modal_open: {
                bind: 'sendModalInfo'
              }
            },
            out: {
              global_open_document_url: {
                bind: 'open-document'
              },
              global_open_document_success: {
                bind: 'open-document'
              },
              close_control_veil: {
                bind: 'hide-loader'
              },
              loan_relocation_financial_health_navigation_to_dashboard_page: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-mx-go-to-dashboard',
                link: {
                  page: 'dashboard',
                  cleanUntil: pageName
                }
              },
              loan_relocation_financial_health_navigation_to_contract_product_section_page: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-mx-go-to-contract-product-section',
                link: {
                  page: 'contractProductSection',
                  cleanUntil: pageName
                }
              },
              loan_relocation_financial_health_first_entry: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-first-entry-app-page-visit'
              },
              loan_relocation_financial_health_product_info: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-product-info-app-started'
              },
              loan_relocation_financial_health_app_page_view: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-page-view'
              },
              loan_relocation_financial_health_internal_link: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-internal-link-click'
              },
              loan_relocation_financial_health_terms_and_conditions: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-terms-and-conditions-app-step'
              },
              loan_relocation_financial_health_confirmation: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-confirmation-app-step'
              },
              loan_relocation_financial_health_otp_modal: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-otp-app-step'
              },
              loan_relocation_financial_health_analytic_hire_relocation_completed: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-hire-relocation-app-completed'
              },
              loan_relocation_financial_health_analytic_relocation_relocation_completed: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-relocation-app-completed'
              },
              loan_relocation_financial_health_analytic_functional_error: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-service-not-available-app-error'
              },
              loan_relocation_financial_health_analytic_technical_error: {
                bind: 'loan-and-mortgage-origination-oc-loan-relocation-operation-not-available-app-error'
              }
            },
            params: {
              offerId: 'offerId',
              loanId: 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-oc-loan-relocation-financial-health-mx',
        familyPath: '@glomo-web-components/bbva-analyticmanager-loan-and-mortgage-origination',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              contract_product_section_analytics_oc_banner_relocation_financial_health_app_on_click_start: {
                bind: 'appOnClickStart'
              },
              app_info_structure_home_core_collection_navigate: {
                bind: 'appOnClickStart'
              },
              loan_relocation_financial_health_first_entry: {
                bind: 'appPageVisit'
              },
              loan_relocation_financial_health_product_info: {
                bind: 'appPageStarted'
              },
              loan_relocation_financial_health_terms_and_conditions: {
                bind: 'appStep'
              },
              loan_relocation_financial_health_confirmation: {
                bind: 'appStep'
              },
              loan_relocation_financial_health_app_page_view: {
                bind: 'appPageView'
              },
              loan_relocation_financial_health_internal_link: {
                bind: 'appInternalLink'
              },
              loan_relocation_financial_health_otp_modal: {
                bind: 'appStep'
              },
              loan_relocation_financial_health_analytic_relocation_relocation_completed: {
                bind: 'appCompleted'
              },
              loan_relocation_financial_health_analytic_hire_relocation_completed: {
                bind: 'appCompleted'
              },
              loan_relocation_financial_health_analytic_functional_error: {
                bind: 'appError'
              },
              loan_relocation_financial_health_analytic_technical_error: {
                bind: 'appError'
              }
            },
            out: {
              loan_relocation_financial_health_analytic_app_on_click_start: {
                bind: 'analytics-app-on-click-start',
                analytics: analytics.appOnClickStart()
              },
              loan_relocation_financial_health_analytic_app_page_visit: {
                bind: 'analytics-page-visit',
                analytics: analytics.appPageVisit()
              },
              loan_relocation_financial_health_analytic_app_page_started: {
                bind: 'analytics-app-started',
                analytics: analytics.appStarted()
              },
              loan_relocation_financial_health_analytic_app_step_2: {
                bind: 'analytics-app-step-terms-and-conditions',
                analytics: analytics.appStep('2')
              },
              loan_relocation_financial_health_analytic_app_step_3: {
                bind: 'analytics-app-step-confirmation',
                analytics: analytics.appStep('3')
              },
              loan_relocation_financial_health_analytic_app_step_4: {
                bind: 'analytics-app-step-otp',
                analytics: analytics.appStep('4')
              },
              loan_relocation_financial_health_analytic_app_page_view: {
                bind: 'analytics-app-page-view',
                analytics: analytics.appPageView()
              },
              loan_relocation_financial_health_analytic_app_internal_link_continue: {
                bind: 'analytics-internal-link-continue-event',
                analytics: analytics.appInternalLink('continue')
              },
              loan_relocation_financial_health_analytic_app_internal_link_close: {
                bind: 'analytics-internal-link-close-event',
                analytics: analytics.appInternalLink('close')
              },
              loan_relocation_financial_health_analytic_app_internal_link_exit: {
                bind: 'analytics-internal-link-exit-event',
                analytics: analytics.appInternalLink('exit')
              },
              loan_relocation_financial_health_analytic_app_internal_link_authorization: {
                bind: 'analytics-internal-link-authorization-event',
                analytics: analytics.appInternalLink('creditHistoryAuthorization')
              },
              loan_relocation_financial_health_analytic_app_internal_link_conditions: {
                bind: 'analytics-internal-link-conditions-event',
                analytics: analytics.appInternalLink('modifyLoanConditions')
              },
              loan_relocation_financial_health_analytic_app_internal_link_contract: {
                bind: 'analytics-internal-link-contract-event',
                analytics: analytics.appInternalLink('termsAndConditions')
              },
              loan_relocation_financial_health_analytic_app_internal_link_policy: {
                bind: 'analytics-internal-link-policy-event',
                analytics: analytics.appInternalLink('LifeInsurance')
              },
              loan_relocation_financial_health_analytic_app_completed: {
                bind: 'analytics-app-completed',
                analytics: analytics.appCompleted()
              },
              loan_relocation_financial_health_analytic_app_service_error: {
                bind: 'analytics-app-error-service-not-available',
                analytics: analytics.appPageErrorTwoLevels('functional')
              },
              loan_relocation_financial_health_analytic_app_operation_error: {
                bind: 'analytics-app-error-operation-not-available',
                analytics: analytics.appPageErrorTwoLevels('technical')
              }
            }
          }
        }
      }
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  errorAndSignWidgetConnector('loan-and-mortgage-origination-oc-loan-relocation-mx');

  return base;
};
