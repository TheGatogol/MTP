/* eslint-disable no-dupe-keys, no-shadow */
'use strict';

const utils = require('./helpers/_utils');
const { configDataProperties, configInvestmentProduct } = require('../dashboard/_config');
const isPublicPage = utils.isPublicPage;
const ANALYTICS_CHECKS_SECTION = require('../analytics/_checksSection')({});
const ANALYTICS_LOGIN = require('../analytics/_login')({});
const ANALYTICS_LOGOUT = require('../analytics/_logoutSessionExpiration')({});
const ANALYTICS_ATM_LOCATOR = require('../analytics/_atmLocator')({});
const { toastSnackBarGeneralParamsSuccess } = require('./helpers/_constants');
const { dictionaryFilterFutura, offersFlagsData, linkFlags } = require('../dashboard/_operationals.js');
const ANALYTICS_CONFIGURE_PRODUCTS = require('../analytics/_configureProductsPage')({});
const ANALYTICS_OPERATIONAL_LIMITS = require('../analytics/_configurationOperationalLimits');
const analyticsFuturaHome = require('../analytics/_futuraDashboard')();
const ANALYTIC_FEEDBACK_CLIENT_VOICE_CONNECT = require('../analytics/_feedbackClientVoiceConnect')();

const {
  shortcutManager,
  productChecker,
  featureFlagManager,
  bbvaControllerLandingCvvSettings
} = require('./dm');

const {
  bbvaNativeConnectorDeviceInfo,
  bbvaNativeconnectorThirdPartyWallet,
  mobilePaymentPlugin,
  trustDevicePlugin,
  nativeSettingsPlugin
} = require('./nativeconnector');

const glomoTechnicalCoreLocaleTranslation = (CONFIG) => ({
  zone: 'app__main',
  type: 'CC',
  tag: 'bbva-technicalcore-locale-translation',
  familyPath: '@glomo-web-components/bbva-technicalcore-locale-translation',
  render: 'litElement',
  properties: {
    defaultLanguage: CONFIG.locales.defaultLanguage,
    permittedLanguages: CONFIG.locales.languages,
    cellsConnections: {
      in: {
        global_feature_flag_collection_updated: {
          bind: 'getFromLocalStorage'
        },
        global_locale_translation_manager_update_language: {
          bind: 'updateLanguage'
        },
        global_locale_translation_manager_get_current_app_language: {
          bind: 'getCurrentAppLanguage'
        },
        global_storage_get_language_app_selected_success: {
          bind: 'storageGetLanguageResult'
        },
        global_storage_get_language_app_selected_error: {
          bind: 'storageGetLanguageError'
        },
        global_storage_set_language_app_selected_success: {
          bind: 'storageSetLanguageResult'
        },
        global_storage_set_language_app_selected_error: {
          bind: 'storageSetLanguageError'
        },
        language_settings_success_navigate_dashboard: {
          bind: 'requestNativeLanguageUpdate'
        }
      },
      out: {
        global_get_from_storage: {
          bind: 'bbva-technicalcore-locale-translation-get-from-local-storage'
        },
        global_set_in_storage: {
          bind: 'bbva-technicalcore-locale-translation-set-in-local-storage'
        },
        global_locale_translation_manager_get_from_local_storage_error: {
          bind: 'bbva-technicalcore-locale-translation-get-from-local-storage-error'
        },
        global_locale_translation_manager_set_in_local_storage_error: {
          bind: 'bbva-technicalcore-locale-translation-set-in-local-storage-error'
        },
        global_locale_translation_manager_language_updated: {
          bind: 'bbva-technicalcore-locale-translation-language-updated'
        },
        global_locale_translation_manager_current_app_language: {
          bind: 'bbva-technicalcore-locale-translation-current-app-language'
        },
        global_locale_translation_manager_request_native_language_update: {
          bind: 'bbva-technicalcore-locale-translation-request-native-language-update',
          'forward-to-native': true
        }
      }
    }
  }
});

const glomoAccessManager = (CONFIG) => {
  const ADDITIONAL_USER_ATTRIBUTES = utils.getLoginAdditionalUserAttributes;
  return {
    zone: 'app__main',
    type: 'CC',
    tag: 'glomo-access-manager-mx',
    familyPath: 'glomo-access-manager',
    properties: {
      isSpherica: CONFIG.isSphericaMode,
      avoidCheckSessionExpired: !!CONFIG.nativeShell,
      additionalUserAttributes: ADDITIONAL_USER_ATTRIBUTES,
      cardlessWelcomeVisits: CONFIG.cardlessWelcomeVisits,
      atmLocatorWelcomeModalClass: 'full-height-error image--sd sd--image-top-bottom-margin',
      cellsConnections: {
        in: {
          register_device: {
            bind: 'registerDevice'
          },
          global_register_device_accept: {
            bind: 'registerDevice'
          },
          global_navigation_to_atms: {
            bind: 'checkFirstTimeAtmLocator'
          },
          global_atm_locator_welcome_accept: {
            bind: 'setFirstTimeAtmLocator'
          },
          global_atm_locator_welcome_cancel: {
            bind: 'setFirstTimeAtmLocator'
          },
          global_manage_feedback_logout: {
            bind: 'manageFeedbackLogout'
          },
          global_logout_success: {
            bind: 'logoutSuccess'
          },
          global_storage_check_mobile_services: {
            bind: 'checkMobileServices'
          },
          dashboard_set_operationals: {
            bind: 'setFinancial'
          },

          // NATIVE CHANNELS
          global_atm_locator_welcome_page: {
            bind: 'checkFirstTimeAtmLocator'
          },
          global_storage_get_atm_visited_success: {
            bind: 'dispatchAtmLocatorState'
          },
          global_storage_get_atm_visited_error: {
            bind: 'dispatchAtmLocatorStateError'
          }
        },
        out: {
          user_cached: {
            bind: 'user-info-changed'
          },
          user_no_cached: {
            bind: 'user-no-cached'
          },
          global_atm_locator_not_first_time: {
            bind: 'atm-locator-not-first-time',
            link: {
              page: 'atmLocator'
            }
          },
          global_get_from_storage: {
            bind: 'get-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-in-local-storage'
          },
          ['global_alert_manager_open_with_settings' + (CONFIG.isSphericaMode ? '_spherica' : '')]: {
            bind: 'open-information-modal'
          },
          atm_locator_is_logged: {
            bind: 'atm-locator-is-logged'
          },
          global_prepare_feedback: {
            bind: 'dashboard-feedback-logout'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: CONFIG.isSphericaMode
    }
  };
};

const glomoFeedbackForm = (CONFIG) => {
  return {
    zone: 'app__main',
    type: 'CC',
    tag: 'feedback-client-voice-connect-gl',
    render: 'litElement',
    familyPath: '@glomo-web-components/feedback-client-voice-connect-gl',
    properties: {
      appId: 'GLOMO',
      countryId: 'MX',
      channelId: 'MOBILE',
      segmentId: 'SGT1',
      aapTarget: CONFIG.globalServices.tenantGlobalConfig.AAPTarget,
      targetIdUniqueKey: CONFIG.globalServices.tenantGlobalConfig.TargetIdUniqueKey,
      requiredTokenLocal: CONFIG.globalServices.requiredToken || 'tsec',
      requiredTokenGlobal: CONFIG.globalServices.requiredToken || 'tsec',
      singleSignOnApiVersion: CONFIG.globalServices.versions.singleSignOnApiVersion,
      customerFeedbackApiVersion: CONFIG.globalServices.versions.customerFeedbackApiVersion,
      hostLocal: CONFIG.globalServices.host,
      hostGlobal: CONFIG.globalServices.tenantGlobalConfig.host,
      pathGlobal: CONFIG.globalServices.tenantGlobalConfig.authPath,
      authenticationType: CONFIG.globalServices.security.headers.authenticationType,
      isNative: !!CONFIG.nativeShell,
      editLiteral: 'feedback-client-voice-connect-modify-step',
      loadingCallControlActive: CONFIG.clientVoiceConnectConfig.loadingCallControlActive || true,
      debounceTimeout: CONFIG.clientVoiceConnectConfig.debounceTimeout || 1000,
      servicesTimeout: CONFIG.clientVoiceConnectConfig.servicesTimeout || 3000,
      spinnerTimeout: CONFIG.clientVoiceConnectConfig.spinnerTimeout || 10500,
      cellsConnections: {
        in: {
          bbva_controller_client_voice_set_hostGlobal: {
            bind: 'hostGlobal'
          },
          bbva_controller_client_voice_set_sufix: {
            bind: 'tkGlobalSufix'
          },
          bbva_controller_client_voice_set_sessionTkEnviroment: {
            bind: 'useSessionTkEnviroment'
          },
          bbva_controller_client_voice_set_origin: {
            bind: 'setFeedbackOrigin'
          },
          bbva_controller_client_voice_set_answered_form: {
            bind: 'setAnsweredForm'
          },
          bbva_controller_client_voice_modal_error: {
            bind: 'errorOnServiceLoad'
          },
          bbva_controller_client_voice_set_global_client: {
            bind: 'userId'
          },
          bbva_controller_client_voice_show_form: {
            bind: 'setIsHidden'
          },
          bbva_controller_userdata_send: {
            bind: 'setUserData'
          }
        },
        out: {
          feedback_client_voice_connect_form_is_fetched: {
            bind: 'feedback-client-voice-connect-feedback-form-fetched'
          },
          feedback_client_voice_connect_success_submit: {
            bind: 'feedback-client-voice-connect-success-submit'
          },
          feedback_client_voice_connect_form_is_ready: {
            bind: 'feedback-client-voice-connect-form-is-ready'
          },
          feedback_client_voice_conect_analytics_modal: {
            bind: 'feedback-client-voice-connect-modal-analytic-open'
          },
          feedback_client_voice_conect_analytics_change_page: {
            bind: 'feedback-client-voice-connect-page-analytic-change'
          },
          feedback_client_voice_conect_analytics_step_change: {
            bind: 'feedback-client-voice-connect-step-analytic-change'
          },
          feedback_client_voice_conect_analytics_init_flow: {
            bind: 'feedback-client-voice-connect-flow-analytic-init'
          },
          feedback_client_voice_connect_property_change: {
            bind: 'feedback-client-voice-connect-property-change'
          },
          feedback_client_voice_conect_analytics_toast_open: {
            bind: 'feedback-client-voice-connect-toast-analytic-open'
          },
          feedback_client_voice_connect_manage_exit: {
            bind: 'feedback-client-voice-connect-exit'
          },
          feedback_client_voice_connect_manage_error: {
            bind: 'feedback-client-voice-connect-onload-error'
          },
          feedback_client_voice_connect_empty_saturation: {
            bind: 'feedback-client-voice-connect-saturated-form-empty'
          }
        }
      }
    }
  };
};

const bbvaControllerFeedback = (CONFIG) => ({
  zone: 'app__main',
  type: 'CC',
  tag: 'bbva-controller-client-voice-connect',
  familyPath: '@glomo-web-components/bbva-controller-client-voice-connect',
  render: 'litElement',
  properties: {
    requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
    maxUserPercentAllowed: CONFIG.clientVoiceConnectConfig.feedbackLoginMaxFlow || 5,
    stringNormalizeExceptions: [ 'formVersion' ],
    nameAnalyticFlags: {
      lifecontext: 'glomo.analytics.zeroPartyData',
      nps: 'glomo.analytics.npsLogin',
      gradual: 'glomo.analytics.gradualLogout'
    },
    appVersion: CONFIG.appVersion,
    featureVersion: '5.10.0',
    hostLocal: CONFIG.globalServices.host,
    hostGlobal: CONFIG.globalServices.tenantGlobalConfig.host,
    cellsConnections: {
      in: {
        global_feature_flag_collection_updated: {
          bind: 'dataFeatureFlags'
        },
        dashboard_oc_banner_zero_party_data_clicked: {
          bind: 'getFormZPD'
        },
        contract_product_section_oc_banner_zero_party_data_clicked: {
          bind: 'getFormZPD'
        },
        navigation_from_futura_dashboard_zero_party_data: {
          bind: 'getFormZPD'
        },
        global_storage_get_feedback_client_voice_connect_success: {
          bind: 'getFeedbackClientVoiceConnectStorage'
        },
        global_storage_get_feedback_client_voice_connect_error: {
          bind: 'getFeedbackClientVoiceConnectStorage'
        },
        hide_old_dashboard: {
          bind: 'setFutura'
        },
        feedback_client_voice_connect_form_is_fetched: {
          bind: 'updateFormShowedHistory'
        },
        feedback_client_voice_connect_success_submit: {
          bind: 'updateFormAnsweredHistory'
        },
        global_login_success: {
          bind: 'addSessionNumber'
        },
        global_login_anonymously_success: {
          bind: 'startLoggedAnonymously'
        },
        feedback_client_voice_connect_form_is_ready: {
          bind: 'sendUserData'
        },
        global_client_id: {
          bind: 'getClientId'
        },
        global_storage_get_loginData_success: {
          bind: 'getClientId'
        },
        feedback_client_voice_conect_analytics_modal: {
          bind: 'analyticsEventFire'
        },
        feedback_client_voice_conect_analytics_change_page: {
          bind: 'analyticsEventFire'
        },
        feedback_client_voice_conect_analytics_step_change: {
          bind: 'analyticsEventFire'
        },
        feedback_client_voice_conect_analytics_init_flow: {
          bind: 'analyticsEventFire'
        },
        feedback_client_voice_conect_analytics_toast_open: {
          bind: 'analyticsEventFire'
        },
        dashboard_init_page: {
          bind: 'getFormLogin'
        },
        global_set_app_settings: {
          bind: 'setAppSettings'
        },
        global_device_get_device_platform_success: {
          bind: 'setPlatform'
        },
        global_device_get_device_model_success: {
          bind: 'setModel'
        },
        feedback_client_voice_connect_property_change: {
          bind: 'setFeatureState'
        },
        global_device_get_manufacturer_success: {
          bind: 'setManufacturer'
        },
        global_manage_feedback_CVC_logout: {
          bind: 'manageLogout'
        },
        feedback_client_voice_connect_manage_exit: {
          bind: 'manageAfterExitFeedback'
        },
        feedback_client_voice_connect_manage_error: {
          bind: 'manageAfterExitFeedback'
        },
        feedback_client_voice_connect_empty_saturation: {
          bind: 'manageSaturationEmpty'
        },
        navigation_from_deep_link_to_operations: {
          bind: 'handlerFlagPush'
        },
        navigate_to_life_context_cvc: {
          bind: 'handlerFlagPush'
        },
        global_feedback_voice_controller_connect_transfers_international_abandon: {
          bind: 'getFormInternationalTransfersAbandon'
        },
        internationalTransfersSuccess_back_page_button: {
          bind: 'getFormInternationalTransfersSuccess'
        },
        global_feedback_voice_controller_connect_transfers_visa_success: {
          bind: 'getFormRequestForeignCurrencySuccess'
        },
        global_feedback_voice_controller_connect_transfers_visa_abandon: {
          bind: 'getFormRequestForeignCurrencyAbandon'
        },
        exit_my_conversations: {
          bind: 'getFormFromMyConversations'
        },
        PAYROLL_PORTABILITY_leave_operative: {
          bind: 'getFormPayrollPortabilitySuccess'
        },
        ocPayrollPortability_leave_operative: {
          bind: 'getFormPayrollPortabilitySuccess'
        },
        payroll_portability_exit_modal_button_pressed: {
          bind: 'getFormPayrollPortabilityAbandon'
        },
        payrollPortability_exit_modal_button_pressed: {
          bind: 'getFormPayrollPortabilityAbandon'
        },
        pay_by_bank__close_navigation_external: {
          bind: 'getFormPayByBankSuccess'
        },
        pay_by_bank__go_to_back: {
          bind: 'getFormPayByBankAbandon'
        },
        init_page_payByBank_channel: {
          bind: 'setNavigationPayByBank'
        },
        global_oc_loan_offer_page_exit_modal_accept: {
          bind: 'getFormOCLoanOfferAbandon'
        }
      },
      out: {
        bbva_controller_client_voice_set_hostGlobal: {
          bind: 'bbva-controller-client-voice-connect-set-hostGlobal'
        },
        bbva_controller_client_voice_set_sufix: {
          bind: 'bbva-controller-client-voice-connect-set-sufix'
        },
        bbva_controller_client_voice_set_sessionTkEnviroment: {
          bind: 'bbva-controller-client-voice-connect-set-sessionTkEnviroment'
        },
        bbva_controller_client_voice_set_origin: {
          bind: 'bbva-controller-client-voice-connect-origin'
        },
        bbva_controller_client_voice_modal_error: {
          bind: 'bbva-controller-client-voice-connect-campaing-error'
        },
        global_get_from_storage: {
          bind: 'get-native-local-storage'
        },
        global_set_in_storage: {
          bind: 'set-native-local-storage'
        },
        bbva_controller_client_voice_set_answered_form: {
          bind: 'bbva-controller-client-voice-connect-answered-success'
        },
        bbva_controller_client_voice_set_global_client: {
          bind: 'bbva-controller-client-voice-connect-set-global-client-id'
        },
        bbva_controller_client_voice_show_form: {
          bind: 'bbva-controller-client-voice-show-form'
        },
        feedback_client_voice_connect_analytics_foot_print_modal: {
          bind: 'analytics-open-modal',
          analytics: ANALYTIC_FEEDBACK_CLIENT_VOICE_CONNECT.pageViewInit
        },
        feedback_client_voice_connect_analytics_foot_print_change_page: {
          bind: 'analytics-page-change',
          analytics: ANALYTIC_FEEDBACK_CLIENT_VOICE_CONNECT.pageViewInit
        },
        feedback_client_voice_connect_analytics_foot_print_step_change: {
          bind: 'analytics-step-change',
          analytics: ANALYTIC_FEEDBACK_CLIENT_VOICE_CONNECT.pageViewInit
        },
        feedback_client_voice_connect_analytics_foot_print_page_init: {
          bind: 'analytics-init-form-opened',
          analytics: ANALYTIC_FEEDBACK_CLIENT_VOICE_CONNECT.pageViewInit
        },
        feedback_client_voice_connect_analytics_foot_print_toast: {
          bind: 'analytics-open-toast',
          analytics: ANALYTIC_FEEDBACK_CLIENT_VOICE_CONNECT.pageViewInit
        },
        bbva_controller_userdata_send: {
          bind: 'bbva-controller-client-voice-connect-userdata-send'
        },
        global_device_info_get_platform: {
          bind: 'get-native-local-storage-device'
        },
        global_device_info_get_model: {
          bind: 'get-native-local-storage-device'
        },
        global_device_info_get_manufacturer: {
          bind: 'get-native-local-storage-device'
        },
        global_manage_feedback_logout: {
          bind: 'bbva-controller-client-voice-continue-standard-logout'
        },
        global_feedback_navigate_to_logout: {
          bind: 'bbva-controller-client-voice-do-logout'
        }
      }
    }
  }
});

const glomoAlertManagerSpherica = (CONFIG, LANGUAGE) => {
  return {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      language: LANGUAGE,
      localCurrency: utils.getLocalCurrency(),
      native: CONFIG.nativeShell || false,
      className: (CONFIG.nativeIos || false) ? 'ios-top-padding' : '',
      iOSFixedHeader: CONFIG.nativeIos ? false : '',
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          },
          global_glomo_signature_open_modal_error_spherica: {
            bind: 'openWithSettings'
          }
        },
        out: {
          global_delete_number_contact_agenda_confirm: {
            bind: 'alert-DELETE-NUMBER-CONTACT-AGENDA-accept'
          },
          global_configuration_fido_success_close_spherica: {
            bind: 'alert-modal-close-secondary-button-CONFIGURATION-FIDO-SUCCESS',
            backStep: true
          },
          pockets_exit_update_accept: {
            bind: 'alert-LEAVE-UPDATE-POCKET-accept',
            backStep: true
          },
          mortgage_exit_error_mortgage_lead_service: {
            bind: 'alert-ERROR-MORTGAGE-SERVICE-accept'
          },
          modal_logout_automatic: {
            bind: 'alert-AUTOMATIC-LOGOUT-accept'
          },
          TRANSFER_SUCCESS_LINK_EXTERNAL: {
            bind: 'alert-LOGOUT-accept'
          },
          global_manage_feedback_CVC_logout: {
            bind: 'alert-LOGOUT-accept'
          },
          geolocation_logout_on_retry: {
            bind: 'alert-logout-app-accept'
          },
          inapp_crm_advanced_success_link_external: {
            bind: 'alert-LOGOUT-INAPP-CRM-accept'
          },
          mortgage_exit_mortage_lead_back: {
            bind: 'alert-EXIT-MORTGAGE-LEAD-accept'
          },
          voice_accept_go_to_configurations: {
            bind: 'alert-voice-permission-permanently-rejected-accept'
          },
          device_access_registration_required_accept: {
            bind: 'alert-DEVICE-ACTIVATION-REGISTRATION-REQUIRED-accept',
            link: {
              page: 'digitalActivation',
              skipHistory: true
            }
          },
          device_access_registration_required_cancel: {
            bind: 'alert-DEVICE-ACTIVATION-REGISTRATION-REQUIRED-cancel'
          },
          mobile_payment_turn_on_digital_card: {
            bind: 'alert-NAVIGATION-TO-PAYMENTS-MOBILE-PAYMENT-DIGITAL-OFF-ERROR-accept'
          },
          dynamics_and_rewards_invite_friend_exit_modal: {
            bind: 'alert-dynamicsAndRewards-accept'
          },
          key_recovery_accept_modify_pass_format_page_view: {
            bind: 'alert-CELLS-KEY-RECOVERY-UPDATE-INIT-accept'
          },
          key_recovery_exit_modify_pass_format_page_view: {
            bind: 'alert-CELLS-KEY-RECOVERY-UPDATE-INIT-cancel'
          },
          global_configuration_fido_success_accept_spherica: {
            bind: 'alert-CONFIGURATION-FIDO-SUCCESS-accept'
          },
          device_access_st_enrollment_brs_maintenance: {
            bind: 'alert-modal-close-secondary-button-BRS-MAINTENANCE'
          }
        }
      }
    }
  };
};

