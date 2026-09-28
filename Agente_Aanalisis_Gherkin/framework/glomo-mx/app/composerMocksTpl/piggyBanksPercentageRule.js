'use strict';

module.exports = (CONFIG) => {
  const { native = false, nativeIos = false,
    globalServices: { host, requiredToken = 'tsec', versions: { accounts, cardsV1, piggyBanks } }
  } = CONFIG;
  const pages = require('./common/_pages')(CONFIG)('piggy-banks');
  const { clickstart, pageVisit, appStarted, appStepConfirmation, appCompleted, operationError  } = require('./analytics/_piggyBanksPercentajeRule')();
  const { createSpinner, getLanguage } = require('./common/helpers/_utils');

  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass: 'bg-light-grey',
      drawerWidth: '100%',
      hasFooter: false,
      animationType: 'verticalUp',
      headerFixed: true
    }
  };

  const piggyBanksPercentageRuleFeature = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-piggy-banks-percentage-rule-mx',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-feature-piggy-banks-percentage-rule-mx',
    properties: {
      host,
      native,
      requiredToken,
      piggyBanksApiVersion: piggyBanks,
      accountsApiVersion: accounts,
      cardsApiVersion: cardsV1,
      country: 'mx',
      language: getLanguage(),
      cellsConnections: {
        in: {
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          }
        },
        out: {
          bbva_feature_piggy_banks_percentage_rule_trace_event: {
            bind: 'bbva-feature-piggy-banks-percentage-rule-trace-event'
          },
          bbva_feature_piggy_banks_percentage_rule_go_to_dashboard: {
            bind: 'go-to-dashboard',
            backStep: true
          }
        }
      }
    }
  };

  const piggyBanksPercentageRuleAnalyticManager = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-piggy-banks-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-piggy-banks',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          piggy_banks_reset_page: {
            bind: 'reset'
          },
          bbva_feature_piggy_banks_percentage_rule_trace_event: {
            bind: 'fireAnalyticsPercentageRule'
          }
        },
        out: {
          piggy_banks_percentage_rule_analytics_on_click_start: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-six-percentage-on-click-start',
            analytics: clickstart
          },
          piggy_banks_percentage_rule_analytics_app_page_visit: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-six-percentage-app-page-visit',
            analytics: pageVisit
          },
          piggy_banks_percentage_rule_analytics_app_started: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-six-percentage-app-started',
            analytics: appStarted
          },
          piggy_banks_percentage_rule_analytics_app_step: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-six-percentage-app-step',
            analytics: appStepConfirmation
          },
          piggy_banks_percentage_rule_analytics_app_completed: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-six-percentage-app-completed',
            analytics: appCompleted
          },
          piggy_banks_percentage_rule_analytics_operation_error: {
            bind: 'bbva-analyticmanager-piggy-banks-mx-six-percentage-operation-error',
            analytics: operationError
          }
        }
      }
    }
  };

  const base = {
    hash: 'piggy-banks-percentage-rule',
    currentPage: {
      url: '/piggy-banks-percentage-rule'
    },
    pages,
    template,
    components: [
      createSpinner(CONFIG),
      piggyBanksPercentageRuleFeature,
      piggyBanksPercentageRuleAnalyticManager
    ]
  };

  return base;
};

