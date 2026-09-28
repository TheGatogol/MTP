'use strict';

module.exports = CONFIG => {

  const commonUtils = require('./common/helpers/_utils');
  const PAGE_NAME = 'offerTdcModal';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_offerTdcModal')(CONFIG);
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;

  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/offer-tdc-modal',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        headerFixed: true,
        headerHeight: commonUtils.headerHeight,
        mode: 'waterfall',
        animationType: 'verticalUp',
        iOSFixedHeader: IS_NATIVE_IOS,
        className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [{
      zone: 'app__main',
      tag: 'cells-handle-life-cycle',
      type: 'UI',
      properties: {
        pageName: PAGE_NAME,
        customInitEvents: {
          'swipe-menu-enabled': false
        },
        cellsConnections: {
          in: {
            __bridge_app: {
              bind: 'navigation'
            }
          },
          out: {
            offer_tdc_modal_page_reset_page: {
              bind: 'reset'
            },
            offer_tcd_modal_page_init_page: {
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
      tag: 'cells-dm-global-apis-cards',
      type: 'DM',
      properties: {
        globalImplementation: true,
        cellsConnections: {
          in: {
            global_offers_retrieved: {
              bind: 'offersData'
            },
            navigation_from_deep_link_to_operations: {
              bind: 'openModalTdcOffer'
            },
            close_modal_to_credit_card_holder_page_tdc: {
              bind: 'goToCreditCardHolderPage'
            },
            close_modal_to_dashboard_from_offer_tdc: {
              bind: 'closeModal'
            }
          },
          out: {
            offer_tdc_plus_tdd_modal_open_from_page: {
              bind: 'offer-tdc-plus-tdd-modal',
              analytics: ANALYTICS.HUELLA_TDC_PLUS_TDD
            },
            offer_tdc_modal_open_from_page_analytic: {
              bind: 'offer-tdc-offer-modal',
              analytics: ANALYTICS.HUELLA_TDC
            },
            offer_tdc_modal_open_from_page: {
              bind: 'open-tdc-offer-modal'
            },
            offer_tdc_plus_tdd_channel: {
              bind: 'go-to-credit-card-holder-page-offer-tdc-plus-tdd',
              link: {
                page: 'comingSoon',
                skipHistory: true
              },
              analytics: ANALYTICS.APP_ON_CLICK_START_TDC_PLUS_TDD
            },
            oc_offer_channel: {
              bind: 'go-to-credit-card-holder-page',
              link: {
                page: 'comingSoon',
                skipHistory: true
              },
              analytics: ANALYTICS.APP_ON_CLICK_START_TDC
            }
          }
        }
      }
    }]
  };

  return base;
};