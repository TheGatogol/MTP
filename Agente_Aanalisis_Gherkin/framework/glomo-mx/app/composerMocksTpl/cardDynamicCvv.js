'use strict';
module.exports = config => {
  const { useNames } = require('./common/helpers/_utils');
  const pageName = 'cardDynamicCvv';
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);
  const operativePrefix = pageName.toUpperCase();
  const [ getChannelName ] = useNames(operativePrefix);
  const pages = require('./common/_pages')(config)(pageName);
  const isNativeIos = config.nativeIos || false;
  const keyLocalStorage = 'dynamic_cvv_card_visited';
  const _localStorage = require('./common/_local-storage');
  const analyticsAdditionalCardDetail = require('./analytics/_additionalCardDetail')();

  const {
    pageVisit,
    dynamicCvvLink,
    getInteractionLinkCVV,
    getErrorCvv } = require('./analytics/_cardDynamicCvv')(config);
  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'dark-blue-bg',
      disableEdgeSwipe: true
    },
    propertiesSpherica: {
      className: 'bg-light-grey',
      disableEdgeSwipe: true,
      extraHeaderClass: 'bg-light-grey'
    }
  };

  const bbvaWidgetSeeDynamicCvv = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-widget-see-dynamic-cvv',
    familyPathSpherica: '@glomo-web-components/bbva-widget-see-dynamic-cvv-spherica',
    tag: 'bbva-widget-see-dynamic-cvv',
    tagSpherica: 'bbva-widget-see-dynamic-cvv-spherica',
    render: 'litElement',
    properties: {
      defaultImage: 'images/cards/cardFrontDefault.png',
      evadeServiceLaunch: true,
      toastTime: 3000,
      requiredToken: config.globalServices.requiredToken || 'tsec',
      host: config.globalServices.host,
      native: !!config.native,
      cellsConnections: {
        in: {
          global_send_financial_overview_to_cvv: {
            bind: 'financialOverview'
          },
          global_card_digital_card_associated_data: {
            bind: 'digitalProductId'
          },
          global_financial_overview_details: {
            bind: 'financialOverview'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'navigationDeepLink'
          },
          navigation_from_deep_link_from_notification_detail: {
            bind: 'notificationCenterDeepLink'
          },
          [getChannelName('get_local_storage_card_visited_succes')]: {
            bind: 'setFlagsLocalStorage'
          },
          [getChannelName('set_local_storage_card_visited_succes')]: {
            bind: 'setFlagsLocalStorage'
          },
          [getChannelName('set_card_cvv')]: {
            bind: 'setCvvCard'
          },
          [getChannelName('set_public_key')]: {
            bind: 'publicKey'
          },
          CARDDYNAMICCVV__return_to_previous_page: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'handleBackNavigation'
          }
        },
        out: {
          [getChannelName('_return_to_previous_page')]: {
            bind: 'bbva-widget-see-dynamic-cvv-return-previus-page',
            backStep: true
          },
          [getChannelName('request_decrypt_from_get_response')]: {
            bind: 'bbva-widget-see-dynamic-cvv-request-decrypt'
          },
          [getChannelName('update_local_storage_card_visited')]: {
            bind: 'bbva-widget-see-dynamic-cvv-set-local-storage-flags'
          },
          financial_overview_refresh: {
            bind: 'card-activation-api-dm-update',
            'forward-to-native': true
          },
          dashboard_refresh_financial_overview: {
            bind: 'card-activation-api-dm-update'
          },
          CARDDYNAMICCVV_page_visited: {
            bind: 'bbva-widget-see-dynamic-cvv-analytics-page-visited',
            analytics: pageVisit
          },
          CARDDYNAMICCVV_show_cvv_card: {
            bind: 'bbva-widget-see-dynamic-cvv-analytics-show-cvv',
            analytics: dynamicCvvLink
          },
          CARDDYNAMICCVV_turn_off_on_card: {
            bind: 'bbva-widget-see-dynamic-cvv-analytics-turn-off-on-cvv',
            analytics: dynamicCvvLink
          },
          bbva_card_dynamic_cvv_securess_analytics_cvv: {
            bind: 'bbva-widget-see-dynamic-cvv-analytics-cvv'
          },
          bbva_card_dynamic_cvv_securess_analytics_view_cvv_error: {
            bind: 'bbva-widget-see-dynamic-cvv-dm-analytics-operation-error'
          }
        },
        params: {
          digitalProductId: 'digitalProductId'
        }
      }
    },
    propertiesSpherica: {
      newCellsConnections: {
        add: {
          in: {
            __bridge_cancelled_back_navigation: {
              bind: 'manageBackNavigation'
            }
          },
          out: {
            financial_overview_refresh: {
              bind: 'bbva-widget-see-dynamic-cvv-refresh-data',
              'forward-to-native': true
            },
            CARDDYNAMICCVV__return_to_previous_page: {
              bind: 'bbva-widget-see-dynamic-cvv-spherica-return-previus-page',
              backStep: true
            }
          }
        }
      }
    }
  };

  const bbvaAnalyticsManagerCardDetail = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-card-dynamic-cvv',
    familyPath: '@glomo-web-components/bbva-analyticmanager-card-information',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          bbva_card_dynamic_cvv_securess_analytics_cvv: {
            bind: 'fireAdvancedFingerprintToggleCvvVisibility'
          },
          bbva_card_dynamic_cvv_securess_analytics_view_cvv_error: {
            bind: 'fireAdvancedFingerprintCvvError'
          }
        },
        out: {
          additional_card_detail_analytics_view_cvv: {
            bind: 'analytics-advanced-fingerprint-visibility-adicional-view-cvv',
            analytics: analyticsAdditionalCardDetail.watchCVVinternalLink
          },
          additional_card_detail_analytics_hide_cvv: {
            bind: 'analytics-advanced-fingerprint-visibility-adicional-hide-cvv',
            analytics: analyticsAdditionalCardDetail.hideCvvInternalLink
          },
          additional_card_dynamic_cvv_error: {
            bind: 'analytics-advanced-fingerprint-cvv-error-adicional',
            analytics: analyticsAdditionalCardDetail.getAdvancedFootprintErrorCVV
          },
          bbva_card_analytics_credit_page_view_enterprise_cvv: {
            bind: 'analytics-advanced-fingerprint-visibility-credit-enterprise-view-cvv',
            analytics: getInteractionLinkCVV('onEnterpriseCredit')
          },
          bbva_card_analytics_debit_enterprise_view_request_cvv: {
            bind: 'analytics-advanced-fingerprint-visibility-debit-enterprise-view-cvv',
            analytics: getInteractionLinkCVV('onEnterpriseDebit')
          },
          bbva_card_analytics_credit_enterprise_view_hide_cvv: {
            bind: 'analytics-advanced-fingerprint-visibility-credit-enterprise-hide-cvv',
            analytics: getInteractionLinkCVV('offEnterpriseCredit')
          },
          bbva_card_analytics_debit_enterprise_view_hide_cvv: {
            bind: 'analytics-advanced-fingerprint-visibility-debit-enterprise-hide-cvv',
            analytics: getInteractionLinkCVV('offEnterpriseDebit')
          },
          bbva_card_analytics_page_view_credit_enterprise_cvv_error: {
            bind: 'analytics-advanced-fingerprint-cvv-error-credit-enterprise',
            analytics: getErrorCvv('credito')
          },
          bbva_card_analytics_page_view_debit_enterprise_cvv_error: {
            bind: 'analytics-advanced-fingerprint-cvv-error-debit-enterprise',
            analytics: getErrorCvv('debito')
          }
        }
      }
    }
  };

  const bbvaWidgetSeeDynamicCvvHandleNative = {
    zone: 'app__main',
    type: 'UI',
    familyPath: '@glomo-web-components/bbva-widget-see-dynamic-cvv',
    familyPathSpherica: '@glomo-web-components/bbva-widget-see-dynamic-cvv-spherica',
    tag: 'bbva-widget-see-dynamic-cvv-handler-native',
    tagSpherica: 'bbva-widget-see-dynamic-cvv-handler-native',
    render: 'litElement',
    properties: {
      environment: config.environment,
      localStorageKeyCard: keyLocalStorage,
      isNativeIos,
      host: config.globalServices.host,
      native: !!config.native,
      cellsConnections: {
        in: {
          ['__bridge_page_' + pageName]: {
            bind: 'init'
          },
          [`global_storage_get_${keyLocalStorage}_success`]: {
            bind: 'getFromLocalStorageSuccess'
          },
          [`global_storage_get_${keyLocalStorage}_error`]: {
            bind: 'getFromLocalStorageError'
          },
          [`global_storage_set_${keyLocalStorage}_success`]: {
            bind: 'setFromLocalStorageSucces'
          },
          [`global_storage_set_${keyLocalStorage}_error`]: {
            bind: 'setFromLocalStorageError'
          },
          [getChannelName('request_pub_key_generated')]: {
            bind: 'generatedPubKeysSuccess'
          },
          [getChannelName('request_error_pub_key')]: {
            bind: 'errorGetPubKey'
          },
          [getChannelName('request_decrypted_success')]: {
            bind: 'generateCvvDecryptSuccess'
          },
          [getChannelName('request_decrypted_error')]: {
            bind: 'generateCvvDecryptError'
          },
          [getChannelName('request_decrypt_from_get_response')]: {
            bind: 'generateCvvDecrypt'
          },
          [getChannelName('update_local_storage_card_visited')]: {
            bind: 'setLocalStorageCard'
          },
          [getChannelName('generic_error')]: {
            bind: 'onError'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-get-from-local-storage-card'
          },
          global_set_in_storage: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-set-in-local-storage-card'
          },
          [getChannelName('get_local_storage_card_visited_succes')]: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-get-from-local-storage-success'
          },
          [getChannelName('set_local_storage_card_visited_succes')]: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-set-from-local-storage-success'
          },
          [getChannelName('request_generate_public_key')]: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-generate-pub-keys'
          },
          [getChannelName('set_card_cvv')]: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-cvv-card'
          },
          [getChannelName('request_decrypt_cvv')]: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-generate-cvv-decrypt'
          },
          [getChannelName('set_public_key')]: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-succes-pub-keys'
          },
          [getChannelName('generic_error')]: {
            bind: 'bbva-widget-see-dynamic-cvv-handler-native-generic-error'
          }
        }
      }
    }
  };

  const NativeConnectorCipher = {
    zone: 'app__main',
    tag: 'cells-nativeconnector-cipher',
    type: 'DM',
    properties: {
      isNative: config.native || false,
      cellsConnections: {
        in: {
          [getChannelName('request_generate_public_key')]: {
            bind: 'generateKeyPair'
          },
          [getChannelName('request_decrypt_cvv')]: {
            bind: 'pinCipherDecrypt'
          }
        },
        out: {
          [getChannelName('request_pub_key_generated')]: {
            bind: 'pin-cipher-public-key-modulus-success'
          },
          [getChannelName('request_error_pub_key')]: {
            bind: 'pin-cipher-public-key-modulus-error'
          },
          [getChannelName('request_decrypted_success')]: {
            bind: 'pin-cipher-decrypt-success'
          },
          [getChannelName('request_decrypted_error')]: {
            bind: 'pin-cipher-decrypt-error'
          }
        }
      }
    }
  };

  const base = {
    hash: 'dynamic-cvv',
    currentPage: {
      url: '/card/:productId/dynamic-cvv'
    },
    pages,
    template,
    components: [
      bbvaWidgetSeeDynamicCvv,
      bbvaWidgetSeeDynamicCvvHandleNative,
      bbvaAnalyticsManagerCardDetail
    ]
  };

  if (config.native) {
    base.components.push(NativeConnectorCipher);
  }

  _localStorage.addOutStorageChannels(base.components, [ keyLocalStorage ], config);

  return sphericaPageUtils.spherize(base);
};
