'use strict';

module.exports = config => {
  const {
    createSpinner
  } = require('./common/helpers/_utils');
  const pages = require('./common/_pages')(config)('insuranceRemoteBanker');
  let base = {};

  const template = {
    tag: 'cells-template-coronita',
    properties: {
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerFixed: true,
      iOSFixedHeader: true,
      animationType: 'static'
    }
  };

  const remoteBanker = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-oc-life-insurance-remote-banker-mx',
    familyPath: '@glomo-web-components/bbva-controller-oc-life-insurance-remote-banker-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_from_deep_link_to_operations: {
            bind: 'handleInsuranceNotificationBody'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'handleInsuranceNotificationBody'
          }
        },
        out: {
          insurance_remote_banker_navigate_to: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-insurances-navigate-to',
            link: {
              page: {
                bind: 'page'
              },
              skipHistory: true,
              params: {
                quotationId: 'quotationId',
                adviceId: 'adviceId'
              }
            }
          },
          insurance_remote_banker_malformed_notification_content: {
            bind: 'bbva-controller-oc-life-insurance-remote-banker-mx-malformed-notification-content'
          },
          open_control_veil: {
            bind: 'show-loader'
          },
          close_control_veil: {
            bind: 'clear-loader'
          }
        }
      }
    }
  };

  base = {
    hash: 'insurance-remote-banker',
    currentPage: {
      url: '/insurance-remote-banker'
    },
    pages,
    template,
    components: [
      createSpinner(config),
      remoteBanker
    ]
  };

  return base;
};
