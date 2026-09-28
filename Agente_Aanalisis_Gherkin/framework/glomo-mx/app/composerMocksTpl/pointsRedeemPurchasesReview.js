'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  // eslint-disable-next-line new-cap
  const SPINNER = utils.SPINNER(CONFIG);
  const COUNTRY = utils.getCountry(CONFIG);
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('reward');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const LANGUAGE = utils.getLanguage(CONFIG);
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'pointsRedeemPurchases');

  const configButtons = {
    buttons: {
      primary: {
        text: 'glomo-opx-points-redeem-purchases-exit',
        action: 'exit',
        class: 'primary'
      }
    }
  };

  const base = {
    hash: COUNTRY + '-points-redeem-purchases-review',
    currentPage: {
      url: '/points-redeem-purchases/review',
      params: []
    },

    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        headerFixed: true,
        footerFixed: true,
        disableEdgeSwipe: true,
        extraHeaderClass: 'dark-blue-bg',
        cellsConnections: {
          in: {
            navigation_points_redeem_purchases_to: {
              bind: 'resetLayerScroll'
            },
            points_redeem_purchases_review_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        headerFixed: true,
        iOSFixedHeader: isNativeIos
      }
    },
    components: [
      SPINNER,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pointsRedeemPurchasesReview',
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_pointsRedeemPurchasesReview: {
                bind: 'init'
              }
            },
            out: {
              points_redeem_purchases_review_init_page: {
                bind: 'init-page'
              },
              points_redeem_purchases_review_reset_page: {
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
          className: 'header--dark-success',
          rightIcon: 'coronita:close',
          titleName: 'glomo-opx-points-redeem-purchases-header-title',
          cellsConnections: {
            out: {
              navigation_points_redeem_purchases_review_to_continue: {
                bind: 'click-right-button'
              }
            }
          }
        },
        propertiesSpherica: {
          variant: 'primary',
          className: 'header',
          rightIcon: 'coronita:close',
          rightIconSize: '24',
          rightIconText: 'glomo-opx-points-redeem-purchases-header-close',
          titleName: 'glomo-opx-points-redeem-purchases-header-title-name'
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          continue: 'cardDetail',
          isLogged: 'global_user_logged',
          cellsConnections: {
            in: {
              navigation_points_redeem_purchases_review_to_continue: {
                bind: 'navigate'
              }
            },
            out: {
              navigation_points_redeem_purchases_review_to_cardDetail_reload: {
                bind: 'navigation-to-cardDetail-logged',
                backStep: true
              }
            }
          }
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
          language: LANGUAGE,
          lengthPan: 5,
          headerReceipt: true,
          cellsConnections: {
            in: {
              points_redeem_purchases_review_share_receipt: {
                bind: 'captureReceipt'
              },
              points_redeem_purchases_review_init_page: {
                bind: 'reset'
              },
              points_redeem_purchases_review_reset_receipt: {
                bind: 'receipt'
              },
              global_points_redeem_purchases_receipt_changed_to_review: {
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
            },
            params: {
              result: 'pointsRedeemPurchasesReview'
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
          className: 'points-transfer-review',
          formatDate: 'D MMMM YYYY, HH:mm [h]',
          language: LANGUAGE,
          headerTitle: 'glomo-transfer-header-title',
          localCurrency: LOCAL_CURRENCY,
          page: 'points-transfer-review',
          visibleChars: VISIBLE_CHARS,
          operationsListLayout: 'review',
          disableButtons: true,
          withoutHead: false,
          cellsConnections: {
            in: {},
            out: {
              points_redeem_purchases_review_share_receipt: {
                bind: 'share-receipt-capture'
              }
            },
            params: {
              result: 'pointsRedeemPurchasesReview'
            }
          }
        },
        propertiesSpherica: {
          className: 'centered-operation-list',
          operationListClass: 'centered-items',
          operationsVariant: 'primary-alt'
        }
      },
      {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        type: 'UI',
        properties: {
          className: 'no-shadow',
          config: configButtons,
          cellsConnections: {
            out: {
              navigation_points_redeem_purchases_review_to_continue: {
                bind: 'cells-confirm-buttons-click-primary'
              }
            }
          }
        },
        propertiesSpherica: {
          disableButtons: true,
          hidden: true
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(base);
};