const glomoAlertManager = (CONFIG, LANGUAGE) => {
  return {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager',
    properties: {
      language: LANGUAGE,
      localCurrency: utils.getLocalCurrency(),
      native: CONFIG.nativeShell || false,
      className: (CONFIG.nativeIos || false) ? 'ios-top-padding' : '',
      iOSFixedHeader: CONFIG.nativeIos ? false : '',
      cellsConnections: {
        in: {
          global_discreet_mode_get_local_storage_error_modal: {
            bind: 'openWithSettings'
          },
          close_modal_to_credit_card_holder_page_tdc: {
            bind: 'close'
          },
          close_modal_to_dashboard_from_offer_tdc: {
            bind: 'close'
          },
          cp_info_modal: {
            bind: 'openWithSettings'
          },
          cp_error_retry_modal: {
            bind: 'openWithSettings'
          },
          cp_modal_confirm_hide_equity: {
            bind: 'openWithSettings'
          },
          cp_error_modal_products: {
            bind: 'openWithSettings'
          },
          PRT_OPEN_MODAL: {
            bind: 'openWithSettings'
          },
          codicel_agree_and_remove_consent_CODICEL_CONSENT_OPEN_MODAL: {
            bind: 'openWithSettings'
          },
          pocket_close_update: {
            bind: 'openWithSettings'
          },
          pockets_detail_delete_pocket: {
            bind: 'openWithSettings'
          },
          MCM_MODAL_ERROR_GET_LIST_CONV_CH: {
            bind: 'openWithSettings'
          },
          MCM_SHOW_MODAL_ERROR_DELETE: {
            bind: 'openWithSettings'
          },
          MCC_OPEN_MODAL_ERROR_CH: {
            bind: 'openWithSettings'
          },
          MCM_OPEN_MODAL_ONBOARDING_CHANNEL: {
            bind: 'openWithSettings'
          },
          global_alert_manager_open_with_settings: {
            bind: 'openWithSettings'
          },
          global_alert_modal_close: {
            bind: 'close'
          },
          global_generate_virtual_card_call_office: {
            bind: 'close'
          },
          global_share_receipt_error_modal: {
            bind: 'openWithSettings'
          },
          global_glomo_card_activations_first_access: {
            bind: 'openWithSettings'
          },
          bbva_manager_card_dynamic_cvv_error: {
            bind: 'openWithSettings'
          },
          global_card_product_detail_open_modal_event: {
            bind: 'openWithSettings'
          },
          DIGITAL_ACTIVATION_QR_ERROR_MODAL_ACCEPT: {
            bind: 'close'
          },
          DIGITAL_ACTIVATION_QR_ERROR_MODAL_CANCEL: {
            bind: 'close'
          },
          DIGITAL_ACTIVATION_CLOSE_MODAL_CALL: {
            bind: 'close'
          },
          DIGITAL_ACTIVATION_RESET_ADVISOR_CHAT: {
            bind: 'close'
          },
          DIGITAL_ACTIVATION_RESET_BRANCH_OFFICES: {
            bind: 'close'
          },
          global_profit_points_detail_modal_help: {
            bind: 'openWithSettings'
          },
          global_profit_points_modal_off: {
            bind: 'openWithSettings'
          },
          global_profit_points_modal_inactive: {
            bind: 'openWithSettings'
          },
          global_profit_points_modal_not_cards: {
            bind: 'openWithSettings'
          },
          profile_contact_details_confirm_delete: {
            bind: 'openWithSettings'
          },
          global_profile_info_secure_phone: {
            bind: 'openWithSettings'
          },
          global_profile_info_main_mail: {
            bind: 'openWithSettings'
          },
          profile_contact_detail_modify_contact_detail_error: {
            bind: 'openWithSettings'
          },
          global_account_detail_open_transfer_bubble: {
            bind: 'openWithSettings'
          },
          global_confirm_logout_message: {
            bind: 'openWithSettings'
          },
          SHOW_SPEI_CLARIFICATION: {
            bind: 'openWithSettings'
          },
          SHOW_ALIAS_IN_USE_MODAL: {
            bind: 'openWithSettings'
          },
          SET_CHANGE_EXCHANGE_RATES_ALERT: {
            bind: 'openWithSettings'
          },
          CLOSE_CONFIRM_TRANSFERS: {
            bind: 'openWithSettings'
          },
          CLOSE_CONFIRM_TAG: {
            bind: 'openWithSettings'
          },
          global_block_and_replacement_exit_process_open_modal: {
            bind: 'openWithSettings'
          },
          global_contacts_agenda_open_delete_confirm_modal: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_modal_help_info: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_modal_help_info_offer: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_modal_error_info: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_modal_error_time: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_modal_info_ipab: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_review_modal_gat: {
            bind: 'openWithSettings'
          },
          global_deposits_error_operation_simualte_exit: {
            bind: 'openWithSettings'
          },
          global_deposits_error_operation_simualte_retry: {
            bind: 'openWithSettings'
          },
          global_deposits_puchase_modal_exit: {
            bind: 'openWithSettings'
          },
          confirm_logout_automatic_message: {
            bind: 'openWithSettings'
          },
          login_change_user: {
            bind: 'openChangeUser'
          },
          login_error: {
            bind: 'openWithSettings'
          },
          login_error_max_retries: {
            bind: 'openWithSettings'
          },
          customers_error: {
            bind: 'openWithSettings'
          },
          deposit_open_transaction_detail_help_modal: {
            bind: 'openWithSettings'
          },
          global_card_info_bottom_modal: {
            bind: 'openWithSettings'
          },
          global_transfer_summary_open_exchange_rate: {
            bind: 'openWithSettings'
          },
          global_transfer_summary_open_taxes_modal: {
            bind: 'openWithSettings'
          },
          global_card_detail_open_confirm_activation_digital_purchase_modal: {
            bind: 'openWithSettings'
          },
          global_additional_card_detail_open_error_activation_digital_purchase_modal: {
            bind: 'openWithSettings'
          },
          global_additional_card_detail_open_success_activation_digital_purchase_modal: {
            bind: 'openWithSettings'
          },
          global_hanlder_native_back_button: {
            bind: 'handleNativeBackButton'
          },
          global_points_transfer_show_close_confirm_channel: {
            bind: 'openWithSettings'
          },
          global_points_raffle_show_close_confirm_channel: {
            bind: 'openWithSettings'
          },
          global_profile_contact_detail_show_close_confirm: {
            bind: 'openWithSettings'
          },
          global_points_redeem_purchases_modal_pending: {
            bind: 'openWithSettings'
          },
          global_open_profile_modal: {
            bind: 'openWithSettings'
          },
          global_card_orange_over_draft_modal: {
            bind: 'openWithSettings'
          },
          global_card_detail_open_activation_error: {
            bind: 'openWithSettings'
          },
          global_additional_card_detail_open_activation_error: {
            bind: 'openWithSettings'
          },
          global_card_detail_open_card_activation_help: {
            bind: 'openWithSettings'
          },
          global_additional_card_detail_open_card_activation_help: {
            bind: 'openWithSettings'
          },
          global_deposit_sale_exit_confirmation: {
            bind: 'openWithSettings'
          },
          global_deposit_sale_error_operation_sale_exit: {
            bind: 'openWithSettings'
          },
          global_deposit_sale_error_operation_sale_out_time: {
            bind: 'openWithSettings'
          },
          global_deposit_sale_error_operation_sale_blocked_account: {
            bind: 'openWithSettings'
          },
          global_deposit_sale_error_operation_sale_account_not_active: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_INFO_OCR: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_NOTICE_PRIVACY: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_ADVICE_CAMERA: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_ADVICE_PDF: {
            bind: 'openWithSettings'
          },
          global_deposit_imposition_update_exit_confirmation: {
            bind: 'openWithSettings'
          },
          global_deposits_configuration_error_settled: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_ERROR_OPERATION_OUT_TIME: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_ERROR_OPERATION_IMPOSITION_EXIT: {
            bind: 'openWithSettings'
          },
          global_deposits_purchase_ERROR_OPERATION_IMPOSITION_RETRY: {
            bind: 'openWithSettings'
          },
          global_deposit_sale_error_process_expiration: {
            bind: 'openWithSettings'
          },
          global_deposit_sale_alert_out_time: {
            bind: 'openWithSettings'
          },
          global_card_detail_open_payment_details_help: {
            bind: 'openWithSettings'
          },
          global_card_increment_open_modal_confirm: {
            bind: 'openWithSettings'
          },
          global_profit_points_detail_mid_modal_external_web: {
            bind: 'openWithSettings'
          },
          global_points_transfer_error_channel: {
            bind: 'openWithSettings'
          },
          global_raffle_redemption_error_channel: {
            bind: 'openWithSettings'
          },
          global_card_credit_card_payment_show_close_confirm: {
            bind: 'openWithSettings'
          },
          global_card_credit_card_payment_own_tranfer_error: {
            bind: 'openWithSettings'
          },
          global_exit_interest_simulator_modal: {
            bind: 'openWithSettings'
          },
          global_more_info_interest_simulator_modal: {
            bind: 'openWithSettings'
          },
          global_card_credit_card_payment_simulation_error: {
            bind: 'openWithSettings'
          },
          global_transactions_list_modal_info_card: {
            bind: 'openWithSettings'
          },
          global_transaction_detail_modal_pendings: {
            bind: 'openWithSettings'
          },
          global_edit_card_limits_show_exit_confirm: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_list_credit_card_limits_error_modal: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_edit_credit_card_limits_error_modal: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_edit_title_modal: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_icon_cancel_modal: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_icon_help_modal: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_error_expired_modal: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_header_modal: {
            bind: 'openWithSettings',
            previousState: false
          },
          global_open_glomo_alert_manager_title_modal: {
            bind: 'openWithSettings',
            previousState: false
          },
          global_open_modal_request_error_international_transfers: {
            bind: 'openWithSettings'
          },
          global_bank_caution_modal_international_transfer: {
            bind: 'openWithSettings'
          },
          global_reward_detail_redemption_simulate_error: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_faq_redeem: {
            bind: 'openWithSettings'
          },
          global_open_glomo_alert_manager_faq_raffle: {
            bind: 'openWithSettings'
          },
          global_card_transaction_detail_to_points_redeem_purchases_convert_simulate_error: {
            bind: 'openWithSettings'
          },
          global_points_redeem_purchases_convert_error: {
            bind: 'openWithSettings'
          },
          global_points_redeem_show_close_confirm_channel: {
            bind: 'openWithSettings'
          },
          global_open_additional_card_detail_edit_available_balance_no_active_modal: {
            bind: 'openWithSettings'
          },
          global_open_additional_card_detail_edit_available_balance_no_balance_modal: {
            bind: 'openWithSettings'
          },
          global_standard_non_blocking_error_alert: {
            bind: 'openWithSettings'
          },
          global_standard_blocking_error_alert: {
            bind: 'openWithSettings'
          },
          curpPage_CONFIRM_OPEN_MODAL: {
            bind: 'openWithSettings'
          },
          curpPage_MODAL_ERROR: {
            bind: 'openWithSettings'
          },
          global_checks_management_service_terms_open_modal: {
            bind: 'openWithSettings'
          },
          global_financing_purchase_show_alert_modal: {
            bind: 'openWithSettings'
          },
          global_glomo_signature_open_modal_error: {
            bind: 'openWithSettings'
          },
          global_account_edit_alias_error_modal: {
            bind: 'openWithSettings'
          },
          global_account_edit_alias_error_retry_modal: {
            bind: 'openWithSettings'
          },
          account_exit_edit_alias_request_confirm: {
            bind: 'openWithSettings'
          },
          global_card_edit_alias_error_modal: {
            bind: 'openWithSettings'
          },
          global_card_edit_alias_error_retry_modal: {
            bind: 'openWithSettings'
          },
          card_exit_edit_alias_request_confirm: {
            bind: 'openWithSettings'
          },
          fund_exit_edit_alias_request_confirm: {
            bind: 'openWithSettings'
          },
          global_feedback_exit_confirm_modal: {
            bind: 'openWithSettings'
          },
          global_feedback_close_exit_confirm_modal: {
            bind: 'close'
          },
          global_checks_management_open_info_modal: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_review_on_boarding_qr_modal: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_detail_qr_success_modal: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_detail_qr_error_modal: {
            bind: 'openWithSettings'
          },
          global_alert_cardless_withdrawal_detail_error_get_transfer: {
            bind: 'openWithSettings'
          },
          upgrade_account_open_operation_modal: {
            bind: 'openWithSettings'
          },
          upgrade_account_open_conditions_modal: {
            bind: 'openWithSettings'
          },
          upgrade_account_visit_branch_modal_pep: {
            bind: 'openWithSettings'
          },
          upgrade_account_visit_branch_modal_money_not_own: {
            bind: 'openWithSettings'
          },
          upgrade_account_visit_branch_modal_international_transfers: {
            bind: 'openWithSettings'
          },
          upgrade_account_visit_branch_modal_only_mx: {
            bind: 'openWithSettings'
          },
          open_upgrade_account_pep_modal: {
            bind: 'openWithSettings'
          },
          global_oc_loan_offer_page_open_modal: {
            bind: 'openWithSettings'
          },
          global_loan_edit_alias_error_modal: {
            bind: 'openWithSettings'
          },
          global_loan_edit_alias_error_retry_modal: {
            bind: 'openWithSettings'
          },
          global_exit_modal_international_transfer: {
            bind: 'openWithSettings'
          },
          loan_exit_edit_alias_request_confirm: {
            bind: 'openWithSettings'
          },
          global_edit_alias_exit_modal: {
            bind: 'openWithSettings'
          },
          global_qr_reader_manager_show_error: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_review_qr_error_modal: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_review_qr_success_modal: {
            bind: 'openWithSettings'
          },
          _SHOW_ALIAS_IN_USE_MODAL: {
            bind: 'openWithSettings'
          },
          upgrade_account_request_post_civil_registries_error: {
            bind: 'openWithSettings'
          },
          upgrade_account_option_media_capture_right_click_modal: {
            bind: 'openWithSettings'
          },
          global_upgrade_account_show_close_confirm: {
            bind: 'openWithSettings'
          },
          upgrade_account_verification_exit_modal: {
            bind: 'openWithSettings'
          },
          upgrade_account_verification_info_modal: {
            bind: 'openWithSettings'
          },
          global_open_alert_manager: {
            bind: 'openWithSettings'
          },
          oc_payroll_advance_page_open_modal: {
            bind: 'openWithSettings'
          },
          codicel_peer_to_peer_send_OPEN_MODAL_ENROLL_CODI: {
            bind: 'openWithSettings'
          },
          codicel_peer_to_peer_send_OPEN_ERROR_MODAL_SAME_PHONE: {
            bind: 'openWithSettings'
          },
          OPEN_MODAL_TERMINOS_AND_CONDITION: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_open_on_boarding: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_open_exit_modal: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_error_modal: {
            bind: 'openWithSettings'
          },
          global_cardless_withdrawal_review_open_help_modal: {
            bind: 'openWithSettings'
          },
          open_upgrade_account_privacy_modal: {
            bind: 'openWithSettings'
          },
          global_modal_international_transfers_message: {
            bind: 'openWithSettings'
          },
          global_modal_international_transfers_half_modal: {
            bind: 'openWithSettings'
          },
          global_modal_internation_transfers_fraudulent_modal: {
            bind: 'openWithSettings'
          },
          global_modal_international_transfers_change_destiny: {
            bind: 'openWithSettings'
          },
          global_modal_international_request_banks_interantional_error: {
            bind: 'openWithSettings'
          },
          global_modal_international_transfers_exit_confirm: {
            bind: 'openWithSettings'
          },
          global_account_set_pending_deposit_balance_modal_info: {
            bind: 'openWithSettings'
          },
          transfersSuccess_SHOW_SPEI: {
            bind: 'openWithSettings'
          },
          profile_show_half_screen_modal: {
            bind: 'openWithSettings'
          },
          profile_show_full_screen_modal: {
            bind: 'openWithSettings'
          },
          clean_card_operations_OPEN_EXIT_MODAL_INFO: {
            bind: 'openWithSettings'
          },
          clean_card_operations_OPEN_PIN_REQUEST_ERROR_MODAL: {
            bind: 'openWithSettings'
          },
          clean_card_operations_OPEN_ACTIVATE_ERROR_MODAL: {
            bind: 'openWithSettings'
          },
          clean_card_operations_success_card_activation: {
            bind: 'openWithSettings'
          },
          clean_card_operations_OPEN_QR_CODE_INVALID: {
            bind: 'openWithSettings'
          },
          codicel_peer_to_peer_send_OPEN_MODAL_PERMISSION_DENIED_CONTACTS: {
            bind: 'openWithSettings'
          },
          codicel_peer_to_peer_send_OPEN_WARNING_MODAL_CHANGE_RECEIVER: {
            bind: 'openWithSettings'
          },
          codicel_peer_to_peer_send_REQUEST_LEAVE_PAGE: {
            bind: 'openWithSettings'
          },
          global_sustainability_send_tips_modal_config: {
            bind: 'openWithSettings'
          },
          global_sustainability_first_onboarding: {
            bind: 'openWithSettings'
          },
          global_sustainability_send_related_tip_modal_config: {
            bind: 'openWithSettings'
          },
          funds_withdrawal_cancel_modal: {
            bind: 'cancel'
          },
          fatca_validation_SHOW_FULL_SCREEN_MODAL: {
            bind: 'openWithSettings'
          },
          fatca_validation_SHOW_HALF_SCREEN_MODAL: {
            bind: 'openWithSettings'
          },
          fatca_validation_residence_form_SHOW_HALF_SCREEN_MODAL: {
            bind: 'openWithSettings'
          },
          fatca_validation_residences_list_SHOW_HALF_SCREEN_MODAL: {
            bind: 'openWithSettings'
          },
          atm_locator_open_information_modal: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_PAGE_SHOW_ALERT_MANAGER_UPDATE_ADVICE: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_PAGE_SHOW_ALERT_MANAGER_ERROR: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_DELETE_FILE: {
            bind: 'openWithSettings'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_PAGE_SHOW_ALERT_MANAGER_DELETE_FILE_REVERSE: {
            bind: 'openWithSettings'
          },
          updateAddressStepInputPage_OPEN_ERROR_MODAL: {
            bind: 'openWithSettings'
          },
          global_credit_bureau_tooltip_info: {
            bind: 'openWithSettings'
          },
          global_credit_bureau_document_authorization: {
            bind: 'openWithSettings'
          },
          global_credit_bureau_exit_alert: {
            bind: 'openWithSettings'
          },
          global_credit_bureau_error_request_contract: {
            bind: 'openWithSettings'
          },
          global_credit_bureau_exit_close_modal: {
            bind: 'alert-CREDIT-BUREAU-ERROR-REQUEST-CONTRACT-EXIT-close-modal'
          },
          global_open_modal_checks_management: {
            bind: 'openWithSettings'
          },
          update_national_id_SHOW_ALERT_MANAGER_NOTICE_PRIVACY: {
            bind: 'openWithSettings'
          },
          update_national_id_show_document_info_modal: {
            bind: 'openWithSettings'
          },
          update_national_id_show_confirm_remove_photos: {
            bind: 'openWithSettings'
          },
          update_national_id_show_error_modal: {
            bind: 'openWithSettings'
          },
          update_national_id_show_exit_flow_modal: {
            bind: 'openWithSettings'
          },
          update_national_id_close_active_modal: {
            bind: 'openWithSettings'
          },
          checks_deposits_photos_open_back_with_settings: {
            bind: 'openWithSettings'
          },
          kycValidation_OPEN_FULL_MODAL: {
            bind: 'openWithSettings'
          },
          kycValidation_OPEN_HALF_MODAL: {
            bind: 'openWithSettings'
          },
          global_equity_edit_alias_error_modal: {
            bind: 'openWithSettings'
          },
          global_equity_edit_alias_error_retry_modal: {
            bind: 'openWithSettings'
          },
          equity_exit_edit_alias_request_confirm: {
            bind: 'openWithSettings'
          },
          global_btrader_edit_alias_error_modal: {
            bind: 'openWithSettings'
          },
          global_btrader_edit_alias_error_retry_modal: {
            bind: 'openWithSettings'
          },
          btrader_exit_edit_alias_request_confirm: {
            bind: 'openWithSettings'
          },
          offer_tdc_modal_open_from_page: {
            bind: 'openWithSettings'
          },
          offer_cta_modal_open_from_page: {
            bind: 'openWithSettings'
          },
          offer_tdc_modal_page_reset_page: {
            bind: 'close'
          },
          rechargeTag_OPEN_MODAL_ITEMS: {
            bind: 'openWithSettings'
          },
          unitLinked_exit_edit_alias_request_confirm: {
            bind: 'openWithSettings'
          },
          global_non_preapproved_credit_card_modal: {
            bind: 'openWithSettings'
          },
          CCH_SHOW_MY_HOME_ALERT: {
            bind: 'openWithSettings'
          },
          CCH_SHOW_BRANCH_OFFICE_ALERT: {
            bind: 'openWithSettings'
          },
          CCH_HELP_BUTTON_ALERT: {
            bind: 'openWithSettings'
          },
          operational_limits_modal_error_get: {
            bind: 'openWithSettings'
          },
          operational_limits_modal_error_patch: {
            bind: 'openWithSettings'
          },
          operational_limits_disable_button_tapped: {
            bind: 'openWithSettings'
          },
          operational_limits_return_settings_page: {
            bind: 'close'
          },
          operational_limits_show_modal_exit_flow: {
            bind: 'openWithSettings'
          },
          debit_card_tracking_error_send: {
            bind: 'openWithSettings'
          },
          debit_card_tracking_tracking_error_info_not_available: {
            bind: 'openWithSettings'
          },
          debitCardTrackingDetail_modal_error_address: {
            bind: 'openWithSettings'
          },
          cleanCardOperations_show_atm_pre_activation: {
            bind: 'close'
          },
          cleanCardOperations_success_card_pre_activation: {
            bind: 'openWithSettings'
          },
          cleanCardOperations_failed_card_pre_activation: {
            bind: 'openWithSettings'
          },
          global_equity_contracts_operation_show_exit_warning_message: {
            bind: 'openWithSettings'
          },
          global_equity_contracts_common_error: {
            bind: 'openWithSettings'
          },
          global_equity_contracts_full_error: {
            bind: 'openWithSettings'
          },
          global_equity_open_management_details_services: {
            bind: 'openWithSettings'
          },
          global_equity_contracts_withdrawal_change_operation_warning: {
            bind: 'openWithSettings'
          },
          global_equity_contracts_detail_show_tooltip: {
            bind: 'openWithSettings'
          },
          global_alert_manager_error_list_biometrics: {
            bind: 'openWithSettings'
          },
          cancelled_user_action: {
            bind: 'close'
          }
        },
        out: {
          non_pre_approved_car_certificate_CONFIRM_CHANGE_DATA: {
            bind: 'alert-change-data-warning-accept'
          },
          non_pre_approved_car_certificate_RESET_NO_PRE_APPROVED_CAR_FROM_EXIT_ALERT: {
            bind: 'alert-exit-confirmation-warning-accept'
          },
          non_pre_approved_car_certificate_REJECTION_CASE_ACCEPT: {
            bind: 'alert-loan-rejection-case-accept'
          },
          non_pre_approved_car_certificate_REJECTION_CASE_CLOSE: {
            bind: 'alert-loan-rejection-case-cancel'
          },
          non_pre_approved_car_certificate_SHOW_CONFIRM_ZONE_FROM_EXIT_ALERT: {
            bind: 'alert-exit-confirmation-warning-cancel'
          },
          non_pre_approved_car_certificate_CONFIRM_EXIT: {
            bind: 'alert-retry-customer-error-accept'
          },
          non_pre_approved_car_certificate_RESET_NO_PRE_APPROVED_CAR_FROM_SAVING_ERROR: {
            bind: 'alert-retry-customer-error-cancel'
          },
          non_pre_approved_car_certificate_RESET_NO_PRE_APPROVED_CAR_FROM_BLOCKING_ERROR_CROSS: {
            bind: 'alert-blocking-error-cancel'
          },
          non_pre_approved_car_certificate_RESET_NO_PRE_APPROVED_CAR_FROM_BLOCKING_ERROR: {
            bind: 'alert-blocking-error-accept'
          },
          non_pre_approved_car_certificate_CASE_2_ICON_UBICATION: {
            bind: 'link-ubication-clicked'
          },
          KEY_RECOVERY_ACCEPT_CHANGE_PASSWORD: {
            bind: 'alert-ERROR-PASSWORD-CHANGE-accept'
          },
          KEY_RECOVERY_EXIT_CHANGE_PASSWORD: {
            bind: 'alert-ERROR-PASSWORD-CHANGE-cancel'
          },
          KEY_RECOVERY_EXIT_CANCEL_CHANGE_PASSWORD_ACCEPT: {
            bind: 'alert-EXIT-CANCEL-CHANGE-PASSWORD-accept'
          },
          KEY_RECOVERY_ERROR_MODAL_CHANGE_PASSWORD: {
            bind: 'alert-ERROR-CHANGE-PASSWORD-accept'
          },
          KEY_RECOVERY_ACCEPT_CHANGE_PASSWORD_FORMAT_VIEW: {
            bind: 'alert-CELLS-KEY-RECOVERY-UPDATE-INIT-accept'
          },
          KEY_RECOVERY_EXIT_CHANGE_PASSWORD_FORMAT_VIEW: {
            bind: 'alert-CELLS-KEY-RECOVERY-UPDATE-INIT-cancel'
          },
          facial_recognition_accept_error_modal: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-accept'
          },
          facial_recognition_accept_error_modal_max_attempts: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-MAX-ATTEMPTS-accept'
          },
          facial_recognition_cancel_error_modal: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-cancel'
          },
          facial_recognition_cancel_error_modal_max_attempts: {
            bind: 'alert-FACIAL-RECOGNITION-INCORRECT-IDENTITY-MAX-ATTEMPTS-cancel'
          },
          facial_validation_cancel_error_modal: {
            bind: 'alert-facial-validation-error-cancel'
          },
          facial_ine_cancel_error_modal: {
            bind: 'alert-FACIAL-RECOGNITION-COMMUNICATION-INE-cancel'
          },
          facial_ine_error_modal_search_branch: {
            bind: 'alert-FACIAL-RECOGNITION-COMMUNICATION-INE-accept'
          },
          facial_recognition_open_settings_zoom: {
            bind: 'alert-MODAL-CAMERA-FACIAL-PERMISSIONS-accept'
          },
          facial_recognition_camera_modalzoom_cancel: {
            bind: 'alert-MODAL-CAMERA-FACIAL-PERMISSIONS-cancel',
            backStep: true
          },
          facial_recognition_request_call_bbva_line: {
            bind: 'global-facial-recognition-call-bbva-line'
          },
          PRODUCT_MORE_INFO_ALERT_MODAL_EXTERNAL_LINK_ACCEPT: {
            bind: 'alert-modal-external-link-accept'
          },
          DIGITAL_ACTIVATION_ACCEPT_REGISTER_MODAL: {
            bind: 'alert-register-info-accept'
          },
          DIGITAL_ACTIVATION_CLOSE_REGISTER_MODAL: {
            bind: 'alert-register-info-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT_USER_WITH_CREDIT_CARD: {
            bind: 'alert-user-with-card-accept'
          },
          DIGITAL_ACTIVATION_CLOSE_USER_WITH_CREDIT_CARD: {
            bind: 'alert-user-with-card-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT_INVALID_CREDIT: {
            bind: 'alert-error-credit-accept'
          },
          DIGITAL_ACTIVATION_CLOSE_INVALID_CREDIT: {
            bind: 'alert-error-credit-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT_USER_REGISTRED: {
            bind: 'alert-user-registered-accept'
          },
          DIGITAL_ACTIVATION_CLOSE_USER_REGISTRED: {
            bind: 'alert-user-registered-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT_INVALID_PHONE: {
            bind: 'alert-error-phone-number-accept'
          },
          DIGITAL_ACTIVATION_CLOSE_INVALID_PHONE: {
            bind: 'alert-error-phone-number-cancel'
          },
          global_discreet_mode_deactivate_accept: {
            bind: 'alert-discreet-mode-modal-deactivate-accept'
          },
          global_discreet_mode_deactivate_cancel: {
            bind: 'alert-discreet-mode-modal-deactivate-cancel'
          },
          global_discreet_mode_activation_accept: {
            bind: 'alert-DISCREET-MODE-accept'
          },
          DIGITAL_ACTIVATION_ACCEPT_PROCESS_MODAL: {
            bind: 'alert-process-identity-accept'
          },
          DIGITAL_ACTIVATION_CANCEL_PROCESS_MODAL: {
            bind: 'alert-process-identity-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT_DOCUMENT_MODAL: {
            bind: 'alert-take-ine-document-accept'
          },
          DIGITAL_ACTIVATION_CANCEL_DOCUMENT_MODAL: {
            bind: 'alert-take-ine-document-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT_SELFIE_MODAL: {
            bind: 'alert-take-selfie-alive-accept'
          },
          DIGITAL_ACTIVATION_CANCEL_SELFIE_MODAL: {
            bind: 'alert-take-selfie-alive-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT_SUCCESS_VALIDATION_MODAL: {
            bind: 'alert-success-validation-identification-accept'
          },
          DIGITAL_ACTIVATION_ACCEPT_VERIFY_INFO_ERROR_MODAL: {
            bind: 'alert-error-verify-info-accept'
          },
          DIGITAL_ACTIVATION_CLOSE_VERIFY_INFO_ERROR_MODAL: {
            bind: 'alert-error-verify-info-cancel'
          },
          DIGITAL_ACTIVATION_RETRY_OPERATION_NOTAVAILABLE_MODAL: {
            bind: 'alert-operation-not-available-accept'
          },
          DIGITAL_ACTIVATION_RETRY_COMMUNICATION_INE_MODAL: {
            bind: 'alert-communication-error-ine-accept'
          },
          global_alert_manager_generic_error_accept: {
            bind: 'alert-GENERIC-ERROR-accept'
          },
          global_account_credit_card_payment_accept_exit: {
            bind: 'alert-exit-account-credit-card-payment-accept'
          },
          global_blackhawk_purchase_review_accept_blackhawk_page: {
            bind: 'alert-open-modal-navigation-accept'
          },
          global_blackhawk_purchase_review_exit_review: {
            bind: 'alert-open-modal-confirm-exit-review-accept'
          },
          global_blackhawk_purchase_detail_exit_operative: {
            bind: 'alert-confirm-exit-purchase-accept'
          },
          BLOCK_AND_REPLACEMENT_EXIT_PROCESS_ACCEPT: {
            bind: 'alert-block-replacement-exit-process-accept',
            backStep: true
          },
          BLOCK_AND_REPLACEMENT_CONDITIONS_ERROR_MODAL_ACCEPT: {
            bind: 'alert-BLOCK-REPLACEMENT-CONDITIONS-ERROR-MODAL-accept',
            backStep: true,
            skipHistory: true
          },
          BLOCK_AND_REPLACEMENT_GENERIC_ERROR_MODAL_ACCEPT: {
            bind: 'alert-error-modal-block-and-replacement-accept',
            backStep: true,
            skipHistory: true
          },
          mortgage_exit_mortage_lead_back: {
            bind: 'alert-EXIT-MORTGAGE-LEAD-accept'
          },
          mortgage_new_simulate: {
            bind: 'alert-EXCEPTION-IN-SIMULATION-accept'
          },
          mortgage_exit_error_mortgage_lead_service: {
            bind: 'alert-ERROR-MORTGAGE-SERVICE-accept'
          },
          deferred_structured_signature_return_to_dashboard: {
            bind: 'alert-deferred-structured-exit-accept'
          },
          deferred_contract_signature_return_to_dashboard: {
            bind: 'alert-deferred-contract-exit-accept'
          },
          DIGITAL_ACTIVATION_SHOW_CALL_BBVA_LINE: {
            bind: 'digital-activation-show-call-bbva-line'
          },
          DIGITAL_ACTIVATION_OPEN_BRANCH_OFFICES: {
            bind: 'digital-activation-show-branch-offices'
          },
          DIGITAL_ACTIVATION_RESET_BRANCH_OFFICES: {
            bind: 'digital-activation-show-branch-offices'
          },
          DIGITAL_ACTIVATION_OPEN_BBVA_LINK: {
            bind: 'digital-activation-show-bbva-link'
          },
          DIGITAL_ACTIVATION_ADDITIONAL_ACCEPT: {
            bind: 'alert-DIGITAL-ACTIVATION-ADDITIONAL-accept'
          },
          DIGITAL_ACTIVATION_ADDITIONAL_CANCEL: {
            bind: 'alert-DIGITAL-ACTIVATION-ADDITIONAL-cancel'
          },
          DIGITAL_ACTIVATION_INVALID_CARD_ERROR_ACCEPT: {
            bind: 'alert-DIGITAL-ACTIVATION-INVALID-CARD-ERROR-accept'
          },
          DIGITAL_ACTIVATION_INVALID_CARD_ERROR_CANCEL: {
            bind: 'alert-DIGITAL-ACTIVATION-INVALID-CARD-ERROR-cancel'
          },
          DIGITAL_ACTIVATION_INVALID_CURP_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INVALID-CURP-accept'
          },
          DIGITAL_ACTIVATION_NOT_AVAILABLE_APP_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-NOT-AVAILABLE-APP-accept'
          },
          DIGITAL_ACTIVATION_LOCKED_TOKEN_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-LOCKED-TOKEN-accept'
          },
          DIGITAL_ACTIVATION_INVALID_CURP_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INVALID-CURP-cancel'
          },
          DIGITAL_ACTIVATION_DM_RESET_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-UNIDENTIFIED-NOTIFICATIONS-accept'
          },
          DIGITAL_ACTIVATION_DM_RESET_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-UNIDENTIFIED-NOTIFICATIONS-cancel'
          },
          DIGITAL_ACTIVATION_INTERRUMPED_MODAL_RETRY: {
            bind: 'alert-DIGITAL-ACTIVATION-INTERRUMPED-CONECCTION-accept'
          },
          DIGITAL_ACTIVATION_INTERRUMPED_DM_RESET_ACCEPT: {
            bind: 'alert-DIGITAL-ACTIVATION-INTERRUMPED-CONECCTION-MAX-TRY-accept'
          },
          DIGITAL_ACTIVATION_PHYSICAL_CARD_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-PHYSICAL-CARD-accept'
          },
          DIGITAL_ACTIVATION_PHYSICAL_CARD_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-PHYSICAL-CARD-cancel'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-accept'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-cancel'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_MAX_TRY_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-MAX-TRY-accept'
          },
          DIGITAL_ACTIVATION_INCORRECCT_DATA_MAX_TRY_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-INCORRECT-DATA-MAX-TRY-cancel'
          },
          DIGITAL_ACTIVATION_APPLICATION_BLOCKED_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-APPLICATION-BLOCKED-accept'
          },
          DIGITAL_ACTIVATION_APPLICATION_BLOCKED_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-APPLICATION-BLOCKED-cancel'
          },
          DIGITAL_ACTIVATION_REGISTER_USER_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-REGISTER-USER-accept'
          },
          DIGITAL_ACTIVATION_REGISTER_USER_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-REGISTER-USER-cancel'
          },
          DIGITAL_ACTIVATION_SAVE_SIGNATURE_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-SAVE-SIGNATURE-accept'
          },
          DIGITAL_ACTIVATION_SAVE_SIGNATURE_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-SAVE-SIGNATURE-cancel'
          },
          DIGITAL_ACTIVATION_HIRING_NOT_DONE_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-accept'
          },
          DIGITAL_ACTIVATION_HIRING_NOT_DONE_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-cancel'
          },
          DIGITAL_ACTIVATION_HIRING_NOT_DONE_MAX_TRY_ACCEPT: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-MAX-TRY-accept'
          },
          DIGITAL_ACTIVATION_HIRING_NOT_DONE_MAX_TRY_CANCEL: {
            bind: 'alert-CLOSE-DIGITAL-ACTIVATION-HIRING-NOT-DONE-MAX-TRY-cancel'
          },
          DIGITAL_ACTIVATION_ACCEPT: {
            bind: 'alert-DIGITAL-ACTIVATION-SUCCESS-accept'
          },
          DIGITAL_ACTIVATION_QR_ERROR_MODAL_CANCEL: {
            bind: 'alert-DIGITAL-ACTIVATION-ERROR-QR-MODAL-cancel'
          },
          DIGITAL_ACTIVATION_QR_ERROR_MODAL_ACCEPT: {
            bind: 'alert-DIGITAL-ACTIVATION-ERROR-QR-MODAL-accept'
          },
          digital_activation_camera_to_native: {
            bind: 'alert-DIGITAL-ACTIVATION-ERROR-QR-MODAL-accept',
            'forward-to-native': true
          },
          DIGITAL_ACTIVATION_RETRY_CALL_UP_EXIT: {
            bind: 'alert-DIGITAL-ACTIVATION-RETRY-CALL-UP-EXIT-accept'
          },
          DIGITAL_ACTIVATION_RETRY_CALL_UP_CANCEL: {
            bind: 'alert-DIGITAL-ACTIVATION-RETRY-CALL-UP-EXIT-cancel'
          },
          digital_activation_close_page_accepted: {
            bind: 'alert-DIGITAL-ACTIVATION-CLOSE-PAGE-accept'
          },
          DIGITAL_ACTIVATION_CLOSE_PAGE_CANCEL: {
            bind: 'alert-DIGITAL-ACTIVATION-CLOSE-PAGE-cancel'
          },
          DIGITAL_ACTIVATION_ERROR_EXIT_MODAL_ADDITIONAL: {
            bind: 'alert-ERROR-MODAL-ADDITIONAL-accept'
          },
          DIGITAL_ACTIVATION_HELP_PASSWORD_MODAL_ACCEPT: {
            bind: 'alert-help-password-modal-accept'
          },
          DIGITAL_ACTIVATION_ERROR_EXIT_MODAL: {
            bind: 'alert-GENERIC-ERROR-accept'
          },
          digital_activation_chat_request: {
            bind: 'digital-activation-show-branch-chat-advisor',
            'forward-to-native': true
          },
          DIGITAL_ACTIVATION_RESET_ADVISOR_CHAT: {
            bind: 'digital-activation-show-branch-chat-advisor'
          },
          DIGITAL_ACTIVATION_OPEN_PAGE_SUCCESS: {
            bind: 'glomo-alert-time-expire'
          },
          close_modal_to_dashboard_from_offer_tdc: {
            bind: 'alert-offertdc-cancel',
            skipHistory: true,
            link: {
              page: 'dashboard'
            }
          },
          close_modal_to_credit_card_holder_page_tdc: {
            bind: 'alert-offertdc-accept'
          },
          cp_confirm_update_prods: {
            bind: 'alert-cp-modal-confirm-accept'
          },
          cp_confirm_update_prods_cancel: {
            bind: 'alert-cp-modal-confirm-cancel'
          },
          cp_confirm_first_modal: {
            bind: 'alert-config-prods-info-accept',
            analytics: ANALYTICS_CONFIGURE_PRODUCTS.PAGE_VIEW_CONFIGURE_PRODUCTS
          },
          cp_confirm_first_modal_cancel: {
            bind: 'alert-config-prods-info-cancel',
            analytics: ANALYTICS_CONFIGURE_PRODUCTS.PAGE_VIEW_CONFIGURE_PRODUCTS
          },
          codicel_agree_and_remove_consent_CODICEL_AGREE_CLOSE_MODAL: {
            bind: 'alert-CODICEL-AGREE-INIT-MODAL-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_AGREE_ACCEPT_MODAL: {
            bind: 'alert-CODICEL-AGREE-INIT-MODAL-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_AGREE_TERMS_ACCEPT_MODAL: {
            bind: 'alert-CODICEL-AGREE-TERMS-MODAL-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_AGREE_TERMS_CANCEL_MODAL: {
            bind: 'alert-CODICEL-AGREE-TERMS-MODAL-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_OPERATION_SUCCESS_MODAL_EXIT: {
            bind: 'alert-CODICEL-OPERATION-SUCCESS-MODAL-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_OPERATION_SUCCESS_MODAL_CANCEL: {
            bind: 'alert-CODICEL-OPERATION-SUCCESS-MODAL-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_OPERATION_ERROR_DATA_ACCEPT: {
            bind: 'alert-CODICEL-CONSENT-DATA-ERROR-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_OPERATION_ERROR_DATA_CANCEL: {
            bind: 'alert-CODICEL-CONSENT-DATA-ERROR-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_OPERATION_ERROR_ACCEPT: {
            bind: 'alert-CODICEL-CONSENT-ERROR-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_OPERATION_ERROR_CANCEL: {
            bind: 'alert-CODICEL-CONSENT-ERROR-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_EXIT_OPERATIVE: {
            bind: 'alert-CODICEL-AGREE-EXIT-MODAL-accept'
          },
          codicel_agree_and_remove_consent_CODICEL_EXIT_OPERATIVE_EXIT: {
            bind: 'alert-CODICEL-AGREE-EXIT-MODAL-cancel'
          },
          codicel_agree_and_remove_consent_CODICEL_CONSENT_UPDATE: {
            bind: 'alert-CODICEL-CONFIRM-UNLINK-MODAL-accept'
          },
          codicel_peer_to_peer_send_open_settings_native: {
            bind: 'alert-CODICEL-PERMISSION-DENIED-CONTACTS-PLUGIN-accept'
          },
          codicel_peer_to_peer_send_warning_modal_change_receiver_accept: {
            bind: 'alert-CODICEL-WARNING-CHANGE-RECEIVER-accept'
          },
          codicel_peer_to_peer_send_warning_modal_change_receiver_cancel: {
            bind: 'alert-CODICEL-WARNING-CHANGE-RECEIVER-cancel'
          },
          codicel_peer_to_peer_send_leave_page_accept: {
            bind: 'alert-LEAVE-PAGE-CODICEL-accept'
          },
          codicel_accept_invite_contact: {
            bind: 'alert-CODICEL-INVITE-CONTACT-MODAL-accept'
          },
          codicel_accept_invite_contact_transfer: {
            bind: 'alert-CODICEL-INVITE-CONTACT-TRANSFER-MODAL-accept'
          },
          codicel_cancel_invite_contact_transfer: {
            bind: 'alert-CODICEL-INVITE-CONTACT-TRANSFER-MODAL-cancel'
          },
          codicel_accept_invite_pre_contact: {
            bind: 'alert-CODICEL-NOT-FUND-MODAL-accept'
          },
          codicel_cancel_invite_pre_contact: {
            bind: 'alert-CODICEL-NOT-FUND-MODAL-cancel'
          },
          codicel_p2p_open_settings_native: {
            bind: 'alert-CODICEL-PERMISSION-DENIED-CONTACTS-PLUGIN-accept',
            'forward-to-native': true
          },
          codicel_peer_to_peer_send_error_transfer_error: {
            bind: 'alert-CODICEL-TRANSFER-ERROR-accept'
          },
          codicel_peer_to_peer_send_error_transfer_error_exit: {
            bind: 'alert-CODICEL-TRANSFER-ERROR-cancel'
          },
          codicel_peer_to_peer_send_error_interbank_transfer_error: {
            bind: 'alert-CODICEL-INTERBANK-ERROR-finish-accept'
          },
          codicel_peer_to_peer_send_error_transfer_call_bbva: {
            bind: 'alert-CODICEL-TRANSFER-ERROR-CALL-BBVA-accept'
          },
          codicel_peer_to_peer_send_error_transfer_call_bbva_exit: {
            bind: 'alert-CODICEL-TRANSFER-ERROR-CALL-BBVA-cancel'
          },
          global_atm_locator_welcome_accept: {
            bind: 'alert-ATM-LOCATOR-WELCOME-accept'
          },
          global_configuration_fido_success_accept: {
            bind: 'alert-CONFIGURATION-FIDO-SUCCESS-accept'
          },
          global_atm_locator_welcome_cancel: {
            bind: 'alert-ATM-LOCATOR-WELCOME-cancel'
          },
          additional_card_detail_save_digital_card_activated: {
            bind: 'alert-confirm-activation-digital-card-accept'
          },
          global_additional_card_detail_card_received_activation_help_off: {
            bind: 'alert-additional-card-received-detail-card-activation-help-off-accept'
          },
          global_additional_card_detail_card_received_activation_help_on: {
            bind: 'alert-additional-card-received-detail-card-activation-help-on-accept'
          },
          atm_open_native_settings: {
            bind: 'open-native-settings'
          },
          global_deposits_puchase_modal_exit_accept: {
            bind: 'alert-DEPOSITS-PURCHASE-SALE-accept',
            backStep: true
          },
          global_cardless_withdrawal_historic_cancel_transaction: {
            bind: 'alert-cardless-widthdrawal-historic-cancel-modal-transaction-accept'
          },
          global_cardless_withdrawal_historic_cancel_transaction_detail: {
            bind: 'alert-cardless-widthdrawal-historic-cancel-modal-transaction-withdrawal-accept'
          },
          global_cardless_withdrawal_request_call_bbva_line: {
            bind: 'alert-CALL-BBVA-LINE-accept'
          },
          global_cardless_withdrawal_exit_request_accept: {
            bind: 'alert-glomo-cardless-withdrawal-dm-exit-accept'
          },
          global_cardless_withdrawal_review_onboarding_qr_accept: {
            bind: 'alert-glomo-cardless-withdrawal-dm-on-boarding-qr-accept'
          },
          global_cardless_withdrawal_review_success_qr_accept: {
            bind: 'alert-glomo-opx-cardless-withdrawal-success-qr-accept',
            backStep: true
          },
          global_cardless_withdrawal_review_success_qr_cancel: {
            bind: 'alert-glomo-opx-cardless-withdrawal-success-qr-cancel',
            backStep: true
          },
          global_cardless_withdrawal_review_error_qr_accept: {
            bind: 'alert-glomo-opx-cardless-withdrawal-qr-error-accept'
          },
          global_cardless_withdrawal_review_error_qr_cancel: {
            bind: 'alert-glomo-opx-cardless-withdrawal-qr-error-cancel'
          },
          global_cardless_withdrawal_error_modal_cancel: {
            bind: 'alert-glomo-cardless-withdrawal-dm-error-cancel'
          },
          MCC_SHOW_MODAL_HOUR_ATTENTION_CALL_ACCEPT_CH: {
            bind: 'alert-conversation-hour-attention-call-accept'
          },
          MCC_SHOW_MODAL_HEAVY_FILE_ERROR_RETRY_CHAT_CH: {
            bind: 'alert-conversation-get-error-heavy-file-accept'
          },
          MCC_SHOW_MODAL_SAVE_DOCUMENT_ERROR_RETRY_CHAT_CH: {
            bind: 'alert-conversation-get-error-save-document-cancel'
          },
          MCT_SHOW_MODAL_GET_CREATE_CONV_ERROR_CHAT_CH: {
            bind: 'alert-conversation-get-error-create-retry-accept'
          },
          MCC_SHOW_MODAL_GET_LIST_MESSAGES_ERROR_RETRY_CH: {
            bind: 'alert-conversation-get-error-list-messages-retry-accept'
          },
          MCC_SHOW_MODAL_GET_LIST_MESSAGES_ERROR_EXIT_CH: {
            bind: 'alert-conversation-get-error-list-messages-accept',
            backStep: true
          },
          MCC_SHOW_MODAL_GET_CREATE_CONV_ERROR_RETRY_CHAT_CH: {
            bind: 'alert-conversation-get-error-create-cancel',
            backStep: true
          },
          MCC_SHOW_MODAL_GET_CREATE_MESSAGE_CONV_ERROR_CHAT_CH: {
            bind: 'alert-conversation-get-error-create-message-retry-accept'
          },
          MCC_SHOW_MODAL_GET_CREATE_MESSAGE_CONV_ERROR_RETRY_CHAT_CH: {
            bind: 'alert-conversation-get-error-create-message-cancel',
            backStep: true
          },
          MCT_SHOW_PREVIEW_SUBJECT_CH: {
            bind: 'alert-conversation-invalid-subject-edit-accept'
          },
          MCC_SHOW_PREVIEW_MESSAGE_CH: {
            bind: 'alert-conversation-invalid-message-edit-accept'
          },
          MCC_SET_FOCUS_CHAT: {
            bind: 'alert-conversation-invalid-message-discard-accept'
          },
          global_modal_deposits_puchase_exit: {
            bind: 'alert-DEPOSITS-PURCHASE-Modal-Bank-accept',
            backStep: true
          },
          global_modal_deposits_puchase_exit_page: {
            bind: 'alert-DEPOSITS-PURCHASE-Modal-Bank-cancel',
            backStep: true
          },
          global_modal_deposits_puchase_exit_page_amount: {
            bind: 'alert-DEPOSITS-PURCHASE-Modal-Minimal-Amount-accept',
            backStep: true
          },
          MCC_SHOW_MODAL_GET_LIST_CONV_ERROR_CHAT_CH: {
            bind: 'alert-conversation-error-list-chat-accept'
          },
          MCC_SHOW_MODAL_GET_LIST_CONV_ERROR_RETRY_CHAT_CH: {
            bind: 'alert-conversation-get-error-chat-cancel',
            backStep: true
          },
          MCC_SHOW_MODAL_ATTACHMENTS_WITHOUT_SENDING_ACCEPT_CH: {
            bind: 'alert-conversation-attachments-without-seding-accept'
          },
          MCC_SHOW_MODAL_WARNING_UPLOAD_ATTACHMENT_ACCEPT_CH: {
            bind: 'alert-conversation-warning-upload-attachment-accept'
          },
          MCM_HIDE_MODAL_GET_LIST_CONV_RETRY_CH: {
            bind: 'alert-conversation-non-blocking-error-accept'
          },
          MCM_HIDE_MODAL_GET_LIST_CONV_CANCEL_CH: {
            bind: 'alert-conversation-non-blocking-error-cancel',
            backStep: true
          },
          MCM_HIDE_MODAL_GET_LIST_CONV_EXIT_CH: {
            bind: 'alert-conversation-get-error-communication-accept',
            backStep: true
          },
          MCM_HIDE_MODAL_GET_LIST_CONV_EXIT_CANCEL_CH: {
            bind: 'alert-conversation-get-error-communication-cancel',
            backStep: true
          },
          global_payroll_advance_page_exit_modal_accept: {
            bind: 'alert-PAYROLL-ADVANCE-OFFER-EXIT-MODAL-accept'
          },
          global_payroll_advance_page_without_payroll_account_close_header: {
            bind: 'alert-PAYROLL-ADVANCE-OFFER-NO-ACCOUNT-PAYROLL-close-header'
          },
          global_payroll_advance_page_pending_payments_close_header: {
            bind: 'alert-PAYROLL-ADVANCE-PENDING-PAYMENTS-close-header'
          },
          global_payroll_advance_error_modal_close_header: {
            bind: 'alert-PAYROLL-ADVANCE-OFFER-ERROR-FULL-MODAL-close-header'
          },
          global_international_transfers_cancel: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-ACCOUNT-cancel',
            backStep: true
          },
          global_international_transfers_accept: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-ACCOUNT-accept'
          },
          global_international_transfers_cancel_error_bank: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-MXN-accept',
            backStep: true
          },
          global_international_transfers_accept_error_return: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-MXN-cancel',
            backStep: true
          },
          global_international_transfer_modal_exit_flow: {
            bind: 'alert-INTERNATIONAL-TRANSFER-EXIT-FLOW-accept',
            backStep: true
          },
          global_international_transfer_timeout_error_accept: {
            bind: 'alert-TIMEOUT-ERROR-INTERNATIONAL-accept'
          },
          global_international_transfer_timeout_error: {
            bind: 'alert-TIMEOUT-ERROR-INTERNATIONAL-cancel'
          },
          global_international_transfer_modal_exit_exchange: {
            bind: 'alert-QUOTATION-ERROR-accept',
            backStep: true
          },
          global_standard_blocking_deposits_purchase_product_detail_error_alert: {
            bind: 'alert-deposits_purchase-cancel',
            backStep: true
          },
          global_international_transfer_modal_exit_quotation_info: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-LIQUIDATIONS-cancel',
            backStep: true
          },
          global_international_transfer_modal_restart_quotation_info: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-LIQUIDATIONS-accept'
          },
          global_international_transfer_modal_exit_quotation_info_error: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-LIQUIDATIONS-WITHOUT-accept',
            backStep: true
          },
          global_international_transfer_modal_exit_quotation_amount: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-AMOUNT-cancel',
            backStep: true
          },
          global_international_transfer_modal_restart_quotation_amount: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-AMOUNT-accept'
          },
          global_international_transfer_modal_cancel_destiny: {
            bind: 'alert-INTERNATIONAL-TRANSFERS-NEW-DESTINITY-cancel'
          },
          global_international_transfer_modal_accept_destiny: {
            bind: 'alert-INTERNATIONAL-TRANSFERS-NEW-DESTINITY-accept'
          },
          global_international_accept_change_of_quotation: {
            bind: 'alert-INTERNATIONAL-TRANSFERS-NEW-QUOTATION-accept'
          },
          global_international_exit_fraudulent_operations: {
            bind: 'alert-FRAUDULENT-OPERATIONS-INTERNATIONAL-TRANSFER-accept'
          },
          global_international_exit_fraudulent_operations_cancel: {
            bind: 'alert-FRAUDULENT-OPERATIONS-INTERNATIONAL-TRANSFER-cancel'
          },
          global_international_transfer_modal_exit_direction_info: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-DIRECTION-cancel',
            backStep: true
          },
          global_international_transfer_modal_restart_direction_info: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-DIRECTION-accept',
            backStep: true
          },
          global_glomo_alert_manager_modal_opened: {
            bind: 'glomo-alert-modal-opened'
          },
          global_glomo_alert_timer_expire: {
            bind: 'glomo-alert-time-expire'
          },
          register_device: {
            bind: 'alert-REGISTER-DEVICE-accept'
          },
          global_manage_feedback_CVC_logout: {
            bind: 'alert-LOGOUT-accept'
          },
          modal_logout_automatic: {
            bind: 'alert-AUTOMATIC-LOGOUT-accept'
          },
          modal_change_user_accept: {
            bind: 'alert-CHANGE-USER-accept'
          },
          global_open_glomo_alert_manager_edit_title_modal: {
            bind: 'openWithSettings'
          },
          global_card_payment_method_pending_last_period_amount_help_show_alert: {
            bind: 'openWithSettings'
          },
          login_reset_user: {
            bind: 'alert-CHANGE-USER-accept'
          },
          profile_modal_contact_detail_user_cancel: {
            bind: 'alert-ACCOUNT-CONTACT-DETAILS-cancel'
          },
          profile_modal_contact_detail_delete_accept: {
            bind: 'alert-CONFIRM-DELETE-CONTACT-accept'
          },
          global_opened_modal: {
            bind: 'opened-changed'
          },
          global_login_error_blocked_user_change_user: {
            bind: 'change-user'
          },
          global_profile_contact_detail_exit_accept: {
            bind: 'alert-PROFILE-CONTACT-DETAIL-EXIT-accept'
          },
          global_data_error_max_retries_accept: {
            bind: 'alert-DATA-ERROR-MAX-RETRIES-accept'
          },
          global_edit_card_limits_exit_navigate_to_back: {
            bind: 'alert-glomo-edit-credit-card-limits-manager-exit-accept',
            backStep: true
          },
          global_card_detail_card_activation_error_retry: {
            bind: 'alert-card-activation-error-accept'
          },
          global_additional_card_detail_card_activation_error_retry: {
            bind: 'alert-additional-card-detail-card-activation-error-accept'
          },
          global_card_detail_card_activation_error_cancel: {
            bind: 'alert-card-activation-error-cancel'
          },
          global_additional_card_detail_card_activation_error_cancel: {
            bind: 'alert-additional-card-detail-card-activation-error-cancel'
          },
          global_card_detail_card_activation_error_max_retries_cancel: {
            bind: 'alert-card-activation-error-max-retries-accept'
          },
          global_additional_card_detail_card_activation_error_max_retries_cancel: {
            bind: 'alert-additional-card-detail-card-activation-error-max-retries-accept'
          },
          global_card_detail_card_activation_error_max_retries_call: {
            bind: 'alert-card-activation-error-max-retries-cancel'
          },
          global_additional_card_detail_card_activation_error_max_retries_call: {
            bind: 'alert-additional-card-detail-card-activation-error-max-retries-cancel'
          },
          global_edit_card_limits_common_end_accept: {
            bind: 'alert-retry-edit-card-limits-end-accept'
          },
          global_edit_card_limits_common_end_close: {
            bind: 'alert-retry-edit-card-limits-end-tap-out-modal'
          },
          global_edit_card_limits_common_not_valid_field_accept: {
            bind: 'alert-retry-edit-card-limits-not-valid-field-accept'
          },
          global_edit_card_limits_common_not_valid_field_close: {
            bind: 'alert-retry-edit-card-limits-not-valid-field-tap-out-modal'
          },
          global_edit_card_limits_common_get_limits_retry: {
            bind: 'alert-retry-edit-card-limits-get-limits-accept'
          },
          global_edit_card_limits_common_get_limits_exit: {
            bind: 'alert-retry-edit-card-limits-get-limits-cancel'
          },
          global_edit_card_limits_common_get_limits_close: {
            bind: 'alert-retry-edit-card-limits-get-limits-tap-out-modal'
          },
          global_edit_card_limits_common_put_limits_retry: {
            bind: 'alert-retry-edit-card-limits-put-limits-accept'
          },
          global_edit_card_limits_common_put_limits_exit: {
            bind: 'alert-retry-edit-card-limits-put-limits-cancel'
          },
          global_edit_card_limits_common_put_limits_close: {
            bind: 'alert-retry-edit-card-limits-put-limits-tap-out-modal'
          },
          global_card_detail_card_activation_help_off: {
            bind: 'alert-card-activation-help-off-accept'
          },
          global_additional_card_detail_card_activation_help_off: {
            bind: 'alert-additional-card-detail-card-activation-help-off-accept'
          },
          global_card_detail_card_activation_help_on: {
            bind: 'alert-card-activation-help-on-accept'
          },
          global_additional_card_detail_card_activation_help_on: {
            bind: 'alert-additional-card-detail-card-activation-help-on-accept'
          },
          global_control_status_opened: {
            bind: 'cells-to-native-modal-opened'
          },
          global_control_status_closed: {
            bind: 'cells-to-native-modal-closed'
          },
          global_increment_card_limit_exit: {
            bind: 'alert-EXIT-INCREMENT-CARD-LIMIT-accept',
            backStep: true
          },
          global_increment_card_limit_init_data_error_accept: {
            bind: 'alert-INIT-DATA-ERROR-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_init_data_error_cancel: {
            bind: 'alert-INIT-DATA-ERROR-INCREMENT-CARD-LIMIT-cancel',
            backStep: true
          },
          global_increment_card_limit_base_pdf_error_retry_accept: {
            bind: 'alert-BASE-PDF-ERROR-RETRY-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_base_pdf_error_exit_accept: {
            bind: 'alert-BASE-PDF-ERROR-EXIT-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_base_pdf_error_exit_cancel: {
            bind: 'alert-BASE-PDF-ERROR-EXIT-INCREMENT-CARD-LIMIT-cancel'
          },
          global_increment_card_limit_customer_contact_error: {
            bind: 'alert-CUSTOMER-CONTACT-ERROR-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_put_error: {
            bind: 'alert-PUT-CARD-LIMIT-ERROR-INCREMENT-CARD-LIMIT-accept'
          },
          global_increment_card_limit_put_error_cancel: {
            bind: 'alert-PUT-CARD-LIMIT-ERROR-INCREMENT-CARD-LIMIT-cancel'
          },
          global_increment_card_limit_put_error_closed: {
            bind: 'cells-bottom-modal-backdrop-removed'
          },
          global_increment_card_limit_customer_contact_failed_continue: {
            bind: 'alert-CUSTOMER-CONTACT-ERROR-INCREMENT-CARD-LIMIT-cancel'
          },
          global_international_transfers_cancel_bank: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-cancel'
          },
          global_international_transfers_accept_return: {
            bind: 'alert-REQUEST-ERROR-INTERNATIONAL-TRANSFER-accept'
          },
          global_international_transfer_modal_exit_limit_cancel: {
            bind: 'alert-QUOTATION-ERROR-cancel',
            backStep: true
          },
          global_international_transfer_modal_close_page: {
            bind: 'alert-INTERNATIONAL-TRANSFER-EXIT-accept'
          },
          global_reward_operative_do_navigation_external_browser: {
            bind: 'alert-PROFIT-POINTS-DETAIL-EXTERNAL-WEB-accept'
          },
          navigation_to_reward_from_points_transfer_channel: {
            bind: 'alert-POINTS-TRANSFER-EXIT-OPERATIVE-accept',
            backStep: true
          },
          navigation_to_reward_from_points_raffle_channel: {
            bind: 'alert-POINTS-RAFFLE-EXIT-OPERATIVE-accept',
            backStep: true
          },
          global_transfer_points_call: {
            bind: 'alert-POINTS-TRANSFER-ERROR-FINAL-OPERATIVE-accept'
          },
          global_transfer_points_retry: {
            bind: 'alert-POINTS-TRANSFER-ERROR-MODAL-OPERATIVE-accept'
          },
          global_transfer_points_exit: {
            bind: 'alert-POINTS-TRANSFER-ERROR-FINAL-OPERATIVE-cancel'
          },
          global_transfer_points_exit_from_modal: {
            bind: 'alert-POINTS-TRANSFER-ERROR-MODAL-OPERATIVE-cancel'
          },
          global_raffle_points_call: {
            bind: 'alert-POINTS-RAFFLE-ERROR-FINAL-OPERATIVE-accept'
          },
          global_raffle_points_retry: {
            bind: 'alert-POINTS-RAFFLE-ERROR-MODAL-OPERATIVE-accept'
          },
          global_raffle_points_exit: {
            bind: 'alert-POINTS-RAFFLE-ERROR-FINAL-OPERATIVE-cancel'
          },
          global_raffle_points_exit_from_modal: {
            bind: 'alert-POINTS-RAFFLE-ERROR-MODAL-OPERATIVE-cancel'
          },
          global_raffle_points_cancel_from_header: {
            bind: 'alert-POINTS-RAFFLE-ERROR-FINAL-OPERATIVE-cancel_from_Header'
          },
          global_card_credit_card_payment_exit: {
            bind: 'alert-EXIT-CARD-CREDIT-CARD-PAYMENT-accept',
            backStep: true
          },
          global_card_credit_card_payment_push_notification_exit: {
            bind: 'alert-EXIT-TO-CARD-CREDIT-CARD-PAYMENT-PROMISE-accept'
          },
          global_update_email_page_exit: {
            bind: 'alert-EXIT-UPDATE-EMAIL-ADDRESS-accept',
            backStep: true
          },
          global_update_email_page_retry_operative_exit: {
            bind: 'alert-UPDATE-EMAIL-ADDRESS-RETRY-OPERATIVE-EXIT-accept',
            backStep: true
          },
          global_update_email_page_retry_operative_cancel: {
            bind: 'alert-UPDATE-EMAIL-ADDRESS-RETRY-OPERATIVE-cancel',
            backStep: true
          },
          global_validate_email_cancel: {
            bind: 'alert-UPDATE-EMAIL-PENDING-VALIDATION-cancel',
            backStep: true
          },
          global_validate_email_request_new_code: {
            bind: 'alert-VALIDATE-EMAIL-ADDRESS-ASK-NEW-CODE-accept'
          },
          global_upgrade_account_exit: {
            bind: 'alert-EXIT-UPGRADE-ACCOUNT-accept',
            skipHistory: true,
            link: {
              page: 'dashboard'
            }
          },
          global_card_credit_card_payment_retry_own_tranfer: {
            bind: 'alert-TRANSFER-ERROR-accept'
          },
          global_card_credit_card_payment_cancel_own_tranfer: {
            bind: 'alert-TRANSFER-ERROR-cancel'
          },
          global_card_credit_card_payment_call_own_tranfer: {
            bind: 'alert-CALL-TRANSFER-ERROR-accept'
          },
          global_card_credit_card_payment_cancel_call_own_tranfer: {
            bind: 'alert-CALL-TRANSFER-ERROR-cancel'
          },
          global_card_credit_card_payment_cancel_header_own_tranfer: {
            bind: 'alert-TRANSFER-ERROR-CLOSE-HEADER'
          },
          global_card_credit_card_payment_cancel_header_call_own_tranfer: {
            bind: 'alert-CALL-TRANSFER-ERROR-CLOSE-HEADER'
          },
          global_points_redeem_retry: {
            bind: 'alert-POINTS-REDEEM-ERROR-MODAL-OPERATIVE-accept'
          },
          global_points_redeem_exit: {
            bind: 'alert-POINTS-REDEEM-ERROR-FINAL-OPERATIVE-accept'
          },
          global_points_redeem_exit_from_modal: {
            bind: 'alert-POINTS-REDEEM-ERROR-MODAL-OPERATIVE-cancel'
          },
          global_points_redeem_modal_cancel_from_header: {
            bind: 'alert-POINTS-REDEEM-ERROR-MODAL-OPERATIVE-cancel_from_Header'
          },
          global_points_redeem_final_cancel_from_header: {
            bind: 'alert-POINTS-REDEEM-ERROR-FINAL-OPERATIVE-cancel_from_Header'
          },
          global_points_redeem_convert_retry: {
            bind: 'alert-POINTS-REDEEM-ERROR-CONVERT-MODAL-OPERATIVE-accept'
          },
          global_points_redeem_convert_exit_from_modal: {
            bind: 'alert-POINTS-REDEEM-ERROR-CONVERT-MODAL-OPERATIVE-cancel',
            backStep: true
          },
          global_points_redeem_convert_modal_cancel_from_header: {
            bind: 'alert-POINTS-REDEEM-ERROR-CONVERT-MODAL-OPERATIVE-cancel_from_Header',
            backStep: true
          },
          global_points_redeem_convert_call: {
            bind: 'alert-POINTS-REDEEM-ERROR-CONVERT-FINAL-OPERATIVE-accept'
          },
          global_points_redeem_convert_exit: {
            bind: 'alert-POINTS-REDEEM-ERROR-CONVERT-FINAL-OPERATIVE-cancel'
          },
          global_points_redeem_exit_pending_balance: {
            bind: 'alert-POINTS-REDEEM-ERROR-PENDING-BALANCE-cancel',
            backStep: true
          },
          global_points_redeem_pending_balance: {
            bind: 'alert-POINTS-REDEEM-ERROR-PENDING-BALANCE-accept'
          },
          global_points_redeem_convert_cancel_from_header: {
            bind: 'alert-POINTS-REDEEM-ERROR-CONVERT-FINAL-OPERATIVE-cancel_from_Header'
          },
          navigation_to_movement_from_points_redeem_channel: {
            bind: 'alert-POINTS-REDEEM-EXIT-OPERATIVE-accept'
          },
          global_exit_card_interest_simulator_confirm: {
            bind: 'alert-EXIT-INTEREST-SIMULATOR-accept'
          },
          st_enrollment_call_line: {
            bind: 'call-bbva-line'
          },
          st_enrollment_branches: {
            bind: 'on-icon-click-place'
          },
          travelInsurance_FUNCTIONAL_ERROR: {
            bind: 'alert-glomo-travel-insurance-functional-error-cancel',
            backStep: true
          },
          travelInsurance_FUNCTIONAL_ERROR_BUTTON_ACCEPT: {
            bind: 'alert-glomo-travel-insurance-functional-error-accept'
          },
          travelInsurance_REQUEST_ERROR: {
            bind: 'alert-glomo-travel-insurance-request-error-accept',
            backStep: true
          },
          travelInsurance_EXIT_NOT_SAVE_INFORMATION: {
            bind: 'alert-exit-not-save-information-modal-accept',
            backStep: true
          },
          travelInsurance_NOT_SAVE_INFORMATION_TRAVELER_ACCEPTED: {
            bind: 'alert-not-save-information-traveler-accept'
          },
          travelInsurance_REQUEST_RETRY_TRAVEL_INSURANCE: {
            bind: 'alert-glomo-travel-insurance-post-retry-error-accept'
          },
          travelInsurance_COMMUNICATION_ERROR_RETRY: {
            bind: 'alert-glomo-travel-insurance-communication-retry-error-accept'
          },
          travelInsurance_COMMUNICATION_ERROR_EXIT: {
            bind: 'alert-glomo-travel-insurance-communication-error-accept'
          },
          travel_insurance_coverages_COMMUNICATION_ERROR_RETRY: {
            bind: 'alert-glomo-travel-insurance-coverages-communication-retry-error-accept'
          },
          travel_insurance_coverages_COMMUNICATION_ERROR_EXIT: {
            bind: 'alert-glomo-travel-insurance-coverages-communication-error-accept'
          },
          travel_insurance_user_data_modal_EXIT_NOT_SAVE_INFORMATION_DATA_MODAL: {
            bind: 'alert-exit-not-save-information-user-data-modal-accept'
          },
          global_card_credit_card_payment_retry_own_tranfer_simulate: {
            bind: 'alert-retry-card-payment-simulate-accept'
          },
          global_card_credit_card_payment_cancel_own_tranfer_simulate: {
            bind: 'alert-retry-card-payment-simulate-cancel',
            backStep: true
          },
          global_card_credit_card_payment_own_tranfer_simulate_tap_out_modal: {
            bind: 'alert-retry-card-payment-simulate-tap-out-modal'
          },
          global_card_credit_card_payment_own_tranfer_simulate_tap_out_modal_reset_error_counter: {
            bind: 'alert-retry-card-payment-simulate-tap-out-modal'
          },
          global_alert_card_dynamic_cvv_toggle_change: {
            bind: 'alert-CARD-DCVV-FROM-TOGGLE-accept'
          },
          global_alert_card_dynamic_cvv_toggle_change_cancel: {
            bind: 'alert-CARD-DCVV-FROM-TOGGLE-cancel'
          },
          global_alert_card_dynamic_cvv_help_modal_change: {
            bind: 'alert-CARD-DCVV-FROM-HELP-ICON-accept'
          },
          global_alert_card_dynamic_cvv_help_modal_change_cancel: {
            bind: 'alert-CARD-DCVV-FROM-HELP-ICON-cancel'
          },
          global_reward_detail_redemption_simulate_retry: {
            bind: 'alert-REDEMPTION-SIMULATE-ERROR-MODAL-OPERATIVE-accept'
          },
          global_reward_detail_redemption_simulate_exit: {
            bind: 'alert-REDEMPTION-SIMULATE-ERROR-FINAL-OPERATIVE-accept'
          },
          global_reward_detail_redemption_simulate_exit_from_modal: {
            bind: 'alert-REDEMPTION-SIMULATE-ERROR-MODAL-OPERATIVE-cancel'
          },
          global_reward_detail_redemption_simulate_modal_cancel_from_header: {
            bind: 'alert-REDEMPTION-SIMULATE-ERROR-MODAL-OPERATIVE-cancel_from_Header'
          },
          global_reward_detail_redemption_simulate_cancel_from_header: {
            bind: 'alert-REDEMPTION-SIMULATE-ERROR-FINAL-OPERATIVE-cancel_from_Header'
          },
          global_points_redeem_backstep: {
            bind: 'alert-faqs-response-cancel_from_Header'
          },
          global_deposit_imposition_update_EXIT_CONFIRMATION_ACCEPT: {
            bind: 'alert-DEPOSIT_IMPOSITION_EXIT-accept',
            'backStep': true
          },
          global_deposit_configuration_EXIT_CANCEL: {
            bind: 'alert-deposits_configuration-cancel',
            'backStep': true
          },
          deposits_configuration_ERROR_OPERATION_IMPOSITION_EXIT_ACCEPT: {
            bind: 'alert-DEPOSIT_ERROR_OPERATION_IMPOSITION_EXIT-accept',
            'backStep': true
          },
          deposits_configuration__ERROR_OPERATION_IMPOSITION_EXIT_CANCEL: {
            bind: 'alert-DEPOSIT_ERROR_OPERATION_IMPOSITION_EXIT-cancel',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_exit_accept: {
            bind: 'alert-deposit-sale-error-operation-accept',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_exit_cancel: {
            bind: 'alert-deposit-sale-error-operation-cancel',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_out_time_accept: {
            bind: 'alert-deposit-sale-error-operation-out-time-accept',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_out_time_cancel: {
            bind: 'alert-deposit-sale-error-operation-out-time-cancel',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_blocked_account_accept: {
            bind: 'alert-deposit-sale-error-operation-blocked-account-accept',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_blocked_account_cancel: {
            bind: 'alert-deposit-sale-error-operation-blocked-account-cancel',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_account_not_active_accept: {
            bind: 'alert-deposit-sale-error-operation-account-not-active-accept',
            'backStep': true
          },
          global_deposit_sale_error_operation_sale_account_not_active_cancel: {
            bind: 'alert-deposit-sale-error-operation-account-not-active-cancel',
            'backStep': true
          },
          global_check_section_open_modal_terms_accept: {
            bind: 'alert-CHECK-SECTION-TERMS-accept'
          },
          global_edit_limits_generic_help_modal_accept: {
            bind: 'alert-generic-limits-help-modal-accept'
          },
          global_edit_limits_generic_help_modal_cancel: {
            bind: 'alert-generic-limits-help-modal-cancel'
          },
          global_edit_limits_title_help_modal_accept: {
            bind: 'alert-title-limits-help-modal-accept'
          },
          global_edit_limits_title_help_modal_cancel: {
            bind: 'alert-title-limits-help-modal-cancel'
          },
          global_check_section_open_modal_management_service_terms_accept: {
            bind: 'alert-CHECK-MANAGEMENT-SERVICE-TERMS-accept'
          },
          global_financing_purchase_financing_conditions_retry: {
            bind: 'alert-retry-financing-purchase-conditions-accept'
          },
          global_financing_purchase_financing_offer_retry: {
            bind: 'alert-retry-financing-purchase-offer-accept'
          },
          global_financing_purchase_financing_installments_retry: {
            bind: 'alert-retry-financing-purchase-installments-accept'
          },
          global_financing_purchase_financing_apply_retry: {
            bind: 'alert-retry-financing-purchase-apply-accept'
          },
          global_financing_purchase_financing_conditions_not_found_accept: {
            bind: 'alert-retry-financing-purchase-conditions-not-found-accept'
          },
          global_financing_purchase_financing_conditions_not_found_cancel: {
            bind: 'alert-retry-financing-purchase-conditions-not-found-cancel'
          },
          global_financing_purchase_financing_conditions_not_found_close: {
            bind: 'alert-retry-financing-purchase-conditions-not-found-tap-out-modal'
          },
          global_financing_purchase_financing_end_accept: {
            bind: 'alert-retry-financing-purchase-end-accept'
          },
          global_financing_purchase_financing_conditions_close: {
            bind: 'alert-retry-financing-purchase-conditions-tap-out-modal'
          },
          global_financing_purchase_financing_offer_close: {
            bind: 'alert-retry-financing-purchase-offer-tap-out-modal'
          },
          global_financing_purchase_financing_installments_close: {
            bind: 'alert-retry-financing-purchase-installments-tap-out-modal'
          },
          global_financing_purchase_financing_end_close: {
            bind: 'alert-retry-financing-purchase-end-tap-out-modal'
          },
          global_financing_purchase_financing_not_valid_field_accept: {
            bind: 'not-valid-field'
          },
          global_financing_purchase_financing_conditions_exit: {
            bind: 'alert-retry-financing-purchase-conditions-cancel'
          },
          global_financing_purchase_financing_offer_exit: {
            bind: 'alert-retry-financing-purchase-offer-cancel'
          },
          global_financing_purchase_financing_installments_exit: {
            bind: 'alert-retry-financing-purchase-installments-cancel'
          },
          global_financing_purchase_financing_apply_exit: {
            bind: 'alert-retry-financing-purchase-apply-cancel'
          },
          global_financing_purchase_financing_apply_close: {
            bind: 'alert-retry-financing-purchase-apply-tap-out-modal'
          },
          global_financing_purchase_exit_operation_accept: {
            bind: 'alert-financing-purchase-exit-operation-accept'
          },
          global_financing_purchase_modal_info_accept: {
            bind: 'alert-financing-purchase-modal-info-accept'
          },
          global_checks_management_service_terms_reject_backdrop_removed: {
            bind: 'alert-modal-close-primary-button-check-section-modal-terms-reject'
          },
          global_sustainability_back_request: {
            bind: 'alert-DATA-ERROR-SUSTAINABILITY-REQUEST-accept'
          },
          global_sustainability_back_request_modal: {
            bind: 'alert-DATA-ERROR-SUSTAINABILITY-REQUEST-cancel'
          },
          global_glomo_alert_manager_modal_closed_check_management_service_terms_reject: {
            bind: 'close-modal-check-section-modal-terms-reject'
          },
          global_glomo_alert_manager_modal_delete_check_management_accept: {
            bind: 'alert-checks-management-alert-delete-check-accept'
          },
          global_glomo_alert_manager_modal_delete_check_management_cancel: {
            bind: 'alert-checks-management-alert-delete-check-cancel'
          },
          global_checks_management_service_terms_reject_accept: {
            bind: 'alert-check-section-modal-terms-reject-accept',
            analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'declinar proteccion', 'otp')
          },
          global_check_section_service_terms_reject_cancel: {
            bind: 'alert-check-section-modal-terms-reject-cancel',
            analytics: ANALYTICS_CHECKS_SECTION.checks_section_footprint('checksManagement', 'activar proteccion', 'detalle')
          },
          global_exit_operative_checks_management_accept: {
            bind: 'alert-exit-operative-checks-management-accept'
          },
          global_exit_operative_checks_management_add_check_accept: {
            bind: 'alert-exit-operative-checks-management-add-check-accept'
          },
          global_oc_loan_offer_page_exit_modal_accept: {
            bind: 'alert-OC-LOAN-OFFER-EXIT-MODAL-accept'
          },
          global_oc_loan_offer_page_error_modal_accept: {
            bind: 'alert-OC-LOAN-OFFER-ERROR-MODAL-accept'
          },
          global_oc_loan_offer_page_retry_modal_accept: {
            bind: 'alert-OC-LOAN-OFFER-RETRY-MODAL-accept'
          },
          global_oc_loan_offer_page_retry_modal_cancel: {
            bind: 'alert-OC-LOAN-OFFER-RETRY-MODAL-cancel'
          },
          global_oc_loan_offer_page_incomplete_modal_accept: {
            bind: 'alert-OC-LOAN-OFFER-INCOMPLETE-MODAL-accept'
          },
          global_oc_loan_offer_page_atm_locator_clicked: {
            bind: 'atm-locator-link-clicked'
          },
          global_loan_product_detail_exit_close_modal: {
            bind: 'alert-LOAN-DETAIL-ERROR-REQUEST-close-modal'
          },
          global_loan_product_detail_accept_button_modal: {
            bind: 'alert-LOAN-DETAIL-ERROR-REQUEST-accept'
          },
          global_loan_product_detail_cancel_button_modal: {
            bind: 'alert-LOAN-DETAIL-ERROR-REQUEST-cancel'
          },
          atm_locator_navigate_to_request_branch_appointment_success: {
            bind: 'alert-branch-appointment-active-turn-accept'
          },
          loan_edit_alias_cancel_retry: {
            bind: 'alert-RETRY-EXIT-EDIT-ALIAS-cancel'
          },
          loan_edit_alias_accept_exit: {
            bind: 'alert-EXIT-EDIT-ALIAS-accept'
          },
          global_exit_edit_alias_confirm: {
            bind: 'alert-EXIT-PRODUCT-EDIT-ALIAS-accept'
          },
          global_contact_found_mobile_confirm: {
            bind: 'alert-FOUND-NUMBER-MODAL-MOBILE-TOP-UP-accept'
          },
          global_contact_found_mobile_exit: {
            bind: 'alert-FOUND-NUMBER-MODAL-MOBILE-TOP-UP-cancel'
          },
          global_contact_change_mobile_confirm: {
            bind: 'alert-CHANGE-CONTACT-MODAL-MOBILE-TOP-UP-accept'
          },
          global_alias_in_use_exit: {
            bind: 'alert-ALIAS-IN-USE-MOBILE-TOP-UP-cancel'
          },
          global_alias_in_use_confirm: {
            bind: 'alert-ALIAS-IN-USE-MOBILE-TOP-UP-accept'
          },
          global_delete_number_contact_agenda_confirm: {
            bind: 'alert-DELETE-NUMBER-CONTACT-AGENDA-accept'
          },
          global_exit_confirm_mobile_accepted: {
            bind: 'alert-EXIT-CANCEL-OPERATION-MOBILE-accept'
          },
          global_mobile_top_up_not_confirmed_error: {
            bind: 'alert-MOBILE-TOP-UP-NOT-CONFIRMED-ERROR-accept'
          },
          global_mobile_top_up_duplicated_error: {
            bind: 'alert-MOBILE-TOP-UP-DUPLICATED-ERROR-accept'
          },
          global_limit_operations_change_limits: {
            bind: 'alert-LIMIT-OPERATIONS-accept'
          },
          global_limit_operations_change_amount: {
            bind: 'alert-LIMIT-OPERATIONS-cancel'
          },
          global_system_not_pase_error: {
            bind: 'alert-system-not-pase-error-accept',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          global_system_not_available_pase_error: {
            bind: 'alert-system-not-available-pase-error-accept',
            link: {
              page: 'dashboard',
              skipHistory: true
            }
          },
          global_generate_virtual_card_retry_error: {
            bind: 'alert-glomo-generate-virtual-card-error-retry-accept'
          },
          global_generate_virtual_card_critical_error: {
            bind: 'alert-glomo-generate-virtual-card-error-critical-accept',
            backStep: true
          },
          global_generate_virtual_card_max_attemp_error: {
            bind: 'alert-glomo-generate-virtual-card-error-maxAttemps-accept',
            backStep: true
          },
          global_generate_virtual_card_call_office: {
            bind: 'glomo-generate-virtual-card-call-office-action',
            backStep: true
          },
          global_generate_virtual_card_max_attemp_error_cancel: {
            bind: 'alert-glomo-generate-virtual-card-error-maxAttemps-cancel',
            backStep: true
          },
          global_generate_virtual_card_critical_error_cancel: {
            bind: 'alert-glomo-generate-virtual-card-error-critical-cancel'
          },
          global_qr_reader_camera_permission_error_accept: {
            bind: 'alert-QR-CAMERA-PERMISSION-ERROR-accept'
          },
          global_check_aggregator_front_photo_info_accept: {
            bind: 'alert-CHECK-AGGREGATOR-FRONT-PHOTO-INFO-accept'
          },
          global_check_aggregator_front_photo_info_cancel: {
            bind: 'alert-CHECK-AGGREGATOR-FRONT-PHOTO-INFO-cancel'
          },
          global_check_aggregator_back_photo_info_accept: {
            bind: 'alert-CHECK-AGGREGATOR-BACK-PHOTO-INFO-accept'
          },
          global_check_aggregator_back_photo_info_cancel: {
            bind: 'alert-CHECK-AGGREGATOR-BACK-PHOTO-INFO-cancel'
          },
          global_checks_deposits_photos_accept_leave_page: {
            bind: 'alert-exit-operative-checks-deposits-photos-accept'
          },
          global_checks_deposits_aggregator_accept_leave_page: {
            bind: 'alert-exit-operative-checks-deposits-aggregator-accept'
          },
          global_exit_operative_checks_deposits_accept: {
            bind: 'alert-exit-operative-checks-deposits-accept'
          },
          global_checks_deposits_photos_remove_front_picture_accept: {
            bind: 'alert-remove-front-picture-accept'
          },
          global_checks_deposits_photos_remove_back_picture_accept: {
            bind: 'alert-remove-back-picture-accept'
          },
          global_checks_deposits_remove_check_accept: {
            bind: 'alert-REMOVE-CHECK-DEPOSIT-accept'
          },
          global_glomo_alert_manager_modal_closed_check_management_service_terms_reject: {
            bind: 'close-modal-CHECK-MANAGEMENT-SERVICE-TERMS-REJECT'
          },
          global_deposit_configuration_ERROR_SETTLED_ACCEPT: {
            bind: 'alert-DEPOSIT-ERROR-OPERATION-SETTLED-accept',
            'backStep': true
          },
          global_deposit_configuration_ERROR_SETTLED_CANCEL: {
            bind: 'alert-DEPOSIT-ERROR-OPERATION-SETTLED-cancel',
            'backStep': true
          },
          global_deposit_sale_DEPOSIT_SALE_IN_PROCESS_ACCEPT: {
            bind: 'alert-DEPOSIT_SALE_IN_PROCESS-accept',
            'backStep': true
          },
          global_deposit_sale_DEPOSIT_SALE_IN_PROCESS_CANCEL: {
            bind: 'alert-DEPOSIT_SALE_IN_PROCESS-cancel',
            'backStep': true
          },
          global_deposit_sale_DEPOSIT_SALE_ALERT_OUT_TIME_CANCEL: {
            bind: 'alert-DEPOSIT_SALE_ALERT_OUT_TIME-cancel'
          },
          transfersSuccess_SHOW_SPEI_ACCEPT: {
            bind: 'alert-MODAL-SPEI-CLARIFICATION-accept'
          },
          transfersSuccess_SHOW_SPEI_CANCEL: {
            bind: 'alert-MODAL-SPEI-CLARIFICATION-cancel'
          },
          _SHOW_ALIAS_IN_USE_MODAL_ACCEPT: {
            bind: 'alert-alias-in-use-accept'
          },
          _CHANGE_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-change-exchange-rates-accept'
          },
          _CHANGE_RECIPIENT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-recipient-selector-exchange-rates-accept'
          },
          _CHANGE_PRODUCT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-product-selector-exchange-rates-accept'
          },
          cancel_exceeded_max_amount_payment: {
            bind: 'alert-exceeded-max-amount-payment-cancel',
            'backStep': true
          },
          accept_card_overdue_payment: {
            bind: 'alert-card-overdue-payment-accept',
            'backStep': true
          },
          accept_account_update_needed: {
            bind: 'alert-account-update-needed-accept',
            'backStep': true
          },
          cancel_transfer_with_clabe: {
            bind: 'alert-transfer-with-clabe-cancel',
            'backStep': true
          },
          profile_exit_on_blocking_error: {
            bind: 'alert-profile-blockig-error-accept'
          },
          profile_exit_on_blocking_error_cross: {
            bind: 'alert-profile-blockig-error-cancel'
          },
          global_bill_payments_accept_exit_process_dashboard: {
            bind: 'alert-bill-payments-exit-process-dashboard-accept'
          },
          global_bill_payments_accept_exit_process_product_detail: {
            bind: 'alert-bill-payments-exit-process-product-detail-accept'
          },
          global_bill_payments_accept_exit_process_dashboard_failed_tax: {
            bind: 'alert-payments-get-error-captureline-error-cancel'
          },
          global_bill_payments_repeat_codebar_lecture: {
            bind: 'alert-payments-get-error-codebar-invalid-accept'
          },
          global_bill_payments_repeat_search_bill: {
            bind: 'alert-payments-get-error-captureline-error-accept'
          },
          BP_PREPARE_DELETE_SERVICE_CHANNEL: {
            bind: 'alert-DELETE-SERVICE-accept'
          },
          BP_RETRY_SEARCH_SERVICE: {
            bind: 'alert-BILL-PAYMENTS-MODAL-ERROR-accept'
          },
          BP_RETRY_MAKE_PAYMENTS_PASE_SERVICE: {
            bind: 'alert-error-make-payments-process-accept'
          },
          BP_RETRY_OTP_CALL_CHANNEL: {
            bind: 'alert-bp-otp-modal-error-accept'
          },
          BP_EXIT_OTP_CALL_CHANNEL: {
            bind: 'alert-bp-otp-modal-error-cancel'
          },
          BP_EXIT_MAKE_PAYMENTS_PASE_SERVICE: {
            bind: 'alert-error-make-payments-process-cancel'
          },
          BP_EXIT_MAKE_PAYMENTS_CALL_MODAL_SERVICE: {
            bind: 'alert-bp-call-line-modal-error-cancel'
          },
          clarificationsManagementCarePage_MANAGE_BBVA_LINE: {
            bind: 'send-bbva-line'
          },
          clarificationsManagementCarePage_ICON_HELP_MODAL: {
            bind: 'send-icon-help-from-modal'
          },
          clarificationsManagementCarePage_LOST_CARD_MODAL_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-LOST-CARD-accept'
          },
          clarificationsManagementCarePage_COMMERCE_MODAL_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-COMMERCE-accept'
          },
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_CANCEL_OUT_OF_TIME_ACCEPT: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-OUT-OF-LINE-accept'
          },
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_TRACKING_CANCEL_OUT_OF_TIME_ACCEPT: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-OUT-OF-LINE-TRACKING-accept'
          },
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_TRACKING_ACCEPT: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-TRACKING-accept'
          },
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_CANCEL: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-cancel'
          },
          clarificationsManagementCarePage_ERROR_CLARIFICATIONS_MANAGEMENT_CANCEL_OUT_OF_TIME_CANCEL: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-OUT-OF-LINE-cancel'
          },
          clarificationsManagementCarePage_ERROR_CASE_NUMBER: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-BBVA-NUMBER-CASE-accept'
          },
          clarificationsManagementCarePage_ERROR_CASE_NUMBER_EXIT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-BBVA-NUMBER-CASE-cancel'
          },
          clarificationsManagementCarePage_ACCEPTED_BUTTON_EXIT: {
            bind: 'alert-LEAVE-OPERATIVE-accept'
          },
          clarificationsManagementCarePage_CANCEL_BUTTON_EXIT: {
            bind: 'alert-LEAVE-OPERATIVE-cancel'
          },
          clarificationsManagementCarePage_SWITCH_MODALS: {
            bind: 'alert-ICON-INFO-BUTTON-accept'
          },
          clarificationsManagementCarePage_SWITCH_MODALS_CANCEL: {
            bind: 'alert-ICON-INFO-BUTTON-cancel'
          },
          clarificationsManagementCarePage_CASE_NUMBER_MODAL_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CASE-NUMBER-accept'
          },
          clarificationsManagementCarePage_CASE_NUMBER_MODAL_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CASE-NUMBER-cancel'
          },
          clarificationsManagementCarePage_CASE_NUMBER_MODAL_OUT_OF_LINE_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CASE-NUMBER-OUT-OF-LINE-accept'
          },
          clarificationsManagementCarePage_CASE_NUMBER_MODAL_OUT_OF_LINE_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CASE-NUMBER-OUT-OF-LINE-cancel'
          },
          clarificationsManagementCarePage_CLARIFICATION_MODAL_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-accept'
          },
          clarificationsManagementCarePage_CLARIFICATIONS_MODAL_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-cancel'
          },
          clarificationsManagementCarePage_CLARIFICATION_MODAL_OUT_OF_LINE_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-OUT-OF-LINE-accept'
          },
          clarificationsManagementCarePage_CLARIFICATION_MODAL_OUT_OF_LINE_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-OUT-OF-LINE-cancel'
          },
          clarificationsManagementCarePage_INSURANCE_MODAL_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-INSURANCE-accept'
          },
          clarificationsManagementCarePage_INSURANCE_MODAL_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-INSURANCE-cancel'
          },
          clarificationsManagementCarePage_INSURANCE_MODAL_OUT_OF_LINE_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-INSURANCE-OUT-OF-LINE-accept'
          },
          clarificationsManagementCarePage_INSURANCE_MODAL_OUT_OF_LINE_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-INSURANCE-OUT-OF-LINE-cancel'
          },
          clarificationsManagementCarePage_ERROR_NO_AVAILABLE_ACCEPT: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-INFO-NO-AVAILABLE-accept'
          },
          clarificationsManagementCarePage_ERROR_NO_AVAILABLE_CANCEL: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-INFO-NO-AVAILABLE-cancel'
          },
          clarificationsManagementCarePage_ERROR_THREE_TIMES_NO_AVAILABLE_ACCEPT: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-THREE-TIMES-accept'
          },
          clarificationsManagementCarePage_ERROR_THREE_TIMES_NO_AVAILABLE_CANCEL: {
            bind: 'alert-ERROR-CLARIFICATIONS-MANAGEMENT-THREE-TIMES-cancel'
          },
          clarificationsManagementCarePage_TIME_EXPIRED_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-TIME-EXPIRED-accept'
          },
          clarificationsManagementCarePage_TIME_EXPIRED_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-TIME-EXPIRED-cancel'
          },
          clarificationsManagementCarePage_SEND_ICON_HELP_MODAL_CHIP: {
            bind: 'send-icon-help-from-modal-chip-nip'
          },
          clarificationsManagementCarePage_MODAL_CHIP_NIP_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CHIP-NIP-accept'
          },
          clarificationsManagementCarePage_MODAL_CHIP_NIP_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CHIP-NIP-cancel'
          },
          clarificationsManagementCarePage_MODAL_CHIP_NIP_CARD_BLOCKED_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CHIP-NIP-BLOCKED-CARD-cancel'
          },
          clarificationsManagementCarePage_MODAL_CHIP_NIP_GO_OUT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CHIP-NIP-THEFT-LOSS-cancel'
          },
          clarificationsManagementCarePage_MODAL_CVV_GO_OUT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CVV-THEFT-LOSS-cancel'
          },
          clarificationsManagementCarePage_MODAL_HRS_GO_OUT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-HRS-THEFT-LOSS-cancel'
          },
          clarificationsManagementCarePage_MODAL_HRS_GO_OUT_BLOCKED_CARD: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-HRS-THEFT-LOSS-CARD-BLOCKED-accept'
          },
          clarificationsManagementCarePage_MODAL_HRS_GO_OUT_BLOCKED_CARD_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-HRS-THEFT-LOSS-CARD-BLOCKED-cancel'
          },
          clarificationsManagementCarePage_SEND_ICON_HELP_MODAL_CVV: {
            bind: 'send-icon-help-from-modal-cvv'
          },
          clarificationsManagementCarePage_MODAL_CVV_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CVV-accept'
          },
          clarificationsManagementCarePage_MODAL_CVV_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-CVV-cancel'
          },
          clarificationsManagementCarePage_SEND_ICON_HELP_MODAL_TOKEN: {
            bind: 'send-icon-help-from-modal-token'
          },
          clarificationsManagementCarePage_MODAL_TOKEN_ACCEPT: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-TOKEN-accept'
          },
          clarificationsManagementCarePage_MODAL_TOKEN_CANCEL: {
            bind: 'alert-CLARIFICATIONS-MANAGEMENT-TOKEN-cancel'
          },
          clarificationsManagementCarePage_CASE_AGAINST_ACCEPT: {
            bind: 'alert-ICON-INFO-CASE-AGAINST-ONLINE-accept'
          },
          clarificationsManagementCarePage_CASE_AGAINST_CANCEL: {
            bind: 'alert-ICON-INFO-CASE-AGAINST-ONLINE-cancel'
          },
          clean_card_operations_EXIT_TO_NATIVE: {
            bind: 'alert-qr-request-exit-accept',
            backStep: true
          },
          st_enrollment_cancel_modal_cronto: {
            bind: 'alert-token-cronto-exit-cancel-from-header'
          },
          st_enrollment_cancel_modal_s3: {
            bind: 'alert-ether-token-retry-cancel-from-header'
          },
          st_enrollment_cancel_modal_soft_token: {
            bind: 'alert-ether-token-exit-cancel-from-header'
          },
          st_out_of_band_cancel_modal_soft_token: {
            bind: 'alert-OUT_BAND_OTP-bbva-controller-softoken-out-of-band-exit'
          },
          funds_withdrawal_cancel_modal: {
            bind: 'alert-FUNDS-OPERATION-LEAVE-OPERATIVE-cancel'
          },
          funds_withdrawal_accept_modal: {
            bind: 'alert-FUNDS-OPERATION-LEAVE-OPERATIVE-accept',
            backStep: true
          },
          funds_withdrawal_cancel_modal: {
            bind: 'alert-FUNDS-OPERATION-CHANGE-OP-cancel'
          },
          funds_withdrawal_accept_change_modal: {
            bind: 'alert-FUNDS-OPERATION-CHANGE-OP-accept'
          },
          navigation_investment_funds_to_dashboard: {
            bind: 'alert-FUNDS-OPERATION-GENERIC-ERROR-accept',
            link: {
              page: 'dashboard'
            }
          },
          funds_contribution_error_simulation_modal: {
            bind: 'alert-FUNDS-OPERATION-SIMULATION-ERROR-accept',
            link: {
              page: 'fundContractedDetail'
            }
          },
          funds_contribution_serie_is_not_available_modal: {
            bind: 'alert-FUNDS-OPERATION-SERIE-IS-NOT-AVAILABLE-contracted',
            link: {
              page: 'fundContractedDetail'
            }
          },
          funds_contribution_serie_is_not_available_cancel_modal: {
            bind: 'alert-FUNDS-OPERATION-SERIE-IS-NOT-AVAILABLE-cancel'
          },
          funds_contribution_serie_is_not_available_accept_modal: {
            bind: 'alert-FUNDS-OPERATION-SERIE-IS-NOT-AVAILABLE-accept',
            link: {
              page: 'fundContractedDetail'
            }
          },
          funds_contribution_serie_without_balance_accept_modal: {
            bind: 'alert-FUNDS-OPERATION-SERIE-WITHOUT-BALANCE-accept',
            link: {
              page: 'fundsHiring'
            }
          },
          funds_contribution_serie_without_balance_modal: {
            bind: 'alert-FUNDS-OPERATION-SERIE-WITHOUT-BALANCE-contracted',
            link: {
              page: 'fundContractedDetail'
            }
          },
          funds_contribution_serie_without_balance_cancel_modal: {
            bind: 'alert-FUNDS-OPERATION-SERIE-WITHOUT-BALANCE-cancel',
            link: {
              page: 'fundContractedDetail'
            }
          },
          fatca_validation_RESET_FATCA_FROM_WRONG_AFFIDAVIT_BUTTON: {
            bind: 'alert-wrong-affidavit-accept'
          },
          fatca_validation_RESET_FATCA_FROM_WRONG_AFFIDAVIT_CROSS: {
            bind: 'alert-wrong-affidavit-cancel'
          },
          fatca_validation_RESET_FATCA_FROM_INVALID_RFC_BUTTON: {
            bind: 'alert-invalid-rfc-accept'
          },
          fatca_validation_RESET_FATCA_FROM_INVALID_RFC_CROSS: {
            bind: 'alert-invalid-rfc-cancel'
          },
          fatca_validation_CONFIRM_CHANGE_DATA: {
            bind: 'alert-change-data-warning-accept'
          },
          fatca_validation_CONFIRM_UPDATE_INFO: {
            bind: 'alert-confirm-update-info-warning-accept'
          },
          fatca_validation_CONFIRM_INCORRECT_DATA: {
            bind: 'alert-incorrect-data-accept'
          },
          fatca_validation_CONFIRM_INCORRECT_DATA_HEADER: {
            bind: 'alert-incorrect-data-cancel'
          },
          fatca_validation_DISMISS_LIMIT_RESIDENCES_ALERT: {
            bind: 'alert-limit-residences-warning-accept'
          },
          fatca_validation_RESET_FATCA_FROM_LIMIT_RESIDENCES_WARNING: {
            bind: 'alert-limit-residences-warning-cancel'
          },
          fatca_validation_RESET_FATCA_FROM_EXIT_ALERT: {
            bind: 'alert-exit-confirmation-warning-accept'
          },
          fatca_validation_SHOW_CONFIRM_ZONE_FROM_EXIT_ALERT: {
            bind: 'alert-exit-confirmation-warning-cancel'
          },
          fatca_validation_RETRY_SAVING_CUSTOMER: {
            bind: 'alert-retry-customer-error-accept'
          },
          fatca_validation_RESET_FATCA_FROM_SAVING_ERROR: {
            bind: 'alert-retry-customer-error-cancel'
          },
          fatca_validation_RESET_FATCA_FROM_BLOCKING_ERROR_CROSS: {
            bind: 'alert-blocking-error-cancel'
          },
          fatca_validation_RESET_FATCA_FROM_BLOCKING_ERROR: {
            bind: 'alert-blocking-error-accept'
          },
          fatca_validation_residence_form_RETRY_GET_CATALOG: {
            bind: 'alert-retry-catalog-list-error-accept'
          },
          fatca_validation_residence_form_CANCEL_ADDING_RESIDENCE_FROM_RETRY: {
            bind: 'alert-retry-catalog-list-error-cancel',
            backStep: true
          },
          fatca_validation_residence_form_CANCEL_ADDING_RESIDENCE_FROM_BLOCKING_CROSS: {
            bind: 'alert-blocking-error-list-cancel',
            backStep: true
          },
          fatca_validation_residence_form_CANCEL_ADDING_RESIDENCE_FROM_BLOCKING: {
            bind: 'alert-blocking-error-list-accept',
            backStep: true
          },
          fatca_validation_residence_form_RETRY_VALIDATE_FORMAT: {
            bind: 'alert-retry-validate-format-error-accept'
          },
          fatca_validation_residence_form_CLOSE_FORM_FROM_ERROR: {
            bind: 'alert-retry-validate-format-error-cancel',
            backStep: true
          },
          fatca_validation_residence_form_CLOSE_FORM_FROM_BLOCKING_CROSS: {
            bind: 'alert-blocking-error-form-cancel',
            backStep: true
          },
          fatca_validation_residence_form_CLOSE_FORM_FROM_BLOCKING: {
            bind: 'alert-blocking-error-form-accept',
            backStep: true
          },
          fatca_validation_residences_list_EXIT_LIST_FROM_WARNING: {
            bind: 'alert-exit-list-warning-accept'
          },
          fatca_validation_residences_list_DELETE_RESIDENCE_FROM_WARNING: {
            bind: 'alert-delete-residence-warning-accept'
          },
          atm_locator_request_route_location: {
            bind: 'alert-ATM-OPEN-EXTERNAL-APP-INFORMATION-MODAL-accept'
          },
          pois_detail_request_route_location: {
            bind: 'alert-POIS-DETAIL-OPEN-EXTERNAL-APP-INFORMATION-MODAL-accept'
          },
          atm_locator_open_native_settings: {
            bind: 'alert-LOCATION-PERMISSION-accept'
          },
          global_atm_locator_first_time: {
            bind: 'atm-locator-first-time',
            analytics: ANALYTICS_ATM_LOCATOR.pageView('locationModalPermission', 'informacion')
          },
          global_toggle_cards_errors_accept: {
            bind: 'alert-toggle-cards-errors-accept'
          },
          global_toggle_cards_errors_cancel: {
            bind: 'alert-toggle-cards-errors-cancel'
          },
          device_access_show_call_bbva_line: {
            bind: 'device-access-show-bbva-link'
          },
          device_access_open_settings_qr: {
            bind: 'alert-DEVICE-ACCESS-CAMERA-QR-accept'
          },
          device_access_camera_modalqr_cancel: {
            bind: 'alert-DEVICE-ACCESS-CAMERA-QR-cancel'
          },
          device_access_open_settings_zoom: {
            bind: 'alert-DEVICE-ACCESS-CAMERA-ZOOM-accept'
          },
          device_access_camera_modalzoom_cancel: {
            bind: 'alert-DEVICE-ACCESS-CAMERA-ZOOM-cancel'
          },
          device_access_notification_error_accept: {
            bind: 'alert-DEVICE-ACTIVATION-NOTIFICATIONS-ERROR-accept'
          },
          device_access_notification_error_cancel: {
            bind: 'alert-DEVICE-ACTIVATION-NOTIFICATIONS-ERROR-cancel'
          },
          device_access_open_bbva_link: {
            bind: 'device-access-branch-bbva',
            link: {
              page: 'atmLocator',
              skipHistory: true
            }
          },
          device_access_leave_process_accept: {
            bind: 'alert-DEVICE-ACTIVATION-LEAVE-PROCESS-accept'
          },
          device_access_logout: {
            bind: 'alert-DEVICE-ACTIVATION-INCORRECT-IDENTITY-MAX-ATTEMPTS-accept'
          },
          device_access_code_qr_cancel: {
            bind: 'alert-DEVICE-ACTIVATION-CODE-QR-cancel'
          },
          device_access_registration_required_accept: {
            bind: 'alert-DEVICE-ACTIVATION-REGISTRATION-REQUIRED-accept',
            link: {
              page: 'digitalActivation',
              skipHistory: true
            }
          },
          device_access_registration_required_cancel: {
            bind: 'alert-DEVICE-ACTIVATION-REGISTRATION-REQUIRED-cancel'
          },
          device_access_non_account_facil_blocked_accept: {
            bind: 'alert-DEVICE-ACTIVATION-NON-ACCOUNT-FACIAL-BLOCKED-accept'
          },
          device_access_non_account_facil_blocked_cancel: {
            bind: 'alert-DEVICE-ACTIVATION-NON-ACCOUNT-FACIAL-BLOCKED-cancel'
          },
          device_access_user_with_card_accept: {
            bind: 'alert-DEVICE-ACCESS-USER-WITH-CARD-accept'
          },
          device_access_user_with_card_cancel: {
            bind: 'alert-DEVICE-ACCESS-USER-WITH-CARD-cancel'
          },
          NAVEGATION_TO_UPDATE_ADDRESS_STEP_INPUT_CONTINUE: {
            bind: 'alert-update-address-modal-requirements-accept',
            link: {
              page: 'updateAddressStepInputPage',
              skipHistory: true
            }
          },
          NAVEGATION_TO_UPDATE_ADDRESS_STEP_INPUT_CANCEL: {
            bind: 'alert-update-address-modal-requirements-cancel',
            backStep: true
          },
          NAVEGATION_TO_PROFILE_PAGE_CANCEL: {
            bind: 'alert-update-address-error-cancel',
            backStep: true
          },
          UPDATE_ADDRESS_UPLOAD_FILES_SHOW_MODAL_OPTIONS_CAMERA: {
            bind: 'alert-update-address-modal-advice-plugin-camera-accept'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_SHOW_MODAL_OPTIONS_PDF: {
            bind: 'alert-update-address-modal-advice-plugin-pdf-accept'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_DELETE_FILE: {
            bind: 'alert-update-address-delete-file-accept'
          },
          UPDATE_ADDRESS_UPLOAD_FILES_DELETE_FILE_REVERSE: {
            bind: 'alert-update-address-delete-file-reverse-accept'
          },
          curpPage_CANCEL_CONFIRM_MODAL: {
            bind: 'alert-update-confirm-curp-cancel',
            backStep: true
          },
          curpPage_CONTINUE_CONFIRM_MODAL: {
            bind: 'alert-update-confirm-curp-accept'
          },
          curpPage_CURP_CIVIL_REGISTER_ERROR: {
            bind: 'alert-CURP-CIVIL-REGISTER-ERROR-accept'
          },
          curpPage_CURP_MODIFY_ERROR: {
            bind: 'alert-CURP-MODIFY-ERROR-accept'
          },
          curpPage_CURP_RECORDS_ERROR: {
            bind: 'alert-CURP-RECORDS-ERROR-accept'
          },
          curpPage_CURP_CIVIL_REGISTER_ERROR_EXIT: {
            bind: 'alert-CURP-CIVIL-REGISTER-ERROR-cancel',
            backStep: true
          },
          curpPage_CURP_MODIFY_ERROR_EXIT: {
            bind: 'alert-CURP-MODIFY-ERROR-cancel',
            backStep: true
          },
          curpPage_CURP_RECORDS_ERROR_EXIT: {
            bind: 'alert-CURP-RECORDS-ERROR-cancel',
            backStep: true
          },
          ON_ACCEPT_CREDIT_CARD_HOLDER_EXIT: {
            bind: 'alert-CREDIT-CARD-HOLDER-EXIT-accept'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_EXIT_ACCEPT: {
            bind: 'alert-CREDIT-CARD-HOLDER-RECEIPT-ERROR-EXIT-accept'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_ACCEPT: {
            bind: 'alert-CREDIT-CARD-HOLDER-RECEIPT-ERROR-RETRY-accept'
          },
          CREDIT_CARD_HOLDER_RECEIPT_ERROR_RETRY_CANCEL: {
            bind: 'alert-CREDIT-CARD-HOLDER-RECEIPT-ERROR-RETRY-cancel'
          },
          CREDIT_CARD_HOLDER_SHOW_BRANCHES: {
            bind: 'show-branch-offices'
          },
          global_open_modal_exit_checks_management: {
            bind: 'alert-openAlertModal-accept'
          },
          update_national_id_CLOSE_BUTTON_TAPPED: {
            bind: 'operational-limits-close'
          },
          update_national_id_RELOAD_GET_PAGE: {
            bind: 'alert-modal-error-accept'
          },
          update_national_id_go_to_scann_id: {
            bind: 'alert-go-to-scann-id-accept'
          },
          update_national_id_modal_incomplete_cancel: {
            bind: 'alert-COMPLETE-cancel'
          },
          update_national_id_remove_documents_photos: {
            bind: 'alert-CONFIRM-DELETE-ID-accept'
          },
          update_national_id_remove_selfie_photos: {
            bind: 'alert-CONFIRM-DELETE-SELFIE-accept'
          },
          update_national_id_retry_request_customer_terms: {
            bind: 'alert-ERROR-REQUEST-TERMS-accept'
          },
          update_national_id_retry_request_customer_terms_cancel: {
            bind: 'alert-ERROR-REQUEST-TERMS-cancel'
          },
          update_national_id_exit_veridas_box_cancel: {
            bind: 'alert-ERROR-VERIDAS-BOX-cancel'
          },
          update_national_id_exit_put_vertifications_without_flash_accept: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-WITHOUT-FLASH-accept'
          },
          update_national_id_exit_put_verifications_attachments_cancel: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-WITHOUT-FLASH-cancel'
          },
          update_national_id_exit_put_vertifications_wiht_flash_accept: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-WITH-FLASH-accept'
          },
          update_national_id_exit_put_verifications_attachments_cancel_flash: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-WITH-FLASH-cancel'
          },
          update_national_id_exit_put_vertifications_reverse_accept: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-REVERSE-accept'
          },
          update_national_id_exit_put_verifications_attachments_cancel_reverse: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-REVERSE-cancel'
          },
          update_national_id_exit_put_vertifications_selfie_accept: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-SELFIE-accept'
          },
          update_national_id_exit_put_verifications_attachments_cancel_selfie: {
            bind: 'alert-ERROR-PUT-VERIFICATIONS-SELFIE-cancel'
          },
          update_national_id_exit_error_ine_validate_cancel: {
            bind: 'alert-ERROR-INE-VALIDATE-cancel'
          },
          update_national_id_exit_visit_electoral_insitute_cancel: {
            bind: 'alert-VISIT-ELECTORAL-INSITUTE-cancel'
          },
          update_national_id_exit_document_verifications_cancel: {
            bind: 'alert-ERROR-DOCUMENT-VERIFICATIONS-cancel'
          },
          update_national_id_exit_error_patch_customer_cancel: {
            bind: 'alert-ERROR-PATCH-CUSTOMER-cancel'
          },
          update_national_id_exit_error_overse_document_cancel: {
            bind: 'alert-ERROR-OVERSE-DOCUMENT-cancel'
          },
          update_national_id_exit_error_reverse_document_cancel: {
            bind: 'alert-ERROR-REVERSE-DOCUMENT-cancel'
          },
          update_national_id_exit_failed_request: {
            bind: 'alert-GENERIC-ERROR-EXIT-accept'
          },
          update_national_id_exit_failed_veridas: {
            bind: 'alert-GENERIC-ERROR-EXIT-cancel'
          },
          update_national_id_exit_flow: {
            bind: 'alert-EXIT-CANCEL-OPERATION-accept'
          },
          update_national_id_active_modal_false: {
            bind: 'glomo-alert-modal-closed'
          },
          update_national_id_active_modal_true: {
            bind: 'glomo-alert-modal-opened'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_EXIT_INSURANCE: {
            bind: 'alert-confirm-exit-insurance-accept'
          },
          DYNAMIC_LIFE_INSURANCE_MAIN_PAGE_OPEN_MODAL_WARNING_USD_ACCEPT: {
            bind: 'alert-warning-quotation-accept'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_ERROR_LIMIT_INSURANCE: {
            bind: 'alert-error-limit-insurance-accept'
          },
          DYNAMIC_LIFE_INSURANCE_CANCEL_ERROR_LIMIT_INSURANCE: {
            bind: 'alert-error-limit-insurance-cancel'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_INTERRUPTED: {
            bind: 'alert-interrupted-accept'
          },
          DYNAMIC_LIFE_INSURANCE_ACCEPT_OPERATION_FAILED: {
            bind: 'alert-operation-failed-accept'
          },
          DYNAMIC_LIFE_INSURANCE_CANCEL_INTERRUPTED: {
            bind: 'alert-interrupted-cancel'
          },
          DYNAMIC_LIFE_INSURANCE_CANCEL_OPERATION_FAILED: {
            bind: 'alert-operation-failed-cancel'
          },
          DYNAMIC_LIFE_INSURANCE_CONFIRM_DELETE_ACCEPT: {
            bind: 'alert-confirm-delete-accept'
          },
          DYNAMIC_LIFE_INSURANCE_ERROR: {
            bind: 'alert-dynamic-life-insurance-error-accept'
          },
          DYNAMIC_LIFE_INSURANCE_ERROR_CANCEL: {
            bind: 'alert-dynamic-life-insurance-error-cancel'
          },
          mortgage_certificate_review_confirm_cancellation: {
            bind: 'alert-MORTGAGE-CANCELLATION-accept'
          },
          TRANSFER_SUCCESS_LINK_EXTERNAL: {
            bind: 'alert-LOGOUT-accept'
          },
          SHOW_ALIAS_IN_USE_MODAL_ACCEPT: {
            bind: 'alert-alias-in-use-accept'
          },
          EXIT_TRANSFERS_PAGE_ACCEPT: {
            bind: 'alert-CONFIRM-EXIT-OPERATION-TRANSFERS-accept'
          },
          EXIT_TAG_PAGE: {
            bind: 'alert-CONFIRM-EXIT-TAG-accept',
            backStep: true
          },
          REDIRECT_TO_LINK_ALERT: {
            bind: 'redirect-to-link'
          },
          cancel_out_of_schedule_alert: {
            bind: 'alert-OUT-OF-SCHEDULE-cancel',
            backStep: true,
            'forward-to-native': true
          },
          global_INFORMATION_MODAL_BACK_TO_START_accept: {
            bind: 'alert-INFORMATION-MODAL-BACK-TO-START-accept'
          },
          global_alert_INFORMATION_MODAL_BACK_TO_START_cancel: {
            bind: 'alert-INFORMATION-MODAL-BACK-TO-START-cancel'
          },
          global_alert_OWN_TRANSFER_FOREIGN_CURRENCY_ERROR_accept: {
            bind: 'alert-OWN-TRANSFER-FOREIGN-CURRENCY-ERROR-accept'
          },
          global_alert_OWN_TRANSFER_FOREIGN_CURRENCY_ERROR_cancel: {
            bind: 'alert-OWN-TRANSFER-FOREIGN-CURRENCY-ERROR-cancel'
          },
          global_alert_ACCEPT_BACK_ON_SAME_PAGE_cancel: {
            bind: 'alert-ACCEPT-BACK-ON-SAME-PAGE-cancel'
          },
          global_alert_CALL_BBVA_LINE_cancel: {
            bind: 'alert-CALL-BBVA-LINE-cancel'
          },
          CHANGE_PRODUCT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-product-selector-exchange-rates-accept'
          },
          CHANGE_RECIPIENT_SELECTOR_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-recipient-selector-exchange-rates-accept'
          },
          CHANGE_EXCHANGE_RATES_ALERT_ACCEPT: {
            bind: 'alert-change-exchange-rates-accept'
          },
          transfers_refunds_modal_info_accept: {
            bind: 'alert-info-refund-spei-accept'
          },
          transfers_refunds_modal_info_cancel: {
            bind: 'alert-info-refund-spei-cancel',
            backStep: true
          },
          transfers_refunds_modal_info_error_accept: {
            bind: 'alert-info-error-refund-spei-accept',
            backStep: true
          },
          transfers_refunds_modal_info_error_cancel: {
            bind: 'alert-info-error-refund-spei-cancel'
          },
          transfers_refunds_warning_exit_modal_accept: {
            bind: 'alert-warning-exit-refund-spei-accept'
          },
          kycValidation_INITIAL_INFO_ACCEPT: {
            bind: 'alert-initial-finantial-habits-accept'
          },
          kycValidation_INITIAL_INFO_CANCEL: {
            bind: 'alert-initial-finantial-habits-cancel'
          },
          kycValidation_INFO_RETRY_ACCEPT: {
            bind: 'alert-unavailable-kyc-info-retry-accept'
          },
          kycValidation_INFO_RETRY_CANCEL: {
            bind: 'alert-unavailable-kyc-info-retry-cancel'
          },
          kycValidation_INFO_EXIT_ACCEPT: {
            bind: 'alert-unavailable-kyc-info-exit-accept'
          },
          kycValidation_INFO_EXIT_CANCEL: {
            bind: 'alert-unavailable-kyc-info-exit-cancel'
          },
          kycValidation_EXCEPTION_CASE_MODAL_ACCEPT: {
            bind: 'alert-error-finantial-habits-accept'
          },
          kycValidation_EXCEPTION_CASE_MODAL_CANCEL: {
            bind: 'alert-error-finantial-habits-cancel'
          },
          kycValidation_INITIAL_INFO_ADD_ACCEPT: {
            bind: 'alert-initial-finantial-habits-accept'
          },
          global_discreet_mode_activation_accept_button: {
            bind: 'alert-DISCREET-MODE-accept',
            backStep: true
          },
          in_app_chat_go_to_welcome_screen: {
            bind: 'alert-chat-CAUTION-accept'
          },
          tagCardList_CONFIRM_DELETE_TAG: {
            bind: 'alert-confirm-delete-tag-modal-accept'
          },
          registerTag_EXIT_BT: {
            bind: 'alert-tag-identifier-scan-retry-error-accept'
          },
          payroll_portability_step_benefits_birthday_confirm: {
            bind: 'alert-BIRTHDATE-CONFIRMATION-accept'
          },
          payroll_portability_step_benefits_birthday_cancel: {
            bind: 'alert-BIRTHDATE-CONFIRMATION-cancel'
          },
          payroll_portability_step_benefits_birthday_accept: {
            bind: 'alert-BIRTHDATE-CONFIRMATION-accept'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'alert-EXIT-MODAL-accept'
          },
          navigation_tag_to_settings_cancel: {
            bind: 'alert-tag-identifier-scan-retry-error-cancel',
            link: {
              page: 'registerInfoTag'
            }
          },
          global_recipient_exit: {
            bind: 'alert-EXIT-RECIPIENTS-accept'
          },
          open_modal_limit_operation_cancel: {
            bind: 'alert-LIMIT-OPERATION-SIDEBAR-cancel'
          },
          global_alert_modal_close: {
            bind: 'show-map',
            link: {
              page: 'atmLocator',
              skipHistory: true
            }
          },
          global_non_preapproved_credit_card_on_accept_exit_bureau: {
            bind: 'alert-CREDIT-BUREAU-MANAGER-EXIT-accept',
            backStep: true
          },
          global_non_preapproved_credit_card_on_accept_exit_offer_detail: {
            bind: 'alert-NPA-CREDIT-CARD-MANAGER-EXIT-accept',
            backStep: true
          },
          global_non_preapproved_pro_credit_card_on_accept_exit_offer_detail: {
            bind: 'alert-NPA-PROPOSAL-SUCCESS-accept',
            backStep: true
          },
          global_non_preapproved_credit_card_on_accept_missing_documents_data: {
            bind: 'alert-NPA-CREDIT-CARD-MISSING-DOCUMENTS-DATA-accept',
            backStep: true
          },
          global_non_preapproved_credit_card_on_cancel_missing_documents_data: {
            bind: 'alert-NPA-CREDIT-CARD-MISSING-DOCUMENTS-DATA-cancel',
            backStep: true
          },
          global_non_preapproved_consumer_loan_on_accept_missing_documents_data: {
            bind: 'alert-NPA-CONSUMER-LOAN-MISSING-DOCUMENTS-DATA-accept',
            backStep: true
          },
          global_non_preapproved_consumer_loan_on_cancel_missing_documents_data: {
            bind: 'alert-NPA-CONSUMER-LOAN-MISSING-DOCUMENTS-DATA-cancel',
            backStep: true
          },
          pockets_exit_update_accept: {
            bind: 'alert-LEAVE-UPDATE-POCKET-accept',
            backStep: true
          },
          global_scheduled_pocket_accept: {
            bind: 'alert-SCHEDULED-POCKET-INFO-accept'
          },
          global_scheduled_pocket_cancel: {
            bind: 'alert-SCHEDULED-POCKET-INFO-cancel'
          },
          alert_saving_caution_accept: {
            bind: 'alert-saving-CAUTION-accept'
          },
          payroll_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-OPERATIVE-cancel'
          },
          payroll_validate_curp_leave_operative_confirm: {
            bind: 'alert-VALIDATE-CURP-accept'
          },
          payroll_validate_curp_leave_operative_cancel: {
            bind: 'alert-VALIDATE-CURP-cancel'
          },
          payroll_link_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-LINK-OPERATIVE-accept'
          },
          payroll_link_benefits_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-LINK-BENEFITS-OPERATIVE-accept'
          },
          payroll_link_benefits_modal_company_data_not_found: {
            bind: 'alert-CONFIRM-BACK-TO-COMPANY-DATA-STEP-accept'
          },
          payroll_link_benefits_modal_company_code_wrong: {
            bind: 'alert-COMPANY-CODE-WRONG-accept'
          },
          payroll_link_benefits_vinculation_requests_existing_error: {
            bind: 'alert-PAYROLL-VINCULATION-REQUESTS-EXISTING-ERROR-accept'
          },
          payroll_link_benefits_vinculation_requests_error: {
            bind: 'alert-PAYROLL-VINCULATION-REQUESTS-ERROR-accept'
          },
          payroll_link_success_leave_operative_confirm: {
            bind: 'alert-CONFIRM-EXIT-PAYROLL-LINK-SUCCESS-OPERATIVE-accept'
          },
          payroll_link_benefits_retry_scan_qr: {
            bind: 'alert-PAYROLL-QR-INVALID-accept'
          },
          alert_saving_caution_cancel: {
            bind: 'alert-saving-CAUTION-cancel',
            link: {
              page: 'pocketsList'
            }
          },
          global_sign_token_error_on_accept_exit: {
            bind: 'alert-SIGN-OPERATION-RESEATED-EXIT-accept',
            backStep: true
          },
          global_alert_modal_close: {
            bind: 'show-map',
            link: {
              page: 'atmLocator'
            }
          },
          global_sign_token_standby_timer_succes: {
            bind: 'alert-standby-otp-accept'
          },
          global_sign_token_standby_otp_cancel: {
            bind: 'alert-standby-otp-cancel'
          },
          global_sign_token_logout_otp_accept: {
            bind: 'alert-redirect-user-accept'
          },
          global_sign_token_logout_otp_cancel: {
            bind: 'alert-redirect-user-cancel'
          },
          global_redemption_simulate_insufficient_modal_operative: {
            bind: 'alert-REDEMPTION-SIMULATE-INSUFFICIENT-MODAL-OPERATIVE-accept'
          },
          operational_limits_close_button_tapped: {
            bind: 'operational-limits-close'
          },
          operational_limits_reload_get_page: {
            bind: 'alert-modal-error-accept'
          },
          operational_limits_return_settings_page: {
            bind: 'alert-modal-error-cancel'
          },
          operational_limits_glomo_acept_modal_info: {
            bind: 'alert-OPERATIONAL-LIMITS-WITH-DRAWAL-INFO-accept',
            analytics: ANALYTICS_OPERATIONAL_LIMITS.dynamicLevel3('detalle')
          },
          operational_limits_lim_action_confirm: {
            bind: 'alert-OPERATIONAL-LIMITS-EXIT-accept'
          },
          global_international_transfers_exit_button_modal: {
            bind: 'alert-INTERNATIONAL-TRANSFER-EXIT-accept',
            backStep: true
          },
          debit_card_tracking_error_modal_send_retry: {
            bind: 'alert-tracking-info-not-available-accept'
          },
          debit_card_tracking_error_send_exit: {
            bind: 'alert-tracking-info-not-available-cancel'
          },
          debit_card_tracking_error_modal_tracking_call_bbva_line: {
            bind: 'alert-tracking-call-bbva-line-accept'
          },
          debit_card_tracking_error_modal_tracking_link_call_bbva_line: {
            bind: 'debit-tracking-call-bbva-line'
          },
          debit_card_tracking_error_modal_exit_tracking_call_bbva_line: {
            bind: 'alert-tracking-call-bbva-line-cancel'
          },
          debitCardTrackingDetail_modal_error_address_call_bbva_line: {
            bind: 'alert-error-address-response-accept'
          },
          debitCardTrackingDetail_modal_error_address_exit: {
            bind: 'alert-error-address-response-cancel'
          },
          cleanCardOperations_show_atm_pre_activation: {
            bind: 'glomo-qr-processor-manager-card-pre-activation-atm-show'
          },
          dashboard_refresh_financial_overview: {
            bind: 'glomo-qr-processor-manager-card-pre-activation-atm-show'
          },
          cleanCardOperations_failed_card_pre_activation_retry: {
            bind: 'alert-failed-card-pre-activation-accept'
          },
          cleanCardOperations_failed_card_pre_activation_exit: {
            bind: 'alert-failed-card-pre-activation-cancel'
          },
          global_stand_in_pending_transfers_info: {
            bind: 'alert-stand-in-bbva-transfers-cancel'
          },
          global_stand_in_unavailable_transfers_modal_exit: {
            bind: 'alert-stand-in-unavailable-transfers-accept'
          },
          global_stand_in_spei_transfers_info_cancel: {
            bind: 'alert-stand-in-spei-transfers-cancel'
          },
          global_stand_in_add_new_contact_transfers_info: {
            bind: 'alert-stand-in-account-modal-accept'
          },
          CANCEL_INSURANCE_MODAL_KEEP_ACCEPT: {
            bind: 'alert-cancel-insurance-keep-accept'
          },
          CANCEL_INSURANCE_MODAL_KEEP_CANCEL: {
            bind: 'alert-cancel-insurance-keep-cancel'
          },
          CANCEL_INSURANCE_MODAL_ERROR_ACCEPT: {
            bind: 'alert-cancel-insurance-error-accept'
          },
          payrollPortability_step_benefits_birthday_confirm: {
            bind: 'alert-BIRTHDATE-CONFIRMATION-accept'
          },
          payrollPortability_step_benefits_birthday_cancel: {
            bind: 'alert-BIRTHDATE-CONFIRMATION-cancel'
          },
          payrollPortability_exit_modal_button_pressed: {
            bind: 'alert-EXIT-MODAL-accept'
          },
          CANCEL_INSURANCE_MODAL_ERROR_CANCEL: {
            bind: 'alert-cancel-insurance-error-cancel'
          },
          CANCEL_INSURANCE_EXISTING_ERROR_ACCEPT: {
            bind: 'alert-existing-error-accept'
          },
          CANCEL_INSURANCE_EXISTING_ERROR_CANCEL: {
            bind: 'alert-existing-error-cancel'
          },
          parking_enrollment_exit_modal_accept: {
            bind: 'alert-EXIT-PARKING-ENROLLMENT-accept',
            backStep: true
          },
          parking_enrollment_exit_modal_cancel: {
            bind: 'alert-EXIT-PARKING-ENROLLMENT-cancel'
          },
          parking_enrollment_duplicate_account_modal_accept: {
            bind: 'alert-DUPLICATE-ACCOUNT-PARKING-ENROLLMENT-accept'
          },
          parking_enrollment_account_not_found_accept: {
            bind: 'alert-PARKING-ACCOUNT-NOT-FOUND-accept'
          },
          parking_enrollment_account_not_found_cancel: {
            bind: 'alert-PARKING-ACCOUNT-NOT-FOUND-cancel'
          },
          global_parking_recharge_click_exit_button: {
            bind: 'alert-MODAL-EXCESS-AMOUNTS-accept'
          },
          global_parking_recharge_click_call_mc_button: {
            bind: 'alert-MODAL-EXCESS-AMOUNTS-cancel'
          },
          CANCEL_NON_PREAPROVED_CONSUMER_LOAN_ACCEPT: {
            bind: 'alert-NON-PREAPPROVED-CONSUMER-LOAN-accept'
          },
          ERROR_NON_PREAPROVED_CONSUMER_LOAN_ACCEPT: {
            bind: 'alert-offer-error-accept'
          },
          ERROR_NON_PREAPROVED_CONSUMER_LOAN_CANCEL: {
            bind: 'alert-offer-error-cancel'
          },
          open_digital_account_retry_modal_accept: {
            bind: 'alert-DIGITAL-ACCOUNT-RETRY-GRANTING-MODAL-accept'
          },
          open_digital_account_retry_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-RETRY-GRANTING-MODAL-cancel'
          },
          open_digital_account_retry_error_modal_exit: {
            bind: 'alert-DIGITAL-ACCOUNT-GRANTING-MODAL-ERROR-accept'
          },
          open_digital_account_multistep_retry_personal_data_modal_accept: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-PERSONAL-DATA-MODAL-accept'
          },
          open_digital_account_multistep_retry_personal_data_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-PERSONAL-DATA-MODAL-cancel'
          },
          open_digital_account_multistep_retry_error_personal_data_modal_exit: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-PERSONAL-DATA-MODAL-ERROR-accept'
          },
          open_digital_account_multistep_retry_intelliget_extract_modal_accept: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-INTELLIGENT-EXTRACT-MODAL-accept'
          },
          open_digital_account_multistep_retry_intelliget_extract_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-INTELLIGENT-EXTRACT-MODAL-cancel'
          },
          open_digital_account_multistep_retry_error_intelliget_extract_modal_exit: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-INTELLIGENT-EXTRACT-MODAL-ERROR-accept'
          },
          open_digital_account_multistep_retry_create_customer_onboarding_modal_accept: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-CREATE_CUSTOMER_ONBOARDING-MODAL-accept'
          },
          open_digital_account_multistep_retry_create_customer_onboarding_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-CREATE_CUSTOMER_ONBOARDING-MODAL-cancel'
          },
          open_digital_account_multistep_retry_error_create_customer_onboarding_modal_exit: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-CREATE-CUSTOMER-ONBOARDING-MODAL-ERROR-accept'
          },
          open_digital_account_multistep_retry_contact_data_modal_accept: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-CONTACT-DATA-MODAL-accept'
          },
          open_digital_account_multistep_retry_contact_data_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-CONTACT-DATA-MODAL-cancel'
          },
          open_digital_account_multistep_retry_error_contact_data_modal_exit: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-CONTACT-DATA-MODAL-ERROR-accept'
          },
          open_digital_account_multistep_retry_postal_code_modal_accept: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-POSTAL-CODE-SERVICE-accept'
          },
          open_digital_account_multistep_retry_postal_code_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-RETRY-POSTAL-CODE-SERVICE-cancel'
          },
          open_digital_account_multistep_error_postal_code_modal_exit: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-POSTAL-CODE-SERVICE-ERROR-accept'
          },
          open_digital_account_multistep_exit_flow_code_modal_cancel: {
            bind: 'alert-DIGITAL-ACCOUNT-MULTISTEP-EXIT-FLOW-MODAL-cancel'
          },
          pois_detail_navigate_to_request_branch_appointment_success: {
            bind: 'alert-branch-detail-active-turn-accept'
          },
          global_request_branch_appointment_exit_modal_accept: {
            bind: 'alert-EXIT-REQUEST-BRANCH-APPOINTMENT-accept',
            backStep: true
          },
          global_atm_locator_active_turn_modal_accept: {
            bind: 'alert-branch-appointment-active-turn-accept'
          },
          CCH_MODIFY_CUSTOMER_RETRY_ERROR_CANCEL: {
            bind: 'alert-modify-customer-error-retry-cancel'
          },
          global_postal_address_nominess_modal_accept: {
            bind: 'alert-payroll-update-address-modal-requirements-accept'
          },
          global_postal_address_nominess_modal_error_accept: {
            bind: 'alert-UPDATE-ADDRESS-ERROR-REQUEST-CONTRACT-EXIT-accept'
          },
          global_check_section_attempts_account_accept: {
            bind: 'alert-CHECK-SECTION-ATTEMPTS-ACCOUNT-accept'
          },
          global_check_section_attempts_accept: {
            bind: 'alert-CHECK-SECTION-ATTEMPTS-accept'
          },
          global_check_deposits_photos_setting_accept: {
            bind: 'alert-PERMISSION-DENIED-accept'
          },
          global_check_deposits_photos_setting_accept: {
            bind: 'alert-CAMERA-ERROR-accept'
          },
          global_check_aggregator_documents_accept: {
            bind: 'alert-CHECKS-DOCUMENTS-accept'
          },
          global_check_aggregator_documents_cancel: {
            bind: 'alert-CHECKS-DOCUMENTS-cancel'
          },
          global_ERROR_ON_GET_ATTEMPTS_VALIDATION_ACCOUNT_accept: {
            bind: 'alert-ERROR-ON-GET-ATTEMPTS-VALIDATION-ACCOUNT-accept'
          },
          global_ERROR_ON_GET_ATTEMPTS_VALIDATION_ACCOUNT_cancel: {
            bind: 'alert-ERROR-ON-GET-ATTEMPTS-VALIDATION-ACCOUNT-cancel'
          },
          global_history_credit_retry_leave_operative: {
            bind: 'alert-HISTORY-CREDIT-ERROR-REQUEST-CONTRACT-RETRY-cancel'
          },
          global_history_credit_exit_leave_operative: {
            bind: 'alert-HISTORY-CREDIT-ERROR-REQUEST-CONTRACT-EXIT-cancel'
          },
          notifications_settings_edit_page_close_edit: {
            bind: 'alert-leaving-process-movements-accept'
          },
          notifications_settings_edit_page_close_edit_retry: {
            bind: 'alert-NOTIFICATIONS-SUBSCRIPTION-retry-cancel'
          },
          notifications_settings_edit_page_close_edit_exit: {
            bind: 'alert-NOTIFICATIONS-SUBSCRIPTION-exit-accept'
          },
          global_card_detail_third_party_wallet_on_card: {
            bind: 'alert-your-card-is-off-accept'
          },
          global_domiciliation_notice_detail_response_accept: {
            bind: 'alert-response-persist-error-cdc-accept'
          },
          global_domiciliation_notice_detail_response_button_cancel: {
            bind: 'alert-response-sending-error-cdc-accept'
          },
          global_domiciliation_notice_detail_response_button_cancel_from_header: {
            bind: 'alert-response-sending-error-cdc-from-header-cancel'
          },
          global_domiciliation_notice_detail_response_cancel: {
            bind: 'alert-response-persist-error-cdc-cancel'
          },
          global_domiciliation_notice_detail_response_cancel_from_header: {
            bind: 'alert-response-persist-error-cdc-from-header-cancel'
          },
          geolocation_repeat_permission: {
            bind: 'alert-geolocation-repeat-permission-accept'
          },
          geolocation_accept_go_to_configurations: {
            bind: 'alert-geolocation-not-accepted-accept'
          },
          geolocation_configuration_ios: {
            bind: 'alert-location-not-active-ios-accept'
          },
          geolocation_retry_get_location: {
            bind: 'alert-trying-to-connect-accept'
          },
          geolocation_logout_on_retry: {
            bind: 'alert-logout-app-accept'
          },
          inapp_crm_advanced_success_link_external: {
            bind: 'alert-LOGOUT-INAPP-CRM-accept'
          },
          alert_manager_accept_update_contract_confirmation_exit: {
            bind: 'alert-update-contract-confirm-exit-accept',
            backStep: true
          },
          alert_manager_accept_update_contract_success_modal: {
            bind: 'alert-update-success-contract-accept'
          },
          alert_manager_cancel_update_contract_success_modal: {
            bind: 'alert-update-success-contract-cancel'
          },
          alert_manager_accept_update_contract_retry_modal: {
            bind: 'alert-update-contract-retry-accept'
          },
          alert_manager_accept_update_contract_error_modal: {
            bind: 'alert-update-contract-error-accept',
            backStep: true
          },
          alert_manager_cancel_update_contract_incomplete_modal: {
            bind: 'alert-update-contract-incomplete-cancel',
            backStep: true
          },
          digital_activation_live_chat: {
            bind: 'alert-live-chat-cancel'
          },
          global_support_center_chat_close_chat_accept: {
            bind: 'alert-SUPPORT-CENTER-CHAT-CLOSE-CHAT-accept'
          },
          global_support_center_chat_out_of_service_accept: {
            bind: 'alert-SUPPORT-CENTER-CHAT-OUT-OF-SERVICE-accept'
          },
          global_support_center_chat_out_of_service_cancel: {
            bind: 'alert-SUPPORT-CENTER-CHAT-OUT-OF-SERVICE-cancel'
          },
          global_support_center_chat_session_failed_accept: {
            bind: 'alert-SUPPORT-CENTER-CHAT-INVALID-SESSION-accept'
          },
          codi_error_retry__qr_mobile_accept: {
            bind: 'alert-CODI-MODAL-NO-VERIFY-QR-MOBILE-accept'
          },
          codi_error_retry__qr_mobile_cancel: {
            bind: 'alert-CODI-MODAL-NO-VERIFY-QR-MOBILE-cancel'
          },
          codi_error_retry__qr_request_accept: {
            bind: 'alert-CODI-MODAL-NO-VERIFY-QR-REQUEST-accept'
          },
          codi_error_retry__qr_request_cancel: {
            bind: 'alert-CODI-MODAL-NO-VERIFY-QR-REQUEST-cancel'
          },
          codi_error_retry_mobile_request_accept: {
            bind: 'alert-MODAL-NO-VERIFY-QR-REQUEST-accept'
          },
          codi_error_retry__mobile_request_cancel: {
            bind: 'alert-MODAL-NO-VERIFY-QR-REQUEST-cancel'
          },
          codi_error_exit_account_pending: {
            bind: 'alert-codi-pending-validate-account-init-accept'
          },
          codi_error_exit_account_pending_cancel: {
            bind: 'alert-codi-pending-validate-account-init-cancel'
          },
          codi_error_exit_account_pending_qr: {
            bind: 'alert-codi-pending-validate-account-init-qr-accept'
          },
          codi_error_exit_account_pending_cancel_qr: {
            bind: 'alert-codi-pending-validate-account-init-qr-cancel'
          },
          codi_qr_payments_reader_success_GO_BACK_STEP: {
            bind: 'alert-MODAL_CODI_INVALID_QR-cancel'
          },
          SPECIALSALES_ACTIVATE_SALE: {
            bind: 'alert-special-sales-accept'
          },
          specialSales_EXIT_TO_NATIVE_CHANNEL_NEW: {
            bind: 'alert-special-sales-modal-accept'
          },
          SPECIALSALESMODALERROR_BACKSTEP: {
            bind: 'alert-special-sales-modal-error-cancel'
          },
          specialSalesModalError_EXIT_TO_NATIVE_CHANNEL_NEW: {
            bind: 'alert-special-sales-modal-error-accept',
            backStep: true
          },
          SPECIALSALESMODAL_CONTINUOUS: {
            bind: 'alert-special-sales-modal-cancel'
          },
          global_widget_loan_sustainable_rate_simulator_retry: {
            bind: 'alert-LOAN-SUSTAINABLE-ERROR-REQUEST-accept'
          },
          global_widget_loan_sustainable_rate_simulator_exit: {
            bind: 'alert-LOAN-SUSTAINABLE-ERROR-EXIT-cancel'
          },
          magic_log_modal_accept_btn: {
            bind: 'alert-modal-magic-info-accept'
          },
          magic_log_modal_cancel_btn: {
            bind: 'alert-modal-magic-info-cancel',
            nativeLink: {
              page: 'nativeLogin'
            }
          },
          sipare_resending_voucher_retry: {
            bind: 'alert-modal-error-sipare-product-detail-resending-voucher-accept'
          },
          sipare_resending_voucher_exit: {
            bind: 'alert-modal-error-sipare-product-detail-resending-voucher-cancel'
          },
          ch_mobile_top_up_delete_contact_successfully: {
            bind: 'alert-DELETE-CONTACT-AGENDA-accept'
          },
          instant_cash_exit_modal_accept: {
            bind: 'alert-INSTANT-CASH-CONFIRM-MODAL-accept'
          }
        }
      }
    }
  };
};

