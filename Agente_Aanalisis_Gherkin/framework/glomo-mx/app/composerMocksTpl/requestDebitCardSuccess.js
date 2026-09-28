'use strict';

module.exports = CONFIG => {
  const PAGE_NAME = 'requestDebitCardSuccess';
  const utils = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(CONFIG)('requestDebitCardSuccess');

  const TEMPLATE = {
    tag: 'cells-template-coronita',
    properties: {
      animationType: 'verticalUp',
      headerHeight: utils.headerHeight,
      disableEdgeSwipe: true,
      headerFixed: true
    }
  };

  const LIFE_CICLE = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: 'requestDebitCardSuccess',
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_requestDebitCardSuccess: {
            bind: 'init'
          }
        },
        out: {
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const HEADER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    properties: {
      className: 'header--core',
      rightIcon: 'coronita:close',
      titleName: 'bbva-multistep-rdc-header',
      cellsConnections: {
        out: {
          [PAGE_NAME + '_BACK_BUTTON']: {
            bind: 'click-right-button'
          }
        }
      }
    }
  };

  const GLOMO_NAVIGATION = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      backAction: 'header-left-button',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_BACK_BUTTON']: {
            bind: 'goBack'
          }
        },
        out: {
          global_refresh_dashboard_generic: {
            bind: 'header-left-button',
            'forward-to-native': true
          },
          back_to_dashboard: {
            bind: 'header-left-button',
            backStep: true
          }
        }
      }
    }
  };

  const SUCCESSFUL = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-successful-response',
    properties: {
      hideDivider: true,
      withoutHead: true,
      formatDate: 'DD MMMM YYYY, hh:mm [h]',
      cellsConnections: {
        in: {
          [PAGE_NAME + '_SET_RESULT']: {
            bind: 'result'
          }
        },
        out: {
          [PAGE_NAME + '_BACK_BUTTON']: {
            bind: 'cells-successful-response-click-primary'
          }
        }
      }
    }
  };

  const base = {
    hash: PAGE_NAME,
    currentPage: {
      url: '/request-debit-card-success'
    },
    pages: pages,
    template: TEMPLATE,
    components: [
      LIFE_CICLE,
      HEADER,
      GLOMO_NAVIGATION,
      SUCCESSFUL
    ]
  };

  return base;

};
