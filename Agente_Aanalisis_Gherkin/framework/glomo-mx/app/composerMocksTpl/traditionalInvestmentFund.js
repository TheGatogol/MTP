'use strict';
module.exports = (CONFIG) => {
  const pages = require('./common/_pages')(CONFIG)('traditionalInvestmentFund');
  const localStorageApp = require('./common/_local-storage');
  const { glomoOpenDocument, SPINNERSPHERICA: spinnerSpherica } = require('./common/helpers/_utils');
  const {
    native,
    nativeIos,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        accounts: accountsApiVersion,
        investmentFundsApiVersionV0: investmentFundApiVersionSecondary
      }
    }
  } = CONFIG;

  const { getFootprint } = require('./analytics/_fundTraditionalDetail')();
  const analyticsNfce = require('./analytics/_fundAddNewContract')();
  const analyticsMonthlyFund = require('./analytics/_monthlyStatementEnquiryFund')();

  const base = {
    hash: 'traditional-investment-fund',
    currentPage: {
      url: '/traditional-investment-fund',
      params: []
    },
    pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        className: `bg-light ${nativeIos ? 'bg-light-grey' : ''}`,
        headerFixed: true,
        disableEdgeSwipe: true
      }
    },
    components: [
      spinnerSpherica(CONFIG),
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/fund-information-product-detail-funds-mx',
        tag: 'fund-information-product-detail-funds-mx',
        render: 'litElement',
        properties: {
          host,
          drawerWidth: '100%',
          iOSFixedHeader: nativeIos,
          className: `bg-light ${nativeIos ? 'ios-top-padding' : ''}`,
          apiVersionInvestmentFunds: investmentFundApiVersionSecondary,
          native,
          language: 'es-MX',
          requiredToken,
          imageCard: 'images/spherica/bbvaesmmxxx.svg',
          numberIsin: '000000000000',
          numberTypeIsin: 'ISIN',
          numberStockMarket: '00000000000000000000000000000000',
          cellsConnections: {
            in: {
              dashboard_funds: {
                bind: 'setGlobalFunds'
              },
              global_set_app_settings: {
                bind: 'publicSettings'
              },
              global_financial_overview_details: {
                bind: 'financialOverviewDetails'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              BACK_STEP_HEADER: {
                bind: 'resetProductId'
              },
              navigation_fund_detail: {
                bind: 'getLoadedFunds'
              },
              global_discreet_mode_mask_amount_values: {
                bind: 'maskedAmount'
              },
              global_invest_advisory_pre_data_balances_by_period: {
                bind: 'setBalancesByPeriod'
              }
            },
            out: {
              traditional_investment_back_to_dashboard: {
                bind: 'fund-information-product-detail-funds-mx-exit',
                backStep: true
              },
              phone_number_product_detail_mx_contact_information: {
                bind: 'fund-information-product-detail-funds-mx-phone-number-contact-information'
              },
              global_action_launcher_dialer: {
                bind: 'fund-information-product-detail-funds-mx-contact-call'
              },
              help_modal_open: {
                bind: 'help-modal-open',
                analytics: getFootprint('descripcion de terminos')
              },
              open_control_veil: {
                bind: 'fund-information-product-detail-funds-mx-open-veil'
              },
              close_control_veil: {
                bind: 'fund-information-product-detail-funds-mx-close-veil'
              },
              navigation_funds_channel: {
                bind: 'navigation-to-fund',
                link: {
                  page: 'fund',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              BACK_STEP_HEADER: {
                bind: 'exit-product-detail',
                backStep: true
              },
              FUND_ADD_FUND_TO_CONTRACT: {
                bind: 'fund-information-product-detail-funds-mx-add-fund',
                analytics: analyticsNfce.APP_ONCLICK_START,
                link: {
                  page: 'addFundToContract'
                }
              },
              FUND_STATEMENT_ENQUIRY_CHANNEL: {
                bind: 'fund-information-product-detail-funds-mx-go-statement',
                analytics: analyticsMonthlyFund.clickOperators
              },
              FUND_EDIT_ALIAS_PRODUCT: {
                bind: 'fund-information-product-detail-funds-mx-edit-alias',
                link: {
                  page: 'fundEditAlias',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              global_product_fund_set_more_info: {
                bind: 'fund-information-product-detail-funds-mx-loaded-funds'
              },
              navigation_fund_detail: {
                bind: 'fund-information-product-detail-funds-mx-open-detail',
                link: {
                  page: 'fundMoreInfo',
                  params: {
                    productId: 'productId'
                  }
                }
              },
              fund_detail_response: {
                bind: 'fund-information-product-detail-funds-mx-fund-response',
                analytics: getFootprint()
              },
              FUND_FUNDS_OPERATION_DATA: {
                bind: 'fund-information-product-detail-funds-mx-detail-operation'
              },
              FUND_FUNDS_SUMMARY_DETAIL_MORE_INFO: {
                bind: 'fund-information-product-detail-funds-mx-detail-summary'
              },
              FUND_FUNDS_PRODUCT_DETAIL_MORE_INFO_DATA: {
                bind: 'fund-information-product-detail-funds-mx-detail-more-info'
              },
              FUND_FUNDS_ACTIVE_CONTRIBUTION_WITHDRAWAL: {
                bind: 'fund-information-product-detail-funds-mx-detail-contribution-withdrawal'
              }
            },
            params: {
              'productId': 'productId'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'fund-information-funds-investment-detail-mx-controller',
        familyPath: '@glomo-web-components/fund-information-funds-investment-detail-mx',
        render: 'litElement',
        properties: {
          fundDetailFlagName: 'glomo.investmentfunds.fundInformationFundsInvestmentDetail',
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'featureFlagCollection'
              },
              FUND_FUNDS_PRODUCT_DETAIL_MORE_INFO_DATA: {
                bind: 'flagController'
              },
              FUND_FUNDS_OPERATION_DATA: {
                bind: 'operationData'
              }
            },
            out: {
              FUND_FUNDS_INFORMATION_DETAIL: {
                bind: 'fund-information-funds-investment-detail-mx-controller-go-to-fund-information-detail-flow',
                link: {
                  page: 'fundInformationFundsDetail'
                }
              },
              FUND_FUNDS_PRODUCT_DETAIL_MORE_INFO: {
                bind: 'fund-information-funds-investment-detail-mx-controller-go-to-fund-detail-flow',
                link: {
                  page: 'fundContractedDetail'
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'fund-information-monthly-statement-enquiry-fund',
        familyPath: '@bbva-web-components-widgets/fund-information-monthly-statement-enquiry-fund',
        type: 'UI',
        render: 'litElement',
        properties: {
          financialStatementsApiVersion: accountsApiVersion,
          country: 'mx',
          host,
          native,
          requiredToken,
          cellsConnections: {
            in: {
              FUND_STATEMENT_ENQUIRY_CHANNEL: {
                bind: 'openModal'
              },
              global_open_document_url_success: {
                bind: 'onSuccessDocument'
              },
              global_open_document_url_error: {
                bind: 'onErrorDocument'
              },
              phone_number_product_detail_mx_contact_information: {
                bind: 'assistancePhone'
              }
            },
            out: {
              global_open_document_url: {
                bind: 'fund-information-monthly-statement-enquiry-fund-document-open',
                analytics: analyticsMonthlyFund.appStepOtp
              },
              global_action_launcher_dialer: {
                bind: 'fund-information-monthly-statement-enquiry-fund-open-call-action'
              },
              FUND_STATEMENT_ENQUIRY_ANALYTICS_PAGE_VISIT: {
                bind: 'fund-information-monthly-statement-enquiry-fund-page-load-complete',
                analytics: analyticsMonthlyFund.pageVisit
              },
              FUND_STATEMENT_ENQUIRY_ANALYTICS_APP_STARTED: {
                bind: 'fund-information-monthly-statement-enquiry-fund-last-statement-radio-press',
                analytics: analyticsMonthlyFund.appStarted
              },
              FUND_STATEMENT_ENQUIRY_ANALYTICS_COMPLETE: {
                bind: 'fund-information-monthly-statement-enquiry-fund-document-success-click',
                analytics: analyticsMonthlyFund.appCompleted
              },
              FUND_STATEMENT_ENQUIRY_ANALYTICS_OPERATION_ERROR: {
                bind: 'fund-information-monthly-statement-enquiry-fund-document-error-click',
                analytics: analyticsMonthlyFund.operationError
              }
            }
          }
        }
      }
    ]
  };

  if (native) {
    base.components.push(glomoOpenDocument(CONFIG));
  }

  localStorageApp.addOutStorageChannels(base.components, [ 'discreet_mode' ], CONFIG);
  return base;
};