const signDm = (CONFIG) => {
  const COUNTRY = utils.getCountry(CONFIG);
  const mobile = CONFIG.phoneNumberContact;
  let signDmComponent = {
    zone: 'app__transactional',
    type: 'CC',
    familyPath: 'cells-sign-operation-dm',
    tag: 'cells-sign-operation-dm-' + COUNTRY,
    properties: {
      contactNumber: mobile,
      native: !!CONFIG.nativeShell,
      isNativeiOS: !!CONFIG.nativeIos,
      isSpherica: CONFIG.isSphericaMode,
      validationErrorClosingOptions: {
        false: {
          code: 'CLOSE',
          label: 'alert-signature-generic-error-exit'
        },
        true: {
          code: 'EXIT',
          label: 'alert-signature-error-accept-call-bank'
        }
      },
      limitTimerToken: 30000,

      //mobile,
      cellsConnections: {
        in: {
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_sign_token_logout_otp_accept: {
            bind: 'redirectToPage'
          },
          global_sign_token_logout_otp_cancel: {
            bind: 'redirectToPage'
          },
          signature_get_phone: {
            bind: 'getPhoneUser'
          },
          global_set_app_settings: {
            bind: 'getOtpPhone'
          },
          widget_handle_signature_no_authentication_soft_token: {
            bind: 'openSignatureNoAuthenticationSoftTokenError'
          },
          global_open_document_no_authentication_error: {
            bind: 'openSignatureNoAuthenticationSoftTokenError'
          },
          signature_invalid_open_modal_error: {
            bind: 'openSignatureInvalidError'
          },
          signature_open_modal_expired_error: {
            bind: 'openSignatureExpiredError'
          },
          signature_open_modal_attempts_error: {
            bind: 'openSignatureAttemptsError'
          },
          signature_open_modal_not_available_error: {
            bind: 'openSignatureNotAvailableError'
          },
          signature_open_modal_not_found_error: {
            bind: 'openSignatureNotFoundError'
          },
          signature_open_modal_generic_error: {
            bind: 'openSignatureError'
          },
          global_signature_modal_go_to_atm_accept: {
            bind: 'goToAtmLocator'
          },
          signature_no_authentication_call_contact_number: {
            bind: 'callContactNumber'
          },
          signature_blocked_soft_token_call_contact_number: {
            bind: 'callContactNumber'
          },
          signature_blocked_soft_token_reset: {
            bind: 'signReset'
          },
          global_signature_modal_call_mobile_bank_accept: {
            bind: 'callContactNumber'
          },
          global_call_for_help: {
            bind: 'callContactNumber'
          },
          sign_modal_close_spinner: {
            bind: 'controlSigningProccess'
          },
          sign_modal_submit_confirmation: {
            bind: 'submitSignS3'
          },
          sign_modal_submit_cronto: {
            bind: 'submitSignCronto'
          },
          sign_modal_submit_sign: {
            bind: 'submitSign'
          },
          sign_modal_new_sms: {
            bind: 'requestNewOtp'
          },
          sign_modal_authenticate_faceid: {
            bind: 'authenticateWithFaceId'
          },
          sign_modal_close_reset: {
            bind: 'signReset'
          },
          signature_error_reset: {
            bind: 'signReset'
          },
          global_signature_modal_new_sign_accept: {
            bind: 'signGetNewOtp'
          },
          sign_modal_cancelled: {
            bind: 'signCancel'
          },
          global_signature_modal_deprecated_soft_token: {
            bind: 'openOfflineSoftTokenModal'
          },
          global_foreign_currency_operative_fail_simulated_accept: {
            bind: 'callContactNumber'
          },
          global_foreign_currency_operative_fail_accept: {
            bind: 'callContactNumber'
          },
          glomo_security_settings_unvalidated_phone_call_contact_number: {
            bind: 'callContactNumber'
          },
          global_storage_get_deviceAccesses_error: {
            bind: 'storageDeviceAccessesLoaded'
          },
          global_storage_get_deviceAccesses_success: {
            bind: 'storageDeviceAccessesLoaded'
          },
          global_storage_get_sign_operation_error: {
            bind: 'storageSignOperationLoaded'
          },
          global_storage_get_sign_operation_success: {
            bind: 'storageSignOperationLoaded'
          },
          sign_modal_configure_token: {
            bind: 'handleConfigureToken'
          },
          st_enrollment_init_page: {
            bind: 'stEnrollPageInit'
          },
          sign_modal_timer_expired: {
            bind: 'updateSoftTokenModalConfig'
          },
          info_dispacht_sign: {
            bind: 'handleSignatureRequiredFirstStep'
          },
          digita_activation_send_mobile_number: {
            bind: 'getPhoneUser'
          },
          global_cronto_generate_otp_success: {
            bind: 'getCrontoOtp'
          },
          device_accesses_device_id: {
            bind: 'deviceId'
          },
          digital_activation_enrollment_token_key: {
            bind: 'removeToken'
          },
          device_access_remove_softtoken: {
            bind: 'removeToken'
          },
          global_ether_token_get_token_ids_success: {
            bind: 'getTokenIdsResponse'
          },
          native_user_id: {
            bind: 'userId'
          },
          global_set_call_timer_from_settings: {
            bind: 'callTimer'
          },
          global_ether_token_get_tokens_ids_success: {
            bind: 'setTokenSerialS3'
          },
          global_ether_token_get_tokens_ids_error: {
            bind: 'setSoftTokenSerialError'
          },
          global_ether_token_gen_otp_challenge_success: {
            bind: 'getOtpS3'
          },
          global_ether_token_gen_otp_challenge_error: {
            bind: 'errorGenerateOtp'
          },
          st_enrollment_delete_all_tokens: {
            bind: 'deleteAllTokensType'
          },
          global_ether_token_delete_all_tokens_success: {
            bind: 'deleteTokenS3success'
          },
          global_ether_token_deletetoken_success: {
            bind: 'deleteTokenS3success'
          },
          global_ether_token_deletetoken_error: {
            bind: 'deleteTokenS3error'
          },
          user_is_logged: {
            bind: 'isLogged'
          },
          global_login_success: {
            bind: 'onSuccessStorageResponse'
          },
          global_storage_get_softTokenUserId_success: {
            bind: 'onSuccessStorageResponse'
          }
        },
        out: {
          global_ether_token_get_tokens_ids: {
            bind: 'sign-get-tokens-ids'
          },
          global_ether_token_custom_plugin_call: {
            bind: 'ether-token-custom-call'
          },
          global_secure_sharing_remove_key: {
            bind: 'remove-key-secure-sharing'
          },
          global_redirect_to_st_enrollment: {
            bind: 'redirect-to-page-st-enrollment',
            link: {
              page: 'stEnrollment'
            }
          },
          global_get_from_storage: {
            bind: 'get-native-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-native-local-storage'
          },
          close_control_veil_otp: {
            bind: 'signature-error'
          },
          global_open_alert_manager: {
            bind: 'open-modal-call-timer'
          },
          ['global_glomo_signature_open_modal_error' + (CONFIG.isSphericaMode ? '_spherica' : '')]: {
            bind: 'signature-error'
          },
          sign_modal_update_settings: {
            bind: 'update-modal-softtoken-settings'
          },
          signature_navigate_to_atm_locator: {
            bind: 'signature-navigate-to-atm-locator',
            link: {
              page: 'atmLocator'
            }
          },
          sign_modal_open: {
            bind: 'signature-required'
          },
          sign_modal_close: {
            bind: 'sign-modal-close'
          },
          sign_modal_close_spinner: {
            bind: 'sign-modal-close-spinner'
          },
          sign_modal_signed_status: {
            bind: 'close-otp-spinner'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          close_transfer_control_veil: {
            bind: 'close-control-veil'
          },
          device_accesses_softtoken_enrolled: {
            bind: 'device-accesses-softtoken-enrolled',
            'forward-to-native': true
          },
          sign_modal_open_otp_params: {
            bind: 'otp-params-request'
          },
          otp_sms_code: {
            bind: 'otp-sms-code'
          },
          sign_dm_open_enroll: {
            bind: 'open-st-enrollment'
          },
          sign_modal_cancelled_fido: {
            bind: 'signature-cancel-fido'
          },
          sign_modal_cancelled_widgetErrorHandler: {
            bind: 'signature-cancel-widgetErrorHandler'
          },
          sign_modal_request: {
            bind: 'signature-sign-request-fido'
          },
          global_back_to_entry_point: {
            bind: 'back-to-entry-point',
            backStep: true
          },
          global_cronto_generate_otp: {
            bind: 'generate-token-cronto'
          },
          global_ether_token_create_client: {
            bind: 'cells-sign-customer-id'
          },
          global_ether_token_delete_all_tokens: {
            bind: 'delete-ether-token-s3'
          }
        }
      }
    }
  };

  return signDmComponent;
};

const signModal = (CONFIG) => {
  const isSpherica = CONFIG.isSphericaMode;
  const tag = `cells-sign-operation-modal${isSpherica ? '-spherica' : ''}`;
  const modalConfig = {
    zone: 'app__transactional',
    type: 'CC',
    tag,
    properties: {
      className: (CONFIG.nativeIos || false) ? 'ios-top-padding' : '',
      clearOnClose: true,
      clearPwdIcon: 'coronita:close',
      imgSrc: 'images/otp/otp-sms.png',
      keepOnAccept: true,
      resetOnClose: true,
      showAppPss: true,
      togglePwdIcon: 'coronita:visualize',
      togglePwdIconToggled: 'coronita:hide',
      enableSpinner: true,
      iOSFixedHeader: true,
      autoCompleteValue: 'off',
      tokenDigits: 8,
      cellsConnections: {
        in: {
          sign_modal_open: {
            bind: 'openWithSettings'
          },
          sign_modal_signed_status: {
            bind: 'signed'
          },
          sign_modal_close: {
            bind: 'close'
          },
          native_back_button_clicked_close_modal: {
            bind: 'close'
          },
          EXIT_TRANSFERS_PAGE_ACCEPT: {
            bind: 'close'
          },
          sign_modal_update_settings: {
            bind: 'updateSettings'
          },
          sign_modal_close_spinner: {
            bind: 'closeSpinner'
          },
          global_cells_key_recovery_close_otp_modal_wrong_password: {
            bind: 'close'
          },
          global_transfer_otp_error_accept: {
            bind: 'clearInput'
          },
          global_transfer_frequent_operations_otp_error_accept: {
            bind: 'clearInput'
          },
          global_safe_card_sign_request_error: {
            bind: 'close'
          },
          global_safe_card_sign_request_fatal: {
            bind: 'close'
          },
          global_life_health_insurances_sign_request_error: {
            bind: 'close'
          },
          global_life_health_insurances_sign_request_fatal: {
            bind: 'close'
          },
          global_deposits_insurances_sign_request_error: {
            bind: 'close'
          },
          global_additional_card_hiring_api_cards_error_on_get_card_proposals: {
            bind: 'close'
          },
          otp_sms_code: {
            bind: 'setOtp'
          },
          global_glomo_signature_open_modal_error: {
            bind: 'close'
          },
          global_glomo_signature_open_modal_error_spherica: {
            bind: 'close'
          },
          succes_register_fido: {
            bind: 'closeSpinner'
          },
          sing_modal_close_fido: {
            bind: 'close'
          }
        },
        out: {
          sign_modal_submit_confirmation: {
            bind: 'cells-sign-operation-submit-s3'
          },
          sign_modal_submit_cronto: {
            bind: 'cells-sign-operation-submit-cronto'
          },
          sign_modal_submit_sign: {
            bind: 'cells-sign-operation-submit'
          },
          sign_modal_codi_submit_sign: {
            bind: 'cells-sign-operation-codi-submit'
          },
          sign_modal_new_sms: {
            bind: 'cells-sign-operation-get-new-sms'
          },
          sign_modal_cancelled: {
            bind: 'cells-sign-operation-cancelled'
          },
          sing_modal_reseated: {
            bind: 'cells-sign-operation-modal-reseated'
          },
          close_control_veil: {
            bind: 'cells-sign-operation-opened'
          },
          cells_to_native_modal_opened: {
            bind: 'cells-sign-operation-opened',
            'forward-to-native': true
          },
          cells_to_native_modal_closed: {
            bind: 'close',
            'forward-to-native': true
          },
          sign_modal_authenticate_faceid: {
            bind: 'cells-sign-operation-authenticate-faceid'
          },
          sign_modal_close_reset: {
            bind: 'close'
          },
          global_otp_modal_loaded_analytics: {
            bind: 'cells-sign-operation-loaded-analytics'
          },
          sms_otp_plugin_call_ready: {
            bind: 'sms-otp-plugin-call-ready'
          },
          sign_modal_configure_token: {
            bind: 'cells-sign-modal-st-enroll'
          },
          sign_modal_timer_expired: {
            bind: 'cells-sign-operation-timer-expired'
          }
        }
      }
    }
  };

  if (isSpherica) {
    modalConfig.properties.textIconClose = 'common-header-button-close';
  }

  return modalConfig;
};

const bbvaAuth = (COUNTRY, CONFIG, PAGENAME) => {
  let base = {
    zone: 'app__main',
    tag: !CONFIG.globalServices.loginProvider ? 'bbva-auth' : CONFIG.globalServices.loginProvider,
    familyPath: 'bbva-auth',
    type: 'CC',
    properties: {
      host: CONFIG.globalServices.host,
      hostGrantingTicket: CONFIG.globalServices.hostGrantingTicket,
      consumerId: CONFIG.globalServices.consumerId,
      consumerIdCard: CONFIG.globalServices.consumerIdCard,
      customersApiVersion: CONFIG.globalServices.versions.customersV1,
      grantingTicketApiVersion: CONFIG.globalServices.versions.grantingTicket,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      country: COUNTRY,
      customerExpands: 'indicators,classifications',
      native: !!CONFIG.native,
      concatDocumentType: false,
      maxCachedUserLoginRetryCount: 0,
      authenticationTypeHeader: CONFIG.globalServices.customers.headers.authenticationType,
      cellsConnections: {
        in: {
          global_feature_stand_in_status: {
            bind: 'initStandIn'
          },
          login: {
            bind: 'login'
          },
          global_feature_customer_services: {
            bind: 'customerServicesFlag'
          },
          customer_logins_indicators_data: {
            bind: 'parseCustomersResponse'
          },
          error_on_get_customer_indicators: {
            bind: 'customerGlobalServicesError'
          },
          error_on_get_customer_logins: {
            bind: 'customerGlobalServicesError'
          },

          // WEB DIFF START
          modal_logout_automatic: {
            bind: 'logout'
          },

          global_logout_sesion_expiration: {
            bind: 'logout'
          },

          global_standin_login_success: {
            bind: 'standInLogin'
          },
          global_standin_login_error: {
            bind: 'standInLoginError'
          },

          // END
          user_cached: {
            bind: 'setCachedUser'
          },
          user_no_cached: {
            bind: 'unsetCachedUser'
          },
          modal_change_user_accept: {
            bind: 'unsetCachedUser'
          },

          //Common errors
          global_error_tsec_invalid: {
            bind: 'logoutClientOnly'
          },
          global_error_tsec_expired: {
            bind: 'logoutClientOnly'
          },
          global_error_tsec_cancelled: {
            bind: 'logoutClientOnly'
          },
          logout_request_start: {
            bind: 'logoutClientOnly'
          },
          device_access_logout: {
            bind: 'logoutClientOnly'
          },
          native_login_standin_success: {
            bind: 'isLogged'
          }
        },
        out: {
          global_standin_login_success: {
            bind: 'get-standin-financial-overview'
          },
          user_is_logged: {
            bind: 'is-logged-changed'
          },
          loading: {
            bind: 'loading-changed'
          },
          login_header_hidden: {
            bind: 'header-hidden-changed'
          },
          login_granting_ticket_success: {
            bind: 'login-request-success'
          },
          login_success_data: {
            bind: 'login-success'
          },
          logout_success: {
            bind: 'logout-success',
            'forward-to-native': true
          },
          global_logout_success: {
            bind: 'logout-success'
          },
          global_device_accesses_customer_id: {
            bind: 'user-id-changed'
          },
          gl_access_client_id: {
            bind: 'client-id-changed'
          },
          __bridge_ch_logout: {
            bind: 'logout-success'
          },
          login_error: {
            bind: 'show-information-modal'
          },
          login_error_max_retries: {
            bind: 'error-max-retries'
          },
          customer_global_services_headers: {
            bind: 'send-customer-global-services-headers'
          },
          customer_indicators_request: {
            bind: 'send-customer-global-indicators-request'
          },
          customers_error: {
            bind: 'customers-error'
          },
          confirm_logout_automatic_message: {
            bind: 'show-information-modal'
          },
          login_error_duplicated_id: {
            bind: 'error-duplicated-id',
            link: {
              page: 'loginGender'
            }
          },
          global_client_id: {
            bind: 'client-id-changed'
          },
          global_stand_in_headers: {
            bind: 'get-stand-in-headers'
          },
          logout_request_start: {
            bind: 'logout-request-success'
          }
        },
        params: {
          user: 'global_user',
          userId: 'global_user_id',
          isLogged: 'global_user_logged'
        }
      }
    }
  };

  if (CONFIG.nativeShell) {
    base.properties.cellsConnections.in.native_login_success = {
      bind: 'parseCustomersResponse'
    };
  }

  if (!isPublicPage(PAGENAME)) {
    base.properties.cellsConnections.in['__bridge_page_' + PAGENAME] = {
      bind: 'checkedUser'
    };
  }

  if (!CONFIG.native) {
    base.properties.cellsConnections.out.logout_success = {
      bind: 'feedback-navigate-login',
      link: {
        page: 'login'
      }
    };
  }

  return base;
};

const bbvaControllerDeviceAccessesBiometricsNotFidoEnrollment = () => ({
  zone: 'app__main',
  type: 'CC',
  tag: 'bbva-controller-device-accesses-biometrics-not-fido-enrollment',
  familyPath: '@glomo-web-components/bbva-controller-device-accesses-biometrics-not-fido-enrollment',
  render: 'litElement',
  properties: {
    cellsConnections: {
      in: {
        login_success_data: {
          bind: 'handleLoginSuccessData'
        },
        success_on_get_customer_logins: {
          bind: 'customerLogins'
        },
        success_on_get_customer_indicators: {
          bind: 'customerIndicators'
        },
        global_feature_flag_collection_updated: {
          bind: 'parseFeatureFlagCustomerServices'
        },
        headers_customer_logins: {
          bind: 'handleLastResponseHeaders'
        }
      },
      out: {
        login_customer_logins: {
          bind: 'get-customer-logins'
        },
        login_customer_indicators: {
          bind: 'get-customer-indicators'
        },
        global_login_success: {
          bind: 'login-success-normalized-value'
        },
        global_login_success_indicators: {
          bind: 'login-success-not-normalized-value'
        },
        global_holder_name: {
          bind: 'login-success-holder-name-value'
        },
        global_feature_customer_services: {
          bind: 'send-feature-flag-customer-services'
        },
        customer_logins_request: {
          bind: 'send-customer-global-logins-request'
        },
        customer_logins_indicators_data: {
          bind: 'send-customer-indicators-logins-data'
        },
        customer_global_logins_headers: {
          bind: 'send-customer-login-service-headers'
        }
      }
    }
  }
});

const timeoutHandler = (CONFIG) => {
  return {
    zone: 'app__main',
    tag: 'cells-timeout-handler',
    type: 'CC',
    properties: {
      showSnackBarMessage: true,
      foregroundTimeout: CONFIG.sessionTimeout.foreground * 60000,
      backgroundTimeout: CONFIG.sessionTimeout.background * 60000,
      isNative: !!CONFIG.native,
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'start'
          },
          global_logout_success: {
            bind: 'stop'
          },

          // CHANNELS USED TO START OR STOP AUTOMATIC LOGOUT
          global_start_session_end_time: {
            bind: 'start'
          },
          global_stop_app_logoff_time: {
            bind: 'stop'
          },
          web_view_visibility: {
            bind: 'onVisibilityChanged'
          }
        },
        out: {
          global_show_snackbar: {
            bind: 'timeout-expired-with-message',
            'forward-to-native': true
          },
          session_timeout_expired: {
            bind: 'timeout-expired'
          },
          codi_session_timeout_expired: {
            bind: 'timeout-expired'
          },
          global_login_timer: {
            bind: 'set-date-now'
          }
        }
      }
    }
  };
};

