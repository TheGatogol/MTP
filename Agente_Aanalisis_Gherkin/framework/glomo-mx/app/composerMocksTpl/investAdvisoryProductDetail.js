'use strict';

module.exports = CONFIG => {
  const pageName = 'investAdvisoryProductDetail';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const {
    native = false,
    nativeIos = false,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        investmentFundsApiVersion,
        investmentPortfolioApiVersion,
        configurationRelatedContracts,
        contractsConfigurationV1,
        financialInvestmentsV1
      }
    }
  } = CONFIG;
  const { getLanguage } = require('./common/helpers/_utils');
  const analytics = require('./analytics/_investAdvisoryProductDetail')();
  const analyticsContribution = require('./analytics/_investAdvisoryContribution')();
  const analyticsWithdrawal = require('./analytics/_investAdvisoryWithdrawal')();
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);

  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
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
          [pageName + '_RESET_PAGE']: {
            bind: 'reset'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const featureProductDetailInvest = {
    zone: 'app__main',
    type: 'DM',
    tag: 'account-information-product-detail-invest-mx',
    familyPath: '@glomo-web-components/account-information-product-detail-invest-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      language: getLanguage(),
      versionInvestmentFunds: investmentFundsApiVersion,
      versionInvestmentPortfolio: investmentPortfolioApiVersion,
      relatedContractsVersion: configurationRelatedContracts,
      contractsConfigurationVersion: contractsConfigurationV1,
      calculateBalancesByPeriodVersion: financialInvestmentsV1,
      numberIsin: '000000000000',
      numberTypeId: 'ISIN',
      numberStockMarket: '00000000000000000000000000000000',
      cellsConnections: {
        in: {
          global_storage_get_loginData_success: {
            bind: 'loginData'
          },
          global_client_id: {
            bind: 'clientId'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewDetails'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          [pageName + '_INIT_PAGE']: {
            bind: 'init'
          },
          navigation_invest_advisory_channel: {
            bind: 'investmentsDmData'
          },
          investAdvisoryContributionAndWithdrawal_EXIT_STATUS_PAGE: {
            bind: 'reset'
          },
          investAdvisoryContributionAndWithdrawal_EXIT_WITHDRAWAL_AND_CONTRIBUTION: {
            bind: 'reset'
          },
          INVEST_ADVISORY_PRODUCT_SUCCESS: {
            bind: 'reset'
          },
          invest_navigation_edit_alias_back_request: {
            bind: 'returnToProductDetail'
          },
          INVEST_ADVISORY_back_step_navigation: {
            bind: 'returnToProductDetail'
          },
          global_invest_advisory_pre_data_balances_by_period: {
            bind: 'preDataBalancesByPeriod'
          }
        },
        out: {
          [pageName + '_NAVIGATE_TO_CONTRIBUTION']: {
            bind: 'contribution-invest-advisory-product-detail',
            link: {
              page: 'investAdvisoryContributionAndWithdrawal'
            },
            analytics: analyticsContribution.appOnclickStart
          },
          [pageName + '_NAVIGATE_TO_WITHDRAWAL']: {
            bind: 'withdrawal-invest-advisory-product-detail',
            link: {
              page: 'investAdvisoryContributionAndWithdrawal'
            },
            analytics: analyticsWithdrawal.appOnclickStart
          },
          [pageName + '_EXIT_PRODUCT_DETAIL']: {
            bind: 'exit-product-detail',
            backStep: true
          },
          [pageName + '_SET_ASSOCIATED_ACCOUNT_NUMBER']: {
            bind: 'set-text-on-clipboard'
          },
          INVEST_ADVISORY_ALIAS_PRODUCT: {
            bind: 'edit-alias-invest-advisory-product-detail',
            link: {
              page: 'investAdvisoryProductDetailEditAlias',
              params: {
                productId: 'productId'
              }
            }
          },
          [pageName + '_ANALYTICS_PAGE_VIEW_OPPORTUNITIES']: {
            bind: 'analytics-page-view-opportunities',
            analytics: analytics.pageViewOpportunities
          },
          investAdvisoryProductDetail_ANALYTICS_PAGE_VIEW_WITHOUT_FUNDS: {
            bind: 'bbva-investment-portfolio-error-loading-funds',
            analytics: analytics.pageViewWithoutFunds
          },
          [pageName + '_ANALYTICS_CONTRACT_DETAIL']: {
            bind: 'product-detail-contract-detail-click',
            analytics: analytics.pageViewContractDetail
          },
          [pageName + '_ANALYTICS_FUND_DETAIL']: {
            bind: 'product-detail-fund-detail-loaded',
            analytics: analytics.pageViewFundDetail
          },
          [pageName + '_ANALYTICS_ERROR_UNAVAILABLE_OPERATION']: {
            bind: 'product-detail-error-unavailable-operation',
            analytics: analytics.errorUnavailableOperation
          },
          [pageName + '_ANALYTICS_ERROR_UNAVAILABLE_INFORMATION']: {
            bind: 'product-detail-error-unavailable-information',
            analytics: analytics.errorUnavailableInformation
          },
          INVEST_ADVISORY_PRODUCT_DETAIL_ANALYTICS_TERMS_MODAL: {
            bind: 'product-detail-terms-modal-analytic',
            analytics: analytics.pageViewTermsModal
          },
          global_action_launcher_dialer: {
            bind: 'account-information-product-detail-invest-call-bbva'
          }
        },
        params: {
          'productId': 'productId'
        }
      }
    }
  };

  const clipboardManager = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-clipboard-manager',
    tagSpherica: 'cells-clipboard-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          [pageName + '_SET_ASSOCIATED_ACCOUNT_NUMBER']: {
            bind: 'text'
          }
        },
        out: {
          [pageName + '_clipboard_success']: {
            bind: 'text-copied'
          },
          [pageName + '_clipboard_error']: {
            bind: 'clipboard-error'
          }
        }
      }
    }
  };

  const base = {
    hash: pageName,
    currentPage: {
      url: '/invest-advisory-product-detail'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        className: `bg-light ${nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        headerHidden: true,
        headerFixed: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      },
      propertiesSpherica: {
        drawerWidth: '100%',
        className: `bg-light ${nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        headerHidden: true,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            contract_product_section_oc_banner_invest_advisory_onboarding_clicked: {
              bind: 'recalculateHeader'
            }
          },
          out: {
            welcome_template_active: {
              bind: 'template-active'
            }
          }
        }
      }
    },

    components: [
      lifeCycle,
      featureProductDetailInvest,
      clipboardManager
    ]
  };

  return sphericaPageUtils.spherize(base);
};
