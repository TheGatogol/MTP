'use strict';
module.exports = (CONFIG) => {
  const pageName = 'crmAuthorizationCoords';
  const pages = require('./common/_pages')(CONFIG)(pageName);

  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: { customersV1 }
    },
    native = false
  } = CONFIG;
  const template = {
    tag: 'cells-template-coronita-spherica',
    properties: {
      disableEdgeSwipe: true,
      className: 'bg-light-grey'
    }
  };

  const widgetCrmGeolocation = {
    zone: 'app__main',
    type: 'UI',
    tag: 'bbva-widget-inapp-crm',
    familyPath: '@glomo-web-components/bbva-widget-inapp-crm',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      requiredOTP: true,
      customersApiVersion: customersV1,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'getCollectionFlags'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          }
        },
        out: {
          crm_authorization_coords_navigation_page_next: {
            bind: 'bbva-widget-inapp-crm-go-to-dashboard',
            link: {
              page: 'dashboard',
              cleanUntil: pageName
            }
          }
        }
      }
    }
  };

  const base = {
    hash: 'crm-authorization-coords',
    currentPage: {
      url: '/crm-authorization-coords'
    },
    pages,
    template,
    components: [
      widgetCrmGeolocation
    ]
  };

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');
  errorAndSignWidgetConnector(CONFIG)(base)('bbva-widget-inapp-crm');

  return base;
};
