'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('demoFeedback');
  const isNativeIos = CONFIG.nativeIos || false;
  const configButtons = [
    {
      icon: 'coronita:feedback',
      titleText: 'Mobile Top Up Abandon',
      page: 'feedback',
      params: {
        feedbackOperation: 'mobile_top_up_abandon'
      }
    },
    {
      icon: 'coronita:favorite',
      titleText: 'Mobile Top Up Success NPS',
      page: 'feedback',
      params: {
        feedbackOperation: 'mobile_top_up_success'
      }
    },
    {
      icon: 'coronita:feedback',
      titleText: 'Service Payment Abandon',
      page: 'feedback',
      params: {
        feedbackOperation: 'service_payment_abandon'
      }
    },
    {
      icon: 'coronita:favorite',
      titleText: 'Service Payment Success NPS',
      page: 'feedback',
      params: {
        feedbackOperation: 'service_payment_success'
      }
    },
    {
      icon: 'coronita:feedback',
      titleText: 'Transfer Abandon',
      page: 'feedback',
      params: {
        feedbackOperation: 'transfer_abandon'
      }
    },
    {
      icon: 'coronita:favorite',
      titleText: 'Transfer Success',
      page: 'feedback',
      params: {
        feedbackOperation: 'transfers-success-exit-to-entry-point-event'
      }
    },
    {
      icon: 'coronita:favorite',
      titleText: 'Cardless Withdrawal Success NPS',
      page: 'feedback',
      params: {
        feedbackOperation: 'cardless_withdrawal_success'
      }
    },
    {
      icon: 'coronita:favorite',
      titleText: 'Transaction List Success NPS',
      page: 'feedback',
      params: {
        feedbackOperation: 'transaction_list_success'
      }
    }
  ];

  const base = {
    currentPage: {
      url: '/demo/feedback',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        drawerWidth: '100%',
        disableScrollLock: true,
        hasFooter: false,
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: utils.headerHeight,
        className: isNativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            demo_feedback_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: { }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'demoFeedback',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_demoFeedback: {
                bind: 'init'
              }

            },
            out: {
              demo_feedback_init_page: {
                bind: 'init-page'
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
        zone: 'app__header',
        type: 'UI',
        tag: 'cells-molecule-header',
        properties: {
          className: 'header--core',
          search: false,
          leftIcon: 'coronita:return-12',
          titleName: 'Demo Feedback',
          cellsConnections: {
            in: {},
            out: {
              demo_feedback_back_request: {
                bind: 'click-left-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          backAction: 'navigate-to-previous-page',
          cellsConnections: {
            in: {
              demo_feedback_back_request: {
                bind: 'goBack'
              },
              demo_feedback_item_clicked: {
                bind: 'navigateToPage'
              }
            },
            out: {
              navigation_demo_feedback_to_previous_page: {
                bind: 'navigate-to-previous-page',
                backStep: true
              },
              global_prepare_feedback: {
                bind: 'navigation-to-feedback'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'glomo-button-list',
        properties: {
          className: 'padding-m no-wrap',
          buttons: configButtons,
          cellsConnections: {
            in: {},
            out: {
              demo_feedback_item_clicked: {
                bind: 'button-clicked'
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
