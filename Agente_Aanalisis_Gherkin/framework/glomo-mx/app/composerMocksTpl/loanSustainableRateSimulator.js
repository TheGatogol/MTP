'use strict';
module.exports = CONFIG => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { loans: loansV1, loansV2 } },
    native = false,
    nativeIos = false
  } = CONFIG;
  const { headerHeightMinimum } = require('./common/helpers/_utils');
  const pageName = 'loanSustainableRateSimulator';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const base = {
    hash: 'loan-sustainable-rate-simulator',
    currentPage: {
      url: '/loan-sustainable-rate-simulator'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerFixed: true,
        className: nativeIos ? 'ios-top-padding' : '',
        headerHeight: headerHeightMinimum,
        fixOffsetScroll: 0,
        iOSFixedHeader: nativeIos
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-widget-loan-sustainable-rate-simulator',
        familyPath: '@glomo-web-components/bbva-widget-loan-sustainable-rate-simulator',
        familyPathSpherica: '@glomo-web-components/bbva-widget-loan-sustainable-rate-simulator-spherica',
        render: 'litElement',
        properties: {
          host,
          native,
          requiredToken,
          bladmLoansVersion: loansV2,
          dataProviderLoansVersion: loansV1,
          cellsConnections: {
            in: {
              oc_loan_offer_page_go_to_simulator: {
                bind: 'setSimulatorProperties'
              },
              oc_loan_go_to_simulator: {
                bind: 'setSimulatorProperties'
              },
              global_widget_loan_sustainable_rate_simulator_retry: {
                bind: 'leaveOperative'
              },
              global_widget_loan_sustainable_rate_simulator_exit: {
                bind: 'leaveOperative'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'leaveOperative'
              }
            },
            out: {
              global_alert_manager_open_with_settings: {
                bind: 'open-modal'
              },
              global_widget_loan_simulator_exit_operative: {
                bind: 'exit-flow',
                backStep: true,
                cleanUntil: true
              },
              global_alert_manager_open_with_settings_spherica: {
                bind: 'bbva-widget-loan-sustainable-rate-simulator-open-modal'
              },
              global_widget_loan_simulator_exit_operative_spherica: {
                bind: 'bbva-widget-loan-sustainable-rate-simulator-exit-flow',
                backStep: true,
                cleanUntil: true
              }
            }
          }
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
