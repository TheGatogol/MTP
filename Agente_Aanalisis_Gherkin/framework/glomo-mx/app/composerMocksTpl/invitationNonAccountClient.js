'use strict';
module.exports = CONFIG => {
  const pages = require('./common/_pages')(CONFIG)('invitationNonAccountClient');
  const { nativeIos = false } = CONFIG;
  const analytics = require('./analytics/_invitationNonAccountClient.js')(CONFIG);

  const bbvaFeatureNonAccountNonClientMX = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-non-account-non-client-mx',
    familyPath: '@glomo-web-components/bbva-feature-non-account-non-client-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          __bridge_page_invitationNonAccountClient: {
            bind: 'init'
          }
        },
        out: {
          navigation_previuos_page: {
            bind: 'navigation-go-back',
            backStep: true
          },
          analitics_invitationNonAccountClient: {
            bind: 'init-page',
            analytics: analytics.advancedFootprintFlag('monoproduct.getYourAccount')
          }
        }
      }
    }
  };

  const base = {
    hash: 'mx-invitation-non-account-client',
    currentPage: {
      url: '/invitation-non-account-client'
    },
    pages: pages,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'dark-blue-bg',
        className: nativeIos ? 'ios-top-padding' : '',
        cellsConnections: {
          in: {
            invitationNonAccountClient_recalculate_header: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [ bbvaFeatureNonAccountNonClientMX ]
  };
  return base;
};