'use strict';

module.exports = CONFIG => {
  const pageName = 'mobilePayment';
  const { getLocalCurrency, getPages, getCountry, getLanguage } = require('./common/helpers/');
  const nativeConnector = require('./common/nativeconnector');
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');
  const pages = getPages(CONFIG)(pageName);
  const analytics = require('./analytics/_mobilePayment')({});
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { cardsV1, hubPayments, sso } },
    payments: { mobilePayments: { onboardingUrl, faqsContentUrl } },
    native = false,
    aemHost,
    routes
  } = CONFIG;
  const generateCallEvents = (plugin) => sphericaPageUtils.isSpherica() ? `payments-mobile-payment-${plugin}-call` : `payments-mobile-payment-call-${plugin}`;
  const base = {
    hash: 'mobilePayment',
    currentPage: {
      url: routes[pageName],
      params: [
        'operation',
        'productId'
      ]
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true
      },
      propertiesSpherica: {
        headerFixed: true,
        relativeMain: true,
        extraHeaderClass: 'bg-light-grey',
        className: 'bg-light-grey'
      }
    },
    components: []
  };
  const widget = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@bbva-web-components-widgets/payments-mobile-payment',
    tag: 'payments-mobile-payment',
    render: 'litElement',
    properties: {
      native,
      localCurrency: getLocalCurrency(),
      country: getCountry(),
      language: getLanguage(),
      hideFeedbackFooter: true,
      host,
      requiredToken,
      cardApiVersion: cardsV1,
      cardsApiVersion: cardsV1,
      hubPaymentsApiVersion: hubPayments,
      singleSignOnApiVersion: sso,
      aemHost,
      contentFragmentPath: onboardingUrl,
      faqsContentFragmentPath: faqsContentUrl,
      showHelpFaqs: true,
      hasCDCVM: true,
      cellsConnections: {
        in: {
          sign_modal_cancelled: {
            bind: 'clearAndBack'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          device_accesses_device_id: {
            bind: 'setDeviceId'
          },
          global_device_get_device_platform_success: {
            bind: 'setDevicePlatform'
          },
          global_device_get_device_model_success: {
            bind: 'setDeviceModel'
          },
          global_device_get_device_nfc_status_success: {
            bind: 'setDeviceNfcStatus'
          },
          navigation_product_detail_to_mobile_payment: {
            bind: 'setOperativeParams'
          },
          navigation_settings_to_mobilepayment_setting: {
            bind: 'setOperativeParams'
          },
          navigation_to_mobile_payment: {
            bind: 'setOperativeParams'
          },
          mobile_payment_reset: {
            bind: 'resetOperative'
          },
          mobilePayment_local_card_custom_properties: {
            bind: 'localCardDmCustomProperties'
          },
          mobile_payment_operative_initiated: {
            bind: 'scrollIntoView'
          }
        },
        out: {
          mobile_payment_back_step: {
            bind: 'navigation-go-back',
            backStep: true
          },
          mobile_payment_welcome_page_opened: {
            bind: 'payments-mobile-payment-modal-onboarding-open',
            analytics: analytics.pageViews.onboarding
          },
          mobile_payment_card_digitized: {
            bind: 'payments-mobile-payment-card-success-digitize'
          },
          mobile_payment_navigated_into_detail: {
            bind: 'payments-mobile-payment-detail-navigate'
          },
          mobile_payment_open_faq: {
            bind: 'payments-mobile-payment-modal-help-open'
          },
          mobile_payment_activate_nfc: {
            bind: 'payments-mobile-payment-nfc-activate'
          },
          mobile_payment_unsubscribe_success: {
            bind: 'payments-mobile-payment-unsubscribe-succeed'
          },
          mobile_payment_card_not_elegible: {
            bind: 'payments-mobile-payment-modal-card-not-elegible-button-click'
          },
          mobile_payment_devices_register: {
            bind: 'payments-mobile-payment-devices-register'
          },
          mobilePayment_onboarding_last_item: {
            bind: 'onboarding-full-screen-carousel-last-item',
            analytics: analytics.pageViews.onboardingActiveService
          },
          mobilePayment_pending_expired_keys: {
            bind: 'payments-mobile-payment-modal-expired-keys-open',
            analytics: analytics.pageViews.expiredKeys
          },
          mobilePayment_pending_expired_keys_click: {
            bind: 'payments-mobile-payment-modal-expired-keys-button-click',
            analytics: analytics.internalLinks.expiredKeys
          },
          mobilePayment_pending_active_service: {
            bind: 'payments-mobile-payment-pending-activation-operation-open',
            analytics: analytics.pageViews.activeService
          },
          mobilePayment_pending_add_card: {
            bind: 'payments-mobile-payment-pending-addition-operation-open',
            analytics: analytics.pageViews.addCard
          },
          mobilePayment_settings_load: {
            bind: 'payments-mobile-payment-settings-load'
          },
          mobilePayment_security_check_changed: {
            bind: 'payments-mobile-payment-security-settings-change'
          },
          mobilePayment_unsubscribe_click: {
            bind: 'payments-mobile-payment-unsubscribe-click',
            analytics: analytics.internalLinks.unsubscribe
          },
          mobilePayment_card_not_elegible: {
            bind: 'payments-mobile-payment-modal-card-not-elegible-open',
            analytics: analytics.pageViews.cardNotAllowed
          },
          mobilePayment_call_bank: {
            bind: 'payments-mobile-payment-modal-call-bank-open',
            analytics: analytics.pageViews.activityNotPerformed
          },
          mobilePayment_active_service_modal_open_settings: {
            bind: 'payments-mobile-payment-modal-activate-service-open',
            analytics: analytics.pageViews.onboardingActiveService
          }
        },
        params: {
          operation: 'operation',
          productId: 'productId'
        }
      }
    }
  };
  const manager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-manager-mobile-payment',
    tag: 'bbva-manager-mobile-payment',
    render: 'litElement',
    properties: {
      pageName: 'mobilePayment',
      cellsConnections: {
        in: {
          __bridge_page_mobilePayment: {
            bind: 'initOperative'
          },
          __bridge_app: {
            bind: 'navigation'
          },
          mobile_payment_activate_nfc: {
            bind: 'openNfcConfig'
          },
          web_view_visibility: {
            bind: 'onResumeOperative'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          global_mobile_payment_is_virtual: {
            bind: 'isVirtualAndDigitalCard'
          },
          global_nativeconnector_payments_trustdevice_is_registered_success: {
            bind: 'isRegister'
          }
        },
        out: {
          global_nativesettings_open_setting: {
            bind: 'bbva-manager-mobile-payment-open-nfc-settings'
          },
          global_device_info_get_nfc_status: {
            bind: 'bbva-manager-mobile-payment-check-on-resume-operative'
          },
          mobilePayment_local_card_custom_properties: {
            bind: 'bbva-manager-mobile-payment-local-card-custom-properties'
          },
          mobilePayment_navigate_to_settings: {
            bind: 'bbva-manager-mobile-payment-navigation-mobile-payment-to-settings',
            link: {
              page: 'settings',
              cleanUntil: 'settings'
            }
          },
          mobilePayment_navigate_to_product_detail: {
            bind: 'bbva-manager-mobile-payment-navigation-mobile-payment-to-product-detail',
            link: {
              page: 'cardDetail',
              cleanUntil: 'cardDetail',
              params: {
                productId: 'productId'
              }
            }
          },
          mobile_payment_open_modal: {
            bind: 'bbva-manager-mobile-payment-open-modal'
          },
          mobile_payment_modal_set_label_header: {
            bind: 'set-label-header-add-to-bbva-pay'
          },
          mobile_payment_modal_set_microilustration: {
            bind: 'set-microilustration-add-to-bbva-pay'
          },
          mobile_payment_modal_set_label_title: {
            bind: 'set-label-title-add-to-bbva-pay'
          },
          mobile_payment_modal_set_label_body: {
            bind: 'set-label-body-add-to-bbva-pay'
          },
          mobile_payment_modal_set_label_button: {
            bind: 'set-label-button-add-to-bbva-pay'
          },
          mobile_payment_operative_initiated: {
            bind: 'init-page'
          },
          global_device_info_get_platform: {
            bind: 'init-page'
          },
          global_device_info_get_model: {
            bind: 'init-page'
          },
          mobile_payment_reset: {
            bind: 'reset'
          }
        },
        params: {
          operation: 'operation',
          productId: 'productId'
        }
      }
    }
  };
  const helpModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal',
    tagSpherica: 'bbva-help-modal-spherica',
    render: 'litElement',
    familyPath: '@bbva-web-components/bbva-help-modal',
    familyPathSpherica: '@glomo-web-components/bbva-spherica-wrapper',
    container: true,
    attributes: {
      'justify-content': 'center'
    },
    properties: {
      id: 'modalPagosMoviles',
      cellsConnections: {
        in: {
          mobile_payment_open_modal: {
            bind: 'open'
          },
          mobile_payment_modal_close_call: {
            bind: 'close'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'close'
          },
          mobile_payment_modal_set_label_header: {
            bind: 'headerText'
          },
          mobile_payment_modal_set_label_title: {
            bind: 'titleText'
          },
          mobile_payment_modal_set_microilustration: {
            bind: 'illustration'
          },
          mobile_payment_modal_set_label_body: {
            bind: 'bodyText'
          },
          mobile_payment_modal_set_label_button: {
            bind: 'buttonText'
          }
        },
        out: {
          mobile_payment_modal_close_call: {
            bind: 'help-modal-button-click'
          },
          mobile_payment_modal_click_back: {
            bind: 'help-modal-close-icon-click'
          },
          financial_overview_refresh: {
            bind: 'help-modal-close-icon-click'
          }
        }
      }
    },
    propertiesSpherica: {
      fullHeight: true,
      fixedFooter: true,
      titleIcon: 'spherica:close'
    }
  };
  nativeConnector.addMobilePaymentPluginConnections(widget, {
    getCardStatus: {
      method: 'checkDigitizeStatus',
      event: generateCallEvents('check-digitize-card')
    },
    enableCard: {
      method: 'setCardDigitizeStatus',
      event: generateCallEvents('digitize-card')
    },
    getFavoriteCard: {
      event: generateCallEvents('get-default-card')
    },
    setFavoriteCard: {
      event: generateCallEvents('default-card-selected')
    },
    setCdcvmForLvt: {
      method: 'changeSecuritySetting'
    },
    isCdcvmForLvt: {
      method: 'getSecuritySetting'
    },
    deleteDeviceLocal: {
      method: 'deleteDeviceLocalMobilePayment',
      event: generateCallEvents('delete-device-local-mobilepayment')
    }
  }, sphericaPageUtils.isSpherica());
  const analyticsManager = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-analyticmanager-payments',
    tag: 'bbva-analyticmanager-payments-mobile-payment',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          mobile_payment_reset: {
            bind: 'reset'
          },
          mobilePayment_settings_load: {
            bind: 'setOperativeLoaded'
          },
          ['global_nativeconnector_payments_trustdevice_login_success']: {
            bind: 'fireOperativeIsLoadedAndShowing'
          },
          ['global_nativeconnector_payments_trustdevice_are_keys_ready_success']: {
            bind: 'setAreKeysReady'
          },
          ['global_nativeconnector_payments_trustdevice_are_keys_ready_error']: {
            bind: 'setAreKeysExpired'
          },
          ['global_nativeconnector_payments_trustdevice_is_registered_success']: {
            bind: 'isRegister'
          },
          global_native_mobile_payments_connection_status: {
            bind: 'fireConnectionStatus'
          },
          widget_error_cancel_payments_mobile_payment: {
            bind: 'fireCancelServiceCall'
          },
          sign_modal_open: {
            bind: 'fireShowOtp'
          },
          widget_error_retry_mobilePayment: {
            bind: 'manageToFireCallAnalytics'
          },
          mobilePayment_security_check_changed: {
            bind: 'fireSecurityCheck'
          }
        },
        out: {
          mobilePayment_analytics_connection_status_success: {
            bind: 'bbva-analyticmanager-payments-mobile-payment-connection-success',
            analytics: analytics.pageViews.establishedConnection
          },
          mobilePayment_analytics_connection_status_failed: {
            bind: 'bbva-analyticmanager-payments-mobile-payment-connection-failed',
            analytics: analytics.pageViews.failedConnection
          },
          mobilePayment_analytics_cancel_service_call: {
            bind: 'bbva-analyticmanager-payments-mobile-payment-cancel-service-call',
            analytics: analytics.pageViews.activityNotPerformed
          },
          mobilePayment_analytics_show_otp: {
            bind: 'bbva-analyticmanager-payments-mobile-payment-show-otp',
            analytics: analytics.pageViews.otp
          },
          mobilePayment_analytics_show_settings_page: {
            bind: 'bbva-analyticmanager-payments-mobile-payment-settings-loaded',
            analytics: analytics.pageViews.unsubscribe
          },
          mobilePayment_analytics_security_on: {
            bind: 'bbva-analyticmanager-payments-mobile-payment-security-check-true',
            analytics: analytics.interactionLinks.securityOn
          },
          mobilePayment_analytics_security_off: {
            bind: 'bbva-analyticmanager-payments-mobile-payment-security-check-false',
            analytics: analytics.interactionLinks.securityOff
          }
        },
        params: {
          operation: 'operation'
        }
      }
    }
  };
  nativeConnector.addTrustDevicePluginConnections(widget, {
    preRegister: {
      event: generateCallEvents('preregister')
    },
    deleteDeviceLocal: {
      method: 'deleteDeviceLocalTrustDevice',
      event: generateCallEvents('delete-device-local-trustdevice')
    }
  }, sphericaPageUtils.isSpherica());
  base.components.push(
    widget,
    manager,
    analyticsManager,
    helpModal
  );
  errorAndSignWidgetConnector(CONFIG)(base)(widget.tag, {
    widgetId: pageName,
    cancelAfterErrorFunction: 'clearAndBack',
    addRetryErrorsFlag: false
  }, true);
  return sphericaPageUtils.spherize(base);
};