const loadingManager = (CONFIG) => ({
  zone: 'app__main',
  tag: 'glomo-loading-manager',
  type: 'CC',
  properties: {
    cellsConnections: {
      pageReady: !CONFIG.native,
      in: {
        global_logout_success: {
          bind: 'reset'
        },
        [`${CONFIG.native ? 'native_login_success' : 'global_login_success'}`]: {
          bind: 'setAuthReady'
        },
        global_storage_get_app_settings_success: {
          bind: 'setAppSettings'
        },
        global_native_appsettings: {
          bind: 'getAppSettings'
        },
        global_session_token_ready: {
          bind: 'setTsecReady'
        },
        global_first_page_loaded: {
          bind: 'setPageReady'
        }
      },
      out: {
        global_app_ready_with_login: {
          bind: 'page-and-auth-ready'
        },
        global_get_from_storage: {
          bind: 'get-app-settings'
        },
        global_set_app_settings: {
          bind: 'set-app-settings'
        }
      }
    }
  }
});

const quantumManager = {
  zone: 'app__main',
  type: 'CC',
  tag: 'bbva-analyticmanager-core-quantum',
  familyPath: '@glomo-web-components/bbva-analyticmanager-core',
  render: 'litElement',
  properties: {
    cellsConnections: {
      in: {
        global_set_app_settings: {
          bind: 'initializeComponent'
        },
        ['__bridge_evt_template-transition-end']: {
          bind: 'handleNavigation'
        }
      }
    }
  }
};

