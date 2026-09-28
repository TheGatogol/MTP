'use strict';

module.exports = (CONFIG) => {
  const { native = false, nativeIos = false,
    globalServices: { host, requiredToken = 'tsec',
      versions: { accounts, savingGoals, cardsV1, selfDriven, financialOverview }
    }
  } = CONFIG;
  const PAGE_NAME = 'selfDrivenRoundUp';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const { originApplication, periodDateSelfDriven, selfDrivenVisible } = require('./pfm/_constants');
  const pages = require('./common/_pages')(CONFIG)('goals');
  const { getFootprint } = require('./analytics/_goals')();

  const base = {
    hash: 'self-driven-round-up',
    currentPage: {
      url: '/self-driven-round-up'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true
      },
      propertiesSpherica: {
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'self-driven-round-up',
        tagSpherica: 'self-driven-round-up-mx',
        render: 'litElement',
        familyPath: '@bbva-web-components-widgets/self-driven-round-up',
        familyPathSpherica: '@glomo-web-components/self-driven-round-up-mx',
        properties: {
          language: 'es-MX',
          host,
          attachToBody: true,
          native,
          originApplication,
          periodDate: periodDateSelfDriven,
          accountsApiVersion: accounts,
          cardsApiVersion: cardsV1,
          financialOverviewApiVersion: financialOverview,
          savingGoalsApiVersion: savingGoals,
          selfDrivenApiVersion: selfDriven,
          requiredToken,
          country: 'mx',
          selfDrivenVisible,
          cellsConnections: {
            in: {
              goals_get_rule_id: {
                bind: 'ruleId'
              },
              goals_get_selected_product: {
                bind: 'selectedProduct'
              },
              dashboard_accounts: {
                bind: 'clientContracts'
              },
              goals_metas_saving_goals_ready: {
                bind: 'selfDrivenLoading'
              }
            },
            out: {
              self_driven_round_up_navigate_close: {
                bind: 'self-driven-round-up-rule-leave',
                backStep: true
              },
              self_driven_round_up_success_rule_finish: {
                bind: 'self-driven-round-up-finish-rule-modal-close',
                backStep: true
              },
              self_driven_round_up_success_rule_delete: {
                bind: 'self-driven-round-up-success-rule-delete',
                backStep: true
              },
              self_driven_round_up_rule_without_saving_exit: {
                bind: 'self-driven-round-up-rule-without-saving-exit',
                backStep: true
              },
              self_driven_round_up_ready: {
                bind: 'self-driven-round-up-ready'
              },
              self_driven_round_up_create_rule: {
                bind: 'self-driven-round-up-rule-info-create'
              },
              self_driven_round_up_create_edit_rule_success: {
                bind: 'self-driven-round-up-rule-info-success'
              },
              self_driven_round_up_help_modal_close: {
                bind: 'help-modal-close'
              }
            }
          }
        },
        propertiesSpherica: {
          cellsConnections: {
            in: {
              goals_get_rule_id: {
                bind: 'ruleId'
              },
              goals_get_selected_product: {
                bind: 'selectedProduct'
              },
              dashboard_accounts: {
                bind: 'clientContracts'
              },
              goals_metas_saving_goals_ready: {
                bind: 'selfDrivenLoading'
              },
              goals_navigate_self_driven_round_up: {
                bind: 'selfDrivenVisible'
              },
              flag_minior_account: {
                bind: 'isMinor'
              }
            },
            out: {
              self_driven_round_up_navigate_close: {
                bind: 'self-driven-round-up-mx-rule-leave',
                backStep: true
              },
              self_driven_round_up_success_rule_finish: {
                bind: 'self-driven-round-up-mx-finish-rule-modal-close',
                backStep: true
              },
              self_driven_round_up_success_rule_delete: {
                bind: 'self-driven-round-up-mx-success-rule-delete',
                backStep: true
              },
              self_driven_round_up_rule_without_saving_exit: {
                bind: 'self-driven-round-up-mx-rule-without-saving-exit',
                backStep: true
              },
              self_driven_round_up_ready: {
                bind: 'self-driven-round-up-mx-ready'
              },
              self_driven_round_up_create_rule: {
                bind: 'self-driven-round-up-mx-rule-info-create'
              },
              self_driven_round_up_create_edit_rule_success: {
                bind: 'self-driven-round-up-mx-rule-info-success'
              },
              self_driven_round_up_help_modal_close: {
                bind: 'help-modal-close'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-goals',
        familyPath: '@glomo-web-components/bbva-manager-goals',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              __bridge_cancelled_back_navigation: {
                bind: 'manageBackStep'
              }
            },
            out: {
              self_driven_round_up_rule_without_saving_exit: {
                bind: 'goals-navigate-back',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-goals',
        familyPath: '@glomo-web-components/bbva-manager-goals',
        render: 'litElement',
        properties: {
          cellsConnections: {
            in: {
              self_driven_round_up_create_rule: {
                bind: 'fireAnalyticsInternalLink'
              },
              self_driven_round_up_create_edit_rule_success: {
                bind: 'fireAnalyticsPageView'
              }
            },
            out: {
              goals_analytics_self_driven_round_up_success_page_view: {
                bind: 'analytics-dynamic-page-view',
                analytics: getFootprint('withDynamicLevel3CustomFields', 'aportacion por compras')
              }
            }
          }
        }
      }
    ]
  };

  addCommonErrors(base.components)();
  return sphericaPageUtils.spherize(base);
};
