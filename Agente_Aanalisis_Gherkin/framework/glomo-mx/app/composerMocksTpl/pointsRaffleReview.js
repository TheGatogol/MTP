'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const COUNTRY = utils.getCountry(CONFIG);
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('card');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage(CONFIG);
  const ANALYTICS = require('./analytics/_pointsRaffle')(CONFIG);

  const configButtons = {
    buttons: {
      primary: {
        text: 'glomo-opx-points-raffle-dm-exit',
        action: 'exit',
        class: 'primary'
      }
    }
  };

  const base = {
    hash: COUNTRY + '-points-raffle-review',
    currentPage: {
      url: '/points-raffle/review',
      params: []
    },

    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        hasFooter: true,
        headerFixed: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            navigation_points_raffle_to: {
              bind: 'resetLayerScroll'
            },
            points_raffle_review_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pointsRaffleReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_pointsRaffleReview: {
                bind: 'init'
              }
            },
            out: {
              points_raffle_review_init_page: {
                bind: 'init-page'
              },
              points_raffle_review_reset_page: {
                bind: 'reset'
              },
              app_error_access_token: {
                bind: 'access-token-error'
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
          rightIcon: 'coronita:close',
          titleName: 'glomo-points-raffle-header-title',
          cellsConnections: {
            out: {
              navigation_points_raffle_review_to_continue: {
                bind: 'click-right-button'
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
          continue: 'reward',
          cellsConnections: {
            in: {
              navigation_points_raffle_review_to_continue: {
                bind: 'navigate'
              }
            },
            out: {
              navigation_points_raffle_review_to_reward_reload: {
                bind: 'navigation-to-reward-logged',
                link: {
                  page: 'reward',
                  cleanUntil: 'reward'
                }
              }
            },
            params: {
              isLogged: 'global_user_logged'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        type: 'UI',
        properties: {
          language: LANGUAGE,
          lengthPan: 5,
          headerReceipt: false,
          customHeight: {
            height: 800
          },
          cellsConnections: {
            in: {
              points_raffle_review_share_receipt: {
                bind: 'captureReceipt'
              },
              points_raffle_review_init_page: {
                bind: 'reset'
              },
              points_raffle_review_reset_receipt: {
                bind: 'receipt'
              },
              global_points_raffle_receipt_changed_to_review: {
                bind: 'result'
              }
            },
            out: {
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              global_share_receipt_error_modal: {
                bind: 'share-receipt-show-modal-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        type: 'UI',
        properties: {
          className: 'points-transfer funds-margin',
          formatDate: 'D MMMM YYYY, HH:mm [h]',
          language: 'ES',
          headerTitle: 'glomo-raffle-header-title',
          localCurrency: LOCAL_CURRENCY,
          page: 'points-raffle-review',
          visibleChars: VISIBLE_CHARS,
          operationsListLayout: 'review',
          disableButtons: true,
          withoutHead: true,
          cellsConnections: {
            in: {},
            out: {
              points_raffle_review_share_receipt: {
                bind: 'share-receipt-capture'
              }
            },
            params: {
              result: 'rafflePointsReview'
            }
          }
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          className: 'no-shadow',
          config: configButtons,
          cellsConnections: {
            out: {
              navigation_points_raffle_review_to_continue: {
                bind: 'cells-confirm-buttons-click-primary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-analytics-points-raffle-manager',
        familyPath: '@glomo-web-components/glomo-analytics-points-raffle-manager',
        render: 'litElement',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              global_reward_analytics_set_product_name: {
                bind: 'setProductNameOrigin'
              },
              global_points_raffle_operation_number: {
                bind: 'setOperationNumber'
              },
              points_raffle_review_init_page: {
                bind: 'fireAppCompleted'
              },
              points_raffle_analytics_app_persist_typology: {
                bind: 'setTypology'
              },
              points_raffle_analytics_app_persist_offer: {
                bind: 'setOffer'
              }
            },
            out: {
              points_raffle_review_fire_analytics_app_completed: {
                bind: 'analytics-app-completed',
                analytics: ANALYTICS.APP_COMPLETED
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
