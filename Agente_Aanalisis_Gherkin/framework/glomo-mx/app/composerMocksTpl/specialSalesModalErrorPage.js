'use strict';
module.exports = config => {
  const { createSpinner } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)('specialSalesModalErrorPage');
  const template = {
    tag: 'cells-template-coronita',
    properties: {
      mode: 'seamed',
      disableEdgeSwipe: true,
      animationType: 'verticalUp'
    }
  };
  const dm = {
    zone: 'app__overlay',
    type: 'DM',
    tag: 'glomo-special-sales-dm',
    properties: {
      cellsConnections: {
        in: {
          SPECIALSALES_ON_ERROR_RESPONSE: {
            bind: 'specialSalesError'
          }
        },
        out: {
          close_control_veil: {
            bind: 'hide-spinner-event'
          },
          global_alert_manager_open_with_settings: {
            bind: 'special-sales-modal-error'
          }
        }
      }
    }
  };
  const base = {
    hash: 'special-sales-modal-error',
    currentPage: {
      url: '/special-sales-modal-error'
    },
    pages,
    template,
    components: [
      createSpinner(config),
      dm
    ]
  };
  return base;
};
