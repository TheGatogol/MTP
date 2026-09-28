'use strict';
module.exports = (config) => {
  const pageName = 'proceedings';
  const pages = require('./common/_pages')(config)(pageName);
  const {
    globalServices: { host, requiredToken = 'tsec'},
    native = false,
    nativeIos = false
  } = config;
  const analitycs = require('./analytics/_proceedings')();
  const analitycsNationalId = require('./analytics/_nationalIdAndVideoselfie')();
  const analyticsFatcaValidationSurvey = require('./analytics/_fatcaValidationSurvey')();
  const analitycsKyc = require('./analytics/_kycValidationMx')();
  const analiticsRecipients = require('./analytics/_profileRecipients')();
  const analitycsAddress = require('./analytics/_profileAddressManagement.js')();
  const localStorageApp = require('./common/_local-storage');
  const sphericaPageUtils = require('./common/helpers/_spherica')(config, pageName);

  const template = {
    tag: 'cells-template-coronita',
    tagSpherica: 'cells-template-coronita-spherica',
    properties: {
      className: 'bg-light-grey',
      drawerWidth: '100%',
      disableScrollLock: true,
      disableEdgeSwipe: true,
      extraHeaderClass: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
      headerFixed: true
    },
    propertiesSpherica: {
      extraHeaderClass: nativeIos ? 'ios-top-padding' : ''
    }
  };
  const proceedingsFeature = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-feature-proceedings',
    tagSpherica: 'user-info-proceedings-mx',
    familyPath: '@glomo-web-components/bbva-feature-proceedings',
    familyPathSpherica: '@glomo-web-components/user-info-proceedings-mx',
    render: 'litElement',
    properties: {
      host,
      requiredToken,
      native,
      requiredOtp: true,
      cellsConnections: {
        in: {
          __bridge_page_proceedings: {
            bind: 'bridgeReset'
          },
          magicLog_send_email_to_proceedings: {
            bind: 'customerEmail'
          },
          proceedings_modal_button_close: {
            bind: 'resetProp'
          },
          global_device_accesses_customer_id: {
            bind: 'customerId'
          },
          global_financial_overview_details: {
            bind: 'financialOverviewDetails'
          },
          dashboard_customer_email: {
            bind: 'customerEmail'
          },
          global_account_set_account_for_operations: {
            bind: 'accountDetailData'
          },
          profileRecipients_GO_TO_BACK_ONBORDING: {
            bind: 'returnWithoutSavingBenef'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlags'
          },
          global_alert_manager_open_with_settings: {
            bind: 'backToProceedings'
          },
          navigate_to_proceedings: {
            bind: 'propertiesInitData'
          },
          navigation_fatca_validation_survey_to_proceedings: {
            bind: 'taxResidencesAdditionalData'
          },
          contract_product_section_oc_banner_payroll_portability_oc_clicked: {
            bind: 'initPropertiesFromOneClick'
          },
          app_info_structure_home_next_best_actions_item_click: {
            bind: 'initPropertiesFromOneClick'
          },
          app_info_structure_home_customized_offers_item_click: {
            bind: 'initPropertiesFromOneClick'
          },
          sign_modal_close_reset: {
            bind: 'hideSpinner'
          },
          widget_signature_handle_invalid: {
            bind: 'hideSpinner'
          },
          navigation_identity_validation_to_proceedings: {
            bind: 'identityValidationData'
          },
          global_feature_close_operative: {
            bind: 'backToProceedings'
          },
          kyc_go_back_not_data_to_proceedings: {
            bind: 'returnFromKYC'
          },
          feature_profile_address_close_operative: {
            bind: 'closedAddressOperative'
          },
          address_send_data_proceedings: {
            bind: 'addresToProceedingsData'
          },
          feature_profile_recipients_mx_send_data_proceedings: {
            bind: 'profileRecipientsChannel'
          },
          kyc_send_data_to_proceedings: {
            bind: 'dataKycModule'
          },
          payroll_portability_exit_modal_button_pressed: {
            bind: 'backToProceedings'
          },
          global_storage_get_loginData_success: {
            bind: 'handleLoginDataResponse'
          },
          global_storage_get_loginData_error: {
            bind: 'handleLoginDataResponse'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'initPropertiesFromDeeplink'
          },
          global_storage_get_know_your_client_exception_success: {
            bind: 'validateKycExceptionData'
          },
          global_storage_get_know_your_client_exception_error: {
            bind: 'validateKycExceptionError'
          },
          kyc_high_risk_move_from_kyc_to_proceedings: {
            bind: 'setPropertieskycHighRisk'
          },
          kyc_high_risk_move_from_kyc_to_proceedings_after_questions: {
            bind: 'getDataKycHighRiskValidationModule'
          }
        },
        out: {
          proceedings_modal_button_close: {
            bind: 'user-info-proceedings-mx-exit',
            link: {
              page: 'account',
              skipHistory: true,
              params: {
                productId: 'productId'
              },
              cleanUntil: 'account'
            }
          },
          dashboard_init_page_first_time: {
            bind: 'user-info-proceedings-mx-payroll-deeplink-dashboard-navigate',
            link: {
              page: 'dashboard',
              skipHistory: true,
              cleanUntil: 'dashboard'
            }
          },
          navigation_to_contract_product_section: {
            bind: 'user-info-proceedings-mx-contract-product-section-navigate',
            link: {
              page: 'contractProductSection'
            }
          },
          global_logout_sesion_expiration: {
            bind: 'user-info-proceedings-mx-session-logout'
          },
          global_set_in_storage: {
            bind: 'user-info-proceedings-mx-kyc-validation-exception-case-write'
          },
          send_from_proceedings_to_portability: {
            bind: 'user-info-proceedings-mx-porta-n2-continue-button-link',
            link: {
              page: 'payrollPortability'
            }
          },
          send_deeplink_information_from_proceedings_to_portability: {
            bind: 'user-info-proceedings-mx-porta-n2-continue-button-publish'
          },
          global_navigation_to_national_id_validation: {
            bind: 'user-info-proceedings-mx-navigation-to-identity-validation',
            link: {
              page: 'nationalIdAndVideoselfie'
            }
          },
          global_navigation_to_signing_videoselfie_mx: {
            bind: 'user-info-proceedings-mx-navigation-to-identity-validation-dvs-express-request',
            link: {
              page: 'signingVideoselfieMx'
            }
          },
          navigation_to_modify_identity_capture_from_proceedings: {
            bind: 'user-info-proceedings-mx-navigation-back-to-modify-identity-capture',
            link: {
              page: 'nationalIdAndVideoselfie'
            }
          },
          navigation_to_modify_confirm_identity_from_proceedings: {
            bind: 'user-info-proceedings-mx-confirm-identity-modify-navigate',
            link: {
              page: 'nationalIdAndVideoselfie'
            }
          },
          navigation_proceedings_to_kyc_validation_mx: {
            bind: 'user-info-proceedings-mx-kyc-navigate',
            link: {
              page: 'kycValidationMx'
            }
          },
          success_upgrade_hybrid: {
            bind: 'user-info-proceedings-mx-upgrade-success-navigate',
            link: {
              page: 'upgradeCustomerSuccess'
            }
          },
          proceedings_analytic_reset_prop: {
            bind: 'user-info-proceedings-mx-analytics-properties-to-reset'
          },
          proceedings_navigation_to_address_validation_management: {
            bind: 'user-info-proceedings-mx-customer-address-edit',
            link: {
              page: 'profileAddressManagement'
            }
          },
          proceedings_navigation_to_address_validation: {
            bind: 'user-info-proceedings-mx-customer-address-edit-ocr-request',
            link: {
              page: 'userInfoProfilePostalAddressManagementMx'
            }
          },
          navigation_to_fatca_validation_survey: {
            bind: 'user-info-proceedings-mx-navigation-to-tax-residences',
            link: {
              page: 'fatcaValidationSurvey'
            }
          },
          proceedings_navigate_to_recipient_init_handler: {
            bind: 'user-info-proceedings-mx-participants-navigation',
            link: {
              page: 'profileRecipients'
            }
          },
          proceedings_navigate_to_kyc_high_risk: {
            bind: 'bbva-feature-navigate-to-kyc-high-risk',
            link: {
              page: 'kycHighRisk'
            }
          },
          proceedings_navigate_to_modify_kyc_high_risk: {
            bind: 'bbva-feature-modify-kyc-high-risk',
            link: {
              page: 'kycHighRisk'
            }
          },
          proceedings_navgate_to_success_kyc_high_risk: {
            bind: 'bbva-feature-proceedings-update-task-success-kyc-high-risk',
            link: {
              page: 'kycHighRisk'
            }
          },
          proceedings_init_analytics_validate: {
            bind: 'user-info-proceedings-mx-init-analytics-proceedings-view'
          },
          proceedings_init_analytics_validate_identity: {
            bind: 'user-info-proceedings-mx-init-analytics-identity-validation-view'
          },
          proceedings_init_analytics_interactive_identity: {
            bind: 'user-info-proceedings-mx-analytics-internal-link-identity-validation-init'
          },
          proceedings_init_analytics_interactive_kyc_validation: {
            bind: 'user-info-proceedings-mx-init-analytics-kyc-validation-view'
          },
          proceedings_init_analytics_validate_kyc_validation: {
            bind: 'user-info-proceedings-mx-init-analytics-update-kyc-module-view'
          },
          proceedings_init_analytics_validate_home_address: {
            bind: 'user-info-proceedings-mx-init-analytics-home-address-view'
          },
          proceedings_init_analytics_validate_update_address: {
            bind: 'user-info-proceedings-mx-init-analytics-update-address-view'
          },
          proceedings_init_analytics_interactive_to_participants: {
            bind: 'user-info-proceedings-mx-init-analytics-participants-view'
          },
          proceedings_send_analytics_to_address: {
            bind: 'user-info-proceedings-mx-init-analytics-address-view'
          },
          proceedings_init_analytics_interactive_official_information: {
            bind: 'interaction-update-official-identity'
          },
          proceedings_init_analytics_interactive_ine_data: {
            bind: 'interaction-update-ine-data'
          },
          proceedings_init_analytics_interactive_identity_validation_confirm: {
            bind: 'user-info-proceedings-mx-interaction-update-identity-validation-confirm'
          },
          proceedings_init_analytics_validate_modify_kyc_validation: {
            bind: 'user-info-proceedings-mx-init-analytics-update-kyc-modify-view'
          },
          proceedings_init_analytics_interactive_kyc_information_confirm: {
            bind: 'user-info-proceedings-mx-interaction-update-kyc-validation-confirm'
          },
          proceedings_init_analytics_interactive_confirm_information: {
            bind: 'user-info-proceedings-mx-interaction-confirm-information-update'
          },
          proceedings_init_analytics_interactive_confirm_information_button: {
            bind: 'user-info-proceedings-mx-interaction-information-button-confirm'
          },
          proceedings_init_analytics_interactive_confirm_upgrade: {
            bind: 'user-info-proceedings-mx-interaction-upgrade-confirm'
          },
          proceedings_init_analytics_interactive_error_page: {
            bind: 'user-info-proceedings-mx-interaction-modal-error-update'
          },
          proceedings_init_analytics_financial_relations: {
            bind: 'proceedings-init-analytics-kyc-high-risk-module'
          },
          proceedings_init_analytics_validation_process_financial_relations: {
            bind: 'user-info-proceedings-mx-init-analytics-validation-process-upgrade-view'
          },
          proceedings_init_analytics_interactive_confirm_financial_relations: {
            bind: 'interaction-update-kyc-high-risk-questionaire-confirm'
          },
          proceedings_init_analytics_completed_kyc_high_risk: {
            bind: 'proceedings-init-analytics-completed-kyc-high-risk'
          },
          global_get_from_storage: {
            bind: 'user-info-proceedings-mx-global-storage-get'
          }
        }
      }
    },
    propertiesSpherica: {
      iOSFixedHeader: nativeIos
    }
  };

  const analyticsProceedingsFeature = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-procedings',
    familyPath: '@glomo-web-components/bbva-analyticmanager-user-info',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          global_login_success: {
            bind: 'handleGlobalLoginSuccess'
          },
          global_login_success_indicators: {
            bind: 'handleGlobalLoginSuccessIndicators'
          },
          proceedings_modal_button_close: {
            bind: 'resetProp'
          },
          proceedings_analytic_reset_prop: {
            bind: 'resetProp'
          },
          proceedings_init_analytics_validate: {
            bind: 'manageAppView'
          },
          global_navigation_to_national_id_validation: {
            bind: 'onAppInternalLinkIdentityValidation'
          },
          proceedings_init_analytics_interactive_identity: {
            bind: 'dispatchNavigateIdentityModuleAnalytic'
          },
          proceedings_init_analytics_validate_kyc_validation: {
            bind: 'onAppInternalLinkKycValidation'
          },
          proceedings_init_analytics_validate_modify_kyc_validation: {
            bind: 'onAppInternalLinkKycValidationModify'
          },
          proceedings_init_analytics_interactive_official_information: {
            bind: 'dispatchOfficialIdentificationModificationAnalytic'
          },
          proceedings_init_analytics_interactive_ine_data: {
            bind: 'dispatchIneDataModificationAnalyticriesData'
          },
          proceedings_init_analytics_interactive_identity_validation_confirm: {
            bind: 'dispatchConfirmIdentityModuleAnalytic'
          },
          proceedings_init_analytics_interactive_kyc_validation: {
            bind: 'dispatchNavigateKycModuleAnalytic'
          },
          proceedings_init_analytics_interactive_kyc_information_confirm: {
            bind: 'dispatchConfirmKycModuleAnalytic'
          },
          proceedings_init_analytics_financial_relations: {
            bind: 'dispatchFinancialRelationsModuleAnalytic'
          },
          proceedings_init_analytics_interactive_confirm_financial_relations: {
            bind: 'dispatchFinancialRelationsConfirmAnalytic'
          },
          proceedings_init_analytics_validation_process_financial_relations: {
            bind: 'dispatchValidationProcessUpgradeAnalytic'
          },
          proceedings_navgate_to_success_kyc_high_risk: {
            bind: 'dispatchSuccessUpgradeAnalytic'
          },
          proceedings_init_analytics_validate_home_address: {
            bind: 'onAppOnClickStartAddress'
          },
          proceedings_init_analytics_validate_update_address: {
            bind: 'onAppOnClickStartUpdateAddress'
          },
          proceedings_init_analytics_interactive_confirm_information: {
            bind: 'dispatchConfirmInformationModuleAnalytic'
          },
          proceedings_init_analytics_interactive_to_participants: {
            bind: 'onClickStartParticipants'
          },
          proceedings_init_analytics_interactive_confirm_information_button: {
            bind: 'dispatchConfirmInformationModuleButtonAnalytic'
          },
          proceedings_init_analytics_interactive_confirm_upgrade: {
            bind: 'dispatchConfirmLevelUpgradeAnalytic'
          },
          proceedings_init_analytics_interactive_error_page: {
            bind: 'dispatchErrorPageAnalytic'
          },
          widget_signature_handle_required_first_step: {
            bind: 'dispatchOtpAnalytic'
          },
          navigation_to_fatca_validation_survey: {
            bind: 'onAppOnClickStartFatca'
          }
        },
        out: {
          proceedings_start: {
            bind: 'analytics-start-flow',
            analytics: analitycs.pageView
          },
          proceedings_page_activity_link: {
            bind: 'analytics-activity-click',
            analytics: analitycs.internalLink
          },
          proceedings_page_activity_confirm: {
            bind: 'analytics-confirm-update-information',
            analytics: analitycs.appPageConfirm
          },
          proceedings_page_activity_otp: {
            bind: 'analytics-activity-otp',
            analytics: analitycs.appPageOtp
          },
          proceedings_page_activity_error: {
            bind: 'analytics-activity-error',
            analytics: analitycs.appPageError
          },
          proceedings_app_onclick_start_fatca: {
            bind: 'analytics-app-on-click-start-fatca',
            analytics: analyticsFatcaValidationSurvey.getAppOnClickStart(true)
          },
          proceedings_app_onclick_start_identity_validation: {
            bind: 'analytics-app-on-click-start-identity',
            analytics: analitycsNationalId.getAppOnClickStart(true)
          },
          proceedings_app_onclick_start_address: {
            bind: 'analytics-app-on-click-start-home-address',
            analytics: analitycsAddress.appOnClickStartProofAddress
          },
          proceedings_app_onclick_start_update_address: {
            bind: 'analytics-app-on-click-start-update-address',
            analytics: analitycsAddress.appOnClickStartProceedingsModifyAddress
          },
          proceedings_app_onclick_start_kyc_validation: {
            bind: 'analytics-app-on-click-start-kyc',
            analytics: analitycsKyc.getAppOnClickStartUpdateInformation
          },
          proceedings_app_onclick_start_kyc_validation_modify: {
            bind: 'analytics-app-on-click-start-kyc-modify',
            analytics: analitycsKyc.getAppOnClickStartModifyQuestionnaire
          },
          proceedings_app_onclick_start_particpants_validation: {
            bind: 'analytics-app-on-click-start-participants',
            analytics: analiticsRecipients.appOnClickStartRecipientsProceedings()
          },
          proceedings_page_activity_validation_process: {
            bind: 'analytics-upgrade-customer-page-view-validation-process',
            analytics: analitycs.appValidationProcess
          },
          global_completed_kyc_high_risk: {
            bind: 'proceedings-init-analytics-completed-kyc-high-risk'
          }
        }
      }
    }
  };

  const base = {
    hash: 'mx-proceedings',
    currentPage: {
      url: '/proceedings'
    },
    pages,
    template,
    components: [
      proceedingsFeature,
      analyticsProceedingsFeature
    ]
  };

  localStorageApp.addOutStorageChannels(base.components, ['know_your_client_exception', 'loginData'], config);
  const signWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  signWidgetConnector('bbva-feature-proceedings', { cancelAfterErrorFunction: 'hideSpinner' });

  return sphericaPageUtils.spherize(base);
};