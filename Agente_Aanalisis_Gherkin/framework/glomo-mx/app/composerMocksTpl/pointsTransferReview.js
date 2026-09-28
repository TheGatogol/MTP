'use strict';

module.exports = CONFIG => {
  const {
    getLanguage,
    getLocalCurrency,
    getVisibleChars,
    SPINNER: spinner
  } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'pointsTransferReview');
  const isSpherica = sphericaPageUtils.isSpherica();
  const isNativeIos = CONFIG.nativeIos || false;
  const configButtons = {
    buttons: {
      primary: {
        text: 'glomo-points-transfer-exit',
        action: 'exit',
        class: 'primary',
        disabled: false
      }
    }
  };
  const base = {
    hash: 'points-transfer-review',
    currentPage: {
      url: '/points-transfer/review'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        headerFixed: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            navigation_points_transfer_to: {
              bind: 'resetLayerScroll'
            },
            points_transfer_review_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        iOSFixedHeader: isNativeIos,
        extraHeaderClass: 'header--white'
      }
    },
    components: [
      spinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pointsTransferReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_pointsTransferReview: {
                bind: 'init'
              }
            },
            out: {
              points_transfer_review_init_page: {
                bind: 'init-page'
              },
              points_transfer_review_reset_page: {
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
        tagSpherica: 'cells-molecule-header-spherica',
        properties: {
          className: 'header--core',
          rightIcon: 'coronita:close',
          titleName: 'glomo-points-transfer-header-title',
          cellsConnections: {
            out: {
              navigation_points_transfer_review_to_continue: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header--white',
          variant: 'primary',
          leftIcon: '',
          rightIcon: 'coronita:close',
          rightIconText: 'cells-molecule-header-spherica-close'
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
              navigation_points_transfer_review_to_continue: {
                bind: 'navigate'
              }
            },
            out: {
              navigation_points_transfer_review_to_reward_reload: {
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
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        type: 'UI',
        properties: {
          className: 'points-transfer',
          formatDate: 'D MMMM YYYY HH:mm',
          language: 'ES',
          headerTitle: 'glomo-transfer-header-title',
          localCurrency: getLocalCurrency(),
          page: 'points-transfer-review',
          visibleChars: getVisibleChars(CONFIG)('card'),
          operationsListLayout: 'review',
          disableButtons: true,
          withoutHead: true,
          cellsConnections: {
            out: {
              points_transfer_review_share_receipt: {
                bind: 'share-receipt-capture'
              }
            },
            params: {
              result: 'transferPointsReview'
            }
          }
        },
        propertiesSpherica: {
          witchDescription: true,
          withSuccessHead: true,
          withoutHead: false,
          operationListClass: 'centered-items',
          disableButtons: true
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-share-generic-receipt',
        familyPath: 'cells-share-operative-receipt',
        tagSpherica: 'cells-share-generic-receipt-spherica',
        familyPathSpherica: 'cells-share-operative-receipt-spherica',
        type: 'UI',
        properties: {
          language: getLanguage(),
          lengthPan: 5,
          headerReceipt: true,
          customHeight: {
            height: 800
          },
          receipt: '',
          pathHeaderImage: '',
          cellsConnections: {
            in: {
              points_transfer_review_share_receipt: {
                bind: 'captureReceipt'
              },
              points_transfer_shared: {
                bind: 'result'
              }
            },
            out: {
              mobile_manage_operation: {
                bind: 'receipt-captured',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        properties: {
          className: 'no-shadow',
          config: isSpherica ? 'disableButtons: true' : configButtons,
          cellsConnections: {
            out: {
              navigation_points_transfer_review_to_continue: {
                bind: 'cells-confirm-buttons-click-primary'
              }
            }
          }
        }
      }
    ]
  };
  return sphericaPageUtils.spherize(base);
};
