'use strict';

module.exports = (CONFIG) => {
  const utils = require('./common/helpers/_utils');
  const COUNTRY = utils.getCountry(CONFIG);
  const PAGE_NAME = 'callMeBackAssistanceManagerSuccess';
  const PAGE_NAME_CHANNEL = 'call_me_back_assistance_manager_success';
  const pages = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const ANALYTICS = require('./analytics/_callMeBackAssistanceManager')(CONFIG);

  // eslint-disable-next-line new-cap
  const spinner = utils.SPINNER(CONFIG);

  const base = {
    hash: COUNTRY + PAGE_NAME,
    currentPage: {
      url: '/call-me-back-assistance-manager-success',
      params: []
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita',
      properties: {
        animationType: 'verticalUp',
        hasFooter: false,
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        fixOffsetScroll: 0,
        headerHeight: utils.headerHeight,
        cellsConnections: {
          in: {
          },
          out: {
          }
        }
      }
    },
    components: [
      spinner,
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: PAGE_NAME,
          cache: [ '' ],
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_app: {
                bind: 'navigation'
              },
              [`__bridge_page_${PAGE_NAME}`]: {
                bind: 'init'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_INIT_PAGE']: {
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
          rightIcon: 'coronita:close',
          titleName: 'call-me-back-assistance-manager-header',
          cellsConnections: {
            in: {},
            out: {
              [PAGE_NAME_CHANNEL + '_BACK_TO_PAGE']: {
                bind: 'click-right-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-schedule-call-manager',
        properties: {
          cellsConnections: {
            in: {
              [PAGE_NAME_CHANNEL + '_BACK_TO_PAGE']: {
                bind: '_exitPage'
              },
              [PAGE_NAME_CHANNEL + '_BACK_TO_PAGE_SUCCESS']: {
                bind: '_exitPage'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_EXIT_PAGE']: {
                bind: 'exit-call-me-back-assistance-manager-page',
                backStep: true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-successful-response',
        properties: {
          className: 'assitance-proof-update',
          withoutHead: true,
          hideDivider: true,
          cellsConnections: {
            in: {
              'call_me_back_assistance_manager_SUCCESS_PAGE': {
                bind: 'result'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_BACK_TO_PAGE_SUCCESS']: {
                bind: 'cells-successful-response-click-primary'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-analytics-personal-assistance-manager',
        familyPath: '@glomo-web-components/glomo-analytics-personal-assistance-manager',
        render: 'litElement',
        properties: {
          currentPage: 'call-me-back-assistance-manager-success',
          cellsConnections: {
            in: {
              'call_me_back_assistance_manager_SUCCESS_PAGE': {
                bind: 'firePageView'
              }
            },
            out: {
              [PAGE_NAME_CHANNEL + '_PAGE_VIEW_SCHEDULED_CALL']: {
                bind: 'analytics-page-view-call-me-back-assistance-manager-success',
                analytics: ANALYTICS.PAGE_VIEW_SCHEDULED_CALL
              }
            }
          }
        }
      }
    ]
  };

  return base;
};
