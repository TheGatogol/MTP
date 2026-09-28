'use strict';
const { useNames, toUnderscoreCase } = require('./helpers/_utils');

const stopLossWidgetComponent = (
  config,
  operativeName,
  messageTypeId,
  nativeBackNavigationEnabled = false,
  exitOnBackNavigation = false
) => {
  const {
    native = false,
    nativeIos,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        campaigns
      }
    }
  } = config;

  const operativePrefix = toUnderscoreCase(operativeName).toLowerCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const analyticsAbandonedCart = require('../analytics/_abandonedCart.js')(operativeName);

  const stopLossWidget = {
    zone: 'app__main',
    type: 'UI',
    tag: 'card-origination-stop-loss-mx',
    familyPath: '@glomo-web-components/card-origination-stop-loss-mx',
    render: 'litElement',
    properties: {
      offerBenefitsApiVersion: campaigns,
      messageTypeId,
      host,
      requiredToken,
      native,
      iOSFixedHeader: nativeIos,
      attachToBody: true,
      maxServiceAttempts: 3,
      nativeBackNavigationEnabled,
      exitOnBackNavigation,
      cellsConnections: {
        in: {
          __bridge_cancelled_back_navigation: {
            bind: 'nativeBackNavigation'
          },
          [getChannelName('stop_loss_modal_offer_id_set')]: {
            bind: 'offerId'
          },
          [getChannelName('stop_loss_modal_title_set')]: {
            bind: 'productTitle'
          },
          [getChannelName('stop_loss_modal_open')]: {
            bind: 'openStopLoss'
          },
          [getChannelName('stop_loss_offer_benefit_id_set')]: {
            bind: 'offerBenefitId'
          }
        },
        out: {
          [getChannelName('stop_loss_offer_benefits_empty')]: {
            bind: 'card-origination-stop-loss-mx-dm-offer-benefits-empty'
          },
          [getChannelName('stop_loss_offer_benefit_set')]: {
            bind: 'offer-benefits-api-dm-fetch'
          },
          [getChannelName('stop_loss_offer_benefit_filtered')]: {
            bind: 'card-origination-stop-loss-mx-dm-offer-benefit-filtered'
          },
          [getChannelName('stop_loss_modal_abandoned_cart_skip')]: {
            bind: 'card-origination-stop-loss-mx-dm-cart-skip'
          },
          [getChannelName('stop_loss_modal_offer_return')]: {
            bind: 'card-origination-stop-loss-mx-offer-return'
          },
          [getChannelName('stop_loss_modal_native_back_navigation_offer_return')]: {
            bind: 'card-origination-stop-loss-mx-native-back-navigation-offer-return'
          },
          [getChannelName('stop_loss_modal_header_leave')]: {
            bind: 'card-origination-stop-loss-mx-header-leave',
            backStep: true,
            skipHistory: true
          },
          [getChannelName('stop_loss_modal_footer_leave')]: {
            bind: 'card-origination-stop-loss-mx-footer-leave',
            backStep: true,
            skipHistory: true
          },
          [getChannelName('stop_loss_modal_native_back_navigation_leave')]: {
            bind: 'card-origination-stop-loss-mx-native-back-navigation-leave',
            backStep: true,
            skipHistory: true
          }
        }
      }
    }
  };
  const stopLossAnalytics = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-card-origination-stop-loss-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-origination',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('get_offer')]: {
            bind: 'offer'
          },
          [getChannelName('init_sp')]: {
            bind: 'isWebPlusGlomo'
          },
          [getChannelName('stop_loss_offer_benefit_filtered')]: {
            bind: 'pageView'
          },
          [getChannelName('stop_loss_modal_offer_return')]: {
            bind: 'internalLinkReturn'
          },
          [getChannelName('stop_loss_modal_footer_leave')]: {
            bind: 'internalLinkLeave'
          }
        },
        out: {
          [getChannelName('stop_loss_modal_page_view')]: {
            bind: 'analytics-stop-loss-page-view',
            analytics: analyticsAbandonedCart.pageView()
          },
          [getChannelName('stop_loss_modal_internal_link')]: {
            bind: 'analytics-stop-loss-internal-link',
            analytics: analyticsAbandonedCart.internalLink()
          }
        }
      }
    }
  };
  return { stopLossWidget, stopLossAnalytics};
};

module.exports = {
  stopLossWidgetComponent
};
