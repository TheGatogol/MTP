'use strict';

module.exports = CONFIG => {
  const utils = require('./common/helpers/_utils');
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const COUNTRY = utils.getCountry(CONFIG);
  const VISIBLE_CHARS = utils.getVisibleChars(CONFIG)('card');
  const LOCAL_CURRENCY = utils.getLocalCurrency(CONFIG);
  const isNativeIos = CONFIG.nativeIos || false;
  const pageName = 'incrementReview';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const isSpherica = sphericaPageUtils.isSpherica();

  const configButtons = {
    buttons: {
      primary: {
        text: 'cells-successful-response-next',
        action: 'exit'
      }
    }
  };

  const base = {
    hash: COUNTRY + '-increment-review',
    currentPage: {
      url: '/card/:productId/increment/review',
      params: []
    },

    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'static',
        drawerWidth: '100%',
        className: isNativeIos ? 'ios-top-padding' : '',
        disableScrollLock: true,
        hasFooter: true,
        footerHeight: 100,
        disableEdgeSwipe: true,
        extraHeaderClass: 'darker-green-bg',
        cellsConnections: {
          in: {
            navigation_increment_to: {
              bind: 'resetLayerScroll'
            },
            increment_review_init_page: {
              bind: 'recalculateHeader'
            }
          },
          out: {}
        }
      },
      propertiesSpherica: {
        hasFooter: false,
        extraHeaderClass: ''
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'incrementReview',
          private: true,
          cache: [],
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_incrementReview: {
                bind: 'init'
              }
            },
            out: {
              increment_review_init_page: {
                bind: 'init-page'
              },
              increment_review_reset_page: {
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
          titleName: 'glomo-credit-card-limit-increase-title',
          cellsConnections: {
            in: {},
            out: {
              financial_overview_refresh: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        },
        propertiesSpherica: {
          className: 'header',
          variant: 'primary',
          rightIconText: 'cells-molecule-header-spherica-close',
          titleName: 'glomo-credit-card-limit-increase-title-spherica'
        }
      },
      {
        zone: 'app__header',
        type: 'UI',
        tag: 'glomo-navigation-handler',
        properties: {
          cellsConnections: {
            in: {},
            out: {}
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        tagSpherica: 'cells-successful-response-spherica',
        type: 'UI',
        properties: {
          className: 'bill-payments',
          formatDate: 'DD MMMM YYYY, HH:mm [h]',
          localCurrency: LOCAL_CURRENCY,
          page: 'increment-review',
          visibleChars: VISIBLE_CHARS,
          operationsListLayout: 'review',
          disableButtons: true,
          cellsConnections: {
            in: {},
            out: {
              increment_review_share_receipt: {
                bind: 'share-receipt-capture'
              }
            },
            params: {
              result: 'increment_result'
            }
          }
        },
        propertiesSpherica: {
          className: 'u-padding-top--0',
          messageContainerClass: ''
        }
      },
      ...(!isSpherica ? [ {
        zone: 'app__footer',
        tag: 'cells-confirm-buttons',
        tagSpherica: 'cells-confirm-buttons-spherica',
        properties: {
          className: 'no-shadow',
          config: configButtons,
          cellsConnections: {
            in: {
            },
            out: {
              financial_overview_refresh: {
                bind: 'cells-confirm-buttons-click-primary',
                backStep: true
              }
            }
          }
        }
      } ] : [])
    ]
  };

  addCommonErrors(base.components)();

  return sphericaPageUtils.spherize(base);
};