const sessionTokenDM = {
  zone: 'app__main',
  type: 'CC',
  familyPath: 'cells-hybrid-session-token',
  tag: 'cells-hybrid-session-token',
  properties: {
    cellsConnections: {
      in: {
        'global-auth-token': {
          bind: 'handleToken'
        }
      },
      out: {
        global_session_token_ready: {
          bind: 'session-token-set'
        }
      }
    }
  }
};

const glomoStorageManager = (CONFIG) => {
  return {
    zone: 'app__main',
    tag: CONFIG.nativeShell ? 'cells-mobile-local-storage' : 'cells-local-storage',
    type: 'CC',
    properties: {
      cellsConnections: {
        in: {
          global_get_from_storage: {
            bind: 'get'
          },
          global_set_in_storage: {
            bind: 'set'
          },
          global_remove_from_storage: {
            bind: 'remove'
          }
        },
        out: {}
      }
    }
  };
};
const feedbackDm = (CONFIG) => {
  return {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-feedback-dm',
    properties: {
      host: CONFIG.globalServices.hostExternal,
      customerAPIVersion: CONFIG.globalServices.versions.customers,
      businessCryptographyApiVersion: CONFIG.globalServices.versions.businessCryptography,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      enableContactIdInHeaders: true,
      native: !!CONFIG.native,
      appVersion: CONFIG.appVersion,
      headers: [{
        'name': 'vnd.bbva.device.app-name',
        'defaultValue': 'GloMo'
      },
      {
        'name': 'vnd.bbva.device-os-name',
        'defaultValue': 'Linux',
        'path': 'os'
      },
      {
        'name': 'vnd.bbva.device.dpi',
        'defaultValue': 'XXHDPI',
        'path': 'screenDimensions'
      },
      {
        'name': 'vnd.bbva.device.app-version',
        'defaultValue': '1.0.1',
        'path': 'versionData'
      },
      {
        'name': 'Accept-Language',
        'defaultValue': 'es'
      }
      ],
      useDeviceInfo: CONFIG.native,
      cellsConnections: {
        in: {
          global_get_feedback: {
            bind: 'postBehavioralEvents'
          },
          feedback_get_application_feedback_params: {
            bind: 'getApplicationFeedbackParams'
          }
        },
        out: {
          global_get_feedback_error: {
            bind: 'error-on-post-behavioral-events'
          },
          global_feedback_ignore: {
            bind: 'ignore-user-feedback'
          },
          global_user_feedback_fetched: {
            bind: 'user-feedback-fetched'
          }
        },
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        }
      }
    }
  };
};

