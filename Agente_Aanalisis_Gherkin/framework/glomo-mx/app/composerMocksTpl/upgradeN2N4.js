'use strict';
module.exports = (config) => {
  const {
    globalServices: { host, requiredToken = 'tsec', versions: {
      customersV1: customersApiVersion,
      contracts: contractsApiVersion,
      contractDocuments: contractDocumentsApiVersion
    }
    },
    native = false,
    nativeIos = false
  } = config;
  const {
    SPINNER: spinner
  } = require('./common/helpers/_utils');
  const pageName = 'upgradeN2N4';
  const ANALYTICS_UPGRADE = require('./analytics/_upgradeN2N4')();
  const base = {
    hash: pageName,
    currentPage: {
      url: '/upgrade-N2-page'
    },
    template: {
      tag: 'cells-template-coronita',
      properties: {
        drawerWidth: '100%',
        disableEdgeSwipe: true,
        disableScrollLock: true,
        headerHeight: 0,
        className: 'dark-blue-bg',
        extraHeaderClass: nativeIos ? 'ios-top-padding' : ''
      }
    },
    components: [
      spinner(config),
      {
        zone: 'app__header',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName,
          tokenName: requiredToken,
          customInitEvents: {
            'swipe-menu-enabled': false
          },
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
              'upgrade_n2_n4_init_page': {
                bind: 'init-page'
              }
            },
            global_enable_menu_swipe: {
              bind: 'swipe-menu-enabled',
              'forward-to-native': true
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-header-main',
        render: 'litElement',
        familyPath: '@bbva-web-components/bbva-header-main',
        properties: {
          hidden: true,
          id: 'upgradeAccountModularHeader',
          text: 'upgrade-account-n2-n3-update-heading',
          iconRightPrimary: 'coronita:close',
          accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
          cellsConnections: {
            in: {
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              }
            },
            out: {
              [pageName + '_exit_upgrade_account']: {
                bind: 'header-main-icon-right-primary-click'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-panel-info',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        properties: {
          hidden: true,
          id: 'upgradeAccountModularPanelInfo',
          cellsConnections: {
            in: {
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              },
              [pageName + '_send_microilustration_upgrade']: {
                bind: 'microillustration'
              },
              [pageName + '_set_heading_steps']: {
                bind: 'heading'
              },
              [pageName + '_set_text_steps']: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-progress-vertical-step',
        familyPath: '@bbva-web-components/bbva-progress-vertical-step',
        render: 'litElement',
        properties: {
          hidden: true,
          id: 'upgradeVerticalStep',
          cellsConnections: {
            in: {
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              },
              [pageName + '_send_configuration_steps']: {
                bind: 'steps'
              }
            },
            out: {
              [pageName + '_module_to_fill_selected']: {
                bind: 'progress-vertical-step-link-click'
              },
              [pageName + '_vertical_steps_is_loaded' ]: {
                bind: 'app-localize-resources-loaded'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'UI',
        tag: 'bbva-button-default',
        familyPath: '@bbva-web-components/bbva-button-default',
        render: 'litElement',
        properties: {
          hidden: true,
          id: 'upgradeAccountModularButton',
          variant: 'primary',
          text: 'portability-e2e-update',
          className: 'u-display--table u-margin--center',
          cellsConnections: {
            in: {
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'hidden'
              },
              [pageName + '_validate_update_button_upgrade']: {
                bind: 'disabled'
              }
            },
            out: {
              [pageName + 'CONFIRM_UPGRADE']: {
                bind: 'click'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        attributes: {
          'full-height': true,
          'fixed-footer': true
        },
        container: true,
        properties: {
          fullHeight: true,
          id: 'errorModal',
          cellsConnections: {
            in: {
              [pageName + 'DM_ERROR_MODAL_HEADER_TEXT']: {
                bind: 'headerText'
              },
              [pageName + 'DM_ERROR_LIST_CONTRACTING_DOSSIER_MODAL_BUTTON']: {
                bind: 'buttonText'
              },
              [pageName + 'DM_ERROR_MODAL_HEADER_TYPE']: {
                bind: 'headerType'
              },
              [pageName + 'DM_ERROR_MODAL_EXIT']: {
                bind: 'open'
              }
            },
            out: {
              dashboard_refresh_financial_overview: {
                bind: 'help-modal-footer-button-click',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              },
              dashboard_refresh_exit_error_service: {
                bind: 'header-main-icon-right-primary-click',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              }
            }
          }
        }
      },
      {
        zone: 'errorModal.slot-content',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        tag: 'bbva-panel-info',
        properties: {
          cellsConnections: {
            in: {
              [pageName + 'DM_ERROR_MODAL_MICROILLUSTRATION']: {
                bind: 'microillustration'
              },
              [pageName + 'DM_ERROR_MODAL_PANEL_HEADING']: {
                bind: 'heading'
              },
              [pageName + 'ERROR_LIST_CONTRACTING_DOSSIER_MODAL_PANEL_TEXT']: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-help-modal',
        familyPath: '@bbva-web-components/bbva-help-modal',
        render: 'litElement',
        attributes: {
          'full-height': true,
          'fixed-footer': true,
          'justify-content': 'center'
        },
        container: true,
        properties: {
          fullHeight: true,
          id: 'exitModal',
          cellsConnections: {
            in: {
              [pageName + '_header_exit_modal_text_leave_upgrade']: {
                bind: 'headerText'
              },
              [pageName + '_button_exit_modal_text_leave_upgrade']: {
                bind: 'buttonText'
              },
              [pageName + '_link_exit_modal_text_leave_upgrade']: {
                bind: 'linkText'
              },
              [pageName + '_open_exit_confirm_modal']: {
                bind: 'open'
              },
              [pageName + '_cancel_leave_upgrade_account']: {
                bind: 'close'
              },
              [pageName + '_close_leave_operative_modal']: {
                bind: 'close'
              }
            },
            out: {
              dashboard_refresh_financial: {
                bind: 'help-modal-footer-link-click'
              },
              [pageName + '_press_cancel_leave_upgrade_account']: {
                bind: 'help-modal-footer-button-click'
              }
            }
          }
        }
      },
      {
        zone: 'exitModal.slot-content',
        type: 'UI',
        familyPath: '@bbva-web-components/bbva-panel-info',
        render: 'litElement',
        tag: 'bbva-panel-info',
        properties: {
          cellsConnections: {
            in: {
              [pageName + '_set_microilustration_exit_modal']: {
                bind: 'microillustration'
              },
              [pageName + '_set_heading_exit_modal_text']: {
                bind: 'heading'
              },
              [pageName + '_set_panel_text_exit_modal_leave_upgrade']: {
                bind: 'text'
              }
            }
          }
        }
      },
      {
        zone: 'exitModal.slot-content',
        type: 'UI',
        tag: 'bbva-notification-message',
        familyPath: '@bbva-web-components/bbva-notification-message',
        render: 'litElement',
        properties: {
          className: 'u-margin--grid',
          message: 'upgrade-account-n2-n4-modal-message'
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-upgrade-level-account',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
        properties: {
          cellsConnections: {
            in: {
              global_feature_flag_collection_updated: {
                bind: 'featureFlags'
              },
              navigation_from_deep_link_to_operations: {
                bind: 'requestClientId'
              },
              global_financial_overview_details: {
                bind: 'accountDataResponse'
              },
              __bridge_app: {
                bind: 'factaValidation'
              },
              ['__bridge_page_' + pageName]: {
                bind: 'reset'
              },
              global_login_success: {
                bind: 'globalCacheStorage'
              },
              OPEN_UPGRADE_MODULAR: {
                bind: 'setUpgradeModular'
              },
              navigate_to_pivot_upgrade_n2n4: {
                bind: 'setUpgradeModular'
              },
              'upgrade_n2_n4_init_page': {
                bind: 'initialMethod'
              },
              [pageName + '_response_list_dossiers_success']: {
                bind: 'handleListContractingDossiers'
              },
              [pageName + '_response_list_dossiers_error']: {
                bind: 'handleListContractingDossiersError'
              },
              [pageName + '_response_get_customer_success']: {
                bind: 'handleGetCustomer'
              },
              [pageName + '_response_get_customer_error']: {
                bind: 'handleGetCustomerError'
              },
              [pageName + '_response_get_masked_contact_details_success']: {
                bind: 'handleGetCustomerContacts'
              },
              [pageName + '_response_get_contact_details_error']: {
                bind: 'handleGetCustomerContactsError'
              },
              [pageName + '_response_get_masked_address_success']: {
                bind: 'handleGetCustomerAddresses'
              },
              [pageName + '_response_get_masked_address_error']: {
                bind: 'handleGetAddressesError'
              },
              [pageName + '_response_get_questionnaires_kyc_success']: {
                bind: 'handleKycQuestionnaire'
              },
              [pageName + '_response_get_questionnaires_kyc_error']: {
                bind: 'handleKycQuestionnaireError'
              },
              [pageName + '_vertical_steps_is_loaded' ]: {
                bind: 'chekcIsLoaded'
              },
              [pageName + '_module_to_fill_selected']: {
                bind: 'linkedClickUpgrade'
              },
              [pageName + '_exit_upgrade_account']: {
                bind: 'openExitModal'
              },
              [pageName + '_press_cancel_leave_upgrade_account']: {
                bind: 'closeExitModal'
              },
              [pageName + '_response_customers_address_unmasked_success']: {
                bind: 'handleAddressUnmaskedSuccess'
              },
              [pageName + '_response_customers_address_unmasked_error']: {
                bind: 'handleAddressUnmaskedError'
              },
              [pageName + 'CONFIRM_UPGRADE']: {
                bind: 'confirmUpgrade'
              },
              global_storage_get_loginData_success: {
                bind: 'setClientId'
              },
              global_storage_get_loginData_error: {
                bind: 'setClientId'
              },
              dashboard_refresh_financial: {
                bind: 'validateMagicLogOn'
              }
            },
            out: {
              upgrade_N2_N4_redirect_dashboard: {
                bind: 'payroll-N2-dashboard',
                link: {
                  page: 'dashboard'
                }
              },
              global_get_from_storage: {
                bind: 'global-get-from-storage'
              },
              send_deep_link_payload_to_payroll_portability: {
                bind: 'send-deep-link-payload-to-payroll-portability-page'
              },
              navigate_from_pivot_to_payroll_portability_page: {
                bind: 'send-information-to-payroll',
                link: {
                  page: 'payrollPortability'
                }
              },
              open_control_veil: {
                bind: 'open-control-veil'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              [pageName + '_send_customer_id']: {
                bind: 'bbva-manager-upgrade-level-send-customer-id'
              },
              [pageName + '_send_client_id']: {
                bind: 'bbva-manager-upgrade-level-send-client-id'
              },
              GET_FROM_UPGRADE_MODULAR: {
                bind: 'bbva-manager-upgrade-level-from-upgrade-modular'
              },
              [pageName + '_request_contracting_dossiers']: {
                bind: 'bbva-manager-upgrade-level-request-contracting-dossiers'
              },
              [pageName + '_request_get_customer']: {
                bind: 'bbva-manager-upgrade-level-request-customer'
              },
              [pageName + '_request_customer_contacts']: {
                bind: 'bbva-manager-upgrade-level-request-contacts'
              },
              [pageName + '_request_customer_addresses']: {
                bind: 'bbva-manager-upgrade-level-request-addresses'
              },
              [pageName + '_request_customer_questionnaire']: {
                bind: 'bbva-manager-upgrade-level-request-questionnaires'
              },
              [pageName + '_validate_update_button_upgrade']: {
                bind: 'bbva-manager-upgrade-level-validate-update'
              },
              [pageName + 'HIDDEN_ELEMENTS_WHILE_LOADING']: {
                bind: 'bbva-manager-upgrade-level-hidden-page'
              },
              [pageName + '_send_configuration_steps']: {
                bind: 'bbva-manager-upgrade-level-configuration-steps-upgrade'
              },
              [pageName + '_send_microilustration_upgrade']: {
                bind: 'bbva-manager-upgrade-level-microilustration-upgrade'
              },
              [pageName + '_set_heading_steps']: {
                bind: 'bbva-manager-upgrade-level-heading-upgrade'
              },
              [pageName + '_set_text_steps']: {
                bind: 'bbva-manager-upgrade-level-text-upgrade'
              },
              navigation_profile_to_kyc_validation: {
                bind: 'bbva-manager-upgrade-level-routes-go-kyc',
                link: {
                  page: 'kycValidation'
                }
              },
              profile_perform_kyc_exception: {
                bind: 'performKycException'
              },
              profile_perform_kyc_update: {
                bind: 'performKycUpdate'
              },
              navigation_profile_to_fatca_validation: {
                bind: 'bbva-manager-upgrade-level-routes-go-fatca',
                link: {
                  page: 'fatcaValidation'
                }
              },
              navigation_profile_to_update_national_id: {
                bind: 'bbva-manager-upgrade-level-navigate-routes-go-ine',
                link: {
                  page: 'updateNationalId'
                }
              },
              navigation_profile_to_address_validation: {
                bind: 'bbva-manager-upgrade-level-edit-customer-address',
                link: {
                  page: 'updateAddressPage'
                }
              },
              [pageName + '_header_exit_modal_text_leave_upgrade']: {
                bind: 'bbva-manager-upgrade-level-exit-header-text'
              },
              [pageName + '_button_exit_modal_text_leave_upgrade']: {
                bind: 'bbva-manager-upgrade-level-exit-button'
              },
              [pageName + '_link_exit_modal_text_leave_upgrade']: {
                bind: 'bbva-manager-upgrade-level-exit-link-text'
              },
              [pageName + '_set_microilustration_exit_modal']: {
                bind: 'bbva-manager-upgrade-level-exit-modal-microilustration'
              },
              [pageName + '_set_heading_exit_modal_text']: {
                bind: 'bbva-manager-upgrade-level-exit-modal-heading'
              },
              [pageName + '_set_panel_text_exit_modal_leave_upgrade']: {
                bind: 'send-exit-modal-text'
              },
              [pageName + '_open_exit_confirm_modal']: {
                bind: 'bbva-manager-upgrade-level-open-exit-modal'
              },
              [pageName + '_cancel_leave_upgrade_account']: {
                bind: 'bbva-manager-upgrade-level-close-exit-modal'
              },
              [pageName + '_close_leave_operative_modal']: {
                bind: 'bbva-manager-upgrade-level-close-modal'
              },
              [pageName + '_request_customer_addresses_unmasked']: {
                bind: 'bbva-manager-upgrade-level-get-unmasked-address'
              },
              [pageName + 'DM_ERROR_MODAL_EXIT']: {
                bind: 'open-error-modal-header'
              },
              [pageName + 'DM_ERROR_MODAL_HEADER_TYPE']: {
                bind: 'send-modal-error-header-type'
              },
              [pageName + 'DM_ERROR_MODAL_HEADER_TEXT']: {
                bind: 'send-modal-error-header-text'
              },
              [pageName + 'DM_ERROR_LIST_CONTRACTING_DOSSIER_MODAL_BUTTON']: {
                bind: 'send-modal-error-button'
              },
              [pageName + 'DM_ERROR_MODAL_MICROILLUSTRATION']: {
                bind: 'send-error-modal-microilustration'
              },
              [pageName + 'DM_ERROR_MODAL_PANEL_HEADING']: {
                bind: 'send-error-modal-heading'
              },
              [pageName + 'ERROR_LIST_CONTRACTING_DOSSIER_MODAL_PANEL_TEXT']: {
                bind: 'send-error-modal-text'
              },
              SHOW_UPGRADE_MODULAR_CONFIRM: {
                bind: 'send-routes-upgrade-confirm',
                link: {
                  page: 'upgradeConfirmN2N4'
                }
              },
              navigation_to_add_video_selfie_code: {
                bind: 'send-to-video-selfie',
                link: {
                  page: 'addVideoSelfie'
                }
              },
              [pageName + '_ANALYTICS_IDENTITY']: {
                bind: 'send-analytics-identity'
              },
              [pageName + '_ANALYTICS_VIDEOSELFIE']: {
                bind: 'send-analytics-videoselfie'
              },
              [pageName + '_ANALYTICS_KYC']: {
                bind: 'send-analytics-kyc'
              },
              [pageName + '_ANALYTICS_FATCA']: {
                bind: 'send-analytics-fatca'
              },
              [pageName + '_ANALYTICS_ADDRESS']: {
                bind: 'send-analytics-address'
              },
              [pageName + '_loaded__visual_upgrade']: {
                bind: 'bbva-manager-upgrade-level-account-current-percentage'
              },
              [pageName + '_navigate_dashboard']: {
                bind: 'navigate-to-dashboard',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              },
              global_logout_sesion_expiration: {
                bind: 'logout-upgrade-operative'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-manager-upgrade-analytics',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-manager-payroll-portability-profile',
        properties: {
          cellsConnections: {
            in: {
              [pageName + '_loaded__visual_upgrade']: {
                bind: 'manageFootprint'
              },
              [pageName + '_ANALYTICS_IDENTITY']: {
                bind: 'sendIdentity'
              },
              [pageName + '_ANALYTICS_VIDEOSELFIE']: {
                bind: 'sendVideoSelfie'
              },
              [pageName + '_ANALYTICS_KYC']: {
                bind: 'sendKYC'
              },
              [pageName + '_ANALYTICS_FATCA']: {
                bind: 'sendFATCA'
              },
              [pageName + '_ANALYTICS_ADDRESS']: {
                bind: 'sendAddress'
              },
              SHOW_UPGRADE_MODULAR_CONFIRM: {
                bind: 'sendExitUpgrade'
              }
            },
            out: {
              [pageName + '_SENT_IDENTITY_ANALYTIC']: {
                bind: 'sent-identity-analytic',
                analytics: ANALYTICS_UPGRADE.appOnClickStartIdentity
              },
              sent_identity_custom_fields: {
                bind: 'sent-identity-custom-fields'
              },
              sent_identity_typology: {
                bind: 'sent-identity-typology'
              },
              [pageName + '_SENT_VIDEOSELFIE_ANALYTIC']: {
                bind: 'sent-videoselfie-analytic',
                analytics: ANALYTICS_UPGRADE.appOnClickStartVideoselfie
              },
              [pageName + '_SENT_KYC_ANALYTIC']: {
                bind: 'sent-kyc-analytic',
                analytics: ANALYTICS_UPGRADE.appOnClickStartKyc
              },
              [pageName + '_SENT_FATCA_ANALYTIC']: {
                bind: 'sent-fatca-analytic',
                analytics: ANALYTICS_UPGRADE.appOnClickStartFatca
              },
              [pageName + '_SENT_ADDRESS_ANALYTIC']: {
                bind: 'sent-address-analytic',
                analytics: ANALYTICS_UPGRADE.appOnClickStartAddress
              },
              [pageName + '_SENT_EXIT_UPGRADE_ANALYTIC']: {
                bind: 'send-analityc-exit-upgrade',
                analytics: ANALYTICS_UPGRADE.appOnClickStartConfirm
              },
              [pageName + '_SENT_FOOTPRINT_ANALYTIC']: {
                bind: 'bbva-manager-upgrade-analytics-footprint',
                analytics: ANALYTICS_UPGRADE._getUpgradeAccountFootPrint
              },
              ['fatca_validation' + '_FATCA_CUSTOM_FIELDS']: {
                bind: 'sent-fatca-custom-fields'
              },
              ['fatca_validation' + '_FATCA_TYPOLOGY']: {
                bind: 'sent-fatca-typology'
              },
              ['kycValidation' + '_KYC_CUSTOM_FIELDS']: {
                bind: 'sent-kyc-custom-fields'
              },
              ['kycValidation' + '_KYC_TYPOLOGY']: {
                bind: 'sent-kyc-typology'
              },
              sent_adrress_custom_fields: {
                bind: 'sent-adrress-custom-fields'
              },
              sent_adress_typology: {
                bind: 'sent-adress-typology'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-contract-documents',
        properties: {
          host,
          native,
          requiredToken,
          contractsApiVersion,
          cellsConnections: {
            in: {
              [pageName + 'getPropertiesListContractingDossier']: {
                bind: 'getContractingDossiers'
              }
            },
            out: {
              [pageName + 'SUCCESS_CONTRACTING_DOSSIER']: {
                bind: 'set-list-contracting-dossiers'
              },
              [pageName + 'ERROR_CONTRACTING_DOSSIER']: {
                bind: 'error-on-list-contracting-dossiers'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-customers-mx-bgadpmock',
        familyPath: 'cells-dm-global-apis-customers-bgadpmock',
        properties: {
          host,
          requiredToken,
          customersContactDetailsApiVersion: customersApiVersion,
          customersApiVersion,
          customerAddressesApiVersion: customersApiVersion,
          headers: { 'Accept-Language': 'es' },
          native,
          cellsConnections: {
            in: {
              [pageName + '_send_customer_id']: {
                bind: 'customerId'
              },
              [pageName + '_send_client_id']: {
                bind: 'clientId'
              },
              [pageName + '_request_customer_addresses_unmasked']: {
                bind: 'getCustomerAddresses'
              }
            },
            out: {
              [pageName + '_response_customers_address_unmasked_success']: {
                bind: 'set-customer-addresses'
              },
              [pageName + '_response_customers_address_unmasked_error']: {
                bind: 'error-on-get-customer-addresses'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-customers-mx-dm',
        familyPath: 'glomo-customers-dm',
        properties: {
          host,
          requiredToken,
          customersApiVersion,
          customersContactDetailsApiVersion: customersApiVersion,
          customerAddressesApiVersion: customersApiVersion,
          contractDocumentsApiVersion,
          currentInfoEnabled: true,
          disabledUpdatedUser: true,
          allowToAddAddress: true,
          forceToAppendEmailWithoutItem: true,
          forceToAppendEmailWithoutValue: true,
          headers: { 'Accept-Language': 'es' },
          native,
          cellsConnections: {
            in: {
              [pageName + '_send_customer_id']: {
                bind: 'customerId'
              },
              [pageName + '_send_client_id']: {
                bind: 'clientId'
              },
              [pageName + '_request_contracting_dossiers']: {
                bind: 'getContractingDossiers'
              },
              [pageName + '_request_get_customer']: {
                bind: 'getCustomer'
              },
              [pageName + '_request_customer_contacts']: {
                bind: 'getCustomerContacts'
              },
              [pageName + '_request_customer_addresses']: {
                bind: 'getCustomerAddresses'
              },
              [pageName + '_request_customer_questionnaire']: {
                bind: 'getQuestionnaire'
              }
            },
            out: {
              [pageName + '_response_list_dossiers_success']: {
                bind: 'customers-response-get-list-dossiers-success'
              },
              [pageName + '_response_list_dossiers_error']: {
                bind: 'customers-response-get-list-dossiers-error'
              },
              [pageName + '_response_get_customer_success']: {
                bind: 'customers-response-get-customer-success'
              },
              [pageName + '_response_get_customer_error']: {
                bind: 'customers-response-get-customer-error'
              },
              [pageName + '_response_get_masked_contact_details_success']: {
                bind: 'customers-response-get-contact-detail-success'
              },
              [pageName + '_response_get_contact_details_error']: {
                bind: 'customers-response-get-contact-detail-error'
              },
              [pageName + '_response_get_masked_address_success']: {
                bind: 'customers-response-get-addresses-success'
              },
              [pageName + '_response_get_masked_address_error']: {
                bind: 'customers-response-get-addresses-error'
              },
              [pageName + '_response_get_questionnaires_kyc_success']: {
                bind: 'customers-response-get-questionnaires-kyc-success'
              },
              [pageName + '_response_get_questionnaires_kyc_error']: {
                bind: 'customers-response-get-questionnaires-kyc-error'
              }
            }
          }
        }
      }
    ]
  };
  const signConnector = require('./common/_sign-connector')(config)(base);
  signConnector('cells-dm-global-apis-customers-mx-bgadpmock', pageName, ['set-customer-addresses', 'error-on-get-customer-addresses', 'post-customer-terms', 'error-on-post-customer-terms']);
  return base;
};
