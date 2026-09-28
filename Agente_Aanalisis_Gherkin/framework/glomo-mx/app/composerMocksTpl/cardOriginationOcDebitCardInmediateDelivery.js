'use strict';

module.exports = CONFIG => {
  const pageName = 'cardOriginationOcDebitCardInmediateDelivery';
  const featureName = 'card-origination-oc-debit-card-inmediate-delivery-page';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      publicSettingsId,
      publicSettingsHost,
      versions
    },
    nativeIos = false,
    native = false,
    aemHost
  } = CONFIG;
  const analytics = require('./analytics/_ocDebitCardImmediateDelivery')(CONFIG);
  const { cellsConnectionStatus } = require('./common/_cross-components');
  const {
    getLanguage,
    getLocalCurrency
  } = require('./common/helpers/_utils');
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const base = {
    hash: pageName,
    currentPage: {
      url: '/card-origination-oc-debit-card-inmediate-delivery'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        className: 'bg-dark-core-blue',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : '',
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        cellsConnections: {
          in: {
            [pageName + '_init_page']: {
              bind: 'recalculateHeader'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: '',
        className: `${nativeIos ? 'ios-top-padding' : ''}`,
        headerFixed: false
      }
    },
    components: []
  };
  const lifeCycle = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'DM',
    properties: {
      pageName,
      customInitEvents: {
        'swipe-menu-enabled': false
      },
      private: true,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          }
        },
        out: {
          [pageName + '_init_page']: {
            bind: 'init-page'
          },
          [pageName + '_reset_page']: {
            bind: 'reset'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };
  const cardOriginationOcDebitCardInmediateDelivery = {
    zone: 'app__main',
    type: 'UI',
    tag: 'card-origination-oc-debit-card-inmediate-delivery',
    familyPath: '@glomo-web-components/card-origination-oc-debit-card-inmediate-delivery',
    familyPathSpherica: '@bbva-web-components-widgets/card-origination-oc-debit-card-inmediate-delivery',
    render: 'litElement',
    propertiesSpherica: {
      iOSFixedHeader: nativeIos
    },
    properties: {
      host,
      native,
      nativeIOS: nativeIos,
      requiredToken,
      publicSettingsKey: 'app_settings_glomo',
      publicSettingsId,
      publicSettingsHost,
      localCurrency: getLocalCurrency(),
      currencyCode: getLocalCurrency(),
      language: getLanguage(),
      catalogId: 'SEPOMEX',
      serviceType: 'D',
      cardDeliveriesApiVersion: versions.cardDeliveriesV1,
      customerAddressesApiVersion: versions.customersV1,
      customerContactDetailsApiVersion: versions.contactDetailsV1,
      cardCoverApiVersion: versions.cardCoversV3,
      cardProposeDeliveryApiVersion: versions.cardProposeDeliveryV3,
      accountsApiVersion: versions.accounts,
      placesApiVersion: versions.placesV1,
      publicSettingsApiVersion: versions.publicSettings,
      aemHost,
      aemPath: 'content/caas/mexico/glomo/servicing/listcards.model.json',
      cellsConnections: {
        in: {
          card_Detail_manager_product_id: {
            bind: 'cardId'
          },
          card_Detail_manager_related_id: {
            bind: 'accountId'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          [pageName + '_init_page']: {
            bind: 'init'
          },
          sign_modal_cancelled: {
            bind: 'showMultistep'
          },
          cells_to_native_modal_closed: {
            bind: 'showMultistep'
          },
          card_Detail_product_id: {
            bind: 'productId'
          },
          card_Detail_commission: {
            bind: 'commission'
          },
          card_Detail_simple_code: {
            bind: 'relatedContracts'
          },
          card_Detail_delivery_time: {
            bind: 'deliveryTime'
          },
          global_open_selector_native_success: {
            bind: 'nativeOptionSelected'
          },
          connection_status_cardOriginationOcDebitCardInmediateDelivery_offline: {
            bind: 'connectionStatuosOffline'
          },
          connection_status_cardOriginationOcDebitCardInmediateDelivery_online: {
            bind: 'connectionStatuosOnline'
          }
        },
        out: {
          [pageName + '_go_exit']: {
            bind: featureName + '-multistep-leave',
            backStep: true,
            'forward-to-native': true
          },
          [pageName + 'finished']: {
            bind: featureName + '-leave',
            backStep: true,
            'forward-to-native': true
          },
          [pageName + 'load_card_offer']: {
            bind: featureName + '-card-offer-page-visit'
          },
          [pageName + 'continue_step']: {
            bind: featureName + '-card-offer-button-default-finish'
          },
          [pageName + 'load_multistep_flow']: {
            bind: featureName + '-multistep-flow-page-visit'
          },
          [pageName + 'load_step_customization']: {
            bind: featureName + '-multisteps-flow-customization-page-view'
          },
          [pageName + 'load_summary']: {
            bind: featureName + '-multisteps-flow-card-personalization-finish'
          },
          [pageName + 'operation_number']: {
            bind: featureName + '-operation-number-success'
          },
          [pageName + 'request_card']: {
            bind: featureName + '-success-page-view'
          },
          [pageName + 'modal_error']: {
            bind: featureName + '-error-page-view'
          },
          global_open_selector_native: {
            bind: featureName + '-colony-selector-native-selector-select'
          },
          [pageName + 'show_otp']: {
            bind: featureName + '-api-usage-otp-page-view'
          },
          [pageName + 'error_otp']: {
            bind: featureName + '-api-usage-otp-error-page-view'
          }
        }
      }
    }
  };

  const mobileShowInfo = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-show-info',
    familyPath: '@glomo-web-components/bbva-nativeconnector-show-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_open_selector_native: {
            bind: 'nativeListModal'
          }
        },
        out: {
          global_open_selector_native_success: {
            bind: 'show-info-native-list-modal-success'
          }
        }
      }
    }
  };

  const analyticManagerCardOriginationDelivery = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-card-origination-oc-debit-card-inmediate-delivery',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-origination',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          card_Detail_commission: {
            bind: 'commission'
          },
          [pageName + 'operation_number']: {
            bind: 'operationNumber'
          },
          [pageName + 'load_card_offer']: {
            bind: 'appPageVisit'
          },
          [pageName + 'continue_step']: {
            bind: 'appStepSelectAddress'
          },
          [pageName + 'load_multistep_flow']: {
            bind: 'appStarted'
          },
          [pageName + 'load_step_customization']: {
            bind: 'appStepCustomizeCard'
          },
          [pageName + 'load_summary']: {
            bind: 'appStepConfirm'
          },
          [pageName + 'request_card']: {
            bind: 'appCompleted'
          },
          [pageName + 'modal_error']: {
            bind: 'errorPageLoadSection'
          },
          [pageName + 'show_otp']: {
            bind: 'footprintOTP'
          },
          [pageName + 'error_otp']: {
            bind: 'errorPageLoadToken'
          }
        },
        out: {
          [pageName + '_page_visit']: {
            bind: 'analytics-page-visit',
            analytics: analytics.appPageVisit
          },
          [pageName + '_analytics_started']: {
            bind: 'analytics-started',
            analytics: analytics.appStarted
          },
          [pageName + '_analytics_app_step_select_address']: {
            bind: 'analytics-app-step-select-address',
            analytics: analytics.appStepSelectAddress
          },
          [pageName + '_analytics_app_step_customize_card']: {
            bind: 'analytics-app-step-customize-card',
            analytics: analytics.appStepCustomizeCard
          },
          [pageName + '_analytics_app_step_confirm']: {
            bind: 'analytics-app-step-confirm',
            analytics: analytics.appStepConfirm
          },
          [pageName + '_analytics_app_complete']: {
            bind: 'analytics-app-complete',
            analytics: analytics.appCompleted
          },
          [pageName + '_analytics_footprint_otp']: {
            bind: 'analytics-footprint-otp',
            analytics: analytics.footprintPageViewOTP
          },
          [pageName + '_analytics_error_load_page']: {
            bind: 'analytics-error-load-page',
            analytics: analytics.errorPageLoadSection
          },
          [pageName + '_analytics_error_load_token']: {
            bind: 'analytics-error-load-token',
            analytics: analytics.errorPageLoadToken
          }
        }
      }
    }
  };

  base.components.push(
    lifeCycle,
    cardOriginationOcDebitCardInmediateDelivery,
    mobileShowInfo,
    cellsConnectionStatus(pageName),
    analyticManagerCardOriginationDelivery
  );
  const signConnector = require('./common/_widget-sign-connector')(CONFIG)(base);
  signConnector('card-origination-oc-debit-card-inmediate-delivery');
  return sphericaPageUtils.spherize(base);
};