const feedbackManager = (CONFIG, PAGENAME) => {
  return {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-feedback-manager',
    properties: {
      pagename: PAGENAME,
      feedbackConfigList: utils.getFeedbackOperation(CONFIG),
      cellsConnections: {
        in: {
          global_feature_flag_feedback_config: {
            bind: 'parseFeatureFlags'
          },
          global_feedback_ignore: {
            bind: 'manageFeedback'
          },
          global_get_feedback_error: {
            bind: 'manageFeedback'
          },
          global_user_feedback_fetched: {
            bind: 'manageFeedback'
          },
          global_feedback_navigate_exit_url: {
            bind: 'navigateToExitUrl'
          },
          global_navigate_to_feedback: {
            bind: 'navigateToFeedback'
          },
          global_prepare_feedback: {
            bind: 'prepareFeedback'
          },
          global_set_feedback_link: {
            bind: 'feedbackLink'
          },
          global_feedback_set_exit_url: {
            bind: 'exitUrl'
          }
        },
        out: {
          global_feedback_navigate_to_dashboard: {
            bind: 'feedback-navigate-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          global_get_feedback: {
            bind: 'get-feedback'
          },
          global_ignore_feedback: {
            bind: 'ignore-feedback'
          },
          global_feedback_navigate_to_feedback: {
            bind: 'navigate-to-feedback',
            link: {
              page: 'feedback',
              params: {
                feedbackLink: 'feedbackLink',
                continue: 'continue'
              }
            }
          },
          navigate_to_logout_feedback: {
            bind: 'open-feedback-logout',
            link: {
              page: 'feedbackLogout',
              params: {
                href: 'feedbackLink'
              }
            }
          },
          global_feedback_navigate_exit_url: {
            bind: 'ignore-feedback-logout'
          },
          global_feedback_show_rate_the_app_plugin: {
            bind: 'glomo-feedback-rate-the-app'
          },
          global_feedback_navigate_to_previous_page: {
            bind: 'feedback-navigate-to-previous-page',
            'forward-to-native': true,
            backStep: true
          },
          international_transfer_to_dashboard: {
            bind: 'feedback-navigate-dashboard',
            'forward-to-native': true
          },
          own_foreign_transfer_success_to_dashboard: {
            bind: 'feedback-navigate-transfersSuccessToDashboard',
            'forward-to-native': true
          },
          global_backstep_channel: {
            bind: 'feedback-navigate-transfersToDashboard',
            link: {
              page: 'dashboard'
            }
          },
          chatwidget_to_previus_page: {
            bind: 'feedback-navigate-chatwidget',
            backStep: true
          },
          global_feedback_navigate_to_logout: {
            bind: 'feedback-navigate-logout'
          }
        },
        params: {
          productId: 'productId',
          feedbackOperation: 'feedbackOperation'
        }
      }
    }
  };
};

