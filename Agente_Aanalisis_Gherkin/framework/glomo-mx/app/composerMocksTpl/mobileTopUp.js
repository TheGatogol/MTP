/* eslint-disable max-statements, new-cap */
'use strict';
module.exports = (CONFIG) => {
  const UTILS = require('./common/helpers/_utils');
  const { useNames, createPrefixFromPageName } = UTILS;
  const PAGE_NAME = 'mobileTopUp';
  const OPERATIVE_PREFIX = createPrefixFromPageName(PAGE_NAME);
  const [getChannelName, getLocaleName] = useNames(OPERATIVE_PREFIX);
  const PAGES = require('./common/_pages')(CONFIG)(PAGE_NAME);
  const SPINNER = UTILS.SPINNER(CONFIG);
  SPINNER.tagSpherica = 'cells-spinner-veil-spherica';
  SPINNER.propertiesSpherica = {
    className: 'solid-spinner'
  };
  const IS_NATIVE_IOS = CONFIG.nativeIos || false;
  const ANALYTICS = require('./analytics/_mobileTopUp')();
  const addCommonErrors = require('./common/commonErrors/_dm-common-errors');
  const addRetryErrors = require('./common/commonErrors/_dm-retry-errors')(CONFIG);
  const LOCAL_CURRENCY = UTILS.getLocalCurrency(CONFIG);
  const MAX_STEPS = 3;
  const host = CONFIG.globalServices.host;
  const native = CONFIG.native || false;
  const requiredToken = CONFIG.globalServices.requiredToken || 'tsec';
  const sphericaPageUtils = require('./common/helpers/_spherica')(CONFIG, PAGE_NAME);
  const isSpherica = sphericaPageUtils.isSpherica();

  const glomoAlertManagerSpherica = {
    zone: 'app__transactional',
    type: 'CC',
    tag: 'glomo-alert-manager-spherica',
    properties: {
      cellsConnections: {
        out: {
          global_contact_change_mobile_confirm: {
            bind: 'alert-CHANGE-CONTACT-MODAL-MOBILE-TOP-UP-accept'
          },
          global_alias_in_use_exit: {
            bind: 'alert-ALIAS-IN-USE-MOBILE-TOP-UP-cancel'
          },
          global_alias_in_use_confirm: {
            bind: 'alert-ALIAS-IN-USE-MOBILE-TOP-UP-accept'
          },
          global_contact_found_mobile_confirm: {
            bind: 'alert-FOUND-NUMBER-MODAL-MOBILE-TOP-UP-accept'
          },
          global_contact_found_mobile_exit: {
            bind: 'alert-FOUND-NUMBER-MODAL-MOBILE-TOP-UP-cancel'
          },
          global_exit_confirm_mobile_accepted: {
            bind: 'alert-EXIT-CANCEL-OPERATION-MOBILE-accept'
          },
          global_mobile_top_up_not_confirmed_error: {
            bind: 'alert-MOBILE-TOP-UP-NOT-CONFIRMED-ERROR-accept'
          },
          global_mobile_top_up_duplicated_error: {
            bind: 'alert-MOBILE-TOP-UP-DUPLICATED-ERROR-accept'
          }
        }
      }
    }
  };

  const ACTIONS = [ {
    text: getLocaleName('delete'),
    icon: 'coronita:trash',
    method: 'DELETE',
    className: 'bg-delete'
  } ];

  const OPX_TEMPLATE_COMPONENT = {
    tag: 'glomo-opx-template',
    tagSpherica: 'glomo-opx-template-spherica',
    properties: {
      headerFixed: true,
      animationType: 'verticalUp',
      extraHeaderClass: IS_NATIVE_IOS ? 'bbva-core-blue ios-top-padding' : '',
      iOSFixedHeader: IS_NATIVE_IOS,
      className: 'bbva-core-blue',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'recalculateHeader'
          },
          [getChannelName('scroll_to_step')]: {
            bind: 'scrollItemIntoView'
          },
          [getChannelName('reset_scroll_top')]: {
            bind: 'resetLayerScroll'
          },
          [getChannelName('show_summary')]: {
            bind: 'showConfirm'
          },
          [getChannelName('show_confirm')]: {
            bind: 'open'
          },
          [getChannelName('selected_amount')]: {
            bind: 'open'
          },
          [getChannelName('hide_confirm')]: {
            bind: 'close'
          },
          [getChannelName('reset_page')]: {
            bind: 'recalculateHeader'
          }
        }
      }
    },
    propertiesSpherica: {
      extraHeaderClass: IS_NATIVE_IOS ? 'header--white' : '',
      className: IS_NATIVE_IOS ? 'ios-top-padding' : '',
      animationType: IS_NATIVE_IOS ? 'static' : 'verticalUp'
    }
  };

  const LIFE_CYCLE_COMPONENT = {
    zone: 'app__main',
    tag: 'cells-handle-life-cycle',
    type: 'UI',
    properties: {
      pageName: PAGE_NAME,
      requiredToken,
      private: true,
      customInitEvents: {
        'init-opx': {},
        'swipe-menu-enabled': false
      },
      cellsConnections: {
        in: {
          __bridge_app: {
            bind: 'navigation'
          },
          ['__bridge_page_' + PAGE_NAME]: {
            bind: 'init'
          }
        },
        out: {
          [getChannelName('init_page')]: {
            bind: 'init-page',
            analytics: ANALYTICS.APP_PAGE_VISIT_ACOUNT_SELECTION
          },
          [getChannelName('init_opx')]: {
            bind: 'init-opx'
          },
          global_retargeting_reset_step: {
            bind: 'init-page'
          },
          global_retargeting_initialize: {
            bind: 'init-page'
          },
          global_enable_menu_swipe: {
            bind: 'swipe-menu-enabled',
            'forward-to-native': true
          }
        }
      }
    }
  };

  const NAVIGATION_HANDLER = {
    zone: 'app__header',
    type: 'UI',
    tag: 'glomo-navigation-handler',
    properties: {
      continue: 'mobile-top-up-review',
      backAction: 'exit-page',
      currentPage: PAGE_NAME,
      cellsConnections: {
        in: {
          [getChannelName('go_to_review')]: {
            bind: 'navigate'
          },
          global_exit_confirm_mobile_accepted: {
            bind: 'goBack'
          },
          global_mobile_top_up_not_confirmed_error: {
            bind: 'goBack'
          },
          global_mobile_top_up_duplicated_error: {
            bind: 'goBack'
          }
        },
        out: {
          [getChannelName('navegation_to_review')]: {
            bind: 'navigation-to-mobile-top-up-review',
            link: {
              page: 'mobileTopUpReview',
              skipHistory: true
            }
          },
          dashboard_refresh_financial_overview: {
            bind: 'exit-page',
            backStep: true
          },
          global_retargeting_send_information_update: {
            bind: 'exit-page'
          },
          global_retargeting_contracted_product: {
            bind: 'navigation-to-mobile-top-up-review'
          }
        }
      }
    }
  };

  const HEADER_COMPONENT = {
    zone: 'app__header',
    type: 'UI',
    tag: 'cells-molecule-header',
    tagSpherica: 'cells-molecule-header-spherica',
    properties: {
      back: true,
      rightIcon: 'coronita:close',
      titleName: getLocaleName('header-title'),
      cellsConnections: {
        out: {
          [getChannelName('exit_header_button')]: {
            bind: 'click-right-button'
          }
        }
      }
    },
    propertiesSpherica: {
      className: `header--white header ${IS_NATIVE_IOS ? 'header--white-ios' : ''}`,
      rightIconText: 'cells-molecule-header-spherica-close',
      variant: 'primary'
    }
  };

  const MOBILE_DM_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-mobile-top-up-manager-mx',
    familyPath: 'glomo-mobile-top-up-manager',
    properties: {
      host,
      consumerId: CONFIG.globalServices.costumerId,
      localCurrency: LOCAL_CURRENCY,
      mobileApiVersion: CONFIG.globalServices.versions.mobiles,
      customersApiVersion: CONFIG.globalServices.versions.customers,
      exchangeRateLiteral: 'cells-summary-view-exchange-rate-simple',
      native,
      otpId: PAGE_NAME,
      requiredToken,
      isNativeIOS: IS_NATIVE_IOS,
      duplicatedErrorCodes: ['MAE0001', '01573214'],
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          dashboard_accounts: {
            bind: 'setAccounts'
          },
          global_login_success: {
            bind: 'setCustomerInfo'
          },
          navigation_product_detail_to_mobile_top_up: {
            bind: 'setAccountProductDetail'
          },
          global_storage_get_app_settings_success: {
            bind: 'getMobileTopUpSettings'
          },
          global_set_app_settings: {
            bind: 'getMobileTopUpSettings'
          },
          global_feature_flag_collection_updated: {
            bind: 'getAsyncFeatureFlag'
          },
          [getChannelName('init_page')]: {
            bind: 'initRetargeting'
          },
          global_device_get_network_type_success: {
            bind: 'sendPostRetargeting'
          },
          [getChannelName('set_accounts')]: {
            bind: 'sendPostRetargeting'
          },
          [getChannelName('set_operation_amount')]: {
            bind: 'amountProvider'
          },
          [getChannelName('is_existing_contact')]: {
            bind: 'existingContact'
          },
          [getChannelName('request_saved_contacts')]: {
            bind: 'requestContactsBook'
          },
          [getChannelName('summary_resume')]: {
            bind: 'setTopUpRequest'
          },
          global_mtu_navigation_confirm_limit: {
            bind: 'setTopUpRequest'
          },
          [getChannelName('recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('contact_recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('set_form_body_add_number')]: {
            bind: 'setFormBody'
          },
          [getChannelName('add_contact_recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('number_existing_recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('get_customer_email')]: {
            bind: 'getCustomerInfo'
          },
          [getChannelName('set_limits_succesful')]: {
            bind: 'setLimits'
          },
          [getChannelName('get_user_offer_success')]: {
            bind: 'setListOffersResponse'
          },
          [getChannelName('account_selected')]: {
            bind: 'selectedAccount'
          },
          [getChannelName('set_selected_account_info')]: {
            bind: 'selectedAccount'
          },
          [getChannelName('set_selected_account_from_modal')]: {
            bind: 'selectedAccount'
          },
          global_alias_in_use_confirm: {
            bind: 'addNumber'
          },
          [getChannelName('providers_list')]: {
            bind: 'getCompanies'
          },
          [getChannelName('contacts_agenda_add_number_successful')]: {
            bind: 'addNumberSuccess'
          },
          [getChannelName('add_new_contact_to_agenda')]: {
            bind: 'addNewContact'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          blue_redirect_data_account_selected: {
            bind: 'selectedAccount'
          }
        },
        out: {
          global_retargeting_form_submission: {
            bind: 'send-mobile-top-up-post-retargeting'
          },
          [getChannelName('set_dashboard_accounts')]: {
            bind: 'set-dashboard-accounts'
          },
          [getChannelName('init_opx_retargeting')]: {
            bind: 'set-dashboard-accounts'
          },
          [getChannelName('set_product_detail_accounts')]: {
            bind: 'set-product-detail-account'
          },
          [getChannelName('set_account_email')]: {
            bind: 'set-account-email'
          },
          [getChannelName('set_customer_info')]: {
            bind: 'set-customer-info'
          },
          [getChannelName('send_contacts')]: {
            bind: 'send-contacts-book-success-response'
          },
          [getChannelName('get_list_contacts_error')]: {
            bind: 'get-contacts-book-response-error'
          },
          global_generic_error: {
            bind: 'open-generic-error-modal'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-manager-modal'
          },
          global_retry_error: {
            bind: 'retry-error'
          },
          open_control_veil: {
            bind: 'open-control-veil'
          },
          close_control_veil: {
            bind: 'close-control-veil'
          },
          [getChannelName('show_number_saved_message')]: {
            bind: 'show-saved-number-message'
          },
          [getChannelName('add_number_recipient_selected')]: {
            bind: 'new-number-alias-already-in-contacts-add-number-selected'
          },
          [getChannelName('add_contact_success')]: {
            bind: 'add-contact-success'
          },
          [getChannelName('set_form_body_add_contact')]: {
            bind: 'set-form-body-add-contact'
          },
          [getChannelName('set_companies')]: {
            bind: 'set-companies'
          },
          [getChannelName('retrieve_campaigns')]: {
            bind: 'request-list-offer'
          },
          [getChannelName('set_format_date_successful_response')]: {
            bind: 'set-format-date-successful-response'
          },
          [getChannelName('go_to_review')]: {
            bind: 'navigate-to-review'
          },
          [getChannelName('notify_is_success')]: {
            bind: 'notify-native-navigation-to-review'
          },
          [getChannelName('set_review_header')]: {
            bind: 'set-review-header-properties'
          },
          [getChannelName('set_template_class_properties')]: {
            bind: 'set-review-template-properties'
          },
          [getChannelName('share_receipt_result')]: {
            bind: 'share-receipt-result'
          },
          [getChannelName('send_information_offer_card')]: {
            bind: 'send-information-for-card-offer'
          },
          [getChannelName('operational_limits_api')]: {
            bind: 'request-operational-limits'
          },
          [getChannelName('show_registered_message')]: {
            bind: 'show-registered-contact-message'
          },
          mobile_top_up_pass_list_offer_response: {
            bind: 'response-list-offer'
          },
          mobile_top_up_show_offer_modal: {
            bind: 'show-offer-modal-cross-sales'
          },
          [getChannelName('set_spinner_properties')]: {
            bind: 'set-spinner-properties'
          },
          [getChannelName('set_is_on_request')]: {
            bind: 'is-on-request'
          },
          sign_modal_close: {
            bind: 'is-on-request'
          },
          global_mtu_exception_navigation: {
            bind: 'mtu-exception-handler-navigation',
            link: {
              page: 'mtuException'
            }
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-alert-manager-modal'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const MOBILE_OPX_DM_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-opx-mobile-top-up-dm-mx',
    familyPath: 'glomo-opx-mobile-top-up-dm',
    properties: {
      localCurrency: LOCAL_CURRENCY,
      autoActivateStep: true,
      repeatOperative: true,
      decorateSteps: true,
      defaultAmounts: [50, 100, 150, 200, 300, 500, 750, 1000],
      cellsConnections: {
        params: {
          user: 'global_user',
          customerId: 'global_user_id'
        },
        in: {
          [getChannelName('set_dashboard_accounts')]: {
            bind: 'parsedAccounts'
          },
          [getChannelName('set_product_detail_accounts')]: {
            bind: 'parsedAccounts'
          },
          [getChannelName('init_opx_retargeting')]: {
            bind: 'initOpxByDeepLink'
          },
          navigation_from_deep_link_to_operations: {
            bind: 'deepLinkVerification'
          },
          global_login_success: {
            bind: 'setCustomerPhoneNumber'
          },
          native_user_id: {
            bind: 'setCustomerPhoneNumber'
          },
          [getChannelName('set_account_email')]: {
            bind: 'accountEmail'
          },
          [getChannelName('set_customer_info')]: {
            bind: 'customerInfo'
          },
          [getChannelName('account_selected')]: {
            bind: 'selectedAccount'
          },
          [getChannelName('set_selected_account_info')]: {
            bind: 'selectedAccount'
          },
          [getChannelName('set_selected_account_from_modal')]: {
            bind: 'selectedAccount'
          },
          [getChannelName('recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('contact_recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('add_number_recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('set_form_body_add_contact')]: {
            bind: 'setFormBody'
          },
          [getChannelName('number_existing_recipient_selected')]: {
            bind: 'setFormBody'
          },
          [getChannelName('open_providers_modal')]: {
            bind: 'preventCloseOnCompanySelected'
          },
          [getChannelName('clean_existing_contact')]: {
            bind: 'resetExistingContact'
          },
          global_alias_in_use_exit: {
            bind: 'resetExistingContact'
          },
          global_contact_found_mobile_exit: {
            bind: 'resetExistingContact'
          },
          [getChannelName('my_number_selected')]: {
            bind: 'setMyNumberConfigModal'
          },
          [getChannelName('build_saved_contact')]: {
            bind: 'verifyContacts'
          },
          [getChannelName('send_contacts')]: {
            bind: 'setContacts'
          },
          [getChannelName('get_list_contacts_error')]: {
            bind: 'setContacts'
          },
          [getChannelName('get_contacts_success')]: {
            bind: 'setContacts'
          },
          [getChannelName('new_number_selected')]: {
            bind: 'setNewContactConfigModal'
          },
          [getChannelName('set_contact_from_contact_list')]: {
            bind: 'getNumberFromAgenda'
          },
          [getChannelName('form_body_add_contact')]: {
            bind: 'verifyAlias'
          },
          [getChannelName('add_contact_success')]: {
            bind: 'addContactSuccess'
          },
          [getChannelName('recipient_changed')]: {
            bind: 'addContactSuccess'
          },
          [getChannelName('close_contacts')]: {
            bind: 'setSaveContactConfigModal'
          },
          [getChannelName('send_number_detail')]: {
            bind: 'verifyContacts'
          },
          global_contact_found_mobile_confirm: {
            bind: 'verifyContactFound'
          },
          [getChannelName('set_companies')]: {
            bind: 'setCompanies'
          },
          [getChannelName('show_number_saved_message')]: {
            bind: 'setAndShowMessageSavingContact'
          },
          [getChannelName('selected_amount')]: {
            bind: 'setOperation'
          },
          [getChannelName('set_amounts_company_selected')]: {
            bind: 'setAmountCompanySelected'
          },
          [getChannelName('register_step')]: {
            bind: 'registerStep'
          },
          [getChannelName('origin_product_changed')]: {
            bind: 'changedStep'
          },
          [getChannelName('changed_recipient')]: {
            bind: 'changedStep'
          },
          [getChannelName('changed_amount_step')]: {
            bind: 'changedStep'
          },
          [getChannelName('show_registered_operation_message')]: {
            bind: 'showRegisteredMessageRecipient'
          },
          [getChannelName('next_step')]: {
            bind: 'nextStep'
          },
          [getChannelName('continue_next_step')]: {
            bind: 'nextStep'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'manageStateSteps'
          },
          [getChannelName('change_amount_collapse_other_step')]: {
            bind: 'closeModalAndOpenStep'
          },
          [getChannelName('exit_header_button')]: {
            bind: 'manageBackButton'
          },
          __bridge_cancelled_back_navigation: {
            bind: 'manageBackButton'
          },
          global_exit_confirm_mobile_accepted: {
            bind: 'reset'
          },
          global_mobile_top_up_not_confirmed_error: {
            bind: 'reset'
          },
          global_mobile_top_up_duplicated_error: {
            bind: 'reset'
          },
          [getChannelName('go_to_review')]: {
            bind: 'reset'
          },
          [getChannelName('more_info_company')]: {
            bind: 'alertManagerMoreInfoCompany'
          },
          [getChannelName('change_contact')]: {
            bind: 'openAlertModalChangeContact'
          },
          [getChannelName('permission_type')]: {
            bind: 'setPermissionType'
          },
          [getChannelName('manage_error_limits_user')]: {
            bind: 'openModalErrorLimitsUser'
          },
          [getChannelName('request_operation_registries_success')]: {
            bind: 'closeOperationRegistries'
          },
          [getChannelName('request_operation_registries_error')]: {
            bind: 'closeOperationRegistries'
          },
          [getChannelName('exit_mobile_top_up_recipient')]: {
            bind: 'clearRecipient'
          },
          mobile_top_up_exit_contacts_recipient: {
            bind: 'clearRecipient'
          },
          [getChannelName('set_button_cancel')]: {
            bind: 'setBackButton'
          },
          [getChannelName('set_is_on_request')]: {
            bind: 'isOnRequest'
          },
          global_contact_change_mobile_confirm: {
            bind: 'hideAmountInfomessage'
          },
          blue_redirect_data_account_selected: {
            bind: 'selectedAccount'
          },
          blue_amount_provider: {
            bind: 'setOperation'
          },
          blue_redirect_recharges_contacts: {
            bind: 'setFormBlue'
          },
          mobile_top_up_company_name_selected: {
            bind: 'setBackButton'
          }
        },
        out: {
          [getChannelName('set_accounts')]: {
            bind: 'set-accounts'
          },
          [getChannelName('set_default_amounts')]: {
            bind: 'set-default-amounts'
          },
          [getChannelName('set_properties_product_selector_one_account')]: {
            bind: 'set-properties'
          },
          [getChannelName('set_properties_insufficient_balance_accounts')]: {
            bind: 'set-properties-insufficient-balance-accounts',
            analytics: ANALYTICS.SITE_ERROR_INSUFFICIENT_BALANCE
          },
          [getChannelName('prevent_close_company_selected')]: {
            bind: 'prevent-close-company-selected'
          },
          [getChannelName('set_recipient_selected_properties')]: {
            bind: 'set-selected-properties'
          },
          [getChannelName('provider_id_company')]: {
            bind: 'set-provider-id'
          },
          [getChannelName('change_amount_collapse_other_step')]: {
            bind: 'change-amount'
          },
          [getChannelName('set_operation_amount')]: {
            bind: 'set-operation-amount'
          },
          [getChannelName('form_body_recipient_completed')]: {
            bind: 'recipient-completed'
          },
          [getChannelName('go_to_new_recipient')]: {
            bind: 'show-on-new-recipient'
          },
          [getChannelName('change_alias_form_body')]: {
            bind: 'change-alias-form-body'
          },
          [getChannelName('header_title')]: {
            bind: 'header-title'
          },
          [getChannelName('set_properties_my_number')]: {
            bind: 'set-properties-for-modal-my-number'
          },
          [getChannelName('set_properties_new_number')]: {
            bind: 'set-properties-for-modal-new-contact'
          },
          [getChannelName('set_properties_contact_found')]: {
            bind: 'set-properties-for-modal-contact-found'
          },
          [getChannelName('set_properties_save_contact')]: {
            bind: 'set-properties-for-modal-save-contact'
          },
          [getChannelName('open_recipient_modal')]: {
            bind: 'open-modal'
          },
          [getChannelName('request_saved_contacts')]: {
            bind: 'request-saved-contacts'
          },
          [getChannelName('contacts_send')]: {
            bind: 'send-contacts-request'
          },
          [getChannelName('header_title_contacts')]: {
            bind: 'header-title-contacts'
          },
          [getChannelName('set_input_mobile')]: {
            bind: 'set-input-contact'
          },
          [getChannelName('clear_inputs')]: {
            bind: 'clean-inputs-contact'
          },
          [getChannelName('add_new_contact_to_agenda')]: {
            bind: 'add-new-contact'
          },
          [getChannelName('add_contact_recipient_selected')]: {
            bind: 'new-number-add-contact-selected'
          },
          [getChannelName('get_customer_email')]: {
            bind: 'get-customer-email'
          },
          [getChannelName('number_existing_recipient_selected')]: {
            bind: 'new-number-already-in-contacts-with-company-selected'
          },
          [getChannelName('set_form_body_add_number')]: {
            bind: 'set-form-body-add-number'
          },
          [getChannelName('set_show_success_message_properties')]: {
            bind: 'set-show-message'
          },
          [getChannelName('show_success_message_saved_contact')]: {
            bind: 'show-message'
          },
          [getChannelName('operational_registries_api')]: {
            bind: 'request-operation-registries'
          },
          [getChannelName('show_registered_message')]: {
            bind: 'show-registered-contact-message'
          },
          [getChannelName('reset_recipient')]: {
            bind: 'reset-mobile-top-up-recipient'
          },
          [getChannelName('clear_mobile_recipient')]: {
            bind: 'clear-mobile-top-up-recipient'
          },
          [getChannelName('clean_inputs_mobile_recipient')]: {
            bind: 'clean-inputs-mobile-top-up-recipient'
          },
          [getChannelName('clean_existing_contact')]: {
            bind: 'clean-inputs-mobile-top-up-recipient'
          },
          [getChannelName('reset_modal_selector')]: {
            bind: 'reset-modal-selector'
          },
          [getChannelName('set_companies_for_modal')]: {
            bind: 'set-modal-companies'
          },
          [getChannelName('is_existing_contact')]: {
            bind: 'is-existing-contact'
          },
          [getChannelName('product_complete')]: {
            bind: 'set-product'
          },
          [getChannelName('message_company')]: {
            bind: 'set-properties-amount'
          },
          close_control_veil: {
            bind: 'hide-spinner'
          },
          [getChannelName('hide_confirm')]: {
            bind: 'hide-confirm'
          },
          [getChannelName('set_properties_enter_amount')]: {
            bind: 'set-properties-enter-amount'
          },
          [getChannelName('show_confirm')]: {
            bind: 'show-confirm'
          },
          [getChannelName('show_summary')]: {
            bind: 'can-execute-changed'
          },
          [getChannelName('set_selected_account_info')]: {
            bind: 'only-one-selected'
          },
          global_retargeting_go_next_step: {
            bind: 'only-one-selected'
          },
          [getChannelName('set_amounts')]: {
            bind: 'set-amounts'
          },
          [getChannelName('manage_error_limits_user')]: {
            bind: 'error-limits-user'
          },
          [getChannelName('get_provider_amount_limits')]: {
            bind: 'get-provider-amount-limits'
          },
          [getChannelName('scroll_to_step')]: {
            bind: 'cells-scroll-zone'
          },
          mobile_top_up_request_native_permission: {
            bind: 'set-permission-type'
          },
          [getChannelName('close_btn_modal')]: {
            bind: 'close-btn'
          },
          [getChannelName('reset_close_btn')]: {
            bind: 'reset-properties-formulary'
          },
          global_alert_manager_open_with_settings: {
            bind: 'open-alert-manager-modal'
          },
          [getChannelName('reset_product_selector')]: {
            bind: 'reset-product-selector'
          },
          [getChannelName('reset_fixed_account_step')]: {
            bind: 'reset-product-selector'
          },
          [getChannelName('reset_recipient_selector')]: {
            bind: 'reset-recipient-selector'
          },
          [getChannelName('reset_provider_id')]: {
            bind: 'reset-provider-id'
          },
          [getChannelName('reset_enter_amount')]: {
            bind: 'reset-enter-amount'
          },
          [getChannelName('hide_discount_info_message')]: {
            bind: 'hide-discount-info-message'
          },
          [getChannelName('reset_page')]: {
            bind: 'on-reset'
          },
          blue_redirect_top_up_recharges: {
            bind: 'set-operation-recharge-blue'
          },
          blue_amount_recharges: {
            bind: 'set-amount-recharge-blue'
          },
          blue_save_contact_data: {
            bind: 'top-up-save-contacts-selection'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica,
      newCellsConnections: {
        add: {
          out: {
            global_alert_manager_open_with_settings_spherica: {
              bind: 'open-alert-manager-modal'
            }
          }
        },
        remove: {
          out: [
            'global_alert_manager_open_with_settings'
          ]
        }
      }
    }
  };

  const MODAL_SELECTOR_COMPONENT = {
    zone: 'app__transactional',
    tag: 'cells-modal-selector',
    tagSpherica: 'cells-modal-selector-spherica',
    type: 'UI',
    properties: {
      autoClose: true,
      noFocusOrigin: true,
      cellsConnections: {
        in: {
          [getChannelName('set_companies_for_modal')]: {
            bind: 'items'
          },
          [getChannelName('open_providers_modal')]: {
            bind: 'open'
          },
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('change_recipient')]: {
            bind: 'reset'
          },
          global_contact_found_mobile_exit: {
            bind: 'reset'
          },
          [getChannelName('reset_modal_selector')]: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('provider_selected')]: {
            bind: 'item-selected-changed'
          },
          [getChannelName('modal_visibility_changed')]: {
            bind: 'opened-changed'
          },
          [getChannelName('company_name_selected')]: {
            bind: 'item-clicked'
          }
        }
      }
    }
  };

  const ACCOUNTS_STEP_COMPONENT = {
    zone: 'app__main',
    tag: 'cells-step-product-selector',
    tagSpherica: 'cells-step-product-selector-spherica',
    type: 'UI',
    properties: {
      currentStep: 1,
      maxSteps: MAX_STEPS,
      active: true,
      firstStep: true,
      maxLimit: 1000,
      id: 'accountStep',
      stepTitle: 'mobile-top-up-account-title-success',
      localCurrency: LOCAL_CURRENCY,
      description: 'mobile-top-up-account-title-description',
      productsListLabel: getLocaleName('accounts-title'),
      errorMessage: 'mobile-top-up-insufficient-balance-in-accounts',
      errorTextMessage: 'mobile-top-up-insufficient-balance-in-accounts',
      changeLabel: 'mobile-top-up-change-contact-confirm',
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_accounts')]: {
            bind: 'products'
          },
          [getChannelName('set_properties_product_selector_one_account')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_properties_insufficient_balance_accounts')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_selected_account_from_modal')]: {
            bind: 'selected'
          },
          [getChannelName('reset_product_selector')]: {
            bind: 'reset'
          },
          [getChannelName('reset_fixed_account_step')]: {
            bind: 'fixed'
          },
          blue_redirect_data_account_selected: {
            bind: 'preselectProduct'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-step-state'
          },
          top_up_collapse: {
            bind: 'select-product'
          },
          [getChannelName('next_step')]: {
            bind: 'on-change-product-selected'
          },
          [getChannelName('account_selected')]: {
            bind: 'select-product'
          },
          [getChannelName('continue_next_step')]: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName('all_accounts')]: {
            bind: 'view-all'
          },
          [getChannelName('origin_product_changed')]: {
            bind: 'origin-changed'
          },
          global_retargeting_go_next_step: {
            bind: 'select-product'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'mobile-top-up-account-title-success-spherica',
      description: 'mobile-top-up-step-accounts-description',
      changeLabel: 'mobile-top-up-change-contact-confirm-spherica',
      changeOriginText: 'mobile-top-up-change-contact-change-origin-button-label'
    }
  };

  const PRODUCT_SELECTOR_MODAL_COMPONENT = {
    zone: 'app__transactional',
    tag: 'cells-product-selector-modal',
    tagSpherica: 'cells-product-selector-modal-spherica',
    type: 'UI',
    properties: {
      modalTitle: getLocaleName('selector-modal-title'),
      productsListTitle: getLocaleName('selector-modal-list-title'),
      localCurrency: LOCAL_CURRENCY,
      showCloseModalButton: true,
      closeButtonLabel: getLocaleName('selector-modal-close-button'),
      iOSFixedHeader: IS_NATIVE_IOS,
      cellsConnections: {
        in: {
          [getChannelName('all_accounts')]: {
            bind: 'treatProducts'
          }
        },
        out: {
          [getChannelName('set_selected_account_from_modal')]: {
            bind: 'selected-product',
            analytics: ANALYTICS._getAppSteps('appStep2Destination')
          },
          global_retargeting_go_next_step: {
            bind: 'selected-product'
          }
        }
      }
    }
  };

  const STEP_RECIPIENT_SELECTOR_COMPONENT = {
    zone: 'app__main',
    tag: 'cells-step-recipient-selector',
    tagSpherica: 'cells-step-recipient-selector-spherica',
    type: 'UI',
    properties: {
      className: 'transfer',
      currentStep: 2,
      maxSteps: MAX_STEPS,
      stepTitle: getLocaleName('recipient-phone-top-up'),
      stepDescription: getLocaleName('recipient-description'),
      labelForMe: getLocaleName('recipient-selector-for-me'),
      changeSourceButtonLabel: getLocaleName('recipient-change-source-button'),
      showContactBtnList: true,
      hideMyAccounts: true,
      hideContactList: true,
      showMyNumberBtn: true,
      showContactsBtnIcon: 'coronita:attached',
      showAlertBeforeUncollapsing: true,
      avatarIsNotAlwaysNeeded: true,
      filledClassIconMessage: 'custom-registration-message',
      filledIconMessageType: 'info-light',
      filledIconMessageMessage: 'mobile-top-up-contact-registered',
      filledIconMessageIcon: 'coronita:correct',
      filledIconMessageIconSize: 10,
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('form_body_recipient_completed')]: {
            bind: 'closeStep'
          },
          [getChannelName('company_name_selected')]: {
            bind: 'setCompany'
          },
          [getChannelName('show_registered_message')]: {
            bind: 'registeredOperationShown'
          },
          [getChannelName('hide_registered_operation_message')]: {
            bind: 'registeredOperationShown'
          },
          global_contact_change_mobile_confirm: {
            bind: 'openStepAndClearRecipient'
          },
          [getChannelName('go_to_new_recipient')]: {
            bind: 'onNewRecipient'
          },
          [getChannelName('set_recipient_selected_properties')]: {
            bind: 'setProperties'
          },
          [getChannelName('reset_recipient_selector')]: {
            bind: 'reset'
          },
          blue_redirect_top_up_recharges: {
            bind: 'isBlueFlow'
          }
        },
        out: {
          global_retargeting_go_next_step: {
            bind: 'check-open-confirm'
          },
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('next_step')]: {
            bind: 'check-open-confirm'
          },
          [getChannelName('collapse_other_step')]: {
            bind: 'change-step-state'
          },
          [getChannelName('changed_recipient')]: {
            bind: 'change-step-state'
          },
          [getChannelName('hide_registered_operation_message')]: {
            bind: 'update-decorated'
          },
          [getChannelName('show_registered_operation_message')]: {
            bind: 'dont-change-and-continue'
          },
          [getChannelName('recipient_changed')]: {
            bind: 'recipient-selector-opened-and-cleared'
          },
          [getChannelName('my_number_selected')]: {
            bind: 'recipient-selected-for-my-number',
            analytics: ANALYTICS._getAdvancedFootprints('myNumber')
          },
          [getChannelName('change_contact')]: {
            bind: 'change-recipient-selector-show-alert'
          },
          [getChannelName('build_saved_contact')]: {
            bind: 'show-saved-contacts',
            analytics: ANALYTICS._getAdvancedFootprints('contactsAgenda')
          },
          [getChannelName('new_number_selected')]: {
            bind: 'new-recipient',
            analytics: ANALYTICS._getAdvancedFootprints('newNumber')
          }
        }
      }
    },
    propertiesSpherica: {
      newRecipientIcon: 'coronita:add',
      showContactsBtnIcon: 'coronita:address-book',
      changeLabel: 'mobile-top-up-change-contact-confirm-spherica',
      filledClassIconMessage: '',
      filledIconMessageType: 'success-inline',
      filledIconMessageIcon: 'coronita:right'
    }
  };

  const HEADER_CONTACTS_COMPONENT = {
    zone: 'recipientModalCONTACTS.heading',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    tagSpherica: 'bbva-type-text',
    familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
    type: 'UI',
    render: 'litElement',
    properties: {
      size: 'XS',
      alignment: 'center',
      cellsConnections: {
        in: {
          [getChannelName('header_title_contacts')]: {
            bind: 'text'
          }
        }
      }
    }
  };

  const CONTACTS_MODAL_RECIPIENT_COMPONENT = {
    zone: 'app__transactional',
    tag: 'cells-bottom-modal',
    tagSpherica: 'cells-bottom-modal-spherica',
    type: 'UI',
    container: true,
    properties: {
      id: 'recipientModalCONTACTS',
      className: 'body-padding--remove',
      fullHeight: true,
      closeIconId: 'coronita:close',
      handleStoppedScroll: true,
      cellsConnections: {
        in: {
          [getChannelName('contacts_send')]: {
            bind: 'opened'
          },
          [getChannelName('contact_recipient_selected')]: {
            bind: 'close'
          },
          global_exit_confirm_mobile_accepted: {
            bind: 'close'
          }
        },
        out: {
          mobile_top_up_exit_contacts_recipient: {
            bind: 'cells-bottom-modal-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      headerCloseIconText: 'cells-molecule-header-spherica-close',
      newCellsConnections: {
        add: {
          in: {
            [getChannelName('header_title_contacts')]: {
              bind: 'title'
            }
          }
        }
      }
    }
  };

  const HEADER_TEXT_COMPONENT = {
    zone: 'recipientModal.heading',
    tag: 'bbva-text',
    familyPath: '@bbva-web-components/bbva-text',
    tagSpherica: 'bbva-type-text',
    familyPathSpherica: '@bbva-spherica-components/bbva-type-text',
    type: 'UI',
    render: 'litElement',
    properties: {
      size: 'XS',
      alignment: 'center',
      cellsConnections: {
        in: {
          [getChannelName('header_title')]: {
            bind: 'text'
          }
        }
      }
    }
  };

  const RECIPIENT_MODAL_COMPONENT = {
    zone: 'app__transactional',
    tag: 'cells-bottom-modal',
    tagSpherica: 'cells-bottom-modal-spherica',
    type: 'UI',
    container: true,
    properties: {
      className: 'body-padding--remove',
      id: 'recipientModal',
      fullHeight: true,
      closeIconId: 'coronita:close',
      handleStoppedScroll: true,
      withBackdrop: true,
      preventClose: true,
      cellsConnections: {
        in: {
          [getChannelName('open_recipient_modal')]: {
            bind: 'opened'
          },
          [getChannelName('recipient_selected')]: {
            bind: 'close'
          },
          [getChannelName('add_contact_recipient_selected')]: {
            bind: 'close'
          },
          [getChannelName('add_number_recipient_selected')]: {
            bind: 'close'
          },
          [getChannelName('number_existing_recipient_selected')]: {
            bind: 'close'
          },
          global_exit_confirm_mobile_accepted: {
            bind: 'close'
          },
          [getChannelName('prevent_close_company_selected')]: {
            bind: 'preventClose'
          },
          [getChannelName('close_btn_modal')]: {
            bind: 'preventClose'
          }
        },
        out: {
          [getChannelName('set_button_cancel')]: {
            bind: 'prevent-close'
          },
          [getChannelName('exit_mobile_top_up_recipient')]: {
            bind: 'cells-bottom-modal-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      headerCloseIconText: 'cells-molecule-header-spherica-close',
      newCellsConnections: {
        add: {
          in: {
            [getChannelName('header_title')]: {
              bind: 'title'
            }
          }
        }
      }
    }
  };

  const RECIPIENT_MOBILE_TOP_UP_COMPONENT = {
    zone: 'recipientModal.',
    type: 'UI',
    tag: 'glomo-mobile-top-up-recipient',
    tagSpherica: 'glomo-mobile-top-up-recipient-spherica',
    properties: {
      iconVisibility: 'always',
      allowedCharsName: '[A-Za-z ]',
      cellsConnections: {
        in: {
          [getChannelName('parsed_user')]: {
            bind: 'user'
          },
          global_contact_found_mobile_exit: {
            bind: 'cleanInputs'
          },
          [getChannelName('set_properties_my_number')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_properties_new_number')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_properties_contact_found')]: {
            bind: 'setProperties'
          },
          [getChannelName('set_properties_save_contact')]: {
            bind: 'setProperties'
          },
          [getChannelName('clear_mobile_recipient')]: {
            bind: 'setProperties'
          },
          [getChannelName('provider_selected')]: {
            bind: 'company'
          },
          [getChannelName('set_input_mobile')]: {
            bind: 'setInput'
          },
          [getChannelName('clean_inputs_mobile_recipient')]: {
            bind: 'cleanInputs'
          },
          [getChannelName('clear_inputs')]: {
            bind: 'cleanInputs'
          },
          [getChannelName('reset_recipient')]: {
            bind: 'reset'
          },
          mobile_top_up_clean_existing_contact: {
            bind: 'reset'
          },
          blue_redirect_top_up_new_contact_blue_flag: {
            bind: 'isDataFromBlue'
          }
        },
        out: {
          [getChannelName('send_number_detail')]: {
            bind: 'glomo-mobile-top-up-recipient-click-focus-button'
          },
          [getChannelName('save_id_company')]: {
            bind: 'save-id-company'
          },
          [getChannelName('open_providers_modal')]: {
            bind: 'open-document-modal-selector'
          },
          [getChannelName('permission_type')]: {
            bind: 'permission-native-contacts'
          },
          [getChannelName('form_body_add_contact')]: {
            bind: 'call-save-contacts-dm'
          },
          [getChannelName('recipient_selected')]: {
            bind: 'glomo-mobile-top-up-recipient-click-form-button'
          }
        }
      }
    }
  };

  const AMOUNT_STEP_COMPONENT = {
    zone: 'app__main',
    tag: 'cells-step-enter-amount',
    tagSpherica: 'cells-step-enter-amount-spherica',
    type: 'UI',
    properties: {
      currentStep: 3,
      maxSteps: MAX_STEPS,
      stepDescription: getLocaleName('enter-amount-description'),
      changeLabel: getLocaleName('change-label-button'),
      lastStep: true,
      id: 'amountStep',
      hideAvailableBalance: true,
      uiMode: 'graph',
      localCurrency: LOCAL_CURRENCY,
      currency: LOCAL_CURRENCY,
      keepOpened: true,
      openAmountStepMode: 'graph',
      hasAmountGroupButton: true,
      disableAmountGroupWarning: true,
      stepTitle: getLocaleName('step-enter-amount-title'),
      cellsConnections: {
        in: {
          [getChannelName('init_page')]: {
            bind: 'initialize'
          },
          [getChannelName('set_default_amounts')]: {
            bind: 'amounts'
          },
          [getChannelName('set_amounts')]: {
            bind: 'amounts'
          },
          [getChannelName('message_company')]: {
            bind: 'setProperties'
          },
          [getChannelName('change_amount_collapse_other_step')]: {
            bind: 'reset'
          },
          [getChannelName('set_properties_enter_amount')]: {
            bind: 'setProperties'
          },
          [getChannelName('hide_discount_info_message')]: {
            bind: 'discountInfoMessage'
          },
          [getChannelName('reset_enter_amount')]: {
            bind: 'reset'
          },
          blue_amount_recharges: {
            bind: 'sendAmount'
          }
        },
        out: {
          [getChannelName('register_step')]: {
            bind: 'register-step'
          },
          [getChannelName('changed_amount_step')]: {
            bind: 'change-step-state'
          },
          [getChannelName('next_step')]: {
            bind: 'amount-group-button-pressed'
          },
          [getChannelName('reset_scroll_top')]: {
            bind: 'amount-group-button-pressed'
          },
          [getChannelName('selected_amount')]: {
            bind: 'amount-group-button-pressed'
          },
          [getChannelName('more_info_company')]: {
            bind: 'on-button-click'
          },
          global_retargeting_go_next_step: {
            bind: 'amount-group-button-pressed'
          }
        }
      }
    },
    propertiesSpherica: {
      stepTitle: 'mobile-top-up-step-enter-amount-title-spherica',
      stepDescription: getLocaleName('enter-amount-description-spherica'),
      changeLabel: getLocaleName('change-contact-confirm-spherica'),
      showClassIconMessage: 'message-icon above-input-icon-message collapsed-info-box-icon-message',
      stButtonClass: 'btn-link'
    }
  };

  const OPERATION_SUMMARY_COMPONENT = {
    zone: 'app__confirm',
    type: 'UI',
    tag: 'cells-summary-view',
    tagSpherica: 'cells-summary-view-spherica',
    properties: {
      buttonLabel: 'mobile-top-up-continue',
      showAddition: true,
      forceFeesMessage: getLocaleName('fees-message'),
      classCommission: 'cells-summary-view--commission custom-styled-text',
      showLoadingSkeleton: true,
      localCurrency: LOCAL_CURRENCY,
      summaryViewTitle: getLocaleName('recharge-import'),
      cellsConnections: {
        in: {
          [getChannelName('product_complete')]: {
            bind: 'operation'
          }
        },
        out: {
          [getChannelName('summary_resume')]: {
            bind: 'summary-closed'
          },
          global_retargeting_go_next_step: {
            bind: 'summary-closed'
          }
        }
      }
    },
    propertiesSpherica: {
      summaryViewTitle: getLocaleName('recharge-import-spherica'),
      buttonLabel: getLocaleName('confirm-spherica'),
      primaryButtonClass: 'positive'
    }
  };

  const SERVICE_PROVIDERS_DM_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-service-providers-mobile-top-up-dm',
    properties: {
      host,
      localCurrency: LOCAL_CURRENCY,
      mobileApiVersion: CONFIG.globalServices.versions.mobiles,
      exchangeRateLiteral: 'cells-summary-view-exchange-rate-simple',
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('open_providers_modal')]: {
            bind: 'getProviders'
          },
          [getChannelName('provider_id_company')]: {
            bind: 'providerId'
          },
          global_contact_change_mobile_confirm: {
            bind: 'reset'
          },
          [getChannelName('reset_provider_id')]: {
            bind: 'providerId'
          }
        },
        out: {
          [getChannelName('providers_list')]: {
            bind: 'providers-formatted-changed'
          },
          [getChannelName('set_amounts_company_selected')]: {
            bind: 'mobile-top-up-provider-possible-amounts'
          }
        }
      }
    }
  };

  const CAMPAIGNS_DM_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-campaigns',
    properties: {
      host,
      requiredToken,
      apiVersion: CONFIG.globalServices.versions.campaigns,
      native,
      cellsConnections: {
        in: {
          [getChannelName('retrieve_campaigns')]: {
            bind: 'getOffers'
          }
        },
        out: {
          [getChannelName('get_user_offer_success')]: {
            bind: 'set-offers'
          },
          [getChannelName('get_user_offer_error')]: {
            bind: 'error-on-retrieve-campaigns'
          }
        }
      }
    }
  };

  const CONTACTS_BOOK_DM_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-contacts-book-bgadpmock',
    properties: {
      host,
      requiredToken,
      version: CONFIG.globalServices.versions.contactsBook,
      native,
      cellsConnections: {
        in: {
          [getChannelName('request_contacts')]: {
            bind: 'getContacts'
          },
          [getChannelName('add_new_contact')]: {
            bind: 'postContact'
          },
          [getChannelName('contacts_agenda_delete_contact')]: {
            bind: 'deleteContact'
          },
          global_delete_number_contact_agenda_confirm: {
            bind: 'deleteContactInformation'
          }
        },
        out: {
          [getChannelName('contacts_agenda_add_number_successful')]: {
            bind: 'post-contacts-contacts-information-success'
          },
          [getChannelName('get_contacts_list_error')]: {
            bind: 'error-on-get-contacts-book-contacts'
          },
          [getChannelName('get_contacts_success')]: {
            bind: 'get-contacts-book-contacts-success'
          },
          [getChannelName('contacts_agenda_delete_contact_successful')]: {
            bind: 'delete-contact-from-contacts-success'
          },
          [getChannelName('contacts_agenda_delete_contacts_information_successful')]: {
            bind: 'delete-contacts-contacts-information-success'
          },
          [getChannelName('contacts_agenda_error_delete')]: {
            bind: 'error-on-delete-contact-from-contacts'
          },
          [getChannelName('contacts_agenda_error_delete_contacts_information')]: {
            bind: 'error-on-delete-contacts-contacts-information'
          },
          [getChannelName('get_contacts_error')]: {
            bind: 'error-on-post-contacts-book-contact'
          }
        }
      }
    }
  };

  const MOBILE_CONTACTS_DM_COMPONENT = {
    zone: 'app__main',
    tag: 'glomo-mobile-contacts-dm',
    type: 'DM',
    properties: {
      numberLength: 10,
      cellsConnections: {
        in: {
          mobile_top_up_request_permissions_success: {
            bind: 'pickContact'
          }
        },
        out: {
          [getChannelName('set_contact_from_contact_list')]: {
            bind: 'contact-changed'
          }
        }
      }
    }
  };

  const MOBILE_PERMISSIONS_PLUGIN_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-mobile-permissions-plugin',
    properties: {
      cellsConnections: {
        in: {
          mobile_top_up_request_native_permission: {
            bind: 'request'
          }
        },
        out: {
          mobile_top_up_request_permissions_success: {
            bind: 'permissions-request-success'
          },
          mobile_top_up_request_permissions_error: {
            bind: 'permissions-request-error'
          }
        }
      }
    }
  };

  const CONTACTS_AGENDA_DM_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'glomo-contacts-agenda-dm-mx',
    familyPath: 'glomo-contacts-agenda-dm',
    properties: {
      noContactsImg: './images/empty_micro.svg',
      errorMessageIconPath: './images/errors/error.svg',
      hasNumber: true,
      minErrorModal: true,
      deleteEvent: true,
      mobiles: true,
      cellsConnections: {
        in: {
          [getChannelName('reset_page')]: {
            bind: 'reset'
          },
          [getChannelName('contacts_send')]: {
            bind: 'parseContacts'
          },
          [getChannelName('start_message')]: {
            bind: 'sendInfoNoContacts'
          },
          [getChannelName('delete_swiped_contact_number')]: {
            bind: 'deleteNumberModalConfig'
          },
          [getChannelName('contacts_agenda_delete_contacts_information_successful')]: {
            bind: 'deleteContactNumberSuccessfully'
          },
          [getChannelName('delete_swiped_contact')]: {
            bind: 'deleteModalConfig'
          },
          [getChannelName('contacts_agenda_delete_contact_successful')]: {
            bind: 'deleteContactNumberSuccessfully'
          },
          ch_mobile_top_up_delete_contact_successfully: {
            bind: 'deleteContactProductSuccessfully'
          },
          [getChannelName('set_type_search')]: {
            bind: 'isNumericSearch'
          }
        },
        out: {
          [getChannelName('set_empty_message')]: {
            bind: 'no-contacts-saved'
          },
          [getChannelName('parsed_contacts_changed')]: {
            bind: 'parsed-contacts-changed'
          },
          [getChannelName('request_contacts')]: {
            bind: 'get-contacts-list'
          },
          [getChannelName('add_new_contact')]: {
            bind: 'add-new-contact'
          },
          global_contacts_agenda_open_delete_confirm_modal: {
            bind: 'open-confirm-delete-modal'
          },
          [getChannelName('contacts_agenda_delete_contact')]: {
            bind: 'delete-contact'
          },
          ch_mobile_top_up_delete_contact_successfully_toast: {
            bind: 'success-message-snackbar'
          },
          global_alert_manager_open_with_settings_spherica: {
            bind: 'open-confirm-delete-modal-spherica'
          }
        }
      }
    },
    propertiesSpherica: {
      isSpherica: sphericaPageUtils.isSpherica(),
      noContactsImg: './images/spherica/empty_state_day.svg'
    }
  };

  const DM_APIS_LIMITS_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-limits',
    properties: {
      host,
      limitsApiVersion: CONFIG.globalServices.versions.limitsV1,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('operational_limits_api')]: {
            bind: 'getLimitsPeriod'
          }
        },
        out: {
          [getChannelName('set_limits_succesful')]: {
            bind: 'set-limits'
          },
          [getChannelName('set-limits-error')]: {
            bind: 'cells-dm-global-apis-error-on-get-limits'
          }
        }
      }
    }
  };

  const DM_APIS_OPERATION_REGISTRIES_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    tag: 'cells-dm-global-apis-operation-registries',
    properties: {
      host,
      operationRegistresApiVersion: CONFIG.globalServices.versions.operationRegistries,
      native,
      requiredToken,
      cellsConnections: {
        in: {
          [getChannelName('operational_registries_api')]: {
            bind: 'postRecoverRegistry'
          }
        },
        out: {
          [getChannelName('request_operation_registries_success')]: {
            bind: 'success-on-post-operation-registries-data'
          },
          [getChannelName('request_operation_registries_error')]: {
            bind: 'error-on-post-operation-registries-data'
          }
        }
      }
    }
  };


  const CONTACTS_SELECTOR_COMPONENT = {
    zone: 'recipientModalCONTACTS.',
    type: 'UI',
    tag: 'cells-contact-selector',
    tagSpherica: 'cells-contact-selector-spherica',
    properties: {
      listActions: ACTIONS,
      emptyImage: './images/empty_micro.svg',
      cellsConnections: {
        in: {
          [getChannelName('parsed_contacts_changed')]: {
            bind: 'listItems'
          },
          blue_save_contact_data: {
            bind: 'dataFromBlue'
          },
          [getChannelName('set_empty_message')]: {
            bind: 'setEmptyMessage'
          },
          mobile_top_up_exit_contacts_recipient: {
            bind: 'reset'
          }
        },
        out: {
          [getChannelName('contact_recipient_selected')]: {
            bind: 'cells-contact-selector-item-clicked'
          },
          [getChannelName('delete_swiped_contact')]: {
            bind: 'cells-contact-selector-delete'
          },
          [getChannelName('delete_swiped_contact_number')]: {
            bind: 'cells-contact-selector-delete-number'
          },
          [getChannelName('set_type_search')]: {
            bind: 'cells-contact-selector-type-search'
          },
          [getChannelName('start_message')]: {
            bind: 'cells-contact-selector-start-message'
          }
        }
      }
    },
    propertiesSpherica: {
      emptyImage: './images/spherica/empty_state_day.svg'
    }
  };

  const SAVING_CONTACT_MESSAGE_COMPONENT = {
    zone: 'app__transactional',
    type: 'UI',
    tag: 'cells-bottom-modal-message',
    tagSpherica: 'cells-bottom-modal-message-spherica',
    properties: {
      autoHide: true,
      icon: 'coronita:correct',
      iconSize: '24',
      iOSFixedHeader: IS_NATIVE_IOS,
      time: 3000,
      type: 'success',
      cellsConnections: {
        in: {
          [getChannelName('show_success_message_saved_contact')]: {
            bind: 'open'
          },
          [getChannelName('set_show_success_message_properties')]: {
            bind: 'setProperties'
          },
          ch_mobile_top_up_delete_contact_successfully_toast: {
            bind: 'open'
          }
        }
      }
    },
    propertiesSpherica: {
      headerCloseIconText: 'cells-molecule-header-spherica-close'
    }
  };

  const ANALYTICS_MANAGER_COMPONENT = {
    zone: 'app__main',
    type: 'DM',
    familyPath: '@glomo-web-components/glomo-analytics-mobile-top-up-manager',
    tag: 'glomo-analytics-mobile-top-up-manager-mx',
    render: 'litElement',
    properties: {
      cellsConnections: {
        in: {
          [getChannelName('all_accounts')]: {
            bind: 'allAccounts'
          },
          [getChannelName('set_accounts')]: {
            bind: 'accounts'
          },
          [getChannelName('account_selected')]: {
            bind: 'setFirstStep'
          },
          [getChannelName('set_selected_account_info')]: {
            bind: 'setFirstStep'
          },
          [getChannelName('set_recipient_selected_properties')]: {
            bind: 'setThirdStep'
          },
          [getChannelName('selected_amount')]: {
            bind: 'summaryStep'
          },
          open_sign_modal_mobile_top_up: {
            bind: 'viewOTP'
          },
          [getChannelName('notify_is_success')]: {
            bind: 'appCompleted'
          }
        },
        out: {
          analytics_selected_account_step_mobile_top_up: {
            bind: 'analytics-selected-account',
            analytics: ANALYTICS._getAppSteps('appStep1Started')
          },
          analytics_destination_step_mobile_top_up: {
            bind: 'analytics-destination-step',
            analytics: ANALYTICS._getAppSteps('appStep2Destination')
          },
          analytics_amount_step_mobile_top_up: {
            bind: 'analytics-amount-step',
            analytics: ANALYTICS._getAppSteps('appStep3Amount')
          },
          analytics_summary_mobile_top_up: {
            bind: 'analytics-symmary-view',
            analytics: ANALYTICS._getAppSteps('appStep4Summary')
          },
          analytics_otp_mobile_top_up: {
            bind: 'analytics-otp-modal',
            analytics: ANALYTICS._getAppSteps('appStep5Sign')
          },
          analytics_app_completed: {
            bind: 'analytics-app-completed',
            analytics: ANALYTICS.APP_COMPLETED
          }
        }
      }
    }
  };

  SPINNER.properties.cellsConnections.in = {
    ...SPINNER.properties.cellsConnections.in,
    [getChannelName('set_spinner_properties')]: {
      bind: 'setProperties'
    }
  };

  const BASE = {
    hash: 'mobile-top-up',
    currentPage: {
      url: '/mobile-top-up'
    },
    pages: PAGES,
    template: OPX_TEMPLATE_COMPONENT,
    components: [
      LIFE_CYCLE_COMPONENT,
      NAVIGATION_HANDLER,
      HEADER_COMPONENT,
      MOBILE_DM_COMPONENT,
      MOBILE_OPX_DM_COMPONENT,
      ACCOUNTS_STEP_COMPONENT,
      PRODUCT_SELECTOR_MODAL_COMPONENT,
      STEP_RECIPIENT_SELECTOR_COMPONENT,
      AMOUNT_STEP_COMPONENT,
      OPERATION_SUMMARY_COMPONENT,
      RECIPIENT_MODAL_COMPONENT,
      RECIPIENT_MOBILE_TOP_UP_COMPONENT,
      CONTACTS_SELECTOR_COMPONENT,
      CONTACTS_MODAL_RECIPIENT_COMPONENT,
      MODAL_SELECTOR_COMPONENT,
      SERVICE_PROVIDERS_DM_COMPONENT,
      SPINNER,
      DM_APIS_LIMITS_COMPONENT,
      DM_APIS_OPERATION_REGISTRIES_COMPONENT,
      SAVING_CONTACT_MESSAGE_COMPONENT,
      CONTACTS_BOOK_DM_COMPONENT,
      CONTACTS_AGENDA_DM_COMPONENT,
      CAMPAIGNS_DM_COMPONENT,
      ANALYTICS_MANAGER_COMPONENT
    ]
  };

  if (CONFIG.native) {
    BASE.components.push(MOBILE_PERMISSIONS_PLUGIN_COMPONENT, MOBILE_CONTACTS_DM_COMPONENT);
  }

  addRetryErrors(BASE)([
    {
      id: 'add-contact-mobile-error',
      acceptRetry: { bind: 'addNewContact', component: 'glomo-mobile-top-up-manager-mx' },
      cancelRetry: { bind: 'sendFormBodyAddContact', component: 'glomo-mobile-top-up-manager-mx' },
      acceptCallForHelp: { bind: 'sendFormBodyAddContact', component: 'glomo-mobile-top-up-manager-mx' }
    }
  ]);
  addCommonErrors(BASE.components);

  const signConnectorTopUp = require('./common/_sign-connector')(CONFIG)(BASE);
  signConnectorTopUp('glomo-mobile-top-up-manager-mx', PAGE_NAME, ['mobile-top-up-created', 'error-on-create-mobile-top-up']);

  const signConnectorRegistries = require('./common/_sign-connector')(CONFIG)(BASE);
  signConnectorRegistries('cells-dm-global-apis-operation-registries', PAGE_NAME, ['success-on-post-operation-registries-data', 'error-on-post-operation-registries-data']);

  const connectionsOut = UTILS.connectionsOut(BASE);
  connectionsOut('cells-sign-operation-dm-mx').open_sign_modal_mobile_top_up = {
    bind: 'signature-required'
  };

  if (isSpherica) {
    BASE.components.push(glomoAlertManagerSpherica);
  } else {
    BASE.components.push(HEADER_TEXT_COMPONENT, HEADER_CONTACTS_COMPONENT);
  }

  return sphericaPageUtils.spherize(BASE);
};
