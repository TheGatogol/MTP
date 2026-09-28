'use strict';

module.exports = config => {

  const commonUtils = require('./common/helpers/_utils');
  // eslint-disable-next-line no-unused-vars
  const COUNTRY = commonUtils.getCountry(config);
  const PRODUCT = 'pointsRaffleFaq';
  const pages = require('./common/_pages')(config)('pointsRaffleFaq');
  const ANALYTICS = require('./analytics/_pointsRaffle')(config);
  const base = {
    hash: 'points-raffle-faq',
    currentPage: {
      url: 'points-raffle-faq',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        disableEdgeSwipe: true,
        mode: 'seamed',
        animationType: 'verticalUp',
        cellsConnections: {}
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'pointsRaffleFaq',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              ['__bridge_page_' + PRODUCT]: {
                bind: 'init'
              }
            },
            out: {
              [PRODUCT + '_INIT_PAGE']: {
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
          className: 'faqs-points-redeem',
          titleName: 'faqs-points-raffle-title-page',
          rightIcon: 'coronita:close',
          rightIconSize: 20,
          rightIconColor: '#121212',
          cellsConnections: {
            in: {},
            out: {
              points_raffle_faq_backstep: {
                bind: 'click-right-button',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'cells-product-selector',
        properties: {
          className: 'faqs-points-redeem',
          productsListTitle: 'faqs-points-raffle-title-list',
          products: [
            { id: 1, name: 'faqs-points-raffle-text-one' },
            { id: 2, name: 'faqs-points-raffle-text-two' },
            { id: 3, name: 'faqs-points-raffle-text-three' },
            { id: 4, name: 'faqs-points-raffle-text-four' }
          ],
          maxProducts: 10,
          cellsConnections: {
            in: {},
            out: {
              points_raffle_faq_open_selected_question: {
                bind: 'select-product'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-opx-points-raffle-dm',
        type: 'DM',
        properties: {
          cellsConnections: {
            in: {
              points_raffle_faq_open_selected_question: {
                bind: 'faqsResponse'
              }
            },
            out: {
              global_open_glomo_alert_manager_faq_raffle: {
                bind: 'faqs-response-event'
              },
              points_raffle_faqs_translated_question: {
                bind: 'faqs-translated-question-event'
              }
            },
            params: {
              raffleSimulateResponse: 'raffleSimulateResponse'
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
              [PRODUCT + '_INIT_PAGE']: {
                bind: 'fireFaqsPageView'
              },
              points_raffle_faqs_translated_question: {
                bind: 'fireFaqsQuestion'
              }
            },
            out: {
              [PRODUCT + '_fire_faqs_page_view']: {
                bind: 'analytics-faqs-page-view',
                analytics: ANALYTICS.FAQS_PAGE_VIEW
              },
              [PRODUCT + '_fire_faqs_question']: {
                bind: 'analytics-faqs-question',
                analytics: ANALYTICS.FAQS_QUESTION
              }
            }
          }
        }
      }
    ]
  };

  return base;

};
