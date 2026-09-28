'use strict';
module.exports = (CONFIG) => {
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, 'mtuException');

  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        limitsV1
      }
    },
    native = false,
    nativeIos = false
  } = CONFIG;

  const {
    headerHeight
  } = require('./common/helpers/_utils');

  const base = {
    hash: 'mtuException',
    currentPage: {
      url: '/mtu-exception'
    },
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        delayScrollTop: 500,
        animationType: 'verticalUp',
        disableEdgeSwipe: true,
        headerHeight,
        headerFixed: true,
        className: `bg-core-blue header-fixed ${nativeIos ? 'ios-top-padding' : ''}`,
        iOSFixedHeader: nativeIos,
        extraHeaderClass: 'bbva-core-blue'
      },
      propertiesSpherica: {
        className: nativeIos ? 'ios-top-padding' : '',
        headerHeight: nativeIos ? 0 : 8
      }
    },
    components: [
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-widget-user-transaction-amount',
        tagSpherica: 'bbva-widget-user-transaction-amount-spherica',
        familyPath: '@glomo-web-components/bbva-widget-user-transaction-amount',
        familyPathSpherica: '@glomo-web-components/bbva-widget-user-transaction-amount-spherica',
        render: 'litElement',
        properties: {
          host,
          apiVersion: limitsV1,
          requiredToken,
          requiredOTP: true,
          native,
          otpTimer: 120000,
          cellsConnections: {
            in: {
              global_mtu_set_otp_exception: {
                bind: 'setOtpMtuException'
              },
              global_mtu_exception_navigation: {
                bind: 'isVisibleLimitExceeded'
              }
            },
            out: {
              global_mtu_exception_back_navigation: {
                bind: 'bbva-widget-user-transaction-amount-back-navigation',
                backStep: true
              },
              global_mtu_navigation_confirm_limit: {
                bind: 'bbva-widget-user-transaction-amount-confirmation-max-limit-continue-button-resend-transaction',
                backStep: true
              }
            }
          }
        }
      }
    ]
  };

  return sphericaPageUtils.spherize(base);
};
