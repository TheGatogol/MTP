'use strict';
module.exports = CONFIG => {
  const { glomoOpenDocument, getLanguage } = require('./common/helpers/_utils');
  const pageName = 'dynamicsAndRewards';
  const pages = require('./common/_pages')(CONFIG)(pageName);
  const pageNameChannel = 'dynamics_and_rewards';
  const getGlomoOpenDocument = glomoOpenDocument(CONFIG);
  const storage = require('./common/_local-storage');
  const localStorageKey = 'new_dynamics_status_mgm';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, pageName);
  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector');
  const {
    appPageView,
    pageViewBonusDetail,
    appPageVisitTdc,
    pageViewRewardDetail,
    pageViewRewardHistory,
    pageViewRewardHistoryInviteFriend,
    pageViewBonusDetailInviteFriend,
    pageViewRewardDetailInviteFriend,
    appStartedRegister,
    appStartedTerms,
    getErrorPageView,
    getOnClickStartPortability,
    appPageVisitPortability,
    getAppStartedPortability,
    getAppOnClickStart
  } = require('./analytics/_dynamicsAndRewards')();
  const {
    appSecondStepDA,
    appTermsAndConditions,
    appShareLink
  } = require('./analytics/_memberGetMemberDigitalAccount')();
  const language = getLanguage();

  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      publicSettingsId,
      publicSettingsHost,
      versions: {
        loyaltyV1,
        campaigns,
        appSettings
      }
    },
    aemHost,
    native = false,
    nativeIos = false,
    rewards: {
      dynamics: {
        url: dynamicUrl
      }
    }
  } = CONFIG;

  const base = {
    hash: pageName,
    currentPage: {
      url: '/dynamics-and-rewards'
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'dark-blue-bg',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: true,
        headerHeight: 0,
        className: `bg-light-grey ${nativeIos ? 'ios-top-padding' : ''}`,
        cellsConnections: {
          in: {
            global_open_native_menu: {
              bind: 'toggleMenu'
            }
          }
        }
      },
      propertiesSpherica: {
        extraHeaderClass: 'bg-light-grey'
      }
    },
    components: [
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              ['__bridge_app_' + pageName]: {
                bind: 'navigation'
              },
              ['__bridge_page_' + pageName]: {
                bind: 'init'
              }
            },
            out: {
              [pageNameChannel + '_init_page']: {
                bind: 'init-page'
              },
              global_enable_menu_swipe: {
                bind: 'swipe-menu-enabled',
                'forward-to-native': true
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        familyPath: '@bbva-web-components-widgets/rewards-member-get-member',
        tag: 'rewards-member-get-member',
        render: 'litElement',
        properties: {
          host,
          aemHost,
          publicSettingsHost,
          native,
          requiredToken,
          aemPath: dynamicUrl,
          appSettingsApiVersion: appSettings,
          campaignsApiVersion: campaigns,
          loyaltyApiVersion: loyaltyV1,
          publicSettingsId,
          publicSettingsCachetype: 'SESSION',
          publicSettingsConfigKey: 'mgmData',
          labelId: 'MGMO',
          digitalAccountCode: '0824',
          digitalAccountType: 'invite-friend',
          country: 'mx',
          language,
          documentFileLocalCustomProperties: { documentType: 'PDF'},
          cellsConnections: {
            in: {
              [pageNameChannel + '_header-main-close-click']: {
                bind: 'reset'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'reset'
              },
              [pageNameChannel + '_on_navigation_to_rewards']: {
                bind: 'tabSelected'
              },
              [pageNameChannel + '_external_url_bbva_points']: {
                bind: 'urlBbvaPoints'
              },
              global_set_app_settings: {
                bind: 'publicSettings'
              },
              [pageNameChannel + '_flags_loaded']: {
                bind: 'flagsLoaded'
              },
              [pageNameChannel + '_update_offer_view_ids_success']: {
                bind: 'offerViewIds'
              },
              [pageNameChannel + '_prommotion_summaries_store_icons_mapping']: {
                bind: 'promotionSummariesStoreIconsMapping'
              },
              [pageNameChannel + '_product_id_of_offers_hidden']: {
                bind: 'productIdOfOffersHidden'
              },
              [pageNameChannel + '_customer_first_name']: {
                bind: 'username'
              },
              [pageNameChannel + '_on_navigation_to_dynamic_detail']: {
                bind: 'navigateToDynamicDetail'
              },
              dynamics_and_rewards_document_term_and_conditions: {
                bind: 'termsAndConditionsDocumentDetail'
              },
              dynamics_and_rewards_referral_codes_success: {
                bind: 'reset'
              },
              dynamics_and_rewards_referral_codes_exit_card: {
                bind: 'reset'
              }
            },
            out: {
              global_open_document_base64: {
                bind: 'rewards-member-get-member-terms-and-conditions-document'
              },
              global_action_launcher_uri: {
                bind: 'rewards-member-get-member-url-navigation-external'
              },
              [pageNameChannel + '_handle_offer_ids']: {
                bind: 'rewards-member-get-member-offer-view-ids'
              },
              [pageNameChannel + '_manage_custome_navigations']: {
                bind: 'rewards-member-get-member-invite-click'
              },
              [pageNameChannel + '_header-main-close-click']: {
                bind: 'rewards-member-get-member-navigation-external',
                backStep: true
              },
              [pageNameChannel + '_dynamics_and_rewards_loaded']: {
                bind: 'rewards-member-get-member-dynamics-and-rewards-load'
              },
              [pageNameChannel + '_bonus_detail_loaded']: {
                bind: 'rewards-member-get-member-bonus-detail-load'
              },
              [pageNameChannel + '_dynamic_detail_loaded']: {
                bind: 'rewards-member-get-member-dynamic-detail-load'
              },
              [pageNameChannel + '_reward_detail_loaded']: {
                bind: 'rewards-member-get-member-reward-detail-load'
              },
              [pageNameChannel + '_reward_history_loaded']: {
                bind: 'rewards-member-get-member-reward-history-load'
              },
              [pageNameChannel + '_modal_exit_error']: {
                bind: 'rewards-member-get-member-modal-exit-error-visible-change'
              },
              [pageNameChannel + '_dynamics_dynamic_click']: {
                bind: 'rewards-member-get-member-dynamics-dynamic-click'
              },
              [pageNameChannel + '_dynamic_detail_cta_click']: {
                bind: 'rewards-member-get-member-dynamic-detail-cta-click'
              },
              dynamics_and_rewards_dynamic_detail_terms_and_conditions_click: {
                bind: 'rewards-member-get-member-dynamic-detail-terms-and-conditions-click'
              },
              dynamics_and_rewards_reward_detail_click: {
                bind: 'rewards-member-get-member-rewards-reward-click'
              }
            }
          }
        },
        propertiesSpherica: {
          rewardTypesOfPromotionsToDisplayHelpLink: [ 'POINTS' ],
          rewardTypesOfPromotionsToDisplayHelpMessage: [ 'POINTS' ]
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        familyPath: '@glomo-web-components/bbva-controller-member-get-member',
        tag: 'bbva-controller-member-get-member',
        render: 'litElement',
        properties: {
          shareImage: './images/spherica/dynamicsAndRewards/stepsOpenAccount.png',
          appSettingsKey: 'externalUrlBbvaPoints',
          localStorageKey,
          host,
          native,
          requiredToken,
          productsConfiguration: {
            '0795': {productKey: 'credit-card', featureFlag: 'glomo.dynamicsAndRewards.creditCard'},
            '0798': {productKey: 'payroll-portability', featureFlag: 'glomo.dynamicsAndRewards.payroll'},
            '0824': {productKey: 'invite-friend', featureFlag: 'glomo.dynamicsAndRewards.inviteFriend'}
          },
          cellsConnections: {
            in: {
              global_set_app_settings: {
                bind: 'getExternalUrlBbvaPoints'
              },
              global_login_success: {
                bind: 'setCustomerToGlobalCache'
              },
              global_storage_get_new_dynamics_status_mgm_success: {
                bind: 'getOfferViewIdsFromLocalStorage'
              },
              global_storage_get_new_dynamics_status_mgm_error: {
                bind: 'onLocalStorageOfferViewIdsError'
              },
              global_feature_flag_collection_updated: {
                bind: 'featureFlagsCollection'
              },
              [pageNameChannel + '_init_page']: {
                bind: 'init'
              },
              [pageNameChannel + '_manage_custome_navigations']: {
                bind: 'dispatchProductEvent'
              },
              [pageNameChannel + '_handle_offer_ids']: {
                bind: 'setOfferViewIdsInLocalStorage'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'navigateFromNotification'
              },
              contract_product_section_oc_banner_instant_cash_clicked: {
                bind: 'navigateFromNotification'
              },
              dynamics_and_rewards_invite_friend_send_code: {
                bind: 'getReferralCodes'
              },
              dynamics_and_rewards_invite_friend_exit_modal: {
                bind: 'exitCard'
              }
            },
            out: {
              global_get_from_storage: {
                bind: 'bbva-controller-member-get-member-get-offer-view-ids'
              },
              global_set_in_storage: {
                bind: 'bbva-controller-member-get-member-set-offer-id-in-localstorage'
              },
              [pageNameChannel + '_on_navigation_to_rewards']: {
                bind: 'bbva-controller-member-get-member-navigate-to-rewards'
              },
              [pageNameChannel + '_update_offer_view_ids_success']: {
                bind: 'bbva-controller-member-get-member-get-offer-view-ids-success'
              },
              [pageNameChannel + '_update_offer_view_ids_error']: {
                bind: 'bbva-controller-member-get-member-get-offer-view-ids-error'
              },
              [pageNameChannel + '_prommotion_summaries_store_icons_mapping']: {
                bind: 'bbva-controller-member-get-member-get-prommotion-summaries-store-icons-mapping'
              },
              [pageNameChannel + '_product_id_of_offers_hidden']: {
                bind: 'bbva-controller-member-get-member-get-product-id-of-offers-hidden'
              },
              [pageNameChannel + '_customer_first_name']: {
                bind: 'bbva-controller-member-get-member-customer-first-name'
              },
              [pageNameChannel + '_flags_loaded']: {
                bind: 'bbva-controller-member-get-member-flags-loaded'
              },
              [pageNameChannel + '_tdc_credit_card_navigation']: {
                bind: 'bbva-controller-member-get-member-credit-card',
                link: {
                  page: 'memberGetMemberCreditCard'
                }
              },
              [pageNameChannel + '_on_navigation_to_dynamic_detail']: {
                bind: 'bbva-controller-member-get-member-navigate-to-dynamic-detail'
              },
              [pageNameChannel + '_payroll_portability_navigation']: {
                bind: 'bbva-controller-member-get-member-payroll-portability',
                link: {
                  page: 'memberGetMemberPayrollPortability'
                }
              },
              dynamics_and_rewards_invite_friend_send_code: {
                bind: 'bbva-controller-member-get-member-invite-friend'
              },
              [pageNameChannel + '_external_url_bbva_points']: {
                bind: 'bbva-controller-member-get-member-bbva-points-url'
              },
              dynamics_and_rewards_document_term_and_conditions: {
                bind: 'bbva-controller-member-get-member-terms-and-conditions-detail'
              },
              dynamics_and_rewards_referral_codes_success: {
                bind: 'bbva-controller-member-get-member-referral-code-success'
              },
              dynamics_and_rewards_referral_codes_exit_card: {
                bind: 'bbva-controller-member-get-member-card-return'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-analyticmanager-dynamics-and-rewards',
        familyPath: '@glomo-web-components/bbva-analyticmanager-user-onboarding',
        render: 'litElement',
        properties: {
          digitalAccountCode: '0824',
          cellsConnections: {
            in: {
              [pageNameChannel + '_dynamics_and_rewards_loaded']: {
                bind: 'firePageViewDynamicsAndRewards'
              },
              [pageNameChannel + '_bonus_detail_loaded']: {
                bind: 'firePageViewBonusDetail'
              },
              [pageNameChannel + '_dynamic_detail_loaded']: {
                bind: 'fireAppVisit'
              },
              [pageNameChannel + '_reward_detail_loaded']: {
                bind: 'firePageViewRewardDetail'
              },
              [pageNameChannel + '_reward_history_loaded']: {
                bind: 'firePageViewRewardHistory'
              },
              [pageNameChannel + '_modal_exit_error']: {
                bind: 'fireErrorPageView'
              },
              [pageNameChannel + '_dynamics_dynamic_click']: {
                bind: 'fireAppOnClickStart'
              },
              [pageNameChannel + '_dynamic_detail_cta_click']: {
                bind: 'fireAppStartedRegister'
              },
              [pageNameChannel + '_dynamic_detail_terms_and_conditions_click']: {
                bind: 'fireAppStartedTerms'
              },
              dynamics_and_rewards_manage_custome_navigations: {
                bind: 'digitalAccountShare'
              },
              dynamics_and_rewards_reward_detail_click: {
                bind: 'lineOfActionCode'
              },
              global_open_document_base64: {
                bind: 'termsAndConditionDigitalAccount'
              }
            },
            out: {
              [pageNameChannel + '_analytics_page_view']: {
                bind: 'analytics-page-view',
                analytics: appPageView('invitar a un amigo')
              },
              [pageNameChannel + '_analytics_page_view_bonus_detail']: {
                bind: 'analytics-page-view-bonus-detail',
                analytics: pageViewBonusDetail
              },
              dynamics_and_rewards_analytics_page_view_bonus_detail_digital_account: {
                bind: 'analytics-page-view-bonus-detail-digital-account-load',
                analytics: pageViewBonusDetailInviteFriend
              },
              [pageNameChannel + '_analytics_page_visit_tdc']: {
                bind: 'analytics-app-page-visit-tdc',
                analytics: appPageVisitTdc
              },
              [pageNameChannel + '_analytics_error_page_view']: {
                bind: 'analytics-error-page-view',
                analytics: getErrorPageView('invitar a un amigo', 'error carga historial de premios')
              },
              [pageNameChannel + '_analytics_page_view_reward_detail']: {
                bind: 'analytics-page-view-reward-detail',
                analytics: pageViewRewardDetail
              },
              dynamics_and_rewards_analytics_page_view_reward_detail_digital_account: {
                bind: 'analytics-page-view-reward-detail-digital-account-load',
                analytics: pageViewRewardDetailInviteFriend
              },
              [pageNameChannel + '_analytics_page_view_reward_history']: {
                bind: 'analytics-page-view-reward-history',
                analytics: pageViewRewardHistory
              },
              dynamics_and_rewards_analytics_page_view_reward_history_digital_account: {
                bind: 'analytics-page-view-reward-history-digital-account-load',
                analytics: pageViewRewardHistoryInviteFriend
              },
              [pageNameChannel + '_analytics_app_on_click_start_tdc']: {
                bind: 'analytics-app-on-click-start-tdc',
                analytics: getAppOnClickStart('me interesa')
              },
              [pageNameChannel + '_analytics_app_started_register_tdc']: {
                bind: 'analytics-app-started-register-tdc',
                analytics: appStartedRegister
              },
              [pageNameChannel + '_analytics_app_started_terms_tdc']: {
                bind: 'analytics-app-started-terms-tdc',
                analytics: appStartedTerms
              },
              [pageNameChannel + '_analytics_app_on_click_start_portability']: {
                bind: 'analytics-app-on-click-start-portability',
                analytics: getOnClickStartPortability('me interesa')
              },
              [pageNameChannel + '_analytics_app_started_register_portability']: {
                bind: 'analytics-app-started-register-portability',
                analytics: getAppStartedPortability('register')
              },
              [pageNameChannel + '_analytics_app_started_terms_portability']: {
                bind: 'analytics-app-started-terms-portability',
                analytics: getAppStartedPortability('terms')
              },
              dynamics_and_rewards_analytics_page_visit_portability: {
                bind: 'analytics-app-page-visit-portability',
                analytics: appPageVisitPortability
              },
              dynamics_and_rewards_analytics_page_visit_digital_account: {
                bind: 'analytics-app-page-visit-digital-account',
                analytics: appSecondStepDA
              },
              dynamics_and_rewards_analytics_page_visit_digital_account_code: {
                bind: 'analitycs-app-page-level-two-digital-account-share',
                analytics: appShareLink
              },
              dynamics_and_rewards_analytics_link_digital_account_terms_conditions: {
                bind: 'analitycs-app-page-terms-conditions-digital-account-click',
                analytics: appTermsAndConditions
              }
            }
          }
        }
      }
    ]
  };

  const socialSharing = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-social-sharing',
    familyPath: '@glomo-web-components/bbva-nativeconnector-social-sharing',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          dynamics_and_rewards_referral_codes_success: {
            bind: 'share'
          }
        }
      }
    }
  };

  if (native) {
    base.components.push(getGlomoOpenDocument);
    base.components.push(socialSharing);
  }

  errorAndSignWidgetConnector(CONFIG)(base)('bbva-controller-member-get-member', {
    widgetId: pageName,
    cancelAfterErrorFunction: 'clearAndBack',
    addRetryErrorsFlag: true,
    retryAfterErrorFunction: 'getReferralCodes',
    acceptCallForHelp: {
      acceptCallForHelp: { bind: 'cancelWidgetServiceCal', component: 'bbva-manager-widgets-error-interceptor' }
    },
    retryConfig: {
      className: 'Error',
      openMaximized: false,
      header: 'dynamics-and-rewards-half-modal-header-title',
      acceptBtLabel: 'dynamics-and-rewards-half-modal-retry-button',
      cancelBtLabel: '',
      template: {
        type: 'paragraphs',
        values: [
          { icon: 'coronita:alert', iconClass: 'icon-size-24', class: 'caution' },
          { text: '', class: 'strong-xxl margin-bottom-s'},
          { text: 'dynamics-and-rewards-half-modal-text-body' }
        ]
      }
    },
    callConfig: {
      className: 'full-height-error error',
      header: '',
      openMaximized: true,
      acceptBtLabel: 'dynamics-and-rewards-full-modal-exit-button',
      template: {
        type: 'paragraphs',
        values: [
          { icon: 'coronita:alert' },
          { title: 'dynamics-and-rewards-full-modal-title' },
          { text: 'dynamics-and-rewards-full-modal-text-body' },
          { textMessage: '', textMessageClass: '', type: 'iconText' }
        ]
      }
    }
  }, true);
  storage.addOutStorageChannels(base.components, [ localStorageKey ], CONFIG);
  return sphericaPageUtils.spherize(base);
};
