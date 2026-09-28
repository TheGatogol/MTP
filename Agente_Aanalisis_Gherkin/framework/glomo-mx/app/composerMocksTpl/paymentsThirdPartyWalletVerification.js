'use strict';

module.exports = CONFIG => {
  const {
    getPages,
    headerHeightMinimum,
    kebabCase
  } = require('./common/helpers');
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector.js');
  const pageName = 'paymentsThirdPartyWalletVerification';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const analytics = require('./analytics/_paymentsThirdPartyWalletVerification.js')(CONFIG);
  const { globalServices: { host, requiredToken = 'tsec', versions: { cardsV1: cardsApiVersion, hubPaymentsV1: hubPaymentsApiVersion } }, native = false, nativeIos: isNativeIos = false, routes } = CONFIG;

  const walletType = isNativeIos ? 'apple' : 'google';

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      animationType: 'verticalUp',
      drawerWidth: '100%',
      className: isNativeIos ? 'ios-top-padding' : '',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      headerHeight: headerHeightMinimum,
      headerFixed: true,
      iOSFixedHeader: isNativeIos
    }
  };

  const widget = {
    zone: 'app__main',
    type: 'UI',
    tag: 'payments-third-party-wallet-verification',
    familyPath: '@bbva-web-components-widgets/payments-third-party-wallet-verification',
    render: 'litElement',
    properties: {
      wallet: walletType,
      requiredToken,
      host,
      country: 'mx',
      native,
      cardsApiVersion,
      hubPaymentsApiVersion,
      cellsConnections: {
        in: {
          global_nativeconnector_third_party_wallet_card_requires_verification_success: {
            bind: 'pendingVerification'
          },
          sign_modal_cancelled: {
            bind: 'clearLoader'
          }
        },
        out: {
          payments_third_party_wallet_verification_cards_request_success: {
            bind: 'payments-third-party-wallet-verification-cards-request-success',
            analytics: analytics.pageViews.cardList
          },
          payments_third_party_wallet_verification_success_verify: {
            bind: 'payments-third-party-wallet-verification-success-verify'
          },
          payments_third_party_wallet_verification_navigate_to_dashboard: {
            bind: 'payments-third-party-wallet-verification-back-step-navigate',
            link: {
              page: 'dashboard'
            }
          },
          payments_third_party_wallet_verification_verify_card: {
            bind: 'cards-list-cards-select-card'
          },
          global_action_launcher_dialer: {
            bind: 'payments-third-party-wallet-verification-phone-call'
          },
          payments_third_party_wallet_verification_request_verify: {
            bind: 'payments-third-party-wallet-verification-request-verify'
          },
          payments_third_party_wallet_verification_modal_card_not_available_open: {
            bind: 'payments-third-party-wallet-verification-modal-card-not-available-open',
            analytics: analytics.pageViews.notAvailableCard
          }
        }
      }
    },
    propertiesSpherica: {
      wallet: walletType,
      requiredToken,
      host,
      country: 'mx',
      native,
      maxTries: 3,
      cardsApiVersion,
      hubPaymentsApiVersion,
      cellsConnections: {
        in: {
          __bridge_page_paymentsThirdPartyWalletVerification: {
            bind: 'handlePageAttachment'
          },
          global_nativeconnector_third_party_wallet_card_requires_verification_success: {
            bind: 'pendingVerification'
          },
          sign_modal_cancelled: {
            bind: 'clearLoader'
          }
        },
        out: {
          global_nativeconnector_third_party_wallet_card_requires_verification: {
            bind: 'payments-third-party-wallet-verification-init-page-start'
          },
          payments_third_party_wallet_verification_cards_request_success: {
            bind: 'payments-third-party-wallet-verification-cards-request-success',
            analytics: analytics.pageViews.cardList
          },
          payments_third_party_wallet_verification_success_verify: {
            bind: 'payments-third-party-wallet-verification-success-verify'
          },
          payments_third_party_wallet_verification_navigate_to_dashboard: {
            bind: 'navigation-go-back',
            link: {
              page: 'dashboard'
            }
          },
          payments_third_party_wallet_verification_verify_card: {
            bind: 'cards-list-cards-select-card'
          },
          global_action_launcher_dialer: {
            bind: 'payments-third-party-wallet-verification-phone-call'
          },
          payments_third_party_wallet_verification_request_verify: {
            bind: 'payments-third-party-wallet-verification-request-verify'
          },
          payments_third_party_wallet_verification_modal_card_not_available_open: {
            bind: 'payments-third-party-wallet-verification-modal-card-not-available-open',
            analytics: analytics.pageViews.notAvailableCard
          }
        }
      }
    }
  };

  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-payments',
    tag: 'bbva-analyticmanager-tpw-verification',
    render: 'litElement',
    properties: {
      wallet: walletType,
      cellsConnections: {
        in: {
          payments_third_party_wallet_verification_request_verify: {
            bind: 'fireAppStartedClickVerify'
          },
          payments_third_party_wallet_verification_success_verify: {
            bind: 'fireAppCompletedVerifiedCard'
          },
          payments_third_party_wallet_verification_navigate_to_dashboard: {
            bind: 'reset'
          }
        },
        out: {
          payments_third_party_wallet_verification_analytics_click_on_verify_credit_card: {
            bind: 'bbva-analyticmanager-payments-tpw-verification-click-verify-credit-card',
            analytics: analytics.internalLinks.credit
          },
          payments_third_party_wallet_verification_analytics_click_on_verify_debit_card: {
            bind: 'bbva-analyticmanager-payments-tpw-verification-click-verify-debit-card',
            analytics: analytics.internalLinks.debit
          },
          payments_third_party_wallet_verification_analytics_success_verify_credit_card: {
            bind: 'bbva-analyticmanager-payments-tpw-verification-verified-credit-card',
            analytics: analytics.pageViews.creditVerificationSuccess
          },
          payments_third_party_wallet_verification_analytics_success_verify_debit_card: {
            bind: 'bbva-analyticmanager-payments-tpw-verification-verified-debit-card',
            analytics: analytics.pageViews.debitVerificationSuccess
          }
        }
      }
    }
  };

  const cellsHandleLifecycle =  {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName,
      private: true,
      tokenName: requiredToken,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          __bridge_page_paymentsThirdPartyWalletVerification: {
            bind: 'init'
          }
        },
        out: {
          global_nativeconnector_third_party_wallet_card_requires_verification: {
            bind: 'init-page'
          }
        }
      }
    }
  };

  const components = [
    widget,
    analyticsManager
  ];

  if (!sphericaPageUtils.isSpherica()) {
    components.unshift(cellsHandleLifecycle);
  }

  const base = {
    hash: kebabCase(pageName),
    currentPage: {
      url: routes[pageName]
    },
    pages: getPages(CONFIG)(pageName),
    template,
    components
  };

  const spherizedBase = sphericaPageUtils.spherize(base);

  errorAndSignWidgetConnector(CONFIG)(base)(widget.tag, {
    widgetId: pageName,
    cancelAfterErrorFunction: 'clearLoader',
    navigateAfterErrorFunction: 'navigateBack'
  });
  return spherizedBase;
};
