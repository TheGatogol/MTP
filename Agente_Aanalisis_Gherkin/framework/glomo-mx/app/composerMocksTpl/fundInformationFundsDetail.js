'use strict';

module.exports = CONFIG => {

  const {
    nativeIos = false,
    native,
    globalServices: {
      requiredToken = 'tsec',
      host,
      versions: { investmentFundsApiVersion, accounts }
    }
  } = CONFIG;
  const pageName = 'fundInformationFundsDetail';
  const { getLocalCurrency, getLanguage, createSpinner } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const analytics = require('./analytics/_fundInformationFundsDetail')(CONFIG);
  const {cellsConnectionStatus} = require('./common/_cross-components');

  let base = {};

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      extraHeaderClass: 'header--core',
      className: 'dark-blue-bg',
      iOSFixedHeader: nativeIos,
      componentName: 'cells-template-coronita-spherica',
      override: {
        extraHeaderClass: 'header--core',
        className: 'dark-blue-bg'
      }
    }
  };

  const fundsDetail = {
    zone: 'app__main',
    type: 'UI',
    tag: 'fund-information-funds-investment-detail-mx',
    familyPath: '@glomo-web-components/fund-information-funds-investment-detail-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      iOSFixedHeader: nativeIos,
      numberAttempts: 3,
      investmentFundApiVersion: investmentFundsApiVersion,
      accountsApiVersion: accounts,
      fundContributionFlagName: 'glomo.investmentfunds.fundTransactionServicingFundsContribution',
      cellsConnections: {
        in: {
          FUND_FUNDS_INFORMATION_DETAIL: {
            bind: 'dataInvestmentFund'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          }
        },
        out: {
          FUND_CONTRACTED_DETAIL_SHOW_WITHDRAWAL_FLOW: {
            bind: 'fund-information-funds-investment-detail-mx-go-to-withdrawal',
            link: {
              page: 'fundsWithdrawal'
            }
          },
          FUND_CONTRACTED_DETAIL_SHOW_CONTRIBUTION_FLOW: {
            bind: 'fund-information-funds-investment-detail-mx-go-to-contribution',
            link: {
              page: 'fundsContribution'
            }
          },
          FUND_FUNDS_OPERATION_DATA_CONTRIBUTION: {
            bind: 'fund-information-funds-investment-detail-mx-go-to-funds-contribution',
            analytics: analytics.appOnClick,
            link: {
              page: 'fundTransactionFundsContribution'
            }
          },
          FUND_INFORMATION_FUNDS_DETAIL_GO_BACK: {
            bind: 'fund-information-funds-investment-detail-mx-back-to-previous-page',
            backStep: true
          },
          FUND_INFORMATION_FUNDS_DETAIL_SET_FUND_DETAIL_DATA_COMPLETE: {
            bind: 'fund-information-funds-investment-detail-mx-set-fund-detail-data-complete',
            analytics: analytics.pageView
          },
          FUND_INFORMATION_FUNDS_DETAIL_CLICK_INFO_MODAL: {
            bind: 'fund-information-funds-investment-detail-mx-click-info-modal',
            analytics: analytics.internalLink
          },
          FUND_INFORMATION_FUNDS_DETAIL_SHOW_GENERIC_ERROR: {
            bind: 'fund-information-funds-investment-detail-mx-show-generic-error',
            analytics: analytics.appOnClickError
          }
        }
      }
    }
  };

  base = {
    hash: 'fund-information-funds-detail',
    currentPage: {
      url: '/fund-information-funds-detail'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      cellsConnectionStatus(pageName),
      fundsDetail
    ]
  };

  return base;
};
