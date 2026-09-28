'use strict';

module.exports = config => {
  const {
    headerHeightMinimum
  } = require('./common/helpers/_utils');
  const {
    native = false,
    nativeIos,
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        accountsV2,
        contracOnboarding
      }
    }
  } = config;
  const localStorageApp = require('./common/_local-storage');
  const checklistActionsAnalytics = require('./analytics/_checklistActions')();

  const onboardingChecklistActions = {
    zone: 'app__main',
    type: 'UI',
    tag: 'onboarding-checklist-actions-mx',
    familyPath: '@glomo-web-components/onboarding-checklist-actions-mx',
    render: 'litElement',
    properties: {
      iOSFixedHeader: nativeIos,
      host,
      native,
      requiredToken,
      contractOnboardingApiVersion: contracOnboarding,
      attachToBody: native,
      maxAttempts: 3,
      cellsConnections: {
        in: {
          checklist_actions_available_redirects: {
            bind: 'availableRedirections'
          }
        },
        out: {
          checklist_actions_restore_badge_from_local_storage: {
            bind: 'onboarding-checklist-actions-mx-badge-complete-modal-close'
          },
          checklist_actions_save_badge_from_local_storage: {
            bind: 'onboarding-checklist-actions-mx-badge-complete'
          },
          checklist_actions_disable_onboarding: {
            bind: 'onboarding-checklist-actions-onboarding-modal-onboarding-disabled'
          },
          checklist_actions_set_challenges_data: {
            bind: 'onboarding-checklist-actions-mx-dm-challenges-data-set'
          },
          redirect_to_challenges: {
            bind: 'onboarding-checklist-actions-mx-selected-challenge-navigate'
          },
          navigate_back: {
            bind: 'onboarding-checklist-actions-challenges-exit',
            backStep: true,
            skipHistory: true
          },
          user_product_challenges_register: {
            bind: 'onboarding-checklist-actions-mx-dm-set-product-type'
          },
          checklist_actions_analytics_onboarding_slide: {
            bind: 'help-onboarding-slide-next'
          },
          checklist_actions_badge_data_set: {
            bind: 'onboarding-checklist-actions-mx-dm-badges-data-set'
          },
          checklist_actions_show_error_modal: {
            bind: 'onboarding-checklist-actions-mx-dm-show-error-modal'
          },
          checklist_actions_show_dashboard_checklist_actions: {
            bind: 'onboarding-checklist-actions-mx-dm-initialization-complete'
          }
        },
        params: {
          badgeId: 'checklist_actions_badge_id_set',
          init: 'checklist_actions_init_flow',
          showOnboarding: 'checklist_actions_show_onboarding_set'
        }
      }
    }
  };
  const controllerChecklistActions = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-controller-checklist-actions-mx',
    familyPath: '@glomo-web-components/bbva-controller-checklist-actions-mx',
    render: 'litElement',
    properties: {
      isNativeIos: nativeIos,
      cellsConnections: {
        in: {
          __bridge_page_checklistActions: {
            bind: 'init'
          },
          global_client_id: {
            bind: 'clientId'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          global_feature_stand_in_status: {
            bind: 'standInMode'
          },
          global_storage_get_checklist_actions_data_success: {
            bind: 'getLocalStorageResponse'
          },
          global_storage_get_checklist_actions_data_error: {
            bind: 'getLocalStorageResponse'
          },
          checklist_actions_save_badge_from_local_storage: {
            bind: 'saveBadgeIdToLocalStorage'
          },
          checklist_actions_disable_onboarding: {
            bind: 'disableOnboarding'
          },
          checklist_actions_restore_badge_from_local_storage: {
            bind: 'saveBadgeIdToLocalStorage'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          create_redirect_link: {
            bind: 'redirectToChallengeSelected'
          },
          redirect_to_challenges: {
            bind: 'prepareRedirectChallenge'
          },
          user_product_challenges_register: {
            bind: 'setSelectProductUser'
          }
        },
        out: {
          select_feature_to_go: {
            bind: 'bbva-controller-checklist-actions-mx-prepare-redirect-challenge'
          },
          global_get_from_storage: {
            bind: 'bbva-controller-checklist-actions-mx-get-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'bbva-controller-checklist-actions-mx-set-to-local-storage'
          },
          checklist_actions_show_onboarding_set: {
            bind: 'bbva-controller-checklist-actions-mx-show-onboarding-set'
          },
          checklist_actions_badge_id_set: {
            bind: 'bbva-controller-checklist-actions-mx-badge-id-set'
          },
          checklist_actions_init_flow: {
            bind: 'bbva-controller-checklist-actions-mx-checklist-actions-init'
          },
          global_nativeconnector_third_party_wallet_status_devices: {
            bind: 'bbva-controller-checklist-actions-mx-card-detail-request-devices'
          },
          global_card_digital_card_associated_data: {
            bind: 'send-digital-card-data'
          },
          global_account_set_account_for_operations: {
            bind: 'bbva-controller-checklist-actions-mx-accounts-selected'
          },
          open_upgrade_hybrid: {
            bind: 'bbva-controller-checklist-actions-mx-set-info-upgrade-customer'
          },
          checklist_actions_available_redirects: {
            bind: 'bbva-controller-checklist-actions-mx-available-redirections'
          },
          checklist_actions_redirections_map_set: {
            bind: 'bbva-controller-checklist-actions-mx-redirection-map-set'
          },
          navigation_checklist_actions_to_challenge: {
            bind: 'bbva-controller-checklist-actions-mx-redirect-to-challenge-selected',
            link: {
              page: {
                bind: 'page'
              }
            }
          },
          navigation_checklist_actions_to_challenge_with_params: {
            bind: 'bbva-controller-checklist-actions-mx-redirect-to-challenge-selected-with-params',
            link: {
              page: {
                bind: 'page'
              },
              params: {
                continue: 'checklistActions',
                productId: 'productId',
                digitalProductId: 'digitalProductId'
              }
            }
          }
        }
      }
    }
  };
  const analyticmanagerOnboardingMx = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-onboarding-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-onboarding',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          checklist_actions_badge_data_set: {
            bind: 'setBadgeData'
          },
          checklist_actions_set_challenges_data: {
            bind: 'setChallengesData'
          },
          select_feature_to_go: {
            bind: 'selectedCardRedirection'
          },
          checklist_actions_redirections_map_set: {
            bind: 'redirectionsMap'
          },
          checklist_actions_analytics_onboarding_slide: {
            bind: 'helpOnboardingSlide'
          },
          checklist_actions_show_onboarding_set: {
            bind: 'helpOnboardingSlide'
          },
          __bridge_page_checklistActions: {
            bind: 'badgeModalShow'
          },
          checklist_actions_show_error_modal: {
            bind: 'showErrorModal'
          },
          checklist_actions_show_dashboard_checklist_actions: {
            bind: 'showDashboardChecklistActions'
          }
        },
        out: {
          checklist_actions_click_start: {
            bind: 'bbva-analyticmanager-onboarding-mx-analytics-app-onclick-start',
            analytics: checklistActionsAnalytics.appOnClickStart()
          },
          checklist_actions_onboarding: {
            bind: 'bbva-analyticmanager-onboarding-mx-analytics-onboarding-slide-page-view',
            analytics: checklistActionsAnalytics.appPageViewOnboarding()
          },
          checklist_actions_landing: {
            bind: 'bbva-analyticmanager-onboarding-mx-analytics-dashboard-checklist-actions',
            analytics: checklistActionsAnalytics.appPageViewLanding()
          },
          checklist_actions_badges: {
            bind: 'bbva-analyticmanager-onboarding-mx-analytics-badge-earn-modal',
            analytics: checklistActionsAnalytics.appBadgeEarnModal()
          },
          checklist_actions_errors: {
            bind: 'bbva-analyticmanager-onboarding-mx-analytics-error-modal',
            analytics: checklistActionsAnalytics.appErrorModal()
          }
        },
        params: {
          badgeComplete: 'checklist_actions_save_badge_from_local_storage'
        }
      }
    }
  };
  const bbvaTechnicalcoreInternalLinkProvider =  {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/bbva-technicalcore-internal-link-provider',
    tag: 'bbva-technicalcore-internal-link-provider',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      versionAccountsV2: accountsV2,
      cellsConnections: {
        in: {
          select_feature_to_go: {
            bind: 'initializeDataProvider'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          dashboard_accounts: {
            bind: 'accountsData'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_feature_flag_collection_updated: {
            bind: 'financialGlobalFeatureFlags'
          },
          dashboard_set_operationals: {
            bind: 'setClientContracts'
          },
          global_get_transactions_data_success: {
            bind: 'succesfulTransactionsData'
          },
          global_get_transaction_detail_data_success: {
            bind: 'succesfulTransactionDetailData'
          },
          success_response_brand_list_blue: {
            bind: 'serviceBlackhawkSuccess'
          }
        },
        out: {
          create_redirect_link: {
            bind: 'redirect-link'
          },
          checklist_actions_data_account_selected: {
            bind: 'account-selected'
          },
          global_send_card_detail_data: {
            bind: 'card-detail'
          },
          global_card_detail_data_success_channel: {
            bind: 'card-detail'
          },
          blue_navigate_to_third_party_wallet_provisioning: {
            bind: 'card-detail'
          },
          blue_card_credit_card_payment_manager_product_id: {
            bind: 'productId-pay-tdc'
          },
          cards_blue_global_financial_overview_details: {
            bind: 'card-detail-tdc'
          }
        }
      }
    }
  };
  const base = {
    hash: 'checklist-actions',
    currentPage: {
      url: '/checklist-actions'
    },
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        disableEdgeSwipe: true,
        disableScrollLock: true,
        drawerWidth: '100%',
        extraHeaderClass: 'bbva-core-blue',
        animationType: 'verticalUp',
        headerFixed: true,
        headerHeight: headerHeightMinimum
      }
    },
    components: [
      onboardingChecklistActions,
      controllerChecklistActions,
      analyticmanagerOnboardingMx,
      bbvaTechnicalcoreInternalLinkProvider
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, [ 'checklist_actions_data' ], config);

  return base;
};
