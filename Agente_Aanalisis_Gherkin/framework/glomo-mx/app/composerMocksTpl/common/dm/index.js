const shortcutManager =  (CONFIG) => ({
  zone: 'app__main',
  tag: 'glomo-shortcut-manager',
  type: 'CC',
  properties: {
    pagesToSkipBiometricRequest: ['specialSalesPage', 'insuranceRemoteBanker', 'checklistActions'],
    interruptToAwaitStorage: true,
    platform: CONFIG.nativeIos ? 'ios' : 'android',
    shouldLoadDashboardFirst: true,
    cellsConnections: {
      in: {
        global_feature_flag_collection_updated: {
          bind: 'getFeatureFlags'
        },
        global_set_app_version: {
          bind: 'setAppVersion'
        },
        global_set_app_settings: {
          bind: 'setShortcutConfiguration'
        },
        global_deep_link: {
          bind: 'manageSelectedShortcut'
        },
        global_user_list_notification: {
          bind: 'manageSelectedShortcut'
        },
        global_product_not_found: {
          bind: 'manageSelectedShortcut'
        },
        global_security_deep_links: {
          bind: 'manageSelectedShortcut'
        },
        global_product_found: {
          bind: 'dispatchNavigation'
        },
        global_navigate_to_card: {
          bind: 'dispatchNavigation'
        },
        global_set_shortcut_product_fetched: {
          bind: 'setFetchedProduct'
        },
        facial_recognition_biometrics_code: {
          bind: 'setBiometricsCode'
        },
        dashboard_loaded: {
          bind: 'isDashboardLoaded'
        }
      },
      out: {
        global_get_user_account: {
          bind: 'get-account'
        },
        global_get_user_card: {
          bind: 'get-card'
        },
        global_get_user_loan: {
          bind: 'get-loan'
        },
        global_get_user_offer: {
          bind: 'get-offer'
        },
        global_shortcut_manager_set_send_original_product: {
          bind: 'glomo-shortcut-manager-send-original-product'
        },
        dashboard_navigation_facial_recognition: {
          bind: 'dashboard-facial-recognition',
          link: {
            page: 'facialRecognition'
          }
        },
        contract_product_section_oc_banner_instant_cash_clicked: {
          bind: 'navigate-from-deep-link'
        },
        contract_product_section_oc_banner_payroll_portability_clicked: {
          bind: 'navigate-from-deep-link'
        },
        open_control_veil: {
          bind: 'send-selected-shortcut'
        },
        close_control_veil: {
          bind: 'navigate-from-deep-link'
        },
        navigation_from_deep_link_to_dashboard: {
          bind: 'navigate-from-deep-link'
        },
        navigation_from_deep_link_to_operations: {
          bind: 'navigate-from-deep-link',
          link: {
            page: {
              bind: 'page'
            },
            params: {
              digitalProductId: 'digitalProductId',
              productId: 'productId',
              filter: 'filter',
              productType: 'productType',
              offerId: 'offerId',
              continue: 'continue',
              extra: 'extra',
              operation: 'operation'
            }
          }
        },
        glomo_shortcut_manager_get_product_error: {
          bind: 'glomo-shortcut-manager-get-product-error',
          link: {
            page: 'dashboard'
          }
        },
        glomo_send_selected_original_shortcut_data: {
          bind: 'send-selected-shortcut'
        }
      },
      params: {
        isLogged: 'global_user_logged',
        continue: 'continue'
      }
    }
  }
});

const productChecker = (CONFIG) => ({
  zone: 'app_main',
  type: 'CC',
  tag: 'glomo-product-checker-dm-mx',
  familyPath: 'glomo-product-checker-dm',
  properties: {
    host: CONFIG.globalServices.host,
    cardsApiVersion: CONFIG.globalServices.versions.cards,
    accountsApiVersion: CONFIG.globalServices.versions.accounts,
    loansApiVersion: CONFIG.globalServices.versions.loans,
    campaignsApiVersion: CONFIG.globalServices.versions.campaigns,
    requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
    nonPreapprovedPages: [
      'creditCardHolder',
      'ocLoanOfferPage',
      'creditCardHolderSpherica'
    ],
    native: CONFIG.native || false,
    cellsConnections: {
      in: {
        global_set_app_settings: {
          bind: 'setConfigurationOffers'
        },
        global_get_user_account: {
          bind: 'getAccounts'
        },
        global_get_user_card: {
          bind: 'getCards'
        },
        global_get_user_loan: {
          bind: 'getLoans'
        },
        global_get_user_offer: {
          bind: 'getOffers'
        },
        global_shortcut_manager_set_send_original_product: {
          bind: 'sendOriginalProduct'
        }
      },
      out: {
        global_product_found: {
          bind: 'product-found'
        },
        global_navigate_to_card: {
          bind: 'product-found'
        },
        global_product_not_found: {
          bind: 'error-finding-product'
        },
        global_deep_link_all_offer: {
          bind: 'all-offers-list-flow'
        },
        global_deep_link_one_card_fetched: {
          bind: 'one-card-fetched'
        },
        global_deep_link_unparsed_offers_retrieved: {
          bind: 'set-offers'
        },
        dashboard_accounts: {
          bind: 'glomo-product-checker-accounts-fetched'
        },
        global_dashboard_cards: {
          bind: 'glomo-product-checker-cards-fetched'
        },
        dashboard_loans: {
          bind: 'glomo-product-checker-loans-fetched'
        },
        global_offers_retrieved: {
          bind: 'glomo-product-checker-offers-fetched'
        },
        global_set_shortcut_product_fetched: {
          bind: 'glomo-product-checker-product-fetched'
        },
        global_deep_link_offers_request: {
          bind: 'deep-link-offers-request'
        }
      }
    }
  }
});

