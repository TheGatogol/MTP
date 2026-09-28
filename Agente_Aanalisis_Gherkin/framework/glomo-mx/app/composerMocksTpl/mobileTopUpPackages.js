'use strict';

module.exports = (config) => {
  const {
    getLanguage,
    getLocalCurrency,
    connectionsOut
  } = require('./common/helpers/_utils');
  const pageName = 'mobileTopUpPackages';
  const pages = require('./common/_pages')(config)(pageName);
  const analytics = require('./analytics/_mobileTopUpPackages')();
  const storage = require('./common/_local-storage');
  const requiredOTP = true;
  const actions = [ {
    text: 'account-transaction-servicing-mobile-top-up-packages-mx-help-modal-delete-contact-button',
    icon: 'coronita:trash',
    method: 'DELETE',
    className: 'bg-delete'
  } ];
  const {
    globalServices: {
      host,
      requiredToken = 'tsec',
      versions: {
        accounts,
        cardsV1,
        contactDetails,
        contactsBook,
        limitsV1,
        mobiles,
        operationRegistries,
        serviceProviderMigratedApiVersion,
        serviceProvidersV1
      }
    },
    native = false,
    nativeIos = false
  } = config;

  const accountTransactionServicingMobileTopUpPackages = {
    zone: 'app__main',
    type: 'DM',
    tag: 'account-transaction-servicing-mobile-top-up-packages-mx',
    familyPath: '@glomo-web-components/account-transaction-servicing-mobile-top-up-packages-mx',
    render: 'litElement',
    properties: {
      accountsApiVersion: accounts,
      cardsApiVersion: cardsV1,
      contactApiVersion: contactDetails,
      contactsBookApiVersion: contactsBook,
      contactContactInformationApiVersion: contactsBook,
      entityId: '0074',
      errorCodeLocalStorage: 999,
      host,
      iOSFixedHeader: nativeIos,
      language: getLanguage(),
      locale: 'mx',
      localCurrency: getLocalCurrency(),
      migrated: 'MIGRATED',
      mobilesApiVersion: mobiles,
      native,
      operativeLimitId: 'LIMITESGLOBALGLOMO',
      operativeLimitsApiVersion: limitsV1,
      otpId: pageName,
      pageSize: 999,
      requiredToken,
      errorCodesMTU: ['KNE6666', '01573235', '01573236'],
      errorCodesTopUp: {
        errorCodesDuplicatedTopUp: ['MAE0001', '01573214'],
        monthlyLimitError: 'CNE0236',
        dailyLimitError: 'CNE0235',
        operationLimitError: 'CNE0234',
        foundDataError: 'MPE1211'
      },
      serviceProviderApiVersion: serviceProvidersV1,
      serviceProviderMigratedApiVersion: serviceProviderMigratedApiVersion,
      digitalProductId: 'DX',
      cellsConnections: {
        in: {
          __bridge_page_mobileTopUpPackages: {
            bind: 'init'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'init'
          },
          global_login_success: {
            bind: 'getUserData'
          },
          global_feature_flag_collection_updated: {
            bind: 'featureFlagsCollection'
          },
          global_set_app_settings: {
            bind: 'publicSettings'
          },
          dashboard_customer_email: {
            bind: 'getUserDataDash'
          },
          account_transaction_servicing_mobile_top_up_packages_native_plugin_contact_success: {
            bind: 'extractContactData'
          },
          account_transaction_servicing_mobile_top_up_packages_native_plugin_contact_error: {
            bind: 'contactDataErrorHandler'
          },
          global_storage_get_mobile_top_up_onboarding_success: {
            bind: 'isFirstIn'
          },
          global_storage_get_mobile_top_up_onboarding_error: {
            bind: 'isFirstIn'
          },
          global_storage_set_mobile_top_up_onboarding_success: {
            bind: 'setFromLocalStorageSucces'
          },
          global_storage_set_mobile_top_up_onboarding_error: {
            bind: 'setFromLocalStorageError'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_recipient_selected: {
            bind: 'contactFromContacsAgenda'
          },
          navigation_product_detail_to_mobile_top_up_packages: {
            bind: 'accountProductDetail'
          },
          blue_redirect_data_account_selected: {
            bind: 'accountProductDetail'
          },
          blue_redirect_recharges_contacts: {
            bind: 'blueOperationContext'
          },
          sign_modal_cancelled: {
            bind: 'closeSpinner'
          },
          sign_modal_close_reset: {
            bind: 'closeSpinner'
          },
          cells_to_native_modal_closed: {
            bind: 'closeSpinner'
          },
          global_mtu_navigation_confirm_limit: {
            bind: 'confirmMTU'
          },
          global_delete_number_contact_agenda_confirm: {
            bind: 'showDataDeleteContactFromContactsAgenda'
          },
          account_transaction_servicing_mobile_top_up_packages_contacts_agenda_delete_contact: {
            bind: 'showDataDeleteContactFromContactsAgenda'
          },
          global_financial_overview_details: {
            bind: 'setAccountsAndCardsData'
          },
          account_transaction_servicing_mobile_top_up_packages_delete_swiped_contact_number: {
            bind: 'deleteNumberModalConfig'
          },
          account_transaction_servicing_mobile_top_up_packages_delete_swiped_contact: {
            bind: 'deleteModalConfig'
          }
        },
        out: {
          account_transaction_servicing_mobile_top_up_packages_contacts_send: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-contact-step-contacts-agenda-show'
          },
          account_transaction_servicing_mobile_top_up_packages_contacts_reset: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-contact-step-contacts-agenda-reset'
          },
          account_transaction_servicing_mobile_top_up_packages_navigate_to_top_up: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-page-exit',
            backStep: true
          },
          global_get_from_storage: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-local-storage-get'
          },
          global_retargeting_initialize: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-retargeting-initialize'
          },
          global_set_in_storage: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-local-storage-set'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_contacts_book_success_response_post: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-contacts-book-success-response-post'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_contacts_information_success_response_post: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-contacts-information-success-response-post'
          },
          account_transaction_servicing_mobile_top_up_packages_analytics_contract_page_start: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-analytics-contract-page-start'
          },
          account_transaction_servicing_mobile_top_up_packages_native_plugin_contact_get: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-native-plugin-contacts-get'
          },
          account_transaction_servicing_mobile_top_up_packages_mx_dm_service_provider_success_response_get: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-service-provider-success-response-get'
          },
          account_transaction_servicing_mobile_top_up_packages_analytics_summaray_payment_method_select: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-analytics-summaray-payment-method-select'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_step_contact_step_accordion_select: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-contact-step-contact-step-accordion-select'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_analytics_otp_select: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-analytics-otp-select'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_analytics_app_step_complete: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-analytics-app-step-complete'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_step_analytics_internal_link_send: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-contact-step-analytics-internal-link-send'
          },
          account_transaction_servicing_mobile_top_up_packages_modal_information_analytics_launch: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-modal-information-analytics-launch'
          },
          account_transaction_servicing_mobile_top_up_packages_help_modal_close: {
            bind: 'help-modal-close'
          },
          account_transaction_servicing_mobile_top_up_packages_help_onboarding_primary_button_click: {
            bind: 'help-onboarding-primary-button-click'
          },
          account_transaction_servicing_mobile_top_up_packages_analytics_payment_method_step_show: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-analytics-payment-method-step-show'
          },
          account_transaction_servicing_mobile_top_up_packages_share_receipt_result: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-success-page-recipt-share'
          },
          account_transaction_servicing_mobile_top_up_packages_share_receipt_template: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-success-page-template-receipt-share'
          },
          account_transaction_servicing_mobile_top_up_packages_share_receipt_capture: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-success-page-share-receipt-capture'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_edit_step_accept: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-modals-edit-step-accept'
          },
          account_transaction_servicing_mobile_top_up_packages_page_exit: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-page-exit'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_contact_delete: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-modals-contact-delete'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_contacts_permissions_accept: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-modals-contacts-permissions-accept'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_error_save_contact_accept: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-modals-error-save-contact-accept'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_top_up_handle_error: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-top-up-handle-error'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_modals_help_modal_footer_button_click: {
            bind: 'help-modal-footer-button-click'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_step_complete: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-contact-step-complete'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_daily_limit_change: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-modals-daily-limit-change',
            link: {
              page: 'operationalLimits'
            }
          },
          account_transaction_servicing_mobile_top_up_packages_modals_monthly_limit_change: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-modals-monthly-limit-change',
            link: {
              page: 'operationalLimits'
            }
          },
          global_retargeting_reset_step: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-page-exit'
          },
          global_retargeting_contracted_product: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-top-up-success-response-get'
          },
          dashboard_refresh_financial_overview: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-top-up-success-response-get'
          },
          global_retargeting_go_next_step: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-payment-method-info-payment-method-select'
          },
          global_mtu_exception_navigation: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-mtu-error',
            link: {
              page: 'mtuException'
            }
          },
          account_transaction_servicing_mobile_top_up_packages_mx_modals_card_off_to_activate: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-redirect-to-dashboard',
            link: {
              page: 'dashboard'
            }
          },
          account_transaction_servicing_mobile_top_up_packages_dm_response_recover_registry_send: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-response-recover-registry-send'
          },
          account_transaction_servicing_mobile_top_up_packages_mx_dm_close_contacts_agenda: {
            bind: 'account-transaction-servicing-mobile-top-up-packages-mx-dm-close-contacts-agenda'
          }
        }
      }
    }
  };

  const analyticManagerMobileTopUp = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-analyticmanager-mobile-top-up-mx',
    familyPath: '@glomo-web-components/bbva-analyticmanager-account-transaction-servicing',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          navigation_mobile_top_up_packages: {
            bind: 'rechargeSectionOnClickStart'
          },
          navigation_from_futura_dashboard: {
            bind: 'dashboardOnClickStart'
          },
          navigation_product_detail_to_mobile_top_up_packages: {
            bind: 'productDetailOnClickStart'
          },
          account_transaction_servicing_mobile_top_up_packages_analytics_contract_page_start: {
            bind: 'appPageVisit'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_step_contact_step_accordion_select: {
            bind: 'appStarted'
          },
          account_transaction_servicing_mobile_top_up_packages_mx_dm_service_provider_success_response_get: {
            bind: 'appStepOffers'
          },
          account_transaction_servicing_mobile_top_up_packages_analytics_summaray_payment_method_select: {
            bind: 'appStepConfirmation'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_analytics_otp_select: {
            bind: 'appStepOTP'
          },
          submit_sign_mobile_top_up_packages: {
            bind: 'appStepOTPSign'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_analytics_app_step_complete: {
            bind: 'appCompleted'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_step_analytics_internal_link_send: {
            bind: 'saveContactStep'
          },
          account_transaction_servicing_mobile_top_up_packages_modal_information_analytics_launch: {
            bind: 'setModalTarget'
          },
          account_transaction_servicing_mobile_top_up_packages_analytics_payment_method_step_show: {
            bind: 'pageViewPaymentMethod'
          },
          account_transaction_servicing_mobile_top_up_packages_help_modal_close: {
            bind: 'pageViewPackagesInformation'
          },
          account_transaction_servicing_mobile_top_up_packages_help_onboarding_primary_button_click: {
            bind: 'pageViewOnboarding'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_edit_step_accept: {
            bind: 'pageViewModify'
          },
          account_transaction_servicing_mobile_top_up_packages_page_exit: {
            bind: 'pageViewExit'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_contact_delete: {
            bind: 'pageViewDeleteContact'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_top_up_handle_error: {
            bind: 'setModalError'
          },
          account_transaction_servicing_mobile_top_up_packages_dm_modals_help_modal_footer_button_click: {
            bind: 'pageViewError'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_contacts_permissions_accept: {
            bind: 'pageViewErrorPermissions'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_error_save_contact_accept: {
            bind: 'pageViewErrorSaveContact'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_step_complete: {
            bind: 'saveContactStep'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_daily_limit_change: {
            bind: 'pageViewDailyLimit'
          },
          account_transaction_servicing_mobile_top_up_packages_modals_monthly_limit_change: {
            bind: 'pageViewMonthlyLimit'
          }
        },
        out: {
          analytic_app_on_click_start_recharge_section: {
            bind: 'analytics-app-on-click-start-recharge-section',
            analytics: analytics.app_on_click_start_recharge_section
          },
          analytic_app_on_click_start_dashboard: {
            bind: 'analytics-app-on-click-start-dashboard',
            analytics: analytics.app_on_click_start_dashboard
          },
          analytic_app_on_click_start_product_detail: {
            bind: 'analytics-app-on-click-start-product-detail',
            analytics: analytics.app_on_click_start_product_detail
          },
          analytic_app_page_visit: {
            bind: 'analytics-app-page-visit',
            analytics: analytics.app_page_visit
          },
          analytic_app_started_contact: {
            bind: 'analytics-app-started-contact',
            analytics: analytics.app_started_contact
          },
          analytic_app_step_offers: {
            bind: 'analytics-app-step-offers',
            analytics: analytics.app_step_offers
          },
          analytic_app_step_confirmation: {
            bind: 'analytics-app-step-confirmation',
            analytics: analytics.app_step_confirmation
          },
          analytic_app_step_sign: {
            bind: 'analytics-app-step-sign',
            analytics: analytics.app_step_sign
          },
          analytic_app_completed: {
            bind: 'analytics-app-completed',
            analytics: analytics.app_completed
          },
          analytic_internal_link_save_contact: {
            bind: 'analytics-internal-link-save-contact',
            analytics: analytics.internal_link_save_contact
          },
          analytic_page_view_onboarding: {
            bind: 'analytics-page-view-onboarding',
            analytics: analytics.page_view_onboarding
          },
          analytic_page_view_packages_information: {
            bind: 'analytics-page-view-packages-information',
            analytics: analytics.page_view_packages_information
          },
          analytic_page_view_payment_method: {
            bind: 'analytics-page-view-payment-method',
            analytics: analytics.page_view_payment_method
          },
          analytic_page_view_modify_step: {
            bind: 'analytics-page-view-modify-step',
            analytics: analytics.page_view_modify_step
          },
          analytic_page_view_exit: {
            bind: 'analytics-page-view-exit',
            analytics: analytics.page_view_exit
          },
          analytic_page_view_delete_contact: {
            bind: 'analytics-page-view-delete-contact',
            analytics: analytics.page_view_delete_contact
          },
          analytic_page_view_operation_not_realized: {
            bind: 'analytics-page-view-error',
            analytics: analytics.page_view_operation_not_realized
          },
          analytic_page_view_error_limit_daily: {
            bind: 'analytics-page-view-error-limit-daily',
            analytics: analytics.page_view_error_limit_daily
          },
          analytic_page_view_error_limit_monthly: {
            bind: 'analytics-page-view-error-limit-monthly',
            analytics: analytics.page_view_error_limit_monthly
          },
          analytic_page_view_activate_native_contacts_access: {
            bind: 'analytics-page-view-activate-native-contacts-access',
            analytics: analytics.page_view_activate_native_contacts_access
          },
          analytic_page_view_contact_without_save: {
            bind: 'analytics-page-view-error-contact-without-save',
            analytics: analytics.page_view_contact_without_save
          },
          analytic_page_view_saved_contact_save: {
            bind: 'analytics-page-view-saved-contact-save',
            analytics: analytics.page_view_saved_contact_save
          },
          analytic_page_view_saved_not_contact_save: {
            bind: 'analytics-page-view-saved-not-contact-save',
            analytics: analytics.page_view_saved_not_contact_save
          }
        }
      }
    }
  };

  const nativeConnectorContacts = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-contacts',
    familyPath: '@glomo-web-components/bbva-nativeconnector-contacts',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          account_transaction_servicing_mobile_top_up_packages_native_plugin_contact_get: {
            bind: 'pickContact'
          }
        },
        out: {
          account_transaction_servicing_mobile_top_up_packages_native_plugin_contact_success: {
            bind: 'picked-contact-served'
          },
          account_transaction_servicing_mobile_top_up_packages_native_plugin_contact_error: {
            bind: 'error'
          }
        }
      }
    }
  };

  const localOperationRegistries = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-local-operation-registries-api-dm',
    familyPath: '@glomo-web-components/bbva-local-operation-registries-api-dm',
    render: 'litElement',
    properties: {
      host,
      native,
      requiredToken,
      requiredOTP,
      otpId: 'mobileTopUpPackagesOperationRegistry',
      localCurrency: getLocalCurrency(),
      language: getLanguage(),
      version: operationRegistries,
      cellsConnections: {
        in: {
          account_transaction_servicing_mobile_top_up_packages_dm_response_recover_registry_send: {
            bind: 'postRecoverRegistry'
          }
        }
      }
    }
  };

  const contacsAgendaDM = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-contacts-agenda-dm-mx',
    familyPath: 'glomo-contacts-agenda-dm',
    properties: {
      noContactsImg: './images/spherica/empty_state_day.svg',
      errorMessageIconPath: './images/errors/error.svg',
      hasNumber: true,
      minErrorModal: true,
      mobiles: true,
      isSpherica: true,
      cellsConnections: {
        in: {
          account_transaction_servicing_mobile_top_up_packages_reset_page: {
            bind: 'reset'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'reset'
          },
          account_transaction_servicing_mobile_top_up_packages_contacts_reset: {
            bind: 'reset'
          },
          account_transaction_servicing_mobile_top_up_packages_contacts_send: {
            bind: 'parseContacts'
          },
          account_transaction_servicing_mobile_top_up_packages_delete_swiped_contact_number: {
            bind: 'deleteNumberModalConfig'
          },
          account_transaction_servicing_mobile_top_up_packages_delete_swiped_contact: {
            bind: 'deleteModalConfig'
          },
          ch_mobile_top_up_delete_contact_successfully: {
            bind: 'deleteContactProductSuccessfully'
          },
          account_transaction_servicing_mobile_top_up_packages_set_type_search: {
            bind: 'isNumericSearch'
          },
          account_transaction_servicing_mobile_top_up_packages_start_message: {
            bind: 'sendInfoNoContacts'
          }
        },
        out: {
          account_transaction_servicing_mobile_top_up_packages_parsed_contacts_changed: {
            bind: 'parsed-contacts-changed'
          },
          account_transaction_servicing_mobile_top_up_packages_request_contacts: {
            bind: 'get-contacts-list'
          },
          account_transaction_servicing_mobile_top_up_packages_add_new_contact: {
            bind: 'add-new-contact'
          },
          global_glomo_signature_open_modal_error_spherica: {
            bind: 'open-confirm-delete-modal'
          },
          account_transaction_servicing_mobile_top_up_packages_contacts_agenda_delete_contact: {
            bind: 'delete-contact'
          },
          ch_mobile_top_up_delete_contact_successfully_toast: {
            bind: 'success-message-snackbar'
          },
          account_transaction_servicing_mobile_top_up_packages_set_empty_message: {
            bind: 'no-contacts-saved'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-confirm-delete-modal-spherica'
          },
          global_delete_number_contact_agenda_confirm: {
            bind: 'alert-DELETE-NUMBER-CONTACT-AGENDA-accept'
          }
        }
      }
    }
  };

  const contacsAgendaUI = {
    zone: 'recipientModalCONTACTS.slot-content',
    type: 'UI',
    tag: 'cells-contact-selector-spherica',
    properties: {
      listActions: actions,
      emptyImage: './images/spherica/empty_state_day.svg',
      isSpherica: true,
      cellsConnections: {
        in: {
          account_transaction_servicing_mobile_top_up_packages_parsed_contacts_changed: {
            bind: 'listItems'
          },
          account_transaction_servicing_mobile_top_up_packages_set_empty_message: {
            bind: 'setEmptyMessage'
          },
          account_transaction_servicing_mobile_top_up_packages_contacts_reset: {
            bind: 'reset'
          }
        },
        out: {
          account_transaction_servicing_mobile_top_up_packages_contact_recipient_selected: {
            bind: 'cells-contact-selector-item-clicked'
          },
          account_transaction_servicing_mobile_top_up_packages_delete_swiped_contact: {
            bind: 'cells-contact-selector-delete'
          },
          account_transaction_servicing_mobile_top_up_packages_delete_swiped_contact_number: {
            bind: 'cells-contact-selector-delete-number'
          },
          account_transaction_servicing_mobile_top_up_packages_set_type_search: {
            bind: 'cells-contact-selector-type-search'
          },
          account_transaction_servicing_mobile_top_up_packages_start_message: {
            bind: 'cells-contact-selector-start-message'
          }
        }
      }
    }
  };

  const contactsAgendaModal = {
    zone: 'app__overlay',
    type: 'UI',
    tag: 'bbva-help-modal-spherica',
    familyPath: '@glomo-web-components/bbva-spherica-wrapper',
    render: 'litElement',
    container: true,
    properties: {
      id: 'recipientModalCONTACTS',
      iconRightPrimary: 'coronita:close',
      accessibilityTextIconRightPrimary: 'bbva-help-modal-close-button',
      headerText: 'account-transaction-servicing-mobile-top-up-packages-mx-expandable-accordion-list-contacts-header-title',
      fullHeight: true,
      headerType: 'modal',
      cellsConnections: {
        in: {
          account_transaction_servicing_mobile_top_up_packages_contacts_send: {
            bind: 'open'
          },
          global_exit_confirm_mobile_accepted: {
            bind: 'close'
          },
          account_transaction_servicing_mobile_top_up_packages_contact_recipient_selected: {
            bind: 'close'
          },
          account_transaction_servicing_mobile_top_up_packages_mx_dm_close_contacts_agenda: {
            bind: 'close'
          }
        }
      }
    }
  };

  const cellsShareGenericReceipt = {
    zone: 'app__main',
    type: 'UI',
    tag: 'cells-share-generic-receipt-spherica',
    familyPath: 'cells-share-operative-receipt-spherica',
    properties: {
      country: 'mx',
      language: getLanguage(),
      localCurrency: getLocalCurrency(),
      sharedReceiptStyles: {
        receipt: {
          'top': ''
        },
        receiptTitle: {
          'font-weight': 'var(--cells-fontDefaultMedium_-_font-weight, 500)',
          'line-height': '1.5rem',
          'font-size': '1.5rem'
        },
        fieldTitle: {
          'height': 'auto',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '1.5rem',
          'margin-top': '1rem'
        },
        fieldValue: {
          'height': 'auto',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 500)',
          'line-height': '1.5rem'
        },
        fieldValueAccount: {
          'height': 'auto',
          'font-style': 'italic',
          'font-weight': 'var(--cells-fontDefaultLight_-_font-weight, 300)',
          'line-height': '1.5rem',
          'margin': '0'
        }
      },
      cellsConnections: {
        in: {
          account_transaction_servicing_mobile_top_up_packages_share_receipt_capture: {
            bind: 'captureReceipt'
          },
          account_transaction_servicing_mobile_top_up_packages_share_receipt_result: {
            bind: 'result'
          },
          account_transaction_servicing_mobile_top_up_packages_share_receipt_template: {
            bind: 'addDynamicTemplate'
          }
        },
        out: {
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          mobile_manage_operation: {
            bind: 'receipt-captured',
            'forward-to-native': true
          },
          global_alert_manager_open_with_settings: {
            bind: 'share-receipt-show-modal-error'
          }
        }
      }
    }
  };

  const bbvaNativeconnectorSettings = {
    zone: 'app__main',
    type: 'DM',
    tag: 'bbva-nativeconnector-native-settings',
    familyPath: '@glomo-web-components/bbva-nativeconnector-native-settings',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          account_transaction_servicing_mobile_top_up_packages_modals_contacts_permissions_accept: {
            bind: 'openSetting'
          }
        },
        out: {
          set_open_settings: {
            bind: 'setting-opened',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const base = {
    currentPage: {
      url: '/mobile-top-up-packages',
      params: []
    },
    pages,
    template: {
      tag: 'cells-template-coronita',
      tagSpherica: 'cells-template-coronita-spherica',
      properties: {
        animationType: 'verticalUp',
        drawerWidth: '100%',
        disableScrollLock: true,
        disableEdgeSwipe: true,
        headerFixed: true,
        iOSFixedHeader: nativeIos,
        className: `dark-blue-bg ${nativeIos ? 'ios-top-padding' : ''}`,
        extraHeaderClass: 'dark-blue-bg'
      }
    },
    components: [
      accountTransactionServicingMobileTopUpPackages,
      analyticManagerMobileTopUp,
      nativeConnectorContacts,
      localOperationRegistries,
      contacsAgendaDM,
      contacsAgendaUI,
      contactsAgendaModal,
      cellsShareGenericReceipt,
      bbvaNativeconnectorSettings
    ]
  };

  storage.addOutStorageChannels(base.components, [ 'mobile_top_up_onboarding' ], config);

  const errorAndSignWidgetConnector = require('./common/_widget-sign-connector')(config)(base);
  errorAndSignWidgetConnector('account-transaction-servicing-mobile-top-up-packages-mx');

  const signConnectorRegistries = require('./common/_sign-connector')(config)(base);
  signConnectorRegistries('bbva-local-operation-registries-api-dm', 'mobileTopUpPackagesOperationRegistry');

  const connectionsOutChannels = connectionsOut(base);
  connectionsOutChannels('cells-sign-operation-dm-mx').submit_sign_mobile_top_up_packages = {
    bind: 'ether-token-custom-call'
  };

  return base;
};