const campaignsDM = (CONFIG) => {
  const campaignsCode = Object.keys(utils.getCampaignsCode());

  return {
    zone: 'app__main',
    type: 'CC',
    tag: 'glomo-campaigns-dm-mx',
    familyPath: 'glomo-campaigns-dm',
    properties: {
      isSpherica: CONFIG.isSphericaMode,
      host: CONFIG.globalServices.host,
      localCurrency: utils.getLocalCurrency(CONFIG),
      campaignsApiVersion: CONFIG.globalServices.versions.campaigns,
      native: CONFIG.native || false,
      offerNavigationConfig: [
        {
          flag: 'glomo.contractProductSection.ocNonPreapprovedCreditCardRefactor',
          code: '0SKY',
          redirectPage: 'npaCreditCard',
          pageName: 'nonPreApprovedCreditCardBureau'
        },
        {
          flag: 'glomo.contractProductSection.nonPreApprovedConsumerLoan',
          code: '00CB',
          redirectPage: 'npaConsumerLoan',
          pageName: 'nonPreApprovedConsumerLoanBureau'
        }
      ],
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      appDefaultVersion: '',
      includeOffers: campaignsCode,
      showReviewOffers: true,
      objectOffersFlags: offersFlagsData,
      duplicateIdProducts: {
        LOANS: {
          duplicateId: '0732',
          renamedId: 'L|0732'
        }
      },
      customizableOffers: {
        CARDS: {
          '0732': {
            description: 'glomo-campaigns-dm-card-restructure-offer',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/deposit_into_account_dollar.svg',
              alt: 'OFFERS'
            }
          },
          '0769': {
            description: 'glomo-campaigns-dm-card-apf-offer',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/calendar_account_dark.svg',
              alt: 'OFFERS'
            }
          },
          '0733': {
            description: 'glomo-campaigns-dm-card-ppf-offer',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/calendar_account_dark.svg',
              alt: 'OFFERS'
            }
          },
          '0791': {
            serviceDescription: true,
            description: '',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/blackHawk/info/task-list.svg',
              alt: 'OFFERS'
            }
          },
          '0813': {
            serviceDescription: true,
            description: '',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/fundsHiring/oc-fondo-simple-glass.svg',
              alt: 'OFFERS'
            }
          },
          'NILC': {
            serviceDescription: true,
            smallImg: {
              id: 'OFFERS',
              src: './images/increment/increase-credit-card.svg',
              alt: 'OFFERS'
            }
          },
          '0839': {
            serviceDescription: true,
            description: '',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/onboardingBbvaTrader/values-bbva-trader-glass.png',
              alt: 'OFFERS'
            }
          },
          '0856': {
            bannerLink: 'loan-and-mortgage-information-mortgage-tracking-mx-offer-link',
            description: 'loan-and-mortgage-information-mortgage-tracking-mx-card-description',
            text: 'loan-and-mortgage-information-mortgage-tracking-mx-card-text',
            smallImg: {
              id: 'OFFERS',
              src: './images/loanAndMortgageInformation/mortgage-glass.png',
              alt: 'OFFERS'
            }
          }
        },
        LOANS: {
          'L|0732': {
            description: 'glomo-campaigns-dm-loan-restructure-offer',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/offers/loan/loan.svg',
              alt: 'OFFERS'
            }
          },
          '0740': {
            description: 'glomo-campaigns-dm-loan-consumer-offer',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/offers/loan/loan.svg',
              alt: 'OFFERS'
            }
          },
          '0739': {
            description: 'glomo-campaigns-dm-loan-car-offer',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/offers/loan/loan.svg',
              alt: 'OFFERS'
            }
          },
          '0788': {
            description: 'Una cuenta hecha para ti',
            text: '¡Ábrela ahora y descubre el mundo de oportunidades que BBVA tiene para ti!',
            smallImg: {
              id: 'OFFERS',
              src: './images/sales_tdc_cta.svg',
              alt: 'OFFERS'
            },
            config: {
              showDate: false
            }
          },
          '0779': {
            description: 'glomo-campaigns-dm-loan-consolidation-offer',
            text: '',
            smallImg: {
              id: 'OFFERS',
              src: './images/deposit_into_account_dollar.svg',
              alt: 'OFFERS'
            }
          },
          '0814': {
            description: 'bbva-feature-mortgage-tracking-offer-title',
            text: 'bbva-feature-mortgage-tracking-offer-description',
            offerType: {
              id: 'mortgage-main-tracking'
            },
            smallImg: {
              id: 'OFFERS',
              src: './images/home_search.svg',
              alt: 'OFFERS'
            }
          }
        }
      },
      staticOffers: [{
        bannerLink: 'cells-oc-banner-iwant',
        bannerType: 'deposit-hiring',
        config: {
          description: 'glomo-campaigns-dm-offer-deposit-description',
          text: '',
          name: 'glomo-deposit-hiring-main-description',
          class: 'banner--image-center',
          offerId: 'DEPOSIT_CONTRACTING',
          isSimulationAllowed: false,
          offerType: {
            name: 'glomo-deposit-hiring-title',
            id: 'deposit-hiring'
          },
          amount: {
            amount: '2000.00',
            currency: 'MXN',
            description: ''
          },
          contractId: '',
          smallImg: {
            id: 'DEPOSIT_CONTRACTING',
            src: './images/deposit-hiring.svg',
            alt: 'DEPOSIT_CONTRACTING'
          },
          product: {
            productId: '0PGR',
            productTypeId: 'DEPOSITS'
          },
          priority: 0
        }
      },
      {
        bannerLink: 'cells-oc-banner-iwant',
        bannerType: 'oc-fund',
        config: {
          description: 'glomo-campaigns-dm-offer-funds-description',
          text: '',
          name: 'glomo-campaigns-dm-offer-funds-name',
          class: 'banner--image-center',
          offerId: 'FUND_CONTRACTING',
          offerType: {
            name: 'cells-oc-banner-offer-type-name-funds',
            id: 'OC-FUND'
          },
          endDate: null,
          amount: {
            amount: '50.00',
            currency: 'MXN',
            description: ''
          },
          isShownInDashboard: false,
          product: {
            productId: '0FIN',
            contractId: '',
            productTypeId: 'FUNDS'
          },
          smallImg: {
            id: 'FONDOS_INVERSION',
            src: './images/contractProductSection/invest_dollar.svg',
            alt: 'FONDOS_INVERSION'
          },
          priority: 0
        }
      },
      {
        bannerLink: 'cells-oc-banner-iwant-reaches-goals',
        bannerType: 'metas-saving-goals',
        config: {
          amount: null,
          class: 'banner--image-center',
          description: 'glomo-campaigns-dm-offer-goals-name',
          isSimulationAllowed: false,
          name: 'glomo-campaigns-dm-offer-goals-name',
          offerId: 'META_CONTRACTING',
          priority: 0,
          product: {
            productId: 'ME',
            productTypeId: 'ACCOUNTS',
            subProductType: {
              id: '0004',
              name: 'PLAN'
            }
          },
          smallImg: {
            alt: 'ACCOUNT_PLAN',
            id: 'ACCOUNT_PLAN',
            src: './images/microillustration_save_money.svg'
          },
          text: 'glomo-campaigns-dm-offer-goals-description',
          endDate: null
        }
      },
      {
        bannerLink: 'bbva-feature-mortgage-tracking-detail-view-review-link',
        bannerType: 'oc-mortgage-tracking',
        config: {
          class: 'banner--image-center',
          description: 'bbva-feature-mortgage-tracking-detail-view-description',
          text: 'bbva-feature-mortgage-tracking-detail-view-text',
          name: 'bbva-feature-mortgage-tracking-detail-view-description',
          offerType: {
            name: 'bbva-feature-mortgage-tracking-detail-view-name',
            id: 'oc-mortgage-tracking'
          },
          offerId: '0MTK',
          endDate: null,
          amount: null,
          isShownInDashboard: true,
          product: {
            productId: 'mortgage-tracking'
          },
          smallImg: {
            id: 'TRACKING_HIPOTECARIO',
            src: './images/home_search.svg',
            alt: 'TRACKING_HIPOTECARIO'
          },
          priority: 0
        }
      },
      {
        bannerLink: 'cells-oc-banner-iwant',
        bannerType: 'oc-account-young',
        config: {
          class: 'banner--image-center',
          description: 'account-origination-oc-account-young-offer-description',
          text: 'account-origination-oc-account-young-offer-text',
          name: 'account-origination-oc-account-young-offer-description',
          offerType: {
            name: 'account-origination-oc-account-young-offer-text',
            id: 'oc-account-young'
          },
          offerId: '0790',
          endDate: null,
          amount: null,
          isShownInDashboard: true,
          product: {
            productId: 'oc-account-young'
          },
          smallImg: {
            id: 'OC_ACCOUNT_YOUNG',
            src: './images/accounts/account_spherica.svg',
            alt: 'OC_ACCOUNT_YOUNG'
          },
          priority: 0
        }
      }],
      paramsCPS: {
        'label.id': 'no preaprobados'
      },
      config: {
        filterOffersByPeriod: false,
        concatNameDescription: false,
        showDate: true,
        showAmountDescription: true,
        amountDescription: 'Hasta por '
      },
      params: {
        'origin.id': 'OLG'
      },
      offerProductIdReward: '0725',
      cellsConnections: {
        in: {
          dashboard_youngsters_hide_offer: {
            bind: 'isGlomoMiniorAccount'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          },
          global_offers_retrieved: {
            bind: 'validateReceivedOffers'
          },
          contract_product_section_init_page: {
            bind: 'getOffersCPS'
          },
          global_feature_stand_in_status: {
            bind: 'standIn'
          },
          dashboard_init_page: {
            bind: 'getOfferStandIn'
          },
          dashboard_pull_to_refresh_start: {
            bind: 'getOfferStandIn'
          },
          dashboard_offers_refresh: {
            bind: 'getOffers'
          },
          global_oc_banner_clicked: {
            bind: 'bannerClicked'
          },
          global_oc_banner_closed: {
            bind: 'bannerClosed'
          },
          dashboard_funds: {
            bind: 'funds'
          },
          global_set_app_settings: {
            bind: 'getOffersAppSettings'
          },
          global_deep_link_all_offer: {
            bind: 'getOffers'
          },
          MORTGAGE_CERTIFICATE_REVIEW_SEND_CARD_CONFIG: {
            bind: 'setExternalOffers'
          },
          list_proposals_normalized: {
            bind: 'setExternalOffers'
          },
          global_financial_overview_details: {
            bind: 'dataDepositContracts'
          },
          contract_product_section_oc_banner_deposit_hiring_clicked: {
            bind: 'redirectDepositsFlows'
          },
          contract_product_section_oc_banner_deposit_hiring_static_clicked: {
            bind: 'redirectDepositsFlows'
          },
          npa_car_loan_offer: {
            bind: 'setExternalOffers'
          },
          global_login_success: {
            bind: 'globalCacheStorage'
          },
          dashboard_accounts: {
            bind: 'dashboardAccountsStorage'
          },
          send_review_offers_amount: {
            bind: 'reviewOffersAmount'
          },
          global_deep_link_offers_request: {
            bind: 'isFromDeepLinkOffers'
          },
          global_feature_flag_futura_collections: {
            bind: 'futuraCollections'
          }
        },
        out: {
          global_offer_closed: {
            bind: 'offer-closed'
          },
          global_unparsed_offers_retrieved: {
            bind: 'set-offers'
          },
          global_customer_relationship_management_offers: {
            bind: 'offers-c-r-m-changed'
          },
          contract_product_section_offers_parsed: {
            bind: 'data-campaigns'
          },
          global_offers_retrieved: {
            bind: 'offers-changed'
          },
          global_get_offer_banner: {
            bind: 'offers-changed'
          },
          close_control_veil: {
            bind: 'glomo-campaigns-close-veil'
          },
          global_current_page: {
            bind: 'current-page-changed'
          },
          global_offers_campaigns_error: {
            bind: 'error-on-retrieve-campaigns'
          },
          global_offers_analytics: {
            bind: 'offers-analytics'
          },
          global_request_external_offers: {
            bind: 'get-external-offers'
          },
          global_redirect_to_contract_payment_existing_create_channel: {
            bind: 'redirect-to-contract-payment-existing'
          },
          global_redirect_to_deposit_hiring_create_channel: {
            bind: 'redirect-to-deposits-hiring'
          },
          global_redirect_to_card_transaction_servicing_scheduled_donations_create_channel: {
            bind: 'redirect-to-card-transaction-servicing-scheduled-donations'
          }
        }
      }
    }
  };
};

const offersManager = (CONFIG, PAGENAME) => {
  const country = utils.getCountry(CONFIG);
  const campaignsConfig = {
    dashboard: {
      positions: [ 1 ]
    }
  };
  const channelPrefix = utils.snakeCase(PAGENAME);

  return {
    zone: 'app__main',
    tag: 'glomo-offers-manager',
    type: 'CC',
    properties: {
      country,
      campaignsConfig,
      closedOffersKey: 'closed_offers',
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'updateCurrentPage'
          },
          global_offers_retrieved: {
            bind: 'setOffers'
          },
          global_current_page: {
            bind: 'setPage'
          },
          global_storage_get_closed_offers_success: {
            bind: 'closedOffers'
          },
          global_get_offer_banner: {
            bind: 'getOfferBanner'
          },
          dashboard_slots: {
            bind: 'bannerSlots'
          },
          dashboard_loaded: {
            bind: 'showDashboardBanners'
          },
          global_offer_closed: {
            bind: 'closeOffer'
          },
          cells_oc_banner_list_get_page: {
            bind: 'getPageOffers'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-closed-offers'
          },
          global_set_in_storage: {
            bind: 'set-closed-offers'
          },
          global_offers_changed: {
            bind: 'offers-changed'
          },
          global_offers_manager_retrieved: {
            bind: 'offers-changed'
          },
          global_get_filtered_offers: {
            bind: 'filtered-offers-changed'
          },
          [`${channelPrefix}_first_filtered_offer`]: {
            bind: `${PAGENAME}-first-filtered-offer`
          },
          [`${channelPrefix}_open_banner`]: {
            bind: `${PAGENAME}-open-banner`
          },
          [`${channelPrefix}_close_banner`]: {
            bind: `${PAGENAME}-close-banner`
          },
          global_glomo_offers_manager_page_offers: {
            bind: 'glomo-offers-manager-page-offers'
          },
          global_glomo_offers_manager_get_more_offers: {
            bind: 'glomo-offers-manager-get-more-offers'
          },
          glomo_offers_manager_page_added: {
            bind: 'glomo-offers-manager-page-added'
          }
        }
      }
    }
  };
};

const cellsConnectionStatus = PAGENAME => {
  let base = {
    zone: 'app__main',
    type: 'CC',
    tag: 'cells-connection-status',
    properties: {
      statusByPagename: true,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'setCurrentPage'
          },
          ['__bridge_evt_template-registered']: {
            bind: 'checkConnectionStatus'
          }
        },
        out: {
          ['connection_status_' + PAGENAME + '_offline']: {
            bind: 'cells-connection-status-' + PAGENAME + '-offline'
          },
          ['connection_status_' + PAGENAME + '_online']: {
            bind: 'cells-connection-status-' + PAGENAME + '-online'
          }
        }
      }
    }
  };
  return base;
};

const disconnectedBanner = PAGENAME => {
  let base = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'cells-modal-alert',
    properties: {
      type: 'error',
      toast: true,
      duration: 0,
      content: 'cells-no-connection-message',
      cellsConnections: {
        in: {},
        out: {}
      }
    }
  };
  if (PAGENAME !== 'login') {
    base.properties.cellsConnections.in = {
      ['connection_status_' + PAGENAME + '_offline']: {
        bind: 'open'
      },
      ['connection_status_' + PAGENAME + '_online']: {
        bind: 'close'
      }
    };
  }
  return base;
};

const nativeAnalytics = (CONFIG) => {
  const NATIVE_ANALYTICS_OUT_CHANNELS = require('../analytics/common/_native-analytics-channels')(CONFIG);
  return {
    zone: 'app__main',
    tag: 'bbva-analyticmanager-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-technical-core',
    render: 'litElement',
    type: 'CC',
    properties: {

      // ONLY FOR LAUNCH
      normalizeProps: true,
      userDataIds: ['profileID', 'userID', 'prospectID', 'platformCode'],

      // ONLY FOR LAUNCH,
      userDataMap: [{
        key: 'platformCode',
        path: 'adobe'
      },
      {
        key: 'profileID',
        path: 'customerId'
      },
      {
        key: 'gender',
        path: 'gender.id'
      },
      {
        key: 'userState',
        value: 'logado'
      },
      {
        key: 'age',
        path: 'birthData.birthDate'
      }
      ],
      analyticLandings: [
        'landing_campaign_start_link',
        'landing_public_campaign_start_link',
        'landing_campaign_close_link',
        'landing_public_campaign_close_link',
        'landing_campaign_link',
        'landing_public_campaign_link'
      ],
      appConfig: {
        dtmLibraryUrl: CONFIG.dtmLibraryUrl,
        environment: CONFIG.environment,
        mainNode: CONFIG.mainNode,
        sysEnv: CONFIG.sysEnv,
        appVersion: CONFIG.appVersion,
        businessUnit: CONFIG.businessUnit,
        siteAppName: CONFIG.siteAppName,
        projectName: CONFIG.projectName,
        fulfillmentModel: CONFIG.fulfillmentModel,
        userSegmentGlobal: CONFIG.userSegmentGlobal,
        lang: CONFIG.lang
      },
      genderDictionary: [{
        key: 'femenino',
        posibleValues: ['female', 'women', 'woman', 'femenine']
      },
      {
        key: 'masculino',
        posibleValues: ['male', 'men', 'man', 'masculine']
      }
      ],
      notSendOptimizationAnalytics: [
        'enrolamiento facial',
        'geolocalizacion',
        'originForm',
        'formScreenType',
        'fido_enrollment',
        'fido enrollment',
        'modo discreto',
        'nps login',
        'token movil'
      ],
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          '__bridge_evt_track-event': {
            bind: 'sendOptimization'
          },
          global_analytics_optimization_node_response: {
            bind: 'sendOptimizationAnalytics'
          },
          global_analytics_optimization_node_response_products: {
            bind: 'sendOptimizationProducts'
          },
          global_native_login_success: {
            bind: 'resetLoginData'
          },
          global_login_success: {
            bind: 'persistUserData'
          },
          global_logout_success: {
            bind: 'resetUserData'
          },
          session_timeout_expired: {
            bind: 'beforeLogoutSuccess'
          },
          global_feedback_navigate_to_logout: {
            bind: 'beforeLogoutSuccess'
          },
          atm_locator_is_logged: {
            bind: 'persistPageInfoArea'
          },
          global_analytics_reset_data: {
            bind: 'resetData'
          },
          hide_old_dashboard: {
            bind: 'futuraDashboardActivated'
          },
          '__bridge_page_dashboard': {
            bind: 'validateNavigationToDashboard'
          },
          global_discreet_mode_init_external_page_data: {
            bind: 'updateDiscreetMode'
          },
          app_info_structure_home_core_discreet_mode_status: {
            bind: 'updateDiscreetMode'
          },
          global_discreet_mode_request_permission_state: {
            bind: 'updateDiscreetMode'
          },
          global_discreet_mode_selected_option: {
            bind: 'updateDiscreetMode'
          },
          discreet_mode_confirm_option: {
            bind: 'updateDiscreetMode'
          }
        },
        out: {
          app_info_structure_home_core_optimization_node: {
            bind: 'bbva-analyticsmanager-send-optimization'
          },
          global_logout_sesion_expiration: {
            bind: 'analytics-logout-success',
            analytics: ANALYTICS_LOGOUT.LOGOUT_LINK
          },
          global_analytics_login_screen: {
            bind: 'login_screen-send-analytic',
            analytics: ANALYTICS_LOGIN.pageViewLogin
          },
          global_analytics_login_sesion: {
            bind: 'login_success-send-analytic',
            analytics: ANALYTICS_LOGIN.linkLoginSuccess
          },
          global_native_login_credentials_error_analytic: {
            bind: 'login_credentials_error-send-analytic',
            analytics: ANALYTICS_LOGIN.linkErrorLoginIncorrectData
          },
          global_native_login_blocked_user_error_analytic: {
            bind: 'login_blocked_user_error-send-analytic',
            analytics: ANALYTICS_LOGIN.linkErrorLoginBlockedPassword
          },
          global_native_login_blocked_user_error_page_view_analytic: {
            bind: 'login_blocked_user_error-page-view-send-analytic',
            analytics: ANALYTICS_LOGIN.pageViewErrorLoginBlockedPassword
          },
          global_native_login_biometry_default_error_analytic: {
            bind: 'login_biometry_default_error-send-analytic',
            analytics: ANALYTICS_LOGIN.linkErrorLoginBiometry
          },
          global_native_login_biometry_retries_error_analytic: {
            bind: 'login_biometry_retries_error-send-analytic',
            analytics: ANALYTICS_LOGIN.pageViewErrorLoginBiometryRetry
          },
          global_native_login_biometry_authenticator_deleted_error_analytic: {
            bind: 'login_biometry_authenticator_deleted_error-send-analytic',
            analytics: ANALYTICS_LOGIN.linkErrorLoginBiometryNotConfigured
          },
          global_native_login_unavailable_fido_service_error_analytic: {
            bind: 'login_unavailable_fido_service_error-send-analytic',
            analytics: ANALYTICS_LOGIN.linkErrorLoginRandom
          },
          global_native_login_unavailable_fido_service_error_page_view_analytic: {
            bind: 'login_unavailable_fido_service_error-page-view-send-analytic',
            analytics: ANALYTICS_LOGIN.pageViewErrorLoginRandom
          },
          global_native_login_blocked_user_needs_digital_activation_error_analytic: {
            bind: 'login_blocked_user_needs_digital_activation_error-send-analytic',
            analytics: ANALYTICS_LOGIN.linkErrorNeedsRegister
          },
          global_native_login_blocked_user_needs_digital_activation_error_page_view_analytic: {
            bind: 'login_blocked_user_needs_digital_activation_error-page-view-send-analytic',
            analytics: ANALYTICS_LOGIN.pageViewErrorNeedsRegister
          },
          global_native_login_biometry_friendly_fraud_error_analytic: {
            bind: 'login_biometry_friendly_fraud_error-send-analytic',
            analytics: ANALYTICS_LOGIN.linkErrorConfigurationChanged
          },
          global_native_login_blocked_user_unlock_button_pressed_analytic: {
            bind: 'login_blocked_user_unlock_button_pressed-send-analytic',
            analytics: ANALYTICS_LOGIN.clickErrorLoginUnblockedPasswordPressed
          },
          global_native_login_blocked_user_register_button_pressed_analytic: {
            bind: 'login_blocked_user_register_button_pressed-send-analytic',
            analytics: ANALYTICS_LOGIN.clickErrorLoginInitRegisterPressed
          },
          global_analytics_navigation_to_dashboard: {
            bind: 'bbva-analyticmanager-mx-navigation-to-dashboard'
          },
          ...NATIVE_ANALYTICS_OUT_CHANNELS
        }
      }
    }
  };
};

const discreetModeController = (CONFIG) => {
  const discreetModePages = utils.discreetModePages();
  return {
    zone: 'app__main',
    type: 'CC',
    tag: 'bbva-controller-discreet-mode',
    familyPath: '@glomo-web-components/bbva-controller-discreet-mode',
    render: 'litElement',
    properties: {
      isNativeiOS: !!CONFIG.nativeIos,
      discreetModePages: discreetModePages,
      useBrowserStorage: !CONFIG.native,
      cellsConnections: {
        in: {
          __bridge_page_dashboard: {
            bind: 'windowVisible'
          },
          discreet_mode_init_page: {
            bind: 'init'
          },
          discreet_mode_select_option: {
            bind: 'selectOption'
          },
          discreet_mode_confirm_option: {
            bind: 'confirmSelection'
          },
          discreet_mode_link_option_clicked: {
            bind: 'handleLinkClick'
          },
          discreet_mode_return_from_settings: {
            bind: 'checkAfterSettings'
          },
          __bridge_app: {
            bind: 'checkMonitoredPage'
          },
          global_discreet_mode_open_discover_modal: {
            bind: 'openDiscoverModal'
          },
          app_info_structure_home_core_discreet_mode_status: {
            bind: 'selectOptionFastMode'
          },
          app_info_structure_home_core_get_status_discreet_mode: {
            bind: 'initExternalPageData'
          },
          global_analytics_get_status_discreet_mode: {
            bind: 'initExternalPageData'
          },
          global_feature_flag_collection_updated: {
            bind: 'checkEnableDiscreetMode'
          }
        },
        out: {
          discreet_mode_data: {
            bind: 'discreet-mode-data'
          },
          global_discreet_mode_activate: {
            bind: 'discreet-mode-start-monitoring'
          },
          global_discreet_mode_deactivate: {
            bind: 'discreet-mode-stop-monitoring'
          },
          global_discreet_mode_mask_amount_values: {
            bind: 'discreet-mode-mask-amount-values'
          },
          global_discreet_mode_selected_option: {
            bind: 'global-discreet-mode-selected-option'
          },
          global_discreet_mode_request_permission_state: {
            bind: 'global-discreet-mode-request-permission-state'
          },
          global_discreet_mode_init_external_page_data: {
            bind: 'global-discreet-mode-init-external-page-data'
          },
          global_discreet_mode_face_detected: {
            bind: 'discreet-mode-face-detected'
          },
          global_discreet_mode_first_modal_shown: {
            bind: 'global-discreet-mode-first-modal-shown'
          }
        }
      }
    }
  };
};

const discreetModeConnector = () => {
  return {
    zone: 'app__main',
    type: 'CC',
    tag: 'bbva-nativeconnector-discreet-mode',
    familyPath: '@glomo-web-components/bbva-nativeconnector-discreet-mode',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_discreet_mode_activate: {
            bind: 'startMonitoring'
          },
          global_discreet_mode_deactivate: {
            bind: 'stopMonitoring'
          }
        },
        out: {
          global_discreet_mode_ofuscate_error: {
            bind: 'startmonitoring-error'
          }
        }
      }
    }
  };
};

const landingPageManager = (CONFIG) => ({
  zone: 'app__main',
  familyPath: 'glomo-landing-page-manager',
  tag: 'glomo-landing-page-manager-mx',
  type: 'CC',
  properties: {
    initialPages: {
      whatsNew: {
        validateMethod: '_whatsNewPageReady'
      },
      stEnrollment: {
        validateMethod: '_stEnrollmentPageReady'
      },
      facialRecognition: {
        validateMethod: '_facialRecognitionPageReady'
      },
      geolocation: {
        validateMethod: '_geolocationPageReady'
      },
      magicLog: {
        validateMethod: '_magicLogPageReady'
      },
      fido: {
        validateMethod: '_fidoPageReady'
      },
      inApp: {
        validateMethod: '_inAppCRMPageReady'
      }
    },
    appVersion: CONFIG.appVersion,
    statusBiometrics: [
      { id: 'NOT_ENROLLED', code: '000' },
      { id: 'ENROLLED', code: '002' },
      { id: 'CANCELLED', code: '003' },
      { id: 'BLOCKED_BY_CUSTOMER', code: '004' },
      { id: 'PERMANENT_BLOCKAGE', code: '006' }
    ],
    keyBiometricFlag: 'glomo.login.sLB',
    availablePagesInStandIn: {
      geolocation: {
        validateMethod: '_geolocationPageReady'
      },
      limitedOperativesInfo: {
        validateMethod: '_limitedOperativesInfoPageReady'
      }
    },
    cellsConnections: {
      in: {
        global_feature_stand_in_status: {
          bind: 'standIn'
        },
        global_feature_flag_collection_updated: {
          bind: 'getFeatureFlags'
        },
        legacy_serial_number: {
          bind: 'lgSerialNumber'
        },
        global_login_success: {
          bind: 'setDetailCustomer'
        },
        global_app_ready_with_login: {
          bind: 'init'
        },
        global_fido_enroll_biometry_cancelled: {
          bind: 'goToNextFlow'
        },
        global_landing_page_manager_next_flow: {
          bind: 'goToNextFlow'
        },
        global_financial_overview_details: {
          bind: 'setFinancial'
        },
        global_get_data_succes_inapp_crm: {
          bind: 'getInAppDataResponse'
        },
        global_get_data_error_inapp_crm: {
          bind: 'getInAppDataResponseError'
        },
        dashboard_list_biometrics_success: {
          bind: 'getBiometricsDataResponse'
        },
        dashboard_list_biometrics_error: {
          bind: 'getBiometricsDataResponseError'
        },
        facial_recognition_biometrics_code_success: {
          bind: 'sendCodeListBiometric'
        },
        global_feature_flag_inapp_crm: {
          bind: 'inAppCrm'
        },
        device_accesses_device_id: {
          bind: 'deviceId'
        },
        native_user_id: {
          bind: 'userId'
        },
        global_ether_token_create_client_success: {
          bind: 'createClientsSucces'
        },
        global_ether_token_create_client_error: {
          bind: 'createClientsError'
        },
        global_ether_token_get_tokens_ids_success: {
          bind: 'getAllEtherTokenIdsSuccess'
        },
        global_ether_token_get_tokens_ids_error: {
          bind: 'getAllEtherTokenIdsError'
        }
      },
      out: {
        dashboard_get_list_biometrics: {
          bind: 'get-list-biometrics'
        },
        facial_recognition_biometrics_code: {
          bind: 'send-code-list-biometrics'
        },
        facial_recognition_biometrics_error: {
          bind: 'alert-error-list-biometrics'
        },
        global_set_in_storage: {
          bind: 'set-local-storage'
        },
        global_inapp_request: {
          bind: 'request-inapp-data'
        },
        global_native_app_start_ready: {
          bind: 'initial-navigation',
          'forward-to-native': true
        },
        navigation_to_next_flow: {
          bind: 'next-navigation',
          link: {
            page: {
              bind: 'page'
            },
            cleanUntil: 'loading'
          }
        },
        global_ether_token_create_client: {
          bind: 'create-client-first'
        },
        global_ether_token_get_tokens_ids: {
          bind: 'st-enrollment-mx-get-tokens-ids'
        },
        global_send_tokens_enrollment: {
          bind: 'st-token-enrollment'
        },
        global_landing_page_manager_notify_stand_in: {
          bind: 'notify-navigation-limitedOperativesInfo'
        },
        global_landing_page_manager_facial_recognition_biometric_status: {
          bind: 'biometric-status-local-storage'
        },
        geo_close_control_veil: {
          bind: 'notify-navigation-dashboard'
        }
      }
    }
  }
});

const dataProviderCampaigns = (CONFIG) => ({
  zone: 'app__main',
  tag: 'bbva-dataprovider-campaigns',
  type: 'CC',
  render: 'litElement',
  familyPath: '@glomo-web-components/bbva-dataprovider-campaigns',
  properties: {
    host: CONFIG.globalServices.host,
    native: !!CONFIG.native,
    requiredToken: 'tsec',
    cellsConnections: {
      in: {
        global_inapp_request: {
          bind: 'getCrmInformativeCampaigns'
        }
      },
      out: {
        global_get_data_succes_inapp_crm: {
          bind: 'get-crm-informative-campaigns-v2-success'
        },
        global_get_data_error_inapp_crm: {
          bind: 'get-crm-informative-campaigns-v2-error'
        }
      }
    }
  }
});

const loaderAmbient = () => ({
  zone: 'app__main',
  type: 'CC',
  tag: 'bbva-technicalcore-ambients-loader',
  render: 'litElement',
  familyPath: '@glomo-web-components/bbva-technicalcore-ambients-loader',
  properties: {
    dictonary: {
      notificationsList: [ {
        name: 'bbva-button-row',
        path: '@bbva-web-components',
        ambient: 'bbvaButtonRowAmbient',
        fullName: '@bbva-spherica-components/bbva-button-row'
      } ],
      notificationsListSearchResult: [ {
        name: 'bbva-form-filter',
        path: '@bbva-web-components',
        ambient: 'bbvaFormFilterAmbient',
        fullName: '@bbva-web-components/bbva-form-filter'
      } ],
      equityAssistance: [ {
        name: 'bbva-button-row',
        path: '@bbva-web-components',
        ambient: 'bbvaButtonRowAmbient',
        fullName: '@bbva-spherica-components/bbva-button-row'
      } ]
    },
    cellsConnections: {
      in: {
        __bridge_app: {
          bind: 'getAmbientsForPage'
        }
      }
    }
  }
});

const widgetErrorHandler = () => (
  {
    zone: 'app__main',
    type: 'CC',
    render: 'litElement',
    tag: 'bbva-manager-widgets-error-handler',
    familyPath: '@glomo-web-components/bbva-manager-widgets-error-handler',
    properties: {
      otpId: 'widgetErrorHandler',
      cellsConnections: {
        in: {
          global_widget_api_error: {
            bind: 'handleWidgetError'
          },
          widget_signature_handle_required: {
            bind: 'handleWidgetSignature'
          },
          widget_signature_handle_required_first_step: {
            bind: 'handleWidgetSignature'
          },
          widget_signature_handle_invalid: {
            bind: 'handleWidgetSignatureInvalid'
          },
          widget_signature_close_modal_success: {
            bind: 'widgetSignModalClose'
          },
          widget_signature_close_modal_error: {
            bind: 'widgetSignModalClose'
          }
        },
        out: {}
      }
    }
  }
);

const rateAppPlugin = {
  zone: 'app__main',
  type: 'CC',
  tag: 'cells-nativeconnector-mobile-rate-app',
  properties: {
    cellsConnections: {
      in: {
        global_feedback_show_rate_the_app_plugin: {
          bind: 'rateApp'
        }
      },
      out: {
        global_feedback_show_rate_the_app: {
          bind: 'show-in-app-review-error',
          'forward-to-native': true
        }
      }
    }
  }
};

const cellsNativeconnectorAppsflyer = (CONFIG) => {
  if (CONFIG.nativeShell) {
    return {
      zone: 'app__main',
      tag: 'cells-nativeconnector-appsflyer',
      type: 'CC',
      properties: {
        cellsConnections: {
          in: {
            global_action_generate_app_invite_one_link: {
              bind: 'setAppInviteOneLink'
            },
            global_native_login_success: {
              bind: 'setCustomer'
            },
            global_appsflyer_track_event: {
              bind: 'trackEvent'
            }
          },
          out: {
            global_action_generate_app_invite_one_link_success: {
              bind: 'set-app-invite-one-link-success'
            },
            global_action_generate_app_invite_one_link_error: {
              bind: 'set-app-invite-one-link-success'
            }
          }
        }
      }
    };
  }
};

const mobileActionLauncher = () => ({
  zone: 'app__main',
  tag: 'cells-mobile-action-launcher',
  type: 'CC',
  properties: {
    cellsConnections: {
      in: {
        global_action_launcher_dialer: {
          bind: 'openDialer'
        },
        global_action_launcher_maps: {
          bind: 'openMaps'
        },
        global_action_launcher_share_image: {
          bind: 'shareImage'
        },
        global_action_launcher_market: {
          bind: 'openMarket'
        },
        global_action_launcher_uri: {
          bind: 'openURI'
        },
        global_action_launcher_video_uri: {
          bind: 'openURI'
        },
        global_action_launcher_share_file: {
          bind: 'shareFile'
        }
      },
      out: {
        global_open_image_error: {
          bind: 'error-share-image'
        },
        close_control_veil: {
          bind: 'success-open-market'
        },
        global_open_dialer_error: {
          bind: 'error-open-dialer'
        },
        global_navigation_description_link_success_in_app: {
          bind: 'success-open-uri'
        },
        global_action_launcher_share_file_error: {
          bind: 'error-share-file'
        }
      }
    }
  }
});

const glomoMobileShowInfo = {
  zone: 'app__main',
  tag: 'cells-mobile-show-info',
  type: 'CC',
  properties: {
    cellsConnections: {
      in: {
        global_message_snackbar: {
          bind: 'snackBar'
        },
        global_message_toast: {
          bind: 'toast'
        },
        global_message_notification: {
          bind: 'notification'
        }
      }
    }
  }
};

const deviceInfoPlugin = {
  zone: 'app__main',
  type: 'CC',
  tag: 'cells-mobile-deviceinfo',
  properties: {
    cellsConnections: {
      in: {
        global_set_app_settings: {
          bind: 'getApplicationVersion'
        },
        global_device_info_get_platform: {
          bind: 'getPlatform'
        },
        global_device_info_get_model: {
          bind: 'getModel'
        },
        global_device_info_get_nfc_status: {
          bind: 'getNFCStatus'
        },
        global_device_info_get_manufacturer: {
          bind: 'getManufacturer'
        },
        global_device_info_get_provider_name: {
          bind: 'getProviderName'
        },
        global_device_info_get_screen_dimensions: {
          bind: 'getScreenDimensions'
        },
        global_device_info_get_network_type: {
          bind: 'getNetworkType'
        },
        global_device_info_get_storage: {
          bind: 'getStorage'
        },
        global_device_info_get_secure: {
          bind: 'isDeviceSecure'
        }
      },
      out: {
        global_set_app_version: {
          bind: 'get-app-version-success'
        },
        global_device_get_device_platform_success: {
          bind: 'get-platform-success'
        },
        global_device_get_device_model_success: {
          bind: 'get-model-success'
        },
        global_device_get_device_nfc_status_success: {
          bind: 'get-nfc-status-success'
        },
        global_device_get_manufacturer_success: {
          bind: 'get-manufacturer-success'
        },
        global_device_get_provider_name_success: {
          bind: 'get-provider-name-success'
        },
        global_device_get_screen_dimensions_success: {
          bind: 'get-app-screen-dimensions-success'
        },
        global_device_get_network_type_success: {
          bind: 'get-network-type-success'
        },
        global_device_get_device_storage_success: {
          bind: 'get-storage-success'
        },
        global_device_get_secure_success: {
          bind: 'get-device-secure-success'
        },
        global_device_info_error: {
          bind: 'error'
        }
      }
    }
  }
};

