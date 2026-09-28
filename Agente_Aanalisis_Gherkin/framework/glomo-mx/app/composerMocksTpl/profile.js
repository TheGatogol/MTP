/* eslint-disable complexity, max-statements, no-shadow */
'use strict';

module.exports = CONFIG => {
  const { SPINNERSPHERICA: createSpinner, getCountry } = require('./common/helpers/_utils');
  const ANALYTICS = require('./analytics/_profile')(CONFIG);
  const ANALYTICS_UNSUBSCRIBE = require('./analytics/_unsubscribe')(CONFIG);
  const analyticsFatca = require('./analytics/_fatcaValidation')();
  const analyticsFatcaValidationSurvey = require('./analytics/_fatcaValidationSurvey')();
  const ANALYTICS_KYC_VALIDATION = require('./analytics/_kycValidation')(CONFIG);
  const analyticKyc = require('./analytics/_kycValidationMx')();
  const analyticKycHighRisk = require('./analytics/_highRiskClient')();
  const ANALYTICS_REQUEST_FISCAL_DATA = require('./analytics/_requestFiscalData')(CONFIG);
  const ANALYTICS_RECIPIENTS = require('./analytics/_recipients')(CONFIG);
  const analyticsNationalIdValidation = require('./analytics/_nationalIdAndVideoselfie')();
  const ANALYTICS_PROFILE_RECIPIENTS = require('./analytics/_profileRecipients')(CONFIG);
  const analyticsUpdateRfc = require('./analytics/_profileUpdateRFC')(CONFIG);
  const analyticsCurp = require('./analytics/_curpPage')(CONFIG);
  const native = CONFIG.native || false;
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const localStorageApp = require('./common/_local-storage');
  const isNativeIos = CONFIG.nativeIos || false;
  const COUNTRY = getCountry();
  const API_AGGREGATOR_REQUESTS = {
    pe: [{
      key: 'info',
      endPoint: '',
      method: 'GET',
      params: {
        expand: 'avatars'
      }
    },
    {
      key: 'contactDetails',
      endPoint: 'contact-details',
      method: 'GET'
    }]
  };

  const getDetailItemActions = COUNTRY => ({
    ar: [
      {
        title: 'glomo-customer-item-action-confirm',
        event: 'confirm-detail',
        hiddenIf: 'isChecked'
      }
    ]
  }[COUNTRY] || []);

  const DETAIL_ITEM_ACTIONS = getDetailItemActions(COUNTRY);

  const getProfileClass = COUNTRY => ({
    ar: 'full-width-items'
  }[COUNTRY] || '');

  const PROFILE_CLASS = getProfileClass(COUNTRY);

  const getLastAccessDateFormat = COUNTRY => ({
    ar: 'DD/MM/YYYY [a las] hh:mm:ss a'
  }[COUNTRY] || 'DD/MM/YYYY hh:mm:ss a');

  const LAST_ACCESS_DATE_FORMAT = getLastAccessDateFormat(COUNTRY);

  const getConfirmMessageClass = COUNTRY => ({
    ar: 'profile-confirm-message'
  }[COUNTRY] || '');

  const CONFIRM_MESSAGE_CLASS = getConfirmMessageClass(COUNTRY);

  const getProductSelectorModalClass = COUNTRY => ({
    ar: 'full-width-items without-title'
  }[COUNTRY] || '');

  const PRODUCT_SELECTOR_MODAL_CLASS = (isNativeIos ? 'ios-top-padding ' : '') + getProductSelectorModalClass(COUNTRY);

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        in: {
          global_alert_manager_open_with_settings_spherica: {
            bind: 'openWithSettings'
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/profile',
      params: []
    },
    hash: 'profile-' + COUNTRY + '-' + CONFIG.environment,
    template: {
      tag: 'cells-template-coronita-spherica',
      properties: {
        extraHeaderClass: 'bg-light-grey',
        className: `bg-light-grey${isNativeIos ? ' ios-top-padding' : ''}`,
        disableEdgeSwipe: true,
        headerFixed: true,
        hasFooter: false,
        cellsConnections: {
          in: {
            __bridge_page_profile: {
              bind: 'reset'
            },
            profile_init_page: {
              bind: 'recalculateHeader'
            }
          }
        }
      }
    },
    components: [
      createSpinner(CONFIG),
      {
        zone: 'app__main',
        tag: 'cells-handle-life-cycle',
        type: 'UI',
        properties: {
          pageName: 'profile',
          cache: ['profileAvatar', 'profileChangeEmail', 'profileChangePassword'],
          private: true,
          tokenName: CONFIG.globalServices.requiredToken || 'tsec',
          customInitEvents: {
            'swipe-menu-enabled': false
          },
          cellsConnections: {
            in: {
              __bridge_page_profile: {
                bind: 'init'
              },
              __bridge_app: {
                bind: 'navigation'
              }
            },
            out: {
              app_error_access_token: {
                bind: 'access-token-error'
              },
              profile_init_page: {
                bind: 'init-page',
                analytics: ANALYTICS.PAGE_VIEW,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_UNSUBSCRIBE
              },
              profile_reset_page: {
                bind: 'reset'
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
        zone: 'app__header',
        tag: 'cells-molecule-header-spherica',
        type: 'UI',
        properties: {
          variant: 'primary-alt',
          className: 'header--grey',
          leftIcon: 'coronita:back-mini',
          leftIconSize: '24',
          leftIconText: 'cells-header-left-icon-text-profile',
          titleName: 'cells-header-title-profile',
          rightIcon: '',
          cellsConnections: {
            out: {
              navigation_profile_back_request: {
                bind: 'click-left-button'
              },
              open_modal_profile: {
                bind: 'click-right-button'
              },
              global_close_control_veil: {
                bind: 'click-left-button'
              }
            }
          }
        }
      },
      {
        zone: 'app__header',
        tag: 'glomo-navigation-handler',
        type: 'UI',
        properties: {
          backAction: 'back-to-dashboard',
          cellsConnections: {
            in: {
              navigation_profile_back_request: {
                bind: 'goBack'
              },
              __bridge_cancelled_back_navigation: {
                bind: 'goBack'
              }
            },
            out: {
              navigation_profile_to_dashboard: {
                bind: 'back-to-dashboard'
              },
              global_close_control_veil: {
                bind: 'back-to-dashboard'
              }
            },
            params: {
              continue: 'continue'
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'glomo-customer-profile-spherica',
        type: 'UI',
        properties: {
          sizeContactAvatar: '2xl',
          extraHelpIconClass: '',
          showEditAvatarButton: true,
          notWaitForCustomer: true,
          visibleUnsubscribeSection: true,
          mobileImgSource: 'images/ico_movil.svg',
          emailImgSource: 'images/mail.svg',
          className: PROFILE_CLASS,
          immutableProfile: false,
          enableEditEmail: false,
          hidePassword: true,
          hideMainPhone: false,
          hideMainEmail: false,
          hideMainAddress: true,
          disableAddNewPhone: false,
          disableAddNewEmail: false,
          disableAddNewAddress: false,
          hideCustomerSectionWhenCustomerIsNull: false,
          hideCustomerAvatarSection: false,
          hideShowDataSection: true,
          hidePrimaryIconButtons: false,
          hideSecondaryIconButtons: false,
          hideItemIcons: false,
          detailItemActions: DETAIL_ITEM_ACTIONS,
          showLastAccessDate: false,
          lastAccessDateFormat: LAST_ACCESS_DATE_FORMAT,
          viewAllWidthIndex: false,
          enablePassword: false,
          showHelpIcons: true,
          showPassword: false,
          enableEmailValidation: false,
          hideNoMobileHelpIcon: true,
          customerSectionTitle: 'glomo-customer-profile-personal-data',
          hideShowDataNotFullProfile: true,
          showNotFullProfileAddress: true,
          extraKeyContainerClass: 'reduce-key-container reduce-top-margin',
          reduceKeyContainerClass: 'reduce-key-container',
          showBirthData: true,
          showContractsInfoIcon: true,
          enableAddCustomerAddress: true,
          nonValidatedEmailClass: 'customer-non-validated-dark-item',
          showKycHighRiskPending: false,
          showKycHighRiskCompleted: false,
          showKycHighRiskIncomplete: false,
          cellsConnections: {
            in: {
              flag_minior_account: {
                bind: 'isGlomoMiniorAccount'
              },
              flag_parent_account: {
                bind: 'isGlomoParentAccount'
              },
              profile_unsubscribe_glomo_minior_account: {
                bind: 'visibleUnsubscribeSection'
              },
              profile_fiscal_data_glomo_minior_account: {
                bind: 'hideFiscalDataSection'
              },
              __bridge_page_profile: {
                bind: 'resetManualUnmaskedValues'
              },
              profile_has_participants_principal_account: {
                bind: 'hasRecipients'
              },
              get_accounts_example: {
                bind: 'dataAccounts'
              },
              accounts_client_error: {
                bind: 'showRecipientSectionError'
              },
              profile_manager_set_customer: {
                bind: 'customer'
              },
              profile_manager_show_top_info_message: {
                bind: 'showTopInfoMessageNotFullProfile'
              },
              profile_manager_set_info_box: {
                bind: 'topInfoMessageNotFullProfileSettings'
              },
              profile_manager_show_hide_personal_information_button: {
                bind: 'enableShowHidePersonalInformation'
              },
              profile_manager_enable_email_validation: {
                bind: 'enableEmailValidation'
              },
              profile_manager_set_customer_error: {
                bind: 'showPersonalInformationError'
              },
              profile_manager_set_contacts_error: {
                bind: 'showContactsSectionError'
              },
              profile_manager_set_address_error: {
                bind: 'showAddressError'
              },
              profile_manager_set_questionnaire_kyc_error: {
                bind: 'showKnowYourClientError'
              },
              profile_manager_change_personal_retry_message: {
                bind: 'personalInformationErrorMessage'
              },
              profile_manager_change_contacts_retry_message: {
                bind: 'contactsSectionErrorMessage'
              },
              profile_manager_change_address_retry_message: {
                bind: 'addressErrorMessage'
              },
              profile_manager_change_kyc_retry_message: {
                bind: 'knowYourClientErrorMessage'
              },
              profile_manager_hide_personal_retry_button: {
                bind: 'hidePersonalInformationRetryBtn'
              },
              profile_manager_hide_contacts_retry_button: {
                bind: 'hideContactsSectionRetryBtn'
              },
              profile_manager_hide_recipients_retry_button: {
                bind: 'hideRecipientsSectionRetryBtn'
              },
              profile_manager_hide_address_retry_button: {
                bind: 'hideAddressRetryBtn'
              },
              profile_manager_hide_kyc_retry_button: {
                bind: 'hideKnowYourClientRetryBtn'
              },
              profile_set_avatar_image_url: {
                bind: 'setAvatar'
              },
              profile_manager_set_edit_avatar_secction_flag: {
                bind: 'hideCustomerAvatarSection'
              },
              profile_manager_set_edit_avatar_button_flag: {
                bind: 'showEditAvatarButton'
              },
              profile_check_unmasked_contacts: {
                bind: 'checkUnmaskedContacts'
              },
              profile_contact_details_customer: {
                bind: 'customer'
              },
              profile_set_customer_detail: {
                bind: 'customer'
              },
              profile_reset_page: {
                bind: 'reset'
              },
              profile_modal_contact_detail_user_cancel: {
                bind: 'reset'
              },
              profile_modal_contact_detail_delete_accept: {
                bind: 'reset'
              },
              profile_set_customer_contacts: {
                bind: 'customerContactDetails'
              },
              profile_set_customer_kyc_questionnaire: {
                bind: 'customerKycQuestionnaire'
              },
              profile_set_customer_contacts_to_profile: {
                bind: 'userContactDetail'
              },
              profile_get_customer_contacts_unmasked_success: {
                bind: 'userContactDetail'
              },
              profile_get_customer_contacts_masked_success: {
                bind: 'userContactDetail'
              },
              profile_set_customer_addresses_profile: {
                bind: 'userAddressDetail'
              },
              profile_set_customer_contacts_main_phone: {
                bind: 'mainPhone'
              },
              profile_set_customer_contacts_main_email: {
                bind: 'mainEmail'
              },
              profile_set_customer_address: {
                bind: 'customerAddress'
              },
              profile_change_address_mask: {
                bind: 'changeAddressMask'
              },
              profile_get_customer_customer_success: {
                bind: '_updateContactParams'
              },
              profile_get_customer_address_success: {
                bind: '_updateAddressParams'
              },
              profile_contact_detail_wrong_otp_modal: {
                bind: 'unCheckSwitchButton'
              },
              global_profile_change_email_success: {
                bind: '_updateContactParams'
              },
              profile_customer_detail_confirm_success: {
                bind: 'onDetailConfirmSuccess'
              },
              profile_customer_detail_confirm_error: {
                bind: 'onDetailConfirmError'
              },
              profile_set_avatar_src: {
                bind: 'avatarSrc'
              },
              profile_set_avatar_image: {
                bind: 'avatar'
              },
              profile_set_data_protection_status: {
                bind: 'dataProtectionRegulationStatus'
              },
              profile_loading_avatar_error: {
                bind: 'showErrorImage'
              },
              profile_get_customer_fiscal_data: {
                bind: 'customerFiscalData'
              },
              profile_flag_customer_contracts: {
                bind: 'showContractsSection'
              },
              profile_flag_update_rfc: {
                bind: 'showUpdateRfcSection'
              },
              profile_flag_kyc_high_risk_flag_status: {
                bind: 'showKycHighRiskFlagStatus'
              },
              global_storage_get_loginData_success: {
                bind: 'setLoginDataStorage'
              },
              global_storage_get_loginData_error: {
                bind: 'setLoginDataStorage'
              }
            },
            out: {
              global_get_from_storage: {
                bind: 'get-local-storage'
              },
              global_set_in_storage: {
                bind: 'set-local-storage'
              },
              profile_request_unmask_contacts: {
                bind: 'glomo-customer-profile-unmask-contacts'
              },
              profile_request_mask_contacts: {
                bind: 'glomo-customer-profile-mask-contacts'
              },
              profile_request_unmask_address: {
                bind: 'glomo-customer-profile-unmask-address'
              },
              profile_request_mask_address: {
                bind: 'glomo-customer-profile-mask-address'
              },
              profile_add_customer_ine: {
                bind: 'glomo-customer-profile-add-identification'
              },
              profile_add_customer_curp: {
                bind: 'glomo-customer-profile-add-curp'
              },
              profile_add_customer_email: {
                bind: 'glomo-customer-profile-add-email'
              },
              profile_add_tax_residence_document: {
                bind: 'glomo-customer-profile-add-tax-residence'
              },
              profile_answer_kyc_questionnaire: {
                bind: 'glomo-customer-profile-add-know-your-client'
              },
              profile_edit_customer_identification: {
                bind: 'glomo-customer-profile-edit-identification'
              },
              profile_edit_customer_curp: {
                bind: 'glomo-customer-profile-edit-curp'
              },
              profile_add_customer_address: {
                bind: 'glomo-customer-profile-add-address'
              },
              profile_edit_customer_email: {
                bind: 'glomo-customer-profile-edit-email'
              },
              profile_edit_address: {
                bind: 'glomo-customer-profile-edit-customer-address'
              },
              profile_edit_tax_residence: {
                bind: 'glomo-customer-profile-edit-tax-residence'
              },
              profile_edit_know_your_client: {
                bind: 'glomo-customer-profile-edit-know-your-client'
              },
              profile_open_birthdate_info_modal: {
                bind: 'glomo-customer-profile-info-birth-date'
              },
              profile_open_curp_info_modal: {
                bind: 'glomo-customer-profile-info-curp'
              },
              profile_open_identification_info_modal: {
                bind: 'glomo-customer-profile-info-identification'
              },
              profile_open_address_info_modal: {
                bind: 'glomo-customer-profile-info-customer-address'
              },
              profile_open_mobile_info_modal: {
                bind: 'glomo-customer-profile-info-modal'
              },
              profile_open_tax_residence_info_modal: {
                bind: 'glomo-customer-profile-info-tax-residence'
              },
              profile_open_kyc_info_modal: {
                bind: 'glomo-customer-profile-info-know-your-client'
              },
              profile_open_customer_contracts_info_modal: {
                bind: 'glomo-customer-profile-info-contracts'
              },
              profile_open_recipients_info_modal: {
                bind: 'glomo-customer-profile-info-recipients'
              },
              profile_retry_load_personal_information: {
                bind: 'glomo-customer-profile-retry-load-personal-information'
              },
              profile_retry_load_contacts: {
                bind: 'glomo-customer-profile-retry-load-customer-contacts'
              },
              profile_retry_load_address: {
                bind: 'glomo-customer-profile-retry-load-customer-address'
              },
              profile_retry_load_know_your_client: {
                bind: 'glomo-customer-profile-retry-load-know-your-client'
              },
              profile_retry_load_recipients: {
                bind: 'glomo-customer-profile-retry-load-recipients'
              },
              navigation_profile_to_customer_contracts: {
                bind: 'glomo-customer-profile-view-contracts',
                link: {
                  page: 'customerContracts'
                }
              },
              reset_contracts_channel: {
                bind: 'glomo-customer-profile-view-contracts'
              },
              navigation_profile_to_update_rfc: {
                bind: 'glomo-customer-profile-request-to-update-rfc',
                link: {
                  page: 'profileUpdateRfc'
                },
                analytics: analyticsUpdateRfc.appOnClickStartInit
              },
              navigation_profile_to_change_avatar: {
                bind: 'glomo-customer-profile-edit-contact-avatar',
                link: {
                  page: 'profileAvatar'
                }
              },
              navigation_profile_to_change_email: {
                bind: 'glomo-customer-profile-edit-contact-detail',
                link: {
                  page: 'profileContactDetail',
                  params: {
                    contactType: 'contactType',
                    contactId: 'contactId'
                  }
                }
              },
              navigation_profile_to_change_password: {
                bind: 'glomo-customer-profile-change-password',
                link: {
                  page: 'keyRecoveryUpdate'
                }
              },
              navigation_profile_to_unsubscribe: {
                bind: 'glomo-customer-profile-unsubscribe',
                link: {
                  page: 'unsubscribe'
                },
                analytics: ANALYTICS_UNSUBSCRIBE.PAGE_VIEW,
                featureFlag: ANALYTICS_UNSUBSCRIBE.ANALYTICS_FEATURE_FLAG
              },
              analytics_internal_link_unsubscribe: {
                bind: 'analytics-glomo-customer-profile-unsubscribe-link',
                analytics: ANALYTICS.INTERNAL_LINK_UNSUBSCRIBE,
                featureFlag: ANALYTICS.ANALYTICS_FEATURE_FLAG_UNSUBSCRIBE
              },
              profile_toggle_unmasked_switch: {
                bind: 'cells-switch-changed'
              },
              global_profile_info_secure_phone: {
                bind: 'glomo-customer-profile-info-secure-phone'
              },
              global_profile_info_main_mail: {
                bind: 'glomo-customer-profile-info-main-mail'
              },
              profile_info_new_phone: {
                bind: 'glomo-customer-profile-add-new-phone'
              },
              profile_view_all_phones_items_modal: {
                bind: 'glomo-customer-profile-view-all-phone'
              },
              profile_view_all_email_items_modal: {
                bind: 'glomo-customer-profile-view-all-email'
              },
              profile_view_all_address_items_modal: {
                bind: 'glomo-customer-profile-view-all-address'
              },
              profile_info_new_email: {
                bind: 'glomo-customer-profile-add-new-email'
              },
              profile_delete_contact: {
                bind: 'glomo-customer-profile-delete-info'
              },
              profile_customer_detail_confirm: {
                bind: 'confirm-detail'
              },
              profile_contact_detail_confirm_success: {
                bind: 'customer-detail-confirm-success-message'
              },
              profile_contact_detail_confirm_error: {
                bind: 'customer-detail-confirm-error-message'
              },
              update_phone_product_selector_product: {
                bind: 'update-phone-product-selector-product'
              },
              update_email_product_selector_product: {
                bind: 'update-email-product-selector-product'
              },
              update_address_product_selector_product: {
                bind: 'update-address-product-selector-product'
              },
              profile_navigate_to_data_protection_page: {
                bind: 'cells-product-more-info-change-button-clicked',
                link: {
                  page: 'dataProtectionRegulation'
                }
              },
              profile_navigate_to_recipient_init_page: {
                bind: 'glomo-customer-profile-edit-recipient-button-click'
              },
              global_profile_avatar_retry_fetch_avatar: {
                bind: 'glomo-customer-profile-retry-avatar-click'
              },
              profile_send_validation_reminder_email: {
                bind: 'glomo-customer-profile-validation-reminder'
              },
              profile_request_unmask_tax_data: {
                bind: 'glomo-customer-profile-show-fiscal-data'
              },
              profile_request_mask_tax_data: {
                bind: 'glomo-customer-profile-hide-fiscal-data'
              },
              profile_edit_tax_data: {
                bind: 'glomo-customer-profile-edit-fiscal-data'
              },
              profile_tax_data_info_modal: {
                bind: 'glomo-customer-profile-info-fiscal-data'
              },
              profile_financial_relations_info_modal: {
                bind: 'glomo-customer-profile-info-car-know-your-client'
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
          host: CONFIG.globalServices.host,
          contactsBookApiVersion: CONFIG.globalServices.versions.contactsBook,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          customersContactDetailsApiVersion: CONFIG.globalServices.versions.customersV1,
          customerAddressesApiVersion: CONFIG.globalServices.versions.customersV1,
          contractDocumentsApiVersion: CONFIG.globalServices.versions.contractDocuments,
          apiAggregatorApiVersion: CONFIG.globalServices.versions.apiAggregator,
          apiggregatorApiVersion: CONFIG.globalServices.versions.apiAggregator,
          apiAggregatorRequests: API_AGGREGATOR_REQUESTS[COUNTRY],
          native: !!CONFIG.native,
          phoneNumber: CONFIG.phoneNumberContact,
          disableContactDetailsOnLoad: true,
          allowToAddAddress: true,
          forceToAppendEmailWithoutItem: true,
          forceToAppendEmailWithoutValue: true,
          currentInfoEnabled: true,
          disabledUpdatedUser: true,
          cellsConnections: {
            in: {
              profile_manager_request_contract_documents_dossiers: {
                bind: 'getContractingDossiers'
              },
              profile_manager_request_customers_customer: {
                bind: 'getCustomer'
              },
              profile_manager_request_customers_customer_contacts: {
                bind: 'getCustomerContacts'
              },
              profile_change_customer_contacts_api_version: {
                bind: 'customersContactDetailsApiVersion'
              },
              profile_manager_request_customers_customer_addresses: {
                bind: 'getCustomerAddresses'
              },
              profile_manager_request_customers_questionnaire: {
                bind: 'getQuestionnaire'
              },
              profile_retry_load_personal_information: {
                bind: 'getCustomer'
              },
              profile_customers_get_unmasked_contact_details_success: {
                bind: '_getContactDetailsCustomer'
              },
              profile_customers_get_unmasked_address_success: {
                bind: 'parseGetAddresses'
              },
              profile_toggle_unmasked_switch: {
                bind: '_toggleMaskedContactDetails'
              },
              global_profile_phone_detail_area_codes: {
                bind: 'phoneDetailInfo'
              },
              profile_customers_phone_info_set_from_regional_codes: {
                bind: 'getCustomerContacts'
              },
              global_profile_change_email_success: {
                bind: 'getCustomerContactsUnmasked'
              },
              profile_delete_contact: {
                bind: 'confirmDeleteContactDetail'
              },
              profile_delete_contact_detail_phone: {
                bind: 'confirmDeleteContactDetail'
              },
              profile_delete_contact_detail_email: {
                bind: 'confirmDeleteContactDetail'
              },
              profile_delete_contact_detail_address: {
                bind: 'confirmDeleteContactDetail'
              },
              profile_modal_contact_detail_delete_accept: {
                bind: 'deleteContactDetailAccepted'
              },
              profile_contact_detail_reload: {
                bind: 'reloadContactDetail'
              },
              profile_send_validation_reminder_email: {
                bind: 'sendNonValidatedEmailReminder'
              },
              open_modal_profile: {
                bind: 'showModalProfile'
              },
              profile_customer_detail_confirm: {
                bind: 'confirmDetail'
              },
              profile_init_page: {
                bind: 'getCustomerAvatar'
              },
              global_profile_avatar_fetch_avatar_success: {
                bind: 'getCustomerAvatar'
              },
              global_profile_avatar_retry_fetch_avatar: {
                bind: 'getCustomerAvatar'
              },
              validated_email_success_navigation_to_profile: {
                bind: 'getCustomerContacts'
              },
              global_validate_email_cancel: {
                bind: 'getCustomerContacts'
              }
            },
            out: {
              profile_contract_documents_get_list_dossiers_error: {
                bind: 'customers-response-get-list-dossiers-error'
              },
              profile_customers_get_customer_success: {
                bind: 'customers-response-get-customer-success'
              },
              profile_customers_get_customer_error: {
                bind: 'customers-response-get-customer-error'
              },
              profile_customers_get_masked_contact_details_success: {
                bind: 'customers-response-get-contact-detail-success'
              },
              profile_customers_get_contact_details_error: {
                bind: 'customers-response-get-contact-detail-error'
              },
              profile_customers_get_masked_address_success: {
                bind: 'customers-response-get-addresses-success'
              },
              profile_customers_get_masked_address_error: {
                bind: 'customers-response-get-addresses-error'
              },
              profile_customers_get_questionnaires_kyc_success: {
                bind: 'customers-response-get-questionnaires-kyc-success'
              },
              profile_customers_get_questionnaires_kyc_error: {
                bind: 'customers-response-get-questionnaires-kyc-error'
              },
              profile_contract_documents_get_list_dossiers_success: {
                bind: 'customers-response-get-list-dossiers-success'
              },
              profile_customers_request_customer_contacts_unmasked: {
                bind: 'customers-request-contacts-unmasked'
              },
              profile_contact_detail_additional_information_work: {
                bind: 'additional-information-work'
              },
              profile_contact_detail_additional_information_phone: {
                bind: 'additional-information-phonehome'
              },
              global_open_profile_modal: {
                bind: 'open-modal-profile'
              },
              close_control_veil: {
                bind: 'close-control-veil'
              },
              profile_set_customer_detail: {
                bind: 'customer-changed'
              },
              profile_customers_phone_info_set_from_regional_codes: {
                bind: 'glomo-customers-phone-info-set-from-regional-codes'
              },
              profile_set_customer_contacts_to_profile: {
                bind: 'customer-contacts-to-profile-changed'
              },
              profile_set_customer_addresses_profile: {
                bind: 'customer-addresses-to-profile-changed'
              },
              profile_set_customer_contacts_main_phone: {
                bind: 'customer-main-phone-changed'
              },
              profile_set_customer_contacts_main_email: {
                bind: 'customer-main-email-changed'
              },
              profile_get_customer_contacts_unmasked_success: {
                bind: 'on-fetch-contact-details-unmasked-successful'
              },
              profile_get_customer_contacts_masked_success: {
                bind: 'on-fetch-contact-details-masked-successful'
              },
              profile_get_customer_contacts_edit_contacts_button: {
                bind: 'contact-details-enabled-edition'
              },
              profile_contact_detail_reload: {
                bind: 'glomo-customers-contact-detail-reload-profile'
              },
              profile_contact_detail_add_contact_detail_success: {
                bind: 'contact-details-post-response-success'
              },
              global_contact_detail_modify_contact_detail_success: {
                bind: 'contact-details-patch-response-success'
              },
              profile_contact_detail_delete_contact_detail_success: {
                bind: 'contact-details-delete-response-success'
              },
              global_generic_error: {
                bind: 'customers-generic-error'
              },
              profile_check_unmasked_contacts: {
                bind: 'customers-generic-error'
              },
              profile_contact_details_confirm_delete: {
                bind: 'glomo-customer-pe-dm-confirm-delete-contact'
              },
              profile_contact_details_customer: {
                bind: 'glomo-customers-pe-dm-customer-info'
              },
              global_send_email_validation_reminder_success: {
                bind: 'customer-email-validation-reminder-sended'
              },
              profile_send_email_validation_reminder_error: {
                bind: 'post-contact-request-validation-error'
              },
              profile_customer_detail_confirm_success: {
                bind: 'customer-detail-confirm-success'
              },
              profile_customer_detail_confirm_error: {
                bind: 'customer-detail-confirm-error'
              },
              profile_set_avatar_src: {
                bind: 'set-avatar-customer'
              },
              profile_set_avatar_image: {
                bind: 'set-profile-image'
              },
              profile_loading_avatar_error: {
                bind: 'profile-loading-avatar-error'
              },
              profile_avatar_error: {
                bind: 'profile-avatar-error'
              }
            },
            params: {
              customerId: 'global_user_id',
              reloadContacDetails: 'reloadContacDetails',
              avatarId: 'avatarId',
              clientId: 'global_client_id'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'glomo-profile-manager-mx',
        familyPath: '@glomo-web-components/glomo-profile-manager',
        render: 'litElement',
        properties: {
          isSpherica: true,
          isNativeIos,
          excludedProductIds: [ 'PT' ],
          routeParams: {
            editAvatar: true,
            editINE: true,
            editAddress: true,
            updateCustomerPersonalInfo: true,
            editCurp: true,
            editEmail: true,
            editFatca: true,
            editKYC: true,
            editTaxData: true
          },
          cellsConnections: {
            in: {
              flag_minior_account: {
                bind: 'isGlomoMiniorAccount'
              },
              flag_parent_account: {
                bind: 'isGlomoParentAccount'
              },
              global_financial_overview_details: {
                bind: 'financialOverviewDetails'
              },
              profile_init_page: {
                bind: 'init'
              },
              navigation_profile_to_dashboard: {
                bind: 'reset'
              },
              profile_reset_operatives: {
                bind: 'reset'
              },
              global_storage_get_new_avatar_profile_success: {
                bind: 'sendAvatarProfile'
              },
              global_storage_get_new_avatar_profile_error: {
                bind: 'sendAvatarProfile'
              },
              global_storage_get_loginData_success: {
                bind: 'handleLoginData'
              },
              global_storage_get_loginData_error: {
                bind: 'handleLoginData'
              },
              global_storage_get_know_your_client_exception_success: {
                bind: 'performKycException'
              },
              profile_perform_kyc_update: {
                bind: 'performKycUpdate'
              },
              profile_contract_documents_get_list_dossiers_success: {
                bind: 'handleListContractingDossiers'
              },
              profile_contract_documents_get_list_dossiers_error: {
                bind: 'handleDossiersError'
              },
              profile_accounts_get_documentation_dossiers_success: {
                bind: 'handleListDocumentationDossiers'
              },
              profile_accounts_get_documentation_dossiers_error: {
                bind: 'handleListDocumentationDossiersError'
              },
              global_account_documents_dossiers_data: {
                bind: 'handleListDocumentationDossiers'
              },
              get_accounts_documents_dossiers_error: {
                bind: 'handleListDocumentationDossiersError'
              },
              profile_customers_get_customer_success: {
                bind: 'handleGetCustomer'
              },
              profile_customers_get_customer_error: {
                bind: 'handleGetCustomerError'
              },
              profile_customers_get_masked_contact_details_success: {
                bind: 'handleGetCustomerContacts'
              },
              profile_customers_get_contact_details_error: {
                bind: 'handleGetCustomerContactsError'
              },
              profile_customers_get_unmasked_contact_details_error: {
                bind: 'handleGetCustomerContactsUnmaskedError'
              },
              profile_customers_get_masked_address_success: {
                bind: 'handleGetCustomerAddresses'
              },
              profile_customers_get_masked_address_error: {
                bind: 'handleGetAddressesError'
              },
              profile_customers_get_unmasked_address_error: {
                bind: 'handleGetAddressesUnmaskedError'
              },
              profile_customers_get_questionnaires_kyc_success: {
                bind: 'handleKycQuestionnaire'
              },
              profile_customers_get_questionnaires_kyc_error: {
                bind: 'handleKycQuestionnaireError'
              },
              profile_request_unmask_contacts: {
                bind: 'unmaskCustomerContacts'
              },
              profile_request_mask_contacts: {
                bind: 'maskCustomerContacts'
              },
              profile_request_unmask_address: {
                bind: 'unmaskCustomerAddress'
              },
              profile_request_mask_address: {
                bind: 'maskCustomerAddress'
              },
              profile_retry_load_contacts: {
                bind: 'retryContactsRequest'
              },
              profile_retry_load_address: {
                bind: 'retryAddressesRequest'
              },
              profile_retry_load_know_your_client: {
                bind: 'retryKycQuestionnaireRequest'
              },
              profile_retry_load_recipients: {
                bind: 'retryRecipientsRequest'
              },
              profile_open_birthdate_info_modal: {
                bind: 'showBirthDateInfomodal'
              },
              profile_open_curp_info_modal: {
                bind: 'showCurpModal'
              },
              profile_open_identification_info_modal: {
                bind: 'showIneModal'
              },
              profile_open_address_info_modal: {
                bind: 'showAddressInfoModal'
              },
              profile_open_mobile_info_modal: {
                bind: 'showMobileInfoModal'
              },
              profile_open_tax_residence_info_modal: {
                bind: 'showTaxResidenceInfoModal'
              },
              profile_open_recipients_info_modal: {
                bind: 'showRecipientModal'
              },
              profile_open_kyc_info_modal: {
                bind: 'showKycInfoModal'
              },
              profile_open_customer_contracts_info_modal: {
                bind: 'showContractsInfoModal'
              },
              profile_add_customer_ine: {
                bind: 'sendDataIne'
              },
              profile_add_customer_curp: {
                bind: 'sendDataCurp'
              },
              profile_add_customer_email: {
                bind: 'addEmail'
              },
              profile_add_tax_residence_document: {
                bind: 'addTaxResidence'
              },
              profile_answer_kyc_questionnaire: {
                bind: 'addKnowYourclient'
              },
              profile_add_customer_address: {
                bind: 'sendDataAddress'
              },
              profile_edit_customer_identification: {
                bind: 'sendDataIne'
              },
              profile_edit_customer_curp: {
                bind: 'sendDataCurp'
              },
              profile_edit_customer_email: {
                bind: 'editEmail'
              },
              profile_edit_address: {
                bind: 'sendDataAddress'
              },
              profile_edit_tax_residence: {
                bind: 'editTaxResidence'
              },
              profile_edit_know_your_client: {
                bind: 'editKnowYourClient'
              },
              profile_exit_on_blocking_error: {
                bind: 'handleDossiersErrorDismiss'
              },
              profile_exit_on_blocking_error_cross: {
                bind: 'handleDossiersErrorDismiss'
              },
              profile_retry_load_personal_information: {
                bind: 'showVeil'
              },
              post_avatar_response_success: {
                bind: 'updateAvatarSuccess'
              },
              profile_avatar_accept_image_to_post: {
                bind: 'newAvatarCreated'
              },
              profile_principal_account_get_participants_success: {
                bind: 'handleParticipantsResponse'
              },
              profile_principal_account_get_participants_error: {
                bind: 'handleParticipantsError'
              },
              fatca_validation_TAX_RESIDENCE_JUST_UPDATED: {
                bind: 'taxResidenceJustUpdated'
              },
              global_storage_get_monoproduct_success: {
                bind: 'setStorageMonoproduct'
              },
              global_storage_get_monoproduct_error: {
                bind: 'hasMonoproductStorageError'
              },
              global_storage_get_isMonoEnterpriseDebitCardClient_success: {
                bind: 'isTDDEMonoproduct'
              },
              global_storage_get_isMonoEnterpriseDebitCardClient_error: {
                bind: 'isTDDEMonoproduct'
              },
              global_feature_flag_profile_sections: {
                bind: 'profileSectionFlags'
              },
              profile_tax_data_info_modal: {
                bind: 'showTaxDataInfoModal'
              },
              profile_financial_relations_info_modal: {
                bind: 'showFinancialRelationsInfoModal'
              },
              profile_request_unmask_tax_data: {
                bind: 'requestCustomerTaxData'
              },
              profile_request_mask_tax_data: {
                bind: 'mapMaskedTaxData'
              },
              profile_get_customer_fiscal_data_success: {
                bind: 'handleGetCustomerTaxData'
              },
              profile_edit_tax_data: {
                bind: 'sendEditCustomerTaxData'
              },
              global_feature_flag_collection_updated: {
                bind: 'validateActiveFeatures'
              },
              profile_customers_get_customers: {
                bind: 'handleGetCustomers'
              },
              profile_customers_error_get_customers: {
                bind: 'handleCustomerError'
              },
              request_fiscal_data_confirm_tax_data_button_clicked: {
                bind: 'handleGetCustomerTaxData'
              },
              profile_navigate_to_recipient_init_page: {
                bind: 'validateRecipientsProfileFlag'
              },
              profile_navigate_to_kyc_high_risk: {
                bind: 'navigateToKycHighRiskFromFlags'
              },
              get_high_risk_customers_tasks_data_success: {
                bind: 'onKycRelationsTaskSuccess'
              },
              validated_email_success_navigation_to_profile: {
                bind: 'prepareContactsReload'
              },
              global_validate_email_cancel: {
                bind: 'prepareContactsReload'
              }
            },
            out: {
              global_alert_manager_open_with_settings_spherica: {
                bind: 'open-alert-manager-with-settings-spherica'
              },
              global_set_in_storage: {
                bind: 'set-local-storage'
              },
              get_kyc_relations_status: {
                bind: 'glomo-profile-manager-get-kyc-relations-status'
              },
              profile_unsubscribe_glomo_minior_account: {
                bind: 'unsubscribe-section-glomo-minior'
              },
              profile_fiscal_data_glomo_minior_account: {
                bind: 'hide-fiscal-section-glomo-minior'
              },
              profile_has_participants_principal_account: {
                bind: 'profile-manager-has-recipients-principal-account'
              },
              get_accounts_example: {
                bind: 'accounts-client'
              },
              accounts_client_error: {
                bind: 'accounts-client-error'
              },
              global_get_from_storage: {
                bind: 'get-local-storage'
              },
              profile_manager_set_edit_avatar_secction_flag: {
                bind: 'glomo-customer-profile-set-edit-avatar-section-flag'
              },
              profile_manager_set_edit_avatar_button_flag: {
                bind: 'glomo-customer-profile-set-edit-avatar-button-flag'
              },
              profile_manager_request_contract_documents_dossiers: {
                bind: 'glomo-profile-manager-request-list-contracting-dossiers'
              },
              profile_manager_request_documentation_dossiers: {
                bind: 'glomo-profile-manager-request-list-documentation-dossiers'
              },
              profile_manager_request_customers_customer: {
                bind: 'glomo-profile-manager-request-customer'
              },
              profile_manager_request_customers_customer_contacts: {
                bind: 'glomo-profile-manager-request-contacts'
              },
              profile_manager_request_customers_customer_addresses: {
                bind: 'glomo-profile-manager-request-addresses'
              },
              profile_manager_request_customers_questionnaire: {
                bind: 'glomo-profile-manager-request-questionnaires'
              },
              profile_manager_show_hide_personal_information_button: {
                bind: 'show-hide-personal-information-changed'
              },
              profile_manager_enable_email_validation: {
                bind: 'enable-email-validation-changed'
              },
              profile_manager_set_customer_error: {
                bind: 'personal-info-error-active-changed'
              },
              profile_manager_set_contacts_error: {
                bind: 'customer-contacts-error-active-changed'
              },
              profile_manager_set_address_error: {
                bind: 'address-error-active-changed'
              },
              profile_manager_set_questionnaire_kyc_error: {
                bind: 'kyc-error-active-changed'
              },
              profile_manager_change_personal_retry_message: {
                bind: 'glomo-profile-manager-change-customer-retry-message'
              },
              profile_manager_change_contacts_retry_message: {
                bind: 'glomo-profile-manager-change-contacts-retry-message'
              },
              profile_manager_change_address_retry_message: {
                bind: 'glomo-profile-manager-change-address-retry-message'
              },
              profile_manager_change_kyc_retry_message: {
                bind: 'glomo-profile-manager-change-kyc-retry-message'
              },
              profile_manager_hide_personal_retry_button: {
                bind: 'glomo-profile-manager-hide-customer-retry-button'
              },
              profile_manager_hide_contacts_retry_button: {
                bind: 'glomo-profile-manager-hide-contacts-retry-button'
              },
              profile_manager_hide_recipients_retry_button: {
                bind: 'glomo-profile-manager-hide-recipients-retry-button'
              },
              profile_manager_hide_address_retry_button: {
                bind: 'glomo-profile-manager-hide-address-retry-button'
              },
              profile_manager_hide_kyc_retry_button: {
                bind: 'glomo-profile-manager-hide-kyc-retry-button'
              },
              profile_manager_set_customer: {
                bind: 'glomo-profile-manager-set-customer'
              },
              profile_change_customer_contacts_api_version: {
                bind: 'glomo-customer-profile-change-customer-contacts-api-version'
              },
              profile_manager_show_top_info_message: {
                bind: 'glomo-profile-manager-show-info-box'
              },
              profile_manager_set_info_box: {
                bind: 'glomo-profile-manager-set-info-box'
              },
              profile_unmask_contacts_detail: {
                bind: 'glomo-profile-manager-request-contacts-unmasked'
              },
              profile_unmask_address: {
                bind: 'glomo-profile-manager-request-address-unmasked'
              },
              profile_set_customer_contacts: {
                bind: 'glomo-profile-manager-set-contacts'
              },
              profile_set_customer_address: {
                bind: 'glomo-profile-manager-set-address'
              },
              profile_set_customer_kyc_questionnaire: {
                bind: 'glomo-profile-manager-set-kyc'
              },
              profile_change_address_mask: {
                bind: 'glomo-profile-manager-change-address-mask'
              },
              profile_set_account_id: {
                bind: 'profile-manager-send-account-id'
              },
              profile_request_list_participants: {
                bind: 'profile-manager-list-participants'
              },
              profile_flag_kyc_high_risk_flag_status: {
                bind: 'feature-profile-kyc-high-risk-flag-status'
              },
              navigation_profile_to_update_national_id: {
                bind: 'glomo-profile-manager-routes-go-ine',
                link: {
                  page: 'updateNationalId'
                }
              },
              global_navigation_to_national_id_validation: {
                bind: 'glomo-profile-manager-routes-go-national-id-validation',
                link: {
                  page: 'nationalIdAndVideoselfie'
                },
                analytics: analyticsNationalIdValidation.getAppOnClickStart(false)
              },
              navigation_profile_to_address_validation: {
                bind: 'glomo-profile-manager-edit-customer-address',
                link: {
                  page: 'updateAddressPage'
                }
              },
              navigation_profile_to_curp_validation: {
                bind: 'glomo-profile-manager-edit-customer-curp',
                link: {
                  page: 'curpPage'
                }
              },
              navigation_profile_to_postal_address_management: {
                bind: 'glomo-profile-postal-address-management',
                link: {
                  page: 'profileAddressManagement'
                },
                analytics: analyticsCurp.appOnClickStartChangeInstruction
              },
              navigation_profile_to_fatca_validation: {
                bind: 'glomo-profile-manager-routes-go-fatca',
                link: {
                  page: 'fatcaValidation'
                },
                analytics: analyticsFatca._getAppOnClickStart
              },
              navigation_to_fatca_validation_survey: {
                bind: 'glomo-profile-manager-routes-go-fatca-survey',
                link: {
                  page: 'fatcaValidationSurvey'
                },
                analytics: analyticsFatcaValidationSurvey.getAppOnClickStart(false)
              },
              navigation_profile_to_kyc_validation: {
                bind: 'glomo-profile-manager-routes-go-kyc',
                link: {
                  page: 'kycValidation'
                },
                analytics: ANALYTICS_KYC_VALIDATION.appOnClickStart,
                featureFlag: ANALYTICS_KYC_VALIDATION.analyticsFeatureFlag
              },
              navigation_profile_to_kyc_validation_mx: {
                bind: 'glomo-profile-manager-routes-go-kyc-validation',
                link: {
                  page: 'kycValidationMx'
                },
                analytics: analyticKyc.getAppOnClickStartProfile
              },
              navigation_profile_to_kyc_high_risk_mx: {
                bind: 'glomo-profile-manager-routes-go-kyc-high-risk',
                link: {
                  page: 'kycHighRisk'
                },
                analytics: analyticKycHighRisk.getAppOnClickStartMyProfile
              },
              navigation_profile_to_update_email: {
                bind: 'glomo-profile-manager-routes-go-email',
                link: {
                  page: 'updateEmailPage'
                }
              },
              profile_show_full_screen_modal: {
                bind: 'glomo-profile-manager-open-full-modal'
              },
              open_control_veil: {
                bind: 'profile-manager-open-veil'
              },
              close_control_veil: {
                bind: 'profile-manager-close-veil'
              },
              profile_set_avatar_image_url: {
                bind: 'glomo-customer-profile-set-avatar-image-url'
              },
              global_close_control_veil: {
                bind: 'glomo-profile-manager-cancel-otp',
                link: {
                  page: 'dashboard',
                  cleanUntil: 'dashboard',
                  skipHistory: true
                }
              },
              profile_get_customer_fiscal_data: {
                bind: 'glomo-profile-manager-set-customer-fiscal-data'
              },
              profile_request_customer_fiscal_data: {
                bind: 'glomo-profile-request-tax-data'
              },
              navigation_profile_to_edit_tax_data: {
                bind: 'glomo-profile-edit-tax-data-event',
                link: {
                  page: 'requestFiscalData'
                },
                analytics: ANALYTICS_REQUEST_FISCAL_DATA.APP_ON_CLICK_START
              },
              profile_flag_customer_contracts: {
                bind: 'feature-profile-customer-contracts'
              },
              profile_flag_update_rfc: {
                bind: 'feature-profile-customer-update-rfc'
              },
              profile_manager_request_customers_customers: {
                bind: 'glomo-profile-manager-request-customers'
              },
              profile_navigate_to_recipient_init_handler: {
                bind: 'glomo-profile-manager-routes-go-recipients-init',
                analytics: ANALYTICS_RECIPIENTS.APP_ON_CLICK_START,
                link: {
                  page: 'recipientsInit'
                }
              },
              navigation_profile_to_profile_recipient: {
                bind: 'glomo-profile-manager-routes-go-profile-recipients',
                analytics: ANALYTICS_PROFILE_RECIPIENTS.appOnClickStartRecipients(),
                link: {
                  page: 'profileRecipients'
                }
              }
            },
            params: {
              customerId: 'global_user_id',
              clientId: 'global_client_id'
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'cells-dm-global-apis-accounts-bgadpmock',
        properties: {
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          headers: { 'Accept-Language': 'es' },
          native,
          cellsConnections: {
            in: {
              profile_manager_request_documentation_dossiers: {
                bind: 'getDocumentationDossiers'
              },
              profile_request_list_participants: {
                bind: 'getAccountParticipants'
              },
              profile_set_account_id: {
                bind: 'accountId'
              }
            },
            out: {
              profile_accounts_get_documentation_dossiers_success: {
                bind: 'get-documentation-dossiers-response'
              },
              profile_accounts_get_documentation_dossiers_error: {
                bind: 'error-on-get-documentation-dossiers'
              },
              profile_principal_account_get_participants_success: {
                bind: 'set-account-participants'
              },
              profile_principal_account_get_participants_error: {
                bind: 'error-on-get-participants'
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
          host: CONFIG.globalServices.host,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          customersApiVersion: CONFIG.globalServices.versions.customersV1,
          headers: { 'Accept-Language': 'es' },
          native,
          customersContactDetailsApiVersion: CONFIG.globalServices.versions.customersV1,
          customerAddressesApiVersion: CONFIG.globalServices.versions.customersV1,
          cellsConnections: {
            in: {
              profile_unmask_contacts_detail: {
                bind: 'getCustomerContacts'
              },
              profile_unmask_address: {
                bind: 'getCustomerAddresses'
              },
              profile_send_account_id: {
                bind: 'accountId'
              },
              profile_manager_request_customers_customers: {
                bind: 'getCustomers'
              }
            },
            out: {
              profile_customers_get_unmasked_contact_details_success: {
                bind: 'set-customer-contacts'
              },
              profile_customers_get_unmasked_contact_details_error: {
                bind: 'error-on-get-customer-contacts'
              },
              profile_customers_get_unmasked_address_success: {
                bind: 'set-customer-addresses'
              },
              profile_customers_get_unmasked_address_error: {
                bind: 'error-on-get-customer-addresses'
              },
              profile_customers_get_customers: {
                bind: 'set-customers'
              },
              profile_customers_error_get_customers: {
                bind: 'error-on-get-customers'
              }
            },
            params: {
              customerId: 'global_user_id'
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          dataType: 'email',
          type: 'success',
          autoHide: true,
          fullHeight: true,
          time: 3000,
          message: 'cells-global-profile-email-updated',
          messageDisabled: true,
          cellsConnections: {
            in: {
              global_profile_change_email_success: {
                bind: 'open'
              },
              global_profile_change_password_success: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          type: 'success',
          autoHide: true,
          fullHeight: true,
          time: 3000,
          message: 'cells-global-profile-password-updated',
          messageDisabled: true,
          cellsConnections: {
            in: {
              global_profile_change_password_success: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          type: 'success',
          autoHide: true,
          fullHeight: true,
          time: 3000,
          message: 'glomo-profile-email-validation-sended-txt',
          messageDisabled: true,
          cellsConnections: {
            in: {
              global_send_email_validation_reminder_success: {
                bind: 'open'
              }
            },
            out: {
            }
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          autoHide: true,
          time: 4000,
          type: 'success',
          cellsConnections: {
            in: {
              profile_contact_detail_add_contact_detail_success: {
                bind: 'open'
              },
              global_contact_detail_modify_contact_detail_success: {
                bind: 'open'
              },
              profile_contact_detail_delete_contact_detail_success: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          type: 'success',
          autoHide: true,
          time: 4000,
          fullHeight: true,
          message: 'glomo-put-avatar-success-message',
          messageDisabled: false,
          className: CONFIRM_MESSAGE_CLASS,
          cellsConnections: {
            in: {
              global_profile_avatar_fetch_avatar_success: {
                bind: 'open'
              },
              profile_contact_detail_confirm_success: {
                bind: 'open'
              }
            },
            out: {}
          }
        }
      },
      {
        zone: 'app__transactional',
        type: 'UI',
        tag: 'cells-bottom-modal-message',
        properties: {
          type: 'error',
          autoHide: true,
          time: 4000,
          className: CONFIRM_MESSAGE_CLASS,
          cellsConnections: {
            in: {
              profile_contact_detail_confirm_error: {
                bind: 'open'
              },
              profile_avatar_error: {
                bind: 'open'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-product-selector-modal',
        type: 'UI',
        properties: {
          updateTitleModal: false,
          showCloseModalButton: true,
          closeButtonLabel: 'Cerrar',
          productType: 'phone',
          modalTitle: 'glomo-profile-contact-detail-aditional_phones_title',
          visibleChars: 4,
          activateHeaderColor: true,
          className: PRODUCT_SELECTOR_MODAL_CLASS,
          hideItemIcons: false,
          detailItemActions: DETAIL_ITEM_ACTIONS,
          hideOutQuantities: true,
          cellsConnections: {
            in: {
              profile_view_all_phones_items_modal: {
                bind: 'treatProducts'
              },
              profile_get_customer_contacts_unmasked_success: {
                bind: 'enableButton'
              },
              update_phone_product_selector_product: {
                bind: 'updateProductProperty'
              }
            },
            out: {
              profile_customer_detail_confirm: {
                bind: 'confirm-detail'
              },
              profile_contact_detail_confirm_success: {
                bind: 'customer-detail-confirm-success-message'
              },
              profile_contact_detail_confirm_error: {
                bind: 'customer-detail-confirm-error-message'
              },
              profile_contact_detail_selector_modal_selected_item: {
                bind: 'selected-product'
              },
              profile_delete_contact_detail_phone: {
                bind: 'cells-product-selector-modal-delete-phone'
              },
              navigation_show_all_modal_to_change_phone: {
                bind: 'cells-product-selector-modal-edit-phone',
                link: {
                  page: 'profileContactDetail',
                  params: {
                    contactType: 'contactType',
                    contactId: 'contactId'
                  }
                }
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        tag: 'cells-product-selector-modal',
        type: 'UI',
        properties: {
          updateTitleModal: false,
          showCloseModalButton: true,
          closeButtonLabel: 'Cerrar',
          productType: 'email',
          visibleChars: 10,
          activateHeaderColor: true,
          className: PRODUCT_SELECTOR_MODAL_CLASS,
          hideOutQuantities: true,
          hideItemIcons: false,
          detailItemActions: DETAIL_ITEM_ACTIONS,
          cellsConnections: {
            in: {
              profile_view_all_email_items_modal: {
                bind: 'treatProducts'
              },
              profile_get_customer_contacts_unmasked_success: {
                bind: 'enableButton'
              },
              update_email_product_selector_product: {
                bind: 'updateProductProperty'
              }
            },
            out: {
              profile_customer_detail_confirm: {
                bind: 'confirm-detail'
              },
              profile_contact_detail_confirm_success: {
                bind: 'customer-detail-confirm-success-message'
              },
              profile_contact_detail_confirm_error: {
                bind: 'customer-detail-confirm-error-message'
              },
              profile_contact_detail_selector_modal_selected_item: {
                bind: 'selected-product'
              },
              navigation_show_all_modal_to_change_email: {
                bind: 'cells-product-selector-modal-edit-email',
                link: {
                  page: 'profileContactDetail',
                  params: {
                    contactType: 'contactType',
                    contactId: 'contactId'
                  }
                }
              },
              profile_delete_contact_detail_email: {
                bind: 'cells-product-selector-modal-delete-email'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-dataprovider-customers',
        familyPath: '@glomo-web-components/bbva-dataprovider-customers',
        render: 'litElement',
        properties: {
          host: CONFIG.globalServices.host,
          native: !!CONFIG.native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          version: CONFIG.globalServices.versions.customersV1,
          headers: { 'Accept-Language': 'es' },
          cellsConnections: {
            in: {
              profile_request_customer_fiscal_data: {
                bind: 'getCustomerFiscalData'
              }
            },
            out: {
              profile_get_customer_fiscal_data_success: {
                bind: 'get-mx-customer-fiscal-data-v1-success'
              }
            }
          }
        }
      },
      {
        zone: 'app__main',
        type: 'DM',
        tag: 'bbva-local-kyc-validation-high-risk-customers-tasks-api-dm',
        render: 'litElement',
        familyPath: '@glomo-web-components/bbva-local-kyc-validation-high-risk-api-dm',
        properties: {
          host: CONFIG.globalServices.host,
          version: CONFIG.globalServices.versions.moneyLaundering,
          native,
          requiredToken: CONFIG.globalServices.requiredToken || 'tsec',
          cellsConnections: {
            in: {
              get_kyc_relations_status: {
                bind: 'getHighRiskCustomersTasks'
              }
            },
            out: {
              get_high_risk_customers_tasks_data_success: {
                bind: 'get-high-risk-customers-tasks-data-success'
              },
              get_high_risk_customers_tasks_data_error: {
                bind: 'get-high-risk-customers-tasks-data-error'
              }
            }
          }
        }
      },
      {
        zone: 'app__overlay',
        type: 'UI',
        tag: 'bbva-notification-toast',
        familyPath: '@bbva-spherica-components/bbva-notification-toast',
        render: 'litElement',
        properties: {
          alertText: 'glomo-profile-avatar-success-change-spherica',
          type: 'success',
          iconExplainer: 'coronita:correct',
          duration: '3000',
          autoHide: 'true',
          fixedBottom: 'true',
          cellsConnections: {
            in: {
              profile_avatar_accept_image_to_post: {
                bind: 'show'
              }
            }
          }
        }
      }
    ]
  };

  base.components.push(glomoAlertManagerSpherica);

  const signConnector = require('./common/_sign-connector')(CONFIG)(base);
  signConnector(
    'cells-dm-global-apis-customers-mx-bgadpmock',
    'profile',
    [
      'set-customer-contacts',
      'error-on-get-customer-contacts',
      'set-customer-addresses',
      'error-on-get-customer-addresses'
    ]
  );
  signConnector('bbva-dataprovider-customers', 'profilePage', ['get-mx-customer-fiscal-data-v1-success', 'get-mx-customer-fiscal-data-v1-error']);

  addCommonErrors(base.components)();

  localStorageApp.addOutStorageChannels(base.components, ['new_avatar_profile',
    'know_your_client_exception', 'monoproduct', 'isMonoEnterpriseDebitCardClient', 'loginData'],
  CONFIG);

  return base;
};