const featureFlagManager = () => ({
  zone: 'app__main',
  type: 'CC',
  tag: 'glomo-feature-flag-manager',
  properties: {
    cellsConnections: {
      in: {
        global_login_success: {
          bind: 'requestFeatureFlagCollection'
        },
        global_native_featureflag: {
          bind: 'requestFeatureFlagCollection'
        },
        global_feature_flag_collection: {
          bind: 'featureFlagCollection'
        },
        global_storage_get_feature_flag_success: {
          bind: 'featureFlagCollection'
        },
        global_request_feature_flag: {
          bind: 'requestFeatureFlagCollection'
        },
        global_full_product_detail_operations_list: {
          bind: 'disableProductDetailFullAccess'
        },
        global_select_operations_list: {
          bind: 'showSelectOperationsAccess'
        }
      },
      out: {
        global_feature_flag_select_operations: {
          bind: 'new-select-operations-flags'
        },
        global_feature_flag_sustainability: {
          bind: 'new-sustainability-flags'
        },
        global_feature_flag_solar_panels_simulator: {
          bind: 'new-solar-panels-simulator-flags'
        },
        global_feature_flag_car_simulator: {
          bind: 'new-car-simulator-flags'
        },
        global_feature_flag_appliance_simulator: {
          bind: 'new-appliance-simulator-flags'
        },
        global_show_feature_flag_select_operations: {
          bind: 'show-flags-select-operations-access'
        },
        global_feature_flag_collection_updated: {
          bind: 'feature-flag-collection-updated'
        },
        global_feature_flag_available_operations: {
          bind: 'new-product-detail-operations'
        },
        global_feature_flag_feedback_config: {
          bind: 'new-feedback-config'
        },
        global_get_from_storage: {
          bind: 'get-native-local-storage'
        },
        global_feature_flag_profile_sections: {
          bind: 'new-profile-sections'
        },
        global_feature_stand_in_status: {
          bind: 'feature-flag-stand-in-status'
        },
        global_feature_stand_in_status_transactions: {
          bind: 'feature-flag-stand-in-status-movements'
        },
        global_feature_flag_inapp_crm: {
          bind: 'feature-flag-inapp-crm'
        },
        global_feature_flag_inapp_facial_update: {
          bind: 'feature-flag-inapp-facial-update'
        },
        global_feature_flag_feedback_client_voice_connect: {
          bind: 'new-feedback-client-voice-connect-flags'
        },
        global_feature_flag_fido: {
          bind: 'feature-flag-fido-security-journeys'
        },
        global_feature_flag_futura_collections: {
          bind: 'new-futura-collections'
        }
      }
    }
  }
});

const bbvaControllerLandingCvvSettings = (CONFIG) => {
  return {
    zone: 'app__main',
    tag: 'bbva-controller-landing-cvv-settings-mx',
    familyPath: '@glomo-web-components/bbva-controller-landing-cvv-settings',
    render: 'litElement',
    type: 'CC',
    properties: {
      cellsConnections: {
        in: {
          global_storage_get_landingSettings_success: {
            bind: 'getLandingSettingsFromLocalStorageResponse'
          },
          global_storage_get_landingSettings_error: {
            bind: 'getLandingSettingsFromLocalStorageResponseFailed'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          global_financial_overview_details: {
            bind: 'setFinancial'
          }
        },
        out: {
          global_set_in_storage: {
            bind: 'set-in-local-storage'
          },
          global_get_from_storage: {
            bind: 'get-from-local-storage'
          }
        }
      }
    }
  };
};

module.exports = {
  shortcutManager,
  productChecker,
  featureFlagManager,
  bbvaControllerLandingCvvSettings
};
