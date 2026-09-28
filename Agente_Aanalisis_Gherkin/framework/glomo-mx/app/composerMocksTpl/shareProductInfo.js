'use strict';

module.exports = CONFIG => {
  const pages = require('./common/helpers').getPages(CONFIG)('shareProductInfo');
  const isNativeIos = CONFIG.nativeIos || false;
  const base = {
    hash: 'share-product-info',
    currentPage: {
      url: '/share-product-info',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        headerFixed: true,
        className: isNativeIos ? 'ios-top-padding' : '',
        extraHeaderClass: 'dark-blue-bg',
        iOSFixedHeader: true,
        disableEdgeSwipe: true,
        cellsConnections: {
          in: {
            share_product_info_init_page: {
              bind: 'recalculateHeader'
            },
            global_glomo_alert_manager_modal_opened: {
              bind: 'setModalActive',
              previousState: false
            },
            global_glomo_alert_manager_modal_closed: {
              bind: 'setModalActive',
              previousState: false
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
          pageName: 'shareProductInfo',
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              __bridge_page_shareProductInfo: {
                bind: 'init'
              }
            },
            out: {
              share_product_info_reset_page: {
                bind: 'reset'
              },
              share_product_info_init_page: {
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
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-share-product-info-dm',
        properties: {
          productTitleKeys: [ 'cells-product-more-info-description' ],
          itemMessageSeparator: '\n',
          cellsConnections: {
            in: {
              global_share_account_info_set_product: {
                bind: 'parseData'
              },
              share_product_info_reset_page: {
                bind: 'reset'
              },
              share_product_info_submit_data: {
                bind: 'onSubmit'
              }
            },
            out: {
              share_product_info_items_parsed: {
                bind: 'set-shared-product-info'
              },
              global_share_product_info_account: {
                bind: 'share-account-info',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-share-product-info',
        properties: {
          title: 'cells-share-product-info-account',
          buttonText: 'cells-product-more-info-share',
          minChecked: '1',
          skeletonItems: 3,
          headingLevel: 1,
          cellsConnections: {
            in: {
              share_product_info_reset_page: {
                bind: 'reset'
              },
              share_product_info_items_parsed: {
                bind: 'items'
              }
            },
            out: {
              share_product_info_submit_data: {
                bind: 'share-product-info-submit'
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
          className: 'header--dark',
          leftIcon: 'coronita:return-12',
          titleName: 'glomo-share-product-info-header-title',
          cellsConnections: {
            in: {},
            out: {
              navigation_share_product_back_request: {
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
          backAction: 'navigation-back-request',
          cellsConnections: {
            in: {
              navigation_share_product_back_request: {
                bind: 'goBack'
              }
            },
            out: {
              navigation_share_product_to_product: {
                bind: 'navigation-back-request',
                backStep: true
              }
            },
            params: {
              productId: 'productId'
            }
          }
        }
      }
    ]
  };

  return base;
};