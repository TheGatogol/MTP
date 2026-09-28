'use strict';
const bbvaNativeconnectorThirdPartyWallet = CONFIG => CONFIG.nativeIos ? {
  zone: 'app_main',
  tag: 'bbva-nativeconnector-apple-pay',
  familyPath: '@glomo-web-components/bbva-nativeconnector-apple-pay',
  type: 'CC',
  render: 'litElement',
  properties: {
    pluginName: 'ApplepayPlugin',
    cellsConnections: {
      in: {
        global_nativeconnector_third_party_wallet_activate_card: {
          bind: 'activateCard'
        },
        global_nativeconnector_third_party_wallet_provisioning: {
          bind: 'addCardPass'
        },
        global_nativeconnector_third_party_wallet_card_requires_verification: {
          bind: 'cardRequiresVerification'
        },
        global_nativeconnector_third_party_wallet_exist_card: {
          bind: 'existCard'
        },
        global_nativeconnector_third_party_wallet_exist_card_error: {
          bind: 'existCard'
        },
        global_nativeconnector_third_party_wallet_status_devices: {
          bind: 'existCardFirstPush'
        }
      },
      out: {
        global_nativeconnector_third_party_wallet_activate_card_error: {
          bind: 'activate-card-error'
        },
        global_nativeconnector_third_party_wallet_activate_card_success: {
          bind: 'activate-card-success'
        },
        global_nativeconnector_third_party_wallet_provisioning_error: {
          bind: 'add-card-pass-error'
        },
        global_nativeconnector_third_party_wallet_provisioning_success: {
          bind: 'add-card-pass-success'
        },
        global_nativeconnector_third_party_wallet_card_requires_verification_error: {
          bind: 'card-requires-verification-error'
        },
        global_nativeconnector_third_party_wallet_card_requires_verification_success: {
          bind: 'card-requires-verification-success'
        },
        global_nativeconnector_third_party_wallet_exist_card_error: {
          bind: 'exist-card-error'
        },
        global_nativeconnector_third_party_wallet_exist_card: {
          bind: 'exist-card-success'
        },
        global_nativeconnector_third_party_wallet_status_devices_error: {
          bind: 'exist-card-first-push-error'
        },
        global_nativeconnector_third_party_wallet_status_devices_success: {
          bind: 'exist-card-first-push-success'
        },
        global_nativeconnector_third_party_wallet_manager_status_devices_success: {
          bind: 'exist-card-first-push-success'
        }
      }
    }
  }
} : {
  zone: 'app_main',
  tag: 'bbva-nativeconnector-google-tap-and-pay',
  familyPath: '@glomo-web-components/bbva-nativeconnector-google-tap-and-pay',
  type: 'CC',
  render: 'litElement',
  properties: {
    pluginName: 'GooglePayPlugin',
    cellsConnections: {
      in: {
        global_nativeconnector_third_party_wallet_card_requires_verification: {
          bind: 'cardsPendingActivate'
        },
        global_nativeconnector_third_party_wallet_status_devices: {
          bind: 'getCardStatus'
        },
        global_nativeconnector_third_party_wallet_get_push_data: {
          bind: 'getPushData'
        },
        global_nativeconnector_third_party_wallet_provisioning: {
          bind: 'pushProvisioning'
        },
        global_nativeconnector_third_party_wallet_search_cards: {
          bind: 'searchCards'
        }
      },
      out: {
        global_nativeconnector_third_party_wallet_card_requires_verification_error: {
          bind: 'cards-pending-activate-error'
        },
        global_nativeconnector_third_party_wallet_card_requires_verification_success: {
          bind: 'cards-pending-activate-success'
        },
        global_nativeconnector_third_party_wallet_status_devices_error: {
          bind: 'get-card-status-error'
        },
        global_nativeconnector_third_party_wallet_manager_status_devices_success: {
          bind: 'get-card-status-success'
        },
        global_nativeconnector_third_party_wallet_status_devices_success: {
          bind: 'get-card-status-success'
        },
        global_nativeconnector_third_party_wallet_get_push_data_error: {
          bind: 'get-push-data-error'
        },
        global_nativeconnector_third_party_wallet_get_push_data_success: {
          bind: 'get-push-data-success'
        },
        global_nativeconnector_third_party_wallet_provisioning_error: {
          bind: 'push-provisioning-error'
        },
        global_nativeconnector_third_party_wallet_provisioning_success: {
          bind: 'push-provisioning-success'
        },
        global_nativeconnector_third_party_wallet_search_cards_error: {
          bind: 'search-cards-error'
        },
        global_nativeconnector_third_party_wallet_search_cards_success: {
          bind: 'search-cards-success'
        }
      }
    }
  }
};
module.exports = {
  bbvaNativeconnectorThirdPartyWallet
};