const controllerHomeCore = (CONFIG) => {
  const result = {
    zone: 'app__main',
    tag: 'bbva-controller-home-core',
    type: 'CC',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-controller-home-core',
    properties: {
      host: CONFIG.globalServices.host,
      langDefault: utils.getLanguage(),
      userSettingsApiVersion: CONFIG.globalServices.versions.userSettingsV2,
      smartCollectionsApiVersion: CONFIG.globalServices.versions.smartSpace,
      native: !!CONFIG.nativeShell,
      requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
      callUserSettingWithMultipleId: true,
      applicationId: CONFIG.mpos.applicationId,
      country: 'mx',
      initAfterFinancialData: true,
      initAfterVerifyAlternativeDashboard: true,
      futuraFlagEdition: true,
      futuraCollectionsFeatureFlagAndStandin: false,
      isActiveSaveEmptyLocal: true,
      patchSmartItemsLegacy: true,
      isActiveSaveEmptyLocal: true,
      cellsConnections: {
        in: {
          global_dashboard_futura_mode_always_on: {
            bind: 'initializationManager'
          },
          global_financial_overview_details: {
            bind: 'financialData'
          },
          global_set_app_settings: {
            bind: 'appSettings'
          },
          glomo_dashboard_futura_configuration_home_default: {
            bind: 'futuraCacheCollectionsDefault'
          },
          update_last_collections: {
            bind: 'makeActionsFinal'
          },
          app_info_structure_home_core_colletion_get_items: {
            bind: 'getSmartItems'
          },
          app_info_structure_home_core_save_user_setting: {
            bind: 'saveUserSetting'
          },
          app_info_structure_home_core_item_close: {
            bind: 'burnItemFromItemClose'
          },
          burn_item_from_operative_smart_servicing: {
            bind: 'burnItemFromOperative'
          },
          hide_old_dashboard: {
            bind: 'futuraDashboardActivated'
          },
          futura_dashboard_collection_home_futura_feature_flag: {
            bind: 'futuraFlagFullFuturaHome'
          },
          futura_dashboard_collection_home_youngsters_feature_flag: {
            bind: 'futuraFlagHomeYoungsters'
          },
          futura_dashboard_collection_home_monoproduct_feature_flag: {
            bind: 'futuraFlagHomeMonoProduct'
          },
          dashboard_update_monoproduct_user: {
            bind: 'monoProductDashboardActive'
          },
          futura_dashboard_collection_maincard_edition_feature_flag: {
            bind: 'futuraFlagMaincardEdition'
          },
          futura_dashboard_collection_frequent_actions_edition_feature_flag: {
            bind: 'futuraFlagFrequentActionsEdition'
          },
          flag_minior_account: {
            bind: 'youngsterDashboardActive'
          },
          global_dashboard_not_alternative_user_config: {
            bind: 'notConfigDashboardActive'
          },
          glomo_dashboard_tdc_mono_product_user: {
            bind: 'monoProductDashboardActive'
          },
          app_info_structure_home_core_collection_close: {
            bind: 'burnCollection'
          }
        },
        out: {
          global_get_from_storage: {
            bind: 'get-from-local-storage'
          },
          global_set_in_storage: {
            bind: 'set-from-local-storage'
          },
          global_remove_from_storage: {
            bind: 'remove-from-local-storage'
          },
          global_controller_home_core_send_to_home_futura_cache_fetch: {
            bind: 'send-to-home-core-from-futura-manager'
          },
          global_collections_analytics: {
            bind: 'send-collections-to-analytics'
          },
          update_last_collections: {
            bind: 'event-last-update'
          },
          send_origin_data_to_home_core: {
            bind: 'send-origin-data'
          },
          global_controller_home_core_send_to_home_core_user_setting: {
            bind: 'send-user-setting-to-home-core'
          },
          global_controller_home_core_send_to_home_core_status_user_setting: {
            bind: 'send-user-settings-status-to-home-core'
          },
          app_info_structure_home_core_optimization_node: {
            bind: 'app-info-structure-home-core-state-optimization-request'
          },
          global_controller_home_core_send_to_home_core_futura_app_setting: {
            bind: 'send-app-setting-to-home-core'
          },
          global_controller_home_core_send_to_home_core_futura_smart_items: {
            bind: 'send-smart-items-to-collection'
          },
          global_controller_home_core_send_futura_home_active_to_dashboard: {
            bind: 'old-home-disabled'
          },
          app_info_structure_home_core_show_loader: {
            bind: 'open-control-veil'
          },
          app_info_structure_home_core_hide_loader: {
            bind: 'close-control-veil'
          },
          futura_dashboard_resolve_customer_id: {
            bind: 'resolve-global-customer-id'
          }
        }
      }
    }
  };

  return result;
};

const technicalCoreAnalyticsOptimization = () => ({
  zone: 'app__main',
  tag: 'bbva-technicalcore-analytics-optimization',
  type: 'CC',
  render: 'litElement',
  familyPath: '@glomo-web-components/bbva-technicalcore-analytics-optimization',
  properties: {
    initializeNodeAndSend: true,
    sendContractIDsToEncrypt: true,
    dataLayerVersion: '4.3',
    cellsConnections: {
      in: {
        global_state_collection_change: {
          bind: 'setStatusChange'
        },
        global_storage_get_optimization_node_success: {
          bind: 'optimizationNodeLocalStorage'
        },
        app_info_structure_home_core_optimization_node: {
          bind: 'getOptimizationNode'
        },
        app_info_structure_home_core_items_load: {
          bind: 'setStatusItemsLoad'
        },
        app_info_structure_home_core_element_scroll: {
          bind: 'setStatusChange'
        },
        app_info_structure_home_core_item_click: {
          bind: 'setStatusChange'
        },
        app_info_structure_home_core_item_close: {
          bind: 'setStatusChange'
        },
        app_info_structure_home_core_collection_click: {
          bind: 'setStatusChange'
        },
        app_info_structure_home_core_collection_edit: {
          bind: 'setCollectionStatus'
        },
        app_info_structure_home_core_collection_saved: {
          bind: 'setStatusChange'
        },
        global_collections_analytics: {
          bind: 'setFuturaHomeAnalytics'
        },
        send_origin_data_to_home_core: {
          bind: 'setOriginData'
        },
        global_collection_visible: {
          bind: 'setCollectionStatus'
        },
        futura_cache_data_to_analytics: {
          bind: 'validateAndSetFuturaHomeAnalytics'
        },
        app_pageview_outstanding: {
          bind: 'setNodeWithoutCollectionsLoad'
        },
        global_analytics_navigation_to_dashboard: {
          bind: 'setNodeWithoutCollectionsLoad'
        },
        hide_futura_dashboard: {
          bind: 'hideFuturaDashboard'
        },
        app_info_structure_home_core_init_collections_load: {
          bind: 'sendPageViewData'
        },
        global_technicalcore_security_encryptor_encrypt_fetch: {
          bind: 'setContractsEncrypted'
        },
        global_financial_overview_details: {
          bind: 'financialData'
        },
        futura_dashboard_collection_contracts_encrypt_feature_flag: {
          bind: 'privateEncrypt'
        },
        app_info_structure_home_core_collection_close: {
          bind: 'setCollectionStatus'
        }
      },
      out: {
        global_get_from_storage: {
          bind: 'analytics-optimization-node-get-from-local-storage'
        },
        global_set_in_storage: {
          bind: 'analytics-optimization-node-set-in-local-storage'
        },
        global_remove_from_storage: {
          bind: 'analytics-optimization-node-remove-from-local-storage'
        },
        global_analytics_optimization_node_response: {
          bind: 'bbva-technicalcore-analytics-optimization-node'
        },
        global_analytics_optimization_contracts_to_encrypt: {
          bind: 'bbva-technicalcore-analytics-optimization-contracts-to-encrypt'
        },
        futura_analytics_app_page_view: {
          bind: 'analytics-page-view',
          analytics: analyticsFuturaHome.pageViewOutstanding
        }
      }
    }
  }
});

const technicalCoreSecurityEncryptor = (CONFIG) => ({
  zone: 'app__main',
  tag: 'bbva-technicalcore-security-encryptor',
  type: 'CC',
  render: 'litElement',
  familyPath: '@glomo-web-components/bbva-technicalcore-security-encryptor',
  properties: {
    host: CONFIG.globalServices.host,
    localBusinessSecurityServicesVersion: CONFIG.globalServices.versions.localBusinessSecurityServices,
    native: !!CONFIG.nativeShell,
    requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
    environment: CONFIG.environment,
    isFormatedValue: true,
    cellsConnections: {
      in: {
        global_analytics_optimization_contracts_to_encrypt: {
          bind: 'manageEncryptParameters'
        },
        global_financial_overview_details: {
          bind: 'financialData'
        },
        global_storage_get_contractIdEncryptedStored_success: {
          bind: 'listContractIdEncryptedLocalStorageSuccess'
        },
        global_storage_get_contractIdEncryptedStored_error: {
          bind: 'listContractIdEncryptedLocalStorageError'
        },
        global_set_app_settings: {
          bind: 'appSettings'
        },
        __bridge_page_dashboard: {
          bind: 'initializeEncryptor'
        }
      },
      out: {
        global_technicalcore_security_encryptor_encrypt_fetch: {
          bind: 'bbva-technicalcore-security-encryptor-encrypt-fetch'
        },
        global_get_from_storage: {
          bind: 'get-from-local-storage'
        },
        global_set_in_storage: {
          bind: 'set-contracts-encrypted-in-local-storage'
        }
      }
    }
  }
});

const featureValidatorFutura = (CONFIG) => {
  const {
    globalServices: {
      versions: {
        privateBankingPortfolios: versionPrivateBankingPortfolioBalancesDm
      }
    }
  } = CONFIG;
  return {
    zone: 'app__main',
    tag: 'bbva-technicalcore-operations-workshop-mx',
    type: 'CC',
    render: 'litElement',
    familyPath: '@glomo-web-components/bbva-technicalcore-operations-workshop-mx',
    properties: {
      localCurrency: utils.getLocalCurrency(),
      statusDefault: 'N/A',
      subProductTypeDefault: 'N/A',
      productIdDefault: 'N/A',
      baseConfigurationDataProperties: configDataProperties,
      configInvestmentProduct: {
        ...configInvestmentProduct,
        versionPrivateBankingPortfolioBalancesDm
      },
      cellsConnections: {
        in: {
          futura_collections_home_always_on_feature_flag: {
            bind: 'standInStatus'
          },
          global_controller_home_core_send_to_home_core_futura_app_setting: {
            bind: 'filterOperationsByAppSettings'
          },
          hide_old_dashboard: {
            bind: 'isFuturaFlagStatus'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewData'
          }
        },
        out: {
          global_technicalcore_operations_workshop_mx_response_feature_validator: {
            bind: 'bbva-technicalcore-operations-workshop-mx-response-function-validate'
          },
          global_technicalcore_operations_workshop_mx_new_financial_overview: {
            bind: 'bbva-technicalcore-operations-workshop-mx-overwrite-new-financial-overview'
          },
          global_technicalcore_operations_workshop_mx_config_data_properties: {
            bind: 'bbva-technicalcore-operations-workshop-mx-config-data-properties'
          },
          global_technicalcore_operations_workshop_mx_config_investment_properties: {
            bind: 'bbva-technicalcore-operations-workshop-mx-investment-data-properties-configure'
          },
          futura_dashboard_collection_frequent_actions_feature_flag: {
            bind: 'bbva-technicalcore-operations-workshop-mx-empty-collection-closed'
          }
        }
      }
    }
  };
};

const filterFutura = () => ({
  zone: 'app__main',
  tag: 'bbva-technicalcore-operations-filter',
  type: 'CC',
  render: 'litElement',
  familyPath: '@glomo-web-components/bbva-technicalcore-operations-filter',
  properties: {
    diccionaryFeatureFlag: dictionaryFilterFutura,
    linkFlags,
    cellsConnections: {
      in: {
        global_technicalcore_operations_workshop_mx_response_feature_validator: {
          bind: 'responseFeatureValidator'
        },
        global_controller_home_core_send_to_home_futura_cache_fetch: {
          bind: 'responseDelfos'
        },
        global_feature_flag_collection_updated: {
          bind: 'featureFlagCollection'
        },
        global_controller_home_core_send_to_home_core_futura_app_setting: {
          bind: 'extractFilterAppSettingCollections'
        },
        global_controller_home_core_send_to_home_core_futura_smart_items: {
          bind: 'smartItemsData'
        },
        global_controller_home_core_send_to_home_core_user_setting: {
          bind: 'userSettingsData'
        },
        global_technicalcore_operations_workshop_mx_config_investment_properties: {
          bind: 'configInvestmentProduct'
        }
      },
      out: {
        global_technicalcore_operations_filter_send_delfos_filter_response: {
          bind: 'bbva-technicalcore-operations-filter-send-delfos-filter-response'
        },
        global_technicalcore_operations_filter_send_user_settings_filter_response: {
          bind: 'bbva-technicalcore-operations-filter-user-settings-filter-response'
        },
        global_technicalcore_operations_filter_send_smart_settings_filter_response: {
          bind: 'bbva-technicalcore-operations-filter-smart-settings-filter-response'
        },
        global_technicalcore_operations_filter_mx_config_investment_properties: {
          bind: 'bbva-technicalcore-operations-filter-data-properties-configure'
        }
      }
    }
  }
});

const openPayPlugin = (CONFIG) => {
  return {
    zone: 'app__main',
    type: 'CC',
    familyPath: '@glomo-web-components/bbva-nativeconnector-openpay',
    tag: 'bbva-nativeconnector-openpay',
    render: 'litElement',
    properties: {
      bundleIdentifier: CONFIG.paymentsMpos?.bundleIdentifier ?? '',
      isNative: CONFIG.native || false,
      isNativeiOS: !!CONFIG.nativeIos,
      pluginName: 'OpenPay',
      cellsConnections: {
        in: {
          global_nativeconnector_openpay_init: {
            bind: 'init'
          },
          global_nativeconnector_openpay_check_top_capabilities: {
            bind: 'checkTopCapabilities'
          },
          global_nativeconnector_openpay_top_init: {
            bind: 'initTop'
          },
          global_nativeconnector_openpay_show_terms_and_conditions: {
            bind: 'showTermsAndConditions'
          },
          global_nativeconnector_openpay_show_merchant_education: {
            bind: 'showDiscovery'
          },
          global_nativeconnector_openpay_create_payment_link: {
            bind: 'createPaymentLink'
          },
          global_nativeconnector_openpay_send_voucher: {
            bind: 'sendVoucher'
          },
          global_nativeconnector_openpay_update_link_expiration_date: {
            bind: 'updateLinkExpirationDate'
          },
          global_nativeconnector_openpay_cancel_payment_link: {
            bind: 'cancelPaymentLink'
          },
          global_nativeconnector_openpay_get_links_list: {
            bind: 'paymentLinkListing'
          },
          global_nativeconnector_openpay_get_transactions_list: {
            bind: 'transactionList'
          },
          global_nativeconnector_openpay_scan_devices: {
            bind: 'scanNewDevices'
          },
          global_nativeconnector_openpay_connect_bluetooth: {
            bind: 'connectToBluetoothDevice'
          },
          global_nativeconnector_openpay_transaction_by_id: {
            bind: 'transactionById'
          },
          global_nativeconnector_openpay_execute_charge: {
            bind: 'executeCharge'
          },
          global_nativeconnector_openpay_execute_top_charge: {
            bind: 'executeTopCharge'
          },
          global_nativeconnector_openpay_transaction_refund: {
            bind: 'applyTransactionRefund'
          },
          global_nativeconnector_openpay_transaction_top_refund: {
            bind: 'applyTransactionTopRefund'
          },
          global_nativeconnector_openpay_link_refund: {
            bind: 'applyLinkRefund'
          }
        },
        out: {
          global_nativeconnector_openpay_init_success: {
            bind: 'openpay-sdk-init-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_init_error: {
            bind: 'openpay-sdk-init-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_check_top_capabilities_success: {
            bind: 'openpay-sdk-check-top-capabilities-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_check_top_capabilities_error: {
            bind: 'openpay-sdk-check-top-capabilities-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_top_init_success: {
            bind: 'openpay-sdk-top-init-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_top_init_error: {
            bind: 'openpay-sdk-top-init-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_show_terms_and_conditions_success: {
            bind: 'openpay-show-terms-and-conditions-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_show_terms_and_conditions_error: {
            bind: 'openpay-show-terms-and-conditions-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_show_merchant_education_success: {
            bind: 'openpay-show-discovery-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_show_merchant_education_error: {
            bind: 'openpay-show-discovery-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_create_payment_link_success: {
            bind: 'openpay-create-payment-link-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_create_payment_link_error: {
            bind: 'openpay-create-payment-link-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_send_voucher_success: {
            bind: 'openpay-send-voucher-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_send_voucher_error: {
            bind: 'openpay-send-voucher-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_update_link_expiration_date_success: {
            bind: 'openpay-update-link-expiration-date-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_update_link_expiration_date_error: {
            bind: 'openpay-update-link-expiration-date-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_cancel_payment_link_success: {
            bind: 'openpay-cancel-payment-link-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_cancel_payment_link_error: {
            bind: 'openpay-cancel-payment-link-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_get_links_list_success: {
            bind: 'openpay-payment-link-listing-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_get_links_list_error: {
            bind: 'openpay-payment-link-listing-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_get_transactions_list_success: {
            bind: 'openpay-transaction-list-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_get_transactions_list_error: {
            bind: 'openpay-transaction-list-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_scan_devices_success: {
            bind: 'openpay-scan-new-devices-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_scan_devices_error: {
            bind: 'openpay-scan-new-devices-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_connect_bluetooth_success: {
            bind: 'openpay-connect-to-bluetooth-device-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_connect_bluetooth_error: {
            bind: 'openpay-connect-to-bluetooth-device-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_transaction_by_id_success: {
            bind: 'openpay-transaction-by-id-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_transaction_by_id_error: {
            bind: 'openpay-transaction-by-id-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_execute_charge_success: {
            bind: 'openpay-execute-charge-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_execute_charge_error: {
            bind: 'openpay-execute-charge-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_execute_top_charge_success: {
            bind: 'openpay-execute-top-charge-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_execute_top_charge_error: {
            bind: 'openpay-execute-top-charge-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_transaction_refund_success: {
            bind: 'openpay-apply-transaction-refund-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_transaction_refund_error: {
            bind: 'openpay-apply-transaction-refund-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_transaction_top_refund_success: {
            bind: 'openpay-apply-transaction-top-refund-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_transaction_top_refund_error: {
            bind: 'openpay-apply-transaction-top-refund-error',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_link_refund_success: {
            bind: 'openpay-apply-link-refund-success',
            'forward-to-native': true
          },
          global_nativeconnector_openpay_link_refund_error: {
            bind: 'openpay-apply-link-refund-error',
            'forward-to-native': true
          }
        }
      }
    }
  };
};
const notificationsCenterComponent = (CONFIG) => ({
  zone: 'app__main',
  type: 'DM',
  tag: 'bbva-manager-notifications-center',
  familyPath: '@glomo-web-components/bbva-manager-message-center',
  render: 'litElement',
  properties: {
    host: CONFIG.globalServices.host,
    userType: 'CUSTOMER',
    publicSettingsHost: CONFIG.globalServices.host,
    requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
    applicationId: CONFIG.globalServices.consumerId,
    native: CONFIG.native || false,
    cellsConnections: {
      in: {
        global_login_success: {
          bind: 'initExecute'
        },
        global_feature_flag_collection_updated: {
          bind: 'featureFlags'
        }
      },
      out: {
        notificationscenter_totals_number_unread_informative_warning: {
          bind: 'notifications-center-unread-alert-totals'
        },
        global_totals_number_notifications: {
          bind: 'notifications-center-totals-number-notifications'
        }
      }
    }
  }
});

const controllerRetargeting = (CONFIG) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: { campaignsV4: campaignsApiVersion } },
    native = false,
    retargetingOffers
  } = CONFIG;
  const controllerComponent = {
    zone: 'app__main',
    type: 'CC',
    tag: 'bbva-technicalcore-retargeting-controller',
    familyPath: '@glomo-web-components/bbva-technicalcore-retargeting-controller',
    render: 'litElement',
    properties: {
      host,
      campaignsApiVersion,
      native,
      requiredToken,
      configOffers: retargetingOffers,
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'updateCurrentOfferId'
          },
          '__bridge_evt_template-transition-end': {
            bind: 'eventTemplateTransitionEnd'
          },
          '__bridge_evt_nav-request': {
            bind: 'eventNavRequest'
          },
          global_retargeting_initialize_contract_existing_modal: {
            bind: 'initContractExistingModal'
          },
          global_retargeting_initialize_deposit_hirings: {
            bind: 'initDepositsHirings'
          },
          global_retargeting_initialize_deposits_purchase: {
            bind: 'initDepositPurchase'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagCollection'
          },
          global_login_success_indicators: {
            bind: 'setCustomerData'
          },
          global_offers_retrieved: {
            bind: 'dataOffers'
          },
          bbva_controller_oc_car_loan_init_retargeting_non_pre_approved: {
            bind: 'currentOffer'
          },
          contract_product_section_offers_parsed: {
            bind: 'dataOffers'
          },
          global_retargeting_initialize: {
            bind: 'init'
          },
          global_call_me_back_navigation: {
            bind: 'blockRetargetingByProactiveAssistance'
          },
          global_retargeting_send_update: {
            bind: 'sendPatchInformation'
          },
          global_retargeting_information_update: {
            bind: 'sendPatchInformation'
          },
          global_retargeting_send_information_update: {
            bind: 'sendPatchInformation'
          },
          global_retargeting_send_information_update_invest: {
            bind: 'sendPatchInformationInvest'
          },
          global_retargeting_reset_step: {
            bind: 'reset'
          },
          global_retargeting_go_next_step: {
            bind: 'incrementCurrentStep'
          },
          global_retargeting_go_next_step_continue_benefits: {
            bind: 'incrementCurrentStep'
          },
          global_retargeting_benefits_step: {
            bind: 'incrementCurrentStep'
          },
          global_retargeting_go_next_step_continue: {
            bind: 'incrementCurrentStep'
          },
          global_retargeting_go_next_step_summary: {
            bind: 'incrementCurrentStep'
          },
          global_retargeting_go_next_step_depositPurchase: {
            bind: 'incrementCurrentStepDepositPurchase'
          },
          global_retargeting_go_next_step_invest: {
            bind: 'incrementCurrentStepInvest'
          },
          global_retargeting_set_step_offer_properties: {
            bind: 'setOfferProperties'
          },
          global_device_get_device_platform_success: {
            bind: 'setPlatform'
          },
          global_device_get_device_model_success: {
            bind: 'setModel'
          },
          global_device_get_manufacturer_success: {
            bind: 'setManufacturer'
          },
          global_device_get_provider_name_success: {
            bind: 'setProviderName'
          },
          global_device_get_screen_dimensions_success: {
            bind: 'setScreenDimensions'
          },
          global_device_get_network_type_success: {
            bind: 'setNetworkType'
          },
          global_retargeting_get_offer_detail: {
            bind: 'setOfferDetail'
          },
          global_retargeting_get_quotations_simulate: {
            bind: 'setOfferDetailQuotationsSimulate'
          },
          global_retargeting_form_submission: {
            bind: 'setInitConfiguration'
          },
          global_retargeting_form_submission_invest: {
            bind: 'setInitConfigurationInvestmentBbva'
          },
          global_storage_get_loginData_success: {
            bind: 'obtainIdClient'
          },
          global_storage_get_loginData_error: {
            bind: 'obtainIdClient'
          },
          global_retargeting_contracted_product: {
            bind: 'offerFinalized'
          },
          global_retargeting_contracted_product_offer: {
            bind: 'offerFinalized'
          },
          global_retargeting_onboarding_bbva_trader_contract_date: {
            bind: 'setDateContract'
          },
          global_retargeting_onboarding_bbva_trader_contrated_product: {
            bind: 'offerFinalizedOnboardingBbvaTrader'
          },
          global_retargeting_onboarding_bbva_trader_set_init_custom_fields: {
            bind: 'setOnboardingBbvaTraderInitCustomFields'
          },
          global_retargeting_contracted_product_offer_invest: {
            bind: 'offerFinalizedInvest'
          },
          global_retargeting_get_change_amount_deposit_hiring: {
            bind: 'amountDataChanged'
          },
          global_retargeting_set_step_offer_properties_deposits: {
            bind: 'offerPropertiesDeposits'
          },
          global_retargeting_get_instructions_deposit_hiring: {
            bind: 'setInvstInstruction'
          },
          global_retargeting_set_offer_properties_deposits_purchase: {
            bind: 'offerPropDepositsPurchase'
          },
          global_retargeting_get_instructions_deposit_purchase: {
            bind: 'setInvestInstructionPurchase'
          },
          global_retargeting_entities: {
            bind: 'setEntities'
          },
          global_retargeting_amount_data_changed: {
            bind: 'amountDataChanged'
          },
          global_retargeting_sticky_data_changed: {
            bind: 'stickyDataChanged'
          },
          global_retargeting_slider_property_changed: {
            bind: 'sliderPropertyChanged'
          },
          global_retargeting_key_info_changed: {
            bind: 'keyInfoChanged'
          },
          global_retargeting_credit_use: {
            bind: 'creditUse'
          },
          global_retargeting_set_folio: {
            bind: 'setFolio'
          },
          global_retargeting_info_account: {
            bind: 'setInfoAccount'
          },
          global_retargeting_set_data_non_preapproved_consumer_loan: {
            bind: 'setConsumerLoanData'
          },
          global_retargeting_set_loan_properties_loan_relocation: {
            bind: 'setRecolocationLoanProperties'
          },
          global_retargeting_set_offer_properties_loan_relocation: {
            bind: 'setRecolocationOfferProperties'
          },
          global_retargeting_set_investment_properties: {
            bind: 'setInvestmentProperties'
          },
          global_retargeting_go_next_step_loan_recolocation: {
            bind: 'incrementCurrentStepLoanRecolocation'
          },
          global_retargeting_investment_service: {
            bind: 'investmentService'
          },
          global_retargeting_invest_amount: {
            bind: 'investAmount'
          },
          global_retargeting_invest_fund: {
            bind: 'simulationDescripFund'
          },
          global_retargeting_slider_properties: {
            bind: 'sliderDetail'
          },
          global_retargeting_amount_data: {
            bind: 'detailAmount'
          },
          global_retargeting_car_type: {
            bind: 'useCredit'
          },
          global_retargeting_select_amount: {
            bind: 'selectAmountInput'
          },
          global_retargeting_period_month: {
            bind: 'monthPeriod'
          },
          global_retargeting_payment_type: {
            bind: 'cardPaymentType'
          },
          global_retargeting_operation_life_insurance_coverage: {
            bind: 'lifeInsuranceOperationCoverage'
          },
          global_retargeting_operation_life_insurance: {
            bind: 'lifeInsuranceOperation'
          },
          global_retargeting_input_amount_select: {
            bind: 'lifeInsuranceInputAmount'
          },
          global_retargeting_insurance_checked_card: {
            bind: 'lifeInsuranceAditionalCardSelect'
          },
          global_retargeting_insurance_uncheck_checked_card: {
            bind: 'lifeInsuranceAditionalUncheckCardSelect'
          },
          global_retargeting_insurance_frequency_payment: {
            bind: 'lifeInsuranceFrequencyPayment'
          },
          global_retargeting_insurance_selected_type_plan: {
            bind: 'lifeInsurancePaymentTypePlan'
          },
          global_retargeting_insurance_product_selected: {
            bind: 'lifeInsuranceProductSelected'
          },
          global_retargeting_pay_date: {
            bind: 'shippingAddressDescription'
          }
        },
        out: {
          global_device_info_get_platform: {
            bind: 'get-device-info'
          },
          global_device_info_get_manufacturer: {
            bind: 'get-get-manufacturer'
          },
          global_device_info_get_model: {
            bind: 'get-model'
          },
          global_device_info_get_provider_name: {
            bind: 'get-provider-name'
          },
          global_device_info_get_screen_dimensions: {
            bind: 'get-screen-dimensions'
          },
          global_device_info_get_network_type: {
            bind: 'get-network-type'
          },
          global_get_from_storage: {
            bind: 'global-get-from-storage'
          }
        },
        params: {
          clientId: 'global_client_id'
        }
      }
    }
  };
  return controllerComponent;
};

const appdomeMessages = {
  zone: 'app__main',
  tag: 'bbva-feature-appdome-mx',
  type: 'CC',
  render: 'litElement',
  familyPath: '@glomo-web-components/bbva-feature-appdome-mx',
  properties: {
    cellsConnections: {
      in: {
        global_feature_flag_collection_updated: {
          bind: 'featureFlagCollection'
        },
        appdome_code: {
          bind: 'openModalAppDome'
        }
      },
      out: {
        appdome_close_app: {
          bind: 'bbva-feature-appdome-mx-app-close',
          'forward-to-native': true
        },
        appdome_close_modal: {
          bind: 'bbva-feature-appdome-mx-modal-close'
        },
        appdome_load_modal: {
          bind: 'bbva-feature-appdome-mx-modal-load'
        }
      }
    }
  }
};

const { glomoStandardErrorHandlerDm } = require('../common/commonErrors/_errors_glomo_standard_error_handler');

const common = (CONFIG, PAGENAME) => {
  const COUNTRY = utils.getCountry(CONFIG);
  let result = [
    glomoTechnicalCoreLocaleTranslation(CONFIG),
    glomoAccessManager(CONFIG),
    bbvaControllerLandingCvvSettings(CONFIG),
    glomoAlertManager(CONFIG, COUNTRY, utils.getLanguage(CONFIG), utils.getLocalCurrency(CONFIG)),
    glomoFeedbackForm(CONFIG, COUNTRY),
    bbvaControllerFeedback(CONFIG),
    bbvaAuth(COUNTRY, CONFIG, PAGENAME),
    bbvaControllerDeviceAccessesBiometricsNotFidoEnrollment(),
    bbvaNativeConnectorDeviceInfo,
    bbvaNativeconnectorThirdPartyWallet(CONFIG),
    signModal(CONFIG),
    discreetModeController(CONFIG),
    discreetModeConnector(),
    feedbackDm(CONFIG),
    feedbackManager(CONFIG, PAGENAME),
    rateAppPlugin,
    nativeAnalytics(CONFIG),
    campaignsDM(CONFIG),
    cellsConnectionStatus(PAGENAME),
    disconnectedBanner(PAGENAME),
    glomoStandardErrorHandlerDm(CONFIG.isSphericaMode),
    landingPageManager(CONFIG),
    loaderAmbient(),
    loadingManager(CONFIG),
    productChecker(CONFIG),
    shortcutManager(CONFIG),
    featureFlagManager(),
    widgetErrorHandler(),
    glomoStorageManager(CONFIG),
    offersManager(CONFIG, PAGENAME),
    deviceInfoPlugin,
    openPayPlugin(CONFIG),
    dataProviderCampaigns(CONFIG),
    mobilePaymentPlugin(CONFIG),
    trustDevicePlugin(CONFIG),
    controllerHomeCore(CONFIG),
    featureValidatorFutura(CONFIG),
    technicalCoreSecurityEncryptor(CONFIG),
    filterFutura(),
    technicalCoreAnalyticsOptimization(),
    notificationsCenterComponent(CONFIG),
    controllerRetargeting(CONFIG),
    quantumManager,
    appdomeMessages
  ];

  if (CONFIG.isSphericaMode) {
    result.push(glomoAlertManagerSpherica(CONFIG, utils.getLanguage(CONFIG)));
  }

  if (CONFIG.nativeShell) {
    result.push(
      mobileActionLauncher(),
      sessionTokenDM,
      cellsNativeconnectorAppsflyer(CONFIG),
      glomoMobileShowInfo,
      nativeSettingsPlugin,
      deviceInfoPlugin
    );
  }

  return result;
};

module.exports = {
  common: common,
  bbvaAuth: bbvaAuth,
  bbvaControllerDeviceAccessesBiometricsNotFidoEnrollment,
  bbvaNativeConnectorDeviceInfo,
  bbvaNativeconnectorThirdPartyWallet,
  bbvaControllerLandingCvvSettings,
  glomoTechnicalCoreLocaleTranslation,
  glomoAccessManager: glomoAccessManager,
  glomoAlertManager: glomoAlertManager,
  glomoAlertManagerSpherica: glomoAlertManagerSpherica,
  cellsConnectionStatus: cellsConnectionStatus,
  disconnectedBanner: disconnectedBanner,
  timeoutHandler: timeoutHandler,
  nativeAnalytics: nativeAnalytics,
  signDm: signDm,
  signModal,
  feedbackManager: feedbackManager,
  feedbackDm: feedbackDm,
  glomoFeedbackForm,
  bbvaControllerFeedback,
  campaignsDM: campaignsDM,
  offersManager,
  sessionTokenHandler: sessionTokenDM,
  glomoStorageManager,
  landingPageManager,
  dataProviderCampaigns,
  loadingManager,
  cellsNativeconnectorAppsflyer,
  glomoMobileShowInfo,
  shortcutManager,
  productChecker,
  deviceInfoPlugin,
  mobileActionLauncher,
  widgetErrorHandler,
  loaderAmbient,
  featureFlagManager,
  openPayPlugin,
  mobilePaymentPlugin,
  trustDevicePlugin,
  glomoStandardErrorHandlerDm,
  notificationsCenterComponent,
  filterFutura,
  controllerHomeCore,
  featureValidatorFutura,
  technicalCoreAnalyticsOptimization,
  technicalCoreSecurityEncryptor
};
