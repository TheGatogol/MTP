'use strict';
module.exports = config => {
  const { createSpinner } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)('specialSalesModalPage');
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      mode: 'seamed',
      disableEdgeSwipe: true,
      animationType: 'verticalUp'
    }
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_specialSalesModalPage: {
            bind: 'init'
          }
        },
        out: {
          specialSalesModal_INIT_PAGE: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const dm = {
    zone: 'app__overlay',
    type: 'DM',
    tag: 'glomo-special-sales-dm',
    properties: {
      cellsConnections: {
        in: {
          specialSalesModal_INIT_PAGE: {
            bind: 'openModalConfirm'
          }
        },
        out: {
          close_control_veil: {
            bind: 'hide-spinner-event'
          },
          global_alert_manager_open_with_settings: {
            bind: 'special-sales-modal'
          }
        }
      }
    }
  };
  const base = {
    hash: 'special-sales-modal',
    currentPage: {
      url: '/special-sales-modal'
    },
    pages,
    template,
    components: [
      createSpinner(config),
      lifeCycle,
      dm
    ]
  };
  return base;
};
